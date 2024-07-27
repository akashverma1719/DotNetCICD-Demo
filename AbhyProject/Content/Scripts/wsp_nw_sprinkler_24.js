$(document).ready(function () {
    Get_Irrigation_Sprinkler();

});

var count_sp = 1;
function Get_Irrigation_Sprinkler() {
    $.ajax({
        url: '/WSP_23_24_updation/Fetch_Not_Updated_Irrigation_Data_For_Sprinkler',
        method: 'GET',
        datatype: 'JSON',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            if (data.length > 0) {
                val_kharif = 0;
                val_rabi = 0;
                val_summer = 0;
                var kharif_tr = '';
                var rabi_tr = '';
                var summer_tr = '';
                var k = 0;
                var r = 0;
                var s = 0;
                $("#Irrigation_Kharif_Data_sp").html(kharif_tr);
                $("#Irrigation_Rabi_Data_sp").html(rabi_tr);
                $("#Irrigation_Summer_Data_sp").html(summer_tr);
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        code = '';
                    }
                    if (data[i].season_type == 'kharif') {
                        val_kharif += data[i].water_demand;
                        kharif_tr += '<tr><td>' + (++k) + '</td>';
                        kharif_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        kharif_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        kharif_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        kharif_tr += '<td>' + data[i].area + '</td>';
                        kharif_tr += '<td>' + data[i].gross_water + '</td>';
                        kharif_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_sp(' + data[i].id + ',\'Kharif\')">Edit</button > </td></tr>';
                    } else if (data[i].season_type == 'rabi') {
                        val_rabi += data[i].water_demand;
                        rabi_tr += '<tr><td>' + (++r) + '</td>';
                        rabi_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        rabi_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        rabi_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        rabi_tr += '<td>' + data[i].area + '</td>';
                        rabi_tr += '<td>' + data[i].gross_water + '</td>';
                        rabi_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_sp(' + data[i].id + ',\'Rabi\')">Edit</button > </td></tr>';
                    } else if (data[i].season_type == 'summer') {
                        val_summer += data[i].water_demand;
                        summer_tr += '<tr><td>' + (++s) + '</td>';
                        summer_tr += '<td class="crop_category">' + data[i].crop_category + '</td>';
                        summer_tr += '<td class="crop_type">' + data[i].crop_type + '</td>';
                        summer_tr += '<td class="crop_name">' + data[i].crop_name + '</td>';
                        summer_tr += '<td>' + data[i].area + '</td>';
                        summer_tr += '<td>' + data[i].gross_water + '</td>';
                        summer_tr += '<td><button id="btn_change_kh' + count_summer_pipe + '" class="btn btn-primary btn_disabled" onclick="Open_Modal_And_Get_Data_ById_sp(' + data[i].id + ',\'Summer\')">Edit</button > </td></tr>';
                    }
                }
                //kharif_tr += '</tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_kharif.toFixed(4) + '</td></tr>'
                //rabi_tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_rabi.toFixed(4) + '</td></tr>'
                //summer_tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td> ' + val_summer.toFixed(4) + '</td></tr>'

                $("#Irrigation_Kharif_Data_sp").append(kharif_tr);
                $("#Irrigation_Rabi_Data_sp").append(rabi_tr);
                $("#Irrigation_Summer_Data_sp").append(summer_tr);
            }
            Get_sprinkler_data();
        },
        fail: function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        }
    })
}

function Open_Modal_And_Get_Data_ById_sp(id, Season) {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/Get_Data_From_Irrigation_ById",
        data: '{ data: ' + JSON.stringify(id) + '}',
        dataType: 'JSON',
        success: function (data) {
            
            var type = "Sprinkler";
            if (data.length != 0) {
                $("#crop_category").val(data.crop_category);
                $("#crop_type").val(data.crop_type);
                $("#crop_name").val(data.crop_name);
                $("#area_irrigation").val(data.area);
                $("#gross_water").val(data.gross_water);
                var reduction = parseFloat(data.gross_water) * 30 / 100;
                var Total_Water_Demand = parseFloat(data.area) * parseFloat(data.gross_water) / 1000;
                $("#reduction").val(reduction.toFixed(4));
                $("#tot_water_demand").val(Total_Water_Demand.toFixed(4))
                $("#title_sp").text(type + " (" + Season + ")");
                $("#cat").text(type);
                $("#season").text(Season);
                $("#percent").text("30% :");
                $("#IrriId").text(id);
                $("#type").text(type);
                $("#modalDialogScrollable_gp").modal("show");
            } else {
                console.log(data);
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });

}


function Cal_Input_Area_Proposed() {
    var type = $("#type").text();
    var id = $("#IrriId").text();
    var season = $("#season").text();
    var crop_name = $("#crop_name").val();
    var area_proposed = parseFloat($("#area_proposed").val());
    var area_irrigation = parseFloat($("#area_irrigation").val());
    var gross_water = parseFloat($("#gross_water").val());
    var reduction = parseFloat($("#reduction").val());
    if ($("#area_proposed").val() == "") {
        $("#net_water_demand").val("");
        $("#red_in_demand").val("");
        return;
    }
    if (area_proposed > area_irrigation) {
        alert("Proposed area is greater than Area under Conventional Irrigation (ha)");
        $("#area_proposed").val("");
        $("#net_water_demand").val("");
        $("#red_in_demand").val("");
        return;
    }
    var obj = new Object();
    obj.season = season;
    obj.crop_name = crop_name;
    obj.area_proposed = area_proposed;
    obj.area_irrigation = area_irrigation;
    obj.type = type;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/Check_AreaProposed_IsLessThan_ConventionalArea",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            if (data.result == false) {
                $("#area_proposed").val("");
                alert("Proposed area is greater than Area under Conventional Irrigation (ha");
                return;
            } else {
                if (area_proposed != 0) {
                    net_water_demand = (((area_irrigation - area_proposed) * gross_water * 0.001) + (area_proposed * (gross_water - reduction) * 0.001)).toFixed(4);
                }
                $("#net_water_demand").val(net_water_demand);
                var tot_water_demand = parseFloat($("#tot_water_demand").val());
                red_in_demand = tot_water_demand - parseFloat(net_water_demand);
                $("#red_in_demand").val(red_in_demand.toFixed(4));
            }

        }
    })
}

function CloseModal_And_Blank() {
    $("#title_sp").text("");
    $("#IrriId").text("");
    $("#season").text("");
    $("#type").text("");
    $("#crop_name").val("");
    $("#crop_category").val("");
    $("#crop_type").val("");
    $("#crop_name").val("");
    $("#area_irrigation").val("");
    $("#gross_water").val("");
    $("#area_proposed").val("");
    $("#percent").text("");
    $("#reduction").val("");
    $("#tot_water_demand").val("");
    $("#net_water_demand").val("");
    $("#red_in_demand").val("");
    $("#modalDialogScrollable_gp").modal("hide");
};

function SaveDataForAll() {
    var IrriId = $("#IrriId").text();
    if ($("#area_proposed").val() == '' || $("#area_proposed").val() == "0") {
        alert("Please fill Area Proposed (ha)");
        $("#area_proposed").focus();
        return;
    }
    var crop_category = $("#crop_category").val();
    var crop_type = $("#crop_type").val();
    var crop_name = $("#crop_name").val();
    var area_irrigation = parseFloat($("#area_irrigation").val());
    var gross_water = parseFloat($("#gross_water").val());
    var area_proposed = parseFloat($("#area_proposed").val());
    var reduction_in_demand = parseFloat($("#reduction").val());
    var water_demand = parseFloat($("#tot_water_demand").val());
    var reduction_gw = parseFloat($("#red_in_demand").val());
    var net_water_demand = parseFloat($("#net_water_demand").val());

    if (net_water_demand == "") {
        alert("Net Water Demand (ha m) is blank, please wait for calculation");
        return;
    } else if (reduction_gw == "") {
        alert("Reduction in Water Demand (ha m) is blank, please wait for calculation");
        return;
    }
    var type = $("#type").text();
    var season = $("#season").text();
    var obj = {};
    obj.IrriId = IrriId;
    obj.season_type = season;
    obj.type = type;
    obj.crop_category = crop_category;
    obj.crop_type = crop_type;
    obj.crop_name = crop_name;
    obj.area_irrigation = area_irrigation;
    obj.gross_water = gross_water;
    obj.area_proposed = area_proposed;
    obj.reduction_gw = reduction_gw;
    obj.water_demand = water_demand;
    obj.net_water_demand = net_water_demand;
    obj.reduction_in_demand = reduction_in_demand;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/Saved_Data_For_DemandSide",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {

            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            if (response == "Successfully Saved") {
                CloseModal_And_Blank();
                if (type == "Sprinkler") {
                    Get_Irrigation_Sprinkler();
                } else if (type == "Drip") {
                    Get_Irrigation_Drip()
                } else if (type == "Pipelines") {
                    Get_Irrigation_PipeLines();
                }
                $("#TblData_GRAM_PANCHAYAT_DATABASE_a").html('');
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
};

function enforceNumberValidation(ele) {

    if ($(ele).data('decimal') != null) {
        // found valid rule for decimal
        var decimal = parseInt($(ele).data('decimal')) || 0;
        var val = $(ele).val();
        if (decimal > 0) {
            var splitVal = val.split('.');
            if (splitVal.length == 2 && splitVal[1].length > decimal) {
                // user entered invalid input
                $(ele).val(splitVal[0] + '.' + splitVal[1].substr(0, decimal));
            }
        } else if (decimal == 0) {
            // do not allow decimal place
            var splitVal = val.split('.');
            if (splitVal.length > 1) {
                // user entered invalid input
                $(ele).val(splitVal[0]); // always trim everything after '.'
            }
        }
    }

    /*GapFundingCalSprin();*/
}
function Get_sprinkler_data() {
    var srl_sp_kharif = 1;
    var srl_sp_rabi = 1;
    var srl_sp_summer = 1;
    var wat_dem = 0;
    var net_wat_dem = 0;
    var reduction = 0;
    var total_demand = 0;
    var total_crop_area = 0;
    var total_area_proposed = 0;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/Get_sprinkler_data",
        dataType: 'JSON',
        success: function (data) {

            $("#kharif_sp").html('');
            $("#rabi_sp").html('');
            $("#summer_sp").html('');

            $('#Sprinkler_Water_Demand').text("");
            $('#sprinkler_kharif_total_sprinkler_waterdemand').text("");
            $('#sprinkler_kharif_total_reduction_waterdemand').text("");

            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {

                    var crop_area = parseFloat(data[i].area_irrigation).toFixed(4);
                    total_crop_area += parseFloat(crop_area);
                    var area_proposed = parseFloat(data[i].area_proposed);
                    total_area_proposed += parseFloat(area_proposed);
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;

                    }
                    if (data[i].season_type == "kharif") {
                        if (data[i].isarchive != 1) {
                            var tr = '<tr><td>' + srl_sp_kharif + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                            tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_sp(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        } else {
                            var tr = '<tr><td>' + srl_sp_kharif + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                            tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" disabled onclick="Delete_data_sp(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        }
                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);

                        $('#Sprinkler_Water_Demand').text(wat_dem.toFixed(4));
                        $('#sprinkler_kharif_total_sprinkler_waterdemand').text(net_wat_dem.toFixed(4));
                        $('#sprinkler_kharif_total_reduction_waterdemand').text(reduction.toFixed(4));
                        $("#kharif_sp").append(tr);
                        srl_sp_kharif++;
                    }
                }
                total_demand += reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;
                    }
                    if (data[i].season_type == "rabi") {
                        if (data[i].isarchive != 1) {
                            var tr = '<tr><td>' + srl_sp_rabi + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                            tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_sp(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        } else {
                            var tr = '<tr><td>' + srl_sp_rabi + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                            tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" disabled onclick="Delete_data_sp(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        }
                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);
                        $('#Sprinkler_RabiWater_Demand').text(wat_dem.toFixed(4));
                        $('#sprinkler_rabi_total_rabi_waterdemand').text(net_wat_dem.toFixed(4));
                        $('#sprinkler_rabi_total_reduction_waterdemand').text(reduction.toFixed(4));
                        $("#rabi_sp").append(tr);
                        srl_sp_rabi++;
                    }
                }
                total_demand += reduction;
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        wat_dem = 0;
                        net_wat_dem = 0;
                        reduction = 0;
                    }
                    if (data[i].season_type == "summer") {
                        if (data[i].isarchive != 1) {
                            var tr = '<tr><td>' + srl_sp_summer + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                            tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_data_sp(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        } else {
                            var tr = '<tr><td>' + srl_sp_summer + '</td><td class="crop_category">' + data[i].crop_category + '</td><td class="crop_type">' + data[i].crop_type + '</td><td class="crop_name">' + data[i].crop_name + '</td>';
                            tr += '<td>' + data[i].area_irrigation + '</td><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td><td><button class="btn btn-danger btn_disabled" disabled onclick="Delete_data_sp(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                        }
                        wat_dem += parseFloat(data[i].water_demand);
                        net_wat_dem += parseFloat(data[i].net_water_demand);
                        reduction += parseFloat(data[i].reduction_gw);
                        $('#Summer_Crops_Water_Demand').text(wat_dem.toFixed(4));
                        $('#sprinkler_summer_total_summer_waterdemand').text(net_wat_dem.toFixed(4));
                        $('#sprinkler_summer_total_reduction_waterdemand').text(reduction.toFixed(4));
                        $("#summer_sp").append(tr);
                        srl_sp_summer++
                    }
                }
                total_demand += reduction;
                $("#TotalAnnual_sprinkler_Reduction").text(parseFloat(total_demand).toFixed(4));
                $('#total_crop_area_sprinkler').val(total_crop_area.toFixed(4));
                $('#total_area_proposed_sprinkler').val(total_area_proposed.toFixed(4));
            } else {
                $('#sprinkler_water_demand').text("");
                $('#sprinkler_kharif_total_sprinkler_waterdemand').text("");
                $('#sprinkler_kharif_total_reduction_waterdemand').text("");
                $('#summer_crops_water_demand').text("");
                $('#sprinkler_summer_total_summer_waterdemand').text("");
                $('#sprinkler_summer_total_reduction_waterdemand').text("");
                $('#sprinkler_rabiwater_demand').text("");
                $('#sprinkler_rabi_total_rabi_waterdemand').text("");
                $('#sprinkler_rabi_total_reduction_waterdemand').text("");
            }
            GetFunding_sp();
        }
    });
}
function confirm_SPMU() {

    var gpdata_remarks = $("#gpdata_remarks").val();
    if (gpdata_remarks != "") {
        alert("If you want submit to SPMU, please remove the remarks first; if you accidentally clicked the Submit button, click the Cancel button first, then the Reject button");
        return;
    }
    swal({
        title: "Are you sure to submit the information for verification to SPMU?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                submitedNDO();
            } else {

            }
        });

}
function Delete_data_sp(idd) {

    var obj = {};
    obj.IDD = idd;
    swal({
        title: "Are you sure to delete the entry?",
        text: "If you delete an entry, the funding source data entered will be automatically deleted. Which you will have to fill out again.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; chatset=utf-8',
                    url: "/WSP_23_24_updation/Delete_data_sprinkler",
                    data: "{'Data': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        alert(response);
                        //$('#SAVE_BTN2').prop('disabled', false)
                        Get_Irrigation_Sprinkler();
                    },
                    error: function () {
                        alert("Error While Saving Data")
                        // $('#SAVE_BTN2').prop('disabled', false)
                    }
                });
            } else {

            }
        });

}

function getreduction_water_spr(value, value1) {

    for (var i = 1; i <= value1; i++) {
        var val_gross_water = '#' + value + '' + i + '';
        var gross_water = parseFloat($(val_gross_water).val());
        if (gross_water == '' || isNaN.gross_water || gross_water == undefined || isNaN(gross_water)) {
            gross_water = 0;
        }

        var reduction_in_demand = (gross_water * 30 / 100).toFixed(4);
        if (value == "gross_khairf") {
            $("#reduction_kharif" + '' + i).val(reduction_in_demand);
        } else if (value == "gross_rabi") {
            $("#reduction_rabi" + '' + i).val(reduction_in_demand);
        } else if (value == "gross_summer") {
            $("#reduction_Summer" + '' + i).val(reduction_in_demand);
        }
    }
}

function Kharif_WaterRequire(area, gross_water, setVal, count, e) {


    getreduction_water_spr(gross_water, count)
    enforceNumberValidation(e);
    var sum_area = 0;
    var sum_gross_water = 0;
    var type = 0;
    //for (var i = 1; i <= count; i++) {
    var val_area = '#' + area + '' + count + '';
    var val_gross_water = '#' + gross_water + '' + count + '';
    var valarea = $(val_area).val();
    var valgross_water = $(val_gross_water).val();
    if (valarea == '' || isNaN.valarea || valarea == undefined || isNaN(valarea)) {
        valarea = "0";
    }
    if (valgross_water == '' || isNaN.valgross_water || valgross_water == undefined || isNaN(valgross_water)) {
        valgross_water = "0";
    }


    if (valarea != '', valgross_water != '') {
        sum_area = parseFloat(sum_area) + parseFloat(valarea);
        sum_gross_water = parseFloat(sum_gross_water) + parseFloat(valgross_water);
        type = 1;
    }

    var Sprinkler_Water_Demand = '#' + setVal + '';

    if (type == 1) {
        $(Sprinkler_Water_Demand).text(parseFloat((parseFloat(sum_area) * parseFloat(sum_gross_water)) / 1000).toFixed(4));
    }
    else {
        $(Sprinkler_Water_Demand).text('');
    }
}

function khairfNetWater_sp(area, gross_water, areaPr, setVal, count, lastSet, minusOne, reduction_kharif) {
    var sum_area = 0;
    var sum_gross_water = 0;
    var sum_areapr = 0;
    var type = 0;


    // for (var i = 1; i <= count; i++) {
    var val_area = '#' + area + '' + count + '';
    var val_areapr = '#' + areaPr + '' + count + '';
    var val_gross_water = '#' + gross_water + '' + count + '';
    var red_kharif = '#' + reduction_kharif + '' + count + '';

    var valarea = $(val_area).val();
    var valareapr = $(val_areapr).val();
    var valgross_water = $(val_gross_water).val();
    var reduction_kharif = $(red_kharif).val();
    if (parseFloat(valareapr) > parseFloat(valarea)) {
        alert("Area Proposed Crop should be less than crop area");
        $(val_areapr).val('');
    }
    //if (valarea == '' || isNaN.valarea || valarea == undefined || isNaN(valarea)) {
    //    valarea = 0;
    //}
    //if (valgross_water == '' || isNaN.valgross_water || valgross_water == undefined || isNaN(val_gross)) {
    //    valgross_water = 0;
    //}
    //if (valareapr == '' || isNaN.valareapr || valareapr == undefined || isNaN(valareapr)) {
    //    valareapr = 0;
    //}

    if (valarea != '', valareapr != '', valgross_water != '') {
        sum_area = parseFloat(sum_area) + parseFloat(valarea);
        sum_areapr = parseFloat(sum_areapr) + parseFloat(valareapr);
        sum_gross_water = parseFloat(sum_gross_water) + parseFloat(valgross_water);
        type = 1;
    }

    //}
    var Net_water = '#' + setVal + '';
    var val_lastset = '#' + lastSet + '';

    var val_mins = '#' + minusOne + '';

    var per = 30;
    if (type == 1) {
        var val_minus = 100 - per;
        var percentage = sum_gross_water * val_minus / 100;

        $(Net_water).text(parseFloat((((sum_area - sum_areapr) * sum_gross_water * 0.001) + (sum_areapr * (valgross_water - reduction_kharif) * 0.001)).toFixed(4)));

        $(val_lastset).text(parseFloat((parseFloat($(val_mins).text()) - parseFloat($(Net_water).text()))).toFixed(4));
    }
    else {
        $(val_lastset).text('');
    }
}

function type2_getsp(ddlcrop_khaif_type1, count, Bind_ddl) {

    var val_crop_category = '#' + ddlcrop_khaif_type1 + '';
    var BindTo = '#' + Bind_ddl + '';
    var Val_check = $(val_crop_category).val();
    //$.ajax({
    //    type: 'GET',
    //    contentType: 'application/json; chatset=utf-8',
    //    url: "/WSP_23_24_updation/FetchDropDownFromIrrigation",
    //    dataType: 'JSON',
    //    data: { CropCat: Val_check },
    //    success: function (data) {

    //        var AwpStateArr = [];
    //        for (var i = 0; i < data.length; i++) {
    //            AwpStateArr.push(data[i].food_name);
    //        }
    //        var idd = BindTo;
    //        var slection_options = '';
    //        slection_options += '<option value="0">--Select Crop-- </option>';
    //        AwpStateArr.forEach((val) => {
    //            slection_options += '<option value="' + val + '"> ' + val + ' </option>';

    //        });
    //        $(idd).html(slection_options);
    //    }
    //});
    if (Val_check != '0') {
        if (Val_check == 'General Crops') {
            var AwpStateArr = [];
            AwpStateArr.push("Cereal");
            AwpStateArr.push("Fibre");
            AwpStateArr.push("Forage");
            AwpStateArr.push("Millet");
            AwpStateArr.push("Narcotic");
            AwpStateArr.push("Oilseed");
            AwpStateArr.push("Pulse");
            AwpStateArr.push("Sugar");
            var idd = BindTo;
            var slection_options = '';
            slection_options += '<option value="0">--Select Type2-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';
            });

            $(idd).html(slection_options);
        }

        if (Val_check == 'Horticulture Crops') {
            var idd = BindTo;
            var AwpStateArr = [];
            AwpStateArr.push("Vegetables");
            AwpStateArr.push("Fruits");
            AwpStateArr.push("Spices");
            AwpStateArr.push("Aromatic and Medicinal Plants");
            AwpStateArr.push("Plantation Crops");
            AwpStateArr.push("Flowers");
            slection_options += '<option value="0">--Select Type2-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
        }
        if (Val_check == 'Forestry') {
            var idd = BindTo;
            var AwpStateArr = [];
            AwpStateArr.push("Forestry Plants");

            slection_options += '<option value="0">--Select Type2-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
        }
    }
}

function DropDown_getsp(food_for, food_type, count, Bind_ddl) {

    var food_for = '#' + food_for + '';
    var BindTo = '#' + Bind_ddl + '';

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_dropdown_data",
        dataType: 'JSON',
        data: { food_for: $(food_for).val(), food_type: food_type },
        success: function (data) {

            var AwpStateArr = [];
            for (var i = 0; i < data.length; i++) {
                AwpStateArr.push(data[i].food_name);
            }
            var idd = BindTo;
            var slection_options = '';
            slection_options += '<option value="0">--Select Crop-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
        }
    });
}


function saveKharif_sp(ddlcrop_khaif_type, ddlcrop_khaif_type2, ddlcrop_khaif, othercrop_kharif, area_Kharif, gross_khairf, area_pr_kharif, reduction_kharif, water_demand, net_water_demand, reduction_gw) {

    var val_crop_category = '#' + ddlcrop_khaif_type + '';
    var val_crop_type = '#' + ddlcrop_khaif_type2 + '';
    var val_crop_name = '#' + ddlcrop_khaif + '';
    var val_area_irrigation = '#' + area_Kharif + '';
    var val_gross_water = '#' + gross_khairf + '';
    var val_water_demand = '#' + water_demand + '';
    var val_area_proposed = '#' + area_pr_kharif + '';
    var val_reduction = 30;
    var val_net_water_demand = '#' + net_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var reduction_kharif = '#' + reduction_kharif + '';
    var othercrop_kharif = '#' + othercrop_kharif + '';
    var other_check = $(val_crop_name).val();

    if ($(val_crop_category).val() == '0') {
        alert("Please select Crop Category");
        $(val_crop_category).focus();
        return;
    } else if ($(val_crop_type).val() == '0') {
        alert("Please select Crop Type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == '0') {
        alert("Please select Crop Name");
        $(val_crop_name).focus();
        return;
    } else if ($(val_area_irrigation).val() == '') {
        alert("Please fill Crop Area (ha)");
        $(val_area_irrigation).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("Please fill Gross Water Requirement (mm)");
        $(val_gross_water).focus();
        return;
    } else if ($(val_area_proposed).val() == '') {
        alert("Please fill Area Proposed (ha)");
        $(val_area_proposed).focus();
        return;
    } else if (parseFloat($(val_area_proposed).val()) > parseFloat($(val_area_irrigation).val())) {
        alert("proposed area is greater than crop area");
        return;
    }


    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(othercrop_kharif).val();
    }
    obj.season_type = "kharif"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();

    obj.area_irrigation = $(val_area_irrigation).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).text();
    obj.area_proposed = $(val_area_proposed).val();
    obj.reduction = val_reduction;
    obj.net_water_demand = $(val_net_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.reduction_in_demand = $(reduction_kharif).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/saveSprinkler",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {

            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            if (response == "Successfully Saved") {
                Get_sprinkler_data();
                $("#TblData_GRAM_PANCHAYAT_DATABASE_a").html('');
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
function saverabi_sp(ddlcrop_rabi_type, ddlcrop_rabi_type2, ddlcrop_rabi, othercrop_rabi, area_rabi, gross_rabi, area_pr_rabi, reduction_rabi, water_demand, net_water_demand, reduction_gw) {


    var val_crop_category = '#' + ddlcrop_rabi_type + '';
    var val_crop_type = '#' + ddlcrop_rabi_type2 + '';
    var val_crop_name = '#' + ddlcrop_rabi + '';
    var val_area_irrigation = '#' + area_rabi + '';
    var val_gross_water = '#' + gross_rabi + '';
    var val_water_demand = '#' + water_demand + '';
    var val_area_proposed = '#' + area_pr_rabi + '';
    var val_reduction = 30;
    var val_net_water_demand = '#' + net_water_demand + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var reduction_in_demand = '#' + reduction_rabi + '';
    var othercrop_rabi = '#' + othercrop_rabi + '';
    var other_check = $(val_crop_name).val();

    if ($(val_crop_category).val() == '0') {
        alert("Please select Crop Category");
        $(val_crop_category).focus();
        return;
    } else if ($(val_crop_type).val() == '0') {
        alert("Please select Crop Type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == '0') {
        alert("Please select Crop Name");
        $(val_crop_name).focus();
        return;
    } else if ($(val_area_irrigation).val() == '') {
        alert("Please fill Crop Area (ha)");
        $(val_area_irrigation).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("Please fill Gross Water Requirement (mm)");
        $(val_gross_water).focus();
        return;
    } else if ($(val_area_proposed).val() == '') {
        alert("Please fill Area Proposed (ha)");
        $(val_area_proposed).focus();
        return;
    } else if (parseFloat($(val_area_proposed).val()) > parseFloat($(val_area_irrigation).val())) {
        alert("proposed area is greater than crop area");
        return;
    }




    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(othercrop_rabi).val();
    }
    obj.season_type = "rabi"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).text();
    obj.area_proposed = $(val_area_proposed).val();
    obj.reduction = val_reduction;
    obj.net_water_demand = $(val_net_water_demand).text();
    obj.reduction_gw = $(val_reduction_gw).text();
    obj.reduction_in_demand = $(reduction_in_demand).val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/saveSprinkler",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            if (response == "Successfully Saved") {
                $("#TblData_GRAM_PANCHAYAT_DATABASE_b").html('');
                Get_sprinkler_data();
            }

        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
function savesummer_sp(ddlcrop_summer_type, ddlcrop_summer_type2, ddlcrop_summer, othercrop_summer, area_summer, gross_summer, area_pr_summer, reduction_summer, water_demand, net_water_demand, reduction_gw) {

    var val_crop_category = '#' + ddlcrop_summer_type + '';
    var val_crop_type = '#' + ddlcrop_summer_type2 + '';
    var val_crop_name = '#' + ddlcrop_summer + '';
    var val_area_irrigation = '#' + area_summer + '';
    var val_gross_water = '#' + gross_summer + '';
    var val_water_demand = '#' + water_demand + '';
    var val_area_proposed = '#' + area_pr_summer + '';
    var val_reduction = 30;
    var val_net_water_demand = '#' + net_water_demand + '';
    var reduction_in_demand = '#' + reduction_summer + '';
    var val_reduction_gw = '#' + reduction_gw + '';
    var othercrop_summer = '#' + othercrop_summer + '';
    var other_check = $(val_crop_name).val();

    if ($(val_crop_category).val() == '0') {
        alert("Please select Crop Category");
        $(val_crop_category).focus();
        return;
    } else if ($(val_crop_type).val() == '0') {
        alert("Please select Crop Type");
        $(val_crop_type).focus();
        return;
    } else if ($(val_crop_name).val() == '0') {
        alert("Please select Crop Name");
        $(val_crop_name).focus();
        return;
    } else if ($(val_area_irrigation).val() == '') {
        alert("Please fill Crop Area (ha)");
        $(val_area_irrigation).focus();
        return;
    } else if ($(val_gross_water).val() == '') {
        alert("Please fill Gross Water Requirement (mm)");
        $(val_gross_water).focus();
        return;
    } else if ($(val_area_proposed).val() == '') {
        alert("Please fill Area Proposed (ha)");
        $(val_area_proposed).focus();
        return;
    } else if (parseFloat($(val_area_proposed).val()) > parseFloat($(val_area_irrigation).val())) {
        alert("proposed area is greater than crop area");
        return;
    }




    var obj = {};
    if (other_check != 'Others') {
        obj.crop_name = $(val_crop_name).val();
    } else {
        obj.crop_name = $(othercrop_summer).val();
    }
    obj.season_type = "summer"
    obj.crop_category = $(val_crop_category).val();
    obj.crop_type = $(val_crop_type).val();
    obj.area_irrigation = $(val_area_irrigation).val();
    obj.gross_water = $(val_gross_water).val();
    obj.water_demand = $(val_water_demand).text();
    obj.area_proposed = $(val_area_proposed).val();
    obj.reduction = val_reduction;
    obj.net_water_demand = $(val_net_water_demand).text();
    obj.reduction_in_demand = $(reduction_in_demand).val();
    obj.reduction_gw = $(val_reduction_gw).text();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/saveSprinkler",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            if (response == "Successfully Saved") {
                Get_sprinkler_data();
                $("#TblData_GRAM_PANCHAYAT_DATABASE_c").html('');
            }
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}

function Save_fund_sprinkler() {
    var sprinkler_year = $('#sprinkler_year').val();
    var sprinkler_department = $('#sprinkler_department').val();
    var sprinkler_scheme = $('#sprinkler_scheme').val();
    var aprx_est_cost_sprinkler = $('#aprx_est_cost_sprinkler').val();
    var area_proposed_sprinkler = $("#area_proposed_sprinkler").val();

    if (area_proposed_sprinkler == "") {
        alert("Please Enter Area Proposed for Sprinkler (ha)");
        $("#area_proposed_sprinkler").focus();
        return;
    }

    else if (sprinkler_year == '0') {
        alert('Please Select financial');
        $('#sprinkler_year').focus();
        return;
    } else if (sprinkler_department == '0') {
        alert('Please Select Department Name');
        $('#sprinkler_department').focus();
        return;
    } else if (sprinkler_scheme == '0') {
        alert('Please Select Scheme name');
        $('#sprinkler_scheme').focus();
        return;
    } else if (aprx_est_cost_sprinkler == '') {
        alert('Please fill Approximate Estimated Cost (in lakh)');
        $('#aprx_est_cost_sprinkler').focus();
        return;
    }
    if (sprinkler_scheme == "Other") {
        if ($("#other_scheme_sp").val() == "") {
            alert("Please Enter Other Scheme Name");
            return;
        }
    }
    var obj = {};
    obj.fund_for = "Sprinkler"
    obj.area_proposed = area_proposed_sprinkler;
    obj.total_crop_area = $('#total_crop_area_sprinkler').val();
    obj.total_area_proposed = $('#total_area_proposed_sprinkler').val();
    obj.other_scheme = $("#other_scheme_sp").val();
    obj.financial_year = sprinkler_year;
    obj.department_name = sprinkler_department
    obj.scheme_name = sprinkler_scheme;
    obj.approx_est_cost = aprx_est_cost_sprinkler;


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/saveFundingData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            $('#sprinkler_year').val("0");
            $('#sprinkler_department').val("0");
            $('#sprinkler_scheme').val("0");
            $('#aprx_est_cost_sprinkler').val("");
            $("#other_scheme_sp").val("");
            $("#other_scheme_sp").hide();
            $("#area_proposed_sprinkler").val("");

            GetFunding_sp();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
var area_proposed = 0;
var area_proposed_for_fund = 0;
function GetFunding_sp() {

    area_proposed = 0;
    area_proposed_for_fund = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var obj = {};
    obj.fund_for = "Sprinkler";
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/Get_fund_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            $('#source_sp_show').html('');
            if (data.length > 0) {
                var tr = '';

                for (var i = 0; i < data.length; i++) {


                    if (data[i].fund_for == 'Sprinkler') {
                        var scheme_name = data[i].scheme_name;
                        if (scheme_name == "Other") {
                            scheme_name = data[i].scheme_name + " - " + data[i].other_scheme;
                        }
                        if (data[i].isarchive != 1) {
                            tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].total_area_proposed + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].financial_year + '</td><td>' + data[i].department_name + '</td><td>' + scheme_name + '</td><td>' + data[i].approx_est_cost + '</td><td><button class="btn btn-danger btn_disabled" onclick="Delete_funding(\'' + data[i].id + '\')" >Delete</button ></td></tr>';
                        } else {
                            tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].total_area_proposed + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].financial_year + '</td><td>' + data[i].department_name + '</td><td>' + scheme_name + '</td><td>' + data[i].approx_est_cost + '</td><td><button class="btn btn-danger btn_disabled" disabled onclick="Delete_funding(\'' + data[i].id + '\')" >Delete</button ></td></tr>';
                        }
                        a += parseFloat(data[i].approx_est_cost);

                        area_proposed_for_fund += parseFloat(data[i].area_proposed);
                    }
                }
                tr += '<tr><td>Total</td><td></td><td></td><td></td><td></td><td></td><td></td><td><input type="text" value="' + a.toFixed(4) + '" disabled style="width:100%;"/></td><td></td></tr>'
                $('#source_sp_show').append(tr);
                get_approved_status();
            }
        }
    });
}





function DropDown_get_All(food_for, food_type, ddl_bind, val_for_set) {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_dropdown_data",
        dataType: 'JSON',
        data: { food_for: food_for, food_type: food_type },
        success: function (data) {

            var AwpStateArr = [];
            for (var i = 0; i < data.length; i++) {
                AwpStateArr.push(data[i].food_name);
            }
            var idd = '#' + ddl_bind + '';
            var slection_options = '';
            slection_options += '<option value="0">--Select Crop-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
            $(idd).val(val_for_set);
        }
    });
}

function Check_Area_Proposed() {

    var area_proposed_sprinkler = parseFloat($('#area_proposed_sprinkler').val());
    var total_area_proposed_sprinkler = parseFloat($('#total_area_proposed_sprinkler').val());
    var total_area_proposed_fund = area_proposed_sprinkler + area_proposed_for_fund;
    if (total_area_proposed_fund > total_area_proposed_sprinkler) {
        alert('Area Proposed for Sprinkler (ha) through above Possible Funding Source Should be less than Total Area Proposed for Sprinkler (ha)');
        $('#area_proposed_sprinkler').val("");
    }
}

function Delete_funding(idd) {
    var obj = {};
    obj.IDD = idd;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_23_24_updation/Delete_data_Fundig",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            GetFunding_sp();
            GetFunding_drip();
            GetFunding_pipe();
            GetFunding_crop();
            GetFunding_anyother();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}