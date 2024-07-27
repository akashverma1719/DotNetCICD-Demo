$(document).ready(function () {

    $('#Original_crop_Kharif_crp1').hide();
    $('#Original_crop_Kharif_crp2').hide();
    $('#Original_crop_Kharif_crp3').hide();
    $('#Original_crop_Kharif_crp4').hide();
    $('#Original_crop_Kharif_crp5').hide();

    $('#Original_crop_Rabi_crp1').hide();
    $('#Original_crop_Rabi_crp2').hide();
    $('#Original_crop_Rabi_crp3').hide();
    $('#Original_crop_Rabi_crp4').hide();
    $('#Original_crop_Rabi_crp5').hide();

    $('#Original_crop_Summer_crp1').hide();
    $('#Original_crop_Summer_crp2').hide();
    $('#Original_crop_Summer_crp3').hide();
    $('#Original_crop_Summer_crp4').hide();
    $('#Original_crop_Summer_crp5').hide();



    $('#Changed_crop_Kharif_crp1').hide();
    $('#Changed_crop_Kharif_crp2').hide();
    $('#Changed_crop_Kharif_crp3').hide();
    $('#Changed_crop_Kharif_crp4').hide();
    $('#Changed_crop_Kharif_crp5').hide();

    $('#Changed_crop_Rabi_crp1').hide();
    $('#Changed_crop_Rabi_crp2').hide();
    $('#Changed_crop_Rabi_crp3').hide();
    $('#Changed_crop_Rabi_crp4').hide();
    $('#Changed_crop_Rabi_crp5').hide();

    $('#Changed_crop_Summer_crp1').hide();
    $('#Changed_crop_Summer_crp2').hide();
    $('#Changed_crop_Summer_crp3').hide();
    $('#Changed_crop_Summer_crp4').hide();
    $('#Changed_crop_Summer_crp5').hide();
});

//Original Crop

var add_Original_Crop_kharif_count = 0;
var add_Original_Crop_kharif_count1 = 0;
var add_Original_Crop_kharif_count2 = 0;
var add_Original_Crop_kharif_count3 = 0;
var add_Original_Crop_kharif_count4 = 0;
var add_Original_Crop_kharif_count5 = 0;



var add_Original_Crop_rabi_count = 0;
var add_Original_Crop_rabi_count1 = 0;
var add_Original_Crop_rabi_count2 = 0;
var add_Original_Crop_rabi_count3 = 0;
var add_Original_Crop_rabi_count4 = 0;
var add_Original_Crop_rabi_count5 = 0;

var add_Original_Crop_summer_count = 0;
var add_Original_Crop_summer_count1 = 0;
var add_Original_Crop_summer_count2 = 0;
var add_Original_Crop_summer_count3 = 0;
var add_Original_Crop_summer_count4 = 0;
var add_Original_Crop_summer_count5 = 0;

function Original_crop_Kharif_AddCrop() {
    if (add_Original_Crop_kharif_count1 == 1) {
        $('#Original_crop_Kharif_crp1').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_kharif_othercrop_area1" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_kharif_horticulture_water_req1" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand1">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Original_crop_Kharif_crp1').html(ass);
        add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
        add_Original_Crop_kharif_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("original_kharif_othercrop_name1").disabled = true;
        //    document.getElementById("original_kharif_othercrop_area1").disabled = true;
        //    document.getElementById("original_kharif_horticulture_water_req1").disabled = true;

        //}
    }
    else if (add_Original_Crop_kharif_count2 == 2) {
        $('#Original_crop_Kharif_crp2').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_kharif_othercrop_area2" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_kharif_horticulture_water_req2" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand2">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Original_crop_Kharif_crp2').html(ass);
        add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
        add_Original_Crop_kharif_count2 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_kharif_othercrop_name2").disabled = true;
        //    document.getElementById("original_kharif_othercrop_area2").disabled = true;
        //    document.getElementById("original_kharif_horticulture_water_req2").disabled = true;


        //}
    }
    else if (add_Original_Crop_kharif_count3 == 3) {
        $('#Original_crop_Kharif_crp3').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_kharif_othercrop_area3" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_kharif_horticulture_water_req3" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand3">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Original_crop_Kharif_crp3').html(ass);
        add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
        add_Original_Crop_kharif_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_kharif_othercrop_name3").disabled = true;
        //    document.getElementById("original_kharif_othercrop_area3").disabled = true;
        //    document.getElementById("original_kharif_horticulture_water_req3").disabled = true;

        //}
    }
    else if (add_Original_Crop_kharif_count4 == 4) {
        $('#Original_crop_Kharif_crp4').show();

        var s44 = "original_kharif_othercrop_name4";
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_kharif_othercrop_area4" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_kharif_horticulture_water_req4" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand4">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Original_crop_Kharif_crp4').html(ass);
        add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
        add_Original_Crop_kharif_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("original_kharif_othercrop_name4").disabled = true;
        //    document.getElementById("original_kharif_othercrop_area4").disabled = true;
        //    document.getElementById("original_kharif_horticulture_water_req4").disabled = true;

        //}
    }
    else if (add_Original_Crop_kharif_count5 == 5) {
        $('#Original_crop_Kharif_crp5').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_kharif_othercrop_area5" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_kharif_horticulture_water_req5" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand5">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Original_crop_Kharif_crp5').html(ass);
        add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
        add_Original_Crop_kharif_count5 = 0;
        $('#Original_crop_Kharif_AddCrop').hide();

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_kharif_othercrop_name5").disabled = true;
        //    document.getElementById("original_kharif_othercrop_area5").disabled = true;
        //    document.getElementById("original_kharif_horticulture_water_req5").disabled = true;
        //}
    }
    if (add_Original_Crop_kharif_count == 5) {
        $('#Original_crop_Kharif_AddCrop').hide();
    }
}

function Original_crop_Rabi_AddCrop() {
    if (add_Original_Crop_rabi_count1 == 1) {
        $('#Original_crop_Rabi_crp1').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_rabi_othercrop_area1" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_rabi_horticulture_water_req1" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand1">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Original_crop_Rabi_crp1').html(ass);
        add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
        add_Original_Crop_rabi_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("original_rabi_othercrop_name1").disabled = true;
        //    document.getElementById("original_rabi_othercrop_area1").disabled = true;
        //    document.getElementById("original_rabi_horticulture_water_req1").disabled = true;

        //}
    }
    else if (add_Original_Crop_rabi_count2 == 2) {
        $('#Original_crop_Rabi_crp2').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_rabi_othercrop_area2" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_rabi_horticulture_water_req2" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand2">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Original_crop_Rabi_crp2').html(ass);
        add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
        add_Original_Crop_rabi_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_rabi_othercrop_name2").disabled = true;
        //    document.getElementById("original_rabi_othercrop_area2").disabled = true;
        //    document.getElementById("original_rabi_horticulture_water_req2").disabled = true;

        //}
    }
    else if (add_Original_Crop_rabi_count3 == 3) {
        $('#Original_crop_Rabi_crp3').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_rabi_othercrop_area3" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_rabi_horticulture_water_req3" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand3">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Original_crop_Rabi_crp3').html(ass);
        add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
        add_Original_Crop_rabi_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("original_rabi_othercrop_name3").disabled = true;
        //    document.getElementById("original_rabi_othercrop_area3").disabled = true;
        //    document.getElementById("original_rabi_horticulture_water_req3").disabled = true;

        //}
    }
    else if (add_Original_Crop_rabi_count4 == 4) {
        $('#Original_crop_Rabi_crp4').show();
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_rabi_othercrop_area4" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_rabi_horticulture_water_req4" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand4">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Original_crop_Rabi_crp4').html(ass);
        add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
        add_Original_Crop_rabi_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_rabi_othercrop_name4").disabled = true;
        //    document.getElementById("original_rabi_othercrop_area4").disabled = true;
        //    document.getElementById("original_rabi_horticulture_water_req4").disabled = true;

        //}
    }
    else if (add_Original_Crop_rabi_count5 == 5) {
        $('#Original_crop_Rabi_crp5').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_rabi_othercrop_area5" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_rabi_horticulture_water_req5" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand5">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Original_crop_Rabi_crp5').html(ass);
        add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
        add_Original_Crop_rabi_count5 = 0;
        $('#Original_crop_Rabi_AddCrop').hide();
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_rabi_othercrop_name5").disabled = true;
        //    document.getElementById("original_rabi_othercrop_area5").disabled = true;
        //    document.getElementById("original_rabi_horticulture_water_req5").disabled = true;
        //}
    }
    if (add_Original_Crop_rabi_count == 5) {
        $('#Original_crop_Rabi_AddCrop').hide();
    }
}

function Original_crop_Summer_AddCrop() {
    if (add_Original_Crop_summer_count1 == 1) {
        $('#Original_crop_Summer_crp1').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_summer_othercrop_area1" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_summer_horticulture_water_req1" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand1">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Original_crop_Summer_crp1').html(ass);
        add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
        add_Original_Crop_summer_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_summer_othercrop_name1").disabled = true;
        //    document.getElementById("original_summer_othercrop_area1").disabled = true;
        //    document.getElementById("original_summer_horticulture_water_req1").disabled = true;

        //}

    }
    else if (add_Original_Crop_summer_count2 == 2) {
        $('#Original_crop_Summer_crp2').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_summer_othercrop_area2" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_summer_horticulture_water_req2" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand2">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Original_crop_Summer_crp2').html(ass);
        add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
        add_Original_Crop_summer_count2 = 0;


        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("original_summer_othercrop_name2").disabled = true;
        //    document.getElementById("original_summer_othercrop_area2").disabled = true;
        //    document.getElementById("original_summer_horticulture_water_req2").disabled = true;


        //}

    }
    else if (add_Original_Crop_summer_count3 == 3) {
        $('#Original_crop_Summer_crp3').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_summer_othercrop_area3" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_summer_horticulture_water_req3" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand3">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Original_crop_Summer_crp3').html(ass);
        add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
        add_Original_Crop_summer_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {


        //    document.getElementById("original_summer_othercrop_name3").disabled = true;
        //    document.getElementById("original_summer_othercrop_area3").disabled = true;
        //    document.getElementById("original_summer_horticulture_water_req3").disabled = true;

        //}

    }
    else if (add_Original_Crop_summer_count4 == 4) {
        $('#Original_crop_Summer_crp4').show();
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_summer_othercrop_area4" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_summer_horticulture_water_req4" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand4">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Original_crop_Summer_crp4').html(ass);
        add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
        add_Original_Crop_summer_count4 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("original_summer_othercrop_name4").disabled = true;
        //    document.getElementById("original_summer_othercrop_area4").disabled = true;
        //    document.getElementById("original_summer_horticulture_water_req4").disabled = true;

        //}

    }
    else if (add_Original_Crop_summer_count5 == 5) {
        $('#Original_crop_Summer_crp5').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="original_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="original_summer_othercrop_area5" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="original_summer_horticulture_water_req5" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand5">0</span><span>(ha.m)</span></label></li>' +
            '<li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Original_crop_Summer_crp5').html(ass);
        add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
        add_Original_Crop_summer_count5 = 0;
        $('#Original_crop_Summer_AddCrop').hide();

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("original_summer_othercrop_name5").disabled = true;
        //    document.getElementById("original_summer_othercrop_area5").disabled = true;
        //    document.getElementById("original_summer_horticulture_water_req5").disabled = true;
        //}

    }
    if (add_Original_Crop_summer_count == 5) {
        $('#Original_crop_Summer_AddCrop').hide();
    }
}




//Changed Crop

var add_Changed_Crop_kharif_count = 0;
var add_Changed_Crop_kharif_count1 = 0;
var add_Changed_Crop_kharif_count2 = 0;
var add_Changed_Crop_kharif_count3 = 0;
var add_Changed_Crop_kharif_count4 = 0;
var add_Changed_Crop_kharif_count5 = 0;



var add_Changed_Crop_rabi_count = 0;
var add_Changed_Crop_rabi_count1 = 0;
var add_Changed_Crop_rabi_count2 = 0;
var add_Changed_Crop_rabi_count3 = 0;
var add_Changed_Crop_rabi_count4 = 0;
var add_Changed_Crop_rabi_count5 = 0;

var add_Changed_Crop_summer_count = 0;
var add_Changed_Crop_summer_count1 = 0;
var add_Changed_Crop_summer_count2 = 0;
var add_Changed_Crop_summer_count3 = 0;
var add_Changed_Crop_summer_count4 = 0;
var add_Changed_Crop_summer_count5 = 0;

function Changed_crop_Kharif_AddCrop() {
    if (add_Changed_Crop_kharif_count1 == 1) {
        $('#Changed_crop_Kharif_crp1').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_kharif_croparea_area1" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_kharif_horticulture_water_req1" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand1">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand1"></span></label></li><li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Changed_crop_Kharif_crp1').html(ass);
        add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
        add_Changed_Crop_kharif_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("changed_kharif_othercrop_name1").disabled = true;
        //    document.getElementById("changed_kharif_croparea_area1").disabled = true;
        //    document.getElementById("changed_kharif_horticulture_water_req1").disabled = true;

        //}
    }
    else if (add_Changed_Crop_kharif_count2 == 2) {
        $('#Changed_crop_Kharif_crp2').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_kharif_croparea_area2" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_kharif_horticulture_water_req2" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand2">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand2"></span></label></li><li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Changed_crop_Kharif_crp2').html(ass);
        add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
        add_Changed_Crop_kharif_count2 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_kharif_othercrop_name2").disabled = true;
        //    document.getElementById("changed_kharif_croparea_area2").disabled = true;
        //    document.getElementById("changed_kharif_horticulture_water_req2").disabled = true;

        //}
    }
    else if (add_Changed_Crop_kharif_count3 == 3) {
        $('#Changed_crop_Kharif_crp3').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_kharif_croparea_area3" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_kharif_horticulture_water_req3" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand3">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand3"></span></label></li><li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Changed_crop_Kharif_crp3').html(ass);
        add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
        add_Changed_Crop_kharif_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_kharif_othercrop_name3").disabled = true;
        //    document.getElementById("changed_kharif_croparea_area3").disabled = true;
        //    document.getElementById("changed_kharif_horticulture_water_req3").disabled = true;


        //}
    }
    else if (add_Changed_Crop_kharif_count4 == 4) {

        $('#Changed_crop_Kharif_crp4').show();
        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_kharif_croparea_area4" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_kharif_horticulture_water_req4" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand4">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand4"></span></label></li><li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Changed_crop_Kharif_crp4').html(ass);
        add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
        add_Changed_Crop_kharif_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_kharif_othercrop_name4").disabled = true;
        //    document.getElementById("changed_kharif_croparea_area4").disabled = true;
        //    document.getElementById("changed_kharif_horticulture_water_req4").disabled = true;

        //}
    }
    else if (add_Changed_Crop_kharif_count5 == 5) {
        $('#Changed_crop_Kharif_crp5').show();

        var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_kharif_croparea_area5" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_kharif_horticulture_water_req5" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand5">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand5"></span></label></li><li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Changed_crop_Kharif_crp5').html(ass);
        add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
        $('#Changed_crop_Kharif_AddCrop').hide();
        add_Changed_Crop_kharif_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_kharif_othercrop_name5").disabled = true;
        //    document.getElementById("changed_kharif_croparea_area5").disabled = true;
        //    document.getElementById("changed_kharif_horticulture_water_req5").disabled = true;
        //}
    }
    if (add_Changed_Crop_kharif_count == 5) {
        $('#Changed_crop_Kharif_AddCrop').hide();
    }
}

function Changed_crop_Rabi_AddCrop() {
    if (add_Changed_Crop_rabi_count1 == 1) {
        $('#Changed_crop_Rabi_crp1').show();

        var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_rabi_croparea_area1" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_rabi_horticulture_water_req1" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand1">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand1"></span></label></li><li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Changed_crop_Rabi_crp1').html(ass);
        add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
        add_Changed_Crop_rabi_count1 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("changed_rabi_othercrop_name1").disabled = true;
        //    document.getElementById("changed_rabi_croparea_area1").disabled = true;
        //    document.getElementById("changed_rabi_horticulture_water_req1").disabled = true;

        //}
    }
    else if (add_Changed_Crop_rabi_count2 == 2) {
        $('#Changed_crop_Rabi_crp2').show();

        var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_rabi_croparea_area2" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_rabi_horticulture_water_req2" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand2">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand2"></span></label></li><li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Changed_crop_Rabi_crp2').html(ass);
        add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
        add_Changed_Crop_rabi_count2 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_rabi_othercrop_name2").disabled = true;
        //    document.getElementById("changed_rabi_croparea_area2").disabled = true;
        //    document.getElementById("changed_rabi_horticulture_water_req2").disabled = true;

        //}
    }
    else if (add_Changed_Crop_rabi_count3 == 3) {
        $('#Changed_crop_Rabi_crp3').show();

        var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_rabi_croparea_area3" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_rabi_horticulture_water_req3" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand3">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand3"></span></label></li><li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Changed_crop_Rabi_crp3').html(ass);
        add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
        add_Changed_Crop_rabi_count3 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_rabi_othercrop_name3").disabled = true;
        //    document.getElementById("changed_rabi_croparea_area3").disabled = true;
        //    document.getElementById("changed_rabi_horticulture_water_req3").disabled = true;

        //}
    }
    else if (add_Changed_Crop_rabi_count4 == 4) {
        $('#Changed_crop_Rabi_crp4').show();
        var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_rabi_croparea_area4" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_rabi_horticulture_water_req4" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand4">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand4"></span></label></li><li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Changed_crop_Rabi_crp4').html(ass);
        add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
        add_Changed_Crop_rabi_count4 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_rabi_othercrop_name4").disabled = true;
        //    document.getElementById("changed_rabi_croparea_area4").disabled = true;
        //    document.getElementById("changed_rabi_horticulture_water_req4").disabled = true;

        //}
    }
    else if (add_Changed_Crop_rabi_count5 == 5) {
        $('#Changed_crop_Rabi_crp5').show();

        var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_rabi_croparea_area5" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_rabi_horticulture_water_req5" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand5">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand5"></span></label></li><li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Changed_crop_Rabi_crp5').html(ass);
        add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
        $('#Changed_crop_Rabi_AddCrop').hide();
        add_Changed_Crop_rabi_count5 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_rabi_othercrop_name5").disabled = true;
        //    document.getElementById("changed_rabi_croparea_area5").disabled = true;
        //    document.getElementById("changed_rabi_horticulture_water_req5").disabled = true;
        //}
    }
    if (add_Changed_Crop_rabi_count == 5) {
        $('#Changed_crop_Rabi_AddCrop').hide();
    }
}

function Changed_crop_Summer_AddCrop() {
    if (add_Changed_Crop_summer_count1 == 1) {
        $('#Changed_crop_Summer_crp1').show();

        var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_summer_croparea_area1" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_summer_horticulture_water_req1" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand1">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand1"></span></label></li><li style="color:#fff">Other crop 1</li></ul></div></div>';

        $('#Changed_crop_Summer_crp1').html(ass);
        add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
        add_Changed_Crop_summer_count1 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {
        //    document.getElementById("changed_summer_othercrop_name1").disabled = true;
        //    document.getElementById("changed_summer_croparea_area1").disabled = true;
        //    document.getElementById("changed_summer_horticulture_water_req1").disabled = true;

        //}
    }
    else if (add_Changed_Crop_summer_count2 == 2) {
        $('#Changed_crop_Summer_crp2').show();

        var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_summer_croparea_area2" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_summer_horticulture_water_req2" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand2">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand2"></span></label></li><li style="color:#fff">Other crop 2</li></ul></div></div>';

        $('#Changed_crop_Summer_crp2').html(ass);
        add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
        add_Changed_Crop_summer_count2 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_summer_othercrop_name2").disabled = true;
        //    document.getElementById("changed_summer_croparea_area2").disabled = true;
        //    document.getElementById("changed_summer_horticulture_water_req2").disabled = true;

        //}
    }

    else if (add_Changed_Crop_summer_count3 == 3) {
        $('#Changed_crop_Summer_crp3').show();

        var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_summer_croparea_area3" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_summer_horticulture_water_req3" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand3">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand3"></span></label></li><li style="color:#fff">Other crop 3</li></ul></div></div>';

        $('#Changed_crop_Summer_crp3').html(ass);
        add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
        add_Changed_Crop_summer_count3 = 0;
        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_summer_othercrop_name3").disabled = true;
        //    document.getElementById("changed_summer_croparea_area3").disabled = true;
        //    document.getElementById("changed_summer_horticulture_water_req3").disabled = true;

        //}
    }
    else if (add_Changed_Crop_summer_count4 == 4) {
        $('#Changed_crop_Summer_crp4').show();

        var s44 = "changed_summer_othercrop_name4";
        var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_summer_croparea_area4" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_summer_horticulture_water_req4" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand4">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand4"></span></label></li><li style="color:#fff">Other crop 4</li></ul></div></div>';

        $('#Changed_crop_Summer_crp4').html(ass);
        add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
        add_Changed_Crop_summer_count4 = 0;

        //if (StateOfficer != "Gram Panchyat Nodal Officer") {

        //    document.getElementById("changed_summer_othercrop_name4").disabled = true;
        //    document.getElementById("changed_summer_croparea_area4").disabled = true;
        //    document.getElementById("changed_summer_horticulture_water_req4").disabled = true;

        //}
    }
    else if (add_Changed_Crop_summer_count5 == 5) {
        $('#Changed_crop_Summer_crp5').show();

        var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' +
            'Crop name</div><div class="content">' +
            '<ul class="wsp-content-content"><li><input type="text" class="form-control" id="changed_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
            '<li><input type="text" id="changed_summer_croparea_area5" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
            '</li><li><input type="text" id="changed_summer_horticulture_water_req5" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
            '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand5">0</span><span>(ha.m)</span></label></li>' +
            '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand5"></span></label></li><li style="color:#fff">Other crop 5</li></ul></div></div>';

        $('#Changed_crop_Summer_crp5').html(ass);
        add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
        add_Changed_Crop_summer_count5 = 0;
        $('#Changed_crop_Summer_AddCrop').hide();

        if (StateOfficer != "Gram Panchyat Nodal Officer") {

            document.getElementById("changed_summer_othercrop_name5").disabled = true;
            document.getElementById("changed_summer_croparea_area5").disabled = true;
            document.getElementById("changed_summer_horticulture_water_req5").disabled = true;
        }
    }
    if (add_Changed_Crop_summer_count == 5) {
        $('#Changed_crop_Summer_AddCrop').hide();
    }
}






/// <reference path="any_other_intervention.js" />
function Kharif_CheckBox(sss) {

    if (sss == "O") {
        Crop_Diversion_Kharif_WaterRequire();
    }
    else if (sss == "C") {
        Crop_Diversion_Kharif_WaterRequire1();
    }
}




function Crop_Diversification_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/Crop_Diversification_Info',
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
                add_Original_Crop_kharif_count = 0;
                add_Original_Crop_kharif_count1 = 0;
                add_Original_Crop_kharif_count2 = 0;
                add_Original_Crop_kharif_count3 = 0;
                add_Original_Crop_kharif_count4 = 0;
                add_Original_Crop_kharif_count5 = 0;

                add_Original_Crop_rabi_count = 0;
                add_Original_Crop_rabi_count1 = 0;
                add_Original_Crop_rabi_count2 = 0;
                add_Original_Crop_rabi_count3 = 0;
                add_Original_Crop_rabi_count4 = 0;
                add_Original_Crop_rabi_count5 = 0;

                add_Original_Crop_summer_count = 0;
                add_Original_Crop_summer_count1 = 0;
                add_Original_Crop_summer_count2 = 0;
                add_Original_Crop_summer_count3 = 0;
                add_Original_Crop_summer_count4 = 0;
                add_Original_Crop_summer_count5 = 0;

                add_Changed_Crop_kharif_count = 0;
                add_Changed_Crop_kharif_count1 = 0;
                add_Changed_Crop_kharif_count2 = 0;
                add_Changed_Crop_kharif_count3 = 0;
                add_Changed_Crop_kharif_count4 = 0;
                add_Changed_Crop_kharif_count5 = 0;

                add_Changed_Crop_rabi_count = 0;
                add_Changed_Crop_rabi_count1 = 0;
                add_Changed_Crop_rabi_count2 = 0;
                add_Changed_Crop_rabi_count3 = 0;
                add_Changed_Crop_rabi_count4 = 0;
                add_Changed_Crop_rabi_count5 = 0;

                add_Changed_Crop_summer_count = 0;
                add_Changed_Crop_summer_count1 = 0;
                add_Changed_Crop_summer_count2 = 0;
                add_Changed_Crop_summer_count3 = 0;
                add_Changed_Crop_summer_count4 = 0;
                add_Changed_Crop_summer_count5 = 0;
                //-----------------Original Crop------------------

                //Kharif

                if (response.original_kharif_othercrop_name1 == null || response.original_kharif_othercrop_name1 == "") {
                    add_Original_Crop_kharif_count1 = 1;
                }
                else {
                    add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
                }

                if (response.original_kharif_othercrop_name2 == null || response.original_kharif_othercrop_name2 == "") {
                    add_Original_Crop_kharif_count2 = 2;
                }
                else {
                    add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
                }

                if (response.original_kharif_othercrop_name3 == null || response.original_kharif_othercrop_name3 == "") {
                    add_Original_Crop_kharif_count3 = 3;
                }
                else {
                    add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
                }

                if (response.original_kharif_othercrop_name4 == null || response.original_kharif_othercrop_name4 == "") {
                    add_Original_Crop_kharif_count4 = 4;
                }
                else {
                    add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
                }
                if (response.original_kharif_othercrop_name5 == null || response.original_kharif_othercrop_name5 == "") {
                    add_Original_Crop_kharif_count5 = 5;
                }
                else {
                    add_Original_Crop_kharif_count = add_Original_Crop_kharif_count + 1;
                }
                if (add_Original_Crop_kharif_count == 5) {

                    $('#Original_crop_Kharif_AddCrop').hide();
                }


                if (response.original_kharif_othercrop_name1 != null && response.original_kharif_othercrop_name1 != "null" && response.original_kharif_othercrop_name1 != "") {
                    var original_kharif_horticulture_water_req1 = 0;
                    var original_kharif_othercrop_area1 = 0;
                    var original_kharif_horticulture_waterdemand1 = 0;

                    if (response.original_kharif_horticulture_water_req1 != null && response.original_kharif_horticulture_water_req1 != "") {
                        original_kharif_horticulture_water_req1 = response.original_kharif_horticulture_water_req1;
                    }
                    if (response.original_kharif_othercrop_area1 != null && response.original_kharif_othercrop_area1 != "") {
                        original_kharif_othercrop_area1 = response.original_kharif_othercrop_area1;
                    }
                    if (response.original_kharif_horticulture_waterdemand1 != null && response.original_kharif_horticulture_waterdemand1 != "") {
                        original_kharif_horticulture_waterdemand1 = response.original_kharif_horticulture_waterdemand1;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_kharif_othercrop_name1 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_kharif_othercrop_name1 + '" id="original_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_kharif_othercrop_area1" value="' + original_kharif_othercrop_area1 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_kharif_horticulture_water_req1" value="' + original_kharif_horticulture_water_req1 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand1">' + original_kharif_horticulture_waterdemand1 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Original_crop_Kharif_crp1').html(ass);
                    $('#original_kharif_othercrop_name1').hide();

                    $('#Original_crop_Kharif_crp1').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("original_kharif_othercrop_name1").disabled = true;
                    //    document.getElementById("original_kharif_othercrop_area1").disabled = true;
                    //    document.getElementById("original_kharif_horticulture_water_req1").disabled = true;

                    //}

                }

                if (response.original_kharif_othercrop_name2 != null && response.original_kharif_othercrop_name2 != "null" && response.original_kharif_othercrop_name2 != "") {

                    var original_kharif_horticulture_water_req2 = 0;
                    var original_kharif_othercrop_area2 = 0;
                    var original_kharif_horticulture_waterdemand2 = 0;

                    if (response.original_kharif_horticulture_water_req2 != null && response.original_kharif_horticulture_water_req2 != "") {
                        original_kharif_horticulture_water_req2 = response.original_kharif_horticulture_water_req2;
                    }
                    if (response.original_kharif_othercrop_area2 != null && response.original_kharif_othercrop_area2 != "") {
                        original_kharif_othercrop_area2 = response.original_kharif_othercrop_area2;
                    }
                    if (response.original_kharif_horticulture_waterdemand2 != null && response.original_kharif_horticulture_waterdemand2 != "") {
                        original_kharif_horticulture_waterdemand2 = response.original_kharif_horticulture_waterdemand2;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_kharif_othercrop_name2 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_kharif_othercrop_name2 + '" id="original_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_kharif_othercrop_area2" value="' + original_kharif_othercrop_area2 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_kharif_horticulture_water_req2" value="' + original_kharif_horticulture_water_req2 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand2">' + original_kharif_horticulture_waterdemand2 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Original_crop_Kharif_crp2').html(ass);
                    $('#original_kharif_othercrop_name2').hide();

                    $('#Original_crop_Kharif_crp2').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_kharif_othercrop_name2").disabled = true;
                    //    document.getElementById("original_kharif_othercrop_area2").disabled = true;
                    //    document.getElementById("original_kharif_horticulture_water_req2").disabled = true;


                    //}

                }


                if (response.original_kharif_othercrop_name3 != null && response.original_kharif_othercrop_name3 != "null" && response.original_kharif_othercrop_name3 != "") {

                    var original_kharif_horticulture_water_req3 = 0;
                    var original_kharif_othercrop_area3 = 0;
                    var original_kharif_horticulture_waterdemand3 = 0;

                    if (response.original_kharif_horticulture_water_req3 != null && response.original_kharif_horticulture_water_req3 != "") {
                        original_kharif_horticulture_water_req3 = response.original_kharif_horticulture_water_req3;
                    }
                    if (response.original_kharif_othercrop_area3 != null && response.original_kharif_othercrop_area3 != "") {
                        original_kharif_othercrop_area3 = response.original_kharif_othercrop_area3;
                    }
                    if (response.original_kharif_horticulture_waterdemand3 != null && response.original_kharif_horticulture_waterdemand3 != "") {
                        original_kharif_horticulture_waterdemand3 = response.original_kharif_horticulture_waterdemand3;
                    }


                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_kharif_othercrop_name3 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_kharif_othercrop_name3 + '" id="original_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_kharif_othercrop_area3" value="' + original_kharif_othercrop_area3 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_kharif_horticulture_water_req3" value="' + original_kharif_horticulture_water_req3 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand3">' + original_kharif_horticulture_waterdemand3 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Original_crop_Kharif_crp3').html(ass);
                    $('#original_kharif_othercrop_name3').hide();

                    $('#Original_crop_Kharif_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_kharif_othercrop_name3").disabled = true;
                    //    document.getElementById("original_kharif_othercrop_area3").disabled = true;
                    //    document.getElementById("original_kharif_horticulture_water_req3").disabled = true;

                    //}
                }

                if (response.original_kharif_othercrop_name4 != null && response.original_kharif_othercrop_name4 != "null" && response.original_kharif_othercrop_name4 != "") {

                    var original_kharif_horticulture_water_req4 = 0;
                    var original_kharif_othercrop_area4 = 0;
                    var original_kharif_horticulture_waterdemand4 = 0;

                    if (response.original_kharif_horticulture_water_req4 != null && response.original_kharif_horticulture_water_req4 != "") {
                        original_kharif_horticulture_water_req4 = response.original_kharif_horticulture_water_req4;
                    }
                    if (response.original_kharif_othercrop_area4 != null && response.original_kharif_othercrop_area4 != "") {
                        original_kharif_othercrop_area4 = response.original_kharif_othercrop_area4;
                    }
                    if (response.original_kharif_horticulture_waterdemand4 != null && response.original_kharif_horticulture_waterdemand4 != "") {
                        original_kharif_horticulture_waterdemand4 = response.original_kharif_horticulture_waterdemand4;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_kharif_othercrop_name4 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_kharif_othercrop_name4 + '" id="original_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_kharif_othercrop_area4" value="' + original_kharif_othercrop_area4 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_kharif_horticulture_water_req4" value="' + original_kharif_horticulture_water_req4 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand4">' + original_kharif_horticulture_waterdemand4 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Original_crop_Kharif_crp4').html(ass);
                    $('#original_kharif_othercrop_name4').hide();

                    $('#Original_crop_Kharif_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("original_kharif_othercrop_name4").disabled = true;
                    //    document.getElementById("original_kharif_othercrop_area4").disabled = true;
                    //    document.getElementById("original_kharif_horticulture_water_req4").disabled = true;

                    //}
                }
                if (response.original_kharif_othercrop_name5 != null && response.original_kharif_othercrop_name5 != "null" && response.original_kharif_othercrop_name5 != "") {

                    var original_kharif_horticulture_water_req5 = 0;
                    var original_kharif_othercrop_area5 = 0;
                    var original_kharif_horticulture_waterdemand5 = 0;

                    if (response.original_kharif_horticulture_water_req5 != null && response.original_kharif_horticulture_water_req5 != "") {
                        original_kharif_horticulture_water_req5 = response.original_kharif_horticulture_water_req5;
                    }
                    if (response.original_kharif_othercrop_area5 != null && response.original_kharif_othercrop_area5 != "") {
                        original_kharif_othercrop_area5 = response.original_kharif_othercrop_area5;
                    }
                    if (response.original_kharif_horticulture_waterdemand5 != null && response.original_kharif_horticulture_waterdemand5 != "") {
                        original_kharif_horticulture_waterdemand5 = response.original_kharif_horticulture_waterdemand5;
                    }


                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_kharif_othercrop_name5 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_kharif_othercrop_name5 + '" id="original_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_kharif_othercrop_area5" value="' + original_kharif_othercrop_area5 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_kharif_horticulture_water_req5" value="' + original_kharif_horticulture_water_req5 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_kharif_horticulture_waterdemand5">' + original_kharif_horticulture_waterdemand5 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Original_crop_Kharif_crp5').html(ass);
                    $('#original_kharif_othercrop_name5').hide();

                    $('#Original_crop_Kharif_crp5').show();

                    $('#Original_crop_Kharif_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_kharif_othercrop_name5").disabled = true;
                    //    document.getElementById("original_kharif_othercrop_area5").disabled = true;
                    //    document.getElementById("original_kharif_horticulture_water_req5").disabled = true;
                    //}
                }


                //Rabi


                if (response.original_rabi_othercrop_name1 == null || response.original_rabi_othercrop_name1 == "") {
                    add_Original_Crop_rabi_count1 = 1;
                }
                else {
                    add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
                }

                if (response.original_rabi_othercrop_name2 == null || response.original_rabi_othercrop_name2 == "") {
                    add_Original_Crop_rabi_count2 = 2;
                }
                else {

                    add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
                }

                if (response.original_rabi_othercrop_name3 == null || response.original_rabi_othercrop_name3 == "") {
                    add_Original_Crop_rabi_count3 = 3;
                }
                else {
                    add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
                }

                if (response.original_rabi_othercrop_name4 == null || response.original_rabi_othercrop_name4 == "") {
                    add_Original_Crop_rabi_count4 = 4;
                }
                else {
                    add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;

                }

                if (response.original_rabi_othercrop_name5 == null || response.original_rabi_othercrop_name5 == "") {
                    add_Original_Crop_rabi_count5 = 5;
                } else {
                    add_Original_Crop_rabi_count = add_Original_Crop_rabi_count + 1;
                }

                if (add_Original_Crop_rabi_count == 5) {

                    $('#Original_crop_Rabi_AddCrop').hide();
                }



                if (response.original_rabi_othercrop_name1 != null && response.original_rabi_othercrop_name1 != "null" && response.original_rabi_othercrop_name1 != "") {

                    var original_rabi_horticulture_water_req1 = 0;
                    var original_rabi_othercrop_area1 = 0;
                    var original_rabi_horticulture_waterdemand1 = 0;

                    if (response.original_rabi_horticulture_water_req1 != null && response.original_rabi_horticulture_water_req1 != "") {
                        original_rabi_horticulture_water_req1 = response.original_rabi_horticulture_water_req1;
                    }
                    if (response.original_rabi_othercrop_area1 != null && response.original_rabi_othercrop_area1 != "") {
                        original_rabi_othercrop_area1 = response.original_rabi_othercrop_area1;
                    }
                    if (response.original_rabi_horticulture_waterdemand1 != null && response.original_rabi_horticulture_waterdemand1 != "") {
                        original_rabi_horticulture_waterdemand1 = response.original_rabi_horticulture_waterdemand1;
                    }


                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_rabi_othercrop_name1 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_rabi_othercrop_name1 + '" id="original_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_othercrop_area1" value="' + original_rabi_othercrop_area1 + '"  class="form-control decimal"  placeholder="Crop Area(ha)" title="Crop Area(ha)"></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_horticulture_water_req1" value="' + original_rabi_horticulture_water_req1 + '"  class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand1">' + original_rabi_horticulture_waterdemand1 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Original_crop_Rabi_crp1').html(ass);
                    $('#original_rabi_othercrop_name1').hide();

                    $('#Original_crop_Rabi_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("original_rabi_othercrop_name1").disabled = true;
                    //    document.getElementById("original_rabi_othercrop_area1").disabled = true;
                    //    document.getElementById("original_rabi_horticulture_water_req1").disabled = true;

                    //}
                }

                if (response.original_rabi_othercrop_name2 != null && response.original_rabi_othercrop_name2 != "null" && response.original_rabi_othercrop_name2 != "") {

                    var original_rabi_horticulture_water_req2 = 0;
                    var original_rabi_othercrop_area2 = 0;
                    var original_rabi_horticulture_waterdemand2 = 0;

                    if (response.original_rabi_horticulture_water_req2 != null && response.original_rabi_horticulture_water_req2 != "") {
                        original_rabi_horticulture_water_req2 = response.original_rabi_horticulture_water_req2;
                    }
                    if (response.original_rabi_othercrop_area2 != null && response.original_rabi_othercrop_area2 != "") {
                        original_rabi_othercrop_area2 = response.original_rabi_othercrop_area2;
                    }
                    if (response.original_rabi_horticulture_waterdemand2 != null && response.original_rabi_horticulture_waterdemand2 != "") {
                        original_rabi_horticulture_waterdemand2 = response.original_rabi_horticulture_waterdemand2;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_rabi_othercrop_name2 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_rabi_othercrop_name2 + '" id="original_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_othercrop_area2" value="' + original_rabi_othercrop_area2 + '"  class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)"></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_horticulture_water_req2" value="' + original_rabi_horticulture_water_req2 + '"  class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand2">' + original_rabi_horticulture_waterdemand2 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Original_crop_Rabi_crp2').html(ass);
                    $('#original_rabi_othercrop_name2').hide();

                    $('#Original_crop_Rabi_crp2').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_rabi_othercrop_name2").disabled = true;
                    //    document.getElementById("original_rabi_othercrop_area2").disabled = true;
                    //    document.getElementById("original_rabi_horticulture_water_req2").disabled = true;

                    //}
                }


                if (response.original_rabi_othercrop_name3 != null && response.original_rabi_othercrop_name3 != "null" && response.original_rabi_othercrop_name3 != "") {

                    var original_rabi_horticulture_water_req3 = 0;
                    var original_rabi_othercrop_area3 = 0;
                    var original_rabi_horticulture_waterdemand3 = 0;

                    if (response.original_rabi_horticulture_water_req3 != null && response.original_rabi_horticulture_water_req3 != "") {
                        original_rabi_horticulture_water_req3 = response.original_rabi_horticulture_water_req3;
                    }
                    if (response.original_rabi_othercrop_area3 != null && response.original_rabi_othercrop_area3 != "") {
                        original_rabi_othercrop_area3 = response.original_rabi_othercrop_area3;
                    }
                    if (response.original_rabi_horticulture_waterdemand3 != null && response.original_rabi_horticulture_waterdemand3 != "") {
                        original_rabi_horticulture_waterdemand3 = response.original_rabi_horticulture_waterdemand3;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_rabi_othercrop_name3 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_rabi_othercrop_name3 + '" id="original_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_othercrop_area3" value="' + original_rabi_othercrop_area3 + '" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)"></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_horticulture_water_req3" value="' + original_rabi_horticulture_water_req3 + '" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand3">' + original_rabi_horticulture_waterdemand3 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Original_crop_Rabi_crp3').html(ass);
                    $('#original_rabi_othercrop_name3').hide();

                    $('#Original_crop_Rabi_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_rabi_othercrop_name3").disabled = true;
                    //    document.getElementById("original_rabi_othercrop_area3").disabled = true;
                    //    document.getElementById("original_rabi_horticulture_water_req3").disabled = true;

                    //}
                }

                if (response.original_rabi_othercrop_name4 != null && response.original_rabi_othercrop_name4 != "null" && response.original_rabi_othercrop_name4 != "") {

                    var original_rabi_horticulture_water_req4 = 0;
                    var original_rabi_othercrop_area4 = 0;
                    var original_rabi_horticulture_waterdemand4 = 0;

                    if (response.original_rabi_horticulture_water_req4 != null && response.original_rabi_horticulture_water_req4 != "") {
                        original_rabi_horticulture_water_req4 = response.original_rabi_horticulture_water_req4;
                    }
                    if (response.original_rabi_othercrop_area4 != null && response.original_rabi_othercrop_area4 != "") {
                        original_rabi_othercrop_area4 = response.original_rabi_othercrop_area4;
                    }
                    if (response.original_rabi_horticulture_waterdemand4 != null && response.original_rabi_horticulture_waterdemand4 != "") {
                        original_rabi_horticulture_waterdemand4 = response.original_rabi_horticulture_waterdemand4;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_rabi_othercrop_name4 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_rabi_othercrop_name4 + '" id="original_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_othercrop_area4" value="' + original_rabi_othercrop_area4 + '"  class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)"></li>' +
                        '<li><input type="text" onkeyup="Crop_Diversion_Rabi_WaterRequire()" id="original_rabi_horticulture_water_req4" value="' + original_rabi_horticulture_water_req4 + '"  class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand4">' + original_rabi_horticulture_waterdemand4 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Original_crop_Rabi_crp4').html(ass);
                    $('#original_rabi_othercrop_name4').hide();

                    $('#Original_crop_Rabi_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_rabi_othercrop_name4").disabled = true;
                    //    document.getElementById("original_rabi_othercrop_area4").disabled = true;
                    //    document.getElementById("original_rabi_horticulture_water_req4").disabled = true;

                    //}
                }
                if (response.original_rabi_othercrop_name5 != null && response.original_rabi_othercrop_name5 != "null" && response.original_rabi_othercrop_name5 != "") {

                    var original_rabi_horticulture_water_req5 = 0;
                    var original_rabi_othercrop_area5 = 0;
                    var original_rabi_horticulture_waterdemand5 = 0;

                    if (response.original_rabi_horticulture_water_req5 != null && response.original_rabi_horticulture_water_req5 != "") {
                        original_rabi_horticulture_water_req5 = response.original_rabi_horticulture_water_req5;
                    }
                    if (response.original_rabi_othercrop_area5 != null && response.original_rabi_othercrop_area5 != "") {
                        original_rabi_othercrop_area5 = response.original_rabi_othercrop_area5;
                    }
                    if (response.original_rabi_horticulture_waterdemand5 != null && response.original_rabi_horticulture_waterdemand5 != "") {
                        original_rabi_horticulture_waterdemand5 = response.original_rabi_horticulture_waterdemand5;
                    }
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_rabi_othercrop_name5 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_rabi_othercrop_name5 + '" id="original_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_rabi_othercrop_area5" value="' + original_rabi_othercrop_area5 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire()"  class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)"></li>' +
                        '<li><input type="text" id="original_rabi_horticulture_water_req5" value="' + original_rabi_horticulture_water_req5 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_rabi_horticulture_waterdemand5">' + original_rabi_horticulture_waterdemand5 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Original_crop_Rabi_crp5').html(ass);
                    $('#original_rabi_othercrop_name5').hide();

                    $('#Original_crop_Rabi_crp5').show();
                    $('#Original_crop_Rabi_AddCrop').hide();


                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_rabi_othercrop_name5").disabled = true;
                    //    document.getElementById("original_rabi_othercrop_area5").disabled = true;
                    //    document.getElementById("original_rabi_horticulture_water_req5").disabled = true;
                    //}
                }


                //Summer


                if (response.original_summer_othercrop_name1 == null || response.original_summer_othercrop_name1 == "") {
                    add_Original_Crop_summer_count1 = 1;
                }
                else {
                    add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
                }

                if (response.original_summer_othercrop_name2 == null || response.original_summer_othercrop_name2 == "") {
                    add_Original_Crop_summer_count2 = 2;
                }
                else {
                    add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
                }

                if (response.original_summer_othercrop_name3 == null || response.original_summer_othercrop_name3 == "") {
                    add_Original_Crop_summer_count3 = 3;
                }
                else {
                    add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
                }

                if (response.original_summer_othercrop_name4 == null || response.original_summer_othercrop_name4 == "") {
                    add_Original_Crop_summer_count4 = 4;
                }
                else {
                    add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
                }

                if (response.original_summer_othercrop_name5 == null || response.original_summer_othercrop_name5 == "") {
                    add_Original_Crop_summer_count5 = 5;
                } else {
                    add_Original_Crop_summer_count = add_Original_Crop_summer_count + 1;
                }

                if (add_Original_Crop_summer_count == 5) {

                    $('#Original_crop_Summer_AddCrop').hide();
                }


                if (response.original_summer_othercrop_name1 != null && response.original_summer_othercrop_name1 != "null" && response.original_summer_othercrop_name1 != "") {

                    var original_summer_horticulture_water_req1 = 0;
                    var original_summer_othercrop_area1 = 0;
                    var original_summer_horticulture_waterdemand1 = 0;

                    if (response.original_summer_horticulture_water_req1 != null && response.original_summer_horticulture_water_req1 != "") {
                        original_summer_horticulture_water_req1 = response.original_summer_horticulture_water_req1;
                    }
                    if (response.original_summer_othercrop_area1 != null && response.original_summer_othercrop_area1 != "") {
                        original_summer_othercrop_area1 = response.original_summer_othercrop_area1;
                    }
                    if (response.original_summer_horticulture_waterdemand1 != null && response.original_summer_horticulture_waterdemand1 != "") {
                        original_summer_horticulture_waterdemand1 = response.original_summer_horticulture_waterdemand1;
                    }
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_summer_othercrop_name1 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_summer_othercrop_name1 + '" id="original_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_summer_othercrop_area1" value="' + original_summer_othercrop_area1 + '"onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_summer_horticulture_water_req1" value="' + original_summer_horticulture_water_req1 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand1">' + original_summer_horticulture_waterdemand1 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Original_crop_Summer_crp1').html(ass);
                    $('#original_summer_othercrop_name1').hide();

                    $('#Original_crop_Summer_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_summer_othercrop_name1").disabled = true;
                    //    document.getElementById("original_summer_othercrop_area1").disabled = true;
                    //    document.getElementById("original_summer_horticulture_water_req1").disabled = true;

                    //}

                }

                if (response.original_summer_othercrop_name2 != null && response.original_summer_othercrop_name2 != "null" && response.original_summer_othercrop_name2 != "") {

                    var original_summer_horticulture_water_req2 = 0;
                    var original_summer_othercrop_area2 = 0;
                    var original_summer_horticulture_waterdemand2 = 0;

                    if (response.original_summer_horticulture_water_req2 != null && response.original_summer_horticulture_water_req2 != "") {
                        original_summer_horticulture_water_req2 = response.original_summer_horticulture_water_req2;
                    }
                    if (response.original_summer_othercrop_area2 != null && response.original_summer_othercrop_area2 != "") {
                        original_summer_othercrop_area2 = response.original_summer_othercrop_area2;
                    }
                    if (response.original_summer_horticulture_waterdemand2 != null && response.original_summer_horticulture_waterdemand2 != "") {
                        original_summer_horticulture_waterdemand2 = response.original_summer_horticulture_waterdemand2;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_summer_othercrop_name2 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_summer_othercrop_name2 + '" id="original_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_summer_othercrop_area2" value="' + original_summer_othercrop_area2 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_summer_horticulture_water_req2" value="' + original_summer_horticulture_water_req2 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand2">' + original_summer_horticulture_waterdemand2 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Original_crop_Summer_crp2').html(ass);
                    $('#original_summer_othercrop_name2').hide();

                    $('#Original_crop_Summer_crp2').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("original_summer_othercrop_name2").disabled = true;
                    //    document.getElementById("original_summer_othercrop_area2").disabled = true;
                    //    document.getElementById("original_summer_horticulture_water_req2").disabled = true;

                    //}

                }


                if (response.original_summer_othercrop_name3 != null && response.original_summer_othercrop_name3 != "null" && response.original_summer_othercrop_name3 != "") {

                    var original_summer_horticulture_water_req3 = 0;
                    var original_summer_othercrop_area3 = 0;
                    var original_summer_horticulture_waterdemand3 = 0;

                    if (response.original_summer_horticulture_water_req3 != null && response.original_summer_horticulture_water_req3 != "") {
                        original_summer_horticulture_water_req3 = response.original_summer_horticulture_water_req3;
                    }
                    if (response.original_summer_othercrop_area3 != null && response.original_summer_othercrop_area3 != "") {
                        original_summer_othercrop_area3 = response.original_summer_othercrop_area3;
                    }
                    if (response.original_summer_horticulture_waterdemand3 != null && response.original_summer_horticulture_waterdemand3 != "") {
                        original_summer_horticulture_waterdemand3 = response.original_summer_horticulture_waterdemand3;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_summer_othercrop_name3 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_summer_othercrop_name3 + '" id="original_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_summer_othercrop_area3" value="' + original_summer_othercrop_area3 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_summer_horticulture_water_req3" value="' + original_summer_horticulture_water_req3 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand3">' + original_summer_horticulture_waterdemand3 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Original_crop_Summer_crp3').html(ass);
                    $('#original_summer_othercrop_name3').hide();

                    $('#Original_crop_Summer_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_summer_othercrop_name3").disabled = true;
                    //    document.getElementById("original_summer_othercrop_area3").disabled = true;
                    //    document.getElementById("original_summer_horticulture_water_req3").disabled = true;

                    //}

                }

                if (response.original_summer_othercrop_name4 != null && response.original_summer_othercrop_name4 != "null" && response.original_summer_othercrop_name4 != "") {

                    var original_summer_horticulture_water_req4 = 0;
                    var original_summer_othercrop_area4 = 0;
                    var original_summer_horticulture_waterdemand4 = 0;

                    if (response.original_summer_horticulture_water_req4 != null && response.original_summer_horticulture_water_req4 != "") {
                        original_summer_horticulture_water_req4 = response.original_summer_horticulture_water_req4;
                    }
                    if (response.original_summer_othercrop_area4 != null && response.original_summer_othercrop_area4 != "") {
                        original_summer_othercrop_area4 = response.original_summer_othercrop_area4;
                    }
                    if (response.original_summer_horticulture_waterdemand4 != null && response.original_summer_horticulture_waterdemand4 != "") {
                        original_summer_horticulture_waterdemand4 = response.original_summer_horticulture_waterdemand4;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_summer_othercrop_name4 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_summer_othercrop_name4 + '" id="original_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_summer_othercrop_area4" value="' + original_summer_othercrop_area4 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_summer_horticulture_water_req4" value="' + original_summer_horticulture_water_req4 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand4">' + original_summer_horticulture_waterdemand4 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Original_crop_Summer_crp4').html(ass);
                    $('#original_summer_othercrop_name4').hide();

                    $('#Original_crop_Summer_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("original_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("original_summer_othercrop_area4").disabled = true;
                    //    document.getElementById("original_summer_horticulture_water_req4").disabled = true;

                    //}

                }
                if (response.original_summer_othercrop_name5 != null && response.original_summer_othercrop_name5 != "null" && response.original_summer_othercrop_name5 != "") {

                    var original_summer_horticulture_water_req5 = 0;
                    var original_summer_othercrop_area5 = 0;
                    var original_summer_horticulture_waterdemand5 = 0;

                    if (response.original_summer_horticulture_water_req5 != null && response.original_summer_horticulture_water_req5 != "") {
                        original_summer_horticulture_water_req5 = response.original_summer_horticulture_water_req5;
                    }
                    if (response.original_summer_othercrop_area5 != null && response.original_summer_othercrop_area5 != "") {
                        original_summer_othercrop_area5 = response.original_summer_othercrop_area5;
                    }
                    if (response.original_summer_horticulture_waterdemand5 != null && response.original_summer_horticulture_waterdemand5 != "") {
                        original_summer_horticulture_waterdemand5 = response.original_summer_horticulture_waterdemand5;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.original_summer_othercrop_name5 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.original_summer_othercrop_name5 + '" id="original_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="original_summer_othercrop_area5" value="' + original_summer_othercrop_area5 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="original_summer_horticulture_water_req5" value="' + original_summer_horticulture_water_req5 + '" onkeyup="Crop_Diversion_Crop_WaterRequire()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="original_summer_horticulture_waterdemand5">' + original_summer_horticulture_waterdemand5 + '</span><span>(ha.m)</span></label></li>' +
                        '<li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Original_crop_Summer_crp5').html(ass);
                    $('#original_summer_othercrop_name5').hide();

                    $('#Original_crop_Summer_crp5').show();
                    $('#Original_crop_Summer_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("original_summer_othercrop_name5").disabled = true;
                    //    document.getElementById("original_summer_othercrop_area5").disabled = true;
                    //    document.getElementById("original_summer_horticulture_water_req5").disabled = true;
                    //}

                }




                //-----------------Changed Crop------------------

                if (response.changed_kharif_othercrop_name1 == null || response.changed_kharif_othercrop_name1 == "") {
                    add_Changed_Crop_kharif_count1 = 1;
                }
                else {
                    add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
                }

                if (response.changed_kharif_othercrop_name2 == null || response.changed_kharif_othercrop_name2 == "") {
                    add_Changed_Crop_kharif_count2 = 2;
                }
                else {
                    add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
                }

                if (response.changed_kharif_othercrop_name3 == null || response.changed_kharif_othercrop_name3 == "") {
                    add_Changed_Crop_kharif_count3 = 3;
                }
                else {
                    add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
                }
                if (response.changed_kharif_othercrop_name4 == null || response.changed_kharif_othercrop_name4 == "") {
                    add_Changed_Crop_kharif_count4 = 4;
                }
                else {
                    add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;

                }

                if (response.changed_kharif_othercrop_name5 == null || response.changed_kharif_othercrop_name5 == "") {
                    add_Changed_Crop_kharif_count5 = 5;
                }
                else {
                    add_Changed_Crop_kharif_count = add_Changed_Crop_kharif_count + 1;
                }
                if (add_Changed_Crop_kharif_count == 5) {

                    $('#Changed_crop_Kharif_AddCrop').hide();
                }

                if (response.changed_kharif_othercrop_name1 != null && response.changed_kharif_othercrop_name1 != "null" && response.changed_kharif_othercrop_name1 != "") {

                    var changed_kharif_horticulture_water_req1 = 0;
                    var changed_kharif_croparea_area1 = 0;
                    var changed_kharif_horticulture_waterdemand1 = 0;
                    var changed_kharif_horticulture_reduction_gw_demand1 = 0;

                    if (response.changed_kharif_horticulture_water_req1 != null && response.changed_kharif_horticulture_water_req1 != "") {
                        changed_kharif_horticulture_water_req1 = response.changed_kharif_horticulture_water_req1;
                    }
                    if (response.changed_kharif_croparea_area1 != null && response.changed_kharif_croparea_area1 != "") {
                        changed_kharif_croparea_area1 = response.changed_kharif_croparea_area1;
                    }
                    if (response.changed_kharif_horticulture_waterdemand1 != null && response.changed_kharif_horticulture_waterdemand1 != "") {
                        changed_kharif_horticulture_waterdemand1 = response.changed_kharif_horticulture_waterdemand1;
                    }
                    if (response.changed_kharif_horticulture_reduction_gw_demand1 != null && response.changed_kharif_horticulture_reduction_gw_demand1 != "") {
                        changed_kharif_horticulture_reduction_gw_demand1 = response.changed_kharif_horticulture_reduction_gw_demand1;
                    }
                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.changed_kharif_othercrop_name1 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_kharif_othercrop_name1 + '" id="changed_kharif_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_kharif_croparea_area1" value="' + changed_kharif_croparea_area1 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_kharif_horticulture_water_req1" value="' + changed_kharif_horticulture_water_req1 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand1">' + changed_kharif_horticulture_waterdemand1 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand1">' + changed_kharif_horticulture_reduction_gw_demand1 + '</span></label></li><li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Changed_crop_Kharif_crp1').html(ass);
                    $('#changed_kharif_othercrop_name1').hide();

                    $('#Changed_crop_Kharif_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_kharif_othercrop_name1").disabled = true;
                    //    document.getElementById("changed_kharif_croparea_area1").disabled = true;
                    //    document.getElementById("changed_kharif_horticulture_water_req1").disabled = true;


                    //}
                }

                if (response.changed_kharif_othercrop_name2 != null && response.changed_kharif_othercrop_name2 != "null" && response.changed_kharif_othercrop_name2 != "") {

                    var changed_kharif_horticulture_water_req2 = 0;
                    var changed_kharif_croparea_area2 = 0;
                    var changed_kharif_horticulture_waterdemand2 = 0;
                    var changed_kharif_horticulture_reduction_gw_demand2 = 0;

                    if (response.changed_kharif_horticulture_water_req2 != null && response.changed_kharif_horticulture_water_req2 != "") {
                        changed_kharif_horticulture_water_req2 = response.changed_kharif_horticulture_water_req2;
                    }
                    if (response.changed_kharif_croparea_area2 != null && response.changed_kharif_croparea_area2 != "") {
                        changed_kharif_croparea_area2 = response.changed_kharif_croparea_area2;
                    }
                    if (response.changed_kharif_horticulture_waterdemand2 != null && response.changed_kharif_horticulture_waterdemand2 != "") {
                        changed_kharif_horticulture_waterdemand2 = response.changed_kharif_horticulture_waterdemand2;
                    }
                    if (response.changed_kharif_horticulture_reduction_gw_demand2 != null && response.changed_kharif_horticulture_reduction_gw_demand2 != "") {
                        changed_kharif_horticulture_reduction_gw_demand2 = response.changed_kharif_horticulture_reduction_gw_demand2;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.changed_kharif_othercrop_name2 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_kharif_othercrop_name2 + '" id="changed_kharif_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_kharif_croparea_area2" value="' + changed_kharif_croparea_area2 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_kharif_horticulture_water_req2" value="' + changed_kharif_horticulture_water_req2 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand2">' + changed_kharif_horticulture_waterdemand2 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand2">' + changed_kharif_horticulture_reduction_gw_demand2 + '</span></label></li><li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Changed_crop_Kharif_crp2').html(ass);
                    $('#changed_kharif_othercrop_name2').hide();

                    $('#Changed_crop_Kharif_crp2').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_kharif_othercrop_name2").disabled = true;
                    //    document.getElementById("changed_kharif_croparea_area2").disabled = true;
                    //    document.getElementById("changed_kharif_horticulture_water_req2").disabled = true;

                    //}
                }


                if (response.changed_kharif_othercrop_name3 != null && response.changed_kharif_othercrop_name3 != "null" && response.changed_kharif_othercrop_name3 != "") {

                    var changed_kharif_horticulture_water_req3 = 0;
                    var changed_kharif_croparea_area3 = 0;
                    var changed_kharif_horticulture_waterdemand3 = 0;
                    var changed_kharif_horticulture_reduction_gw_demand3 = 0;

                    if (response.changed_kharif_horticulture_water_req3 != null && response.changed_kharif_horticulture_water_req3 != "") {
                        changed_kharif_horticulture_water_req3 = response.changed_kharif_horticulture_water_req3;
                    }
                    if (response.changed_kharif_croparea_area3 != null && response.changed_kharif_croparea_area3 != "") {
                        changed_kharif_croparea_area3 = response.changed_kharif_croparea_area3;
                    }
                    if (response.changed_kharif_horticulture_waterdemand3 != null && response.changed_kharif_horticulture_waterdemand3 != "") {
                        changed_kharif_horticulture_waterdemand3 = response.changed_kharif_horticulture_waterdemand3;
                    }
                    if (response.changed_kharif_horticulture_reduction_gw_demand3 != null && response.changed_kharif_horticulture_reduction_gw_demand3 != "") {
                        changed_kharif_horticulture_reduction_gw_demand3 = response.changed_kharif_horticulture_reduction_gw_demand3;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.changed_kharif_othercrop_name3 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_kharif_othercrop_name3 + '" id="changed_kharif_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_kharif_croparea_area3" value="' + changed_kharif_croparea_area3 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_kharif_horticulture_water_req3" value="' + changed_kharif_horticulture_water_req3 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand3">' + changed_kharif_horticulture_waterdemand3 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand3">' + changed_kharif_horticulture_reduction_gw_demand3 + '</span></label></li><li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Changed_crop_Kharif_crp3').html(ass);
                    $('#changed_kharif_othercrop_name3').hide();

                    $('#Changed_crop_Kharif_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_kharif_othercrop_name3").disabled = true;
                    //    document.getElementById("changed_kharif_croparea_area3").disabled = true;
                    //    document.getElementById("changed_kharif_horticulture_water_req3").disabled = true;

                    //}

                }

                if (response.changed_kharif_othercrop_name4 != null && response.changed_kharif_othercrop_name4 != "null" && response.changed_kharif_othercrop_name4 != "") {


                    var changed_kharif_horticulture_water_req4 = 0;
                    var changed_kharif_croparea_area4 = 0;
                    var changed_kharif_horticulture_waterdemand4 = 0;
                    var changed_kharif_horticulture_reduction_gw_demand4 = 0;

                    if (response.changed_kharif_horticulture_water_req4 != null && response.changed_kharif_horticulture_water_req4 != "") {
                        changed_kharif_horticulture_water_req4 = response.changed_kharif_horticulture_water_req4;
                    }
                    if (response.changed_kharif_croparea_area4 != null && response.changed_kharif_croparea_area4 != "") {
                        changed_kharif_croparea_area4 = response.changed_kharif_croparea_area4;
                    }
                    if (response.changed_kharif_horticulture_waterdemand4 != null && response.changed_kharif_horticulture_waterdemand4 != "") {
                        changed_kharif_horticulture_waterdemand4 = response.changed_kharif_horticulture_waterdemand4;
                    }
                    if (response.changed_kharif_horticulture_reduction_gw_demand4 != null && response.changed_kharif_horticulture_reduction_gw_demand4 != "") {
                        changed_kharif_horticulture_reduction_gw_demand4 = response.changed_kharif_horticulture_reduction_gw_demand4;
                    }

                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.changed_kharif_othercrop_name4 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_kharif_othercrop_name4 + '" id="changed_kharif_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_kharif_croparea_area4" value="' + changed_kharif_croparea_area4 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_kharif_horticulture_water_req4" value="' + changed_kharif_horticulture_water_req4 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand4">' + changed_kharif_horticulture_waterdemand4 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand4">' + changed_kharif_horticulture_reduction_gw_demand4 + '</span></label></li><li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Changed_crop_Kharif_crp4').html(ass);
                    $('#changed_kharif_othercrop_name4').hide();

                    $('#Changed_crop_Kharif_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_kharif_othercrop_name4").disabled = true;
                    //    document.getElementById("changed_kharif_croparea_area4").disabled = true;
                    //    document.getElementById("changed_kharif_horticulture_water_req4").disabled = true;

                    //}
                }
                if (response.changed_kharif_othercrop_name5 != null && response.changed_kharif_othercrop_name5 != "null" && response.changed_kharif_othercrop_name5 != "") {

                    var changed_kharif_horticulture_water_req5 = 0;
                    var changed_kharif_croparea_area5 = 0;
                    var changed_kharif_horticulture_waterdemand5 = 0;
                    var changed_kharif_horticulture_reduction_gw_demand5 = 0;

                    if (response.changed_kharif_horticulture_water_req5 != null && response.changed_kharif_horticulture_water_req5 != "") {
                        changed_kharif_horticulture_water_req5 = response.changed_kharif_horticulture_water_req5;
                    }
                    if (response.changed_kharif_croparea_area5 != null && response.changed_kharif_croparea_area5 != "") {
                        changed_kharif_croparea_area5 = response.changed_kharif_croparea_area5;
                    }
                    if (response.changed_kharif_horticulture_waterdemand5 != null && response.changed_kharif_horticulture_waterdemand5 != "") {
                        changed_kharif_horticulture_waterdemand5 = response.changed_kharif_horticulture_waterdemand5;
                    }
                    if (response.changed_kharif_horticulture_reduction_gw_demand5 != null && response.changed_kharif_horticulture_reduction_gw_demand5 != "") {
                        changed_kharif_horticulture_reduction_gw_demand5 = response.changed_kharif_horticulture_reduction_gw_demand5;
                    }


                    var ass = '<div class="total_div_box"><div class="img-div" style = "color:#fff">' + response.changed_kharif_othercrop_name5 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_kharif_othercrop_name5 + '" id="changed_kharif_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_kharif_croparea_area5" value="' + changed_kharif_croparea_area5 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_kharif_horticulture_water_req5" value="' + changed_kharif_horticulture_water_req5 + '" onkeyup="Crop_Diversion_Kharif_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_kharif_horticulture_waterdemand5">' + changed_kharif_horticulture_waterdemand5 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_kharif_horticulture_reduction_gw_demand5">' + changed_kharif_horticulture_reduction_gw_demand5 + '</span></label></li><li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Changed_crop_Kharif_crp5').html(ass);
                    $('#changed_kharif_othercrop_name5').hide();

                    $('#Changed_crop_Kharif_crp5').show();

                    $('#Changed_crop_Kharif_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_kharif_othercrop_name5").disabled = true;
                    //    document.getElementById("changed_kharif_croparea_area5").disabled = true;
                    //    document.getElementById("changed_kharif_horticulture_water_req5").disabled = true;
                    //}
                }
                //Rabi


                if (response.changed_rabi_othercrop_name1 == null || response.changed_rabi_othercrop_name1 == "") {
                    add_Changed_Crop_rabi_count1 = 1;
                }
                else {
                    add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
                }

                if (response.changed_rabi_othercrop_name2 == null || response.changed_rabi_othercrop_name2 == "") {
                    add_Changed_Crop_rabi_count2 = 2;
                }
                else {
                    add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
                }

                if (response.changed_rabi_othercrop_name3 == null || response.changed_rabi_othercrop_name3 == "") {
                    add_Changed_Crop_rabi_count3 = 3;
                }
                else {
                    add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
                }

                if (response.changed_rabi_othercrop_name4 == null || response.changed_rabi_othercrop_name4 == "") {
                    add_Changed_Crop_rabi_count4 = 4;
                }
                else {
                    add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
                }
                if (response.changed_rabi_othercrop_name5 == null || response.changed_rabi_othercrop_name5 == "") {
                    add_Changed_Crop_rabi_count5 = 5;
                }
                else {
                    add_Changed_Crop_rabi_count = add_Changed_Crop_rabi_count + 1;
                }
                if (add_Changed_Crop_rabi_count == 5) {

                    $('#Changed_crop_Rabi_AddCrop').hide();
                }

                if (response.changed_rabi_othercrop_name1 != null && response.changed_rabi_othercrop_name1 != "null" && response.changed_rabi_othercrop_name1 != "") {
                    var changed_rabi_horticulture_water_req1 = 0;
                    var changed_rabi_croparea_area1 = 0;
                    var changed_rabi_horticulture_waterdemand1 = 0;
                    var changed_rabi_horticulture_reduction_gw_demand1 = 0;

                    if (response.changed_rabi_horticulture_water_req1 != null && response.changed_rabi_horticulture_water_req1 != "") {
                        changed_rabi_horticulture_water_req1 = response.changed_rabi_horticulture_water_req1;
                    }
                    if (response.changed_rabi_croparea_area1 != null && response.changed_rabi_croparea_area1 != "") {
                        changed_rabi_croparea_area1 = response.changed_rabi_croparea_area1;
                    }
                    if (response.changed_rabi_horticulture_waterdemand1 != null && response.changed_rabi_horticulture_waterdemand1 != "") {
                        changed_rabi_horticulture_waterdemand1 = response.changed_rabi_horticulture_waterdemand1;
                    }
                    if (response.changed_rabi_horticulture_reduction_gw_demand1 != null && response.changed_rabi_horticulture_reduction_gw_demand1 != "") {
                        changed_rabi_horticulture_reduction_gw_demand1 = response.changed_rabi_horticulture_reduction_gw_demand1;
                    }



                    var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' + response.changed_rabi_othercrop_name1 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_rabi_othercrop_name1 + '" id="changed_rabi_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_rabi_croparea_area1" value="' + changed_rabi_croparea_area1 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_rabi_horticulture_water_req1" value="' + changed_rabi_horticulture_water_req1 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand1">' + changed_rabi_horticulture_waterdemand1 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand1">' + changed_rabi_horticulture_reduction_gw_demand1 + '</span></label></li><li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Changed_crop_Rabi_crp1').html(ass);
                    $('#changed_rabi_othercrop_name1').hide();

                    $('#Changed_crop_Rabi_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("changed_rabi_othercrop_name1").disabled = true;
                    //    document.getElementById("changed_rabi_croparea_area1").disabled = true;
                    //    document.getElementById("changed_rabi_horticulture_water_req1").disabled = true;

                    //}

                }

                if (response.changed_rabi_othercrop_name2 != null && response.changed_rabi_othercrop_name2 != "null" && response.changed_rabi_othercrop_name2 != "") {

                    var changed_rabi_horticulture_water_req2 = 0;
                    var changed_rabi_croparea_area2 = 0;
                    var changed_rabi_horticulture_waterdemand2 = 0;
                    var changed_rabi_horticulture_reduction_gw_demand2 = 0;

                    if (response.changed_rabi_horticulture_water_req2 != null && response.changed_rabi_horticulture_water_req2 != "") {
                        changed_rabi_horticulture_water_req2 = response.changed_rabi_horticulture_water_req2;
                    }
                    if (response.changed_rabi_croparea_area2 != null && response.changed_rabi_croparea_area2 != "") {
                        changed_rabi_croparea_area2 = response.changed_rabi_croparea_area2;
                    }
                    if (response.changed_rabi_horticulture_waterdemand2 != null && response.changed_rabi_horticulture_waterdemand2 != "") {
                        changed_rabi_horticulture_waterdemand2 = response.changed_rabi_horticulture_waterdemand2;
                    }
                    if (response.changed_rabi_horticulture_reduction_gw_demand2 != null && response.changed_rabi_horticulture_reduction_gw_demand2 != "") {
                        changed_rabi_horticulture_reduction_gw_demand2 = response.changed_rabi_horticulture_reduction_gw_demand2;
                    }
                    
                    var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' + response.changed_rabi_othercrop_name2 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_rabi_othercrop_name2 + '" id="changed_rabi_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_rabi_croparea_area2" value="' + changed_rabi_croparea_area2 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_rabi_horticulture_water_req2" value="' + changed_rabi_horticulture_water_req2 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand2">' + changed_rabi_horticulture_waterdemand2 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand2">' + changed_rabi_horticulture_reduction_gw_demand2 + '</span></label></li><li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Changed_crop_Rabi_crp2').html(ass);
                    $('#changed_rabi_othercrop_name2').hide();

                    $('#Changed_crop_Rabi_crp2').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_rabi_othercrop_name2").disabled = true;
                    //    document.getElementById("changed_rabi_croparea_area2").disabled = true;
                    //    document.getElementById("changed_rabi_horticulture_water_req2").disabled = true;

                    //}
                }


                if (response.changed_rabi_othercrop_name3 != null && response.changed_rabi_othercrop_name3 != "null" && response.changed_rabi_othercrop_name3 != "") {

                    var changed_rabi_horticulture_water_req3 = 0;
                    var changed_rabi_croparea_area3 = 0;
                    var changed_rabi_horticulture_waterdemand3 = 0;
                    var changed_rabi_horticulture_reduction_gw_demand3 = 0;

                    if (response.changed_rabi_horticulture_water_req3 != null && response.changed_rabi_horticulture_water_req3 != "") {
                        changed_rabi_horticulture_water_req3 = response.changed_rabi_horticulture_water_req3;
                    }
                    if (response.changed_rabi_croparea_area3 != null && response.changed_rabi_croparea_area3 != "") {
                        changed_rabi_croparea_area3 = response.changed_rabi_croparea_area3;
                    }
                    if (response.changed_rabi_horticulture_waterdemand3 != null && response.changed_rabi_horticulture_waterdemand3 != "") {
                        changed_rabi_horticulture_waterdemand3 = response.changed_rabi_horticulture_waterdemand3;
                    }
                    if (response.changed_rabi_horticulture_reduction_gw_demand3 != null && response.changed_rabi_horticulture_reduction_gw_demand3 != "") {
                        changed_rabi_horticulture_reduction_gw_demand3 = response.changed_rabi_horticulture_reduction_gw_demand3;
                    }

                    var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' + response.changed_rabi_othercrop_name3 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_rabi_othercrop_name3 + '" id="changed_rabi_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_rabi_croparea_area3" value="' + changed_rabi_croparea_area3 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_rabi_horticulture_water_req3" value="' + changed_rabi_horticulture_water_req3 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand3">' + changed_rabi_horticulture_waterdemand3 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand3">' + changed_rabi_horticulture_reduction_gw_demand3 + '</span></label></li><li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Changed_crop_Rabi_crp3').html(ass);
                    $('#changed_rabi_othercrop_name3').hide();

                    $('#Changed_crop_Rabi_crp3').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_rabi_othercrop_name3").disabled = true;
                    //    document.getElementById("changed_rabi_croparea_area3").disabled = true;
                    //    document.getElementById("changed_rabi_horticulture_water_req3").disabled = true;

                    //}
                }

                if (response.changed_rabi_othercrop_name4 != null && response.changed_rabi_othercrop_name4 != "null" && response.changed_rabi_othercrop_name4 != "") {

                    var changed_rabi_horticulture_water_req4 = 0;
                    var changed_rabi_croparea_area4 = 0;
                    var changed_rabi_horticulture_waterdemand4 = 0;
                    var changed_rabi_horticulture_reduction_gw_demand4 = 0;

                    if (response.changed_rabi_horticulture_water_req4 != null && response.changed_rabi_horticulture_water_req4 != "") {
                        changed_rabi_horticulture_water_req4 = response.changed_rabi_horticulture_water_req4;
                    }
                    if (response.changed_rabi_croparea_area4 != null && response.changed_rabi_croparea_area4 != "") {
                        changed_rabi_croparea_area4 = response.changed_rabi_croparea_area4;
                    }
                    if (response.changed_rabi_horticulture_waterdemand4 != null && response.changed_rabi_horticulture_waterdemand4 != "") {
                        changed_rabi_horticulture_waterdemand4 = response.changed_rabi_horticulture_waterdemand4;
                    }
                    if (response.changed_rabi_horticulture_reduction_gw_demand4 != null && response.changed_rabi_horticulture_reduction_gw_demand4 != "") {
                        changed_rabi_horticulture_reduction_gw_demand4 = response.changed_rabi_horticulture_reduction_gw_demand4;
                    }
                    var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' + response.changed_rabi_othercrop_name4 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_rabi_othercrop_name4 + '" id="changed_rabi_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_rabi_croparea_area4" value="' + changed_rabi_croparea_area4 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_rabi_horticulture_water_req4" value="' + changed_rabi_horticulture_water_req4 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand4">' + changed_rabi_horticulture_waterdemand4 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand4">' + changed_rabi_horticulture_reduction_gw_demand4 + '</span></label></li><li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Changed_crop_Rabi_crp4').html(ass);
                    $('#changed_rabi_othercrop_name4').hide();

                    $('#Changed_crop_Rabi_crp4').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_rabi_othercrop_name4").disabled = true;
                    //    document.getElementById("changed_rabi_croparea_area4").disabled = true;
                    //    document.getElementById("changed_rabi_horticulture_water_req4").disabled = true;

                    //}

                }
                if (response.changed_rabi_othercrop_name5 != null && response.changed_rabi_othercrop_name5 != "null" && response.changed_rabi_othercrop_name5 != "") {

                    var changed_rabi_horticulture_water_req5 = 0;
                    var changed_rabi_croparea_area5 = 0;
                    var changed_rabi_horticulture_waterdemand5 = 0;
                    var changed_rabi_horticulture_reduction_gw_demand5 = 0;

                    if (response.changed_rabi_horticulture_water_req5 != null && response.changed_rabi_horticulture_water_req5 != "") {
                        changed_rabi_horticulture_water_req5 = response.changed_rabi_horticulture_water_req5;
                    }
                    if (response.changed_rabi_croparea_area5 != null && response.changed_rabi_croparea_area5 != "") {
                        changed_rabi_croparea_area5 = response.changed_rabi_croparea_area5;
                    }
                    if (response.changed_rabi_horticulture_waterdemand5 != null && response.changed_rabi_horticulture_waterdemand5 != "") {
                        changed_rabi_horticulture_waterdemand5 = response.changed_rabi_horticulture_waterdemand5;
                    }
                    if (response.changed_rabi_horticulture_reduction_gw_demand5 != null && response.changed_rabi_horticulture_reduction_gw_demand5 != "") {
                        changed_rabi_horticulture_reduction_gw_demand5 = response.changed_rabi_horticulture_reduction_gw_demand5;
                    }
                    var ass = '<div class="total_div_box_rabi"><div class="img-div" style = "color:#fff">' + response.changed_rabi_othercrop_name5 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_rabi_othercrop_name5 + '" id="changed_rabi_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_rabi_croparea_area5" value="' + changed_rabi_croparea_area5 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_rabi_horticulture_water_req5" value="' + changed_rabi_horticulture_water_req5 + '" onkeyup="Crop_Diversion_Rabi_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_rabi_horticulture_waterdemand5">' + changed_rabi_horticulture_waterdemand5 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_rabi_horticulture_reduction_gw_demand5">' + changed_rabi_horticulture_reduction_gw_demand5 + '</span></label></li><li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Changed_crop_Rabi_crp5').html(ass);
                    $('#changed_rabi_othercrop_name5').hide();

                    $('#Changed_crop_Rabi_crp5').show();

                    $('#Changed_crop_Rabi_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_rabi_othercrop_name5").disabled = true;
                    //    document.getElementById("changed_rabi_croparea_area5").disabled = true;
                    //    document.getElementById("changed_rabi_horticulture_water_req5").disabled = true;
                    //}
                }


                //Summer


                if (response.changed_summer_othercrop_name1 == null || response.changed_summer_othercrop_name1 == "") {
                    add_Changed_Crop_summer_count1 = 1;
                }
                else {
                    add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
                }

                if (response.changed_summer_othercrop_name2 == null || response.changed_summer_othercrop_name2 == "") {
                    add_Changed_Crop_summer_count2 = 2;
                }
                else {
                    add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
                }

                if (response.changed_summer_othercrop_name3 == null || response.changed_summer_othercrop_name3 == "") {
                    add_Changed_Crop_summer_count3 = 3;
                }
                else {
                    add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
                }

                if (response.changed_summer_othercrop_name4 == null || response.changed_summer_othercrop_name4 == "") {
                    add_Changed_Crop_summer_count4 = 4;
                }
                else {
                    add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
                }

                if (response.changed_summer_othercrop_name5 == null || response.changed_summer_othercrop_name5 == "") {
                    add_Changed_Crop_summer_count5 = 5;
                }
                else {
                    add_Changed_Crop_summer_count = add_Changed_Crop_summer_count + 1;
                }
                if (add_Changed_Crop_summer_count == 5) {
                    $('#Changed_crop_Summer_AddCrop').hide();
                }



                if (response.changed_summer_othercrop_name1 != null && response.changed_summer_othercrop_name1 != "null" && response.changed_summer_othercrop_name1 != "") {

                    var changed_summer_horticulture_water_req1 = 0;
                    var changed_summer_croparea_area1 = 0;
                    var changed_summer_horticulture_waterdemand1 = 0;
                    var changed_summer_horticulture_reduction_gw_demand1 = 0;

                    if (response.changed_summer_horticulture_water_req1 != null && response.changed_summer_horticulture_water_req1 != "") {
                        changed_summer_horticulture_water_req1 = response.changed_summer_horticulture_water_req1;
                    }
                    if (response.changed_summer_croparea_area1 != null && response.changed_summer_croparea_area1 != "") {
                        changed_summer_croparea_area1 = response.changed_summer_croparea_area1;
                    }
                    if (response.changed_summer_horticulture_waterdemand1 != null && response.changed_summer_horticulture_waterdemand1 != "") {
                        changed_summer_horticulture_waterdemand1 = response.changed_summer_horticulture_waterdemand1;
                    }
                    if (response.changed_summer_horticulture_reduction_gw_demand1 != null && response.changed_summer_horticulture_reduction_gw_demand1 != "") {
                        changed_summer_horticulture_reduction_gw_demand1 = response.changed_summer_horticulture_reduction_gw_demand1;
                    }


                    var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' + response.changed_summer_othercrop_name1 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_summer_othercrop_name1 + '" id="changed_summer_othercrop_name1" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_summer_croparea_area1" value="' + changed_summer_croparea_area1 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_summer_horticulture_water_req1" value="' + changed_summer_horticulture_water_req1 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand1">' + changed_summer_horticulture_waterdemand1 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand1">' + changed_summer_horticulture_reduction_gw_demand1 + '</span></label></li><li style="color:#fff">Other crop 1</li></ul></div></div>';

                    $('#Changed_crop_Summer_crp1').html(ass);
                    $('#changed_summer_othercrop_name1').hide();

                    $('#Changed_crop_Summer_crp1').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {
                    //    document.getElementById("changed_summer_othercrop_name1").disabled = true;
                    //    document.getElementById("changed_summer_croparea_area1").disabled = true;
                    //    document.getElementById("changed_summer_horticulture_water_req1").disabled = true;
                    //}
                }

                if (response.changed_summer_othercrop_name2 != null && response.changed_summer_othercrop_name2 != "null" && response.changed_summer_othercrop_name2 != "") {

                    var changed_summer_horticulture_water_req2 = 0;
                    var changed_summer_croparea_area2 = 0;
                    var changed_summer_horticulture_waterdemand2 = 0;
                    var changed_summer_horticulture_reduction_gw_demand2 = 0;

                    if (response.changed_summer_horticulture_water_req2 != null && response.changed_summer_horticulture_water_req2 != "") {
                        changed_summer_horticulture_water_req2 = response.changed_summer_horticulture_water_req2;
                    }
                    if (response.changed_summer_croparea_area2 != null && response.changed_summer_croparea_area2 != "") {
                        changed_summer_croparea_area2 = response.changed_summer_croparea_area2;
                    }
                    if (response.changed_summer_horticulture_waterdemand2 != null && response.changed_summer_horticulture_waterdemand2 != "") {
                        changed_summer_horticulture_waterdemand2 = response.changed_summer_horticulture_waterdemand2;
                    }
                    if (response.changed_summer_horticulture_reduction_gw_demand2 != null && response.changed_summer_horticulture_reduction_gw_demand2 != "") {
                        changed_summer_horticulture_reduction_gw_demand2 = response.changed_summer_horticulture_reduction_gw_demand2;
                    }
                    var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' + response.changed_summer_othercrop_name2 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_summer_othercrop_name2 + '" id="changed_summer_othercrop_name2" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_summer_croparea_area2" value="' + changed_summer_croparea_area2 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_summer_horticulture_water_req2" value="' + changed_summer_horticulture_water_req2 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand2">' + changed_summer_horticulture_waterdemand2 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m): <span id="changed_summer_horticulture_reduction_gw_demand2">' + changed_summer_horticulture_reduction_gw_demand2 + '</span></label></li><li style="color:#fff">Other crop 2</li></ul></div></div>';

                    $('#Changed_crop_Summer_crp2').html(ass);
                    $('#changed_summer_othercrop_name2').hide();

                    $('#Changed_crop_Summer_crp2').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_summer_othercrop_name2").disabled = true;
                    //    document.getElementById("changed_summer_croparea_area2").disabled = true;
                    //    document.getElementById("changed_summer_horticulture_water_req2").disabled = true;

                    //}

                }


                if (response.changed_summer_othercrop_name3 != null && response.changed_summer_othercrop_name3 != "null" && response.changed_summer_othercrop_name3 != "") {

                    var changed_summer_horticulture_water_req3 = 0;
                    var changed_summer_croparea_area3 = 0;
                    var changed_summer_horticulture_waterdemand3 = 0;
                    var changed_summer_horticulture_reduction_gw_demand3 = 0;

                    if (response.changed_summer_horticulture_water_req3 != null && response.changed_summer_horticulture_water_req3 != "") {
                        changed_summer_horticulture_water_req3 = response.changed_summer_horticulture_water_req3;
                    }
                    if (response.changed_summer_croparea_area3 != null && response.changed_summer_croparea_area3 != "") {
                        changed_summer_croparea_area3 = response.changed_summer_croparea_area3;
                    }
                    if (response.changed_summer_horticulture_waterdemand3 != null && response.changed_summer_horticulture_waterdemand3 != "") {
                        changed_summer_horticulture_waterdemand3 = response.changed_summer_horticulture_waterdemand3;
                    }
                    if (response.changed_summer_horticulture_reduction_gw_demand3 != null && response.changed_summer_horticulture_reduction_gw_demand3 != "") {
                        changed_summer_horticulture_reduction_gw_demand3 = response.changed_summer_horticulture_reduction_gw_demand3;
                    }

                    var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' + response.changed_summer_othercrop_name3 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_summer_othercrop_name3 + '" id="changed_summer_othercrop_name3" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_summer_croparea_area3" value="' + changed_summer_croparea_area3 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_summer_horticulture_water_req3" value="' + changed_summer_horticulture_water_req3 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand3">' + changed_summer_horticulture_waterdemand3 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand3">' + changed_summer_horticulture_reduction_gw_demand3 + '</span></label></li><li style="color:#fff">Other crop 3</li></ul></div></div>';

                    $('#Changed_crop_Summer_crp3').html(ass);
                    $('#changed_summer_othercrop_name3').hide();

                    $('#Changed_crop_Summer_crp3').show();
                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_summer_othercrop_name3").disabled = true;
                    //    document.getElementById("changed_summer_croparea_area3").disabled = true;
                    //    document.getElementById("changed_summer_horticulture_water_req3").disabled = true;

                    //}
                }

                if (response.changed_summer_othercrop_name4 != null && response.changed_summer_othercrop_name4 != "null" && response.changed_summer_othercrop_name4 != "") {
                    var changed_summer_horticulture_water_req4 = 0;
                    var changed_summer_croparea_area4 = 0;
                    var changed_summer_horticulture_waterdemand4 = 0;
                    var changed_summer_horticulture_reduction_gw_demand4 = 0;

                    if (response.changed_summer_horticulture_water_req4 != null && response.changed_summer_horticulture_water_req4 != "") {
                        changed_summer_horticulture_water_req4 = response.changed_summer_horticulture_water_req4;
                    }
                    if (response.changed_summer_croparea_area4 != null && response.changed_summer_croparea_area4 != "") {
                        changed_summer_croparea_area4 = response.changed_summer_croparea_area4;
                    }
                    if (response.changed_summer_horticulture_waterdemand4 != null && response.changed_summer_horticulture_waterdemand4 != "") {
                        changed_summer_horticulture_waterdemand4 = response.changed_summer_horticulture_waterdemand4;
                    }
                    if (response.changed_summer_horticulture_reduction_gw_demand4 != null && response.changed_summer_horticulture_reduction_gw_demand4 != "") {
                        changed_summer_horticulture_reduction_gw_demand4 = response.changed_summer_horticulture_reduction_gw_demand4;
                    }

                    var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' + response.changed_summer_othercrop_name4 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_summer_othercrop_name4 + '" id="changed_summer_othercrop_name4" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_summer_croparea_area4" value="' + changed_summer_croparea_area4 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_summer_horticulture_water_req4" value="' + changed_summer_horticulture_water_req4 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand4">' + changed_summer_horticulture_waterdemand4 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand4">' + changed_summer_horticulture_reduction_gw_demand4 + '</span></label></li><li style="color:#fff">Other crop 4</li></ul></div></div>';

                    $('#Changed_crop_Summer_crp4').html(ass);
                    $('#changed_summer_othercrop_name4').hide();

                    $('#Changed_crop_Summer_crp4').show();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {

                    //    document.getElementById("changed_summer_othercrop_name4").disabled = true;
                    //    document.getElementById("changed_summer_croparea_area4").disabled = true;
                    //    document.getElementById("changed_summer_horticulture_water_req4").disabled = true;

                    //}

                }
                if (response.changed_summer_othercrop_name5 != null && response.changed_summer_othercrop_name5 != "null" && response.changed_summer_othercrop_name5 != "") {
                    var changed_summer_horticulture_water_req5 = 0;
                    var changed_summer_croparea_area5 = 0;
                    var changed_summer_horticulture_waterdemand5 = 0;
                    var changed_summer_horticulture_reduction_gw_demand5 = 0;

                    if (response.changed_summer_horticulture_water_req5 != null && response.changed_summer_horticulture_water_req5 != "") {
                        changed_summer_horticulture_water_req5 = response.changed_summer_horticulture_water_req5;
                    }
                    if (response.changed_summer_croparea_area5 != null && response.changed_summer_croparea_area5 != "") {
                        changed_summer_croparea_area5 = response.changed_summer_croparea_area5;
                    }
                    if (response.changed_summer_horticulture_waterdemand5 != null && response.changed_summer_horticulture_waterdemand5 != "") {
                        changed_summer_horticulture_waterdemand5 = response.changed_summer_horticulture_waterdemand5;
                    }
                    if (response.changed_summer_horticulture_reduction_gw_demand5 != null && response.changed_summer_horticulture_reduction_gw_demand5 != "") {
                        changed_summer_horticulture_reduction_gw_demand5 = response.changed_summer_horticulture_reduction_gw_demand5;
                    }

                    var ass = '<div class="total_div_box_summer"><div class="img-div" style = "color:#fff">' + response.changed_summer_othercrop_name5 + '</div><div class="content">' +
                        '<ul class="wsp-content-content"><li><input type="text" class="form-control" value="' + response.changed_summer_othercrop_name5 + '" id="changed_summer_othercrop_name5" placeholder="Crop Name" title="Crop Name" /></li>' +
                        '<li><input type="text" id="changed_summer_croparea_area5" value="' + changed_summer_croparea_area5 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Crop Area(ha)" title="Crop Area(ha)">' +
                        '</li><li><input type="text" id="changed_summer_horticulture_water_req5" value="' + changed_summer_horticulture_water_req5 + '" onkeyup="Crop_Diversion_Crop_WaterRequire1()" class="form-control decimal" placeholder="Water Requirement (mm)" title="Water Requirement (mm)"></li>' +
                        '<li><label><img src="/Content/Agriculture_icons/Water demand.png" title="Water demand"> <span id="changed_summer_horticulture_waterdemand5">' + changed_summer_horticulture_waterdemand5 + '</span><span>(ha.m)</span></label></li>' +
                        '<li><label>Reduction in GW demand (Ha.m):<span id="changed_summer_horticulture_reduction_gw_demand5">' + changed_summer_horticulture_reduction_gw_demand5 + '</span></label></li><li style="color:#fff">Other crop 5</li></ul></div></div>';

                    $('#Changed_crop_Summer_crp5').html(ass);
                    $('#changed_summer_othercrop_name5').hide();

                    $('#Changed_crop_Summer_crp5').show();

                    $('#Changed_crop_Summer_AddCrop').hide();

                    //if (StateOfficer != "Gram Panchyat Nodal Officer") {


                    //    document.getElementById("changed_summer_othercrop_name5").disabled = true;
                    //    document.getElementById("changed_summer_croparea_area5").disabled = true;
                    //    document.getElementById("changed_summer_horticulture_water_req5").disabled = true;
                    //}
                }



                $('#original_summer_horticulture_crop_area').val(response.original_summer_horticulture_crop_area);
                if (response.original_summer_horticulture_water_req != null) {
                    $('#original_summer_horticulture_water_req').val(response.original_summer_horticulture_water_req);
                } else {
                    $('#original_summer_horticulture_water_req').val(470);
                }
                $('#changed_summer_horticulture_crop_area').val(response.changed_summer_horticulture_crop_area);

                if (response.changed_summer_horticulture_water_req != null) {
                    $('#changed_summer_horticulture_water_req').val(response.changed_summer_horticulture_water_req);
                } else {
                    $('#changed_summer_horticulture_water_req').val(470);
                }

                $('#original_summer_horticulture_waterdemand').text(response.original_summer_horticulture_waterdemand);
                $('#changed_summer_horticulture_waterdemand').text(response.changed_summer_horticulture_waterdemand);
                $('#changed_summer_horticulture_reduction_gw_demand').text(response.changed_summer_horticulture_reduction_gw_demand);


                $('#crop_approx_estimated_cost').val(response.crop_approx_estimated_cost);
                $('#crop_cost_type').val(response.crop_cost_type);

                $('#Crop_Diversion_kharif_Paddy_UserVale').val(response.changed_kharif_paddy_crop_area);
                var sss_1 = response.changed_kharif_paddy_fundingsource;
                $("#Crop_Diversion_kharif_Paddy_FundingSource").val(sss_1);
                //document.getElementById("Crop_Diversion_kharif_Paddy_FundingSource").value = sss_1;
                $('#Crop_Diversion_kharif_Ragi_UserVale').val(response.changed_kharif_ragi_crop_area);
                $('#Crop_Diversion_kharif_Ragi_FundingSource').val(response.changed_kharif_ragi_fundingsource);
                $('#Crop_Diversion_kharif_GroundNut_UserVale').val(response.changed_kharif_groundnut_crop_area);
                $('#Crop_Diversion_kharif_GroundNut_FundingSource').val(response.changed_kharif_groundnut_fundingsource);
                $('#Crop_Diversion_kharif_Sugarcane_UserVale').val(response.changed_kharif_sugarcane_crop_area);
                $('#Crop_Diversion_kharif_Sugarcane_FundingSource').val(response.changed_kharif_sugarcane_fundingsource);
                $('#Crop_Diversion_kharif_Tomato_UserVale').val(response.changed_kharif_tomoto_crop_area);
                $('#Crop_Diversion_kharif_Tomoto_FundingSource').val(response.changed_kharif_tomoto_fundingsource);
                //$('#Crop_Diversion_kharif_Cabbage_UserVale').val(response.changed_kharif_cabbage_crop_area);
                //$('#Crop_Diversion_kharif_Cabbage_FundingSource').val(response.changed_kharif_cabbage_fundingsource);
                //$('#Crop_Diversion_kharif_Beans_UserVale').val(response.changed_kharif_beans_crop_area);
                //$('#Crop_Diversion_kharif_Beans_FundingSource').val(response.changed_kharif_beans_fundingsource);
                $('#Crop_Diversion_kharif_Floriculture_UserVale').val(response.changed_kharif_floriculture_crop_area);
                $('#Crop_Diversion_kharif_Floriculture_FundingSource').val(response.changed_kharif_floriculture_fundingsource);
                $('#Crop_Diversion_kharif_Sericulture_UserVale').val(response.changed_kharif_sericulture_crop_area);
                $('#Crop_Diversion_kharif_Sericulture_FundingSource').val(response.changed_kharif_sericulture_fundingsource);
                //$('#Crop_Diversion_kharif_Cucmber_UserVale').val(response.changed_kharif_cucumber_crop_area);
                //$('#Crop_Diversion_kharif_Cucmber_FundingSource').val(response.changed_kharif_cucumber_fundingsource);
                $('#Crop_Diversion_kharif_Banana_UserVale').val(response.changed_kharif_banana_crop_area);
                $('#Crop_Diversion_kharif_Banana_FundingSource').val(response.changed_kharif_banana_fundingsource);
                $('#Crop_Diversion_kharif_Fodder_UserVale').val(response.changed_kharif_fodder_crop_area);
                $('#Crop_Diversion_kharif_Fodder_FundingSource').val(response.changed_kharif_fodder_fundingsource);
                $('#Crop_Diversion_kharif_Maize_UserVale').val(response.changed_kharif_maize_crop_area);
                $('#Crop_Diversion_kharif_Maize_FundingSource').val(response.changed_kharif_maize_fundingsource);
                //$('#Crop_Diversion_kharif_Potato_UserVale').val(response.changed_kharif_potato_crop_area);
                //$('#Crop_Diversion_kharif_Potato_FundingSource').val(response.changed_kharif_potato_fundingsource);
                $('#Crop_Diversion_kharif_Chillies_UserVale').val(response.changed_kharif_chillies_crop_area);
                $('#Crop_Diversion_kharif_Chillies_FundingSource').val(response.changed_kharif_chillies_fundingsource);
                $('#Crop_Diversion_kharif_Cotton_UserVale').val(response.changed_kharif_cotton_crop_area);
                $('#Crop_Diversion_kharif_Cotton_FundingSource').val(response.changed_kharif_cotton_fundingsource);
                $('#Crop_Diversion_kharif_Melon_UserVale').val(response.changed_kharif_melon_crop_area);
                $('#Crop_Diversion_kharif_Melon_FundingSource').val(response.changed_kharif_melon_fundingsource);
                $('#Crop_Diversion_kharif_Citrus_UserVale').val(response.changed_kharif_citrus_crop_area);
                $('#Crop_Diversion_kharif_Citrus_FundingSource').val(response.changed_kharif_citrus_fundingsource);
                //$('#Crop_Diversion_kharif_Peanut_UserVale').val(response.changed_kharif_peanut_crop_area);
                //$('#Crop_Diversion_kharif_Peanut_FundingSource').val(response.changed_kharif_peanut_fundingsource);
                $('#Crop_Diversion_kharif_Horticulture_UserVale').val(response.changed_kharif_horticulture_crop_area);
                $('#Crop_Diversion_kharif_Horticulture_FundingSource').val(response.changed_kharif_horticulture_fundingsource);
                $('#Crop_Diversion_Rabi_Sericulture_UserVale').val(response.changed_rabi_sericulture_crop_area);
                $('#Crop_Diversion_Rabi_Sericulture_FundingSource').val(response.changed_rabi_sericulture_fundingsource);
                $('#Crop_Diversion_Rabi_Tomota_UserVale').val(response.changed_rabi_tomoto_crop_area);
                $('#Crop_Diversion_Rabi_Tomota_FundingSource').val(response.changed_rabi_tomoto_fundingsource);
                //$('#Crop_Diversion_Rabi_Cabbage_UserVale').val(response.changed_rabi_cabbage_crop_area);
                //$('#Crop_Diversion_Rabi_Cabbage_FundingSource').val(response.changed_rabi_cabbage_fundingsource);
                //$('#Crop_Diversion_Rabi_Beans_UserVale').val(response.changed_rabi_beans_crop_area);
                //$('#Crop_Diversion_Rabi_Beans_FundingSource').val(response.changed_rabi_beans_fundingsource);
                $('#Crop_Diversion_Rabi_Floriculture_UserVale').val(response.changed_rabi_floriculture_crop_area);
                $('#Crop_Diversion_Rabi_Floriculture_FundingSource').val(response.changed_rabi_floriculture_fundingsource);
                //$('#Crop_Diversion_Rabi_Potato_UserVale').val(response.changed_rabi_potato_crop_area);
                //$('#Crop_Diversion_Rabi_Potato_FundingSource').val(response.changed_rabi_potato_fundingsource);
                //$('#Crop_Diversion_Rabi_Cucumber_UserVale').val(response.changed_rabi_cucumber_crop_area);
                //$('#Crop_Diversion_Rabi_Cucumber_FundingSource').val(response.changed_rabi_cucumber_fundingsource);
                $('#Crop_Diversion_Rabi_Ragi_UserVale').val(response.changed_rabi_ragi_crop_area);
                $('#Crop_Diversion_Rabi_Ragi_FundingSource').val(response.changed_rabi_ragi_fundingsource);
                $('#Crop_Diversion_Rabi_Sugarcane_UserVale').val(response.changed_rabi_sugarcane_crop_area);
                $('#Crop_Diversion_Rabi_Sugarcane_FundingSource').val(response.changed_rabi_sugarcane_fundingsource);
                $('#Crop_Diversion_Rabi_Maize_UserVale').val(response.changed_rabi_maize_crop_area);
                $('#Crop_Diversion_Rabi_Maize_FundingSource').val(response.changed_rabi_maize_fundingsource);
                $('#Crop_Diversion_Rabi_Fodder_UserVale').val(response.changed_rabi_fodder_crop_area);
                $('#Crop_Diversion_Rabi_Fodder_FundingSource').val(response.changed_rabi_fodder_fundingsource);
                $('#Crop_Diversion_Rabi_Paddy_UserVale').val(response.changed_rabi_paddy_crop_area);
                $('#Crop_Diversion_Rabi_Paddy_FundingSource').val(response.changed_rabi_paddy_fundingsource);
                $('#Crop_Diversion_Rabi_Alfalfa_UserVale').val(response.changed_rabi_alfalfa_crop_area);
                $('#Crop_Diversion_Rabi_Alfalfa_FundingSource').val(response.changed_rabi_alfalfa_fundingsource);
                //$('#Crop_Diversion_Rabi_Onion_UserVale').val(response.changed_rabi_onion_crop_area);
                //$('#Crop_Diversion_Rabi_Onion_FundingSource').val(response.changed_rabi_onion_fundingsource);
                $('#Crop_Diversion_Rabi_Hortculture_UserVale').val(response.changed_rabi_horticulture_crop_area);
                $('#Crop_Diversion_Rabi_Hortculture_FundingSource').val(response.changed_rabi_horticulture_fundingsource);
                $('#Crop_Diversion_Rabi_Sunflower_UserVale').val(response.changed_rabi_sunflower_crop_area);
                $('#Crop_Diversion_Rabi_Sunflower_FundingSource').val(response.changed_rabi_sunflower_fundingsource);
                $('#Crop_Diversion_Crop_Sericulture_UserVale').val(response.changed_summer_sericulture_crop_area);
                $('#Crop_Diversion_summer_Sericulture_FundingSource').val(response.changed_summer_sericulture_fundingsource);
                $('#Crop_Diversion_Crop_Tomota_UserVale').val(response.changed_summer_tomoto_crop_area);
                $('#Crop_Diversion_summer_Tomota_FundingSource').val(response.changed_summer_tomoto_fundingsource);
                //$('#Crop_Diversion_Crop_Cabbage_UserVale').val(response.changed_summer_cabbage_crop_area);
                //$('#Crop_Diversion_summer_Cabbage_FundingSource').val(response.changed_summer_cabbage_fundingsource);
                //$('#Crop_Diversion_Crop_Beans_UserVale').val(response.changed_summer_beans_crop_area);
                //$('#Crop_Diversion_summer_Beans_FundingSource').val(response.changed_summer_beans_fundingsource);
                $('#Crop_Diversion_Crop_Floriculture_UserVale').val(response.changed_summer_floriculture_crop_area);
                $('#Crop_Diversion_summer_Floriculture_FundingSource').val(response.changed_summer_floriculture_fundingsource);
                $('#Crop_Diversion_Crop_Maize_UserVale').val(response.changed_summer_maize_crop_area);
                $('#Crop_Diversion_summer_Maize_FundingSource').val(response.changed_summer_maize_fundingsource);
                $('#Crop_Diversion_Crop_Fodder_UserVale').val(response.changed_summer_fodder_crop_area);
                $('#Crop_Diversion_summer_Fodder_FundingSource').val(response.changed_summer_fodder_fundingsource);
                $('#Crop_Diversion_Crop_Sugarcane_UserVale').val(response.changed_summer_sugarcane_crop_area);
                $('#Crop_Diversion_summer_Sugarcane_FundingSource').val(response.changed_summer_sugarcane_fundingsource);

                //orinal
                $('#Crop_Diversion_kharif_Paddy_UserVale1').val(response.original_kharif_paddy_crop_area);
                //$('#Crop_Diversion_kharif_Paddy_FundingSource2').val(response.original_kharif_paddy_fundingsource);

                $('#Crop_Diversion_kharif_Ragi_UserVale1').val(response.original_kharif_ragi_crop_area);
                $('#Crop_Diversion_kharif_Ragi_FundingSource2').val(response.original_kharif_ragi_fundingsource);
                $('#Crop_Diversion_kharif_GroundNut_UserVale1').val(response.original_kharif_groundnut_crop_area);
                $('#Crop_Diversion_kharif_GroundNut_FundingSource2').val(response.original_kharif_groundnut_fundingsource);
                $('#Crop_Diversion_kharif_Sugarcane_UserVale1').val(response.original_kharif_sugarcane_crop_area);
                $('#Crop_Diversion_kharif_Sugarcane_FundingSource2').val(response.original_kharif_sugarcane_fundingsource);
                $('#Crop_Diversion_kharif_Tomato_UserVale1').val(response.original_kharif_tomoto_crop_area);
                $('#Crop_Diversion_kharif_Tomoto_FundingSource2').val(response.original_kharif_tomoto_fundingsource);
                //$('#Crop_Diversion_kharif_Cabbage_UserVale1').val(response.original_kharif_cabbage_crop_area);
                //$('#Crop_Diversion_kharif_Cabbage_FundingSource2').val(response.original_kharif_cabbage_fundingsource);
                //$('#Crop_Diversion_kharif_Beans_UserVale1').val(response.original_kharif_beans_crop_area);
                //$('#Crop_Diversion_kharif_Beans_FundingSource2').val(response.original_kharif_beans_fundingsource);
                $('#Crop_Diversion_kharif_Floriculture_UserVale1').val(response.original_kharif_floriculture_crop_area);
                $('#Crop_Diversion_kharif_Floriculture_FundingSource2').val(response.original_kharif_floriculture_fundingsource);
                $('#Crop_Diversion_kharif_Sericulture_UserVale1').val(response.original_kharif_sericulture_crop_area);
                $('#Crop_Diversion_kharif_Sericulture_FundingSource2').val(response.original_kharif_sericulture_fundingsource);
                //$('#Crop_Diversion_kharif_Cucmber_UserVale1').val(response.original_kharif_cucumber_crop_area);
                //$('#Crop_Diversion_kharif_Cucmber_FundingSource2').val(response.original_kharif_cucumber_fundingsource);
                $('#Crop_Diversion_kharif_Banana_UserVale1').val(response.original_kharif_banana_crop_area);
                $('#Crop_Diversion_kharif_Banana_FundingSource2').val(response.original_kharif_banana_fundingsource);
                $('#Crop_Diversion_kharif_Fodder_UserVale1').val(response.original_kharif_fodder_crop_area);
                $('#Crop_Diversion_kharif_Fodder_FundingSource2').val(response.original_kharif_fodder_fundingsource);
                $('#Crop_Diversion_kharif_Maize_UserVale1').val(response.original_kharif_maize_crop_area);
                $('#Crop_Diversion_kharif_Maize_FundingSource2').val(response.original_kharif_maize_fundingsource);
                //$('#Crop_Diversion_kharif_Potato_UserVale1').val(response.original_kharif_potato_crop_area);
                //$('#Crop_Diversion_kharif_Potato_FundingSource2').val(response.original_kharif_potato_fundingsource);
                $('#Crop_Diversion_kharif_Chillies_UserVale1').val(response.original_kharif_chillies_crop_area);
                $('#Crop_Diversion_kharif_Chillies_FundingSource2').val(response.original_kharif_chillies_fundingsource);
                $('#Crop_Diversion_kharif_Cotton_UserVale1').val(response.original_kharif_cotton_crop_area);
                $('#Crop_Diversion_kharif_Cotton_FundingSource2').val(response.original_kharif_cotton_fundingsource);
                $('#Crop_Diversion_kharif_Melon_UserVale1').val(response.original_kharif_melon_crop_area);
                $('#Crop_Diversion_kharif_Melon_FundingSource2').val(response.original_kharif_melon_fundingsource);
                $('#Crop_Diversion_kharif_Citrus_UserVale1').val(response.original_kharif_citrus_crop_area);
                $('#Crop_Diversion_kharif_Citrus_FundingSource2').val(response.original_kharif_citrus_fundingsource);
                //$('#Crop_Diversion_kharif_Peanut_UserVale1').val(response.original_kharif_peanut_crop_area);
                //$('#Crop_Diversion_kharif_Peanut_FundingSource2').val(response.original_kharif_peanut_fundingsource);
                $('#Crop_Diversion_kharif_Horticulture_UserVale1').val(response.original_kharif_horticulture_crop_area);
                $('#Crop_Diversion_kharif_Horticulture_FundingSource2').val(response.original_kharif_horticulture_fundingsource);
                $('#Crop_Diversion_Rabi_Sericulture_UserVale1').val(response.original_rabi_sericulture_crop_area);
                $('#Crop_Diversion_Rabi_Sericulture_FundingSource2').val(response.original_rabi_sericulture_fundingsource);
                $('#Crop_Diversion_Rabi_Tomota_UserVale1').val(response.original_rabi_tomoto_crop_area);
                $('#Crop_Diversion_Rabi_Tomota_FundingSource2').val(response.original_rabi_tomoto_fundingsource);
                //$('#Crop_Diversion_Rabi_Cabbage_UserVale1').val(response.original_rabi_cabbage_crop_area);
                //$('#Crop_Diversion_Rabi_Cabbage_FundingSource2').val(response.original_rabi_cabbage_fundingsource);
                //$('#Crop_Diversion_Rabi_Beans_UserVale1').val(response.original_rabi_beans_crop_area);
                //$('#Crop_Diversion_Rabi_Beans_FundingSource2').val(response.original_rabi_beans_fundingsource);
                $('#Crop_Diversion_Rabi_Floriculture_UserVale1').val(response.original_rabi_floriculture_crop_area);
                $('#Crop_Diversion_Rabi_Floriculture_FundingSource2').val(response.original_rabi_floriculture_fundingsource);
                //$('#Crop_Diversion_Rabi_Potato_UserVale1').val(response.original_rabi_potato_crop_area);
                //$('#Crop_Diversion_Rabi_Potato_FundingSource2').val(response.original_rabi_potato_fundingsource);
                //$('#Crop_Diversion_Rabi_Cucumber_UserVale1').val(response.original_rabi_cucumber_crop_area);
                //$('#Crop_Diversion_Rabi_Cucumber_FundingSource2').val(response.original_rabi_cucumber_fundingsource);
                $('#Crop_Diversion_Rabi_Ragi_UserVale1').val(response.original_rabi_ragi_crop_area);
                $('#Crop_Diversion_Rabi_Ragi_FundingSource2').val(response.original_rabi_ragi_fundingsource);
                $('#Crop_Diversion_Rabi_Sugarcane_UserVale1').val(response.original_rabi_sugarcane_crop_area);
                $('#Crop_Diversion_Rabi_Sugarcane_FundingSource2').val(response.original_rabi_sugarcane_fundingsource);
                $('#Crop_Diversion_Rabi_Maize_UserVale1').val(response.original_rabi_maize_crop_area);
                $('#Crop_Diversion_Rabi_Maize_FundingSource2').val(response.original_rabi_maize_fundingsource);
                $('#Crop_Diversion_Rabi_Fodder_UserVale1').val(response.original_rabi_fodder_crop_area);
                $('#Crop_Diversion_Rabi_Fodder_FundingSource2').val(response.original_rabi_fodder_fundingsource);
                $('#Crop_Diversion_Rabi_Paddy_UserVale1').val(response.original_rabi_paddy_crop_area);
                $('#Crop_Diversion_Rabi_Paddy_FundingSource2').val(response.original_rabi_paddy_fundingsource);
                $('#Crop_Diversion_Rabi_Alfalfa_UserVale1').val(response.original_rabi_alfalfa_crop_area);
                $('#Crop_Diversion_Rabi_Alfalfa_FundingSource2').val(response.original_rabi_alfalfa_fundingsource);
                //$('#Crop_Diversion_Rabi_Onion_UserVale1').val(response.original_rabi_onion_crop_area);
                //$('#Crop_Diversion_Rabi_Onion_FundingSource2').val(response.original_rabi_onion_fundingsource);
                $('#Crop_Diversion_Rabi_Hortculture_UserVale1').val(response.original_rabi_horticulture_crop_area);
                $('#Crop_Diversion_Rabi_Hortculture_FundingSource2').val(response.original_rabi_horticulture_fundingsource);
                $('#Crop_Diversion_Rabi_Sunflower_UserVale1').val(response.original_rabi_sunflower_crop_area);
                $('#Crop_Diversion_Rabi_Sunflower_FundingSource2').val(response.original_rabi_sunflower_fundingsource);
                $('#Crop_Diversion_Crop_Sericulture_UserVale1').val(response.original_summer_sericulture_crop_area);
                $('#Crop_Diversion_summer_Sericulture_FundingSource2').val(response.original_summer_sericulture_fundingsource);
                $('#Crop_Diversion_Crop_Tomota_UserVale1').val(response.original_summer_tomoto_crop_area);
                $('#Crop_Diversion_summer_Tomota_FundingSource2').val(response.original_summer_tomoto_fundingsource);
                //$('#Crop_Diversion_Crop_Cabbage_UserVale1').val(response.original_summer_cabbage_crop_area);
                //$('#Crop_Diversion_summer_Cabbage_FundingSource2').val(response.original_summer_cabbage_fundingsource);
                //$('#Crop_Diversion_Crop_Beans_UserVale1').val(response.original_summer_beans_crop_area);
                //$('#Crop_Diversion_summer_Beans_FundingSource2').val(response.original_summer_beans_fundingsource);
                $('#Crop_Diversion_Crop_Floriculture_UserVale1').val(response.original_summer_floriculture_crop_area);
                $('#Crop_Diversion_summer_Floriculture_FundingSource2').val(response.original_summer_floriculture_fundingsource);
                $('#Crop_Diversion_Crop_Maize_UserVale1').val(response.original_summer_maize_crop_area);
                $('#Crop_Diversion_summer_Maize_FundingSource2').val(response.original_summer_maize_fundingsource);
                $('#Crop_Diversion_Crop_Fodder_UserVale1').val(response.original_summer_fodder_crop_area);
                $('#Crop_Diversion_summer_Fodder_FundingSource2').val(response.original_summer_fodder_fundingsource);
                $('#Crop_Diversion_Crop_Sugarcane_UserVale1').val(response.original_summer_sugarcane_crop_area);
                $('#Crop_Diversion_summer_Sugarcane_FundingSource2').val(response.original_summer_sugarcane_fundingsource);

                $('#TotalAnnual_Crop_Diversion_Reduction').text(response.crop_total_annual_waterdemand);


                $('#original_kharif_total_waterdemand').text(response.original_kharif_total_waterdemand);
                $('#original_rabi_total_waterdemand').text(response.original_rabi_total_waterdemand);
                $('#original_summer_total_waterdemand').text(response.original_summer_total_waterdemand);
                //total
                $('#changed_kharif_total_waterdemand').text(response.changed_kharif_total_waterdemand);
                $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text(response.changed_kharif_total_gw_reduc_waterdemand);

                $('#changed_rabi_total_waterdemand').text(response.changed_rabi_total_waterdemand);
                $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text(response.changed_rabi_total_gw_reduc_waterdemand);

                $('#changed_summer_total_waterdemand').text(response.changed_summer_total_waterdemand);
                $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text(response.changed_summer_total_gw_reduc_waterdemand);
                //new columns water requirement

                //changed water req
                //new columns water requirement
                if (response.changed_kharif_paddy_crop_water_req != null && response.changed_kharif_paddy_crop_water_req != "") {
                    $('#changed_kharif_paddy_crop_water_req').val(response.changed_kharif_paddy_crop_water_req);
                }
                else {
                    $('#changed_kharif_paddy_crop_water_req').val(1175);
                }

                if (response.changed_kharif_ragi_crop_water_req != null && response.changed_kharif_ragi_crop_water_req != "") {
                    $('#changed_kharif_ragi_crop_water_req').val(response.changed_kharif_ragi_crop_water_req);
                }
                else {
                    $('#changed_kharif_ragi_crop_water_req').val(550);
                }


                if (response.changed_kharif_groundnut_water_req != null && response.changed_kharif_groundnut_water_req != "") {
                    $('#changed_kharif_groundnut_water_req').val(response.changed_kharif_groundnut_water_req);
                }
                else {
                    $('#changed_kharif_groundnut_water_req').val(525);
                }

                if (response.changed_kharif_sugarcane_water_req != null && response.changed_kharif_sugarcane_water_req != "") {
                    $('#changed_kharif_sugarcane_water_req').val(response.changed_kharif_sugarcane_water_req);
                }
                else {
                    $('#changed_kharif_sugarcane_water_req').val(2000);
                }

                if (response.changed_kharif_tomoto_water_req != null && response.changed_kharif_tomoto_water_req != "") {
                    $('#changed_kharif_tomoto_water_req').val(response.changed_kharif_tomoto_water_req);
                }
                else {
                    $('#changed_kharif_tomoto_water_req').val(500);
                }

                //if (response.changed_kharif_cabbage_water_req != null && response.changed_kharif_cabbage_water_req != "") {
                //    $('#changed_kharif_cabbage_water_req').val(response.changed_kharif_cabbage_water_req);
                //}
                //else {
                //    $('#changed_kharif_cabbage_water_req').val(425);
                //}



                //if (response.changed_kharif_beans_water_req != null && response.changed_kharif_beans_water_req != "") {
                //    $('#changed_kharif_beans_water_req').val(response.changed_kharif_beans_water_req);
                //}
                //else {
                //    $('#changed_kharif_beans_water_req').val(425);
                //}

                if (response.changed_kharif_floriculture_water_req != null && response.changed_kharif_floriculture_water_req != "") {
                    $('#changed_kharif_floriculture_water_req').val(response.changed_kharif_floriculture_water_req);
                }
                else {
                    $('#changed_kharif_floriculture_water_req').val(1200);
                }

                if (response.changed_kharif_sericulture_water_req != null && response.changed_kharif_sericulture_water_req != "") {
                    $('#changed_kharif_sericulture_water_req').val(response.changed_kharif_sericulture_water_req);
                }
                else {
                    $('#changed_kharif_sericulture_water_req').val(1550);
                }

                //if (response.changed_kharif_cucumber_water_req != null && response.changed_kharif_cucumber_water_req != "") {
                //    $('#changed_kharif_cucumber_water_req').val(response.changed_kharif_cucumber_water_req);
                //}
                //else {
                //    $('#changed_kharif_cucumber_water_req').val(400);
                //}


                if (response.changed_kharif_banana_water_req != null && response.changed_kharif_banana_water_req != "") {
                    $('#changed_kharif_banana_water_req').val(response.changed_kharif_banana_water_req);
                }
                else {
                    $('#changed_kharif_banana_water_req').val(1700);
                }


                if (response.changed_kharif_fodder_water_req != null && response.changed_kharif_fodder_water_req != "") {
                    $('#changed_kharif_fodder_water_req').val(response.changed_kharif_fodder_water_req);
                }
                else {
                    $('#changed_kharif_fodder_water_req').val(1400);
                }


                if (response.changed_kharif_maize_water_req != null && response.changed_kharif_maize_water_req != "") {
                    $('#changed_kharif_maize_water_req').val(response.changed_kharif_maize_water_req);
                }
                else {
                    $('#changed_kharif_maize_water_req').val(650);
                }


                //if (response.changed_kharif_potato_water_req != null && response.changed_kharif_potato_water_req != "") {
                //    $('#changed_kharif_potato_water_req').val(response.changed_kharif_potato_water_req);
                //}
                //else {
                //    $('#changed_kharif_potato_water_req').val(600);
                //}


                if (response.changed_kharif_chillies_water_req != null && response.changed_kharif_chillies_water_req != "") {
                    $('#changed_kharif_chillies_water_req').val(response.changed_kharif_chillies_water_req);
                }
                else {
                    $('#changed_kharif_chillies_water_req').val(230);
                }


                if (response.changed_kharif_cotton_water_req != null && response.changed_kharif_cotton_water_req != "") {
                    $('#changed_kharif_cotton_water_req').val(response.changed_kharif_cotton_water_req);
                }
                else {
                    $('#changed_kharif_cotton_water_req').val(1000);
                }
                if (response.changed_kharif_melon_water_req != null && response.changed_kharif_melon_water_req != "") {
                    $('#changed_kharif_melon_water_req').val(response.changed_kharif_melon_water_req);
                }
                else {
                    $('#changed_kharif_melon_water_req').val(500);
                }
                if (response.changed_kharif_citrus_water_req != null && response.changed_kharif_citrus_water_req != "") {
                    $('#changed_kharif_citrus_water_req').val(response.changed_kharif_citrus_water_req);
                }
                else {
                    $('#changed_kharif_citrus_water_req').val(1050);
                }
                //if (response.changed_kharif_peanut_water_req != null && response.changed_kharif_peanut_water_req != "") {
                //    $('#changed_kharif_peanut_water_req').val(response.changed_kharif_peanut_water_req);
                //}
                //else {
                //    $('#changed_kharif_peanut_water_req').val(600);
                //}
                if (response.changed_kharif_horticulture_water_req != null && response.changed_kharif_horticulture_water_req != "") {
                    $('#changed_kharif_horticulture_water_req').val(response.changed_kharif_horticulture_water_req);
                }
                else {
                    $('#changed_kharif_horticulture_water_req').val(470);
                }
                if (response.changed_rabi_sericulture_water_req != null && response.changed_rabi_sericulture_water_req != "") {
                    $('#changed_rabi_sericulture_water_req').val(response.changed_rabi_sericulture_water_req);
                }
                else {
                    $('#changed_rabi_sericulture_water_req').val(1550);
                }
                if (response.changed_rabi_tomoto_water_req != null && response.changed_rabi_tomoto_water_req != "") {
                    $('#changed_rabi_tomoto_water_req').val(response.changed_rabi_tomoto_water_req);
                }
                else {
                    $('#changed_rabi_tomoto_water_req').val(500);
                }
                //if (response.changed_rabi_cabbage_water_req != null && response.changed_rabi_cabbage_water_req != "") {
                //    $('#changed_rabi_cabbage_water_req').val(response.changed_rabi_cabbage_water_req);
                //}
                //else {
                //    $('#changed_rabi_cabbage_water_req').val(425);
                //}
                //if (response.changed_rabi_beans_water_req != null && response.changed_rabi_beans_water_req != "") {
                //    $('#changed_rabi_beans_water_req').val(response.changed_rabi_beans_water_req);
                //}
                //else {
                //    $('#changed_rabi_beans_water_req').val(400);
                //}
                if (response.changed_rabi_floriculture_water_req != null && response.changed_rabi_floriculture_water_req != "") {
                    $('#changed_rabi_floriculture_water_req').val(response.changed_rabi_floriculture_water_req);
                }
                else {
                    $('#changed_rabi_floriculture_water_req').val(1200);
                }
                //if (response.changed_rabi_potato_water_req != null && response.changed_rabi_potato_water_req != "") {
                //    $('#changed_rabi_potato_water_req').val(response.changed_rabi_potato_water_req);
                //}
                //else {
                //    $('#changed_rabi_potato_water_req').val(600);
                //}
                //if (response.changed_rabi_cucumber_water_req != null && response.changed_rabi_cucumber_water_req != "") {
                //    $('#changed_rabi_cucumber_water_req').val(response.changed_rabi_cucumber_water_req);
                //}
                //else {
                //    $('#changed_rabi_cucumber_water_req').val(400);
                //}
                if (response.changed_rabi_ragi_water_req != null && response.changed_rabi_ragi_water_req != "") {
                    $('#changed_rabi_ragi_water_req').val(response.changed_rabi_ragi_water_req);
                }
                else {
                    $('#changed_rabi_ragi_water_req').val(550);
                }
                if (response.changed_rabi_sugarcane_water_req != null && response.changed_rabi_sugarcane_water_req != "") {
                    $('#changed_rabi_sugarcane_water_req').val(response.changed_rabi_sugarcane_water_req);
                }
                else {
                    $('#changed_rabi_sugarcane_water_req').val(2000);
                }
                if (response.changed_rabi_maize_water_req != null && response.changed_rabi_maize_water_req != "") {
                    $('#changed_rabi_maize_water_req').val(response.changed_rabi_maize_water_req);
                }
                else {
                    $('#changed_rabi_maize_water_req').val(650);
                }
                if (response.changed_rabi_fodder_water_req != null && response.changed_rabi_fodder_water_req != "") {
                    $('#changed_rabi_fodder_water_req').val(response.changed_rabi_fodder_water_req);
                }
                else {
                    $('#changed_rabi_fodder_water_req').val(1400);
                }
                if (response.changed_rabi_paddy_water_req != null && response.changed_rabi_paddy_water_req != "") {
                    $('#changed_rabi_paddy_water_req').val(response.changed_rabi_paddy_water_req);
                }
                else {
                    $('#changed_rabi_paddy_water_req').val(1175);
                }
                if (response.changed_rabi_alfalfa_water_req != null && response.changed_rabi_alfalfa_water_req != "") {
                    $('#changed_rabi_alfalfa_water_req').val(response.changed_rabi_alfalfa_water_req);
                }
                else {
                    $('#changed_rabi_alfalfa_water_req').val(1200);
                }
                //if (response.changed_rabi_onion_water_req != null && response.changed_rabi_onion_water_req != "") {
                //    $('#changed_rabi_onion_water_req').val(response.changed_rabi_onion_water_req);
                //}
                //else {
                //    $('#changed_rabi_onion_water_req').val(450);
                //}
                if (response.changed_rabi_horticulture_water_req != null && response.changed_rabi_horticulture_water_req != "") {
                    $('#changed_rabi_horticulture_water_req').val(response.changed_rabi_horticulture_water_req);
                }
                else {
                    $('#changed_rabi_horticulture_water_req').val(470);
                }
                if (response.changed_rabi_sunflower_water_req != null && response.changed_rabi_sunflower_water_req != "") {
                    $('#changed_rabi_sunflower_water_req').val(response.changed_rabi_sunflower_water_req);
                }
                else {
                    $('#changed_rabi_sunflower_water_req').val(800);
                }

                if (response.changed_summer_sericulture_water_req != null && response.changed_summer_sericulture_water_req != "") {
                    $('#changed_summer_sericulture_water_req').val(response.changed_summer_sericulture_water_req);
                }
                else {
                    $('#changed_summer_sericulture_water_req').val(1550);
                }
                if (response.changed_summer_tomoto_water_req != null && response.changed_summer_tomoto_water_req != "") {
                    $('#changed_summer_tomoto_water_req').val(response.changed_summer_tomoto_water_req);
                }
                else {
                    $('#changed_summer_tomoto_water_req').val(500);
                }
                //if (response.changed_summer_cabbage_water_req != null && response.changed_summer_cabbage_water_req != "") {
                //    $('#changed_summer_cabbage_water_req').val(response.changed_summer_cabbage_water_req);
                //}
                //else {
                //    $('#changed_summer_cabbage_water_req').val(425);
                //}
                //if (response.changed_summer_beans_water_req != null && response.changed_summer_beans_water_req != "") {
                //    $('#changed_summer_beans_water_req').val(response.changed_summer_beans_water_req);
                //}
                //else {
                //    $('#changed_summer_beans_water_req').val(400);
                //}
                if (response.changed_summer_floriculture_water_req != null && response.changed_summer_floriculture_water_req != "") {
                    $('#changed_summer_floriculture_water_req').val(response.changed_summer_floriculture_water_req);
                }
                else {
                    $('#changed_summer_floriculture_water_req').val(1200);
                }
                if (response.changed_summer_maize_water_req != null && response.changed_summer_maize_water_req != "") {
                    $('#changed_summer_maize_water_req').val(response.changed_summer_maize_water_req);
                }
                else {
                    $('#changed_summer_maize_water_req').val(650);
                }
                if (response.changed_summer_fodder_water_req != null && response.changed_summer_fodder_water_req != "") {
                    $('#changed_summer_fodder_water_req').val(response.changed_summer_fodder_water_req);
                }
                else {
                    $('#changed_summer_fodder_water_req').val(1400);
                }
                if (response.changed_summer_sugarcane_water_req != null && response.changed_summer_sugarcane_water_req != "") {
                    $('#changed_summer_sugarcane_water_req').val(response.changed_summer_sugarcane_water_req);
                }
                else {
                    $('#changed_summer_sugarcane_water_req').val(2000);
                }



                //original water req

                //new columns water requirement
                if (response.original_kharif_paddy_water_req != null && response.original_kharif_paddy_water_req != "") {
                    $('#original_kharif_paddy_water_req').val(response.original_kharif_paddy_water_req);
                }
                else {
                    $('#original_kharif_paddy_water_req').val(1175);
                }

                if (response.original_kharif_ragi_water_req != null && response.original_kharif_ragi_water_req != "") {
                    $('#original_kharif_ragi_water_req').val(response.original_kharif_ragi_water_req);
                }
                else {
                    $('#original_kharif_ragi_water_req').val(550);
                }


                if (response.original_kharif_groundnut_water_req != null && response.original_kharif_groundnut_water_req != "") {
                    $('#original_kharif_groundnut_water_req').val(response.original_kharif_groundnut_water_req);
                }
                else {
                    $('#original_kharif_groundnut_water_req').val(525);
                }

                if (response.original_kharif_sugarcane_water_req != null && response.original_kharif_sugarcane_water_req != "") {
                    $('#original_kharif_sugarcane_water_req').val(response.original_kharif_sugarcane_water_req);
                }
                else {
                    $('#original_kharif_sugarcane_water_req').val(2000);
                }

                if (response.original_kharif_tomoto_water_req != null && response.original_kharif_tomoto_water_req != "") {
                    $('#original_kharif_tomoto_water_req').val(response.original_kharif_tomoto_water_req);
                }
                else {
                    $('#original_kharif_tomoto_water_req').val(500);
                }

                //if (response.original_kharif_cabbage_water_req != null && response.original_kharif_cabbage_water_req != "") {
                //    $('#original_kharif_cabbage_water_req').val(response.original_kharif_cabbage_water_req);
                //}
                //else {
                //    $('#original_kharif_cabbage_water_req').val(425);
                //}



                //if (response.original_kharif_beans_water_req != null && response.original_kharif_beans_water_req != "") {
                //    $('#original_kharif_beans_water_req').val(response.original_kharif_beans_water_req);
                //}
                //else {
                //    $('#original_kharif_beans_water_req').val(425);
                //}

                if (response.original_kharif_floriculture_water_req != null && response.original_kharif_floriculture_water_req != "") {
                    $('#original_kharif_floriculture_water_req').val(response.original_kharif_floriculture_water_req);
                }
                else {
                    $('#original_kharif_floriculture_water_req').val(1200);
                }

                if (response.original_kharif_sericulture_water_req != null && response.original_kharif_sericulture_water_req != "") {
                    $('#original_kharif_sericulture_water_req').val(response.original_kharif_sericulture_water_req);
                }
                else {
                    $('#original_kharif_sericulture_water_req').val(1550);
                }

                //if (response.original_kharif_cucumber_water_req != null && response.original_kharif_cucumber_water_req != "") {
                //    $('#original_kharif_cucumber_water_req').val(response.original_kharif_cucumber_water_req);
                //}
                //else {
                //    $('#original_kharif_cucumber_water_req').val(400);
                //}


                if (response.original_kharif_banana_water_req != null && response.original_kharif_banana_water_req != "") {
                    $('#original_kharif_banana_water_req').val(response.original_kharif_banana_water_req);
                }
                else {
                    $('#original_kharif_banana_water_req').val(1700);
                }


                if (response.original_kharif_fodder_water_req != null && response.original_kharif_fodder_water_req != "") {
                    $('#original_kharif_fodder_water_req').val(response.original_kharif_fodder_water_req);
                }
                else {
                    $('#original_kharif_fodder_water_req').val(1400);
                }


                if (response.original_kharif_maize_water_req != null && response.original_kharif_maize_water_req != "") {
                    $('#original_kharif_maize_water_req').val(response.original_kharif_maize_water_req);
                }
                else {
                    $('#original_kharif_maize_water_req').val(650);
                }


                //if (response.original_kharif_potato_water_req != null && response.original_kharif_potato_water_req != "") {
                //    $('#original_kharif_potato_water_req').val(response.original_kharif_potato_water_req);
                //}
                //else {
                //    $('#original_kharif_potato_water_req').val(600);
                //}


                if (response.original_kharif_chillies_water_req != null && response.original_kharif_chillies_water_req != "") {
                    $('#original_kharif_chillies_water_req').val(response.original_kharif_chillies_water_req);
                }
                else {
                    $('#original_kharif_chillies_water_req').val(230);
                }


                if (response.original_kharif_cotton_water_req != null && response.original_kharif_cotton_water_req != "") {
                    $('#original_kharif_cotton_water_req').val(response.original_kharif_cotton_water_req);
                }
                else {
                    $('#original_kharif_cotton_water_req').val(1000);
                }
                if (response.original_kharif_melon_water_req != null && response.original_kharif_melon_water_req != "") {
                    $('#original_kharif_melon_water_req').val(response.original_kharif_melon_water_req);
                }
                else {
                    $('#original_kharif_melon_water_req').val(500);
                }
                if (response.original_kharif_citrus_water_req != null && response.original_kharif_citrus_water_req != "") {
                    $('#original_kharif_citrus_water_req').val(response.original_kharif_citrus_water_req);
                }
                else {
                    $('#original_kharif_citrus_water_req').val(1050);
                }
                //if (response.original_kharif_peanut_water_req != null && response.original_kharif_peanut_water_req != "") {
                //    $('#original_kharif_peanut_water_req').val(response.original_kharif_peanut_water_req);
                //}
                //else {
                //    $('#original_kharif_peanut_water_req').val(600);
                //}
                if (response.original_kharif_horticulture_water_req != null && response.original_kharif_horticulture_water_req != "") {
                    $('#original_kharif_horticulture_water_req').val(response.original_kharif_horticulture_water_req);
                }
                else {
                    $('#original_kharif_horticulture_water_req').val(470);
                }
                if (response.original_rabi_sericulture_water_req != null && response.original_rabi_sericulture_water_req != "") {
                    $('#original_rabi_sericulture_water_req').val(response.original_rabi_sericulture_water_req);
                }
                else {
                    $('#original_rabi_sericulture_water_req').val(1550);
                }
                if (response.original_rabi_tomoto_water_req != null && response.original_rabi_tomoto_water_req != "") {
                    $('#original_rabi_tomoto_water_req').val(response.original_rabi_tomoto_water_req);
                }
                else {
                    $('#original_rabi_tomoto_water_req').val(500);
                }
                //if (response.original_rabi_cabbage_water_req != null && response.original_rabi_cabbage_water_req != "") {
                //    $('#original_rabi_cabbage_water_req').val(response.original_rabi_cabbage_water_req);
                //}
                //else {
                //    $('#original_rabi_cabbage_water_req').val(425);
                //}
                //if (response.original_rabi_beans_water_req != null && response.original_rabi_beans_water_req != "") {
                //    $('#original_rabi_beans_water_req').val(response.original_rabi_beans_water_req);
                //}
                //else {
                //    $('#original_rabi_beans_water_req').val(400);
                //}
                if (response.original_rabi_floriculture_water_req != null && response.original_rabi_floriculture_water_req != "") {
                    $('#original_rabi_floriculture_water_req').val(response.original_rabi_floriculture_water_req);
                }
                else {
                    $('#original_rabi_floriculture_water_req').val(1200);
                }
                //if (response.original_rabi_potato_water_req != null && response.original_rabi_potato_water_req != "") {
                //    $('#original_rabi_potato_water_req').val(response.original_rabi_potato_water_req);
                //}
                //else {
                //    $('#original_rabi_potato_water_req').val(600);
                //}
                //if (response.original_rabi_cucumber_water_req != null && response.original_rabi_cucumber_water_req != "") {
                //    $('#original_rabi_cucumber_water_req').val(response.original_rabi_cucumber_water_req);
                //}
                //else {
                //    $('#original_rabi_cucumber_water_req').val(400);
                //}
                if (response.original_rabi_ragi_water_req != null && response.original_rabi_ragi_water_req != "") {
                    $('#original_rabi_ragi_water_req').val(response.original_rabi_ragi_water_req);
                }
                else {
                    $('#original_rabi_ragi_water_req').val(550);
                }
                if (response.original_rabi_sugarcane_water_req != null && response.original_rabi_sugarcane_water_req != "") {
                    $('#original_rabi_sugarcane_water_req').val(response.original_rabi_sugarcane_water_req);
                }
                else {
                    $('#original_rabi_sugarcane_water_req').val(2000);
                }
                if (response.original_rabi_maize_water_req != null && response.original_rabi_maize_water_req != "") {
                    $('#original_rabi_maize_water_req').val(response.original_rabi_maize_water_req);
                }
                else {
                    $('#original_rabi_maize_water_req').val(650);
                }
                if (response.original_rabi_fodder_water_req != null && response.original_rabi_fodder_water_req != "") {
                    $('#original_rabi_fodder_water_req').val(response.original_rabi_fodder_water_req);
                }
                else {
                    $('#original_rabi_fodder_water_req').val(1400);
                }
                if (response.original_rabi_paddy_water_req != null && response.original_rabi_paddy_water_req != "") {
                    $('#original_rabi_paddy_water_req').val(response.original_rabi_paddy_water_req);
                }
                else {
                    $('#original_rabi_paddy_water_req').val(1175);
                }
                if (response.original_rabi_alfalfa_water_req != null && response.original_rabi_alfalfa_water_req != "") {
                    $('#original_rabi_alfalfa_water_req').val(response.original_rabi_alfalfa_water_req);
                }
                else {
                    $('#original_rabi_alfalfa_water_req').val(1200);
                }
                //if (response.original_rabi_onion_water_req != null && response.original_rabi_onion_water_req != "") {
                //    $('#original_rabi_onion_water_req').val(response.original_rabi_onion_water_req);
                //}
                //else {
                //    $('#original_rabi_onion_water_req').val(450);
                //}
                if (response.original_rabi_horticulture_water_req != null && response.original_rabi_horticulture_water_req != "") {
                    $('#original_rabi_horticulture_water_req').val(response.original_rabi_horticulture_water_req);
                }
                else {
                    $('#original_rabi_horticulture_water_req').val(470);
                }
                if (response.original_rabi_sunflower_water_req != null && response.original_rabi_sunflower_water_req != "") {
                    $('#original_rabi_sunflower_water_req').val(response.original_rabi_sunflower_water_req);
                }
                else {
                    $('#original_rabi_sunflower_water_req').val(800);
                }

                if (response.original_summer_sericulture_water_req != null && response.original_summer_sericulture_water_req != "") {
                    $('#original_summer_sericulture_water_req').val(response.original_summer_sericulture_water_req);
                }
                else {
                    $('#original_summer_sericulture_water_req').val(1550);
                }
                if (response.original_summer_tomoto_water_req != null && response.original_summer_tomoto_water_req != "") {
                    $('#original_summer_tomoto_water_req').val(response.original_summer_tomoto_water_req);
                }
                else {
                    $('#original_summer_tomoto_water_req').val(500);
                }
                //if (response.original_summer_cabbage_water_req != null && response.original_summer_cabbage_water_req != "") {
                //    $('#original_summer_cabbage_water_req').val(response.original_summer_cabbage_water_req);
                //}
                //else {
                //    $('#original_summer_cabbage_water_req').val(425);
                //}
                //if (response.original_summer_beans_water_req != null && response.original_summer_beans_water_req != "") {
                //    $('#original_summer_beans_water_req').val(response.original_summer_beans_water_req);
                //}
                //else {
                //    $('#original_summer_beans_water_req').val(400);
                //}
                if (response.original_summer_floriculture_water_req != null && response.original_summer_floriculture_water_req != "") {
                    $('#original_summer_floriculture_water_req').val(response.original_summer_floriculture_water_req);
                }
                else {
                    $('#original_summer_floriculture_water_req').val(1200);
                }
                if (response.original_summer_maize_water_req != null && response.original_summer_maize_water_req != "") {
                    $('#original_summer_maize_water_req').val(response.original_summer_maize_water_req);
                }
                else {
                    $('#original_summer_maize_water_req').val(650);
                }
                if (response.original_summer_fodder_water_req != null && response.original_summer_fodder_water_req != "") {
                    $('#original_summer_fodder_water_req').val(response.original_summer_fodder_water_req);
                }
                else {
                    $('#original_summer_fodder_water_req').val(1400);
                }
                if (response.original_summer_sugarcane_water_req != null && response.original_summer_sugarcane_water_req != "") {
                    $('#original_summer_sugarcane_water_req').val(response.original_summer_sugarcane_water_req);
                }
                else {
                    $('#original_summer_sugarcane_water_req').val(2000);
                }

                //other karif water demand
                $('#Crop_Diversion_kharif_paddy_water_Demand_value').text(response.original_kharif_paddy_waterdemand);
                $('#Crop_Diversion_kharif_Ragi_water_Demand_value').text(response.original_kharif_ragi_waterdemand);
                $('#Crop_Diversion_kharif_GroundNut_water_Demand_value').text(response.original_kharif_groundnut_waterdemand);
                $('#Crop_Diversion_kharif_Sugarcane_water_Demand_value').text(response.original_kharif_sugarcane_waterdemand);

                $('#Crop_Diversion_kharif_Tomato_water_Demand_value').text(response.original_kharif_tomoto_waterdemand);
                //$('#Crop_Diversion_kharif_Cabbage_water_Demand_value').text(response.original_kharif_cabbage_waterdemand);
                //$('#Crop_Diversion_kharif_Beans_water_Demand_value').text(response.original_kharif_beans_waterdemand);
                $('#Crop_Diversion_kharif_Floriculture_water_Demand_value').text(response.original_kharif_floriculture_waterdemand);

                $('#Crop_Diversion_kharif_Sericulture_water_Demand_value').text(response.original_kharif_sericulture_waterdemand);
                //$('#Crop_Diversion_kharif_Cucumber_water_Demand_value').text(response.original_kharif_cucumber_waterdemand);
                //$('#Crop_Diversion_kharif_Banana_water_Demand_value').text(response.original_kharif_banana_waterdemand);
                $('#Crop_Diversion_kharif_Fodder_water_Demand_value').text(response.original_kharif_fodder_waterdemand);

                $('#Crop_Diversion_kharif_Maize_water_Demand_value').text(response.original_kharif_maize_waterdemand);
                //$('#Crop_Diversion_kharif_Potato_water_Demand_value').text(response.original_kharif_potato_waterdemand);
                $('#Crop_Diversion_kharif_Chillies_water_Demand_value').text(response.original_kharif_chillies_waterdemand);
                $('#Crop_Diversion_kharif_Cotton_water_Demand_value').text(response.original_kharif_cotton_waterdemand);

                $('#Crop_Diversion_kharif_Melon_water_Demand_value').text(response.original_kharif_melon_waterdemand);
                $('#Crop_Diversion_kharif_Citrus_water_Demand_value').text(response.original_kharif_citrus_waterdemand);
                //$('#Crop_Diversion_kharif_Peanut_water_Demand_value').text(response.original_kharif_peanut_waterdemand);
                $('#Crop_Diversion_kharif_Horticulture_water_Demand_value').text(response.original_kharif_horticulture_waterdemand);

                //original rabi water demand
                $('#Crop_Diversion_Rabi_Sericulture_water_Demand_value').text(response.original_rabi_sericulture_waterdemand);
                $('#Crop_Diversion_Rabi_Tomato_water_Demand_value').text(response.original_rabi_tomoto_waterdemand);
                //$('#Crop_Diversion_Rabi_Cabbage_water_Demand_value').text(response.original_rabi_cabbage_waterdemand);
                //$('#Crop_Diversion_Rabi_Beans_water_Demand_value').text(response.original_rabi_beans_waterdemand);

                $('#Crop_Diversion_Rabi_Floriculture_water_Demand_value').text(response.original_rabi_floriculture_waterdemand);
                //$('#Crop_Diversion_Rabi_Potato_water_Demand_value').text(response.original_rabi_potato_waterdemand);
                //$('#Crop_Diversion_Rabi_Cucumber_water_Demand_value').text(response.original_rabi_cucumber_waterdemand);
                $('#Crop_Diversion_Rabi_Ragi_water_Demand_value').text(response.original_rabi_ragi_waterdemand);

                $('#Crop_Diversion_Rabi_Sugarcane_water_Demand_value').text(response.original_rabi_sugarcane_waterdemand);
                $('#Crop_Diversion_Rabi_Maize_water_Demand_value').text(response.original_rabi_maize_waterdemand);
                $('#Crop_Diversion_Rabi_Fodder_water_Demand_value').text(response.original_rabi_fodder_waterdemand);
                $('#Crop_Diversion_Rabi_paddy_water_Demand_value').text(response.original_rabi_paddy_waterdemand);

                $('#Crop_Diversion_Rabi_Alfalfa_water_Demand_value').text(response.original_rabi_alfalfa_waterdemand);
                //$('#Crop_Diversion_Rabi_Onion_water_Demand_value').text(response.original_rabi_onion_waterdemand);
                $('#Crop_Diversion_Rabi_Horticulture_water_Demand_value').text(response.original_rabi_horticulture_waterdemand);
                $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value').text(response.original_rabi_sunflower_waterdemand);

                //summer
                $('#Crop_Diversion_Summer_Sericulture_water_Demand_value').text(response.original_summer_sericulture_waterdemand);
                $('#Crop_Diversion_Summer_Tomoto_water_Demand_value').text(response.original_summer_tomoto_waterdemand);
                //$('#Crop_Diversion_Summer_Cabbage_water_Demand_value').text(response.original_summer_cabbage_waterdemand);
                //$('#Crop_Diversion_Summer_Beans_water_Demand_value').text(response.original_summer_beans_waterdemand);

                $('#Crop_Diversion_Summer_Floriculture_water_Demand_value').text(response.original_summer_floriculture_waterdemand);
                $('#Crop_Diversion_Summer_Maize_water_Demand_value').text(response.original_summer_maize_waterdemand);
                $('#Crop_Diversion_Summer_Fodder_water_Demand_value').text(response.original_summer_fodder_waterdemand);
                $('#Crop_Diversion_Summer_Sugarcane_water_Demand_value').text(response.original_summer_sugarcane_waterdemand);

                //changed crop 
                //other karif water demand
                $('#Crop_Diversion_kharif_paddy_water_Demand_value1').text(response.changed_kharif_paddy_waterdemand);
                $('#Crop_Diversion_kharif_Ragi_water_Demand_value1').text(response.changed_kharif_ragi_waterdemand);
                $('#Crop_Diversion_kharif_GroundNut_water_Demand_value1').text(response.changed_kharif_groundnut_waterdemand);
                $('#Crop_Diversion_kharif_Sugarcane_water_Demand_value1').text(response.changed_kharif_sugarcane_waterdemand);

                $('#Crop_Diversion_kharif_Tomato_water_Demand_value1').text(response.changed_kharif_tomoto_waterdemand);
                //$('#Crop_Diversion_kharif_Cabbage_water_Demand_value1').text(response.changed_kharif_cabbage_waterdemand);
                //$('#Crop_Diversion_kharif_Beans_water_Demand_value1').text(response.changed_kharif_beans_waterdemand);
                $('#Crop_Diversion_kharif_Floriculture_water_Demand_value1').text(response.changed_kharif_floriculture_waterdemand);

                $('#Crop_Diversion_kharif_Sericulture_water_Demand_value1').text(response.changed_kharif_sericulture_waterdemand);
                //$('#Crop_Diversion_kharif_Cucumber_water_Demand_value1').text(response.changed_kharif_cucumber_waterdemand);
                //$('#Crop_Diversion_kharif_Banana_water_Demand_value1').text(response.changed_kharif_banana_waterdemand);
                $('#Crop_Diversion_kharif_Fodder_water_Demand_value1').text(response.changed_kharif_fodder_waterdemand);

                $('#Crop_Diversion_kharif_Maize_water_Demand_value1').text(response.changed_kharif_maize_waterdemand);
                //$('#Crop_Diversion_kharif_Potato_water_Demand_value1').text(response.changed_kharif_potato_waterdemand);
                $('#Crop_Diversion_kharif_Chillies_water_Demand_value1').text(response.changed_kharif_chillies_waterdemand);
                $('#Crop_Diversion_kharif_Cotton_water_Demand_value1').text(response.changed_kharif_cotton_waterdemand);

                $('#Crop_Diversion_kharif_Melon_water_Demand_value1').text(response.changed_kharif_melon_waterdemand);
                $('#Crop_Diversion_kharif_Citrus_water_Demand_value1').text(response.changed_kharif_citrus_waterdemand);
                //$('#Crop_Diversion_kharif_Peanut_water_Demand_value1').text(response.changed_kharif_peanut_waterdemand);
                $('#Crop_Diversion_kharif_Horticulture_water_Demand_value1').text(response.changed_kharif_horticulture_waterdemand);

                //original rabi water demand
                $('#Crop_Diversion_Rabi_Sericulture_water_Demand_value1').text(response.changed_rabi_sericulture_waterdemand);
                $('#Crop_Diversion_Rabi_Tomato_water_Demand_value1').text(response.changed_rabi_tomoto_waterdemand);
                //$('#Crop_Diversion_Rabi_Cabbage_water_Demand_value1').text(response.changed_rabi_cabbage_waterdemand);
                //$('#Crop_Diversion_Rabi_Beans_water_Demand_value1').text(response.changed_rabi_beans_waterdemand);

                $('#Crop_Diversion_Rabi_Floriculture_water_Demand_value1').text(response.changed_rabi_floriculture_waterdemand);
                //$('#Crop_Diversion_Rabi_Potato_water_Demand_value1').text(response.changed_rabi_potato_waterdemand);
                //$('#Crop_Diversion_Rabi_Cucumber_water_Demand_value1').text(response.changed_rabi_cucumber_waterdemand);
                $('#Crop_Diversion_Rabi_Ragi_water_Demand_value1').text(response.changed_rabi_ragi_waterdemand);

                $('#Crop_Diversion_Rabi_Sugarcane_water_Demand_value1').text(response.changed_rabi_sugarcane_waterdemand);
                $('#Crop_Diversion_Rabi_Maize_water_Demand_value1').text(response.changed_rabi_maize_waterdemand);
                $('#Crop_Diversion_Rabi_Fodder_water_Demand_value1').text(response.changed_rabi_fodder_waterdemand);
                $('#Crop_Diversion_Rabi_paddy_water_Demand_value1').text(response.changed_rabi_paddy_waterdemand);

                $('#Crop_Diversion_Rabi_Alfalfa_water_Demand_value1').text(response.changed_rabi_alfalfa_waterdemand);
                //$('#Crop_Diversion_Rabi_Onion_water_Demand_value1').text(response.changed_rabi_onion_waterdemand);
                $('#Crop_Diversion_Rabi_Horticulture_water_Demand_value1').text(response.changed_rabi_horticulture_waterdemand);
                $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value1').text(response.changed_rabi_sunflower_waterdemand);

                //summer
                $('#Crop_Diversion_Summer_Sericulture_water_Demand_value1').text(response.changed_summer_sericulture_waterdemand);
                $('#Crop_Diversion_Summer_Tomoto_water_Demand_value1').text(response.changed_summer_tomoto_waterdemand);
                //$('#Crop_Diversion_Summer_Cabbage_water_Demand_value1').text(response.changed_summer_cabbage_waterdemand);
                //$('#Crop_Diversion_Summer_Beans_water_Demand_value1').text(response.changed_summer_beans_waterdemand);

                $('#Crop_Diversion_Summer_Floriculture_water_Demand_value1').text(response.changed_summer_floriculture_waterdemand);
                $('#Crop_Diversion_Summer_Maize_water_Demand_value1').text(response.changed_summer_maize_waterdemand);
                $('#Crop_Diversion_Summer_Fodder_water_Demand_value1').text(response.changed_summer_fodder_waterdemand);
                $('#Crop_Diversion_Summer_Sugarcane_water_Demand_value1').text(response.changed_summer_sugarcane_waterdemand);


                //other crops
                //original crops
                //$('#original_kharif_othercrop_name').val(response.original_kharif_othercrop_name);
                //$('#original_kharif_othercrop_area').val(response.original_kharif_othercrop_area);
                //$('#original_kharif_othercrop_water_req').val(response.original_kharif_othercrop_water_req);
                //$('#original_kharif_othercrop_waterdemand').text(response.original_kharif_othercrop_waterdemand);

                //$('#original_rabi_othercrop_name').val(response.original_rabi_othercrop_name);
                //$('#original_rabi_othercrop_area').val(response.original_rabi_othercrop_area);
                //$('#original_rabi_othercrop_water_req').val(response.original_rabi_othercrop_water_req);
                //$('#original_rabi_othercrop_waterdemand').text(response.original_rabi_othercrop_waterdemand);

                //$('#original_summer_othercrop_name').val(response.original_summer_othercrop_name);
                //$('#original_summer_othercrop_area').val(response.original_summer_othercrop_area);
                //$('#original_summer_othercrop_water_req').val(response.original_summer_othercrop_water_req);
                //$('#original_summer_othercrop_waterdemand').text(response.original_summer_othercrop_waterdemand);

                ////changed crops
                //$('#changed_kharif_othercrop_name').val(response.changed_kharif_othercrop_name);
                //$('#changed_kharif_croparea_area').val(response.changed_kharif_croparea_area);
                //$('#changed_kharif_othercrop_water_req').val(response.changed_kharif_othercrop_water_req);
                //$('#changed_kharif_othercrop_waterdemand').text(response.changed_kharif_othercrop_waterdemand);

                //$('#changed_rabi_othercrop_name').val(response.changed_rabi_othercrop_name);
                //$('#changed_rabi_croparea_area').val(response.changed_rabi_croparea_area);
                //$('#changed_rabi_othercrop_water_req').val(response.changed_rabi_othercrop_water_req);
                //$('#changed_rabi_othercrop_waterdemand').text(response.changed_rabi_othercrop_waterdemand);

                //$('#changed_summer_othercrop_name').val(response.changed_summer_othercrop_name);
                //$('#changed_summer_croparea_area').val(response.changed_summer_croparea_area);
                //$('#changed_summer_othercrop_water_req').val(response.changed_summer_othercrop_water_req);
                //$('#changed_summer_othercrop_waterdemand').text(response.changed_summer_othercrop_waterdemand);


            }
            else {
                add_Original_Crop_kharif_count = 0;
                add_Original_Crop_kharif_count1 = 1;
                add_Original_Crop_kharif_count2 = 2;
                add_Original_Crop_kharif_count3 = 3;
                add_Original_Crop_kharif_count4 = 4;
                add_Original_Crop_kharif_count5 = 5;



                add_Original_Crop_rabi_count = 0;
                add_Original_Crop_rabi_count1 = 1;
                add_Original_Crop_rabi_count2 = 2;
                add_Original_Crop_rabi_count3 = 3;
                add_Original_Crop_rabi_count4 = 4;
                add_Original_Crop_rabi_count5 = 5;

                add_Original_Crop_summer_count = 0;
                add_Original_Crop_summer_count1 = 1;
                add_Original_Crop_summer_count2 = 2;
                add_Original_Crop_summer_count3 = 3;
                add_Original_Crop_summer_count4 = 4;
                add_Original_Crop_summer_count5 = 5;



                add_Changed_Crop_kharif_count = 0;
                add_Changed_Crop_kharif_count1 = 1;
                add_Changed_Crop_kharif_count2 = 2;
                add_Changed_Crop_kharif_count3 = 3;
                add_Changed_Crop_kharif_count4 = 4;
                add_Changed_Crop_kharif_count5 = 5;



                add_Changed_Crop_rabi_count = 0;
                add_Changed_Crop_rabi_count1 = 1;
                add_Changed_Crop_rabi_count2 = 2;
                add_Changed_Crop_rabi_count3 = 3;
                add_Changed_Crop_rabi_count4 = 4;
                add_Changed_Crop_rabi_count5 = 5;

                add_Changed_Crop_summer_count = 0;
                add_Changed_Crop_summer_count1 = 1;
                add_Changed_Crop_summer_count2 = 2;
                add_Changed_Crop_summer_count3 = 3;
                add_Changed_Crop_summer_count4 = 4;
                add_Changed_Crop_summer_count5 = 5;



                $('#original_summer_horticulture_water_req').val(470);

                $('#changed_summer_horticulture_water_req').val(470);

                //new columns water requirement
                $('#changed_kharif_paddy_crop_water_req').val(1175);
                $('#changed_kharif_ragi_crop_water_req').val(550);
                $('#changed_kharif_groundnut_water_req').val(525);
                $('#changed_kharif_sugarcane_water_req').val(2000);
                $('#changed_kharif_tomoto_water_req').val(500);
                //$('#changed_kharif_cabbage_water_req').val(425);
                //$('#changed_kharif_beans_water_req').val(425);
                $('#changed_kharif_floriculture_water_req').val(1200);
                $('#changed_kharif_sericulture_water_req').val(1550);
                //$('#changed_kharif_cucumber_water_req').val(400);
                $('#changed_kharif_banana_water_req').val(1700);
                $('#changed_kharif_fodder_water_req').val(1400);
                $('#changed_kharif_maize_water_req').val(650);
                //$('#changed_kharif_potato_water_req').val(600);
                $('#changed_kharif_chillies_water_req').val(230);
                $('#changed_kharif_cotton_water_req').val(1000);
                $('#changed_kharif_melon_water_req').val(500);
                $('#changed_kharif_citrus_water_req').val(1050);
                //$('#changed_kharif_peanut_water_req').val(600);
                $('#changed_kharif_horticulture_water_req').val(470);

                $('#changed_rabi_sericulture_water_req').val(1550);
                $('#changed_rabi_tomoto_water_req').val(500);
                //$('#changed_rabi_cabbage_water_req').val(425);
                //$('#changed_rabi_beans_water_req').val(400);
                $('#changed_rabi_floriculture_water_req').val(1200);
                //$('#changed_rabi_potato_water_req').val(600);
                //$('#changed_rabi_cucumber_water_req').val(400);
                $('#changed_rabi_ragi_water_req').val(550);
                $('#changed_rabi_sugarcane_water_req').val(2000);
                $('#changed_rabi_maize_water_req').val(650);
                $('#changed_rabi_fodder_water_req').val(1400);
                $('#changed_rabi_paddy_water_req').val(1175);
                $('#changed_rabi_alfalfa_water_req').val(1200);
                //$('#changed_rabi_onion_water_req').val(450);
                $('#changed_rabi_horticulture_water_req').val(470);
                $('#changed_rabi_sunflower_water_req').val(800);

                $('#changed_summer_sericulture_water_req').val(1550);
                $('#changed_summer_tomoto_water_req').val(500);
                //$('#changed_summer_cabbage_water_req').val(425);
                //$('#changed_summer_beans_water_req').val(400);
                $('#changed_summer_floriculture_water_req').val(1200);
                $('#changed_summer_maize_water_req').val(650);
                $('#changed_summer_fodder_water_req').val(1400);
                $('#changed_summer_sugarcane_water_req').val(2000);


                //Original

                $('#original_kharif_paddy_water_req').val(1175);

                $('#original_kharif_ragi_water_req').val(550);
                $('#original_kharif_groundnut_water_req').val(525);
                $('#original_kharif_sugarcane_water_req').val(2000);
                $('#original_kharif_tomoto_water_req').val(500);
                //$('#original_kharif_cabbage_water_req').val(425);
                //$('#original_kharif_beans_water_req').val(425);
                $('#original_kharif_floriculture_water_req').val(1200);
                $('#original_kharif_sericulture_water_req').val(1550);
                //$('#original_kharif_cucumber_water_req').val(400);
                $('#original_kharif_banana_water_req').val(1700);
                $('#original_kharif_fodder_water_req').val(1400);
                $('#original_kharif_maize_water_req').val(650);
                //$('#original_kharif_potato_water_req').val(600);
                $('#original_kharif_chillies_water_req').val(230);
                $('#original_kharif_cotton_water_req').val(1000);
                $('#original_kharif_melon_water_req').val(500);
                $('#original_kharif_citrus_water_req').val(1050);
                //$('#original_kharif_peanut_water_req').val(600);
                $('#original_kharif_horticulture_water_req').val(470);

                $('#original_rabi_sericulture_water_req').val(1550);
                $('#original_rabi_tomoto_water_req').val(500);
                //$('#original_rabi_cabbage_water_req').val(425);
                //$('#original_rabi_beans_water_req').val(400);
                $('#original_rabi_floriculture_water_req').val(1200);
                //$('#original_rabi_potato_water_req').val(600);
                //$('#original_rabi_cucumber_water_req').val(400);
                $('#original_rabi_ragi_water_req').val(550);
                $('#original_rabi_sugarcane_water_req').val(2000);
                $('#original_rabi_maize_water_req').val(650);
                $('#original_rabi_fodder_water_req').val(1400);
                $('#original_rabi_paddy_water_req').val(1175);
                $('#original_rabi_alfalfa_water_req').val(1200);
                //$('#original_rabi_onion_water_req').val(450);
                $('#original_rabi_horticulture_water_req').val(470);
                $('#original_rabi_sunflower_water_req').val(800);

                $('#original_summer_sericulture_water_req').val(1550);
                $('#original_summer_tomoto_water_req').val(500);
                //$('#original_summer_cabbage_water_req').val(425);
                //$('#original_summer_beans_water_req').val(400);
                $('#original_summer_floriculture_water_req').val(1200);
                $('#original_summer_maize_water_req').val(650);
                $('#original_summer_fodder_water_req').val(1400);
                $('#original_summer_sugarcane_water_req').val(2000);
            }

            Crop_Diversion_Kharif_WaterRequire();
            Crop_Diversion_Kharif_WaterRequire1();
            Crop_Diversion_Rabi_WaterRequire();
            Crop_Diversion_Rabi_WaterRequire1();
            Crop_Diversion_Crop_WaterRequire();
            Crop_Diversion_Crop_WaterRequire1();

        }
    });
}

var FullData = "";
function Funding_Source_Info() {
    $.ajax({
        type: "GET",
        url: "/WSPHome/DemandSide_Funding_Source",
        contentType: "application/json;charset=utf-8",
        data: '',
        dataType: 'JSON',
        success: function (response) {

            //kharif original crop

            if (response == "Error") {
                window.location = "/WSPHome/WspDemandside";
            }
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var optionhtml = "<option value='0'>--Select Funding Source--</option>";
            if (response.length != 0) {
                allstate = [];
                FullData = response;
                var ddlSourse = {};
                for (var i = 0; i < response.length; i++) {
                    if (response[i].funding_sourcename != null && response[i].funding_sourcename != "") {
                        if (!ddlSourse[response[i].funding_sourcename]) {
                            optionhtml += '<option value="' + response[i].funding_sourcename + '">' + response[i].funding_sourcename + '</option>';

                            allstate.push(response[i].funding_sourcename);
                            ddlSourse[response[i].funding_sourcename] = response[i].funding_sourcename;

                        }
                    }
                }
                //kharif original crop
                $("#Crop_Diversion_kharif_Paddy_FundingSource").append(optionhtml);

                $('#Sprinkler_kharif_Paddy_FundingSource').append(optionhtml);
                $('#Pipelines_kharif_Paddy_FundingSource').append(optionhtml);
                $('#Reduction_kharif_Paddy_FundingSource').append(optionhtml);
                $('#Other_kharif_Paddy_FundingSource').append(optionhtml);

                $('#Drip_kharif_Paddy_FundingSource').append(optionhtml);
            }

        }

    });
}

function Rabi_CheckBox(sss1) {


    if (sss1 == "O") {
        Crop_Diversion_Rabi_WaterRequire();
    }
    else if (sss1 == "C") {
        Crop_Diversion_Rabi_WaterRequire1();
    }
}

function Summer_Crop_CheckBox(sss2) {

    if (sss2 == "O") {
        Crop_Diversion_Crop_WaterRequire();
    }
    else if (sss2 == "C") {
        Crop_Diversion_Crop_WaterRequire1();
    }
}
//Original Crop
var Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = 0;
var Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = 0;
var Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = 0;
var Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = 0;
var Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = 0;
var Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = 0;
var original_kharif_total_waterdemand = 0;
var original_kharif_total_gw_reduc_waterdemand = 0;

var original_rabi_total_waterdemand = 0;
var original_rabi_total_gw_reduc_waterdemand = 0;

var original_summer_total_waterdemand = 0;
var original_summer_total_gw_reduc_waterdemand = 0;


var changed_kharif_total_waterdemand = 0;
var changed_kharif_total_gw_reduc_waterdemand = 0;

var changed_rabi_total_waterdemand = 0;
var changed_rabi_total_gw_reduc_waterdemand = 0;

var changed_summer_total_waterdemand = 0;
var changed_summer_total_gw_reduc_waterdemand = 0;

var original_kharif_paddy_waterdemand = 0;
var original_kharif_ragi_waterdemand = 0;
var original_kharif_groundnut_waterdemand = 0;
var original_kharif_sugarcane_waterdemand = 0;

var original_kharif_tomoto_waterdemand = 0;
var original_kharif_cabbage_waterdemand = 0;
var original_kharif_beans_waterdemand = 0;
var original_kharif_floriculture_waterdemand = 0;

var original_kharif_sericulture_waterdemand = 0;
var original_kharif_cucumber_waterdemand = 0;
var original_kharif_banana_waterdemand = 0;
var original_kharif_fodder_waterdemand = 0;

var original_kharif_maize_waterdemand = 0;
var original_kharif_potato_waterdemand = 0;
var original_kharif_chillies_waterdemand = 0;
var original_kharif_cotton_waterdemand = 0;

var original_kharif_melon_waterdemand = 0;
var original_kharif_citrus_waterdemand = 0;
var original_kharif_peanut_waterdemand = 0;
var original_kharif_horticulture_waterdemand = 0;


var original_kharif_horticulture_waterdemand1 = 0;

var original_kharif_horticulture_waterdemand2 = 0;

var original_kharif_horticulture_waterdemand3 = 0;

var original_kharif_horticulture_waterdemand4 = 0;

var original_kharif_horticulture_waterdemand5 = 0;

//Rabi

var original_rabi_sericulture_waterdemand = 0;
var original_rabi_tomoto_waterdemand = 0;
var original_rabi_cabbage_waterdemand = 0;
var original_rabi_beans_waterdemand = 0;

var original_rabi_floriculture_waterdemand = 0;
var original_rabi_potato_waterdemand = 0;
var original_rabi_cucumber_waterdemand = 0;
var original_rabi_ragi_waterdemand = 0;

var original_rabi_sugarcane_waterdemand = 0;
var original_rabi_maize_waterdemand = 0;
var original_rabi_fodder_waterdemand = 0;
var original_rabi_paddy_waterdemand = 0;

var original_rabi_alfalfa_waterdemand = 0;
var original_rabi_onion_waterdemand = 0;
var original_rabi_horticulture_waterdemand = 0;
var original_rabi_sunflower_waterdemand = 0;

var original_rabi_horticulture_waterdemand1 = 0;
var original_rabi_horticulture_waterdemand2 = 0;
var original_rabi_horticulture_waterdemand3 = 0;
var original_rabi_horticulture_waterdemand4 = 0;
var original_rabi_horticulture_waterdemand5 = 0;

//Summer

var original_summer_sericulture_waterdemand = 0;
var original_summer_tomoto_waterdemand = 0;
var original_summer_cabbage_waterdemand = 0;
var original_summer_beans_waterdemand = 0;

var original_summer_floriculture_waterdemand = 0;
var original_summer_maize_waterdemand = 0;
var original_summer_fodder_waterdemand = 0;
var original_summer_sugarcane_waterdemand = 0;

var original_summer_horticulture_waterdemand = 0;

var original_summer_horticulture_waterdemand1 = 0;
var original_summer_horticulture_waterdemand2 = 0;
var original_summer_horticulture_waterdemand3 = 0;
var original_summer_horticulture_waterdemand4 = 0;
var original_summer_horticulture_waterdemand5 = 0;


//Changed Crop
var changed_kharif_paddy_waterdemand = 0;
var changed_kharif_ragi_waterdemand = 0;
var changed_kharif_groundnut_waterdemand = 0;
var changed_kharif_sugarcane_waterdemand = 0;

var changed_kharif_tomoto_waterdemand = 0;
var changed_kharif_cabbage_waterdemand = 0;
var changed_kharif_beans_waterdemand = 0;
var changed_kharif_floriculture_waterdemand = 0;

var changed_kharif_sericulture_waterdemand = 0;
var changed_kharif_cucumber_waterdemand = 0;
var changed_kharif_banana_waterdemand = 0;
var changed_kharif_fodder_waterdemand = 0;

var changed_kharif_maize_waterdemand = 0;
var changed_kharif_potato_waterdemand = 0;
var changed_kharif_chillies_waterdemand = 0;
var changed_kharif_cotton_waterdemand = 0;

var changed_kharif_melon_waterdemand = 0;
var changed_kharif_citrus_waterdemand = 0;
var changed_kharif_peanut_waterdemand = 0;
var changed_kharif_horticulture_waterdemand = 0;
var changed_kharif_horticulture_waterdemand1 = 0;
var changed_kharif_horticulture_reduction_gw_demand1 = 0;
var changed_kharif_horticulture_waterdemand2 = 0;
var changed_kharif_horticulture_reduction_gw_demand2 = 0;
var changed_kharif_horticulture_waterdemand3 = 0;
var changed_kharif_horticulture_reduction_gw_demand3 = 0;
var changed_kharif_horticulture_waterdemand4 = 0;
var changed_kharif_horticulture_reduction_gw_demand4 = 0;
var changed_kharif_horticulture_waterdemand5 = 0;
var changed_kharif_horticulture_reduction_gw_demand5 = 0;

//Rabi
var changed_rabi_sericulture_waterdemand = 0;
var changed_rabi_tomoto_waterdemand = 0;
var changed_rabi_cabbage_waterdemand = 0;
var changed_rabi_beans_waterdemand = 0;

var changed_rabi_floriculture_waterdemand = 0;
var changed_rabi_potato_waterdemand = 0;
var changed_rabi_cucumber_waterdemand = 0;
var changed_rabi_ragi_waterdemand = 0;

var changed_rabi_sugarcane_waterdemand = 0;
var changed_rabi_maize_waterdemand = 0;
var changed_rabi_fodder_waterdemand = 0;
var changed_rabi_paddy_waterdemand = 0;

var changed_rabi_alfalfa_waterdemand = 0;
var changed_rabi_onion_waterdemand = 0;
var changed_rabi_horticulture_waterdemand = 0;
var changed_rabi_sunflower_waterdemand = 0;


var changed_rabi_horticulture_waterdemand1 = 0;
var changed_rabi_horticulture_reduction_gw_demand1 = 0;
var changed_rabi_horticulture_waterdemand2 = 0;
var changed_rabi_horticulture_reduction_gw_demand2 = 0;
var changed_rabi_horticulture_waterdemand3 = 0;
var changed_rabi_horticulture_reduction_gw_demand3 = 0;
var changed_rabi_horticulture_waterdemand4 = 0;
var changed_rabi_horticulture_reduction_gw_demand4 = 0;
var changed_rabi_horticulture_waterdemand5 = 0;
var changed_rabi_horticulture_reduction_gw_demand5 = 0;

//Summer

var changed_summer_sericulture_waterdemand = 0;
var changed_summer_tomoto_waterdemand = 0;
var changed_summer_cabbage_waterdemand = 0;
var changed_summer_beans_waterdemand = 0;

var changed_summer_floriculture_waterdemand = 0;
var changed_summer_maize_waterdemand = 0;
var changed_summer_fodder_waterdemand = 0;
var changed_summer_sugarcane_waterdemand = 0;

var changed_summer_horticulture_waterdemand = 0;

var changed_summer_horticulture_waterdemand1 = 0;
var changed_summer_horticulture_reduction_gw_demand1 = 0;
var changed_summer_horticulture_waterdemand2 = 0;
var changed_summer_horticulture_reduction_gw_demand2 = 0;
var changed_summer_horticulture_waterdemand3 = 0;
var changed_summer_horticulture_reduction_gw_demand3 = 0;
var changed_summer_horticulture_waterdemand4 = 0;
var changed_summer_horticulture_reduction_gw_demand4 = 0;
var changed_summer_horticulture_waterdemand5 = 0;
var changed_summer_horticulture_reduction_gw_demand5 = 0;

function Crop_Diversion_Kharif_WaterRequire() {

    original_kharif_paddy_waterdemand = 0;
    original_kharif_ragi_waterdemand = 0;
    original_kharif_groundnut_waterdemand = 0;
    original_kharif_sugarcane_waterdemand = 0;

    original_kharif_tomoto_waterdemand = 0;
    original_kharif_cabbage_waterdemand = 0;
    original_kharif_beans_waterdemand = 0;
    original_kharif_floriculture_waterdemand = 0;

    original_kharif_sericulture_waterdemand = 0;
    original_kharif_cucumber_waterdemand = 0;
    original_kharif_banana_waterdemand = 0;
    original_kharif_fodder_waterdemand = 0;

    original_kharif_maize_waterdemand = 0;
    original_kharif_potato_waterdemand = 0;
    original_kharif_chillies_waterdemand = 0;
    original_kharif_cotton_waterdemand = 0;

    original_kharif_melon_waterdemand = 0;
    original_kharif_citrus_waterdemand = 0;
    original_kharif_peanut_waterdemand = 0;
    original_kharif_horticulture_waterdemand = 0;
    original_kharif_total_waterdemand = 0;
    original_kharif_total_gw_reduc_waterdemand = 0;
    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = 0;


    original_kharif_horticulture_waterdemand1 = 0;
    original_kharif_horticulture_waterdemand2 = 0;
    original_kharif_horticulture_waterdemand3 = 0;
    original_kharif_horticulture_waterdemand4 = 0;
    original_kharif_horticulture_waterdemand5 = 0;


    //Other
    var original_kharif_horticulture_water_req1 = $('#original_kharif_horticulture_water_req1').val();
    if (typeof original_kharif_horticulture_water_req1 == 'undefined') {
        original_kharif_horticulture_water_req1 = 0;
    }
    if (original_kharif_horticulture_water_req1 == "") {
        original_kharif_horticulture_water_req1 = 0;
    }
    var original_kharif_othercrop_area1 = $('#original_kharif_othercrop_area1').val();
    if (typeof original_kharif_othercrop_area1 == 'undefined') {
        original_kharif_othercrop_area1 = 0;
    }
    if (original_kharif_othercrop_area1 != "") {
        original_kharif_horticulture_waterdemand1 = parseInt(original_kharif_othercrop_area1) * parseFloat(original_kharif_horticulture_water_req1) * 0.001;
        $('#original_kharif_horticulture_waterdemand1').text(original_kharif_horticulture_waterdemand1.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_horticulture_waterdemand1 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;
    }

    var original_kharif_horticulture_water_req2 = $('#original_kharif_horticulture_water_req2').val();
    if (original_kharif_horticulture_water_req2 == "") {
        original_kharif_horticulture_water_req2 = 0;
    }
    if (typeof original_kharif_horticulture_water_req2 == 'undefined') {
        original_kharif_horticulture_water_req2 = 0;
    }
    var original_kharif_othercrop_area2 = $('#original_kharif_othercrop_area2').val();
    if (typeof original_kharif_othercrop_area2 == 'undefined') {
        original_kharif_othercrop_area2 = 0;
    }
    if (original_kharif_othercrop_area2 != "") {
        original_kharif_horticulture_waterdemand2 = parseInt(original_kharif_othercrop_area2) * parseFloat(original_kharif_horticulture_water_req2) * 0.001;
        $('#original_kharif_horticulture_waterdemand2').text(original_kharif_horticulture_waterdemand2.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_horticulture_waterdemand2 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;
    }
    var original_kharif_horticulture_water_req3 = $('#original_kharif_horticulture_water_req3').val();
    if (typeof original_kharif_horticulture_water_req3 == 'undefined') {
        original_kharif_horticulture_water_req3 = 0;
    }
    if (original_kharif_horticulture_water_req3 == "") {
        original_kharif_horticulture_water_req3 = 0;
    }
    var original_kharif_othercrop_area3 = $('#original_kharif_othercrop_area3').val();
    if (typeof original_kharif_othercrop_area3 == 'undefined') {
        original_kharif_othercrop_area3 = 0;
    }
    if (original_kharif_othercrop_area3 != "") {
        original_kharif_horticulture_waterdemand3 = parseInt(original_kharif_othercrop_area3) * parseFloat(original_kharif_horticulture_water_req3) * 0.001;
        $('#original_kharif_horticulture_waterdemand3').text(original_kharif_horticulture_waterdemand3.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_horticulture_waterdemand3 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;
    }

    var original_kharif_horticulture_water_req4 = $('#original_kharif_horticulture_water_req4').val();
    if (typeof original_kharif_horticulture_water_req4 == 'undefined') {
        original_kharif_horticulture_water_req4 = 0;
    }
    if (original_kharif_horticulture_water_req4 == "") {
        original_kharif_horticulture_water_req4 = 0;
    }
    var original_kharif_othercrop_area4 = $('#original_kharif_othercrop_area4').val();
    if (typeof original_kharif_othercrop_area4 == 'undefined') {
        original_kharif_othercrop_area4 = 0;
    }
    if (original_kharif_othercrop_area4 != "") {
        original_kharif_horticulture_waterdemand4 = parseInt(original_kharif_othercrop_area4) * parseFloat(original_kharif_horticulture_water_req4) * 0.001;
        $('#original_kharif_horticulture_waterdemand4').text(original_kharif_horticulture_waterdemand4.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_horticulture_waterdemand4 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;
    }

    var original_kharif_horticulture_water_req5 = $('#original_kharif_horticulture_water_req5').val();
    if (typeof original_kharif_horticulture_water_req5 == 'undefined') {
        original_kharif_horticulture_water_req5 = 0;
    }
    if (original_kharif_horticulture_water_req5 == "") {
        original_kharif_horticulture_water_req5 = 0;
    }
    var original_kharif_othercrop_area5 = $('#original_kharif_othercrop_area5').val();
    if (typeof original_kharif_othercrop_area5 == 'undefined') {
        original_kharif_othercrop_area5 = 0;
    }
    if (original_kharif_othercrop_area5 != "") {
        original_kharif_horticulture_waterdemand5 = parseInt(original_kharif_othercrop_area5) * parseFloat(original_kharif_horticulture_water_req5) * 0.001;
        $('#original_kharif_horticulture_waterdemand5').text(original_kharif_horticulture_waterdemand5.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_horticulture_waterdemand5 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;
    }


    //Paddy
    $('#Crop_Diversion_kharif_paddy_water_Demand_value').text("0");
    var original_kharif_paddy_water_req = $('#original_kharif_paddy_water_req').val();
    if (original_kharif_paddy_water_req == "") {
        original_kharif_paddy_water_req = 0;
    }
    var drip_kharif_Paddy_UserVale = $('#Crop_Diversion_kharif_Paddy_UserVale').val();
    if (drip_kharif_Paddy_UserVale != "") {
        original_kharif_paddy_waterdemand = parseInt(drip_kharif_Paddy_UserVale) * parseFloat(original_kharif_paddy_water_req) * 0.001;
        $('#Crop_Diversion_kharif_paddy_water_Demand_value').text(original_kharif_paddy_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_paddy_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

        //Kharif_Paddy_SavingValue

    }

    //Ragi
    $('#Crop_Diversion_kharif_Ragi_water_Demand_value').text("0");
    var drip_kharif_Ragi_UserVale = $('#Crop_Diversion_kharif_Ragi_UserVale').val();
    var original_kharif_ragi_water_req = $('#original_kharif_ragi_water_req').val();
    if (original_kharif_ragi_water_req == "") {
        original_kharif_ragi_water_req = 0;
    }
    if (drip_kharif_Ragi_UserVale != "") {


        original_kharif_ragi_waterdemand = parseInt(drip_kharif_Ragi_UserVale) * parseFloat(original_kharif_ragi_water_req) * 0.001;


        $('#Crop_Diversion_kharif_Ragi_water_Demand_value').text(original_kharif_ragi_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_ragi_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    //GroundNut
    $('#Crop_Diversion_kharif_GroundNut_water_Demand_value').text("0");
    var GroundNut_Kharif_Value = $('#Crop_Diversion_kharif_GroundNut_UserVale').val();
    var original_kharif_groundnut_water_req = $('#original_kharif_groundnut_water_req').val();
    if (original_kharif_groundnut_water_req == "") {
        original_kharif_groundnut_water_req = 0;
    }
    if (GroundNut_Kharif_Value != "") {
        original_kharif_groundnut_waterdemand = parseInt(GroundNut_Kharif_Value) * parseFloat(original_kharif_groundnut_water_req) * 0.001;
        $('#Crop_Diversion_kharif_GroundNut_water_Demand_value').text(original_kharif_groundnut_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_groundnut_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    //Sugarcane
    $('#Crop_Diversion_kharif_Sugarcane_water_Demand_value').text("0");
    var Sugarcane_Paddy_UserValue = $('#Crop_Diversion_kharif_Sugarcane_UserVale').val();
    var original_kharif_sugarcane_water_req = $('#original_kharif_sugarcane_water_req').val();
    if (original_kharif_sugarcane_water_req == "") {
        original_kharif_sugarcane_water_req = 0;
    }
    if (Sugarcane_Paddy_UserValue != "") {
        original_kharif_sugarcane_waterdemand = parseInt(Sugarcane_Paddy_UserValue) * parseFloat(original_kharif_sugarcane_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Sugarcane_water_Demand_value').text(original_kharif_sugarcane_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_sugarcane_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;
    }
    //Tomato
    $('#Crop_Diversion_kharif_Tomato_water_Demand_value').text("0");
    var Tomato_Kharif_Value = $('#Crop_Diversion_kharif_Tomato_UserVale').val();
    var original_kharif_tomoto_water_req = $('#original_kharif_tomoto_water_req').val();
    if (original_kharif_tomoto_water_req == "") {
        original_kharif_tomoto_water_req = 0;
    }
    if (Tomato_Kharif_Value != "") {
        original_kharif_tomoto_waterdemand = parseInt(Tomato_Kharif_Value) * parseFloat(original_kharif_tomoto_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Tomato_water_Demand_value').text(original_kharif_tomoto_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_tomoto_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }
    //Cabbage
    //$('#Crop_Diversion_kharif_Cabbage_water_Demand_value').text("0");
    //var Cabbage_Kharif_Value = $('#Crop_Diversion_kharif_Cabbage_UserVale').val();
    //var original_kharif_cabbage_water_req = $('#original_kharif_cabbage_water_req').val();
    //if (original_kharif_cabbage_water_req == "") {
    //    original_kharif_cabbage_water_req = 0;
    //}
    //if (Cabbage_Kharif_Value != "") {
    //    original_kharif_cabbage_waterdemand = parseInt(Cabbage_Kharif_Value) * parseFloat(original_kharif_cabbage_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Cabbage_water_Demand_value').text(original_kharif_cabbage_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_cabbage_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    //}

    ////Beans
    //$('#Crop_Diversion_kharif_Beans_water_Demand_value').text("0");
    //var Beans_Kharif_Value = $('#Crop_Diversion_kharif_Beans_UserVale').val();
    //var original_kharif_beans_water_req = $('#original_kharif_beans_water_req').val();
    //if (original_kharif_beans_water_req == "") {
    //    original_kharif_beans_water_req = 0;
    //}
    //if (Beans_Kharif_Value != "") {
    //    original_kharif_beans_waterdemand = parseInt(Beans_Kharif_Value) * parseFloat(original_kharif_beans_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Beans_water_Demand_value').text(original_kharif_beans_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_beans_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    //}

    //Floriculture
    $('#Crop_Diversion_kharif_Floriculture_water_Demand_value').text("0");
    var Floriculture_Kharif_Value = $('#Crop_Diversion_kharif_Floriculture_UserVale').val();
    var original_kharif_floriculture_water_req = $('#original_kharif_floriculture_water_req').val();
    if (original_kharif_floriculture_water_req == "") {
        original_kharif_floriculture_water_req = 0;
    }
    if (Floriculture_Kharif_Value != "") {
        original_kharif_floriculture_waterdemand = parseInt(Floriculture_Kharif_Value) * parseFloat(original_kharif_floriculture_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Floriculture_water_Demand_value').text(original_kharif_floriculture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_floriculture_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }




    //Sericulture
    $('#Crop_Diversion_kharif_Sericulture_water_Demand_value').text("0");
    var Sericulture_Kharif_Value = $('#Crop_Diversion_kharif_Sericulture_UserVale').val();
    var original_kharif_sericulture_water_req = $('#original_kharif_sericulture_water_req').val();
    if (original_kharif_sericulture_water_req == "") {
        original_kharif_sericulture_water_req = 0;
    }
    if (Sericulture_Kharif_Value != "") {
        original_kharif_sericulture_waterdemand = parseInt(Sericulture_Kharif_Value) * parseFloat(original_kharif_sericulture_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Sericulture_water_Demand_value').text(original_kharif_sericulture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_sericulture_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    // Cucmber
    //$('#Crop_Diversion_kharif_Cucmber_water_Demand_value').text("0");
    //var Cucmber_Kharif_Value = $('#Crop_Diversion_kharif_Cucmber_UserVale').val();
    //var original_kharif_cucumber_water_req = $('#original_kharif_cucumber_water_req').val();
    //if (original_kharif_cucumber_water_req == "") {
    //    original_kharif_cucumber_water_req = 0;
    //}
    //if (Cucmber_Kharif_Value != "") {
    //    original_kharif_cucumber_waterdemand = parseInt(Cucmber_Kharif_Value) * parseFloat(original_kharif_cucumber_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Cucmber_water_Demand_value').text(original_kharif_cucumber_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_cucumber_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    //}

    //Banana
    $('#Crop_Diversion_kharif_Banana_water_Demand_value').text("0");
    var Banana_Kharif_Value = $('#Crop_Diversion_kharif_Banana_UserVale').val();
    var original_kharif_banana_water_req = $('#original_kharif_banana_water_req').val();
    if (original_kharif_banana_water_req == "") {
        original_kharif_banana_water_req = 0;
    }
    if (Banana_Kharif_Value != "") {
        original_kharif_banana_waterdemand = parseInt(Banana_Kharif_Value) * parseFloat(original_kharif_banana_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Banana_water_Demand_value').text(original_kharif_banana_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_banana_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    //Fodder
    $('#Crop_Diversion_kharif_Fodder_water_Demand_value').text("0");
    var Fodder_Kharif_Value = $('#Crop_Diversion_kharif_Fodder_UserVale').val();
    var original_kharif_fodder_water_req = $('#original_kharif_fodder_water_req').val();
    if (original_kharif_fodder_water_req == "") {
        original_kharif_fodder_water_req = 0;
    }
    if (Fodder_Kharif_Value != "") {
        original_kharif_fodder_waterdemand = parseInt(Fodder_Kharif_Value) * parseFloat(original_kharif_fodder_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Fodder_water_Demand_value').text(original_kharif_fodder_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_fodder_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    //Maize
    $('#Crop_Diversion_kharif_Maize_water_Demand_value').text("0");
    var Maize_Kharif_Value = $('#Crop_Diversion_kharif_Maize_UserVale').val();
    var original_kharif_maize_water_req = $('#original_kharif_maize_water_req').val();
    if (original_kharif_maize_water_req == "") {
        original_kharif_maize_water_req = 0;
    }
    if (Maize_Kharif_Value != "") {
        original_kharif_maize_waterdemand = parseInt(Maize_Kharif_Value) * parseFloat(original_kharif_maize_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Maize_water_Demand_value').text(original_kharif_maize_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_maize_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    //Potato
    //$('#Crop_Diversion_kharif_Potato_water_Demand_value').text("0");
    //var Potato_Kharif_Value = $('#Crop_Diversion_kharif_Potato_UserVale').val();
    //var original_kharif_potato_water_req = $('#original_kharif_potato_water_req').val();
    //if (original_kharif_potato_water_req == "") {
    //    original_kharif_potato_water_req = 0;
    //}
    //if (Potato_Kharif_Value != "") {
    //    original_kharif_potato_waterdemand = parseInt(Potato_Kharif_Value) * parseFloat(original_kharif_potato_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Potato_water_Demand_value').text(original_kharif_potato_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_potato_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    //}
    //Chillies
    $('#Crop_Diversion_kharif_Chillies_water_Demand_value').text("0");
    var Chillies_Kharif_Value = $('#Crop_Diversion_kharif_Chillies_UserVale').val();
    var original_kharif_chillies_water_req = $('#original_kharif_chillies_water_req').val();
    if (original_kharif_chillies_water_req == "") {
        original_kharif_chillies_water_req = 0;
    }
    if (Chillies_Kharif_Value != "") {
        original_kharif_chillies_waterdemand = parseInt(Chillies_Kharif_Value) * parseFloat(original_kharif_chillies_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Chillies_water_Demand_value').text(original_kharif_chillies_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_chillies_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    //Cotton
    $('#Crop_Diversion_kharif_Cotton_water_Demand_value').text("0");
    var Cotton_Kharif_Value = $('#Crop_Diversion_kharif_Cotton_UserVale').val();
    var original_kharif_cotton_water_req = $('#original_kharif_cotton_water_req').val();
    if (original_kharif_cotton_water_req == "") {
        original_kharif_cotton_water_req = 0;
    }
    if (Cotton_Kharif_Value != "") {
        original_kharif_cotton_waterdemand = parseInt(Cotton_Kharif_Value) * parseFloat(original_kharif_cotton_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Cotton_water_Demand_value').text(original_kharif_cotton_waterdemand.toFixed(2));
        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_cotton_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    //Melon
    $('#Crop_Diversion_kharif_Melon_water_Demand_value').text("0");
    var Melon_Kharif_Value = $('#Crop_Diversion_kharif_Melon_UserVale').val();
    var original_kharif_melon_water_req = $('#original_kharif_melon_water_req').val();
    if (original_kharif_melon_water_req == "") {
        original_kharif_melon_water_req = 0;
    }
    if (Melon_Kharif_Value != "") {
        original_kharif_melon_waterdemand = parseInt(Melon_Kharif_Value) * parseFloat(original_kharif_melon_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Melon_water_Demand_value').text(original_kharif_melon_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_melon_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }




    //Citrus
    $('#Crop_Diversion_kharif_Citrus_water_Demand_value').text("0");
    var Citrus_Kharif_Value = $('#Crop_Diversion_kharif_Citrus_UserVale').val();
    var original_kharif_citrus_water_req = $('#original_kharif_citrus_water_req').val();
    if (original_kharif_citrus_water_req == "") {
        original_kharif_citrus_water_req = 0;
    }
    if (Citrus_Kharif_Value != "") {
        original_kharif_citrus_waterdemand = parseInt(Citrus_Kharif_Value) * parseFloat(original_kharif_citrus_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Citrus_water_Demand_value').text(original_kharif_citrus_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_citrus_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }

    // Peanut
    //$('#Crop_Diversion_kharif_Peanut_water_Demand_value').text("0");
    //var Peanut_Kharif_Value = $('#Crop_Diversion_kharif_Peanut_UserVale').val();
    //var original_kharif_peanut_water_req = $('#original_kharif_peanut_water_req').val();
    //if (original_kharif_peanut_water_req == "") {
    //    original_kharif_peanut_water_req = 0;
    //}
    //if (Peanut_Kharif_Value != "") {
    //    original_kharif_peanut_waterdemand = parseInt(Peanut_Kharif_Value) * parseFloat(original_kharif_peanut_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Peanut_water_Demand_value').text(original_kharif_peanut_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_peanut_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    //}

    //Horticulture
    $('#Crop_Diversion_kharif_Horticulture_water_Demand_value').text("0");
    var Horticulture_Kharif_Value = $('#Crop_Diversion_kharif_Horticulture_UserVale').val();
    var original_kharif_horticulture_water_req = $('#original_kharif_horticulture_water_req').val();
    if (original_kharif_horticulture_water_req == "") {
        original_kharif_horticulture_water_req = 0;
    }
    if (Horticulture_Kharif_Value != "") {
        original_kharif_horticulture_waterdemand = parseInt(Horticulture_Kharif_Value) * parseFloat(original_kharif_horticulture_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Horticulture_water_Demand_value').text(original_kharif_horticulture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_horticulture_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    }
    //other crop

    //var original_kharif_othercrop_area = $('#original_kharif_othercrop_area').val();
    //var original_kharif_othercrop_water_req = $('#original_kharif_othercrop_water_req').val();
    //if (original_kharif_othercrop_water_req == "") {
    //    original_kharif_othercrop_water_req = 0;
    //}
    //if (original_kharif_othercrop_area != "") {
    //    var original_kharif_othercrop_waterdemand = parseInt(original_kharif_othercrop_area) * parseFloat(original_kharif_othercrop_water_req) * 0.001;
    //    $('#original_kharif_othercrop_waterdemand').text(original_kharif_othercrop_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_ = original_kharif_othercrop_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;

    //}

    original_kharif_total_waterdemand = Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_;


    $('#Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_').text(Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1.toFixed(2));



    $('#Crop_Diversion_Kharif_Water_demand').text(Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_.toFixed(2));

    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text();;

    if (Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 == "") {
        Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = 0;
    }

    var TotalAnnual_Crop_Diversion_Reduction = parseFloat(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1);
    $('#TotalAnnual_Crop_Diversion_Reduction').text(TotalAnnual_Crop_Diversion_Reduction.toFixed(2));



    Calculation();
}

//Changed Crop

function Crop_Diversion_Kharif_WaterRequire1() {

    changed_kharif_paddy_waterdemand = 0;
    changed_kharif_ragi_waterdemand = 0;
    changed_kharif_groundnut_waterdemand = 0;
    changed_kharif_sugarcane_waterdemand = 0;

    changed_kharif_tomoto_waterdemand = 0;
    changed_kharif_cabbage_waterdemand = 0;
    changed_kharif_beans_waterdemand = 0;
    changed_kharif_floriculture_waterdemand = 0;

    changed_kharif_sericulture_waterdemand = 0;
    changed_kharif_cucumber_waterdemand = 0;
    changed_kharif_banana_waterdemand = 0;
    changed_kharif_fodder_waterdemand = 0;

    changed_kharif_maize_waterdemand = 0;
    changed_kharif_potato_waterdemand = 0;
    changed_kharif_chillies_waterdemand = 0;
    changed_kharif_cotton_waterdemand = 0;

    changed_kharif_melon_waterdemand = 0;
    changed_kharif_citrus_waterdemand = 0;
    changed_kharif_peanut_waterdemand = 0;
    changed_kharif_horticulture_waterdemand = 0;

    changed_kharif_total_waterdemand = 0;
    changed_kharif_total_gw_reduc_waterdemand = 0;


    changed_kharif_horticulture_waterdemand1 = 0;
    changed_kharif_horticulture_reduction_gw_demand1 = 0;
    changed_kharif_horticulture_waterdemand2 = 0;
    changed_kharif_horticulture_reduction_gw_demand2 = 0;
    changed_kharif_horticulture_waterdemand3 = 0;
    changed_kharif_horticulture_reduction_gw_demand3 = 0;
    changed_kharif_horticulture_waterdemand4 = 0;
    changed_kharif_horticulture_reduction_gw_demand4 = 0;
    changed_kharif_horticulture_waterdemand5 = 0;
    changed_kharif_horticulture_reduction_gw_demand5 = 0;


    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = 0;

    //Other


    var changed_kharif_croparea_area1 = $('#changed_kharif_croparea_area1').val();
    if (typeof changed_kharif_croparea_area1 == 'undefined') {
        changed_kharif_croparea_area1 = 0;
    }
    var changed_kharif_horticulture_water_req1 = $('#changed_kharif_horticulture_water_req1').val();
    if (typeof changed_kharif_horticulture_water_req1 == 'undefined') {
        changed_kharif_horticulture_water_req1 = 0;
    }
    if (changed_kharif_horticulture_water_req1 == "") {
        changed_kharif_horticulture_water_req1 = 0;
    }

    if (changed_kharif_croparea_area1 != "") {
        changed_kharif_horticulture_waterdemand1 = parseInt(changed_kharif_croparea_area1) * parseFloat(changed_kharif_horticulture_water_req1) * 0.001;
        $('#changed_kharif_horticulture_waterdemand1').text(changed_kharif_horticulture_waterdemand1.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_horticulture_waterdemand1 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        //Kharif_Paddy_SavingValue
        var ss = $('#original_kharif_horticulture_waterdemand1').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_kharif_horticulture_reduction_gw_demand1 = parseFloat(ss) - parseFloat(changed_kharif_horticulture_waterdemand1);
        $('#changed_kharif_horticulture_reduction_gw_demand1').text(parseFloat(changed_kharif_horticulture_reduction_gw_demand1).toFixed(2));

    }
    var changed_kharif_croparea_area2 = $('#changed_kharif_croparea_area2').val();
    if (typeof changed_kharif_croparea_area2 == 'undefined') {
        changed_kharif_croparea_area2 = 0;
    }
    var changed_kharif_horticulture_water_req2 = $('#changed_kharif_horticulture_water_req2').val();
    if (typeof changed_kharif_horticulture_water_req2 == 'undefined') {
        changed_kharif_horticulture_water_req2 = 0;
    }
    if (changed_kharif_horticulture_water_req2 == "") {
        changed_kharif_horticulture_water_req2 = 0;
    }

    if (changed_kharif_croparea_area2 != "") {
        changed_kharif_horticulture_waterdemand2 = parseInt(changed_kharif_croparea_area2) * parseFloat(changed_kharif_horticulture_water_req2) * 0.001;
        $('#changed_kharif_horticulture_waterdemand2').text(changed_kharif_horticulture_waterdemand2.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_horticulture_waterdemand2 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        //Kharif_Paddy_SavingValue
        var ss = $('#original_kharif_horticulture_waterdemand2').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_kharif_horticulture_reduction_gw_demand2 = parseFloat(ss) - parseFloat(changed_kharif_horticulture_waterdemand2);
        $('#changed_kharif_horticulture_reduction_gw_demand2').text(parseFloat(changed_kharif_horticulture_reduction_gw_demand2).toFixed(2));

    }

    var changed_kharif_croparea_area3 = $('#changed_kharif_croparea_area3').val();

    var changed_kharif_horticulture_water_req3 = $('#changed_kharif_horticulture_water_req3').val();
    if (typeof changed_kharif_croparea_area3 == 'undefined') {
        changed_kharif_croparea_area3 = 0;
    }
    if (typeof changed_kharif_horticulture_water_req3 == 'undefined') {
        changed_kharif_horticulture_water_req3 = 0;
    }
    if (changed_kharif_horticulture_water_req3 == "") {
        changed_kharif_horticulture_water_req3 = 0;
    }

    if (changed_kharif_croparea_area3 != "") {
        changed_kharif_horticulture_waterdemand3 = parseInt(changed_kharif_croparea_area3) * parseFloat(changed_kharif_horticulture_water_req3) * 0.001;
        $('#changed_kharif_horticulture_waterdemand3').text(changed_kharif_horticulture_waterdemand3.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_horticulture_waterdemand3 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        //Kharif_Paddy_SavingValue
        var ss = $('#original_kharif_horticulture_waterdemand3').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_kharif_horticulture_reduction_gw_demand3 = parseFloat(ss) - parseFloat(changed_kharif_horticulture_waterdemand3);
        $('#changed_kharif_horticulture_reduction_gw_demand3').text(parseFloat(changed_kharif_horticulture_reduction_gw_demand3).toFixed(2));

    }

    var changed_kharif_croparea_area4 = $('#changed_kharif_croparea_area4').val();
    if (typeof changed_kharif_croparea_area4 == 'undefined') {
        changed_kharif_croparea_area4 = 0;
    }
    var changed_kharif_horticulture_water_req4 = $('#changed_kharif_horticulture_water_req4').val();
    if (typeof changed_kharif_horticulture_water_req4 == 'undefined') {
        changed_kharif_horticulture_water_req4 = 0;
    }
    if (changed_kharif_horticulture_water_req4 == "") {
        changed_kharif_horticulture_water_req4 = 0;
    }

    if (changed_kharif_croparea_area4 != "") {
        changed_kharif_horticulture_waterdemand4 = parseInt(changed_kharif_croparea_area4) * parseFloat(changed_kharif_horticulture_water_req4) * 0.001;
        $('#changed_kharif_horticulture_waterdemand4').text(changed_kharif_horticulture_waterdemand4.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_horticulture_waterdemand4 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        //Kharif_Paddy_SavingValue
        var ss = $('#original_kharif_horticulture_waterdemand4').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_kharif_horticulture_reduction_gw_demand4 = parseFloat(ss) - parseFloat(changed_kharif_horticulture_waterdemand4);
        $('#changed_kharif_horticulture_reduction_gw_demand4').text(parseFloat(changed_kharif_horticulture_reduction_gw_demand4).toFixed(2));

    }

    var changed_kharif_croparea_area5 = $('#changed_kharif_croparea_area5').val();

    var changed_kharif_horticulture_water_req5 = $('#changed_kharif_horticulture_water_req5').val();
    if (typeof changed_kharif_croparea_area5 == 'undefined') {
        changed_kharif_croparea_area5 = 0;
    }
    if (typeof changed_kharif_horticulture_water_req5 == 'undefined') {
        changed_kharif_horticulture_water_req5 = 0;
    }
    if (changed_kharif_horticulture_water_req5 == "") {
        changed_kharif_horticulture_water_req5 = 0;
    }

    if (changed_kharif_croparea_area5 != "") {
        changed_kharif_horticulture_waterdemand5 = parseInt(changed_kharif_croparea_area5) * parseFloat(changed_kharif_horticulture_water_req5) * 0.001;
        $('#changed_kharif_horticulture_waterdemand5').text(changed_kharif_horticulture_waterdemand5.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_horticulture_waterdemand5 + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        //Kharif_Paddy_SavingValue
        var ss = $('#original_kharif_horticulture_waterdemand5').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_kharif_horticulture_reduction_gw_demand5 = parseFloat(ss) - parseFloat(changed_kharif_horticulture_waterdemand5);
        $('#changed_kharif_horticulture_reduction_gw_demand5').text(parseFloat(changed_kharif_horticulture_reduction_gw_demand5).toFixed(2));

    }

    //Paddy
    $('#Crop_Diversion_kharif_paddy_water_Demand_value1').text("0");
    var drip_kharif_Paddy_UserVale = $('#Crop_Diversion_kharif_Paddy_UserVale1').val();

    var changed_kharif_paddy_crop_water_req = $('#changed_kharif_paddy_crop_water_req').val();
    if (changed_kharif_paddy_crop_water_req == "") {
        changed_kharif_paddy_crop_water_req = 0;
    }

    if (drip_kharif_Paddy_UserVale != "") {
        changed_kharif_paddy_waterdemand = parseInt(drip_kharif_Paddy_UserVale) * parseFloat(changed_kharif_paddy_crop_water_req) * 0.001;
        $('#Crop_Diversion_kharif_paddy_water_Demand_value1').text(changed_kharif_paddy_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_paddy_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        //Kharif_Paddy_SavingValue
        var ss = $('#Crop_Diversion_kharif_paddy_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_paddy_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_paddy_waterdemand);
        $('#changed_kharif_paddy_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_paddy_Reduction_GW_Demand).toFixed(2));

    }
    //Ragi


    $('#Crop_Diversion_kharif_Ragi_water_Demand_value1').text("0");
    var drip_kharif_Ragi_UserVale = $('#Crop_Diversion_kharif_Ragi_UserVale1').val();
    var changed_kharif_ragi_crop_water_req = $('#changed_kharif_ragi_crop_water_req').val();
    if (changed_kharif_ragi_crop_water_req == "") {
        changed_kharif_ragi_crop_water_req = 0;
    }
    if (drip_kharif_Ragi_UserVale != "") {

        changed_kharif_ragi_waterdemand = parseInt(drip_kharif_Ragi_UserVale) * parseFloat(changed_kharif_ragi_crop_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Ragi_water_Demand_value1').text(changed_kharif_ragi_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_ragi_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;
        //Crop_Diversion_kharif_Ragi_Reduction_GW_Demand
        var ss = $('#Crop_Diversion_kharif_Ragi_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Ragi_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_ragi_waterdemand);
        $('#changed_kharif_ragi_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Ragi_Reduction_GW_Demand).toFixed(2));

    }

    //GroundNut
    $('#Crop_Diversion_kharif_GroundNut_water_Demand_value1').text("0");
    var GroundNut_Kharif_Value = $('#Crop_Diversion_kharif_GroundNut_UserVale1').val();
    var changed_kharif_groundnut_water_req = $('#changed_kharif_groundnut_water_req').val();
    if (changed_kharif_groundnut_water_req == "") {
        changed_kharif_groundnut_water_req = 0;
    }
    if (GroundNut_Kharif_Value != "") {
        changed_kharif_groundnut_waterdemand = parseInt(GroundNut_Kharif_Value) * parseFloat(changed_kharif_groundnut_water_req) * 0.001;
        $('#Crop_Diversion_kharif_GroundNut_water_Demand_value1').text(changed_kharif_groundnut_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_groundnut_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_GroundNut_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_GroundNut_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_groundnut_waterdemand);
        $('#changed_kharif_groundnut_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_GroundNut_Reduction_GW_Demand).toFixed(2));

    }

    //Sugarcane
    $('#Crop_Diversion_kharif_Sugarcane_water_Demand_value1').text("0");
    var Sugarcane_Paddy_UserValue = $('#Crop_Diversion_kharif_Sugarcane_UserVale1').val();
    var changed_kharif_sugarcane_water_req = $('#changed_kharif_sugarcane_water_req').val();
    if (changed_kharif_sugarcane_water_req == "") {
        changed_kharif_sugarcane_water_req = 0;
    }
    if (Sugarcane_Paddy_UserValue != "") {
        changed_kharif_sugarcane_waterdemand = parseInt(Sugarcane_Paddy_UserValue) * parseFloat(changed_kharif_sugarcane_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Sugarcane_water_Demand_value1').text(changed_kharif_sugarcane_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_sugarcane_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Sugarcane_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Sugarcane_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_sugarcane_waterdemand);
        $('#changed_kharif_sugarcane_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Sugarcane_Reduction_GW_Demand).toFixed(2));

    }
    //Tomato
    $('#Crop_Diversion_kharif_Tomato_water_Demand_value1').text("0");
    var Tomato_Kharif_Value = $('#Crop_Diversion_kharif_Tomato_UserVale1').val();
    var changed_kharif_tomoto_water_req = $('#changed_kharif_tomoto_water_req').val();
    if (changed_kharif_tomoto_water_req == "") {
        changed_kharif_tomoto_water_req = 0;
    }
    if (Tomato_Kharif_Value != "") {
        changed_kharif_tomoto_waterdemand = parseInt(Tomato_Kharif_Value) * parseFloat(changed_kharif_tomoto_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Tomato_water_Demand_value1').text(changed_kharif_tomoto_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_tomoto_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;
        var ss = $('#Crop_Diversion_kharif_Tomato_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Tomato_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_tomoto_waterdemand);
        $('#changed_kharif_tomoto_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Sugarcane_Reduction_GW_Demand).toFixed(2));

    }
    //Cabbage
    //$('#Crop_Diversion_kharif_Cabbage_water_Demand_value1').text("0");
    //var Cabbage_Kharif_Value = $('#Crop_Diversion_kharif_Cabbage_UserVale1').val();
    //var changed_kharif_cabbage_water_req = $('#changed_kharif_cabbage_water_req').val();
    //if (changed_kharif_cabbage_water_req == "") {
    //    changed_kharif_cabbage_water_req = 0;
    //}
    //if (Cabbage_Kharif_Value != "") {
    //    changed_kharif_cabbage_waterdemand = parseInt(Cabbage_Kharif_Value) * parseFloat(changed_kharif_cabbage_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Cabbage_water_Demand_value1').text(changed_kharif_cabbage_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_cabbage_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

    //    var ss = $('#Crop_Diversion_kharif_Cabbage_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_kharif_Cabbage_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_cabbage_waterdemand);
    //    $('#changed_kharif_cabbage_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Cabbage_Reduction_GW_Demand).toFixed(2));

    //}

    //Beans
    //$('#Crop_Diversion_kharif_Beans_water_Demand_value1').text("0");
    //var Beans_Kharif_Value = $('#Crop_Diversion_kharif_Beans_UserVale1').val();
    //var changed_kharif_beans_water_req = $('#changed_kharif_beans_water_req').val();
    //if (changed_kharif_beans_water_req == "") {
    //    changed_kharif_beans_water_req = 0;
    //}
    //if (Beans_Kharif_Value != "") {
    //    changed_kharif_beans_waterdemand = parseInt(Beans_Kharif_Value) * parseFloat(changed_kharif_beans_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Beans_water_Demand_value1').text(changed_kharif_beans_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_beans_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;
    //    var ss = $('#Crop_Diversion_kharif_Beans_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_kharif_Beans_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_beans_waterdemand);
    //    $('#changed_kharif_beans_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Cabbage_Reduction_GW_Demand).toFixed(2));

    //}

    //Floriculture
    $('#Crop_Diversion_kharif_Floriculture_water_Demand_value1').text("0");
    var Floriculture_Kharif_Value = $('#Crop_Diversion_kharif_Floriculture_UserVale1').val();
    var changed_kharif_floriculture_water_req = $('#changed_kharif_floriculture_water_req').val();
    if (changed_kharif_floriculture_water_req == "") {
        changed_kharif_floriculture_water_req = 0;
    }
    if (Floriculture_Kharif_Value != "") {
        changed_kharif_floriculture_waterdemand = parseInt(Floriculture_Kharif_Value) * parseFloat(changed_kharif_floriculture_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Floriculture_water_Demand_value1').text(changed_kharif_floriculture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_floriculture_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;
        var ss = $('#Crop_Diversion_kharif_Floriculture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Floriculture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_floriculture_waterdemand);
        $('#changed_kharif_floriculture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Floriculture_Reduction_GW_Demand).toFixed(2));

    }




    //Sericulture
    $('#Crop_Diversion_kharif_Sericulture_water_Demand_value1').text("0");
    var Sericulture_Kharif_Value = $('#Crop_Diversion_kharif_Sericulture_UserVale1').val();
    var changed_kharif_sericulture_water_req = $('#changed_kharif_sericulture_water_req').val();
    if (changed_kharif_sericulture_water_req == "") {
        changed_kharif_sericulture_water_req = 0;
    }
    if (Sericulture_Kharif_Value != "") {
        changed_kharif_sericulture_waterdemand = parseInt(Sericulture_Kharif_Value) * parseFloat(changed_kharif_sericulture_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Sericulture_water_Demand_value1').text(changed_kharif_sericulture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_sericulture_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Sericulture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Sericulture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_sericulture_waterdemand);
        $('#changed_kharif_sericulture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Sericulture_Reduction_GW_Demand).toFixed(2));

    }

    // Cucmber
    //$('#Crop_Diversion_kharif_Cucmber_water_Demand_value1').text("0");
    //var Cucmber_Kharif_Value = $('#Crop_Diversion_kharif_Cucmber_UserVale1').val();
    //var changed_kharif_cucumber_water_req = $('#changed_kharif_cucumber_water_req').val();
    //if (changed_kharif_cucumber_water_req == "") {
    //    changed_kharif_cucumber_water_req = 0;
    //}
    //if (Cucmber_Kharif_Value != "") {
    //    changed_kharif_cucumber_waterdemand = parseInt(Cucmber_Kharif_Value) * parseFloat(changed_kharif_cucumber_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Cucmber_water_Demand_value1').text(changed_kharif_cucumber_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_cucumber_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

    //    var ss = $('#Crop_Diversion_kharif_Cucmber_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_kharif_Cucmber_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_cucumber_waterdemand);
    //    $('#changed_kharif_cucumber_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Cucmber_Reduction_GW_Demand).toFixed(2));

    //}

    //Banana
    $('#Crop_Diversion_kharif_Banana_water_Demand_value1').text("0");
    var Banana_Kharif_Value = $('#Crop_Diversion_kharif_Banana_UserVale1').val();
    var changed_kharif_banana_water_req = $('#changed_kharif_banana_water_req').val();
    if (changed_kharif_banana_water_req == "") {
        changed_kharif_banana_water_req = 0;
    }
    if (Banana_Kharif_Value != "") {
        changed_kharif_banana_waterdemand = parseInt(Banana_Kharif_Value) * parseFloat(changed_kharif_banana_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Banana_water_Demand_value1').text(changed_kharif_banana_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_banana_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Banana_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Banana_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_banana_waterdemand);
        $('#changed_kharif_banana_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Banana_Reduction_GW_Demand).toFixed(2));

    }

    //Fodder
    $('#Crop_Diversion_kharif_Fodder_water_Demand_value1').text("0");
    var Fodder_Kharif_Value = $('#Crop_Diversion_kharif_Fodder_UserVale1').val();

    var changed_kharif_fodder_water_req = $('#changed_kharif_fodder_water_req').val();
    if (changed_kharif_fodder_water_req == "") {
        changed_kharif_fodder_water_req = 0;
    }
    if (Fodder_Kharif_Value != "") {
        changed_kharif_fodder_waterdemand = parseInt(Fodder_Kharif_Value) * parseFloat(changed_kharif_fodder_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Fodder_water_Demand_value1').text(changed_kharif_fodder_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_fodder_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Fodder_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Fodder_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_fodder_waterdemand);
        $('#changed_kharif_fodder_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Fodder_Reduction_GW_Demand).toFixed(2));

    }

    //Maize
    $('#Crop_Diversion_kharif_Maize_water_Demand_value1').text("0");
    var Maize_Kharif_Value = $('#Crop_Diversion_kharif_Maize_UserVale1').val();

    var changed_kharif_maize_water_req = $('#changed_kharif_maize_water_req').val();
    if (changed_kharif_maize_water_req == "") {
        changed_kharif_maize_water_req = 0;
    }
    if (Maize_Kharif_Value != "") {
        changed_kharif_maize_waterdemand = parseInt(Maize_Kharif_Value) * parseFloat(changed_kharif_maize_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Maize_water_Demand_value1').text(changed_kharif_maize_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_maize_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Maize_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Maize_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_maize_waterdemand);
        $('#changed_kharif_maize_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Maize_Reduction_GW_Demand).toFixed(2));

    }

    //Potato
    //$('#Crop_Diversion_kharif_Potato_water_Demand_value1').text("0");
    //var Potato_Kharif_Value = $('#Crop_Diversion_kharif_Potato_UserVale1').val();
    //var changed_kharif_potato_water_req = $('#changed_kharif_potato_water_req').val();
    //if (changed_kharif_potato_water_req == "") {
    //    changed_kharif_potato_water_req = 0;
    //}
    //if (Potato_Kharif_Value != "") {
    //    changed_kharif_potato_waterdemand = parseInt(Potato_Kharif_Value) * parseFloat(changed_kharif_potato_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Potato_water_Demand_value1').text(changed_kharif_potato_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_potato_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;
    //    var ss = $('#Crop_Diversion_kharif_Potato_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_kharif_Potato_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_potato_waterdemand);
    //    $('#changed_kharif_potato_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Potato_Reduction_GW_Demand).toFixed(2));

    //}
    //Chillies
    $('#Crop_Diversion_kharif_Chillies_water_Demand_value1').text("0");
    var Chillies_Kharif_Value = $('#Crop_Diversion_kharif_Chillies_UserVale1').val();
    var changed_kharif_chillies_water_req = $('#changed_kharif_chillies_water_req').val();
    if (changed_kharif_chillies_water_req == "") {
        changed_kharif_chillies_water_req = 0;
    }
    if (Chillies_Kharif_Value != "") {
        changed_kharif_chillies_waterdemand = parseInt(Chillies_Kharif_Value) * parseFloat(changed_kharif_chillies_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Chillies_water_Demand_value1').text(changed_kharif_chillies_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_chillies_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Chillies_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Chillies_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_chillies_waterdemand);
        $('#changed_kharif_chillies_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Chillies_Reduction_GW_Demand).toFixed(2));

    }

    //Cotton
    $('#Crop_Diversion_kharif_Cotton_water_Demand_value1').text("0");
    var Cotton_Kharif_Value = $('#Crop_Diversion_kharif_Cotton_UserVale1').val();
    var changed_kharif_cotton_water_req = $('#changed_kharif_cotton_water_req').val();
    if (changed_kharif_cotton_water_req == "") {
        changed_kharif_cotton_water_req = 0;
    }

    if (Cotton_Kharif_Value != "") {
        changed_kharif_cotton_waterdemand = parseInt(Cotton_Kharif_Value) * parseFloat(changed_kharif_cotton_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Cotton_water_Demand_value1').text(changed_kharif_cotton_waterdemand.toFixed(2));
        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_cotton_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Cotton_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Cotton_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_cotton_waterdemand);
        $('#changed_kharif_cotton_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Cotton_Reduction_GW_Demand).toFixed(2));

    }

    //Melon
    $('#Crop_Diversion_kharif_Melon_water_Demand_value1').text("0");
    var Melon_Kharif_Value = $('#Crop_Diversion_kharif_Melon_UserVale1').val();
    var changed_kharif_melon_water_req = $('#changed_kharif_melon_water_req').val();
    if (changed_kharif_melon_water_req == "") {
        changed_kharif_melon_water_req = 0;
    }
    if (Melon_Kharif_Value != "") {
        changed_kharif_melon_waterdemand = parseInt(Melon_Kharif_Value) * parseFloat(changed_kharif_melon_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Melon_water_Demand_value1').text(changed_kharif_melon_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_melon_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Melon_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Melon_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_melon_waterdemand);
        $('#changed_kharif_melon_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Melon_Reduction_GW_Demand).toFixed(2));

    }




    //Citrus
    $('#Crop_Diversion_kharif_Citrus_water_Demand_value1').text("0");
    var Citrus_Kharif_Value = $('#Crop_Diversion_kharif_Citrus_UserVale1').val();
    var changed_kharif_citrus_water_req = $('#changed_kharif_citrus_water_req').val();
    if (changed_kharif_citrus_water_req == "") {
        changed_kharif_citrus_water_req = 0;
    }
    if (Citrus_Kharif_Value != "") {
        changed_kharif_citrus_waterdemand = parseInt(Citrus_Kharif_Value) * parseFloat(changed_kharif_citrus_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Citrus_water_Demand_value1').text(changed_kharif_citrus_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_citrus_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

        var ss = $('#Crop_Diversion_kharif_Citrus_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Citrus_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_citrus_waterdemand);
        $('#changed_kharif_citrus_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Citrus_Reduction_GW_Demand).toFixed(2));

    }

    // Peanut
    //$('#Crop_Diversion_kharif_Peanut_water_Demand_value1').text("0");
    //var Peanut_Kharif_Value = $('#Crop_Diversion_kharif_Peanut_UserVale1').val();
    //var changed_kharif_peanut_water_req = $('#changed_kharif_peanut_water_req').val();
    //if (changed_kharif_peanut_water_req == "") {
    //    changed_kharif_peanut_water_req = 0;
    //}
    //if (Peanut_Kharif_Value != "") {
    //    changed_kharif_peanut_waterdemand = parseInt(Peanut_Kharif_Value) * parseFloat(changed_kharif_peanut_water_req) * 0.001;
    //    $('#Crop_Diversion_kharif_Peanut_water_Demand_value1').text(changed_kharif_peanut_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_peanut_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

    //    var ss = $('#Crop_Diversion_kharif_Peanut_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_kharif_Peanut_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_peanut_waterdemand);
    //    $('#changed_kharif_peanut_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Peanut_Reduction_GW_Demand).toFixed(2));

    //}

    //Horticulture
    $('#Crop_Diversion_kharif_Horticulture_water_Demand_value1').text("0");
    var Horticulture_Kharif_Value = $('#Crop_Diversion_kharif_Horticulture_UserVale1').val();
    var changed_kharif_horticulture_water_req = $('#changed_kharif_horticulture_water_req').val();
    if (changed_kharif_horticulture_water_req == "") {
        changed_kharif_horticulture_water_req = 0;
    }
    if (Horticulture_Kharif_Value != "") {
        changed_kharif_horticulture_waterdemand = parseInt(Horticulture_Kharif_Value) * parseFloat(changed_kharif_horticulture_water_req) * 0.001;
        $('#Crop_Diversion_kharif_Horticulture_water_Demand_value1').text(changed_kharif_horticulture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_horticulture_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;


        var ss = $('#Crop_Diversion_kharif_Horticulture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_kharif_Horticulture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_kharif_horticulture_waterdemand);
        $('#changed_kharif_horticulture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_kharif_Horticulture_Reduction_GW_Demand).toFixed(2));

    }

    //other crop
    //var changed_kharif_croparea_area = $('#changed_kharif_croparea_area').val();
    //var changed_kharif_othercrop_water_req = $('#changed_kharif_othercrop_water_req').val();
    //if (changed_kharif_othercrop_water_req == "") {
    //    changed_kharif_othercrop_water_req = 0;
    //}
    //if (changed_kharif_croparea_area != "") {
    //    var changed_kharif_othercrop_waterdemand = parseInt(changed_kharif_croparea_area) * parseFloat(changed_kharif_othercrop_water_req) * 0.001;
    //    $('#changed_kharif_othercrop_waterdemand').text(changed_kharif_othercrop_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1 = changed_kharif_othercrop_waterdemand + Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;

    //}



    changed_kharif_total_waterdemand = Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1;


    $('#Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1').text(Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1.toFixed(2));



    $('#Crop_Diversion_Kharif_Water_demand').text(Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_.toFixed(2));


    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text();;

    if (Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 == "") {
        Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = 0;
    }

    var TotalAnnual_Crop_Diversion_Reduction = parseFloat(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1);
    $('#TotalAnnual_Crop_Diversion_Reduction').text(TotalAnnual_Crop_Diversion_Reduction.toFixed(2));

    Calculation();
}

//Original Crop


function Crop_Diversion_Rabi_WaterRequire() {

    original_rabi_sericulture_waterdemand = 0;
    original_rabi_tomoto_waterdemand = 0;
    original_rabi_cabbage_waterdemand = 0;
    original_rabi_beans_waterdemand = 0;

    original_rabi_floriculture_waterdemand = 0;
    original_rabi_potato_waterdemand = 0;
    original_rabi_cucumber_waterdemand = 0;
    original_rabi_ragi_waterdemand = 0;

    original_rabi_sugarcane_waterdemand = 0;
    original_rabi_maize_waterdemand = 0;
    original_rabi_fodder_waterdemand = 0;
    original_rabi_paddy_waterdemand = 0;

    original_rabi_alfalfa_waterdemand = 0;
    original_rabi_onion_waterdemand = 0;
    original_rabi_horticulture_waterdemand = 0;
    original_rabi_sunflower_waterdemand = 0;

    original_rabi_total_waterdemand = 0;
    original_rabi_total_gw_reduc_waterdemand = 0;

    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = 0;


    original_rabi_horticulture_waterdemand1 = 0;
    original_rabi_horticulture_waterdemand2 = 0;
    original_rabi_horticulture_waterdemand3 = 0;
    original_rabi_horticulture_waterdemand4 = 0;
    original_rabi_horticulture_waterdemand5 = 0;

    //Other
    var original_rabi_horticulture_water_req1 = $('#original_rabi_horticulture_water_req1').val();
    if (original_rabi_horticulture_water_req1 == "") {
        original_rabi_horticulture_water_req1 = 0;
    }
    if (typeof original_rabi_horticulture_water_req1 == 'undefined') {
        original_rabi_horticulture_water_req1 = 0;
    }
    var original_rabi_othercrop_area1 = $('#original_rabi_othercrop_area1').val();
    if (typeof original_rabi_othercrop_area1 == 'undefined') {
        original_rabi_othercrop_area1 = 0;
    }
    if (original_rabi_othercrop_area1 != "") {
        original_rabi_horticulture_waterdemand1 = parseInt(original_rabi_othercrop_area1) * parseFloat(original_rabi_horticulture_water_req1) * 0.001;
        $('#original_rabi_horticulture_waterdemand1').text(original_rabi_horticulture_waterdemand1.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = original_rabi_horticulture_waterdemand1 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops;
    }

    var original_rabi_horticulture_water_req2 = $('#original_rabi_horticulture_water_req2').val();
    if (typeof original_rabi_horticulture_water_req2 == 'undefined') {
        original_rabi_horticulture_water_req2 = 0;
    }
    if (original_rabi_horticulture_water_req2 == "") {
        original_rabi_horticulture_water_req2 = 0;
    }
    var original_rabi_othercrop_area2 = $('#original_rabi_othercrop_area2').val();
    if (typeof original_rabi_othercrop_area2 == 'undefined') {
        original_rabi_othercrop_area2 = 0;
    }
    if (original_rabi_othercrop_area2 != "") {
        original_rabi_horticulture_waterdemand2 = parseInt(original_rabi_othercrop_area2) * parseFloat(original_rabi_horticulture_water_req2) * 0.001;
        $('#original_rabi_horticulture_waterdemand2').text(original_rabi_horticulture_waterdemand2.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = original_rabi_horticulture_waterdemand2 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops;
    }
    var original_rabi_horticulture_water_req3 = $('#original_rabi_horticulture_water_req3').val();
    if (typeof original_rabi_horticulture_water_req3 == 'undefined') {
        original_rabi_horticulture_water_req3 = 0;
    }
    if (original_rabi_horticulture_water_req3 == "") {
        original_rabi_horticulture_water_req3 = 0;
    }
    var original_rabi_othercrop_area3 = $('#original_rabi_othercrop_area3').val();
    if (typeof original_rabi_othercrop_area3 == 'undefined') {
        original_rabi_othercrop_area3 = 0;
    }
    if (original_rabi_othercrop_area3 != "") {
        original_rabi_horticulture_waterdemand3 = parseInt(original_rabi_othercrop_area3) * parseFloat(original_rabi_horticulture_water_req3) * 0.001;
        $('#original_rabi_horticulture_waterdemand3').text(original_rabi_horticulture_waterdemand3.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = original_rabi_horticulture_waterdemand3 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops;
    }

    var original_rabi_horticulture_water_req4 = $('#original_rabi_horticulture_water_req4').val();
    if (typeof original_rabi_horticulture_water_req4 == 'undefined') {
        original_rabi_horticulture_water_req4 = 0;
    }
    if (original_rabi_horticulture_water_req4 == "") {
        original_rabi_horticulture_water_req4 = 0;
    }
    var original_rabi_othercrop_area4 = $('#original_rabi_othercrop_area4').val();
    if (typeof original_rabi_othercrop_area4 == 'undefined') {
        original_rabi_othercrop_area4 = 0;
    }
    if (original_rabi_othercrop_area4 != "") {
        original_rabi_horticulture_waterdemand4 = parseInt(original_rabi_othercrop_area4) * parseFloat(original_rabi_horticulture_water_req4) * 0.001;
        $('#original_rabi_horticulture_waterdemand4').text(original_rabi_horticulture_waterdemand4.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = original_rabi_horticulture_waterdemand4 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops;
    }

    var original_rabi_horticulture_water_req5 = $('#original_rabi_horticulture_water_req5').val();
    if (typeof original_rabi_horticulture_water_req5 == 'undefined') {
        original_rabi_horticulture_water_req5 = 0;
    }
    if (original_rabi_horticulture_water_req5 == "") {
        original_rabi_horticulture_water_req5 = 0;
    }
    var original_rabi_othercrop_area5 = $('#original_rabi_othercrop_area5').val();
    if (typeof original_rabi_othercrop_area5 == 'undefined') {
        original_rabi_othercrop_area5 = 0;
    }
    if (original_rabi_othercrop_area5 != "") {
        original_rabi_horticulture_waterdemand5 = parseInt(original_rabi_othercrop_area5) * parseFloat(original_rabi_horticulture_water_req5) * 0.001;
        $('#original_rabi_horticulture_waterdemand5').text(original_rabi_horticulture_waterdemand5.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = original_rabi_horticulture_waterdemand5 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops;
    }


    //Sericulture
    $('#Crop_Diversion_Rabi_Sericulture_water_Demand_value').text("0");
    var Sericulture_Rabi_Value = $('#Crop_Diversion_Rabi_Sericulture_UserVale').val();
    var original_rabi_sericulture_water_req = $('#original_rabi_sericulture_water_req').val();
    if (original_rabi_sericulture_water_req == "") {
        original_rabi_sericulture_water_req = 0;
    }
    if (Sericulture_Rabi_Value != "") {
        original_rabi_sericulture_waterdemand = parseInt(Sericulture_Rabi_Value) * parseFloat(original_rabi_sericulture_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Sericulture_water_Demand_value').text(original_rabi_sericulture_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_sericulture_waterdemand;
    }
    //Tomota
    $('#Crop_Diversion_Rabi_Tomota_water_Demand_value').text("0");
    var Tomota_Rabi_Value = $('#Crop_Diversion_Rabi_Tomota_UserVale').val();

    var original_rabi_tomoto_water_req = $('#original_rabi_tomoto_water_req').val();
    if (original_rabi_tomoto_water_req == "") {
        original_rabi_tomoto_water_req = 0;
    }

    if (Tomota_Rabi_Value != "") {
        original_rabi_tomoto_waterdemand = parseInt(Tomota_Rabi_Value) * parseFloat(original_rabi_tomoto_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Tomota_water_Demand_value').text(original_rabi_tomoto_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_tomoto_waterdemand;

    }

    //Cabbage
    //$('#Crop_Diversion_Rabi_Cabbage_water_Demand_value').text("0");
    //var Cabbage_Rabi_Value = $('#Crop_Diversion_Rabi_Cabbage_UserVale').val();
    //var original_rabi_cabbage_water_req = $('#original_rabi_cabbage_water_req').val();
    //if (original_rabi_cabbage_water_req == "") {
    //    original_rabi_cabbage_water_req = 0;
    //}

    //if (Cabbage_Rabi_Value != "") {
    //    original_rabi_cabbage_waterdemand = parseInt(Cabbage_Rabi_Value) * parseFloat(original_rabi_cabbage_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Cabbage_water_Demand_value').text(original_rabi_cabbage_waterdemand.toFixed(2));

    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_cabbage_waterdemand;

    //}

    ////Beans
    //$('#Crop_Diversion_Rabi_Beans_water_Demand_value').text("0");
    //var Beans_Rabi_Value = $('#Crop_Diversion_Rabi_Beans_UserVale').val();
    //var original_rabi_beans_water_req = $('#original_rabi_beans_water_req').val();
    //if (original_rabi_beans_water_req == "") {
    //    original_rabi_beans_water_req = 0;
    //}
    //if (Beans_Rabi_Value != "") {
    //    original_rabi_beans_waterdemand = parseInt(Beans_Rabi_Value) * parseFloat(original_rabi_beans_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Beans_water_Demand_value').text(original_rabi_beans_waterdemand.toFixed(2));
    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_beans_waterdemand;

    //}
    //Floriculture
    $('#Crop_Diversion_Rabi_Floriculture_water_Demand_value').text("0");
    var Floriculture_Rabi_Value = $('#Crop_Diversion_Rabi_Floriculture_UserVale').val();
    var original_rabi_floriculture_water_req = $('#original_rabi_floriculture_water_req').val();
    if (original_rabi_floriculture_water_req == "") {
        original_rabi_floriculture_water_req = 0;
    }
    if (Floriculture_Rabi_Value != "") {
        original_rabi_floriculture_waterdemand = parseInt(Floriculture_Rabi_Value) * parseFloat(original_rabi_floriculture_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Floriculture_water_Demand_value').text(original_rabi_floriculture_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_floriculture_waterdemand;

    }

    //Potato
    //$('#Crop_Diversion_Rabi_Potato_water_Demand_value').text("0");
    //var Potato_Rabi_Value = $('#Crop_Diversion_Rabi_Potato_UserVale').val();
    //var original_rabi_potato_water_req = $('#original_rabi_potato_water_req').val();
    //if (original_rabi_potato_water_req == "") {
    //    original_rabi_potato_water_req = 0;
    //}
    //if (Potato_Rabi_Value != "") {
    //    original_rabi_potato_waterdemand = parseInt(Potato_Rabi_Value) * parseFloat(original_rabi_potato_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Potato_water_Demand_value').text(original_rabi_potato_waterdemand.toFixed(2));


    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_potato_waterdemand;

    //}

    ////Cucumber
    //$('#Crop_Diversion_Rabi_Cucumber_water_Demand_value').text("0");
    //var Cucumber_Rabi_Value = $('#Crop_Diversion_Rabi_Cucumber_UserVale').val();
    //var original_rabi_cucumber_water_req = $('#original_rabi_cucumber_water_req').val();
    //if (original_rabi_cucumber_water_req == "") {
    //    original_rabi_cucumber_water_req = 0;
    //}
    //if (Cucumber_Rabi_Value != "") {
    //    original_rabi_cucumber_waterdemand = parseInt(Cucumber_Rabi_Value) * parseFloat(original_rabi_cucumber_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Cucumber_water_Demand_value').text(original_rabi_cucumber_waterdemand.toFixed(2));
    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_cucumber_waterdemand;

    //}

    //Ragi
    $('#Crop_Diversion_Rabi_Ragi_water_Demand_value').text("0");
    var Ragi_Rabi_Value = $('#Crop_Diversion_Rabi_Ragi_UserVale').val();
    var original_rabi_ragi_water_req = $('#original_rabi_ragi_water_req').val();
    if (original_rabi_ragi_water_req == "") {
        original_rabi_ragi_water_req = 0;
    }
    if (Ragi_Rabi_Value != "") {
        original_rabi_ragi_waterdemand = parseInt(Ragi_Rabi_Value) * parseFloat(original_rabi_ragi_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Ragi_water_Demand_value').text(original_rabi_ragi_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_ragi_waterdemand;

    }

    //Sugarcane
    $('#Crop_Diversion_Rabi_Sugarcane_water_Demand_value').text("0");
    var Sugarcane_Rabi_Value = $('#Crop_Diversion_Rabi_Sugarcane_UserVale').val();

    var original_rabi_sugarcane_water_req = $('#original_rabi_sugarcane_water_req').val();
    if (original_rabi_sugarcane_water_req == "") {
        original_rabi_sugarcane_water_req = 0;
    }

    if (Sugarcane_Rabi_Value != "") {
        original_rabi_sugarcane_waterdemand = parseInt(Sugarcane_Rabi_Value) * parseFloat(original_rabi_sugarcane_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Sugarcane_water_Demand_value').text(original_rabi_sugarcane_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Total_Water_Demand_for_Rabi_Crops + original_rabi_sugarcane_waterdemand;

    }

    //Maize
    $('#Crop_Diversion_Rabi_Maize_water_Demand_value').text("0");
    var Maize_Rabi_Value = $('#Crop_Diversion_Rabi_Maize_UserVale').val();
    var original_rabi_maize_water_req = $('#original_rabi_maize_water_req').val();
    if (original_rabi_maize_water_req == "") {
        original_rabi_maize_water_req = 0;
    }
    if (Maize_Rabi_Value != "") {
        original_rabi_maize_waterdemand = parseInt(Maize_Rabi_Value) * parseFloat(original_rabi_maize_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Maize_water_Demand_value').text(original_rabi_maize_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_maize_waterdemand;


    }

    //Fodder
    $('#Crop_Diversion_Rabi_Fodder_water_Demand_value').text("0");
    var Fodder_Rabi_Value = $('#Crop_Diversion_Rabi_Fodder_UserVale').val();
    var original_rabi_fodder_water_req = $('#original_rabi_fodder_water_req').val();
    if (original_rabi_fodder_water_req == "") {
        original_rabi_fodder_water_req = 0;
    }
    if (Fodder_Rabi_Value != "") {
        original_rabi_fodder_waterdemand = parseInt(Fodder_Rabi_Value) * parseFloat(original_rabi_fodder_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Fodder_water_Demand_value').text(original_rabi_fodder_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_fodder_waterdemand;

    }

    //Paddy
    $('#Crop_Diversion_Rabi_Paddy_water_Demand_value').text("0");
    var Paddy_Rabi_Value = $('#Crop_Diversion_Rabi_Paddy_UserVale').val();
    var original_rabi_paddy_water_req = $('#original_rabi_paddy_water_req').val();
    if (original_rabi_paddy_water_req == "") {
        original_rabi_paddy_water_req = 0;
    }
    if (Paddy_Rabi_Value != "") {
        original_rabi_paddy_waterdemand = parseInt(Paddy_Rabi_Value) * parseFloat(original_rabi_paddy_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Paddy_water_Demand_value').text(original_rabi_paddy_waterdemand.toFixed(2));
        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_paddy_waterdemand;

    }

    //Alfalfa
    $('#Crop_Diversion_Rabi_Alfalfa_water_Demand_value').text("0");
    var Alfalfa_Rabi_Value = $('#Crop_Diversion_Rabi_Alfalfa_UserVale').val();
    var original_rabi_alfalfa_water_req = $('#original_rabi_alfalfa_water_req').val();
    if (original_rabi_alfalfa_water_req == "") {
        original_rabi_alfalfa_water_req = 0;
    }
    if (Alfalfa_Rabi_Value != "") {
        original_rabi_alfalfa_waterdemand = parseInt(Alfalfa_Rabi_Value) * parseFloat(original_rabi_alfalfa_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Alfalfa_water_Demand_value').text(original_rabi_alfalfa_waterdemand.toFixed(2));


        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_alfalfa_waterdemand;

    }


    //Onion
    //$('#Crop_Diversion_Rabi_Onion_water_Demand_value').text("0");
    //var Onion_Rabi_Value = $('#Crop_Diversion_Rabi_Onion_UserVale').val();
    //var original_rabi_onion_water_req = $('#original_rabi_onion_water_req').val();
    //if (original_rabi_onion_water_req == "") {
    //    original_rabi_onion_water_req = 0;
    //}
    //if (Onion_Rabi_Value != "") {
    //    original_rabi_onion_waterdemand = parseInt(Onion_Rabi_Value) * parseFloat(original_rabi_onion_water_req) * 0.001;

    //    $('#Crop_Diversion_Rabi_Onion_water_Demand_value').text(original_rabi_onion_waterdemand.toFixed(2));

    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_onion_waterdemand;

    //}

    //Hortculture
    $('#Crop_Diversion_Rabi_Hortculture_water_Demand_value').text("0");
    var Hortculture_Rabi_Value = $('#Crop_Diversion_Rabi_Hortculture_UserVale').val();
    var original_rabi_horticulture_water_req = $('#original_rabi_horticulture_water_req').val();
    if (original_rabi_horticulture_water_req == "") {
        original_rabi_horticulture_water_req = 0;
    }
    if (Hortculture_Rabi_Value != "") {
        original_rabi_horticulture_waterdemand = parseInt(Hortculture_Rabi_Value) * parseFloat(original_rabi_horticulture_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Hortculture_water_Demand_value').text(original_rabi_horticulture_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_horticulture_waterdemand;

    }

    //Sunflower
    $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value').text("0");
    var Sunflower_Rabi_Value = $('#Crop_Diversion_Rabi_Sunflower_UserVale').val();
    var original_rabi_sunflower_water_req = $('#original_rabi_sunflower_water_req').val();
    if (original_rabi_sunflower_water_req == "") {
        original_rabi_sunflower_water_req = 0;
    }
    if (Sunflower_Rabi_Value != "") {
        original_rabi_sunflower_waterdemand = parseInt(Sunflower_Rabi_Value) * parseFloat(original_rabi_sunflower_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value').text(original_rabi_sunflower_waterdemand.toFixed(2));


        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_sunflower_waterdemand;

    }
    //other crop

    //var original_rabi_othercrop_area = $('#original_rabi_othercrop_area').val();
    //var original_rabi_othercrop_water_req = $('#original_rabi_othercrop_water_req').val();
    //if (original_rabi_othercrop_water_req == "") {
    //    original_rabi_othercrop_water_req = 0;
    //}
    //if (original_rabi_othercrop_area != "") {
    //    var original_rabi_othercrop_waterdemand = parseInt(original_rabi_othercrop_area) * parseFloat(original_rabi_othercrop_water_req) * 0.001;
    //    $('#original_rabi_othercrop_waterdemand').text(original_rabi_othercrop_waterdemand.toFixed(2));


    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops + original_rabi_othercrop_waterdemand;

    //}
    original_rabi_total_waterdemand = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops;


    $('#Crop_Diversion_Total_Water_Demand_for_Rabi_Crops').text(Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1.toFixed(2));

    $('#Crop_Diversion_Rabi_Water_demand').text(Crop_Diversion_Total_Water_Demand_for_Rabi_Crops.toFixed(2));

    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text();;

    if (Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 == "") {
        Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = 0;
    }

    var TotalAnnual_Crop_Diversion_Reduction = parseFloat(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1);
    $('#TotalAnnual_Crop_Diversion_Reduction').text(TotalAnnual_Crop_Diversion_Reduction.toFixed(2));

    Calculation();
}
//Changed Crop


function Crop_Diversion_Rabi_WaterRequire1() {

    changed_rabi_sericulture_waterdemand = 0;
    changed_rabi_tomoto_waterdemand = 0;
    changed_rabi_cabbage_waterdemand = 0;
    changed_rabi_beans_waterdemand = 0;

    changed_rabi_floriculture_waterdemand = 0;
    changed_rabi_potato_waterdemand = 0;
    changed_rabi_cucumber_waterdemand = 0;
    changed_rabi_ragi_waterdemand = 0;

    changed_rabi_sugarcane_waterdemand = 0;
    changed_rabi_maize_waterdemand = 0;
    changed_rabi_fodder_waterdemand = 0;
    changed_rabi_paddy_waterdemand = 0;

    changed_rabi_alfalfa_waterdemand = 0;
    changed_rabi_onion_waterdemand = 0;
    changed_rabi_horticulture_waterdemand = 0;
    changed_rabi_sunflower_waterdemand = 0;


    changed_rabi_total_waterdemand = 0;
    changed_rabi_total_gw_reduc_waterdemand = 0;

    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = 0;

    changed_rabi_horticulture_waterdemand1 = 0;
    changed_rabi_horticulture_reduction_gw_demand1 = 0;
    changed_rabi_horticulture_waterdemand2 = 0;
    changed_rabi_horticulture_reduction_gw_demand2 = 0;
    changed_rabi_horticulture_waterdemand3 = 0;
    changed_rabi_horticulture_reduction_gw_demand3 = 0;
    changed_rabi_horticulture_waterdemand4 = 0;
    changed_rabi_horticulture_reduction_gw_demand4 = 0;
    changed_rabi_horticulture_waterdemand5 = 0;
    changed_rabi_horticulture_reduction_gw_demand5 = 0;


    //Other

    var changed_rabi_croparea_area1 = $('#changed_rabi_croparea_area1').val();
    if (typeof changed_rabi_croparea_area1 == 'undefined') {
        changed_rabi_croparea_area1 = 0;
    }
    var changed_rabi_horticulture_water_req1 = $('#changed_rabi_horticulture_water_req1').val();
    if (typeof changed_rabi_horticulture_water_req1 == 'undefined') {
        changed_rabi_horticulture_water_req1 = 0;
    }
    if (changed_rabi_horticulture_water_req1 == "") {
        changed_rabi_horticulture_water_req1 = 0;
    }

    if (changed_rabi_croparea_area1 != "") {
        changed_rabi_horticulture_waterdemand1 = parseInt(changed_rabi_croparea_area1) * parseFloat(changed_rabi_horticulture_water_req1) * 0.001;
        $('#changed_rabi_horticulture_waterdemand1').text(changed_rabi_horticulture_waterdemand1.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = changed_rabi_horticulture_waterdemand1 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1;

        //rabi_Paddy_SavingValue
        var ss = $('#original_rabi_horticulture_waterdemand1').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_rabi_horticulture_reduction_gw_demand1 = parseFloat(ss) - parseFloat(changed_rabi_horticulture_waterdemand1);
        $('#changed_rabi_horticulture_reduction_gw_demand1').text(parseFloat(changed_rabi_horticulture_reduction_gw_demand1).toFixed(2));

    }
    var changed_rabi_croparea_area2 = $('#changed_rabi_croparea_area2').val();
    if (typeof changed_rabi_croparea_area2 == 'undefined') {
        changed_rabi_croparea_area2 = 0;
    }
    var changed_rabi_horticulture_water_req2 = $('#changed_rabi_horticulture_water_req2').val();
    if (typeof changed_rabi_horticulture_water_req2 == 'undefined') {
        changed_rabi_horticulture_water_req2 = 0;
    }
    if (changed_rabi_horticulture_water_req2 == "") {
        changed_rabi_horticulture_water_req2 = 0;
    }

    if (changed_rabi_croparea_area2 != "") {
        changed_rabi_horticulture_waterdemand2 = parseInt(changed_rabi_croparea_area2) * parseFloat(changed_rabi_horticulture_water_req2) * 0.001;
        $('#changed_rabi_horticulture_waterdemand2').text(changed_rabi_horticulture_waterdemand2.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = changed_rabi_horticulture_waterdemand2 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1;

        //rabi_Paddy_SavingValue
        var ss = $('#original_rabi_horticulture_waterdemand2').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_rabi_horticulture_reduction_gw_demand2 = parseFloat(ss) - parseFloat(changed_rabi_horticulture_waterdemand2);
        $('#changed_rabi_horticulture_reduction_gw_demand2').text(parseFloat(changed_rabi_horticulture_reduction_gw_demand2).toFixed(2));

    }

    var changed_rabi_croparea_area3 = $('#changed_rabi_croparea_area3').val();
    if (typeof changed_rabi_croparea_area3 == 'undefined') {
        changed_rabi_croparea_area3 = 0;
    }
    var changed_rabi_horticulture_water_req3 = $('#changed_rabi_horticulture_water_req3').val();
    if (typeof changed_rabi_horticulture_water_req3 == 'undefined') {
        changed_rabi_horticulture_water_req3 = 0;
    }
    if (changed_rabi_horticulture_water_req3 == "") {
        changed_rabi_horticulture_water_req3 = 0;
    }

    if (changed_rabi_croparea_area3 != "") {
        changed_rabi_horticulture_waterdemand3 = parseInt(changed_rabi_croparea_area3) * parseFloat(changed_rabi_horticulture_water_req3) * 0.001;
        $('#changed_rabi_horticulture_waterdemand3').text(changed_rabi_horticulture_waterdemand3.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = changed_rabi_horticulture_waterdemand3 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1;

        //rabi_Paddy_SavingValue
        var ss = $('#original_rabi_horticulture_waterdemand3').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_rabi_horticulture_reduction_gw_demand3 = parseFloat(ss) - parseFloat(changed_rabi_horticulture_waterdemand3);
        $('#changed_rabi_horticulture_reduction_gw_demand3').text(parseFloat(changed_rabi_horticulture_reduction_gw_demand3).toFixed(2));

    }

    var changed_rabi_croparea_area4 = $('#changed_rabi_croparea_area4').val();
    if (typeof changed_rabi_croparea_area4 == 'undefined') {
        changed_rabi_croparea_area4 = 0;
    }

    var changed_rabi_horticulture_water_req4 = $('#changed_rabi_horticulture_water_req4').val();
    if (typeof changed_rabi_horticulture_water_req4 == 'undefined') {
        changed_rabi_horticulture_water_req4 = 0;
    }
    if (changed_rabi_horticulture_water_req4 == "") {
        changed_rabi_horticulture_water_req4 = 0;
    }

    if (changed_rabi_croparea_area4 != "") {
        changed_rabi_horticulture_waterdemand4 = parseInt(changed_rabi_croparea_area4) * parseFloat(changed_rabi_horticulture_water_req4) * 0.001;
        $('#changed_rabi_horticulture_waterdemand4').text(changed_rabi_horticulture_waterdemand4.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = changed_rabi_horticulture_waterdemand4 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1;

        //rabi_Paddy_SavingValue
        var ss = $('#original_rabi_horticulture_waterdemand4').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_rabi_horticulture_reduction_gw_demand4 = parseFloat(ss) - parseFloat(changed_rabi_horticulture_waterdemand4);
        $('#changed_rabi_horticulture_reduction_gw_demand4').text(parseFloat(changed_rabi_horticulture_reduction_gw_demand4).toFixed(2));

    }

    var changed_rabi_croparea_area5 = $('#changed_rabi_croparea_area5').val();
    if (typeof changed_rabi_croparea_area5 == 'undefined') {
        changed_rabi_croparea_area5 = 0;
    }
    var changed_rabi_horticulture_water_req5 = $('#changed_rabi_horticulture_water_req5').val();
    if (typeof changed_rabi_horticulture_water_req5 == 'undefined') {
        changed_rabi_horticulture_water_req5 = 0;
    }
    if (changed_rabi_horticulture_water_req5 == "") {
        changed_rabi_horticulture_water_req5 = 0;
    }

    if (changed_rabi_croparea_area5 != "") {
        changed_rabi_horticulture_waterdemand5 = parseInt(changed_rabi_croparea_area5) * parseFloat(changed_rabi_horticulture_water_req5) * 0.001;
        $('#changed_rabi_horticulture_waterdemand5').text(changed_rabi_horticulture_waterdemand5.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = changed_rabi_horticulture_waterdemand5 + Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1;

        //rabi_Paddy_SavingValue
        var ss = $('#original_rabi_horticulture_waterdemand5').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_rabi_horticulture_reduction_gw_demand5 = parseFloat(ss) - parseFloat(changed_rabi_horticulture_waterdemand5);
        $('#changed_rabi_horticulture_reduction_gw_demand5').text(parseFloat(changed_rabi_horticulture_reduction_gw_demand5).toFixed(2));

    }







    //Sericulture
    $('#Crop_Diversion_Rabi_Sericulture_water_Demand_value1').text("0");
    var Sericulture_Rabi_Value = $('#Crop_Diversion_Rabi_Sericulture_UserVale1').val();
    var changed_rabi_sericulture_water_req = $('#changed_rabi_sericulture_water_req').val();
    if (changed_rabi_sericulture_water_req == "") {
        changed_rabi_sericulture_water_req = 0;
    }
    if (Sericulture_Rabi_Value != "") {
        changed_rabi_sericulture_waterdemand = parseInt(Sericulture_Rabi_Value) * parseFloat(changed_rabi_sericulture_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Sericulture_water_Demand_value1').text(changed_rabi_sericulture_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_sericulture_waterdemand;


        var ss = $('#Crop_Diversion_Rabi_Sericulture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Sericulture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_sericulture_waterdemand);
        $('#changed_rabi_sericulture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Sericulture_Reduction_GW_Demand).toFixed(2));

    }

    //Tomota
    $('#Crop_Diversion_Rabi_Tomota_water_Demand_value1').text("0");
    var Tomota_Rabi_Value = $('#Crop_Diversion_Rabi_Tomota_UserVale1').val();
    var changed_rabi_tomoto_water_req = $('#changed_rabi_tomoto_water_req').val();
    if (changed_rabi_tomoto_water_req == "") {
        changed_rabi_tomoto_water_req = 0;
    }
    if (Tomota_Rabi_Value != "") {
        changed_rabi_tomoto_waterdemand = parseInt(Tomota_Rabi_Value) * parseFloat(changed_rabi_tomoto_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Tomota_water_Demand_value1').text(changed_rabi_tomoto_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_tomoto_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Tomota_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Tomota_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_tomoto_waterdemand);
        $('#changed_rabi_tomoto_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Tomota_Reduction_GW_Demand).toFixed(2));

    }

    //Cabbage
    //$('#Crop_Diversion_Rabi_Cabbage_water_Demand_value1').text("0");
    //var Cabbage_Rabi_Value = $('#Crop_Diversion_Rabi_Cabbage_UserVale1').val();
    //var changed_rabi_cabbage_water_req = $('#changed_rabi_cabbage_water_req').val();
    //if (changed_rabi_cabbage_water_req == "") {
    //    changed_rabi_cabbage_water_req = 0;
    //}
    //if (Cabbage_Rabi_Value != "") {
    //    changed_rabi_cabbage_waterdemand = parseInt(Cabbage_Rabi_Value) * parseFloat(changed_rabi_cabbage_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Cabbage_water_Demand_value1').text(changed_rabi_cabbage_waterdemand.toFixed(2));

    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_cabbage_waterdemand;

    //    var ss = $('#Crop_Diversion_Rabi_Cabbage_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_Rabi_Cabbage_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_cabbage_waterdemand);
    //    $('#changed_rabi_cabbage_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Cabbage_Reduction_GW_Demand).toFixed(2));

    //}

    //Beans
    //$('#Crop_Diversion_Rabi_Beans_water_Demand_value1').text("0");
    //var Beans_Rabi_Value = $('#Crop_Diversion_Rabi_Beans_UserVale1').val();
    //var changed_rabi_beans_water_req = $('#changed_rabi_beans_water_req').val();
    //if (changed_rabi_beans_water_req == "") {
    //    changed_rabi_beans_water_req = 0;
    //}
    //if (Beans_Rabi_Value != "") {
    //    changed_rabi_beans_waterdemand = parseInt(Beans_Rabi_Value) * parseFloat(changed_rabi_beans_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Beans_water_Demand_value1').text(changed_rabi_beans_waterdemand.toFixed(2));
    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_beans_waterdemand;

    //    var ss = $('#Crop_Diversion_Rabi_Beans_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_Rabi_Beans_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_beans_waterdemand);
    //    $('#changed_rabi_beans_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Cabbage_Reduction_GW_Demand).toFixed(2));


    //}
    //Floriculture
    $('#Crop_Diversion_Rabi_Floriculture_water_Demand_value1').text("0");
    var Floriculture_Rabi_Value = $('#Crop_Diversion_Rabi_Floriculture_UserVale1').val();
    var changed_rabi_floriculture_water_req = $('#changed_rabi_floriculture_water_req').val();
    if (changed_rabi_floriculture_water_req == "") {
        changed_rabi_floriculture_water_req = 0;
    }
    if (Floriculture_Rabi_Value != "") {
        changed_rabi_floriculture_waterdemand = parseInt(Floriculture_Rabi_Value) * parseFloat(changed_rabi_floriculture_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Floriculture_water_Demand_value1').text(changed_rabi_floriculture_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_floriculture_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Floriculture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Floriculture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_floriculture_waterdemand);
        $('#changed_rabi_floriculture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Floriculture_Reduction_GW_Demand).toFixed(2));

    }

    //Potato
    //$('#Crop_Diversion_Rabi_Potato_water_Demand_value1').text("0");
    //var Potato_Rabi_Value = $('#Crop_Diversion_Rabi_Potato_UserVale1').val();
    //var changed_rabi_potato_water_req = $('#changed_rabi_potato_water_req').val();
    //if (changed_rabi_potato_water_req == "") {
    //    changed_rabi_potato_water_req = 0;
    //}
    //if (Potato_Rabi_Value != "") {
    //    changed_rabi_potato_waterdemand = parseInt(Potato_Rabi_Value) * parseFloat(changed_rabi_potato_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Potato_water_Demand_value1').text(changed_rabi_potato_waterdemand.toFixed(2));


    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_potato_waterdemand;

    //    var ss = $('#Crop_Diversion_Rabi_Potato_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_Rabi_Potato_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_potato_waterdemand);
    //    $('#changed_rabi_potato_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Potato_Reduction_GW_Demand).toFixed(2));

    //}

    ////Cucumber
    //$('#Crop_Diversion_Rabi_Cucumber_water_Demand_value1').text("0");
    //var Cucumber_Rabi_Value = $('#Crop_Diversion_Rabi_Cucumber_UserVale1').val();
    //var changed_rabi_cucumber_water_req = $('#changed_rabi_cucumber_water_req').val();
    //if (changed_rabi_cucumber_water_req == "") {
    //    changed_rabi_cucumber_water_req = 0;
    //}
    //if (Cucumber_Rabi_Value != "") {
    //    changed_rabi_cucumber_waterdemand = parseInt(Cucumber_Rabi_Value) * parseFloat(changed_rabi_cucumber_water_req) * 0.001;
    //    $('#Crop_Diversion_Rabi_Cucumber_water_Demand_value1').text(changed_rabi_cucumber_waterdemand.toFixed(2));
    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_cucumber_waterdemand;


    //    var ss = $('#Crop_Diversion_Rabi_Cucumber_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_Rabi_Cucumber_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_cucumber_waterdemand);
    //    $('#changed_rabi_cucumber_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Cucumber_Reduction_GW_Demand).toFixed(2));

    //}

    //Ragi
    $('#Crop_Diversion_Rabi_Ragi_water_Demand_value1').text("0");
    var Ragi_Rabi_Value = $('#Crop_Diversion_Rabi_Ragi_UserVale1').val();
    var changed_rabi_ragi_water_req = $('#changed_rabi_ragi_water_req').val();
    if (changed_rabi_ragi_water_req == "") {
        changed_rabi_ragi_water_req = 0;
    }
    if (Ragi_Rabi_Value != "") {
        changed_rabi_ragi_waterdemand = parseInt(Ragi_Rabi_Value) * parseFloat(changed_rabi_ragi_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Ragi_water_Demand_value1').text(changed_rabi_ragi_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_ragi_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Ragi_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Ragi_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_ragi_waterdemand);
        $('#changed_rabi_ragi_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Ragi_Reduction_GW_Demand).toFixed(2));

    }

    //Sugarcane
    $('#Crop_Diversion_Rabi_Sugarcane_water_Demand_value1').text("0");
    var Sugarcane_Rabi_Value = $('#Crop_Diversion_Rabi_Sugarcane_UserVale1').val();
    var changed_rabi_sugarcane_water_req = $('#changed_rabi_sugarcane_water_req').val();
    if (changed_rabi_sugarcane_water_req == "") {
        changed_rabi_sugarcane_water_req = 0;
    }
    if (Sugarcane_Rabi_Value != "") {
        changed_rabi_sugarcane_waterdemand = parseInt(Sugarcane_Rabi_Value) * parseFloat(changed_rabi_sugarcane_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Sugarcane_water_Demand_value1').text(changed_rabi_sugarcane_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_sugarcane_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Sugarcane_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Sugarcane_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_sugarcane_waterdemand);
        $('#changed_rabi_sugarcane_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Sugarcane_Reduction_GW_Demand).toFixed(2));

    }

    //Maize
    $('#Crop_Diversion_Rabi_Maize_water_Demand_value1').text("0");
    var Maize_Rabi_Value = $('#Crop_Diversion_Rabi_Maize_UserVale1').val();
    var changed_rabi_maize_water_req = $('#changed_rabi_maize_water_req').val();
    if (changed_rabi_maize_water_req == "") {
        changed_rabi_maize_water_req = 0;
    }
    if (Maize_Rabi_Value != "") {
        changed_rabi_maize_waterdemand = parseInt(Maize_Rabi_Value) * parseFloat(changed_rabi_maize_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Maize_water_Demand_value1').text(changed_rabi_maize_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_maize_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Maize_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Maize_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_maize_waterdemand);
        $('#changed_rabi_maize_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Maize_Reduction_GW_Demand).toFixed(2));

    }

    //Fodder
    $('#Crop_Diversion_Rabi_Fodder_water_Demand_value1').text("0");
    var Fodder_Rabi_Value = $('#Crop_Diversion_Rabi_Fodder_UserVale1').val();
    var changed_rabi_fodder_water_req = $('#changed_rabi_fodder_water_req').val();
    if (changed_rabi_fodder_water_req == "") {
        changed_rabi_fodder_water_req = 0;
    }
    if (Fodder_Rabi_Value != "") {
        changed_rabi_fodder_waterdemand = parseInt(Fodder_Rabi_Value) * parseFloat(changed_rabi_fodder_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Fodder_water_Demand_value1').text(changed_rabi_fodder_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_fodder_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Fodder_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Fodder_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_fodder_waterdemand);
        $('#changed_rabi_fodder_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Fodder_Reduction_GW_Demand).toFixed(2));

    }

    //Paddy
    $('#Crop_Diversion_Rabi_Paddy_water_Demand_value1').text("0");
    var Paddy_Rabi_Value = $('#Crop_Diversion_Rabi_Paddy_UserVale1').val();
    var changed_rabi_paddy_water_req = $('#changed_rabi_paddy_water_req').val();
    if (changed_rabi_paddy_water_req == "") {
        changed_rabi_paddy_water_req = 0;
    }
    if (Paddy_Rabi_Value != "") {
        changed_rabi_paddy_waterdemand = parseInt(Paddy_Rabi_Value) * parseFloat(changed_rabi_paddy_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Paddy_water_Demand_value1').text(changed_rabi_paddy_waterdemand.toFixed(2));
        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_paddy_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Paddy_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Paddy_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_paddy_waterdemand);
        $('#changed_rabi_paddy_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Paddy_Reduction_GW_Demand).toFixed(2));

    }

    //Alfalfa
    $('#Crop_Diversion_Rabi_Alfalfa_water_Demand_value1').text("0");
    var Alfalfa_Rabi_Value = $('#Crop_Diversion_Rabi_Alfalfa_UserVale1').val();
    var changed_rabi_alfalfa_water_req = $('#changed_rabi_alfalfa_water_req').val();
    if (changed_rabi_alfalfa_water_req == "") {
        changed_rabi_alfalfa_water_req = 0;
    }
    if (Alfalfa_Rabi_Value != "") {
        changed_rabi_alfalfa_waterdemand = parseInt(Alfalfa_Rabi_Value) * parseFloat(changed_rabi_alfalfa_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Alfalfa_water_Demand_value1').text(changed_rabi_alfalfa_waterdemand.toFixed(2));


        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_alfalfa_waterdemand;
        var ss = $('#Crop_Diversion_Rabi_Alfalfa_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Alfalfa_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_alfalfa_waterdemand);
        $('#changed_rabi_alfalfa_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Alfalfa_Reduction_GW_Demand).toFixed(2));

    }


    //Onion
    //$('#Crop_Diversion_Rabi_Onion_water_Demand_value1').text("0");
    //var Onion_Rabi_Value = $('#Crop_Diversion_Rabi_Onion_UserVale1').val();
    //var changed_rabi_onion_water_req = $('#changed_rabi_onion_water_req').val();
    //if (changed_rabi_onion_water_req == "") {
    //    changed_rabi_onion_water_req = 0;
    //}
    //if (Onion_Rabi_Value != "") {
    //    changed_rabi_onion_waterdemand = parseInt(Onion_Rabi_Value) * parseFloat(changed_rabi_onion_water_req) * 0.001;

    //    $('#Crop_Diversion_Rabi_Onion_water_Demand_value1').text(changed_rabi_onion_waterdemand.toFixed(2));

    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_onion_waterdemand;

    //    var ss = $('#Crop_Diversion_Rabi_Onion_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_Rabi_Onion_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_onion_waterdemand);
    //    $('#changed_rabi_onion_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Onion_Reduction_GW_Demand).toFixed(2));

    //}

    //Hortculture
    $('#Crop_Diversion_Rabi_Hortculture_water_Demand_value1').text("0");
    var Hortculture_Rabi_Value = $('#Crop_Diversion_Rabi_Hortculture_UserVale1').val();
    var changed_rabi_horticulture_water_req = $('#changed_rabi_horticulture_water_req').val();
    if (changed_rabi_horticulture_water_req == "") {
        changed_rabi_horticulture_water_req = 0;
    }
    if (Hortculture_Rabi_Value != "") {
        changed_rabi_horticulture_waterdemand = parseInt(Hortculture_Rabi_Value) * parseFloat(changed_rabi_horticulture_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Hortculture_water_Demand_value1').text(changed_rabi_horticulture_waterdemand.toFixed(2));

        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_horticulture_waterdemand;
        var ss = $('#Crop_Diversion_Rabi_Hortculture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Hortculture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_horticulture_waterdemand);
        $('#changed_rabi_horticulture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Hortculture_Reduction_GW_Demand).toFixed(2));

    }

    //Sunflower
    $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value1').text("0");
    var Sunflower_Rabi_Value = $('#Crop_Diversion_Rabi_Sunflower_UserVale1').val();
    var changed_rabi_sunflower_water_req = $('#changed_rabi_sunflower_water_req').val();
    if (changed_rabi_sunflower_water_req == "") {
        changed_rabi_sunflower_water_req = 0;
    }
    if (Sunflower_Rabi_Value != "") {
        changed_rabi_sunflower_waterdemand = parseInt(Sunflower_Rabi_Value) * parseFloat(changed_rabi_sunflower_water_req) * 0.001;
        $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value1').text(changed_rabi_sunflower_waterdemand.toFixed(2));


        Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_sunflower_waterdemand;

        var ss = $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_Rabi_Sunflower_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_rabi_sunflower_waterdemand);
        $('#changed_rabi_sunflower_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Sunflower_Reduction_GW_Demand).toFixed(2));

    }

    //other crop

    //var changed_rabi_croparea_area = $('#changed_rabi_croparea_area').val();
    //var changed_rabi_othercrop_water_req = $('#changed_rabi_othercrop_water_req').val();
    //if (changed_rabi_othercrop_water_req == "") {
    //    changed_rabi_othercrop_water_req = 0;
    //}
    //if (changed_rabi_croparea_area != "") {
    //    var changed_rabi_othercrop_waterdemand = parseInt(changed_rabi_croparea_area) * parseFloat(changed_rabi_othercrop_water_req) * 0.001;
    //    $('#changed_rabi_othercrop_waterdemand').text(changed_rabi_othercrop_waterdemand.toFixed(2));


    //    Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1 + changed_rabi_othercrop_waterdemand;

    //    //var ss = $('#Crop_Diversion_Rabi_Sunflower_water_Demand_value').text();
    //    //if (ss == "") {
    //    //    ss = 0;
    //    //}
    //    //var Crop_Diversion_Rabi_Sunflower_Reduction_GW_Demand = parseFloat(ss) - parseFloat(Sunflower_Rabi_Value1);
    //    //$('#changed_rabi_sunflower_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_Rabi_Sunflower_Reduction_GW_Demand).toFixed(2));

    //}


    changed_rabi_total_waterdemand = Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1;
    $('#Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1').text(Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1.toFixed(2));

    $('#Crop_Diversion_Rabi_Water_demand').text(Crop_Diversion_Total_Water_Demand_for_Rabi_Crops.toFixed(2));

    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text();;

    if (Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 == "") {
        Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = 0;
    }

    var TotalAnnual_Crop_Diversion_Reduction = parseFloat(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1);
    $('#TotalAnnual_Crop_Diversion_Reduction').text(TotalAnnual_Crop_Diversion_Reduction.toFixed(2));

    Calculation();
}


//Original Crop



function Crop_Diversion_Crop_WaterRequire() {

    original_summer_sericulture_waterdemand = 0;
    original_summer_tomoto_waterdemand = 0;
    original_summer_cabbage_waterdemand = 0;
    original_summer_beans_waterdemand = 0;

    original_summer_floriculture_waterdemand = 0;
    original_summer_maize_waterdemand = 0;
    original_summer_fodder_waterdemand = 0;
    original_summer_sugarcane_waterdemand = 0;
    original_summer_total_waterdemand = 0;
    original_summer_total_gw_reduc_waterdemand = 0;

    original_summer_horticulture_waterdemand = 0;

    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = 0;


    original_summer_horticulture_waterdemand1 = 0;
    original_summer_horticulture_waterdemand2 = 0;
    original_summer_horticulture_waterdemand3 = 0;
    original_summer_horticulture_waterdemand4 = 0;
    original_summer_horticulture_waterdemand5 = 0;

    //Other
    var original_summer_horticulture_water_req1 = $('#original_summer_horticulture_water_req1').val();
    if (typeof original_summer_horticulture_water_req1 == 'undefined') {
        original_summer_horticulture_water_req1 = 0;
    }
    if (original_summer_horticulture_water_req1 == "") {
        original_summer_horticulture_water_req1 = 0;
    }
    var original_summer_othercrop_area1 = $('#original_summer_othercrop_area1').val();
    if (typeof original_summer_othercrop_area1 == 'undefined') {
        original_summer_othercrop_area1 = 0;
    }
    if (original_summer_othercrop_area1 != "") {
        original_summer_horticulture_waterdemand1 = parseInt(original_summer_othercrop_area1) * parseFloat(original_summer_horticulture_water_req1) * 0.001;
        $('#original_summer_horticulture_waterdemand1').text(original_summer_horticulture_waterdemand1.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = original_summer_horticulture_waterdemand1 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_;
    }

    var original_summer_horticulture_water_req2 = $('#original_summer_horticulture_water_req2').val();
    if (typeof original_summer_horticulture_water_req2 == 'undefined') {
        original_summer_horticulture_water_req2 = 0;
    }
    if (original_summer_horticulture_water_req2 == "") {
        original_summer_horticulture_water_req2 = 0;
    }
    var original_summer_othercrop_area2 = $('#original_summer_othercrop_area2').val();
    if (typeof original_summer_othercrop_area2 == 'undefined') {
        original_summer_othercrop_area2 = 0;
    }
    if (original_summer_othercrop_area2 != "") {
        original_summer_horticulture_waterdemand2 = parseInt(original_summer_othercrop_area2) * parseFloat(original_summer_horticulture_water_req2) * 0.001;
        $('#original_summer_horticulture_waterdemand2').text(original_summer_horticulture_waterdemand2.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = original_summer_horticulture_waterdemand2 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_;
    }
    var original_summer_horticulture_water_req3 = $('#original_summer_horticulture_water_req3').val();
    if (typeof original_summer_horticulture_water_req3 == 'undefined') {
        original_summer_horticulture_water_req3 = 0;
    }
    if (original_summer_horticulture_water_req3 == "") {
        original_summer_horticulture_water_req3 = 0;
    }
    var original_summer_othercrop_area3 = $('#original_summer_othercrop_area3').val();
    if (typeof original_summer_othercrop_area3 == 'undefined') {
        original_summer_othercrop_area3 = 0;
    }
    if (original_summer_othercrop_area3 != "") {
        original_summer_horticulture_waterdemand3 = parseInt(original_summer_othercrop_area3) * parseFloat(original_summer_horticulture_water_req3) * 0.001;
        $('#original_summer_horticulture_waterdemand3').text(original_summer_horticulture_waterdemand3.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = original_summer_horticulture_waterdemand3 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_;
    }

    var original_summer_horticulture_water_req4 = $('#original_summer_horticulture_water_req4').val();
    if (typeof original_summer_horticulture_water_req4 == 'undefined') {
        original_summer_horticulture_water_req4 = 0;
    }
    if (original_summer_horticulture_water_req4 == "") {
        original_summer_horticulture_water_req4 = 0;
    }
    var original_summer_othercrop_area4 = $('#original_summer_othercrop_area4').val();
    if (typeof original_summer_othercrop_area4 == 'undefined') {
        original_summer_othercrop_area4 = 0;
    }
    if (original_summer_othercrop_area4 != "") {
        original_summer_horticulture_waterdemand4 = parseInt(original_summer_othercrop_area4) * parseFloat(original_summer_horticulture_water_req4) * 0.001;
        $('#original_summer_horticulture_waterdemand4').text(original_summer_horticulture_waterdemand4.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = original_summer_horticulture_waterdemand4 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_;
    }

    var original_summer_horticulture_water_req5 = $('#original_summer_horticulture_water_req5').val();
    if (typeof original_summer_horticulture_water_req5 == 'undefined') {
        original_summer_horticulture_water_req5 = 0;
    }
    if (original_summer_horticulture_water_req5 == "") {
        original_summer_horticulture_water_req5 = 0;
    }
    var original_summer_othercrop_area5 = $('#original_summer_othercrop_area5').val();
    if (typeof original_summer_othercrop_area5 == 'undefined') {
        original_summer_othercrop_area5 = 0;
    }
    if (original_summer_othercrop_area5 != "") {
        original_summer_horticulture_waterdemand5 = parseInt(original_summer_othercrop_area5) * parseFloat(original_summer_horticulture_water_req5) * 0.001;
        $('#original_summer_horticulture_waterdemand5').text(original_summer_horticulture_waterdemand5.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = original_summer_horticulture_waterdemand5 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_;
    }



    //Horticulture

    var original_summer_horticulture_crop_area = $('#original_summer_horticulture_crop_area').val();
    var original_summer_horticulture_water_req = $('#original_summer_horticulture_water_req').val();
    if (original_summer_horticulture_water_req == "") {
        original_summer_horticulture_water_req = 0;
    }
    if (original_summer_horticulture_crop_area != "") {
        original_summer_horticulture_waterdemand = parseInt(original_summer_horticulture_crop_area) * parseFloat(original_summer_horticulture_water_req) * 0.001;
        $('#original_summer_horticulture_waterdemand').text(original_summer_horticulture_waterdemand.toFixed(2));
        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_horticulture_waterdemand;
    }


    //Sericulture
    $('#Crop_Diversion_Crop_Sericulture_water_Demand_value').text("0");
    var Sericulture_Crop_Value = $('#Crop_Diversion_Crop_Sericulture_UserVale').val();
    var original_summer_sericulture_water_req = $('#original_summer_sericulture_water_req').val();
    if (original_summer_sericulture_water_req == "") {
        original_summer_sericulture_water_req = 0;
    }
    if (Sericulture_Crop_Value != "") {
        original_summer_sericulture_waterdemand = parseInt(Sericulture_Crop_Value) * parseFloat(original_summer_sericulture_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Sericulture_water_Demand_value').text(original_summer_sericulture_waterdemand.toFixed(2));
        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_sericulture_waterdemand;
    }
    //Tomota
    $('#Crop_Diversion_Crop_Tomota_water_Demand_value').text("0");
    var Tomota_Crop_Value = $('#Crop_Diversion_Crop_Tomota_UserVale').val();
    var original_summer_tomoto_water_req = $('#original_summer_tomoto_water_req').val();
    if (original_summer_tomoto_water_req == "") {
        original_summer_tomoto_water_req = 0;
    }
    if (Tomota_Crop_Value != "") {

        original_summer_tomoto_waterdemand = parseInt(Tomota_Crop_Value) * parseFloat(original_summer_tomoto_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Tomota_water_Demand_value').text(original_summer_tomoto_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_tomoto_waterdemand;


    }

    //Cabbage
    //$('#Crop_Diversion_Crop_Cabbage_water_Demand_value').text("0");
    //var Cabbage_Crop_Value = $('#Crop_Diversion_Crop_Cabbage_UserVale').val();
    //var original_summer_cabbage_water_req = $('#original_summer_cabbage_water_req').val();
    //if (original_summer_cabbage_water_req == "") {
    //    original_summer_cabbage_water_req = 0;
    //}
    //if (Cabbage_Crop_Value != "") {
    //    original_summer_cabbage_waterdemand = parseInt(Cabbage_Crop_Value) * parseFloat(original_summer_cabbage_water_req) * 0.001;
    //    $('#Crop_Diversion_Crop_Cabbage_water_Demand_value').text(original_summer_cabbage_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_cabbage_waterdemand;

    //}

    ////Beans
    //$('#Crop_Diversion_Crop_Beans_water_Demand_value').text("0");
    //var Beans_Crop_Value = $('#Crop_Diversion_Crop_Beans_UserVale').val();
    //var original_summer_beans_water_req = $('#original_summer_beans_water_req').val();
    //if (original_summer_beans_water_req == "") {
    //    original_summer_beans_water_req = 0;
    //}
    //if (Beans_Crop_Value != "") {
    //    original_summer_beans_waterdemand = parseInt(Beans_Crop_Value) * parseFloat(original_summer_beans_water_req) * 0.001;
    //    $('#Crop_Diversion_Crop_Beans_water_Demand_value').text(original_summer_beans_waterdemand.toFixed(2));


    //    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_beans_waterdemand;


    //}
    //Floriculture
    $('#Crop_Diversion_Crop_Floriculture_water_Demand_value').text("0");
    var Floriculture_Crop_Value = $('#Crop_Diversion_Crop_Floriculture_UserVale').val();
    var original_summer_floriculture_water_req = $('#original_summer_floriculture_water_req').val();
    if (original_summer_floriculture_water_req == "") {
        original_summer_floriculture_water_req = 0;
    }
    if (Floriculture_Crop_Value != "") {
        original_summer_floriculture_waterdemand = parseInt(Floriculture_Crop_Value) * parseFloat(original_summer_floriculture_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Floriculture_water_Demand_value').text(original_summer_floriculture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_floriculture_waterdemand;


    }


    //Maize
    $('#Crop_Diversion_Crop_Maize_water_Demand_value').text("0");
    var Maize_Crop_Value = $('#Crop_Diversion_Crop_Maize_UserVale').val();
    var original_summer_maize_water_req = $('#original_summer_maize_water_req').val();
    if (original_summer_maize_water_req == "") {
        original_summer_maize_water_req = 0;
    }
    if (Maize_Crop_Value != "") {
        original_summer_maize_waterdemand = parseInt(Maize_Crop_Value) * parseFloat(original_summer_maize_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Maize_water_Demand_value').text(original_summer_maize_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_maize_waterdemand;

    }

    //Fodder
    $('#Crop_Diversion_Crop_Fodder_water_Demand_value').text("0");
    var Fodder_Crop_Value = $('#Crop_Diversion_Crop_Fodder_UserVale').val();
    var original_summer_fodder_water_req = $('#original_summer_fodder_water_req').val();
    if (original_summer_fodder_water_req == "") {
        original_summer_fodder_water_req = 0;
    }
    if (Fodder_Crop_Value != "") {
        original_summer_fodder_waterdemand = parseInt(Fodder_Crop_Value) * parseFloat(original_summer_fodder_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Fodder_water_Demand_value').text(original_summer_fodder_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_fodder_waterdemand;

    }

    //Sugarcane
    $('#Crop_Diversion_Crop_Sugarcane_water_Demand_value').text("0");
    var Sugarcane_Crop_Value = $('#Crop_Diversion_Crop_Sugarcane_UserVale').val();
    var original_summer_sugarcane_water_req = $('#original_summer_sugarcane_water_req').val();
    if (original_summer_sugarcane_water_req == "") {
        original_summer_sugarcane_water_req = 0;
    }
    if (Sugarcane_Crop_Value != "") {
        original_summer_sugarcane_waterdemand = parseInt(Sugarcane_Crop_Value) * parseFloat(original_summer_sugarcane_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Sugarcane_water_Demand_value').text(original_summer_sugarcane_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_sugarcane_waterdemand;
    }


    //other crop
    //var original_summer_othercrop_area = $('#original_summer_othercrop_area').val();
    //var original_summer_othercrop_water_req = $('#original_summer_othercrop_water_req').val();
    //if (original_summer_othercrop_water_req == "") {
    //    original_summer_othercrop_water_req = 0;
    //}
    //if (original_summer_othercrop_area != "") {
    //    var original_summer_othercrop_waterdemand = parseInt(original_summer_othercrop_area) * parseFloat(original_summer_othercrop_water_req) * 0.001;
    //    $('#original_summer_othercrop_waterdemand').text(original_summer_othercrop_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_ + original_summer_othercrop_waterdemand;
    //}

    original_summer_total_waterdemand = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_;


    $('#Total_Water_Demand_for_Summer_Crops_Crop_Diversion_').text(Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1.toFixed(2));

    $('#Crop_Diversion_Summer_Crop_Water_demand').text(Total_Water_Demand_for_Summer_Crops_Crop_Diversion_.toFixed(2));

    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text();;

    if (Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 == "") {
        Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = 0;
    }

    var TotalAnnual_Crop_Diversion_Reduction = parseFloat(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1);
    $('#TotalAnnual_Crop_Diversion_Reduction').text(TotalAnnual_Crop_Diversion_Reduction.toFixed(2));

    Calculation();
}

//Changed Crop


function Crop_Diversion_Crop_WaterRequire1() {

    changed_summer_sericulture_waterdemand = 0;
    changed_summer_tomoto_waterdemand = 0;
    changed_summer_cabbage_waterdemand = 0;
    changed_summer_beans_waterdemand = 0;

    changed_summer_floriculture_waterdemand = 0;
    changed_summer_maize_waterdemand = 0;
    changed_summer_fodder_waterdemand = 0;
    changed_summer_sugarcane_waterdemand = 0;
    changed_summer_total_waterdemand = 0;
    changed_summer_total_gw_reduc_waterdemand = 0;
    changed_summer_horticulture_waterdemand = 0;
    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = 0;


    changed_summer_horticulture_waterdemand1 = 0;
    changed_summer_horticulture_reduction_gw_demand1 = 0;
    changed_summer_horticulture_waterdemand2 = 0;
    changed_summer_horticulture_reduction_gw_demand2 = 0;
    changed_summer_horticulture_waterdemand3 = 0;
    changed_summer_horticulture_reduction_gw_demand3 = 0;
    changed_summer_horticulture_waterdemand4 = 0;
    changed_summer_horticulture_reduction_gw_demand4 = 0;
    changed_summer_horticulture_waterdemand5 = 0;
    changed_summer_horticulture_reduction_gw_demand5 = 0;


    //Other

    var changed_summer_croparea_area1 = $('#changed_summer_croparea_area1').val();
    if (typeof changed_summer_croparea_area1 == 'undefined') {
        changed_summer_croparea_area1 = 0;
    }
    var changed_summer_horticulture_water_req1 = $('#changed_summer_horticulture_water_req1').val();
    if (typeof changed_summer_horticulture_water_req1 == 'undefined') {
        changed_summer_horticulture_water_req1 = 0;
    }
    if (changed_summer_horticulture_water_req1 == "") {
        changed_summer_horticulture_water_req1 = 0;
    }

    if (changed_summer_croparea_area1 != "") {
        changed_summer_horticulture_waterdemand1 = parseInt(changed_summer_croparea_area1) * parseFloat(changed_summer_horticulture_water_req1) * 0.001;
        $('#changed_summer_horticulture_waterdemand1').text(changed_summer_horticulture_waterdemand1.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = changed_summer_horticulture_waterdemand1 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1;

        //summer_Paddy_SavingValue
        var ss = $('#original_summer_horticulture_waterdemand1').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_summer_horticulture_reduction_gw_demand1 = parseFloat(ss) - parseFloat(changed_summer_horticulture_waterdemand1);
        $('#changed_summer_horticulture_reduction_gw_demand1').text(parseFloat(changed_summer_horticulture_reduction_gw_demand1).toFixed(2));

    }
    var changed_summer_croparea_area2 = $('#changed_summer_croparea_area2').val();
    if (typeof changed_summer_croparea_area2 == 'undefined') {
        changed_summer_croparea_area2 = 0;
    }
    var changed_summer_horticulture_water_req2 = $('#changed_summer_horticulture_water_req2').val();
    if (typeof changed_summer_horticulture_water_req2 == 'undefined') {
        changed_summer_horticulture_water_req2 = 0;
    }
    if (changed_summer_horticulture_water_req2 == "") {
        changed_summer_horticulture_water_req2 = 0;
    }

    if (changed_summer_croparea_area2 != "") {
        changed_summer_horticulture_waterdemand2 = parseInt(changed_summer_croparea_area2) * parseFloat(changed_summer_horticulture_water_req2) * 0.001;
        $('#changed_summer_horticulture_waterdemand2').text(changed_summer_horticulture_waterdemand2.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = changed_summer_horticulture_waterdemand2 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1;

        //summer_Paddy_SavingValue
        var ss = $('#original_summer_horticulture_waterdemand2').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_summer_horticulture_reduction_gw_demand2 = parseFloat(ss) - parseFloat(changed_summer_horticulture_waterdemand2);
        $('#changed_summer_horticulture_reduction_gw_demand2').text(parseFloat(changed_summer_horticulture_reduction_gw_demand2).toFixed(2));

    }

    var changed_summer_croparea_area3 = $('#changed_summer_croparea_area3').val();
    if (typeof changed_summer_croparea_area3 == 'undefined') {
        changed_summer_croparea_area3 = 0;
    }
    var changed_summer_horticulture_water_req3 = $('#changed_summer_horticulture_water_req3').val();
    if (typeof changed_summer_horticulture_water_req3 == 'undefined') {
        changed_summer_horticulture_water_req3 = 0;
    }
    if (changed_summer_horticulture_water_req3 == "") {
        changed_summer_horticulture_water_req3 = 0;
    }

    if (changed_summer_croparea_area3 != "") {
        changed_summer_horticulture_waterdemand3 = parseInt(changed_summer_croparea_area3) * parseFloat(changed_summer_horticulture_water_req3) * 0.001;
        $('#changed_summer_horticulture_waterdemand3').text(changed_summer_horticulture_waterdemand3.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = changed_summer_horticulture_waterdemand3 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1;

        //summer_Paddy_SavingValue
        var ss = $('#original_summer_horticulture_waterdemand3').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_summer_horticulture_reduction_gw_demand3 = parseFloat(ss) - parseFloat(changed_summer_horticulture_waterdemand3);
        $('#changed_summer_horticulture_reduction_gw_demand3').text(parseFloat(changed_summer_horticulture_reduction_gw_demand3).toFixed(2));

    }

    var changed_summer_croparea_area4 = $('#changed_summer_croparea_area4').val();
    if (typeof changed_summer_croparea_area4 == 'undefined') {
        changed_summer_croparea_area4 = 0;
    }
    var changed_summer_horticulture_water_req4 = $('#changed_summer_horticulture_water_req4').val();
    if (typeof changed_summer_horticulture_water_req4 == 'undefined') {
        changed_summer_horticulture_water_req4 = 0;
    }
    if (changed_summer_horticulture_water_req4 == "") {
        changed_summer_horticulture_water_req4 = 0;
    }

    if (changed_summer_croparea_area4 != "") {
        changed_summer_horticulture_waterdemand4 = parseInt(changed_summer_croparea_area4) * parseFloat(changed_summer_horticulture_water_req4) * 0.001;
        $('#changed_summer_horticulture_waterdemand4').text(changed_summer_horticulture_waterdemand4.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = changed_summer_horticulture_waterdemand4 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1;

        //summer_Paddy_SavingValue
        var ss = $('#original_summer_horticulture_waterdemand4').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_summer_horticulture_reduction_gw_demand4 = parseFloat(ss) - parseFloat(changed_summer_horticulture_waterdemand4);
        $('#changed_summer_horticulture_reduction_gw_demand4').text(parseFloat(changed_summer_horticulture_reduction_gw_demand4).toFixed(2));

    }

    var changed_summer_croparea_area5 = $('#changed_summer_croparea_area5').val();
    if (typeof changed_summer_croparea_area5 == 'undefined') {
        changed_summer_croparea_area5 = 0;
    }
    var changed_summer_horticulture_water_req5 = $('#changed_summer_horticulture_water_req5').val();
    if (typeof changed_summer_horticulture_water_req5 == 'undefined') {
        changed_summer_horticulture_water_req5 = 0;
    }
    if (changed_summer_horticulture_water_req5 == "") {
        changed_summer_horticulture_water_req5 = 0;
    }

    if (changed_summer_croparea_area5 != "") {
        changed_summer_horticulture_waterdemand5 = parseInt(changed_summer_croparea_area5) * parseFloat(changed_summer_horticulture_water_req5) * 0.001;
        $('#changed_summer_horticulture_waterdemand5').text(changed_summer_horticulture_waterdemand5.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = changed_summer_horticulture_waterdemand5 + Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1;

        //summer_Paddy_SavingValue
        var ss = $('#original_summer_horticulture_waterdemand5').text();
        if (ss == "") {
            ss = 0;
        }
        var changed_summer_horticulture_reduction_gw_demand5 = parseFloat(ss) - parseFloat(changed_summer_horticulture_waterdemand5);
        $('#changed_summer_horticulture_reduction_gw_demand5').text(parseFloat(changed_summer_horticulture_reduction_gw_demand5).toFixed(2));

    }





    //Horticulture

    var changed_summer_horticulture_crop_area = $('#changed_summer_horticulture_crop_area').val();
    var changed_summer_horticulture_water_req = $('#changed_summer_horticulture_water_req').val();
    if (changed_summer_horticulture_water_req == "") {
        changed_summer_horticulture_water_req = 0;
    }
    if (changed_summer_horticulture_crop_area != "") {

        changed_summer_horticulture_waterdemand = parseInt(changed_summer_horticulture_crop_area) * parseFloat(changed_summer_horticulture_water_req) * 0.001;
        $('#changed_summer_horticulture_waterdemand').text(changed_summer_horticulture_waterdemand.toFixed(2));
        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_horticulture_waterdemand;

        var ss = changed_summer_horticulture_crop_area;
        if (ss == "") {
            ss = 0;
        }
        var changed_summer_horticulture_reduction_gw_demand = parseFloat(ss) - parseFloat(changed_summer_horticulture_waterdemand);
        $('#changed_summer_horticulture_reduction_gw_demand').text(parseFloat(changed_summer_horticulture_reduction_gw_demand).toFixed(2));

    }

    //Sericulture
    $('#Crop_Diversion_Crop_Sericulture_water_Demand_value1').text("0");
    var Sericulture_Crop_Value = $('#Crop_Diversion_Crop_Sericulture_UserVale1').val();
    var changed_summer_sericulture_water_req = $('#changed_summer_sericulture_water_req').val();
    if (changed_summer_sericulture_water_req == "") {
        changed_summer_sericulture_water_req = 0;
    }
    if (Sericulture_Crop_Value != "") {

        changed_summer_sericulture_waterdemand = parseInt(Sericulture_Crop_Value) * parseFloat(changed_summer_sericulture_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Sericulture_water_Demand_value1').text(changed_summer_sericulture_waterdemand.toFixed(2));
        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_sericulture_waterdemand;

        var ss = $('#Crop_Diversion_Crop_Sericulture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_summer_Sericulture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_sericulture_waterdemand);
        $('#changed_summer_sericulture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Sericulture_Reduction_GW_Demand).toFixed(2));

    }
    //Tomota
    $('#Crop_Diversion_Crop_Tomota_water_Demand_value1').text("0");
    var Tomota_Crop_Value = $('#Crop_Diversion_Crop_Tomota_UserVale1').val();
    var changed_summer_tomoto_water_req = $('#changed_summer_tomoto_water_req').val();
    if (changed_summer_tomoto_water_req == "") {
        changed_summer_tomoto_water_req = 0;
    }
    if (Tomota_Crop_Value != "") {

        changed_summer_tomoto_waterdemand = parseInt(Tomota_Crop_Value) * parseFloat(changed_summer_tomoto_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Tomota_water_Demand_value1').text(changed_summer_tomoto_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_tomoto_waterdemand;

        var ss = $('#Crop_Diversion_Crop_Tomota_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_summer_Tomota_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_tomoto_waterdemand);
        $('#changed_summer_tomoto_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Tomota_Reduction_GW_Demand).toFixed(2));

    }

    //Cabbage
    //$('#Crop_Diversion_Crop_Cabbage_water_Demand_value1').text("0");
    //var Cabbage_Crop_Value = $('#Crop_Diversion_Crop_Cabbage_UserVale1').val();
    //var changed_summer_cabbage_water_req = $('#changed_summer_cabbage_water_req').val();
    //if (changed_summer_cabbage_water_req == "") {
    //    changed_summer_cabbage_water_req = 0;
    //}
    //if (Cabbage_Crop_Value != "") {
    //    changed_summer_cabbage_waterdemand = parseInt(Cabbage_Crop_Value) * parseFloat(changed_summer_cabbage_water_req) * 0.001;
    //    $('#Crop_Diversion_Crop_Cabbage_water_Demand_value1').text(changed_summer_cabbage_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_cabbage_waterdemand;

    //    var ss = $('#Crop_Diversion_Crop_Cabbage_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_summer_Cabbage_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_cabbage_waterdemand);
    //    $('#changed_summer_cabbage_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Cabbage_Reduction_GW_Demand).toFixed(2));

    //}

    ////Beans
    //$('#Crop_Diversion_Crop_Beans_water_Demand_value1').text("0");
    //var Beans_Crop_Value = $('#Crop_Diversion_Crop_Beans_UserVale1').val();
    //var changed_summer_beans_water_req = $('#changed_summer_beans_water_req').val();
    //if (changed_summer_beans_water_req == "") {
    //    changed_summer_beans_water_req = 0;
    //}
    //if (Beans_Crop_Value != "") {
    //    changed_summer_beans_waterdemand = parseInt(Beans_Crop_Value) * parseFloat(changed_summer_beans_water_req) * 0.001;
    //    $('#Crop_Diversion_Crop_Beans_water_Demand_value1').text(changed_summer_beans_waterdemand.toFixed(2));


    //    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_beans_waterdemand;

    //    var ss = $('#Crop_Diversion_Crop_Beans_water_Demand_value').text();
    //    if (ss == "") {
    //        ss = 0;
    //    }
    //    var Crop_Diversion_summer_Beans_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_beans_waterdemand);
    //    $('#changed_summer_beans_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Beans_Reduction_GW_Demand).toFixed(2));

    //}
    //Floriculture
    $('#Crop_Diversion_Crop_Floriculture_water_Demand_value1').text("0");
    var Floriculture_Crop_Value = $('#Crop_Diversion_Crop_Floriculture_UserVale1').val();
    var changed_summer_floriculture_water_req = $('#changed_summer_floriculture_water_req').val();
    if (changed_summer_floriculture_water_req == "") {
        changed_summer_floriculture_water_req = 0;
    }
    if (Floriculture_Crop_Value != "") {
        changed_summer_floriculture_waterdemand = parseInt(Floriculture_Crop_Value) * parseFloat(changed_summer_floriculture_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Floriculture_water_Demand_value1').text(changed_summer_floriculture_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_floriculture_waterdemand;

        var ss = $('#Crop_Diversion_Crop_Floriculture_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_summer_Floriculture_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_floriculture_waterdemand);
        $('#changed_summer_floriculture_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Floriculture_Reduction_GW_Demand).toFixed(2));

    }


    //Maize
    $('#Crop_Diversion_Crop_Maize_water_Demand_value1').text("0");
    var Maize_Crop_Value = $('#Crop_Diversion_Crop_Maize_UserVale1').val();
    var changed_summer_maize_water_req = $('#changed_summer_maize_water_req').val();
    if (changed_summer_maize_water_req == "") {
        changed_summer_maize_water_req = 0;
    }
    if (Maize_Crop_Value != "") {
        changed_summer_maize_waterdemand = parseInt(Maize_Crop_Value) * parseFloat(changed_summer_maize_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Maize_water_Demand_value1').text(changed_summer_maize_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_maize_waterdemand;


        var ss = $('#Crop_Diversion_Crop_Maize_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_summer_Maize_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_maize_waterdemand);
        $('#changed_summer_maize_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Floriculture_Reduction_GW_Demand).toFixed(2));

    }

    //Fodder
    $('#Crop_Diversion_Crop_Fodder_water_Demand_value1').text("0");
    var Fodder_Crop_Value = $('#Crop_Diversion_Crop_Fodder_UserVale1').val();
    var changed_summer_fodder_water_req = $('#changed_summer_fodder_water_req').val();
    if (changed_summer_fodder_water_req == "") {
        changed_summer_fodder_water_req = 0;
    }
    if (Fodder_Crop_Value != "") {
        changed_summer_fodder_waterdemand = parseInt(Fodder_Crop_Value) * parseFloat(changed_summer_fodder_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Fodder_water_Demand_value1').text(changed_summer_fodder_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_fodder_waterdemand;

        var ss = $('#Crop_Diversion_Crop_Fodder_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_summer_Fodder_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_fodder_waterdemand);
        $('#changed_summer_fodder_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Fodder_Reduction_GW_Demand).toFixed(2));

    }

    //Sugarcane
    $('#Crop_Diversion_Crop_Sugarcane_water_Demand_value1').text("0");
    var Sugarcane_Crop_Value = $('#Crop_Diversion_Crop_Sugarcane_UserVale1').val();
    var changed_summer_sugarcane_water_req = $('#changed_summer_sugarcane_water_req').val();
    if (changed_summer_sugarcane_water_req == "") {
        changed_summer_sugarcane_water_req = 0;
    }
    if (Sugarcane_Crop_Value != "") {
        changed_summer_sugarcane_waterdemand = parseInt(Sugarcane_Crop_Value) * parseFloat(changed_summer_sugarcane_water_req) * 0.001;
        $('#Crop_Diversion_Crop_Sugarcane_water_Demand_value1').text(changed_summer_sugarcane_waterdemand.toFixed(2));

        Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_sugarcane_waterdemand;

        var ss = $('#Crop_Diversion_Crop_Sugarcane_water_Demand_value').text();
        if (ss == "") {
            ss = 0;
        }
        var Crop_Diversion_summer_Sugarcane_Reduction_GW_Demand = parseFloat(ss) - parseFloat(changed_summer_sugarcane_waterdemand);
        $('#changed_summer_sugarcane_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Sugarcane_Reduction_GW_Demand).toFixed(2));

    }

    //other crop
    //var changed_summer_croparea_area = $('#changed_summer_croparea_area').val();
    //var changed_summer_othercrop_water_req = $('#changed_summer_othercrop_water_req').val();
    //if (changed_summer_othercrop_water_req == "") {
    //    changed_summer_othercrop_water_req = 0;
    //}
    //if (changed_summer_croparea_area != "") {
    //    var changed_summer_othercrop_waterdemand = parseInt(changed_summer_croparea_area) * parseFloat(changed_summer_othercrop_water_req) * 0.001;
    //    $('#changed_summer_othercrop_waterdemand').text(changed_summer_othercrop_waterdemand.toFixed(2));

    //    Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1 + changed_summer_othercrop_waterdemand;

    //var ss = $('#Crop_Diversion_Crop_Sugarcane_water_Demand_value').text();
    //if (ss == "") {
    //    ss = 0;
    //}
    //var Crop_Diversion_summer_Sugarcane_Reduction_GW_Demand = parseFloat(ss) - parseFloat(Sugarcane_Crop_Value1);
    //$('#changed_summer_sugarcane_gw_reduc_waterdemand').text(parseFloat(Crop_Diversion_summer_Sugarcane_Reduction_GW_Demand).toFixed(2));

    // }
    changed_summer_total_waterdemand = Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1;

    $('#Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1').text(Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1.toFixed(2));

    $('#Crop_Diversion_Summer_Crop_Water_demand').text(Total_Water_Demand_for_Summer_Crops_Crop_Diversion_.toFixed(2));

    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text();;

    if (Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 == "") {
        Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = 0;
    }

    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text();;

    if (Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 == "") {
        Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = 0;
    }

    var TotalAnnual_Crop_Diversion_Reduction = parseFloat(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11) + parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1);
    $('#TotalAnnual_Crop_Diversion_Reduction').text(TotalAnnual_Crop_Diversion_Reduction.toFixed(2));


    Calculation();

}


function crop_savedata() {
    Crop_Diversion_Kharif_WaterRequire();
    Crop_Diversion_Kharif_WaterRequire1();
    Crop_Diversion_Rabi_WaterRequire();
    Crop_Diversion_Rabi_WaterRequire1();
    Crop_Diversion_Crop_WaterRequire();
    Crop_Diversion_Crop_WaterRequire1();
    $('#SAVE_BTN4').prop('disabled', true);

    var obj = {};

    obj.crop_approx_estimated_cost = $('#crop_approx_estimated_cost').val();
    obj.crop_cost_type = $('#crop_cost_type').val();

    //changed
    obj.changed_kharif_paddy_crop_area = $('#Crop_Diversion_kharif_Paddy_UserVale').val();
    obj.changed_kharif_paddy_fundingsource = $('#Crop_Diversion_kharif_Paddy_FundingSource').val();
    obj.changed_kharif_ragi_crop_area = $('#Crop_Diversion_kharif_Ragi_UserVale').val();
    // obj.changed_kharif_ragi_fundingsource = $('#Crop_Diversion_kharif_Ragi_FundingSource').val();
    obj.changed_kharif_groundnut_crop_area = $('#Crop_Diversion_kharif_GroundNut_UserVale').val();
    //obj.changed_kharif_groundnut_fundingsource = $('#Crop_Diversion_kharif_GroundNut_FundingSource').val();
    obj.changed_kharif_sugarcane_crop_area = $('#Crop_Diversion_kharif_Sugarcane_UserVale').val();
    //obj.changed_kharif_sugarcane_fundingsource = $('#Crop_Diversion_kharif_Sugarcane_FundingSource').val();
    obj.changed_kharif_tomoto_crop_area = $('#Crop_Diversion_kharif_Tomato_UserVale').val();
    //obj.changed_kharif_tomoto_fundingsource = $('#Crop_Diversion_kharif_Tomoto_FundingSource').val();
    //    obj.changed_kharif_cabbage_crop_area = $('#Crop_Diversion_kharif_Cabbage_UserVale').val();
    //    obj.changed_kharif_cabbage_fundingsource = $('#Crop_Diversion_kharif_Cabbage_FundingSource').val();
    //    obj.changed_kharif_beans_crop_area = $('#Crop_Diversion_kharif_Beans_UserVale').val();
    //    obj.changed_kharif_beans_fundingsource = $('#Crop_Diversion_kharif_Beans_FundingSource').val();
    obj.changed_kharif_floriculture_crop_area = $('#Crop_Diversion_kharif_Floriculture_UserVale').val();
    //obj.changed_kharif_floriculture_fundingsource = $('#Crop_Diversion_kharif_Floriculture_FundingSource').val();
    obj.changed_kharif_sericulture_crop_area = $('#Crop_Diversion_kharif_Sericulture_UserVale').val();
    //  obj.changed_kharif_sericulture_fundingsource = $('#Crop_Diversion_kharif_Sericulture_FundingSource').val();
    //    obj.changed_kharif_cucumber_crop_area = $('#Crop_Diversion_kharif_Cucmber_UserVale').val();
    //    obj.changed_kharif_cucumber_fundingsource = $('#Crop_Diversion_kharif_Cucmber_FundingSource').val();
    obj.changed_kharif_banana_crop_area = $('#Crop_Diversion_kharif_Banana_UserVale').val();
    //  obj.changed_kharif_banana_fundingsource = $('#Crop_Diversion_kharif_Banana_FundingSource').val();
    obj.changed_kharif_fodder_crop_area = $('#Crop_Diversion_kharif_Fodder_UserVale').val();
    //obj.changed_kharif_fodder_fundingsource = $('#Crop_Diversion_kharif_Fodder_FundingSource').val();
    obj.changed_kharif_maize_crop_area = $('#Crop_Diversion_kharif_Maize_UserVale').val();
    //obj.changed_kharif_maize_fundingsource = $('#Crop_Diversion_kharif_Maize_FundingSource').val();
    //    obj.changed_kharif_potato_crop_area = $('#Crop_Diversion_kharif_Potato_UserVale').val();
    //    obj.changed_kharif_potato_fundingsource = $('#Crop_Diversion_kharif_Potato_FundingSource').val();
    obj.changed_kharif_chillies_crop_area = $('#Crop_Diversion_kharif_Chillies_UserVale').val();
    // obj.changed_kharif_chillies_fundingsource = $('#Crop_Diversion_kharif_Chillies_FundingSource').val();
    obj.changed_kharif_cotton_crop_area = $('#Crop_Diversion_kharif_Cotton_UserVale').val();
    //obj.changed_kharif_cotton_fundingsource = $('#Crop_Diversion_kharif_Cotton_FundingSource').val();
    obj.changed_kharif_melon_crop_area = $('#Crop_Diversion_kharif_Melon_UserVale').val();
    //obj.changed_kharif_melon_fundingsource = $('#Crop_Diversion_kharif_Melon_FundingSource').val();
    obj.changed_kharif_citrus_crop_area = $('#Crop_Diversion_kharif_Citrus_UserVale').val();
    //obj.changed_kharif_citrus_fundingsource = $('#Crop_Diversion_kharif_Citrus_FundingSource').val();
    //    obj.changed_kharif_peanut_crop_area = $('#Crop_Diversion_kharif_Peanut_UserVale').val();
    //    obj.changed_kharif_peanut_fundingsource = $('#Crop_Diversion_kharif_Peanut_FundingSource').val();
    obj.changed_kharif_horticulture_crop_area = $('#Crop_Diversion_kharif_Horticulture_UserVale').val();
    //obj.changed_kharif_horticulture_fundingsource = $('#Crop_Diversion_kharif_Horticulture_FundingSource').val();
    obj.changed_rabi_sericulture_crop_area = $('#Crop_Diversion_Rabi_Sericulture_UserVale').val();
    //obj.changed_rabi_sericulture_fundingsource = $('#Crop_Diversion_Rabi_Sericulture_FundingSource').val();
    obj.changed_rabi_tomoto_crop_area = $('#Crop_Diversion_Rabi_Tomota_UserVale').val();
    //obj.changed_rabi_tomoto_fundingsource = $('#Crop_Diversion_Rabi_Tomota_FundingSource').val();
    //    obj.changed_rabi_cabbage_crop_area = $('#Crop_Diversion_Rabi_Cabbage_UserVale').val();
    //    obj.changed_rabi_cabbage_fundingsource = $('#Crop_Diversion_Rabi_Cabbage_FundingSource').val();
    //    obj.changed_rabi_beans_crop_area = $('#Crop_Diversion_Rabi_Beans_UserVale').val();
    //    obj.changed_rabi_beans_fundingsource = $('#Crop_Diversion_Rabi_Beans_FundingSource').val();
    obj.changed_rabi_floriculture_crop_area = $('#Crop_Diversion_Rabi_Floriculture_UserVale').val();
    //obj.changed_rabi_floriculture_fundingsource = $('#Crop_Diversion_Rabi_Floriculture_FundingSource').val();
    //    obj.changed_rabi_potato_crop_area = $('#Crop_Diversion_Rabi_Potato_UserVale').val();
    //    obj.changed_rabi_potato_fundingsource = $('#Crop_Diversion_Rabi_Potato_FundingSource').val();
    //    obj.changed_rabi_cucumber_crop_area = $('#Crop_Diversion_Rabi_Cucumber_UserVale').val();
    //    obj.changed_rabi_cucumber_fundingsource = $('#Crop_Diversion_Rabi_Cucumber_FundingSource').val();
    obj.changed_rabi_ragi_crop_area = $('#Crop_Diversion_Rabi_Ragi_UserVale').val();
    // obj.changed_rabi_ragi_fundingsource = $('#Crop_Diversion_Rabi_Ragi_FundingSource').val();
    obj.changed_rabi_sugarcane_crop_area = $('#Crop_Diversion_Rabi_Sugarcane_UserVale').val();
    //obj.changed_rabi_sugarcane_fundingsource = $('#Crop_Diversion_Rabi_Sugarcane_FundingSource').val();
    obj.changed_rabi_maize_crop_area = $('#Crop_Diversion_Rabi_Maize_UserVale').val();
    //obj.changed_rabi_maize_fundingsource = $('#Crop_Diversion_Rabi_Maize_FundingSource').val();
    obj.changed_rabi_fodder_crop_area = $('#Crop_Diversion_Rabi_Fodder_UserVale').val();
    //obj.changed_rabi_fodder_fundingsource = $('#Crop_Diversion_Rabi_Fodder_FundingSource').val();
    obj.changed_rabi_paddy_crop_area = $('#Crop_Diversion_Rabi_Paddy_UserVale').val();
    //obj.changed_rabi_paddy_fundingsource = $('#Crop_Diversion_Rabi_Paddy_FundingSource').val();
    obj.changed_rabi_alfalfa_crop_area = $('#Crop_Diversion_Rabi_Alfalfa_UserVale').val();
    //obj.changed_rabi_alfalfa_fundingsource = $('#Crop_Diversion_Rabi_Alfalfa_FundingSource').val();
    //    obj.changed_rabi_onion_crop_area = $('#Crop_Diversion_Rabi_Onion_UserVale').val();
    //    obj.changed_rabi_onion_fundingsource = $('#Crop_Diversion_Rabi_Onion_FundingSource').val();
    obj.changed_rabi_horticulture_crop_area = $('#Crop_Diversion_Rabi_Hortculture_UserVale').val();
    //obj.changed_rabi_horticulture_fundingsource = $('#Crop_Diversion_Rabi_Hortculture_FundingSource').val();
    obj.changed_rabi_sunflower_crop_area = $('#Crop_Diversion_Rabi_Sunflower_UserVale').val();
    //obj.changed_rabi_sunflower_fundingsource = $('#Crop_Diversion_Rabi_Sunflower_FundingSource').val();
    obj.changed_summer_sericulture_crop_area = $('#Crop_Diversion_Crop_Sericulture_UserVale').val();
    // obj.changed_summer_sericulture_fundingsource = $('#Crop_Diversion_summer_Sericulture_FundingSource').val();
    obj.changed_summer_tomoto_crop_area = $('#Crop_Diversion_Crop_Tomota_UserVale').val();
    //  obj.changed_summer_tomoto_fundingsource = $('#Crop_Diversion_summer_Tomota_FundingSource').val();
    // obj.changed_summer_cabbage_crop_area = $('#Crop_Diversion_Crop_Cabbage_UserVale').val();
    //obj.changed_summer_cabbage_fundingsource = $('#Crop_Diversion_summer_Cabbage_FundingSource').val();
    // obj.changed_summer_beans_crop_area = $('#Crop_Diversion_Crop_Beans_UserVale').val();
    // obj.changed_summer_beans_fundingsource = $('#Crop_Diversion_summer_Beans_FundingSource').val();
    obj.changed_summer_floriculture_crop_area = $('#Crop_Diversion_Crop_Floriculture_UserVale').val();
    // obj.changed_summer_floriculture_fundingsource = $('#Crop_Diversion_summer_Floriculture_FundingSource').val();
    obj.changed_summer_maize_crop_area = $('#Crop_Diversion_Crop_Maize_UserVale').val();
    // obj.changed_summer_maize_fundingsource = $('#Crop_Diversion_summer_Maize_FundingSource').val();
    obj.changed_summer_fodder_crop_area = $('#Crop_Diversion_Crop_Fodder_UserVale').val();
    // obj.changed_summer_fodder_fundingsource = $('#Crop_Diversion_summer_Fodder_FundingSource').val();
    obj.changed_summer_sugarcane_crop_area = $('#Crop_Diversion_Crop_Sugarcane_UserVale').val();
    // obj.changed_summer_sugarcane_fundingsource = $('#Crop_Diversion_summer_Sugarcane_FundingSource').val();

    //orinal
    obj.original_kharif_paddy_crop_area = $('#Crop_Diversion_kharif_Paddy_UserVale1').val();

    //obj.original_kharif_paddy_fundingSource = $('#Crop_Diversion_kharif_Paddy_FundingSource2').val();

    obj.original_kharif_ragi_crop_area = $('#Crop_Diversion_kharif_Ragi_UserVale1').val();
    // obj.original_kharif_ragi_fundingsource = $('#Crop_Diversion_kharif_Ragi_FundingSource2').val();
    obj.original_kharif_groundnut_crop_area = $('#Crop_Diversion_kharif_GroundNut_UserVale1').val();
    // obj.original_kharif_groundnut_fundingsource = $('#Crop_Diversion_kharif_GroundNut_FundingSource2').val();
    obj.original_kharif_sugarcane_crop_area = $('#Crop_Diversion_kharif_Sugarcane_UserVale1').val();
    //  obj.original_kharif_sugarcane_fundingsource = $('#Crop_Diversion_kharif_Sugarcane_FundingSource2').val();
    obj.original_kharif_tomoto_crop_area = $('#Crop_Diversion_kharif_Tomato_UserVale1').val();
    //  obj.original_kharif_tomoto_fundingsource = $('#Crop_Diversion_kharif_Tomoto_FundingSource2').val();
    // obj.original_kharif_cabbage_crop_area = $('#Crop_Diversion_kharif_Cabbage_UserVale1').val();
    // obj.original_kharif_cabbage_fundingsource = $('#Crop_Diversion_kharif_Cabbage_FundingSource2').val();
    // obj.original_kharif_beans_crop_area = $('#Crop_Diversion_kharif_Beans_UserVale1').val();
    // obj.original_kharif_beans_fundingsource = $('#Crop_Diversion_kharif_Beans_FundingSource2').val();
    obj.original_kharif_floriculture_crop_area = $('#Crop_Diversion_kharif_Floriculture_UserVale1').val();
    // obj.original_kharif_floriculture_fundingsource = $('#Crop_Diversion_kharif_Floriculture_FundingSource2').val();
    obj.original_kharif_sericulture_crop_area = $('#Crop_Diversion_kharif_Sericulture_UserVale1').val();
    // obj.original_kharif_sericulture_fundingsource = $('#Crop_Diversion_kharif_Sericulture_FundingSource2').val();
    //obj.original_kharif_cucumber_crop_area = $('#Crop_Diversion_kharif_Cucmber_UserVale1').val();
    //obj.original_kharif_cucumber_fundingsource = $('#Crop_Diversion_kharif_Cucmber_FundingSource2').val();
    obj.original_kharif_banana_crop_area = $('#Crop_Diversion_kharif_Banana_UserVale1').val();
    //   obj.original_kharif_banana_fundingsource = $('#Crop_Diversion_kharif_Banana_FundingSource2').val();
    obj.original_kharif_fodder_crop_area = $('#Crop_Diversion_kharif_Fodder_UserVale1').val();
    // obj.original_kharif_fodder_fundingsource = $('#Crop_Diversion_kharif_Fodder_FundingSource2').val();
    obj.original_kharif_maize_crop_area = $('#Crop_Diversion_kharif_Maize_UserVale1').val();
    //obj.original_kharif_maize_fundingsource = $('#Crop_Diversion_kharif_Maize_FundingSource2').val();
    //obj.original_kharif_potato_crop_area = $('#Crop_Diversion_kharif_Potato_UserVale1').val();
    //obj.original_kharif_potato_fundingsource = $('#Crop_Diversion_kharif_Potato_FundingSource2').val();
    obj.original_kharif_chillies_crop_area = $('#Crop_Diversion_kharif_Chillies_UserVale1').val();
    //obj.original_kharif_chillies_fundingsource = $('#Crop_Diversion_kharif_Chillies_FundingSource2').val();
    obj.original_kharif_cotton_crop_area = $('#Crop_Diversion_kharif_Cotton_UserVale1').val();
    //obj.original_kharif_cotton_fundingsource = $('#Crop_Diversion_kharif_Cotton_FundingSource2').val();
    obj.original_kharif_melon_crop_area = $('#Crop_Diversion_kharif_Melon_UserVale1').val();
    //obj.original_kharif_melon_fundingsource = $('#Crop_Diversion_kharif_Melon_FundingSource2').val();
    obj.original_kharif_citrus_crop_area = $('#Crop_Diversion_kharif_Citrus_UserVale1').val();
    //obj.original_kharif_citrus_fundingsource = $('#Crop_Diversion_kharif_Citrus_FundingSource2').val();
    //obj.original_kharif_peanut_crop_area = $('#Crop_Diversion_kharif_Peanut_UserVale1').val();
    //obj.original_kharif_peanut_fundingsource = $('#Crop_Diversion_kharif_Peanut_FundingSource2').val();
    obj.original_kharif_horticulture_crop_area = $('#Crop_Diversion_kharif_Horticulture_UserVale1').val();
    // obj.original_kharif_horticulture_fundingsource = $('#Crop_Diversion_kharif_Horticulture_FundingSource2').val();
    obj.original_rabi_sericulture_crop_area = $('#Crop_Diversion_Rabi_Sericulture_UserVale1').val();
    //obj.original_rabi_sericulture_fundingsource = $('#Crop_Diversion_Rabi_Sericulture_FundingSource2').val();
    obj.original_rabi_tomoto_crop_area = $('#Crop_Diversion_Rabi_Tomota_UserVale1').val();
    //obj.original_rabi_tomoto_fundingsource = $('#Crop_Diversion_Rabi_Tomota_FundingSource2').val();
    //mohan processss
    // obj.original_rabi_cabbage_crop_area = $('#Crop_Diversion_Rabi_Cabbage_UserVale1').val();
    // obj.original_rabi_cabbage_fundingsource = $('#Crop_Diversion_Rabi_Cabbage_FundingSource2').val();
    // obj.original_rabi_beans_crop_area = $('#Crop_Diversion_Rabi_Beans_UserVale1').val();
    // obj.original_rabi_beans_fundingsource = $('#Crop_Diversion_Rabi_Beans_FundingSource2').val();
    obj.original_rabi_floriculture_crop_area = $('#Crop_Diversion_Rabi_Floriculture_UserVale1').val();
    //obj.original_rabi_floriculture_fundingsource = $('#Crop_Diversion_Rabi_Floriculture_FundingSource2').val();
    //obj.original_rabi_potato_crop_area = $('#Crop_Diversion_Rabi_Potato_UserVale1').val();
    //obj.original_rabi_potato_fundingsource = $('#Crop_Diversion_Rabi_Potato_FundingSource2').val();
    //obj.original_rabi_cucumber_crop_area = $('#Crop_Diversion_Rabi_Cucumber_UserVale1').val();
    //obj.original_rabi_cucumber_fundingsource = $('#Crop_Diversion_Rabi_Cucumber_FundingSource2').val();
    obj.original_rabi_ragi_crop_area = $('#Crop_Diversion_Rabi_Ragi_UserVale1').val();
    //  obj.original_rabi_ragi_fundingsource = $('#Crop_Diversion_Rabi_Ragi_FundingSource2').val();
    obj.original_rabi_sugarcane_crop_area = $('#Crop_Diversion_Rabi_Sugarcane_UserVale1').val();
    //  obj.original_rabi_sugarcane_fundingsource = $('#Crop_Diversion_Rabi_Sugarcane_FundingSource2').val();
    obj.original_rabi_maize_crop_area = $('#Crop_Diversion_Rabi_Maize_UserVale1').val();
    // obj.original_rabi_maize_fundingsource = $('#Crop_Diversion_Rabi_Maize_FundingSource2').val();
    obj.original_rabi_fodder_crop_area = $('#Crop_Diversion_Rabi_Fodder_UserVale1').val();
    // obj.original_rabi_fodder_fundingsource = $('#Crop_Diversion_Rabi_Fodder_FundingSource2').val();
    obj.original_rabi_paddy_crop_area = $('#Crop_Diversion_Rabi_Paddy_UserVale1').val();
    //obj.original_rabi_paddy_fundingsource = $('#Crop_Diversion_Rabi_Paddy_FundingSource2').val();
    obj.original_rabi_alfalfa_crop_area = $('#Crop_Diversion_Rabi_Alfalfa_UserVale1').val();
    //obj.original_rabi_alfalfa_fundingsource = $('#Crop_Diversion_Rabi_Alfalfa_FundingSource2').val();
    // obj.original_rabi_onion_crop_area = $('#Crop_Diversion_Rabi_Onion_UserVale1').val();
    // obj.original_rabi_onion_fundingsource = $('#Crop_Diversion_Rabi_Onion_FundingSource2').val();
    obj.original_rabi_horticulture_crop_area = $('#Crop_Diversion_Rabi_Hortculture_UserVale1').val();
    //obj.original_rabi_horticulture_fundingsource = $('#Crop_Diversion_Rabi_Hortculture_FundingSource2').val();
    obj.original_rabi_sunflower_crop_area = $('#Crop_Diversion_Rabi_Sunflower_UserVale1').val();
    //obj.original_rabi_sunflower_fundingsource = $('#Crop_Diversion_Rabi_Sunflower_FundingSource2').val();
    obj.original_summer_sericulture_crop_area = $('#Crop_Diversion_Crop_Sericulture_UserVale1').val();
    // obj.original_summer_sericulture_fundingsource = $('#Crop_Diversion_summer_Sericulture_FundingSource2').val();
    obj.original_summer_tomoto_crop_area = $('#Crop_Diversion_Crop_Tomota_UserVale1').val();
    // obj.original_summer_tomoto_fundingsource = $('#Crop_Diversion_summer_Tomota_FundingSource2').val();
    // obj.original_summer_cabbage_crop_area = $('#Crop_Diversion_Crop_Cabbage_UserVale1').val();
    // obj.original_summer_cabbage_fundingsource = $('#Crop_Diversion_summer_Cabbage_FundingSource2').val();
    // obj.original_summer_beans_crop_area = $('#Crop_Diversion_Crop_Beans_UserVale1').val();
    // obj.original_summer_beans_fundingsource = $('#Crop_Diversion_summer_Beans_FundingSource2').val();
    obj.original_summer_floriculture_crop_area = $('#Crop_Diversion_Crop_Floriculture_UserVale1').val();
    // obj.original_summer_floriculture_fundingsource = $('#Crop_Diversion_summer_Floriculture_FundingSource2').val();
    obj.original_summer_maize_crop_area = $('#Crop_Diversion_Crop_Maize_UserVale1').val();
    // obj.original_summer_maize_fundingsource = $('#Crop_Diversion_summer_Maize_FundingSource2').val();
    obj.original_summer_fodder_crop_area = $('#Crop_Diversion_Crop_Fodder_UserVale1').val();
    // obj.original_summer_fodder_fundingsource = $('#Crop_Diversion_summer_Fodder_FundingSource2').val();
    obj.original_summer_sugarcane_crop_area = $('#Crop_Diversion_Crop_Sugarcane_UserVale1').val();
    // obj.original_summer_sugarcane_fundingsource = $('#Crop_Diversion_summer_Sugarcane_FundingSource2').val();

    //total
    //totals
    //var original_kharif_total_waterdemand = $('#original_kharif_total_waterdemand').text();
    obj.original_kharif_total_waterdemand = parseFloat(original_kharif_total_waterdemand).toFixed(2);
    //var original_rabi_total_waterdemand = $('#original_rabi_total_waterdemand').text();
    obj.original_rabi_total_waterdemand = parseFloat(original_rabi_total_waterdemand).toFixed(2);
    //var original_summer_total_waterdemand = $('#original_summer_total_waterdemand').text();
    obj.original_summer_total_waterdemand = parseFloat(original_summer_total_waterdemand).toFixed(2);

    //var changed_kharif_total_waterdemand = $('#changed_kharif_total_waterdemand').text();
    obj.changed_kharif_total_waterdemand = parseFloat(changed_kharif_total_waterdemand).toFixed(2);
    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text();
    obj.changed_kharif_total_gw_reduc_waterdemand = parseFloat(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1).toFixed(2);

    //var changed_rabi_total_waterdemand = $('#changed_rabi_total_waterdemand').text();
    obj.changed_rabi_total_waterdemand = parseFloat(changed_rabi_total_waterdemand).toFixed(2);
    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text();
    obj.changed_rabi_total_gw_reduc_waterdemand = parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11).toFixed(2);

    //  var changed_summer_total_waterdemand = $('#changed_summer_total_waterdemand').text();
    obj.changed_summer_total_waterdemand = parseFloat(changed_summer_total_waterdemand).toFixed(2);
    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text();
    obj.changed_summer_total_gw_reduc_waterdemand = parseFloat(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1).toFixed(2);


    //annual total
    var TotalAnnual_Crop_Diversion_Reduction = $('#TotalAnnual_Crop_Diversion_Reduction').text();
    obj.crop_total_annual_waterdemand = parseFloat(TotalAnnual_Crop_Diversion_Reduction).toFixed(2);

    obj.latitude = lat;
    obj.longitude = long;
    //obj.date_time
    //obj.userid

    //for the both changed and original sidepanel id are same
    //changed
    //obj.crop_diversion_kharif_water_demand = $('#Crop_Diversion_Kharif_Water_demand').text();
    //obj.crop_diversion_rabi_water_demand = $('#Crop_Diversion_Rabi_Water_demand').text();
    //obj.crop_diversion_summer_crop_water_demand = $('#Crop_Diversion_Summer_Crop_Water_demand').text();
    //original
    //obj.crop_diversion_kharif_water_demand2 = $('#Crop_Diversion_Kharif_Water_demand').text();
    //obj.crop_diversion_rabi_water_demand2 = $('#Crop_Diversion_Rabi_Water_demand').text();
    //obj.crop_diversion_summer_crop_water_demand2 = $('#Crop_Diversion_Summer_Crop_Water_demand').text();

    //new columns water requirement
    //original water req
    obj.original_kharif_paddy_water_req = $('#original_kharif_paddy_water_req').val();
    obj.original_kharif_ragi_water_req = $('#original_kharif_ragi_water_req').val();
    obj.original_kharif_groundnut_water_req = $('#original_kharif_groundnut_water_req').val();
    obj.original_kharif_sugarcane_water_req = $('#original_kharif_sugarcane_water_req').val();
    obj.original_kharif_tomoto_water_req = $('#original_kharif_tomoto_water_req').val();
    //obj.original_kharif_cabbage_water_req = $('#original_kharif_cabbage_water_req').val();
    //obj.original_kharif_beans_water_req = $('#original_kharif_beans_water_req').val();
    obj.original_kharif_floriculture_water_req = $('#original_kharif_floriculture_water_req').val();
    obj.original_kharif_sericulture_water_req = $('#original_kharif_sericulture_water_req').val();
    //obj.original_kharif_cucumber_water_req = $('#original_kharif_cucumber_water_req').val();
    obj.original_kharif_banana_water_req = $('#original_kharif_banana_water_req').val();
    obj.original_kharif_fodder_water_req = $('#original_kharif_fodder_water_req').val();
    obj.original_kharif_maize_water_req = $('#original_kharif_maize_water_req').val();
    //obj.original_kharif_potato_water_req = $('#original_kharif_potato_water_req').val();
    obj.original_kharif_chillies_water_req = $('#original_kharif_chillies_water_req').val();
    obj.original_kharif_cotton_water_req = $('#original_kharif_cotton_water_req').val();
    obj.original_kharif_melon_water_req = $('#original_kharif_melon_water_req').val();
    obj.original_kharif_citrus_water_req = $('#original_kharif_citrus_water_req').val();
    //obj.original_kharif_peanut_water_req = $('#original_kharif_peanut_water_req').val();
    obj.original_kharif_horticulture_water_req = $('#original_kharif_horticulture_water_req').val();
    //obj.original_summer_sugarcane_irri_area = $('#original_summer_sugarcane_irri_area').val();

    obj.original_rabi_sericulture_water_req = $('#original_rabi_sericulture_water_req').val();
    obj.original_rabi_tomoto_water_req = $('#original_rabi_tomoto_water_req').val();
    obj.original_rabi_cabbage_water_req = $('#original_rabi_cabbage_water_req').val();
    obj.original_rabi_beans_water_req = $('#original_rabi_beans_water_req').val();
    obj.original_rabi_floriculture_water_req = $('#original_rabi_floriculture_water_req').val();
    // obj.original_rabi_potato_water_req = $('#original_rabi_potato_water_req').val();
    // obj.original_rabi_cucumber_water_req = $('#original_rabi_cucumber_water_req').val();
    obj.original_rabi_ragi_water_req = $('#original_rabi_ragi_water_req').val();
    obj.original_rabi_sugarcane_water_req = $('#original_rabi_sugarcane_water_req').val();
    obj.original_rabi_maize_water_req = $('#original_rabi_maize_water_req').val();
    obj.original_rabi_fodder_water_req = $('#original_rabi_fodder_water_req').val();
    obj.original_rabi_paddy_water_req = $('#original_rabi_paddy_water_req').val();
    obj.original_rabi_alfalfa_water_req = $('#original_rabi_alfalfa_water_req').val();
    // obj.original_rabi_onion_water_req = $('#original_rabi_onion_water_req').val();
    obj.original_rabi_horticulture_water_req = $('#original_rabi_horticulture_water_req').val();
    obj.original_rabi_sunflower_water_req = $('#original_rabi_sunflower_water_req').val();

    obj.original_summer_sericulture_water_req = $('#original_summer_sericulture_water_req').val();
    obj.original_summer_tomoto_water_req = $('#original_summer_tomoto_water_req').val();
    // obj.original_summer_cabbage_water_req = $('#original_summer_cabbage_water_req').val();
    // obj.original_summer_beans_water_req = $('#original_summer_beans_water_req').val();
    obj.original_summer_floriculture_water_req = $('#original_summer_floriculture_water_req').val();
    obj.original_summer_maize_water_req = $('#original_summer_maize_water_req').val();
    obj.original_summer_fodder_water_req = $('#original_summer_fodder_water_req').val();
    obj.original_summer_sugarcane_water_req = $('#original_summer_sugarcane_water_req').val();

    //changed water requirement
    obj.changed_kharif_paddy_crop_water_req = $('#changed_kharif_paddy_crop_water_req').val();

    obj.changed_kharif_ragi_crop_water_req = $('#changed_kharif_ragi_crop_water_req').val();
    obj.changed_kharif_groundnut_water_req = $('#changed_kharif_groundnut_water_req').val();
    obj.changed_kharif_sugarcane_water_req = $('#changed_kharif_sugarcane_water_req').val();
    obj.changed_kharif_tomoto_water_req = $('#changed_kharif_tomoto_water_req').val();
    //obj.changed_kharif_cabbage_water_req = $('#changed_kharif_cabbage_water_req').val();
    //obj.changed_kharif_beans_water_req = $('#changed_kharif_beans_water_req').val();
    obj.changed_kharif_floriculture_water_req = $('#changed_kharif_floriculture_water_req').val();
    obj.changed_kharif_sericulture_water_req = $('#changed_kharif_sericulture_water_req').val();
    //obj.changed_kharif_cucumber_water_req = $('#changed_kharif_cucumber_water_req').val();
    obj.changed_kharif_banana_water_req = $('#changed_kharif_banana_water_req').val();
    obj.changed_kharif_fodder_water_req = $('#changed_kharif_fodder_water_req').val();
    obj.changed_kharif_maize_water_req = $('#changed_kharif_maize_water_req').val();
    //obj.changed_kharif_potato_water_req = $('#changed_kharif_potato_water_req').val();
    obj.changed_kharif_chillies_water_req = $('#changed_kharif_chillies_water_req').val();
    obj.changed_kharif_cotton_water_req = $('#changed_kharif_cotton_water_req').val();
    obj.changed_kharif_melon_water_req = $('#changed_kharif_melon_water_req').val();
    obj.changed_kharif_citrus_water_req = $('#changed_kharif_citrus_water_req').val();
    //obj.changed_kharif_peanut_water_req = $('#changed_kharif_peanut_water_req').val();
    obj.changed_kharif_horticulture_water_req = $('#changed_kharif_horticulture_water_req').val();
    // obj.changed_summer_sugarcane_irri_area = $('#changed_summer_sugarcane_irri_area').val();

    obj.changed_rabi_sericulture_water_req = $('#changed_rabi_sericulture_water_req').val();
    obj.changed_rabi_tomoto_water_req = $('#changed_rabi_tomoto_water_req').val();
    //obj.changed_rabi_cabbage_water_req = $('#changed_rabi_cabbage_water_req').val();
    //obj.changed_rabi_beans_water_req = $('#changed_rabi_beans_water_req').val();
    obj.changed_rabi_floriculture_water_req = $('#changed_rabi_floriculture_water_req').val();
    // obj.changed_rabi_potato_water_req = $('#changed_rabi_potato_water_req').val();
    //obj.changed_rabi_cucumber_water_req = $('#changed_rabi_cucumber_water_req').val();
    obj.changed_rabi_ragi_water_req = $('#changed_rabi_ragi_water_req').val();
    obj.changed_rabi_sugarcane_water_req = $('#changed_rabi_sugarcane_water_req').val();
    obj.changed_rabi_maize_water_req = $('#changed_rabi_maize_water_req').val();
    obj.changed_rabi_fodder_water_req = $('#changed_rabi_fodder_water_req').val();
    obj.changed_rabi_paddy_water_req = $('#changed_rabi_paddy_water_req').val();
    obj.changed_rabi_alfalfa_water_req = $('#changed_rabi_alfalfa_water_req').val();
    // obj.changed_rabi_onion_water_req = $('#changed_rabi_onion_water_req').val();
    obj.changed_rabi_horticulture_water_req = $('#changed_rabi_horticulture_water_req').val();
    obj.changed_rabi_sunflower_water_req = $('#changed_rabi_sunflower_water_req').val();

    obj.changed_summer_sericulture_water_req = $('#changed_summer_sericulture_water_req').val();
    obj.changed_summer_tomoto_water_req = $('#changed_summer_tomoto_water_req').val();
    // obj.changed_summer_cabbage_water_req = $('#changed_summer_cabbage_water_req').val();
    // obj.changed_summer_beans_water_req = $('#changed_summer_beans_water_req').val();
    obj.changed_summer_floriculture_water_req = $('#changed_summer_floriculture_water_req').val();
    obj.changed_summer_maize_water_req = $('#changed_summer_maize_water_req').val();
    obj.changed_summer_fodder_water_req = $('#changed_summer_fodder_water_req').val();
    obj.changed_summer_sugarcane_water_req = $('#changed_summer_sugarcane_water_req').val();

    obj.crop_other_funding_source = $('#other_Crop_Diversion_kharif_Paddy_FundingSource').val();

    //other karif water demand
    obj.original_kharif_paddy_waterdemand = parseFloat(original_kharif_paddy_waterdemand).toFixed(2);
    obj.original_kharif_ragi_waterdemand = parseFloat(original_kharif_ragi_waterdemand).toFixed(2);
    obj.original_kharif_groundnut_waterdemand = parseFloat(original_kharif_groundnut_waterdemand).toFixed(2);
    obj.original_kharif_sugarcane_waterdemand = parseFloat(original_kharif_sugarcane_waterdemand).toFixed(2);

    obj.original_kharif_tomoto_waterdemand = parseFloat(original_kharif_tomoto_waterdemand).toFixed(2);
    // obj.original_kharif_cabbage_waterdemand = parseFloat(original_kharif_cabbage_waterdemand).toFixed(2);
    // obj.original_kharif_beans_waterdemand = parseFloat(original_kharif_beans_waterdemand).toFixed(2);
    obj.original_kharif_floriculture_waterdemand = parseFloat(original_kharif_floriculture_waterdemand).toFixed(2);

    obj.original_kharif_sericulture_waterdemand = parseFloat(original_kharif_sericulture_waterdemand).toFixed(2);
    // obj.original_kharif_cucumber_waterdemand = parseFloat(original_kharif_cucumber_waterdemand).toFixed(2);
    obj.original_kharif_banana_waterdemand = parseFloat(original_kharif_banana_waterdemand).toFixed(2);
    obj.original_kharif_fodder_waterdemand = parseFloat(original_kharif_fodder_waterdemand).toFixed(2);

    obj.original_kharif_maize_waterdemand = parseFloat(original_kharif_maize_waterdemand).toFixed(2);
    // obj.original_kharif_potato_waterdemand = parseFloat(original_kharif_potato_waterdemand).toFixed(2);
    obj.original_kharif_chillies_waterdemand = parseFloat(original_kharif_chillies_waterdemand).toFixed(2);
    obj.original_kharif_cotton_waterdemand = parseFloat(original_kharif_cotton_waterdemand).toFixed(2);

    obj.original_kharif_melon_waterdemand = parseFloat(original_kharif_melon_waterdemand).toFixed(2);
    obj.original_kharif_citrus_waterdemand = parseFloat(original_kharif_citrus_waterdemand).toFixed(2);
    // obj.original_kharif_peanut_waterdemand = parseFloat(original_kharif_peanut_waterdemand).toFixed(2);
    obj.original_kharif_horticulture_waterdemand = parseFloat(original_kharif_horticulture_waterdemand).toFixed(2);

    //original rabi water demand
    obj.original_rabi_sericulture_waterdemand = parseFloat(original_rabi_sericulture_waterdemand).toFixed(2);
    obj.original_rabi_tomoto_waterdemand = parseFloat(original_rabi_tomoto_waterdemand).toFixed(2);
    // obj.original_rabi_cabbage_waterdemand = parseFloat(original_rabi_cabbage_waterdemand).toFixed(2);
    //  obj.original_rabi_beans_waterdemand = parseFloat(original_rabi_beans_waterdemand).toFixed(2);

    obj.original_rabi_floriculture_waterdemand = parseFloat(original_rabi_floriculture_waterdemand).toFixed(2);
    // obj.original_rabi_potato_waterdemand = parseFloat(original_rabi_potato_waterdemand).toFixed(2);
    // obj.original_rabi_cucumber_waterdemand = parseFloat(original_rabi_cucumber_waterdemand).toFixed(2);
    obj.original_rabi_ragi_waterdemand = parseFloat(original_rabi_ragi_waterdemand).toFixed(2);

    obj.original_rabi_sugarcane_waterdemand = parseFloat(original_rabi_sugarcane_waterdemand).toFixed(2);
    obj.original_rabi_maize_waterdemand = parseFloat(original_rabi_maize_waterdemand).toFixed(2);
    obj.original_rabi_fodder_waterdemand = parseFloat(original_rabi_fodder_waterdemand).toFixed(2);
    obj.original_rabi_paddy_waterdemand = parseFloat(original_rabi_paddy_waterdemand).toFixed(2);

    obj.original_rabi_alfalfa_waterdemand = parseFloat(original_rabi_alfalfa_waterdemand).toFixed(2);
    //obj.original_rabi_onion_waterdemand = parseFloat(original_rabi_onion_waterdemand).toFixed(2);
    obj.original_rabi_horticulture_waterdemand = parseFloat(original_rabi_horticulture_waterdemand).toFixed(2);
    obj.original_rabi_sunflower_waterdemand = parseFloat(original_rabi_sunflower_waterdemand).toFixed(2);
    //mohan
    //summer
    obj.original_summer_sericulture_waterdemand = parseFloat(original_summer_sericulture_waterdemand).toFixed(2);
    obj.original_summer_tomoto_waterdemand = parseFloat(original_summer_tomoto_waterdemand).toFixed(2);
    // obj.original_summer_cabbage_waterdemand = parseFloat(original_summer_cabbage_waterdemand).toFixed(2);
    // obj.original_summer_beans_waterdemand = parseFloat(original_summer_beans_waterdemand).toFixed(2);

    obj.original_summer_floriculture_waterdemand = parseFloat(original_summer_floriculture_waterdemand).toFixed(2);
    obj.original_summer_maize_waterdemand = parseFloat(original_summer_maize_waterdemand).toFixed(2);
    obj.original_summer_fodder_waterdemand = parseFloat(original_summer_fodder_waterdemand).toFixed(2);
    obj.original_summer_sugarcane_waterdemand = parseFloat(original_summer_sugarcane_waterdemand).toFixed(2);

    //changed crop 
    //other karif water demand
    obj.changed_kharif_paddy_waterdemand = parseFloat(changed_kharif_paddy_waterdemand).toFixed(2);
    obj.changed_kharif_ragi_waterdemand = parseFloat(changed_kharif_ragi_waterdemand).toFixed(2);
    obj.changed_kharif_groundnut_waterdemand = parseFloat(changed_kharif_groundnut_waterdemand).toFixed(2);
    obj.changed_kharif_sugarcane_waterdemand = parseFloat(changed_kharif_sugarcane_waterdemand).toFixed(2);

    obj.changed_kharif_tomoto_waterdemand = parseFloat(changed_kharif_tomoto_waterdemand).toFixed(2);
    // obj.changed_kharif_cabbage_waterdemand = parseFloat(changed_kharif_cabbage_waterdemand).toFixed(2);
    // obj.changed_kharif_beans_waterdemand = parseFloat(changed_kharif_beans_waterdemand).toFixed(2);
    obj.changed_kharif_floriculture_waterdemand = parseFloat(changed_kharif_floriculture_waterdemand).toFixed(2);

    obj.changed_kharif_sericulture_waterdemand = parseFloat(changed_kharif_sericulture_waterdemand).toFixed(2);
    // obj.changed_kharif_cucumber_waterdemand = parseFloat(changed_kharif_cucumber_waterdemand).toFixed(2);
    obj.changed_kharif_banana_waterdemand = parseFloat(changed_kharif_banana_waterdemand).toFixed(2);
    obj.changed_kharif_fodder_waterdemand = parseFloat(changed_kharif_fodder_waterdemand).toFixed(2);

    obj.changed_kharif_maize_waterdemand = parseFloat(changed_kharif_maize_waterdemand).toFixed(2);
    // obj.changed_kharif_potato_waterdemand = parseFloat(changed_kharif_potato_waterdemand).toFixed(2);
    obj.changed_kharif_chillies_waterdemand = parseFloat(changed_kharif_chillies_waterdemand).toFixed(2);
    obj.changed_kharif_cotton_waterdemand = parseFloat(changed_kharif_cotton_waterdemand).toFixed(2);

    obj.changed_kharif_melon_waterdemand = parseFloat(changed_kharif_melon_waterdemand).toFixed(2);
    obj.changed_kharif_citrus_waterdemand = parseFloat(changed_kharif_citrus_waterdemand).toFixed(2);
    //  obj.changed_kharif_peanut_waterdemand = parseFloat(changed_kharif_peanut_waterdemand).toFixed(2);
    obj.changed_kharif_horticulture_waterdemand = parseFloat(changed_kharif_horticulture_waterdemand).toFixed(2);

    //original rabi water demand
    obj.changed_rabi_sericulture_waterdemand = parseFloat(changed_rabi_sericulture_waterdemand).toFixed(2);
    obj.changed_rabi_tomoto_waterdemand = parseFloat(changed_rabi_tomoto_waterdemand).toFixed(2);
    //obj.changed_rabi_cabbage_waterdemand = parseFloat(changed_rabi_cabbage_waterdemand).toFixed(2);
    //obj.changed_rabi_beans_waterdemand = parseFloat(changed_rabi_beans_waterdemand).toFixed(2);

    obj.changed_rabi_floriculture_waterdemand = parseFloat(changed_rabi_floriculture_waterdemand).toFixed(2);
    // obj.changed_rabi_potato_waterdemand = parseFloat(changed_rabi_potato_waterdemand).toFixed(2);
    //obj.changed_rabi_cucumber_waterdemand = parseFloat(changed_rabi_cucumber_waterdemand).toFixed(2);
    obj.changed_rabi_ragi_waterdemand = parseFloat(changed_rabi_ragi_waterdemand).toFixed(2);

    obj.changed_rabi_sugarcane_waterdemand = parseFloat(changed_rabi_sugarcane_waterdemand).toFixed(2);
    obj.changed_rabi_maize_waterdemand = parseFloat(changed_rabi_maize_waterdemand).toFixed(2);
    obj.changed_rabi_fodder_waterdemand = parseFloat(changed_rabi_fodder_waterdemand).toFixed(2);
    obj.changed_rabi_paddy_waterdemand = parseFloat(changed_rabi_paddy_waterdemand).toFixed(2);

    obj.changed_rabi_alfalfa_waterdemand = parseFloat(changed_rabi_alfalfa_waterdemand).toFixed(2);
    // obj.changed_rabi_onion_waterdemand = parseFloat(changed_rabi_onion_waterdemand).toFixed(2);
    obj.changed_rabi_horticulture_waterdemand = parseFloat(changed_rabi_horticulture_waterdemand).toFixed(2);
    obj.changed_rabi_sunflower_waterdemand = parseFloat(changed_rabi_sunflower_waterdemand).toFixed(2);

    //summer
    obj.changed_summer_sericulture_waterdemand = parseFloat(changed_summer_sericulture_waterdemand).toFixed(2);
    obj.changed_summer_tomoto_waterdemand = parseFloat(changed_summer_tomoto_waterdemand).toFixed(2);
    // obj.changed_summer_cabbage_waterdemand = parseFloat(changed_summer_cabbage_waterdemand).toFixed(2);
    // obj.changed_summer_beans_waterdemand = parseFloat(changed_summer_beans_waterdemand).toFixed(2);

    obj.changed_summer_floriculture_waterdemand = parseFloat(changed_summer_floriculture_waterdemand).toFixed(2);
    obj.changed_summer_maize_waterdemand = parseFloat(changed_summer_maize_waterdemand).toFixed(2);
    obj.changed_summer_fodder_waterdemand = parseFloat(changed_summer_fodder_waterdemand).toFixed(2);
    obj.changed_summer_sugarcane_waterdemand = parseFloat(changed_summer_sugarcane_waterdemand).toFixed(2);

    //reduction values
    //kharif
    var changed_kharif_paddy_gw_reduc_waterdemand = $('#changed_kharif_paddy_gw_reduc_waterdemand').text();
    if (changed_kharif_paddy_gw_reduc_waterdemand != "" && changed_kharif_paddy_gw_reduc_waterdemand != null) {
        obj.changed_kharif_paddy_gw_reduc_waterdemand = parseFloat(changed_kharif_paddy_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_paddy_gw_reduc_waterdemand = 0;
    }


    var changed_kharif_ragi_gw_reduc_waterdemand = $('#changed_kharif_ragi_gw_reduc_waterdemand').text();
    if (changed_kharif_ragi_gw_reduc_waterdemand != "" && changed_kharif_ragi_gw_reduc_waterdemand != null) {
        obj.changed_kharif_ragi_gw_reduc_waterdemand = parseFloat(changed_kharif_ragi_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_ragi_gw_reduc_waterdemand = 0;
    }

    var changed_kharif_groundnut_gw_reduc_waterdemand = $('#changed_kharif_groundnut_gw_reduc_waterdemand').text();
    if (changed_kharif_groundnut_gw_reduc_waterdemand != "" && changed_kharif_groundnut_gw_reduc_waterdemand != null) {
        obj.changed_kharif_groundnut_gw_reduc_waterdemand = parseFloat(changed_kharif_groundnut_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_groundnut_gw_reduc_waterdemand = 0;
    }


    var changed_kharif_sugarcane_gw_reduc_waterdemand = $('#changed_kharif_sugarcane_gw_reduc_waterdemand').text();
    if (changed_kharif_sugarcane_gw_reduc_waterdemand != "" && changed_kharif_sugarcane_gw_reduc_waterdemand != null) {
        obj.changed_kharif_sugarcane_gw_reduc_waterdemand = parseFloat(changed_kharif_sugarcane_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_sugarcane_gw_reduc_waterdemand = 0;
    }

    var changed_kharif_tomoto_gw_reduc_waterdemand = $('#changed_kharif_tomoto_gw_reduc_waterdemand').text();
    if (changed_kharif_tomoto_gw_reduc_waterdemand != "" && changed_kharif_tomoto_gw_reduc_waterdemand != null) {
        obj.changed_kharif_tomoto_gw_reduc_waterdemand = parseFloat(changed_kharif_tomoto_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_tomoto_gw_reduc_waterdemand = 0;
    }


    //var changed_kharif_cabbage_gw_reduc_waterdemand = $('#changed_kharif_cabbage_gw_reduc_waterdemand').text();
    //if (changed_kharif_cabbage_gw_reduc_waterdemand != "" && changed_kharif_cabbage_gw_reduc_waterdemand != null) {
    //    obj.changed_kharif_cabbage_gw_reduc_waterdemand = parseFloat(changed_kharif_cabbage_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_kharif_cabbage_gw_reduc_waterdemand = 0;
    //}


    //var changed_kharif_beans_gw_reduc_waterdemand = $('#changed_kharif_beans_gw_reduc_waterdemand').text();
    //if (changed_kharif_beans_gw_reduc_waterdemand != "" && changed_kharif_beans_gw_reduc_waterdemand != null) {
    //    obj.changed_kharif_beans_gw_reduc_waterdemand = parseFloat(changed_kharif_beans_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_kharif_beans_gw_reduc_waterdemand = 0;
    //}


    var changed_kharif_floriculture_gw_reduc_waterdemand = $('#changed_kharif_floriculture_gw_reduc_waterdemand').text();
    if (changed_kharif_floriculture_gw_reduc_waterdemand != "" && changed_kharif_floriculture_gw_reduc_waterdemand != null) {
        obj.changed_kharif_floriculture_gw_reduc_waterdemand = parseFloat(changed_kharif_floriculture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_floriculture_gw_reduc_waterdemand = 0;
    }

    var changed_kharif_sericulture_gw_reduc_waterdemand = $('#changed_kharif_sericulture_gw_reduc_waterdemand').text();
    if (changed_kharif_sericulture_gw_reduc_waterdemand != "" && changed_kharif_sericulture_gw_reduc_waterdemand != null) {
        obj.changed_kharif_sericulture_gw_reduc_waterdemand = parseFloat(changed_kharif_sericulture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_sericulture_gw_reduc_waterdemand = 0;
    }


    //var changed_kharif_cucumber_gw_reduc_waterdemand = $('#changed_kharif_cucumber_gw_reduc_waterdemand').text();
    //if (changed_kharif_cucumber_gw_reduc_waterdemand != "" && changed_kharif_cucumber_gw_reduc_waterdemand != null) {
    //    obj.changed_kharif_cucumber_gw_reduc_waterdemand = parseFloat(changed_kharif_cucumber_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_kharif_cucumber_gw_reduc_waterdemand = 0;
    //}

    var changed_kharif_banana_gw_reduc_waterdemand = $('#changed_kharif_banana_gw_reduc_waterdemand').text();
    if (changed_kharif_banana_gw_reduc_waterdemand != "" && changed_kharif_banana_gw_reduc_waterdemand != null) {
        obj.changed_kharif_banana_gw_reduc_waterdemand = parseFloat(changed_kharif_banana_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_banana_gw_reduc_waterdemand = 0;
    }


    var changed_kharif_fodder_gw_reduc_waterdemand = $('#changed_kharif_fodder_gw_reduc_waterdemand').text();
    if (changed_kharif_fodder_gw_reduc_waterdemand != "" && changed_kharif_fodder_gw_reduc_waterdemand != null) {
        obj.changed_kharif_fodder_gw_reduc_waterdemand = parseFloat(changed_kharif_fodder_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_fodder_gw_reduc_waterdemand = 0;
    }
    var changed_kharif_maize_gw_reduc_waterdemand = $('#changed_kharif_maize_gw_reduc_waterdemand').text();
    if (changed_kharif_maize_gw_reduc_waterdemand != "" && changed_kharif_maize_gw_reduc_waterdemand != null) {
        obj.changed_kharif_maize_gw_reduc_waterdemand = parseFloat(changed_kharif_maize_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_maize_gw_reduc_waterdemand = 0;
    }

    //var changed_kharif_potato_gw_reduc_waterdemand = $('#changed_kharif_potato_gw_reduc_waterdemand').text();
    //if (changed_kharif_potato_gw_reduc_waterdemand != "" && changed_kharif_potato_gw_reduc_waterdemand != null) {
    //    obj.changed_kharif_potato_gw_reduc_waterdemand = parseFloat(changed_kharif_potato_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_kharif_potato_gw_reduc_waterdemand = 0;
    //}

    var changed_kharif_chillies_gw_reduc_waterdemand = $('#changed_kharif_chillies_gw_reduc_waterdemand').text();
    if (changed_kharif_chillies_gw_reduc_waterdemand != "" && changed_kharif_chillies_gw_reduc_waterdemand != null) {
        obj.changed_kharif_chillies_gw_reduc_waterdemand = parseFloat(changed_kharif_chillies_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_chillies_gw_reduc_waterdemand = 0;
    }

    var changed_kharif_cotton_gw_reduc_waterdemand = $('#changed_kharif_cotton_gw_reduc_waterdemand').text();
    if (changed_kharif_cotton_gw_reduc_waterdemand != "" && changed_kharif_cotton_gw_reduc_waterdemand != null) {
        obj.changed_kharif_cotton_gw_reduc_waterdemand = parseFloat(changed_kharif_cotton_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_cotton_gw_reduc_waterdemand = 0;
    }

    var changed_kharif_melon_gw_reduc_waterdemand = $('#changed_kharif_melon_gw_reduc_waterdemand').text();
    if (changed_kharif_melon_gw_reduc_waterdemand != "" && changed_kharif_melon_gw_reduc_waterdemand != null) {
        obj.changed_kharif_melon_gw_reduc_waterdemand = parseFloat(changed_kharif_melon_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_melon_gw_reduc_waterdemand = 0;
    }


    var changed_kharif_citrus_gw_reduc_waterdemand = $('#changed_kharif_citrus_gw_reduc_waterdemand').text();
    if (changed_kharif_citrus_gw_reduc_waterdemand != "" && changed_kharif_citrus_gw_reduc_waterdemand != null) {
        obj.changed_kharif_citrus_gw_reduc_waterdemand = parseFloat(changed_kharif_citrus_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_citrus_gw_reduc_waterdemand = 0;
    }


    //var changed_kharif_peanut_gw_reduc_waterdemand = $('#changed_kharif_peanut_gw_reduc_waterdemand').text();
    //if (changed_kharif_peanut_gw_reduc_waterdemand != "" && changed_kharif_peanut_gw_reduc_waterdemand != null) {
    //    obj.changed_kharif_peanut_gw_reduc_waterdemand = parseFloat(changed_kharif_peanut_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_kharif_peanut_gw_reduc_waterdemand = 0;
    //}


    var changed_kharif_horticulture_gw_reduc_waterdemand = $('#changed_kharif_horticulture_gw_reduc_waterdemand').text();
    if (changed_kharif_horticulture_gw_reduc_waterdemand != "" && changed_kharif_horticulture_gw_reduc_waterdemand != null) {
        obj.changed_kharif_horticulture_gw_reduc_waterdemand = parseFloat(changed_kharif_horticulture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_kharif_horticulture_gw_reduc_waterdemand = 0;
    }


    //rabi

    var changed_rabi_sericulture_gw_reduc_waterdemand = $('#changed_rabi_sericulture_gw_reduc_waterdemand').text();
    if (changed_rabi_sericulture_gw_reduc_waterdemand != "" && changed_rabi_sericulture_gw_reduc_waterdemand != null) {
        obj.changed_rabi_sericulture_gw_reduc_waterdemand = parseFloat(changed_rabi_sericulture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_sericulture_gw_reduc_waterdemand = 0;
    }


    var changed_rabi_tomoto_gw_reduc_waterdemand = $('#changed_rabi_tomoto_gw_reduc_waterdemand').text();
    if (changed_rabi_tomoto_gw_reduc_waterdemand != "" && changed_rabi_tomoto_gw_reduc_waterdemand != null) {
        obj.changed_rabi_tomoto_gw_reduc_waterdemand = parseFloat(changed_rabi_tomoto_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_tomoto_gw_reduc_waterdemand = 0;
    }


    //var changed_rabi_cabbage_gw_reduc_waterdemand = $('#changed_rabi_cabbage_gw_reduc_waterdemand').text();
    //if (changed_rabi_cabbage_gw_reduc_waterdemand != "" && changed_rabi_cabbage_gw_reduc_waterdemand != null) {
    //    obj.changed_rabi_cabbage_gw_reduc_waterdemand = parseFloat(changed_rabi_cabbage_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_rabi_cabbage_gw_reduc_waterdemand = 0;
    //}


    //var changed_rabi_beans_gw_reduc_waterdemand = $('#changed_rabi_beans_gw_reduc_waterdemand').text();
    //if (changed_rabi_beans_gw_reduc_waterdemand != "" && changed_rabi_beans_gw_reduc_waterdemand != null) {
    //    obj.changed_rabi_beans_gw_reduc_waterdemand = parseFloat(changed_rabi_beans_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_rabi_beans_gw_reduc_waterdemand = 0;
    //}


    var changed_rabi_floriculture_gw_reduc_waterdemand = $('#changed_rabi_floriculture_gw_reduc_waterdemand').text();
    if (changed_rabi_floriculture_gw_reduc_waterdemand != "" && changed_rabi_floriculture_gw_reduc_waterdemand != null) {
        obj.changed_rabi_floriculture_gw_reduc_waterdemand = parseFloat(changed_rabi_floriculture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_floriculture_gw_reduc_waterdemand = 0;
    }

    //var changed_rabi_potato_gw_reduc_waterdemand = $('#changed_rabi_potato_gw_reduc_waterdemand').text();
    //if (changed_rabi_potato_gw_reduc_waterdemand != "" && changed_rabi_potato_gw_reduc_waterdemand != null) {
    //    obj.changed_rabi_potato_gw_reduc_waterdemand = parseFloat(changed_rabi_potato_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_rabi_potato_gw_reduc_waterdemand = 0;
    //}
    //var changed_rabi_cucumber_gw_reduc_waterdemand = $('#changed_rabi_cucumber_gw_reduc_waterdemand').text();
    //if (changed_rabi_cucumber_gw_reduc_waterdemand != "" && changed_rabi_cucumber_gw_reduc_waterdemand != null) {
    //    obj.changed_rabi_cucumber_gw_reduc_waterdemand = parseFloat(changed_rabi_cucumber_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_rabi_cucumber_gw_reduc_waterdemand = 0;
    //}

    var changed_rabi_ragi_gw_reduc_waterdemand = $('#changed_rabi_ragi_gw_reduc_waterdemand').text();
    if (changed_rabi_ragi_gw_reduc_waterdemand != "" && changed_rabi_ragi_gw_reduc_waterdemand != null) {
        obj.changed_rabi_ragi_gw_reduc_waterdemand = parseFloat(changed_rabi_ragi_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_ragi_gw_reduc_waterdemand = 0;
    }
    var changed_rabi_sugarcane_gw_reduc_waterdemand = $('#changed_rabi_sugarcane_gw_reduc_waterdemand').text();
    if (changed_rabi_sugarcane_gw_reduc_waterdemand != "" && changed_rabi_sugarcane_gw_reduc_waterdemand != null) {
        obj.changed_rabi_sugarcane_gw_reduc_waterdemand = parseFloat(changed_rabi_sugarcane_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_sugarcane_gw_reduc_waterdemand = 0;
    }
    var changed_rabi_maize_gw_reduc_waterdemand = $('#changed_rabi_maize_gw_reduc_waterdemand').text();
    if (changed_rabi_maize_gw_reduc_waterdemand != "" && changed_rabi_maize_gw_reduc_waterdemand != null) {
        obj.changed_rabi_maize_gw_reduc_waterdemand = parseFloat(changed_rabi_maize_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_maize_gw_reduc_waterdemand = 0;
    }
    var changed_rabi_fodder_gw_reduc_waterdemand = $('#changed_rabi_fodder_gw_reduc_waterdemand').text();
    if (changed_rabi_fodder_gw_reduc_waterdemand != "" && changed_rabi_fodder_gw_reduc_waterdemand != null) {
        obj.changed_rabi_fodder_gw_reduc_waterdemand = parseFloat(changed_rabi_fodder_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_fodder_gw_reduc_waterdemand = 0;
    }

    var changed_rabi_paddy_gw_reduc_waterdemand = $('#changed_rabi_paddy_gw_reduc_waterdemand').text();
    if (changed_rabi_paddy_gw_reduc_waterdemand != "" && changed_rabi_paddy_gw_reduc_waterdemand != null) {
        obj.changed_rabi_paddy_gw_reduc_waterdemand = parseFloat(changed_rabi_paddy_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_paddy_gw_reduc_waterdemand = 0;
    }

    var changed_rabi_alfalfa_gw_reduc_waterdemand = $('#changed_rabi_alfalfa_gw_reduc_waterdemand').text();
    if (changed_rabi_alfalfa_gw_reduc_waterdemand != "" && changed_rabi_alfalfa_gw_reduc_waterdemand != null) {
        obj.changed_rabi_alfalfa_gw_reduc_waterdemand = parseFloat(changed_rabi_alfalfa_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_alfalfa_gw_reduc_waterdemand = 0;
    }

    //var changed_rabi_onion_gw_reduc_waterdemand = $('#changed_rabi_onion_gw_reduc_waterdemand').text();
    //if (changed_rabi_onion_gw_reduc_waterdemand != "" && changed_rabi_onion_gw_reduc_waterdemand != null) {
    //    obj.changed_rabi_onion_gw_reduc_waterdemand = parseFloat(changed_rabi_onion_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_rabi_onion_gw_reduc_waterdemand = 0;
    //}
    var changed_rabi_horticulture_gw_reduc_waterdemand = $('#changed_rabi_horticulture_gw_reduc_waterdemand').text();
    if (changed_rabi_horticulture_gw_reduc_waterdemand != "" && changed_rabi_horticulture_gw_reduc_waterdemand != null) {
        obj.changed_rabi_horticulture_gw_reduc_waterdemand = parseFloat(changed_rabi_horticulture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_horticulture_gw_reduc_waterdemand = 0;
    }
    var changed_rabi_sunflower_gw_reduc_waterdemand = $('#changed_rabi_sunflower_gw_reduc_waterdemand').text();
    if (changed_rabi_sunflower_gw_reduc_waterdemand != "" && changed_rabi_sunflower_gw_reduc_waterdemand != null) {
        obj.changed_rabi_sunflower_gw_reduc_waterdemand = parseFloat(changed_rabi_sunflower_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_sunflower_gw_reduc_waterdemand = 0;
    }

    //summer
    var changed_summer_sericulture_gw_reduc_waterdemand = $('#changed_summer_sericulture_gw_reduc_waterdemand').text();
    if (changed_summer_sericulture_gw_reduc_waterdemand != "" && changed_summer_sericulture_gw_reduc_waterdemand != null) {
        obj.changed_summer_sericulture_gw_reduc_waterdemand = parseFloat(changed_summer_sericulture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_rabi_sunflower_gw_reduc_waterdemand = 0;
    }
    var changed_summer_tomoto_gw_reduc_waterdemand = $('#changed_summer_tomoto_gw_reduc_waterdemand').text();
    if (changed_summer_tomoto_gw_reduc_waterdemand != "" && changed_summer_tomoto_gw_reduc_waterdemand != null) {
        obj.changed_summer_tomoto_gw_reduc_waterdemand = parseFloat(changed_summer_tomoto_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_summer_tomoto_gw_reduc_waterdemand = 0;
    }

    //var changed_summer_cabbage_gw_reduc_waterdemand = $('#changed_summer_cabbage_gw_reduc_waterdemand').text();
    //if (changed_summer_cabbage_gw_reduc_waterdemand != "" && changed_summer_cabbage_gw_reduc_waterdemand != null) {
    //    obj.changed_summer_cabbage_gw_reduc_waterdemand = parseFloat(changed_summer_cabbage_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_summer_cabbage_gw_reduc_waterdemand = 0;
    //}

    //var changed_summer_beans_gw_reduc_waterdemand = $('#changed_summer_beans_gw_reduc_waterdemand').text();
    //if (changed_summer_beans_gw_reduc_waterdemand != "" && changed_summer_beans_gw_reduc_waterdemand != null) {
    //    obj.changed_summer_beans_gw_reduc_waterdemand = parseFloat(changed_summer_beans_gw_reduc_waterdemand).toFixed(2);
    //}
    //else {
    //    obj.changed_summer_beans_gw_reduc_waterdemand = 0;
    //}
    var changed_summer_floriculture_gw_reduc_waterdemand = $('#changed_summer_floriculture_gw_reduc_waterdemand').text();
    if (changed_summer_floriculture_gw_reduc_waterdemand != "" && changed_summer_floriculture_gw_reduc_waterdemand != null) {
        obj.changed_summer_floriculture_gw_reduc_waterdemand = parseFloat(changed_summer_floriculture_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_summer_floriculture_gw_reduc_waterdemand = 0;
    }
    var changed_summer_maize_gw_reduc_waterdemand = $('#changed_summer_maize_gw_reduc_waterdemand').text();
    if (changed_summer_maize_gw_reduc_waterdemand != "" && changed_summer_maize_gw_reduc_waterdemand != null) {
        obj.changed_summer_maize_gw_reduc_waterdemand = parseFloat(changed_summer_maize_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_summer_maize_gw_reduc_waterdemand = 0;
    }

    var changed_summer_fodder_gw_reduc_waterdemand = $('#changed_summer_fodder_gw_reduc_waterdemand').text();
    if (changed_summer_fodder_gw_reduc_waterdemand != "" && changed_summer_fodder_gw_reduc_waterdemand != null) {
        obj.changed_summer_fodder_gw_reduc_waterdemand = parseFloat(changed_summer_fodder_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_summer_fodder_gw_reduc_waterdemand = 0;
    }


    var changed_summer_sugarcane_gw_reduc_waterdemand = $('#changed_summer_sugarcane_gw_reduc_waterdemand').text();
    if (changed_summer_sugarcane_gw_reduc_waterdemand != "" && changed_summer_sugarcane_gw_reduc_waterdemand != null) {
        obj.changed_summer_sugarcane_gw_reduc_waterdemand = parseFloat(changed_summer_sugarcane_gw_reduc_waterdemand).toFixed(2);
    }
    else {
        obj.changed_summer_sugarcane_gw_reduc_waterdemand = 0;
    }

    //horiculture
    obj.original_summer_horticulture_crop_area = $('#original_summer_horticulture_crop_area').val();
    obj.original_summer_horticulture_water_req = $('#original_summer_horticulture_water_req').val();
    obj.original_summer_horticulture_waterdemand = $('#original_summer_horticulture_waterdemand').val();
    obj.changed_summer_horticulture_crop_area = $('#changed_summer_horticulture_crop_area').val();
    obj.changed_summer_horticulture_water_req = $('#changed_summer_horticulture_water_req').val();
    obj.changed_summer_horticulture_waterdemand = $('#changed_summer_horticulture_waterdemand').val();
    obj.pipeline_summer_horticulture_reduction_gw_demand = $('#pipeline_summer_horticulture_reduction_gw_demand').val();

    //other crops 5boxes original and changed
    obj.original_kharif_othercrop_name1 = $('#original_kharif_othercrop_name1').val();
    obj.original_kharif_othercrop_area1 = $('#original_kharif_othercrop_area1').val();
    obj.original_kharif_horticulture_water_req1 = $('#original_kharif_horticulture_water_req1').val();
    obj.original_kharif_horticulture_waterdemand1 = $('#original_kharif_horticulture_waterdemand1').text();

    obj.original_kharif_othercrop_name2 = $('#original_kharif_othercrop_name2').val();
    obj.original_kharif_othercrop_area2 = $('#original_kharif_othercrop_area2').val();
    obj.original_kharif_horticulture_water_req2 = $('#original_kharif_horticulture_water_req2').val();
    obj.original_kharif_horticulture_waterdemand2 = $('#original_kharif_horticulture_waterdemand2').text();

    obj.original_kharif_othercrop_name3 = $('#original_kharif_othercrop_name3').val();
    obj.original_kharif_othercrop_area3 = $('#original_kharif_othercrop_area3').val();
    obj.original_kharif_horticulture_water_req3 = $('#original_kharif_horticulture_water_req3').val();
    obj.original_kharif_horticulture_waterdemand3 = $('#original_kharif_horticulture_waterdemand3').text();

    obj.original_kharif_othercrop_name4 = $('#original_kharif_othercrop_name4').val();
    obj.original_kharif_othercrop_area4 = $('#original_kharif_othercrop_area4').val();
    obj.original_kharif_horticulture_water_req4 = $('#original_kharif_horticulture_water_req4').val();
    obj.original_kharif_horticulture_waterdemand4 = $('#original_kharif_horticulture_waterdemand4').text();

    obj.original_kharif_othercrop_name5 = $('#original_kharif_othercrop_name5').val();
    obj.original_kharif_othercrop_area5 = $('#original_kharif_othercrop_area5').val();
    obj.original_kharif_horticulture_water_req5 = $('#original_kharif_horticulture_water_req5').val();
    obj.original_kharif_horticulture_waterdemand5 = $('#original_kharif_horticulture_waterdemand5').text();

    obj.original_rabi_othercrop_name1 = $('#original_rabi_othercrop_name1').val();
    obj.original_rabi_othercrop_area1 = $('#original_rabi_othercrop_area1').val();
    obj.original_rabi_horticulture_water_req1 = $('#original_rabi_horticulture_water_req1').val();
    obj.original_rabi_horticulture_waterdemand1 = $('#original_rabi_horticulture_waterdemand1').text();

    obj.original_rabi_othercrop_name2 = $('#original_rabi_othercrop_name2').val();
    obj.original_rabi_othercrop_area2 = $('#original_rabi_othercrop_area2').val();
    obj.original_rabi_horticulture_water_req2 = $('#original_rabi_horticulture_water_req2').val();
    obj.original_rabi_horticulture_waterdemand2 = $('#original_rabi_horticulture_waterdemand2').text();

    obj.original_rabi_othercrop_name3 = $('#original_rabi_othercrop_name3').val();
    obj.original_rabi_othercrop_area3 = $('#original_rabi_othercrop_area3').val();
    obj.original_rabi_horticulture_water_req3 = $('#original_rabi_horticulture_water_req3').val();
    obj.original_rabi_horticulture_waterdemand3 = $('#original_rabi_horticulture_waterdemand3').text();

    obj.original_rabi_othercrop_name4 = $('#original_rabi_othercrop_name4').val();
    obj.original_rabi_othercrop_area4 = $('#original_rabi_othercrop_area4').val();
    obj.original_rabi_horticulture_water_req4 = $('#original_rabi_horticulture_water_req4').val();
    obj.original_rabi_horticulture_waterdemand4 = $('#original_rabi_horticulture_waterdemand4').text();

    obj.original_rabi_othercrop_name5 = $('#original_rabi_othercrop_name5').val();
    obj.original_rabi_othercrop_area5 = $('#original_rabi_othercrop_area5').val();
    obj.original_rabi_horticulture_water_req5 = $('#original_rabi_horticulture_water_req5').val();
    obj.original_rabi_horticulture_waterdemand5 = $('#original_rabi_horticulture_waterdemand5').text();

    obj.original_summer_othercrop_name1 = $('#original_summer_othercrop_name1').val();
    obj.original_summer_othercrop_area1 = $('#original_summer_othercrop_area1').val();
    obj.original_summer_horticulture_water_req1 = $('#original_summer_horticulture_water_req1').val();
    obj.original_summer_horticulture_waterdemand1 = $('#original_summer_horticulture_waterdemand1').text();

    obj.original_summer_othercrop_name2 = $('#original_summer_othercrop_name2').val();
    obj.original_summer_othercrop_area2 = $('#original_summer_othercrop_area2').val();
    obj.original_summer_horticulture_water_req2 = $('#original_summer_horticulture_water_req2').val();
    obj.original_summer_horticulture_waterdemand2 = $('#original_summer_horticulture_waterdemand2').text();

    obj.original_summer_othercrop_name3 = $('#original_summer_othercrop_name3').val();
    obj.original_summer_othercrop_area3 = $('#original_summer_othercrop_area3').val();
    obj.original_summer_horticulture_water_req3 = $('#original_summer_horticulture_water_req3').val();
    obj.original_summer_horticulture_waterdemand3 = $('#original_summer_horticulture_waterdemand3').text();


    obj.original_summer_othercrop_name4 = $('#original_summer_othercrop_name4').val();
    obj.original_summer_othercrop_area4 = $('#original_summer_othercrop_area4').val();
    obj.original_summer_horticulture_water_req4 = $('#original_summer_horticulture_water_req4').val();
    obj.original_summer_horticulture_waterdemand4 = $('#original_summer_horticulture_waterdemand4').text();

    obj.original_summer_othercrop_name5 = $('#original_summer_othercrop_name5').val();
    obj.original_summer_othercrop_area5 = $('#original_summer_othercrop_area5').val();
    obj.original_summer_horticulture_water_req5 = $('#original_summer_horticulture_water_req5').val();
    obj.original_summer_horticulture_waterdemand5 = $('#original_summer_horticulture_waterdemand5').text();


    obj.changed_kharif_othercrop_name1 = $('#changed_kharif_othercrop_name1').val();
    obj.changed_kharif_croparea_area1 = $('#changed_kharif_croparea_area1').val();
    obj.changed_kharif_horticulture_water_req1 = $('#changed_kharif_horticulture_water_req1').val();
    obj.changed_kharif_horticulture_waterdemand1 = $('#changed_kharif_horticulture_waterdemand1').text();
    obj.changed_kharif_horticulture_reduction_gw_demand1 = $('#changed_kharif_horticulture_reduction_gw_demand1').text();

    obj.changed_kharif_othercrop_name2 = $('#changed_kharif_othercrop_name2').val();
    obj.changed_kharif_croparea_area2 = $('#changed_kharif_croparea_area2').val();
    obj.changed_kharif_horticulture_water_req2 = $('#changed_kharif_horticulture_water_req2').val();
    obj.changed_kharif_horticulture_waterdemand2 = $('#changed_kharif_horticulture_waterdemand2').text();
    obj.changed_kharif_horticulture_reduction_gw_demand2 = $('#changed_kharif_horticulture_reduction_gw_demand2').text();

    obj.changed_kharif_othercrop_name3 = $('#changed_kharif_othercrop_name3').val();
    obj.changed_kharif_croparea_area3 = $('#changed_kharif_croparea_area3').val();
    obj.changed_kharif_horticulture_water_req3 = $('#changed_kharif_horticulture_water_req3').val();
    obj.changed_kharif_horticulture_waterdemand3 = $('#changed_kharif_horticulture_waterdemand3').text();
    obj.changed_kharif_horticulture_reduction_gw_demand3 = $('#changed_kharif_horticulture_reduction_gw_demand3').text();

    obj.changed_kharif_othercrop_name4 = $('#changed_kharif_othercrop_name4').val();
    obj.changed_kharif_croparea_area4 = $('#changed_kharif_croparea_area4').val();
    obj.changed_kharif_horticulture_water_req4 = $('#changed_kharif_horticulture_water_req4').val();
    obj.changed_kharif_horticulture_waterdemand4 = $('#changed_kharif_horticulture_waterdemand4').text();
    obj.changed_kharif_horticulture_reduction_gw_demand4 = $('#changed_kharif_horticulture_reduction_gw_demand4').text();

    obj.changed_kharif_othercrop_name5 = $('#changed_kharif_othercrop_name5').val();
    obj.changed_kharif_croparea_area5 = $('#changed_kharif_croparea_area5').val();
    obj.changed_kharif_horticulture_water_req5 = $('#changed_kharif_horticulture_water_req5').val();
    obj.changed_kharif_horticulture_waterdemand5 = $('#changed_kharif_horticulture_waterdemand5').text();
    obj.changed_kharif_horticulture_reduction_gw_demand5 = $('#changed_kharif_horticulture_reduction_gw_demand5').text();

    obj.changed_rabi_othercrop_name1 = $('#changed_rabi_othercrop_name1').val();
    obj.changed_rabi_croparea_area1 = $('#changed_rabi_croparea_area1').val();
    obj.changed_rabi_horticulture_water_req1 = $('#changed_rabi_horticulture_water_req1').val();
    obj.changed_rabi_horticulture_waterdemand1 = $('#changed_rabi_horticulture_waterdemand1').text();
    obj.changed_rabi_horticulture_reduction_gw_demand1 = $('#changed_rabi_horticulture_reduction_gw_demand1').text();

    obj.changed_rabi_othercrop_name2 = $('#changed_rabi_othercrop_name2').val();
    obj.changed_rabi_croparea_area2 = $('#changed_rabi_croparea_area2').val();
    obj.changed_rabi_horticulture_water_req2 = $('#changed_rabi_horticulture_water_req2').val();
    obj.changed_rabi_horticulture_waterdemand2 = $('#changed_rabi_horticulture_waterdemand2').text();
    obj.changed_rabi_horticulture_reduction_gw_demand2 = $('#changed_rabi_horticulture_reduction_gw_demand2').text();

    obj.changed_rabi_othercrop_name3 = $('#changed_rabi_othercrop_name3').val();
    obj.changed_rabi_croparea_area3 = $('#changed_rabi_croparea_area3').val();
    obj.changed_rabi_horticulture_water_req3 = $('#changed_rabi_horticulture_water_req3').val();
    obj.changed_rabi_horticulture_waterdemand3 = $('#changed_rabi_horticulture_waterdemand3').text();
    obj.changed_rabi_horticulture_reduction_gw_demand3 = $('#changed_rabi_horticulture_reduction_gw_demand3').text();

    obj.changed_rabi_othercrop_name4 = $('#changed_rabi_othercrop_name4').val();
    obj.changed_rabi_croparea_area4 = $('#changed_rabi_croparea_area4').val();
    obj.changed_rabi_horticulture_water_req4 = $('#changed_rabi_horticulture_water_req4').val();
    obj.changed_rabi_horticulture_waterdemand4 = $('#changed_rabi_horticulture_waterdemand4').text();
    obj.changed_rabi_horticulture_reduction_gw_demand4 = $('#changed_rabi_horticulture_reduction_gw_demand4').text();

    obj.changed_rabi_othercrop_name5 = $('#changed_rabi_othercrop_name5').val();
    obj.changed_rabi_croparea_area5 = $('#changed_rabi_croparea_area5').val();
    obj.changed_rabi_horticulture_water_req5 = $('#changed_rabi_horticulture_water_req5').val();
    obj.changed_rabi_horticulture_waterdemand5 = $('#changed_rabi_horticulture_waterdemand5').text();
    obj.changed_rabi_horticulture_reduction_gw_demand5 = $('#changed_rabi_horticulture_reduction_gw_demand5').text();

    obj.changed_summer_othercrop_name1 = $('#changed_summer_othercrop_name1').val();
    obj.changed_summer_croparea_area1 = $('#changed_summer_croparea_area1').val();
    obj.changed_summer_horticulture_water_req1 = $('#changed_summer_horticulture_water_req1').val();
    obj.changed_summer_horticulture_waterdemand1 = $('#changed_summer_horticulture_waterdemand1').text();
    obj.changed_summer_horticulture_reduction_gw_demand1 = $('#changed_summer_horticulture_reduction_gw_demand1').text();

    obj.changed_summer_othercrop_name2 = $('#changed_summer_othercrop_name2').val();
    obj.changed_summer_croparea_area2 = $('#changed_summer_croparea_area2').val();
    obj.changed_summer_horticulture_water_req2 = $('#changed_summer_horticulture_water_req2').val();
    obj.changed_summer_horticulture_waterdemand2 = $('#changed_summer_horticulture_waterdemand2').text();
    obj.changed_summer_horticulture_reduction_gw_demand2 = $('#changed_summer_horticulture_reduction_gw_demand2').text();

    obj.changed_summer_othercrop_name3 = $('#changed_summer_othercrop_name3').val();
    obj.changed_summer_croparea_area3 = $('#changed_summer_croparea_area3').val();
    obj.changed_summer_horticulture_water_req3 = $('#changed_summer_horticulture_water_req3').val();
    obj.changed_summer_horticulture_waterdemand3 = $('#changed_summer_horticulture_waterdemand3').text();
    obj.changed_summer_horticulture_reduction_gw_demand3 = $('#changed_summer_horticulture_reduction_gw_demand3').text();

    obj.changed_summer_othercrop_name4 = $('#changed_summer_othercrop_name4').val();
    obj.changed_summer_croparea_area4 = $('#changed_summer_croparea_area4').val();
    obj.changed_summer_horticulture_water_req4 = $('#changed_summer_horticulture_water_req4').val();
    obj.changed_summer_horticulture_waterdemand4 = $('#changed_summer_horticulture_waterdemand4').text();
    obj.changed_summer_horticulture_reduction_gw_demand4 = $('#changed_summer_horticulture_reduction_gw_demand4').text();

    obj.changed_summer_othercrop_name5 = $('#changed_summer_othercrop_name5').val();
    obj.changed_summer_croparea_area5 = $('#changed_summer_croparea_area5').val();
    obj.changed_summer_horticulture_water_req5 = $('#changed_summer_horticulture_water_req5').val();
    obj.changed_summer_horticulture_waterdemand5 = $('#changed_summer_horticulture_waterdemand5').text();
    obj.changed_summer_horticulture_reduction_gw_demand5 = $('#changed_summer_horticulture_reduction_gw_demand5').text();

    //
    //other crops
    //obj.original_kharif_othercrop_name = $('#original_kharif_othercrop_name').val();
    //obj.original_kharif_othercrop_area = $('#original_kharif_othercrop_area').val();
    //obj.original_kharif_othercrop_water_req = $('#original_kharif_othercrop_water_req').val();
    //obj.original_kharif_othercrop_waterdemand = $('#original_kharif_othercrop_waterdemand').text();

    //obj.original_rabi_othercrop_name = $('#original_rabi_othercrop_name').val();
    //obj.original_rabi_othercrop_area = $('#original_rabi_othercrop_area').val();
    //obj.original_rabi_othercrop_water_req = $('#original_rabi_othercrop_water_req').val();
    //obj.original_rabi_othercrop_waterdemand = $('#original_rabi_othercrop_waterdemand').text();

    //obj.original_summer_othercrop_name = $('#original_summer_othercrop_name').val();
    //obj.original_summer_othercrop_area = $('#original_summer_othercrop_area').val();
    //obj.original_summer_othercrop_water_req = $('#original_summer_othercrop_water_req').val();
    //obj.original_summer_othercrop_waterdemand = $('#original_summer_othercrop_waterdemand').text();

    //obj.changed_kharif_othercrop_name = $('#changed_kharif_othercrop_name').val();
    //obj.changed_kharif_croparea_area = $('#changed_kharif_croparea_area').val();
    //obj.changed_kharif_othercrop_water_req = $('#changed_kharif_othercrop_water_req').val();
    //obj.changed_kharif_othercrop_waterdemand = $('#changed_kharif_othercrop_waterdemand').text();


    //obj.changed_rabi_othercrop_name = $('#changed_rabi_othercrop_name').val();
    //obj.changed_rabi_croparea_area = $('#changed_rabi_croparea_area').val();
    //obj.changed_rabi_othercrop_water_req = $('#changed_rabi_othercrop_water_req').val();
    //obj.changed_rabi_othercrop_waterdemand = $('#changed_rabi_othercrop_waterdemand').text();

    //obj.changed_summer_othercrop_name = $('#changed_summer_othercrop_name').val();
    //obj.changed_summer_croparea_area = $('#changed_summer_croparea_area').val();
    //obj.changed_summer_othercrop_water_req = $('#changed_summer_othercrop_water_req').val();
    //obj.changed_summer_othercrop_waterdemand = $('#changed_summer_othercrop_waterdemand').text();



    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSPHome/CropSaveData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",

        dataType: 'JSON',
        success: function (response) {
           
            alert(response);
            if (response != "Saved Successfully" && response != "Logout" && response != "valid_negitive") {
                window.location = "/Error/DefaultError";
            }
            $('#SAVE_BTN4').prop('disabled', false);

            //$('#ar_Error').text(response);

            //Draft_Report();
            //Availabilty_Report();
        }
    });
}
function Calculation() {

    var Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = 0;

    Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1 = parseFloat(Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_) - parseFloat(Total_Water_Demand_for_Kharif_Crops_Crop_Diversion_1);

    $('#Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1').text(Total_Saving_Through_underground_Crop_Diversion_irrigation_Kharif1.toFixed(2));
    var Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = 0;

    Total_Saving_Through_Crop_Diversion_irrigation_Rabi11 = parseFloat(Crop_Diversion_Total_Water_Demand_for_Rabi_Crops) - parseFloat(Crop_Diversion_Total_Water_Demand_for_Rabi_Crops1);
    $('#Total_Saving_Through_Crop_Diversion_irrigation_Rabi11').text(Total_Saving_Through_Crop_Diversion_irrigation_Rabi11.toFixed(2));
    var Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = 0;

    Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1 = parseFloat(Total_Water_Demand_for_Summer_Crops_Crop_Diversion_) - parseFloat(Total_Water_Demand_for_Summer_Crops_Crop_Diversion_1);
    $('#Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1').text(Total_Saving_Through_Crop_Diversion_irrigation_Crops11_Crop_Diversion_1.toFixed(2));
}


