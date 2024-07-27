$(document).ready(function () {
    Fetch_LiveStock();
    fetch_Irrigation_kharif();
    
    
    //$('#btn_summary').hide();
});
var Ind_id = 0;
var oth_id = 0;
var val_kharif = 0;
var val_rabi = 0;
var val_summer = 0;
var count_summer = 1;
var count_kharif = 1;
var count_rabi = 1;
var surface_val = 0;
var month_order = '';
function Domestic_Info_save() {
    
    $('#save').prop('disabled', true);

    var perc_grd_hum = $("#per_water_gw_human").val();
    var perc_sur_hum = $("#per_demand_met_sw_human").val();
    var perc_grd_liv = $("#per_water_gw_livestock").val();
    var perc_sur_liv = $("#per_demand_met_sw_livestock").val();
    var Daily_water_requirement = $("#Daily_water_requirement").val();
    if (perc_grd_hum == "") {
        alert("Please Fill % of Water Demand Met From Ground Water");
        $("#per_water_gw_human").focus();
        return false;
    } else if (perc_sur_hum == "") {
        alert("Please Fill % of Water Demand Met From Surface Water");
        $("#per_demand_met_sw_human").focus();
        return false;
    } else if (perc_grd_liv == "") {
        alert("Please Fill % of Water Demand Met From Ground Water");
        $("#per_water_gw_livestock").focus();
        return false;
    } else if (perc_sur_liv == "") {
        alert("Please Fill % of Water Demand Met From Surface Water");
        $("#per_demand_met_sw_livestock").focus();
        return false;
    } else if (Daily_water_requirement == "") {
        alert("Please Enter Daily water requirement (LPCD)")
        $("#Daily_water_requirement").focus();
        return;
    }

    var obj = {};
    obj.total_pop_human = $("#total_population_of_human").val();
    obj.daily_water_req = $("#Daily_water_requirement").val();
    obj.water_req_human = $("#Total_Water_Required_For_Humans").val();
    obj.total_pop_livestock = $("#total_population_of_Livestock").val();
    obj.avg_water_req = $("#Average_water_requirement").val();
    obj.water_req_livestock = $("#Total_Water_Required_For_Livestock").val();
    obj.annual_wat_req_hum = $("#Water_for_human_2").val();
    obj.perc_grd_hum = $("#per_water_gw_human").val();
    obj.water_deman_hum = $("#demand_met_gw_human").val();
    obj.perc_sur_hum = $("#per_demand_met_sw_human").val();
    obj.water_dem_hum = $("#demand_met_sw_human").val();
    obj.annual_wat_req_liv = $("#Water_for_livestock_2").val();
    obj.perc_grd_liv = $("#per_water_gw_livestock").val();
    obj.water_deman_liv = $("#demand_met_gw_livestock").val();
    obj.perc_sur_liv = $("#per_demand_met_sw_livestock").val();
    obj.water_dem_liv = $("#demand_met_sw_livestock").val();

    var input = parseFloat($('#Daily_water_requirement').val());

    if (input < 55 || input > 70) {
        alert('Daily water requirement (LPCD) Value Should Be between 55-70');
        $('#Daily_water_requirement').focus();
        $('#Daily_water_requirement').val('');
        return;
    }
    var values = '';
    $("#tbl_live_info .dailywater2").each(function () {
        var get_textbox_value = $(this).val();
        if (get_textbox_value != '') {
            values += get_textbox_value + ',';
        }
    });

    var a = values.length;
    values = values.substring(0, a - 1);
    obj.daily_wat_req_per_liv = values;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Domestic_InsertData",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            $('#save').prop('disabled', false)
            document.getElementById('Domestic_Error').innerHTML = response;
            $("#Domestic_Error").css('display', 'block');
            $("#Domestic_Error").fadeIn(5000, function () {
            });
            $("#Domestic_Error").fadeOut(5000, function () {
            });
            get_domestic();
        },
        error: function () {
            alert("Error While Saving Data")
            $('#SAVE_BTN3').prop('disabled', false)
        }
    });


}


function get_domestic() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_domestic_data",
        dataType: 'JSON',
        success: function (response) {
            
            if (response.length > 0) {

                $("#total_population_of_human").val(response[0].total_pop_human);
                $("#Daily_water_requirement").val(response[0].daily_water_req);
                $("#Total_Water_Required_For_Humans").val(response[0].water_req_human);
                $("#total_population_of_Livestock").val(response[0].total_pop_livestock);
                $("#Average_water_requirement").val(parseFloat(response[0].avg_water_req).toFixed(4));
                $("#Total_Water_Required_For_Livestock").val(parseFloat(response[0].water_req_livestock).toFixed(4));
                $("#Water_for_human_2").val(response[0].annual_wat_req_hum);
                $("#per_water_gw_human").val(response[0].perc_grd_hum);
                $("#demand_met_gw_human").val(parseFloat(response[0].water_deman_hum).toFixed(4));
                $("#per_demand_met_sw_human").val(response[0].perc_sur_hum);
                $("#demand_met_sw_human").val(parseFloat(response[0].water_dem_hum).toFixed(4));
                $("#Water_for_livestock_2").val(response[0].annual_wat_req_liv);
                $("#per_water_gw_livestock").val(response[0].perc_grd_liv);
                $("#demand_met_gw_livestock").val(parseFloat(response[0].water_deman_liv).toFixed(4));
                $("#per_demand_met_sw_livestock").val(response[0].perc_sur_liv);
                $("#demand_met_sw_livestock").val(parseFloat(response[0].water_dem_liv).toFixed(4));
                var values = response[0].daily_wat_req_per_liv.split(',');
                var i = 0;
                $("#tbl_live_info .dailywater2").each(function () {
                    $(this).val(values[i]);
                    i++;
                });
                total_drink_dom();
                GetAvrg();
                //var daily_water_req = parseFloat(response[0].daily_water_req);
                var Data = response[0].daily_water_req;

                Data = parseInt(Data);
                var human = $("#Total_Water_Required_For_Humans").val();
                var human_ = $("#total_population_of_human").val();
                human = parseInt(human)
                var live_stock = $("#total_population_of_Livestock").val();
                live_stock = parseInt(live_stock)
                $("#Total_Water_Required_For_Humans").val(human_ * Data)
                //$("#Average_water_requirement").val(Data / (live_stock + human))
                // $("#Total_Water_Required_For_Livestock").val(live_stock * (Data / (live_stock + human)));

                var total_liv_water_req = $("#Total_Water_Required_For_Livestock").val();
                //$("#Water_for_human_2").text(((human * Data) * 365) / 1000000);
                //var c= Math.pow(10, -7);
                var a = human * (1 / 10000000) * 365;
                $("#Water_for_human_2").text(a.toFixed(4));
                var b = total_liv_water_req * (1 / 10000000) * 365;
                $("#Water_for_livestock_2").text(b.toFixed(4));
                
                
            } else {
                water_uti_count();
            }

        }
    });
}


function Filler() {

    var value = $("#Select_Livestock").val()
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_LiveStock",
        dataType: 'JSON',
        success: function (response) {

            for (var i = 0; i < response.length; i++) {
                if (value == response[i].livestock_name) {
                    $("#Total_Number_select").val(response[i].livestock_value);
                    break;
                }
            }

        }
    });
}

function Fetch_LiveStock() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_LiveStock",
        dataType: 'JSON',
        success: function (response) {
            var option = "<option value='select'>---Select---</option>";
            for (var i = 0; i < response.length; i++) {
                option += "<option value = " + response[i].livestock_name + ">" + response[i].livestock_name + "</option>";
            }
            $("#Select_Livestock").html(option);
            get_domestic();
        }
    });
}

//function fetch_GPDCI() {
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: "/WaterUtilization/Fetch_GPDCI",
//        dataType: 'JSON',
//        success: function (response) {
//            
//            response.total_human = parseInt(response.total_human)
//            response.total_livestock = parseInt(response.total_livestock)
//            console.log(typeof response.total_human)
//            console.log(typeof response.total_livestock)
//            $("#total_population_of_human").val(response.total_human)
//            $("#total_population_of_Livestock").val(response.total_livestock)
//        }
//    });
//}

function Auto_Calc(e) {
    var Data = e.target.value;
    Data = parseInt(Data);
    if (isNaN(Data)) {
        Data = 0;
    }
    var human_ = $("#total_population_of_human").val();
    human_ = parseFloat(human_);
    var live_stock = $("#total_population_of_Livestock").val();
    live_stock = parseInt(live_stock)
    $("#Total_Water_Required_For_Humans").val(human_ * Data)
    //$("#Average_water_requirement").val(Data / (live_stock + human))
    // $("#Total_Water_Required_For_Livestock").val(live_stock * (Data / (live_stock + human)));
    var Total_Water_Required_For_Humans = $("#Total_Water_Required_For_Humans").val();
    Total_Water_Required_For_Humans = parseInt(Total_Water_Required_For_Humans)
    var total_liv_water_req = $("#Total_Water_Required_For_Livestock").val();
    //$("#Water_for_human_2").text(((human * Data) * 365) / 1000000);
    //var c= Math.pow(10, -7);
    var a = Total_Water_Required_For_Humans * (1 / 10000000) * 365;
    $("#Water_for_human_2").text(a.toFixed(4));
    var b = total_liv_water_req * (1 / 10000000) * 365;
    $("#Water_for_livestock_2").text(b.toFixed(2));


}

function Auto_CalcLive() {
    
    var live_stock = $("#total_population_of_Livestock").val();
    live_stock = parseInt(live_stock)
    //$("#Average_water_requirement").val(Data / (live_stock + human))
    // $("#Total_Water_Required_For_Livestock").val(live_stock * (Data / (live_stock + human)));
    var total_liv_water_req = $("#Total_Water_Required_For_Livestock").val();
    //$("#Water_for_human_2").text(((human * Data) * 365) / 1000000);
    //var c= Math.pow(10, -7);
    var b = total_liv_water_req * (1 / 10000000) * 365;
    $("#Water_for_livestock_2").text(b.toFixed(2));
    total_drink_dom();
}

function Auto_calc_human(e) {
    var GW = e.target.value;
    var Annual_Water = $("#Water_for_human_2").text();
    GW = parseInt(GW)
    Annual_Water = parseInt(Annual_Water)
    console.log(typeof Annual_Water)
    $("#demand_met_gw_human").val(((Annual_Water * GW) / 100).toFixed(4));

    var sw_human = 100 - ((Annual_Water * GW) / 100);
    $("#per_demand_met_sw_human").val(sw_human);

    $("#demand_met_sw_human").val(((Annual_Water * sw_human) / 100).toFixed(4));
}

function Auto_calc_livestock(e) {
    var GW = e.target.value;
    var Annual_Water = $("#Water_for_livestock_2").text();
    GW = parseInt(GW)
    Annual_Water = parseInt(Annual_Water)


    var gw_demand_met = (Annual_Water * GW) / 100;
    console.log(typeof (gw_demand_met))
    $("#demand_met_gw_livestock").val(gw_demand_met.toFixed(4));

    var gw_demand_met_human = $("#demand_met_gw_human").val();
    gw_demand_met_human = parseInt(gw_demand_met_human);
    console.log(typeof gw_demand_met_human)

    var sw_lievstock = 100 - ((Annual_Water * GW) / 100);
    console.log(typeof sw_lievstock)
    $("#per_demand_met_sw_livestock").val(sw_lievstock);
    var demand_livestock_sw = (Annual_Water * sw_lievstock) / 100;
    console.log(typeof demand_livestock_sw)
    $("#demand_met_sw_livestock").val(demand_livestock_sw.toFixed(4));


    var demand_human_sw = $("#demand_met_sw_human").val();
    //demand_human_sw = parseInt(demand_human_sw);
    $("#sum_gw").val(gw_demand_met + gw_demand_met_human);


    var sum_sw = demand_livestock_sw + demand_human_sw;
    $("#sum_sw").val(sum_sw);
}


function Irrigation_Save_kharif(ddlcrop_khaif_type1, ddlcrop_khaif_type2, ddlcrop_khaif, othercrop, txt_area_khaif, txtGround_water_req_khaif, season_type) {
    
    var val_area = '#' + txt_area_khaif;
    var val_gross = '#' + txtGround_water_req_khaif;

    if (ddlcrop_khaif_type1.value == '0') {
        alert('Please Select Crop Category');
        $(ddlcrop_khaif_type1).focus();
        return;
    } else if (ddlcrop_khaif_type2.value == '0') {
        alert('Please Select Crop Type');
        $(ddlcrop_khaif_type2).focus();
        return;
    } else if (ddlcrop_khaif.value == '0') {
        alert('Please Select Crop Name');
        $(ddlcrop_khaif).focus();
        return;
    } else if ($(val_area).val() == '') {
        alert('Please fill Crop Area (ha)');
        $(val_area).focus();
        return;
    } else if ($(val_gross).val() == '') {
        alert('Please fill Gross Water Requirement or Gross Irrigation requirement (mm)');
        $(val_gross).focus();
        return;
    }
    var obj = {};
    var checkother = ddlcrop_khaif.value;
    if (checkother != "Others") {
        obj.crop_name = ddlcrop_khaif.value;
    } else {
        obj.crop_name = $(othercrop).val();
    }
    obj.crop_category = ddlcrop_khaif_type1.value;
    obj.crop_type = ddlcrop_khaif_type2.value;



    obj.area = $(val_area).val();


    obj.gross_water = $(val_gross).val();
    obj.season_type = season_type;

    obj.total_water_dem = $('#total_water_dem').text();
    obj.per_ground_water = $('#txgrdwater').val();
    obj.per_surface_water = $('#txsurwater').val();
    obj.uti_ground_water = $('#uti_ground_water_kharif').val();
    obj.uti_surface_water = $('#uti_surface_water_kharif').val();

    var check = parseFloat($('#txgrdwater').val());
    if (check < 1 || check > 100) {
        alert('% of demand met from Ground Water Value Should Be between 1-100');
        return;
    }


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Irrigation_insert",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
            $("#TblData_GRAM_PANCHAYAT_DATABASE_a").html('');
            $("#TblData_GRAM_PANCHAYAT_DATABASE_b").html('');
            $("#TblData_GRAM_PANCHAYAT_DATABASE_c").html('');
            count_kharif = 1;
            count_rabi = 1;
            count_summer = 1;
            fetch_Irrigation_kharif();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });


}

function fetch_Irrigation_kharif() {
    var khairf_count_val = 1;
    var rabi_count_val = 1;
    var summer_count_val = 1;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_Irrigation_kharif",
        dataType: 'JSON',
        success: function (data) {
            if (data.length > 0) {
                $('#total_water_dem').text(data[0].total_water_dem);
                $('#txgrdwater').val(parseFloat(data[0].per_ground_water).toFixed(2));
                $('#txsurwater').val(parseFloat(data[0].per_surface_water).toFixed(2));
            $('#uti_ground_water_kharif').val(parseFloat(data[0].uti_ground_water).toFixed(2));
            $('#uti_surface_water_kharif').val(parseFloat(data[0].uti_surface_water).toFixed(2));
            }
            val_kharif = 0;
            val_rabi = 0;
            val_summer = 0;

            $('#kharif_Table').html('');
            $('#rabi_Table').html('');
            $('#summer_Table').html('');
            for (var i = 0; i < data.length; i++) {
                if (data[i].season_type == 'kharif') {

                    var code = '<tr><td>' + khairf_count_val + '</td>';
                    code += '<td class="crop_category">' + data[i].crop_category + '</td>';
                    code += '<td class="crop_type">' + data[i].crop_type + '</td>';
                    code += '<td class="crop_name">' + data[i].crop_name + '</td>';
                    code += '<td>' + data[i].area + '</td>';
                    code += '<td>' + data[i].gross_water + '</td>';
                    code += '<td><button class="btn btn-primary btn_disabled" onclick="Delete_data(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                    khairf_count_val++;
                    $('#kharif_Table').append(code);

                    var sum_area = parseFloat(data[i].area);
                    var sum_waterReq = parseFloat(data[i].gross_water);
                    val_kharif += (sum_area * sum_waterReq) / 1000;
                    
                }
                if (data[i].season_type == 'rabi') {

                    var code = '<tr><td>' + rabi_count_val + '</td>';
                    code += '<td class="crop_category">' + data[i].crop_category + '</td>';
                    code += '<td class="crop_type">' + data[i].crop_type + '</td>';
                    code += '<td class="crop_name">' + data[i].crop_name + '</td>';
                    code += '<td>' + data[i].area + '</td>';
                    code += '<td>' + data[i].gross_water + '</td>';
                    code += '<td><button class="btn btn-primary btn_disabled" onclick="Delete_data(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                    $('#rabi_Table').append(code);
                    rabi_count_val++;

                    var sum_area = parseFloat(data[i].area);
                    var sum_waterReq = parseFloat(data[i].gross_water);
                    val_rabi += (sum_area * sum_waterReq) / 1000;

                }
                if (data[i].season_type == 'summer') {

                    var code = '<tr><td>' + summer_count_val + '</td>';
                    code += '<td class="crop_category">' + data[i].crop_category + '</td>';
                    code += '<td class="crop_type">' + data[i].crop_type + '</td>';
                    code += '<td class="crop_name">' + data[i].crop_name + '</td>';
                    code += '<td>' + data[i].area + '</td>';
                    code += '<td>' + data[i].gross_water + '</td>';
                    code += '<td><button class="btn btn-primary btn_disabled" onclick="Delete_data(\'' + data[i].id + '\')" >Delete</button > </td></tr>';
                    $('#summer_Table').append(code);
                    summer_count_val++;

                    var sum_area = parseFloat(data[i].area);
                    var sum_waterReq = parseFloat(data[i].gross_water);
                    val_summer += (sum_area * sum_waterReq) / 1000;
                }
            }
            $('#irri_kharif_waterdemand').text(val_kharif.toFixed(2));
            $('#irri_rabi_waterdemand').text(val_rabi.toFixed(2));
            $('#irri_summer_waterdemand').text(val_summer.toFixed(2));
            Industry_get();
            sumAll();
        }
    });
}

function Delete_data(idd) {
    
    var obj = {};
    obj.IDD = idd;
    swal({
        title: "Are you sure to delete the entry?",
        text: "If you delete an entry, the demand-side data entered will be automatically deleted. Which you will have to fill out again.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; chatset=utf-8',
                    url: "/WaterUtilization/delete_data",
                    data: "{'Data': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        alert(response);
                        //$('#SAVE_BTN2').prop('disabled', false)
                        fetch_Irrigation_kharif();
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
function Save_AllData() {
    var obj = {};
    obj.total_water_dem = $('#total_water_dem').text();
    obj.per_ground_water = $('#txgrdwater').val();
    obj.per_surface_water = $('#txsurwater').val();
    obj.uti_ground_water = $('#uti_ground_water_kharif').val();
    obj.uti_surface_water = $('#uti_surface_water_kharif').val();


    var check = parseFloat($('#txgrdwater').val());
    if (check < 1 || check > 100) {
        alert('% of demand met from Ground Water Value Should Be between 1-100');
        return;
    }


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Irrigation_insert_all",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });

}
function update_Irrigation_kharif(ddlcrop_khaif_type1, ddlcrop_khaif_type2, ddlcrop_khaif, txt_area_khaif, txtGround_water_req_khaif, id, season) {

    var obj = {};
    obj.crop_category = ddlcrop_khaif_type1.value;
    obj.crop_type = ddlcrop_khaif_type2.value;
    obj.crop_name = ddlcrop_khaif.value;

    var val_area = '#' + txt_area_khaif;
    obj.area = $(val_area).val();

    var val_gross = '#' + txtGround_water_req_khaif;
    obj.gross_water = $(val_gross).val();
    obj.season_type = season;
    obj.total_water_dem = $('#total_water_dem').text();
    obj.per_ground_water = $('#txgrdwater').val();
    obj.per_surface_water = $('#txsurwater').val();
    obj.uti_ground_water = $('#uti_ground_water_kharif').val();
    obj.uti_surface_water = $('#uti_surface_water_kharif').val();

    obj.id = id;
    var check = parseFloat($('#txgrdwater').val());
    if (check < 1 || check > 100) {
        alert('% of demand met from Ground Water Value Should Be between 1-100');
        return;
    }

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Irrigation_update",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            //fetch_Irrigation();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });


}

function Industry_Uses_Save() {


    var industry_name = $("#industry_name").val();
    var industry_daily_water_req = $("#industry_daily_water_req").val();
    var industry_days_use = $("#industry_days_use").val();
    var industry_waterdemand = $("#industry_waterdemand").val();
    var industry_demand_ground_water = $("#industry_demand_ground_water").val();
    var industry_demand_surface_water = $("#industry_demand_surface_water").val();
    var industry_demand_ground_water_val = $("#industry_demand_ground_water_val").val();
    var industry_demand_surface_water_val = $("#industry_demand_surface_water_val").val();

    if (industry_name == '') {
        alert('Please fill Industry Name');
        $("#industry_name").focus();
        return;
    } else if (industry_daily_water_req == '') {
        alert('Please fill Daily Water Requirement (l/day)');
        $("#industry_daily_water_req").focus();
        return;
    } else if (industry_days_use == '') {
        alert('Please fill No. of Days in Use');
        $("#industry_days_use").focus();
        return;
    } else if (industry_waterdemand == '') {
        alert('Please fill Total Industrial Water Demand (ha m)');
        $("#industry_waterdemand").focus();
        return;
    } else if (industry_demand_ground_water == '') {
        alert('Please fill % of Water Demand met from Ground Water');
        $("#industry_demand_ground_water").focus();
        return;
    } else if (industry_demand_surface_water == '') {
        alert('Please fill % of Water Demand met from Surface Water');
        $("#industry_demand_surface_water").focus();
        return;
    } else if (industry_demand_ground_water_val == '') {
        alert('Please fill Water Demand met from Ground Water (ha m)');
        $("#industry_demand_ground_water_val").focus();
        return;
    } else if (industry_demand_surface_water_val == '') {
        alert('Please fill Water Demand met from Surface Water (ha m)');
        $("#industry_demand_surface_water_val").focus();
        return;
    }

    if ($('#SAVE_BTN3').text() == 'Save') {
        var obj = {};

        obj.industry_name = $("#industry_name").val();
        obj.industry_daily_water_req = $("#industry_daily_water_req").val();
        obj.industry_days_use = $("#industry_days_use").val();
        obj.annual_ind_demand = $("#industry_waterdemand").val();
        obj.industry_demand_ground_water = $("#industry_demand_ground_water").val();
        obj.industry_demand_surface_water = $("#industry_demand_surface_water").val();
        obj.indus_grd_water = $("#industry_demand_ground_water_val").val();
        obj.indus_sur_water = $("#industry_demand_surface_water_val").val();

        var Data = $("#industry_demand_ground_water").val();
        if (parseFloat(Data) < parseFloat(1) || parseFloat(Data) > parseFloat(100)) {
            alert("% of Water Demand met from Ground Water Value should be Between 1-100");
            $('#SAVE_BTN3').prop('disabled', false);
            return;
        }
        $('#SAVE_BTN3').prop('disabled', true)
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/WaterUtilization/Industry_Save_",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                $('#SAVE_BTN3').prop('disabled', false);
                Industry_get();
            },
            error: function () {
                alert("Error While Saving Data");
                $('#SAVE_BTN3').prop('disabled', false);
            }
        });

    }
    else if ($('#SAVE_BTN3').text() == 'Update') {
        var obj = {};

        obj.industry_name = $("#industry_name").val();
        obj.industry_daily_water_req = $("#industry_daily_water_req").val();
        obj.industry_days_use = $("#industry_days_use").val();
        obj.annual_ind_demand = $("#industry_waterdemand").val();
        obj.industry_demand_ground_water = $("#industry_demand_ground_water").val();
        obj.industry_demand_surface_water = $("#industry_demand_surface_water").val();
        obj.indus_grd_water = $("#industry_demand_ground_water_val").val();
        obj.indus_sur_water = $("#industry_demand_surface_water_val").val();
        obj.id = Ind_id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/WaterUtilization/Industry_update_",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                $('#SAVE_BTN3').prop('disabled', false)
                Industry_get();
                Ind_id = 0;
            },
            error: function () {
                alert("Error While Saving Data")
                $('#SAVE_BTN3').prop('disabled', false)
            }
        });

    }
}

function Industry_get() {
    var ind_count_val = 1;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_Industry",
        dataType: 'JSON',
        success: function (data) {
            
            var tr = '';
            var SUM_grd = 0;
            var SUM_sur = 0;
            for (var i = 0; i < data.length; i++) {
                tr += '<tr><td>' + ind_count_val + '</td><td>' + data[i].industry_name + '</td><td>' + data[i].industry_daily_water_req + '</td><td>' + data[i].industry_days_use + '</td>'
                tr += '<td>' + data[i].annual_ind_demand + '</td><td>' + data[i].industry_demand_ground_water + '</td><td>' + data[i].industry_demand_surface_water + '</td> <td>' + data[i].indus_grd_water + ' </td><td>' + data[i].indus_sur_water + ' </td>'
                tr += '<td><button class="btn btn-primary btn_disabled" onclick="get_ind_byid(' + data[i].id + ')"  >Update</button > </td>';
                tr += '<td><button class="btn btn-primary btn_disabled" onclick="delete_ind_byid(' + data[i].id + ')" >Delete</button > </td></tr>';
                SUM_grd += parseFloat(data[i].indus_grd_water);
                SUM_sur += parseFloat(data[i].indus_sur_water);
                ind_count_val++;

            }
            tr += '<tr><td></td><td>Total</td><td></td><td></td><td></td><td></td><td></td><td><input type="text" value="' + SUM_grd.toFixed(4) + '" readonly style="width:100%; text-align: center;"/></td><td><input type="text" value="' + SUM_sur.toFixed(4) + '" readonly style="width:100%; text-align: center;"/></td></tr>'
            $('#IndustryData_Table').html(tr);

            //$("#lbl3").html(SUM_grd);
            //$("#lbl4").html(SUM_sur);
            $("#SAVE_BTN3").text('Save');
            $("#industry_name").val('');
            $("#industry_daily_water_req").val('');
            $("#industry_days_use").val('');
            $("#industry_waterdemand").val('');
            $("#industry_demand_ground_water").val('');
            $("#industry_demand_surface_water").val('');
            $("#industry_demand_ground_water_val").val('');
            $("#industry_demand_surface_water_val").val('');
            Other_uses_get();
        }
    });
}

function delete_ind_byid(id) {
    var obj = {};
    obj.IDD = id;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/delete_ind",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            Industry_get();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
function get_ind_byid(id) {
    
    var obj = {};
    obj.IDD = id;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_Industry_id",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {


            for (var i = 0; i < data.length; i++) {
                $("#industry_name").val(data[i].industry_name);
                $("#industry_daily_water_req").val(data[i].industry_daily_water_req);
                $("#industry_days_use").val(data[i].industry_days_use);
                $("#industry_waterdemand").val(data[i].annual_ind_demand);
                $("#industry_demand_ground_water").val(data[i].industry_demand_ground_water);
                $("#industry_demand_surface_water").val(data[i].industry_demand_surface_water);
                $("#industry_demand_ground_water_val").val(data[i].indus_grd_water);
                $("#industry_demand_surface_water_val").val(data[i].indus_sur_water);


                $("#SAVE_BTN3").text('Update');
                Ind_id = data[i].id;
            }
        }
    });
}



function Other_uses_Save() {

    var use = $("#other_type_of_use").val();
    var daily_req = $("#other_daily_water_req").val();
    var annual_req = $("#other_annual_req").val();
    var no_of_days_use = $("#other_days_use").val();
    var demand_met_surface_water = $("#other_demand_surface_water").val();
    var demand_met_ground_water = $("#other_demand_ground_water").val();
    var oth_grd_water = $("#other_demand_surface_water_val").val();
    var oth_sur_water = $("#other_demand_ground_water_val").val();

    if (use == '') {
        alert('Please fill Type of Use');
        $("#other_type_of_use").focus();
        return;
    } else if (daily_req == '') {
        alert('Please fill Daily Water Requirement (l/day)');
        $("#other_daily_water_req").focus();
        return;
    } else if (no_of_days_use == '') {
        alert('Please fill No. of Days in Use');
        $("#other_days_use").focus();
        return;
    } else if (demand_met_ground_water == '') {
        alert('Please fill % of Water Demand met from Ground Water');
        $("#other_demand_ground_water").focus();
        return;
    }


    $('#SAVE_BTN').prop('disabled', true)
    
    if ($("#SAVE_BTN").text() == "Save") {
        var obj = {};

        obj.use = $("#other_type_of_use").val();
        obj.daily_req = $("#other_daily_water_req").val();
        obj.annual_req = $("#other_annual_req").val();
        obj.no_of_days_use = $("#other_days_use").val();
        obj.demand_met_surface_water = $("#other_demand_surface_water").val();
        obj.demand_met_ground_water = $("#other_demand_ground_water").val();
        obj.oth_grd_water = $("#other_demand_surface_water_val").val();
        obj.oth_sur_water = $("#other_demand_ground_water_val").val();

        var Data = $("#other_demand_ground_water").val();
        if (parseFloat(Data) < parseFloat(1) || parseFloat(Data) > parseFloat(100)) {
            alert("% of Water Demand met from Ground Water Value should be Between 1-100");
            $('#SAVE_BTN').prop('disabled', false);
            return;
        }
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/WaterUtilization/other_Save_",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                $('#SAVE_BTN').prop('disabled', false);
                Other_uses_get();
                $('#btn_summary').show();
            },
            error: function () {
                alert("Error While Saving Data")
                $('#SAVE_BTN').prop('disabled', false);

            }
        });
    }
    else if ($("#SAVE_BTN").text() == "Update") {
        var obj = {};

        obj.use = $("#other_type_of_use").val();
        obj.daily_req = $("#other_daily_water_req").val();
        obj.annual_req = $("#other_annual_req").val();
        obj.no_of_days_use = $("#other_days_use").val();
        obj.demand_met_surface_water = $("#other_demand_surface_water").val();
        obj.demand_met_ground_water = $("#other_demand_ground_water").val();
        obj.oth_grd_water = $("#other_demand_surface_water_val").val();
        obj.oth_sur_water = $("#other_demand_ground_water_val").val();
        obj.IDD = oth_id;


        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/WaterUtilization/Other_update_",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                $('#SAVE_BTN').prop('disabled', false);
                $('#btn_summary').show();
                Other_uses_get();
            },
            error: function () {
                alert("Error While Saving Data")
                $('#SAVE_BTN').prop('disabled', false);
            }
        });
    }
}

function Other_uses_get() {
    var count_srl = 1;
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_Other",
        dataType: 'JSON',
        success: function (data) {
            
            var tr = '';
            var SUM_grd = 0;
            var SUM_sur = 0;
            for (var i = 0; i < data.length; i++) {
                tr += '<tr><td>' + count_srl + '</td><td>' + data[i].use + '</td><td>' + data[i].daily_req + '</td><td>' + data[i].no_of_days_use + '</td>'
                tr += '<td>' + data[i].annual_req + '</td><td>' + data[i].demand_met_ground_water + '</td><td>' + data[i].demand_met_surface_water + '</td><td>' + data[i].oth_grd_water + '</td><td>' + data[i].oth_sur_water + '</td>'
                tr += '<td><button class="btn btn-primary btn_disabled" onclick="get_oth_byid(' + data[i].id + ')" >Update</button > </td>';
                tr += '<td><button class="btn btn-primary btn_disabled"  onclick="delete_oth_byid(' + data[i].id + ')">Delete</button > </td></tr>';

                SUM_grd += parseFloat(data[i].oth_grd_water);
                SUM_sur += parseFloat(data[i].oth_sur_water);
                count_srl++;
            }
            tr += '<tr><td></td><td>Total</td><td></td><td></td><td></td><td></td><td></td><td><input type="text" value="' + SUM_grd.toFixed(4) + '" readonly style="width:100%; text-align: center;"/></td><td><input type="text" value="' + SUM_sur.toFixed(4) + '" readonly style="width:100%; text-align: center;"/></td></tr>'
            $('#OtherUseageData_Table').html(tr);
            get_approved_status();
            $("#SAVE_BTN").text('Save');
            oth_id = 0;

            $("#other_type_of_use").val('');
            $("#other_daily_water_req").val('');
            $("#other_annual_req").val('');
            $("#other_days_use").val('');
            $("#other_demand_surface_water").val('');
            $("#other_demand_ground_water").val('');
            $("#other_demand_surface_water_val").val('');
            $("#other_demand_ground_water_val").val('');
        }
    });
}
function delete_oth_byid(id) {
    var obj = {};
    obj.IDD = id;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/delete_oth",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            //$('#SAVE_BTN2').prop('disabled', false)
            Other_uses_get();
        },
        error: function () {
            alert("Error While Saving Data")
            // $('#SAVE_BTN2').prop('disabled', false)
        }
    });
}
function get_oth_byid(id) {

    var obj = {};
    obj.IDD = id;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_other_id",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {


            for (var i = 0; i < data.length; i++) {
                $("#other_type_of_use").val(data[i].use);
                $("#other_daily_water_req").val(data[i].daily_req);
                $("#other_days_use").val(data[i].no_of_days_use);
                $("#other_annual_req").val(data[i].annual_req);
                $("#other_demand_ground_water").val(data[i].demand_met_ground_water);
                $("#other_demand_surface_water").val(data[i].demand_met_surface_water);
                $("#other_demand_surface_water_val").val(data[i].oth_grd_water);
                $("#other_demand_ground_water_val").val(data[i].oth_sur_water);

                
                $("#SAVE_BTN").text('Update');
                oth_id = data[i].id;
                // Other_uses_get();
            }
        }
    });
}

function addrow_a_part_kharif() {

    if (count_kharif == 1) {
        var code = '<tr><td><button id="btn_save_k' + count_kharif + '" class="btn btn-primary" onclick="Irrigation_Save_kharif(ddlcrop_khaif_type1' + count_kharif + ',ddlcrop_khaif_type2' + count_kharif + ',ddlcrop_khaif' + count_kharif + ',othercrop_khaif' + count_kharif + ',\'txt_area_khaif' + count_kharif + '\',\'txtGround_water_req_khaif' + count_kharif + '\',\'kharif\')">Save</button > </td>';
        code += '<td><select class="form-control" id="ddlcrop_khaif_type1' + count_kharif + '" onchange="type2_get(ddlcrop_khaif_type1' + count_kharif + ',' + count_kharif + ',ddlcrop_khaif_type2' + count_kharif + ',ddlcrop_khaif' + count_kharif + ')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select class="form-control" id="ddlcrop_khaif_type2' + count_kharif + '" onchange="DropDown_get(ddlcrop_khaif_type2' + count_kharif + ',\'Kharif\',' + count_kharif + ',ddlcrop_khaif' + count_kharif + ')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td  id="kharif_crop_type"><select class="form-control" id="ddlcrop_khaif' + count_kharif + '" onchange="Check_combo(ddlcrop_khaif_type1' + count_kharif + ',ddlcrop_khaif_type2' + count_kharif + ',ddlcrop_khaif' + count_kharif + ',\'btn_save_k' + count_kharif + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="other_crop" style="display:none;"><input type="text" id = "othercrop_khaif' + count_kharif + '" class="form-control"></td>';
        code += '<td><input type="text" onpaste="return false" id = "txt_area_khaif' + count_kharif + '" data-decimal="4" maxlength="8" class="form-control decimal" oninput="waterDemand_calc(\'txt_area_khaif' + count_kharif + '\',\'txtGround_water_req_khaif' + count_kharif + '\',\'irri_kharif_waterdemand\',' + count_kharif + ',\'kharif\',this)"></td>';
        code += '<td><input type="text" onpaste="return false" id="txtGround_water_req_khaif' + count_kharif + '" data-decimal="4" maxlength="9" class="form-control decimal" oninput="waterDemand_calc(\'txt_area_khaif' + count_kharif + '\',\'txtGround_water_req_khaif' + count_kharif + '\',\'irri_kharif_waterdemand\',' + count_kharif + ',\'kharif\',this)"></td>';
        /* code += '<td><input type="number" id="txt_water_dem_khaif' + count_kharif + '"oninput="Auto_CheckVal(event,1,100)" class="form-control"></td></tr >';*/

        $('table#TblData_abc_part1 tbody').prepend(code);
        count_kharif++;
    } else {
        alert("Please enter the data in all the fields")
    }
}
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
}
function addrow_a_part_rabi() {
    if (count_rabi == 1) {
        var code = '<tr><td><button id="btn_rabi' + count_rabi + '" class="btn btn-primary" onclick="Irrigation_Save_kharif(ddlcrop_rabi_type1' + count_rabi + ',ddlcrop_rabi_type2' + count_rabi + ',ddlcrop_rabi' + count_rabi + ',othercrop_rabi' + count_rabi + ',\'txt_area_rabi' + count_rabi + '\',\'txtGround_water_req_rabi' + count_rabi + '\',\'rabi\')">Save</button > </td>';
        code += '<td><select class="form-control" id="ddlcrop_rabi_type1' + count_rabi + '" onchange="type2_get(ddlcrop_rabi_type1' + count_rabi + ',' + count_rabi + ',ddlcrop_rabi_type2' + count_rabi + ',ddlcrop_rabi' + count_rabi + ')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select class="form-control" id="ddlcrop_rabi_type2' + count_rabi + '" onchange="DropDown_get(ddlcrop_rabi_type2' + count_rabi + ',\'Kharif\',' + count_rabi + ',ddlcrop_rabi' + count_rabi + ')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td  id="rabi_crop_type"><select class="form-control" id="ddlcrop_rabi' + count_rabi + '" onchange="Check_combo_2(ddlcrop_rabi_type1' + count_rabi + ',ddlcrop_rabi_type2' + count_rabi + ',ddlcrop_rabi' + count_rabi + ',\'btn_rabi' + count_rabi + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="other_crop_rabi" style="display:none;"><input type="text" id = "othercrop_rabi' + count_rabi + '" class="form-control"></td>';
        code += '<td><input onpaste="return false" type="text" id = "txt_area_rabi' + count_rabi + '" data-decimal="4" maxlength="8" class="form-control number decimal" oninput="waterDemand_calc(\'txt_area_rabi' + count_rabi + '\',\'txtGround_water_req_rabi' + count_rabi + '\',\'irri_rabi_waterdemand\',' + count_rabi + ',\'rabi\',this)"></td>';
        code += '<td><input onpaste="return false" type="text" id="txtGround_water_req_rabi' + count_rabi + '" data-decimal="4" maxlength="9" class="form-control decimal" oninput="waterDemand_calc(\'txt_area_rabi' + count_rabi + '\',\'txtGround_water_req_rabi' + count_rabi + '\',\'irri_rabi_waterdemand\',' + count_rabi + ',\'rabi\',this)"></td>';
        /* code += '<td><input type="number" id="txt_water_dem_rabi' + count_rabi + '" class="form-control"></td></tr >';*/
        $('table#TblData_abc_part2 tbody').prepend(code);
        count_rabi++;
    }
    else {
        alert("Please enter the data in all the fields");
    }
    //count=count+1;
    //alert(count);
}
function addrow_a_part_Summer() {
    if (count_summer == 1) {
        var code = '<tr><td><button id="btn_summer' + count_summer + '" class="btn btn-primary" onclick="Irrigation_Save_kharif(ddlcrop_summer_type1' + count_summer + ',ddlcrop_summer_type2' + count_summer + ',ddlcrop_summer' + count_summer + ',othercrop_summer' + count_summer + ',\'txt_area_summer' + count_summer + '\',\'txtGround_water_req_summer' + count_summer + '\',\'summer\')">Save</button > </td>';
        code += '<td><select class="form-control" id="ddlcrop_summer_type1' + count_summer + '" onchange="type2_get(ddlcrop_summer_type1' + count_summer + ',' + count_summer + ',ddlcrop_summer_type2' + count_summer + ',ddlcrop_summer' + count_summer + ')"><option value="0">--Select Crop--</option ><option value="General Crops">General Crops</option ><option value="Horticulture Crops">Horticulture Crops</option ><option value="Forestry">Forestry</option ></select ></td>';
        code += '<td><select class="form-control" id="ddlcrop_summer_type2' + count_summer + '" onchange="DropDown_get(ddlcrop_summer_type2' + count_summer + ',\'Summer\',' + count_summer + ',ddlcrop_summer' + count_summer + ')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="summer_crop_type"><select class="form-control" id="ddlcrop_summer' + count_summer + '" onchange="Check_combo_3(ddlcrop_summer_type1' + count_summer + ',ddlcrop_summer_type2' + count_summer + ',ddlcrop_summer' + count_summer + ',\'btn_summer' + count_summer + '\')"><option value="0">--Select Crop--</option ></select ></td>';
        code += '<td id="other_crop_summer" style="display:none;"><input type="text" id = "othercrop_summer' + count_summer + '" class="form-control"></td>';
        code += '<td><input type="text" onpaste="return false" id = "txt_area_summer' + count_summer + '" data-decimal="4" maxlength="8" class="form-control decimal" oninput="waterDemand_calc(\'txt_area_summer' + count_summer + '\',\'txtGround_water_req_summer' + count_summer + '\',\'irri_summer_waterdemand\',' + count_summer + ',\'summer\',this)"></td>';
        code += '<td><input type="text" onpaste="return false" id="txtGround_water_req_summer' + count_summer + '" data-decimal="4" maxlength="9" class="form-control decimal" oninput="waterDemand_calc(\'txt_area_summer' + count_summer + '\',\'txtGround_water_req_summer' + count_summer + '\',\'irri_summer_waterdemand\',' + count_summer + ',\'summer\',this)"></td>';
        /*  code += '<td><input type="number" id="txt_water_dem_summer' + count_summer + '" class="form-control"></td></tr >';*/
        $('table#TblData_abc_part3 tbody').prepend(code);
        count_summer++;
    } else {
        alert("Please enter the data in all the fields");
    }
    //count=count+1;
    //alert(count);
}


function Check_combo(ddl1, ddl2, ddl3, btn) {
    
    var check_k = 0;
    var check_r = 0;
    var check_s = 0;
    var button_ = '#' + btn;

    var selected = $(ddl3).val();
    if (selected != 'Others') {

        $("#tbl_kharif_edit .crop_category").each(function () {

            var get_textbox_value = $(this).text();
            if (get_textbox_value == ddl1.value) {
                check_k = 1;
                return false;
            }
            else {
                check_k = 0;
            }
        });
        if (check_k == 1) {
            $("#tbl_kharif_edit .crop_type").each(function () {

                var get_textbox_value = $(this).text();
                if (get_textbox_value == ddl2.value) {
                    check_r = 1;
                    return false;
                }
                else {
                    check_r = 0;
                }
            });
        }
        if (check_r == 1) {
            $("#tbl_kharif_edit .crop_name").each(function () {

                var get_textbox_value = $(this).text();
                if (get_textbox_value == ddl3.value) {
                    check_s = 1;
                    return false;
                } else {
                    check_s = 0;
                }
            });
        }

        if (check_k == 1 && check_r == 1 && check_s == 1) {

            alert('Data Already Inserted If you want to add ,please delete first');
            $(button_).prop('disabled', true);
            //btn.hide();
            return;
        }
        else {
            $(button_).prop('disabled', false);
        }
    } else {
        $("#kharif_crop_type").hide();
        $("#other_crop").show();
        $(button_).prop('disabled', false);
    }
}


function Check_combo_2(ddl1, ddl2, ddl3, btn) {

    var check_k = 0;
    var check_r = 0;
    var check_s = 0;
    var button_ = '#' + btn;
    var selected = $(ddl3).val();
    if (selected != 'Others') {

        $("#tbl_rabi_edit .crop_category").each(function () {

            var get_textbox_value = $(this).text();
            if (get_textbox_value == ddl1.value) {
                check_k = 1;
                return false;
            }
            else {
                check_k = 0;
            }

        });
        if (check_k == 1) {
            $("#tbl_rabi_edit .crop_type").each(function () {

                var get_textbox_value = $(this).text();
                if (get_textbox_value == ddl2.value) {
                    check_r = 1;
                    return false;
                }
                else {
                    check_r = 0;
                }
            });
        }
        if (check_r == 1) {
            $("#tbl_rabi_edit .crop_name").each(function () {

                var get_textbox_value = $(this).text();
                if (get_textbox_value == ddl3.value) {
                    check_s = 1;
                    return false;
                } else {
                    check_s = 0;
                }

            });
        }

        if (check_k == 1 && check_r == 1 && check_s == 1) {

            alert('Data Already Inserted If you want to add ,please delete first');
            $(button_).prop('disabled', true);
            //btn.hide();
            return;
        }
        else {
            $(button_).prop('disabled', false);
        }
    } else {
        $("#rabi_crop_type").hide();
        $("#other_crop_rabi").show();
        $(button_).prop('disabled', false);
    }
}


function Check_combo_3(ddl1, ddl2, ddl3, btn) {

    var check_k = 0;
    var check_r = 0;
    var check_s = 0;
    var button_ = '#' + btn;
    var selected = $(ddl3).val();
    if (selected != 'Others') {

        $("#tbl_summer_edit .crop_category").each(function () {

            var get_textbox_value = $(this).text();
            if (get_textbox_value == ddl1.value) {
                check_k = 1;
                return false;
            }
            else {
                check_k = 0;
            }

        });
        if (check_k == 1) {
            $("#tbl_summer_edit .crop_type").each(function () {

                var get_textbox_value = $(this).text();
                if (get_textbox_value == ddl2.value) {
                    check_r = 1;
                    return false;
                }
                else {
                    check_r = 0;
                }
            });
        }
        if (check_r == 1) {
            $("#tbl_summer_edit .crop_name").each(function () {

                var get_textbox_value = $(this).text();
                if (get_textbox_value == ddl3.value) {
                    check_s = 1;
                    return false;
                } else {
                    check_s = 0;
                }

            });
        }

        if (check_k == 1 && check_r == 1 && check_s == 1) {

            alert('Data Already Inserted If you want to add ,please delete first');
            $(button_).prop('disabled', true);
            //btn.hide();
            return;
        }
        else {
            $(button_).prop('disabled', false);
        }
    } else {
        $("#summer_crop_type").hide();
        $("#other_crop_summer").show();
        $(button_).prop('disabled', false);
    }
}
function type2_get(ddlcrop_khaif_type1, count, Bind_ddl,Bind_dd_type) {
    if (ddlcrop_khaif_type1.value != '0') {
        if (ddlcrop_khaif_type1.value == 'General Crops') {
            var AwpStateArr = [];
            AwpStateArr.push("Cereal");
            AwpStateArr.push("Fibre");
            AwpStateArr.push("Forage");
            AwpStateArr.push("Millet");
            AwpStateArr.push("Narcotic");
            AwpStateArr.push("Oilseed");
            AwpStateArr.push("Pulse");
            AwpStateArr.push("Sugar");
            var idd = Bind_ddl;
            var slection_options = '';
            slection_options += '<option value="0">--Select Type-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';
            });

            $(idd).html(slection_options);
        }

        if (ddlcrop_khaif_type1.value == 'Horticulture Crops') {
            var idd = Bind_ddl;
            var AwpStateArr = [];
            AwpStateArr.push("Vegetables");
            AwpStateArr.push("Fruits");
            AwpStateArr.push("Spices");
            AwpStateArr.push("Aromatic and Medicinal Plants");
            AwpStateArr.push("Plantation Crops");
            AwpStateArr.push("Flowers");
            slection_options += '<option value="0">--Select Type-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
        }
        $(idd).html(slection_options);
        if (ddlcrop_khaif_type1.value == 'Forestry') {
            var idd = Bind_ddl;
            var AwpStateArr = [];
            AwpStateArr.push("Forestry Plants");
            //AwpStateArr.push("Fruits");
            //AwpStateArr.push("Spices");
            //AwpStateArr.push("Aromatic and Medicinal Plants");
            //AwpStateArr.push("Plantation Crops");
            //AwpStateArr.push("Flowers");
            slection_options += '<option value="0">--Select Type-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
        }
    } else {
        var selection_crop_type = '<option value="0">--Select Type-- </option>';
        var selection_crop_name = '<option value="0">--Select Name-- </option>';
        $(Bind_ddl).html(selection_crop_type)
        $(Bind_dd_type).html(selection_crop_name)
        $(Bind_ddl).val("0");
        $(Bind_dd_type).val("0");
    }
}

function DropDown_get(food_for, food_type, count, Bind_ddl) {
    var crop_type = $(food_for).val();
    if (crop_type == "0") {
        $(Bind_ddl).val("0")
    }
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: "/WaterUtilization/Fetch_dropdown_data",
        dataType: 'JSON',
        data: { food_for: food_for.value, food_type: food_type },
        success: function (data) {
            var AwpStateArr = [];
            for (var i = 0; i < data.length; i++) {
                AwpStateArr.push(data[i].food_name);
            }
            var idd = Bind_ddl;
            var slection_options = '';
            slection_options += '<option value="0">--Select Crop-- </option>';
            AwpStateArr.forEach((val) => {
                slection_options += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $(idd).html(slection_options);
        }
    });
}

function value_between(val_check) {

    var a = parseFloat(val_check.value);
    if (a > 100) {
        alert('Please Enter Vlaue between 1 to 100 only.');
        return;
    }
    if (a < 0) {
        alert('Please Enter Vlaue between 1 to 100 only.');
        return;
    }
}

function waterDemand_calc(area, waterReq, valset, count, cr_type, ele) {
    enforceNumberValidation(ele);

    var sum_area = 0;
    var sum_waterReq = 0;
    var type = 0;

    var Final_val = 0;
    var set_value_box = '#' + valset + '';
    var sum_exist = 0;
    if (cr_type == 'kharif') {
        sum_exist = val_kharif;
    }
    if (cr_type == 'rabi') {
        sum_exist = val_rabi;
    }
    if (cr_type == 'summer') {
        sum_exist = val_summer;
    }
    for (var i = 1; i <= count; i++) {
        var val_area = '#' + area + '';
        var val_waterReq = '#' + waterReq + '';

        var valarea = $(val_area).val();
        var valwaterrq = $(val_waterReq).val();

        if (valarea != '', valwaterrq != '') {
            sum_area = parseFloat(valarea);
            sum_waterReq = parseFloat(valwaterrq);
            
            type = 1;
            Final_val += (sum_area * sum_waterReq) / 1000;
        }
    }
    if (type == 1) {

        Final_val += sum_exist;

        $(set_value_box).text(Final_val.toFixed(2));
    }
    else {
        $(set_value_box).text(sum_exist);
    }
    sumAll();
}
function sumAll() {

    var kharif = 0;
    var rabi = 0;
    var summer = 0;
    if ($('#irri_kharif_waterdemand').text() != '') {
        kharif = $('#irri_kharif_waterdemand').text();
    }
    if ($('#irri_rabi_waterdemand').text() != '') {
        rabi = $('#irri_rabi_waterdemand').text();
    }
    if ($('#irri_summer_waterdemand').text() != '') {
        summer = $('#irri_summer_waterdemand').text();
    }
    var sumAll = (parseFloat(kharif) + parseFloat(rabi) + parseFloat(summer)).toFixed(2);
    $('#total_water_dem').text(sumAll);
}
function Auto_CheckVal(e, min, max) {

    var Data = e.target.value;
    if (parseFloat(Data) < parseFloat(min) || parseFloat(Data) > parseFloat(max)) {
        alert("Enter Value Between " + min + "-" + max + "");

    }
    surface_val = 100 - parseFloat(Data);
    $('#txsurwater').val(surface_val);
    calc_utilization();
}
function calc_utilization() {
    var total_water_demand = $('#total_water_dem').text();
    var ground_water = $('#txgrdwater').val();
    var surface_water = $('#txsurwater').val();
    if (total_water_demand != '' && ground_water != '' & surface_water != '') {
        $('#uti_ground_water_kharif').val((total_water_demand * parseFloat(ground_water) / 100).toFixed(2));
        $('#uti_surface_water_kharif').val((total_water_demand * parseFloat(surface_water) / 100).toFixed(2));
    }
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

function annual_ind_cal() {
    var dail_water = $('#industry_daily_water_req').val();
    var no_of_days = $('#industry_days_use').val();

    if (dail_water != '' && no_of_days != '') {
        $('#industry_waterdemand').val((parseFloat(dail_water) * parseFloat(no_of_days) * 0.0000001).toFixed(4));
    }
    else {
        $('#industry_waterdemand').val('');
    }
    Auto_CheckVal_all();
}

function Auto_CheckVal_all() {
    
    var Data = $("#industry_demand_ground_water").val();
    const min = 1;
    const max = 100;
   /* var Data = e.target.value;*/
    if (Data != '') {
        if (parseFloat(Data) < parseFloat(min) || parseFloat(Data) > parseFloat(max)) {
            alert("Enter Value Between " + min + "-" + max + "");
            $('#industry_demand_ground_water').val('');
            $('#industry_demand_surface_water').val('');
            $('#industry_demand_ground_water_val').val("0");
            $('#industry_demand_surface_water_val').val("0");
            return;
        } 
        var surface_val = 100 - parseFloat(Data);
        if (surface_val < 0) {
            $('#industry_demand_surface_water').val('');
            $('#industry_demand_surface_water').val('');
            $('#industry_demand_ground_water_val').val("0");
            $('#industry_demand_surface_water_val').val("0");
            return;
        } else {
            $('#industry_demand_surface_water').val(surface_val);
        }


        var waterdemand = $('#industry_waterdemand').val();
        if (waterdemand != '' && Data != '') {
            $('#industry_demand_ground_water_val').val((parseFloat(waterdemand) * (parseFloat(Data) / 100)).toFixed(4));
            $('#industry_demand_surface_water_val').val((parseFloat(waterdemand) * (parseFloat(surface_val) / 100)).toFixed(4));
        }
    }
    else {
        $('#industry_demand_surface_water').val('');
        $('#industry_demand_ground_water_val').val("0");
        $('#industry_demand_surface_water_val').val("0");
    }
}

function annual_ind_cal_other() {
    var dail_water = $('#other_daily_water_req').val();
    var no_of_days = $('#other_days_use').val();

    if (dail_water != '' && no_of_days != '') {
        $('#other_annual_req').val((parseFloat(dail_water) * parseFloat(no_of_days) * 0.0000001).toFixed(4));
    }
    else {
        $('#other_annual_req').val('');
    }

    Auto_CheckVal_all_others();
}
function Auto_CheckVal_all_others() {
    
    var Data = $("#other_demand_ground_water").val();
    const min = 1;
    const max = 100;
    //var Data = e.target.value;
    if (Data != '') {
        if (parseFloat(Data) < parseFloat(min) || parseFloat(Data) > parseFloat(max)) {
            alert("Enter Value Between " + min + "-" + max + "");
            $('#other_demand_ground_water').val('');
            $('#other_demand_surface_water').val('');
            $('#other_demand_surface_water_val').val('0');
            $('#other_demand_ground_water_val').val('0');
            return;
        } 
        var surface_val = 100 - parseFloat(Data);
        $('#other_demand_surface_water').val(surface_val);
        if (surface_val < 0) {
            $('#other_demand_surface_water').val('');
            $('#other_demand_surface_water').val('');
            $('#other_demand_surface_water_val').val('0');
            $('#other_demand_ground_water_val').val('0');
            return;
        }
        var waterdemand = $('#other_annual_req').val();
        if (waterdemand != '' && Data != '') {
            $('#other_demand_surface_water_val').val((parseFloat(waterdemand) * (parseFloat(Data) / 100)).toFixed(4));
            $('#other_demand_ground_water_val').val((parseFloat(waterdemand) * (parseFloat(surface_val) / 100)).toFixed(4));
        }
    }
    else {
        $('#other_demand_surface_water').val('');
        $('#other_demand_surface_water_val').val('0');
        $('#other_demand_ground_water_val').val('0');
    }

}

var t = 0;
function Get_Livestock_info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WaterUtilization/Get_Livestock_info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].livestock_name + '</td><td class="dailywater1">' + data[i].livestock_value + '</td><td><input type="text"oninput="GetAvrg()" placeholder="Enter Daily water requirement (LPCD) for Livestock" onpaste="return false" maxlength="4" class="form-control dailywater2 decimal" id="daily_water_req' + i + '" /></td class="dailywater3" ><td class="dailywater3" id="sum_val' + i + '"></td></tr>';
                    t++;
                }
            }


            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#livestock_Info').html(tr);
            }
            else {
                $('#livestock_Info').html(tr);
            }
            get_domestic();
        }
    });
}
function GetAvrg() {
    var val_a = [];
    var val_b = [];
    var val_final = [];
    var Final_val = 0;
    var i = 0;
    var total_population_of_Livestock = $("#total_population_of_Livestock").val();

    $("#tbl_live_info .dailywater1").each(function () {
        var get_textbox_value = $(this).text();
        if (!isNaN(parseFloat(get_textbox_value))) {
            val_a.push(get_textbox_value);
        }

    });
    $("#tbl_live_info .dailywater2").each(function () {

        var get_textbox_value = $(this).val();
        if (!isNaN(parseFloat(get_textbox_value))) {
            val_b.push(get_textbox_value);
            i++;
        }

    });
    if (val_b.length > 0) {
        for (var c = 0; c < val_b.length; c++) {
            var val_first = val_a[c];
            var val_second = val_b[c];
            var r = parseFloat(val_first) * parseFloat(val_second);
            val_final.push(r);
            Final_val += r;
            $('#sum_val' + c).text(r.toFixed(4));
        }
        var avrg_val = (Final_val / total_population_of_Livestock);
        
        $('#Average_water_requirement').val(avrg_val.toFixed(4));
        var total_pop = parseFloat($('#total_population_of_Livestock').val());
        $('#Total_Water_Required_For_Livestock').val(Math.round(parseFloat(avrg_val) * total_pop));
    }
    else {
        for (var k = 0; t > k; k++) {
            $('#sum_val' + k).text('');
        }
        $('#Average_water_requirement').val('');
        $('#Total_Water_Required_For_Livestock').val('');
    }
    Auto_CalcLive();
}

function total_drink_dom() {
    
    var wat_hum = $('#Water_for_human_2').text();
    var wat_liv = $('#Water_for_livestock_2').text();
    //if (isNaN(wat_hum) || isNaN(wat_liv)) {
    //    wat_hum = $('#Water_for_human_2').text(0);
    //    wat_liv = $('#Water_for_livestock_2').text(0);
    //}
    if (wat_hum != '' && wat_liv != '') {
        var a = parseFloat(wat_hum);
        var b = parseFloat(wat_liv);
        $('#domestic_annual_req_total_value').val((a + b).toFixed(4));
    }


    var grd_hum = $('#demand_met_gw_human').val();
    var grd_liv = $('#demand_met_gw_livestock').val();
    if (grd_hum != '' && grd_liv != '') {
        $('#sum_gw').val((parseFloat(grd_hum) + parseFloat(grd_liv)).toFixed(4));
    }

    var sur_hum = $('#demand_met_sw_human').val();
    var sur_liv = $('#demand_met_sw_livestock').val();
    if (sur_hum != '' && sur_liv != '') {
        $('#sum_sw').val((parseFloat(sur_hum) + parseFloat(sur_liv)).toFixed(4));
    }

}
function Auto_CheckVal_drink_dom_grd(e, min, max) {
    
    var Data = e.target.value;
    if ($('#Water_for_human_2').text() != '') {
        //if (parseFloat(Data) < parseFloat(min) || parseFloat(Data) > parseFloat(max)) {
        //    alert("Enter Value Between " + min + "-" + max + "");
        //    $("#per_water_gw_human").val("");
        //    $('#per_demand_met_sw_human').val("");
        //}

        var surface_val = 100 - parseFloat(Data);
        
        if ((parseFloat(surface_val) < 1 || parseFloat(surface_val) > 100) && parseFloat(surface_val) != 0) {
                $('#per_demand_met_sw_human').val("0");
                $('#demand_met_gw_human').val("0");
                $('#demand_met_sw_human').val("0");
        }
        else {
            $('#per_demand_met_sw_human').val(surface_val);
            var annual_wat_req = parseFloat($('#Water_for_human_2').text());
            var ground_per = parseFloat(Data);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_gw_human').val(0);
            } else {
                $('#demand_met_gw_human').val(final_val.toFixed(4));
            }

            if (isNaN(surface_val)) {
                $('#per_demand_met_sw_human').val("");
            } else {
                $('#per_demand_met_sw_human').val(surface_val);
            }

            
            var annual_wat_req = parseFloat($('#Water_for_human_2').text());
            var ground_per = parseFloat(surface_val);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_sw_human').val(0);
            } else {
                $('#demand_met_sw_human').val(final_val.toFixed(4));
            }

        }
    }
    else {
        alert('Enter Daily water requirement (LPCD) First');
    }
    total_drink_dom();
}

function Auto_CheckVal_drink_dom_sur(e, min, max) {
    var Data = e.target.value;
    if ($('#Water_for_human_2').text() != '') {
        //if (parseFloat(Data) < parseFloat(min) || parseFloat(Data) > parseFloat(max)) {
        //    alert("Enter Value Between " + min + "-" + max + "");

        //}
        var surface_val = 100 - parseFloat(Data);

        if ((parseFloat(surface_val) < 1 || parseFloat(surface_val) > 100) && parseFloat(surface_val) != 0) {
            $('#per_water_gw_human').val("0");
            $('#per_demand_met_sw_livestock').val("0");
            $('#demand_met_gw_human').val("0");
        }
        else {
            if (isNaN(surface_val)) {
                $('#per_water_gw_human').val("");
            } else {
                $('#per_water_gw_human').val(surface_val);
            }

            var annual_wat_req = parseFloat($('#Water_for_human_2').text());
            var ground_per = parseFloat(Data);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_sw_human').val(0)
            } else {
                $('#demand_met_sw_human').val(final_val.toFixed(4));
            }

            if (isNaN(surface_val)) {
                $('#per_water_gw_human').val("");
            } else {
                $('#per_water_gw_human').val(surface_val);
            }
            var annual_wat_req = parseFloat($('#Water_for_human_2').text());
            var ground_per = parseFloat(surface_val);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_gw_human').val(0);
            } else {
                $('#demand_met_gw_human').val(final_val.toFixed(4));
            }

        }
    }
    else {
        alert('Enter Daily water requirement (LPCD) First');
    }
    total_drink_dom();
}
//document.getElementById("txgrdwater").focusout = function () {
//    
//    var input = parseFloat(this.value);
//    if (input < 1 || input > 100)
//        alert('Input Value Should Be between 1-100');
//    $('#large_pop_20_21').val(0);
//    return;
//}
function Auto_CheckVal_drink_dom_grd_liv(e, min, max) {
    var Data = e.target.value;
    if ($('#Water_for_livestock_2').text() != '') {
        if (Data.length > 3) {
            if (parseFloat(Data) < parseFloat(min) || parseFloat(Data) > parseFloat(max)) {
                return;
            }
        }
        var surface_val = 100 - parseFloat(Data);
        if ((parseFloat(surface_val) < 1 || parseFloat(surface_val) > 100) && parseFloat(surface_val) != 0) {
            $('#per_demand_met_sw_livestock').val("0");
            $('#demand_met_gw_livestock').val("0");
            $('#demand_met_sw_livestock').val("0");
        }
        else {
            $('#per_demand_met_sw_livestock').val(surface_val);
            var annual_wat_req = parseFloat($('#Water_for_livestock_2').text());
            var ground_per = parseFloat(Data);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_gw_livestock').val(0);
            } else {
                $('#demand_met_gw_livestock').val(final_val.toFixed(4));
            }

            if (isNaN(surface_val)) {
                $('#per_demand_met_sw_livestock').val("");
            } else {
                $('#per_demand_met_sw_livestock').val(surface_val);
            }

            var annual_wat_req = parseFloat($('#Water_for_livestock_2').text());
            var ground_per = parseFloat(surface_val);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_sw_livestock').val(0);
            } else {
                $('#demand_met_sw_livestock').val(final_val.toFixed(4));
            }
        }
    }
    else {
        alert('Enter Daily water requirement (LPCD) First');
    }
    total_drink_dom();
}

function Auto_CheckVal_drink_dom_sur_liv(e, min, max) {
    var Data = e.target.value;
    if ($('#Water_for_livestock_2').text() != '') {
        //if (parseFloat(Data) < parseFloat(min) || parseFloat(Data) > parseFloat(max)) {
        //    alert("Enter Value Between " + min + "-" + max + "");

        //}
        var surface_val = 100 - parseFloat(Data);

        if ((parseFloat(surface_val) < 1 || parseFloat(surface_val) > 100) && parseFloat(surface_val) != 0) {
            $('#per_water_gw_livestock').val("0");
            $('#demand_met_sw_livestock').val("0");
            $('#demand_met_gw_livestock').val("0");
        }
        else {
            $('#per_water_gw_livestock').val(surface_val);
            var annual_wat_req = parseFloat($('#Water_for_livestock_2').text());
            var ground_per = parseFloat(Data);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_sw_livestock').val(0);
            } else {
                $('#demand_met_sw_livestock').val(final_val.toFixed(4));
            }

            if (isNaN(surface_val)) {
                $('#per_water_gw_livestock').val("");
            } else {
                $('#per_water_gw_livestock').val(surface_val);
            }

            var annual_wat_req = parseFloat($('#Water_for_livestock_2').text());
            var ground_per = parseFloat(surface_val);
            var final_val = (annual_wat_req * ground_per) / 100;
            if (isNaN(final_val)) {
                $('#demand_met_gw_livestock').val(0);
            } else {
                $('#demand_met_gw_livestock').val(final_val.toFixed(4));
            }

        }
    }
    else {
        alert('Enter Daily water requirement (LPCD) First');
    }
    total_drink_dom();
}

document.getElementById("Daily_water_requirement").focusout = function () {

    var input = parseFloat(this.value);
    if (input < 55 || input > 70) {
        alert('Daily water requirement (LPCD) Value Should Be between 55-70');
        $('#Daily_water_requirement').focus();
        $('#Daily_water_requirement').val('');
        $('#Total_Water_Required_For_Humans').val('');
    }

    $('#large_pop_20_21').val(0);
    return;
}