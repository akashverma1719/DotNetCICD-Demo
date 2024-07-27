var add_Reduction_kharif_count = 0;
var add_Reduction_kharif_count1 = 0;
var add_Reduction_kharif_count2 = 0;
var add_Reduction_kharif_count3 = 0;
var add_Reduction_kharif_count4 = 0;
var add_Reduction_kharif_count5 = 0;


var add_Reduction_rabi_count = 0;
var add_Reduction_rabi_count1 = 0;
var add_Reduction_rabi_count2 = 0;
var add_Reduction_rabi_count3 = 0;
var add_Reduction_rabi_count4 = 0;
var add_Reduction_rabi_count5 = 0;


var add_Reduction_summer_count = 0;
var add_Reduction_summer_count1 = 0;
var add_Reduction_summer_count2 = 0;
var add_Reduction_summer_count3 = 0;
var add_Reduction_summer_count4 = 0;
var add_Reduction_summer_count5 = 0;




function Reduction_Kharif_AddCrop() {

    if (add_Reduction_kharif_count1 == 1) {
        $('#Reduction_crp1').show();

        var s11 = "reduction_kharif_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area1" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_kharif_othercrop_quantum_uservalue1" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_kharif_othercrop_water_req1" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Reduction_crp1').html(ass);
        add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
        add_Reduction_kharif_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("reduction_kharif_othercrop_name1").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_area1").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue1").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_water_req1").disabled = true;

        //}
    }

    else if (add_Reduction_kharif_count2 == 2) {
        $('#Reduction_crp2').show();

        var s11 = "reduction_kharif_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area2" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_kharif_othercrop_quantum_uservalue2" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_kharif_othercrop_water_req2" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Reduction_crp2').html(ass);
        add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
        add_Reduction_kharif_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_kharif_othercrop_name2").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_area2").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue2").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Reduction_kharif_count3 == 3) {
        $('#Reduction_crp3').show();
        var s11 = "reduction_kharif_othercrop_area3";

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area3" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_kharif_othercrop_quantum_uservalue3" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_kharif_othercrop_water_req3" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Reduction_crp3').html(ass);
        add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
        add_Reduction_kharif_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_kharif_othercrop_name3").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_area3").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue3").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Reduction_kharif_count4 == 4) {
        $('#Reduction_crp4').show();
        var s11 = "reduction_kharif_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area4" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_kharif_othercrop_quantum_uservalue4" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_kharif_othercrop_water_req4" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Reduction_crp4').html(ass);
        add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
        add_Reduction_kharif_count4 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_kharif_othercrop_name4").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_area4").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue4").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Reduction_kharif_count5 == 5) {
        $('#Reduction_crp5').show();
        var s11 = "reduction_kharif_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area5" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_kharif_othercrop_quantum_uservalue5" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_kharif_othercrop_water_req5" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Reduction_crp5').html(ass);
        $('#Reduction_Kharif_AddCrop').hide();
        add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
        add_Reduction_kharif_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_kharif_othercrop_name5").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_area5").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue5").disabled = true;
        //    document.getElementById("reduction_kharif_othercrop_water_req5").disabled = true;
        //}
    }
    if (add_Reduction_kharif_count == 5) {
        $('#Reduction_Kharif_AddCrop').hide();
    }
}

function Reduction_Rabi_AddCrop() {

    if (add_Reduction_rabi_count1 == 1) {

        $('#Reduction_Rabi_crp1').show();

        var s11 = "reduction_rabi_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area1" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_rabi_othercrop_quantum_uservalue1" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_rabi_othercrop_water_req1" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Reduction_Rabi_crp1').html(ass);
        add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
        add_Reduction_rabi_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("reduction_rabi_othercrop_name1").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_area1").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue1").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_water_req1").disabled = true;

        //}
    }
    else if (add_Reduction_rabi_count2 == 2) {
        $('#Reduction_Rabi_crp2').show();

        var s11 = "reduction_rabi_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area2" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_rabi_othercrop_quantum_uservalue2" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_rabi_othercrop_water_req2" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Reduction_Rabi_crp2').html(ass);
        add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
        add_Reduction_rabi_count2 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_rabi_othercrop_name2").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_area2").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue2").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Reduction_rabi_count3 == 3) {
        $('#Reduction_Rabi_crp3').show();

        var s11 = "reduction_rabi_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area3" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_rabi_othercrop_quantum_uservalue3" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_rabi_othercrop_water_req3" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';
        $('#Reduction_Rabi_crp3').html(ass);
        add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
        add_Reduction_rabi_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_rabi_othercrop_name3").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_area3").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue3").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Reduction_rabi_count4 == 4) {
        $('#Reduction_Rabi_crp4').show();

        var s11 = "reduction_rabi_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area4" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_rabi_othercrop_quantum_uservalue4" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_rabi_othercrop_water_req4" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Reduction_Rabi_crp4').html(ass);
        add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
        add_Reduction_rabi_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_rabi_othercrop_name4").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_area4").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue4").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Reduction_rabi_count5 == 5) {
        $('#Reduction_Rabi_crp5').show();
        var s11 = "reduction_rabi_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area5" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_rabi_othercrop_quantum_uservalue5" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_rabi_othercrop_water_req5" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Reduction_Rabi_crp5').html(ass);
        add_Reduction_rabi_count5 = 0;
        $('#Reduction_Rabi_AddCrop').hide();
        add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_rabi_othercrop_name5").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_area5").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue5").disabled = true;
        //    document.getElementById("reduction_rabi_othercrop_water_req5").disabled = true;
        //}

    }
    if (add_Reduction_rabi_count == 5) {
        $('#Reduction_Rabi_AddCrop').hide();
    }
}


function Reduction_Summer_AddCrop() {

    if (add_Reduction_summer_count1 == 1) {

        $('#Reduction_Summer_crp1').show();

        var s11 = "reduction_summer_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area1" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_summer_othercrop_quantum_uservalue1" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_summer_othercrop_water_req1" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Reduction_Summer_crp1').html(ass);
        add_Reduction_summer_count = add_Reduction_summer_count + 1;
        add_Reduction_summer_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("reduction_summer_othercrop_name1").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_area1").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_quantum_uservalue1").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_water_req1").disabled = true;

        //}
    }
    else if (add_Reduction_summer_count2 == 2) {
        $('#Reduction_Summer_crp2').show();

        var s11 = "reduction_summer_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area2" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_summer_othercrop_quantum_uservalue2" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_summer_othercrop_water_req2" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Reduction_Summer_crp2').html(ass);
        add_Reduction_summer_count = add_Reduction_summer_count + 1;
        add_Reduction_summer_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_summer_othercrop_name2").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_area2").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_quantum_uservalue2").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Reduction_summer_count3 == 3) {
        $('#Reduction_Summer_crp3').show();

        var s11 = "reduction_summer_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area3" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_summer_othercrop_quantum_uservalue3" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_summer_othercrop_water_req3" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Reduction_Summer_crp3').html(ass);
        add_Reduction_summer_count = add_Reduction_summer_count + 1;
        add_Reduction_summer_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_summer_othercrop_name3").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_area3").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_quantum_uservalue3").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Reduction_summer_count4 == 4) {
        $('#Reduction_Summer_crp4').show();

        var s11 = "reduction_summer_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area4" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_summer_othercrop_quantum_uservalue4" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_summer_othercrop_water_req4" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Reduction_Summer_crp4').html(ass);
        add_Reduction_summer_count = add_Reduction_summer_count + 1;
        add_Reduction_summer_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_summer_othercrop_name4").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_area4").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_quantum_uservalue4").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Reduction_summer_count5 == 5) {
        $('#Reduction_Summer_crp5').show();
        var s11 = "reduction_summer_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area5" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li> <input type="text" class="form-control decimal" id="reduction_summer_othercrop_quantum_uservalue5" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
            '</li><li><input type="text" id="reduction_summer_othercrop_water_req5" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Reduction_Summer_crp5').html(ass);
        $('#Reduction_Summer_AddCrop').hide();
        add_Reduction_summer_count = add_Reduction_summer_count + 1;
        add_Reduction_summer_count5 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("reduction_summer_othercrop_name5").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_area5").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_quantum_uservalue5").disabled = true;
        //    document.getElementById("reduction_summer_othercrop_water_req5").disabled = true;
        //}

    }

    if (add_Reduction_summer_count == 5) {
        $('#Reduction_Summer_AddCrop').hide();
    }
}

function ReductionInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/ReductionInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            add_Reduction_kharif_count = 0;
            add_Reduction_kharif_count1 = 0;
            add_Reduction_kharif_count2 = 0;
            add_Reduction_kharif_count3 = 0;
            add_Reduction_kharif_count4 = 0;
            add_Reduction_kharif_count5 = 0;


            add_Reduction_rabi_count = 0;
            add_Reduction_rabi_count1 = 0;
            add_Reduction_rabi_count2 = 0;
            add_Reduction_rabi_count3 = 0;
            add_Reduction_rabi_count4 = 0;
            add_Reduction_rabi_count5 = 0;


            add_Reduction_summer_count = 0;
            add_Reduction_summer_count1 = 0;
            add_Reduction_summer_count2 = 0;
            add_Reduction_summer_count3 = 0;
            add_Reduction_summer_count4 = 0;
            add_Reduction_summer_count5 = 0;
            //if (response == "Error") {
            //    window.location = "/WSPHome/WspDemandside";
            //}
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response != "NO") {

                if (response.reduction_kharif_othercrop_name1 == null || response.reduction_kharif_othercrop_name1 == "") {
                    add_Reduction_kharif_count1 = 1;
                }
                else {
                    add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
                }

                if (response.reduction_kharif_othercrop_name2 == null || response.reduction_kharif_othercrop_name2 == "") {
                    add_Reduction_kharif_count2 = 2;
                } else {
                    add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
                }

                if (response.reduction_kharif_othercrop_name3 == null || response.reduction_kharif_othercrop_name3 == "") {
                    add_Reduction_kharif_count3 = 3;
                } else {
                    add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
                }

                if (response.reduction_kharif_othercrop_name4 == null || response.reduction_kharif_othercrop_name4 == "") {
                    add_Reduction_kharif_count4 = 4;
                } else {
                    add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
                }
                if (response.reduction_kharif_othercrop_name5 == null || response.reduction_kharif_othercrop_name5 == "") {
                    add_Reduction_kharif_count5 = 5;
                }
                else {
                    add_Reduction_kharif_count = add_Reduction_kharif_count + 1;
                }
                if (add_Reduction_kharif_count == 5) {

                    $('#Reduction_Kharif_AddCrop').hide();
                }

                if (response.reduction_kharif_othercrop_name1 != null && response.reduction_kharif_othercrop_name1 != "null" && response.reduction_kharif_othercrop_name1 != "") {

                    var reduction_kharif_othercrop_area1 = "";
                    var reduction_kharif_othercrop_quantum_uservalue1 = "";
                    var reduction_kharif_othercrop_water_req1 = "";
                    if (response.reduction_kharif_othercrop_area1 != null && response.reduction_kharif_othercrop_area1 != "") {
                        reduction_kharif_othercrop_area1 = response.reduction_kharif_othercrop_area1;
                    }
                    if (response.reduction_kharif_othercrop_quantum_uservalue1 != null && response.reduction_kharif_othercrop_quantum_uservalue1 != "") {
                        reduction_kharif_othercrop_quantum_uservalue1 = response.reduction_kharif_othercrop_quantum_uservalue1;
                    }
                    if (response.reduction_kharif_othercrop_water_req1 != null && response.reduction_kharif_othercrop_water_req1 != "") {
                        reduction_kharif_othercrop_water_req1 = response.reduction_kharif_othercrop_water_req1;
                    }
                    var s11 = "reduction_kharif_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_kharif_othercrop_name1 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_kharif_othercrop_name1 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area1" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_kharif_othercrop_area1 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_kharif_othercrop_quantum_uservalue1 + '" id="reduction_kharif_othercrop_quantum_uservalue1" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_kharif_othercrop_water_req1 + '" id="reduction_kharif_othercrop_water_req1" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Reduction_crp1').html(ass);
                    $('#reduction_kharif_othercrop_name1').hide();

                    $('#Reduction_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("reduction_kharif_othercrop_name1").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_area1").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue1").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_water_req1").disabled = true;

                    //}
                }

                if (response.reduction_kharif_othercrop_name2 != null && response.reduction_kharif_othercrop_name2 != "null" && response.reduction_kharif_othercrop_name2 != "") {
                    var reduction_kharif_othercrop_area2 = "";
                    var reduction_kharif_othercrop_quantum_uservalue2 = "";
                    var reduction_kharif_othercrop_water_req2 = "";
                    if (response.reduction_kharif_othercrop_area2 != null && response.reduction_kharif_othercrop_area2 != "") {
                        reduction_kharif_othercrop_area2 = response.reduction_kharif_othercrop_area2;
                    }
                    if (response.reduction_kharif_othercrop_quantum_uservalue2 != null && response.reduction_kharif_othercrop_quantum_uservalue2 != "") {
                        reduction_kharif_othercrop_quantum_uservalue2 = response.reduction_kharif_othercrop_quantum_uservalue2;
                    }
                    if (response.reduction_kharif_othercrop_water_req2 != null && response.reduction_kharif_othercrop_water_req2 != "") {
                        reduction_kharif_othercrop_water_req2 = response.reduction_kharif_othercrop_water_req2;
                    }

                    var s11 = "reduction_kharif_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_kharif_othercrop_name2 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_kharif_othercrop_name2 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area2" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_kharif_othercrop_area2 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_kharif_othercrop_quantum_uservalue2 + '" id="reduction_kharif_othercrop_quantum_uservalue2" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_kharif_othercrop_water_req2 + '" id="reduction_kharif_othercrop_water_req2" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Reduction_crp2').html(ass);
                    $('#reduction_kharif_othercrop_name2').hide();
                    $('#Reduction_crp2').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_kharif_othercrop_name2").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_area2").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue2").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_water_req2").disabled = true;


                    //}
                }
                if (response.reduction_kharif_othercrop_name3 != null && response.reduction_kharif_othercrop_name3 != "null" && response.reduction_kharif_othercrop_name3 != "") {

                    var reduction_kharif_othercrop_area3 = "";
                    var reduction_kharif_othercrop_quantum_uservalue3 = "";
                    var reduction_kharif_othercrop_water_req3 = "";
                    if (response.reduction_kharif_othercrop_area3 != null && response.reduction_kharif_othercrop_area3 != "") {
                        reduction_kharif_othercrop_area3 = response.reduction_kharif_othercrop_area3;
                    }
                    if (response.reduction_kharif_othercrop_quantum_uservalue3 != null && response.reduction_kharif_othercrop_quantum_uservalue3 != "") {
                        reduction_kharif_othercrop_quantum_uservalue3 = response.reduction_kharif_othercrop_quantum_uservalue3;
                    }
                    if (response.reduction_kharif_othercrop_water_req3 != null && response.reduction_kharif_othercrop_water_req3 != "") {
                        reduction_kharif_othercrop_water_req3 = response.reduction_kharif_othercrop_water_req3;
                    }

                    var s11 = "reduction_kharif_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_kharif_othercrop_name3 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_kharif_othercrop_name3 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area3" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_kharif_othercrop_area3 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_kharif_othercrop_quantum_uservalue3 + '" id="reduction_kharif_othercrop_quantum_uservalue3" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_kharif_othercrop_water_req3 + '" id="reduction_kharif_othercrop_water_req3" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Reduction_crp3').html(ass);
                    $('#reduction_kharif_othercrop_name3').hide();
                    $('#Reduction_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_kharif_othercrop_name3").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_area3").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue3").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.reduction_kharif_othercrop_name4 != null && response.reduction_kharif_othercrop_name4 != "null" && response.reduction_kharif_othercrop_name4 != "") {

                    var reduction_kharif_othercrop_area4 = "";
                    var reduction_kharif_othercrop_quantum_uservalue4 = "";
                    var reduction_kharif_othercrop_water_req4 = "";
                    if (response.reduction_kharif_othercrop_area4 != null && response.reduction_kharif_othercrop_area4 != "") {
                        reduction_kharif_othercrop_area4 = response.reduction_kharif_othercrop_area4;
                    }
                    if (response.reduction_kharif_othercrop_quantum_uservalue4 != null && response.reduction_kharif_othercrop_quantum_uservalue4 != "") {
                        reduction_kharif_othercrop_quantum_uservalue4 = response.reduction_kharif_othercrop_quantum_uservalue4;
                    }
                    if (response.reduction_kharif_othercrop_water_req4 != null && response.reduction_kharif_othercrop_water_req4 != "") {
                        reduction_kharif_othercrop_water_req4 = response.reduction_kharif_othercrop_water_req4;
                    }
                    var s11 = "reduction_kharif_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_kharif_othercrop_name4 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_kharif_othercrop_name4 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area4" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_kharif_othercrop_area4 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_kharif_othercrop_quantum_uservalue4 + '" id="reduction_kharif_othercrop_quantum_uservalue4" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_kharif_othercrop_water_req4 + '" id="reduction_kharif_othercrop_water_req4" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Reduction_crp4').html(ass);
                    $('#reduction_kharif_othercrop_name4').hide();
                    $('#Reduction_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_kharif_othercrop_name4").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_area4").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue4").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.reduction_kharif_othercrop_name5 != null && response.reduction_kharif_othercrop_name5 != "null" && response.reduction_kharif_othercrop_name5 != "") {

                    var reduction_kharif_othercrop_area5 = "";
                    var reduction_kharif_othercrop_quantum_uservalue5 = "";
                    var reduction_kharif_othercrop_water_req5 = "";
                    if (response.reduction_kharif_othercrop_area5 != null && response.reduction_kharif_othercrop_area5 != "") {
                        reduction_kharif_othercrop_area5 = response.reduction_kharif_othercrop_area5;
                    }
                    if (response.reduction_kharif_othercrop_quantum_uservalue5 != null && response.reduction_kharif_othercrop_quantum_uservalue5 != "") {
                        reduction_kharif_othercrop_quantum_uservalue5 = response.reduction_kharif_othercrop_quantum_uservalue5;
                    }
                    if (response.reduction_kharif_othercrop_water_req5 != null && response.reduction_kharif_othercrop_water_req5 != "") {
                        reduction_kharif_othercrop_water_req5 = response.reduction_kharif_othercrop_water_req5;
                    }
                    var s11 = "reduction_kharif_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_kharif_othercrop_name5 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_kharif_othercrop_name5 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_kharif_othercrop_area5" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_kharif_othercrop_area5 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_kharif_othercrop_quantum_uservalue5 + '" id="reduction_kharif_othercrop_quantum_uservalue5" onkeyup="Reduction_Kharif_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_kharif_othercrop_water_req5 + '" id="reduction_kharif_othercrop_water_req5" onkeyup="Reduction_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Reduction_crp5').html(ass);
                    $('#reduction_kharif_othercrop_name5').hide();
                    $('#Reduction_crp5').show();
                    $('#Reduction_Kharif_AddCrop').hide();


                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_kharif_othercrop_name5").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_area5").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_quantum_uservalue5").disabled = true;
                    //    document.getElementById("reduction_kharif_othercrop_water_req5").disabled = true;
                    //}
                }



                //rabi
                if (response.reduction_rabi_othercrop_name1 == null || response.reduction_rabi_othercrop_name1 == "") {
                    add_Reduction_rabi_count1 = 1;
                }
                else {
                    add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
                }

                if (response.reduction_rabi_othercrop_name2 == null || response.reduction_rabi_othercrop_name2 == "") {
                    add_Reduction_rabi_count2 = 2;
                }
                else {
                    add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
                }
                if (response.reduction_rabi_othercrop_name3 == null || response.reduction_rabi_othercrop_name3 == "") {
                    add_Reduction_rabi_count3 = 3;
                }
                else {
                    add_Reduction_rabi_count = add_Reduction_rabi_count + 1;

                }

                if (response.reduction_rabi_othercrop_name4 == null || response.reduction_rabi_othercrop_name4 == "") {
                    add_Reduction_rabi_count4 = 4;
                }
                else {
                    add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
                }

                if (response.reduction_rabi_othercrop_name5 == null || response.reduction_rabi_othercrop_name5 == "") {
                    add_Reduction_rabi_count5 = 5;
                }
                else {
                    add_Reduction_rabi_count = add_Reduction_rabi_count + 1;
                }


                if (add_Reduction_rabi_count == 5) {

                    $('#Reduction_Rabi_AddCrop').hide();
                }

                if (response.reduction_rabi_othercrop_name1 != null && response.reduction_rabi_othercrop_name1 != "null" && response.reduction_rabi_othercrop_name1 != "") {

                    var reduction_rabi_othercrop_area1 = "";
                    var reduction_rabi_othercrop_quantum_uservalue1 = "";
                    var reduction_rabi_othercrop_water_req1 = "";
                    if (response.reduction_rabi_othercrop_area1 != null && response.reduction_rabi_othercrop_area1 != "") {
                        reduction_rabi_othercrop_area1 = response.reduction_rabi_othercrop_area1;
                    }
                    if (response.reduction_rabi_othercrop_quantum_uservalue1 != null && response.reduction_rabi_othercrop_quantum_uservalue1 != "") {
                        reduction_rabi_othercrop_quantum_uservalue1 = response.reduction_rabi_othercrop_quantum_uservalue1;
                    }
                    if (response.reduction_rabi_othercrop_water_req1 != null && response.reduction_rabi_othercrop_water_req1 != "") {
                        reduction_rabi_othercrop_water_req1 = response.reduction_rabi_othercrop_water_req1;
                    }
                    var s11 = "reduction_rabi_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_rabi_othercrop_name1 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_rabi_othercrop_name1 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area1" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_rabi_othercrop_area1 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_rabi_othercrop_quantum_uservalue1 + '" id="reduction_rabi_othercrop_quantum_uservalue1" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_rabi_othercrop_water_req1 + '" id="reduction_rabi_othercrop_water_req1" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Reduction_Rabi_crp1').html(ass);
                    $('#reduction_rabi_othercrop_name1').hide();

                    $('#Reduction_Rabi_crp1').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("reduction_rabi_othercrop_name1").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_area1").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue1").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_water_req1").disabled = true;

                    //}

                }

                if (response.reduction_rabi_othercrop_name2 != null && response.reduction_rabi_othercrop_name2 != "null" && response.reduction_rabi_othercrop_name2 != "") {

                    var reduction_rabi_othercrop_area2 = "";
                    var reduction_rabi_othercrop_quantum_uservalue2 = "";
                    var reduction_rabi_othercrop_water_req2 = "";
                    if (response.reduction_rabi_othercrop_area2 != null && response.reduction_rabi_othercrop_area2 != "") {
                        reduction_rabi_othercrop_area2 = response.reduction_rabi_othercrop_area2;
                    }
                    if (response.reduction_rabi_othercrop_quantum_uservalue2 != null && response.reduction_rabi_othercrop_quantum_uservalue2 != "") {
                        reduction_rabi_othercrop_quantum_uservalue2 = response.reduction_rabi_othercrop_quantum_uservalue2;
                    }
                    if (response.reduction_rabi_othercrop_water_req2 != null && response.reduction_rabi_othercrop_water_req2 != "") {
                        reduction_rabi_othercrop_water_req2 = response.reduction_rabi_othercrop_water_req2;
                    }
                    var s11 = "reduction_rabi_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_rabi_othercrop_name2 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_rabi_othercrop_name2 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area2" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_rabi_othercrop_area2 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_rabi_othercrop_quantum_uservalue2 + '" id="reduction_rabi_othercrop_quantum_uservalue2" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_rabi_othercrop_water_req2 + '" id="reduction_rabi_othercrop_water_req2" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';
                    $('#Reduction_Rabi_crp2').show();
                    $('#Reduction_Rabi_crp2').html(ass);
                    $('#reduction_rabi_othercrop_name2').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_rabi_othercrop_name2").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_area2").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue2").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_water_req2").disabled = true;

                    //}
                }
                if (response.reduction_rabi_othercrop_name3 != null && response.reduction_rabi_othercrop_name3 != "null" && response.reduction_rabi_othercrop_name3 != "") {
                    var reduction_rabi_othercrop_area3 = "";
                    var reduction_rabi_othercrop_quantum_uservalue3 = "";
                    var reduction_rabi_othercrop_water_req3 = "";
                    if (response.reduction_rabi_othercrop_area3 != null && response.reduction_rabi_othercrop_area3 != "") {
                        reduction_rabi_othercrop_area3 = response.reduction_rabi_othercrop_area3;
                    }
                    if (response.reduction_rabi_othercrop_quantum_uservalue3 != null && response.reduction_rabi_othercrop_quantum_uservalue3 != "") {
                        reduction_rabi_othercrop_quantum_uservalue3 = response.reduction_rabi_othercrop_quantum_uservalue3;
                    }
                    if (response.reduction_rabi_othercrop_water_req3 != null && response.reduction_rabi_othercrop_water_req3 != "") {
                        reduction_rabi_othercrop_water_req3 = response.reduction_rabi_othercrop_water_req3;
                    }
                    var s11 = "reduction_rabi_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_rabi_othercrop_name3 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_rabi_othercrop_name3 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area3" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_rabi_othercrop_area3 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_rabi_othercrop_quantum_uservalue3 + '" id="reduction_rabi_othercrop_quantum_uservalue3" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_rabi_othercrop_water_req3 + '" id="reduction_rabi_othercrop_water_req3" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Reduction_Rabi_crp3').show();
                    $('#Reduction_Rabi_crp3').html(ass);
                    $('#reduction_rabi_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_rabi_othercrop_name3").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_area3").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue3").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.reduction_rabi_othercrop_name4 != null && response.reduction_rabi_othercrop_name4 != "null" && response.reduction_rabi_othercrop_name4 != "") {

                    var reduction_rabi_othercrop_area4 = "";
                    var reduction_rabi_othercrop_quantum_uservalue4 = "";
                    var reduction_rabi_othercrop_water_req4 = "";
                    if (response.reduction_rabi_othercrop_area4 != null && response.reduction_rabi_othercrop_area4 != "") {
                        reduction_rabi_othercrop_area4 = response.reduction_rabi_othercrop_area4;
                    }
                    if (response.reduction_rabi_othercrop_quantum_uservalue4 != null && response.reduction_rabi_othercrop_quantum_uservalue4 != "") {
                        reduction_rabi_othercrop_quantum_uservalue4 = response.reduction_rabi_othercrop_quantum_uservalue4;
                    }
                    if (response.reduction_rabi_othercrop_water_req4 != null && response.reduction_rabi_othercrop_water_req4 != "") {
                        reduction_rabi_othercrop_water_req4 = response.reduction_rabi_othercrop_water_req4;
                    }
                    var s11 = "reduction_rabi_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_rabi_othercrop_name4 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_rabi_othercrop_name4 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area4" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_rabi_othercrop_area4 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_rabi_othercrop_quantum_uservalue4 + '" id="reduction_rabi_othercrop_quantum_uservalue4" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_rabi_othercrop_water_req4 + '" id="reduction_rabi_othercrop_water_req4" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Reduction_Rabi_crp4').show();

                    $('#Reduction_Rabi_crp4').html(ass);
                    $('#reduction_rabi_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_rabi_othercrop_name4").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_area4").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue4").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_water_req4").disabled = true;

                    //}
                }
                if (response.reduction_rabi_othercrop_name5 != null && response.reduction_rabi_othercrop_name5 != "null" && response.reduction_rabi_othercrop_name5 != "") {

                    var reduction_rabi_othercrop_area5 = "";
                    var reduction_rabi_othercrop_quantum_uservalue5 = "";
                    var reduction_rabi_othercrop_water_req5 = "";
                    if (response.reduction_rabi_othercrop_area5 != null && response.reduction_rabi_othercrop_area5 != "") {
                        reduction_rabi_othercrop_area5 = response.reduction_rabi_othercrop_area5;
                    }
                    if (response.reduction_rabi_othercrop_quantum_uservalue5 != null && response.reduction_rabi_othercrop_quantum_uservalue5 != "") {
                        reduction_rabi_othercrop_quantum_uservalue5 = response.reduction_rabi_othercrop_quantum_uservalue5;
                    }
                    if (response.reduction_rabi_othercrop_water_req5 != null && response.reduction_rabi_othercrop_water_req5 != "") {
                        reduction_rabi_othercrop_water_req5 = response.reduction_rabi_othercrop_water_req5;
                    }

                    var s11 = "reduction_rabi_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_rabi_othercrop_name5 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_rabi_othercrop_name5 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_rabi_othercrop_area5" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_rabi_othercrop_area5 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_rabi_othercrop_quantum_uservalue5 + '" id="reduction_rabi_othercrop_quantum_uservalue5" onkeyup="Reduction_Rabi_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_rabi_othercrop_water_req5 + '" id="reduction_rabi_othercrop_water_req5" onkeyup="Reduction_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Reduction_Rabi_crp5').show();
                    $('#Reduction_Rabi_crp5').html(ass);

                    $('#reduction_rabi_othercrop_name5').hide();

                    $('#Reduction_Rabi_AddCrop').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_rabi_othercrop_name5").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_area5").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_quantum_uservalue5").disabled = true;
                    //    document.getElementById("reduction_rabi_othercrop_water_req5").disabled = true;
                    //}
                }



                //Summer

                if (response.reduction_summer_othercrop_name1 == null || response.reduction_summer_othercrop_name1 == "") {
                    add_Reduction_summer_count1 = 1;
                }
                else {

                    add_Reduction_summer_count = add_Reduction_summer_count + 1;
                }

                if (response.reduction_summer_othercrop_name2 == null || response.reduction_summer_othercrop_name2 == "") {
                    add_Reduction_summer_count2 = 2;
                }
                else {
                    add_Reduction_summer_count = add_Reduction_summer_count + 1;
                }

                if (response.reduction_summer_othercrop_name3 == null || response.reduction_summer_othercrop_name3 == "") {
                    add_Reduction_summer_count3 = 3;
                }
                else {
                    add_Reduction_summer_count = add_Reduction_summer_count + 1;

                }
                if (response.reduction_summer_othercrop_name4 == null || response.reduction_summer_othercrop_name4 == "") {
                    add_Reduction_summer_count4 = 4;
                }
                else {
                    add_Reduction_summer_count = add_Reduction_summer_count + 1;
                }

                if (response.reduction_summer_othercrop_name5 == null || response.reduction_summer_othercrop_name5 == "") {
                    add_Reduction_summer_count5 = 5;
                }
                else {
                    add_Reduction_summer_count = add_Reduction_summer_count + 1;
                }
                if (add_Reduction_summer_count == 5) {

                    $('#Reduction_Summer_AddCrop').hide();
                }

                if (response.reduction_summer_othercrop_name1 != null && response.reduction_summer_othercrop_name1 != "null" && response.reduction_summer_othercrop_name1 != "") {

                    var reduction_summer_othercrop_area1 = "";
                    var reduction_summer_othercrop_quantum_uservalue1 = "";
                    var reduction_summer_othercrop_water_req1 = "";
                    if (response.reduction_summer_othercrop_area1 != null && response.reduction_summer_othercrop_area1 != "") {
                        reduction_summer_othercrop_area1 = response.reduction_summer_othercrop_area1;
                    }
                    if (response.reduction_summer_othercrop_quantum_uservalue1 != null && response.reduction_summer_othercrop_quantum_uservalue1 != "") {
                        reduction_summer_othercrop_quantum_uservalue1 = response.reduction_summer_othercrop_quantum_uservalue1;
                    }
                    if (response.reduction_summer_othercrop_water_req1 != null && response.reduction_summer_othercrop_water_req1 != "") {
                        reduction_summer_othercrop_water_req1 = response.reduction_summer_othercrop_water_req1;
                    }

                    var s11 = "reduction_summer_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_summer_othercrop_name1 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_summer_othercrop_name1 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area1" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_summer_othercrop_area1 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_summer_othercrop_quantum_uservalue1 + '" id="reduction_summer_othercrop_quantum_uservalue1" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_summer_othercrop_water_req1 + '" id="reduction_summer_othercrop_water_req1" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Reduction_Summer_crp1').html(ass);

                    $('#Reduction_Summer_crp1').show();

                    $('#reduction_summer_othercrop_name1').hide();


                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("reduction_summer_othercrop_name1").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_area1").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_quantum_uservalue1").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_water_req1").disabled = true;

                    //}
                }

                if (response.reduction_summer_othercrop_name2 != null && response.reduction_summer_othercrop_name2 != "null" && response.reduction_summer_othercrop_name2 != "") {

                    var reduction_summer_othercrop_area2 = "";
                    var reduction_summer_othercrop_quantum_uservalue2 = "";
                    var reduction_summer_othercrop_water_req2 = "";
                    if (response.reduction_summer_othercrop_area2 != null && response.reduction_summer_othercrop_area2 != "") {
                        reduction_summer_othercrop_area2 = response.reduction_summer_othercrop_area2;
                    }
                    if (response.reduction_summer_othercrop_quantum_uservalue2 != null && response.reduction_summer_othercrop_quantum_uservalue2 != "") {
                        reduction_summer_othercrop_quantum_uservalue2 = response.reduction_summer_othercrop_quantum_uservalue2;
                    }
                    if (response.reduction_summer_othercrop_water_req2 != null && response.reduction_summer_othercrop_water_req2 != "") {
                        reduction_summer_othercrop_water_req2 = response.reduction_summer_othercrop_water_req2;
                    }

                    var s11 = "reduction_summer_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_summer_othercrop_name2 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_summer_othercrop_name2 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area2" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_summer_othercrop_area2 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_summer_othercrop_quantum_uservalue2 + '" id="reduction_summer_othercrop_quantum_uservalue2" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_summer_othercrop_water_req2 + '" id="reduction_summer_othercrop_water_req2" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Reduction_Summer_crp2').html(ass);
                    $('#Reduction_Summer_crp2').show();

                    $('#reduction_summer_othercrop_name2').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_summer_othercrop_name2").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_area2").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_quantum_uservalue2").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_water_req2").disabled = true;

                    //}
                }
                if (response.reduction_summer_othercrop_name3 != null && response.reduction_summer_othercrop_name3 != "null" && response.reduction_summer_othercrop_name3 != "") {
                    var reduction_summer_othercrop_area3 = "";
                    var reduction_summer_othercrop_quantum_uservalue3 = "";
                    var reduction_summer_othercrop_water_req3 = "";
                    if (response.reduction_summer_othercrop_area3 != null && response.reduction_summer_othercrop_area3 != "") {
                        reduction_summer_othercrop_area3 = response.reduction_summer_othercrop_area3;
                    }
                    if (response.reduction_summer_othercrop_quantum_uservalue3 != null && response.reduction_summer_othercrop_quantum_uservalue3 != "") {
                        reduction_summer_othercrop_quantum_uservalue3 = response.reduction_summer_othercrop_quantum_uservalue3;
                    }
                    if (response.reduction_summer_othercrop_water_req3 != null && response.reduction_summer_othercrop_water_req3 != "") {
                        reduction_summer_othercrop_water_req3 = response.reduction_summer_othercrop_water_req3;
                    }
                    var s11 = "reduction_summer_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_summer_othercrop_name3 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_summer_othercrop_name3 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area3" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_summer_othercrop_area3 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_summer_othercrop_quantum_uservalue3 + '" id="reduction_summer_othercrop_quantum_uservalue3" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_summer_othercrop_water_req3 + '" id="reduction_summer_othercrop_water_req3" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Reduction_Summer_crp3').show();

                    $('#Reduction_Summer_crp3').html(ass);
                    $('#reduction_summer_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("reduction_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_area4").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_quantum_uservalue4").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.reduction_summer_othercrop_name4 != null && response.reduction_summer_othercrop_name4 != "null" && response.reduction_summer_othercrop_name4 != "") {

                    var reduction_summer_othercrop_area4 = "";
                    var reduction_summer_othercrop_quantum_uservalue4 = "";
                    var reduction_summer_othercrop_water_req4 = "";
                    if (response.reduction_summer_othercrop_area4 != null && response.reduction_summer_othercrop_area4 != "") {
                        reduction_summer_othercrop_area4 = response.reduction_summer_othercrop_area4;
                    }
                    if (response.reduction_summer_othercrop_quantum_uservalue4 != null && response.reduction_summer_othercrop_quantum_uservalue4 != "") {
                        reduction_summer_othercrop_quantum_uservalue4 = response.reduction_summer_othercrop_quantum_uservalue4;
                    }
                    if (response.reduction_summer_othercrop_water_req4 != null && response.reduction_summer_othercrop_water_req4 != "") {
                        reduction_summer_othercrop_water_req4 = response.reduction_summer_othercrop_water_req4;
                    }
                    var s11 = "reduction_summer_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_summer_othercrop_name4 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_summer_othercrop_name4 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area4" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_summer_othercrop_area4 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_summer_othercrop_quantum_uservalue4 + '" id="reduction_summer_othercrop_quantum_uservalue4" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_summer_othercrop_water_req4 + '" id="reduction_summer_othercrop_water_req4" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Reduction_Summer_crp4').show();

                    $('#Reduction_Summer_crp4').html(ass);
                    $('#reduction_summer_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_area4").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_quantum_uservalue4").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.reduction_summer_othercrop_name5 != null && response.reduction_summer_othercrop_name5 != "null" && response.reduction_summer_othercrop_name5 != "") {

                    var reduction_summer_othercrop_area5 = "";
                    var reduction_summer_othercrop_quantum_uservalue5 = "";
                    var reduction_summer_othercrop_water_req5 = "";
                    if (response.reduction_summer_othercrop_area5 != null && response.reduction_summer_othercrop_area5 != "") {
                        reduction_summer_othercrop_area5 = response.reduction_summer_othercrop_area5;
                    }
                    if (response.reduction_summer_othercrop_quantum_uservalue5 != null && response.reduction_summer_othercrop_quantum_uservalue5 != "") {
                        reduction_summer_othercrop_quantum_uservalue5 = response.reduction_summer_othercrop_quantum_uservalue5;
                    }
                    if (response.reduction_summer_othercrop_water_req5 != null && response.reduction_summer_othercrop_water_req5 != "") {
                        reduction_summer_othercrop_water_req5 = response.reduction_summer_othercrop_water_req5;
                    }
                    var s11 = "reduction_summer_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.reduction_summer_othercrop_name5 + '<a href="#Filter_GW_SW" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Reduction_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="reduction_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" value="' + response.reduction_summer_othercrop_name5 + '" />' +
                        '<li><input type="text" class="form-control decimal" id="reduction_summer_othercrop_area5" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Crop Area(ha)" title="Crop Area(ha)" value="' + reduction_summer_othercrop_area5 + '">' +
                        '</li><li> <input type="text" class="form-control decimal" value="' + reduction_summer_othercrop_quantum_uservalue5 + '" id="reduction_summer_othercrop_quantum_uservalue5" onkeyup="Reduction_Summer_WaterRequire()" placeholder="Quantum of surface water proposed to be used (ha.m) " title="Quantum of surface water proposed to be used (ha.m)">' +
                        '</li><li><input type="text"  value="' + reduction_summer_othercrop_water_req5 + '" id="reduction_summer_othercrop_water_req5" onkeyup="Reduction_Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Reduction_Summer_crp5').show();
                    $('#Reduction_Summer_crp5').html(ass);
                    $('#reduction_summer_othercrop_name5').hide();
                    $('#Reduction_Summer_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("reduction_summer_othercrop_name5").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_area5").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_quantum_uservalue5").disabled = true;
                    //    document.getElementById("reduction_summer_othercrop_water_req5").disabled = true;
                    //}
                }


                $('#reduction_approx_estimated_cost').val(response.reduction_approx_estimated_cost);
                $('#reduction_cost_type').val(response.reduction_cost_type);

                $('#Reduction_kharif_Paddy_UserVale').val(response.reduction_kharif_paddy_crop_area);
                $('#Reduction_kharif_Paddy_FundingSource').val(response.reduction_kharif_paddy_fundingsource);
                $('#Reduction_kharif_Ragi_UserVale').val(response.reduction_kharif_ragi_crop_area);
                $('#Reduction_kharif_Ragi_FundingSource').val(response.reduction_kharif_ragi_fundingsource);

                $('#Reduction_kharif_Groundnut_UserVale').val(response.reduction_kharif_groundnut_crop_area);

                $('#Reduction_kharif_GroundNut_FundingSource').val(response.reduction_kharif_groundnut_fundingsource);
                $('#Reduction_kharif_Sugarcane_UserVale').val(response.reduction_kharif_sugarcane_crop_area);
                $('#Reduction_kharif_Sugarcane_FundingSource').val(response.reduction_kharif_sugarcane_fundingsource);
                $('#Reduction_kharif_Tomato_UserVale').val(response.reduction_kharif_tomoto_crop_area);
                $('#Reduction_kharif_Tomoto_FundingSource').val(response.reduction_kharif_tomoto_fundingsource);
                //$('#Reduction_kharif_Cabbage_UserVale').val(response.reduction_kharif_cabbage_crop_area);
                //$('#Reduction_kharif_Cabbage_FundingSource').val(response.reduction_kharif_cabbage_fundingsource);
                //$('#Reduction_kharif_Beans_UserVale').val(response.reduction_kharif_beans_crop_area);
                //$('#Reduction_kharif_Beans_FundingSource').val(response.reduction_kharif_beans_fundingsource);
                $('#Reduction_kharif_Floriculture_UserVale').val(response.reduction_kharif_floriculture_crop_area);
                $('#Reduction_kharif_Floriculture_FundingSource').val(response.reduction_kharif_floriculture_fundingsource);
                $('#Reduction_kharif_Sericulture_UserVale').val(response.reduction_kharif_sericulture_crop_area);
                $('#Reduction_kharif_Sericulture_FundingSource').val(response.reduction_kharif_sericulture_fundingsource);
                //$('#Reduction_kharif_Cucmber_UserVale').val(response.reduction_kharif_cucumber_crop_area);
                //$('#Reduction_kharif_Cucmber_FundingSource').val(response.reduction_kharif_cucumber_fundingsource);
                $('#Reduction_kharif_Banana_UserVale').val(response.reduction_kharif_banana_crop_area);
                $('#Reduction_kharif_Banana_FundingSource').val(response.reduction_kharif_banana_fundingsource);
                $('#Reduction_kharif_Fodder_UserVale').val(response.reduction_kharif_fodder_crop_area);
                $('#Reduction_kharif_Fodder_FundingSource').val(response.reduction_kharif_fodder_fundingsource);
                $('#Reduction_kharif_Maize_UserVale').val(response.reduction_kharif_maize_crop_area);
                $('#Reduction_kharif_Maize_FundingSource').val(response.reduction_kharif_maize_fundingsource);
                //$('#Reduction_kharif_Potato_UserVale').val(response.reduction_kharif_potato_crop_area);
                //$('#Reduction_kharif_Potato_FundingSource').val(response.reduction_kharif_potato_fundingsource);
                $('#Reduction_kharif_Chillies_UserVale').val(response.reduction_kharif_chillies_crop_area);
                $('#Reduction_kharif_Chillies_FundingSource').val(response.reduction_kharif_chillies_fundingsource);
                $('#Reduction_kharif_Cotton_UserVale').val(response.reduction_kharif_cotton_crop_area);
                $('#Reduction_kharif_Cotton_FundingSource').val(response.reduction_kharif_cotton_fundingsource);
                $('#Reduction_kharif_Melon_UserVale').val(response.reduction_kharif_melon_crop_area);
                $('#Reduction_kharif_Melon_FundingSource').val(response.reduction_kharif_melon_fundingsource);
                $('#Reduction_kharif_Citrus_UserVale').val(response.reduction_kharif_citrus_crop_area);
                $('#Reduction_kharif_Citrus_FundingSource').val(response.reduction_kharif_citrus_fundingsource);
                //$('#Reduction_kharif_Peanut_UserVale').val(response.reduction_kharif_peanut_crop_area);
                //$('#Reduction_kharif_Peanut_FundingSource').val(response.reduction_kharif_peanut_fundingsource);
                $('#Reduction_kharif_Horticulture_UserVale').val(response.reduction_kharif_horticulture_crop_area);
                $('#Reduction_kharif_Horticulture_FundingSource').val(response.reduction_kharif_horticulture_fundingsource);
                $('#Reduction_Rabi_Sericulture_UserVale').val(response.reduction_rabi_sericulture_crop_area);
                $('#Reduction_Rabi_Sericulture_FundingSource').val(response.reduction_rabi_sericulture_fundingsource);
                $('#Reduction_Rabi_Tomota_UserVale').val(response.reduction_rabi_tomoto_crop_area);
                $('#Reduction_Rabi_Tomota_FundingSource').val(response.reduction_rabi_tomoto_fundingsource);
                //$('#Reduction_Rabi_Cabbage_UserVale').val(response.reduction_rabi_cabbage_crop_area);
                //$('#Reduction_Rabi_Cabbage_FundingSource').val(response.reduction_rabi_cabbage_fundingsource);
                //$('#Reduction_Rabi_Beans_UserVale').val(response.reduction_rabi_beans_crop_area);
                //$('#Reduction_Rabi_Beans_FundingSource').val(response.reduction_rabi_beans_fundingsource);
                $('#Reduction_Rabi_Floriculture_UserVale').val(response.reduction_rabi_floriculture_crop_area);
                $('#Reduction_Rabi_Floriculture_FundingSource').val(response.reduction_rabi_floriculture_fundingsource);
                //$('#Reduction_Rabi_Potato_UserVale').val(response.reduction_rabi_potato_crop_area);
                //$('#Reduction_Rabi_Potato_FundingSource').val(response.reduction_rabi_potato_fundingsource);
                //$('#Reduction_Rabi_Cucumber_UserVale').val(response.reduction_rabi_cucumber_crop_area);
                //$('#Reduction_Rabi_Cucumber_FundingSource').val(response.reduction_rabi_cucumber_fundingsource);
                $('#Reduction_Rabi_Ragi_UserVale').val(response.reduction_rabi_ragi_crop_area);
                $('#Reduction_Rabi_Ragi_FundingSource').val(response.reduction_rabi_ragi_fundingsource);
                $('#Reduction_Rabi_Sugarcane_UserVale').val(response.reduction_rabi_sugarcane_crop_area);
                $('#Reduction_Rabi_Sugarcane_FundingSource').val(response.reduction_rabi_sugarcane_fundingsource);
                $('#Reduction_Rabi_Maize_UserVale').val(response.reduction_rabi_maize_crop_area);
                $('#Reduction_Rabi_Maize_FundingSource').val(response.reduction_rabi_maize_fundingsource);
                $('#Reduction_Rabi_Fodder_UserVale').val(response.reduction_rabi_fodder_crop_area);
                $('#Reduction_Rabi_Fodder_FundingSource').val(response.reduction_rabi_fodder_fundingsource);
                $('#Reduction_Rabi_Paddy_UserVale').val(response.reduction_rabi_paddy_crop_area);
                $('#Reduction_Rabi_Paddy_FundingSource').val(response.reduction_rabi_paddy_fundingsource);
                $('#Reduction_Rabi_Alfalfa_UserVale').val(response.reduction_rabi_alfalfa_crop_area);
                $('#Reduction_Rabi_Alfalfa_FundingSource').val(response.reduction_rabi_alfalfa_fundingsource);
                //$('#Reduction_Rabi_Onion_UserVale').val(response.reduction_rabi_onion_crop_area);
                //$('#Reduction_Rabi_Onion_FundingSource').val(response.reduction_rabi_onion_fundingsource);
                $('#Reduction_Rabi_Hortculture_UserVale').val(response.reduction_rabi_horticulture_crop_area);
                $('#Reduction_Rabi_Hortculture_FundingSource').val(response.reduction_rabi_horticulture_fundingsource);
                $('#Reduction_Rabi_Sunflower_UserVale').val(response.reduction_rabi_sunflower_crop_area);
                $('#Reduction_Rabi_Sunflower_FundingSource').val(response.reduction_rabi_sunflower_fundingsource);
                $('#Reduction_Summer_Sericulture_UserVale').val(response.reduction_summer_sericulture_crop_area);
                $('#Reduction_summer_Sericulture_FundingSource').val(response.reduction_summer_sericulture_fundingsource);
                $('#Reduction_Summer_Tomota_UserVale').val(response.reduction_summer_tomoto_crop_area);
                $('#Reduction_summer_Tomota_FundingSource').val(response.reduction_summer_tomoto_fundingsource);
                //$('#Reduction_Summer_Cabbage_UserVale').val(response.reduction_summer_cabbage_crop_area);
                //$('#Reduction_summer_Cabbage_FundingSource').val(response.reduction_summer_cabbage_fundingsource);
                //$('#Reduction_Summer_Beans_UserVale').val(response.reduction_summer_beans_crop_area);
                //$('#Reduction_summer_Beans_FundingSource').val(response.reduction_summer_beans_fundingsource);
                $('#Reduction_Summer_Floriculture_UserVale').val(response.reduction_summer_floriculture_crop_area);
                $('#Reduction_summer_Floriculture_FundingSource').val(response.reduction_summer_floriculture_fundingsource);
                $('#Reduction_Summer_Maize_UserVale').val(response.reduction_summer_maize_crop_area);
                $('#Reduction_summer_Maize_FundingSource').val(response.reduction_summer_maize_fundingsource);
                $('#Reduction_Summer_Fodder_UserVale').val(response.reduction_summer_fodder_crop_area);
                $('#Reduction_summer_Fodder_FundingSource').val(response.reduction_summer_fodder_fundingsource);
                $('#Reduction_Summer_Sugarcane_UserVale').val(response.reduction_summer_sugarcane_crop_area);
                $('#Reduction_summer_Sugarcane_FundingSource').val(response.reduction_summer_sugarcane_fundingsource);


                $('#reduction_summer_horticulture_crop_area').val(response.reduction_summer_horticulture_crop_area);
                $('#reduction_summer_horticulture_quantum_uservalue').val(response.reduction_summer_horticulture_quantum_uservalue);
                //$('#reduction_summer_horticulture_water_req').val(response.reduction_summer_horticulture_water_req);
                $('#reduction_summer_horticulture_waterdemand').text(response.reduction_summer_horticulture_waterdemand);
                $('#reduction_summer_horticulture_reduction_gw_demand').text(response.reduction_summer_horticulture_reduction_gw_demand);

                if (response.reduction_summer_horticulture_water_req != null && response.reduction_summer_horticulture_water_req != "") {
                    $('#reduction_summer_horticulture_water_req').val(response.reduction_summer_horticulture_water_req);
                }
                else {
                    $('#reduction_summer_horticulture_water_req').val(470);
                }




                $('#Reduction_kharif_paddy_Quantum_UserValue').val(response.reduction_kharif_paddy_quatum_value);
                $('#Reduction_kharif_Ragi_Quantum_UserValue').val(response.reduction_kharif_ragi_quatum_value);
                $('#Reduction_kharif_Groundnut_Quantum_UserValue').val(response.reduction_kharif_groundnut_quatum_value);
                $('#Reduction_kharif_Sugarcane_Quantum_UserValue').val(response.reduction_kharif_sugarcane_quatum_value);
                $('#Reduction_kharif_Tomato_Quantum_UserValue').val(response.reduction_kharif_tomoto_quatum_value);
                //$('#Reduction_kharif_Cabbage_Quantum_UserValue').val(response.reduction_kharif_cabbage_quatum_value);
                //$('#Reduction_kharif_Beans_Quantum_UserValue').val(response.reduction_kharif_beans_quatum_value);
                $('#Reduction_kharif_Floriculture_Quantum_UserValue').val(response.reduction_kharif_floriculture_quatum_value);
                $('#Reduction_kharif_Sericulture_Quantum_UserValue').val(response.reduction_kharif_sericulture_quatum_value);
                //$('#Reduction_kharif_Cucmber_Quantum_UserValue').val(response.reduction_kharif_cucumber_quatum_value);
                $('#Reduction_kharif_Banana_Quantum_UserValue').val(response.reduction_kharif_banana_quatum_value);
                $('#Reduction_kharif_Fodder_Quantum_UserValue').val(response.reduction_kharif_fodder_quatum_value);
                $('#Reduction_kharif_Maize_Quantum_UserValue').val(response.reduction_kharif_maize_quatum_value);
                //$('#Reduction_kharif_Potato_Quantum_UserValue').val(response.reduction_kharif_potato_quatum_value);
                $('#Reduction_kharif_Chillies_Quantum_UserValue').val(response.reduction_kharif_chillies_quatum_value);
                $('#Reduction_kharif_Cotton_Quantum_UserValue').val(response.reduction_kharif_cotton_quatum_value);
                $('#Reduction_kharif_Melon_Quantum_UserValue').val(response.reduction_kharif_melon_quatum_value);
                $('#Reduction_kharif_Citrus_Quantum_UserValue').val(response.reduction_kharif_citrus_quatum_value);
                //$('#Reduction_kharif_Peanut_Quantum_UserValue').val(response.reduction_kharif_peanut_quatum_value);
                $('#Reduction_kharif_Horticulture_Quantum_UserValue').val(response.reduction_kharif_horticulture_quatum_value);

                $('#Reduction_Rabi_Sericulture_Quantum_UserValue').val(response.reduction_rabi_sericulture_quatum_value);
                $('#Reduction_Rabi_Tomota_Quantum_UserValue').val(response.reduction_rabi_tomoto_quatum_value);
                //$('#Reduction_Rabi_Cabbage_Quantum_UserValue').val(response.reduction_rabi_cabbage_quatum_value);
                //$('#Reduction_Rabi_Beans_Quantum_UserValue').val(response.reduction_rabi_beans_quatum_value);
                $('#Reduction_Rabi_Floriculture_Quantum_UserValue').val(response.reduction_rabi_floriculture_quatum_value);
                //$('#Reduction_Rabi_Potato_Quantum_UserValue').val(response.reduction_rabi_potato_quatum_value);
                //$('#Reduction_Rabi_Cucumber_Quantum_UserValue').val(response.reduction_rabi_cucumber_quatum_value);
                $('#Reduction_Rabi_Ragi_Quantum_UserValue').val(response.reduction_rabi_ragi_quatum_value);
                $('#Reduction_Rabi_Sugarcane_Quantum_UserValue').val(response.reduction_rabi_sugarcane_quatum_value);
                $('#Reduction_Rabi_Maize_Quantum_UserValue').val(response.reduction_rabi_maize_quatum_value);
                $('#Reduction_Rabi_Fodder_Quantum_UserValue').val(response.reduction_rabi_fodder_quatum_value);
                $('#Reduction_Rabi_Paddy_Quantum_UserValue').val(response.reduction_rabi_paddy_quatum_value);
                $('#Reduction_Rabi_Alfalfa_Quantum_UserValue').val(response.reduction_rabi_alfalfa_quatum_value);
                //$('#Reduction_Rabi_Onion_Quantum_UserValue').val(response.reduction_rabi_onion_quatum_value);
                $('#Reduction_Rabi_Hortculture_Quantum_UserValue').val(response.reduction_rabi_horticulture_quatum_value);
                $('#Reduction_Rabi_Sunflower_Quantum_UserValue').val(response.reduction_rabi_sunflower_quatum_value);

                $('#Reduction_Summer_Sericulture_Quantum_UserValue').val(response.reduction_summer_sericulture_quatum_value);
                $('#Reduction_Summer_Tomota_Quantum_UserValue').val(response.reduction_summer_tomoto_quatum_value);
                //$('#Reduction_Summer_Cabbage_Quantum_UserValue').val(response.reduction_summer_cabbage_quatum_value);
                //$('#Reduction_Summer_Beans_Quantum_UserValue').val(response.reduction_summer_beans_quatum_value);

                $('#Reduction_Summer_Floriculture_Quantum_UserValue').val(response.reduction_summer_floriculture_quatum_value);

                $('#Reduction_Summer_Maize_Quantum_UserValue').val(response.reduction_summer_maize_quatum_value);
                $('#Reduction_Summer_Fodder_Quantum_UserValue').val(response.reduction_summer_fodder_quatum_value);
                $('#Reduction_Summer_Sugarcane_Quantum_UserValue').val(response.reduction_summer_sugarcane_quatum_value);


                $('#TotalAnnual_Reduction_Reduction').text(response.reduction_total_annual_waterdemand);

                //totals 
                $('#Reduction_Kharif_Water_demand1').text(response.reduction_kharif_total_kharifcrop_waterdemand);
                $('#Reduction_in_GW_through_kharif_surface_water1').text(response.reduction_kharif_total_reduc_gw_demand);
                $('#Reduction_Rabi_Water_demand').text(response.reduction_rabi_total_rabicrop_waterdemand);
                $('#Reduction_in_GW_through_Rabi_surface_water').text(response.reduction_rabi_total_reduc_gw_demand);
                $('#Reduction_SummerCrop_Water_demand').text(response.reduction_summer_total_summercrop_waterdemand);
                $('#Reduction_in_GW_through_Summer_surface_water').text(response.reduction_summer_total_reduc_gw_demand);

                //new columns water requirement
                if (response.reduction_kharif_paddy_water_req != null && response.reduction_kharif_paddy_water_req != "") {
                    $('#reduction_kharif_paddy_water_req').val(response.reduction_kharif_paddy_water_req);
                }
                else {
                    $('#reduction_kharif_paddy_water_req').val(1175);
                }

                if (response.reduction_kharif_ragi_water_req != null && response.reduction_kharif_ragi_water_req != "") {
                    $('#reduction_kharif_ragi_water_req').val(response.reduction_kharif_ragi_water_req);
                }
                else {
                    $('#reduction_kharif_ragi_water_req').val(550);
                }


                if (response.reduction_kharif_groundnut_water_req != null && response.reduction_kharif_groundnut_water_req != "") {
                    $('#reduction_kharif_groundnut_water_req').val(response.reduction_kharif_groundnut_water_req);
                }
                else {
                    $('#reduction_kharif_groundnut_water_req').val(525);
                }

                if (response.reduction_kharif_sugarcane_water_req != null && response.reduction_kharif_sugarcane_water_req != "") {
                    $('#reduction_kharif_sugarcane_water_req').val(response.reduction_kharif_sugarcane_water_req);
                }
                else {
                    $('#reduction_kharif_sugarcane_water_req').val(2000);
                }

                if (response.reduction_kharif_tomoto_water_req != null && response.reduction_kharif_tomoto_water_req != "") {
                    $('#reduction_kharif_tomoto_water_req').val(response.reduction_kharif_tomoto_water_req);
                }
                else {
                    $('#reduction_kharif_tomoto_water_req').val(500);
                }

                //if (response.reduction_kharif_cabbage_water_req != null && response.reduction_kharif_cabbage_water_req != "") {
                //    $('#reduction_kharif_cabbage_water_req').val(response.reduction_kharif_cabbage_water_req);
                //}
                //else {
                //    $('#reduction_kharif_cabbage_water_req').val(425);
                //}

                //if (response.reduction_kharif_beans_water_req != null && response.reduction_kharif_beans_water_req != "") {
                //    $('#reduction_kharif_beans_water_req').val(response.reduction_kharif_beans_water_req);
                //}
                //else {
                //    $('#reduction_kharif_beans_water_req').val(425);
                //}

                if (response.reduction_kharif_floriculture_water_req != null && response.reduction_kharif_floriculture_water_req != "") {
                    $('#reduction_kharif_floriculture_water_req').val(response.reduction_kharif_floriculture_water_req);
                }
                else {
                    $('#reduction_kharif_floriculture_water_req').val(1200);
                }

                if (response.reduction_kharif_sericulture_water_req != null && response.reduction_kharif_sericulture_water_req != "") {
                    $('#reduction_kharif_sericulture_water_req').val(response.reduction_kharif_sericulture_water_req);
                }
                else {
                    $('#reduction_kharif_sericulture_water_req').val(1550);
                }

                //if (response.reduction_kharif_cucumber_water_req != null && response.reduction_kharif_cucumber_water_req != "") {
                //    $('#reduction_kharif_cucumber_water_req').val(response.reduction_kharif_cucumber_water_req);
                //}
                //else {
                //    $('#reduction_kharif_cucumber_water_req').val(400);
                //}


                if (response.reduction_kharif_banana_water_req != null && response.reduction_kharif_banana_water_req != "") {
                    $('#reduction_kharif_banana_water_req').val(response.reduction_kharif_banana_water_req);
                }
                else {
                    $('#reduction_kharif_banana_water_req').val(1700);
                }


                if (response.reduction_kharif_fodder_water_req != null && response.reduction_kharif_fodder_water_req != "") {
                    $('#reduction_kharif_fodder_water_req').val(response.reduction_kharif_fodder_water_req);
                }
                else {
                    $('#reduction_kharif_fodder_water_req').val(1400);
                }


                if (response.reduction_kharif_maize_water_req != null && response.reduction_kharif_maize_water_req != "") {
                    $('#reduction_kharif_maize_water_req').val(response.reduction_kharif_maize_water_req);
                }
                else {
                    $('#reduction_kharif_maize_water_req').val(650);
                }


                //if (response.reduction_kharif_potato_water_req != null && response.reduction_kharif_potato_water_req != "") {
                //    $('#reduction_kharif_potato_water_req').val(response.reduction_kharif_potato_water_req);
                //}
                //else {
                //    $('#reduction_kharif_potato_water_req').val(600);
                //}


                if (response.reduction_kharif_chillies_water_req != null && response.reduction_kharif_chillies_water_req != "") {
                    $('#reduction_kharif_chillies_water_req').val(response.reduction_kharif_chillies_water_req);
                }
                else {
                    $('#reduction_kharif_chillies_water_req').val(230);
                }


                if (response.reduction_kharif_cotton_water_req != null && response.reduction_kharif_cotton_water_req != "") {
                    $('#reduction_kharif_cotton_water_req').val(response.reduction_kharif_cotton_water_req);
                }
                else {
                    $('#reduction_kharif_cotton_water_req').val(1000);
                }
                if (response.reduction_kharif_melon_water_req != null && response.reduction_kharif_melon_water_req != "") {
                    $('#reduction_kharif_melon_water_req').val(response.reduction_kharif_melon_water_req);
                }
                else {
                    $('#reduction_kharif_melon_water_req').val(500);
                }
                if (response.reduction_kharif_citrus_water_req != null && response.reduction_kharif_citrus_water_req != "") {
                    $('#reduction_kharif_citrus_water_req').val(response.reduction_kharif_citrus_water_req);
                }
                else {
                    $('#reduction_kharif_citrus_water_req').val(1050);
                }
                //if (response.reduction_kharif_peanut_water_req != null && response.reduction_kharif_peanut_water_req != "") {
                //    $('#reduction_kharif_peanut_water_req').val(response.reduction_kharif_peanut_water_req);
                //}
                //else {
                //    $('#reduction_kharif_peanut_water_req').val(600);
                //}
                if (response.reduction_kharif_horticulture_water_req != null && response.reduction_kharif_horticulture_water_req != "") {
                    $('#reduction_kharif_horticulture_water_req').val(response.reduction_kharif_horticulture_water_req);
                }
                else {
                    $('#reduction_kharif_horticulture_water_req').val(470);
                }
                if (response.reduction_rabi_sericulture_water_req != null && response.reduction_rabi_sericulture_water_req != "") {
                    $('#reduction_rabi_sericulture_water_req').val(response.reduction_rabi_sericulture_water_req);
                }
                else {
                    $('#reduction_rabi_sericulture_water_req').val(1550);
                }
                if (response.reduction_rabi_tomoto_water_req != null && response.reduction_rabi_tomoto_water_req != "") {
                    $('#reduction_rabi_tomoto_water_req').val(response.reduction_rabi_tomoto_water_req);
                }
                else {
                    $('#reduction_rabi_tomoto_water_req').val(500);
                }
                //if (response.reduction_rabi_cabbage_water_req != null && response.reduction_rabi_cabbage_water_req != "") {
                //    $('#reduction_rabi_cabbage_water_req').val(response.reduction_rabi_cabbage_water_req);
                //}
                //else {
                //    $('#reduction_rabi_cabbage_water_req').val(425);
                //}
                //if (response.reduction_rabi_beans_water_req != null && response.reduction_rabi_beans_water_req != "") {
                //    $('#reduction_rabi_beans_water_req').val(response.reduction_rabi_beans_water_req);
                //}
                //else {
                //    $('#reduction_rabi_beans_water_req').val(400);
                //}
                if (response.reduction_rabi_floriculture_water_req != null && response.reduction_rabi_floriculture_water_req != "") {
                    $('#reduction_rabi_floriculture_water_req').val(response.reduction_rabi_floriculture_water_req);
                }
                else {
                    $('#reduction_rabi_floriculture_water_req').val(1200);
                }
                //if (response.reduction_rabi_potato_water_req != null && response.reduction_rabi_potato_water_req != "") {
                //    $('#reduction_rabi_potato_water_req').val(response.reduction_rabi_potato_water_req);
                //}
                //else {
                //    $('#reduction_rabi_potato_water_req').val(600);
                //}
                //if (response.reduction_rabi_cucumber_water_req != null && response.reduction_rabi_cucumber_water_req != "") {
                //    $('#reduction_rabi_cucuber_water_req').val(response.reduction_rabi_cucumber_water_req);
                //}
                //else {
                //    $('#reduction_rabi_cucuber_water_req').val(400);
                //}
                if (response.reduction_rabi_ragi_water_req != null && response.reduction_rabi_ragi_water_req != "") {
                    $('#reduction_rabi_ragi_water_req').val(response.reduction_rabi_ragi_water_req);
                }
                else {
                    $('#reduction_rabi_ragi_water_req').val(550);
                }
                if (response.reduction_rabi_sugarcane_water_req != null && response.reduction_rabi_sugarcane_water_req != "") {
                    $('#reduction_rabi_sugarcane_water_req').val(response.reduction_rabi_sugarcane_water_req);
                }
                else {
                    $('#reduction_rabi_sugarcane_water_req').val(2000);
                }
                if (response.reduction_rabi_maize_water_req != null && response.reduction_rabi_maize_water_req != "") {
                    $('#reduction_rabi_maize_water_req').val(response.reduction_rabi_maize_water_req);
                }
                else {
                    $('#reduction_rabi_maize_water_req').val(650);
                }
                if (response.reduction_rabi_fodder_water_req != null && response.reduction_rabi_fodder_water_req != "") {
                    $('#reduction_rabi_fodder_water_req').val(response.reduction_rabi_fodder_water_req);
                }
                else {
                    $('#reduction_rabi_fodder_water_req').val(1400);
                }
                if (response.reduction_rabi_paddy_water_req != null && response.reduction_rabi_paddy_water_req != "") {
                    $('#reduction_rabi_paddy_water_req').val(response.reduction_rabi_paddy_water_req);
                }
                else {
                    $('#reduction_rabi_paddy_water_req').val(1175);
                }
                if (response.reduction_rabi_alfalfa_water_req != null && response.reduction_rabi_alfalfa_water_req != "") {
                    $('#reduction_rabi_alfalfa_water_req').val(response.reduction_rabi_alfalfa_water_req);
                }
                else {
                    $('#reduction_rabi_alfalfa_water_req').val(1200);
                }
                //if (response.reduction_rabi_onion_water_req != null && response.reduction_rabi_onion_water_req != "") {
                //    $('#reduction_rabi_onion_water_req').val(response.reduction_rabi_onion_water_req);
                //}
                //else {
                //    $('#reduction_rabi_onion_water_req').val(450);
                //}
                if (response.reduction_rabi_horticulture_water_req != null && response.reduction_rabi_horticulture_water_req != "") {
                    $('#reduction_rabi_horticulture_water_req').val(response.reduction_rabi_horticulture_water_req);
                }
                else {
                    $('#reduction_rabi_horticulture_water_req').val(470);
                }
                if (response.reduction_rabi_sunflower_water_req != null && response.reduction_rabi_sunflower_water_req != "") {
                    $('#reduction_rabi_sunflower_water_req').val(response.reduction_rabi_sunflower_water_req);
                }
                else {
                    $('#reduction_rabi_sunflower_water_req').val(800);
                }

                if (response.reduction_summer_sericulture_water_req != null && response.reduction_summer_sericulture_water_req != "") {
                    $('#reduction_summer_sericulture_water_req').val(response.reduction_summer_sericulture_water_req);
                }
                else {
                    $('#reduction_summer_sericulture_water_req').val(1550);
                }
                if (response.reduction_summer_tomoto_water_req != null && response.reduction_summer_tomoto_water_req != "") {
                    $('#reduction_summer_tomoto_water_req').val(response.reduction_summer_tomoto_water_req);
                }
                else {
                    $('#reduction_summer_tomoto_water_req').val(500);
                }
                //if (response.reduction_summer_cabbage_water_req != null && response.reduction_summer_cabbage_water_req != "") {
                //    $('#reduction_summer_cabbage_water_req').val(response.reduction_summer_cabbage_water_req);
                //}
                //else {
                //    $('#reduction_summer_cabbage_water_req').val(425);
                //}
                //if (response.reduction_summer_beans_water_req != null && response.reduction_summer_beans_water_req != "") {
                //    $('#reduction_summer_beans_water_req').val(response.reduction_summer_beans_water_req);
                //}
                //else {
                //    $('#reduction_summer_beans_water_req').val(400);
                //}
                if (response.reduction_summer_floriculture_water_req != null && response.reduction_summer_floriculture_water_req != "") {
                    $('#reduction_summer_floriculture_water_req').val(response.reduction_summer_floriculture_water_req);
                }
                else {
                    $('#reduction_summer_floriculture_water_req').val(1200);
                }
                if (response.reduction_summer_maize_water_req != null && response.reduction_summer_maize_water_req != "") {
                    $('#reduction_summer_maize_water_req').val(response.reduction_summer_maize_water_req);
                }
                else {
                    $('#reduction_summer_maize_water_req').val(650);
                }
                if (response.reduction_summer_fodder_water_req != null && response.reduction_summer_fodder_water_req != "") {
                    $('#reduction_summer_fodder_water_req').val(response.reduction_summer_fodder_water_req);
                }
                else {
                    $('#reduction_summer_fodder_water_req').val(1400);
                }
                if (response.reduction_summer_sugarcane_water_req != null && response.reduction_summer_sugarcane_water_req != "") {
                    $('#reduction_summer_sugarcane_water_req').val(response.reduction_summer_sugarcane_water_req);
                }
                else {
                    $('#reduction_summer_sugarcane_water_req').val(2000);
                }



                //other crops
                //$('#reduction_kharif_othercrop_name').val(response.reduction_kharif_othercrop_name);
                //$('#reduction_kharif_othercrop_area').val(response.reduction_kharif_othercrop_area);
                //$('#reduction_kharif_othercrop_water_req').val(response.reduction_kharif_othercrop_water_req);
                //$('#reduction_kharif_othercrop_quantum_value').val(response.reduction_kharif_othercrop_quantum_value);
                //$('#reduction_kharif_othercrop_gw_waterdemand').text(response.reduction_kharif_othercrop_gw_waterdemand);
                //$('#reduction_kharif_othercrop_reduc_gw_demand').text(response.reduction_kharif_othercrop_reduc_gw_demand);

                //$('#reduction_rabi_othercrop_name').val(response.reduction_rabi_othercrop_name);
                //$('#reduction_rabi_othercrop_area').val(response.reduction_rabi_othercrop_area);
                //$('#reduction_rabi_othercrop_water_req').val(response.reduction_kharif_othercrop_water_req);
                //$('#reduction_rabi_othercrop_quantum_value').val(response.reduction_rabi_othercrop_quantum_value);
                //$('#reduction_rabi_othercrop_gw_waterdemand').text(response.reduction_rabi_othercrop_gw_waterdemand);
                //$('#reduction_rabi_othercrop_reduc_gw_demand').text(response.reduction_rabi_othercrop_reduc_gw_demand);

                //$('#reduction_summer_othercrop_name').val(response.reduction_summer_othercrop_name);
                //$('#reduction_summer_othercrop_area').val(response.reduction_summer_othercrop_area);
                //$('#reduction_summer_othercrop_water_req').val(response.reduction_summer_othercrop_water_req);
                //$('#reduction_summer_othercrop_quantum_value').val(response.reduction_summer_othercrop_quantum_value);
                //$('#reduction_summer_othercrop_gw_waterdemand').text(response.reduction_summer_othercrop_gw_waterdemand);
                //$('#reduction_summer_othercrop_reduc_gw_demand').text(response.reduction_summer_othercrop_reduc_gw_demand);

            }
            else {
                add_Reduction_kharif_count = 0;
                add_Reduction_kharif_count1 = 1;
                add_Reduction_kharif_count2 = 2;
                add_Reduction_kharif_count3 = 3;
                add_Reduction_kharif_count4 = 4;
                add_Reduction_kharif_count5 = 5;


                add_Reduction_rabi_count = 0;
                add_Reduction_rabi_count1 = 1;
                add_Reduction_rabi_count2 = 2;
                add_Reduction_rabi_count3 = 3;
                add_Reduction_rabi_count4 = 4;
                add_Reduction_rabi_count5 = 5;


                add_Reduction_summer_count = 0;
                add_Reduction_summer_count1 = 1;
                add_Reduction_summer_count2 = 2;
                add_Reduction_summer_count3 = 3;
                add_Reduction_summer_count4 = 4;
                add_Reduction_summer_count5 = 5;
                $('#reduction_summer_horticulture_water_req').val(470);
                //new columns water requirement
                $('#reduction_kharif_paddy_water_req').val(1175);
                $('#reduction_kharif_ragi_water_req').val(550);
                $('#reduction_kharif_groundnut_water_req').val(525);
                $('#reduction_kharif_sugarcane_water_req').val(2000);
                $('#reduction_kharif_tomoto_water_req').val(500);
                //$('#reduction_kharif_cabbage_water_req').val(425);
                //$('#reduction_kharif_beans_water_req').val(425);
                $('#reduction_kharif_floriculture_water_req').val(1200);
                $('#reduction_kharif_sericulture_water_req').val(1550);
                //$('#reduction_kharif_cucumber_water_req').val(400);
                $('#reduction_kharif_banana_water_req').val(1700);
                $('#reduction_kharif_fodder_water_req').val(1400);
                $('#reduction_kharif_maize_water_req').val(650);
                //$('#reduction_kharif_potato_water_req').val(600);
                $('#reduction_kharif_chillies_water_req').val(230);
                $('#reduction_kharif_cotton_water_req').val(1000);
                $('#reduction_kharif_melon_water_req').val(500);
                $('#reduction_kharif_citrus_water_req').val(1050);
                //$('#reduction_kharif_peanut_water_req').val(600);
                $('#reduction_kharif_horticulture_water_req').val(470);

                $('#reduction_rabi_sericulture_water_req').val(1550);
                $('#reduction_rabi_tomoto_water_req').val(500);
                //$('#reduction_rabi_cabbage_water_req').val(425);
                //$('#reduction_rabi_beans_water_req').val(400);
                $('#reduction_rabi_floriculture_water_req').val(1200);
                //$('#reduction_rabi_potato_water_req').val(600);
                //$('#reduction_rabi_cucuber_water_req').val(400);
                $('#reduction_rabi_ragi_water_req').val(550);
                $('#reduction_rabi_sugarcane_water_req').val(2000);
                $('#reduction_rabi_maize_water_req').val(650);
                $('#reduction_rabi_fodder_water_req').val(1400);

                $('#reduction_rabi_paddy_water_req').val(1175);
                $('#reduction_rabi_alfalfa_water_req').val(1200);
                //$('#reduction_rabi_onion_water_req').val(450);
                $('#reduction_rabi_horticulture_water_req').val(470);
                $('#reduction_rabi_sunflower_water_req').val(800);

                $('#reduction_summer_sericulture_water_req').val(1550);
                $('#reduction_summer_tomoto_water_req').val(500);
                //$('#reduction_summer_cabbage_water_req').val(425);
                //$('#reduction_summer_beans_water_req').val(400);
                $('#reduction_summer_floriculture_water_req').val(1200);
                $('#reduction_summer_maize_water_req').val(650);
                $('#reduction_summer_fodder_water_req').val(1400);
                $('#reduction_summer_sugarcane_water_req').val(2000);



            }

            Reduction_Kharif_WaterRequire();
            Reduction_Rabi_WaterRequire();
            Reduction_Summer_WaterRequire();
        }
    });
}

var reduction_kharif_paddy_waterdemand = 0;
var reduction_kharif_paddy_gw_demand = 0;

var reduction_kharif_ragi_waterdemand = 0;
var reduction_kharif_ragi_gw_demand = 0;

var reduction_kharif_groundnut_waterdemand = 0;
var reduction_kharif_groundnut_gw_demand = 0;


var reduction_kharif_sugarcane_waterdemand = 0;
var reduction_kharif_sugarcane_gw_demand = 0;


var reduction_kharif_tomoto_waterdemand = 0;
var reduction_kharif_tomoto_gw_demand = 0;


//var reduction_kharif_cabbage_waterdemand = 0;
//var reduction_kharif_cabbage_gw_demand = 0;

//var reduction_kharif_beans_waterdemand = 0;
//var reduction_kharif_beans_gw_demand = 0;

var reduction_kharif_floriculture_waterdemand = 0;
var reduction_kharif_floriculture_gw_demand = 0;


var reduction_kharif_sericulture_waterdemand = 0;
var reduction_kharif_sericulture_gw_demand = 0;

//var reduction_kharif_cucumber_waterdemand = 0;
//var reduction_kharif_cucumber_gw_demand = 0;

var reduction_kharif_banana_waterdemand = 0;
var reduction_kharif_banana_gw_demand = 0;


var reduction_kharif_fodder_waterdemand = 0;
var reduction_kharif_fodder_gw_demand = 0;

var reduction_kharif_maize_waterdemand = 0;
var reduction_kharif_maize_gw_demand = 0;


//var reduction_kharif_potato_waterdemand = 0;
//var reduction_kharif_potato_gw_demand = 0;


var reduction_kharif_chillies_waterdemand = 0;
var reduction_kharif_chillies_gw_demand = 0;

var reduction_kharif_cotton_waterdemand = 0;
var reduction_kharif_cotton_gw_demand = 0;

var reduction_kharif_melon_waterdemand = 0;
var reduction_kharif_melon_gw_demand = 0;


var reduction_kharif_citrus_waterdemand = 0;
var reduction_kharif_citrus_gw_demand = 0;


//var reduction_kharif_peanut_waterdemand = 0;
//var reduction_kharif_peanut_gw_demand = 0;

var reduction_kharif_othercrop_gw_waterdemand = 0;
var reduction_kharif_othercrop_reduc_gw_demand = 0;


var reduction_kharif_horticulture_waterdemand = 0;
var reduction_kharif_horticulture_gw_demand = 0;



var reduction_kharif_othercrop_waterdemand1 = 0;
var reduction_kharif_othercrop_reduction_gw_demand1 = 0;

var reduction_kharif_othercrop_waterdemand2 = 0;
var reduction_kharif_othercrop_reduction_gw_demand2 = 0;

var reduction_kharif_othercrop_waterdemand3 = 0;
var reduction_kharif_othercrop_reduction_gw_demand3 = 0;


var reduction_kharif_othercrop_waterdemand4 = 0;
var reduction_kharif_othercrop_reduction_gw_demand4 = 0;

var reduction_kharif_othercrop_waterdemand5 = 0;
var reduction_kharif_othercrop_reduction_gw_demand5 = 0;


function Reduction_Kharif_WaterRequire() {
    var Reduction_Total_Water_Demand_Kharif_Crops = 0;

    reduction_kharif_paddy_waterdemand = 0;
    reduction_kharif_paddy_gw_demand = 0;

    reduction_kharif_ragi_waterdemand = 0;
    reduction_kharif_ragi_gw_demand = 0;

    reduction_kharif_groundnut_waterdemand = 0;
    reduction_kharif_groundnut_gw_demand = 0;


    reduction_kharif_sugarcane_waterdemand = 0;
    reduction_kharif_sugarcane_gw_demand = 0;


    reduction_kharif_tomoto_waterdemand = 0;
    reduction_kharif_tomoto_gw_demand = 0;


    //reduction_kharif_cabbage_waterdemand = 0;
    //reduction_kharif_cabbage_gw_demand = 0;

    //reduction_kharif_beans_waterdemand = 0;
    //reduction_kharif_beans_gw_demand = 0;

    reduction_kharif_floriculture_waterdemand = 0;
    reduction_kharif_floriculture_gw_demand = 0;


    reduction_kharif_sericulture_waterdemand = 0;
    reduction_kharif_sericulture_gw_demand = 0;

    //reduction_kharif_cucumber_waterdemand = 0;
    //reduction_kharif_cucumber_gw_demand = 0;

    reduction_kharif_banana_waterdemand = 0;
    reduction_kharif_banana_gw_demand = 0;


    reduction_kharif_fodder_waterdemand = 0;
    reduction_kharif_fodder_gw_demand = 0;

    reduction_kharif_maize_waterdemand = 0;
    reduction_kharif_maize_gw_demand = 0;


    //reduction_kharif_potato_waterdemand = 0;
    //reduction_kharif_potato_gw_demand = 0;


    reduction_kharif_chillies_waterdemand = 0;
    reduction_kharif_chillies_gw_demand = 0;

    reduction_kharif_cotton_waterdemand = 0;
    reduction_kharif_cotton_gw_demand = 0;

    reduction_kharif_melon_waterdemand = 0;
    reduction_kharif_melon_gw_demand = 0;


    reduction_kharif_citrus_waterdemand = 0;
    reduction_kharif_citrus_gw_demand = 0;


    //reduction_kharif_peanut_waterdemand = 0;
    //reduction_kharif_peanut_gw_demand = 0;


    reduction_kharif_horticulture_waterdemand = 0;
    reduction_kharif_horticulture_gw_demand = 0;

    reduction_kharif_othercrop_gw_waterdemand = 0;
    reduction_kharif_othercrop_reduc_gw_demand = 0;

    reduction_kharif_othercrop_waterdemand1 = 0;
    reduction_kharif_othercrop_reduction_gw_demand1 = 0;

    reduction_kharif_othercrop_waterdemand2 = 0;
    reduction_kharif_othercrop_reduction_gw_demand2 = 0;

    reduction_kharif_othercrop_waterdemand3 = 0;
    reduction_kharif_othercrop_reduction_gw_demand3 = 0;


    reduction_kharif_othercrop_waterdemand4 = 0;
    reduction_kharif_othercrop_reduction_gw_demand4 = 0;

    reduction_kharif_othercrop_waterdemand5 = 0;
    reduction_kharif_othercrop_reduction_gw_demand5 = 0;


    Reduction_in_GW_through_kharif_surface_water = 0;



    //Other


    var reduction_kharif_othercrop_area1 = $('#reduction_kharif_othercrop_area1').val();
    if (typeof reduction_kharif_othercrop_area1 == 'undefined') {
        reduction_kharif_othercrop_area1 = 0;
    }
    var reduction_kharif_othercrop_quantum_uservalue1 = $('#reduction_kharif_othercrop_quantum_uservalue1').val();
    if (typeof reduction_kharif_othercrop_quantum_uservalue1 == 'undefined') {
        reduction_kharif_othercrop_quantum_uservalue1 = 0;
    }
    var reduction_kharif_othercrop_water_req1 = $('#reduction_kharif_othercrop_water_req1').val();
    if (typeof reduction_kharif_othercrop_water_req1 == 'undefined') {
        reduction_kharif_othercrop_water_req1 = 0;
    }
    if (reduction_kharif_othercrop_water_req1 == "") {
        reduction_kharif_othercrop_water_req1 = 0;
    }
    if (reduction_kharif_othercrop_area1 != "" && reduction_kharif_othercrop_quantum_uservalue1 != "") {
        //water demand
        reduction_kharif_othercrop_waterdemand1 = parseFloat(reduction_kharif_othercrop_area1) * parseFloat(reduction_kharif_othercrop_water_req1) * 0.001;
        $('#reduction_kharif_othercrop_waterdemand1').text(reduction_kharif_othercrop_waterdemand1.toFixed(2));
        //quantum
        $('#reduction_kharif_othercrop_quantum_uservalue1').text(reduction_kharif_othercrop_quantum_uservalue1);
        //save water
        reduction_kharif_othercrop_reduction_gw_demand1 = parseFloat(reduction_kharif_othercrop_waterdemand1) - parseFloat(reduction_kharif_othercrop_quantum_uservalue1);
        $('#reduction_kharif_othercrop_reduction_gw_demand1').text(reduction_kharif_othercrop_reduction_gw_demand1.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_othercrop_waterdemand1 + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_othercrop_reduction_gw_demand1;

    }


    var reduction_kharif_othercrop_area2 = $('#reduction_kharif_othercrop_area2').val();
    if (typeof reduction_kharif_othercrop_area2 == 'undefined') {
        reduction_kharif_othercrop_area2 = 0;
    }
    var reduction_kharif_othercrop_quantum_uservalue2 = $('#reduction_kharif_othercrop_quantum_uservalue2').val();
    if (typeof reduction_kharif_othercrop_quantum_uservalue2 == 'undefined') {
        reduction_kharif_othercrop_quantum_uservalue2 = 0;
    }
    var reduction_kharif_othercrop_water_req2 = $('#reduction_kharif_othercrop_water_req2').val();
    if (typeof reduction_kharif_othercrop_water_req2 == 'undefined') {
        reduction_kharif_othercrop_water_req2 = 0;
    }
    if (reduction_kharif_othercrop_water_req2 == "") {
        reduction_kharif_othercrop_water_req2 = 0;
    }
    if (reduction_kharif_othercrop_area2 != "" && reduction_kharif_othercrop_quantum_uservalue2 != "") {
        //water demand
        reduction_kharif_othercrop_waterdemand2 = parseFloat(reduction_kharif_othercrop_area2) * parseFloat(reduction_kharif_othercrop_water_req2) * 0.001;
        $('#reduction_kharif_othercrop_waterdemand2').text(reduction_kharif_othercrop_waterdemand2.toFixed(2));
        //quantum
        $('#reduction_kharif_othercrop_quantum_uservalue2').text(reduction_kharif_othercrop_quantum_uservalue2);
        //save water
        reduction_kharif_othercrop_reduction_gw_demand2 = parseFloat(reduction_kharif_othercrop_waterdemand2) - parseFloat(reduction_kharif_othercrop_quantum_uservalue2);
        $('#reduction_kharif_othercrop_reduction_gw_demand2').text(reduction_kharif_othercrop_reduction_gw_demand2.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_othercrop_waterdemand2 + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_othercrop_reduction_gw_demand2;

    }

    var reduction_kharif_othercrop_area3 = $('#reduction_kharif_othercrop_area3').val();
    if (typeof reduction_kharif_othercrop_area3 == 'undefined') {
        reduction_kharif_othercrop_area3 = 0;
    }
    var reduction_kharif_othercrop_quantum_uservalue3 = $('#reduction_kharif_othercrop_quantum_uservalue3').val();
    if (typeof reduction_kharif_othercrop_quantum_uservalue3 == 'undefined') {
        reduction_kharif_othercrop_quantum_uservalue3 = 0;
    }
    var reduction_kharif_othercrop_water_req3 = $('#reduction_kharif_othercrop_water_req3').val();
    if (typeof reduction_kharif_othercrop_water_req3 == 'undefined') {
        reduction_kharif_othercrop_water_req3 = 0;
    }
    if (reduction_kharif_othercrop_water_req3 == "") {
        reduction_kharif_othercrop_water_req3 = 0;
    }
    if (reduction_kharif_othercrop_area3 != "" && reduction_kharif_othercrop_quantum_uservalue3 != "") {
        //water demand
        reduction_kharif_othercrop_waterdemand3 = parseFloat(reduction_kharif_othercrop_area3) * parseFloat(reduction_kharif_othercrop_water_req3) * 0.001;
        $('#reduction_kharif_othercrop_waterdemand3').text(reduction_kharif_othercrop_waterdemand3.toFixed(2));
        //quantum
        $('#reduction_kharif_othercrop_quantum_uservalue3').text(reduction_kharif_othercrop_quantum_uservalue3);
        //save water
        reduction_kharif_othercrop_reduction_gw_demand3 = parseFloat(reduction_kharif_othercrop_waterdemand3) - parseFloat(reduction_kharif_othercrop_quantum_uservalue3);
        $('#reduction_kharif_othercrop_reduction_gw_demand3').text(reduction_kharif_othercrop_reduction_gw_demand3.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_othercrop_waterdemand3 + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_othercrop_reduction_gw_demand3;

    }


    var reduction_kharif_othercrop_area4 = $('#reduction_kharif_othercrop_area4').val();
    if (typeof reduction_kharif_othercrop_area4 == 'undefined') {
        reduction_kharif_othercrop_area4 = 0;
    }
    var reduction_kharif_othercrop_quantum_uservalue4 = $('#reduction_kharif_othercrop_quantum_uservalue4').val();
    if (typeof reduction_kharif_othercrop_quantum_uservalue4 == 'undefined') {
        reduction_kharif_othercrop_quantum_uservalue4 = 0;
    }
    var reduction_kharif_othercrop_water_req4 = $('#reduction_kharif_othercrop_water_req4').val();
    if (typeof reduction_kharif_othercrop_water_req4 == 'undefined') {
        reduction_kharif_othercrop_water_req4 = 0;
    }
    if (reduction_kharif_othercrop_water_req4 == "") {
        reduction_kharif_othercrop_water_req4 = 0;
    }
    if (reduction_kharif_othercrop_area4 != "" && reduction_kharif_othercrop_quantum_uservalue4 != "") {
        //water demand
        reduction_kharif_othercrop_waterdemand4 = parseFloat(reduction_kharif_othercrop_area4) * parseFloat(reduction_kharif_othercrop_water_req4) * 0.001;
        $('#reduction_kharif_othercrop_waterdemand4').text(reduction_kharif_othercrop_waterdemand4.toFixed(2));
        //quantum
        $('#reduction_kharif_othercrop_quantum_uservalue4').text(reduction_kharif_othercrop_quantum_uservalue4);
        //save water
        reduction_kharif_othercrop_reduction_gw_demand4 = parseFloat(reduction_kharif_othercrop_waterdemand4) - parseFloat(reduction_kharif_othercrop_quantum_uservalue4);
        $('#reduction_kharif_othercrop_reduction_gw_demand4').text(reduction_kharif_othercrop_reduction_gw_demand4.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_othercrop_waterdemand4 + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_othercrop_reduction_gw_demand4;

    }


    var reduction_kharif_othercrop_area5 = $('#reduction_kharif_othercrop_area5').val();
    if (typeof reduction_kharif_othercrop_area5 == 'undefined') {
        reduction_kharif_othercrop_area5 = 0;
    }
    var reduction_kharif_othercrop_quantum_uservalue5 = $('#reduction_kharif_othercrop_quantum_uservalue5').val();
    if (typeof reduction_kharif_othercrop_quantum_uservalue5 == 'undefined') {
        reduction_kharif_othercrop_quantum_uservalue5 = 0;
    }
    var reduction_kharif_othercrop_water_req5 = $('#reduction_kharif_othercrop_water_req5').val();
    if (typeof reduction_kharif_othercrop_water_req5 == 'undefined') {
        reduction_kharif_othercrop_water_req5 = 0;
    }
    if (reduction_kharif_othercrop_water_req5 == "") {
        reduction_kharif_othercrop_water_req5 = 0;
    }
    if (reduction_kharif_othercrop_area5 != "" && reduction_kharif_othercrop_quantum_uservalue5 != "") {
        //water demand
        reduction_kharif_othercrop_waterdemand5 = parseFloat(reduction_kharif_othercrop_area5) * parseFloat(reduction_kharif_othercrop_water_req5) * 0.001;
        $('#reduction_kharif_othercrop_waterdemand5').text(reduction_kharif_othercrop_waterdemand5.toFixed(2));
        //quantum
        $('#reduction_kharif_othercrop_quantum_uservalue5').text(reduction_kharif_othercrop_quantum_uservalue5);
        //save water
        reduction_kharif_othercrop_reduction_gw_demand5 = parseFloat(reduction_kharif_othercrop_waterdemand5) - parseFloat(reduction_kharif_othercrop_quantum_uservalue5);
        $('#reduction_kharif_othercrop_reduction_gw_demand5').text(reduction_kharif_othercrop_reduction_gw_demand5.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_othercrop_waterdemand5 + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_othercrop_reduction_gw_demand5;

    }

    //Paddy
    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_paddy_water_Demand_value').text("0");
    $('#Reduction_kharif_paddy_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_paddy_water_Saving_value').text("0");

    var Reduction_kharif_Paddy_UserVale = $('#Reduction_kharif_Paddy_UserVale').val();
    var Reduction_kharif_paddy_Quantum_UserValue = $('#Reduction_kharif_paddy_Quantum_UserValue').val();
    var reduction_kharif_paddy_water_req = $('#reduction_kharif_paddy_water_req').val();
    if (reduction_kharif_paddy_water_req == "") {
        reduction_kharif_paddy_water_req = 0;
    }
    if (Reduction_kharif_Paddy_UserVale != "" && Reduction_kharif_paddy_Quantum_UserValue != "") {
        //water demand
        reduction_kharif_paddy_waterdemand = parseFloat(Reduction_kharif_Paddy_UserVale) * parseFloat(reduction_kharif_paddy_water_req) * 0.001;
        $('#Reduction_kharif_paddy_water_Demand_value').text(reduction_kharif_paddy_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_paddy_Quantum_UserValue2').text(Reduction_kharif_paddy_Quantum_UserValue);
        //save water
        reduction_kharif_paddy_gw_demand = parseFloat(reduction_kharif_paddy_waterdemand) - parseFloat(Reduction_kharif_paddy_Quantum_UserValue);
        $('#Reduction_kharif_paddy_water_Saving_value').text(reduction_kharif_paddy_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_paddy_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_paddy_gw_demand;

    }
    // Ragi


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Ragi_water_Demand_value').text("0");
    $('#Reduction_kharif_Ragi_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Ragi_water_Saving_value').text("0");

    var Reduction_kharif_Ragi_UserVale = $('#Reduction_kharif_Ragi_UserVale').val();
    var Reduction_kharif_Ragi_Quantum_UserValue = $('#Reduction_kharif_Ragi_Quantum_UserValue').val();

    var reduction_kharif_ragi_water_req = $('#reduction_kharif_ragi_water_req').val();

    if (reduction_kharif_ragi_water_req == "") {
        reduction_kharif_ragi_water_req = 0;
    }

    if (Reduction_kharif_Ragi_UserVale != "" && Reduction_kharif_Ragi_Quantum_UserValue != "") {
        //water demand

        reduction_kharif_ragi_waterdemand = parseFloat(Reduction_kharif_Ragi_UserVale) * parseFloat(reduction_kharif_ragi_water_req) * 0.001;
        $('#Reduction_kharif_Ragi_water_Demand_value').text(reduction_kharif_ragi_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Ragi_Quantum_UserValue2').text(Reduction_kharif_Ragi_Quantum_UserValue);
        //save water
        reduction_kharif_ragi_gw_demand = parseFloat(reduction_kharif_ragi_waterdemand) - parseFloat(Reduction_kharif_Ragi_Quantum_UserValue);
        $('#Reduction_kharif_Ragi_water_Saving_value').text(reduction_kharif_ragi_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_ragi_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_ragi_gw_demand;

    }

    //GroundNut


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Groundnut_water_Demand_value').text("0");
    $('#Reduction_kharif_Groundnut_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Groundnut_Saving_value').text("0");

    var Reduction_kharif_Groundnut_UserVale = $('#Reduction_kharif_Groundnut_UserVale').val();
    var Reduction_kharif_Groundnut_Quantum_UserValue = $('#Reduction_kharif_Groundnut_Quantum_UserValue').val();
    var reduction_kharif_groundnut_water_req = $('#reduction_kharif_ragi_water_req').val();
    if (reduction_kharif_groundnut_water_req == "") {
        reduction_kharif_groundnut_water_req = 0;
    }
    if (Reduction_kharif_Groundnut_UserVale != "" && Reduction_kharif_Groundnut_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_groundnut_waterdemand = parseFloat(Reduction_kharif_Groundnut_UserVale) * parseFloat(reduction_kharif_groundnut_water_req) * 0.001;
        $('#Reduction_kharif_Groundnut_water_Demand_value').text(reduction_kharif_groundnut_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Groundnut_Quantum_UserValue2').text(Reduction_kharif_Groundnut_Quantum_UserValue);
        //save water
        reduction_kharif_groundnut_gw_demand = parseFloat(reduction_kharif_groundnut_waterdemand) - parseFloat(Reduction_kharif_Groundnut_Quantum_UserValue);
        $('#Reduction_kharif_Groundnut_Saving_value').text(reduction_kharif_groundnut_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_groundnut_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_groundnut_gw_demand;

    }

    //Suagrcane


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Sugercane_water_Demand_value').text("0");
    $('#Reduction_kharif_Sugarcane_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Sugarcane_Saving_value').text("0");

    var reduction_kharif_sugarcane_water_req = $('#reduction_kharif_sugarcane_water_req').val();
    if (reduction_kharif_sugarcane_water_req == "") {
        reduction_kharif_sugarcane_water_req = 0;
    }
    var Reduction_kharif_Sugarcane_UserVale = $('#Reduction_kharif_Sugarcane_UserVale').val();
    var Reduction_kharif_Sugarcane_Quantum_UserValue = $('#Reduction_kharif_Sugarcane_Quantum_UserValue').val();
    if (Reduction_kharif_Sugarcane_UserVale != "" && Reduction_kharif_Sugarcane_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_sugarcane_waterdemand = parseFloat(Reduction_kharif_Sugarcane_UserVale) * parseFloat(reduction_kharif_sugarcane_water_req) * 0.001;
        $('#Reduction_kharif_Sugercane_water_Demand_value').text(reduction_kharif_sugarcane_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Sugarcane_Quantum_UserValue2').text(Reduction_kharif_Sugarcane_Quantum_UserValue);
        //save water
        reduction_kharif_sugarcane_gw_demand = parseFloat(reduction_kharif_sugarcane_waterdemand) - parseFloat(Reduction_kharif_Sugarcane_Quantum_UserValue);
        $('#Reduction_kharif_Sugarcane_Saving_value').text(reduction_kharif_sugarcane_gw_demand.toFixed(2));


        //total

    }

    //Tomoto



    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Tomato_water_Demand_value').text("0");
    $('#Reduction_kharif_Tomoto_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Tomato_Saving_value').text("0");

    var reduction_kharif_tomoto_water_req = $('#reduction_kharif_tomoto_water_req').val();
    var Reduction_kharif_Tomato_UserVale = $('#Reduction_kharif_Tomato_UserVale').val();
    var Reduction_kharif_Tomato_Quantum_UserValue = $('#Reduction_kharif_Tomato_Quantum_UserValue').val();
    if (reduction_kharif_tomoto_water_req == "") {
        reduction_kharif_tomoto_water_req = 0;
    }
    if (Reduction_kharif_Tomato_UserVale != "" && Reduction_kharif_Tomato_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_tomoto_waterdemand = parseFloat(Reduction_kharif_Tomato_UserVale) * parseFloat(reduction_kharif_tomoto_water_req) * 0.001;
        $('#Reduction_kharif_Tomato_water_Demand_value').text(reduction_kharif_tomoto_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Tomoto_Quantum_UserValue2').text(Reduction_kharif_Tomato_Quantum_UserValue);
        //save water
        reduction_kharif_tomoto_gw_demand = parseFloat(reduction_kharif_tomoto_waterdemand) - parseFloat(Reduction_kharif_Tomato_Quantum_UserValue);
        $('#Reduction_kharif_Tomato_Saving_value').text(reduction_kharif_tomoto_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_tomoto_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_tomoto_gw_demand;

    }
    //cabage

    //$('#Reduction_Kharif_Water_demand').text("0");
    //$('#Reduction_Kharif_Water_Save').text("0");
    //$('#Reduction_kharif_Cabbage_water_Demand_value').text("0");
    //$('#Reduction_kharif_Cabbage_Quantum_UserValue2').text("0");
    //$('#Reduction_kharif_Cabbage_Saving_value').text("0");

    //var reduction_kharif_cabbage_water_req = $('#reduction_kharif_cabbage_water_req').val();
    //if (reduction_kharif_cabbage_water_req == "") {
    //    reduction_kharif_cabbage_water_req = 0;
    //}
    //var Reduction_kharif_Cabbage_UserVale = $('#Reduction_kharif_Cabbage_UserVale').val();
    //var Reduction_kharif_Cabbage_Quantum_UserValue = $('#Reduction_kharif_Cabbage_Quantum_UserValue').val();
    //if (Reduction_kharif_Cabbage_UserVale != "" && Reduction_kharif_Cabbage_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_kharif_cabbage_waterdemand = parseFloat(Reduction_kharif_Cabbage_UserVale) * parseFloat(reduction_kharif_cabbage_water_req) * 0.001;;
    //    $('#Reduction_kharif_Cabbage_water_Demand_value').text(reduction_kharif_cabbage_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_kharif_Cabbage_Quantum_UserValue2').text(Reduction_kharif_Cabbage_Quantum_UserValue);
    //    //save water
    //    reduction_kharif_cabbage_gw_demand = parseFloat(reduction_kharif_cabbage_waterdemand) - parseFloat(Reduction_kharif_Cabbage_Quantum_UserValue);
    //    $('#Reduction_kharif_Cabbage_Saving_value').text(reduction_kharif_cabbage_gw_demand.toFixed(2));


    //    //total
    //    Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_cabbage_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
    //    Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_cabbage_gw_demand;

    //}
    //Beans

    //$('#Reduction_Kharif_Water_demand').text("0");
    //$('#Reduction_Kharif_Water_Save').text("0");
    //$('#Reduction_kharif_Beans_water_Demand_value').text("0");
    //$('#Reduction_kharif_Beans_Quantum_UserValue2').text("0");
    //$('#Reduction_kharif_Beans_Saving_value').text("0");

    //var reduction_kharif_beans_water_req = $('#reduction_kharif_beans_water_req').val();
    //if (reduction_kharif_beans_water_req == "") {
    //    reduction_kharif_beans_water_req = 0;
    //}
    //var Reduction_kharif_Beans_UserVale = $('#Reduction_kharif_Beans_UserVale').val();
    //var Reduction_kharif_Beans_Quantum_UserValue = $('#Reduction_kharif_Beans_Quantum_UserValue').val();
    //if (Reduction_kharif_Beans_UserVale != "" && Reduction_kharif_Beans_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_kharif_beans_waterdemand = parseFloat(Reduction_kharif_Beans_UserVale) * parseFloat(reduction_kharif_beans_water_req) * 0.001;
    //    $('#Reduction_kharif_Beans_water_Demand_value').text(reduction_kharif_beans_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_kharif_Beans_Quantum_UserValue2').text(Reduction_kharif_Beans_Quantum_UserValue);
    //    //save water
    //    reduction_kharif_beans_gw_demand = parseFloat(reduction_kharif_beans_waterdemand) - parseFloat(Reduction_kharif_Beans_Quantum_UserValue);
    //    $('#Reduction_kharif_Beans_Saving_value').text(reduction_kharif_beans_gw_demand.toFixed(2));


    //    //total
    //    Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_beans_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
    //    Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_beans_gw_demand;

    //}
    //Floriculture


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Floriculture_water_Demand_value').text("0");
    $('#Reduction_kharif_Floriculture_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Floriculture_Saving_value').text("0");

    var reduction_kharif_floriculture_water_req = $('#reduction_kharif_floriculture_water_req').val();
    if (reduction_kharif_floriculture_water_req == "") {
        reduction_kharif_floriculture_water_req = 0;
    }

    var Reduction_kharif_Floriculture_UserVale = $('#Reduction_kharif_Floriculture_UserVale').val();
    var Reduction_kharif_Floriculture_Quantum_UserValue = $('#Reduction_kharif_Floriculture_Quantum_UserValue').val();
    if (Reduction_kharif_Floriculture_UserVale != "" && Reduction_kharif_Floriculture_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_floriculture_waterdemand = parseFloat(Reduction_kharif_Floriculture_UserVale) * parseFloat(reduction_kharif_floriculture_water_req) * 0.001;
        $('#Reduction_kharif_Floriculture_water_Demand_value').text(reduction_kharif_floriculture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Floriculture_Quantum_UserValue2').text(Reduction_kharif_Floriculture_Quantum_UserValue);
        //save water
        reduction_kharif_floriculture_gw_demand = parseFloat(reduction_kharif_floriculture_waterdemand) - parseFloat(Reduction_kharif_Floriculture_Quantum_UserValue);
        $('#Reduction_kharif_Floriculture_Saving_value').text(reduction_kharif_floriculture_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_floriculture_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_floriculture_gw_demand;

    }

    //Sericulture


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Sericulture_water_Demand_value').text("0");
    $('#Reduction_kharif_Sericulture_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Sericulture_Saving_value').text("0");

    var reduction_kharif_sericulture_water_req = $('#reduction_kharif_sericulture_water_req').val();
    if (reduction_kharif_sericulture_water_req == "") {
        reduction_kharif_sericulture_water_req = 0;
    }

    var Reduction_kharif_Sericulture_UserVale = $('#Reduction_kharif_Sericulture_UserVale').val();
    var Reduction_kharif_Sericulture_Quantum_UserValue = $('#Reduction_kharif_Sericulture_Quantum_UserValue').val();
    if (Reduction_kharif_Sericulture_UserVale != "" && Reduction_kharif_Sericulture_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_sericulture_waterdemand = parseFloat(Reduction_kharif_Sericulture_UserVale) * parseFloat(reduction_kharif_sericulture_water_req) * 0.001;
        $('#Reduction_kharif_Sericulture_water_Demand_value').text(reduction_kharif_sericulture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Sericulture_Quantum_UserValue2').text(Reduction_kharif_Sericulture_Quantum_UserValue);
        //save water
        reduction_kharif_sericulture_gw_demand = parseFloat(reduction_kharif_sericulture_waterdemand) - parseFloat(Reduction_kharif_Sericulture_Quantum_UserValue);
        $('#Reduction_kharif_Sericulture_Saving_value').text(reduction_kharif_sericulture_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_sericulture_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_sericulture_gw_demand;

    }

    //Cucumber


    //$('#Reduction_Kharif_Water_demand').text("0");
    //$('#Reduction_Kharif_Water_Save').text("0");
    //$('#Reduction_kharif_Cucmber_water_Demand_value').text("0");
    //$('#Reduction_kharif_Cucmber_Quantum_UserValue2').text("0");
    //$('#Reduction_kharif_Cucmber_Saving_value').text("0");

    //var reduction_kharif_cucmber_water_req = $('#reduction_kharif_cucmber_water_req').val();
    //if (reduction_kharif_cucmber_water_req == "") {
    //    reduction_kharif_cucmber_water_req = 0;
    //}
    //var Reduction_kharif_Cucmber_UserVale = $('#Reduction_kharif_Cucmber_UserVale').val();
    //var Reduction_kharif_Cucmber_Quantum_UserValue = $('#Reduction_kharif_Cucmber_Quantum_UserValue').val();
    //if (Reduction_kharif_Cucmber_UserVale != "" && Reduction_kharif_Cucmber_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_kharif_cucumber_waterdemand = parseFloat(Reduction_kharif_Cucmber_UserVale) * parseFloat(reduction_kharif_cucmber_water_req) * 0.001;
    //    $('#Reduction_kharif_Cucmber_water_Demand_value').text(reduction_kharif_cucumber_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_kharif_Cucmber_Quantum_UserValue2').text(Reduction_kharif_Cucmber_Quantum_UserValue);
    //    //save water
    //    reduction_kharif_cucumber_gw_demand = parseFloat(reduction_kharif_cucumber_waterdemand) - parseFloat(Reduction_kharif_Cucmber_Quantum_UserValue);
    //    $('#Reduction_kharif_Cucmber_Saving_value').text(reduction_kharif_cucumber_gw_demand.toFixed(2));


    //    //total
    //    Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_cucumber_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
    //    Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_cucumber_gw_demand;

    //}

    //Banana


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Banana_water_Demand_value').text("0");
    $('#Reduction_kharif_Banana_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Banana_Saving_value').text("0");

    var reduction_kharif_banana_water_req = $('#reduction_kharif_banana_water_req').val();
    if (reduction_kharif_banana_water_req == "") {
        reduction_kharif_banana_water_req = 0;
    }
    var Reduction_kharif_Banana_UserVale = $('#Reduction_kharif_Banana_UserVale').val();
    var Reduction_kharif_Banana_Quantum_UserValue = $('#Reduction_kharif_Banana_Quantum_UserValue').val();
    if (Reduction_kharif_Banana_UserVale != "" && Reduction_kharif_Banana_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_banana_waterdemand = parseFloat(Reduction_kharif_Banana_UserVale) * parseFloat(reduction_kharif_banana_water_req) * 0.001;
        $('#Reduction_kharif_Banana_water_Demand_value').text(reduction_kharif_banana_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Banana_Quantum_UserValue2').text(Reduction_kharif_Banana_Quantum_UserValue);
        //save water
        reduction_kharif_banana_gw_demand = parseFloat(reduction_kharif_banana_waterdemand) - parseFloat(Reduction_kharif_Banana_Quantum_UserValue);
        $('#Reduction_kharif_Banana_Saving_value').text(reduction_kharif_banana_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_banana_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_banana_gw_demand;

    }
    //Fodder


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Fodder_water_Demand_value').text("0");
    $('#Reduction_kharif_Fodder_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Fodder_Saving_value').text("0");

    var reduction_kharif_fodder_water_req = $('#reduction_kharif_fodder_water_req').val();
    if (reduction_kharif_fodder_water_req == "") {
        reduction_kharif_fodder_water_req = 0;
    }

    var Reduction_kharif_Fodder_UserVale = $('#Reduction_kharif_Fodder_UserVale').val();
    var Reduction_kharif_Fodder_Quantum_UserValue = $('#Reduction_kharif_Fodder_Quantum_UserValue').val();
    if (Reduction_kharif_Fodder_UserVale != "" && Reduction_kharif_Fodder_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_fodder_waterdemand = parseFloat(Reduction_kharif_Fodder_UserVale) * parseFloat(reduction_kharif_fodder_water_req) * 0.001;
        $('#Reduction_kharif_Fodder_water_Demand_value').text(reduction_kharif_fodder_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Fodder_Quantum_UserValue2').text(Reduction_kharif_Fodder_Quantum_UserValue);
        //save water
        reduction_kharif_fodder_gw_demand = parseFloat(reduction_kharif_fodder_waterdemand) - parseFloat(Reduction_kharif_Fodder_Quantum_UserValue);
        $('#Reduction_kharif_Fodder_Saving_value').text(reduction_kharif_fodder_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_fodder_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_fodder_gw_demand;

    }
    //Maize


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Maize_water_Demand_value').text("0");
    $('#Reduction_kharif_Maize_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Maize_Saving_value').text("0");

    var reduction_kharif_maize_water_req = $('#reduction_kharif_maize_water_req').val();
    if (reduction_kharif_maize_water_req == "") {
        reduction_kharif_maize_water_req = 0;
    }
    var Reduction_kharif_Maize_UserVale = $('#Reduction_kharif_Maize_UserVale').val();
    var Reduction_kharif_Maize_Quantum_UserValue = $('#Reduction_kharif_Maize_Quantum_UserValue').val();
    if (Reduction_kharif_Maize_UserVale != "" && Reduction_kharif_Maize_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_maize_waterdemand = parseFloat(Reduction_kharif_Maize_UserVale) * parseFloat(reduction_kharif_maize_water_req) * 0.001;
        $('#Reduction_kharif_Maize_water_Demand_value').text(reduction_kharif_maize_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Maize_Quantum_UserValue2').text(Reduction_kharif_Maize_Quantum_UserValue);
        //save water
        reduction_kharif_maize_gw_demand = parseFloat(reduction_kharif_maize_waterdemand) - parseFloat(Reduction_kharif_Maize_Quantum_UserValue);
        $('#Reduction_kharif_Maize_Saving_value').text(reduction_kharif_maize_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_maize_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_maize_gw_demand;

    }

    //Potato



    //$('#Reduction_Kharif_Water_demand').text("0");
    //$('#Reduction_Kharif_Water_Save').text("0");
    //$('#Reduction_kharif_Potato_water_Demand_value').text("0");
    //$('#Reduction_kharif_Potato_Quantum_UserValue2').text("0");
    //$('#Reduction_kharif_Potato_Saving_value').text("0");

    //var reduction_kharif_potato_water_req = $('#reduction_kharif_potato_water_req').val();
    //if (reduction_kharif_potato_water_req == "") {
    //    reduction_kharif_potato_water_req = 0;
    //}

    //var Reduction_kharif_Potato_UserVale = $('#Reduction_kharif_Potato_UserVale').val();
    //var Reduction_kharif_Potato_Quantum_UserValue = $('#Reduction_kharif_Potato_Quantum_UserValue').val();
    //if (Reduction_kharif_Potato_UserVale != "" && Reduction_kharif_Potato_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_kharif_potato_waterdemand = parseFloat(Reduction_kharif_Potato_UserVale) * parseFloat(reduction_kharif_potato_water_req) * 0.001;
    //    $('#Reduction_kharif_Potato_water_Demand_value').text(reduction_kharif_potato_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_kharif_Potato_Quantum_UserValue2').text(Reduction_kharif_Potato_Quantum_UserValue);
    //    //save water
    //    reduction_kharif_potato_gw_demand = parseFloat(reduction_kharif_potato_waterdemand) - parseFloat(Reduction_kharif_Potato_Quantum_UserValue);
    //    $('#Reduction_kharif_Potato_Saving_value').text(reduction_kharif_potato_gw_demand.toFixed(2));


    //    //total
    //    Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_potato_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
    //    Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_potato_gw_demand;

    //}
    //Chillies



    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Chillies_water_Demand_value').text("0");
    $('#Reduction_kharif_Chillies_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Chillies_Saving_value').text("0");

    var reduction_kharif_chillies_water_req = $('#reduction_kharif_chillies_water_req').val();
    if (reduction_kharif_chillies_water_req == "") {
        reduction_kharif_chillies_water_req = 0;
    }
    var Reduction_kharif_Chillies_UserVale = $('#Reduction_kharif_Chillies_UserVale').val();
    var Reduction_kharif_Chillies_Quantum_UserValue = $('#Reduction_kharif_Chillies_Quantum_UserValue').val();
    if (Reduction_kharif_Chillies_UserVale != "" && Reduction_kharif_Chillies_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_chillies_waterdemand = parseFloat(Reduction_kharif_Chillies_UserVale) * parseFloat(reduction_kharif_chillies_water_req) * 0.001;
        $('#Reduction_kharif_Chillies_water_Demand_value').text(reduction_kharif_chillies_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Chillies_Quantum_UserValue2').text(Reduction_kharif_Chillies_Quantum_UserValue);
        //save water
        reduction_kharif_chillies_gw_demand = parseFloat(reduction_kharif_chillies_waterdemand) - parseFloat(Reduction_kharif_Chillies_Quantum_UserValue);
        $('#Reduction_kharif_Chillies_Saving_value').text(reduction_kharif_chillies_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_chillies_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_chillies_gw_demand;

    }
    //Cotton



    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Cotton_water_Demand_value').text("0");
    $('#Reduction_kharif_Cotton_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Cotton_Saving_value').text("0");

    var reduction_kharif_cotton_water_req = $('#reduction_kharif_cotton_water_req').val();
    if (reduction_kharif_cotton_water_req == "") {
        reduction_kharif_cotton_water_req = 0;
    }

    var Reduction_kharif_Cotton_UserVale = $('#Reduction_kharif_Cotton_UserVale').val();
    var Reduction_kharif_Cotton_Quantum_UserValue = $('#Reduction_kharif_Cotton_Quantum_UserValue').val();
    if (Reduction_kharif_Cotton_UserVale != "" && Reduction_kharif_Cotton_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_cotton_waterdemand = parseFloat(Reduction_kharif_Cotton_UserVale) * parseFloat(reduction_kharif_cotton_water_req) * 0.001;
        $('#Reduction_kharif_Cotton_water_Demand_value').text(reduction_kharif_cotton_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Cotton_Quantum_UserValue2').text(Reduction_kharif_Cotton_Quantum_UserValue);
        //save water
        reduction_kharif_cotton_gw_demand = parseFloat(reduction_kharif_cotton_waterdemand) - parseFloat(Reduction_kharif_Cotton_Quantum_UserValue);
        $('#Reduction_kharif_Cotton_Saving_value').text(reduction_kharif_cotton_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_cotton_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_cotton_gw_demand;

    }
    //Melon



    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Melon_water_Demand_value').text("0");
    $('#Reduction_kharif_Melon_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Melon_Saving_value').text("0");

    var reduction_kharif_melon_water_req = $('#reduction_kharif_melon_water_req').val();
    if (reduction_kharif_melon_water_req == "") {
        reduction_kharif_melon_water_req = 0;
    }

    var Reduction_kharif_Melon_UserVale = $('#Reduction_kharif_Melon_UserVale').val();
    var Reduction_kharif_Melon_Quantum_UserValue = $('#Reduction_kharif_Melon_Quantum_UserValue').val();
    if (Reduction_kharif_Melon_UserVale != "" && Reduction_kharif_Melon_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_melon_waterdemand = parseFloat(Reduction_kharif_Melon_UserVale) * parseFloat(reduction_kharif_melon_water_req) * 0.001;
        $('#Reduction_kharif_Melon_water_Demand_value').text(reduction_kharif_melon_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Melon_Quantum_UserValue2').text(reduction_kharif_melon_waterdemand);
        //save water
        reduction_kharif_melon_gw_demand = parseFloat(reduction_kharif_melon_waterdemand) - parseFloat(Reduction_kharif_Melon_Quantum_UserValue);
        $('#Reduction_kharif_Melon_Saving_value').text(reduction_kharif_melon_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_melon_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_melon_gw_demand;

    }
    //Citrus



    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Citrus_water_Demand_value').text("0");
    $('#Reduction_kharif_Citrus_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Citrus_Saving_value').text("0");

    var reduction_kharif_citrus_water_req = $('#reduction_kharif_citrus_water_req').val();
    if (reduction_kharif_citrus_water_req == "") {
        reduction_kharif_citrus_water_req = 0;
    }

    var Reduction_kharif_Citrus_UserVale = $('#Reduction_kharif_Citrus_UserVale').val();
    var Reduction_kharif_Citrus_Quantum_UserValue = $('#Reduction_kharif_Citrus_Quantum_UserValue').val();
    if (Reduction_kharif_Citrus_UserVale != "" && Reduction_kharif_Citrus_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_citrus_waterdemand = parseFloat(Reduction_kharif_Citrus_UserVale) * parseFloat(reduction_kharif_citrus_water_req) * 0.001;
        $('#Reduction_kharif_Citrus_water_Demand_value').text(reduction_kharif_citrus_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Citrus_Quantum_UserValue2').text(Reduction_kharif_Citrus_Quantum_UserValue);
        //save water
        reduction_kharif_citrus_gw_demand = parseFloat(reduction_kharif_citrus_waterdemand) - parseFloat(Reduction_kharif_Citrus_Quantum_UserValue);
        $('#Reduction_kharif_Citrus_Saving_value').text(reduction_kharif_citrus_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_citrus_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_citrus_gw_demand;

    }
    //Penuts


    //$('#Reduction_Kharif_Water_demand').text("0");
    //$('#Reduction_Kharif_Water_Save').text("0");
    //$('#Reduction_kharif_Peanut_water_Demand_value').text("0");
    //$('#Reduction_kharif_Peanut_Quantum_UserValue2').text("0");
    //$('#Reduction_kharif_Peanut_Saving_value').text("0");


    //var reduction_kharif_peanut_water_req = $('#reduction_kharif_peanut_water_req').val();
    //if (reduction_kharif_peanut_water_req == "") {
    //    reduction_kharif_peanut_water_req = 0;
    //}
    //var Reduction_kharif_Peanut_UserVale = $('#Reduction_kharif_Peanut_UserVale').val();
    //var Reduction_kharif_Peanut_Quantum_UserValue = $('#Reduction_kharif_Peanut_Quantum_UserValue').val();
    //if (Reduction_kharif_Peanut_UserVale != "" && Reduction_kharif_Peanut_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_kharif_peanut_waterdemand = parseFloat(Reduction_kharif_Peanut_UserVale) * parseFloat(reduction_kharif_peanut_water_req) * 0.001;
    //    $('#Reduction_kharif_Peanut_water_Demand_value').text(reduction_kharif_peanut_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_kharif_Peanut_Quantum_UserValue2').text(Reduction_kharif_Peanut_Quantum_UserValue);
    //    //save water
    //    reduction_kharif_peanut_gw_demand = parseFloat(reduction_kharif_peanut_waterdemand) - parseFloat(Reduction_kharif_Peanut_Quantum_UserValue);
    //    $('#Reduction_kharif_Peanut_Saving_value').text(reduction_kharif_peanut_gw_demand.toFixed(2));


    //    //total
    //    Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_peanut_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
    //    Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_peanut_gw_demand;

    //}

    //Horticulture


    $('#Reduction_Kharif_Water_demand').text("0");
    $('#Reduction_Kharif_Water_Save').text("0");
    $('#Reduction_kharif_Horticulture_water_Demand_value').text("0");
    $('#Reduction_kharif_Horticulture_Quantum_UserValue2').text("0");
    $('#Reduction_kharif_Horticulture_Saving_value').text("0");

    var reduction_kharif_horticulture_water_req = $('#reduction_kharif_horticulture_water_req').val();
    if (reduction_kharif_horticulture_water_req == "") {
        reduction_kharif_horticulture_water_req = 0;
    }

    var Reduction_kharif_Horticulture_UserVale = $('#Reduction_kharif_Horticulture_UserVale').val();
    var Reduction_kharif_Horticulture_Quantum_UserValue = $('#Reduction_kharif_Horticulture_Quantum_UserValue').val();
    if (Reduction_kharif_Horticulture_UserVale != "" && Reduction_kharif_Horticulture_Quantum_UserValue != "") {

        //water demand
        reduction_kharif_horticulture_waterdemand = parseFloat(Reduction_kharif_Horticulture_UserVale) * parseFloat(reduction_kharif_horticulture_water_req) * 0.001;
        $('#Reduction_kharif_Horticulture_water_Demand_value').text(reduction_kharif_horticulture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_kharif_Horticulture_Quantum_UserValue2').text(Reduction_kharif_Horticulture_Quantum_UserValue);
        //save water
        reduction_kharif_horticulture_gw_demand = parseFloat(reduction_kharif_horticulture_waterdemand) - parseFloat(Reduction_kharif_Horticulture_Quantum_UserValue);
        $('#Reduction_kharif_Horticulture_Saving_value').text(reduction_kharif_horticulture_gw_demand.toFixed(2));



        //total
        Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_horticulture_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
        Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_horticulture_gw_demand;

    }





    //var reduction_kharif_othercrop_area = $('#reduction_kharif_othercrop_area').val();
    //var reduction_kharif_othercrop_quantum_value = $('#reduction_kharif_othercrop_quantum_value').val();
    //if (reduction_kharif_othercrop_area != "" && reduction_kharif_othercrop_quantum_value != "") {

    //    //water demand
    //    reduction_kharif_othercrop_gw_waterdemand = parseFloat(reduction_kharif_othercrop_area) * 470 * 0.001;
    //    $('#reduction_kharif_othercrop_gw_waterdemand').text(reduction_kharif_othercrop_gw_waterdemand.toFixed(2));
    //    //quantum
    //    $('#reduction_kharif_othercrop_quantum_value').text(reduction_kharif_othercrop_quantum_value);
    //    //save water
    //    reduction_kharif_othercrop_reduc_gw_demand = parseFloat(reduction_kharif_othercrop_gw_waterdemand) - parseFloat(reduction_kharif_othercrop_quantum_value);
    //    $('#reduction_kharif_othercrop_reduc_gw_demand').text(reduction_kharif_othercrop_reduc_gw_demand.toFixed(2));



    //    //total
    //    Reduction_Total_Water_Demand_Kharif_Crops = reduction_kharif_othercrop_gw_waterdemand + Reduction_Total_Water_Demand_Kharif_Crops;
    //    Reduction_in_GW_through_kharif_surface_water = Reduction_in_GW_through_kharif_surface_water + reduction_kharif_othercrop_reduc_gw_demand;

    //}





    //total karif binding
    $('#Reduction_Total_Water_Demand_Kharif_Crops').text(Reduction_Total_Water_Demand_Kharif_Crops.toFixed(2));
    $('#Reduction_in_GW_through_kharif_surface_water1').text(Reduction_in_GW_through_kharif_surface_water.toFixed(2));

    //side paneel binding
    $('#Reduction_Kharif_Water_demand1').text(Reduction_Total_Water_Demand_Kharif_Crops.toFixed(2));
    $('#Reduction_Kharif_Water_Save').text(Reduction_in_GW_through_kharif_surface_water.toFixed(2));


    var Reduction_in_GW_through_kharif_surface_water1 = $('#Reduction_in_GW_through_kharif_surface_water1').text();;

    if (Reduction_in_GW_through_kharif_surface_water1 == "") {
        Reduction_in_GW_through_kharif_surface_water1 = 0;
    }

    var Reduction_in_GW_through_Rabi_surface_water = $('#Reduction_in_GW_through_Rabi_surface_water').text();;

    if (Reduction_in_GW_through_Rabi_surface_water == "") {
        Reduction_in_GW_through_Rabi_surface_water = 0;
    }

    var Reduction_in_GW_through_Summer_surface_water = $('#Reduction_in_GW_through_Summer_surface_water').text();;

    if (Reduction_in_GW_through_Summer_surface_water == "") {
        Reduction_in_GW_through_Summer_surface_water = 0;
    }

    var TotalAnnual_Reduction_Reduction = parseFloat(Reduction_in_GW_through_kharif_surface_water1) + parseFloat(Reduction_in_GW_through_Rabi_surface_water) + parseFloat(Reduction_in_GW_through_Summer_surface_water);
    $('#TotalAnnual_Reduction_Reduction').text(TotalAnnual_Reduction_Reduction.toFixed(2));



}
var reduction_rabi_sericulture_waterdemand = 0;
var reduction_rabi_sericulture_gw_demand = 0;
var reduction_rabi_tomoto_waterdemand = 0;
var reduction_rabi_tomoto_gw_demand = 0;


//var reduction_rabi_cabbage_waterdemand = 0;
//var reduction_rabi_cabbage_gw_demand = 0;


//var reduction_rabi_beans_waterdemand = 0;
//var reduction_rabi_beans_gw_demand = 0;

var reduction_rabi_floriculture_waterdemand = 0;
var reduction_rabi_floriculture_gw_demand = 0;


//var reduction_rabi_potato_waterdemand = 0;
//var reduction_rabi_potato_gw_demand = 0;

//var reduction_rabi_cucuber_waterdemand = 0;
//var reduction_rabi_cucuber_gw_demand = 0;


var reduction_rabi_ragi_waterdemand = 0;
var reduction_rabi_ragi_gw_demand = 0;


var reduction_rabi_sugarcane_waterdemand = 0;
var reduction_rabi_sugarcane_gw_demand = 0;

var reduction_rabi_maize_waterdemand = 0;
var reduction_rabi_maize_gw_demand = 0;


var reduction_rabi_fodder_waterdemand = 0;
var reduction_rabi_fodder_gw_demand = 0;


var reduction_rabi_paddy_waterdemand = 0;
var reduction_rabi_paddy_gw_demand = 0;


var reduction_rabi_alfalfa_waterdemand = 0;
var reduction_rabi_alfalfa_gw_demand = 0;


//var reduction_rabi_onion_waterdemand = 0;
//var reduction_rabi_onion_gw_demand = 0;


var reduction_rabi_horticulture_waterdemand = 0;
var reduction_rabi_horticulture_gw_demand = 0;


var reduction_rabi_sunflower_waterdemand = 0;
var reduction_rabi_sunflower_gw_demand = 0;

var reduction_rabi_othercrop_gw_waterdemand = 0;
var reduction_rabi_othercrop_reduc_gw_demand = 0;

var reduction_rabi_othercrop_waterdemand1 = 0;
var reduction_rabi_othercrop_reduction_gw_demand1 = 0;

var reduction_rabi_othercrop_waterdemand2 = 0;
var reduction_rabi_othercrop_reduction_gw_demand2 = 0;

var reduction_rabi_othercrop_waterdemand3 = 0;
var reduction_rabi_othercrop_reduction_gw_demand3 = 0;


var reduction_rabi_othercrop_waterdemand4 = 0;
var reduction_rabi_othercrop_reduction_gw_demand4 = 0;

var reduction_rabi_othercrop_waterdemand5 = 0;
var reduction_rabi_othercrop_reduction_gw_demand5 = 0;


function Reduction_Rabi_WaterRequire() {
    //Sericulture

    
    var Reduction_Rabi_Sericulture_UserVale1 = 0;
    var Reduction_Rabi_Sericulture_Saving_value1 = 0;
    reduction_rabi_sericulture_waterdemand = 0;
    reduction_rabi_sericulture_gw_demand = 0;



    reduction_rabi_tomoto_waterdemand = 0;
    reduction_rabi_tomoto_gw_demand = 0;


    //reduction_rabi_cabbage_waterdemand = 0;
    //reduction_rabi_cabbage_gw_demand = 0;


    //reduction_rabi_beans_waterdemand = 0;
    //reduction_rabi_beans_gw_demand = 0;

    reduction_rabi_floriculture_waterdemand = 0;
    reduction_rabi_floriculture_gw_demand = 0;


    //reduction_rabi_potato_waterdemand = 0;
    //reduction_rabi_potato_gw_demand = 0;

    //reduction_rabi_cucuber_waterdemand = 0;
    //reduction_rabi_cucuber_gw_demand = 0;


    reduction_rabi_ragi_waterdemand = 0;
    reduction_rabi_ragi_gw_demand = 0;


    reduction_rabi_sugarcane_waterdemand = 0;
    reduction_rabi_sugarcane_gw_demand = 0;

    reduction_rabi_maize_waterdemand = 0;
    reduction_rabi_maize_gw_demand = 0;


    reduction_rabi_fodder_waterdemand = 0;
    reduction_rabi_fodder_gw_demand = 0;


    reduction_rabi_paddy_waterdemand = 0;
    reduction_rabi_paddy_gw_demand = 0;


    reduction_rabi_alfalfa_waterdemand = 0;
    reduction_rabi_alfalfa_gw_demand = 0;


    //reduction_rabi_onion_waterdemand = 0;
    //reduction_rabi_onion_gw_demand = 0;


    reduction_rabi_horticulture_waterdemand = 0;
    reduction_rabi_horticulture_gw_demand = 0;


    reduction_rabi_sunflower_waterdemand = 0;
    reduction_rabi_sunflower_gw_demand = 0;

    reduction_rabi_othercrop_gw_waterdemand = 0;
    reduction_rabi_othercrop_reduc_gw_demand = 0;

    reduction_rabi_othercrop_waterdemand1 = 0;
    reduction_rabi_othercrop_reduction_gw_demand1 = 0;

    reduction_rabi_othercrop_waterdemand2 = 0;
    reduction_rabi_othercrop_reduction_gw_demand2 = 0;

    reduction_rabi_othercrop_waterdemand3 = 0;
    reduction_rabi_othercrop_reduction_gw_demand3 = 0;


    reduction_rabi_othercrop_waterdemand4 = 0;
    reduction_rabi_othercrop_reduction_gw_demand4 = 0;

    reduction_rabi_othercrop_waterdemand5 = 0;
    reduction_rabi_othercrop_reduction_gw_demand5 = 0;

    var Reduction_in_GW_through_Rabi_surface_water = 0;
    var Reduction_Total_Water_Demand_Rabi_Crops = 0;




    //Other
    var reduction_rabi_othercrop_area1 = $('#reduction_rabi_othercrop_area1').val();
    if (typeof reduction_rabi_othercrop_area1 == 'undefined') {
        reduction_rabi_othercrop_area1 = 0;
    }
    var reduction_rabi_othercrop_quantum_uservalue1 = $('#reduction_rabi_othercrop_quantum_uservalue1').val();
    if (typeof reduction_rabi_othercrop_quantum_uservalue1 == 'undefined') {
        reduction_rabi_othercrop_quantum_uservalue1 = 0;
    }
    var reduction_rabi_othercrop_water_req1 = $('#reduction_rabi_othercrop_water_req1').val();
    if (typeof reduction_rabi_othercrop_water_req1 == 'undefined') {
        reduction_rabi_othercrop_water_req1 = 0;
    }
    if (reduction_rabi_othercrop_water_req1 == "") {
        reduction_rabi_othercrop_water_req1 = 0;
    }
    if (reduction_rabi_othercrop_area1 != "" && reduction_rabi_othercrop_quantum_uservalue1 != "") {
        //water demand
        reduction_rabi_othercrop_waterdemand1 = parseFloat(reduction_rabi_othercrop_area1) * parseFloat(reduction_rabi_othercrop_water_req1) * 0.001;
        $('#reduction_rabi_othercrop_waterdemand1').text(reduction_rabi_othercrop_waterdemand1.toFixed(2));
        //quantum
        $('#reduction_rabi_othercrop_quantum_uservalue1').text(reduction_rabi_othercrop_quantum_uservalue1);
        //save water
        reduction_rabi_othercrop_reduction_gw_demand1 = parseFloat(reduction_rabi_othercrop_waterdemand1) - parseFloat(reduction_rabi_othercrop_quantum_uservalue1);
        $('#reduction_rabi_othercrop_reduction_gw_demand1').text(reduction_rabi_othercrop_reduction_gw_demand1.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_othercrop_waterdemand1 + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_othercrop_reduction_gw_demand1;

    }


    var reduction_rabi_othercrop_area2 = $('#reduction_rabi_othercrop_area2').val();
    if (typeof reduction_rabi_othercrop_area2 == 'undefined') {
        reduction_rabi_othercrop_area2 = 0;
    }
    var reduction_rabi_othercrop_quantum_uservalue2 = $('#reduction_rabi_othercrop_quantum_uservalue2').val();
    if (typeof reduction_rabi_othercrop_quantum_uservalue2 == 'undefined') {
        reduction_rabi_othercrop_quantum_uservalue2 = 0;
    }
    var reduction_rabi_othercrop_water_req2 = $('#reduction_rabi_othercrop_water_req2').val();
    if (typeof reduction_rabi_othercrop_water_req2 == 'undefined') {
        reduction_rabi_othercrop_water_req2 = 0;
    }
    if (reduction_rabi_othercrop_water_req2 == "") {
        reduction_rabi_othercrop_water_req2 = 0;
    }
    if (reduction_rabi_othercrop_area2 != "" && reduction_rabi_othercrop_quantum_uservalue2 != "") {
        //water demand
        reduction_rabi_othercrop_waterdemand2 = parseFloat(reduction_rabi_othercrop_area2) * parseFloat(reduction_rabi_othercrop_water_req2) * 0.001;
        $('#reduction_rabi_othercrop_waterdemand2').text(reduction_rabi_othercrop_waterdemand2.toFixed(2));
        //quantum
        $('#reduction_rabi_othercrop_quantum_uservalue2').text(reduction_rabi_othercrop_quantum_uservalue2);
        //save water
        reduction_rabi_othercrop_reduction_gw_demand2 = parseFloat(reduction_rabi_othercrop_waterdemand2) - parseFloat(reduction_rabi_othercrop_quantum_uservalue2);
        $('#reduction_rabi_othercrop_reduction_gw_demand2').text(reduction_rabi_othercrop_reduction_gw_demand2.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_othercrop_waterdemand2 + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_othercrop_reduction_gw_demand2;

    }

    var reduction_rabi_othercrop_area3 = $('#reduction_rabi_othercrop_area3').val();
    if (typeof reduction_rabi_othercrop_area3 == 'undefined') {
        reduction_rabi_othercrop_area3 = 0;
    }
    var reduction_rabi_othercrop_quantum_uservalue3 = $('#reduction_rabi_othercrop_quantum_uservalue3').val();
    if (typeof reduction_rabi_othercrop_quantum_uservalue3 == 'undefined') {
        reduction_rabi_othercrop_quantum_uservalue3 = 0;
    }
    var reduction_rabi_othercrop_water_req3 = $('#reduction_rabi_othercrop_water_req3').val();
    if (typeof reduction_rabi_othercrop_water_req3 == 'undefined') {
        reduction_rabi_othercrop_water_req3 = 0;
    }
    if (reduction_rabi_othercrop_water_req3 == "") {
        reduction_rabi_othercrop_water_req3 = 0;
    }
    if (reduction_rabi_othercrop_area3 != "" && reduction_rabi_othercrop_quantum_uservalue3 != "") {
        //water demand
        reduction_rabi_othercrop_waterdemand3 = parseFloat(reduction_rabi_othercrop_area3) * parseFloat(reduction_rabi_othercrop_water_req3) * 0.001;
        $('#reduction_rabi_othercrop_waterdemand3').text(reduction_rabi_othercrop_waterdemand3.toFixed(2));
        //quantum
        $('#reduction_rabi_othercrop_quantum_uservalue3').text(reduction_rabi_othercrop_quantum_uservalue3);
        //save water
        reduction_rabi_othercrop_reduction_gw_demand3 = parseFloat(reduction_rabi_othercrop_waterdemand3) - parseFloat(reduction_rabi_othercrop_quantum_uservalue3);
        $('#reduction_rabi_othercrop_reduction_gw_demand3').text(reduction_rabi_othercrop_reduction_gw_demand3.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_othercrop_waterdemand3 + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_othercrop_reduction_gw_demand3;

    }


    var reduction_rabi_othercrop_area4 = $('#reduction_rabi_othercrop_area4').val();
    if (typeof reduction_rabi_othercrop_area4 == 'undefined') {
        reduction_rabi_othercrop_area4 = 0;
    }
    var reduction_rabi_othercrop_quantum_uservalue4 = $('#reduction_rabi_othercrop_quantum_uservalue4').val();
    if (typeof reduction_rabi_othercrop_quantum_uservalue4 == 'undefined') {
        reduction_rabi_othercrop_quantum_uservalue4 = 0;
    }
    var reduction_rabi_othercrop_water_req4 = $('#reduction_rabi_othercrop_water_req4').val();
    if (typeof reduction_rabi_othercrop_water_req4 == 'undefined') {
        reduction_rabi_othercrop_water_req4 = 0;
    }
    if (reduction_rabi_othercrop_water_req4 == "") {
        reduction_rabi_othercrop_water_req4 = 0;
    }
    if (reduction_rabi_othercrop_area4 != "" && reduction_rabi_othercrop_quantum_uservalue4 != "") {
        //water demand
        reduction_rabi_othercrop_waterdemand4 = parseFloat(reduction_rabi_othercrop_area4) * parseFloat(reduction_rabi_othercrop_water_req4) * 0.001;
        $('#reduction_rabi_othercrop_waterdemand4').text(reduction_rabi_othercrop_waterdemand4.toFixed(2));
        //quantum
        $('#reduction_rabi_othercrop_quantum_uservalue4').text(reduction_rabi_othercrop_quantum_uservalue4);
        //save water
        reduction_rabi_othercrop_reduction_gw_demand4 = parseFloat(reduction_rabi_othercrop_waterdemand4) - parseFloat(reduction_rabi_othercrop_quantum_uservalue4);
        $('#reduction_rabi_othercrop_reduction_gw_demand4').text(reduction_rabi_othercrop_reduction_gw_demand4.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_othercrop_waterdemand4 + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_othercrop_reduction_gw_demand4;

    }

    var reduction_rabi_othercrop_area5 = $('#reduction_rabi_othercrop_area5').val();
    if (typeof reduction_rabi_othercrop_area5 == 'undefined') {
        reduction_rabi_othercrop_area5 = 0;
    }
    var reduction_rabi_othercrop_quantum_uservalue5 = $('#reduction_rabi_othercrop_quantum_uservalue5').val();
    if (typeof reduction_rabi_othercrop_quantum_uservalue5 == 'undefined') {
        reduction_rabi_othercrop_quantum_uservalue5 = 0;
    }
    var reduction_rabi_othercrop_water_req5 = $('#reduction_rabi_othercrop_water_req5').val();
    if (typeof reduction_rabi_othercrop_water_req5 == 'undefined') {
        reduction_rabi_othercrop_water_req5 = 0;
    }
    if (reduction_rabi_othercrop_water_req5 == "") {
        reduction_rabi_othercrop_water_req5 = 0;
    }
    if (reduction_rabi_othercrop_area5 != "" && reduction_rabi_othercrop_quantum_uservalue5 != "") {
        //water demand
        reduction_rabi_othercrop_waterdemand5 = parseFloat(reduction_rabi_othercrop_area5) * parseFloat(reduction_rabi_othercrop_water_req5) * 0.001;
        $('#reduction_rabi_othercrop_waterdemand5').text(reduction_rabi_othercrop_waterdemand5.toFixed(2));
        //quantum
        $('#reduction_rabi_othercrop_quantum_uservalue5').text(reduction_rabi_othercrop_quantum_uservalue5);
        //save water
        reduction_rabi_othercrop_reduction_gw_demand5 = parseFloat(reduction_rabi_othercrop_waterdemand5) - parseFloat(reduction_rabi_othercrop_quantum_uservalue5);
        $('#reduction_rabi_othercrop_reduction_gw_demand5').text(reduction_rabi_othercrop_reduction_gw_demand5.toFixed(2));



        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_othercrop_waterdemand5 + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_othercrop_reduction_gw_demand5;

    }



    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Sericulture_water_Demand_value').text("0");
    $('#Reduction_Rabi_Sericulture_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Sericulture_Saving_value').text("0");

    var reduction_rabi_sericulture_water_req = $('#reduction_rabi_sericulture_water_req').val();
    if (reduction_rabi_sericulture_water_req == "") {
        reduction_rabi_sericulture_water_req = 0;
    }

    var Reduction_Rabi_Sericulture_UserVale = $('#Reduction_Rabi_Sericulture_UserVale').val();
    var Reduction_Rabi_Sericulture_Quantum_UserValue = $('#Reduction_Rabi_Sericulture_Quantum_UserValue').val();
    if (Reduction_Rabi_Sericulture_UserVale != "" && Reduction_Rabi_Sericulture_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_sericulture_waterdemand = parseFloat(Reduction_Rabi_Sericulture_UserVale) * parseFloat(reduction_rabi_sericulture_water_req) * 0.001;
        $('#Reduction_Rabi_Sericulture_water_Demand_value').text(reduction_rabi_sericulture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Sericulture_Quantum_UserValue2').text(Reduction_Rabi_Sericulture_Quantum_UserValue);
        //save water
        reduction_rabi_sericulture_gw_demand = parseFloat(reduction_rabi_sericulture_waterdemand) - parseFloat(Reduction_Rabi_Sericulture_Quantum_UserValue);
        $('#Reduction_Rabi_Sericulture_Saving_value').text(reduction_rabi_sericulture_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_sericulture_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_sericulture_gw_demand;

    }

    //Tomota

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Tomota_water_Demand_value').text("0");
    $('#Reduction_Rabi_Tomota_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Tomota_Saving_value').text("0");


    var reduction_rabi_tomoto_water_req = $('#reduction_kharif_tomoto_water_req').val();
    var Reduction_Rabi_Tomota_UserVale = $('#Reduction_Rabi_Tomota_UserVale').val();
    var Reduction_Rabi_Tomota_Quantum_UserValue = $('#Reduction_Rabi_Tomota_Quantum_UserValue').val();
    if (reduction_rabi_tomoto_water_req == "") {
        reduction_rabi_tomoto_water_req = 0;
    }
    if (Reduction_Rabi_Tomota_UserVale != "" && Reduction_Rabi_Tomota_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_tomoto_waterdemand = parseFloat(Reduction_Rabi_Tomota_UserVale) * parseFloat(reduction_rabi_tomoto_water_req) * 0.001;
        $('#Reduction_Rabi_Tomota_water_Demand_value').text(reduction_rabi_tomoto_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Tomota_Quantum_UserValue2').text(Reduction_Rabi_Tomota_Quantum_UserValue);
        //save water
        reduction_rabi_tomoto_gw_demand = parseFloat(reduction_rabi_tomoto_waterdemand) - parseFloat(Reduction_Rabi_Tomota_Quantum_UserValue);
        $('#Reduction_Rabi_Tomota_Saving_value').text(reduction_rabi_tomoto_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_tomoto_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_tomoto_gw_demand;

    }




    //cabage

    //$('#Reduction_Rabi_Water_demand').text("0");
    //$('#Reduction_Rabi_Water_Save').text("0");
    //$('#Reduction_Rabi_Cabbage_water_Demand_value').text("0");
    //$('#Reduction_Rabi_Cabbage_Quantum_UserValue2').text("0");
    //$('#Reduction_Rabi_Cabbage_Saving_value').text("0");

    //var reduction_rabi_cabbage_water_req = $('#reduction_rabi_cabbage_water_req').val();
    //if (reduction_rabi_cabbage_water_req == "") {
    //    reduction_rabi_cabbage_water_req = 0;
    //}

    //var Reduction_Rabi_Cabbage_UserVale = $('#Reduction_Rabi_Cabbage_UserVale').val();
    //var Reduction_Rabi_Cabbage_Quantum_UserValue = $('#Reduction_Rabi_Cabbage_Quantum_UserValue').val();
    //if (Reduction_Rabi_Cabbage_UserVale != "" && Reduction_Rabi_Cabbage_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_rabi_cabbage_waterdemand = parseFloat(Reduction_Rabi_Cabbage_UserVale) * parseFloat(reduction_rabi_cabbage_water_req) * 0.001;
    //    $('#Reduction_Rabi_Cabbage_water_Demand_value').text(reduction_rabi_cabbage_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_Rabi_Cabbage_Quantum_UserValue2').text(Reduction_Rabi_Cabbage_Quantum_UserValue);
    //    //save water
    //    reduction_rabi_cabbage_gw_demand = parseFloat(reduction_rabi_cabbage_waterdemand) - parseFloat(Reduction_Rabi_Cabbage_Quantum_UserValue);
    //    $('#Reduction_Rabi_Cabbage_Saving_value').text(reduction_rabi_cabbage_gw_demand.toFixed(2));


    //    //total
    //    Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_cabbage_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
    //    Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_cabbage_gw_demand;

    //}
    ////Beans


    //$('#Reduction_Rabi_Water_demand').text("0");
    //$('#Reduction_Rabi_Water_Save').text("0");
    //$('#Reduction_Rabi_Beans_water_Demand_value').text("0");
    //$('#Reduction_Rabi_Beans_Quantum_UserValue2').text("0");
    //$('#Reduction_Rabi_Beans_Saving_value').text("0");

    //var reduction_rabi_beans_water_req = $('#reduction_rabi_beans_water_req').val();
    //if (reduction_rabi_beans_water_req == "") {
    //    reduction_rabi_beans_water_req = 0;
    //}

    //var Reduction_Rabi_Beans_UserVale = $('#Reduction_Rabi_Beans_UserVale').val();
    //var Reduction_Rabi_Beans_Quantum_UserValue = $('#Reduction_Rabi_Beans_Quantum_UserValue').val();
    //if (Reduction_Rabi_Beans_UserVale != "" && Reduction_Rabi_Beans_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_rabi_beans_waterdemand = parseFloat(Reduction_Rabi_Beans_UserVale) * parseFloat(reduction_rabi_beans_water_req) * 0.001;
    //    $('#Reduction_Rabi_Beans_water_Demand_value').text(reduction_rabi_beans_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_Rabi_Beans_Quantum_UserValue2').text(Reduction_Rabi_Beans_Quantum_UserValue);
    //    //save water
    //    reduction_rabi_beans_gw_demand = parseFloat(reduction_rabi_beans_waterdemand) - parseFloat(Reduction_Rabi_Beans_Quantum_UserValue);
    //    $('#Reduction_Rabi_Beans_Saving_value').text(reduction_rabi_beans_gw_demand.toFixed(2));


    //    //total
    //    Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_beans_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
    //    Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_beans_gw_demand;

    //}
    //Floriculture

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Floriculture_water_Demand_value').text("0");
    $('#Reduction_Rabi_Floriculture_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Floriculture_Saving_value').text("0");

    var reduction_rabi_floriculture_water_req = $('#reduction_rabi_floriculture_water_req').val();
    if (reduction_rabi_floriculture_water_req == "") {
        reduction_rabi_floriculture_water_req = 0;
    }

    var Reduction_Rabi_Floriculture_UserVale = $('#Reduction_Rabi_Floriculture_UserVale').val();
    var Reduction_Rabi_Floriculture_Quantum_UserValue = $('#Reduction_Rabi_Floriculture_Quantum_UserValue').val();
    if (Reduction_Rabi_Floriculture_UserVale != "" && Reduction_Rabi_Floriculture_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_floriculture_waterdemand = parseFloat(Reduction_Rabi_Floriculture_UserVale) * parseFloat(reduction_rabi_floriculture_water_req) * 0.001;
        $('#Reduction_Rabi_Floriculture_water_Demand_value').text(reduction_rabi_floriculture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Floriculture_Quantum_UserValue2').text(Reduction_Rabi_Floriculture_Quantum_UserValue);
        //save water
        reduction_rabi_floriculture_gw_demand = parseFloat(reduction_rabi_floriculture_waterdemand) - parseFloat(Reduction_Rabi_Floriculture_Quantum_UserValue);
        $('#Reduction_Rabi_Floriculture_Saving_value').text(reduction_rabi_floriculture_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_floriculture_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_floriculture_gw_demand;

    }
    //potato


    //$('#Reduction_Rabi_Water_demand').text("0");
    //$('#Reduction_Rabi_Water_Save').text("0");
    //$('#Reduction_Rabi_Potato_water_Demand_value').text("0");
    //$('#Reduction_Rabi_Potato_Quantum_UserValue2').text("0");
    //$('#Reduction_Rabi_Potato_Saving_value').text("0");

    //var reduction_rabi_potato_water_req = $('#reduction_rabi_potato_water_req').val();
    //if (reduction_rabi_potato_water_req == "") {
    //    reduction_rabi_potato_water_req = 0;
    //}

    //var Reduction_Rabi_Potato_UserVale = $('#Reduction_Rabi_Potato_UserVale').val();
    //var Reduction_Rabi_Potato_Quantum_UserValue = $('#Reduction_Rabi_Potato_Quantum_UserValue').val();
    //if (Reduction_Rabi_Potato_UserVale != "" && Reduction_Rabi_Potato_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_rabi_potato_waterdemand = parseFloat(Reduction_Rabi_Potato_UserVale) * parseFloat(reduction_rabi_potato_water_req) * 0.001;
    //    $('#Reduction_Rabi_Potato_water_Demand_value').text(reduction_rabi_potato_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_Rabi_Potato_Quantum_UserValue2').text(Reduction_Rabi_Potato_Quantum_UserValue);
    //    //save water
    //    reduction_rabi_potato_gw_demand = parseFloat(reduction_rabi_potato_waterdemand) - parseFloat(Reduction_Rabi_Potato_Quantum_UserValue);
    //    $('#Reduction_Rabi_Potato_Saving_value').text(reduction_rabi_potato_gw_demand.toFixed(2));

    //    //total
    //    Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_potato_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
    //    Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_potato_gw_demand;

    //}

    ////Cucumber



    //$('#Reduction_Rabi_Water_demand').text("0");
    //$('#Reduction_Rabi_Water_Save').text("0");
    //$('#Reduction_Rabi_Cucumber_water_Demand_value').text("0");
    //$('#Reduction_Rabi_Cucumber_Quantum_UserValue2').text("0");
    //$('#Reduction_Rabi_Cucumber_Saving_value').text("0");

    //var reduction_rabi_cucumber_water_req = $('#reduction_rabi_cucumber_water_req').val();
    //if (reduction_rabi_cucumber_water_req == "") {
    //    reduction_rabi_cucumber_water_req = 0;
    //}

    //var Reduction_Rabi_Cucumber_UserVale = $('#Reduction_Rabi_Cucumber_UserVale').val();
    //var Reduction_Rabi_Cucumber_Quantum_UserValue = $('#Reduction_Rabi_Cucumber_Quantum_UserValue').val();
    //if (Reduction_Rabi_Cucumber_UserVale != "" && Reduction_Rabi_Cucumber_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_rabi_cucuber_waterdemand = parseFloat(Reduction_Rabi_Cucumber_UserVale) * parseFloat(reduction_rabi_cucumber_water_req) * 0.001;
    //    $('#Reduction_Rabi_Cucumber_water_Demand_value').text(reduction_rabi_cucuber_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_Rabi_Cucumber_Quantum_UserValue2').text(Reduction_Rabi_Cucumber_Quantum_UserValue);
    //    //save water
    //    reduction_rabi_cucuber_gw_demand = parseFloat(reduction_rabi_cucuber_waterdemand) - parseFloat(Reduction_Rabi_Cucumber_Quantum_UserValue);
    //    $('#Reduction_Rabi_Cucumber_Saving_value').text(reduction_rabi_cucuber_gw_demand.toFixed(2));

    //    //total
    //    Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_cucuber_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
    //    Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_cucuber_gw_demand;

    //}

    //Ragi

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Ragi_water_Demand_value').text("0");
    $('#Reduction_Rabi_Ragi_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Ragi_Saving_value').text("0");

    var reduction_rabi_ragi_water_req = $('#reduction_rabi_ragi_water_req').val();
    if (reduction_rabi_ragi_water_req == "") {
        reduction_rabi_ragi_water_req = 0;
    }
    var Reduction_Rabi_Ragi_UserVale = $('#Reduction_Rabi_Ragi_UserVale').val();
    var Reduction_Rabi_Ragi_Quantum_UserValue = $('#Reduction_Rabi_Ragi_Quantum_UserValue').val();
    if (Reduction_Rabi_Ragi_UserVale != "" && Reduction_Rabi_Ragi_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_ragi_waterdemand = parseFloat(Reduction_Rabi_Ragi_UserVale) * parseFloat(reduction_rabi_ragi_water_req) * 0.001;
        $('#Reduction_Rabi_Ragi_water_Demand_value').text(reduction_rabi_ragi_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Ragi_Quantum_UserValue2').text(Reduction_Rabi_Ragi_Quantum_UserValue);
        //save water
        reduction_rabi_ragi_gw_demand = parseFloat(reduction_rabi_ragi_waterdemand) - parseFloat(Reduction_Rabi_Ragi_Quantum_UserValue);
        $('#Reduction_Rabi_Ragi_Saving_value').text(reduction_rabi_ragi_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_ragi_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_ragi_gw_demand;

    }

    //Sugarcane


    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Sugarcane_water_Demand_value').text("0");
    $('#Reduction_Rabi_Sugarcane_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Sugarcane_Saving_value').text("0");

    var reduction_rabi_sugarcane_water_req = $('#reduction_rabi_sugarcane_water_req').val();
    if (reduction_rabi_sugarcane_water_req == "") {
        reduction_rabi_sugarcane_water_req = 0;
    }

    var Reduction_Rabi_Sugarcane_UserVale = $('#Reduction_Rabi_Sugarcane_UserVale').val();
    var Reduction_Rabi_Sugarcane_Quantum_UserValue = $('#Reduction_Rabi_Sugarcane_Quantum_UserValue').val();
    if (Reduction_Rabi_Sugarcane_UserVale != "" && Reduction_Rabi_Sugarcane_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_sugarcane_waterdemand = parseFloat(Reduction_Rabi_Sugarcane_UserVale) * parseFloat(reduction_rabi_sugarcane_water_req) * 0.001;
        $('#Reduction_Rabi_Sugarcane_water_Demand_value').text(reduction_rabi_sugarcane_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Sugarcane_Quantum_UserValue2').text(Reduction_Rabi_Sugarcane_Quantum_UserValue);
        //save water
        reduction_rabi_sugarcane_gw_demand = parseFloat(reduction_rabi_sugarcane_waterdemand) - parseFloat(Reduction_Rabi_Sugarcane_Quantum_UserValue);
        $('#Reduction_Rabi_Sugarcane_Saving_value').text(reduction_rabi_sugarcane_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_sugarcane_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_sugarcane_gw_demand;

    }

    //Maize

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Maize_water_Demand_value').text("0");
    $('#Reduction_Rabi_Maize_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Maize_Saving_value').text("0");

    var reduction_rabi_maize_water_req = $('#reduction_rabi_maize_water_req').val();
    if (reduction_rabi_maize_water_req == "") {
        reduction_rabi_maize_water_req = 0;
    }

    var Reduction_Rabi_Maize_UserVale = $('#Reduction_Rabi_Maize_UserVale').val();
    var Reduction_Rabi_Maize_Quantum_UserValue = $('#Reduction_Rabi_Maize_Quantum_UserValue').val();
    if (Reduction_Rabi_Maize_UserVale != "" && Reduction_Rabi_Maize_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_maize_waterdemand = parseFloat(Reduction_Rabi_Maize_UserVale) * parseFloat(reduction_rabi_maize_water_req) * 0.001;
        $('#Reduction_Rabi_Maize_water_Demand_value').text(reduction_rabi_maize_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Maize_Quantum_UserValue2').text(Reduction_Rabi_Maize_Quantum_UserValue);
        //save water
        reduction_rabi_maize_gw_demand = parseFloat(reduction_rabi_maize_waterdemand) - parseFloat(Reduction_Rabi_Maize_Quantum_UserValue);
        $('#Reduction_Rabi_Maize_Saving_value').text(reduction_rabi_maize_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_maize_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_maize_gw_demand;

    }

    //Fodder

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Fodder_water_Demand_value').text("0");
    $('#Reduction_Rabi_Fodder_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Fodder_Saving_value').text("0");

    var reduction_rabi_fodder_water_req = $('#reduction_rabi_fodder_water_req').val();
    if (reduction_rabi_fodder_water_req == "") {
        reduction_rabi_fodder_water_req = 0;
    }

    var Reduction_Rabi_Fodder_UserVale = $('#Reduction_Rabi_Fodder_UserVale').val();
    var Reduction_Rabi_Fodder_Quantum_UserValue = $('#Reduction_Rabi_Fodder_Quantum_UserValue').val();
    if (Reduction_Rabi_Fodder_UserVale != "" && Reduction_Rabi_Fodder_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_fodder_waterdemand = parseFloat(Reduction_Rabi_Fodder_UserVale) * parseFloat(reduction_rabi_fodder_water_req) * 0.001;
        $('#Reduction_Rabi_Fodder_water_Demand_value').text(reduction_rabi_fodder_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Fodder_Quantum_UserValue2').text(Reduction_Rabi_Fodder_Quantum_UserValue);
        //save water
        reduction_rabi_fodder_gw_demand = parseFloat(reduction_rabi_fodder_waterdemand) - parseFloat(Reduction_Rabi_Fodder_Quantum_UserValue);
        $('#Reduction_Rabi_Fodder_Saving_value').text(reduction_rabi_fodder_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_fodder_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_fodder_gw_demand;

    }
    //Paddy

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Paddy_water_Demand_value').text("0");
    $('#Reduction_Rabi_Paddy_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Paddy_Saving_value').text("0");

    var reduction_rabi_paddy_water_req = $('#reduction_rabi_paddy_water_req').val();
    if (reduction_rabi_paddy_water_req == "") {
        reduction_rabi_paddy_water_req = 0;
    }

    var Reduction_Rabi_Paddy_UserVale = $('#Reduction_Rabi_Paddy_UserVale').val();
    var Reduction_Rabi_Paddy_Quantum_UserValue = $('#Reduction_Rabi_Paddy_Quantum_UserValue').val();
    if (Reduction_Rabi_Paddy_UserVale != "" && Reduction_Rabi_Paddy_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_paddy_waterdemand = parseFloat(Reduction_Rabi_Paddy_UserVale) * parseFloat(reduction_rabi_paddy_water_req) * 0.001;
        $('#Reduction_Rabi_Paddy_water_Demand_value').text(reduction_rabi_paddy_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Paddy_Quantum_UserValue2').text(Reduction_Rabi_Paddy_Quantum_UserValue);
        //save water
        reduction_rabi_paddy_gw_demand = parseFloat(reduction_rabi_paddy_waterdemand) - parseFloat(Reduction_Rabi_Paddy_Quantum_UserValue);
        $('#Reduction_Rabi_Paddy_Saving_value').text(reduction_rabi_paddy_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_paddy_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_paddy_gw_demand;

    }
    //Alfalfa

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Alfalfa_water_Demand_value').text("0");
    $('#Reduction_Rabi_Alfalfa_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Alfalfa_Saving_value').text("0");

    var reduction_rabi_alfalfa_water_req = $('#reduction_rabi_alfalfa_water_req').val();
    if (reduction_rabi_alfalfa_water_req == "") {
        reduction_rabi_alfalfa_water_req = 0;
    }

    var Reduction_Rabi_Alfalfa_UserVale = $('#Reduction_Rabi_Alfalfa_UserVale').val();
    var Reduction_Rabi_Alfalfa_Quantum_UserValue = $('#Reduction_Rabi_Alfalfa_Quantum_UserValue').val();
    if (Reduction_Rabi_Alfalfa_UserVale != "" && Reduction_Rabi_Alfalfa_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_alfalfa_waterdemand = parseFloat(Reduction_Rabi_Alfalfa_UserVale) * parseFloat(reduction_rabi_alfalfa_water_req) * 0.001;
        $('#Reduction_Rabi_Alfalfa_water_Demand_value').text(reduction_rabi_alfalfa_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Alfalfa_Quantum_UserValue2').text(Reduction_Rabi_Alfalfa_Quantum_UserValue);
        //save water
        reduction_rabi_alfalfa_gw_demand = parseFloat(reduction_rabi_alfalfa_waterdemand) - parseFloat(Reduction_Rabi_Alfalfa_Quantum_UserValue);
        $('#Reduction_Rabi_Alfalfa_Saving_value').text(reduction_rabi_alfalfa_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_alfalfa_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_alfalfa_gw_demand;

    }
    //Onion
    //$('#Reduction_Rabi_Water_demand').text("0");
    //$('#Reduction_Rabi_Water_Save').text("0");
    //$('#Reduction_Rabi_Onion_water_Demand_value').text("0");
    //$('#Reduction_Rabi_Onion_Quantum_UserValue2').text("0");
    //$('#Reduction_Rabi_Onion_Saving_value').text("0");

    //var reduction_rabi_onion_water_req = $('#reduction_rabi_onion_water_req').val();
    //if (reduction_rabi_onion_water_req == "") {
    //    reduction_rabi_onion_water_req = 0;
    //}

    //var Reduction_Rabi_Onion_UserVale = $('#Reduction_Rabi_Onion_UserVale').val();
    //var Reduction_Rabi_Onion_Quantum_UserValue = $('#Reduction_Rabi_Onion_Quantum_UserValue').val();
    //if (Reduction_Rabi_Onion_UserVale != "" && Reduction_Rabi_Onion_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_rabi_onion_waterdemand = parseFloat(Reduction_Rabi_Onion_UserVale) * parseFloat(reduction_rabi_onion_water_req) * 0.001;
    //    $('#Reduction_Rabi_Onion_water_Demand_value').text(reduction_rabi_onion_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_Rabi_Onion_Quantum_UserValue2').text(Reduction_Rabi_Onion_Quantum_UserValue);
    //    //save water
    //    reduction_rabi_onion_gw_demand = parseFloat(reduction_rabi_onion_waterdemand) - parseFloat(Reduction_Rabi_Onion_Quantum_UserValue);
    //    $('#Reduction_Rabi_Onion_Saving_value').text(reduction_rabi_onion_gw_demand.toFixed(2));

    //    //total
    //    Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_onion_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
    //    Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_onion_gw_demand;

    //}
    //Hortculture
    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Hortculture_water_Demand_value').text("0");
    $('#Reduction_Rabi_Hortculture_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Hortculture_Saving_value').text("0");

    var reduction_rabi_hortculture_water_req = $('#reduction_rabi_horticulture_water_req').val();
    if (reduction_rabi_hortculture_water_req == "") {
        reduction_rabi_hortculture_water_req = 0;
    }

    var Reduction_Rabi_Hortculture_UserVale = $('#Reduction_Rabi_Hortculture_UserVale').val();
    var Reduction_Rabi_Hortculture_Quantum_UserValue = $('#Reduction_Rabi_Hortculture_Quantum_UserValue').val();
    if (Reduction_Rabi_Hortculture_UserVale != "" && Reduction_Rabi_Hortculture_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_horticulture_waterdemand = parseFloat(Reduction_Rabi_Hortculture_UserVale) * parseFloat(reduction_rabi_hortculture_water_req) * 0.001;
        $('#Reduction_Rabi_Hortculture_water_Demand_value').text(reduction_rabi_horticulture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Hortculture_Quantum_UserValue2').text(Reduction_Rabi_Hortculture_Quantum_UserValue);
        //save water
        reduction_rabi_horticulture_gw_demand = parseFloat(reduction_rabi_horticulture_waterdemand) - parseFloat(Reduction_Rabi_Hortculture_Quantum_UserValue);
        $('#Reduction_Rabi_Hortculture_Saving_value').text(reduction_rabi_horticulture_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_horticulture_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_horticulture_gw_demand;

    }
    //Sunflower

    $('#Reduction_Rabi_Water_demand').text("0");
    $('#Reduction_Rabi_Water_Save').text("0");
    $('#Reduction_Rabi_Sunflower_water_Demand_value').text("0");
    $('#Reduction_Rabi_Sunflower_Quantum_UserValue2').text("0");
    $('#Reduction_Rabi_Sunflower_Saving_value').text("0");

    var reduction_rabi_sunflower_water_req = $('#reduction_rabi_sunflower_water_req').val();
    if (reduction_rabi_sunflower_water_req == "") {
        reduction_rabi_sunflower_water_req = 0;
    }
    var Reduction_Rabi_Sunflower_UserVale = $('#Reduction_Rabi_Sunflower_UserVale').val();
    var Reduction_Rabi_Sunflower_Quantum_UserValue = $('#Reduction_Rabi_Sunflower_Quantum_UserValue').val();
    if (Reduction_Rabi_Sunflower_UserVale != "" && Reduction_Rabi_Sunflower_Quantum_UserValue != "") {

        //water demand
        reduction_rabi_sunflower_waterdemand = parseFloat(Reduction_Rabi_Sunflower_UserVale) * parseFloat(reduction_rabi_sunflower_water_req) * 0.001;
        $('#Reduction_Rabi_Sunflower_water_Demand_value').text(reduction_rabi_sunflower_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Rabi_Sunflower_Quantum_UserValue2').text(Reduction_Rabi_Sunflower_Quantum_UserValue);
        //save water
        reduction_rabi_sunflower_gw_demand = parseFloat(reduction_rabi_sunflower_waterdemand) - parseFloat(Reduction_Rabi_Sunflower_Quantum_UserValue);
        $('#Reduction_Rabi_Sunflower_Saving_value').text(reduction_rabi_sunflower_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_sunflower_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
        Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_sunflower_gw_demand;

    }



    //var reduction_rabi_othercrop_area = $('#reduction_rabi_othercrop_area').val();
    //var reduction_rabi_othercrop_quantum_value = $('#reduction_rabi_othercrop_quantum_value').val();
    //if (reduction_rabi_othercrop_area != "" && reduction_rabi_othercrop_quantum_value != "") {

    //    //water demand
    //    reduction_rabi_othercrop_gw_waterdemand = parseFloat(reduction_rabi_othercrop_area) * 800 * 0.001;
    //    $('#reduction_rabi_othercrop_gw_waterdemand').text(reduction_rabi_othercrop_gw_waterdemand.toFixed(2));
    //    //quantum
    //    $('#reduction_rabi_othercrop_quantum_value').text(reduction_rabi_othercrop_quantum_value);
    //    //save water
    //    reduction_rabi_othercrop_reduc_gw_demand = parseFloat(reduction_rabi_othercrop_gw_waterdemand) - parseFloat(reduction_rabi_othercrop_quantum_value);
    //    $('#reduction_rabi_othercrop_reduc_gw_demand').text(reduction_rabi_othercrop_reduc_gw_demand.toFixed(2));

    //    //total
    //    Reduction_Total_Water_Demand_Rabi_Crops = reduction_rabi_othercrop_gw_waterdemand + Reduction_Total_Water_Demand_Rabi_Crops;
    //    Reduction_in_GW_through_Rabi_surface_water = Reduction_in_GW_through_Rabi_surface_water + reduction_rabi_othercrop_reduc_gw_demand;

    //}


    //total bunding
    $('#Reduction_Total_Water_Demand_Rabi_Crops').text(Reduction_Total_Water_Demand_Rabi_Crops.toFixed(2));
    $('#Reduction_in_GW_through_Rabi_surface_water').text(Reduction_in_GW_through_Rabi_surface_water.toFixed(2));

    //sidepanel binding
    $('#Reduction_Rabi_Water_demand').text(Reduction_Total_Water_Demand_Rabi_Crops.toFixed(2));
    $('#Reduction_Rabi_Water_Save').text(Reduction_in_GW_through_Rabi_surface_water.toFixed(2));

    var Reduction_in_GW_through_kharif_surface_water1 = $('#Reduction_in_GW_through_kharif_surface_water1').text();;

    if (Reduction_in_GW_through_kharif_surface_water1 == "") {
        Reduction_in_GW_through_kharif_surface_water1 = 0;
    }

    var Reduction_in_GW_through_Rabi_surface_water = $('#Reduction_in_GW_through_Rabi_surface_water').text();;

    if (Reduction_in_GW_through_Rabi_surface_water == "") {
        Reduction_in_GW_through_Rabi_surface_water = 0;
    }

    var Reduction_in_GW_through_Summer_surface_water = $('#Reduction_in_GW_through_Summer_surface_water').text();;

    if (Reduction_in_GW_through_Summer_surface_water == "") {
        Reduction_in_GW_through_Summer_surface_water = 0;
    }

    var TotalAnnual_Reduction_Reduction = parseFloat(Reduction_in_GW_through_kharif_surface_water1) + parseFloat(Reduction_in_GW_through_Rabi_surface_water) + parseFloat(Reduction_in_GW_through_Summer_surface_water);
    $('#TotalAnnual_Reduction_Reduction').text(TotalAnnual_Reduction_Reduction.toFixed(2));


}
var reduction_summer_sericulture_waterdemand = 0;
var reduction_summer_sericulture_gw_demand = 0;

var reduction_summer_tomoto_waterdemand = 0;
var reduction_summer_tomoto_gw_demand = 0;

//var reduction_summer_cabbage_waterdemand = 0;
//var reduction_summer_cabbage_gw_demand = 0;

//var reduction_summer_beans_waterdemand = 0;
//var reduction_summer_beans_gw_demand = 0;

var reduction_summer_floriculture_waterdemand = 0;
var reduction_summer_floriculture_gw_demand = 0;

var reduction_summer_maize_waterdemand = 0;
var reduction_summer_maize_gw_demand = 0;

var reduction_summer_fodder_waterdemand = 0;
var reduction_summer_fodder_gw_demand = 0;

var reduction_summer_sugarcane_waterdemand = 0;
var reduction_summer_sugarcane_gw_demand = 0;


var reduction_summer_othercrop_gw_waterdemand = 0;
var reduction_summer_othercrop_reduc_gw_demand = 0;

var reduction_summer_horticulture_waterdemand = 0;
var reduction_summer_horticulture_reduction_gw_demand = 0;


var reduction_summer_othercrop_waterdemand1 = 0;
var reduction_summer_othercrop_reduction_gw_demand1 = 0;

var reduction_summer_othercrop_waterdemand2 = 0;
var reduction_summer_othercrop_reduction_gw_demand2 = 0;

var reduction_summer_othercrop_waterdemand3 = 0;
var reduction_summer_othercrop_reduction_gw_demand3 = 0;


var reduction_summer_othercrop_waterdemand4 = 0;
var reduction_summer_othercrop_reduction_gw_demand4 = 0;

var reduction_summer_othercrop_waterdemand5 = 0;
var reduction_summer_othercrop_reduction_gw_demand5 = 0;

function Reduction_Summer_WaterRequire() {

    //Sericulture

    var Reduction_Summer_Sericulture_UserVale1 = 0;
    var Reduction_Summer_Sericulture_Saving_value1 = 0;

    reduction_summer_sericulture_waterdemand = 0;
    reduction_summer_sericulture_gw_demand = 0;

    reduction_summer_tomoto_waterdemand = 0;
    reduction_summer_tomoto_gw_demand = 0;

    //reduction_summer_cabbage_waterdemand = 0;
    //reduction_summer_cabbage_gw_demand = 0;

    //reduction_summer_beans_waterdemand = 0;
    //reduction_summer_beans_gw_demand = 0;

    reduction_summer_floriculture_waterdemand = 0;
    reduction_summer_floriculture_gw_demand = 0;

    reduction_summer_maize_waterdemand = 0;
    reduction_summer_maize_gw_demand = 0;

    reduction_summer_fodder_waterdemand = 0;
    reduction_summer_fodder_gw_demand = 0;

    reduction_summer_sugarcane_waterdemand = 0;
    reduction_summer_sugarcane_gw_demand = 0;

    var Reduction_Total_Water_Demand_Summer_Crops = 0;
    var Reduction_in_GW_through_Summer_surface_water = 0;

    reduction_summer_othercrop_gw_waterdemand = 0;
    reduction_summer_othercrop_reduc_gw_demand = 0;

    reduction_summer_horticulture_waterdemand = 0;
    reduction_summer_horticulture_reduction_gw_demand = 0;
    reduction_summer_othercrop_waterdemand1 = 0;
    reduction_summer_othercrop_reduction_gw_demand1 = 0;

    reduction_summer_othercrop_waterdemand2 = 0;
    reduction_summer_othercrop_reduction_gw_demand2 = 0;

    reduction_summer_othercrop_waterdemand3 = 0;
    reduction_summer_othercrop_reduction_gw_demand3 = 0;


    reduction_summer_othercrop_waterdemand4 = 0;
    reduction_summer_othercrop_reduction_gw_demand4 = 0;

    reduction_summer_othercrop_waterdemand5 = 0;
    reduction_summer_othercrop_reduction_gw_demand5 = 0;

    //Other

    var reduction_summer_othercrop_area1 = $('#reduction_summer_othercrop_area1').val();
    if (typeof reduction_summer_othercrop_area1 == 'undefined') {
        reduction_summer_othercrop_area1 = 0;
    }
    var reduction_summer_othercrop_quantum_uservalue1 = $('#reduction_summer_othercrop_quantum_uservalue1').val();
    if (typeof reduction_summer_othercrop_quantum_uservalue1 == 'undefined') {
        reduction_summer_othercrop_quantum_uservalue1 = 0;
    }
    var reduction_summer_othercrop_water_req1 = $('#reduction_summer_othercrop_water_req1').val();
    if (typeof reduction_summer_othercrop_water_req1 == 'undefined') {
        reduction_summer_othercrop_water_req1 = 0;
    }

    if (reduction_summer_othercrop_area1 != "" && reduction_summer_othercrop_quantum_uservalue1 != "") {

        //water demand
        reduction_summer_othercrop_waterdemand1 = parseFloat(reduction_summer_othercrop_area1) * reduction_summer_othercrop_water_req1 * 0.001;
        $('#reduction_summer_othercrop_waterdemand1').text(reduction_summer_othercrop_waterdemand1.toFixed(2));
        //quantum
        $('#reduction_summer_othercrop_quantum_uservalue1').text(reduction_summer_othercrop_quantum_uservalue1);
        //save water
        reduction_summer_othercrop_reduction_gw_demand1 = parseFloat(reduction_summer_othercrop_waterdemand1) - parseFloat(reduction_summer_othercrop_quantum_uservalue1);
        $('#reduction_summer_othercrop_reduction_gw_demand1').text(reduction_summer_othercrop_reduction_gw_demand1.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_othercrop_waterdemand1 + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_othercrop_reduction_gw_demand1;

    }


    var reduction_summer_othercrop_area2 = $('#reduction_summer_othercrop_area2').val();
    if (typeof reduction_summer_othercrop_area2 == 'undefined') {
        reduction_summer_othercrop_area2 = 0;
    }
    var reduction_summer_othercrop_quantum_uservalue2 = $('#reduction_summer_othercrop_quantum_uservalue2').val();
    if (typeof reduction_summer_othercrop_quantum_uservalue2 == 'undefined') {
        reduction_summer_othercrop_quantum_uservalue2 = 0;
    }
    var reduction_summer_othercrop_water_req2 = $('#reduction_summer_othercrop_water_req2').val();
    if (typeof reduction_summer_othercrop_water_req2 == 'undefined') {
        reduction_summer_othercrop_water_req2 = 0;
    }
    if (reduction_summer_othercrop_area2 != "" && reduction_summer_othercrop_quantum_uservalue2 != "") {

        //water demand
        reduction_summer_othercrop_waterdemand2 = parseFloat(reduction_summer_othercrop_area2) * reduction_summer_othercrop_water_req2 * 0.001;
        $('#reduction_summer_othercrop_waterdemand2').text(reduction_summer_othercrop_waterdemand2.toFixed(2));
        //quantum
        $('#reduction_summer_othercrop_quantum_uservalue2').text(reduction_summer_othercrop_quantum_uservalue2);
        //save water
        reduction_summer_othercrop_reduction_gw_demand2 = parseFloat(reduction_summer_othercrop_waterdemand2) - parseFloat(reduction_summer_othercrop_quantum_uservalue2);
        $('#reduction_summer_othercrop_reduction_gw_demand2').text(reduction_summer_othercrop_reduction_gw_demand2.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_othercrop_waterdemand2 + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_othercrop_reduction_gw_demand2;

    }


    var reduction_summer_othercrop_area3 = $('#reduction_summer_othercrop_area3').val();
    if (typeof reduction_summer_othercrop_area3 == 'undefined') {
        reduction_summer_othercrop_area3 = 0;
    }
    var reduction_summer_othercrop_quantum_uservalue3 = $('#reduction_summer_othercrop_quantum_uservalue3').val();
    if (typeof reduction_summer_othercrop_quantum_uservalue3 == 'undefined') {
        reduction_summer_othercrop_quantum_uservalue3 = 0;
    }
    var reduction_summer_othercrop_water_req3 = $('#reduction_summer_othercrop_water_req3').val();
    if (typeof reduction_summer_othercrop_water_req3 == 'undefined') {
        reduction_summer_othercrop_water_req3 = 0;
    }
    if (reduction_summer_othercrop_area3 != "" && reduction_summer_othercrop_quantum_uservalue3 != "") {

        //water demand
        reduction_summer_othercrop_waterdemand3 = parseFloat(reduction_summer_othercrop_area3) * reduction_summer_othercrop_water_req3 * 0.001;
        $('#reduction_summer_othercrop_waterdemand3').text(reduction_summer_othercrop_waterdemand3.toFixed(2));
        //quantum
        $('#reduction_summer_othercrop_quantum_uservalue3').text(reduction_summer_othercrop_quantum_uservalue3);
        //save water
        reduction_summer_othercrop_reduction_gw_demand3 = parseFloat(reduction_summer_othercrop_waterdemand3) - parseFloat(reduction_summer_othercrop_quantum_uservalue3);
        $('#reduction_summer_othercrop_reduction_gw_demand3').text(reduction_summer_othercrop_reduction_gw_demand3.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_othercrop_waterdemand3 + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_othercrop_reduction_gw_demand3;

    }


    var reduction_summer_othercrop_area4 = $('#reduction_summer_othercrop_area4').val();
    if (typeof reduction_summer_othercrop_area4 == 'undefined') {
        reduction_summer_othercrop_area4 = 0;
    }
    var reduction_summer_othercrop_quantum_uservalue4 = $('#reduction_summer_othercrop_quantum_uservalue4').val();
    if (typeof reduction_summer_othercrop_quantum_uservalue4 == 'undefined') {
        reduction_summer_othercrop_quantum_uservalue4 = 0;
    }
    var reduction_summer_othercrop_water_req4 = $('#reduction_summer_othercrop_water_req4').val();
    if (typeof reduction_summer_othercrop_water_req4 == 'undefined') {
        reduction_summer_othercrop_water_req4 = 0;
    }
    if (reduction_summer_othercrop_area4 != "" && reduction_summer_othercrop_quantum_uservalue4 != "") {

        //water demand
        reduction_summer_othercrop_waterdemand4 = parseFloat(reduction_summer_othercrop_area4) * reduction_summer_othercrop_water_req4 * 0.001;
        $('#reduction_summer_othercrop_waterdemand4').text(reduction_summer_othercrop_waterdemand4.toFixed(2));
        //quantum
        $('#reduction_summer_othercrop_quantum_uservalue4').text(reduction_summer_othercrop_quantum_uservalue4);
        //save water
        reduction_summer_othercrop_reduction_gw_demand4 = parseFloat(reduction_summer_othercrop_waterdemand4) - parseFloat(reduction_summer_othercrop_quantum_uservalue4);
        $('#reduction_summer_othercrop_reduction_gw_demand4').text(reduction_summer_othercrop_reduction_gw_demand4.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_othercrop_waterdemand4 + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_othercrop_reduction_gw_demand4;

    }


    var reduction_summer_othercrop_area5 = $('#reduction_summer_othercrop_area5').val();
    if (typeof reduction_summer_othercrop_area5 == 'undefined') {
        reduction_summer_othercrop_area5 = 0;
    }
    var reduction_summer_othercrop_quantum_uservalue5 = $('#reduction_summer_othercrop_quantum_uservalue5').val();
    if (typeof reduction_summer_othercrop_quantum_uservalue5 == 'undefined') {
        reduction_summer_othercrop_quantum_uservalue5 = 0;
    }
    var reduction_summer_othercrop_water_req5 = $('#reduction_summer_othercrop_water_req5').val();
    if (typeof reduction_summer_othercrop_water_req5 == 'undefined') {
        reduction_summer_othercrop_water_req5 = 0;
    }
    if (reduction_summer_othercrop_area5 != "" && reduction_summer_othercrop_quantum_uservalue5 != "") {

        //water demand
        reduction_summer_othercrop_waterdemand5 = parseFloat(reduction_summer_othercrop_area5) * reduction_summer_othercrop_water_req5 * 0.001;
        $('#reduction_summer_othercrop_waterdemand5').text(reduction_summer_othercrop_waterdemand5.toFixed(2));
        //quantum
        $('#reduction_summer_othercrop_quantum_uservalue5').text(reduction_summer_othercrop_quantum_uservalue5);
        //save water
        reduction_summer_othercrop_reduction_gw_demand5 = parseFloat(reduction_summer_othercrop_waterdemand5) - parseFloat(reduction_summer_othercrop_quantum_uservalue5);
        $('#reduction_summer_othercrop_reduction_gw_demand5').text(reduction_summer_othercrop_reduction_gw_demand5.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_othercrop_waterdemand5 + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_othercrop_reduction_gw_demand5;

    }

    //horticulture
    var reduction_summer_horticulture_crop_area = $('#reduction_summer_horticulture_crop_area').val();
    var reduction_summer_horticulture_quantum_uservalue = $('#reduction_summer_horticulture_quantum_uservalue').val();
    var reduction_summer_horticulture_water_req = $('#reduction_summer_horticulture_water_req').val();
    if (reduction_summer_horticulture_crop_area != "" && reduction_summer_horticulture_quantum_uservalue != "") {

        //water demand
        reduction_summer_horticulture_waterdemand = parseFloat(reduction_summer_horticulture_crop_area) * reduction_summer_horticulture_water_req * 0.001;
        $('#reduction_summer_horticulture_waterdemand').text(reduction_summer_horticulture_waterdemand.toFixed(2));
        //quantum
        $('#reduction_summer_horticulture_quantum_uservalue').text(reduction_summer_horticulture_quantum_uservalue);
        //save water
        reduction_summer_horticulture_reduction_gw_demand = parseFloat(reduction_summer_horticulture_waterdemand) - parseFloat(reduction_summer_horticulture_quantum_uservalue);
        $('#Reduction_Summer_Sericulture_Saving_value').text(reduction_summer_horticulture_reduction_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_horticulture_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_horticulture_reduction_gw_demand;

    }



    var reduction_summer_sericulture_water_req = $('#reduction_summer_sericulture_water_req').val();
    if (reduction_summer_sericulture_water_req == "") {
        reduction_summer_sericulture_water_req = 0;
    }



    var Reduction_Summer_Sericulture_UserVale = $('#Reduction_Summer_Sericulture_UserVale').val();
    var Reduction_Summer_Sericulture_Quantum_UserValue = $('#Reduction_Summer_Sericulture_Quantum_UserValue').val();
    if (Reduction_Summer_Sericulture_UserVale != "" && Reduction_Summer_Sericulture_Quantum_UserValue != "") {

        //water demand
        reduction_summer_sericulture_waterdemand = parseFloat(Reduction_Summer_Sericulture_UserVale) * parseFloat(reduction_summer_sericulture_water_req) * 0.001;
        $('#Reduction_Summer_Sericulture_water_Demand_value').text(reduction_summer_sericulture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Summer_Sericulture_Quantum_UserValue2').text(Reduction_Summer_Sericulture_Quantum_UserValue);
        //save water
        reduction_summer_sericulture_gw_demand = parseFloat(reduction_summer_sericulture_waterdemand) - parseFloat(Reduction_Summer_Sericulture_Quantum_UserValue);
        $('#Reduction_Summer_Sericulture_Saving_value').text(reduction_summer_sericulture_gw_demand.toFixed(2));


        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_sericulture_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_sericulture_gw_demand;

    }

    //Tomota



    var reduction_summer_tomoto_water_req = $('#reduction_rabi_tomoto_water_req').val();
    var Reduction_Summer_Tomota_UserVale = $('#Reduction_Summer_Tomota_UserVale').val();
    var Reduction_Summer_Tomota_Quantum_UserValue = $('#Reduction_Summer_Tomota_Quantum_UserValue').val();
    if (reduction_summer_tomoto_water_req == "") {
        reduction_summer_tomoto_water_req = 0;
    }
    if (Reduction_Summer_Tomota_UserVale != "" && Reduction_Summer_Tomota_Quantum_UserValue != "") {

        //water demand
        reduction_summer_tomoto_waterdemand = parseFloat(Reduction_Summer_Tomota_UserVale) * parseFloat(reduction_summer_tomoto_water_req) * 0.001;
        $('#Reduction_Summer_Tomota_water_Demand_value').text(reduction_summer_tomoto_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Summer_Tomota_Quantum_UserValue2').text(Reduction_Summer_Tomota_Quantum_UserValue);
        //save water
        reduction_summer_tomoto_gw_demand = parseFloat(reduction_summer_tomoto_waterdemand) - parseFloat(Reduction_Summer_Tomota_Quantum_UserValue);
        $('#Reduction_Summer_Tomota_Saving_value').text(reduction_summer_tomoto_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_tomoto_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_tomoto_gw_demand;

    }




    //cabage

    //var reduction_summer_cabbage_water_req = $('#reduction_summer_cabbage_water_req').val();
    //if (reduction_summer_cabbage_water_req == "") {
    //    reduction_summer_cabbage_water_req = 0;
    //}

    //$('#Reduction_Summer_Water_demand').text("0");
    //$('#Reduction_Summer_Water_Save').text("0");
    //$('#Reduction_Summer_Cabbage_water_Demand_value').text("0");
    //$('#Reduction_Summer_Cabbage_Quantum_UserValue2').text("0");
    //$('#Reduction_Summer_Cabbage_Saving_value').text("0");

    //var Reduction_Summer_Cabbage_UserVale = $('#Reduction_Summer_Cabbage_UserVale').val();
    //var Reduction_Summer_Cabbage_Quantum_UserValue = $('#Reduction_Summer_Cabbage_Quantum_UserValue').val();
    //if (Reduction_Summer_Cabbage_UserVale != "" && Reduction_Summer_Cabbage_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_summer_cabbage_waterdemand = parseFloat(Reduction_Summer_Cabbage_UserVale) * parseFloat(reduction_summer_cabbage_water_req) * 0.001;
    //    $('#Reduction_Summer_Cabbage_water_Demand_value').text(reduction_summer_cabbage_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_Summer_Cabbage_Quantum_UserValue2').text(Reduction_Summer_Cabbage_Quantum_UserValue);
    //    //save water
    //    reduction_summer_cabbage_gw_demand = parseFloat(reduction_summer_cabbage_waterdemand) - parseFloat(Reduction_Summer_Cabbage_Quantum_UserValue);
    //    $('#Reduction_Summer_Cabbage_Saving_value').text(reduction_summer_cabbage_gw_demand.toFixed(2));

    //    //total
    //    Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_cabbage_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
    //    Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_cabbage_gw_demand;

    //}
    ////Beans

    //$('#Reduction_Summer_Water_demand').text("0");
    //$('#Reduction_Summer_Water_Save').text("0");
    //$('#Reduction_Summer_Beans_water_Demand_value').text("0");
    //$('#Reduction_Summer_Beans_Quantum_UserValue2').text("0");
    //$('#Reduction_Summer_Beans_Saving_value').text("0");

    //var reduction_summer_beans_water_req = $('#reduction_summer_beans_water_req').val();
    //if (reduction_summer_beans_water_req == "") {
    //    reduction_summer_beans_water_req = 0;
    //}

    //var Reduction_Summer_Beans_UserVale = $('#Reduction_Summer_Beans_UserVale').val();
    //var Reduction_Summer_Beans_Quantum_UserValue = $('#Reduction_Summer_Beans_Quantum_UserValue').val();
    //if (Reduction_Summer_Beans_UserVale != "" && Reduction_Summer_Beans_Quantum_UserValue != "") {

    //    //water demand
    //    reduction_summer_beans_waterdemand = parseFloat(Reduction_Summer_Beans_UserVale) * parseFloat(reduction_summer_beans_water_req) * 0.001;
    //    $('#Reduction_Summer_Beans_water_Demand_value').text(reduction_summer_beans_waterdemand.toFixed(2));
    //    //quantum
    //    $('#Reduction_Summer_Beans_Quantum_UserValue2').text(Reduction_Summer_Beans_Quantum_UserValue);
    //    //save water
    //    reduction_summer_beans_gw_demand = parseFloat(reduction_summer_beans_waterdemand) - parseFloat(Reduction_Summer_Beans_Quantum_UserValue);
    //    $('#Reduction_Summer_Beans_Saving_value').text(reduction_summer_beans_gw_demand.toFixed(2));

    //    //total
    //    Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_beans_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
    //    Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_beans_gw_demand;

    //}
    //Floriculture

    $('#Reduction_Summer_Water_demand').text("0");
    $('#Reduction_Summer_Water_Save').text("0");
    $('#Reduction_Summer_Floriculture_water_Demand_value').text("0");
    $('#Reduction_Summer_Floriculture_Quantum_UserValue2').text("0");
    $('#Reduction_Summer_Floriculture_Saving_value').text("0");

    var reduction_summer_floriculture_water_req = $('#reduction_summer_floriculture_water_req').val();
    if (reduction_summer_floriculture_water_req == "") {
        reduction_summer_floriculture_water_req = 0;
    }
    var Reduction_Summer_Floriculture_UserVale = $('#Reduction_Summer_Floriculture_UserVale').val();
    var Reduction_Summer_Floriculture_Quantum_UserValue = $('#Reduction_Summer_Floriculture_Quantum_UserValue').val();
    if (Reduction_Summer_Floriculture_UserVale != "" && Reduction_Summer_Floriculture_Quantum_UserValue != "") {

        //water demand
        reduction_summer_floriculture_waterdemand = parseFloat(Reduction_Summer_Floriculture_UserVale) * parseFloat(reduction_summer_floriculture_water_req) * 0.001;
        $('#Reduction_Summer_Floriculture_water_Demand_value').text(reduction_summer_floriculture_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Summer_Floriculture_Quantum_UserValue2').text(Reduction_Summer_Floriculture_Quantum_UserValue);
        //save water
        reduction_summer_floriculture_gw_demand = parseFloat(reduction_summer_floriculture_waterdemand) - parseFloat(Reduction_Summer_Floriculture_Quantum_UserValue);
        $('#Reduction_Summer_Floriculture_Saving_value').text(reduction_summer_floriculture_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_floriculture_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_floriculture_gw_demand;

    }
    //Maize

    $('#Reduction_Summer_Water_demand').text("0");
    $('#Reduction_Summer_Water_Save').text("0");
    $('#Reduction_Summer_Maize_water_Demand_value').text("0");
    $('#Reduction_Summer_Maize_Quantum_UserValue2').text("0");
    $('#Reduction_Summer_Maize_Saving_value').text("0");

    var reduction_summer_maize_water_req = $('#reduction_summer_maize_water_req').val();
    if (reduction_summer_maize_water_req == "") {
        reduction_summer_maize_water_req = 0;
    }
    var Reduction_Summer_Maize_UserVale = $('#Reduction_Summer_Maize_UserVale').val();
    var Reduction_Summer_Maize_Quantum_UserValue = $('#Reduction_Summer_Maize_Quantum_UserValue').val();
    if (Reduction_Summer_Maize_UserVale != "" && Reduction_Summer_Maize_Quantum_UserValue != "") {

        //water demand
        reduction_summer_maize_waterdemand = parseFloat(Reduction_Summer_Maize_UserVale) * parseFloat(reduction_summer_maize_water_req) * 0.001;
        $('#Reduction_Summer_Maize_water_Demand_value').text(reduction_summer_maize_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Summer_Maize_Quantum_UserValue2').text(Reduction_Summer_Maize_Quantum_UserValue);
        //save water
        reduction_summer_maize_gw_demand = parseFloat(reduction_summer_maize_waterdemand) - parseFloat(Reduction_Summer_Maize_Quantum_UserValue);
        $('#Reduction_Summer_Maize_Saving_value').text(reduction_summer_maize_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_maize_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_maize_gw_demand;

    }

    //Fodder

    $('#Reduction_Summer_Water_demand').text("0");
    $('#Reduction_Summer_Water_Save').text("0");
    $('#Reduction_Summer_Fodder_water_Demand_value').text("0");
    $('#Reduction_Summer_Fodder_Quantum_UserValue2').text("0");
    $('#Reduction_Summer_Fodder_Saving_value').text("0");

    var reduction_summer_fodder_water_req = $('#reduction_summer_fodder_water_req').val();
    if (reduction_summer_fodder_water_req == "") {
        reduction_summer_fodder_water_req = 0;
    }

    var Reduction_Summer_Fodder_UserVale = $('#Reduction_Summer_Fodder_UserVale').val();
    var Reduction_Summer_Fodder_Quantum_UserValue = $('#Reduction_Summer_Fodder_Quantum_UserValue').val();
    if (Reduction_Summer_Fodder_UserVale != "" && Reduction_Summer_Fodder_Quantum_UserValue != "") {

        //water demand
        reduction_summer_fodder_waterdemand = parseFloat(Reduction_Summer_Fodder_UserVale) * parseFloat(reduction_summer_fodder_water_req) * 0.001;
        $('#Reduction_Summer_Fodder_water_Demand_value').text(reduction_summer_fodder_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Summer_Fodder_Quantum_UserValue2').text(Reduction_Summer_Fodder_Quantum_UserValue);
        //save water
        reduction_summer_fodder_gw_demand = parseFloat(reduction_summer_fodder_waterdemand) - parseFloat(Reduction_Summer_Fodder_Quantum_UserValue);
        $('#Reduction_Summer_Fodder_Saving_value').text(reduction_summer_fodder_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_fodder_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_fodder_gw_demand;

    }
    //Sugarcane

    $('#Reduction_Summer_Water_demand').text("0");
    $('#Reduction_Summer_Water_Save').text("0");
    $('#Reduction_Summer_Sugarcane_water_Demand_value').text("0");
    $('#Reduction_Summer_Sugarcane_Quantum_UserValue2').text("0");
    $('#Reduction_Summer_Sugarcane_Saving_value').text("0");


    var reduction_summer_sugarcane_water_req = $('#reduction_summer_sugarcane_water_req').val();
    if (reduction_summer_sugarcane_water_req == "") {
        reduction_summer_sugarcane_water_req = 0;
    }
    var Reduction_Summer_Sugarcane_UserVale = $('#Reduction_Summer_Sugarcane_UserVale').val();
    var Reduction_Summer_Sugarcane_Quantum_UserValue = $('#Reduction_Summer_Sugarcane_Quantum_UserValue').val();
    if (Reduction_Summer_Sugarcane_UserVale != "" && Reduction_Summer_Sugarcane_Quantum_UserValue != "") {

        //water demand
        reduction_summer_sugarcane_waterdemand = parseFloat(Reduction_Summer_Sugarcane_UserVale) * parseFloat(reduction_summer_sugarcane_water_req) * 0.001;
        $('#Reduction_Summer_Sugarcane_water_Demand_value').text(reduction_summer_sugarcane_waterdemand.toFixed(2));
        //quantum
        $('#Reduction_Summer_Sugarcane_Quantum_UserValue2').text(Reduction_Summer_Sugarcane_Quantum_UserValue);
        //save water
        reduction_summer_sugarcane_gw_demand = parseFloat(reduction_summer_sugarcane_waterdemand) - parseFloat(Reduction_Summer_Sugarcane_Quantum_UserValue);
        $('#Reduction_Summer_Sugarcane_Saving_value').text(reduction_summer_sugarcane_gw_demand.toFixed(2));

        //total
        Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_sugarcane_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
        Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_sugarcane_gw_demand;

    }


    //var reduction_summer_othercrop_area = $('#reduction_summer_othercrop_area').val();
    //var reduction_summer_othercrop_quantum_value = $('#reduction_summer_othercrop_quantum_value').val();
    //if (reduction_summer_othercrop_area != "" && reduction_summer_othercrop_quantum_value != "") {

    //    //water demand
    //    reduction_summer_othercrop_gw_waterdemand = parseFloat(reduction_summer_othercrop_area) * 2000 * 0.001;
    //    $('#reduction_summer_othercrop_gw_waterdemand').text(reduction_summer_othercrop_gw_waterdemand.toFixed(2));
    //    //quantum
    //    $('#reduction_summer_othercrop_quantum_value').text(reduction_summer_othercrop_quantum_value);
    //    //save water
    //    reduction_summer_othercrop_reduc_gw_demand = parseFloat(reduction_summer_othercrop_gw_waterdemand) - parseFloat(reduction_summer_othercrop_quantum_value);
    //    $('#reduction_summer_othercrop_reduc_gw_demand').text(reduction_summer_othercrop_reduc_gw_demand.toFixed(2));

    //    //total
    //    Reduction_Total_Water_Demand_Summer_Crops = reduction_summer_othercrop_gw_waterdemand + Reduction_Total_Water_Demand_Summer_Crops;
    //    Reduction_in_GW_through_Summer_surface_water = Reduction_in_GW_through_Summer_surface_water + reduction_summer_othercrop_reduc_gw_demand;

    //}


    //Total binding
    $('#Reduction_Total_Water_Demand_Summer_Crops').text(Reduction_Total_Water_Demand_Summer_Crops.toFixed(2));
    $('#Reduction_in_GW_through_Summer_surface_water').text(Reduction_in_GW_through_Summer_surface_water.toFixed(2));

    //side pannel binding
    $('#Reduction_SummerCrop_Water_demand').text(Reduction_Total_Water_Demand_Summer_Crops.toFixed(2));
    $('#Reduction_SummerCrop_Water_Save1').text(Reduction_in_GW_through_Summer_surface_water.toFixed(2));
    var Reduction_in_GW_through_kharif_surface_water1 = $('#Reduction_in_GW_through_kharif_surface_water1').text();;

    if (Reduction_in_GW_through_kharif_surface_water1 == "") {
        Reduction_in_GW_through_kharif_surface_water1 = 0;
    }

    var Reduction_in_GW_through_Rabi_surface_water = $('#Reduction_in_GW_through_Rabi_surface_water').text();;

    if (Reduction_in_GW_through_Rabi_surface_water == "") {
        Reduction_in_GW_through_Rabi_surface_water = 0;
    }

    var Reduction_in_GW_through_Summer_surface_water = $('#Reduction_in_GW_through_Summer_surface_water').text();;

    if (Reduction_in_GW_through_Summer_surface_water == "") {
        Reduction_in_GW_through_Summer_surface_water = 0;
    }

    var TotalAnnual_Reduction_Reduction = parseFloat(Reduction_in_GW_through_kharif_surface_water1) + parseFloat(Reduction_in_GW_through_Rabi_surface_water) + parseFloat(Reduction_in_GW_through_Summer_surface_water);
    $('#TotalAnnual_Reduction_Reduction').text(TotalAnnual_Reduction_Reduction.toFixed(2));

}


function reduction_savedata() {
    $('#SAVE_BTN5').prop('disabled', true);

    Reduction_Kharif_WaterRequire();
    Reduction_Rabi_WaterRequire();
    Reduction_Summer_WaterRequire();
    var obj = {};

    obj.reduction_approx_estimated_cost = $('#reduction_approx_estimated_cost').val();
    obj.reduction_cost_type = $('#reduction_cost_type').val();

    obj.reduction_kharif_paddy_crop_area = $('#Reduction_kharif_Paddy_UserVale').val();
    obj.reduction_kharif_paddy_fundingsource = $('#Reduction_kharif_Paddy_FundingSource').val();
    obj.reduction_kharif_ragi_crop_area = $('#Reduction_kharif_Ragi_UserVale').val();
    obj.reduction_kharif_ragi_fundingsource = $('#Reduction_kharif_Ragi_FundingSource').val();

    obj.reduction_kharif_groundnut_crop_area = $('#Reduction_kharif_Groundnut_UserVale').val();

    obj.reduction_kharif_groundnut_fundingsource = $('#Reduction_kharif_GroundNut_FundingSource').val();
    obj.reduction_kharif_sugarcane_crop_area = $('#Reduction_kharif_Sugarcane_UserVale').val();
    obj.reduction_kharif_sugarcane_fundingsource = $('#Reduction_kharif_Sugarcane_FundingSource').val();
    obj.reduction_kharif_tomoto_crop_area = $('#Reduction_kharif_Tomato_UserVale').val();
    obj.reduction_kharif_tomoto_fundingsource = $('#Reduction_kharif_Tomoto_FundingSource').val();
    //  obj.reduction_kharif_cabbage_crop_area = $('#Reduction_kharif_Cabbage_UserVale').val();
    //  obj.reduction_kharif_cabbage_fundingsource = $('#Reduction_kharif_Cabbage_FundingSource').val();
    //  obj.reduction_kharif_beans_crop_area = $('#Reduction_kharif_Beans_UserVale').val();
    //  obj.reduction_kharif_beans_fundingsource = $('#Reduction_kharif_Beans_FundingSource').val();
    obj.reduction_kharif_floriculture_crop_area = $('#Reduction_kharif_Floriculture_UserVale').val();
    obj.reduction_kharif_floriculture_fundingsource = $('#Reduction_kharif_Floriculture_FundingSource').val();
    obj.reduction_kharif_sericulture_crop_area = $('#Reduction_kharif_Sericulture_UserVale').val();
    obj.reduction_kharif_sericulture_fundingsource = $('#Reduction_kharif_Sericulture_FundingSource').val();
    //  obj.reduction_kharif_cucumber_crop_area = $('#Reduction_kharif_Cucmber_UserVale').val();
    //  obj.reduction_kharif_cucumber_fundingsource = $('#Reduction_kharif_Cucmber_FundingSource').val();
    obj.reduction_kharif_banana_crop_area = $('#Reduction_kharif_Banana_UserVale').val();
    obj.reduction_kharif_banana_fundingsource = $('#Reduction_kharif_Banana_FundingSource').val();
    obj.reduction_kharif_fodder_crop_area = $('#Reduction_kharif_Fodder_UserVale').val();
    obj.reduction_kharif_fodder_fundingsource = $('#Reduction_kharif_Fodder_FundingSource').val();
    obj.reduction_kharif_maize_crop_area = $('#Reduction_kharif_Maize_UserVale').val();
    obj.reduction_kharif_maize_fundingsource = $('#Reduction_kharif_Maize_FundingSource').val();
    //  obj.reduction_kharif_potato_crop_area = $('#Reduction_kharif_Potato_UserVale').val();
    //  obj.reduction_kharif_potato_fundingsource = $('#Reduction_kharif_Potato_FundingSource').val();
    obj.reduction_kharif_chillies_crop_area = $('#Reduction_kharif_Chillies_UserVale').val();
    obj.reduction_kharif_chillies_fundingsource = $('#Reduction_kharif_Chillies_FundingSource').val();
    obj.reduction_kharif_cotton_crop_area = $('#Reduction_kharif_Cotton_UserVale').val();
    obj.reduction_kharif_cotton_fundingsource = $('#Reduction_kharif_Cotton_FundingSource').val();
    obj.reduction_kharif_melon_crop_area = $('#Reduction_kharif_Melon_UserVale').val();
    obj.reduction_kharif_melon_fundingsource = $('#Reduction_kharif_Melon_FundingSource').val();
    obj.reduction_kharif_citrus_crop_area = $('#Reduction_kharif_Citrus_UserVale').val();
    obj.reduction_kharif_citrus_fundingsource = $('#Reduction_kharif_Citrus_FundingSource').val();
    //  obj.reduction_kharif_peanut_crop_area = $('#Reduction_kharif_Peanut_UserVale').val();
    //  obj.reduction_kharif_peanut_fundingsource = $('#Reduction_kharif_Peanut_FundingSource').val();
    obj.reduction_kharif_horticulture_crop_area = $('#Reduction_kharif_Horticulture_UserVale').val();
    obj.reduction_kharif_horticulture_fundingsource = $('#Reduction_kharif_Horticulture_FundingSource').val();
    obj.reduction_rabi_sericulture_crop_area = $('#Reduction_Rabi_Sericulture_UserVale').val();
    obj.reduction_rabi_sericulture_fundingsource = $('#Reduction_Rabi_Sericulture_FundingSource').val();
    obj.reduction_rabi_tomoto_crop_area = $('#Reduction_Rabi_Tomota_UserVale').val();
    obj.reduction_rabi_tomoto_fundingsource = $('#Reduction_Rabi_Tomota_FundingSource').val();
    //  obj.reduction_rabi_cabbage_crop_area = $('#Reduction_Rabi_Cabbage_UserVale').val();
    //  obj.reduction_rabi_cabbage_fundingsource = $('#Reduction_Rabi_Cabbage_FundingSource').val();
    //  obj.reduction_rabi_beans_crop_area = $('#Reduction_Rabi_Beans_UserVale').val();
    //  obj.reduction_rabi_beans_fundingsource = $('#Reduction_Rabi_Beans_FundingSource').val();
    obj.reduction_rabi_floriculture_crop_area = $('#Reduction_Rabi_Floriculture_UserVale').val();
    obj.reduction_rabi_floriculture_fundingsource = $('#Reduction_Rabi_Floriculture_FundingSource').val();
    // obj.reduction_rabi_potato_crop_area = $('#Reduction_Rabi_Potato_UserVale').val();
    // obj.reduction_rabi_potato_fundingsource = $('#Reduction_Rabi_Potato_FundingSource').val();
    //  obj.reduction_rabi_cucumber_crop_area = $('#Reduction_Rabi_Cucumber_UserVale').val();
    //  obj.reduction_rabi_cucumber_fundingsource = $('#Reduction_Rabi_Cucumber_FundingSource').val();
    obj.reduction_rabi_ragi_crop_area = $('#Reduction_Rabi_Ragi_UserVale').val();
    obj.reduction_rabi_ragi_fundingsource = $('#Reduction_Rabi_Ragi_FundingSource').val();
    obj.reduction_rabi_sugarcane_crop_area = $('#Reduction_Rabi_Sugarcane_UserVale').val();
    obj.reduction_rabi_sugarcane_fundingsource = $('#Reduction_Rabi_Sugarcane_FundingSource').val();
    obj.reduction_rabi_maize_crop_area = $('#Reduction_Rabi_Maize_UserVale').val();
    obj.reduction_rabi_maize_fundingsource = $('#Reduction_Rabi_Maize_FundingSource').val();
    obj.reduction_rabi_fodder_crop_area = $('#Reduction_Rabi_Fodder_UserVale').val();
    obj.reduction_rabi_fodder_fundingsource = $('#Reduction_Rabi_Fodder_FundingSource').val();
    obj.reduction_rabi_paddy_crop_area = $('#Reduction_Rabi_Paddy_UserVale').val();
    obj.reduction_rabi_paddy_fundingsource = $('#Reduction_Rabi_Paddy_FundingSource').val();
    obj.reduction_rabi_alfalfa_crop_area = $('#Reduction_Rabi_Alfalfa_UserVale').val();
    obj.reduction_rabi_alfalfa_fundingsource = $('#Reduction_Rabi_Alfalfa_FundingSource').val();
    // obj.reduction_rabi_onion_crop_area = $('#Reduction_Rabi_Onion_UserVale').val();
    // obj.reduction_rabi_onion_fundingsource = $('#Reduction_Rabi_Onion_FundingSource').val();
    obj.reduction_rabi_horticulture_crop_area = $('#Reduction_Rabi_Hortculture_UserVale').val();
    obj.reduction_rabi_horticulture_fundingsource = $('#Reduction_Rabi_Hortculture_FundingSource').val();
    obj.reduction_rabi_sunflower_crop_area = $('#Reduction_Rabi_Sunflower_UserVale').val();
    obj.reduction_rabi_sunflower_fundingsource = $('#Reduction_Rabi_Sunflower_FundingSource').val();
    obj.reduction_summer_sericulture_crop_area = $('#Reduction_Summer_Sericulture_UserVale').val();
    obj.reduction_summer_sericulture_fundingsource = $('#Reduction_summer_Sericulture_FundingSource').val();
    obj.reduction_summer_tomoto_crop_area = $('#Reduction_Summer_Tomota_UserVale').val();
    obj.reduction_summer_tomoto_fundingsource = $('#Reduction_summer_Tomota_FundingSource').val();
    // obj.reduction_summer_cabbage_crop_area = $('#Reduction_Summer_Cabbage_UserVale').val();
    // obj.reduction_summer_cabbage_fundingsource = $('#Reduction_summer_Cabbage_FundingSource').val();
    // obj.reduction_summer_beans_crop_area = $('#Reduction_Summer_Beans_UserVale').val();
    // obj.reduction_summer_beans_fundingsource = $('#Reduction_summer_Beans_FundingSource').val();
    obj.reduction_summer_floriculture_crop_area = $('#Reduction_Summer_Floriculture_UserVale').val();
    obj.reduction_summer_floriculture_fundingsource = $('#Reduction_summer_Floriculture_FundingSource').val();
    obj.reduction_summer_maize_crop_area = $('#Reduction_Summer_Maize_UserVale').val();
    obj.reduction_summer_maize_fundingsource = $('#Reduction_summer_Maize_FundingSource').val();
    obj.reduction_summer_fodder_crop_area = $('#Reduction_Summer_Fodder_UserVale').val();
    obj.reduction_summer_fodder_fundingsource = $('#Reduction_summer_Fodder_FundingSource').val();
    obj.reduction_summer_sugarcane_crop_area = $('#Reduction_Summer_Sugarcane_UserVale').val();
    obj.reduction_summer_sugarcane_fundingsource = $('#Reduction_summer_Sugarcane_FundingSource').val();


    obj.reduction_kharif_paddy_quatum_value = $('#Reduction_kharif_paddy_Quantum_UserValue').val();
    obj.reduction_kharif_ragi_quatum_value = $('#Reduction_kharif_Ragi_Quantum_UserValue').val();
    obj.reduction_kharif_groundnut_quatum_value = $('#Reduction_kharif_Groundnut_Quantum_UserValue').val();
    obj.reduction_kharif_sugarcane_quatum_value = $('#Reduction_kharif_Sugarcane_Quantum_UserValue').val();
    obj.reduction_kharif_tomoto_quatum_value = $('#Reduction_kharif_Tomato_Quantum_UserValue').val();
    // obj.reduction_kharif_cabbage_quatum_value = $('#Reduction_kharif_Cabbage_Quantum_UserValue').val();
    // obj.reduction_kharif_beans_quatum_value = $('#Reduction_kharif_Beans_Quantum_UserValue').val();
    obj.reduction_kharif_floriculture_quatum_value = $('#Reduction_kharif_Floriculture_Quantum_UserValue').val();
    obj.reduction_kharif_sericulture_quatum_value = $('#Reduction_kharif_Sericulture_Quantum_UserValue').val();
    // obj.reduction_kharif_cucumber_quatum_value = $('#Reduction_kharif_Cucmber_Quantum_UserValue').val();
    obj.reduction_kharif_banana_quatum_value = $('#Reduction_kharif_Banana_Quantum_UserValue').val();
    obj.reduction_kharif_fodder_quatum_value = $('#Reduction_kharif_Fodder_Quantum_UserValue').val();
    obj.reduction_kharif_maize_quatum_value = $('#Reduction_kharif_Maize_Quantum_UserValue').val();
    //obj.reduction_kharif_potato_quatum_value = $('#Reduction_kharif_Potato_Quantum_UserValue').val();
    obj.reduction_kharif_chillies_quatum_value = $('#Reduction_kharif_Chillies_Quantum_UserValue').val();
    obj.reduction_kharif_cotton_quatum_value = $('#Reduction_kharif_Cotton_Quantum_UserValue').val();
    obj.reduction_kharif_melon_quatum_value = $('#Reduction_kharif_Melon_Quantum_UserValue').val();
    obj.reduction_kharif_citrus_quatum_value = $('#Reduction_kharif_Citrus_Quantum_UserValue').val();
    //obj.reduction_kharif_peanut_quatum_value = $('#Reduction_kharif_Peanut_Quantum_UserValue').val();
    obj.reduction_kharif_horticulture_quatum_value = $('#Reduction_kharif_Horticulture_Quantum_UserValue').val();

    obj.reduction_rabi_sericulture_quatum_value = $('#Reduction_Rabi_Sericulture_Quantum_UserValue').val();
    obj.reduction_rabi_tomoto_quatum_value = $('#Reduction_Rabi_Tomota_Quantum_UserValue').val();
    // obj.reduction_rabi_cabbage_quatum_value = $('#Reduction_Rabi_Cabbage_Quantum_UserValue').val();
    // obj.reduction_rabi_beans_quatum_value = $('#Reduction_Rabi_Beans_Quantum_UserValue').val();
    obj.reduction_rabi_floriculture_quatum_value = $('#Reduction_Rabi_Floriculture_Quantum_UserValue').val();
    // obj.reduction_rabi_potato_quatum_value = $('#Reduction_Rabi_Potato_Quantum_UserValue').val();
    // obj.reduction_rabi_cucumber_quatum_value = $('#Reduction_Rabi_Cucumber_Quantum_UserValue').val();
    obj.reduction_rabi_ragi_quatum_value = $('#Reduction_Rabi_Ragi_Quantum_UserValue').val();
    obj.reduction_rabi_sugarcane_quatum_value = $('#Reduction_Rabi_Sugarcane_Quantum_UserValue').val();
    obj.reduction_rabi_maize_quatum_value = $('#Reduction_Rabi_Maize_Quantum_UserValue').val();
    obj.reduction_rabi_fodder_quatum_value = $('#Reduction_Rabi_Fodder_Quantum_UserValue').val();
    obj.reduction_rabi_paddy_quatum_value = $('#Reduction_Rabi_Paddy_Quantum_UserValue').val();
    obj.reduction_rabi_alfalfa_quatum_value = $('#Reduction_Rabi_Alfalfa_Quantum_UserValue').val();
    // obj.reduction_rabi_onion_quatum_value = $('#Reduction_Rabi_Onion_Quantum_UserValue').val();
    obj.reduction_rabi_horticulture_quatum_value = $('#Reduction_Rabi_Hortculture_Quantum_UserValue').val();
    obj.reduction_rabi_sunflower_quatum_value = $('#Reduction_Rabi_Sunflower_Quantum_UserValue').val();

    obj.reduction_summer_sericulture_quatum_value = $('#Reduction_Summer_Sericulture_Quantum_UserValue').val();
    obj.reduction_summer_tomoto_quatum_value = $('#Reduction_Summer_Tomota_Quantum_UserValue').val();
    // obj.reduction_summer_cabbage_quatum_value = $('#Reduction_Summer_Cabbage_Quantum_UserValue').val();
    // obj.reduction_summer_beans_quatum_value = $('#Reduction_Summer_Beans_Quantum_UserValue').val();

    obj.reduction_summer_floriculture_quatum_value = $('#Reduction_Summer_Floriculture_Quantum_UserValue').val();

    obj.reduction_summer_maize_quatum_value = $('#Reduction_Summer_Maize_Quantum_UserValue').val();
    obj.reduction_summer_fodder_quatum_value = $('#Reduction_Summer_Fodder_Quantum_UserValue').val();
    obj.reduction_summer_sugarcane_quatum_value = $('#Reduction_Summer_Sugarcane_Quantum_UserValue').val();



    obj.reduction_summer_horticulture_crop_area = $('#reduction_summer_horticulture_crop_area').val();
    obj.reduction_summer_horticulture_quantum_uservalue = $('#reduction_summer_horticulture_quantum_uservalue').val();
    obj.reduction_summer_horticulture_water_req = $('#reduction_summer_horticulture_water_req').val();
    obj.reduction_summer_horticulture_waterdemand = reduction_summer_horticulture_waterdemand;
    obj.reduction_summer_horticulture_reduction_gw_demand = reduction_summer_horticulture_reduction_gw_demand;



    obj.latitude = lat;
    obj.longitude = long;
    // obj.date_time
    // obj.userid
    //obj.reduction_kharif_water_demand1 = $('#Reduction_Kharif_Water_demand1').text();
    //obj.reduction_kharif_water_save = $('#Reduction_Kharif_Water_Save').text();
    //obj.reduction_rabi_water_demand = $('#Reduction_Rabi_Water_demand').text();
    //obj.reduction_rabi_water_save = $('#Reduction_Rabi_Water_Save').text();
    //obj.reduction_summercrop_water_demand = $('#Reduction_SummerCrop_Water_demand').text();
    //obj.reduction_summercrop_water_save1 = $('#Reduction_SummerCrop_Water_Save1').text();

    //new columns water requirement
    obj.reduction_kharif_paddy_water_req = $('#reduction_kharif_paddy_water_req').val();
    obj.reduction_kharif_ragi_water_req = $('#reduction_kharif_ragi_water_req').val();
    obj.reduction_kharif_groundnut_water_req = $('#reduction_kharif_groundnut_water_req').val();
    obj.reduction_kharif_sugarcane_water_req = $('#reduction_kharif_sugarcane_water_req').val();
    obj.reduction_kharif_tomoto_water_req = $('#reduction_kharif_tomoto_water_req').val();
    //  obj.reduction_kharif_cabbage_water_req = $('#reduction_kharif_cabbage_water_req').val();
    //  obj.reduction_kharif_beans_water_req = $('#reduction_kharif_beans_water_req').val();
    obj.reduction_kharif_floriculture_water_req = $('#reduction_kharif_floriculture_water_req').val();
    obj.reduction_kharif_sericulture_water_req = $('#reduction_kharif_sericulture_water_req').val();
    // obj.reduction_kharif_cucumber_water_req = $('#reduction_kharif_cucumber_water_req').val();
    obj.reduction_kharif_banana_water_req = $('#reduction_kharif_banana_water_req').val();
    obj.reduction_kharif_fodder_water_req = $('#reduction_kharif_fodder_water_req').val();
    obj.reduction_kharif_maize_water_req = $('#reduction_kharif_maize_water_req').val();
    obj.reduction_kharif_potato_water_req = $('#reduction_kharif_potato_water_req').val();
    obj.reduction_kharif_chillies_water_req = $('#reduction_kharif_chillies_water_req').val();
    obj.reduction_kharif_cotton_water_req = $('#reduction_kharif_cotton_water_req').val();
    obj.reduction_kharif_melon_water_req = $('#reduction_kharif_melon_water_req').val();
    obj.reduction_kharif_citrus_water_req = $('#reduction_kharif_citrus_water_req').val();
    // obj.reduction_kharif_peanut_water_req = $('#reduction_kharif_peanut_water_req').val();
    obj.reduction_kharif_horticulture_water_req = $('#reduction_kharif_horticulture_water_req').val();
    obj.reduction_summer_sugarcane_irri_area = $('#reduction_summer_sugarcane_irri_area').val();

    obj.reduction_rabi_sericulture_water_req = $('#reduction_rabi_sericulture_water_req').val();
    obj.reduction_rabi_tomoto_water_req = $('#reduction_rabi_tomoto_water_req').val();
    // obj.reduction_rabi_cabbage_water_req = $('#reduction_rabi_cabbage_water_req').val();
    // obj.reduction_rabi_beans_water_req = $('#reduction_rabi_beans_water_req').val();
    obj.reduction_rabi_floriculture_water_req = $('#reduction_rabi_floriculture_water_req').val();
    // obj.reduction_rabi_potato_water_req = $('#reduction_rabi_potato_water_req').val();
    // obj.reduction_rabi_cucumber_water_req = $('#reduction_rabi_cucuber_water_req').val();
    obj.reduction_rabi_ragi_water_req = $('#reduction_rabi_ragi_water_req').val();
    obj.reduction_rabi_sugarcane_water_req = $('#reduction_rabi_sugarcane_water_req').val();
    obj.reduction_rabi_maize_water_req = $('#reduction_rabi_maize_water_req').val();
    obj.reduction_rabi_fodder_water_req = $('#reduction_rabi_fodder_water_req').val();
    obj.reduction_rabi_paddy_water_req = $('#reduction_rabi_paddy_water_req').val();
    obj.reduction_rabi_alfalfa_water_req = $('#reduction_rabi_alfalfa_water_req').val();
    //obj.reduction_rabi_onion_water_req = $('#reduction_rabi_onion_water_req').val();
    obj.reduction_rabi_horticulture_water_req = $('#reduction_rabi_horticulture_water_req').val();
    obj.reduction_rabi_sunflower_water_req = $('#reduction_rabi_sunflower_water_req').val();

    obj.reduction_summer_sericulture_water_req = $('#reduction_summer_sericulture_water_req').val();
    obj.reduction_summer_tomoto_water_req = $('#reduction_summer_tomoto_water_req').val();
    // obj.reduction_summer_cabbage_water_req = $('#reduction_summer_cabbage_water_req').val();
    // obj.reduction_summer_beans_water_req = $('#reduction_summer_beans_water_req').val();
    obj.reduction_summer_floriculture_water_req = $('#reduction_summer_floriculture_water_req').val();
    obj.reduction_summer_maize_water_req = $('#reduction_summer_maize_water_req').val();
    obj.reduction_summer_fodder_water_req = $('#reduction_summer_fodder_water_req').val();
    obj.reduction_summer_sugarcane_water_req = $('#reduction_summer_sugarcane_water_req').val();

    //totals 
    var Reduction_Kharif_Water_demand1 = $('#Reduction_Kharif_Water_demand1').text();
    obj.reduction_kharif_total_kharifcrop_waterdemand = parseFloat(Reduction_Kharif_Water_demand1).toFixed(2);
    var Reduction_in_GW_through_kharif_surface_water1 = $('#Reduction_in_GW_through_kharif_surface_water1').text();
    obj.reduction_kharif_total_reduc_gw_demand = parseFloat(Reduction_in_GW_through_kharif_surface_water1).toFixed(2);

    var Reduction_Rabi_Water_demand = $('#Reduction_Rabi_Water_demand').text();
    obj.reduction_rabi_total_rabicrop_waterdemand = parseFloat(Reduction_Rabi_Water_demand).toFixed(2);
    var Reduction_in_GW_through_Rabi_surface_water = $('#Reduction_in_GW_through_Rabi_surface_water').text();
    obj.reduction_rabi_total_reduc_gw_demand = parseFloat(Reduction_in_GW_through_Rabi_surface_water).toFixed(2);

    var Reduction_SummerCrop_Water_demand = $('#Reduction_SummerCrop_Water_demand').text();
    obj.reduction_summer_total_summercrop_waterdemand = parseFloat(Reduction_SummerCrop_Water_demand).toFixed(2);
    var Reduction_in_GW_through_Summer_surface_water = $('#Reduction_in_GW_through_Summer_surface_water').text();
    obj.reduction_summer_total_reduc_gw_demand = parseFloat(Reduction_in_GW_through_Summer_surface_water).toFixed(2);

    //annual total
    var TotalAnnual_Reduction_Reduction = $('#TotalAnnual_Reduction_Reduction').text();
    obj.reduction_total_annual_waterdemand = parseFloat(TotalAnnual_Reduction_Reduction).toFixed(2);

    obj.reduction_other_funding_source = $('#other_Reduction_kharif_Paddy_FundingSource').val();
    //
    //obj.reduction_summer_sugarcane_water_req = $('#reduction_summer_sugarcane_water_req').val();

    //add crops

    obj.reduction_kharif_othercrop_name1 = $('#reduction_kharif_othercrop_name1').val();
    obj.reduction_kharif_othercrop_area1 = $('#reduction_kharif_othercrop_area1').val();
    obj.reduction_kharif_othercrop_quantum_uservalue1 = $('#reduction_kharif_othercrop_quantum_uservalue1').val();
    obj.reduction_kharif_othercrop_water_req1 = $('#reduction_kharif_othercrop_water_req1').val();
    obj.reduction_kharif_othercrop_waterdemand1 = reduction_kharif_othercrop_waterdemand1;
    obj.reduction_kharif_othercrop_reduction_gw_demand1 = reduction_kharif_othercrop_reduction_gw_demand1;

    obj.reduction_kharif_othercrop_name2 = $('#reduction_kharif_othercrop_name2').val();
    obj.reduction_kharif_othercrop_area2 = $('#reduction_kharif_othercrop_area2').val();
    obj.reduction_kharif_othercrop_quantum_uservalue2 = $('#reduction_kharif_othercrop_quantum_uservalue2').val();
    obj.reduction_kharif_othercrop_water_req2 = $('#reduction_kharif_othercrop_water_req2').val();
    obj.reduction_kharif_othercrop_waterdemand2 = reduction_kharif_othercrop_waterdemand2;
    obj.reduction_kharif_othercrop_reduction_gw_demand2 = reduction_kharif_othercrop_reduction_gw_demand2;

    obj.reduction_kharif_othercrop_name3 = $('#reduction_kharif_othercrop_name3').val();
    obj.reduction_kharif_othercrop_area3 = $('#reduction_kharif_othercrop_area3').val();
    obj.reduction_kharif_othercrop_quantum_uservalue3 = $('#reduction_kharif_othercrop_quantum_uservalue3').val();
    obj.reduction_kharif_othercrop_water_req3 = $('#reduction_kharif_othercrop_water_req3').val();
    obj.reduction_kharif_othercrop_waterdemand3 = reduction_kharif_othercrop_waterdemand3;
    obj.reduction_kharif_othercrop_reduction_gw_demand3 = reduction_kharif_othercrop_reduction_gw_demand3;

    obj.reduction_kharif_othercrop_name4 = $('#reduction_kharif_othercrop_name4').val();
    obj.reduction_kharif_othercrop_area4 = $('#reduction_kharif_othercrop_area4').val();
    obj.reduction_kharif_othercrop_quantum_uservalue4 = $('#reduction_kharif_othercrop_quantum_uservalue4').val();
    obj.reduction_kharif_othercrop_water_req4 = $('#reduction_kharif_othercrop_water_req4').val();
    obj.reduction_kharif_othercrop_waterdemand4 = reduction_kharif_othercrop_waterdemand4;
    obj.reduction_kharif_othercrop_reduction_gw_demand4 = reduction_kharif_othercrop_reduction_gw_demand4;

    obj.reduction_kharif_othercrop_name5 = $('#reduction_kharif_othercrop_name5').val();
    obj.reduction_kharif_othercrop_area5 = $('#reduction_kharif_othercrop_area5').val();
    obj.reduction_kharif_othercrop_quantum_uservalue5 = $('#reduction_kharif_othercrop_quantum_uservalue5').val();
    obj.reduction_kharif_othercrop_water_req5 = $('#reduction_kharif_othercrop_water_req5').val();
    obj.reduction_kharif_othercrop_waterdemand5 = reduction_kharif_othercrop_waterdemand5;
    obj.reduction_kharif_othercrop_reduction_gw_demand5 = reduction_kharif_othercrop_reduction_gw_demand5;



    obj.reduction_rabi_othercrop_name1 = $('#reduction_rabi_othercrop_name1').val();
    obj.reduction_rabi_othercrop_area1 = $('#reduction_rabi_othercrop_area1').val();
    obj.reduction_rabi_othercrop_quantum_uservalue1 = $('#reduction_rabi_othercrop_quantum_uservalue1').val();
    obj.reduction_rabi_othercrop_water_req1 = $('#reduction_rabi_othercrop_water_req1').val();
    obj.reduction_rabi_othercrop_waterdemand1 = reduction_rabi_othercrop_waterdemand1;
    obj.reduction_rabi_othercrop_reduction_gw_demand1 = reduction_rabi_othercrop_reduction_gw_demand1;

    obj.reduction_rabi_othercrop_name2 = $('#reduction_rabi_othercrop_name2').val();
    obj.reduction_rabi_othercrop_area2 = $('#reduction_rabi_othercrop_area2').val();
    obj.reduction_rabi_othercrop_quantum_uservalue2 = $('#reduction_rabi_othercrop_quantum_uservalue2').val();
    obj.reduction_rabi_othercrop_water_req2 = $('#reduction_rabi_othercrop_water_req2').val();
    obj.reduction_rabi_othercrop_waterdemand2 = reduction_rabi_othercrop_waterdemand2;
    obj.reduction_rabi_othercrop_reduction_gw_demand2 = reduction_rabi_othercrop_reduction_gw_demand2;

    obj.reduction_rabi_othercrop_name3 = $('#reduction_rabi_othercrop_name3').val();
    obj.reduction_rabi_othercrop_area3 = $('#reduction_rabi_othercrop_area3').val();
    obj.reduction_rabi_othercrop_quantum_uservalue3 = $('#reduction_rabi_othercrop_quantum_uservalue3').val();
    obj.reduction_rabi_othercrop_water_req3 = $('#reduction_rabi_othercrop_water_req3').val();
    obj.reduction_rabi_othercrop_waterdemand3 = reduction_rabi_othercrop_waterdemand3;
    obj.reduction_rabi_othercrop_reduction_gw_demand3 = reduction_rabi_othercrop_reduction_gw_demand3;

    obj.reduction_rabi_othercrop_name4 = $('#reduction_rabi_othercrop_name4').val();
    obj.reduction_rabi_othercrop_area4 = $('#reduction_rabi_othercrop_area4').val();
    obj.reduction_rabi_othercrop_quantum_uservalue4 = $('#reduction_rabi_othercrop_quantum_uservalue4').val();
    obj.reduction_rabi_othercrop_water_req4 = $('#reduction_rabi_othercrop_water_req4').val();
    obj.reduction_rabi_othercrop_waterdemand4 = reduction_rabi_othercrop_waterdemand4;
    obj.reduction_rabi_othercrop_reduction_gw_demand4 = reduction_rabi_othercrop_reduction_gw_demand4;

    obj.reduction_rabi_othercrop_name5 = $('#reduction_rabi_othercrop_name5').val();
    obj.reduction_rabi_othercrop_area5 = $('#reduction_rabi_othercrop_area5').val();
    obj.reduction_rabi_othercrop_quantum_uservalue5 = $('#reduction_rabi_othercrop_quantum_uservalue5').val();
    obj.reduction_rabi_othercrop_water_req5 = $('#reduction_rabi_othercrop_water_req5').val();
    obj.reduction_rabi_othercrop_waterdemand5 = reduction_rabi_othercrop_waterdemand5;
    obj.reduction_rabi_othercrop_reduction_gw_demand5 = reduction_rabi_othercrop_reduction_gw_demand5;




    obj.reduction_summer_othercrop_name1 = $('#reduction_summer_othercrop_name1').val();
    obj.reduction_summer_othercrop_area1 = $('#reduction_summer_othercrop_area1').val();
    obj.reduction_summer_othercrop_quantum_uservalue1 = $('#reduction_summer_othercrop_quantum_uservalue1').val();
    obj.reduction_summer_othercrop_water_req1 = $('#reduction_summer_othercrop_water_req1').val();
    obj.reduction_summer_othercrop_waterdemand1 = reduction_summer_othercrop_waterdemand1;
    obj.reduction_summer_othercrop_reduction_gw_demand1 = reduction_summer_othercrop_reduction_gw_demand1;

    obj.reduction_summer_othercrop_name2 = $('#reduction_summer_othercrop_name2').val();
    obj.reduction_summer_othercrop_area2 = $('#reduction_summer_othercrop_area2').val();
    obj.reduction_summer_othercrop_quantum_uservalue2 = $('#reduction_summer_othercrop_quantum_uservalue2').val();
    obj.reduction_summer_othercrop_water_req2 = $('#reduction_summer_othercrop_water_req2').val();
    obj.reduction_summer_othercrop_waterdemand2 = reduction_summer_othercrop_waterdemand2;
    obj.reduction_summer_othercrop_reduction_gw_demand2 = reduction_summer_othercrop_reduction_gw_demand2;

    obj.reduction_summer_othercrop_name3 = $('#reduction_summer_othercrop_name3').val();
    obj.reduction_summer_othercrop_area3 = $('#reduction_summer_othercrop_area3').val();
    obj.reduction_summer_othercrop_quantum_uservalue3 = $('#reduction_summer_othercrop_quantum_uservalue3').val();
    obj.reduction_summer_othercrop_water_req3 = $('#reduction_summer_othercrop_water_req3').val();
    obj.reduction_summer_othercrop_waterdemand3 = reduction_summer_othercrop_waterdemand3;
    obj.reduction_summer_othercrop_reduction_gw_demand3 = reduction_summer_othercrop_reduction_gw_demand3;

    obj.reduction_summer_othercrop_name4 = $('#reduction_summer_othercrop_name4').val();
    obj.reduction_summer_othercrop_area4 = $('#reduction_summer_othercrop_area4').val();
    obj.reduction_summer_othercrop_quantum_uservalue4 = $('#reduction_summer_othercrop_quantum_uservalue4').val();
    obj.reduction_summer_othercrop_water_req4 = $('#reduction_summer_othercrop_water_req4').val();
    obj.reduction_summer_othercrop_waterdemand4 = reduction_summer_othercrop_waterdemand4;
    obj.reduction_summer_othercrop_reduction_gw_demand4 = reduction_summer_othercrop_reduction_gw_demand4;

    obj.reduction_summer_othercrop_name5 = $('#reduction_summer_othercrop_name5').val();
    obj.reduction_summer_othercrop_area5 = $('#reduction_summer_othercrop_area5').val();
    obj.reduction_summer_othercrop_quantum_uservalue5 = $('#reduction_summer_othercrop_quantum_uservalue5').val();
    obj.reduction_summer_othercrop_water_req5 = $('#reduction_summer_othercrop_water_req5').val();
    obj.reduction_summer_othercrop_waterdemand5 = reduction_summer_othercrop_waterdemand5;
    obj.reduction_summer_othercrop_reduction_gw_demand5 = reduction_summer_othercrop_reduction_gw_demand5;







    obj.reduction_kharif_paddy_waterdemand = parseFloat(reduction_kharif_paddy_waterdemand).toFixed(2);
    obj.reduction_kharif_paddy_gw_demand = parseFloat(reduction_kharif_paddy_gw_demand).toFixed(2);

    obj.reduction_kharif_ragi_waterdemand = parseFloat(reduction_kharif_ragi_waterdemand).toFixed(2);
    obj.reduction_kharif_ragi_gw_demand = parseFloat(reduction_kharif_ragi_gw_demand).toFixed(2);

    obj.reduction_kharif_groundnut_waterdemand = parseFloat(reduction_kharif_groundnut_waterdemand).toFixed(2);
    obj.reduction_kharif_groundnut_gw_demand = parseFloat(reduction_kharif_groundnut_gw_demand).toFixed(2);


    obj.reduction_kharif_sugarcane_waterdemand = parseFloat(reduction_kharif_sugarcane_waterdemand).toFixed(2);
    obj.reduction_kharif_sugarcane_gw_demand = parseFloat(reduction_kharif_sugarcane_gw_demand).toFixed(2);


    obj.reduction_kharif_tomoto_waterdemand = parseFloat(reduction_kharif_tomoto_waterdemand).toFixed(2);
    obj.reduction_kharif_tomoto_gw_demand = parseFloat(reduction_kharif_tomoto_gw_demand).toFixed(2);


    //  obj.reduction_kharif_cabbage_waterdemand = parseFloat(reduction_kharif_cabbage_waterdemand).toFixed(2);
    //  obj.reduction_kharif_cabbage_gw_demand = parseFloat(reduction_kharif_cabbage_gw_demand).toFixed(2);

    //  obj.reduction_kharif_beans_waterdemand = parseFloat(reduction_kharif_beans_waterdemand).toFixed(2);
    //  obj.reduction_kharif_beans_gw_demand = parseFloat(reduction_kharif_beans_gw_demand).toFixed(2);

    obj.reduction_kharif_floriculture_waterdemand = parseFloat(reduction_kharif_floriculture_waterdemand).toFixed(2);
    obj.reduction_kharif_floriculture_gw_demand = parseFloat(reduction_kharif_floriculture_gw_demand).toFixed(2);


    obj.reduction_kharif_sericulture_waterdemand = parseFloat(reduction_kharif_sericulture_waterdemand).toFixed(2);
    obj.reduction_kharif_sericulture_gw_demand = parseFloat(reduction_kharif_sericulture_gw_demand).toFixed(2);

    //  obj.reduction_kharif_cucumber_waterdemand = parseFloat(reduction_kharif_cucumber_waterdemand).toFixed(2);
    //  obj.reduction_kharif_cucumber_gw_demand = parseFloat(reduction_kharif_cucumber_gw_demand).toFixed(2);

    obj.reduction_kharif_banana_waterdemand = parseFloat(reduction_kharif_banana_waterdemand).toFixed(2);
    obj.reduction_kharif_banana_gw_demand = parseFloat(reduction_kharif_banana_gw_demand).toFixed(2);


    obj.reduction_kharif_fodder_waterdemand = parseFloat(reduction_kharif_fodder_waterdemand).toFixed(2);
    obj.reduction_kharif_fodder_gw_demand = parseFloat(reduction_kharif_fodder_gw_demand).toFixed(2);

    obj.reduction_kharif_maize_waterdemand = parseFloat(reduction_kharif_maize_waterdemand).toFixed(2);
    obj.reduction_kharif_maize_gw_demand = parseFloat(reduction_kharif_maize_gw_demand).toFixed(2);


    //   obj.reduction_kharif_potato_waterdemand = parseFloat(reduction_kharif_potato_waterdemand).toFixed(2);
    //   obj.reduction_kharif_potato_gw_demand = parseFloat(reduction_kharif_potato_gw_demand).toFixed(2);


    obj.reduction_kharif_chillies_waterdemand = parseFloat(reduction_kharif_chillies_waterdemand).toFixed(2);
    obj.reduction_kharif_chillies_gw_demand = parseFloat(reduction_kharif_chillies_gw_demand).toFixed(2);

    obj.reduction_kharif_cotton_waterdemand = parseFloat(reduction_kharif_cotton_waterdemand).toFixed(2);
    obj.reduction_kharif_cotton_gw_demand = parseFloat(reduction_kharif_cotton_gw_demand).toFixed(2);

    obj.reduction_kharif_melon_waterdemand = parseFloat(reduction_kharif_melon_waterdemand).toFixed(2);
    obj.reduction_kharif_melon_gw_demand = parseFloat(reduction_kharif_melon_gw_demand).toFixed(2);


    obj.reduction_kharif_citrus_waterdemand = parseFloat(reduction_kharif_citrus_waterdemand).toFixed(2);
    obj.reduction_kharif_citrus_gw_demand = parseFloat(reduction_kharif_citrus_gw_demand).toFixed(2);


    //  obj.reduction_kharif_peanut_waterdemand = parseFloat(reduction_kharif_peanut_waterdemand).toFixed(2);
    //  obj.reduction_kharif_peanut_gw_demand = parseFloat(reduction_kharif_peanut_gw_demand).toFixed(2);

    obj.reduction_kharif_othercrop_gw_waterdemand = parseFloat(reduction_kharif_othercrop_gw_waterdemand).toFixed(2);
    obj.reduction_kharif_othercrop_reduc_gw_demand = parseFloat(reduction_kharif_othercrop_reduc_gw_demand).toFixed(2);


    obj.reduction_kharif_horticulture_waterdemand = parseFloat(reduction_kharif_horticulture_waterdemand).toFixed(2);
    obj.reduction_kharif_horticulture_gw_demand = parseFloat(reduction_kharif_horticulture_gw_demand).toFixed(2);



    obj.reduction_rabi_sericulture_waterdemand = parseFloat(reduction_rabi_sericulture_waterdemand).toFixed(2);
    obj.reduction_rabi_sericulture_gw_demand = parseFloat(reduction_rabi_sericulture_gw_demand).toFixed(2);
    obj.reduction_rabi_tomoto_waterdemand = parseFloat(reduction_rabi_tomoto_waterdemand).toFixed(2);
    obj.reduction_rabi_tomoto_gw_demand = parseFloat(reduction_rabi_tomoto_gw_demand).toFixed(2);


    // obj.reduction_rabi_cabbage_waterdemand = parseFloat(reduction_rabi_cabbage_waterdemand).toFixed(2);
    // obj.reduction_rabi_cabbage_gw_demand = parseFloat(reduction_rabi_cabbage_gw_demand).toFixed(2);


    // obj.reduction_rabi_beans_waterdemand = parseFloat(reduction_rabi_beans_waterdemand).toFixed(2);
    // obj.reduction_rabi_beans_gw_demand = parseFloat(reduction_rabi_beans_gw_demand).toFixed(2);

    obj.reduction_rabi_floriculture_waterdemand = parseFloat(reduction_rabi_floriculture_waterdemand).toFixed(2);
    obj.reduction_rabi_floriculture_gw_demand = parseFloat(reduction_rabi_floriculture_gw_demand).toFixed(2);


    //obj.reduction_rabi_potato_waterdemand = parseFloat(reduction_rabi_potato_waterdemand).toFixed(2);
    //obj.reduction_rabi_potato_gw_demand = parseFloat(reduction_rabi_potato_gw_demand).toFixed(2);

    //obj.reduction_rabi_cucuber_waterdemand = parseFloat(reduction_rabi_cucuber_waterdemand).toFixed(2);
    //obj.reduction_rabi_cucuber_gw_demand = parseFloat(reduction_rabi_cucuber_gw_demand).toFixed(2);


    obj.reduction_rabi_ragi_waterdemand = parseFloat(reduction_rabi_ragi_waterdemand).toFixed(2);
    obj.reduction_rabi_ragi_gw_demand = parseFloat(reduction_rabi_ragi_gw_demand).toFixed(2);


    obj.reduction_rabi_sugarcane_waterdemand = parseFloat(reduction_rabi_sugarcane_waterdemand).toFixed(2);
    obj.reduction_rabi_sugarcane_gw_demand = parseFloat(reduction_rabi_sugarcane_gw_demand).toFixed(2);

    obj.reduction_rabi_maize_waterdemand = parseFloat(reduction_rabi_maize_waterdemand).toFixed(2);
    obj.reduction_rabi_maize_gw_demand = parseFloat(reduction_rabi_maize_gw_demand).toFixed(2);


    obj.reduction_rabi_fodder_waterdemand = parseFloat(reduction_rabi_fodder_waterdemand).toFixed(2);
    obj.reduction_rabi_fodder_gw_demand = parseFloat(reduction_rabi_fodder_gw_demand).toFixed(2);


    obj.reduction_rabi_paddy_waterdemand = parseFloat(reduction_rabi_paddy_waterdemand).toFixed(2);
    obj.reduction_rabi_paddy_gw_demand = parseFloat(reduction_rabi_paddy_gw_demand).toFixed(2);


    obj.reduction_rabi_alfalfa_waterdemand = parseFloat(reduction_rabi_alfalfa_waterdemand).toFixed(2);
    obj.reduction_rabi_alfalfa_gw_demand = parseFloat(reduction_rabi_alfalfa_gw_demand).toFixed(2);


    // obj.reduction_rabi_onion_waterdemand = parseFloat(reduction_rabi_onion_waterdemand).toFixed(2);
    // obj.reduction_rabi_onion_gw_demand = parseFloat(reduction_rabi_onion_gw_demand).toFixed(2);


    obj.reduction_rabi_horticulture_waterdemand = parseFloat(reduction_rabi_horticulture_waterdemand).toFixed(2);
    obj.reduction_rabi_horticulture_gw_demand = parseFloat(reduction_rabi_horticulture_gw_demand).toFixed(2);


    obj.reduction_rabi_sunflower_waterdemand = parseFloat(reduction_rabi_sunflower_waterdemand).toFixed(2);
    obj.reduction_rabi_sunflower_gw_demand = parseFloat(reduction_rabi_sunflower_gw_demand).toFixed(2);

    obj.reduction_rabi_othercrop_gw_waterdemand = parseFloat(reduction_rabi_othercrop_gw_waterdemand).toFixed(2);
    obj.reduction_rabi_othercrop_reduc_gw_demand = parseFloat(reduction_rabi_othercrop_reduc_gw_demand).toFixed(2);




    obj.reduction_summer_sericulture_waterdemand = parseFloat(reduction_summer_sericulture_waterdemand).toFixed(2);
    obj.reduction_summer_sericulture_gw_demand = parseFloat(reduction_summer_sericulture_gw_demand).toFixed(2);

    obj.reduction_summer_tomoto_waterdemand = parseFloat(reduction_summer_tomoto_waterdemand).toFixed(2);
    obj.reduction_summer_tomoto_gw_demand = parseFloat(reduction_summer_tomoto_gw_demand).toFixed(2);

    //obj.reduction_summer_cabbage_waterdemand = parseFloat(reduction_summer_cabbage_waterdemand).toFixed(2);
    // obj.reduction_summer_cabbage_gw_demand = parseFloat(reduction_summer_cabbage_gw_demand).toFixed(2);

    //  obj.reduction_summer_beans_waterdemand = parseFloat(reduction_summer_beans_waterdemand).toFixed(2);
    //  obj.reduction_summer_beans_gw_demand = parseFloat(reduction_summer_beans_gw_demand).toFixed(2);

    obj.reduction_summer_floriculture_waterdemand = parseFloat(reduction_summer_floriculture_waterdemand).toFixed(2);
    obj.reduction_summer_floriculture_gw_demand = parseFloat(reduction_summer_floriculture_gw_demand).toFixed(2);

    obj.reduction_summer_maize_waterdemand = parseFloat(reduction_summer_maize_waterdemand).toFixed(2);
    obj.reduction_summer_maize_gw_demand = parseFloat(reduction_summer_maize_gw_demand).toFixed(2);

    obj.reduction_summer_fodder_waterdemand = parseFloat(reduction_summer_fodder_waterdemand).toFixed(2);
    obj.reduction_summer_fodder_gw_demand = parseFloat(reduction_summer_fodder_gw_demand).toFixed(2);

    obj.reduction_summer_sugarcane_waterdemand = parseFloat(reduction_summer_sugarcane_waterdemand).toFixed(2);
    obj.reduction_summer_sugarcane_gw_demand = parseFloat(reduction_summer_sugarcane_gw_demand).toFixed(2);


    obj.reduction_summer_othercrop_gw_waterdemand = parseFloat(reduction_summer_othercrop_gw_waterdemand).toFixed(2);
    obj.reduction_summer_othercrop_reduc_gw_demand = parseFloat(reduction_summer_othercrop_reduc_gw_demand).toFixed(2);



    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSPHome/ReductionSaveData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Saved Successfully" && response != "Logout" && response != "valid_negitive") {
                window.location = "/Error/DefaultError";
            }
            $('#SAVE_BTN5').prop('disabled', false);

            //$('#ar_Error').text(response);

            //Draft_Report();
            //Availabilty_Report();
        }
    });


}


function ReductionPopup(SS) {
    Reduction_Kharif_WaterRequire();
    Reduction_Rabi_WaterRequire();
    Reduction_Summer_WaterRequire();


    if (SS == "Reduction_kharif_Paddy_UserVale") {

        $('#Reduction_Individual_Name').text("Paddy");

        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_paddy_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_paddy_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Ragi_UserVale") {

        $('#Reduction_Individual_Name').text("Ragi");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_ragi_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_ragi_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Groundnut_UserVale") {
        $('#Reduction_Individual_Name').text("Groundnut");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_groundnut_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_groundnut_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Sugarcane_UserVale") {
        $('#Reduction_Individual_Name').text("Sugarcane");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_sugarcane_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_sugarcane_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Tomato_UserVale") {
        $('#Reduction_Individual_Name').text("Vegetables");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_tomoto_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_tomoto_gw_demand).toFixed(2));

    }
    //else if (SS == "Reduction_kharif_Cabbage_UserVale") {
    //    $('#Reduction_Individual_Name').text("Cabbage");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_cabbage_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_cabbage_gw_demand).toFixed(2));

    //}

    //else if (SS == "Reduction_kharif_Beans_UserVale") {
    //    $('#Reduction_Individual_Name').text("Beans");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_beans_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_beans_gw_demand).toFixed(2));

    //}
    else if (SS == "Reduction_kharif_Floriculture_UserVale") {
        $('#Reduction_Individual_Name').text("Floriculture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_floriculture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_floriculture_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Sericulture_UserVale") {
        $('#Reduction_Individual_Name').text("Sericulture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_sericulture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_sericulture_gw_demand).toFixed(2));

    }
    //else if (SS == "Reduction_kharif_Cucumber_UserVale") {
    //    $('#Reduction_Individual_Name').text("Cucumber");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_cucumber_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_cucumber_gw_demand).toFixed(2));

    //}
    //else if (SS == "Reduction_kharif_Banana_UserVale") {
    //    $('#Reduction_Individual_Name').text("Banana");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_banana_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_banana_gw_demand).toFixed(2));

    //}
    else if (SS == "Reduction_kharif_Fodder_UserVale") {
        $('#Reduction_Individual_Name').text("Fodder");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_fodder_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_fodder_gw_demand).toFixed(2));

    }

    else if (SS == "Reduction_kharif_Maize_UserVale") {
        $('#Reduction_Individual_Name').text("Maize");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_maize_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_maize_gw_demand).toFixed(2));

    }
    //else if (SS == "Reduction_kharif_Potato_UserVale") {
    //    $('#Reduction_Individual_Name').text("Potato");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_potato_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_potato_gw_demand).toFixed(2));

    //}
    else if (SS == "Reduction_kharif_Chillies_UserVale") {
        $('#Reduction_Individual_Name').text("Chillies");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_chillies_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_chillies_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Cotton_UserVale") {
        $('#Reduction_Individual_Name').text("Cotton");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_cotton_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_cotton_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Melon_UserVale") {
        $('#Reduction_Individual_Name').text("Melon");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_melon_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_melon_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_kharif_Citrus_UserVale") {
        $('#Reduction_Individual_Name').text("Citrus");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_citrus_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_citrus_gw_demand).toFixed(2));

    }



    //else if (SS == "Reduction_kharif_Peanut_UserVale") {
    //    $('#Reduction_Individual_Name').text("Peanut");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_peanut_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_peanut_gw_demand).toFixed(2));

    //}
    else if (SS == "Reduction_kharif_Horticulture_UserVale") {
        $('#Reduction_Individual_Name').text("Horticulture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_horticulture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_horticulture_gw_demand).toFixed(2));

    }

    else if (SS == "reduction_kharif_othercrop_area") {
        var CropName = $('#reduction_kharif_othercrop_name').val();
        $('#Reduction_Individual_Name').text(CropName);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_othercrop_gw_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_othercrop_reduc_gw_demand).toFixed(2));

    }


    //Rabbi

    else if (SS == "Reduction_Rabi_Sericulture_UserVale") {
        $('#Reduction_Individual_Name').text("Sericulture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_sericulture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_sericulture_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_Rabi_Tomota_UserVale") {
        $('#Reduction_Individual_Name').text("Vegetables");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_tomoto_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_tomoto_gw_demand).toFixed(2));

    }
    //else if (SS == "Reduction_Rabi_Cabbage_UserVale") {
    //    $('#Reduction_Individual_Name').text("Cabbage");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_cabbage_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_cabbage_gw_demand).toFixed(2));

    //}
    //else if (SS == "Reduction_Rabi_Beans_UserVale") {
    //    $('#Reduction_Individual_Name').text("Beans");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_beans_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_beans_gw_demand).toFixed(2));

    //}
    else if (SS == "Reduction_Rabi_Floriculture_UserVale") {
        $('#Reduction_Individual_Name').text("Floriculture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_floriculture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_floriculture_gw_demand).toFixed(2));

    }
    //else if (SS == "Reduction_Rabi_Potato_UserVale") {
    //    $('#Reduction_Individual_Name').text("Potato");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_potato_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_potato_gw_demand).toFixed(2));

    //}
    //else if (SS == "Reduction_Rabi_Cucumber_UserVale") {
    //    $('#Reduction_Individual_Name').text("Cucumber");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_cucuber_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_cucuber_gw_demand).toFixed(2));

    //}
    else if (SS == "Reduction_Rabi_Ragi_UserVale") {
        $('#Reduction_Individual_Name').text("Ragi");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_ragi_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_ragi_gw_demand).toFixed(2));

    }
    else if (SS == "Reduction_Rabi_Sugarcane_UserVale") {
        $('#Reduction_Individual_Name').text("Sugarcane");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_sugarcane_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_sugarcane_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Rabi_Maize_UserVale") {
        $('#Reduction_Individual_Name').text("Maize");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_maize_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_maize_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Rabi_Fodder_UserVale") {
        $('#Reduction_Individual_Name').text("Fodder");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_fodder_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_fodder_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Rabi_Paddy_UserVale") {
        $('#Reduction_Individual_Name').text("Paddy");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_paddy_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_paddy_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Rabi_Alfalfa_UserVale") {
        $('#Reduction_Individual_Name').text("Alfalfa");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_alfalfa_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_alfalfa_gw_demand).toFixed(2));
    }
    //else if (SS == "Reduction_Rabi_Onion_UserVale") {
    //    $('#Reduction_Individual_Name').text("Onion");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_onion_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_onion_gw_demand).toFixed(2));
    //}
    else if (SS == "Reduction_Rabi_Horticulture_UserVale") {
        $('#Reduction_Individual_Name').text("Horticulture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_horticulture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_horticulture_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Rabi_Sunflower_UserVale") {
        $('#Reduction_Individual_Name').text("Sunflower");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_sunflower_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_sunflower_gw_demand).toFixed(2));
    }
    else if (SS == "reduction_rabi_othercrop_area") {
        var CropName = $('#reduction_rabi_othercrop_name').val();
        $('#Reduction_Individual_Name').text(CropName);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_othercrop_gw_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_othercrop_reduc_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Summer_Sericulture_UserVale") {
        $('#Reduction_Individual_Name').text("Sericulture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_sericulture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_sericulture_gw_demand).toFixed(2));
    }

    else if (SS == "reduction_summer_horticulture_crop_area") {
        $('#Reduction_Individual_Name').text("Horticulture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_horticulture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_horticulture_reduction_gw_demand).toFixed(2));
    }

    else if (SS == "Reduction_Summer_Tomota_UserVale") {

        $('#Reduction_Individual_Name').text("Vegetables");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_tomoto_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_tomoto_gw_demand).toFixed(2));
    }
    //else if (SS == "Reduction_Summer_Cabbage_UserVale") {
    //    $('#Reduction_Individual_Name').text("Cabbage");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_cabbage_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_cabbage_gw_demand).toFixed(2));
    //}
    //else if (SS == "Reduction_Summer_Beans_UserVale") {
    //    $('#Reduction_Individual_Name').text("Beans");
    //    $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_beans_waterdemand).toFixed(2));
    //    $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_beans_gw_demand).toFixed(2));
    //}
    else if (SS == "Reduction_Summer_Floriculture_UserVale") {
        $('#Reduction_Individual_Name').text("Floriculture");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_floriculture_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_floriculture_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Summer_Maize_UserVale") {
        $('#Reduction_Individual_Name').text("Maize");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_maize_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_maize_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Summer_Fodder_UserVale") {
        $('#Reduction_Individual_Name').text("Fodder");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_fodder_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_fodder_gw_demand).toFixed(2));
    }
    else if (SS == "Reduction_Summer_Sugarcane_UserVale") {
        $('#Reduction_Individual_Name').text("Sugarcane");
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_sugarcane_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_sugarcane_gw_demand).toFixed(2));
    }
    else if (SS == "reduction_summer_othercrop_area") {
        var CropName = $('#reduction_summer_othercrop_name').val();
        $('#Reduction_Individual_Name').text(CropName);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_othercrop_gw_waterdemand).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_othercrop_reduc_gw_demand).toFixed(2));
    }



}


function Reduction_otherpopup(ss) {


    Reduction_Kharif_WaterRequire();
    Reduction_Rabi_WaterRequire();
    Reduction_Summer_WaterRequire();

    if (ss == "reduction_kharif_othercrop_area1") {
        var Name = $('#reduction_kharif_othercrop_name1').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_othercrop_waterdemand1).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_othercrop_reduction_gw_demand1).toFixed(2));

    }
    else if (ss == "reduction_kharif_othercrop_area2") {
        var Name = $('#reduction_kharif_othercrop_name2').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_othercrop_waterdemand2).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_othercrop_reduction_gw_demand2).toFixed(2));

    }
    else if (ss == "reduction_kharif_othercrop_area3") {
        var Name = $('#reduction_kharif_othercrop_name3').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_othercrop_waterdemand3).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_othercrop_reduction_gw_demand3).toFixed(2));

    }
    else if (ss == "reduction_kharif_othercrop_area4") {
        var Name = $('#reduction_kharif_othercrop_name4').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_othercrop_waterdemand4).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_othercrop_reduction_gw_demand4).toFixed(2));

    }
    else if (ss == "reduction_kharif_othercrop_area5") {
        var Name = $('#reduction_kharif_othercrop_name5').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_kharif_othercrop_waterdemand5).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_kharif_othercrop_reduction_gw_demand5).toFixed(2));

    }

    if (ss == "reduction_rabi_othercrop_area1") {

        var Name = $('#reduction_rabi_othercrop_name1').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_othercrop_waterdemand1).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_othercrop_reduction_gw_demand1).toFixed(2));

    }
    else if (ss == "reduction_rabi_othercrop_area2") {

        var Name = $('#reduction_rabi_othercrop_name2').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_othercrop_waterdemand2).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_othercrop_reduction_gw_demand2).toFixed(2));

    }
    else if (ss == "reduction_rabi_othercrop_area3") {

        var Name = $('#reduction_rabi_othercrop_name3').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_othercrop_waterdemand3).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_othercrop_reduction_gw_demand3).toFixed(2));

    }
    else if (ss == "reduction_rabi_othercrop_area4") {

        var Name = $('#reduction_rabi_othercrop_name4').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_othercrop_waterdemand4).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_othercrop_reduction_gw_demand4).toFixed(2));

    }
    else if (ss == "reduction_rabi_othercrop_area5") {

        var Name = $('#reduction_rabi_othercrop_name5').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_rabi_othercrop_waterdemand5).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_rabi_othercrop_reduction_gw_demand5).toFixed(2));

    }


    if (ss == "reduction_summer_othercrop_area1") {
        var Name = $('#reduction_summer_othercrop_name1').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_othercrop_waterdemand1).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_othercrop_reduction_gw_demand1).toFixed(2));

    }
    else if (ss == "reduction_summer_othercrop_area2") {
        var Name = $('#reduction_summer_othercrop_name2').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_othercrop_waterdemand2).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_othercrop_reduction_gw_demand2).toFixed(2));

    }
    else if (ss == "reduction_summer_othercrop_area3") {
        var Name = $('#reduction_summer_othercrop_name3').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_othercrop_waterdemand3).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_othercrop_reduction_gw_demand3).toFixed(2));

    }
    else if (ss == "reduction_summer_othercrop_area4") {
        var Name = $('#reduction_summer_othercrop_name4').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_othercrop_waterdemand4).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_othercrop_reduction_gw_demand4).toFixed(2));

    }
    else if (ss == "reduction_summer_othercrop_area5") {
        var Name = $('#reduction_summer_othercrop_name5').val();
        $('#Reduction_Individual_Name').text(Name);
        $('#Reduction_Individual_Reduction_Water_Demand').text(parseFloat(reduction_summer_othercrop_waterdemand5).toFixed(2));
        $('#Reduction_Individual_Reduction_in_GW_demand').text(parseFloat(reduction_summer_othercrop_reduction_gw_demand5).toFixed(2));

    }

}