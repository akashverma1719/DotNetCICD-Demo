
var add_Other_kharif_count = 0;
var add_Other_kharif_count1 = 0;
var add_Other_kharif_count2 = 0;
var add_Other_kharif_count3 = 0;
var add_Other_kharif_count4 = 0;
var add_Other_kharif_count5 = 0;

var add_Other_rabi_count = 0;
var add_Other_rabi_count1 = 0;
var add_Other_rabi_count2 = 0;
var add_Other_rabi_count3 = 0;
var add_Other_rabi_count4 = 0;
var add_Other_rabi_count5 = 0;

var add_Other_summer_count = 0;
var add_Other_summer_count1 = 0;
var add_Other_summer_count2 = 0;
var add_Other_summer_count3 = 0;
var add_Other_summer_count4 = 0;
var add_Other_summer_count5 = 0;


function Other_Kharif_AddCrop() {

    if (add_Other_kharif_count1 == 1) {
        $('#Other_crp1').show();

        var s11 = "other_kharif_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_kharif_othercrop_area1" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_invention_proposed1" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_saving1" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_req1" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Other_crp1').html(ass);
        add_Other_kharif_count = add_Other_kharif_count + 1;
        add_Other_kharif_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_kharif_othercrop_name1").disabled = true;
        //    document.getElementById("other_kharif_othercrop_area1").disabled = true;
        //    document.getElementById("other_kharif_othercrop_invention_proposed1").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_saving1").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_req1").disabled = true;

        //}
    }
    else if (add_Other_kharif_count2 == 2) {
        $('#Other_crp2').show();

        var s11 = "other_kharif_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_kharif_othercrop_area2" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_invention_proposed2" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_saving2" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_req2" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Other_crp2').html(ass);
        add_Other_kharif_count = add_Other_kharif_count + 1;
        add_Other_kharif_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_kharif_othercrop_name2").disabled = true;
        //    document.getElementById("other_kharif_othercrop_area2").disabled = true;
        //    document.getElementById("other_kharif_othercrop_invention_proposed2").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_saving2").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_req2").disabled = true;

        //}
    }

    else if (add_Other_kharif_count3 == 3) {
        $('#Other_crp3').show();


        var s11 = "other_kharif_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_kharif_othercrop_area3" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_invention_proposed3" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_saving3" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_req3" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Other_crp3').html(ass);
        add_Other_kharif_count = add_Other_kharif_count + 1;
        add_Other_kharif_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_kharif_othercrop_name3").disabled = true;
        //    document.getElementById("other_kharif_othercrop_area3").disabled = true;
        //    document.getElementById("other_kharif_othercrop_invention_proposed3").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_saving3").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_req3").disabled = true;

        //}
    }

    else if (add_Other_kharif_count4 == 4) {
        $('#Other_crp4').show();
        var s11 = "other_kharif_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_kharif_othercrop_area4" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_invention_proposed4" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_saving4" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_req4" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Other_crp4').html(ass);
        add_Other_kharif_count = add_Other_kharif_count + 1;
        add_Other_kharif_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_kharif_othercrop_name4").disabled = true;
        //    document.getElementById("other_kharif_othercrop_area4").disabled = true;
        //    document.getElementById("other_kharif_othercrop_invention_proposed4").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_saving4").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_req4").disabled = true;

        //}
    }
    else if (add_Other_kharif_count5 == 5) {
        $('#Other_crp5').show();
        var s11 = "other_kharif_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_kharif_othercrop_area5" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_invention_proposed5" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_saving5" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_kharif_othercrop_water_req5" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Other_crp5').html(ass);
        $('#Other_Kharif_AddCrop').hide();
        add_Other_kharif_count = add_Other_kharif_count + 1;
        add_Other_kharif_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_kharif_othercrop_name5").disabled = true;
        //    document.getElementById("other_kharif_othercrop_area5").disabled = true;
        //    document.getElementById("other_kharif_othercrop_invention_proposed5").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_saving5").disabled = true;
        //    document.getElementById("other_kharif_othercrop_water_req5").disabled = true;

        //}
    }

    if (add_Other_kharif_count == 5) {
        $('#Other_Kharif_AddCrop').hide();
    }
}

function Other_Rabi_AddCrop() {

    if (add_Other_rabi_count1 == 1) {

        $('#Other_Rabi_crp1').show();

        var s11 = "other_rabi_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_rabi_othercrop_area1" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_invention_proposed1" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_saving1" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_req1" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Other_Rabi_crp1').html(ass);
        add_Other_rabi_count = add_Other_rabi_count + 1;
        add_Other_rabi_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_rabi_othercrop_name1").disabled = true;
        //    document.getElementById("other_rabi_othercrop_area1").disabled = true;
        //    document.getElementById("other_rabi_othercrop_invention_proposed1").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_saving1").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_req1").disabled = true;


        //}
    }
    else if (add_Other_rabi_count2 == 2) {
        $('#Other_Rabi_crp2').show();

        var s11 = "other_rabi_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_rabi_othercrop_area2" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_invention_proposed2" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_saving2" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_req2" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Other_Rabi_crp2').html(ass);
        add_Other_rabi_count = add_Other_rabi_count + 1;
        add_Other_rabi_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_rabi_othercrop_name2").disabled = true;
        //    document.getElementById("other_rabi_othercrop_area2").disabled = true;
        //    document.getElementById("other_rabi_othercrop_invention_proposed2").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_saving2").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_req2").disabled = true;


        //}
    }

    else if (add_Other_rabi_count3 == 3) {
        $('#Other_Rabi_crp3').show();

        var s11 = "other_rabi_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_rabi_othercrop_area3" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_invention_proposed3" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_saving3" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_req3" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Other_Rabi_crp3').html(ass);
        add_Other_rabi_count = add_Other_rabi_count + 1;
        add_Other_rabi_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_rabi_othercrop_name3").disabled = true;
        //    document.getElementById("other_rabi_othercrop_area3").disabled = true;
        //    document.getElementById("other_rabi_othercrop_invention_proposed3").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_saving3").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_req3").disabled = true;


        //}
    }

    else if (add_Other_rabi_count4 == 4) {
        $('#Other_Rabi_crp4').show();

        var s11 = "other_rabi_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_rabi_othercrop_area4" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_invention_proposed4" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_saving4" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_req4" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Other_Rabi_crp4').html(ass);
        add_Other_rabi_count = add_Other_rabi_count + 1;
        add_Other_rabi_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_rabi_othercrop_name4").disabled = true;
        //    document.getElementById("other_rabi_othercrop_area4").disabled = true;
        //    document.getElementById("other_rabi_othercrop_invention_proposed4").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_saving4").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_req4").disabled = true;


        //}
    }
    else if (add_Other_rabi_count5 == 5) {
        $('#Other_Rabi_crp5').show();
        var s11 = "other_rabi_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_rabi_othercrop_area5" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_invention_proposed5" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_saving5" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_rabi_othercrop_water_req5" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';
        $('#Other_Rabi_crp5').html(ass);
        $('#Other_Rabi_AddCrop').hide();
        add_Other_rabi_count = add_Other_rabi_count + 1;
        add_Other_rabi_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_rabi_othercrop_name5").disabled = true;
        //    document.getElementById("other_rabi_othercrop_area5").disabled = true;
        //    document.getElementById("other_rabi_othercrop_invention_proposed5").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_saving5").disabled = true;
        //    document.getElementById("other_rabi_othercrop_water_req5").disabled = true;


        //}
    }

    if (add_Other_rabi_count == 5) {
        $('#Other_Rabi_AddCrop').hide();
    }
}


function Other_Summer_AddCrop() {

    if (add_Other_summer_count1 == 1) {

        $('#Other_Summer_crp1').show();

        var s11 = "other_summer_othercrop_area1";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_summer_othercrop_area1" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_invention_proposed1" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_saving1" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_req1" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Other_Summer_crp1').html(ass);
        add_Other_summer_count = add_Other_summer_count + 1;
        add_Other_summer_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_summer_othercrop_name1").disabled = true;
        //    document.getElementById("other_summer_othercrop_area1").disabled = true;
        //    document.getElementById("other_summer_othercrop_invention_proposed1").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_saving1").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_req1").disabled = true;


        //}
    }
    else if (add_Other_summer_count2 == 2) {
        $('#Other_Summer_crp2').show();

        var s11 = "other_summer_othercrop_area2";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_summer_othercrop_area2" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_invention_proposed2" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_saving2" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_req2" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Other_Summer_crp2').html(ass);
        add_Other_summer_count = add_Other_summer_count + 1;
        add_Other_summer_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_summer_othercrop_name2").disabled = true;
        //    document.getElementById("other_summer_othercrop_area2").disabled = true;
        //    document.getElementById("other_summer_othercrop_invention_proposed2").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_saving2").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_req2").disabled = true;


        //}
    }

    else if (add_Other_summer_count3 == 3) {
        $('#Other_Summer_crp3').show();

        var s11 = "other_summer_othercrop_area3";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_summer_othercrop_area3" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_invention_proposed3" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_saving3" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_req3" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Other_Summer_crp3').html(ass);
        add_Other_summer_count = add_Other_summer_count + 1;
        add_Other_summer_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_summer_othercrop_name3").disabled = true;
        //    document.getElementById("other_summer_othercrop_area3").disabled = true;
        //    document.getElementById("other_summer_othercrop_invention_proposed3").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_saving3").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_req3").disabled = true;


        //}
    }

    else if (add_Other_summer_count4 == 4) {
        $('#Other_Summer_crp4').show();

        var s11 = "other_summer_othercrop_area4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_summer_othercrop_area4" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_invention_proposed4" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_saving4" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_req4" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Other_Summer_crp4').html(ass);
        add_Other_summer_count = add_Other_summer_count + 1;
        add_Other_summer_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_summer_othercrop_name4").disabled = true;
        //    document.getElementById("other_summer_othercrop_area4").disabled = true;
        //    document.getElementById("other_summer_othercrop_invention_proposed4").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_saving4").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_req4").disabled = true;


        //}
    }
    else if (add_Other_summer_count5 == 5) {
        $('#Other_Summer_crp5').show();
        var s11 = "other_summer_othercrop_area5";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
            '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" />' +
            '<li><input type="text" id="other_summer_othercrop_area5" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_invention_proposed5" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_saving5" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
            '</li><li><input type="text" id="other_summer_othercrop_water_req5" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Other_Summer_crp5').html(ass);
        $('#Other_Summer_AddCrop').hide();
        add_Other_summer_count = add_Other_summer_count + 1;
        add_Other_summer_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("other_summer_othercrop_name5").disabled = true;
        //    document.getElementById("other_summer_othercrop_area5").disabled = true;
        //    document.getElementById("other_summer_othercrop_invention_proposed5").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_saving5").disabled = true;
        //    document.getElementById("other_summer_othercrop_water_req5").disabled = true;


        //}
    }

    if (add_Other_summer_count == 5) {
        $('#Other_Summer_AddCrop').hide();
    }
}

function Other_MeasureInfo() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/Other_MeasureInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            
            add_Other_kharif_count = 0;
            add_Other_kharif_count1 = 0;
            add_Other_kharif_count2 = 0;
            add_Other_kharif_count3 = 0;
            add_Other_kharif_count4 = 0;
            add_Other_kharif_count5 = 0;

            add_Other_rabi_count = 0;
            add_Other_rabi_count1 = 0;
            add_Other_rabi_count2 = 0;
            add_Other_rabi_count3 = 0;
            add_Other_rabi_count4 = 0;
            add_Other_rabi_count5 = 0;

            add_Other_summer_count = 0;
            add_Other_summer_count1 = 0;
            add_Other_summer_count2 = 0;
            add_Other_summer_count3 = 0;
            add_Other_summer_count4 = 0;
            add_Other_summer_count5 = 0;

            //if (response == "Error") {
            //    window.location = "/WSPHome/WspDemandside";
            //}
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            if (response != "NO") {

                if (response.other_kharif_othercrop_name1 == null || response.other_kharif_othercrop_name1 == "") {
                    add_Other_kharif_count1 = 1;
                }
                else {
                    add_Other_kharif_count = add_Other_kharif_count + 1;
                }

                if (response.other_kharif_othercrop_name2 == null || response.other_kharif_othercrop_name2 == "") {
                    add_Other_kharif_count2 = 2;
                }
                else {
                    add_Other_kharif_count = add_Other_kharif_count + 1;
                }

                if (response.other_kharif_othercrop_name3 == null || response.other_kharif_othercrop_name3 == "") {
                    add_Other_kharif_count3 = 3;
                }
                else {

                    add_Other_kharif_count = add_Other_kharif_count + 1;
                }

                if (response.other_kharif_othercrop_name4 == null || response.other_kharif_othercrop_name4 == "") {
                    add_Other_kharif_count4 = 4;
                }
                else {
                    add_Other_kharif_count = add_Other_kharif_count + 1;
                }

                if (response.other_kharif_othercrop_name5 == null || response.other_kharif_othercrop_name5 == "") {
                    add_Other_kharif_count5 = 5;
                }
                else {
                    add_Other_kharif_count = add_Other_kharif_count + 1;
                }
                if (add_Other_kharif_count == 5) {

                    $('#Other_Kharif_AddCrop').hide();
                }
                
                if (response.other_kharif_othercrop_name1 != null && response.other_kharif_othercrop_name1 != "null" && response.other_kharif_othercrop_name1 != "") {

                    var other_kharif_othercrop_area1 = "";
                    var other_kharif_othercrop_invention_proposed1 = "";
                    var other_kharif_othercrop_water_saving1 = "";
                    var other_kharif_othercrop_water_req1 = "";

                    if (response.other_kharif_othercrop_area1 != null && response.other_kharif_othercrop_area1 != "") {
                        other_kharif_othercrop_area1 = response.other_kharif_othercrop_area1;
                    }
                    if (response.other_kharif_othercrop_invention_proposed1 != null && response.other_kharif_othercrop_invention_proposed1 != "") {
                        other_kharif_othercrop_invention_proposed1 = response.other_kharif_othercrop_invention_proposed1;
                    }
                    if (response.other_kharif_othercrop_water_saving1 != null && response.other_kharif_othercrop_water_saving1 != "") {
                        other_kharif_othercrop_water_saving1 = response.other_kharif_othercrop_water_saving1;
                    }
                    if (response.other_kharif_othercrop_water_req1 != null && response.other_kharif_othercrop_water_req1 != "") {
                        other_kharif_othercrop_water_req1 = response.other_kharif_othercrop_water_req1;
                    }

                    var s11 = "other_kharif_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_kharif_othercrop_name1 + ' ' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name"  value="' + response.other_kharif_othercrop_name1 + '"/>' +
                        '<li><input type="text" value="' + other_kharif_othercrop_area1 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_area1" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_kharif_othercrop_invention_proposed1 + '" id="other_kharif_othercrop_invention_proposed1" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_saving1 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_saving1" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_req1 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_req1" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Other_crp1').html(ass);
                    $('#other_kharif_othercrop_name1').hide();

                    $('#Other_crp1').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_kharif_othercrop_name1").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_area1").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_invention_proposed1").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_saving1").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_req1").disabled = true;

                    //}

                }

                if (response.other_kharif_othercrop_name2 != null && response.other_kharif_othercrop_name2 != "null" && response.other_kharif_othercrop_name2 != "") {

                    var other_kharif_othercrop_area2 = "";
                    var other_kharif_othercrop_invention_proposed2 = "";
                    var other_kharif_othercrop_water_saving2 = "";
                    var other_kharif_othercrop_water_req2 = "";

                    if (response.other_kharif_othercrop_area2 != null && response.other_kharif_othercrop_area2 != "") {
                        other_kharif_othercrop_area2 = response.other_kharif_othercrop_area2;
                    }
                    if (response.other_kharif_othercrop_invention_proposed2 != null && response.other_kharif_othercrop_invention_proposed2 != "") {
                        other_kharif_othercrop_invention_proposed2 = response.other_kharif_othercrop_invention_proposed2;
                    }
                    if (response.other_kharif_othercrop_water_saving2 != null && response.other_kharif_othercrop_water_saving2 != "") {
                        other_kharif_othercrop_water_saving2 = response.other_kharif_othercrop_water_saving2;
                    }
                    if (response.other_kharif_othercrop_water_req2 != null && response.other_kharif_othercrop_water_req2 != "") {
                        other_kharif_othercrop_water_req2 = response.other_kharif_othercrop_water_req2;
                    }

                    var s11 = "other_kharif_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_kharif_othercrop_name2 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name"  value="' + response.other_kharif_othercrop_name2 + '"/>' +
                        '<li><input type="text" value="' + other_kharif_othercrop_area2 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_area2" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_kharif_othercrop_invention_proposed2 + '" id="other_kharif_othercrop_invention_proposed2" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_saving2 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_saving2" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_req2 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_req2" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Other_crp2').html(ass);
                    $('#other_kharif_othercrop_name2').hide();
                    $('#Other_crp2').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_kharif_othercrop_name2").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_area2").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_invention_proposed2").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_saving2").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_req2").disabled = true;

                    //}

                }
                if (response.other_kharif_othercrop_name3 != null && response.other_kharif_othercrop_name3 != "null" && response.other_kharif_othercrop_name3 != "") {

                    var other_kharif_othercrop_area3 = "";
                    var other_kharif_othercrop_invention_proposed3 = "";
                    var other_kharif_othercrop_water_saving3 = "";
                    var other_kharif_othercrop_water_req3 = "";

                    if (response.other_kharif_othercrop_area3 != null && response.other_kharif_othercrop_area3 != "") {
                        other_kharif_othercrop_area3 = response.other_kharif_othercrop_area3;
                    }
                    if (response.other_kharif_othercrop_invention_proposed3 != null && response.other_kharif_othercrop_invention_proposed3 != "") {
                        other_kharif_othercrop_invention_proposed3 = response.other_kharif_othercrop_invention_proposed3;
                    }
                    if (response.other_kharif_othercrop_water_saving3 != null && response.other_kharif_othercrop_water_saving3 != "") {
                        other_kharif_othercrop_water_saving3 = response.other_kharif_othercrop_water_saving3;
                    }
                    if (response.other_kharif_othercrop_water_req3 != null && response.other_kharif_othercrop_water_req3 != "") {
                        other_kharif_othercrop_water_req3 = response.other_kharif_othercrop_water_req3;
                    }

                    var s11 = "other_kharif_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_kharif_othercrop_name3 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name"  value="' + response.other_kharif_othercrop_name3 + '"/>' +
                        '<li><input type="text" value="' + other_kharif_othercrop_area3 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_area3" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_kharif_othercrop_invention_proposed3 + '" id="other_kharif_othercrop_invention_proposed3" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_saving3 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_saving3" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_req3 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_req3" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Other_crp3').html(ass);
                    $('#other_kharif_othercrop_name3').hide();
                    $('#Other_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_kharif_othercrop_name3").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_area3").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_invention_proposed3").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_saving3").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.other_kharif_othercrop_name4 != null && response.other_kharif_othercrop_name4 != "null" && response.other_kharif_othercrop_name4 != "") {
                    var other_kharif_othercrop_area4 = "";
                    var other_kharif_othercrop_invention_proposed4 = "";
                    var other_kharif_othercrop_water_saving4 = "";
                    var other_kharif_othercrop_water_req4 = "";

                    if (response.other_kharif_othercrop_area4 != null && response.other_kharif_othercrop_area4 != "") {
                        other_kharif_othercrop_area4 = response.other_kharif_othercrop_area4;
                    }
                    if (response.other_kharif_othercrop_invention_proposed4 != null && response.other_kharif_othercrop_invention_proposed4 != "") {
                        other_kharif_othercrop_invention_proposed4 = response.other_kharif_othercrop_invention_proposed4;
                    }
                    if (response.other_kharif_othercrop_water_saving4 != null && response.other_kharif_othercrop_water_saving4 != "") {
                        other_kharif_othercrop_water_saving4 = response.other_kharif_othercrop_water_saving4;
                    }
                    if (response.other_kharif_othercrop_water_req4 != null && response.other_kharif_othercrop_water_req4 != "") {
                        other_kharif_othercrop_water_req4 = response.other_kharif_othercrop_water_req4;
                    }
                    var s11 = "other_kharif_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_kharif_othercrop_name4 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name"  value="' + response.other_kharif_othercrop_name4 + '"/>' +
                        '<li><input type="text" value="' + other_kharif_othercrop_area4 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_area4" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_kharif_othercrop_invention_proposed4 + '" id="other_kharif_othercrop_invention_proposed4" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_saving4 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_saving4" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_req4 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_req4" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Other_crp4').html(ass);
                    $('#other_kharif_othercrop_name4').hide();
                    $('#Other_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_kharif_othercrop_name4").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_area4").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_invention_proposed4").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_saving4").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_req4").disabled = true;

                    //}

                }
                if (response.other_kharif_othercrop_name5 != null && response.other_kharif_othercrop_name5 != "null" && response.other_kharif_othercrop_name5 != "") {

                    var other_kharif_othercrop_area5 = "";
                    var other_kharif_othercrop_invention_proposed5 = "";
                    var other_kharif_othercrop_water_saving5 = "";
                    var other_kharif_othercrop_water_req5 = "";

                    if (response.other_kharif_othercrop_area5 != null && response.other_kharif_othercrop_area5 != "") {
                        other_kharif_othercrop_area5 = response.other_kharif_othercrop_area5;
                    }
                    if (response.other_kharif_othercrop_invention_proposed5 != null && response.other_kharif_othercrop_invention_proposed5 != "") {
                        other_kharif_othercrop_invention_proposed5 = response.other_kharif_othercrop_invention_proposed5;
                    }
                    if (response.other_kharif_othercrop_water_saving5 != null && response.other_kharif_othercrop_water_saving5 != "") {
                        other_kharif_othercrop_water_saving5 = response.other_kharif_othercrop_water_saving5;
                    }
                    if (response.other_kharif_othercrop_water_req5 != null && response.other_kharif_othercrop_water_req5 != "") {
                        other_kharif_othercrop_water_req5 = response.other_kharif_othercrop_water_req5;
                    }





                    var s11 = "other_kharif_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff"> ' + response.other_kharif_othercrop_name5 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name"  value="' + response.other_kharif_othercrop_name5 + '"/>' +
                        '<li><input type="text" value="' + other_kharif_othercrop_area5 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_area5" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_kharif_othercrop_invention_proposed5 + '" id="other_kharif_othercrop_invention_proposed5" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Kharif_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_saving5 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_saving5" onkeyup="Other_measure__Kharif_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_kharif_othercrop_water_req5 + '" onkeyup="Other_measure__Kharif_WaterRequire()" id="other_kharif_othercrop_water_req5" onkeyup="Other_measure__Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Other_crp5').html(ass);
                    $('#other_kharif_othercrop_name5').hide();
                    $('#Other_crp5').show();
                    $('#Other_Kharif_AddCrop').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_kharif_othercrop_name5").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_area5").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_invention_proposed5").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_saving5").disabled = true;
                    //    document.getElementById("other_kharif_othercrop_water_req5").disabled = true;

                    //}
                }


                //rabi
                if (response.other_rabi_othercrop_name1 == null || response.other_rabi_othercrop_name1 == "") {
                    add_Other_rabi_count1 = 1;
                }
                else {
                    add_Other_rabi_count = add_Other_rabi_count + 1;
                }

                if (response.other_rabi_othercrop_name2 == null || response.other_rabi_othercrop_name2 == "") {
                    add_Other_rabi_count2 = 2;
                }
                else {
                    add_Other_rabi_count = add_Other_rabi_count + 1;
                }

                if (response.other_rabi_othercrop_name3 == null || response.other_rabi_othercrop_name3 == "") {
                    add_Other_rabi_count3 = 3;
                }
                else {
                    add_Other_rabi_count = add_Other_rabi_count + 1;
                }

                if (response.other_rabi_othercrop_name4 == null || response.other_rabi_othercrop_name4 == "") {
                    add_Other_rabi_count4 = 4;
                }
                else {
                    add_Other_rabi_count = add_Other_rabi_count + 1;
                }

                if (response.other_rabi_othercrop_name5 == null || response.other_rabi_othercrop_name5 == "") {
                    add_Other_rabi_count5 = 5;
                }
                else {
                    add_Other_rabi_count = add_Other_rabi_count + 1;
                }
                if (add_Other_rabi_count == 5) {

                    $('#Other_Rabi_AddCrop').hide();
                }

                if (response.other_rabi_othercrop_name1 != null && response.other_rabi_othercrop_name1 != "null" && response.other_rabi_othercrop_name1 != "") {

                    var other_rabi_othercrop_area1 = "";
                    var other_rabi_othercrop_invention_proposed1 = "";
                    var other_rabi_othercrop_water_saving1 = "";
                    var other_rabi_othercrop_water_req1 = "";

                    if (response.other_rabi_othercrop_area1 != null && response.other_rabi_othercrop_area1 != "") {
                        other_rabi_othercrop_area1 = response.other_rabi_othercrop_area1;
                    }
                    if (response.other_rabi_othercrop_invention_proposed1 != null && response.other_rabi_othercrop_invention_proposed1 != "") {
                        other_rabi_othercrop_invention_proposed1 = response.other_rabi_othercrop_invention_proposed1;
                    }
                    if (response.other_rabi_othercrop_water_saving1 != null && response.other_rabi_othercrop_water_saving1 != "") {
                        other_rabi_othercrop_water_saving1 = response.other_rabi_othercrop_water_saving1;
                    }
                    if (response.other_rabi_othercrop_water_req1 != null && response.other_rabi_othercrop_water_req1 != "") {
                        other_rabi_othercrop_water_req1 = response.other_rabi_othercrop_water_req1;
                    }
                    var s11 = "other_rabi_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_rabi_othercrop_name1 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name"  value="' + response.other_rabi_othercrop_name1 + '"/>' +
                        '<li><input type="text" value="' + other_rabi_othercrop_area1 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_area1" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_rabi_othercrop_invention_proposed1 + '" id="other_rabi_othercrop_invention_proposed1" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_saving1 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_saving1" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_req1 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_req1" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Other_Rabi_crp1').html(ass);
                    $('#other_rabi_othercrop_name1').hide();

                    $('#Other_Rabi_crp1').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_rabi_othercrop_name1").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_area1").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_invention_proposed1").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_saving1").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_req1").disabled = true;

                    //}

                }

                if (response.other_rabi_othercrop_name2 != null && response.other_rabi_othercrop_name2 != "null" && response.other_rabi_othercrop_name2 != "") {

                    var other_rabi_othercrop_area2 = "";
                    var other_rabi_othercrop_invention_proposed2 = "";
                    var other_rabi_othercrop_water_saving2 = "";
                    var other_rabi_othercrop_water_req2 = "";

                    if (response.other_rabi_othercrop_area2 != null && response.other_rabi_othercrop_area2 != "") {
                        other_rabi_othercrop_area2 = response.other_rabi_othercrop_area2;
                    }
                    if (response.other_rabi_othercrop_invention_proposed2 != null && response.other_rabi_othercrop_invention_proposed2 != "") {
                        other_rabi_othercrop_invention_proposed2 = response.other_rabi_othercrop_invention_proposed2;
                    }
                    if (response.other_rabi_othercrop_water_saving2 != null && response.other_rabi_othercrop_water_saving2 != "") {
                        other_rabi_othercrop_water_saving2 = response.other_rabi_othercrop_water_saving2;
                    }
                    if (response.other_rabi_othercrop_water_req2 != null && response.other_rabi_othercrop_water_req2 != "") {
                        other_rabi_othercrop_water_req2 = response.other_rabi_othercrop_water_req2;
                    }




                    var s11 = "other_rabi_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_rabi_othercrop_name2 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name"  value="' + response.other_rabi_othercrop_name2 + '"/>' +
                        '<li><input type="text" value="' + other_rabi_othercrop_area2 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_area2" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_rabi_othercrop_invention_proposed2 + '" id="other_rabi_othercrop_invention_proposed2" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_saving2 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_saving2" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_req2 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_req2" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';
                    $('#Other_Rabi_crp2').show();
                    $('#Other_Rabi_crp2').html(ass);
                    $('#other_rabi_othercrop_name2').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_rabi_othercrop_name2").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_area2").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_invention_proposed2").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_saving2").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_req2").disabled = true;

                    //}

                }
                if (response.other_rabi_othercrop_name3 != null && response.other_rabi_othercrop_name3 != "null" && response.other_rabi_othercrop_name3 != "") {
                    var other_rabi_othercrop_area3 = "";
                    var other_rabi_othercrop_invention_proposed3 = "";
                    var other_rabi_othercrop_water_saving3 = "";
                    var other_rabi_othercrop_water_req3 = "";

                    if (response.other_rabi_othercrop_area3 != null && response.other_rabi_othercrop_area3 != "") {
                        other_rabi_othercrop_area3 = response.other_rabi_othercrop_area3;
                    }
                    if (response.other_rabi_othercrop_invention_proposed3 != null && response.other_rabi_othercrop_invention_proposed3 != "") {
                        other_rabi_othercrop_invention_proposed3 = response.other_rabi_othercrop_invention_proposed3;
                    }
                    if (response.other_rabi_othercrop_water_saving3 != null && response.other_rabi_othercrop_water_saving3 != "") {
                        other_rabi_othercrop_water_saving3 = response.other_rabi_othercrop_water_saving3;
                    }
                    if (response.other_rabi_othercrop_water_req3 != null && response.other_rabi_othercrop_water_req3 != "") {
                        other_rabi_othercrop_water_req3 = response.other_rabi_othercrop_water_req3;
                    }
                    var s11 = "other_rabi_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_rabi_othercrop_name3 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name"  value="' + response.other_rabi_othercrop_name3 + '"/>' +
                        '<li><input type="text" value="' + other_rabi_othercrop_area3 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_area3" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_rabi_othercrop_invention_proposed3 + '" id="other_rabi_othercrop_invention_proposed3" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_saving3 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_saving3" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_req3 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_req3" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Other_Rabi_crp3').show();
                    $('#Other_Rabi_crp3').html(ass);
                    $('#other_rabi_othercrop_name3').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_rabi_othercrop_name3").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_area3").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_invention_proposed3").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_saving3").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_req3").disabled = true;

                    //}
                }
                if (response.other_rabi_othercrop_name4 != null && response.other_rabi_othercrop_name4 != "null" && response.other_rabi_othercrop_name4 != "") {

                    var other_rabi_othercrop_area4 = "";
                    var other_rabi_othercrop_invention_proposed4 = "";
                    var other_rabi_othercrop_water_saving4 = "";
                    var other_rabi_othercrop_water_req4 = "";

                    if (response.other_rabi_othercrop_area4 != null && response.other_rabi_othercrop_area4 != "") {
                        other_rabi_othercrop_area4 = response.other_rabi_othercrop_area4;
                    }
                    if (response.other_rabi_othercrop_invention_proposed4 != null && response.other_rabi_othercrop_invention_proposed4 != "") {
                        other_rabi_othercrop_invention_proposed4 = response.other_rabi_othercrop_invention_proposed4;
                    }
                    if (response.other_rabi_othercrop_water_saving4 != null && response.other_rabi_othercrop_water_saving4 != "") {
                        other_rabi_othercrop_water_saving4 = response.other_rabi_othercrop_water_saving4;
                    }
                    if (response.other_rabi_othercrop_water_req4 != null && response.other_rabi_othercrop_water_req4 != "") {
                        other_rabi_othercrop_water_req4 = response.other_rabi_othercrop_water_req4;
                    }


                    var s11 = "other_rabi_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_rabi_othercrop_name4 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name"  value="' + response.other_rabi_othercrop_name4 + '"/>' +
                        '<li><input type="text" value="' + other_rabi_othercrop_area4 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_area4" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_rabi_othercrop_invention_proposed4 + '" id="other_rabi_othercrop_invention_proposed4" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_saving4 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_saving4" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_req4 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_req4" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Other_Rabi_crp4').show();

                    $('#Other_Rabi_crp4').html(ass);
                    $('#other_rabi_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_rabi_othercrop_name4").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_area4").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_invention_proposed4").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_saving4").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_req4").disabled = true;

                    //}
                }
                if (response.other_rabi_othercrop_name5 != null && response.other_rabi_othercrop_name5 != "null" && response.other_rabi_othercrop_name5 != "") {

                    var other_rabi_othercrop_area5 = "";
                    var other_rabi_othercrop_invention_proposed5 = "";
                    var other_rabi_othercrop_water_saving5 = "";
                    var other_rabi_othercrop_water_req5 = "";

                    if (response.other_rabi_othercrop_area5 != null && response.other_rabi_othercrop_area5 != "") {
                        other_rabi_othercrop_area5 = response.other_rabi_othercrop_area5;
                    }
                    if (response.other_rabi_othercrop_invention_proposed5 != null && response.other_rabi_othercrop_invention_proposed != "") {
                        other_rabi_othercrop_invention_proposed5 = response.other_rabi_othercrop_invention_proposed5;
                    }
                    if (response.other_rabi_othercrop_water_saving5 != null && response.other_rabi_othercrop_water_saving5 != "") {
                        other_rabi_othercrop_water_saving5 = response.other_rabi_othercrop_water_saving5;
                    }
                    if (response.other_rabi_othercrop_water_req5 != null && response.other_rabi_othercrop_water_req5 != "") {
                        other_rabi_othercrop_water_req5 = response.other_rabi_othercrop_water_req5;
                    }
                    var s11 = "other_rabi_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_rabi_othercrop_name5 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name"  value="' + response.other_rabi_othercrop_name5 + '"/>' +
                        '<li><input type="text" value="' + other_rabi_othercrop_area5 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_area5" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_rabi_othercrop_invention_proposed5 + '" id="other_rabi_othercrop_invention_proposed5" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure_Rabi_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_saving5 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_saving5" onkeyup="Other_measure_Rabi_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_rabi_othercrop_water_req5 + '" onkeyup="Other_measure_Rabi_WaterRequire()" id="other_rabi_othercrop_water_req5" onkeyup="Other_measure_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Other_Rabi_crp5').show();
                    $('#Other_Rabi_crp5').html(ass);

                    $('#other_rabi_othercrop_name5').hide();

                    $('#Other_Rabi_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("other_rabi_othercrop_name5").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_area5").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_invention_proposed5").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_saving5").disabled = true;
                    //    document.getElementById("other_rabi_othercrop_water_req5").disabled = true;

                    //}
                }



                //Summer

                if (response.other_summer_othercrop_name1 == null || response.other_summer_othercrop_name1 == "") {
                    add_Other_summer_count1 = 1;
                }
                else {
                    add_Other_summer_count = add_Other_summer_count + 1;

                }
                if (response.other_summer_othercrop_name2 == null || response.other_summer_othercrop_name2 == "") {
                    add_Other_summer_count2 = 2;
                }
                else {
                    add_Other_summer_count = add_Other_summer_count + 1;
                }

                if (response.other_summer_othercrop_name3 == null || response.other_summer_othercrop_name3 == "") {
                    add_Other_summer_count3 = 3;
                }
                else {

                    add_Other_summer_count = add_Other_summer_count + 1;
                }
                if (response.other_summer_othercrop_name4 == null || response.other_summer_othercrop_name4 == "") {
                    add_Other_summer_count4 = 4;
                }
                else {
                    add_Other_summer_count = add_Other_summer_count + 1;
                }

                if (response.other_summer_othercrop_name5 == null || response.other_summer_othercrop_name5 == "") {
                    add_Other_summer_count5 = 5;
                }
                else {
                    add_Other_summer_count = add_Other_summer_count + 1;
                }
                if (add_Other_summer_count == 5) {

                    $('#Other_Summer_AddCrop').hide();
                }

                if (response.other_summer_othercrop_name1 != null && response.other_summer_othercrop_name1 != "null" && response.other_summer_othercrop_name1 != "") {
                    var other_summer_othercrop_area1 = "";
                    var other_summer_othercrop_invention_proposed1 = "";
                    var other_summer_othercrop_water_saving1 = "";
                    var other_summer_othercrop_water_req1 = "";

                    if (response.other_summer_othercrop_area1 != null && response.other_summer_othercrop_area1 != "") {
                        other_summer_othercrop_area1 = response.other_summer_othercrop_area1;
                    }
                    if (response.other_summer_othercrop_invention_proposed1 != null && response.other_summer_othercrop_invention_proposed1 != "") {
                        other_summer_othercrop_invention_proposed1 = response.other_summer_othercrop_invention_proposed1;
                    }
                    if (response.other_summer_othercrop_water_saving1 != null && response.other_summer_othercrop_water_saving1 != "") {
                        other_summer_othercrop_water_saving1 = response.other_summer_othercrop_water_saving1;
                    }
                    if (response.other_summer_othercrop_water_req1 != null && response.other_summer_othercrop_water_req1 != "") {
                        other_summer_othercrop_water_req1 = response.other_summer_othercrop_water_req1;
                    }
                    var s11 = "other_summer_othercrop_area1";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_summer_othercrop_name1 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name"  value="' + response.other_summer_othercrop_name1 + '"/>' +
                        '<li><input type="text" value="' + other_summer_othercrop_area1 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_area1" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_summer_othercrop_invention_proposed1 + '" id="other_summer_othercrop_invention_proposed1" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_saving1 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_saving1" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_req1 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_req1" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Other_Summer_crp1').html(ass);

                    $('#Other_Summer_crp1').show();

                    $('#other_summer_othercrop_name1').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("other_summer_othercrop_name1").disabled = true;
                    //    document.getElementById("other_summer_othercrop_area1").disabled = true;
                    //    document.getElementById("other_summer_othercrop_invention_proposed1").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_saving1").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_req1").disabled = true;


                    //}
                }

                if (response.other_summer_othercrop_name2 != null && response.other_summer_othercrop_name2 != "null" && response.other_summer_othercrop_name2 != "") {

                    var other_summer_othercrop_area2 = "";
                    var other_summer_othercrop_invention_proposed2 = "";
                    var other_summer_othercrop_water_saving2 = "";
                    var other_summer_othercrop_water_req2 = "";

                    if (response.other_summer_othercrop_area2 != null && response.other_summer_othercrop_area2 != "") {
                        other_summer_othercrop_area2 = response.other_summer_othercrop_area2;
                    }
                    if (response.other_summer_othercrop_invention_proposed2 != null && response.other_summer_othercrop_invention_proposed2 != "") {
                        other_summer_othercrop_invention_proposed2 = response.other_summer_othercrop_invention_proposed2;
                    }
                    if (response.other_summer_othercrop_water_saving2 != null && response.other_summer_othercrop_water_saving2 != "") {
                        other_summer_othercrop_water_saving2 = response.other_summer_othercrop_water_saving2;
                    }
                    if (response.other_summer_othercrop_water_req2 != null && response.other_summer_othercrop_water_req2 != "") {
                        other_summer_othercrop_water_req2 = response.other_summer_othercrop_water_req2;
                    }
                    var s11 = "other_summer_othercrop_area2";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_summer_othercrop_name2 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name"  value="' + response.other_summer_othercrop_name2 + '"/>' +
                        '<li><input type="text" value="' + other_summer_othercrop_area2 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_area2" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_summer_othercrop_invention_proposed2 + '" id="other_summer_othercrop_invention_proposed2" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_saving2 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_saving2" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_req2 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_req2" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Other_Summer_crp2').html(ass);
                    $('#Other_Summer_crp2').show();

                    $('#other_summer_othercrop_name2').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("other_summer_othercrop_name2").disabled = true;
                    //    document.getElementById("other_summer_othercrop_area2").disabled = true;
                    //    document.getElementById("other_summer_othercrop_invention_proposed2").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_saving2").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_req2").disabled = true;


                    //}
                }
                if (response.other_summer_othercrop_name3 != null && response.other_summer_othercrop_name3 != "null" && response.other_summer_othercrop_name3 != "") {

                    var other_summer_othercrop_area3 = "";
                    var other_summer_othercrop_invention_proposed3 = "";
                    var other_summer_othercrop_water_saving3 = "";
                    var other_summer_othercrop_water_req3 = "";

                    if (response.other_summer_othercrop_area3 != null && response.other_summer_othercrop_area3 != "") {
                        other_summer_othercrop_area3 = response.other_summer_othercrop_area3;
                    }
                    if (response.other_summer_othercrop_invention_proposed3 != null && response.other_summer_othercrop_invention_proposed3 != "") {
                        other_summer_othercrop_invention_proposed3 = response.other_summer_othercrop_invention_proposed3;
                    }
                    if (response.other_summer_othercrop_water_saving3 != null && response.other_summer_othercrop_water_saving3 != "") {
                        other_summer_othercrop_water_saving3 = response.other_summer_othercrop_water_saving3;
                    }
                    if (response.other_summer_othercrop_water_req3 != null && response.other_summer_othercrop_water_req3 != "") {
                        other_summer_othercrop_water_req3 = response.other_summer_othercrop_water_req3;
                    }

                    var s11 = "other_summer_othercrop_area3";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_summer_othercrop_name3 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name"  value="' + response.other_summer_othercrop_name3 + '"/>' +
                        '<li><input type="text" value="' + other_summer_othercrop_area3 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_area3" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_summer_othercrop_invention_proposed3 + '" id="other_summer_othercrop_invention_proposed3" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_saving3 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_saving3" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_req3 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_req3" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';
                    $('#Other_Summer_crp3').show();

                    $('#Other_Summer_crp3').html(ass);
                    $('#other_summer_othercrop_name3').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("other_summer_othercrop_name3").disabled = true;
                    //    document.getElementById("other_summer_othercrop_area3").disabled = true;
                    //    document.getElementById("other_summer_othercrop_invention_proposed3").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_saving3").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_req3").disabled = true;


                    //}
                }
                if (response.other_summer_othercrop_name4 != null && response.other_summer_othercrop_name4 != "null" && response.other_summer_othercrop_name4 != "") {

                    var other_summer_othercrop_area4 = "";
                    var other_summer_othercrop_invention_proposed4 = "";
                    var other_summer_othercrop_water_saving4 = "";
                    var other_summer_othercrop_water_req4 = "";

                    if (response.other_summer_othercrop_area4 != null && response.other_summer_othercrop_area4 != "") {
                        other_summer_othercrop_area4 = response.other_summer_othercrop_area4;
                    }
                    if (response.other_summer_othercrop_invention_proposed4 != null && response.other_summer_othercrop_invention_proposed4 != "") {
                        other_summer_othercrop_invention_proposed4 = response.other_summer_othercrop_invention_proposed4;
                    }
                    if (response.other_summer_othercrop_water_saving4 != null && response.other_summer_othercrop_water_saving4 != "") {
                        other_summer_othercrop_water_saving4 = response.other_summer_othercrop_water_saving4;
                    }
                    if (response.other_summer_othercrop_water_req4 != null && response.other_summer_othercrop_water_req4 != "") {
                        other_summer_othercrop_water_req4 = response.other_summer_othercrop_water_req4;
                    }
                    var s11 = "other_summer_othercrop_area4";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_summer_othercrop_name4 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name"  value="' + response.other_summer_othercrop_name4 + '"/>' +
                        '<li><input type="text" value="' + other_summer_othercrop_area4 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_area4" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_summer_othercrop_invention_proposed4 + '" id="other_summer_othercrop_invention_proposed4" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_saving4 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_saving4" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_req4 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_req4" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';
                    $('#Other_Summer_crp4').show();

                    $('#Other_Summer_crp4').html(ass);
                    $('#other_summer_othercrop_name4').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("other_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("other_summer_othercrop_area4").disabled = true;
                    //    document.getElementById("other_summer_othercrop_invention_proposed4").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_saving4").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_req4").disabled = true;


                    //}
                }
                if (response.other_summer_othercrop_name5 != null && response.other_summer_othercrop_name5 != "null" && response.other_summer_othercrop_name5 != "") {

                    var other_summer_othercrop_area5 = "";
                    var other_summer_othercrop_invention_proposed5 = "";
                    var other_summer_othercrop_water_saving5 = "";
                    var other_summer_othercrop_water_req5 = "";

                    if (response.other_summer_othercrop_area5 != null && response.other_summer_othercrop_area5 != "") {
                        other_summer_othercrop_area5 = response.other_summer_othercrop_area5;
                    }
                    if (response.other_summer_othercrop_invention_proposed5 != null && response.other_summer_othercrop_invention_proposed5 != "") {
                        other_summer_othercrop_invention_proposed5 = response.other_summer_othercrop_invention_proposed5;
                    }
                    if (response.other_summer_othercrop_water_saving5 != null && response.other_summer_othercrop_water_saving5 != "") {
                        other_summer_othercrop_water_saving5 = response.other_summer_othercrop_water_saving5;
                    }
                    if (response.other_summer_othercrop_water_req5 != null && response.other_summer_othercrop_water_req5 != "") {
                        other_summer_othercrop_water_req5 = response.other_summer_othercrop_water_req5;
                    }

                    var s11 = "other_summer_othercrop_area5";
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.other_summer_othercrop_name5 + '' +
                        '<a href="#Filter_Other_measures" data-toggle="modal" data-whatever="md_Clr1" style="float: right;" class="comp_layout comp_blue text-center">' +
                        '<i class="fa fa-info-circle" title="Information" style="color:#fff" id="sp1" onclick="Other_otherpopup(\'' + s11 + '\')"></i></a></div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="other_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name"  value="' + response.other_summer_othercrop_name5 + '"/>' +
                        '<li><input type="text" value="' + other_summer_othercrop_area5 + '" onkeyup="Other_measure_Crop_WaterRequire()"  id="other_summer_othercrop_area5" class="form-control decimal" title="Crop Area(ha)" title="Crop Area(ha)" placeholder="Crop Area(ha)" title="Crop Area(ha)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text" value="' + other_summer_othercrop_invention_proposed5 + '" id="other_summer_othercrop_invention_proposed5" class="form-control alpha " title="Intervention Proposed (pl. specify)" placeholder="Intervention Proposed(pl. specify)" onkeyup="Other_measure__Summer_WaterRequire()" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_saving5 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_saving5" onkeyup="Other_measure__Summer_WaterRequire()" title="Water saving" class="form-control decimal" placeholder="Water saving" />' +
                        '</li><li><input type="text"  value="' + other_summer_othercrop_water_req5 + '" onkeyup="Other_measure_Crop_WaterRequire()" id="other_summer_othercrop_water_req5" onkeyup="Other_measure__Summer_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';
                    $('#Other_Summer_crp5').show();
                    $('#Other_Summer_crp5').html(ass);
                    $('#other_summer_othercrop_name5').hide();
                    $('#Other_Summer_AddCrop').hide();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("other_summer_othercrop_name5").disabled = true;
                    //    document.getElementById("other_summer_othercrop_area5").disabled = true;
                    //    document.getElementById("other_summer_othercrop_invention_proposed5").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_saving5").disabled = true;
                    //    document.getElementById("other_summer_othercrop_water_req5").disabled = true;


                    //}
                }



                $('#other_summer_horticulture_crop_area').val(response.other_summer_horticulture_crop_area);
                $('#other_summer_horticulture_invention_proposed').val(response.other_summer_horticulture_invention_proposed);
                $('#other_summer_horticulture_water_saving').val(response.other_summer_horticulture_water_saving);
                // $('#other_summer_horticulture_water_req').val(response.other_summer_horticulture_water_req);


                if (response.other_summer_horticulture_water_req != null && response.other_summer_horticulture_water_req != "") {
                    $('#other_summer_horticulture_water_req').val(response.other_summer_horticulture_water_req);
                }
                else {
                    $('#other_summer_horticulture_water_req').val(470);
                }

                $('#other_summer_horticulture_waterdemand').text(response.other_summer_horticulture_waterdemand);
                $('#other_summer_horticulture_reduction_gw_deman').text(response.other_summer_horticulture_reduction_gw_deman);



                
                $('#other_approx_estimated_cost').val(response.other_approx_estimated_cost);
                $('#other_cost_type').val(response.other_cost_type);

                $('#Other_measure_Kharif_Water_demand').text(response.other_kharif_total_kharifcrop_waterdemand);
                $('#Total_Reduction_in_ground_water_demand_Kharif').text(response.other_kharif_total_reduc_gw_demand);

                $('#Other_measure_Rabi_Water_demand').text(response.other_rabi_total_rabicrop_waterdemand);
                $('#Total_Reduction_in_ground_water_demand_Rabi').text(response.other_rabi_total_reduc_gw_demand);

                $('#Other_measure_Summer_Crop_Water_demand').text(response.other_summer_total_summercrop_waterdemand);
                $('#Total_Reduction_in_ground_water_demand_Summer').text(response.other_summer_total_reduc_gw_demand);
                $('#TotalAnnual_Reduction_Other_measure').text(response.other_total_annual_waterdemand);


                $('#Other_measure_kharif_Paddy_UserVale').val(response.other_kharif_paddy_crop_area);
                $('#Other_measure_kharif_Paddy_Intervention_UserVale').val(response.other_kharif_paddy_intervention_value);
                $('#Other_kharif_Paddy_FundingSource').val(response.other_kharif_paddy_fundingsource);
                $('#Other_measure_kharif_Ragi_UserVale').val(response.other_kharif_ragi_crop_area);
                $('#Other_measure_kharif_Ragi_Intervention_UserVale').val(response.other_kharif_ragi_intervention_value);
                $('#Other_kharif_Ragi_FundingSource').val(response.other_kharif_ragi_fundingsource);
                $('#Other_measure_kharif_GroundNut_UserVale').val(response.other_kharif_groundnut_crop_area);
                $('#Other_measure_kharif_GroundNut_Intervention_UserVale').val(response.other_kharif_groundnut_intervention_value);
                $('#Other_kharif_GroundNut_FundingSource').val(response.other_kharif_groundnut_fundingsource);
                $('#Other_measure_kharif_Sugarcane_UserVale').val(response.other_kharif_sugarcane_crop_area);
                $('#Other_measure_kharif_Sugarcane_Intervention_UserVale').val(response.other_kharif_sugarcane_intervention_value);
                $('#Other_kharif_Sugarcane_FundingSource').val(response.other_kharif_sugarcane_fundingsource);
                $('#Other_measure_kharif_Tomato_UserVale').val(response.other_kharif_tomoto_crop_area);
                $('#Other_measure_kharif_Tomato_Intervention_UserVale').val(response.other_kharif_tomoto_intervention_value);
                $('#Other_kharif_Tomoto_FundingSource').val(response.other_kharif_tomoto_fundingsource);
                //  $('#Other_measure_kharif_Cabbage_UserVale').val(response.other_kharif_cabbage_crop_area);
                //$('#Other_measure_kharif_Cabbage_Intervention_UserVale').val(response.other_kharif_cabbage_intervention_value);
                $('#Other_kharif_Cabbage_FundingSource').val(response.other_kharif_cabbage_fundingsource);
                //$('#Other_measure_kharif_Beans_UserVale').val(response.other_kharif_beans_crop_area);
                //$('#Other_measure_kharif_Beans_Intervention_UserVale').val(response.other_kharif_beans_intervention_value);
                //$('#Other_kharif_Beans_FundingSource').val(response.other_kharif_beans_fundingsource);
                $('#Other_measure_kharif_Floriculture_UserVale').val(response.other_kharif_floriculture_crop_area);
                $('#Other_measure_kharif_Floriculture_Intervention_UserVale').val(response.other_kharif_floriculture_intervention_value);
                $('#Other_kharif_Floriculture_FundingSource').val(response.other_kharif_floriculture_fundingsource);
                $('#Other_measure_kharif_Sericulture_UserVale').val(response.other_kharif_sericulture_crop_area);
                $('#Other_measure_kharif_Sericulture_Intervention_UserVale').val(response.other_kharif_sericulture_intervention_value);
                $('#Other_kharif_Sericulture_FundingSource').val(response.other_kharif_sericulture_fundingsource);
                // $('#Other_measure_kharif_Cucmber_UserVale').val(response.other_kharif_cucumber_crop_area);
                //$('#Other_measure_kharif_Cucmber_Intervention_UserVale').val(response.other_kharif_cucumber_intervention_value);
                //$('#Other_kharif_Cucmber_FundingSource').val(response.other_kharif_cucumber_fundingsource);
                $('#Other_measure_kharif_Banana_UserVale').val(response.other_kharif_banana_crop_area);
                $('#Other_measure_kharif_Banana_Intervention_UserVale').val(response.other_kharif_banana_intervention_value);
                $('#Other_kharif_Banana_FundingSource').val(response.other_kharif_banana_fundingsource);
                $('#Other_measure_kharif_Fodder_UserVale').val(response.other_kharif_fodder_crop_area);
                $('#Other_measure_kharif_Fodder_Intervention_UserVale').val(response.other_kharif_fodder_intervention_value);
                $('#Other_kharif_Fodder_FundingSource').val(response.other_kharif_fodder_fundingsource);
                $('#Other_measure_kharif_Maize_UserVale').val(response.other_kharif_maize_crop_area);
                $('#Other_measure_kharif_Maize_Intervention_UserVale').val(response.other_kharif_maize_intervention_value);
                $('#Other_kharif_Maize_FundingSource').val(response.other_kharif_maize_fundingsource);
                // $('#Other_measure_kharif_Potato_UserVale').val(response.other_kharif_potato_crop_area);
                //$('#Other_measure_kharif_Potato_Intervention_UserVale').val(response.other_kharif_potato_intervention_value);
                //$('#Other_kharif_Potato_FundingSource').val(response.other_kharif_potato_fundingsource);
                $('#Other_measure_kharif_Chillies_UserVale').val(response.other_kharif_chillies_crop_area);
                $('#Other_measure_kharif_Chillies_Intervention_UserVale').val(response.other_kharif_chillies_intervention_value);
                $('#Other_kharif_Chillies_FundingSource').val(response.other_kharif_chillies_fundingsource);
                $('#Other_measure_kharif_Cotton_UserVale').val(response.other_kharif_cotton_crop_area);
                
                $('#Other_measure_kharif_Cotton_Intervention_UserVale').val(response.other_kharif_cotton_intervention_value);

                $('#Other_kharif_Cotton_FundingSource').val(response.other_kharif_cotton_fundingsource);
                $('#Other_measure_kharif_Melon_UserVale').val(response.other_kharif_melon_crop_area);
                $('#Other_measure_kharif_Melon_Intervention_UserVale').val(response.other_kharif_melon_intervention_value);
                $('#Other_kharif_Melon_FundingSource').val(response.other_kharif_melon_fundingsource);
                $('#Other_measure_kharif_Citrus_UserVale').val(response.other_kharif_citrus_crop_area);
                $('#Other_measure_kharif_Citrus_Intervention_UserVale').val(response.other_kharif_citrus_intervention_value);
                $('#Other_kharif_Citrus_FundingSource').val(response.other_kharif_citrus_fundingsource);
                //  $('#Other_measure_kharif_Peanut_UserVale').val(response.other_kharif_peanut_crop_area);
                // $('#Other_measure_kharif_Peanut_Intervention_UserVale').val(response.other_kharif_peanut_intervention_value);
                //$('#Other_kharif_Peanut_FundingSource').val(response.other_kharif_peanut_fundingsource);
                $('#Other_measure_kharif_Horticulture_UserVale').val(response.other_kharif_horticulture_crop_area);
                $('#Other_measure_kharif_Horticulture_Intervention_UserVale').val(response.other_kharif_horticulture_intervention_value);
                $('#Other_kharif_Horticulture_FundingSource').val(response.other_kharif_horticulture_fundingsource);
                $('#Other_measure_Rabi_Sericulture_UserVale').val(response.other_rabi_sericulture_crop_area);
                $('#Other_measure_Rabi_Sericulture_Intervention_UserVale').val(response.other_rabi_sericulture_intervention_value);
                $('#Other_Rabi_Sericulture_FundingSource').val(response.other_rabi_sericulture_fundingsource);
                $('#Other_measure_Rabi_Tomota_UserVale').val(response.other_rabi_tomoto_crop_area);
                $('#Other_measure_Rabi_Tomota_Intervention_UserVale').val(response.other_rabi_tomoto_intervention_value);
                $('#Other_Rabi_Tomota_FundingSource').val(response.other_rabi_tomoto_fundingsource);
                // $('#Other_measure_Rabi_Cabbage_UserVale').val(response.other_rabi_cabbage_crop_area);
                //$('#Other_measure_Rabi_Cabbage_Intervention_UserVale').val(response.other_rabi_cabbage_intervention_value);
                //$('#Other_Rabi_Cabbage_FundingSource').val(response.other_rabi_cabbage_fundingsource);
                // $('#Other_measure_Rabi_Beans_UserVale').val(response.other_rabi_beans_crop_area);
                //$('#Other_measure_Rabi_Beans_Intervention_UserVale').val(response.other_rabi_beans_intervention_value);
                //  $('#Other_Rabi_Beans_FundingSource').val(response.other_rabi_beans_fundingsource);
                $('#Other_measure_Rabi_Floriculture_UserVale').val(response.other_rabi_floriculture_crop_area);
                $('#Other_measure_Rabi_Floriculture_Intervention_UserVale').val(response.other_rabi_floriculture_intervention_value);
                $('#Other_Rabi_Floriculture_FundingSource').val(response.other_rabi_floriculture_fundingsource);
                // $('#Other_measure_Rabi_Potato_UserVale').val(response.other_rabi_potato_crop_area);
                //$('#Other_measure_Rabi_Potato_Intervention_UserVale').val(response.other_rabi_potato_intervention_value);
                //$('#Other_Rabi_Potato_FundingSource').val(response.other_rabi_potato_fundingsource);
                //$('#Other_measure_Rabi_Cucumber_UserVale').val(response.other_rabi_cucumber_crop_area);
                //$('#Other_measure_Rabi_Cucumber_Intervention_UserVale').val(response.other_rabi_cucuber_intervention_value);
                //$('#Other_Rabi_Cucumber_FundingSource').val(response.other_rabi_cucumber_fundingsource);
                $('#Other_measure_Rabi_Ragi_UserVale').val(response.other_rabi_ragi_crop_area);
                $('#Other_measure_Rabi_Ragi_Intervention_UserVale').val(response.other_rabi_ragi_intervention_value);
                $('#Other_Rabi_Ragi_FundingSource').val(response.other_rabi_ragi_fundingsource);
                $('#Other_measure_Rabi_Sugarcane_UserVale').val(response.other_rabi_sugarcane_crop_area);
                $('#Other_measure_Rabi_Sugarcane_Intervention_UserVale').val(response.other_rabi_sugarcane_intervention_value);
                $('#Other_Rabi_Sugarcane_FundingSource').val(response.other_rabi_sugarcane_fundingsource);
                $('#Other_measure_Rabi_Maize_UserVale').val(response.other_rabi_maize_crop_area);
                $('#Other_measure_Rabi_Maize_Intervention_UserVale').val(response.other_rabi_maize_intervention_value);
                $('#Other_Rabi_Maize_FundingSource').val(response.other_rabi_maize_fundingsource);
                $('#Other_measure_Rabi_Fodder_UserVale').val(response.other_rabi_fodder_crop_area);
                $('#Other_measure_Rabi_Fodder_Intervention_UserVale').val(response.other_rabi_fodder_intervention_value);
                $('#Other_Rabi_Fodder_FundingSource').val(response.other_rabi_fodder_fundingsource);
                $('#Other_measure_Rabi_Paddy_UserVale').val(response.other_rabi_paddy_crop_area);
                $('#Other_measure_Rabi_Paddy_Intervention_UserVale').val(response.other_rabi_paddy_intervention_value);
                $('#Other_Rabi_Paddy_FundingSource').val(response.other_rabi_paddy_fundingsource);
                $('#Other_measure_Rabi_Alfalfa_UserVale').val(response.other_rabi_alfalfa_crop_area);
                $('#Other_measure_Rabi_Alfalfa_Intervention_UserVale').val(response.other_rabi_alfalfa_intervention_value);
                $('#Other_Rabi_Alfalfa_FundingSource').val(response.other_rabi_alfalfa_fundingsource);
                //$('#Other_measure_Rabi_Onion_UserVale').val(response.other_rabi_onion_crop_area);
                //$('#Other_measure_Rabi_Onion_Intervention_UserVale').val(response.other_rabi_onion_intervention_value);
                //$('#Other_Rabi_Onion_FundingSource').val(response.other_rabi_onion_fundingsource);
                $('#Other_measure_Rabi_Hortculture_UserVale').val(response.other_rabi_horticulture_crop_area);
                $('#Other_measure_Rabi_Hortculture_Intervention_UserVale').val(response.other_rabi_horticulture_intervention_value);
                $('#Other_Rabi_Hortculture_FundingSource').val(response.other_rabi_horticulture_fundingsource);
                $('#Other_measure_Rabi_Sunflower_UserVale').val(response.other_rabi_sunflower_crop_area);
                $('#Other_measure_Rabi_Sunflower_Intervention_UserVale').val(response.other_rabi_sunflower_intervention_value);
                $('#Other_Rabi_Sunflower_FundingSource').val(response.other_rabi_sunflower_fundingsource);
                $('#Other_measure_Crop_Sericulture_UserVale').val(response.other_summer_sericulture_crop_area);
                $('#Other_measure_Crop_Sericulture_Intervention_UserVale').val(response.other_summer_sericulture_intervention_value);
                $('#Other_summer_Sericulture_FundingSource').val(response.other_summer_sericulture_fundingsource);
                $('#Other_measure_Crop_Tomota_UserVale').val(response.other_summer_tomoto_crop_area);
                $('#Other_measure_Crop_Tomota_Intervention_UserVale').val(response.other_summer_tomoto_intervention_value);
                $('#Other_summer_Tomota_FundingSource').val(response.other_summer_tomoto_fundingsource);
                // $('#Other_measure_Crop_Cabbage_UserVale').val(response.other_summer_cabbage_crop_area);
                //$('#Other_measure_Crop_Cabbage_Intervention_UserVale').val(response.other_summer_cabbage_intervention_value);
                //$('#Other_summer_Cabbage_FundingSource').val(response.other_summer_cabbage_fundingsource);
                //$('#Other_measure_Crop_Beans_UserVale').val(response.other_summer_beans_crop_area);
                //$('#Other_measure_Crop_Beans_Intervention_UserVale').val(response.other_summer_beans_intervention_value);
                //$('#Other_summer_Beans_FundingSource').val(response.other_summer_beans_fundingsource);
                $('#Other_measure_Crop_Floriculture_UserVale').val(response.other_summer_floriculture_crop_area);
                $('#Other_measure_Crop_Floriculture_Intervention_UserVale').val(response.other_summer_floiculture_intervention_value);
                $('#Other_summer_Floriculture_FundingSource').val(response.other_summer_floriculture_fundingsource);
                $('#Other_measure_Crop_Maize_UserVale').val(response.other_summer_maize_crop_area);
                $('#Other_measure_Crop_Maize_Intervention_UserVale').val(response.other_summer_maize_intervention_value);
                $('#Other_summer_Maize_FundingSource').val(response.other_summer_maize_fundingsource);
                $('#Other_measure_Crop_Fodder_UserVale').val(response.other_summer_fodder_crop_area);
                $('#Other_measure_Crop_Fodder_Intervention_UserVale').val(response.other_summer_fodder_intervention_value);
                $('#Other_summer_Fodder_FundingSource').val(response.other_summer_fodder_fundingsource);
                $('#Other_measure_Crop_Sugarcane_UserVale').val(response.other_summer_sugarcane_crop_area);
                $('#Other_measure_Crop_Sugarcane_Intervention_UserVale').val(response.other_summer_sugarcane_intervention_value);
                $('#Other_summer_Sugarcane_FundingSource').val(response.other_summer_sugarcane_fundingsource);

                $('#TotalAnnual_Reduction_Other_measure').val(response.other_total_annual_waterdemand);



                //new columns water requirement
                if (response.other_kharif_paddy_water_req != null && response.other_kharif_paddy_water_req != "") {
                    $('#other_kharif_paddy_water_req').val(response.other_kharif_paddy_water_req);
                }
                else {
                    $('#other_kharif_paddy_water_req').val(1175);
                }

                if (response.other_kharif_ragi_water_req != null && response.other_kharif_ragi_water_req != "") {
                    $('#other_kharif_ragi_water_req').val(response.other_kharif_ragi_water_req);
                }
                else {
                    $('#other_kharif_ragi_water_req').val(550);
                }


                if (response.other_kharif_groundnut_water_req != null && response.other_kharif_groundnut_water_req != "") {
                    $('#other_kharif_groundnut_water_req').val(response.other_kharif_groundnut_water_req);
                }
                else {
                    $('#other_kharif_groundnut_water_req').val(525);
                }

                if (response.other_kharif_sugarcane_water_req != null && response.other_kharif_sugarcane_water_req != "") {
                    $('#other_kharif_sugarcane_water_req').val(response.other_kharif_sugarcane_water_req);
                }
                else {
                    $('#other_kharif_sugarcane_water_req').val(2000);
                }

                if (response.other_kharif_tomoto_water_req != null && response.other_kharif_tomoto_water_req != "") {
                    $('#other_kharif_tomoto_water_req').val(response.other_kharif_tomoto_water_req);
                }
                else {
                    $('#other_kharif_tomoto_water_req').val(500);
                }

                //if (response.other_kharif_cabbage_water_req != null && response.other_kharif_cabbage_water_req != "") {
                //    $('#other_kharif_cabbage_water_req').val(response.other_kharif_cabbage_water_req);
                //}
                //else {
                //    $('#other_kharif_cabbage_water_req').val(425);
                //}



                //if (response.other_kharif_beans_water_req != null && response.other_kharif_beans_water_req != "") {
                //    $('#other_kharif_beans_water_req').val(response.other_kharif_beans_water_req);
                //}
                //else {
                //    $('#other_kharif_beans_water_req').val(425);
                //}

                if (response.other_kharif_floriculture_water_req != null && response.other_kharif_floriculture_water_req != "") {
                    $('#other_kharif_floriculture_water_req').val(response.other_kharif_floriculture_water_req);
                }
                else {
                    $('#other_kharif_floriculture_water_req').val(1200);
                }

                if (response.other_kharif_sericulture_water_req != null && response.other_kharif_sericulture_water_req != "") {
                    $('#other_kharif_sericulture_water_req').val(response.other_kharif_sericulture_water_req);
                }
                else {
                    $('#other_kharif_sericulture_water_req').val(1550);
                }

                //if (response.other_kharif_cucumber_water_req != null && response.other_kharif_cucumber_water_req != "") {
                //    $('#other_kharif_cucumber_water_req').val(response.other_kharif_cucumber_water_req);
                //}
                //else {
                //    $('#other_kharif_cucumber_water_req').val(400);
                //}

                
                if (response.other_kharif_banana_water_req != null && response.other_kharif_banana_water_req != "") {
                    $('#other_kharif_banana_water_req').val(response.other_kharif_banana_water_req);
                }
                else {
                    $('#other_kharif_banana_water_req').val(1700);
                }

                if (response.other_kharif_fodder_water_req != null && response.other_kharif_fodder_water_req != "") {
                    $('#other_kharif_fodder_water_req').val(response.other_kharif_fodder_water_req);
                }
                else {
                    $('#other_kharif_fodder_water_req').val(1400);
                }


                if (response.other_kharif_maize_water_req != null && response.other_kharif_maize_water_req != "") {
                    $('#other_kharif_maize_water_req').val(response.other_kharif_maize_water_req);
                }
                else {
                    $('#other_kharif_maize_water_req').val(650);
                }


                //if (response.other_kharif_potato_water_req != null && response.other_kharif_potato_water_req != "") {
                //    $('#other_kharif_potato_water_req').val(response.other_kharif_potato_water_req);
                //}
                //else {
                //    $('#other_kharif_potato_water_req').val(600);
                //}


                if (response.other_kharif_chillies_water_req != null && response.other_kharif_chillies_water_req != "") {
                    $('#other_kharif_chillies_water_req').val(response.other_kharif_chillies_water_req);
                }
                else {
                    $('#other_kharif_chillies_water_req').val(230);
                }


                if (response.other_kharif_cotton_water_req != null && response.other_kharif_cotton_water_req != "") {
                    $('#other_kharif_cotton_water_req').val(response.other_kharif_cotton_water_req);
                }
                else {
                    $('#other_kharif_cotton_water_req').val(1000);
                }
                if (response.other_kharif_melon_water_req != null && response.other_kharif_melon_water_req != "") {
                    $('#other_kharif_melon_water_req').val(response.other_kharif_melon_water_req);
                }
                else {
                    $('#other_kharif_melon_water_req').val(500);
                }
                if (response.other_kharif_citrus_water_req != null && response.other_kharif_citrus_water_req != "") {
                    $('#other_kharif_citrus_water_req').val(response.other_kharif_citrus_water_req);
                }
                else {
                    $('#other_kharif_citrus_water_req').val(1050);
                }
                //if (response.other_kharif_peanut_water_req != null && response.other_kharif_peanut_water_req != "") {
                //    $('#other_kharif_peanut_water_req').val(response.other_kharif_peanut_water_req);
                //}
                //else {
                //    $('#other_kharif_peanut_water_req').val(600);
                //}
                if (response.other_kharif_horticulture_water_req != null && response.other_kharif_horticulture_water_req != "") {
                    $('#other_kharif_horticulture_water_req').val(response.other_kharif_horticulture_water_req);
                }
                else {
                    $('#other_kharif_horticulture_water_req').val(470);
                }
                if (response.other_rabi_sericulture_water_req != null && response.other_rabi_sericulture_water_req != "") {
                    $('#other_rabi_sericulture_water_req').val(response.other_rabi_sericulture_water_req);
                }
                else {
                    $('#other_rabi_sericulture_water_req').val(1550);
                }
                if (response.other_rabi_tomoto_water_req != null && response.other_rabi_tomoto_water_req != "") {
                    $('#other_rabi_tomoto_water_req').val(response.other_rabi_tomoto_water_req);
                }
                else {
                    $('#other_rabi_tomoto_water_req').val(500);
                }
                //if (response.other_rabi_cabbage_water_req != null && response.other_rabi_cabbage_water_req != "") {
                //    $('#other_rabi_cabbage_water_req').val(response.other_rabi_cabbage_water_req);
                //}
                //else {
                //    $('#other_rabi_cabbage_water_req').val(425);
                //}
                //if (response.other_rabi_beans_water_req != null && response.other_rabi_beans_water_req != "") {
                //    $('#other_rabi_beans_water_req').val(response.other_rabi_beans_water_req);
                //}
                //else {
                //    $('#other_rabi_beans_water_req').val(400);
                //}
                if (response.other_rabi_floriculture_water_req != null && response.other_rabi_floriculture_water_req != "") {
                    $('#other_rabi_floriculture_water_req').val(response.other_rabi_floriculture_water_req);
                }
                else {
                    $('#other_rabi_floriculture_water_req').val(1200);
                }
                //if (response.other_rabi_potato_water_req != null && response.other_rabi_potato_water_req != "") {
                //    $('#other_rabi_potato_water_req').val(response.other_rabi_potato_water_req);
                //}
                //else {
                //    $('#other_rabi_potato_water_req').val(600);
                //}
                //if (response.other_rabi_cucumber_water_req != null && response.other_rabi_cucumber_water_req != "") {
                //    $('#other_rabi_cucumber_water_req').val(response.other_rabi_cucumber_water_req);
                //}
                //else {
                //    $('#other_rabi_cucumber_water_req').val(400);
                //}
                if (response.other_rabi_ragi_water_req != null && response.other_rabi_ragi_water_req != "") {
                    $('#other_rabi_ragi_water_req').val(response.other_rabi_ragi_water_req);
                }
                else {
                    $('#other_rabi_ragi_water_req').val(550);
                }
                if (response.other_rabi_sugarcane_water_req != null && response.other_rabi_sugarcane_water_req != "") {
                    $('#other_rabi_sugarcane_water_req').val(response.other_rabi_sugarcane_water_req);
                }
                else {
                    $('#other_rabi_sugarcane_water_req').val(2000);
                }
                if (response.other_rabi_maize_water_req != null && response.other_rabi_maize_water_req != "") {
                    $('#other_rabi_maize_water_req').val(response.other_rabi_maize_water_req);
                }
                else {
                    $('#other_rabi_maize_water_req').val(650);
                }
                if (response.other_rabi_fodder_water_req != null && response.other_rabi_fodder_water_req != "") {
                    $('#other_rabi_fodder_water_req').val(response.other_rabi_fodder_water_req);
                }
                else {
                    $('#other_rabi_fodder_water_req').val(1400);
                }
                if (response.other_rabi_paddy_water_req != null && response.other_rabi_paddy_water_req != "") {
                    $('#other_rabi_paddy_water_req').val(response.other_rabi_paddy_water_req);
                }
                else {
                    $('#other_rabi_paddy_water_req').val(1175);
                }
                if (response.other_rabi_alfalfa_water_req != null && response.other_rabi_alfalfa_water_req != "") {
                    $('#other_rabi_alfalfa_water_req').val(response.other_rabi_alfalfa_water_req);
                }
                else {
                    $('#other_rabi_alfalfa_water_req').val(1200);
                }
                //if (response.other_rabi_onion_water_req != null && response.other_rabi_onion_water_req != "") {
                //    $('#other_rabi_onion_water_req').val(response.other_rabi_onion_water_req);
                //}
                //else {
                //    $('#other_rabi_onion_water_req').val(450);
                //}
                if (response.other_rabi_horticulture_water_req != null && response.other_rabi_horticulture_water_req != "") {
                    $('#other_rabi_horticulture_water_req').val(response.other_rabi_horticulture_water_req);
                }
                else {
                    $('#other_rabi_horticulture_water_req').val(470);
                }
                if (response.other_rabi_sunflower_water_req != null && response.other_rabi_sunflower_water_req != "") {
                    $('#other_rabi_sunflower_water_req').val(response.other_rabi_sunflower_water_req);
                }
                else {
                    $('#other_rabi_sunflower_water_req').val(800);
                }

                if (response.other_summer_sericulture_water_req != null && response.other_summer_sericulture_water_req != "") {
                    $('#other_summer_sericulture_water_req').val(response.other_summer_sericulture_water_req);
                }
                else {
                    $('#other_summer_sericulture_water_req').val(1550);
                }
                if (response.other_summer_tomoto_water_req != null && response.other_summer_tomoto_water_req != "") {
                    $('#other_summer_tomoto_water_req').val(response.other_summer_tomoto_water_req);
                }
                else {
                    $('#other_summer_tomoto_water_req').val(500);
                }
                //if (response.other_summer_cabbage_water_req != null && response.other_summer_cabbage_water_req != "") {
                //    $('#other_summer_cabbage_water_req').val(response.other_summer_cabbage_water_req);
                //}
                //else {
                //    $('#other_summer_cabbage_water_req').val(425);
                //}
                //if (response.other_summer_beans_water_req != null && response.other_summer_beans_water_req != "") {
                //    $('#other_summer_beans_water_req').val(response.other_summer_beans_water_req);
                //}
                //else {
                //    $('#other_summer_beans_water_req').val(400);
                //}
                if (response.other_summer_floriculture_water_req != null && response.other_summer_floriculture_water_req != "") {
                    $('#other_summer_floriculture_water_req').val(response.other_summer_floriculture_water_req);
                }
                else {
                    $('#other_summer_floriculture_water_req').val(1200);
                }
                if (response.other_summer_maize_water_req != null && response.other_summer_maize_water_req != "") {
                    $('#other_summer_maize_water_req').val(response.other_summer_maize_water_req);
                }
                else {
                    $('#other_summer_maize_water_req').val(650);
                }
                if (response.other_summer_fodder_water_req != null && response.other_summer_fodder_water_req != "") {
                    $('#other_summer_fodder_water_req').val(response.other_summer_fodder_water_req);
                }
                else {
                    $('#other_summer_fodder_water_req').val(1400);
                }
                if (response.other_summer_sugarcane_water_req != null && response.other_summer_sugarcane_water_req != "") {
                    $('#other_summer_sugarcane_water_req').val(response.other_summer_sugarcane_water_req);
                }
                else {
                    $('#other_summer_sugarcane_water_req').val(2000);
                }





                //new columns water saving
                $('#other_kharif_paddy_water_saving').val(response.other_kharif_paddy_water_saving);
                $('#other_kharif_ragi_water_saving').val(response.other_kharif_ragi_water_saving);
                $('#other_kharif_groundnut_water_saving').val(response.other_kharif_groundnut_water_saving);
                $('#other_kharif_sugarcane_water_saving').val(response.other_kharif_sugarcane_water_saving);
                $('#other_kharif_tomoto_water_saving').val(response.other_kharif_tomoto_water_saving);
                // $('#other_kharif_cabbage_water_saving').val(response.other_kharif_cabbage_water_saving);
                //$('#other_kharif_beans_water_saving').val(response.other_kharif_beans_water_saving);
                $('#other_kharif_floriculture_water_saving').val(response.other_kharif_floriculture_water_saving);
                $('#other_kharif_sericulture_water_saving').val(response.other_kharif_sericulture_water_saving);
                //$('#other_kharif_cucumber_water_saving').val(response.other_kharif_cucumber_water_saving);
                $('#other_kharif_banana_water_saving').val(response.other_kharif_banana_water_saving);
                $('#other_kharif_fodder_water_saving').val(response.other_kharif_fodder_water_saving);
                $('#other_kharif_maize_water_saving').val(response.other_kharif_maize_water_saving);
                //$('#other_kharif_potato_water_saving').val(response.other_kharif_potato_water_saving);
                $('#other_kharif_chillies_water_saving').val(response.other_kharif_chillies_water_saving);
                $('#other_kharif_cotton_water_saving').val(response.other_kharif_cotton_water_saving);
                $('#other_kharif_melon_water_saving').val(response.other_kharif_melon_water_saving);
                $('#other_kharif_citrus_water_saving').val(response.other_kharif_citrus_water_saving);
                //$('#other_kharif_peanut_water_saving').val(response.other_kharif_peanut_water_saving);
                $('#other_kharif_horticulture_water_saving').val(response.other_kharif_horticulture_water_saving);

                $('#other_rabi_sericulture_water_saving').val(response.other_rabi_sericulture_water_saving);
                $('#other_rabi_tomoto_water_saving').val(response.other_rabi_tomoto_water_saving);
                // $('#other_rabi_cabbage_water_saving').val(response.other_rabi_cabbage_water_saving);
                //$('#other_rabi_beans_water_saving').val(response.other_rabi_beans_water_saving);
                $('#other_rabi_floriculture_water_saving').val(response.other_rabi_floriculture_water_saving);
                //$('#other_rabi_potato_water_saving').val(response.other_rabi_potato_water_saving);
                //$('#other_rabi_cucumber_water_saving').val(response.other_rabi_cucumber_water_saving);
                $('#other_rabi_ragi_water_saving').val(response.other_rabi_ragi_water_saving);
                $('#other_rabi_sugarcane_water_saving').val(response.other_rabi_sugarcane_water_saving);
                $('#other_rabi_maize_water_saving').val(response.other_rabi_maize_water_saving);
                $('#other_rabi_fodder_water_saving').val(response.other_rabi_fodder_water_saving);
                $('#other_rabi_paddy_water_saving').val(response.other_rabi_paddy_water_saving);
                $('#other_rabi_alfalfa_water_saving').val(response.other_rabi_alfalfa_water_saving);
                //$('#other_rabi_onion_water_saving').val(response.other_rabi_onion_water_saving);
                $('#other_rabi_horticulture_water_saving').val(response.other_rabi_horticulture_water_saving);
                $('#other_rabi_sunflower_water_saving').val(response.other_rabi_sunflower_water_saving);

                $('#other_summer_sericulture_water_saving').val(response.other_summer_sericulture_water_saving);
                $('#other_summer_tomoto_water_saving').val(response.other_summer_tomoto_water_saving);
                // $('#other_summer_cabbage_water_saving').val(response.other_summer_cabbage_water_saving);
                // $('#other_summer_beans_water_saving').val(response.other_summer_beans_water_saving);
                $('#other_summer_floriculture_water_saving').val(response.other_summer_floriculture_water_saving);
                $('#other_summer_maize_water_saving').val(response.other_summer_maize_water_saving);
                $('#other_summer_fodder_water_saving').val(response.other_summer_fodder_water_saving);
                $('#other_summer_sugarcane_water_saving').val(response.other_summer_sugarcane_water_saving);

                //other crops
                //$('#other_kharif_othercrop_name').val(response.other_kharif_othercrop_name);
                //$('#other_kharif_othercrop_area').val(response.other_kharif_othercrop_area);
                //$('#other_kharif_othercrop_intervention').val(response.other_kharif_othercrop_intervention);
                //$('#other_kharif_othercrop_water_saving').val(response.other_kharif_othercrop_water_saving);
                //$('#other_kharif_othercrop_water_req').val(response.other_kharif_othercrop_water_req);
                //$('#other_kharif_othercrop_gw_waterdemand').text(response.other_kharif_othercrop_gw_waterdemand);
                //$('#other_kharif_othercrop_reduc_gw_demand').text(response.other_kharif_othercrop_reduc_gw_demand);

                //$('#other_rabi_othercrop_name').val(response.other_rabi_othercrop_name);
                //$('#other_rabi_othercrop_area').val(response.other_rabi_othercrop_area);
                //$('#other_rabi_othercrop_intervention').val(response.other_rabi_othercrop_intervention);
                //$('#other_rabi_othercrop_water_saving').val(response.other_rabi_othercrop_water_saving);
                //$('#other_rabi_othercrop_water_req').val(response.other_rabi_othercrop_water_req);
                //$('#other_rabi_othercrop_gw_waterdemand').text(response.other_rabi_othercrop_gw_waterdemand);
                //$('#other_rabi_othercrop_reduc_gw_demand').text(response.other_rabi_othercrop_reduc_gw_demand);

                //$('#other_summer_othercrop_name').val(response.other_summer_othercrop_name);
                //$('#other_summer_othercrop_area').val(response.other_summer_othercrop_area);
                //$('#other_summer_othercrop_intervention').val(response.other_summer_othercrop_intervention);
                //$('#other_summer_othercrop_water_saving').val(response.other_summer_othercrop_water_saving);
                //$('#other_summer_othercrop_water_req').val(response.other_summer_othercrop_water_req);
                //$('#other_summer_othercrop_gw_waterdemand').text(response.other_summer_othercrop_gw_waterdemand);
                //$('#other_summer_othercrop_reduc_gw_demand').text(response.other_summer_othercrop_reduc_gw_demand);
            }
            else {
                add_Other_kharif_count = 0;
                add_Other_kharif_count1 = 1;
                add_Other_kharif_count2 = 2;
                add_Other_kharif_count3 = 3;
                add_Other_kharif_count4 = 4;
                add_Other_kharif_count5 = 5;

                add_Other_rabi_count = 0;
                add_Other_rabi_count1 = 1;
                add_Other_rabi_count2 = 2;
                add_Other_rabi_count3 = 3;
                add_Other_rabi_count4 = 4;
                add_Other_rabi_count5 = 5;

                add_Other_summer_count = 0;
                add_Other_summer_count1 = 1;
                add_Other_summer_count2 = 2;
                add_Other_summer_count3 = 3;
                add_Other_summer_count4 = 4;
                add_Other_summer_count5 = 5;


                $('#other_summer_horticulture_water_req').val(470);

                //new columns water requirement

                $('#other_kharif_paddy_water_req').val(1175);
                $('#other_kharif_ragi_water_req').val(550);
                $('#other_kharif_groundnut_water_req').val(525);
                $('#other_kharif_sugarcane_water_req').val(2000);
                $('#other_kharif_tomoto_water_req').val(500);
                //$('#other_kharif_cabbage_water_req').val(425);
                //$('#other_kharif_beans_water_req').val(425);
                $('#other_kharif_floriculture_water_req').val(1200);
                $('#other_kharif_sericulture_water_req').val(1550);
                //$('#other_kharif_cucumber_water_req').val(400);
                $('#other_kharif_banana_water_req').val(1700);
                $('#other_kharif_fodder_water_req').val(1400);
                $('#other_kharif_maize_water_req').val(650);
                // $('#other_kharif_potato_water_req').val(600);
                $('#other_kharif_chillies_water_req').val(230);
                //$('#other_kharif_cotton_water_req').val(1000);
                $('#other_kharif_melon_water_req').val(500);
                $('#other_kharif_citrus_water_req').val(1050);
                //$('#other_kharif_peanut_water_req').val(600);
                $('#other_kharif_horticulture_water_req').val(470);

                $('#other_rabi_sericulture_water_req').val(1550);
                $('#other_rabi_tomoto_water_req').val(500);
                // $('#other_rabi_cabbage_water_req').val(425);
                //$('#other_rabi_beans_water_req').val(400);
                $('#other_rabi_floriculture_water_req').val(1200);
                //$('#other_rabi_potato_water_req').val(600);
                //$('#other_rabi_cucumber_water_req').val(400);
                $('#other_rabi_ragi_water_req').val(550);
                $('#other_rabi_sugarcane_water_req').val(2000);
                $('#other_rabi_maize_water_req').val(650);
                $('#other_rabi_fodder_water_req').val(1400);

                $('#other_rabi_paddy_water_req').val(1175);
                $('#other_rabi_alfalfa_water_req').val(1200);
                //$('#other_rabi_onion_water_req').val(450);
                $('#other_rabi_horticulture_water_req').val(470);
                $('#other_rabi_sunflower_water_req').val(800);

                $('#other_summer_sericulture_water_req').val(1550);
                $('#other_summer_tomoto_water_req').val(500);
                //  $('#other_summer_cabbage_water_req').val(425);
                //$('#other_summer_beans_water_req').val(400);
                $('#other_summer_floriculture_water_req').val(1200);
                $('#other_summer_maize_water_req').val(650);
                $('#other_summer_fodder_water_req').val(1400);
                $('#other_summer_sugarcane_water_req').val(2000);

            }
            Other_measure__Kharif_WaterRequire();
            Other_measure_Rabi_WaterRequire();
            Other_measure_Crop_WaterRequire();

        }
    });
}

var other_kharif_paddy_water_req = 0;
var other_kharif_paddy_water_demand = 0;
var other_kharif_paddy_reduc_gw_demand = 0;

var other_kharif_ragi_water_req = 0;
var other_kharif_ragi_water_demand = 0;
var other_kharif_ragi_reduc_gw_demand = 0;

var other_kharif_groundnut_water_req = 0;
var other_kharif_groundnut_water_demand = 0;
var other_kharif_groundnut_reduc_gw_demand = 0;

var other_kharif_sugarcane_water_req = 0;
var other_kharif_sugarcane_water_demand = 0;
var other_kharif_sugarcane_reduc_gw_demand = 0;

var other_kharif_tomoto_water_req = 0;
var other_kharif_tomoto_water_demand = 0;
var other_kharif_tomoto_reduc_gw_demand = 0;

var other_kharif_cabbage_water_req = 0;
var other_kharif_cabbage_water_demand = 0;
var other_kharif_cabbage_reduc_gw_demand = 0;

var other_kharif_beans_water_req = 0;
var other_kharif_beans_water_demand = 0;
var other_kharif_beans_reduc_gw_demand = 0;

var other_kharif_floriculture_water_req = 0;
var other_kharif_floriculture_water_demand = 0;
var other_kharif_floriculture_reduc_gw_demand = 0;

var other_kharif_sericulture_water_req = 0;
var other_kharif_sericulture_water_demand = 0;
var other_kharif_sericulture_reduc_gw_demand = 0;

var other_kharif_cucumber_water_req = 0;
var other_kharif_cucumber_water_demand = 0;
var other_kharif_cucumber_reduc_gw_demand = 0;

var other_kharif_banana_water_req = 0;
var other_kharif_banana_water_demand = 0;
var other_kharif_banana_reduc_gw_demand = 0;

var other_kharif_fodder_water_req = 0;
var other_kharif_fodder_water_demand = 0;
var other_kharif_fodder_reduc_gw_demand = 0;

var other_kharif_maize_water_req = 0;
var other_kharif_maize_water_demand = 0;
var other_kharif_maize_reduc_gw_demand = 0;

var other_kharif_potato_water_req = 0;
var other_kharif_potato_water_demand = 0;
var other_kharif_potato_reduc_gw_demand = 0;

var other_kharif_chillies_water_req = 0;
var other_kharif_chillies_water_demand = 0;
var other_kharif_chillies_reduc_gw_demand = 0;

var other_kharif_cotton_water_req = 0;
var other_kharif_cotton_water_demand = 0;
var other_kharif_cotton_reduc_gw_demand = 0;

var other_kharif_melon_water_req = 0;
var other_kharif_melon_water_demand = 0;
var other_kharif_melon_reduc_gw_demand = 0;

var other_kharif_citrus_water_req = 0;
var other_kharif_citrus_water_demand = 0;
var other_kharif_citrus_reduc_gw_demand = 0;

var other_kharif_peanut_water_req = 0;
var other_kharif_peanut_water_demand = 0;
var other_kharif_peanut_reduc_gw_demand = 0;

var other_kharif_horticulture_water_req = 0;
var other_kharif_horticulture_water_demand = 0;
var other_kharif_horticulture_reduc_gw_demand = 0;




var other_kharif_othercrop_water_req1 = 0;
var other_kharif_othercrop_waterdemand1 = 0;
var other_kharif_othercrop_reduction_gw_demand1 = 0;

var other_kharif_othercrop_water_req2 = 0;
var other_kharif_othercrop_waterdemand2 = 0;
var other_kharif_othercrop_reduction_gw_demand2 = 0;

var other_kharif_othercrop_water_req3 = 0;
var other_kharif_othercrop_waterdemand3 = 0;
var other_kharif_othercrop_reduction_gw_demand3 = 0;


var other_kharif_othercrop_water_req4 = 0;
var other_kharif_othercrop_waterdemand4 = 0;
var other_kharif_othercrop_reduction_gw_demand4 = 0;

var other_kharif_othercrop_water_req5 = 0;
var other_kharif_othercrop_waterdemand5 = 0;
var other_kharif_othercrop_reduction_gw_demand5 = 0


function Other_measure__Kharif_WaterRequire() {
    other_kharif_paddy_water_req = 0;
    other_kharif_paddy_water_demand = 0;
    other_kharif_paddy_reduc_gw_demand = 0;

    other_kharif_ragi_water_req = 0;
    other_kharif_ragi_water_demand = 0;
    other_kharif_ragi_reduc_gw_demand = 0;

    other_kharif_groundnut_water_req = 0;
    other_kharif_groundnut_water_demand = 0;
    other_kharif_groundnut_reduc_gw_demand = 0;

    other_kharif_sugarcane_water_req = 0;
    other_kharif_sugarcane_water_demand = 0;
    other_kharif_sugarcane_reduc_gw_demand = 0;

    other_kharif_tomoto_water_req = 0;
    other_kharif_tomoto_water_demand = 0;
    other_kharif_tomoto_reduc_gw_demand = 0;

    other_kharif_cabbage_water_req = 0;
    other_kharif_cabbage_water_demand = 0;
    other_kharif_cabbage_reduc_gw_demand = 0;

    other_kharif_beans_water_req = 0;
    other_kharif_beans_water_demand = 0;
    other_kharif_beans_reduc_gw_demand = 0;

    other_kharif_floriculture_water_req = 0;
    other_kharif_floriculture_water_demand = 0;
    other_kharif_floriculture_reduc_gw_demand = 0;

    other_kharif_sericulture_water_req = 0;
    other_kharif_sericulture_water_demand = 0;
    other_kharif_sericulture_reduc_gw_demand = 0;

    other_kharif_cucumber_water_req = 0;
    other_kharif_cucumber_water_demand = 0;
    other_kharif_cucumber_reduc_gw_demand = 0;

    other_kharif_banana_water_req = 0;
    other_kharif_banana_water_demand = 0;
    other_kharif_banana_reduc_gw_demand = 0;

    other_kharif_fodder_water_req = 0;
    other_kharif_fodder_water_demand = 0;
    other_kharif_fodder_reduc_gw_demand = 0;

    other_kharif_maize_water_req = 0;
    other_kharif_maize_water_demand = 0;
    other_kharif_maize_reduc_gw_demand = 0;

    other_kharif_potato_water_req = 0;
    other_kharif_potato_water_demand = 0;
    other_kharif_potato_reduc_gw_demand = 0;

    other_kharif_chillies_water_req = 0;
    other_kharif_chillies_water_demand = 0;
    other_kharif_chillies_reduc_gw_demand = 0;

    other_kharif_cotton_water_req = 0;
    other_kharif_cotton_water_demand = 0;
    other_kharif_cotton_reduc_gw_demand = 0;

    other_kharif_melon_water_req = 0;
    other_kharif_melon_water_demand = 0;
    other_kharif_melon_reduc_gw_demand = 0;

    other_kharif_citrus_water_req = 0;
    other_kharif_citrus_water_demand = 0;
    other_kharif_citrus_reduc_gw_demand = 0;

    other_kharif_peanut_water_req = 0;
    other_kharif_peanut_water_demand = 0;
    other_kharif_peanut_reduc_gw_demand = 0;

    other_kharif_horticulture_water_req = 0;
    other_kharif_horticulture_water_demand = 0;
    other_kharif_horticulture_reduc_gw_demand = 0;




    other_kharif_othercrop_water_req1 = 0;
    other_kharif_othercrop_waterdemand1 = 0;
    other_kharif_othercrop_reduction_gw_demand1 = 0;

    other_kharif_othercrop_water_req2 = 0;
    other_kharif_othercrop_waterdemand2 = 0;
    other_kharif_othercrop_reduction_gw_demand2 = 0;

    other_kharif_othercrop_water_req3 = 0;
    other_kharif_othercrop_waterdemand3 = 0;
    other_kharif_othercrop_reduction_gw_demand3 = 0;


    other_kharif_othercrop_water_req4 = 0;
    other_kharif_othercrop_waterdemand4 = 0;
    other_kharif_othercrop_reduction_gw_demand4 = 0;

    other_kharif_othercrop_water_req5 = 0;
    other_kharif_othercrop_waterdemand5 = 0;
    other_kharif_othercrop_reduction_gw_demand5 = 0

    //other_kharif_othercrop_water_req = 0;
    //other_kharif_othercrop_gw_waterdemand = 0;
    //other_kharif_othercrop_reduc_gw_demand = 0;

    var Total_Water_Demand_for_Kharif_Crops_Other_measure = 0;
    var Total_Reduction_in_ground_water_demand_Kharif = 0;


    //Other

    other_kharif_othercrop_water_req1 = $('#other_kharif_othercrop_water_req1').val();
    if (typeof other_kharif_othercrop_water_req1 == 'undefined') {
        other_kharif_othercrop_water_req1 = 0;
    }
    var other_kharif_othercrop_area1 = $('#other_kharif_othercrop_area1').val();
    if (typeof other_kharif_othercrop_area1 == 'undefined') {
        other_kharif_othercrop_area1 = 0;
    }
    if (other_kharif_othercrop_area1 != "") {
        if (other_kharif_othercrop_water_req1 != "") {
            other_kharif_othercrop_waterdemand1 = parseInt(other_kharif_othercrop_area1) * parseFloat(other_kharif_othercrop_water_req1) * 0.001;
        }
        else {
            other_kharif_othercrop_waterdemand1 = parseInt(other_kharif_othercrop_area1) * 0 * 0.001;
        }

        var other_kharif_othercrop_water_saving1 = $('#other_kharif_othercrop_water_saving1').val();
        if (typeof other_kharif_othercrop_water_saving1 == 'undefined') {
            other_kharif_othercrop_water_saving1 = 0;
        }
        if (other_kharif_othercrop_water_saving1 == "") {
            other_kharif_othercrop_water_saving1 = 0;
        }
        other_kharif_othercrop_reduction_gw_demand1 = parseFloat(other_kharif_othercrop_waterdemand1) * parseFloat(other_kharif_othercrop_water_saving1) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_othercrop_waterdemand1) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + other_kharif_othercrop_reduction_gw_demand1;

        //Kharif_Paddy_SavingValue

    }

    other_kharif_othercrop_water_req2 = $('#other_kharif_othercrop_water_req2').val();
    if (typeof other_kharif_othercrop_water_req2 == 'undefined') {
        other_kharif_othercrop_water_req2 = 0;
    }
    var other_kharif_othercrop_area2 = $('#other_kharif_othercrop_area2').val();
    if (typeof other_kharif_othercrop_area2 == 'undefined') {
        other_kharif_othercrop_area2 = 0;
    }
    if (other_kharif_othercrop_area2 != "") {
        if (other_kharif_othercrop_water_req2 != "") {
            other_kharif_othercrop_waterdemand2 = parseInt(other_kharif_othercrop_area2) * parseFloat(other_kharif_othercrop_water_req2) * 0.001;
        }
        else {
            other_kharif_othercrop_waterdemand2 = parseInt(other_kharif_othercrop_area2) * 0 * 0.001;
        }

        var other_kharif_othercrop_water_saving2 = $('#other_kharif_othercrop_water_saving2').val();
        if (typeof other_kharif_othercrop_water_saving2 == 'undefined') {
            other_kharif_othercrop_water_saving2 = 0;
        }
        if (other_kharif_othercrop_water_saving2 == "") {
            other_kharif_othercrop_water_saving2 = 0;
        }
        other_kharif_othercrop_reduction_gw_demand2 = parseFloat(other_kharif_othercrop_waterdemand2) * parseFloat(other_kharif_othercrop_water_saving2) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_othercrop_waterdemand2) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + other_kharif_othercrop_reduction_gw_demand2;

        //Kharif_Paddy_SavingValue

    }
    other_kharif_othercrop_water_req3 = $('#other_kharif_othercrop_water_req3').val();
    if (typeof other_kharif_othercrop_water_req3 == 'undefined') {
        other_kharif_othercrop_water_req3 = 0;
    }
    var other_kharif_othercrop_area3 = $('#other_kharif_othercrop_area3').val();
    if (typeof other_kharif_othercrop_area3 == 'undefined') {
        other_kharif_othercrop_area3 = 0;
    }
    if (other_kharif_othercrop_area3 != "") {
        if (other_kharif_othercrop_water_req3 != "") {
            other_kharif_othercrop_waterdemand3 = parseInt(other_kharif_othercrop_area3) * parseFloat(other_kharif_othercrop_water_req3) * 0.001;
        }
        else {
            other_kharif_othercrop_waterdemand3 = parseInt(other_kharif_othercrop_area3) * 0 * 0.001;
        }

        var other_kharif_othercrop_water_saving3 = $('#other_kharif_othercrop_water_saving3').val();
        if (typeof other_kharif_othercrop_water_saving3 == 'undefined') {
            other_kharif_othercrop_water_saving3 = 0;
        }
        if (other_kharif_othercrop_water_saving3 == "") {
            other_kharif_othercrop_water_saving3 = 0;
        }
        other_kharif_othercrop_reduction_gw_demand3 = parseFloat(other_kharif_othercrop_waterdemand3) * parseFloat(other_kharif_othercrop_water_saving3) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_othercrop_waterdemand3) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + other_kharif_othercrop_reduction_gw_demand3;

        //Kharif_Paddy_SavingValue

    }

    other_kharif_othercrop_water_req4 = $('#other_kharif_othercrop_water_req4').val();
    if (typeof other_kharif_othercrop_water_req4 == 'undefined') {
        other_kharif_othercrop_water_req4 = 0;
    }
    var other_kharif_othercrop_area4 = $('#other_kharif_othercrop_area4').val();
    if (typeof other_kharif_othercrop_area4 == 'undefined') {
        other_kharif_othercrop_area4 = 0;
    }
    if (other_kharif_othercrop_area4 != "") {
        if (other_kharif_othercrop_water_req4 != "") {
            other_kharif_othercrop_waterdemand4 = parseInt(other_kharif_othercrop_area4) * parseFloat(other_kharif_othercrop_water_req4) * 0.001;
        }
        else {
            other_kharif_othercrop_waterdemand4 = parseInt(other_kharif_othercrop_area4) * 0 * 0.001;
        }

        var other_kharif_othercrop_water_saving4 = $('#other_kharif_othercrop_water_saving4').val();
        if (typeof other_kharif_othercrop_water_saving4 == 'undefined') {
            other_kharif_othercrop_water_saving4 = 0;
        }
        if (other_kharif_othercrop_water_saving4 == "") {
            other_kharif_othercrop_water_saving4 = 0;
        }
        other_kharif_othercrop_reduction_gw_demand4 = parseFloat(other_kharif_othercrop_waterdemand4) * parseFloat(other_kharif_othercrop_water_saving4) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_othercrop_waterdemand4) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + other_kharif_othercrop_reduction_gw_demand4;

        //Kharif_Paddy_SavingValue

    }
    other_kharif_othercrop_water_req5 = $('#other_kharif_othercrop_water_req5').val();
    if (typeof other_kharif_othercrop_water_req5 == 'undefined') {
        other_kharif_othercrop_water_req5 = 0;
    }
    var other_kharif_othercrop_area5 = $('#other_kharif_othercrop_area5').val();
    if (typeof other_kharif_othercrop_area5 == 'undefined') {
        other_kharif_othercrop_area5 = 0;
    }
    if (other_kharif_othercrop_area5 != "") {
        if (other_kharif_othercrop_water_req5 != "") {
            other_kharif_othercrop_waterdemand5 = parseInt(other_kharif_othercrop_area5) * parseFloat(other_kharif_othercrop_water_req5) * 0.001;
        }
        else {
            other_kharif_othercrop_waterdemand5 = parseInt(other_kharif_othercrop_area5) * 0 * 0.001;
        }

        var other_kharif_othercrop_water_saving5 = $('#other_kharif_othercrop_water_saving5').val();
        if (typeof other_kharif_othercrop_water_saving5 == 'undefined') {
            other_kharif_othercrop_water_saving5 = 0;
        }
        if (other_kharif_othercrop_water_saving5 == "") {
            other_kharif_othercrop_water_saving5 = 0;
        }
        other_kharif_othercrop_reduction_gw_demand5 = parseFloat(other_kharif_othercrop_waterdemand5) * parseFloat(other_kharif_othercrop_water_saving5) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_othercrop_waterdemand5) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + other_kharif_othercrop_reduction_gw_demand5;

        //Kharif_Paddy_SavingValue

    }






    //Paddy

    other_kharif_paddy_water_req = $('#other_kharif_paddy_water_req').val();
    var drip_kharif_Paddy_UserVale = $('#Other_measure_kharif_Paddy_UserVale').val();
    if (drip_kharif_Paddy_UserVale != "") {
        if (other_kharif_paddy_water_req != "") {
            other_kharif_paddy_water_demand = parseInt(drip_kharif_Paddy_UserVale) * parseFloat(other_kharif_paddy_water_req) * 0.001;
        }
        else {
            other_kharif_paddy_water_demand = parseInt(drip_kharif_Paddy_UserVale) * 0 * 0.001;
        }

        var other_kharif_paddy_water_saving = $('#other_kharif_paddy_water_saving').val();
        if (other_kharif_paddy_water_saving == "") {
            other_kharif_paddy_water_saving = 0;
        }
        other_kharif_paddy_reduc_gw_demand = parseFloat(other_kharif_paddy_water_demand) * parseFloat(other_kharif_paddy_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_paddy_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + other_kharif_paddy_reduc_gw_demand;

        //Kharif_Paddy_SavingValue

    }


    //Ragi

    var drip_kharif_Ragi_UserVale = $('#Other_measure_kharif_Ragi_UserVale').val();
    other_kharif_ragi_water_req = $('#other_kharif_ragi_water_req').val();
    if (drip_kharif_Ragi_UserVale != "") {

        if (other_kharif_ragi_water_req != "") {
            other_kharif_ragi_water_demand = parseInt(drip_kharif_Ragi_UserVale) * parseFloat(other_kharif_ragi_water_req) * 0.001;
        }
        else {
            other_kharif_ragi_water_demand = parseInt(drip_kharif_Ragi_UserVale) * 0 * 0.001;
        }

        var other_kharif_ragi_water_saving = $('#other_kharif_ragi_water_saving').val();
        if (other_kharif_ragi_water_saving == "") {
            other_kharif_ragi_water_saving = 0;
        }
        other_kharif_ragi_reduc_gw_demand = parseFloat(other_kharif_ragi_water_demand) * parseFloat(other_kharif_ragi_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_ragi_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + other_kharif_ragi_reduc_gw_demand;

    }

    //GroundNut

    var GroundNut_Kharif_Value = $('#Other_measure_kharif_GroundNut_UserVale').val();
    other_kharif_groundnut_water_req = $('#other_kharif_groundnut_water_req').val();
    if (GroundNut_Kharif_Value != "") {
        if (other_kharif_groundnut_water_req != "") {
            other_kharif_groundnut_water_demand = parseInt(GroundNut_Kharif_Value) * parseFloat(other_kharif_groundnut_water_req) * 0.001;
        }
        else {
            other_kharif_groundnut_water_demand = parseInt(GroundNut_Kharif_Value) * 0 * 0.001;
        }

        var other_kharif_groundnut_water_saving = $('#other_kharif_groundnut_water_saving').val();
        if (other_kharif_groundnut_water_saving == "") {
            other_kharif_groundnut_water_saving = 0;
        }
        other_kharif_groundnut_reduc_gw_demand = parseFloat(other_kharif_groundnut_water_demand) * parseFloat(other_kharif_groundnut_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_groundnut_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_groundnut_reduc_gw_demand);

    }

    //Sugarcane
    
    other_kharif_sugarcane_water_req = $('#other_kharif_sugarcane_water_req').val();
    var Sugarcane_Paddy_UserValue = $('#Other_measure_kharif_Sugarcane_UserVale').val(); 
    if (Sugarcane_Paddy_UserValue != "") {
        if (other_kharif_sugarcane_water_req != "") {
            other_kharif_sugarcane_water_demand = parseInt(Sugarcane_Paddy_UserValue) * parseFloat(other_kharif_sugarcane_water_req) * 0.001;
        }
        else {
            other_kharif_sugarcane_water_demand = parseInt(Sugarcane_Paddy_UserValue) * 0 * 0.001;
        }

        var other_kharif_sugarcane_water_saving = $('#other_kharif_sugarcane_water_saving').val();
        if (other_kharif_sugarcane_water_saving == "") {
            other_kharif_sugarcane_water_saving = 0;
        }
        other_kharif_sugarcane_reduc_gw_demand = parseFloat(other_kharif_sugarcane_water_demand) * parseFloat(other_kharif_sugarcane_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_sugarcane_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_sugarcane_reduc_gw_demand);

    }


    //Tomato
    other_kharif_tomoto_water_req = $('#other_kharif_tomoto_water_req').val();
    var Tomato_Kharif_Value = $('#Other_measure_kharif_Tomato_UserVale').val();
    if (Tomato_Kharif_Value != "") {
        if (other_kharif_tomoto_water_req != "") {
            other_kharif_tomoto_water_demand = parseInt(Tomato_Kharif_Value) * parseFloat(other_kharif_tomoto_water_req) * 0.001;
        }
        else {
            other_kharif_tomoto_water_demand = parseInt(Tomato_Kharif_Value) * 0 * 0.001;
        }

        var other_kharif_tomoto_water_saving = $('#other_kharif_tomoto_water_saving').val();
        if (other_kharif_tomoto_water_saving == "") {
            other_kharif_tomoto_water_saving = 0;
        }
        other_kharif_tomoto_reduc_gw_demand = parseFloat(other_kharif_tomoto_water_demand) * parseFloat(other_kharif_tomoto_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_tomoto_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_tomoto_reduc_gw_demand);

    }




    //Cabbage
    //other_kharif_cabbage_water_req = $('#other_kharif_cabbage_water_req').val();
    //var Cabbage_Kharif_Value = $('#Other_measure_kharif_Cabbage_UserVale').val();
    //if (Cabbage_Kharif_Value != "") {
    //    if (other_kharif_cabbage_water_req != "") {
    //        other_kharif_cabbage_water_demand = parseInt(Cabbage_Kharif_Value) * parseFloat(other_kharif_cabbage_water_req) * 0.001;
    //    }
    //    else {
    //        other_kharif_cabbage_water_demand = parseInt(Cabbage_Kharif_Value) * 0 * 0.001;
    //    }

    //    var other_kharif_cabbage_water_saving = $('#other_kharif_cabbage_water_saving').val();
    //    if (other_kharif_cabbage_water_saving == "") {
    //        other_kharif_cabbage_water_saving = 0;
    //    }
    //    other_kharif_cabbage_reduc_gw_demand = parseFloat(other_kharif_cabbage_water_demand) * parseFloat(other_kharif_cabbage_water_saving) * 0.01;
    //    Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_cabbage_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
    //    Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_cabbage_reduc_gw_demand);

    //}

    ////Beans
    //other_kharif_beans_water_req = $('#other_kharif_beans_water_req').val();
    //var Beans_Kharif_Value = $('#Other_measure_kharif_Beans_UserVale').val();
    //if (Beans_Kharif_Value != "") {
    //    if (other_kharif_beans_water_req != "") {
    //        other_kharif_beans_water_demand = parseInt(Beans_Kharif_Value) * parseFloat(other_kharif_beans_water_req) * 0.001;
    //    }
    //    else {
    //        other_kharif_beans_water_demand = parseInt(Beans_Kharif_Value) * 0 * 0.001;
    //    }

    //    var other_kharif_beans_water_saving = $('#other_kharif_beans_water_saving').val();
    //    if (other_kharif_beans_water_saving == "") {
    //        other_kharif_beans_water_saving = 0;
    //    }
    //    other_kharif_beans_reduc_gw_demand = parseFloat(other_kharif_beans_water_demand) * parseFloat(other_kharif_cabbage_water_saving) * 0.01;
    //    Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_beans_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
    //    Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_beans_reduc_gw_demand);

    //}

    //Floriculture
    other_kharif_floriculture_water_req = $('#other_kharif_floriculture_water_req').val();
    var Floriculture_Kharif_Value = $('#Other_measure_kharif_Floriculture_UserVale').val();
    if (Floriculture_Kharif_Value != "") {
        if (other_kharif_floriculture_water_req != "") {
            other_kharif_floriculture_water_demand = parseInt(Floriculture_Kharif_Value) * parseFloat(other_kharif_floriculture_water_req) * 0.001;
        }
        else {
            other_kharif_floriculture_water_demand = parseInt(Floriculture_Kharif_Value) * 0 * 0.001;
        }

        var other_kharif_floriculture_water_saving = $('#other_kharif_floriculture_water_saving').val();
        if (other_kharif_floriculture_water_saving == "") {
            other_kharif_floriculture_water_saving = 0;
        }
        other_kharif_floriculture_reduc_gw_demand = parseFloat(other_kharif_floriculture_water_demand) * parseFloat(other_kharif_floriculture_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_floriculture_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_floriculture_reduc_gw_demand);

    }



    //Sericulture
    other_kharif_sericulture_water_req = $('#other_kharif_sericulture_water_req').val();
    var Sericulture_Kharif_Value = $('#Other_measure_kharif_Sericulture_UserVale').val();
    if (Sericulture_Kharif_Value != "") {
        if (other_kharif_sericulture_water_req != "") {
            other_kharif_sericulture_water_demand = parseInt(Sericulture_Kharif_Value) * parseFloat(other_kharif_sericulture_water_req) * 0.001;
        }
        else {
            other_kharif_sericulture_water_demand = parseInt(Sericulture_Kharif_Value) * 0 * 0.001;
        }

        var other_kharif_sericulture_water_saving = $('#other_kharif_sericulture_water_saving').val();
        if (other_kharif_sericulture_water_saving == "") {
            other_kharif_sericulture_water_saving = 0;
        }
        other_kharif_sericulture_reduc_gw_demand = parseFloat(other_kharif_sericulture_water_demand) * parseFloat(other_kharif_sericulture_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_sericulture_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_sericulture_reduc_gw_demand);

    }




    // Cucmber
    //other_kharif_cucumber_water_req = $('#other_kharif_cucumber_water_req').val();
    //var Cucmber_Kharif_Value = $('#Other_measure_kharif_Cucmber_UserVale').val();
    //if (Cucmber_Kharif_Value != "") {
    //    if (other_kharif_cucumber_water_req != "") {
    //        other_kharif_cucumber_water_demand = parseInt(Cucmber_Kharif_Value) * parseFloat(other_kharif_cucumber_water_req) * 0.001;
    //    }
    //    else {
    //        other_kharif_cucumber_water_demand = parseInt(Cucmber_Kharif_Value) * 0 * 0.001;
    //    }

    //    var other_kharif_cucumber_water_saving = $('#other_kharif_cucumber_water_saving').val();
    //    if (other_kharif_cucumber_water_saving == "") {
    //        other_kharif_cucumber_water_saving = 0;
    //    }
    //    other_kharif_cucumber_reduc_gw_demand = parseFloat(other_kharif_cucumber_water_demand) * parseFloat(other_kharif_cucumber_water_saving) * 0.01;
    //    Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_cucumber_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
    //    Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_cucumber_reduc_gw_demand);

    //}


    ////Banana
    other_kharif_banana_water_req = $('#other_kharif_banana_water_req').val();
    var Banana_Kharif_Value = $('#Other_measure_kharif_Banana_UserVale').val();
    if (Banana_Kharif_Value != "") {
        if (other_kharif_banana_water_req != "") {
            other_kharif_banana_water_demand = parseInt(Banana_Kharif_Value) * parseFloat(other_kharif_banana_water_req) * 0.001;
        }
        else {
            other_kharif_banana_water_demand = parseInt(Banana_Kharif_Value) * 0 * 0.001;
        }

        var other_kharif_banana_water_saving = $('#other_kharif_banana_water_saving').val();
        if (other_kharif_banana_water_saving == "") {
            other_kharif_banana_water_saving = 0;
        }
        other_kharif_banana_reduc_gw_demand = parseFloat(other_kharif_banana_water_demand) * parseFloat(other_kharif_banana_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_banana_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_banana_reduc_gw_demand);

    }

    //Fodder
    other_kharif_fodder_water_req = $('#other_kharif_fodder_water_req').val();
    var Fodder_Kharif_Value = $('#Other_measure_kharif_Fodder_UserVale').val();
    if (Fodder_Kharif_Value != "") {
        if (other_kharif_fodder_water_req != "") {
            other_kharif_fodder_water_demand = parseInt(Fodder_Kharif_Value) * parseFloat(other_kharif_fodder_water_req) * 0.001;
        }
        else {
            other_kharif_fodder_water_demand = parseInt(Fodder_Kharif_Value) * 0 * 0.001;
        }
        var other_kharif_fodder_water_saving = $('#other_kharif_fodder_water_saving').val();
        if (other_kharif_fodder_water_saving == "") {
            other_kharif_fodder_water_saving = 0;
        }
        other_kharif_fodder_reduc_gw_demand = parseFloat(other_kharif_fodder_water_demand) * parseFloat(other_kharif_fodder_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_fodder_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_fodder_reduc_gw_demand);

    }

    //Maize
    other_kharif_maize_water_req = $('#other_kharif_maize_water_req').val();
    var Maize_Kharif_Value = $('#Other_measure_kharif_Maize_UserVale').val();
    if (Maize_Kharif_Value != "") {
        if (other_kharif_maize_water_req != "") {
            other_kharif_maize_water_demand = parseInt(Maize_Kharif_Value) * parseFloat(other_kharif_maize_water_req) * 0.001;
        }
        else {
            other_kharif_maize_water_demand = parseInt(Maize_Kharif_Value) * 0 * 0.001;
        }
        var other_kharif_maize_water_saving = $('#other_kharif_maize_water_saving').val();
        if (other_kharif_maize_water_saving == "") {
            other_kharif_maize_water_saving = 0;
        }
        other_kharif_maize_reduc_gw_demand = parseFloat(other_kharif_maize_water_demand) * parseFloat(other_kharif_maize_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_maize_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_maize_reduc_gw_demand);

    }

    //Potato
    //other_kharif_potato_water_req = $('#other_kharif_potato_water_req').val();
    //var Potato_Kharif_Value = $('#Other_measure_kharif_Potato_UserVale').val();
    //if (Potato_Kharif_Value != "") {
    //    if (other_kharif_potato_water_req != "") {
    //        other_kharif_potato_water_demand = parseInt(Potato_Kharif_Value) * parseFloat(other_kharif_potato_water_req) * 0.001;
    //    }
    //    else {
    //        other_kharif_potato_water_demand = parseInt(Potato_Kharif_Value) * 0 * 0.001;
    //    }
    //    var other_kharif_potato_water_saving = $('#other_kharif_potato_water_saving').val();
    //    if (other_kharif_potato_water_saving == "") {
    //        other_kharif_potato_water_saving = 0;
    //    }
    //    other_kharif_potato_reduc_gw_demand = parseFloat(other_kharif_potato_water_demand) * parseFloat(other_kharif_potato_water_saving) * 0.01;
    //    Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_potato_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
    //    Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_potato_reduc_gw_demand);

    //}


    //Chillies
    other_kharif_chillies_water_req = $('#other_kharif_chillies_water_req').val();
    var Chillies_Kharif_Value = $('#Other_measure_kharif_Chillies_UserVale').val();
    if (Chillies_Kharif_Value != "") {
        if (other_kharif_chillies_water_req != "") {
            other_kharif_chillies_water_demand = parseInt(Chillies_Kharif_Value) * parseFloat(other_kharif_chillies_water_req) * 0.001;
        }
        else {
            other_kharif_chillies_water_demand = parseInt(Chillies_Kharif_Value) * 0 * 0.001;
        }
        var other_kharif_chillies_water_saving = $('#other_kharif_chillies_water_saving').val();
        if (other_kharif_chillies_water_saving == "") {
            other_kharif_chillies_water_saving = 0;
        }
        other_kharif_chillies_reduc_gw_demand = parseFloat(other_kharif_chillies_water_demand) * parseFloat(other_kharif_chillies_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_chillies_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_chillies_reduc_gw_demand);

    }

    //Cotton
    
    other_kharif_cotton_water_req = $('#other_kharif_cotton_water_req').val();
    var Cotton_Kharif_Value = $('#Other_measure_kharif_Cotton_UserVale').val();
    if (Cotton_Kharif_Value != "") {
        if (other_kharif_cotton_water_req != "") {
            other_kharif_cotton_water_demand = parseInt(Cotton_Kharif_Value) * parseFloat(other_kharif_cotton_water_req) * 0.001;
        }
        else {
            other_kharif_cotton_water_demand = parseInt(Cotton_Kharif_Value) * 0 * 0.001;
        }
        var other_kharif_cotton_water_saving = $('#other_kharif_cotton_water_saving').val();
        if (other_kharif_cotton_water_saving == "") {
            other_kharif_cotton_water_saving = 0;
        }
        other_kharif_cotton_reduc_gw_demand = parseFloat(other_kharif_cotton_water_demand) * parseFloat(other_kharif_cotton_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_cotton_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_cotton_reduc_gw_demand);

    }

    //Melon
    other_kharif_melon_water_req = $('#other_kharif_melon_water_req').val();
    var Melon_Kharif_Value = $('#Other_measure_kharif_Melon_UserVale').val();
    if (Melon_Kharif_Value != "") {
        if (other_kharif_melon_water_req != "") {
            other_kharif_melon_water_demand = parseInt(Melon_Kharif_Value) * parseFloat(other_kharif_melon_water_req) * 0.001;
        }
        else {
            other_kharif_melon_water_demand = parseInt(Melon_Kharif_Value) * 0 * 0.001;
        }
        var other_kharif_melon_water_saving = $('#other_kharif_melon_water_saving').val();
        if (other_kharif_melon_water_saving == "") {
            other_kharif_melon_water_saving = 0;
        }
        other_kharif_melon_reduc_gw_demand = parseFloat(other_kharif_melon_water_demand) * parseFloat(other_kharif_melon_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_melon_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_melon_reduc_gw_demand);

    }




    //Citrus
    other_kharif_citrus_water_req = $('#other_kharif_citrus_water_req').val();
    var Citrus_Kharif_Value = $('#Other_measure_kharif_Citrus_UserVale').val();
    if (Citrus_Kharif_Value != "") {
        if (other_kharif_citrus_water_req != "") {
            other_kharif_citrus_water_demand = parseInt(Citrus_Kharif_Value) * parseFloat(other_kharif_citrus_water_req) * 0.001;
        }
        else {
            other_kharif_citrus_water_demand = parseInt(Citrus_Kharif_Value) * 0 * 0.001;
        }
        var other_kharif_citrus_water_saving = $('#other_kharif_citrus_water_saving').val();
        if (other_kharif_citrus_water_saving == "") {
            other_kharif_citrus_water_saving = 0;
        }
        other_kharif_citrus_reduc_gw_demand = parseFloat(other_kharif_citrus_water_demand) * parseFloat(other_kharif_citrus_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_citrus_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_citrus_reduc_gw_demand);

    }

    // Peanut
    //other_kharif_peanut_water_req = $('#other_kharif_peanut_water_req').val();
    //var Peanut_Kharif_Value = $('#Other_measure_kharif_Peanut_UserVale').val();
    //if (Peanut_Kharif_Value != "") {
    //    if (other_kharif_peanut_water_req != "") {
    //        other_kharif_peanut_water_demand = parseInt(Peanut_Kharif_Value) * parseFloat(other_kharif_peanut_water_req) * 0.001;
    //    }
    //    else {
    //        other_kharif_peanut_water_demand = parseInt(Peanut_Kharif_Value) * 0 * 0.001;
    //    }
    //    var other_kharif_peanut_water_saving = $('#other_kharif_peanut_water_saving').val();
    //    if (other_kharif_peanut_water_saving == "") {
    //        other_kharif_peanut_water_saving = 0;
    //    }
    //    other_kharif_peanut_reduc_gw_demand = parseFloat(other_kharif_peanut_water_demand) * parseFloat(other_kharif_peanut_water_saving) * 0.01;
    //    Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_peanut_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
    //    Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_peanut_reduc_gw_demand);

    //}


    //Horticulture
    other_kharif_horticulture_water_req = $('#other_kharif_horticulture_water_req').val();
    var Horticulture_Kharif_Value = $('#Other_measure_kharif_Horticulture_UserVale').val();

    if (Horticulture_Kharif_Value != "") {
        if (other_kharif_horticulture_water_req != "") {
            other_kharif_horticulture_water_demand = parseInt(Horticulture_Kharif_Value) * parseFloat(other_kharif_horticulture_water_req) * 0.001;
        }
        else {
            other_kharif_horticulture_water_demand = parseInt(Horticulture_Kharif_Value) * 0 * 0.001;
        }
        var other_kharif_horticulture_water_saving = $('#other_kharif_horticulture_water_saving').val();
        if (other_kharif_horticulture_water_saving == "") {
            other_kharif_horticulture_water_saving = 0;
        }
        other_kharif_horticulture_reduc_gw_demand = parseFloat(other_kharif_horticulture_water_demand) * parseFloat(other_kharif_horticulture_water_saving) * 0.01;
        Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_horticulture_water_demand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
        Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_horticulture_reduc_gw_demand);

    }


    //other crop
    //other_kharif_othercrop_water_req = $('#other_kharif_othercrop_water_req').val();
    //var other_kharif_othercrop_area = $('#other_kharif_othercrop_area').val();

    //if (other_kharif_othercrop_area != "") {
    //    if (other_kharif_othercrop_water_req != "") {
    //        other_kharif_othercrop_gw_waterdemand = parseInt(other_kharif_othercrop_area) * parseFloat(other_kharif_othercrop_water_req) * 0.001;
    //    }
    //    else {
    //        other_kharif_othercrop_gw_waterdemand = parseInt(other_kharif_othercrop_area) * 0 * 0.001;
    //    }
    //    var other_kharif_othercrop_water_saving = $('#other_kharif_othercrop_water_saving').val();
    //    if (other_kharif_othercrop_water_saving == "") {
    //        other_kharif_othercrop_water_saving = 0;
    //    }
    //    other_kharif_othercrop_reduc_gw_demand = parseFloat(other_kharif_othercrop_gw_waterdemand) * parseFloat(other_kharif_othercrop_water_saving) * 0.01;
    //    Total_Water_Demand_for_Kharif_Crops_Other_measure = parseFloat(other_kharif_othercrop_gw_waterdemand) + Total_Water_Demand_for_Kharif_Crops_Other_measure;
    //    Total_Reduction_in_ground_water_demand_Kharif = Total_Reduction_in_ground_water_demand_Kharif + parseFloat(other_kharif_othercrop_reduc_gw_demand);

    //}

    $('#Total_Water_Demand_for_Kharif_Crops_Other_measure').text(Total_Water_Demand_for_Kharif_Crops_Other_measure.toFixed(2));
    $('#Total_Reduction_in_ground_water_demand_Kharif').text(parseFloat(Total_Reduction_in_ground_water_demand_Kharif).toFixed(2));



    $('#Other_measure_Kharif_Water_demand').text(Total_Water_Demand_for_Kharif_Crops_Other_measure.toFixed(2));
    $('#Other_measure_Kharif_Water_Save').text(parseFloat(Total_Reduction_in_ground_water_demand_Kharif).toFixed(2));



    var Total_Reduction_in_ground_water_demand_Kharif = $('#Total_Reduction_in_ground_water_demand_Kharif').text();;

    if (Total_Reduction_in_ground_water_demand_Kharif == "") {
        Total_Reduction_in_ground_water_demand_Kharif = 0;
    }

    var Total_Reduction_in_ground_water_demand_Rabi = $('#Total_Reduction_in_ground_water_demand_Rabi').text();;

    if (Total_Reduction_in_ground_water_demand_Rabi == "") {
        Total_Reduction_in_ground_water_demand_Rabi = 0;
    }

    var Total_Reduction_in_ground_water_demand_Summer = $('#Total_Reduction_in_ground_water_demand_Summer').text();;

    if (Total_Reduction_in_ground_water_demand_Summer == "") {
        Total_Reduction_in_ground_water_demand_Summer = 0;
    }

    var TotalAnnual_Reduction_Other_measure = parseFloat(Total_Reduction_in_ground_water_demand_Kharif) + parseFloat(Total_Reduction_in_ground_water_demand_Rabi) + parseFloat(Total_Reduction_in_ground_water_demand_Summer);
    $('#TotalAnnual_Reduction_Other_measure').text(TotalAnnual_Reduction_Other_measure.toFixed(2));


}

var other_rabi_sericulture_water_req = 0;
var other_rabi_sericulture_water_demand = 0;
var other_rabi_sericulture_reduc_gw_demand = 0;

var other_rabi_tomoto_water_req = 0;
var other_rabi_tomoto_water_demand = 0;
var other_rabi_tomoto_reduc_gw_demand = 0;

var other_rabi_cabbage_water_req = 0;
var other_rabi_cabbage_water_demand = 0;
var other_rabi_cabbage_reduc_gw_demand = 0;

var other_rabi_beans_water_req = 0;
var other_rabi_beans_water_demand = 0;
var other_rabi_beans_reduc_gw_demand = 0;

var other_rabi_floriculture_water_req = 0;
var other_rabi_floriculture_water_demand = 0;
var other_rabi_floriculture_reduc_gw_demand = 0;

var other_rabi_potato_water_req = 0;
var other_rabi_potato_water_demand = 0;
var other_rabi_potato_reduc_gw_demand = 0;

var other_rabi_cucumber_water_req = 0;
var other_rabi_cucumber_water_demand = 0;
var other_rabi_cucumber_reduc_gw_demand = 0;

var other_rabi_ragi_water_req = 0;
var other_rabi_ragi_water_demand = 0;
var other_rabi_ragi_reduc_gw_demand = 0;

var other_rabi_sugarcane_water_req = 0;
var other_rabi_sugarcane_water_demand = 0;
var other_rabi_sugarcane_reduc_gw_demand = 0;

var other_rabi_maize_water_req = 0;
var other_rabi_maize_water_demand = 0;
var other_rabi_maize_reduc_gw_demand = 0;

var other_rabi_fodder_water_req = 0;
var other_rabi_fodder_water_demand = 0;
var other_rabi_fodder_reduc_gw_demand = 0;

var other_rabi_paddy_water_req = 0;
var other_rabi_paddy_water_demand = 0;
var other_rabi_paddy_reduc_gw_demand = 0;

var other_rabi_alfalfa_water_req = 0;
var other_rabi_alfalfa_water_demand = 0;
var other_rabi_alfalfa_reduc_gw_demand = 0;

var other_rabi_onion_water_req = 0;
var other_rabi_onion_water_demand = 0;
var other_rabi_onion_reduc_gw_demand = 0;

var other_rabi_horticulture_water_req = 0;
var other_rabi_horticulture_water_demand = 0;
var other_rabi_horticulture_reduc_gw_demand = 0;

var other_rabi_sunflower_water_req = 0;
var other_rabi_sunflower_water_demand = 0;
var other_rabi_sunflower_reduc_gw_demand = 0;


var other_rabi_othercrop_water_req1 = 0;
var other_rabi_othercrop_waterdemand1 = 0;
var other_rabi_othercrop_reduction_gw_demand1 = 0;

var other_rabi_othercrop_water_req2 = 0;
var other_rabi_othercrop_waterdemand2 = 0;
var other_rabi_othercrop_reduction_gw_demand2 = 0;

var other_rabi_othercrop_water_req3 = 0;
var other_rabi_othercrop_waterdemand3 = 0;
var other_rabi_othercrop_reduction_gw_demand3 = 0;


var other_rabi_othercrop_water_req4 = 0;
var other_rabi_othercrop_waterdemand4 = 0;
var other_rabi_othercrop_reduction_gw_demand4 = 0;

var other_rabi_othercrop_water_req5 = 0;
var other_rabi_othercrop_waterdemand5 = 0;
var other_rabi_othercrop_reduction_gw_demand5 = 0

function Other_measure_Rabi_WaterRequire() {
    other_rabi_sericulture_water_req = 0;
    other_rabi_sericulture_water_demand = 0;
    other_rabi_sericulture_reduc_gw_demand = 0;

    other_rabi_tomoto_water_req = 0;
    other_rabi_tomoto_water_demand = 0;
    other_rabi_tomoto_reduc_gw_demand = 0;

    other_rabi_cabbage_water_req = 0;
    other_rabi_cabbage_water_demand = 0;
    other_rabi_cabbage_reduc_gw_demand = 0;

    other_rabi_beans_water_req = 0;
    other_rabi_beans_water_demand = 0;
    other_rabi_beans_reduc_gw_demand = 0;

    other_rabi_floriculture_water_req = 0;
    other_rabi_floriculture_water_demand = 0;
    other_rabi_floriculture_reduc_gw_demand = 0;

    other_rabi_potato_water_req = 0;
    other_rabi_potato_water_demand = 0;
    other_rabi_potato_reduc_gw_demand = 0;

    other_rabi_cucumber_water_req = 0;
    other_rabi_cucumber_water_demand = 0;
    other_rabi_cucumber_reduc_gw_demand = 0;

    other_rabi_ragi_water_req = 0;
    other_rabi_ragi_water_demand = 0;
    other_rabi_ragi_reduc_gw_demand = 0;

    other_rabi_sugarcane_water_req = 0;
    other_rabi_sugarcane_water_demand = 0;
    other_rabi_sugarcane_reduc_gw_demand = 0;

    other_rabi_maize_water_req = 0;
    other_rabi_maize_water_demand = 0;
    other_rabi_maize_reduc_gw_demand = 0;

    other_rabi_fodder_water_req = 0;
    other_rabi_fodder_water_demand = 0;
    other_rabi_fodder_reduc_gw_demand = 0;

    other_rabi_paddy_water_req = 0;
    other_rabi_paddy_water_demand = 0;
    other_rabi_paddy_reduc_gw_demand = 0;

    other_rabi_alfalfa_water_req = 0;
    other_rabi_alfalfa_water_demand = 0;
    other_rabi_alfalfa_reduc_gw_demand = 0;

    other_rabi_onion_water_req = 0;
    other_rabi_onion_water_demand = 0;
    other_rabi_onion_reduc_gw_demand = 0;

    other_rabi_horticulture_water_req = 0;
    other_rabi_horticulture_water_demand = 0;
    other_rabi_horticulture_reduc_gw_demand = 0;

    other_rabi_sunflower_water_req = 0;
    other_rabi_sunflower_water_demand = 0;
    other_rabi_sunflower_reduc_gw_demand = 0;

    //other_rabi_othercrop_water_req = 0;
    //other_rabi_othercrop_gw_waterdemand = 0;
    //other_rabi_othercrop_reduc_gw_demand = 0;


    other_rabi_othercrop_water_req1 = 0;
    other_rabi_othercrop_waterdemand1 = 0;
    other_rabi_othercrop_reduction_gw_demand1 = 0;

    other_rabi_othercrop_water_req2 = 0;
    other_rabi_othercrop_waterdemand2 = 0;
    other_rabi_othercrop_reduction_gw_demand2 = 0;

    other_rabi_othercrop_water_req3 = 0;
    other_rabi_othercrop_waterdemand3 = 0;
    other_rabi_othercrop_reduction_gw_demand3 = 0;


    other_rabi_othercrop_water_req4 = 0;
    other_rabi_othercrop_waterdemand4 = 0;
    other_rabi_othercrop_reduction_gw_demand4 = 0;

    other_rabi_othercrop_water_req5 = 0;
    other_rabi_othercrop_waterdemand5 = 0;
    other_rabi_othercrop_reduction_gw_demand5 = 0

    var Other_measure_Total_Water_Demand_for_Rabi_Crops = 0;
    var Total_Reduction_in_ground_water_demand_Rabi = 0;

    // Other


    other_rabi_othercrop_water_req1 = $('#other_rabi_othercrop_water_req1').val();
    if (typeof other_rabi_othercrop_water_req1 == 'undefined') {
        other_rabi_othercrop_water_req1 = 0;
    }
    var other_rabi_othercrop_area1 = $('#other_rabi_othercrop_area1').val();
    if (typeof other_rabi_othercrop_area1 == 'undefined') {
        other_rabi_othercrop_area1 = 0;
    }
    if (other_rabi_othercrop_area1 != "") {
        if (other_rabi_othercrop_water_req1 != "") {
            other_rabi_othercrop_waterdemand1 = parseInt(other_rabi_othercrop_area1) * parseFloat(other_rabi_othercrop_water_req1) * 0.001;
        }
        else {
            other_rabi_othercrop_waterdemand1 = parseInt(other_rabi_othercrop_area1) * 0 * 0.001;
        }
        var other_rabi_othercrop_water_saving1 = $('#other_rabi_othercrop_water_saving1').val();
        if (typeof other_rabi_othercrop_water_saving1 == 'undefined') {
            other_rabi_othercrop_water_saving1 = 0;
        }
        if (other_rabi_othercrop_water_saving1 == "") {
            other_rabi_othercrop_water_saving1 = 0;
        }
        other_rabi_othercrop_reduction_gw_demand1 = parseFloat(other_rabi_othercrop_waterdemand1) * parseFloat(other_rabi_othercrop_water_saving1) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_othercrop_waterdemand1) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_othercrop_reduction_gw_demand1);

    }

    other_rabi_othercrop_water_req2 = $('#other_rabi_othercrop_water_req2').val();
    if (typeof other_rabi_othercrop_water_req2 == 'undefined') {
        other_rabi_othercrop_water_req2 = 0;
    }
    var other_rabi_othercrop_area2 = $('#other_rabi_othercrop_area2').val();
    if (typeof other_rabi_othercrop_area2 == 'undefined') {
        other_rabi_othercrop_area2 = 0;
    }
    if (other_rabi_othercrop_area2 != "") {
        if (other_rabi_othercrop_water_req2 != "") {
            other_rabi_othercrop_waterdemand2 = parseInt(other_rabi_othercrop_area2) * parseFloat(other_rabi_othercrop_water_req2) * 0.001;
        }
        else {
            other_rabi_othercrop_waterdemand2 = parseInt(other_rabi_othercrop_area2) * 0 * 0.001;
        }
        var other_rabi_othercrop_water_saving2 = $('#other_rabi_othercrop_water_saving2').val();
        if (typeof other_rabi_othercrop_water_saving2 == 'undefined') {
            other_rabi_othercrop_water_saving2 = 0;
        }
        if (other_rabi_othercrop_water_saving2 == "") {
            other_rabi_othercrop_water_saving2 = 0;
        }
        other_rabi_othercrop_reduction_gw_demand2 = parseFloat(other_rabi_othercrop_waterdemand2) * parseFloat(other_rabi_othercrop_water_saving2) * 0.02;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_othercrop_waterdemand2) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_othercrop_reduction_gw_demand2);

    }


    other_rabi_othercrop_water_req3 = $('#other_rabi_othercrop_water_req3').val();
    if (typeof other_rabi_othercrop_water_req3 == 'undefined') {
        other_rabi_othercrop_water_req3 = 0;
    }
    var other_rabi_othercrop_area3 = $('#other_rabi_othercrop_area3').val();
    if (typeof other_rabi_othercrop_area3 == 'undefined') {
        other_rabi_othercrop_area3 = 0;
    }
    if (other_rabi_othercrop_area3 != "") {
        if (other_rabi_othercrop_water_req3 != "") {
            other_rabi_othercrop_waterdemand3 = parseInt(other_rabi_othercrop_area3) * parseFloat(other_rabi_othercrop_water_req3) * 0.001;
        }
        else {
            other_rabi_othercrop_waterdemand3 = parseInt(other_rabi_othercrop_area3) * 0 * 0.001;
        }
        var other_rabi_othercrop_water_saving3 = $('#other_rabi_othercrop_water_saving3').val();
        if (typeof other_rabi_othercrop_water_saving3 == 'undefined') {
            other_rabi_othercrop_water_saving3 = 0;
        }
        if (other_rabi_othercrop_water_saving3 == "") {
            other_rabi_othercrop_water_saving3 = 0;
        }
        other_rabi_othercrop_reduction_gw_demand3 = parseFloat(other_rabi_othercrop_waterdemand3) * parseFloat(other_rabi_othercrop_water_saving3) * 0.03;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_othercrop_waterdemand3) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_othercrop_reduction_gw_demand3);

    }

    other_rabi_othercrop_water_req4 = $('#other_rabi_othercrop_water_req4').val();
    if (typeof other_rabi_othercrop_water_req4 == 'undefined') {
        other_rabi_othercrop_water_req4 = 0;
    }
    var other_rabi_othercrop_area4 = $('#other_rabi_othercrop_area4').val();
    if (typeof other_rabi_othercrop_area4 == 'undefined') {
        other_rabi_othercrop_area4 = 0;
    }
    if (other_rabi_othercrop_area4 != "") {
        if (other_rabi_othercrop_water_req4 != "") {
            other_rabi_othercrop_waterdemand4 = parseInt(other_rabi_othercrop_area4) * parseFloat(other_rabi_othercrop_water_req4) * 0.001;
        }
        else {
            other_rabi_othercrop_waterdemand4 = parseInt(other_rabi_othercrop_area4) * 0 * 0.001;
        }
        var other_rabi_othercrop_water_saving4 = $('#other_rabi_othercrop_water_saving4').val();
        if (typeof other_rabi_othercrop_water_saving4 == 'undefined') {
            other_rabi_othercrop_water_saving4 = 0;
        }
        if (other_rabi_othercrop_water_saving4 == "") {
            other_rabi_othercrop_water_saving4 = 0;
        }
        other_rabi_othercrop_reduction_gw_demand4 = parseFloat(other_rabi_othercrop_waterdemand4) * parseFloat(other_rabi_othercrop_water_saving4) * 0.04;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_othercrop_waterdemand4) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_othercrop_reduction_gw_demand4);

    }

    other_rabi_othercrop_water_req5 = $('#other_rabi_othercrop_water_req5').val();
    if (typeof other_rabi_othercrop_water_req5 == 'undefined') {
        other_rabi_othercrop_water_req5 = 0;
    }
    var other_rabi_othercrop_area5 = $('#other_rabi_othercrop_area5').val();
    if (typeof other_rabi_othercrop_area5 == 'undefined') {
        other_rabi_othercrop_area5 = 0;
    }
    if (other_rabi_othercrop_area5 != "") {
        if (other_rabi_othercrop_water_req5 != "") {
            other_rabi_othercrop_waterdemand5 = parseInt(other_rabi_othercrop_area5) * parseFloat(other_rabi_othercrop_water_req5) * 0.001;
        }
        else {
            other_rabi_othercrop_waterdemand5 = parseInt(other_rabi_othercrop_area5) * 0 * 0.001;
        }
        var other_rabi_othercrop_water_saving5 = $('#other_rabi_othercrop_water_saving5').val();
        if (typeof other_rabi_othercrop_water_saving5 == 'undefined') {
            other_rabi_othercrop_water_saving5 = 0;
        }
        if (other_rabi_othercrop_water_saving5 == "") {
            other_rabi_othercrop_water_saving5 = 0;
        }
        other_rabi_othercrop_reduction_gw_demand5 = parseFloat(other_rabi_othercrop_waterdemand5) * parseFloat(other_rabi_othercrop_water_saving5) * 0.05;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_othercrop_waterdemand5) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_othercrop_reduction_gw_demand5);

    }






    //Sericulture
    other_rabi_sericulture_water_req = $('#other_rabi_sericulture_water_req').val();
    var Sericulture_Rabi_Value = $('#Other_measure_Rabi_Sericulture_UserVale').val();
    if (Sericulture_Rabi_Value != "") {
        if (other_rabi_sericulture_water_req != "") {
            other_rabi_sericulture_water_demand = parseInt(Sericulture_Rabi_Value) * parseFloat(other_rabi_sericulture_water_req) * 0.001;
        }
        else {
            other_rabi_sericulture_water_demand = parseInt(Sericulture_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_sericulture_water_saving = $('#other_rabi_sericulture_water_saving').val();
        if (other_rabi_sericulture_water_saving == "") {
            other_rabi_sericulture_water_saving = 0;
        }
        other_rabi_sericulture_reduc_gw_demand = parseFloat(other_rabi_sericulture_water_demand) * parseFloat(other_rabi_sericulture_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_sericulture_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_sericulture_reduc_gw_demand);

    }


    //Tomota
    other_rabi_tomoto_water_req = $('#other_rabi_tomoto_water_req').val();
    var Tomota_Rabi_Value = $('#Other_measure_Rabi_Tomota_UserVale').val();
    if (Tomota_Rabi_Value != "") {
        if (other_rabi_tomoto_water_req != "") {
            other_rabi_tomoto_water_demand = parseInt(Tomota_Rabi_Value) * parseFloat(other_rabi_tomoto_water_req) * 0.001;
        }
        else {
            other_rabi_tomoto_water_demand = parseInt(Tomota_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_tomoto_water_saving = $('#other_rabi_tomoto_water_saving').val();
        if (other_rabi_tomoto_water_saving == "") {
            other_rabi_tomoto_water_saving = 0;
        }
        other_rabi_tomoto_reduc_gw_demand = parseFloat(other_rabi_tomoto_water_demand) * parseFloat(other_rabi_tomoto_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_tomoto_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_tomoto_reduc_gw_demand);

    }



    //Cabbage
    //other_rabi_cabbage_water_req = $('#other_rabi_cabbage_water_req').val();
    //var Cabbage_Rabi_Value = $('#Other_measure_Rabi_Cabbage_UserVale').val();
    //if (Cabbage_Rabi_Value != "") {
    //    if (other_rabi_cabbage_water_req != "") {
    //        other_rabi_cabbage_water_demand = parseInt(Cabbage_Rabi_Value) * parseFloat(other_rabi_cabbage_water_req) * 0.001;
    //    }
    //    else {
    //        other_rabi_cabbage_water_demand = parseInt(Cabbage_Rabi_Value) * 0 * 0.001;
    //    }
    //    var other_rabi_cabbage_water_saving = $('#other_rabi_cabbage_water_saving').val();
    //    if (other_rabi_cabbage_water_saving == "") {
    //        other_rabi_cabbage_water_saving = 0;
    //    }
    //    other_rabi_cabbage_reduc_gw_demand = parseFloat(other_rabi_cabbage_water_demand) * parseFloat(other_rabi_cabbage_water_saving) * 0.01;
    //    Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_cabbage_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
    //    Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_cabbage_reduc_gw_demand);

    //}


    ////Beans
    //other_rabi_beans_water_req = $('#other_rabi_beans_water_req').val();
    //var Beans_Rabi_Value = $('#Other_measure_Rabi_Beans_UserVale').val();
    //if (Beans_Rabi_Value != "") {
    //    if (other_rabi_beans_water_req != "") {
    //        other_rabi_beans_water_demand = parseInt(Beans_Rabi_Value) * parseFloat(other_rabi_beans_water_req) * 0.001;
    //    }
    //    else {
    //        other_rabi_beans_water_demand = parseInt(Beans_Rabi_Value) * 0 * 0.001;
    //    }
    //    var other_rabi_beans_water_saving = $('#other_rabi_beans_water_saving').val();
    //    if (other_rabi_beans_water_saving == "") {
    //        other_rabi_beans_water_saving = 0;
    //    }
    //    other_rabi_beans_reduc_gw_demand = parseFloat(other_rabi_beans_water_demand) * parseFloat(other_rabi_beans_water_saving) * 0.01;
    //    Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_beans_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
    //    Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_beans_reduc_gw_demand);

    //}



    //Floriculture
    other_rabi_floriculture_water_req = $('#other_rabi_floriculture_water_req').val();
    var Floriculture_Rabi_Value = $('#Other_measure_Rabi_Floriculture_UserVale').val();
    if (Floriculture_Rabi_Value != "") {
        if (other_rabi_floriculture_water_req != "") {
            other_rabi_floriculture_water_demand = parseInt(Floriculture_Rabi_Value) * parseFloat(other_rabi_floriculture_water_req) * 0.001;
        }
        else {
            other_rabi_floriculture_water_demand = parseInt(Floriculture_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_floriculture_water_saving = $('#other_rabi_floriculture_water_saving').val();
        if (other_rabi_floriculture_water_saving == "") {
            other_rabi_floriculture_water_saving = 0;
        }
        other_rabi_floriculture_reduc_gw_demand = parseFloat(other_rabi_floriculture_water_demand) * parseFloat(other_rabi_floriculture_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_floriculture_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_floriculture_reduc_gw_demand);

    }



    //Potato
    //other_rabi_potato_water_req = $('#other_rabi_potato_water_req').val();
    //var Potato_Rabi_Value = $('#Other_measure_Rabi_Potato_UserVale').val();
    //if (Potato_Rabi_Value != "") {
    //    if (other_rabi_potato_water_req != "") {
    //        other_rabi_potato_water_demand = parseInt(Potato_Rabi_Value) * parseFloat(other_rabi_potato_water_req) * 0.001;
    //    }
    //    else {
    //        other_rabi_potato_water_demand = parseInt(Potato_Rabi_Value) * 0 * 0.001;
    //    }
    //    var other_rabi_potato_water_saving = $('#other_rabi_potato_water_saving').val();
    //    if (other_rabi_potato_water_saving == "") {
    //        other_rabi_potato_water_saving = 0;
    //    }
    //    other_rabi_potato_reduc_gw_demand = parseFloat(other_rabi_potato_water_demand) * parseFloat(other_rabi_potato_water_saving) * 0.01;
    //    Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_potato_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
    //    Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_potato_reduc_gw_demand);

    //}

    ////Cucumber
    //other_rabi_cucumber_water_req = $('#other_rabi_cucumber_water_req').val();
    //var Cucumber_Rabi_Value = $('#Other_measure_Rabi_Cucumber_UserVale').val();
    //if (Cucumber_Rabi_Value != "") {
    //    if (other_rabi_cucumber_water_req != "") {
    //        other_rabi_cucumber_water_demand = parseInt(Cucumber_Rabi_Value) * parseFloat(other_rabi_cucumber_water_req) * 0.001;
    //    }
    //    else {
    //        other_rabi_cucumber_water_demand = parseInt(Cucumber_Rabi_Value) * 0 * 0.001;
    //    }
    //    var other_rabi_cucumber_water_saving = $('#other_rabi_cucumber_water_saving').val();
    //    if (other_rabi_cucumber_water_saving == "") {
    //        other_rabi_cucumber_water_saving = 0;
    //    }
    //    other_rabi_cucumber_reduc_gw_demand = parseFloat(other_rabi_cucumber_water_demand) * parseFloat(other_rabi_cucumber_water_saving) * 0.01;
    //    Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_cucumber_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
    //    Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_cucumber_reduc_gw_demand);

    //}

    //Ragi
    other_rabi_ragi_water_req = $('#other_rabi_ragi_water_req').val();
    var Ragi_Rabi_Value = $('#Other_measure_Rabi_Ragi_UserVale').val();
    if (Ragi_Rabi_Value != "") {
        if (other_rabi_ragi_water_req != "") {
            other_rabi_ragi_water_demand = parseInt(Ragi_Rabi_Value) * parseFloat(other_rabi_ragi_water_req) * 0.001;
        }
        else {
            other_rabi_ragi_water_demand = parseInt(Ragi_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_ragi_water_saving = $('#other_rabi_ragi_water_saving').val();
        if (other_rabi_ragi_water_saving == "") {
            other_rabi_ragi_water_saving = 0;
        }
        other_rabi_ragi_reduc_gw_demand = parseFloat(other_rabi_ragi_water_demand) * parseFloat(other_rabi_ragi_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_ragi_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_ragi_reduc_gw_demand);

    }

    //Sugarcane
    other_rabi_sugarcane_water_req = $('#other_rabi_sugarcane_water_req').val();
    var Sugarcane_Rabi_Value = $('#Other_measure_Rabi_Sugarcane_UserVale').val();
    if (Sugarcane_Rabi_Value != "") {
        if (other_rabi_sugarcane_water_req != "") {
            other_rabi_sugarcane_water_demand = parseInt(Sugarcane_Rabi_Value) * parseFloat(other_rabi_sugarcane_water_req) * 0.001;
        }
        else {
            other_rabi_sugarcane_water_demand = parseInt(Sugarcane_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_sugarcane_water_saving = $('#other_rabi_sugarcane_water_saving').val();
        if (other_rabi_sugarcane_water_saving == "") {
            other_rabi_sugarcane_water_saving = 0;
        }
        other_rabi_sugarcane_reduc_gw_demand = parseFloat(other_rabi_sugarcane_water_demand) * parseFloat(other_rabi_sugarcane_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_sugarcane_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_sugarcane_reduc_gw_demand);
    }

    //Maize
    other_rabi_maize_water_req = $('#other_rabi_maize_water_req').val();
    var Maize_Rabi_Value = $('#Other_measure_Rabi_Maize_UserVale').val();
    if (Maize_Rabi_Value != "") {
        if (other_rabi_maize_water_req != "") {
            other_rabi_maize_water_demand = parseInt(Maize_Rabi_Value) * parseFloat(other_rabi_maize_water_req) * 0.001;
        }
        else {
            other_rabi_maize_water_demand = parseInt(Maize_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_maize_water_saving = $('#other_rabi_maize_water_saving').val();
        if (other_rabi_maize_water_saving == "") {
            other_rabi_maize_water_saving = 0;
        }
        other_rabi_maize_reduc_gw_demand = parseFloat(other_rabi_maize_water_demand) * parseFloat(other_rabi_maize_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_maize_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_maize_reduc_gw_demand);
    }

    //Fodder
    other_rabi_fodder_water_req = $('#other_rabi_fodder_water_req').val();
    var Fodder_Rabi_Value = $('#Other_measure_Rabi_Fodder_UserVale').val();
    if (Fodder_Rabi_Value != "") {
        if (other_rabi_fodder_water_req != "") {
            other_rabi_fodder_water_demand = parseInt(Fodder_Rabi_Value) * parseFloat(other_rabi_fodder_water_req) * 0.001;
        }
        else {
            other_rabi_fodder_water_demand = parseInt(Fodder_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_fodder_water_saving = $('#other_rabi_fodder_water_saving').val();
        if (other_rabi_fodder_water_saving == "") {
            other_rabi_fodder_water_saving = 0;
        }
        other_rabi_fodder_reduc_gw_demand = parseFloat(other_rabi_fodder_water_demand) * parseFloat(other_rabi_fodder_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_fodder_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_fodder_reduc_gw_demand);
    }

    //Paddy
    other_rabi_paddy_water_req = $('#other_rabi_paddy_water_req').val();
    var Paddy_Rabi_Value = $('#Other_measure_Rabi_Paddy_UserVale').val();
    if (Paddy_Rabi_Value != "") {
        if (other_rabi_paddy_water_req != "") {
            other_rabi_paddy_water_demand = parseInt(Paddy_Rabi_Value) * parseFloat(other_rabi_paddy_water_req) * 0.001;
        }
        else {
            other_rabi_paddy_water_demand = parseInt(Paddy_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_paddy_water_saving = $('#other_rabi_paddy_water_saving').val();
        if (other_rabi_paddy_water_saving == "") {
            other_rabi_paddy_water_saving = 0;
        }
        other_rabi_paddy_reduc_gw_demand = parseFloat(other_rabi_paddy_water_demand) * parseFloat(other_rabi_paddy_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_paddy_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_paddy_reduc_gw_demand);
    }


    //Alfalfa
    other_rabi_alfalfa_water_req = $('#other_rabi_alfalfa_water_req').val();
    var Alfalfa_Rabi_Value = $('#Other_measure_Rabi_Alfalfa_UserVale').val();
    if (Alfalfa_Rabi_Value != "") {
        if (other_rabi_alfalfa_water_req != "") {
            other_rabi_alfalfa_water_demand = parseInt(Alfalfa_Rabi_Value) * parseFloat(other_rabi_alfalfa_water_req) * 0.001;
        }
        else {
            other_rabi_alfalfa_water_demand = parseInt(Alfalfa_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_alfalfa_water_saving = $('#other_rabi_alfalfa_water_saving').val();
        if (other_rabi_alfalfa_water_saving == "") {
            other_rabi_alfalfa_water_saving = 0;
        }
        other_rabi_alfalfa_reduc_gw_demand = parseFloat(other_rabi_alfalfa_water_demand) * parseFloat(other_rabi_alfalfa_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_alfalfa_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_alfalfa_reduc_gw_demand);
    }


    //Onion
    //other_rabi_onion_water_req = $('#other_rabi_onion_water_req').val();
    //var Onion_Rabi_Value = $('#Other_measure_Rabi_Onion_UserVale').val();
    //if (Onion_Rabi_Value != "") {
    //    if (other_rabi_onion_water_req != "") {
    //        other_rabi_onion_water_demand = parseInt(Onion_Rabi_Value) * parseFloat(other_rabi_onion_water_req) * 0.001;
    //    }
    //    else {
    //        other_rabi_onion_water_demand = parseInt(Onion_Rabi_Value) * 0 * 0.001;
    //    }
    //    var other_rabi_onion_water_saving = $('#other_rabi_onion_water_saving').val();
    //    if (other_rabi_onion_water_saving == "") {
    //        other_rabi_onion_water_saving = 0;
    //    }
    //    other_rabi_onion_reduc_gw_demand = parseFloat(other_rabi_onion_water_demand) * parseFloat(other_rabi_onion_water_saving) * 0.01;
    //    Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_onion_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
    //    Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_onion_reduc_gw_demand);
    //}

    //Hortculture
    other_rabi_horticulture_water_req = $('#other_rabi_horticulture_water_req').val();
    var Hortculture_Rabi_Value = $('#Other_measure_Rabi_Hortculture_UserVale').val();
    if (Hortculture_Rabi_Value != "") {
        if (other_rabi_horticulture_water_req != "") {
            other_rabi_horticulture_water_demand = parseInt(Hortculture_Rabi_Value) * parseFloat(other_rabi_horticulture_water_req) * 0.001;
        }
        else {
            other_rabi_horticulture_water_demand = parseInt(Hortculture_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_horticulture_water_saving = $('#other_rabi_horticulture_water_saving').val();
        if (other_rabi_horticulture_water_saving == "") {
            other_rabi_horticulture_water_saving = 0;
        }
        other_rabi_horticulture_reduc_gw_demand = parseFloat(other_rabi_horticulture_water_demand) * parseFloat(other_rabi_horticulture_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_horticulture_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_horticulture_reduc_gw_demand);
    }

    //Sunflower
    other_rabi_sunflower_water_req = $('#other_rabi_sunflower_water_req').val();
    var Sunflower_Rabi_Value = $('#Other_measure_Rabi_Sunflower_UserVale').val();
    if (Sunflower_Rabi_Value != "") {
        if (other_rabi_sunflower_water_req != "") {
            other_rabi_sunflower_water_demand = parseInt(Sunflower_Rabi_Value) * parseFloat(other_rabi_sunflower_water_req) * 0.001;
        }
        else {
            other_rabi_sunflower_water_demand = parseInt(Sunflower_Rabi_Value) * 0 * 0.001;
        }
        var other_rabi_sunflower_water_saving = $('#other_rabi_sunflower_water_saving').val();
        if (other_rabi_sunflower_water_saving == "") {
            other_rabi_sunflower_water_saving = 0;
        }
        other_rabi_sunflower_reduc_gw_demand = parseFloat(other_rabi_sunflower_water_demand) * parseFloat(other_rabi_horticulture_water_saving) * 0.01;
        Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_sunflower_water_demand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
        Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_sunflower_reduc_gw_demand);
    }


    //other crop

    //other_rabi_othercrop_water_req = $('#other_rabi_othercrop_water_req').val();
    //var other_rabi_othercrop_area = $('#other_rabi_othercrop_area').val();
    //if (other_rabi_othercrop_area != "") {
    //    if (other_rabi_othercrop_water_req != "") {
    //        other_rabi_othercrop_gw_waterdemand = parseInt(other_rabi_othercrop_area) * parseFloat(other_rabi_othercrop_water_req) * 0.001;
    //    }
    //    else {
    //        other_rabi_othercrop_gw_waterdemand = parseInt(other_rabi_othercrop_area) * 0 * 0.001;
    //    }
    //    var other_rabi_othercrop_water_saving = $('#other_rabi_othercrop_water_saving').val();
    //    if (other_rabi_othercrop_water_saving == "") {
    //        other_rabi_othercrop_water_saving = 0;
    //    }
    //    other_rabi_othercrop_reduc_gw_demand = parseFloat(other_rabi_othercrop_gw_waterdemand) * parseFloat(other_rabi_othercrop_water_saving) * 0.01;
    //    Other_measure_Total_Water_Demand_for_Rabi_Crops = parseFloat(other_rabi_othercrop_gw_waterdemand) + Other_measure_Total_Water_Demand_for_Rabi_Crops;
    //    Total_Reduction_in_ground_water_demand_Rabi = Total_Reduction_in_ground_water_demand_Rabi + parseFloat(other_rabi_othercrop_reduc_gw_demand);
    //}


    $('#Other_measure_Total_Water_Demand_for_Rabi_Crops').text(parseFloat(Other_measure_Total_Water_Demand_for_Rabi_Crops).toFixed(2));
    $('#Total_Reduction_in_ground_water_demand_Rabi').text(parseFloat(Total_Reduction_in_ground_water_demand_Rabi).toFixed(2));

    $('#Other_measure_Rabi_Water_demand').text(parseFloat(Other_measure_Total_Water_Demand_for_Rabi_Crops).toFixed(2));
    $('#Other_measure_Rabi_Water_Save').text(parseFloat(Total_Reduction_in_ground_water_demand_Rabi).toFixed(2));


    var Total_Reduction_in_ground_water_demand_Kharif = $('#Total_Reduction_in_ground_water_demand_Kharif').text();;

    if (Total_Reduction_in_ground_water_demand_Kharif == "") {
        Total_Reduction_in_ground_water_demand_Kharif = 0;
    }

    var Total_Reduction_in_ground_water_demand_Rabi = $('#Total_Reduction_in_ground_water_demand_Rabi').text();;

    if (Total_Reduction_in_ground_water_demand_Rabi == "") {
        Total_Reduction_in_ground_water_demand_Rabi = 0;
    }

    var Total_Reduction_in_ground_water_demand_Summer = $('#Total_Reduction_in_ground_water_demand_Summer').text();;

    if (Total_Reduction_in_ground_water_demand_Summer == "") {
        Total_Reduction_in_ground_water_demand_Summer = 0;
    }

    var TotalAnnual_Reduction_Other_measure = parseFloat(Total_Reduction_in_ground_water_demand_Kharif) + parseFloat(Total_Reduction_in_ground_water_demand_Rabi) + parseFloat(Total_Reduction_in_ground_water_demand_Summer);
    $('#TotalAnnual_Reduction_Other_measure').text(TotalAnnual_Reduction_Other_measure.toFixed(2));


}
var other_summer_sericulture_water_req = 0;
var other_summer_sericulture_water_demand = 0;
var other_summer_sericulture_reduc_gw_demand = 0;

var other_summer_tomoto_water_req = 0;
var other_summer_tomoto_water_demand = 0;
var other_summer_tomoto_reduc_gw_demand = 0;

var other_summer_cabbage_water_req = 0;
var other_summer_cabbage_water_demand = 0;
var other_summer_cabbage_reduc_gw_demand = 0;

var other_summer_beans_water_req = 0;
var other_summer_beans_water_demand = 0;
var other_summer_beans_reduc_gw_demand = 0;

var other_summer_floriculture_water_req = 0;
var other_summer_floriculture_water_demand = 0;
var other_summer_floriculture_reduc_gw_demand = 0;

var other_summer_maize_water_req = 0;
var other_summer_maize_water_demand = 0;
var other_summer_maize_reduc_gw_demand = 0;

var other_summer_fodder_water_req = 0;
var other_summer_fodder_water_demand = 0;
var other_summer_fodder_reduc_gw_demand = 0;

var other_summer_sugarcane_water_req = 0;
var other_summer_sugarcane_water_demand = 0;
var other_summer_sugarcane_reduc_gw_demand = 0;

var other_summer_horticulture_water_req = 0;
var other_summer_horticulture_waterdemand = 0;
var other_summer_horticulture_reduction_gw_deman = 0;

var other_summer_othercrop_water_req1 = 0;
var other_summer_othercrop_waterdemand1 = 0;
var other_summer_othercrop_reduction_gw_demand1 = 0;

var other_summer_othercrop_water_req2 = 0;
var other_summer_othercrop_waterdemand2 = 0;
var other_summer_othercrop_reduction_gw_demand2 = 0;

var other_summer_othercrop_water_req3 = 0;
var other_summer_othercrop_waterdemand3 = 0;
var other_summer_othercrop_reduction_gw_demand3 = 0;


var other_summer_othercrop_water_req4 = 0;
var other_summer_othercrop_waterdemand4 = 0;
var other_summer_othercrop_reduction_gw_demand4 = 0;

var other_summer_othercrop_water_req5 = 0;
var other_summer_othercrop_waterdemand5 = 0;
var other_summer_othercrop_reduction_gw_demand5 = 0


function Other_measure_Crop_WaterRequire() {
    
    other_summer_sericulture_water_req = 0;
    other_summer_sericulture_water_demand = 0;
    other_summer_sericulture_reduc_gw_demand = 0;

    other_summer_tomoto_water_req = 0;
    other_summer_tomoto_water_demand = 0;
    other_summer_tomoto_reduc_gw_demand = 0;

    other_summer_cabbage_water_req = 0;
    other_summer_cabbage_water_demand = 0;
    other_summer_cabbage_reduc_gw_demand = 0;

    other_summer_beans_water_req = 0;
    other_summer_beans_water_demand = 0;
    other_summer_beans_reduc_gw_demand = 0;

    other_summer_floriculture_water_req = 0;
    other_summer_floriculture_water_demand = 0;
    other_summer_floriculture_reduc_gw_demand = 0;

    other_summer_maize_water_req = 0;
    other_summer_maize_water_demand = 0;
    other_summer_maize_reduc_gw_demand = 0;

    other_summer_fodder_water_req = 0;
    other_summer_fodder_water_demand = 0;
    other_summer_fodder_reduc_gw_demand = 0;

    other_summer_sugarcane_water_req = 0;
    other_summer_sugarcane_water_demand = 0;
    other_summer_sugarcane_reduc_gw_demand = 0;



    other_summer_horticulture_water_req = 0;
    other_summer_horticulture_waterdemand = 0;
    other_summer_horticulture_reduction_gw_deman = 0;
    //other_summer_othercrop_water_req = 0;
    //other_summer_othercrop_gw_waterdemand = 0;
    //other_summer_othercrop_reduc_gw_demand = 0;

    other_summer_othercrop_water_req1 = 0;
    other_summer_othercrop_waterdemand1 = 0;
    other_summer_othercrop_reduction_gw_demand1 = 0;

    other_summer_othercrop_water_req2 = 0;
    other_summer_othercrop_waterdemand2 = 0;
    other_summer_othercrop_reduction_gw_demand2 = 0;

    other_summer_othercrop_water_req3 = 0;
    other_summer_othercrop_waterdemand3 = 0;
    other_summer_othercrop_reduction_gw_demand3 = 0;


    other_summer_othercrop_water_req4 = 0;
    other_summer_othercrop_waterdemand4 = 0;
    other_summer_othercrop_reduction_gw_demand4 = 0;

    other_summer_othercrop_water_req5 = 0;
    other_summer_othercrop_waterdemand5 = 0;
    other_summer_othercrop_reduction_gw_demand5 = 0


    var Total_Water_Demand_for_Summer_Crops_Other_measure_ = 0;
    var Total_Reduction_in_ground_water_demand_Summer = 0;

    //Other
    

    other_summer_othercrop_water_req1 = $('#other_summer_othercrop_water_req1').val();
    if (typeof other_summer_othercrop_water_req1 == 'undefined') {
        other_summer_othercrop_water_req1 = 0;
    }
    var other_summer_othercrop_area1 = $('#other_summer_othercrop_area1').val();
    if (typeof other_summer_othercrop_area1 == 'undefined') {
        other_summer_othercrop_area1 = 0;
    }
    if (other_summer_othercrop_area1 != "") {
        if (other_summer_othercrop_water_req1 != "") {
            other_summer_othercrop_waterdemand1 = parseInt(other_summer_othercrop_area1) * parseFloat(other_summer_othercrop_water_req1) * 0.001;
        }
        else {
            other_summer_othercrop_waterdemand1 = parseInt(other_summer_othercrop_area1) * 0 * 0.001;
        }
        var other_summer_othercrop_water_saving1 = $('#other_summer_othercrop_water_saving1').val();
        if (typeof other_summer_othercrop_water_saving1 == 'undefined') {
            other_summer_othercrop_water_saving1 = 0;
        }
        if (other_summer_othercrop_water_saving1 == "") {
            other_summer_othercrop_water_saving1 = 0;
        }
        other_summer_othercrop_reduction_gw_demand1 = parseFloat(other_summer_othercrop_waterdemand1) * parseFloat(other_summer_othercrop_water_saving1) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_othercrop_waterdemand1) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_othercrop_reduction_gw_demand1);
    }

    other_summer_othercrop_water_req2 = $('#other_summer_othercrop_water_req2').val();
    if (typeof other_summer_othercrop_water_req2 == 'undefined') {
        other_summer_othercrop_water_req2 = 0;
    }
    var other_summer_othercrop_area2 = $('#other_summer_othercrop_area2').val();
    if (typeof other_summer_othercrop_area2 == 'undefined') {
        other_summer_othercrop_area2 = 0;
    }
    if (other_summer_othercrop_area2 != "") {
        if (other_summer_othercrop_water_req2 != "") {
            other_summer_othercrop_waterdemand2 = parseInt(other_summer_othercrop_area2) * parseFloat(other_summer_othercrop_water_req2) * 0.001;
        }
        else {
            other_summer_othercrop_waterdemand2 = parseInt(other_summer_othercrop_area2) * 0 * 0.001;
        }
        var other_summer_othercrop_water_saving2 = $('#other_summer_othercrop_water_saving2').val();
        if (typeof other_summer_othercrop_water_saving2 == 'undefined') {
            other_summer_othercrop_water_saving2 = 0;
        }
        if (other_summer_othercrop_water_saving2 == "") {
            other_summer_othercrop_water_saving2 = 0;
        }
        other_summer_othercrop_reduction_gw_demand2 = parseFloat(other_summer_othercrop_waterdemand2) * parseFloat(other_summer_othercrop_water_saving2) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_othercrop_waterdemand2) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_othercrop_reduction_gw_demand2);
    }


    other_summer_othercrop_water_req3 = $('#other_summer_othercrop_water_req3').val();
    if (typeof other_summer_othercrop_water_req3 == 'undefined') {
        other_summer_othercrop_water_req3 = 0;
    }
    var other_summer_othercrop_area3 = $('#other_summer_othercrop_area3').val();
    if (typeof other_summer_othercrop_area3 == 'undefined') {
        other_summer_othercrop_area3 = 0;
    }
    if (other_summer_othercrop_area3 != "") {
        if (other_summer_othercrop_water_req3 != "") {
            other_summer_othercrop_waterdemand3 = parseInt(other_summer_othercrop_area3) * parseFloat(other_summer_othercrop_water_req3) * 0.001;
        }
        else {
            other_summer_othercrop_waterdemand3 = parseInt(other_summer_othercrop_area3) * 0 * 0.001;
        }
        var other_summer_othercrop_water_saving3 = $('#other_summer_othercrop_water_saving3').val();
        if (typeof other_summer_othercrop_water_saving3 == 'undefined') {
            other_summer_othercrop_water_saving3 = 0;
        }
        if (other_summer_othercrop_water_saving3 == "") {
            other_summer_othercrop_water_saving3 = 0;
        }
        other_summer_othercrop_reduction_gw_demand3 = parseFloat(other_summer_othercrop_waterdemand3) * parseFloat(other_summer_othercrop_water_saving3) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_othercrop_waterdemand3) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_othercrop_reduction_gw_demand3);
    }

    other_summer_othercrop_water_req4 = $('#other_summer_othercrop_water_req4').val();
    if (typeof other_summer_othercrop_water_req4 == 'undefined') {
        other_summer_othercrop_water_req4 = 0;
    }
    var other_summer_othercrop_area4 = $('#other_summer_othercrop_area4').val();
    if (typeof other_summer_othercrop_area4 == 'undefined') {
        other_summer_othercrop_area4 = 0;
    }
    if (other_summer_othercrop_area4 != "") {
        if (other_summer_othercrop_water_req4 != "") {
            other_summer_othercrop_waterdemand4 = parseInt(other_summer_othercrop_area4) * parseFloat(other_summer_othercrop_water_req4) * 0.001;
        }
        else {
            other_summer_othercrop_waterdemand4 = parseInt(other_summer_othercrop_area4) * 0 * 0.001;
        }
        var other_summer_othercrop_water_saving4 = $('#other_summer_othercrop_water_saving4').val();
        if (typeof other_summer_othercrop_water_saving4 == 'undefined') {
            other_summer_othercrop_water_saving4 = 0;
        }
        if (other_summer_othercrop_water_saving4 == "") {
            other_summer_othercrop_water_saving4 = 0;
        }
        other_summer_othercrop_reduction_gw_demand4 = parseFloat(other_summer_othercrop_waterdemand4) * parseFloat(other_summer_othercrop_water_saving4) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_othercrop_waterdemand4) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_othercrop_reduction_gw_demand4);
    }


    other_summer_othercrop_water_req5 = $('#other_summer_othercrop_water_req5').val();
    if (typeof other_summer_othercrop_water_req5 == 'undefined') {
        other_summer_othercrop_water_req5 = 0;
    }
    var other_summer_othercrop_area5 = $('#other_summer_othercrop_area5').val();
    if (typeof other_summer_othercrop_area5 == 'undefined') {
        other_summer_othercrop_area5 = 0;
    }
    if (other_summer_othercrop_area5 != "") {
        if (other_summer_othercrop_water_req5 != "") {
            other_summer_othercrop_waterdemand5 = parseInt(other_summer_othercrop_area5) * parseFloat(other_summer_othercrop_water_req5) * 0.001;
        }
        else {
            other_summer_othercrop_waterdemand5 = parseInt(other_summer_othercrop_area5) * 0 * 0.001;
        }
        var other_summer_othercrop_water_saving5 = $('#other_summer_othercrop_water_saving5').val();
        if (typeof other_summer_othercrop_water_saving5 == 'undefined') {
            other_summer_othercrop_water_saving5 = 0;
        }
        if (other_summer_othercrop_water_saving5 == "") {
            other_summer_othercrop_water_saving5 = 0;
        }
        other_summer_othercrop_reduction_gw_demand5 = parseFloat(other_summer_othercrop_waterdemand5) * parseFloat(other_summer_othercrop_water_saving5) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_othercrop_waterdemand5) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_othercrop_reduction_gw_demand5);
    }

    //horticulture_water_req
    other_summer_horticulture_water_req = $('#other_summer_horticulture_water_req').val();
    var other_summer_horticulture_crop_area = $('#other_summer_horticulture_crop_area').val();
    if (other_summer_horticulture_crop_area != "") {
        if (other_summer_horticulture_water_req != "") {
            other_summer_horticulture_waterdemand = parseInt(other_summer_horticulture_crop_area) * parseFloat(other_summer_horticulture_water_req) * 0.001;
        }
        else {
            other_summer_horticulture_waterdemand = parseInt(other_summer_horticulture_crop_area) * 0 * 0.001;
        }
        var other_summer_horticulture_water_saving = $('#other_summer_horticulture_water_saving').val();
        if (other_summer_horticulture_water_saving == "") {
            other_summer_horticulture_water_saving = 0;
        }
        other_summer_horticulture_reduction_gw_deman = parseFloat(other_summer_horticulture_waterdemand) * parseFloat(other_summer_horticulture_water_saving) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_horticulture_waterdemand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_horticulture_reduction_gw_deman);
    }



    //Sericulture
    
    other_summer_sericulture_water_req = $('#other_summer_sericulture_water_req').val();
    var Sericulture_Crop_Value = $('#Other_measure_Crop_Sericulture_UserVale').val();
    if (Sericulture_Crop_Value != "") {
        if (other_summer_sericulture_water_req != "") {
            other_summer_sericulture_water_demand = parseInt(Sericulture_Crop_Value) * parseFloat(other_summer_sericulture_water_req) * 0.001;
        }
        else {
            other_summer_sericulture_water_demand = parseInt(Sericulture_Crop_Value) * 0 * 0.001;
        }
        var other_rabi_sericulture_water_saving = $('#other_rabi_sericulture_water_saving').val();
        if (other_rabi_sericulture_water_saving == "") {
            other_rabi_sericulture_water_saving = 0;
        }
        other_summer_sericulture_reduc_gw_demand = parseFloat(other_summer_sericulture_water_demand) * parseFloat(other_rabi_sericulture_water_saving) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_sericulture_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_sericulture_reduc_gw_demand);
    }



    //Tomota
    other_summer_tomoto_water_req = $('#other_summer_tomoto_water_req').val();
    var Tomota_Crop_Value = $('#Other_measure_Crop_Tomota_UserVale').val();
    if (Tomota_Crop_Value != "") {
        if (other_summer_tomoto_water_req != "") {
            other_summer_tomoto_water_demand = parseInt(Tomota_Crop_Value) * parseFloat(other_summer_tomoto_water_req) * 0.001;
        }
        else {
            other_summer_tomoto_water_demand = parseInt(Tomota_Crop_Value) * 0 * 0.001;
        }
        var other_rabi_tomoto_water_saving = $('#other_rabi_tomoto_water_saving').val();
        if (other_rabi_tomoto_water_saving == "") {
            other_rabi_tomoto_water_saving = 0;
        }
        other_summer_tomoto_reduc_gw_demand = parseFloat(other_summer_tomoto_water_demand) * parseFloat(other_rabi_tomoto_water_saving) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_tomoto_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_tomoto_reduc_gw_demand);
    }

    //Cabbage
    //other_summer_cabbage_water_req = $('#other_summer_cabbage_water_req').val();
    //var Cabbage_Crop_Value = $('#Other_measure_Crop_Cabbage_UserVale').val();
    //if (Cabbage_Crop_Value != "") {
    //    if (other_summer_cabbage_water_req != "") {
    //        other_summer_cabbage_water_demand = parseInt(Cabbage_Crop_Value) * parseFloat(other_summer_cabbage_water_req) * 0.001;
    //    }
    //    else {
    //        other_summer_cabbage_water_demand = parseInt(Cabbage_Crop_Value) * 0 * 0.001;
    //    }
    //    var other_rabi_cabbage_water_saving = $('#other_rabi_cabbage_water_saving').val();
    //    if (other_rabi_cabbage_water_saving == "") {
    //        other_rabi_cabbage_water_saving = 0;
    //    }
    //    other_summer_cabbage_reduc_gw_demand = parseFloat(other_summer_cabbage_water_demand) * parseFloat(other_rabi_cabbage_water_saving) * 0.01;
    //    Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_cabbage_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
    //    Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_cabbage_reduc_gw_demand);
    //}

    ////Beans
    //other_summer_beans_water_req = $('#other_summer_beans_water_req').val();
    //var Beans_Crop_Value = $('#Other_measure_Crop_Beans_UserVale').val();
    //if (Beans_Crop_Value != "") {
    //    if (other_summer_beans_water_req != "") {
    //        other_summer_beans_water_demand = parseInt(Beans_Crop_Value) * parseFloat(other_summer_beans_water_req) * 0.001;
    //    }
    //    else {
    //        other_summer_beans_water_demand = parseInt(Beans_Crop_Value) * 0 * 0.001;
    //    }
    //    var other_rabi_beans_water_saving = $('#other_rabi_beans_water_saving').val();
    //    if (other_rabi_beans_water_saving == "") {
    //        other_rabi_beans_water_saving = 0;
    //    }
    //    other_summer_beans_reduc_gw_demand = parseFloat(other_summer_beans_water_demand) * parseFloat(other_rabi_beans_water_saving) * 0.01;
    //    Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_beans_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
    //    Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_beans_reduc_gw_demand);
    //}


    //Floriculture
    other_summer_floriculture_water_req = $('#other_summer_floriculture_water_req').val();
    var Floriculture_Crop_Value = $('#Other_measure_Crop_Floriculture_UserVale').val();
    if (Floriculture_Crop_Value != "") {
        if (other_summer_floriculture_water_req != "") {
            other_summer_floriculture_water_demand = parseInt(Floriculture_Crop_Value) * parseFloat(other_summer_floriculture_water_req) * 0.001;
        }
        else {
            other_summer_floriculture_water_demand = parseInt(Floriculture_Crop_Value) * 0 * 0.001;
        }
        var other_rabi_floriculture_water_saving = $('#other_rabi_floriculture_water_saving').val();
        if (other_rabi_floriculture_water_saving == "") {
            other_rabi_floriculture_water_saving = 0;
        }
        other_summer_floriculture_reduc_gw_demand = parseFloat(other_summer_floriculture_water_demand) * parseFloat(other_rabi_floriculture_water_saving) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_floriculture_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_floriculture_reduc_gw_demand);
    }


    //Maize
    other_summer_maize_water_req = $('#other_summer_maize_water_req').val();
    var Maize_Crop_Value = $('#Other_measure_Crop_Maize_UserVale').val();
    if (Maize_Crop_Value != "") {
        if (other_summer_maize_water_req != "") {
            other_summer_maize_water_demand = parseInt(Maize_Crop_Value) * parseFloat(other_summer_maize_water_req) * 0.001;
        }
        else {
            other_summer_maize_water_demand = parseInt(Maize_Crop_Value) * 0 * 0.001;
        }
        var other_rabi_maize_water_saving = $('#other_rabi_maize_water_saving').val();
        if (other_rabi_maize_water_saving == "") {
            other_rabi_maize_water_saving = 0;
        }
        other_summer_maize_reduc_gw_demand = parseFloat(other_summer_maize_water_demand) * parseFloat(other_rabi_floriculture_water_saving) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_maize_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_rabi_maize_water_saving);
    }

    //Fodder
    other_summer_fodder_water_req = $('#other_summer_fodder_water_req').val();
    var Fodder_Crop_Value = $('#Other_measure_Crop_Fodder_UserVale').val();
    if (Fodder_Crop_Value != "") {
        if (other_summer_fodder_water_req != "") {
            other_summer_fodder_water_demand = parseInt(Fodder_Crop_Value) * parseFloat(other_summer_fodder_water_req) * 0.001;
        }
        else {
            other_summer_fodder_water_demand = parseInt(Fodder_Crop_Value) * 0 * 0.001;
        }
        var other_rabi_fodder_water_saving = $('#other_rabi_fodder_water_saving').val();
        if (other_rabi_fodder_water_saving == "") {
            other_rabi_fodder_water_saving = 0;
        }
        other_summer_fodder_reduc_gw_demand = parseFloat(other_summer_fodder_water_demand) * parseFloat(other_rabi_fodder_water_saving) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_fodder_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_fodder_reduc_gw_demand);
    }

    //Sugarcane
    
    other_summer_sugarcane_water_req = $('#other_summer_sugarcane_water_req').val();
    var Sugarcane_Crop_Value = $('#Other_measure_Crop_Sugarcane_UserVale').val();
    if (Sugarcane_Crop_Value != "") {
        if (other_summer_sugarcane_water_req != "") {
            other_summer_sugarcane_water_demand = parseFloat(Sugarcane_Crop_Value) * parseFloat(other_summer_sugarcane_water_req) * 0.001;
        }
        else {
            other_summer_sugarcane_water_demand = parseFloat(Sugarcane_Crop_Value) * 0 * 0.001;
        }
        var other_rabi_sugarcane_water_saving = $('#other_rabi_sugarcane_water_saving').val();
        if (other_rabi_sugarcane_water_saving == "") {
            other_rabi_sugarcane_water_saving = 0;
        }
        other_summer_sugarcane_reduc_gw_demand = parseFloat(other_summer_sugarcane_water_demand) * parseFloat(other_rabi_sugarcane_water_saving) * 0.01;
        Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_sugarcane_water_demand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
        Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_sugarcane_reduc_gw_demand);
    }

    //other crop
    //other_summer_othercrop_water_req = $('#other_summer_othercrop_water_req').val();
    //var other_summer_othercrop_area = $('#other_summer_othercrop_area').val();
    //if (other_summer_othercrop_area != "") {
    //    if (other_summer_othercrop_water_req != "") {
    //        other_summer_othercrop_gw_waterdemand = parseInt(other_summer_othercrop_area) * parseFloat(other_summer_othercrop_water_req) * 0.001;
    //    }
    //    else {
    //        other_summer_othercrop_gw_waterdemand = parseInt(other_summer_othercrop_area) * 0 * 0.001;
    //    }
    //    var other_summer_othercrop_water_saving = $('#other_summer_othercrop_water_saving').val();
    //    if (other_summer_othercrop_water_saving == "") {
    //        other_summer_othercrop_water_saving = 0;
    //    }
    //    other_summer_othercrop_reduc_gw_demand = parseFloat(other_summer_othercrop_gw_waterdemand) * parseFloat(other_summer_othercrop_water_saving) * 0.01;
    //    Total_Water_Demand_for_Summer_Crops_Other_measure_ = parseFloat(other_summer_othercrop_gw_waterdemand) + Total_Water_Demand_for_Summer_Crops_Other_measure_;
    //    Total_Reduction_in_ground_water_demand_Summer = Total_Reduction_in_ground_water_demand_Summer + parseFloat(other_summer_othercrop_reduc_gw_demand);
    //}



    $('#Total_Water_Demand_for_Summer_Crops_Other_measure_').text(Total_Water_Demand_for_Summer_Crops_Other_measure_.toFixed(2));
    $('#Total_Reduction_in_ground_water_demand_Summer').text(Total_Reduction_in_ground_water_demand_Summer.toFixed(2));

    $('#Other_measure_Summer_Crop_Water_demand').text(Total_Water_Demand_for_Summer_Crops_Other_measure_.toFixed(2));
    $('#Other_measure_Summer_Crop_Water_Save').text(Total_Reduction_in_ground_water_demand_Summer.toFixed(2));



    var Total_Reduction_in_ground_water_demand_Kharif = $('#Total_Reduction_in_ground_water_demand_Kharif').text();;

    if (Total_Reduction_in_ground_water_demand_Kharif == "") {
        Total_Reduction_in_ground_water_demand_Kharif = 0;
    }

    var Total_Reduction_in_ground_water_demand_Rabi = $('#Total_Reduction_in_ground_water_demand_Rabi').text();;

    if (Total_Reduction_in_ground_water_demand_Rabi == "") {
        Total_Reduction_in_ground_water_demand_Rabi = 0;
    }

    var Total_Reduction_in_ground_water_demand_Summer = $('#Total_Reduction_in_ground_water_demand_Summer').text();;

    if (Total_Reduction_in_ground_water_demand_Summer == "") {
        Total_Reduction_in_ground_water_demand_Summer = 0;
    }

    var TotalAnnual_Reduction_Other_measure = parseFloat(Total_Reduction_in_ground_water_demand_Kharif) + parseFloat(Total_Reduction_in_ground_water_demand_Rabi) + parseFloat(Total_Reduction_in_ground_water_demand_Summer);
    $('#TotalAnnual_Reduction_Other_measure').text(TotalAnnual_Reduction_Other_measure.toFixed(2));



}


function other_savedata() {
    $('#SAVE_BTN').prop('disabled', true);

    Other_measure__Kharif_WaterRequire();
    Other_measure_Rabi_WaterRequire();
    Other_measure_Crop_WaterRequire();

    var obj = {};
    
    obj.other_approx_estimated_cost = $('#other_approx_estimated_cost').val();
    obj.other_cost_type = $('#other_cost_type').val();

    obj.other_kharif_paddy_crop_area = $('#Other_measure_kharif_Paddy_UserVale').val();
    obj.other_kharif_paddy_intervention_value = $('#Other_measure_kharif_Paddy_Intervention_UserVale').val();
    obj.other_kharif_paddy_fundingsource = $('#Other_kharif_Paddy_FundingSource').val();
    obj.other_kharif_ragi_crop_area = $('#Other_measure_kharif_Ragi_UserVale').val();
    obj.other_kharif_ragi_intervention_value = $('#Other_measure_kharif_Ragi_Intervention_UserVale').val();
    obj.other_kharif_ragi_fundingsource = $('#Other_kharif_Ragi_FundingSource').val();
    obj.other_kharif_groundnut_crop_area = $('#Other_measure_kharif_GroundNut_UserVale').val();
    obj.other_kharif_groundnut_intervention_value = $('#Other_measure_kharif_GroundNut_Intervention_UserVale').val();
    obj.other_kharif_groundnut_fundingsource = $('#Other_kharif_GroundNut_FundingSource').val();
    obj.other_kharif_sugarcane_crop_area = $('#Other_measure_kharif_Sugarcane_UserVale').val();
    obj.other_kharif_sugarcane_intervention_value = $('#Other_measure_kharif_Sugarcane_Intervention_UserVale').val();
    obj.other_kharif_sugarcane_fundingsource = $('#Other_kharif_Sugarcane_FundingSource').val();
    obj.other_kharif_tomoto_crop_area = $('#Other_measure_kharif_Tomato_UserVale').val();
    obj.other_kharif_tomoto_intervention_value = $('#Other_measure_kharif_Tomato_Intervention_UserVale').val();
    obj.other_kharif_tomoto_fundingsource = $('#Other_kharif_Tomoto_FundingSource').val();
    // obj.other_kharif_cabbage_crop_area = $('#Other_measure_kharif_Cabbage_UserVale').val();
    // obj.other_kharif_cabbage_intervention_value = $('#Other_measure_kharif_Cabbage_Intervention_UserVale').val();
    // obj.other_kharif_cabbage_fundingsource = $('#Other_kharif_Cabbage_FundingSource').val();
    // obj.other_kharif_beans_crop_area = $('#Other_measure_kharif_Beans_UserVale').val();
    // obj.other_kharif_beans_intervention_value = $('#Other_measure_kharif_Beans_Intervention_UserVale').val();
    // obj.other_kharif_beans_fundingsource = $('#Other_kharif_Beans_FundingSource').val();
    obj.other_kharif_floriculture_crop_area = $('#Other_measure_kharif_Floriculture_UserVale').val();
    obj.other_kharif_floriculture_intervention_value = $('#Other_measure_kharif_Floriculture_Intervention_UserVale').val();
    obj.other_kharif_floriculture_fundingsource = $('#Other_kharif_Floriculture_FundingSource').val();
    obj.other_kharif_sericulture_crop_area = $('#Other_measure_kharif_Sericulture_UserVale').val();
    obj.other_kharif_sericulture_intervention_value = $('#Other_measure_kharif_Sericulture_Intervention_UserVale').val();
    obj.other_kharif_sericulture_fundingsource = $('#Other_kharif_Sericulture_FundingSource').val();
    // obj.other_kharif_cucumber_crop_area = $('#Other_measure_kharif_Cucmber_UserVale').val();
    // obj.other_kharif_cucumber_intervention_value = $('#Other_measure_kharif_Cucmber_Intervention_UserVale').val();
    // obj.other_kharif_cucumber_fundingsource = $('#Other_kharif_Cucmber_FundingSource').val();
    obj.other_kharif_banana_crop_area = $('#Other_measure_kharif_Banana_UserVale').val();
    obj.other_kharif_banana_intervention_value = $('#Other_measure_kharif_Banana_Intervention_UserVale').val();
    obj.other_kharif_banana_fundingsource = $('#Other_kharif_Banana_FundingSource').val();
    obj.other_kharif_fodder_crop_area = $('#Other_measure_kharif_Fodder_UserVale').val();
    obj.other_kharif_fodder_intervention_value = $('#Other_measure_kharif_Fodder_Intervention_UserVale').val();
    obj.other_kharif_fodder_fundingsource = $('#Other_kharif_Fodder_FundingSource').val();
    obj.other_kharif_maize_crop_area = $('#Other_measure_kharif_Maize_UserVale').val();
    obj.other_kharif_maize_intervention_value = $('#Other_measure_kharif_Maize_Intervention_UserVale').val();
    obj.other_kharif_maize_fundingsource = $('#Other_kharif_Maize_FundingSource').val();
    // obj.other_kharif_potato_crop_area = $('#Other_measure_kharif_Potato_UserVale').val();
    // obj.other_kharif_potato_intervention_value = $('#Other_measure_kharif_Potato_Intervention_UserVale').val();
    //obj.other_kharif_potato_fundingsource = $('#Other_kharif_Potato_FundingSource').val();
    obj.other_kharif_chillies_crop_area = $('#Other_measure_kharif_Chillies_UserVale').val();
    obj.other_kharif_chillies_intervention_value = $('#Other_measure_kharif_Chillies_Intervention_UserVale').val();
    obj.other_kharif_chillies_fundingsource = $('#Other_kharif_Chillies_FundingSource').val();
    obj.other_kharif_cotton_crop_area = $('#Other_measure_kharif_Cotton_UserVale').val();
    obj.other_kharif_cotton_intervention_value = $('#Other_measure_kharif_Cotton_Intervention_UserVale').val();
    obj.other_kharif_cotton_fundingsource = $('#Other_kharif_Cotton_FundingSource').val();
    obj.other_kharif_melon_crop_area = $('#Other_measure_kharif_Melon_UserVale').val();
    obj.other_kharif_melon_intervention_value = $('#Other_measure_kharif_Melon_Intervention_UserVale').val();
    obj.other_kharif_melon_fundingsource = $('#Other_kharif_Melon_FundingSource').val();
    obj.other_kharif_citrus_crop_area = $('#Other_measure_kharif_Citrus_UserVale').val();
    obj.other_kharif_citrus_intervention_value = $('#Other_measure_kharif_Citrus_Intervention_UserVale').val();
    obj.other_kharif_citrus_fundingsource = $('#Other_kharif_Citrus_FundingSource').val();
    // obj.other_kharif_peanut_crop_area = $('#Other_measure_kharif_Peanut_UserVale').val();
    // obj.other_kharif_peanut_intervention_value = $('#Other_measure_kharif_Peanut_Intervention_UserVale').val();
    // obj.other_kharif_peanut_fundingsource = $('#Other_kharif_Peanut_FundingSource').val();
    obj.other_kharif_horticulture_crop_area = $('#Other_measure_kharif_Horticulture_UserVale').val();
    obj.other_kharif_horticulture_intervention_value = $('#Other_measure_kharif_Horticulture_Intervention_UserVale').val();
    obj.other_kharif_horticulture_fundingsource = $('#Other_kharif_Horticulture_FundingSource').val();
    obj.other_rabi_sericulture_crop_area = $('#Other_measure_Rabi_Sericulture_UserVale').val();
    obj.other_rabi_sericulture_intervention_value = $('#Other_measure_Rabi_Sericulture_Intervention_UserVale').val();
    obj.other_rabi_sericulture_fundingsource = $('#Other_Rabi_Sericulture_FundingSource').val();
    obj.other_rabi_tomoto_crop_area = $('#Other_measure_Rabi_Tomota_UserVale').val();
    obj.other_rabi_tomoto_intervention_value = $('#Other_measure_Rabi_Tomota_Intervention_UserVale').val();
    obj.other_rabi_tomoto_fundingsource = $('#Other_Rabi_Tomota_FundingSource').val();
    // obj.other_rabi_cabbage_crop_area = $('#Other_measure_Rabi_Cabbage_UserVale').val();
    // obj.other_rabi_cabbage_intervention_value = $('#Other_measure_Rabi_Cabbage_Intervention_UserVale').val();
    // obj.other_rabi_cabbage_fundingsource = $('#Other_Rabi_Cabbage_FundingSource').val();
    // obj.other_rabi_beans_crop_area = $('#Other_measure_Rabi_Beans_UserVale').val();
    // obj.other_rabi_beans_intervention_value = $('#Other_measure_Rabi_Beans_Intervention_UserVale').val();
    // obj.other_rabi_beans_fundingsource = $('#Other_Rabi_Beans_FundingSource').val();
    obj.other_rabi_floriculture_crop_area = $('#Other_measure_Rabi_Floriculture_UserVale').val();
    obj.other_rabi_floriculture_intervention_value = $('#Other_measure_Rabi_Floriculture_Intervention_UserVale').val();
    obj.other_rabi_floriculture_fundingsource = $('#Other_Rabi_Floriculture_FundingSource').val();
    // obj.other_rabi_potato_crop_area = $('#Other_measure_Rabi_Potato_UserVale').val();
    // obj.other_rabi_potato_intervention_value = $('#Other_measure_Rabi_Potato_Intervention_UserVale').val();
    // obj.other_rabi_potato_fundingsource = $('#Other_Rabi_Potato_FundingSource').val();
    // obj.other_rabi_cucumber_crop_area = $('#Other_measure_Rabi_Cucumber_UserVale').val();
    // obj.other_rabi_cucuber_intervention_value = $('#Other_measure_Rabi_Cucumber_Intervention_UserVale').val();
    // obj.other_rabi_cucumber_fundingsource = $('#Other_Rabi_Cucumber_FundingSource').val();
    obj.other_rabi_ragi_crop_area = $('#Other_measure_Rabi_Ragi_UserVale').val();
    obj.other_rabi_ragi_intervention_value = $('#Other_measure_Rabi_Ragi_Intervention_UserVale').val();
    obj.other_rabi_ragi_fundingsource = $('#Other_Rabi_Ragi_FundingSource').val();
    obj.other_rabi_sugarcane_crop_area = $('#Other_measure_Rabi_Sugarcane_UserVale').val();
    obj.other_rabi_sugarcane_intervention_value = $('#Other_measure_Rabi_Sugarcane_Intervention_UserVale').val();
    obj.other_rabi_sugarcane_fundingsource = $('#Other_Rabi_Sugarcane_FundingSource').val();
    obj.other_rabi_maize_crop_area = $('#Other_measure_Rabi_Maize_UserVale').val();
    obj.other_rabi_maize_intervention_value = $('#Other_measure_Rabi_Maize_Intervention_UserVale').val();
    obj.other_rabi_maize_fundingsource = $('#Other_Rabi_Maize_FundingSource').val();
    obj.other_rabi_fodder_crop_area = $('#Other_measure_Rabi_Fodder_UserVale').val();
    obj.other_rabi_fodder_intervention_value = $('#Other_measure_Rabi_Fodder_Intervention_UserVale').val();
    obj.other_rabi_fodder_fundingsource = $('#Other_Rabi_Fodder_FundingSource').val();
    obj.other_rabi_paddy_crop_area = $('#Other_measure_Rabi_Paddy_UserVale').val();
    obj.other_rabi_paddy_intervention_value = $('#Other_measure_Rabi_Paddy_Intervention_UserVale').val();
    obj.other_rabi_paddy_fundingsource = $('#Other_Rabi_Paddy_FundingSource').val();
    obj.other_rabi_alfalfa_crop_area = $('#Other_measure_Rabi_Alfalfa_UserVale').val();
    obj.other_rabi_alfalfa_intervention_value = $('#Other_measure_Rabi_Alfalfa_Intervention_UserVale').val();
    obj.other_rabi_alfalfa_fundingsource = $('#Other_Rabi_Alfalfa_FundingSource').val();
    // obj.other_rabi_onion_crop_area = $('#Other_measure_Rabi_Onion_UserVale').val();
    // obj.other_rabi_onion_intervention_value = $('#Other_measure_Rabi_Onion_Intervention_UserVale').val();
    // obj.other_rabi_onion_fundingsource = $('#Other_Rabi_Onion_FundingSource').val();
    obj.other_rabi_horticulture_crop_area = $('#Other_measure_Rabi_Hortculture_UserVale').val();
    obj.other_rabi_horticulture_intervention_value = $('#Other_measure_Rabi_Hortculture_Intervention_UserVale').val();
    obj.other_rabi_horticulture_fundingsource = $('#Other_Rabi_Hortculture_FundingSource').val();
    obj.other_rabi_sunflower_crop_area = $('#Other_measure_Rabi_Sunflower_UserVale').val();
    obj.other_rabi_sunflower_intervention_value = $('#Other_measure_Rabi_Sunflower_Intervention_UserVale').val();
    obj.other_rabi_sunflower_fundingsource = $('#Other_Rabi_Sunflower_FundingSource').val();
    obj.other_summer_sericulture_crop_area = $('#Other_measure_Crop_Sericulture_UserVale').val();
    obj.other_summer_sericulture_intervention_value = $('#Other_measure_Crop_Sericulture_Intervention_UserVale').val();
    obj.other_summer_sericulture_fundingsource = $('#Other_summer_Sericulture_FundingSource').val();
    obj.other_summer_tomoto_crop_area = $('#Other_measure_Crop_Tomota_UserVale').val();
    obj.other_summer_tomoto_intervention_value = $('#Other_measure_Crop_Tomota_Intervention_UserVale').val();
    obj.other_summer_tomoto_fundingsource = $('#Other_summer_Tomota_FundingSource').val();
    //obj.other_summer_cabbage_crop_area = $('#Other_measure_Crop_Cabbage_UserVale').val();
    //obj.other_summer_cabbage_intervention_value = $('#Other_measure_Crop_Cabbage_Intervention_UserVale').val();
    //obj.other_summer_cabbage_fundingsource = $('#Other_summer_Cabbage_FundingSource').val();
    //obj.other_summer_beans_crop_area = $('#Other_measure_Crop_Beans_UserVale').val();
    //obj.other_summer_beans_intervention_value = $('#Other_measure_Crop_Beans_Intervention_UserVale').val();
    //obj.other_summer_beans_fundingsource = $('#Other_summer_Beans_FundingSource').val();
    obj.other_summer_floriculture_crop_area = $('#Other_measure_Crop_Floriculture_UserVale').val();
    obj.other_summer_floiculture_intervention_value = $('#Other_measure_Crop_Floriculture_Intervention_UserVale').val();
    obj.other_summer_floriculture_fundingsource = $('#Other_summer_Floriculture_FundingSource').val();
    obj.other_summer_maize_crop_area = $('#Other_measure_Crop_Maize_UserVale').val();
    obj.other_summer_maize_intervention_value = $('#Other_measure_Crop_Maize_Intervention_UserVale').val();
    obj.other_summer_maize_fundingsource = $('#Other_summer_Maize_FundingSource').val();
    obj.other_summer_fodder_crop_area = $('#Other_measure_Crop_Fodder_UserVale').val();
    obj.other_summer_fodder_intervention_value = $('#Other_measure_Crop_Fodder_Intervention_UserVale').val();
    obj.other_summer_fodder_fundingsource = $('#Other_summer_Fodder_FundingSource').val();
    obj.other_summer_sugarcane_crop_area = $('#Other_measure_Crop_Sugarcane_UserVale').val();
    obj.other_summer_sugarcane_intervention_value = $('#Other_measure_Crop_Sugarcane_Intervention_UserVale').val();
    obj.other_summer_sugarcane_fundingsource = $('#Other_summer_Sugarcane_FundingSource').val();


    obj.latitude = lat;
    obj.longitude = long;
    // obj.date_time
    // obj.userid

    var Other_measure_Kharif_Water_demand = $('#Other_measure_Kharif_Water_demand').text();
    obj.other_kharif_total_kharifcrop_waterdemand = parseFloat(Other_measure_Kharif_Water_demand).toFixed(2);
    var Total_Reduction_in_ground_water_demand_Kharif = $('#Total_Reduction_in_ground_water_demand_Kharif').text();
    obj.other_kharif_total_reduc_gw_demand = parseFloat(Total_Reduction_in_ground_water_demand_Kharif).toFixed(2);

    var Other_measure_Rabi_Water_demand = $('#Other_measure_Rabi_Water_demand').text();
    obj.other_rabi_total_rabicrop_waterdemand = parseFloat(Other_measure_Rabi_Water_demand).toFixed(2);
    var Total_Reduction_in_ground_water_demand_Rabi = $('#Total_Reduction_in_ground_water_demand_Rabi').text();
    obj.other_rabi_total_reduc_gw_demand = parseFloat(Total_Reduction_in_ground_water_demand_Rabi).toFixed(2);

    var Other_measure_Summer_Crop_Water_demand = $('#Other_measure_Summer_Crop_Water_demand').text();
    obj.other_summer_total_summercrop_waterdemand = parseFloat(Other_measure_Summer_Crop_Water_demand).toFixed(2);
    var Total_Reduction_in_ground_water_demand_Summer = $('#Total_Reduction_in_ground_water_demand_Summer').text();
    obj.other_summer_total_reduc_gw_demand = parseFloat(Total_Reduction_in_ground_water_demand_Summer).toFixed(2);

    //anual total
    var TotalAnnual_Reduction_Other_measure = $('#TotalAnnual_Reduction_Other_measure').text();
    obj.other_total_annual_waterdemand = parseFloat(TotalAnnual_Reduction_Other_measure).toFixed(2);

    //obj.other_measure_summer_crop_water_demand = $('#Other_measure_Summer_Crop_Water_demand').text();

    //new columns water requirement and water saving
    //new columns water requirement
    obj.other_kharif_paddy_water_req = $('#other_kharif_paddy_water_req').val();
    obj.other_kharif_ragi_water_req = $('#other_kharif_ragi_water_req').val();
    obj.other_kharif_groundnut_water_req = $('#other_kharif_groundnut_water_req').val();
    obj.other_kharif_sugarcane_water_req = $('#other_kharif_sugarcane_water_req').val();
    obj.other_kharif_tomoto_water_req = $('#other_kharif_tomoto_water_req').val();
    // obj.other_kharif_cabbage_water_req = $('#other_kharif_cabbage_water_req').val();
    // obj.other_kharif_beans_water_req = $('#other_kharif_beans_water_req').val();
    obj.other_kharif_floriculture_water_req = $('#other_kharif_floriculture_water_req').val();
    obj.other_kharif_sericulture_water_req = $('#other_kharif_sericulture_water_req').val();
    // obj.other_kharif_cucumber_water_req = $('#other_kharif_cucumber_water_req').val();
    obj.other_kharif_banana_water_req = $('#other_kharif_banana_water_req').val();
    obj.other_kharif_fodder_water_req = $('#other_kharif_fodder_water_req').val();
    obj.other_kharif_maize_water_req = $('#other_kharif_maize_water_req').val();
    // obj.other_kharif_potato_water_req = $('#other_kharif_potato_water_req').val();
    obj.other_kharif_chillies_water_req = $('#other_kharif_chillies_water_req').val();
    obj.other_kharif_cotton_water_req = $('#other_kharif_cotton_water_req').val();
    obj.other_kharif_melon_water_req = $('#other_kharif_melon_water_req').val();
    obj.other_kharif_citrus_water_req = $('#other_kharif_citrus_water_req').val();
    // obj.other_kharif_peanut_water_req = $('#other_kharif_peanut_water_req').val();
    obj.other_kharif_horticulture_water_req = $('#other_kharif_horticulture_water_req').val();
    obj.other_summer_sugarcane_irri_area = $('#other_summer_sugarcane_irri_area').val();

    obj.other_rabi_sericulture_water_req = $('#other_rabi_sericulture_water_req').val();
    obj.other_rabi_tomoto_water_req = $('#other_rabi_tomoto_water_req').val();
    //obj.other_rabi_cabbage_water_req = $('#other_rabi_cabbage_water_req').val();
    //obj.other_rabi_beans_water_req = $('#other_rabi_beans_water_req').val();
    obj.other_rabi_floriculture_water_req = $('#other_rabi_floriculture_water_req').val();
    // obj.other_rabi_potato_water_req = $('#other_rabi_potato_water_req').val();
    // obj.other_rabi_cucumber_water_req = $('#other_rabi_cucumber_water_req').val();
    obj.other_rabi_ragi_water_req = $('#other_rabi_ragi_water_req').val();
    obj.other_rabi_sugarcane_water_req = $('#other_rabi_sugarcane_water_req').val();
    obj.other_rabi_maize_water_req = $('#other_rabi_maize_water_req').val();
    obj.other_rabi_fodder_water_req = $('#other_rabi_fodder_water_req').val();
    obj.other_rabi_paddy_water_req = $('#other_rabi_paddy_water_req').val();
    obj.other_rabi_alfalfa_water_req = $('#other_rabi_alfalfa_water_req').val();
    // obj.other_rabi_onion_water_req = $('#other_rabi_onion_water_req').val();
    obj.other_rabi_horticulture_water_req = $('#other_rabi_horticulture_water_req').val();
    obj.other_rabi_sunflower_water_req = $('#other_rabi_sunflower_water_req').val();

    obj.other_summer_sericulture_water_req = $('#other_summer_sericulture_water_req').val();
    obj.other_summer_tomoto_water_req = $('#other_summer_tomoto_water_req').val();
    // obj.other_summer_cabbage_water_req = $('#other_summer_cabbage_water_req').val();
    // obj.other_summer_beans_water_req = $('#other_summer_beans_water_req').val();
    obj.other_summer_floriculture_water_req = $('#other_summer_floriculture_water_req').val();
    obj.other_summer_maize_water_req = $('#other_summer_maize_water_req').val();
    obj.other_summer_fodder_water_req = $('#other_summer_fodder_water_req').val();
    obj.other_summer_sugarcane_water_req = $('#other_summer_sugarcane_water_req').val();

    //new columns water saving

    obj.other_kharif_paddy_water_saving = $('#other_kharif_paddy_water_saving').val();
    obj.other_kharif_ragi_water_saving = $('#other_kharif_ragi_water_saving').val();
    obj.other_kharif_groundnut_water_saving = $('#other_kharif_groundnut_water_saving').val();
    obj.other_kharif_sugarcane_water_saving = $('#other_kharif_sugarcane_water_saving').val();
    obj.other_kharif_tomoto_water_saving = $('#other_kharif_tomoto_water_saving').val();
    //    obj.other_kharif_cabbage_water_saving = $('#other_kharif_cabbage_water_saving').val();
    //    obj.other_kharif_beans_water_saving = $('#other_kharif_beans_water_saving').val();
    obj.other_kharif_floriculture_water_saving = $('#other_kharif_floriculture_water_saving').val();
    obj.other_kharif_sericulture_water_saving = $('#other_kharif_sericulture_water_saving').val();
    //    obj.other_kharif_cucumber_water_saving = $('#other_kharif_cucumber_water_saving').val();
    obj.other_kharif_banana_water_saving = $('#other_kharif_banana_water_saving').val();
    obj.other_kharif_fodder_water_saving = $('#other_kharif_fodder_water_saving').val();
    obj.other_kharif_maize_water_saving = $('#other_kharif_maize_water_saving').val();
    //    obj.other_kharif_potato_water_saving = $('#other_kharif_potato_water_saving').val();
    obj.other_kharif_chillies_water_saving = $('#other_kharif_chillies_water_saving').val();
    obj.other_kharif_cotton_water_saving = $('#other_kharif_cotton_water_saving').val();
    obj.other_kharif_melon_water_saving = $('#other_kharif_melon_water_saving').val();
    obj.other_kharif_citrus_water_saving = $('#other_kharif_citrus_water_saving').val();
    //    obj.other_kharif_peanut_water_saving = $('#other_kharif_peanut_water_saving').val();
    obj.other_kharif_horticulture_water_saving = $('#other_kharif_horticulture_water_saving').val();
    obj.other_summer_sugarcane_irri_area = $('#other_summer_sugarcane_irri_area').val();

    obj.other_rabi_sericulture_water_saving = $('#other_rabi_sericulture_water_saving').val();
    obj.other_rabi_tomoto_water_saving = $('#other_rabi_tomoto_water_saving').val();
    //    obj.other_rabi_cabbage_water_saving = $('#other_rabi_cabbage_water_saving').val();
    //    obj.other_rabi_beans_water_saving = $('#other_rabi_beans_water_saving').val();
    obj.other_rabi_floriculture_water_saving = $('#other_rabi_floriculture_water_saving').val();
    //    obj.other_rabi_potato_water_saving = $('#other_rabi_potato_water_saving').val();
    //    obj.other_rabi_cucumber_water_saving = $('#other_rabi_cucumber_water_saving').val();
    obj.other_rabi_ragi_water_saving = $('#other_rabi_ragi_water_saving').val();
    obj.other_rabi_sugarcane_water_saving = $('#other_rabi_sugarcane_water_saving').val();
    obj.other_rabi_maize_water_saving = $('#other_rabi_maize_water_saving').val();
    obj.other_rabi_fodder_water_saving = $('#other_rabi_fodder_water_saving').val();
    obj.other_rabi_paddy_water_saving = $('#other_rabi_paddy_water_saving').val();
    obj.other_rabi_alfalfa_water_saving = $('#other_rabi_alfalfa_water_saving').val();
    //    obj.other_rabi_onion_water_saving = $('#other_rabi_onion_water_saving').val();
    obj.other_rabi_horticulture_water_saving = $('#other_rabi_horticulture_water_saving').val();
    obj.other_rabi_sunflower_water_saving = $('#other_rabi_sunflower_water_saving').val();

    obj.other_summer_sericulture_water_saving = $('#other_summer_sericulture_water_saving').val();
    obj.other_summer_tomoto_water_saving = $('#other_summer_tomoto_water_saving').val();
    //obj.other_summer_cabbage_water_saving = $('#other_summer_cabbage_water_saving').val();
    //obj.other_summer_beans_water_saving = $('#other_summer_beans_water_saving').val();
    obj.other_summer_floriculture_water_saving = $('#other_summer_floriculture_water_saving').val();
    obj.other_summer_maize_water_saving = $('#other_summer_maize_water_saving').val();
    obj.other_summer_fodder_water_saving = $('#other_summer_fodder_water_saving').val();
    obj.other_summer_sugarcane_water_saving = $('#other_summer_sugarcane_water_saving').val();

    obj.other_funding_source = $('#other_Other_kharif_Paddy_FundingSource').val();

    //add crops




    //other crops
    //obj.other_kharif_othercrop_name = $('#other_kharif_othercrop_name').val();
    //obj.other_kharif_othercrop_area = $('#other_kharif_othercrop_area').val();
    //obj.other_kharif_othercrop_intervention = $('#other_kharif_othercrop_intervention').val();
    //obj.other_kharif_othercrop_water_saving = $('#other_kharif_othercrop_water_saving').val();
    //obj.other_kharif_othercrop_water_req = $('#other_kharif_othercrop_water_req').val();
    //obj.other_kharif_othercrop_gw_waterdemand = $('#other_kharif_othercrop_gw_waterdemand').text();
    //obj.other_kharif_othercrop_reduc_gw_demand = $('#other_kharif_othercrop_reduc_gw_demand').text();


    //obj.other_rabi_othercrop_name = $('#other_rabi_othercrop_name').val();
    //obj.other_rabi_othercrop_area = $('#other_rabi_othercrop_area').val();
    //obj.other_rabi_othercrop_intervention = $('#other_rabi_othercrop_intervention').val();
    //obj.other_rabi_othercrop_water_saving = $('#other_rabi_othercrop_water_saving').val();
    //obj.other_rabi_othercrop_water_req = $('#other_rabi_othercrop_water_req').val();


    obj.other_kharif_othercrop_name1 = $('#other_kharif_othercrop_name1').val();
    obj.other_kharif_othercrop_area1 = $('#other_kharif_othercrop_area1').val();
    obj.other_kharif_othercrop_invention_proposed1 = $('#other_kharif_othercrop_invention_proposed1').val();
    obj.other_kharif_othercrop_water_saving1 = $('#other_kharif_othercrop_water_saving1').val();
    obj.other_kharif_othercrop_water_req1 = other_kharif_othercrop_water_req1;
    obj.other_kharif_othercrop_waterdemand1 = other_kharif_othercrop_waterdemand1;
    obj.other_kharif_othercrop_reduction_gw_demand1 = other_kharif_othercrop_reduction_gw_demand1;

    obj.other_kharif_othercrop_name2 = $('#other_kharif_othercrop_name2').val();
    obj.other_kharif_othercrop_area2 = $('#other_kharif_othercrop_area2').val();
    obj.other_kharif_othercrop_invention_proposed2 = $('#other_kharif_othercrop_invention_proposed2').val();
    obj.other_kharif_othercrop_water_saving2 = $('#other_kharif_othercrop_water_saving2').val();
    obj.other_kharif_othercrop_water_req2 = other_kharif_othercrop_water_req2;
    obj.other_kharif_othercrop_waterdemand2 = other_kharif_othercrop_waterdemand2;
    obj.other_kharif_othercrop_reduction_gw_demand2 = other_kharif_othercrop_reduction_gw_demand2;

    obj.other_kharif_othercrop_name3 = $('#other_kharif_othercrop_name3').val();
    obj.other_kharif_othercrop_area3 = $('#other_kharif_othercrop_area3').val();
    obj.other_kharif_othercrop_invention_proposed3 = $('#other_kharif_othercrop_invention_proposed3').val();
    obj.other_kharif_othercrop_water_saving3 = $('#other_kharif_othercrop_water_saving3').val();
    obj.other_kharif_othercrop_water_req3 = other_kharif_othercrop_water_req3;
    obj.other_kharif_othercrop_waterdemand3 = other_kharif_othercrop_waterdemand3;
    obj.other_kharif_othercrop_reduction_gw_demand3 = other_kharif_othercrop_reduction_gw_demand3;

    obj.other_kharif_othercrop_name4 = $('#other_kharif_othercrop_name4').val();
    obj.other_kharif_othercrop_area4 = $('#other_kharif_othercrop_area4').val();
    obj.other_kharif_othercrop_invention_proposed4 = $('#other_kharif_othercrop_invention_proposed4').val();
    obj.other_kharif_othercrop_water_saving4 = $('#other_kharif_othercrop_water_saving4').val();
    obj.other_kharif_othercrop_water_req4 = other_kharif_othercrop_water_req4;
    obj.other_kharif_othercrop_waterdemand4 = other_kharif_othercrop_waterdemand4;
    obj.other_kharif_othercrop_reduction_gw_demand4 = other_kharif_othercrop_reduction_gw_demand4;

    obj.other_kharif_othercrop_name5 = $('#other_kharif_othercrop_name5').val();
    obj.other_kharif_othercrop_area5 = $('#other_kharif_othercrop_area5').val();
    obj.other_kharif_othercrop_invention_proposed5 = $('#other_kharif_othercrop_invention_proposed5').val();
    obj.other_kharif_othercrop_water_saving5 = $('#other_kharif_othercrop_water_saving5').val();
    obj.other_kharif_othercrop_water_req5 = other_kharif_othercrop_water_req5;
    obj.other_kharif_othercrop_waterdemand5 = other_kharif_othercrop_waterdemand5;
    obj.other_kharif_othercrop_reduction_gw_demand5 = other_kharif_othercrop_reduction_gw_demand5;


    obj.other_rabi_othercrop_name1 = $('#other_rabi_othercrop_name1').val();
    obj.other_rabi_othercrop_area1 = $('#other_rabi_othercrop_area1').val();
    obj.other_rabi_othercrop_invention_proposed1 = $('#other_rabi_othercrop_invention_proposed1').val();
    obj.other_rabi_othercrop_water_saving1 = $('#other_rabi_othercrop_water_saving1').val();
    obj.other_rabi_othercrop_water_req1 = other_rabi_othercrop_water_req1;
    obj.other_rabi_othercrop_waterdemand1 = other_rabi_othercrop_waterdemand1;
    obj.other_rabi_othercrop_reduction_gw_demand1 = other_rabi_othercrop_reduction_gw_demand1;

    obj.other_rabi_othercrop_name2 = $('#other_rabi_othercrop_name2').val();
    obj.other_rabi_othercrop_area2 = $('#other_rabi_othercrop_area2').val();
    obj.other_rabi_othercrop_invention_proposed2 = $('#other_rabi_othercrop_invention_proposed2').val();
    obj.other_rabi_othercrop_water_saving2 = $('#other_rabi_othercrop_water_saving2').val();
    obj.other_rabi_othercrop_water_req2 = other_rabi_othercrop_water_req2;
    obj.other_rabi_othercrop_waterdemand2 = other_rabi_othercrop_waterdemand2;
    obj.other_rabi_othercrop_reduction_gw_demand2 = other_rabi_othercrop_reduction_gw_demand2;

    obj.other_rabi_othercrop_name3 = $('#other_rabi_othercrop_name3').val();
    obj.other_rabi_othercrop_area3 = $('#other_rabi_othercrop_area3').val();
    obj.other_rabi_othercrop_invention_proposed3 = $('#other_rabi_othercrop_invention_proposed3').val();
    obj.other_rabi_othercrop_water_saving3 = $('#other_rabi_othercrop_water_saving3').val();
    obj.other_rabi_othercrop_water_req3 = other_rabi_othercrop_water_req3;
    obj.other_rabi_othercrop_waterdemand3 = other_rabi_othercrop_waterdemand3;
    obj.other_rabi_othercrop_reduction_gw_demand3 = other_rabi_othercrop_reduction_gw_demand3;

    obj.other_rabi_othercrop_name4 = $('#other_rabi_othercrop_name4').val();
    obj.other_rabi_othercrop_area4 = $('#other_rabi_othercrop_area4').val();
    obj.other_rabi_othercrop_invention_proposed4 = $('#other_rabi_othercrop_invention_proposed4').val();
    obj.other_rabi_othercrop_water_saving4 = $('#other_rabi_othercrop_water_saving4').val();
    obj.other_rabi_othercrop_water_req4 = other_rabi_othercrop_water_req4;
    obj.other_rabi_othercrop_waterdemand4 = other_rabi_othercrop_waterdemand4;
    obj.other_rabi_othercrop_reduction_gw_demand4 = other_rabi_othercrop_reduction_gw_demand4;

    obj.other_rabi_othercrop_name5 = $('#other_rabi_othercrop_name5').val();
    obj.other_rabi_othercrop_area5 = $('#other_rabi_othercrop_area5').val();
    obj.other_rabi_othercrop_invention_proposed5 = $('#other_rabi_othercrop_invention_proposed5').val();
    obj.other_rabi_othercrop_water_saving5 = $('#other_rabi_othercrop_water_saving5').val();
    obj.other_rabi_othercrop_water_req5 = other_rabi_othercrop_water_req5;
    obj.other_rabi_othercrop_waterdemand5 = other_rabi_othercrop_waterdemand5;
    obj.other_rabi_othercrop_reduction_gw_demand5 = other_rabi_othercrop_reduction_gw_demand5;


    obj.other_summer_othercrop_name1 = $('#other_summer_othercrop_name1').val();
    obj.other_summer_othercrop_area1 = $('#other_summer_othercrop_area1').val();
    obj.other_summer_othercrop_invention_proposed1 = $('#other_summer_othercrop_invention_proposed1').val();
    obj.other_summer_othercrop_water_saving1 = $('#other_summer_othercrop_water_saving1').val();
    obj.other_summer_othercrop_water_req1 = other_summer_othercrop_water_req1;
    obj.other_summer_othercrop_waterdemand1 = other_summer_othercrop_waterdemand1;
    obj.other_summer_othercrop_reduction_gw_demand1 = other_summer_othercrop_reduction_gw_demand1;

    obj.other_summer_othercrop_name2 = $('#other_summer_othercrop_name2').val();
    obj.other_summer_othercrop_area2 = $('#other_summer_othercrop_area2').val();
    obj.other_summer_othercrop_invention_proposed2 = $('#other_summer_othercrop_invention_proposed2').val();
    obj.other_summer_othercrop_water_saving2 = $('#other_summer_othercrop_water_saving2').val();
    obj.other_summer_othercrop_water_req2 = other_summer_othercrop_water_req2;
    obj.other_summer_othercrop_waterdemand2 = other_summer_othercrop_waterdemand2;
    obj.other_summer_othercrop_reduction_gw_demand2 = other_summer_othercrop_reduction_gw_demand2;

    obj.other_summer_othercrop_name3 = $('#other_summer_othercrop_name3').val();
    obj.other_summer_othercrop_area3 = $('#other_summer_othercrop_area3').val();
    obj.other_summer_othercrop_invention_proposed3 = $('#other_summer_othercrop_invention_proposed3').val();
    obj.other_summer_othercrop_water_saving3 = $('#other_summer_othercrop_water_saving3').val();
    obj.other_summer_othercrop_water_req3 = other_summer_othercrop_water_req3;
    obj.other_summer_othercrop_waterdemand3 = other_summer_othercrop_waterdemand3;
    obj.other_summer_othercrop_reduction_gw_demand3 = other_summer_othercrop_reduction_gw_demand3;

    obj.other_summer_othercrop_name4 = $('#other_summer_othercrop_name4').val();
    obj.other_summer_othercrop_area4 = $('#other_summer_othercrop_area4').val();
    obj.other_summer_othercrop_invention_proposed4 = $('#other_summer_othercrop_invention_proposed4').val();
    obj.other_summer_othercrop_water_saving4 = $('#other_summer_othercrop_water_saving4').val();
    obj.other_summer_othercrop_water_req4 = other_summer_othercrop_water_req4;
    obj.other_summer_othercrop_waterdemand4 = other_summer_othercrop_waterdemand4;
    obj.other_summer_othercrop_reduction_gw_demand4 = other_summer_othercrop_reduction_gw_demand4;

    obj.other_summer_othercrop_name5 = $('#other_summer_othercrop_name5').val();
    obj.other_summer_othercrop_area5 = $('#other_summer_othercrop_area5').val();
    obj.other_summer_othercrop_invention_proposed5 = $('#other_summer_othercrop_invention_proposed5').val();
    obj.other_summer_othercrop_water_saving5 = $('#other_summer_othercrop_water_saving5').val();
    obj.other_summer_othercrop_water_req5 = other_summer_othercrop_water_req5;
    obj.other_summer_othercrop_waterdemand5 = other_summer_othercrop_waterdemand5;
    obj.other_summer_othercrop_reduction_gw_demand5 = other_summer_othercrop_reduction_gw_demand5;


    //Otherr




    obj.other_kharif_othercrop_name1 = $('#other_kharif_othercrop_name1').val();
    obj.other_kharif_othercrop_area1 = $('#other_kharif_othercrop_area1').val();
    obj.other_kharif_othercrop_invention_proposed1 = $('#other_kharif_othercrop_invention_proposed1').val();
    obj.other_kharif_othercrop_water_saving1 = $('#other_kharif_othercrop_water_saving1').val();
    obj.other_kharif_othercrop_water_req1 = other_kharif_othercrop_water_req1;
    obj.other_kharif_othercrop_waterdemand1 = other_kharif_othercrop_waterdemand1;
    obj.other_kharif_othercrop_reduction_gw_demand1 = other_kharif_othercrop_reduction_gw_demand1;

    obj.other_kharif_othercrop_name2 = $('#other_kharif_othercrop_name2').val();
    obj.other_kharif_othercrop_area2 = $('#other_kharif_othercrop_area2').val();
    obj.other_kharif_othercrop_invention_proposed2 = $('#other_kharif_othercrop_invention_proposed2').val();
    obj.other_kharif_othercrop_water_saving2 = $('#other_kharif_othercrop_water_saving2').val();
    obj.other_kharif_othercrop_water_req2 = other_kharif_othercrop_water_req2;
    obj.other_kharif_othercrop_waterdemand2 = other_kharif_othercrop_waterdemand2;
    obj.other_kharif_othercrop_reduction_gw_demand2 = other_kharif_othercrop_reduction_gw_demand2;

    obj.other_kharif_othercrop_name3 = $('#other_kharif_othercrop_name3').val();
    obj.other_kharif_othercrop_area3 = $('#other_kharif_othercrop_area3').val();
    obj.other_kharif_othercrop_invention_proposed3 = $('#other_kharif_othercrop_invention_proposed3').val();
    obj.other_kharif_othercrop_water_saving3 = $('#other_kharif_othercrop_water_saving3').val();
    obj.other_kharif_othercrop_water_req3 = other_kharif_othercrop_water_req3;
    obj.other_kharif_othercrop_waterdemand3 = other_kharif_othercrop_waterdemand3;
    obj.other_kharif_othercrop_reduction_gw_demand3 = other_kharif_othercrop_reduction_gw_demand3;

    obj.other_kharif_othercrop_name4 = $('#other_kharif_othercrop_name4').val();
    obj.other_kharif_othercrop_area4 = $('#other_kharif_othercrop_area4').val();
    obj.other_kharif_othercrop_invention_proposed4 = $('#other_kharif_othercrop_invention_proposed4').val();
    obj.other_kharif_othercrop_water_saving4 = $('#other_kharif_othercrop_water_saving4').val();
    obj.other_kharif_othercrop_water_req4 = other_kharif_othercrop_water_req4;
    obj.other_kharif_othercrop_waterdemand4 = other_kharif_othercrop_waterdemand4;
    obj.other_kharif_othercrop_reduction_gw_demand4 = other_kharif_othercrop_reduction_gw_demand4;

    obj.other_kharif_othercrop_name5 = $('#other_kharif_othercrop_name5').val();
    obj.other_kharif_othercrop_area5 = $('#other_kharif_othercrop_area5').val();
    obj.other_kharif_othercrop_invention_proposed5 = $('#other_kharif_othercrop_invention_proposed5').val();
    obj.other_kharif_othercrop_water_saving5 = $('#other_kharif_othercrop_water_saving5').val();
    obj.other_kharif_othercrop_water_req5 = other_kharif_othercrop_water_req5;
    obj.other_kharif_othercrop_waterdemand5 = other_kharif_othercrop_waterdemand5;
    obj.other_kharif_othercrop_reduction_gw_demand5 = other_kharif_othercrop_reduction_gw_demand5;


    obj.other_rabi_othercrop_name1 = $('#other_rabi_othercrop_name1').val();
    obj.other_rabi_othercrop_area1 = $('#other_rabi_othercrop_area1').val();
    obj.other_rabi_othercrop_invention_proposed1 = $('#other_rabi_othercrop_invention_proposed1').val();
    obj.other_rabi_othercrop_water_saving1 = $('#other_rabi_othercrop_water_saving1').val();
    obj.other_rabi_othercrop_water_req1 = other_rabi_othercrop_water_req1;
    obj.other_rabi_othercrop_waterdemand1 = other_rabi_othercrop_waterdemand1;
    obj.other_rabi_othercrop_reduction_gw_demand1 = other_rabi_othercrop_reduction_gw_demand1;

    obj.other_rabi_othercrop_name2 = $('#other_rabi_othercrop_name2').val();
    obj.other_rabi_othercrop_area2 = $('#other_rabi_othercrop_area2').val();
    obj.other_rabi_othercrop_invention_proposed2 = $('#other_rabi_othercrop_invention_proposed2').val();
    obj.other_rabi_othercrop_water_saving2 = $('#other_rabi_othercrop_water_saving2').val();
    obj.other_rabi_othercrop_water_req2 = other_rabi_othercrop_water_req2;
    obj.other_rabi_othercrop_waterdemand2 = other_rabi_othercrop_waterdemand2;
    obj.other_rabi_othercrop_reduction_gw_demand2 = other_rabi_othercrop_reduction_gw_demand2;

    obj.other_rabi_othercrop_name3 = $('#other_rabi_othercrop_name3').val();
    obj.other_rabi_othercrop_area3 = $('#other_rabi_othercrop_area3').val();
    obj.other_rabi_othercrop_invention_proposed3 = $('#other_rabi_othercrop_invention_proposed3').val();
    obj.other_rabi_othercrop_water_saving3 = $('#other_rabi_othercrop_water_saving3').val();
    obj.other_rabi_othercrop_water_req3 = other_rabi_othercrop_water_req3;
    obj.other_rabi_othercrop_waterdemand3 = other_rabi_othercrop_waterdemand3;
    obj.other_rabi_othercrop_reduction_gw_demand3 = other_rabi_othercrop_reduction_gw_demand3;

    obj.other_rabi_othercrop_name4 = $('#other_rabi_othercrop_name4').val();
    obj.other_rabi_othercrop_area4 = $('#other_rabi_othercrop_area4').val();
    obj.other_rabi_othercrop_invention_proposed4 = $('#other_rabi_othercrop_invention_proposed4').val();
    obj.other_rabi_othercrop_water_saving4 = $('#other_rabi_othercrop_water_saving4').val();
    obj.other_rabi_othercrop_water_req4 = other_rabi_othercrop_water_req4;
    obj.other_rabi_othercrop_waterdemand4 = other_rabi_othercrop_waterdemand4;
    obj.other_rabi_othercrop_reduction_gw_demand4 = other_rabi_othercrop_reduction_gw_demand4;

    obj.other_rabi_othercrop_name5 = $('#other_rabi_othercrop_name5').val();
    obj.other_rabi_othercrop_area5 = $('#other_rabi_othercrop_area5').val();
    obj.other_rabi_othercrop_invention_proposed5 = $('#other_rabi_othercrop_invention_proposed5').val();
    obj.other_rabi_othercrop_water_saving5 = $('#other_rabi_othercrop_water_saving5').val();
    obj.other_rabi_othercrop_water_req5 = other_rabi_othercrop_water_req5;
    obj.other_rabi_othercrop_waterdemand5 = other_rabi_othercrop_waterdemand5;
    obj.other_rabi_othercrop_reduction_gw_demand5 = other_rabi_othercrop_reduction_gw_demand5;


    obj.other_summer_othercrop_name1 = $('#other_summer_othercrop_name1').val();
    obj.other_summer_othercrop_area1 = $('#other_summer_othercrop_area1').val();
    obj.other_summer_othercrop_invention_proposed1 = $('#other_summer_othercrop_invention_proposed1').val();
    obj.other_summer_othercrop_water_saving1 = $('#other_summer_othercrop_water_saving1').val();
    obj.other_summer_othercrop_water_req1 = other_summer_othercrop_water_req1;
    obj.other_summer_othercrop_waterdemand1 = other_summer_othercrop_waterdemand1;
    obj.other_summer_othercrop_reduction_gw_demand1 = other_summer_othercrop_reduction_gw_demand1;

    obj.other_summer_othercrop_name2 = $('#other_summer_othercrop_name2').val();
    obj.other_summer_othercrop_area2 = $('#other_summer_othercrop_area2').val();
    obj.other_summer_othercrop_invention_proposed2 = $('#other_summer_othercrop_invention_proposed2').val();
    obj.other_summer_othercrop_water_saving2 = $('#other_summer_othercrop_water_saving2').val();
    obj.other_summer_othercrop_water_req2 = other_summer_othercrop_water_req2;
    obj.other_summer_othercrop_waterdemand2 = other_summer_othercrop_waterdemand2;
    obj.other_summer_othercrop_reduction_gw_demand2 = other_summer_othercrop_reduction_gw_demand2;

    obj.other_summer_othercrop_name3 = $('#other_summer_othercrop_name3').val();
    obj.other_summer_othercrop_area3 = $('#other_summer_othercrop_area3').val();
    obj.other_summer_othercrop_invention_proposed3 = $('#other_summer_othercrop_invention_proposed3').val();
    obj.other_summer_othercrop_water_saving3 = $('#other_summer_othercrop_water_saving3').val();
    obj.other_summer_othercrop_water_req3 = other_summer_othercrop_water_req3;
    obj.other_summer_othercrop_waterdemand3 = other_summer_othercrop_waterdemand3;
    obj.other_summer_othercrop_reduction_gw_demand3 = other_summer_othercrop_reduction_gw_demand3;

    obj.other_summer_othercrop_name4 = $('#other_summer_othercrop_name4').val();
    obj.other_summer_othercrop_area4 = $('#other_summer_othercrop_area4').val();
    obj.other_summer_othercrop_invention_proposed4 = $('#other_summer_othercrop_invention_proposed4').val();
    obj.other_summer_othercrop_water_saving4 = $('#other_summer_othercrop_water_saving4').val();
    obj.other_summer_othercrop_water_req4 = other_summer_othercrop_water_req4;
    obj.other_summer_othercrop_waterdemand4 = other_summer_othercrop_waterdemand4;
    obj.other_summer_othercrop_reduction_gw_demand4 = other_summer_othercrop_reduction_gw_demand4;

    obj.other_summer_othercrop_name5 = $('#other_summer_othercrop_name5').val();
    obj.other_summer_othercrop_area5 = $('#other_summer_othercrop_area5').val();
    obj.other_summer_othercrop_invention_proposed5 = $('#other_summer_othercrop_invention_proposed5').val();
    obj.other_summer_othercrop_water_saving5 = $('#other_summer_othercrop_water_saving5').val();
    obj.other_summer_othercrop_water_req5 = other_summer_othercrop_water_req5;
    obj.other_summer_othercrop_waterdemand5 = other_summer_othercrop_waterdemand5;
    obj.other_summer_othercrop_reduction_gw_demand5 = other_summer_othercrop_reduction_gw_demand5;





    //obj.other_rabi_othercrop_gw_waterdemand = $('#other_rabi_othercrop_gw_waterdemand').text();
    //obj.other_rabi_othercrop_reduc_gw_demand = $('#other_rabi_othercrop_reduc_gw_demand').text();

    //obj.other_summer_othercrop_name = $('#other_summer_othercrop_name').val();
    //obj.other_summer_othercrop_area = $('#other_summer_othercrop_area').val();
    //obj.other_summer_othercrop_intervention = $('#other_summer_othercrop_intervention').val();
    //obj.other_summer_othercrop_water_saving = $('#other_summer_othercrop_water_saving').val();
    //obj.other_summer_othercrop_water_req = $('#other_summer_othercrop_water_req').val();
    //obj.other_summer_othercrop_gw_waterdemand = $('#other_summer_othercrop_gw_waterdemand').text();
    //obj.other_summer_othercrop_reduc_gw_demand = $('#other_summer_othercrop_reduc_gw_demand').text();


    obj.other_kharif_paddy_water_req = parseFloat(other_kharif_paddy_water_req);
    obj.other_kharif_paddy_water_demand = parseFloat(other_kharif_paddy_water_demand).toFixed(2);
    obj.other_kharif_paddy_reduc_gw_demand = parseFloat(other_kharif_paddy_reduc_gw_demand).toFixed(2);

    obj.other_kharif_ragi_water_req = parseFloat(other_kharif_ragi_water_req);
    obj.other_kharif_ragi_water_demand = parseFloat(other_kharif_ragi_water_demand).toFixed(2);
    obj.other_kharif_ragi_reduc_gw_demand = parseFloat(other_kharif_ragi_reduc_gw_demand).toFixed(2);

    obj.other_kharif_groundnut_water_req = parseFloat(other_kharif_groundnut_water_req);
    obj.other_kharif_groundnut_water_demand = parseFloat(other_kharif_groundnut_water_demand).toFixed(2);
    obj.other_kharif_groundnut_reduc_gw_demand = parseFloat(other_kharif_groundnut_reduc_gw_demand).toFixed(2);

    obj.other_kharif_sugarcane_water_req = parseFloat(other_kharif_sugarcane_water_req);
    obj.other_kharif_sugarcane_water_demand = parseFloat(other_kharif_sugarcane_water_demand).toFixed(2);
    obj.other_kharif_sugarcane_reduc_gw_demand = parseFloat(other_kharif_sugarcane_reduc_gw_demand).toFixed(2);

    obj.other_kharif_tomoto_water_req = parseFloat(other_kharif_tomoto_water_req);
    obj.other_kharif_tomoto_water_demand = parseFloat(other_kharif_tomoto_water_demand).toFixed(2);
    obj.other_kharif_tomoto_reduc_gw_demand = parseFloat(other_kharif_tomoto_reduc_gw_demand).toFixed(2);

    //obj.other_kharif_cabbage_water_req = parseFloat(other_kharif_cabbage_water_req).toFixed(2);
    //obj.other_kharif_cabbage_water_demand = parseFloat(other_kharif_cabbage_water_demand).toFixed(2);
    //obj.other_kharif_cabbage_reduc_gw_demand = parseFloat(other_kharif_cabbage_reduc_gw_demand).toFixed(2);

    //obj.other_kharif_beans_water_req = parseFloat(other_kharif_beans_water_req).toFixed(2);
    //obj.other_kharif_beans_water_demand = parseFloat(other_kharif_beans_water_demand).toFixed(2);
    //obj.other_kharif_beans_reduc_gw_demand = parseFloat(other_kharif_beans_reduc_gw_demand).toFixed(2);

    obj.other_kharif_floriculture_water_req = parseFloat(other_kharif_floriculture_water_req);
    obj.other_kharif_floriculture_water_demand = parseFloat(other_kharif_floriculture_water_demand).toFixed(2);
    obj.other_kharif_floriculture_reduc_gw_demand = parseFloat(other_kharif_floriculture_reduc_gw_demand).toFixed(2);

    obj.other_kharif_sericulture_water_req = parseFloat(other_kharif_sericulture_water_req);
    obj.other_kharif_sericulture_water_demand = parseFloat(other_kharif_sericulture_water_demand).toFixed(2);
    obj.other_kharif_sericulture_reduc_gw_demand = parseFloat(other_kharif_sericulture_reduc_gw_demand).toFixed(2);

    //obj.other_kharif_cucumber_water_req = parseFloat(other_kharif_cucumber_water_req).toFixed(2);
    //obj.other_kharif_cucumber_water_demand = parseFloat(other_kharif_cucumber_water_demand).toFixed(2);
    //obj.other_kharif_cucumber_reduc_gw_demand = parseFloat(other_kharif_cucumber_reduc_gw_demand).toFixed(2);

    obj.other_kharif_banana_water_req = parseFloat(other_kharif_banana_water_req);
    obj.other_kharif_banana_water_demand = parseFloat(other_kharif_banana_water_demand).toFixed(2);
    obj.other_kharif_banana_reduc_gw_demand = parseFloat(other_kharif_banana_reduc_gw_demand).toFixed(2);



    obj.other_rabi_sericulture_water_req = parseFloat(other_rabi_sericulture_water_req);
    obj.other_rabi_sericulture_water_demand = parseFloat(other_rabi_sericulture_water_demand).toFixed(2);
    obj.other_rabi_sericulture_reduc_gw_demand = parseFloat(other_rabi_sericulture_reduc_gw_demand).toFixed(2);

    obj.other_rabi_tomoto_water_req = parseFloat(other_rabi_tomoto_water_req);
    obj.other_rabi_tomoto_water_demand = parseFloat(other_rabi_tomoto_water_demand).toFixed(2);
    obj.other_rabi_tomoto_reduc_gw_demand = parseFloat(other_rabi_tomoto_reduc_gw_demand).toFixed(2);

    // obj.other_rabi_cabbage_water_req = parseFloat(other_rabi_cabbage_water_req).toFixed(2);
    //  obj.other_rabi_cabbage_water_demand = parseFloat(other_rabi_cabbage_water_demand).toFixed(2);
    //  obj.other_rabi_cabbage_reduc_gw_demand = parseFloat(other_rabi_cabbage_reduc_gw_demand).toFixed(2);

    //obj.other_rabi_beans_water_req = parseFloat(other_rabi_beans_water_req).toFixed(2);
    //obj.other_rabi_beans_water_demand = parseFloat(other_rabi_beans_water_demand).toFixed(2);
    //obj.other_rabi_beans_reduc_gw_demand = parseFloat(other_rabi_beans_reduc_gw_demand).toFixed(2);

    obj.other_rabi_floriculture_water_req = parseFloat(other_rabi_floriculture_water_req);
    obj.other_rabi_floriculture_water_demand = parseFloat(other_rabi_floriculture_water_demand).toFixed(2);
    obj.other_rabi_floriculture_reduc_gw_demand = parseFloat(other_rabi_floriculture_reduc_gw_demand).toFixed(2);

    // obj.other_rabi_potato_water_req = parseFloat(other_rabi_potato_water_req).toFixed(2);
    // obj.other_rabi_potato_water_demand = parseFloat(other_rabi_potato_water_demand).toFixed(2);
    // obj.other_rabi_potato_reduc_gw_demand = parseFloat(other_rabi_potato_reduc_gw_demand).toFixed(2);

    // obj.other_rabi_cucumber_water_req = parseFloat(other_rabi_cucumber_water_req).toFixed(2);
    // obj.other_rabi_cucumber_water_demand = parseFloat(other_rabi_cucumber_water_demand).toFixed(2);
    // obj.other_rabi_cucumber_reduc_gw_demand = parseFloat(other_rabi_cucumber_reduc_gw_demand).toFixed(2);

    obj.other_rabi_ragi_water_req = parseFloat(other_rabi_ragi_water_req);
    obj.other_rabi_ragi_water_demand = parseFloat(other_rabi_ragi_water_demand).toFixed(2);
    obj.other_rabi_ragi_reduc_gw_demand = parseFloat(other_rabi_ragi_reduc_gw_demand).toFixed(2);

    obj.other_rabi_sugarcane_water_req = parseFloat(other_rabi_sugarcane_water_req);
    obj.other_rabi_sugarcane_water_demand = parseFloat(other_rabi_sugarcane_water_demand).toFixed(2);
    obj.other_rabi_sugarcane_reduc_gw_demand = parseFloat(other_rabi_sugarcane_reduc_gw_demand).toFixed(2);

    obj.other_rabi_maize_water_req = parseFloat(other_rabi_maize_water_req);
    obj.other_rabi_maize_water_demand = parseFloat(other_rabi_maize_water_demand).toFixed(2);
    obj.other_rabi_maize_reduc_gw_demand = parseFloat(other_rabi_maize_reduc_gw_demand).toFixed(2);

    obj.other_rabi_fodder_water_req = parseFloat(other_rabi_fodder_water_req);
    obj.other_rabi_fodder_water_demand = parseFloat(other_rabi_fodder_water_demand).toFixed(2);
    obj.other_rabi_fodder_reduc_gw_demand = parseFloat(other_rabi_fodder_reduc_gw_demand).toFixed(2);

    obj.other_rabi_paddy_water_req = parseFloat(other_rabi_paddy_water_req);
    obj.other_rabi_paddy_water_demand = parseFloat(other_rabi_paddy_water_demand).toFixed(2);
    obj.other_rabi_paddy_reduc_gw_demand = parseFloat(other_rabi_paddy_reduc_gw_demand).toFixed(2);

    obj.other_rabi_alfalfa_water_req = parseFloat(other_rabi_alfalfa_water_req);
    obj.other_rabi_alfalfa_water_demand = parseFloat(other_rabi_alfalfa_water_demand).toFixed(2);
    obj.other_rabi_alfalfa_reduc_gw_demand = parseFloat(other_rabi_alfalfa_reduc_gw_demand).toFixed(2);

    //obj.other_rabi_onion_water_req = parseFloat(other_rabi_onion_water_req).toFixed(2);
    // obj.other_rabi_onion_water_demand = parseFloat(other_rabi_onion_water_demand).toFixed(2);
    // obj.other_rabi_onion_reduc_gw_demand = parseFloat(other_rabi_onion_reduc_gw_demand).toFixed(2);

    obj.other_rabi_horticulture_water_req = parseFloat(other_rabi_horticulture_water_req);
    obj.other_rabi_horticulture_water_demand = parseFloat(other_rabi_horticulture_water_demand).toFixed(2);
    obj.other_rabi_horticulture_reduc_gw_demand = parseFloat(other_rabi_horticulture_reduc_gw_demand).toFixed(2);

    obj.other_rabi_sunflower_water_req = parseFloat(other_rabi_sunflower_water_req);
    obj.other_rabi_sunflower_water_demand = parseFloat(other_rabi_sunflower_water_demand).toFixed(2);
    obj.other_rabi_sunflower_reduc_gw_demand = parseFloat(other_rabi_sunflower_reduc_gw_demand).toFixed(2);



    obj.other_summer_sericulture_water_req = parseFloat(other_summer_sericulture_water_req);
    obj.other_summer_sericulture_water_demand = parseFloat(other_summer_sericulture_water_demand).toFixed(2);
    obj.other_summer_sericulture_reduc_gw_demand = parseFloat(other_summer_sericulture_reduc_gw_demand).toFixed(2);

    obj.other_summer_tomoto_water_req = parseFloat(other_summer_tomoto_water_req);
    obj.other_summer_tomoto_water_demand = parseFloat(other_summer_tomoto_water_demand).toFixed(2);
    obj.other_summer_tomoto_reduc_gw_demand = parseFloat(other_summer_tomoto_reduc_gw_demand).toFixed(2);

    //obj.other_summer_cabbage_water_req = parseFloat(other_summer_cabbage_water_req).toFixed(2);
    //obj.other_summer_cabbage_water_demand = parseFloat(other_summer_cabbage_water_demand).toFixed(2);
    //obj.other_summer_cabbage_reduc_gw_demand = parseFloat(other_summer_cabbage_reduc_gw_demand).toFixed(2);

    //obj.other_summer_beans_water_req = parseFloat(other_summer_beans_water_req).toFixed(2);
    // obj.other_summer_beans_water_demand = parseFloat(other_summer_beans_water_demand).toFixed(2);
    // obj.other_summer_beans_reduc_gw_demand = parseFloat(other_summer_beans_reduc_gw_demand).toFixed(2);

    obj.other_summer_floriculture_water_req = parseFloat(other_summer_floriculture_water_req);
    obj.other_summer_floriculture_water_demand = parseFloat(other_summer_floriculture_water_demand).toFixed(2);
    obj.other_summer_floriculture_reduc_gw_demand = parseFloat(other_summer_floriculture_reduc_gw_demand).toFixed(2);

    obj.other_summer_maize_water_req = parseFloat(other_summer_maize_water_req);
    obj.other_summer_maize_water_demand = parseFloat(other_summer_maize_water_demand).toFixed(2);
    obj.other_summer_maize_reduc_gw_demand = parseFloat(other_summer_maize_reduc_gw_demand).toFixed(2);

    obj.other_summer_fodder_water_req = parseFloat(other_summer_fodder_water_req);
    obj.other_summer_fodder_water_demand = parseFloat(other_summer_fodder_water_demand).toFixed(2);
    obj.other_summer_fodder_reduc_gw_demand = parseFloat(other_summer_fodder_reduc_gw_demand).toFixed(2);

    obj.other_summer_sugarcane_water_req = parseFloat(other_summer_sugarcane_water_req);
    obj.other_summer_sugarcane_water_demand = parseFloat(other_summer_sugarcane_water_demand).toFixed(2);
    obj.other_summer_sugarcane_reduc_gw_demand = parseFloat(other_summer_sugarcane_reduc_gw_demand).toFixed(2);

    obj.other_kharif_fodder_water_req = parseFloat(other_kharif_fodder_water_req);
    obj.other_kharif_fodder_water_demand = parseFloat(other_kharif_fodder_water_demand).toFixed(2);
    obj.other_kharif_fodder_reduc_gw_demand = parseFloat(other_kharif_fodder_reduc_gw_demand).toFixed(2);

    obj.other_kharif_maize_water_req = parseFloat(other_kharif_maize_water_req);
    obj.other_kharif_maize_water_demand = parseFloat(other_kharif_maize_water_demand).toFixed(2);
    obj.other_kharif_maize_reduc_gw_demand = parseFloat(other_kharif_maize_reduc_gw_demand).toFixed(2);

    //   obj.other_kharif_potato_water_req = parseFloat(other_kharif_potato_water_req).toFixed(2);
    //   obj.other_kharif_potato_water_demand = parseFloat(other_kharif_potato_water_demand).toFixed(2);
    //   obj.other_kharif_potato_reduc_gw_demand = parseFloat(other_kharif_potato_reduc_gw_demand).toFixed(2);

    obj.other_kharif_chillies_water_req = parseFloat(other_kharif_chillies_water_req);
    obj.other_kharif_chillies_water_demand = parseFloat(other_kharif_chillies_water_demand).toFixed(2);
    obj.other_kharif_chillies_reduc_gw_demand = parseFloat(other_kharif_chillies_reduc_gw_demand).toFixed(2);

    obj.other_kharif_cotton_water_req = parseFloat(other_kharif_cotton_water_req);
    obj.other_kharif_cotton_water_demand = parseFloat(other_kharif_cotton_water_demand).toFixed(2);
    obj.other_kharif_cotton_reduc_gw_demand = parseFloat(other_kharif_cotton_reduc_gw_demand).toFixed(2);

    obj.other_kharif_melon_water_req = parseFloat(other_kharif_melon_water_req);
    obj.other_kharif_melon_water_demand = parseFloat(other_kharif_melon_water_demand).toFixed(2);
    obj.other_kharif_melon_reduc_gw_demand = parseFloat(other_kharif_melon_reduc_gw_demand).toFixed(2);

    obj.other_kharif_citrus_water_req = parseFloat(other_kharif_citrus_water_req);
    obj.other_kharif_citrus_water_demand = parseFloat(other_kharif_citrus_water_demand).toFixed(2);
    obj.other_kharif_citrus_reduc_gw_demand = parseFloat(other_kharif_citrus_reduc_gw_demand).toFixed(2);

    // obj.other_kharif_peanut_water_req = parseFloat(other_kharif_peanut_water_req).toFixed(2);
    // obj.other_kharif_peanut_water_demand = parseFloat(other_kharif_peanut_water_demand).toFixed(2);
    // obj.other_kharif_peanut_reduc_gw_demand = parseFloat(other_kharif_peanut_reduc_gw_demand).toFixed(2);

    obj.other_kharif_horticulture_water_req = parseFloat(other_kharif_horticulture_water_req);
    obj.other_kharif_horticulture_water_demand = parseFloat(other_kharif_horticulture_water_demand).toFixed(2);
    obj.other_kharif_horticulture_reduc_gw_demand = parseFloat(other_kharif_horticulture_reduc_gw_demand).toFixed(2);




    obj.other_summer_horticulture_crop_area = $('#other_summer_horticulture_crop_area').val();
    obj.other_summer_horticulture_invention_proposed = $('#other_summer_horticulture_invention_proposed').val();
    obj.other_summer_horticulture_water_saving = $('#other_summer_horticulture_water_saving').val();


    obj.other_summer_horticulture_water_req = parseFloat(other_summer_horticulture_water_req);
    obj.other_summer_horticulture_waterdemand = parseFloat(other_summer_horticulture_waterdemand).toFixed(2);
    obj.other_summer_horticulture_reduction_gw_deman = parseFloat(other_summer_horticulture_reduction_gw_deman).toFixed(2);


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSPHome/OtherSaveData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Saved Successfully" && response != "Logout" && response != "valid_negitive") {
                window.location = "/Error/DefaultError";
            }
            $('#SAVE_BTN').prop('disabled', false);

            //$('#ar_Error').text(response);

            //Draft_Report();
            //Availabilty_Report();
        }
    });
}

function OtherPopup(SS) {
    Other_measure__Kharif_WaterRequire();
    Other_measure_Rabi_WaterRequire();
    Other_measure_Crop_WaterRequire();

    if (SS == "Other_measure_kharif_Paddy_UserVale") {

        $('#Other_Individual_Name').text("Paddy");

        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_paddy_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_paddy_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Ragi_UserVale") {

        $('#Other_Individual_Name').text("Ragi");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_ragi_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_ragi_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_GroundNut_UserVale") {
        $('#Other_Individual_Name').text("Groundnut");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_groundnut_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_groundnut_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Sugarcane_UserVale") {
        $('#Other_Individual_Name').text("Sugarcane");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_sugarcane_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_sugarcane_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Tomato_UserVale") {
        $('#Other_Individual_Name').text("Veletables");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_tomoto_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_tomoto_reduc_gw_demand).toFixed(2));

    }
    //else if (SS == "Other_measure_kharif_Cabbage_UserVale") {
    //    $('#Other_Individual_Name').text("Cabbage");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_cabbage_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_cabbage_reduc_gw_demand).toFixed(2));

    //}

    //else if (SS == "Other_measure_kharif_Beans_UserVale") {
    //    $('#Other_Individual_Name').text("Beans");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_beans_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_beans_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_kharif_Floriculture_UserVale") {
        $('#Other_Individual_Name').text("Floriculture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_floriculture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_floriculture_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Sericulture_UserVale") {
        $('#Other_Individual_Name').text("Sericulture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_sericulture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_sericulture_reduc_gw_demand).toFixed(2));

    }
    //else if (SS == "Other_measure_kharif_Cucumber_UserVale") {
    //    $('#Other_Individual_Name').text("Cucumber");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_cucumber_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_cucumber_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_kharif_Banana_UserVale") {
        $('#Other_Individual_Name').text("Banana");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_banana_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_banana_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Fodder_UserVale") {
        $('#Other_Individual_Name').text("Fodder");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_fodder_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_fodder_reduc_gw_demand).toFixed(2));

    }

    else if (SS == "Other_measure_kharif_Maize_UserVale") {
        $('#Other_Individual_Name').text("Maize");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_maize_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_maize_reduc_gw_demand).toFixed(2));

    }
    //else if (SS == "Other_measure_kharif_Potato_UserVale") {
    //    $('#Other_Individual_Name').text("Potato");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_potato_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_potato_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_kharif_Chillies_UserVale") {
        $('#Other_Individual_Name').text("Chillies");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_chillies_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_chillies_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Cotton_UserVale") {
        $('#Other_Individual_Name').text("Cotton");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_cotton_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_cotton_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Melon_UserVale") {
        $('#Other_Individual_Name').text("Melon");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_melon_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_melon_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_kharif_Citrus_UserVale") {
        $('#Other_Individual_Name').text("Citrus");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_citrus_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_citrus_reduc_gw_demand).toFixed(2));

    }



    //else if (SS == "Other_measure_kharif_Peanut_UserVale") {
    //    $('#Other_Individual_Name').text("Peanut");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_peanut_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_peanut_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_kharif_Horticulture_UserVale") {
        $('#Other_Individual_Name').text("Horticulture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_horticulture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_horticulture_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "other_kharif_othercrop_area") {
        var CropName = $('#other_kharif_othercrop_name').val();
        $('#Other_Individual_Name').text(CropName);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_othercrop_gw_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_othercrop_reduc_gw_demand).toFixed(2));

    }


    //Rabbi

    else if (SS == "Other_measure_Rabi_Sericulture_UserVale") {
        $('#Other_Individual_Name').text("Sericulture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_sericulture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_sericulture_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Rabi_Tomota_UserVale") {
        $('#Other_Individual_Name').text("Veletables");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_tomoto_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_tomoto_reduc_gw_demand).toFixed(2));

    }
    //else if (SS == "Other_measure_Rabi_Cabbage_UserVale") {
    //    $('#Other_Individual_Name').text("Cabbage");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_cabbage_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_cabbage_reduc_gw_demand).toFixed(2));

    //}
    //else if (SS == "Other_measure_Rabi_Beans_UserVale") {
    //    $('#Other_Individual_Name').text("Beans");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_beans_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_beans_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_Rabi_Floriculture_UserVale") {
        $('#Other_Individual_Name').text("Floriculture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_floriculture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_floriculture_reduc_gw_demand).toFixed(2));

    }
    //else if (SS == "Other_measure_Rabi_Potato_UserVale") {
    //    $('#Other_Individual_Name').text("Potato");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_potato_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_potato_reduc_gw_demand).toFixed(2));

    //}
    //else if (SS == "Other_measure_Rabi_Cucumber_UserVale") {
    //    $('#Other_Individual_Name').text("Cucumber");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_cucuber_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_cucuber_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_Rabi_Ragi_UserVale") {
        $('#Other_Individual_Name').text("Ragi");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_ragi_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_ragi_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Rabi_Sugarcane_UserVale") {
        $('#Other_Individual_Name').text("Sugarcane");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_sugarcane_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_sugarcane_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Rabi_Maize_UserVale") {
        $('#Other_Individual_Name').text("Maize");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_maize_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_maize_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Rabi_Fodder_UserVale") {
        $('#Other_Individual_Name').text("Fodder");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_fodder_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_fodder_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Rabi_Paddy_UserVale") {
        $('#Other_Individual_Name').text("Paddy");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_paddy_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_paddy_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Rabi_Alfalfa_UserVale") {
        $('#Other_Individual_Name').text("Alfalfa");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_alfalfa_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_alfalfa_reduc_gw_demand).toFixed(2));

    }
    //else if (SS == "Other_measure_Rabi_Onion_UserVale") {
    //    $('#Other_Individual_Name').text("Onion");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_onion_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_onion_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_Rabi_Horticulture_UserVale") {
        $('#Other_Individual_Name').text("Horticulture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_horticulture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_horticulture_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Rabi_Sunflower_UserVale") {
        $('#Other_Individual_Name').text("Sunflower");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_sunflower_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_sunflower_reduc_gw_demand).toFixed(2));

    }
    //else if (SS == "other_kharif_othercrop_area") {
    //    var CropName = $('#other_kharif_othercrop_name').val();
    //    $('#Other_Individual_Name').text(CropName);
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_othercrop_gw_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_othercrop_reduc_gw_demand).toFixed(2));

    //}

    //else if (SS == "other_rabi_othercrop_area") {
    //    var CropName = $('#other_rabi_othercrop_name').val();
    //    $('#Other_Individual_Name').text(CropName);
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_othercrop_gw_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_othercrop_reduc_gw_demand).toFixed(2));

    //}

    else if (SS == "Other_measure_Crop_Sericulture_UserVale") {
        $('#Other_Individual_Name').text("Sericulture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_sericulture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_sericulture_reduc_gw_demand).toFixed(2));
    }
    else if (SS == "Other_measure_Crop_Tomota_UserVale") {
        $('#Other_Individual_Name').text("Veletables");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_tomoto_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_tomoto_reduc_gw_demand).toFixed(2));
    }
    //else if (SS == "Other_measure_Crop_Cabbage_UserVale") {
    //    $('#Other_Individual_Name').text("Cabbage");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_cabbage_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_cabbage_reduc_gw_demand).toFixed(2));

    //}
    //else if (SS == "Other_measure_Crop_Beans_UserVale") {
    //    $('#Other_Individual_Name').text("Beans");
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_beans_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_beans_reduc_gw_demand).toFixed(2));

    //}
    else if (SS == "Other_measure_Crop_Floriculture_UserVale") {
        $('#Other_Individual_Name').text("Floriculture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_floriculture_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_floriculture_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Crop_Maize_UserVale") {
        $('#Other_Individual_Name').text("Maize");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_maize_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_maize_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Crop_Fodder_UserVale") {
        $('#Other_Individual_Name').text("Fodder");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_fodder_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_fodder_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "Other_measure_Crop_Sugarcane_UserVale") {
        $('#Other_Individual_Name').text("Sugarcane");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_sugarcane_water_demand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_sugarcane_reduc_gw_demand).toFixed(2));

    }
    else if (SS == "other_summer_horticulture_crop_area") {
        $('#Other_Individual_Name').text("Horticulture");
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_horticulture_waterdemand).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_horticulture_reduction_gw_deman).toFixed(2));


    }
    //else if (SS == "other_summer_othercrop_area") {
    //    var CropName = $('#other_summer_othercrop_name').val();
    //    $('#Other_Individual_Name').text(CropName);
    //    $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_othercrop_gw_water_demand).toFixed(2));
    //    $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_othercrop_reduc_gw_demand).toFixed(2));

    //}

}

function Other_otherpopup(ss) {


    Other_measure__Kharif_WaterRequire();
    Other_measure_Rabi_WaterRequire();
    Other_measure_Crop_WaterRequire();

    if (ss == "other_kharif_othercrop_area1") {
        var Name = $('#other_kharif_othercrop_name1').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_othercrop_waterdemand1).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_othercrop_reduction_gw_demand1).toFixed(2));
    }
    else if (ss == "other_kharif_othercrop_area2") {
        var Name = $('#other_kharif_othercrop_name2').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_othercrop_waterdemand2).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_othercrop_reduction_gw_demand2).toFixed(2));
    }
    else if (ss == "other_kharif_othercrop_area3") {
        var Name = $('#other_kharif_othercrop_name3').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_othercrop_waterdemand3).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_othercrop_reduction_gw_demand3).toFixed(2));
    }
    else if (ss == "other_kharif_othercrop_area4") {
        var Name = $('#other_kharif_othercrop_name4').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_othercrop_waterdemand4).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_othercrop_reduction_gw_demand4).toFixed(2));
    }
    else if (ss == "other_kharif_othercrop_area5") {
        var Name = $('#other_kharif_othercrop_name5').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_kharif_othercrop_waterdemand5).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_kharif_othercrop_reduction_gw_demand5).toFixed(2));
    }

    if (ss == "other_rabi_othercrop_area1") {

        var Name = $('#other_rabi_othercrop_name1').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_othercrop_waterdemand1).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_othercrop_reduction_gw_demand1).toFixed(2));
    }
    else if (ss == "other_rabi_othercrop_area2") {

        var Name = $('#other_rabi_othercrop_name2').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_othercrop_waterdemand2).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_othercrop_reduction_gw_demand2).toFixed(2));
    }
    else if (ss == "other_rabi_othercrop_area3") {

        var Name = $('#other_rabi_othercrop_name3').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_othercrop_waterdemand3).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_othercrop_reduction_gw_demand3).toFixed(2));
    }
    else if (ss == "other_rabi_othercrop_area4") {

        var Name = $('#other_rabi_othercrop_name4').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_othercrop_waterdemand4).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_othercrop_reduction_gw_demand4).toFixed(2));
    }
    else if (ss == "other_rabi_othercrop_area5") {

        var Name = $('#other_rabi_othercrop_name5').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_rabi_othercrop_waterdemand5).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_rabi_othercrop_reduction_gw_demand5).toFixed(2));
    }


    if (ss == "other_summer_othercrop_area1") {
        var Name = $('#other_summer_othercrop_name1').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_othercrop_waterdemand1).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_othercrop_reduction_gw_demand1).toFixed(2));
    }
    else if (ss == "other_summer_othercrop_area2") {
        var Name = $('#other_summer_othercrop_name2').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_othercrop_waterdemand2).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_othercrop_reduction_gw_demand2).toFixed(2));
    }
    else if (ss == "other_summer_othercrop_area3") {
        var Name = $('#other_summer_othercrop_name3').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_othercrop_waterdemand3).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_othercrop_reduction_gw_demand3).toFixed(2));
    }
    else if (ss == "other_summer_othercrop_area4") {
        var Name = $('#other_summer_othercrop_name4').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_othercrop_waterdemand4).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_othercrop_reduction_gw_demand4).toFixed(2));
    }
    else if (ss == "other_summer_othercrop_area5") {
        var Name = $('#other_summer_othercrop_name5').val();
        $('#Other_Individual_Name').text(Name);
        $('#Other_Individual_Reduction_Water_Demand').text(parseFloat(other_summer_othercrop_waterdemand5).toFixed(2));
        $('#Other_Individual_Reduction_in_GW_demand').text(parseFloat(other_summer_othercrop_reduction_gw_demand5).toFixed(2));
    }

}
