
var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function logout() {
        alert("Your session has been logged out automatically due to no activity in the last 60 minutes. Please log in again.")
        //location.href = 'logout.html'
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 60 * 60 * 1000)
        // 1000 milliseconds = 1 second
    }
};

//function BPL_APL_Validation() {
//    var i = 0;
//    var no_of_bpl = $('#no_of_bpl').val();
//    var no_of_apl = $('#no_of_apl').val();
//    var tol_population = $('#tol_population').val();
//    if (tol_population == "") {
//        tol_population = 0;
//    }
//    if (no_of_bpl == "") {
//        i = 1;
//        no_of_bpl = 0;
//    }
//    if (no_of_apl == "") {
//        i = 1;
//        no_of_apl = 0;
//    }

//    var Sum_apl_bpl = parseFloat(no_of_bpl) + parseFloat(no_of_apl);

//    var Total = parseFloat(tol_population);

var e_sentsts = false;
function baseline_gp_data(villageCount) {

    var year = $("#year").val();
    var month = $("#month").val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = year;
    obj.month = month;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/baselinedata_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {


            
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (data == "No Data Found") {
                $("#gp_status").text("The module is ready to fill out the gathered information at GP level.").css({ 'color': 'Blue' });
                /*alert("No Data for this Gram Panychayat (Section-A)");*/
                
                if (villageCount == 0) {
                    $('.remove_tr_village').remove();
                    $("#total_no_of_village").val("");
                    $("input[type='text']").val("");
                }
                $('.remove_tr').remove();
                
                $("#source_year_liv").val("");
                $("#source_year").val("");
                //population
                $('#male_population').val("");
                $('#female_population').val("");
                $('#transgender_population').val("");
                $('#tol_population').val("");

                //Number of House holds

                $('#no_of_sc').val("");
                $('#no_of_st').val("");
                $('#no_of_obc').val("");
                $('#no_of_general').val("");

                $('#no_of_bpl').val("");

                $('#no_of_households').val("");


                

                $('#forest_area_in_ha').val("");
                $('#fallow_land_in_ha').val("");
                $('#cultivable_land_in_ha').val("");
                $('#other_land_use').val("");

                $('#net_sown_area').val("");
                $('#net_irrigated_area').val("");
                //net_sown_area

                // Agriculture
                $('#irrigated_area_in_kharif').val("");
                $('#irrigated_area_in_rabi').val("");
                $('#irrigated_area_in_summer').val("");
                $('#total_irrigated_area').val("");
                $('#un_irrigated_area_in_kharif').val("");
                $('#un_irrigated_area_in_rabi').val("");
                $('#un_irrigated_area_in_summer').val("");
                $('#total_un_irrigated_area').val("");
                $("#totalGround").val("");
                $('#total_cropped_area').val("");
                $("#totalSurfaceWater").val("");
                // Water lifting source
                $('#non_energised').val("");
                $('#diesel_pumps').val("");
                $('#centrifugal_pumps').val("");
                $('#submersible_pumps').val("");
                $('#solar_pumps').val("");
                $('#total_water_lifting_devices').val("");
                //Water Saving Devices like sprinklers, drip etc being used (number of farmers / Area )
                $("#totalWells").val("");
                $('#gpdata_remarks').val("");
                $("#total_electric_pumps").val("");
                $("#total_water_efficient").val("");
                $("#livestock_population").val("");
                aa_table_part_data_geting();
            }


            else if (data[0].length != 0) {

                //new columns






                //population

                if (data[0].objgpdata[0].male_population != null && data[0].objgpdata[0].male_population != "") {
                    //male_population = data[0].male_population;
                    $('#male_population').val(parseInt(data[0].objgpdata[0].male_population));
                }
                if (data[0].objgpdata[0].female_population != null && data[0].objgpdata[0].female_population != "") {

                    //female_population = data[0].female_population;
                    $('#female_population').val(parseInt(data[0].objgpdata[0].female_population));
                }
                if (data[0].objgpdata[0].transgender_population != null && data[0].objgpdata[0].transgender_population != "") {
                    // child_population = data[0].child_population;
                    $('#transgender_population').val(parseInt(data[0].objgpdata[0].transgender_population));
                }

                if (data[0].objgpdata[0].tol_population != null && data[0].objgpdata[0].tol_population != "") {

                    $('#tol_population').val(parseInt(data[0].objgpdata[0].tol_population));
                }
                if (data[0].objgpdata[0].source_year != null && data[0].objgpdata[0].source_year != "") {
                    $('#source_year').val(data[0].objgpdata[0].source_year);
                }


                if (data[0].objgpdata[0].no_of_sc != null && data[0].objgpdata[0].no_of_sc != "") {

                    $('#no_of_sc').val(parseInt(data[0].objgpdata[0].no_of_sc));
                }
                if (data[0].objgpdata[0].no_of_st != null && data[0].objgpdata[0].no_of_st != "") {

                    $('#no_of_st').val(parseInt(data[0].objgpdata[0].no_of_st));
                }
                if (data[0].objgpdata[0].no_of_obc != null && data[0].objgpdata[0].no_of_obc != "") {

                    $('#no_of_obc').val(parseInt(data[0].objgpdata[0].no_of_obc));
                }

                if (data[0].objgpdata[0].no_of_general != null && data[0].objgpdata[0].no_of_general != "") {

                    $('#no_of_general').val(parseInt(data[0].objgpdata[0].no_of_general));
                }
                if (data[0].objgpdata[0].no_of_bpl != null && data[0].objgpdata[0].no_of_bpl != "") {

                    $('#no_of_bpl').val(parseInt(data[0].objgpdata[0].no_of_bpl));
                }
                //Number of House holds

                if (data[0].objgpdata[0].no_of_households != null && data[0].objgpdata[0].no_of_households != "") {

                    $('#no_of_households').val(parseInt(data[0].objgpdata[0].no_of_households));
                }




                // Gp area in Ha

                //if (data[0].objgpdata[0].gp_area_in_ha != null && data[0].objgpdata[0].gp_area_in_ha != "") {

                //    $('#gp_area_in_ha').val(parseFloat(data[0].objgpdata[0].gp_area_in_ha).toFixed(4));
                //} else {
                //    Get_gp_block_area();
                //}
                if (data[0].objgpdata[0].forest_area_in_ha != null && data[0].objgpdata[0].forest_area_in_ha != "") {

                    $('#forest_area_in_ha').val(parseFloat(data[0].objgpdata[0].forest_area_in_ha).toFixed(2));
                }
                if (data[0].objgpdata[0].fallow_land_in_ha != null && data[0].objgpdata[0].fallow_land_in_ha != "") {

                    $('#fallow_land_in_ha').val(parseFloat(data[0].objgpdata[0].fallow_land_in_ha).toFixed(2));
                }

                if (data[0].objgpdata[0].cultivable_land_in_ha != null && data[0].objgpdata[0].cultivable_land_in_ha != "") {

                    $('#cultivable_land_in_ha').val(parseFloat(data[0].objgpdata[0].cultivable_land_in_ha).toFixed(2));
                }

                if (data[0].objgpdata[0].other_land_use != null && data[0].objgpdata[0].other_land_use != "") {

                    $("#other_land_use").val(parseFloat(data[0].objgpdata[0].other_land_use).toFixed(2));
                }
                if (data[0].objgpdata[0].net_sown_area != null && data[0].objgpdata[0].net_sown_area != "") {

                    $('#net_sown_area').val(parseFloat(data[0].objgpdata[0].net_sown_area).toFixed(2));
                } else {
                    $('#net_sown_area').val("");
                }
                if (data[0].objgpdata[0].net_irrigated_area != null && data[0].objgpdata[0].net_irrigated_area != "") {

                    $('#net_irrigated_area').val(parseFloat(data[0].objgpdata[0].net_irrigated_area).toFixed(2));
                } else {
                    $('#net_irrigated_area').val("");
                }

                //net_sown_area

                // Agriculture

                if (data[0].objgpdata[0].irrigated_area_in_kharif != null && data[0].objgpdata[0].irrigated_area_in_kharif != "") {

                    $('#irrigated_area_in_kharif').val(parseFloat(data[0].objgpdata[0].irrigated_area_in_kharif).toFixed(2));
                }
                if (data[0].objgpdata[0].irrigated_area_in_rabi != null && data[0].objgpdata[0].irrigated_area_in_rabi != "") {

                    $('#irrigated_area_in_rabi').val(parseFloat(data[0].objgpdata[0].irrigated_area_in_rabi).toFixed(2));
                }
                if (data[0].objgpdata[0].irrigated_area_in_summer != null && data[0].objgpdata[0].irrigated_area_in_summer != "") {

                    $('#irrigated_area_in_summer').val(parseFloat(data[0].objgpdata[0].irrigated_area_in_summer).toFixed(2));
                }
                if (data[0].objgpdata[0].total_irrigated_area != null && data[0].objgpdata[0].total_irrigated_area != "") {

                    $('#total_irrigated_area').val(parseFloat(data[0].objgpdata[0].total_irrigated_area).toFixed(2));
                }
                //if (data[0].objgpdata[0].net_irrigated_area != null && data[0].objgpdata[0].net_irrigated_area != "") {

                //    $('#net_irrigated_area').val(parseFloat(data[0].objgpdata[0].net_irrigated_area).toFixed(4));
                //}
                if (data[0].objgpdata[0].un_irrigated_area_in_kharif != null && data[0].objgpdata[0].un_irrigated_area_in_kharif != "") {

                    $('#un_irrigated_area_in_kharif').val(parseFloat(data[0].objgpdata[0].un_irrigated_area_in_kharif).toFixed(2));
                }
                if (data[0].objgpdata[0].un_irrigated_area_in_rabi != null && data[0].objgpdata[0].un_irrigated_area_in_rabi != "") {

                    $('#un_irrigated_area_in_rabi').val(parseFloat(data[0].objgpdata[0].un_irrigated_area_in_rabi).toFixed(2));
                }
                if (data[0].objgpdata[0].un_irrigated_area_in_summer != null && data[0].objgpdata[0].un_irrigated_area_in_summer != "") {

                    $('#un_irrigated_area_in_summer').val(parseFloat(data[0].objgpdata[0].un_irrigated_area_in_summer).toFixed(2));
                }
                if (data[0].objgpdata[0].total_un_irrigated_area != null && data[0].objgpdata[0].total_un_irrigated_area != "") {

                    $('#total_un_irrigated_area').val(parseFloat(data[0].objgpdata[0].total_un_irrigated_area).toFixed(2));
                }
                if (data[0].objgpdata[0].total_cropped_area != null && data[0].objgpdata[0].total_cropped_area != "") {

                    $('#total_cropped_area').val(parseFloat(data[0].objgpdata[0].total_cropped_area).toFixed(2));
                }

                if (data[0].objgpdata[0].unirrigated_area != null && data[0].objgpdata[0].unirrigated_area != "") {

                    $('#non_irrigated_area').val(parseFloat(data[0].objgpdata[0].unirrigated_area).toFixed(2));
                }

                // Water lifting source

                if (data[0].objgpdata[0].non_energised != null && data[0].objgpdata[0].non_energised != "") {

                    $('#non_energised').val(parseInt(data[0].objgpdata[0].non_energised));
                }
                if (data[0].objgpdata[0].diesel_pumps != null && data[0].objgpdata[0].diesel_pumps != "") {

                    $('#diesel_pumps').val(parseInt(data[0].objgpdata[0].diesel_pumps));
                }
                if (data[0].objgpdata[0].centrifugal_pumps != null && data[0].objgpdata[0].centrifugal_pumps != "") {

                    $('#centrifugal_pumps').val(parseInt(data[0].objgpdata[0].centrifugal_pumps));
                }
                if (data[0].objgpdata[0].submersible_pumps != null && data[0].objgpdata[0].submersible_pumps != "") {

                    $('#submersible_pumps').val(parseInt(data[0].objgpdata[0].submersible_pumps));
                }
                if (data[0].objgpdata[0].solar_pumps != null && data[0].objgpdata[0].solar_pumps != "") {

                    $('#solar_pumps').val(parseInt(data[0].objgpdata[0].solar_pumps));
                }
                if (data[0].objgpdata[0].total_electric_pumps != null && data[0].objgpdata[0].total_electric_pumps != "") {

                    $('#total_electric_pumps').val(parseInt(data[0].objgpdata[0].total_electric_pumps));
                }

                if (data[0].objgpdata[0].total_water_lifting_devices != null && data[0].objgpdata[0].total_water_lifting_devices != "") {

                    $('#total_water_lifting_devices').val(parseInt(data[0].objgpdata[0].total_water_lifting_devices));
                }

                if (data[0].objremarks[0] != null && data[0].objremarks[0] != "") {
                    $('#remarks_txt').text(data[0].objremarks[0].gpdata_remarks);
                }
                if (data[0].objremarks[0] != null && data[0].objremarks[0] != "") {
                    $('#State_txt').text(data[0].objremarks[0].state_remarks);
                }


                //if (villageCount == 0) {
                //    if (data[0].objgpdata[0].total_no_of_village != null && data[0].objgpdata[0].total_no_of_village != "") {
                //        $('#total_no_of_village').val(parseInt(data[0].objgpdata[0].total_no_of_village));
                //    }
                //    $('#total_no_of_village').prop("disabled", false);

                //    if (data[0].objgpdata[0] != null && data[0].objgpdata[0] != "") {
                //        var VillageName = data[0].objgpdata[0].village_name.split(',');
                //        $('#villagethead').empty('');
                //        var html = "";

                //        for (var i = 0; i < VillageName.length; i++) {
                //            if (i == 0) {
                //                html = '<tr ><td><button id="Addvillage" type="button" hidden class="add-field btn btn-success hide_btn" onclick="AddVillage()">Add Village Name</button></td></tr>';
                //                html += '<tr class = "remove_tr_village"><td><span id=""><input class="VillageName form-control" id="VillageName"  value="' + VillageName[i] + '" name = "VillageName" type=text  onchange = "village_name_validate()" /></span></td>';
                //                html += '<td><a href="" onclick="return Dtlvillage(this)" class="Village_remove_field">Remove</a></td></tr>';
                //            } else {
                //                html = '<tr class = "remove_tr_village"><td><span id=""><input class="VillageName form-control" id="VillageName" value="' + VillageName[i] + '" name = "VillageName" type=text onchange = "village_name_validate()" /></span></td>';
                //                html += '<td><a href="" onclick="return Dtlvillage(this)" class="Village_remove_field hide_btn">Remove</a></td></tr>';
                //            }
                //            $('#villagethead').append(html);
                //        }
                //    }
                //}

                ///Livestock Section
                var total_livestock = 0;
                if (data[0].objlivestock.length != null && data[0].objlivestock.length != "" && data[0].objlivestock.length != 0) {
                    //var LivestockName = data[0].l["livestockname"].split(',');
                    //var LivestockValue = data[0].l["livestockvalue"].split(',');
                    $('#livestockthead').empty('');
                    var html = "";
                    

                    for (var i = 0; i < data[0].objlivestock.length; i++) {
                        if (i == 0) {
                            html = '<tr ><td><button type="button" id="LivestockAdd" onclick="validatelivestockadd()" hidden class="add-field btn btn-success hide_btn">Add</button></td ></tr>';
                            html += '<tr class = "remove_tr"><td><input id="livestock_dropdownd" class="livestockOtherName form-control alpha" value="' + data[0].objlivestock[i].livestock_name + '" name ="livestockpopulation"  type=text " disabled/></td>';
                            html += '<td><span id=""><input class="livestocknumericvalue form-control decimal" value="' + data[0].objlivestock[i].livestock_value + '" name = "livestocknumericvalue" type=text placeholder="Enter numeric value" /></span></td>';
                            html += '<td><a href="" onclick="return Deleteqry(this)" class="livestock_remove_field hide_btn_tr">Remove</a></td></tr>';
                        } else {
                            html = '<tr class = "remove_tr"><td>';
                            html += '<input id="livestock_dropdownd" class="livestockOtherName livestockOther form-control alpha" value="' + data[0].objlivestock[i].livestock_name + '" name = "livestockpopulation" type=text " disabled/></td>';
                            html += '<td><span id=""><input class="livestocknumericvalue form-control decimal" value="' + data[0].objlivestock[i].livestock_value + '" name = "livestocknumericvalue" type=text placeholder="Enter numeric value" /></span></td>';
                            html += '<td><a href="" onclick="return Deleteqry(this)" class="livestock_remove_field hide_btn_tr">Remove</a></td></tr>';
                        }

                        total_livestock += parseInt(data[0].objlivestock[i].livestock_value);
                        $('#livestockthead').append(html);
                        //this variable is used on add button click to append the new row right after the last tr
                        LivestockCounter = parseFloat(i);
                    }
                    
                }
                $('#livestock_population').val(total_livestock);
                if (data[0].objlivestock.length != null && data[0].objlivestock.length != "" && data[0].objlivestock.length != 0) {
                    if (data[0].objlivestock[0].source_year_liv != null && data[0].objlivestock[0].source_year_liv != "") {
                        $('#source_year_liv').val(data[0].objlivestock[0].source_year_liv);
                    }
                }
                ///Irrigation Surface Water Section
                var total_surfacewater = 0;
                if (data[0].objsurfacewater.length != null && data[0].objsurfacewater.length != "" && data[0].objsurfacewater.length != 0) {
                    //var other_irrigation_sur_name = data[0].gp["other_irrigation_sur_name"].split(',');
                    //var other_irrigation_sur_numeric = data[0].gp["other_irrigation_sur_numeric"].split(',');

                    $('#trirrsurfother').empty('');
                    var html = "";
                    

                    for (var i = 0; i < data[0].objsurfacewater.length; i++) {
                        if (i == 0) {
                            html = '<tr ><td> <button class="btn btn-success IrrSurAddOther hide_btn" onclick="validateIrriSurface()">Add</button></td></tr>';
                            html += '<tr class = "remove_tr"><td><input type="text" class="form-control IrrSurOtherName alpha" value="' + data[0].objsurfacewater[i].surface_water_name + '" name="IrrSurOtherName" placeholder="Enter the numeric value" disabled/></td>';
                            html += '<td><input type="text" class="form-control decimal IrrSurOtherNumeric" onkeypress="validate(event)" value="' + parseFloat(data[0].objsurfacewater[i].surface_water_value).toFixed(2) + '" name="IrrSurOtherNumeric" placeholder="Enter the numeric value" /></td>'
                            html += '<td><a href="" onclick="return DeleteIrriSurfaceWater(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        } else {
                            html = '<tr class = "remove_tr"><td>';
                            html += '<input type="text" class="form-control IrrSurOtherName alpha" onchange="surface_validate()" value="' + data[0].objsurfacewater[i].surface_water_name + '" name="IrrSurOtherName" placeholder="Enter the numeric value" disabled/></td>';
                            html += '<td><input type="text" class="form-control decimal IrrSurOtherNumeric" onkeypress="validate(event)" value="' + parseFloat(data[0].objsurfacewater[i].surface_water_value).toFixed(2) + '" name="IrrSurOtherNumeric" placeholder="Enter the numeric value" /></td>'
                            html += '<td><a href="" onclick="return DeleteIrriSurfaceWater(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        }
                        total_surfacewater += parseFloat(data[0].objsurfacewater[i].surface_water_value);
                        $('#trirrsurfother').append(html);
                        IrriSurfaceWaterCounter = i;
                    }
                    IrriSurfaceWaterCounter = i + 1;
                    
                }
                $('#totalSurfaceWater').val(parseFloat(total_surfacewater).toFixed(2));


                ///Irrigation Ground Water Section
                var total_groundwater = 0;
                if (data[0].objgroundwater.length != null && data[0].objgroundwater.length != "" && data[0].objgroundwater.length != 0) {
                    //var other_irrigation_gr_name = data[0].gp["other_irrigation_gr_name"].split(',');
                    //var other_irrigation_gr_numeric = data[0].gp["other_irrigation_gr_numeric"].split(',');

                    $('#irriggroundwatertr').empty('');
                    var html = "";
                    

                    for (var i = 0; i < data[0].objgroundwater.length; i++) {
                        if (i == 0) {
                            html = '<tr ><td> <button class="btn btn-success IrrGrounWaterAdd hide_btn" onclick="validateIrriGround()">Add</button></td> </tr>';
                            html += '<tr class = "remove_tr"><td><input type="text" class="form-control IrrGroundWaterName alpha" value="' + data[0].objgroundwater[i].ground_water_name + '" name="IrrGroundWaterName" placeholder="Enter the numeric value"  disabled/></td>';
                            html += '<td><input type="text" class="form-control decimal IrrGroundWaterNumeric" onkeypress="validate(event)" value="' + parseFloat(data[0].objgroundwater[i].ground_water_value).toFixed(2) + '" name="IrrGroundWaterNumeric" placeholder="Enter the numeric value" /></td>'
                            html += '<td><a href="" onclick="return DeleteGroundWater(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        } else {
                            html = '<tr class = "remove_tr"><td>';
                            html += '<input type="text" id="ground_other" class="form-control IrrGroundWaterName alpha" onchange="ground_validate()" value="' + data[0].objgroundwater[i].ground_water_name + '" name="IrrGroundWaterName" placeholder="Enter the numeric value" disabled/></td>';
                            html += '<td><input type="text" class="form-control decimal IrrGroundWaterNumeric" onkeypress="validate(event)" value="' + parseFloat(data[0].objgroundwater[i].ground_water_value).toFixed(2) + '" name="IrrGroundWaterNumeric" placeholder="Enter the numeric value" /></td>'
                            html += '<td><a href="" onclick="return DeleteGroundWater(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        }

                        total_groundwater += parseFloat(data[0].objgroundwater[i].ground_water_value);
                        $('#irriggroundwatertr').append(html);
                        IrriGroundWaterCounter = parseInt(i);
                    }  
                }
                $('#totalGround').val(parseFloat(total_groundwater).toFixed(2));
                ///Ground Water Section
                var total_existing = 0;
                if (data[0].objexwells.length != null && data[0].objexwells.length != "" && data[0].objexwells.length != 0) {
                    //var othergroundwatername = data[0].gp["other_well_name"].split(',');
                    //var othergroundwaternumeric = data[0].gp["other_well_existing"].split(',');
                    $('#trgroundwater').empty('');
                    var html = "";
                    for (var i = 0; i < data[0].objexwells.length; i++) {
                        if (i == 0) {
                            html = '<tr><td> <button type="button" onclick="validateExGroundWater()" id="waterEffAdd" class="GroundAdd btn btn-success hide_btn">Add</button></td> </tr>';
                            html += '<tr class = "remove_tr"><td><input id="other" class="OtherGroundWaterName form-control alpha" value="' + data[0].objexwells[i].existing_wells_name + '" name="OtherGroundWaterName" type=text placeholder="Other input" disabled/></td>';
                            html += '<td><input id = "other2" class="OtherGroundWaterNumeric Form-control" value="' + parseFloat(data[0].objexwells[i].existing_wells_value) + '" name = "OtherGroundWaterNumeric"  type = text placeholder = "Enter numeric value" /></td>'
                            html += '<td><a href="" onclick="return DeleteGroundWater(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        } else {
                            html = '<tr class = "remove_tr"><td>';
                            html += '<input id="existing_other" class="OtherGroundWaterName form-control alpha" onchange="existing_validate()" value="' + data[0].objexwells[i].existing_wells_name + '" name="OtherGroundWaterName" type=text placeholder="Other input" disabled/></td>';
                            html += '<td><input id = "other2" class="OtherGroundWaterNumeric Form-control" value="' + parseFloat(data[0].objexwells[i].existing_wells_value) + '" name = "OtherGroundWaterNumeric"  type = text placeholder = "Enter numeric value" /></td>'
                            html += '<td><a href="" onclick="return DeleteGroundWater(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        }
                        total_existing += parseFloat(data[0].objexwells[i].existing_wells_value);
                        $('#trgroundwater').append(html);
                        GroundWaterCounter = i;
                    }
                    GroundWaterCounter = i + 1; 
                }
                $('#totalWells').val(total_existing);

                ///Water Efficient Section
                var total_watereff = 0;
                if (data[0].objwatereff.length != null && data[0].objwatereff.length != "" && data[0].objwatereff.length != 0) {
                    //var otherIrriName = data[0].gp["other_irrigation_name"].split(',');
                    //var otherIrrivalue = data[0].gp["other_irrigation"].split(',');
                    $('#watereffthead').empty('');
                    var html = "";
                    
                    watereffcount = data[0].objwatereff.length;
                    for (var i = 0; i < data[0].objwatereff.length; i++) {
                        if (i == 0) {
                            html = '<tr><td> ';
                            html += '<button type = "button" onclick = "validateNet()" id = "AddwatereffNet" class="add-field btn btn-success hide_btn" style="margin-left:3px">Add Net</button ></td></tr>';
                            html += '<tr class = "remove_tr"><td><input id="other" class="watereffothername form-control alpha" value="' + data[0].objwatereff[i].water_eff_practices_name + '" name="watereffothername" type=text placeholder="Other input" size="26" disabled/></td>';
                            html += '<td><span id=""><input class="watereffothernumeric form-control decimal" onkeypress="validate(event)" value="' + parseFloat(data[0].objwatereff[i].water_eff_practices_value).toFixed(2) + '"  name = "watereffothernumeric" type=text placeholder="Enter numeric value" /></span></td>';
                            html += '<td><a href="" onclick="return DeleteWaterEff(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        } else {
                            html = '<tr class = "remove_tr"><td>';
                            html += '<input id="watereff_other" class="watereffothername form-control alpha" onhange="watereff_validate()" value="' + data[0].objwatereff[i].water_eff_practices_name + '" name="watereffothername" type=text placeholder="Other input" size="26" disabled/></td>';
                            html += '<td><span id=""><input class="watereffothernumeric form-control decimal" onkeypress="validate(event)" value="' + parseFloat(data[0].objwatereff[i].water_eff_practices_value).toFixed(2) + '"  name = "watereffothernumeric" type=text placeholder="Enter numeric value" /></span></td>';
                            html += '<td><a href="" onclick="return DeleteWaterEff(this)" class="remove_field hide_btn_tr">Remove</a></td> </tr>';
                        }
                        total_watereff += parseFloat(data[0].objwatereff[i].water_eff_practices_value);

                        $('#watereffthead').append(html);
                        WaterEffCounter = i;

                    }
                    WaterEffCounter = i + 1;
                }
                $('#total_water_efficient').val(parseFloat(total_watereff).toFixed(2));
                /*$("#village_download").html("");*/
                $("#population_download").html("");
                $("#livestock_download").html("");
                /*$("#gparea_download").html("");*/
                $("#sownarea_download").html("");
                $("#irrigated_download").html("");
                $("#surface_download").html("");
                $("#ground_download").html("");
                $("#existing_download").html("");
                $("#lifting_download").html("");
                $("#efficient_download").html("");

                //livestock_download
                
                for (var i = 0; i < data[0].objupload.length; i++) {

                    //if (data[0].objupload[i].villages_file != null && data[0].objupload[i].villages_file != "") {
                    //    var tr1 = '<label><a href="' + data[0].objupload[i].villages_path + '" download="" target="_blank" >' + data[0].objupload[i].villages_file + '</a></label>';
                    //    $('#village_download').html(tr1);

                    //}
                    if (data[0].objupload[i].demographic_file != null && data[0].objupload[i].demographic_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].demographic_path + '" download="" target="_blank" >' + data[0].objupload[i].demographic_file + '</a></label> &nbsp<a type ="button" onclick="DeleteImage(\'demographic_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#population_download').html(tr1);

                    }
                    if (data[0].objupload[i].livestock_file != null && data[0].objupload[i].livestock_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].livestock_path + '" download="" target="_blank" >' + data[0].objupload[i].livestock_file + '</a></label> &nbsp<a type ="button" onclick="DeleteImage(\'livestock_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#livestock_download').html(tr1);

                    }
                    //if (data[0].objupload[i].gparea_file != null && data[0].objupload[i].gparea_file != "") {
                    //    var tr1 = '<label><a href="' + data[0].objupload[i].gparea_path + '" download="" target="_blank" >' + data[0].objupload[i].gparea_file + '</a></label>';
                    //    $('#gparea_download').html(tr1);

                    //}
                    if (data[0].objupload[i].netsown_area_file != null && data[0].objupload[i].netsown_area_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].netsown_area_path + '" download="" target="_blank" >' + data[0].objupload[i].netsown_area_file + '</a></label>&nbsp<a type ="button" onclick="DeleteImage(\'netsown_area_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#sownarea_download').html(tr1);

                    }
                    if (data[0].objupload[i].area_cultivation_file != null && data[0].objupload[i].area_cultivation_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].area_cultivation_path + '" download="" target="_blank" >' + data[0].objupload[i].area_cultivation_file + '</a></label>&nbsp<a type ="button" onclick="DeleteImage(\'area_cultivation_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#irrigated_download').html(tr1);

                    }
                    if (data[0].objupload[i].suface_water_file != null && data[0].objupload[i].suface_water_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].suface_water_path + '" download="" target="_blank" >' + data[0].objupload[i].suface_water_file + '</a></label>&nbsp<a type ="button" onclick="DeleteImage(\'suface_water_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#surface_download').html(tr1);

                    }
                    if (data[0].objupload[i].ground_water_file != null && data[0].objupload[i].ground_water_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].ground_water_path + '" download="" target="_blank" >' + data[0].objupload[i].ground_water_file + '</a></label> &nbsp<a type ="button" onclick="DeleteImage(\'ground_water_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#ground_download').html(tr1);

                    }
                    if (data[0].objupload[i].existing_wells_file != null && data[0].objupload[i].existing_wells_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].existing_wells_path + '" download="" target="_blank" >' + data[0].objupload[i].existing_wells_file + '</a></label> &nbsp<a type ="button" onclick="DeleteImage(\'existing_wells_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#existing_download').html(tr1);

                    }
                    if (data[0].objupload[i].water_lifting_file != null && data[0].objupload[i].water_lifting_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].water_lifting_path + '" download="" target="_blank" >' + data[0].objupload[i].water_lifting_file + '</a></label> &nbsp<a type ="button" onclick="DeleteImage(\'water_lifting_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#lifting_download').html(tr1);

                    }

                    if (data[0].objupload[i].water_efficient_file != null && data[0].objupload[i].water_efficient_file != "") {
                        var tr1 = '<label><a href="' + data[0].objupload[i].water_efficient_path + '" download="" target="_blank" >' + data[0].objupload[i].water_efficient_file + '</a></label> &nbsp<a type ="button" onclick="DeleteImage(\'water_efficient_file\',' + data[0].objupload[i].p_id + ')" id ="' + data[0].objupload[i].id + '" class="btn btn-danger hide_btn_tr">Delete</a>';
                        $('#efficient_download').html(tr1);

                    }
                }
                //if (StateOfficer == "District Level Nodal Officer" || StateOfficer == "State Level Nodal Officer") {
                //    $("input[type='text']").prop("disabled", true);
                //}
                
                if (data[0].objgpdata[0].approved == "true") {
                    $("#gp_status").text("Approved").css({ 'color': 'Green' });
                }
                else if (data[0].objgpdata[0].e_sent == true && data[0].objgpdata[0].reject == false && data[0].objgpdata[0].d_sent == false && data[0].objgpdata[0].s_reject == true) {
                    $("#gp_status").text("State-level nodal officer rejected it, and it is now pending rejection at the DPMU level.").css({ 'color': 'Red' });
                }
                else if (data[0].objgpdata[0].e_sent == false && data[0].objgpdata[0].reject == true) {
                    $("#gp_status").text("District-level nodal officer rejected it, and it is now pending for correction at the GP level.").css({ 'color': 'Red' });
                }
                else if (data[0].objgpdata[0].e_sent == true && data[0].objgpdata[0].reject == false && data[0].objgpdata[0].d_sent == false) {
                    $("#gp_status").text("Verification is pending with the District-level nodal officer.").css({ 'color': 'Blue' });
                }  else if (data[0].objgpdata[0].e_sent == true && data[0].objgpdata[0].reject == false && data[0].objgpdata[0].d_sent == true) {
                    $("#gp_status").text("Verification is pending with the State-level nodal officer.").css({ 'color': 'Blue' });
                } else if (data[0].approved == "true") {
                    $("#gp_status").text("Approved").css({ 'color': 'Green' });

                }

                else {
                    $("#gp_status").text("The module is ready to fill out the gathered information at GP level.").css({ 'color': 'Blue' });
                }
                
                aa_table_part_data_geting();
                
                if (data[0].objgpdata[0].approved == "true") {
                    if (StateOfficer == "State Level Nodal Officer") {
                        $('#btnFinalSave').hide();
                        $('#btn_rejectNDO').hide();
                        $("#approved").hide();
                        $("input[type='text']").prop("disabled", true);
                        $('#btn_submitNDO').hide();
                        $(".hide_btn").prop("disabled", true);
                        $(".hide_btn_tr").hide();
                        return;
                    }
                }
                if (data[0].objgpdata[0].e_sent == true && data[0].objgpdata[0].d_sent == true) {

                    $(".hide_btn").prop("disabled", true);
                    $(".hide_btn_tr").hide();
                    $("input[type='text']").prop("disabled", true);
                    if (StateOfficer == "State Level Nodal Officer") {
                        $('#btn_rejectNDO').prop("disabled", false);
                        $("#approved").show();
                        $('#btnFinalSave').hide();
                        $('#btn_submitspmu').hide();
                        $('#btn_rejectNDO').show();
                        $('#state_remarks').show();
                        $('#btn_submitNDO').hide();
                        $('.sarpanch_dlt_btn').prop("disabled", true);
                    } else if (StateOfficer == "District Level Nodal Officer") {
                        $('#btn_submitspmu').hide();
                        $('#btn_rejectNDO').hide();
                        $('#btnFinalSave').hide();
                        $('#btn_submitNDO').hide();
                        $('.sarpanch_dlt_btn').prop("disabled", true);
                        return;
                    }

                }
                else if (data[0].objgpdata[0].s_reject == true && data[0].objgpdata[0].d_sent == false) {
                    if (StateOfficer == "State Level Nodal Officer") {
                        alert("This gp not submitted the data yet");
                        $("#btnFinalSave").hide();
                        $('#btnFinalSave').hide();
                        $('#btn_rejectNDO').hide();
                        $('#btn_submitspmu').hide();
                        $('#btn_submitNDO').hide();
                        $('.sarpanch_dlt_btn').prop("disabled", true);
                        return;
                    }
                    if (StateOfficer == "District Level Nodal Officer") {
                        $('#sp_remarks').show();
                    }

                }

                if (data[0].objgpdata[0].d_sent == false) {
                    if (StateOfficer == "State Level Nodal Officer") {
                        alert("This gp not submitted the data yet");
                        $("input[type='text']").prop("disabled", true);
                        $("#btnFinalSave").hide();
                        $('#btnFinalSave').hide();
                        $('#btn_rejectNDO').hide();
                        $('#btn_submitspmu').hide();
                        $('#btn_submitNDO').hide();
                        $('.sarpanch_dlt_btn').prop("disabled", true);
                        return;
                    }
                }
                if (data[0].objgpdata[0].e_sent == true && data[0].objgpdata[0].reject == false) {
                    e_sentsts = data[0].objgpdata[0].e_sent;
                    //disable all texttbox
                    //hide save button in case of grampanchayat logged in and submit to nodal officer
                    $(".hide_btn").prop("disabled", true);
                    $(".hide_btn_tr").hide();
                    $("input[type='text']").prop("disabled", true);
                    $('.sarpanch_dlt_btn').prop("disabled", true);
                    
                    //$("#population_dropdown").prop("disabled", true);
                    //$("#livestock_dropdownd").prop("disabled", true);
                    if (StateOfficer == "District Level Nodal Officer") {
                        $('#btn_rejectNDO').prop("disabled", false);
                        $('#btn_submitNDO').hide();
                        $('#btnFinalSave').hide();
                        $('#btn_submitspmu').show();
                        $('.sarpanch_dlt_btn').prop("disabled", true);
                        $('#btn_rejectNDO').show();
                        $('#gpdata_remarks').show();
                        $("input[type='text']").prop("disabled", true);
                        $("input[type='file']").prop("disabled", true);
                        $("#population_dropdown").prop("disabled", true);
                        $("#livestock_dropdownd").prop("disabled", true);
                        $('#hide_remarks').hide();

                        //$("#btnFinalSave").prop("disabled", true);
                        //$('input[type="text"]').attr('disabled', true).eq(count++).attr('disabled', false);
                    }

                    if (StateOfficer == "Gram Panchyat Nodal Officer") {
                        $('#btn_submitNDO').hide();
                        $("#btnFinalSave").hide();
                        $('#btn_submitspmu').hide();
                        $("#sarpanch_save_btn").prop("disabled", true);
                        $(".sarpanch_dlt_btn").prop("disabled", true);
                        $('#hide_remarks').hide();
                        $("#gpdata_remarks").hide();

                    }

                } else if (data[0].objgpdata[0].e_sent == false && data[0].objgpdata[0].reject == true) {
                    if (StateOfficer == "District Level Nodal Officer") {
                        alert("This gp not submitted the data yet");
                        $("#btnFinalSave").hide();
                        $('#hide_remarks').hide();
                        $('#btn_submitNDO').hide();
                        return;
                    }
                    if (StateOfficer == "Gram Panchyat Nodal Officer") {
                        $("input[type='text']").prop("disabled", false);
                        $('#btn_submitNDO').show();
                        $('#btn_submitspmu').hide();
                        $("#btnFinalSave").show();
                        $("#gpdata_remarks").hide();
                        $('#hide_remarks').show();
                        $("#total_no_of_village").prop("disabled", true);
                        $("#VillageName").prop("disabled", true);
                    }
                } else if (data[0].objgpdata[0].e_sent != true && data[0].objgpdata[0].reject != true) {
                    if (StateOfficer == "District Level Nodal Officer") {
                        alert("This gp not submitted the data yet");
                        $("input[type='text']").prop("disabled", true);
                        $("#btnFinalSave").hide();
                        $('#btn_submitspmu').hide();
                        $('#btn_submitNDO').hide();
                        return;
                    }
                    if (StateOfficer == "Gram Panchyat Nodal Officer"); {
                        $('#btn_submitNDO').show();
                        $('#btn_submitspmu').hide();

                    }
                    
                }
                if (StateOfficer == "National Level Nodal Officer" || StateOfficer == "Admin" || StateOfficer == "Block Level Nodal Officer") {
                    $('#btn_submitNDO').hide();
                    $('#btn_submitspmu').hide();
                    $('#btnFinalSave').hide();
                    $(".hide_btn_tr").hide();
                }
                
            }
        }
    });
}



// base lin gp data Saveing

function baseline_gp_data_saveing() {

    //var LiveStockName = [];
    //var LiveStockNumeric = [];
    //$($('.Livestocktable')).each(function () {// id of ul
    //    

    //    var td = $(this).find('tr')
    //    td.each(function () {
    //        var aa = $(this).find('select[name="livestockpopulation"]').val();
    //        LiveStockName.push(aa);
    //        if (aa == 'ot') {
    //            var bb = $(this).find('input[name="livestockpopulation"]').val();
    //            LiveStockName.push(bb);
    //        }
    //        var aa1 = $(this).find('input[name=livestocknumericvalue]').val();
    //        if (aa1 = undefined) {
    //            LiveStockNumeric.push(aa1);
    //        }
    //    })
    //})



    var sc = $("#no_of_sc").val();
    var st = $("#no_of_st").val();
    var obc = $("#no_of_obc").val();
    var general = $("#no_of_general").val();
    if (sc == "") {
        sc = 0;
    } else if (st == "") {
        st = 0;
    } else if (obc == "") {
        obc = 0;
    } else if (general == "") {
        general = 0;
    }

    var total_cat = parseFloat(sc) + parseFloat(st) + parseFloat(obc) + parseFloat(general);

    var year = $("#year").val();
    var source_year = $("#source_year").val();
    var source_year_liv = $('#source_year_liv').val();
    var tol_population = $("#tol_population").val();
    var total_caste = $("#totalCaste").val();
    var month = $('#month').val();
    var xx = 0;

    if (source_year != source_year_liv) {
        alert('Population year and Livestock Population year should be same')
        $("#source_year").focus();
        xx = 1;
        return;
    }
    if (State == "0") {
        xx = 1;
        alert("Please Select State");
        $('#spnstate').focus();
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
        $('#dist11').focus();
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
        $('#block1').focus();
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
        $('#gram').focus();
    } else if (year == "0") {
        xx = 1;
        alert("Please Select Year")
        $("#year").focus();
    }
    //else if (month == "0") {
    //    xx = 1;
    //    alert("Please Select Month")
    //    $("#month").focus();
    //}
    else if (source_year == "0" || source_year == "") {
        xx = 1;
        alert('Please Select Source Year for Population');
        $("#source_year").focus();
    }
    else if (total_cat < tol_population || total_cat != tol_population) {
        xx = 1;
        alert('The total of the filled values in the categories section should equal the total population.');
        $('#no_of_sc').focus();
    } else if (source_year_liv == "0" || source_year_liv == "") {
        xx = 1;
        alert('Please Select Source Year for Livestock');
        $("#source_year_liv").focus();
    }


    var VillageNameController = document.getElementsByName("VillageName");
    if (VillageNameController.length == 0) {
        alert('Please add village name');
        return;
    }
    var village_name = [];
    for (var i = 0; i < VillageNameController.length; i++) {
        var n = VillageNameController[i].value;
        if (n != "") {
            village_name.push(n);
        }
        else {
            alert("Please Fill the Data in Village Section");
            $('.VillageName').focus();
            xx = 1;
            return false;
        }

    }

    var total_no_of_village = $("#total_no_of_village").val();
    if (village_name.length >= 1) {
        if (total_no_of_village == "") {
            alert("Please Fill the Total Number of Villages");
            xx = 1;
            return false;
        }
    }

    var LiveStocknumericControl = document.getElementsByName("livestocknumericvalue");
    var LiveStockNumeric = [];
    for (var i = 0; i < LiveStocknumericControl.length; i++) {
        var n = LiveStocknumericControl[i].value;
        if (n != "") {
            LiveStockNumeric.push(n);
        }
        else {
            alert("Check: Fill the value in the added row under section 2.5 Livestock Population or remove it.");
            $('.livestockOtherName').focus();
            xx = 1;
            return false;
        }
    }


    var LiveStocknameControl = document.getElementsByName("livestockpopulation");
    var LiveStockName = [];
    var i = 0;
    for (var i = 0; i < LiveStocknameControl.length; i++) {
        var k = LiveStocknameControl[i].value;
        if (k != "") {
            LiveStockName.push(k);
        }
    }
    // Code For Remove "ot"
    var valuels = "ot"
    LiveStockName = LiveStockName.filter(item => item !== valuels)

    // Validation for Dowpdown not empty
    var lsname = LiveStockName.length;
    var lsnumber = LiveStockNumeric.length;


    if (lsname != lsnumber) {
        alert("Check: Fill the value in the added row under section 2.5 Livestock Population or remove it.");
        $('.livestockOtherName').focus();
        xx = 1;
        return false;
    }



    //Irrigation Surface Water section
    var IrrSurOtherName = document.getElementsByName("IrrSurOtherName");
    var IrrSurOtherNames = [];
    for (var i = 0; i < IrrSurOtherName.length; i++) {
        var k = IrrSurOtherName[i].value;
        if (k != "") {
            var n = IrrSurOtherName[i].value;
            IrrSurOtherNames.push(k);
        }
    }
    var valuesr = "ot"
    IrrSurOtherNames = IrrSurOtherNames.filter(item => item !== valuesr)


    var IrrSurOtherNumeric = document.getElementsByName("IrrSurOtherNumeric");
    var IrrSurOtherNumerics = [];
    for (var i = 0; i < IrrSurOtherNumeric.length; i++) {
        var n = IrrSurOtherNumeric[i].value;
        if (n != "") {
            IrrSurOtherNumerics.push(n);
        } else {
            alert("Check: Fill the value in the added row under section 7.2 Area Irrigated by Surface Water or remove it.");
            $('.IrrSurOtherName').focus();
            return false;
            xx = 1;
        }
    }

    // Validation for Dowpdown not empty
    var srname = IrrSurOtherNames.length;
    var srnumber = IrrSurOtherNumerics.length;


    if (srname != srnumber) {
        alert("Check: Fill the value in the added row under section 7.2 Area Irrigated by Surface Water or remove it.");
        $('.IrrSurOtherName').focus();
        xx = 1;
        return false;
    }

    //Irrigation Ground Water section

    var IrrGroundWaterName = document.getElementsByName("IrrGroundWaterName");
    var IrrGroundWaterNames = [];

    for (var i = 0; i < IrrGroundWaterName.length; i++) {
        var k = IrrGroundWaterName[i].value;
        if (k != "") {
            var n = IrrGroundWaterName[i].value;
            IrrGroundWaterNames.push(k);
        }
    }
    var valuegr = "ot"
    IrrGroundWaterNames = IrrGroundWaterNames.filter(item => item !== valuegr)


    var IrrGroundWaterNumeric = document.getElementsByName("IrrGroundWaterNumeric");
    var IrrGroundWaterNumerics = [];
    for (var i = 0; i < IrrGroundWaterNumeric.length; i++) {
        var n = IrrGroundWaterNumeric[i].value;
        if (n != "") {

            IrrGroundWaterNumerics.push(n);
        } else {
            alert("Check: Fill the value in the added row under section 7.1 Area Irrigated by Ground Water or remove it.");
            $('.IrrGroundWaterName').focus();
            xx = 1;
            return false;
        }
    }
    // Validation for Drowpdown not empty
    var grname = IrrGroundWaterNames.length;
    var grnumber = IrrGroundWaterNumerics.length;


    if (grname != grnumber) {
        alert("Check: Fill the value in the added row under section 7.1 Area Irrigated by Ground Water or remove it.");
        $('.IrrGroundWaterName').focus();
        xx = 1;
        return false;
    }

    //// Ground Water Section
    var groundwaterothername = document.getElementsByName("OtherGroundWaterName");
    var groundwaterothernames = [];

    for (var i = 0; i < groundwaterothername.length; i++) {
        var k = groundwaterothername[i].value;
        if (k != "") {
            var n = groundwaterothername[i].value;
            groundwaterothernames.push(k);
        }
    }
    var valuegro = "ot"
    groundwaterothernames = groundwaterothernames.filter(item => item !== valuegro)


    var othergroundwaternumeric = document.getElementsByName("OtherGroundWaterNumeric");
    var othergroundwaternumerics = [];
    for (var i = 0; i < othergroundwaternumeric.length; i++) {
        var n = othergroundwaternumeric[i].value;
        if (n != "") {
            othergroundwaternumerics.push(n);
        } else {
            alert("Check: Fill the value in the added row under section 8.1 Existing Wells or remove it.");
            $('.OtherGroundWaterName').focus();
            xx = 1;
            return false;
        }
    }


    // Validation for Drowpdown not empty
    var exname = groundwaterothernames.length;
    var exnumber = othergroundwaternumeric.length;


    if (exname != exnumber) {
        alert("Check: Fill the value in the added row under section 8.1 Existing Wells or remove it.");
        $('.OtherGroundWaterName').focus();
        xx = 1;
        return false;
    }


    /////Water Efficient section
    var watereffothername = document.getElementsByName("watereffothername");
    var watereffothernames = [];

    for (var i = 0; i < watereffothername.length; i++) {
        var k = watereffothername[i].value;
        if (k != "") {
            var k = watereffothername[i].value;
            watereffothernames.push(k);
        }
    }
    var valueeff = "ot"
    watereffothernames = watereffothernames.filter(item => item !== valueeff)


    var watereffothernumeric = document.getElementsByName("watereffothernumeric");
    var watereffothernumerics = [];
    for (var i = 0; i < watereffothernumeric.length; i++) {
        var n = watereffothernumeric[i].value;
        if (n != "") {
            watereffothernumerics.push(n);
        } else {
            alert("Check: Fill the value in the added row under section 9 Water Efficient Practices(existing) or remove it.");
            $('.watereffothername').focus();
            xx = 1;
            return false;
        }
    }


    // Validation for Drowpdown not empty
    var efname = watereffothernames.length;
    var efnumber = watereffothernumerics.length;


    if (efname != efnumber) {
        alert("Check: Fill the value in the added row under section 9 Water Efficient Practices(existing) or remove it.");
        $('.watereffothername').focus();
        xx = 1;
        return false;
    }


    if (xx == 0) {
        var j = 0;
        var total_no_of_village = $("#total_no_of_village").val();

        var male_population = $("#male_population").val();
        if (male_population == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#male_population").focus();
            j = 1;
            return
        }
        var female_population = $("#female_population").val();
        if (female_population == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#female_population").focus();
            j = 1;
            return
        }
        var transgender_population = $("#transgender_population").val();
        if (transgender_population == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#transgender_population").focus();
            j = 1;
            return
        }
        var tol_population = $("#tol_population").val();
        if (tol_population == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#tol_population").focus();
            j = 1;
            return
        }

        var no_of_sc = $("#no_of_sc").val();
        if (no_of_sc == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#no_of_sc").focus();
            j = 1;
            return
        }
        var no_of_st = $("#no_of_st").val();
        if (no_of_st == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#no_of_st").focus();
            j = 1;
            return
        }
        var no_of_obc = $("#no_of_obc").val();
        if (no_of_obc == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#no_of_obc").focus();
            j = 1;
            return
        }
        var no_of_general = $("#no_of_general").val();
        if (no_of_general == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#no_of_general").focus();
            j = 1;
            return
        }

        var no_of_bpl = $("#no_of_bpl").val();
        if (no_of_bpl == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#no_of_bpl").focus();
            j = 1;
            return
        }

        var no_of_households = $("#no_of_households").val();
        if (no_of_households == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#no_of_households").focus();
            j = 1;
            return
        }



        var gp_area_in_ha = $("#gp_area_in_ha").val();
        if (gp_area_in_ha == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#gp_area_in_ha").focus();
            j = 1;
            return
        }
        var forest_area_in_ha = $("#forest_area_in_ha").val();
        if (forest_area_in_ha == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#forest_area_in_ha").focus();
            j = 1;
            return
        }
        var fallow_land_in_ha = $("#fallow_land_in_ha").val();
        if (fallow_land_in_ha == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#fallow_land_in_ha").focus();
            j = 1;
            return
        }
        var cultivable_land_in_ha = $("#cultivable_land_in_ha").val();
        if (cultivable_land_in_ha == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#cultivable_land_in_ha").focus();
            j = 1;
            return
        }
        var other_land_use = $("#other_land_use").val();
        if (other_land_use == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#other_land_use").focus();
            j = 1;
            return
        }
        var net_sown_area = $("#net_sown_area").val();
        var net_irrigated_area = $("#net_irrigated_area").val();
        if (net_sown_area == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#net_sown_area").focus();
            j = 1;
            return
        }
        if (net_irrigated_area == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#net_irrigated_area").focus();
            j = 1;
            return
        }

        var irrigated_area_in_kharif = $("#irrigated_area_in_kharif").val();
        if (irrigated_area_in_kharif == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#irrigated_area_in_kharif").focus();
            j = 1;
            return
        }
        var irrigated_area_in_rabi = $("#irrigated_area_in_rabi").val();
        if (irrigated_area_in_rabi == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#irrigated_area_in_rabi").focus();
            j = 1;
            return
        }
        var irrigated_area_in_summer = $("#irrigated_area_in_summer").val();
        if (irrigated_area_in_summer == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#irrigated_area_in_summer").focus();
            j = 1;
            return
        }
        var total_irrigated_area = $("#total_irrigated_area").val();
        if (total_irrigated_area == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#total_irrigated_area").focus();
            j = 1;
            return
        }
        //var net_irrigated_area = $("#net_irrigated_area").val();

        var un_irrigated_area_in_kharif = $("#un_irrigated_area_in_kharif").val();
        if (un_irrigated_area_in_kharif == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#un_irrigated_area_in_kharif").focus();
            j = 1;
            return
        }
        var un_irrigated_area_in_rabi = $("#un_irrigated_area_in_rabi").val();
        if (un_irrigated_area_in_rabi == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#un_irrigated_area_in_rabi").focus();
            j = 1;
            return
        }
        var un_irrigated_area_in_summer = $("#un_irrigated_area_in_summer").val();
        if (un_irrigated_area_in_summer == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#un_irrigated_area_in_summer").focus();
            j = 1;
            return
        }
        var total_un_irrigated_area = $("#total_un_irrigated_area").val();
        if (total_un_irrigated_area == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#total_un_irrigated_area").focus();
            j = 1;
            return
        }

        var total_cropped_area = $("#total_cropped_area").val();
        if (total_cropped_area == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#total_cropped_area").focus();
            j = 1;
            return
        }
        //var other_well_existing = $("#other_well_existing").val();
        var non_energised = $("#non_energised").val();
        if (non_energised == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#non_energised").focus();
            j = 1;
            return
        }
        var diesel_pumps = $("#diesel_pumps").val();
        if (diesel_pumps == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#diesel_pumps").focus();
            j = 1;
            return
        }
        var centrifugal_pumps = $("#centrifugal_pumps").val();
        if (centrifugal_pumps == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#centrifugal_pumps").focus();
            j = 1;
            return
        }
        var submersible_pumps = $("#submersible_pumps").val();
        if (submersible_pumps == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#submersible_pumps").focus();
            j = 1;
            return
        }
        var solar_pumps = $("#solar_pumps").val();
        if (solar_pumps == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $("#solar_pumps").focus();
            j = 1;
            return
        }
        var total_water_lifting_devices = $('#total_water_lifting_devices').val();
        if (total_water_lifting_devices == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $('#total_water_lifting_devices').focus();
            j = 1;
            return
        }
        var total_electric_pumps = $('#total_electric_pumps').val();
        if (total_electric_pumps == "") {
            alert("Please don't leave any information blank. It should be filled with the correct numerical value. That may be 0 (zero).");
            $('#total_electric_pumps').focus();
            j = 1;
            return
        }
        var total_water_efficient = $("#total_water_efficient").val();
        //var other_irrigation = $("#watereffothernumeric").val();
        if (parseFloat(total_water_efficient) > parseFloat(cultivable_land_in_ha)) {
            alert("Total Water Efficient Practices (Existing) should be less than or equal to Cultivable Land (Excluding Fallow Land)");
            j = 1;
            return
            $("#total_water_efficient").focus();
        }

        if (j == 0) {
            ddd = 0;
            var obj = {};

            if (StateOfficer == "State Level Nodal Officer") {
                obj.approved = "true";
            } else {
                obj.approved = "false";
            }
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;
            obj.year = year;
            obj.month = month;

            obj.total_no_of_village = total_no_of_village;
            obj.village_name = village_name;
            obj.male_population = male_population;
            obj.female_population = female_population;
            obj.transgender_population = transgender_population;

            obj.tol_population = tol_population;

            obj.source_year = source_year;
            obj.source_year_liv = source_year_liv;
            obj.no_of_bpl = no_of_bpl;

            obj.no_of_sc = no_of_sc;
            obj.no_of_st = no_of_st;
            obj.no_of_obc = no_of_obc;
            obj.no_of_general = no_of_general;

            obj.no_of_households = no_of_households;


            obj.gp_area_in_ha = gp_area_in_ha;
            obj.forest_area_in_ha = forest_area_in_ha;
            obj.fallow_land_in_ha = fallow_land_in_ha;
            obj.cultivable_land_in_ha = cultivable_land_in_ha;
            obj.other_land_use = other_land_use;
            obj.net_sown_area = net_sown_area;
            obj.net_irrigated_area = net_irrigated_area;

            obj.irrigated_area_in_kharif = irrigated_area_in_kharif;
            obj.irrigated_area_in_rabi = irrigated_area_in_rabi;
            obj.irrigated_area_in_summer = irrigated_area_in_summer;
            obj.total_irrigated_area = total_irrigated_area;
            //obj.net_irrigated_area = net_irrigated_area;

            obj.un_irrigated_area_in_kharif = un_irrigated_area_in_kharif;
            obj.un_irrigated_area_in_rabi = un_irrigated_area_in_rabi;
            obj.un_irrigated_area_in_summer = un_irrigated_area_in_summer;
            obj.total_un_irrigated_area = total_un_irrigated_area;

            obj.total_cropped_area = total_cropped_area;

            obj.non_energised = non_energised;
            obj.diesel_pumps = diesel_pumps;
            obj.centrifugal_pumps = centrifugal_pumps;
            obj.submersible_pumps = submersible_pumps;
            obj.solar_pumps = solar_pumps;
            obj.total_water_lifting_devices = total_water_lifting_devices;
            obj.total_electric_pumps = total_electric_pumps;

            obj.livestock_name = LiveStockName;
            obj.livestock_value = LiveStockNumeric;
            obj.surface_water_name = IrrSurOtherNames;
            obj.surface_water_value = IrrSurOtherNumerics;
            obj.ground_water_name = IrrGroundWaterNames;
            obj.ground_water_value = IrrGroundWaterNumerics;
            obj.existing_wells_name = groundwaterothernames;
            obj.existing_wells_value = othergroundwaternumerics;
            obj.water_eff_practices_name = watereffothernames;
            obj.water_eff_practices_value = watereffothernumerics;

            //Created to set first table id value to paas in second ajax
            var GlobalParentId = '';


            
            $('.loader').show();
            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/baselinedata_saveing",
                data: JSON.stringify(obj),
                dataType: 'JSON',
                success: function (response) {
                    const ResponseMsg = response.split(',');


                    if (ResponseMsg[1] != "Successfully Saved" && ResponseMsg[1] != "Negitive value is not allowed" && ResponseMsg[1] != "Characters are not allowed") {
                        window.location = "/Error/DefaultError";
                    }

                    saveImage(ResponseMsg[0]);
                    document.getElementById('alertrtdatacolection1').innerHTML = ResponseMsg[1];
                    $('#alertrtdatacolection1').css('display', 'block');
                    $('#alertrtdatacolection1').fadeIn(5000, function () {

                    });
                    $('#alertrtdatacolection1').fadeOut(5000, function () {

                    });
                    if (StateOfficer == "State Level Nodal Officer") {
                        $('#btn_rejectNDO').hide();
                        $('#btnFinalSave').hide();
                    }
                    /*alert("Successfully Saved Base Line GP Data");*/
                    
                    
                    baseline_gp_data(total_no_of_village);





                }
            });







        }
    }
}
function saveImage(ParentId) {
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/GPlevel/Saveimage',
        data: function () {
            
            var data = new FormData();
            data.append("id", ParentId);
            /*data.append("txtimage", jQuery("#txtimage").get(0).files[0]);*/
            data.append("txtimage1", jQuery("#txtimage1").get(0).files[0]);
            data.append("txtimage2", jQuery("#txtimage2").get(0).files[0]);
            /*data.append("txtimage3", jQuery("#txtimage3").get(0).files[0]);*/
            data.append("txtimage4", jQuery("#txtimage4").get(0).files[0]);
            data.append("txtimage5", jQuery("#txtimage5").get(0).files[0]);
            data.append("txtimage6", jQuery("#txtimage6").get(0).files[0]);
            data.append("txtimage7", jQuery("#txtimage7").get(0).files[0]);
            data.append("txtimage8", jQuery("#txtimage8").get(0).files[0]);
            data.append("txtimage9", jQuery("#txtimage9").get(0).files[0]);
            data.append("txtimage10", jQuery("#txtimage10").get(0).files[0]);
            return data;
        }(),
        contentType: false,
        processData: false,
        success: function (response) {
            swal("", "Successfully Saved", "success", {
                button: "OK",
            });
            $('.loader').hide();
        },

    });
}

// base line b part table script

var a = 1;
var aaa = 1;
var ab = 1;
var abc = 1;
var abcd = 1;
var abcdg = 1;
var abcdgi = 1;
var abcdgij = 1;
var abcdgija = 1;
//function addrow_a_part() {

//    var count = 1;
//    if (aaa == 1) {
//        aaa = 0;
//        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='aa_table_part_data_saveing()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancela_1();'>Cancel</button></td>" +
//            "<td></td>" +
//            "<td><Select id='name' class='form-control'><option value='0'>Select Designation</option><option value='Sarpanch'>Sarpanch</option><option value='Deputy Sarpanch'>Deputy Sarpanch</option><option value='Panchayat Secretary'>Panchayat Secretary</option></select></td>" +
//            "<td><input type='text' class='form-control alpha' id='sarpanch_name'/></td>" +
//            "<td><Select id='gender' class='form-control'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Others'>Others</option></select></td>" +
//            "<td><input type='text' class='form-control integer' maxlength='10' id='sarpanch_contact_details'/></td>" +

//            "<td><input type='text' class='form-control alpha' id='panchayat_secretary_name'/></td>" +

//            "<td> <input type='text' class='form-control integer' maxlength='10' id='contact_details'/></td></tr>";

//          $('table#TblData_abc_part1 tbody').prepend(code);
//    }
//count=count+1;
//alert(count);
//}

function addrow_b_part() {

    var count = 1;
    if (a == 1) {
        a = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='b_part_data_saveing()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelone();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='habitation_village'/></td>" +
            "<td><input type='text' class='form-control' id='irri_water_req_monsoon'/></td> <td> <input type='text' class='form-control' id='irri_water_req_nonmonsoon'/></td> <td><input type='text' class='form-control' id='drinking_water_req_human'/></td>" +
            "<td><input type='text' class='form-control' id='drinking_water_req_livestock'/></td>" +

            "<td> <input type='text' class='form-control' id='drinking_water_req_total'/></td><td> <input type='text' class='form-control' id='water_avail_drinking'/><td> <input type='text' class='form-control' id='water_avail_irrigation'/></td> <td> <input type='text' class='form-control' id='percapita_water_avail_people'/></td></tr>";

        $('table#TblData_b_part tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function addrow_c_part() {

    var count = 1;
    if (ab == 1) {
        ab = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='c_table_part_data_saveing()'>Save</button > <button type='button' class='btn btn-danger' onclick='canceltwo();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='latitude' /></td>" +
            "<td><input type='text' class='form-control' id='longitude' /></td>" +
            "<td><input type='text' class='form-control' id='habitation_village' /></td>" +
            "<td><input type='text' class='form-control' id='typeofwell' /></td>" +
            "<td><input type='text' class='form-control' id='borewell_depth' /></td> <td> <input type='text' class='form-control' id='casing_depth' /></td> <td><input type='text' class='form-control' id='depth_of_pump_install' /></td>" +
            "<td><input type='text' class='form-control' id='pump_capacity_hp' /></td>" +

            "<td><input type='text' class='form-control' id='pump_capacity_stages' /></td>" +
            "<td><input type='text' class='form-control' id='yield' /></td>" +
            "<td><input type='text' class='form-control' id='water_supply_3hrs' /></td>" +
            "<td><input type='text' class='form-control' id='water_supply_6hrs' /></td>" +
            "<td><Select id='founctional_water' class='form-control'><option value='Yes'>Yes</option><option value='NO'>NO</option></select></td></tr>";
        $('table#TblData_c_part tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function addrow_d_part() {

    var count = 1;
    if (abc == 1) {
        abc = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='dd_table_part_data_saveing()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelthree();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='block_district_village_name' /></td>" +
            "<td><input type='text' class='form-control' id='latitude' /></td> " +
            "<td><input type='text' class='form-control' id='logitude' /></td>" +

            "<td><input type='text' class='form-control' id='well_depth' /></td>" +
            "<td><input type='text' class='form-control' id='reduced_level' /></td>" +
            "<td><input type='text' class='form-control' id='height_mp' /></td>" +
            "<td><input type='text' class='form-control' id='aquifer' /></td>" +
            "<td><input type='text' class='form-control' id='depth_waterlevel_bgl' /></td></tr>";
        $('table#TblData_d_part tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function addrow_e_part() {

    var count = 1;
    if (abcd == 1) {
        abcd = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='ee_table_part_data_saveing()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelfour();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='block_district_village_name' /></td>" +
            "<td><input type='text' class='form-control' id='latitude' /></td> " +
            "<td><input type='text' class='form-control' id='logitude' /></td>" +

            "<td><input type='text' class='form-control' id='well_depth' /></td>" +
            "<td><input type='text' class='form-control' id='aquifer' /></td>" +
            "<td><input type='text' class='form-control' id='wq_cations' /></td>" +
            "<td><input type='text' class='form-control' id='wq_anions' /></td>" +
            "<td><input type='text' class='form-control' id='wq_key_pollution' /></td></tr>";
        $('table#TblData_e_part tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function addrow_g_part() {

    var count = 1;
    if (abcdg == 1) {
        abcdg = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='gg_table_part_data_saveing()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelfive();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='scheme_name' /></td>" +
            "<td><input type='text' class='form-control' id='activities_undertaken' /></td> " +
            "<td><input type='text' class='form-control' id='area_covered_numbers' /></td> " +
            "<td><input type='text' class='form-control' id='numbers_of_members' /></td></tr>";
        $('table#TblData_g_part tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function addrow_j_part() {

    var count = 1;
    if (abcdgij == 1) {
        abcdgij = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='jj_table_part_data_saveing()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelsix();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='name_of_gp' /></td>" +
            "<td><input type='text' class='form-control' id='name_of_water_body' /></td> " +
            "<td><input type='text' class='form-control' id='name_of_count' /></td> " +

            "<td><input type='text' class='form-control' id='storage_capacity_ham' /></td></tr>";
        $('table#TblData_jj_part1 tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function addrow_contcat_part() {

    var count = 1;
    if (abcdgija == 1) {
        abcdgija = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='Save_social_org_gp_contactdetails()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelcontact();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='social_org_gp_contactdetails_name' /></td>" +
            "<td><input type='text' class='form-control' id='social_org_gp_contactdetails_mobilenumber' /></td> " +
            "<td><input type='text' class='form-control' id='social_org_gp_noofworkers_count' /></td> " +

            "<td><input type='file' class='' id='social_org_gp_noofworkers_Image' /></td ></tr>";
        $('table#TblData_contact_part1 tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}

function cancelone() {

    // addrow();
    $('table#TblData_b_part tbody tr#c1_count').remove();
    a = 1;
}
function canceltwo() {
    // addrow();
    $('table#TblData_c_part tbody tr#c1_count').remove();
    ab = 1;

}
function cancelthree() {
    // addrow();
    $('table#TblData_d_part tbody tr#c1_count').remove();
    abc = 1;

}
function cancelfour() {
    // addrow();
    $('table#TblData_e_part tbody tr#c1_count').remove();
    abcd = 1;

}
function cancelfive() {
    // addrow();
    $('table#TblData_g_part tbody tr#c1_count').remove();
    abcdg = 1;

}
function cancela_1() {
    // addrow();
    $('table#TblData_abc_part1 tbody tr#c1_count').remove();
    aaa = 1;

}
function cancelsix() {
    // addrow();
    $('table#TblData_jj_part1 tbody tr#c1_count').remove();
    abcdgij = 1;

}
function cancelcontact() {
    // addrow();
    $('table#TblData_contact_part1 tbody tr#c1_count').remove();
    abcdgija = 1;

}

// b table add and delete  script

function b_part_data_saveing() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var i = 0;
        var habitation_village = $("#habitation_village").val();
        var irri_water_req_monsoon = $("#irri_water_req_monsoon").val();
        var irri_water_req_nonmonsoon = $("#irri_water_req_nonmonsoon").val();
        var drinking_water_req_human = $("#drinking_water_req_human").val();
        var drinking_water_req_livestock = $("#drinking_water_req_livestock").val();
        var drinking_water_req_total = $("#drinking_water_req_total").val();
        var water_avail_drinking = $("#water_avail_drinking").val();
        var water_avail_irrigation = $("#water_avail_irrigation").val();
        var percapita_water_avail_people = $("#percapita_water_avail_people").val();

        if (i == 0) {
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;

            obj.habitation_village = habitation_village;
            obj.irri_water_req_monsoon = irri_water_req_monsoon;
            obj.irri_water_req_nonmonsoon = irri_water_req_nonmonsoon;
            obj.drinking_water_req_human = drinking_water_req_human;
            obj.drinking_water_req_livestock = drinking_water_req_livestock;
            obj.drinking_water_req_total = drinking_water_req_total;
            obj.water_avail_drinking = water_avail_drinking;
            obj.water_avail_irrigation = water_avail_irrigation;
            obj.percapita_water_avail_people = percapita_water_avail_people;

            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/b_chart_data_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != "Successfully Saved" && response != "Logout") {
                        window.location = "/Error/DefaultError";
                    }
                    else {
                        alert(response);
                        aaa = 1;

                        cancelone();
                        bpart_data_geting();
                        a = 1;

                        alert("Saved Successfully");
                        document.getElementById('alertrt_b_part_data').innerHTML = response;
                        $('#alertrt_b_part_data').css('display', 'block');
                        $('#alertrt_b_part_data').fadeIn(5000, function () {

                        });
                        $('#alertrt_b_part_data').fadeOut(5000, function () {

                        });
                    }

                }
            });
        }

        else {

            a = 1;
            cancelone();
            bpart_data_geting();
        }
    }


}

function bpart_data_geting() {

    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/b_table_data_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {



                    a += 1
                    tr += '<tr><td><button type="button" class="btn btn-danger" onclick="Delete_b_table_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].habitation_village + '</td><td>' + data[i].irri_water_req_monsoon + '</td><td> ' + data[i].irri_water_req_nonmonsoon + '</td><td> ' + data[i].drinking_water_req_human + '</td><td> ' + data[i].drinking_water_req_livestock + '</td><td> ' + data[i].drinking_water_req_total + '</td><td> ' + data[i].water_avail_drinking + '</td><td> ' + data[i].water_avail_irrigation + '</td><td> ' + data[i].percapita_water_avail_people + '</td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="13"  style="text-align:center;">No Data</td></tr>';
            }
            if (tr == "") {
                tr += '<tr><td colspan="13" style="text-align:center;">No Data</td></tr>';
            }

            $("#tbl_b_part").html(tr);

        }
    });

}

function Delete_b_table_data(id) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};

        obj.id = id;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/GPlevel/b_table_data_delete",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {

                aaa = 1;
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != "Deleted Successfully" && response != "No Data" && response != "Logout") {
                    window.location = "/Error/DefaultError";
                }
                else {
                    alert(response);
                    bpart_data_geting();
                    alert("Delete Successfully");
                    document.getElementById('alertrt_b_part_data').innerHTML = response;
                    $('#alertrt_b_part_data').css('display', 'block');
                    $('#alertrt_b_part_data').fadeIn(5000, function () {

                    });
                    $('#alertrt_b_part_data').fadeOut(5000, function () {

                    });

                }
            }
        });
    }

}

//  c table part  add and delete script
function c_table_part_data_saveing() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var i = 0;
        var latitude = $("#latitude").val();
        var longitude = $("#longitude").val();
        var founctional_water = $("#founctional_water").val();
        var habitation_village = $("#habitation_village").val();
        var typeofwell = $("#typeofwell").val();
        var borewell_depth = $("#borewell_depth ").val();
        var casing_depth = $("#casing_depth ").val();
        var depth_of_pump_install = $("#depth_of_pump_install ").val();
        var pump_capacity_hp = $("#pump_capacity_hp ").val();
        var pump_capacity_stages = $("#pump_capacity_stages ").val();
        var yield = $("#yield ").val();
        var water_supply_3hrs = $("#water_supply_3hrs ").val();
        var water_supply_6hrs = $("#water_supply_6hrs ").val();

        if (i == 0) {
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;

            obj.latitude = latitude;
            obj.longitude = longitude;
            obj.founctional_water = founctional_water;
            obj.habitation_village = habitation_village;
            obj.typeofwell = typeofwell;
            obj.borewell_depth = borewell_depth;
            obj.casing_depth = casing_depth;
            obj.depth_of_pump_install = depth_of_pump_install;
            obj.pump_capacity_hp = pump_capacity_hp;
            obj.pump_capacity_stages = pump_capacity_stages;

            obj.yield = yield;
            obj.water_supply_3hrs = water_supply_3hrs;
            obj.water_supply_6hrs = water_supply_6hrs;

            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/c_chart_data_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != "Successfully Saved" && response != "Logout" && response != "Error") {
                        window.location = "/Error/DefaultError";
                    }
                    else {
                        alert(response);
                        aaa = 1;

                        cancelone();
                        C_table_part_data_geting();
                        ab = 1;

                        alert("Saved Successfully")
                        document.getElementById('alertrt_c_part_data').innerHTML = response;
                        $('#alertrt_c_part_data').css('display', 'block');
                        $('#alertrt_c_part_data').fadeIn(5000, function () {

                        });
                        $('#alertrt_c_part_data').fadeOut(5000, function () {

                        });
                    }

                }
            });
        }
        else {

            ab = 1;
            canceltwo();
            C_table_part_data_geting();
        }
    }

}
function C_table_part_data_geting() {

    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/c_table_data_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {

                    var latitude = data[i].latitude;
                    var longitude = data[i].longitude
                    var habitation_village = data[i].habitation_village;
                    var typeofwell = data[i].typeofwell;
                    var borewell_depth = data[i].borewell_depth;
                    var casing_depth = data[i].casing_depth;
                    var depth_of_pump_install = data[i].depth_of_pump_install;
                    var pump_capacity_hp = data[i].pump_capacity_hp;
                    var pump_capacity_stages = data[i].pump_capacity_stages;
                    var yield = data[i].yield;
                    var water_supply_3hrs = data[i].water_supply_3hrs;
                    var water_supply_6hrs = data[i].water_supply_6hrs;
                    var founctional_water = data[i].founctional_water;

                    if (latitude != null && latitude != "") {
                    } else {
                        latitude = "";
                    }

                    if (habitation_village != null && habitation_village != "") {
                    } else {
                        habitation_village = "";
                    }

                    if (longitude != null && longitude != "") {
                    } else {
                        longitude = "";
                    }



                    if (typeofwell != null && typeofwell != "") {
                    } else {
                        typeofwell = "";
                    }

                    if (borewell_depth != null && borewell_depth != "") {
                    } else {
                        borewell_depth = "";
                    }




                    if (depth_of_pump_install != null && depth_of_pump_install != "") {
                    } else {
                        depth_of_pump_install = "";
                    }

                    if (casing_depth != null && casing_depth != "") {
                    } else {
                        casing_depth = "";
                    }

                    if (pump_capacity_stages != null && pump_capacity_stages != "") {
                    } else {
                        pump_capacity_stages = "";
                    }
                    if (pump_capacity_hp != null && pump_capacity_hp != "") {
                    } else {
                        pump_capacity_hp = "";
                    }



                    if (yield != null && yield != "") {
                    } else {
                        yield = "";
                    }
                    if (water_supply_3hrs != null && water_supply_3hrs != "") {
                    } else {
                        water_supply_3hrs = "";
                    }



                    if (water_supply_6hrs != null && water_supply_6hrs != "") {
                    } else {
                        water_supply_6hrs = "";
                    }
                    if (founctional_water != null && founctional_water != "") {
                    } else {
                        founctional_water = "";
                    }


                    a += 1
                    tr += '<tr><td><button type="button" class="btn btn-danger" onclick="Delete_c__table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + habitation_village + '</td><td>' + typeofwell + '</td><td>' + borewell_depth + '</td><td> ' + casing_depth + '</td><td> ' + depth_of_pump_install + '</td><td> ' + pump_capacity_hp + '</td><td> ' + pump_capacity_stages + '</td><td> ' + yield + '</td><td> ' + water_supply_3hrs + '</td><td> ' + water_supply_6hrs + '</td><td> ' + founctional_water + '</td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="13"  style="text-align:center;">No Data</td></tr>';
            }
            if (tr == "") {
                tr += '<tr><td colspan="13" style="text-align:center;">No Data</td></tr>';
            }

            $("#tbl_c_part").html(tr);

        }
    });

}

function Delete_c__table_part_data(id) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};

        obj.id = id;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/GPlevel/c_table_data_delete",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                // alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != "Deleted Successfully" && response != "Logout" && response != "No Data") {
                    window.location = "/Error/DefaultError";
                }
                else {
                    aaa = 1;
                    alert(response);
                    C_table_part_data_geting();
                    alert("Delete Successfully")
                    document.getElementById('alertrt_c_part_data').innerHTML = response;
                    $('#alertrt_c_part_data').css('display', 'block');
                    $('#alertrt_c_part_data').fadeIn(5000, function () {

                    });
                    $('#alertrt_c_part_data').fadeOut(5000, function () {

                    });
                }
            }
        });
    }

}

// d table part
function dd_table_part_data_saveing() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var i = 0;
        var block_district_village_name = $("#block_district_village_name ").val();
        var latitude = $("#latitude").val();
        var logitude = $("#logitude").val();
        var well_depth = $("#well_depth").val();
        var reduced_level = $("#reduced_level").val();
        var height_mp = $("#height_mp").val();
        var aquifer = $("#aquifer").val();
        var depth_waterlevel_bgl = $("#depth_waterlevel_bgl").val();

        if (i == 0) {
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;

            obj.block_district_village_name = block_district_village_name;
            obj.latitude = latitude;
            obj.logitude = logitude;
            obj.well_depth = well_depth;
            obj.reduced_level = reduced_level;
            obj.height_mp = height_mp;
            obj.aquifer = aquifer;
            obj.depth_waterlevel_bgl = depth_waterlevel_bgl;


            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/d_chart_data_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    //alert(response);
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != "Successfully Saved" && response != "Logout") {
                        window.location = "/Error/DefaultError";

                    }
                    else {
                        alert(response);
                        aaa = 1;

                        cancelthree();
                        dd_table_part_data_geting();
                        abc = 1;

                        alert("Saved Successfully")
                        document.getElementById('alertrt_d_part_data').innerHTML = response;
                        $('#alertrt_d_part_data').css('display', 'block');
                        $('#alertrt_d_part_data').fadeIn(5000, function () {

                        });
                        $('#alertrt_d_part_data').fadeOut(5000, function () {

                        });
                    }
                }

            });
        }
        else {

            abc = 1;
            cancelone();
            dd_table_part_data_geting();
        }
    }

}
function dd_table_part_data_geting() {

    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/d_table_data_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    a += 1
                    tr += '<tr><td><button type="button" class="btn btn-danger" onclick="Delete_dd_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].block_district_village_name + '</td><td>' + data[i].latitude + '</td><td> ' + data[i].logitude + '</td><td> ' + data[i].well_depth + '</td><td> ' + data[i].reduced_level + '</td><td> ' + data[i].height_mp + '</td><td> ' + data[i].aquifer + '</td><td> ' + data[i].depth_waterlevel_bgl + '</td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="10"  style="text-align:center;">No Data</td></tr>';
            }
            if (tr == "") {
                tr += '<tr><td colspan="10" style="text-align:center;">No Data</td></tr>';
            }

            $("#tbl_d_part").html(tr);

        }
    });

}

function Delete_dd_table_part_data(id) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};

        obj.id = id;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/GPlevel/d_table_data_delete",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                // alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != "Deleted Successfully" && response != "Logout") {
                    window.location = "/Error/DefaultError";
                }
                else {
                    alert(response);
                    aaa = 1;
                    dd_table_part_data_geting();

                    document.getElementById('alertrt_d_part_data').innerHTML = response;
                    $('#alertrt_d_part_data').css('display', 'block');
                    $('#alertrt_d_part_data').fadeIn(5000, function () {

                    });
                    $('#alertrt_d_part_data').fadeOut(5000, function () {

                    });
                }
            }
        });
    }

}

// e table part  script 
function ee_table_part_data_saveing() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var i = 0;
        var block_district_village_name = $("#block_district_village_name ").val();
        var latitude = $("#latitude").val();
        var logitude = $("#logitude").val();
        var well_depth = $("#well_depth").val();
        var aquifer = $("#aquifer").val();
        var wq_cations = $("#wq_cations").val();
        var wq_anions = $("#wq_anions").val();
        var wq_key_pollution = $("#wq_key_pollution").val();

        if (i == 0) {
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;

            obj.block_district_village_name = block_district_village_name;
            obj.latitude = latitude;
            obj.logitude = logitude;
            obj.well_depth = well_depth;
            obj.aquifer = aquifer;
            obj.wq_cations = wq_cations;
            obj.wq_anions = wq_anions;
            obj.wq_key_pollution = wq_key_pollution;


            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/e_chart_data_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {

                    alert(response);
                    if (response != "Successfully Saved" && response != "Logout") {
                        window.location = "/Error/DefaultError";
                    } else if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    cancelfour();
                    ee_table_part_data_geting();
                    abcd = 1;

                    alert("Saved Successfully")
                    document.getElementById('alertrt_e_part_data').innerHTML = response;
                    $('#alertrt_e_part_data').css('display', 'block');
                    $('#alertrt_e_part_data').fadeIn(5000, function () {

                    });
                    $('#alertrt_e_part_data').fadeOut(5000, function () {

                    });
                }


            });
        }
        else {

            abcd = 1;
            cancelfour();
            ee_table_part_data_geting();
        }
    }

}
function ee_table_part_data_geting() {

    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/e_table_data_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    a += 1
                    tr += '<tr><td><button type="button" class="btn btn-danger" onclick="Delete_ee_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].block_district_village_name + '</td><td>' + data[i].latitude + '</td><td> ' + data[i].logitude + '</td><td> ' + data[i].well_depth + '</td><td> ' + data[i].aquifer + '</td><td> ' + data[i].wq_cations + '</td><td> ' + data[i].wq_anions + '</td><td> ' + data[i].wq_key_pollution + '</td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="10"  style="text-align:center;">No Data</td></tr>';
            }
            if (tr == "") {
                tr += '<tr><td colspan="10" style="text-align:center;">No Data</td></tr>';
            }

            $("#tbl_e_part").html(tr);

        }
    });

}

function Delete_ee_table_part_data(id) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};

        obj.id = id;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/GPlevel/e_table_data_delete",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response != "Deleted Successfully" && response != "Logout") {
                    window.location = "/Error/DefaultError";
                }
                else if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                ee_table_part_data_geting();
                //  alert("Delete Successfully")
                document.getElementById('alertrt_e_part_data').innerHTML = response;
                $('#alertrt_e_part_data').css('display', 'block');
                $('#alertrt_e_part_data').fadeIn(5000, function () {

                });
                $('#alertrt_e_part_data').fadeOut(5000, function () {

                });

            }
        });
    }
}

// g table part script

function gg_table_part_data_saveing() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var i = 0;
        var scheme_name = $("#scheme_name").val();
        var activities_undertaken = $("#activities_undertaken").val();
        var area_covered_numbers = $("#area_covered_numbers").val();
        var numbers_of_members = $("#numbers_of_members").val();

        if (i == 0) {
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;

            obj.scheme_name = scheme_name;
            obj.activities_undertaken = activities_undertaken;
            obj.area_covered_numbers = area_covered_numbers;
            obj.numbers_of_members = numbers_of_members;
            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/g_chart_data_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    aaa = 1;
                    alert(response);
                    if (response != "Successfully Saved" && response != "Logout") {
                        window.location = "/Error/DefaultError";
                    }
                    else if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    cancelfive();
                    gg_table_part_data_geting();
                    abcdg = 1;

                    // alert("Saved Successfully")
                    document.getElementById('alertrt_g_part_data').innerHTML = response;
                    $('#alertrt_g_part_data').css('display', 'block');
                    $('#alertrt_g_part_data').fadeIn(5000, function () {

                    });
                    $('#alertrt_g_part_data').fadeOut(5000, function () {

                    });
                }


            });
        }
        else {

            abcdg = 1;
            cancelfive();
            gg_table_part_data_geting();
        }
    }

}
function gg_table_part_data_geting() {

    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/g_table_data_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            aaa = 1;
            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var scheme_name = data[i].scheme_name;
                    var activities_undertaken = data[i].activities_undertaken;
                    var area_covered_numbers = data[i].area_covered_numbers;
                    var numbers_of_members = data[i].numbers_of_members;


                    if (scheme_name != null && scheme_name != "") {
                    } else {
                        scheme_name = "";
                    }
                    if (activities_undertaken != null && activities_undertaken != "") {
                    } else {
                        activities_undertaken = "";
                    }
                    if (area_covered_numbers != null && area_covered_numbers != "") {
                    } else {
                        area_covered_numbers = "";
                    }
                    if (numbers_of_members != null && numbers_of_members != "") {
                    } else {
                        numbers_of_members = "";
                    }
                    a += 1
                    tr += '<tr><td><button type="button" class="btn btn-danger" onclick="Delete_gg_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + scheme_name + '</td><td>' + activities_undertaken + '</td><td> ' + area_covered_numbers + '</td><td> ' + numbers_of_members + '</td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="10"  style="text-align:center;">No Data</td></tr>'
            }
            if (tr == "") {
                tr += '<tr><td colspan="10" style="text-align:center;">No Data</td></tr>';
            }

            $("#tbl_g_part").html(tr);

        }
    });

}

function Delete_gg_table_part_data(id) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};

        obj.id = id;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/GPlevel/g_table_data_delete",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {

                alert(response);
                if (response != "Deleted Successfully" && response != "Logout") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }

                gg_table_part_data_geting();
                document.getElementById('alertrt_g_part_data').innerHTML = response;
                $('#alertrt_g_part_data').css('display', 'block');
                $('#alertrt_g_part_data').fadeIn(5000, function () {

                });
                $('#alertrt_g_part_data').fadeOut(5000, function () {

                });

            }
        });
    }

}

// a table part script
function aa_table_part_data_saveing() {

    var xx = 0;
    var designation_name = $("#designation_name ").val();
    var name = $("#name ").val();
    var contact_details = $("#contact_details ").val();
    var gender = $("#gender ").val();
    var Year = $('#year').val();
    var Month = $('#month').val();
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    else if (designation_name == "0") {
        xx = 1;
        alert("Plese Select Designation");
    }
    else if (name == "") {
        xx = 1;
        alert("Check: Before pressing the 'Save' button, first fill in the information in the required columns.");
    }
    else if (year == "0") {
        xx = 1;
        alert("Please Select Gender");
    }
    else if (gender == "0") {
        xx = 1;
        alert("Please Select Gender");
    } else if (contact_details.length != 10) {
        xx = 1;
        alert("Please enter a valid mobile phone number.");
    }
    //else if (sarpanch_contact_details == "") {
    //    xx = 1;
    //    alert("Please Enter Sarpanch Contact Details");
    //}
    //else if (panchayat_secretary_name == "") {
    //    xx = 1;
    //    alert("Please Enter Panchayat Secretary Name");
    //}

    else if (contact_details == "") {
        xx = 1;
        alert("Please Enter Contact Details");
    }
    else if (Year == "0") {
        xx = 1;
        alert("Please Select Year");
    }
    //else if (Month == "0") {
    //    xx = 1;
    //    alert("Please Select Month");
    //}

    if (xx == 0) {
        var i = 0;

        if (i == 0) {
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;
            obj.year = Year;
            obj.month = Month;
            obj.designation_name = designation_name;
            obj.name = name;
            obj.contact_details = contact_details;
            obj.gender = gender;
            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/a_chart_data_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    aaa = 1;
                    swal("", "Successfully Saved", "success", {
                        button: "OK",
                    });
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    if (response == "Successfully Saved") {
                        cancela_1();
                        aa_table_part_data_geting();
                        aaa = 1;
                        $('#designation_name').val("0");
                        $('#name').val("");
                        $('#gender').val("0");
                        $('#contact_details').val("");
                    }
                    else {
                        document.getElementById('alertrt_aa_part_data').innerHTML = response;
                        $('#alertrt_aa_part_data').css('display', 'block');
                        $('#alertrt_aa_part_data').fadeIn(5000, function () {

                        });
                        $('#alertrt_aa_part_data').fadeOut(5000, function () {

                        });
                    }
                }


            });
        }
        else {

            aaa = 1;
            cancela_1();
            aa_table_part_data_geting();
        }
    }

}
function aa_table_part_data_geting() {
    var year = $('#year').val();
    var month = $('#month').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = year;
    obj.month = month;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/a_table_data_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            
            let tr = "";


            if (data != null) {
                console.log(data);
                $("select#designation_name option").prop('disabled', false);
                for (var i = 0; i < data.length; i++) {
                    var designation_name = data[i].designation_name;
                    $("select#designation_name option[value='" + designation_name + "']").prop('disabled', true);
                    var name = data[i].name;
                    //var sarpanch_contact_details = data[i].sarpanch_contact_details;
                    //var panchayat_secretary_name = data[i].panchayat_secretary_name;
                    var contact_details = data[i].contact_details;
                    var gender = data[i].gender;

                    if (designation_name != null && designation_name != "") {

                    } else {
                        designation_name = "";
                    }
                    if (name != null && name != "") {

                    } else {
                        name = "";
                    }
                    //if (sarpanch_contact_details != null && sarpanch_contact_details != "") {

                    //} else {
                    //    sarpanch_contact_details = "";
                    //}

                    //if (panchayat_secretary_name != null && panchayat_secretary_name != "") {

                    //} else {
                    //    panchayat_secretary_name = "";
                    //}
                    if (contact_details != null && contact_details != "") {

                    } else {
                        contact_details = "";
                    }
                    if (gender != null && gender != "") {

                    } else {
                        gender = "";
                    }

                    a += 1
                    tr += '<tr><td><button type="button" class="btn btn-danger sarpanch_dlt_btn" id="sarpanch_dlt_btn" onclick="Delete_aa_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + designation_name + '</td><td>' + name + '</td><td>' + gender + '</td><td> ' + contact_details + '</td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="7"  style="text-align:center;">No Data</td></tr>'
            }
            if (tr == "") {
                tr += '<tr><td colspan="7" style="text-align:center;">No Data</td></tr>';
                /*alert("No Data for this Gram Panychayat (Section-B)");*/
            }

            $("#TblData_abc_part").html(tr);
            $('.loader').hide();
            if (StateOfficer == "District Level Nodal Officer" || StateOfficer == "State Level Nodal Officer" || StateOfficer == "National Level Nodal Officer" || StateOfficer == "Admin" ) {
                //$('.sarpanch_dlt_btn').hide();
                $("input[type='text']").prop("disabled", true);
                $("#sarpanch_save_btn").prop("disabled", true);
                $(".sarpanch_dlt_btn").prop("disabled", true);
                $(".hide_btn").prop("disabled", true);
                //prop("disabled", true);
                //$('#btn_rejectNDO').prop("disabled", false);
            } else if (e_sentsts == true) {
                $(".sarpanch_dlt_btn").prop("disabled", true);
                $(".hide_btn").prop("disabled", true);
            }
        }
    });

}

function Delete_aa_table_part_data(id) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};

        obj.id = id;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/GPlevel/a_table_data_delete",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                
                swal("", "Deleted Successfully", "success", {
                    button: "OK",
                });
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                } else if (response != "Deleted Successfully" && response != "Logout") {
                    window.location = "/Error/DefaultError";
                }

                aa_table_part_data_geting();
                document.getElementById('alertrt_aa_part_data').innerHTML = response;
                $('#alertrt_aa_part_data').css('display', 'block');
                $('#alertrt_aa_part_data').fadeIn(5000, function () {

                });
                $('#alertrt_aa_part_data').fadeOut(5000, function () {

                });

            }
        });
    }

}

// j part table script

function jj_table_part_data_saveing() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var i = 0;
        var name_of_gp = $("#name_of_gp").val();
        var name_of_water_body = $("#name_of_water_body").val();
        var name_of_count = $("#name_of_count").val();
        var storage_capacity_ham = $("#storage_capacity_ham").val();


        if (i == 0) {
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;

            obj.name_of_gp = name_of_gp;
            obj.name_of_water_body = name_of_water_body;
            obj.name_of_count = name_of_count;
            obj.storage_capacity_ham = storage_capacity_ham;

            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/Gplevel/j_chart_data_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {

                    alert(response);
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    } else if (response != "Successfully Saved" && response != "Logout") {
                        window.location = "/Error/DefaultError";
                    }
                    cancelsix();
                    jj_table_part_data_geting();
                    abcdgij = 1;

                    alert("Saved Successfully")
                    document.getElementById('alertrt_jj_part_data').innerHTML = response;
                    $('#alertrt_jj_part_data').css('display', 'block');
                    $('#alertrt_jj_part_data').fadeIn(5000, function () {

                    });
                    $('#alertrt_jj_part_data').fadeOut(5000, function () {

                    });
                }


            });
        }
        else {

            abcdgij = 1;
            cancelsix();
            jj_table_part_data_geting();
        }
    }

}
function jj_table_part_data_geting() {

    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/j_table_data_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    a += 1
                    tr += '<tr><td><button type="button" class="btn btn-danger" onclick="Delete_jj_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].name_of_gp + '</td><td>' + data[i].name_of_water_body + '</td><td> ' + data[i].name_of_count + '</td><td> ' + data[i].storage_capacity_ham + '</td></tr>';

                }

            }
            else {
                tr += '<tr><td colspan="6"  style="text-align:center;">No Data</td></tr>'
            }
            if (tr == "") {
                tr += '<tr><td colspan="6" style="text-align:center;">No Data</td></tr>';
            }

            $("#Tbl_boday_jj_part").html(tr);

        }
    });

}

function Delete_jj_table_part_data(id) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};

        obj.id = id;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/Gplevel/j_table_data_delete",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {

                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                } else if (response != "Deleted Successfully" && response != "Logout") {
                    window.location = "/Error/DefaultError";
                }
                jj_table_part_data_geting();
                document.getElementById('alertrt_jj_part_data').innerHTML = response;
                $('#alertrt_jj_part_data').css('display', 'block');
                $('#alertrt_jj_part_data').fadeIn(5000, function () {

                });
                $('#alertrt_jj_part_data').fadeOut(5000, function () {

                });

            }
        });
    }

}

// i_part_table data getting


function i_part_table_gp_data() {
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/i_part_table_geting",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (data.length != 0) {
                //population

                if (data[0].metering_monitoring_pgwm != null && data[0].metering_monitoring_pgwm != "") {

                    $('#metering_monitoring_pgwm').val(data[0].metering_monitoring_pgwm);
                }
                if (data[0].metering_monitoring_count != null && data[0].metering_monitoring_count != "") {

                    $('#metering_monitoring_count').val(parseFloat(data[0].metering_monitoring_count).toFixed(2));
                }
                if (data[0].wsp_prepared_pgwm != null && data[0].wsp_prepared_pgwm != "") {

                    $('#wsp_prepared_pgwm').val(data[0].wsp_prepared_pgwm);
                }
                if (data[0].wsp_prepared_count != null && data[0].wsp_prepared_count != "") {

                    $('#wsp_prepared_count').val(parseFloat(data[0].wsp_prepared_count).toFixed(2));
                }
                //Number of House holds

                if (data[0].wua_committees_pgwm != null && data[0].wua_committees_pgwm != "") {

                    $('#wua_committees_pgwm').val(data[0].wua_committees_pgwm);
                }
                if (data[0].wua_committees_count != null && data[0].wua_committees_count != "") {

                    $('#wua_committees_count').val(parseFloat(data[0].wua_committees_count).toFixed(2));
                }
                if (data[0].adoption_miro_irri_crops_pgwm != null && data[0].adoption_miro_irri_crops_pgwm != "") {

                    $('#adoption_miro_irri_crops_pgwm').val(data[0].adoption_miro_irri_crops_pgwm);
                }
                if (data[0].adoption_miro_irri_crops_count != null && data[0].adoption_miro_irri_crops_count != "") {

                    $('#adoption_miro_irri_crops_count').val(parseFloat(data[0].adoption_miro_irri_crops_count).toFixed(2));
                }



            }

            else {

                // alert("No Data for this State,District,Block and Gram panychayat")
            }
        }
    });
}

// i_part_table data Saveing

function i_part_table_data_saveing() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var j = 0;
        var metering_monitoring_pgwm = $("#metering_monitoring_pgwm").val();
        var metering_monitoring_count = $("#metering_monitoring_count").val();
        var wsp_prepared_pgwm = $("#wsp_prepared_pgwm").val();
        var wsp_prepared_count = $("#wsp_prepared_count").val();

        var wua_committees_pgwm = $("#wua_committees_pgwm").val();
        var wua_committees_count = $("#wua_committees_count").val();
        var adoption_miro_irri_crops_pgwm = $("#adoption_miro_irri_crops_pgwm").val();
        var adoption_miro_irri_crops_count = $("#adoption_miro_irri_crops_count").val();

        if (j == 0) {
            ddd = 0;
            var obj = {};
            obj.state_name = State;
            obj.district_name = Dist;
            obj.block_name = Block;
            obj.gpname = Gram;

            obj.metering_monitoring_pgwm = metering_monitoring_pgwm;
            obj.metering_monitoring_count = metering_monitoring_count;
            obj.wsp_prepared_pgwm = wsp_prepared_pgwm;
            obj.wsp_prepared_count = wsp_prepared_count;

            obj.wua_committees_pgwm = wua_committees_pgwm;
            obj.wua_committees_count = wua_committees_count;
            obj.adoption_miro_irri_crops_pgwm = adoption_miro_irri_crops_pgwm;
            obj.adoption_miro_irri_crops_count = adoption_miro_irri_crops_count;


            $.ajax({
                type: 'POST',
                contentType: 'application/json; chatset=utf-8',
                url: "/GPlevel/i_part_table_saveing",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response != "Successfully Saved") {
                        window.location = "/Error/DefaultError";
                    }
                    document.getElementById('alertrt_i_part_table').innerHTML = response;
                    $('#alertrt_i_part_table').css('display', 'block');
                    $('#alertrt_i_part_table').fadeIn(5000, function () {

                    });
                    $('#alertrt_i_part_table').fadeOut(5000, function () {

                    });

                    alert("Successfully Saved ");





                }
            });
        }
        else {
            //else
        }
    }

}



function Save_social_org_gp_contactdetails() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var i = 0;
        var social_org_gp_contactdetails_name = $("#social_org_gp_contactdetails_name").val();
        var social_org_gp_contactdetails_mobilenumber = $("#social_org_gp_contactdetails_mobilenumber").val();
        var social_org_gp_noofworkers_count = $("#social_org_gp_noofworkers_count").val();
        var files1 = $("#social_org_gp_noofworkers_Image").val();


        var State_name = State;
        var District_name = Dist;
        var Block = Block;
        var Gname = Gram;
        if (i == 0) {
            $.ajax({
                url: "/GPlevel/social_org_gp_contactdetails",
                type: "POST",
                data: function () {
                    var data = new FormData();
                    data.append("social_org_gp_contactdetails_name", jQuery("#social_org_gp_contactdetails_name").val());
                    data.append("social_org_gp_contactdetails_mobilenumber", jQuery("#social_org_gp_contactdetails_mobilenumber").val());
                    data.append("social_org_gp_noofworkers_count", jQuery("#social_org_gp_noofworkers_count").val());
                    data.append("files", jQuery("#social_org_gp_noofworkers_Image").get(0).files[0]);

                    data.append("State_name", State_name);
                    data.append("District_name", District_name);
                    data.append("Block", Block);
                    data.append("Gname", Gname);


                    return data;
                }(),
                contentType: false,
                processData: false,
                success: function (response) {
                    alert(response);
                    if (response != "Upload Successfully" && response != "Your Upload file has Not valid File, Please Upload proper file" && response != "Your Upload file has Double Extention, Please Upload proper file") {
                        window.location = "/Error/DefaultError";
                    }
                    abcdgija = 1;
                    aaa = 1;
                    $('#gpsocialError').fadeIn();
                    $('#gpsocialError').text(response);

                    setTimeout(function () {
                        $('#gpsocialError').fadeOut('fast');
                    }, 2000);
                    Getting_abhy_baseline_social_org_gpdata();
                },
                error: function (jqXHR, textStatus, errorMessage) {
                    console.log(errorMessage);
                }
            });
        }
    }
}


function Getting_abhy_baseline_social_org_gpdata() {
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/abhy_baseline_social_org_gpdata_getting_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            aaa = 1;
            var tr = "";
            if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    tr += "<tr id='c1_count'><td><button class='btn btn-primary' onclick='Delete_social_org_gp_contactdetails(" + response[i].id + ")'>Delete</button > <button type='button' class='btn btn-danger' onclick='cancelcontact();'>Cancel</button></td>" +
                        "<td>" + (i + 1) + "</td>" +
                        "<td>" + response[i].contact_name + "</td>" +
                        "<td>" + response[i].contact_mobile + "</td> " +
                        "<td>" + response[i].workers_count + "</td> " +

                        "<td><img src='" + response[i].contact_image + "' style='height:30px;width:30px;'></td ></tr>";

                }

            }
            if (tr == "") {
                tr = "<tr> <td colspan='6' style='text-align:center;'>No Data</td></tr>";
                $("#TblData_contact_part_body").html(tr);
            }
            else {
                $("#TblData_contact_part_body").html(tr);
            }
        }
    });
}

function Delete_social_org_gp_contactdetails(aa) {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var obj = {};
        //paddy
        obj.id = aa;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/GPlevel/abhy_baseline_social_org_gpdata_Delete_data",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                aaa = 1;
                $('#gpsocialError').fadeIn();
                $('#gpsocialError').text(response);

                setTimeout(function () {
                    $('#gpsocialError').fadeOut('fast');
                }, 2000);
                Getting_abhy_baseline_social_org_gpdata();

            }
        });
    }
}





// New Code


function baselinedata_download() {
    var xx = 0;

    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    }
    if (xx == 0) {
        window.location = "/GPlevel/Export_sarpanchdetails_ToExcel";
    }
}

//function Report_BTN() {
//    $('#report_btn').hide(200);
//    $('#btn_Excel').show(200);
//    $('#btn_pdf').show(200);

//}
function sarpanchdetails_download1() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        window.location = "/GPlevel/Export_baselinedata_geting_ToExcel";
    }
}
function Well_Inventory_Download() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        window.location = "/GPlevel/Export_Well_Inventory_ToExcel";
        $('#Well_Inventory_Alert').text("Downloading...");
        setTimeout(function () {
            $('#Well_Inventory_Alert').fadeOut('fast');
        }, 3000);
    }
}
function Geo_tagging_of_Artificial_Recharge_Structures_Download() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        window.location = "/GPlevel/Export_Geo_tagging_of_Artificial_Recharge_Structures_ToExcel";
        $('#geotagging').text("Downloading...");
        setTimeout(function () {
            $('#geotagging').fadeOut('fast');
        }, 3000);
    }

}
function Rainfall_Data_Download() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        window.location = "/GPlevel/Export_Rainfall_Data_ToExcel";
        $('#rainfall_alert').text("Downloading...");
        setTimeout(function () {
            $('#rainfall_alert').fadeOut('fast');
        }, 3000);
    }
}

function Social_Monitoring_Download() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        window.location = "/GPlevel/Export_Social_Monitoring_ToExcel";
        $('#social_monitoring_alert').text("Downloading...");
        setTimeout(function () {
            $('#social_monitoring_alert').fadeOut('fast');
        }, 3000);
    }
}

function Ground_Water_Monitoring_Download() {
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        window.location = "/GPlevel/Export_Ground_Water_Monitoring_ToExcel";
        $('#groundwaterMonitoring').text("Downloading...");
        setTimeout(function () {
            $('#groundwaterMonitoring').fadeOut('fast');
        }, 3000);
    }

}

function abhy_GroundwaterMonitoringImages_getting_data() {
    var obj = {};
    obj.state = State;
    obj.district = Dist;
    obj.block = Block;
    obj.gp = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/abhy_GroundwaterMonitoringImages_getting_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            var li = '';
            $('#GroundwaterMonitoring_images_list').html(li);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            $('#gwm_count').text('0');
            if (data.length != 0) {
                $('#gwm_count').text(data.length);


                for (var i = 0; i < data.length; i++) {
                    if (data[i].image != null && data[i].image != "") {

                        var ImageName = data[i].image.split('Ataljalimages/');
                        var ImageName11 = data[i].image.split('attachments/');
                        if (ImageName.length == 2) {
                            var path = data[i].image;
                            li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName[1] + '</a></li>';
                        }
                        else {
                            if (ImageName11.length == 2) {
                                var path = data[i].image;
                                li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName11[1] + '</a></li>';
                            }
                        }


                    }


                }
                $('#GroundwaterMonitoring_images_list').html(li);


            }
            else {
                alert("No Data avaliable in Ground Water Monitoring Data");

            }
        }
    });
}



//function abhy_Geo_tagging_of_Artificial_Recharge_Structures_getting_data() {
//    var obj = {};
//    obj.statename = State;
//    obj.districtname = Dist;
//    obj.blockname = Block;
//    obj.gpname = Gram;
//    $.ajax({
//        type: 'POST',
//        contentType: 'application/json; chatset=utf-8',
//        url: "/GPlevel/abhy_Geo_tagging_of_Artificial_Recharge_Structures_getting_data",
//        data: "{'Data': '" + JSON.stringify(obj) + "'}",
//        dataType: 'JSON',
//        success: function (data) {

//            if (data == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";
//            }

//            if (data.length != 0) {

//                $('#typeofstructure').text(data[0].typeofstructure);
//                $('#storagecapacity').text(data[0].storagecapacity);
//                $('#nooffillings').text(data[0].nooffillings);
//            }
//            else {
//                alert("No Data avaliable in Geo Tagging Data");
//                $('#typeofstructure').text("");
//                $('#storagecapacity').text("");
//                $('#nooffillings').text("");
//            }
//        }
//    });
//}

//function abhy_Social_Monitoring_getting_data() {
//    var obj = {};
//    obj.state = State;
//    obj.district = Dist;
//    obj.block = Block;
//    obj.grampanchayat = Gram;
//    $.ajax({
//        type: 'POST',
//        contentType: 'application/json; chatset=utf-8',
//        url: "/GPlevel/abhy_Social_Monitoring_getting_data",
//        data: "{'Data': '" + JSON.stringify(obj) + "'}",
//        dataType: 'JSON',
//        success: function (data) {

//            if (data == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";
//            }
//            
//            $('#No_Social_Monitoring_Count').text(data.length);
//            if (data.length != 0) {
//                
//                var mom_li = '';
//                var photo_li = '';
//                $('#MOM_images_list').html(mom_li);
//                $('#Photograph_images_list').html(photo_li);

//                for (var i = 0; i < data.length; i++) {
//                    
//                    if (data[i].minutesofmeeting != null && data[i].minutesofmeeting != "") {

//                        var ImageName = data[i].minutesofmeeting.split('ataljalimages/');
//                        var ImageName111 = data[i].minutesofmeeting.split('Ataljalimages/');
//                        var ImageName11 = data[i].minutesofmeeting.split('attachments/');
//                        if (ImageName.length == 2) {
//                            var path = data[i].minutesofmeeting;
//                            mom_li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName[1] + '</a></li>';
//                        }
//                        else {
//                            if (ImageName111.length == 2) {
//                                var path = data[i].minutesofmeeting;
//                                mom_li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName111[1] + '</a></li>';
//                            }else if (ImageName11.length == 2) {
//                                var path = data[i].minutesofmeeting;
//                                mom_li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName11[1] + '</a></li>';
//                            }
//                        }


//                    }



//                    if (data[i].image != null && data[i].image != "") {

//                        var ImageName = data[i].image.split('ataljalimages/');
//                        var ImageName11 = data[i].image.split('attachments/');
//                        var ImageName111 = data[i].image.split('Ataljalimages/');
//                        if (ImageName.length == 2) {
//                            var path = data[i].image;
//                            photo_li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName[1] + '</a></li>';
//                        }
//                        else {
//                            if (ImageName11.length == 2) {
//                                var path = data[i].image;
//                                photo_li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName11[1] + '</a></li>';
//                            } else if (ImageName111.length == 2) {
//                                var path = data[i].image;
//                                photo_li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName111[1] + '</a></li>';
//                            }
//                        }


//                    }

//                    $('#date11').text(data[i].date);
//                    $('#location').text(data[i].location);
//                    $('#numberofattendees').text(data[i].numberofattendees);
//                    $('#male').text(data[i].male);
//                    $('#female').text(data[i].female);
//                    $('#event11').text(data[i].event1);
//                    $('#others').text(data[i].others);
//                    }

//                $('#MOM_images_list').html(mom_li);
//                $('#Photograph_images_list').html(photo_li);



//            } else {
//                alert("No Data avaliable in Social Monitoring Data");

//                $('#date11').text("");
//                $('#location').text("");
//                $('#numberofattendees').text("");
//                $('#male').text("");
//                $('#female').text("");
//                $('#event11').text("");
//                $('#others').text("");

//            }
//        }
//    });
//}

//new code for dropdowns in view page


function SessionInfo() {

    var obj = {};
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/SocialMointoring/State_SessionInfo_1",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            //apl_bpl();
            //Categories_scstobc();

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else {
                $('#Error_').text("");

                $('#StateLabel').hide();
                $('#StateDropdownLabel').hide();
                $('#DistLabel').hide();
                $('#DistDropdownLabel').hide();
                $('#BlockLabel').hide();
                $('#BlockDropdownLabel').hide();
                $('#GramLabel').hide();
                $('#GramDropdownLabel').hide();
                //$('#DropdownSearch_btn').hide();
                $('#btn_submitNDO').hide();
                var Str = data.split(',');
                if (Str[0] == "Admin" || Str[0] == "National Level Nodal Officer") {
                    $('#StateLabel').hide();
                    $('#StateDropdownLabel').show();
                    $('#DistLabel').hide();
                    $('#DistDropdownLabel').show();
                    $('#BlockLabel').hide();
                    $('#BlockDropdownLabel').show();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').show();
                    $('#DropdownSearch_btn').show();
                    $('#btn_submitNDO').hide();
                    $("input[type='text']").prop("disabled", true);
                    $(".hide_btn").prop("disabled", true);
                    $('#btnFinalSave').hide();
                    $("#sarpanch_save_btn").prop("disabled", true);
                    //$("#month").val("0");
                }
                else if (Str[0] == "State Level Nodal Officer") {
                    State = Str[1];
                    off_1 = "state";
                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').hide();
                    $('#DistDropdownLabel').show();
                    $('#BlockLabel').hide();
                    $('#BlockDropdownLabel').show();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').show();
                    $('#DropdownSearch_btn').show();
                    $("input[type='text']").prop("disabled", true);
                    $(".hide_btn").prop("disabled", true);
                    $('#btnFinalSave').hide();
                    $("#sarpanch_save_btn").prop("disabled", true);
                    //$("#month").val("0");
                    State_Dropdown_Function();
                    //State_Dropdown_Function();
                    //baseline_gp_data();
                    
                    
                    
                    i_part_table_gp_data();
                    GeoTagging_Images_Info();
                    //Rain_gauge_Station_Image_Info();
                    bpart_data_geting();
                    C_table_part_data_geting();
                    dd_table_part_data_geting();
                    ee_table_part_data_geting();
                    gg_table_part_data_geting();
                    //aa_table_part_data_geting();
                    jj_table_part_data_geting();
                    Getting_abhy_baseline_social_org_gpdata();

                    //Rain_gauge_Station_Image_Info();


                    //abhy_Geo_tagging_of_Artificial_Recharge_Structures_getting_data();

                    //table_data_external_file();
                }
                else if (Str[0] == "District Level Nodal Officer") {
                    off_1 = "dist";
                    State = Str[1];
                    Dist = Str[2];
                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').show();
                    $('#DistDropdownLabel').hide();
                    $('#BlockLabel').hide();
                    $('#BlockDropdownLabel').show();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').show();
                    $('#DropdownSearch_btn').show();
                    $("input[type='text']").prop("disabled", true);
                    $(".hide_btn").prop("disabled", true);
                    $('#btnFinalSave').hide();
                    $("#sarpanch_save_btn").prop("disabled", true);
                    //$("#month").val("0");
                    Dist_fun();
                    Dist_fun();
                    //baseline_gp_data();
                    abhy_Social_Monitoring_getting_data();
                    
                    
                    
                    
                    //Rain_gauge_Station_Image_Info();
                    bpart_data_geting();
                    C_table_part_data_geting();
                    dd_table_part_data_geting();
                    ee_table_part_data_geting();
                    gg_table_part_data_geting();
                    //aa_table_part_data_geting();
                    jj_table_part_data_geting();
                    Getting_abhy_baseline_social_org_gpdata();

                    //Rain_gauge_Station_Image_Info();


                    //table_data_external_file();
                }
                else if (Str[0] == "Block Level Nodal Officer") {
                    off_1 = "block";
                    State = Str[1];
                    Dist = Str[2];
                    Block = Str[3];
                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').show();
                    $('#DistDropdownLabel').hide();
                    $('#BlockLabel').show();
                    $('#BlockDropdownLabel').hide();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').show();
                    $('#DropdownSearch_btn').show();
                    $('#btn_submitNDO').hide();
                    $("input[type='text']").prop("disabled", true);
                    $(".hide_btn").prop("disabled", true);
                    $('#btnFinalSave').hide();
                    $("#sarpanch_save_btn").prop("disabled", true);
                    //$("#month").val("0");
                    Block_fun();
                    //baseline_gp_data();
                    abhy_Social_Monitoring_getting_data();
                    abhy_Well_Inventory_getting_data11();
                    i_part_table_gp_data();
                    
                    GeoTagging_Images_Info();
                    //Rain_gauge_Station_Image_Info();
                    bpart_data_geting();
                    C_table_part_data_geting();
                    dd_table_part_data_geting();
                    ee_table_part_data_geting();
                    gg_table_part_data_geting();
                    //aa_table_part_data_geting();
                    jj_table_part_data_geting();
                    Getting_abhy_baseline_social_org_gpdata();

                    //Rain_gauge_Station_Image_Info();


                    abhy_Geo_tagging_of_Artificial_Recharge_Structures_getting_data();

                    //table_data_external_file();
                }
                else if (Str[0] == "Gram Panchyat Nodal Officer") {
                    State = Str[1];
                    Dist = Str[2];
                    Block = Str[3];
                    Gram = Str[4];
                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').show();
                    $('#DistDropdownLabel').hide();
                    $('#BlockLabel').show();
                    $('#BlockDropdownLabel').hide();
                    $('#GramLabel').show();
                    $('#GramDropdownLabel').hide();
                    $('#DropdownSearch_btn').hide();
                    $("#sarpanch_save_btn").prop("disabled", false);
                    //$("#month").val("0");
                    Session_month_year();
                    //baseline_gp_data();
                    abhy_Social_Monitoring_getting_data();
                    
                    
                    i_part_table_gp_data();
                    GeoTagging_Images_Info();
                    //Rain_gauge_Station_Image_Info();
                    bpart_data_geting();
                    C_table_part_data_geting();
                    dd_table_part_data_geting();
                    ee_table_part_data_geting();
                    gg_table_part_data_geting();
                    //aa_table_part_data_geting();
                    jj_table_part_data_geting();
                    Getting_abhy_baseline_social_org_gpdata();

                    //Rain_gauge_Station_Image_Info();


                    //abhy_Geo_tagging_of_Artificial_Recharge_Structures_getting_data();

                    //table_data_external_file();
                }


            }
        }

    });

}


function DropDownInfo() {
    if (StateOfficer == "Gram Panchyat Nodal Officer") {
        $('.loader').show();
    }
    
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Home/Sign_Up_DropdownInfo",
        data: "{ }",
        dataType: 'JSON',
        success: function (response) {
            
            if (response.length != 0) {
                Jsondata = response;
                $("#spnstate").empty();
                var opstate = '<option value="0">Select State Name</option>';
                $("#spnstate").append(opstate);
                $("#dist11").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11").append(opdist);
                $("#block1").empty();
                var opblock = '<option value="0">Select Block</option>';
                $("#block1").append(opblock);
                $("#gram").empty();
                var opgram = '<option value="0">Select Gram Panchayat</option>';
                $("#gram").append(opgram);
                //var StateName = $("#spnstate").text();
                if (Jsondata.length != 0) {
                    var ddlst = {};
                    var all_dists = [];
                    var optionState = '';
                    for (var i = 0; i < Jsondata.length; i++) {

                        if (!ddlst[Jsondata[i].state_name]) {
                            all_dists.push(Jsondata[i].state_name);
                            ddlst[Jsondata[i].state_name] = Jsondata[i].state_name;

                        }
                    }
                    var DistArray = [];
                    DistArray = all_dists.sort(function (a, b) {
                        if (a < b) return -1;
                        else if (a > b) return 1;
                        return 0;
                    });
                    optionState = '<option value="0">Select State Name</option>';
                    for (var i = 0; i < DistArray.length; i++) {
                        if (DistArray[i] != null && DistArray[i] != "") {
                            optionState += '<option value="' + DistArray[i] + '">' + DistArray[i] + '</option>';
                        }
                    }
                    $("#spnstate").html(optionState);
                }

            }

            SessionInfo();


        }
    });
}

function State_Dropdown_Function() {

    $("#dist11").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11").append(opdist);
    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram").empty();
    var opgram = '<option value="0">Select Gram Panchayat</option>';
    $("#gram").append(opgram);

    var StateName = $("#spnstate").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_dists = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (StateName == Jsondata[i].state_name) {

                if (!ddlst[Jsondata[i].district_name]) {
                    all_dists.push(Jsondata[i].district_name);
                    ddlst[Jsondata[i].district_name] = Jsondata[i].district_name;

                }
            }
        }


        var DistArray = [];
        DistArray = all_dists.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
        for (var i = 0; i < DistArray.length; i++) {
            if (DistArray[i] != null && DistArray[i] != "") {
                optionDist += '<option value="' + DistArray[i] + '">' + DistArray[i] + '</option>';
            }
        }
        $("#dist11").append(optionDist);
    }

}



function Dist_fun() {

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram").append(opgram);

    var dist = $("#dist11").val();
    if (off_1 == "dist") {
        dist = Dist;
    } else {
        Dist = dist;
    }
    if (dist != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_blocks = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (dist == Jsondata[i].district_name && State == Jsondata[i].state_name) {

                if (!ddlst[Jsondata[i].block_name]) {
                    all_blocks.push(Jsondata[i].block_name);
                    ddlst[Jsondata[i].block_name] = Jsondata[i].block_name;
                    //  $("#block").append(optionDist);
                }
            }
        }


        var BlockArray = [];
        BlockArray = all_blocks.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
        for (var i = 0; i < BlockArray.length; i++) {
            if (BlockArray[i] != null && BlockArray[i] != "") {
                optionDist += '<option value="' + BlockArray[i] + '">' + BlockArray[i] + '</option>';
            }
        }
        $("#block1").append(optionDist);

    }
}



function Block_fun() {

    $("#gram").empty();
    var opgram = '<option value="0">Select Gram Panchayat</option>';
    $("#gram").append(opgram);
    var block = $("#block1").val();

    if (off_1 == "block") {
        block = Block;
    } else {
        Block = block;
    }


    if (block != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_grams = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (State == Jsondata[i].state_name && Dist == Jsondata[i].district_name && block == Jsondata[i].block_name) {

                if (!ddlst[Jsondata[i].gram_panchayat_name]) {
                    ddlst[Jsondata[i].gram_panchayat_name] = Jsondata[i].gram_panchayat_name;
                    all_grams.push(Jsondata[i].gram_panchayat_name);
                    //   $("#gram").append(optionDist);
                }
            }
        }


        var GramArray = [];
        GramArray = all_grams.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
        for (var i = 0; i < GramArray.length; i++) {
            if (GramArray[i] != null && GramArray[i] != "") {

                optionDist += '<option value="' + GramArray[i] + '">' + GramArray[i] + '</option>';
            }
        }
        $("#gram").append(optionDist);
    }
}

function Gram_Fun() {
    var Gram1 = $("#gram").val();
    if (Gram1 == "0") {
        alert("Please Select Grampanchayat");
    } else {
        Gram = $('#gram').val();
    }
}

function Dropdown_Search() {

    
    $('#alert_waiting').show();
    var Year = $("#year").val();
    var month = $('#month').val();
    if (Gram != "0") {

    } else {
        Gram = $('#gram').val();
    }
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    } else if (Year == "0") {
        xx = 1;
        alert("Please Select Year");
    }
    //else if (month == "0") {
    //    xx = 1;
    //    alert("Please Select Month");
    //}
    
    if (xx == 0) {
        $('.loader').show();
        $.ajax({
            type: "Post",
            url: "/Home/StateLevel_Dropdown",
            contentType: "application/json;charset=utf-8",
            data: "{'StateName':'" + State + "','Dist':'" + Dist + "','Block':'" + Block + "','Gram':'" + Gram + "','Year':'" + Year + "','Month':'" + month + "'}",
            dataType: "json",
            success: function (results) {
                console.log(results);
                Get_gp_block_area();



                
            }
        });
    }
}




var upload_count = "";
var formdata = new FormData();

function Upload_GeoTagging_image() {

    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
    }
    if (xx == 0) {
        var file = document.getElementById("geotagging_image").files[0];
        var files = $("#geotagging_image").get(0).files;

        formdata.append("file", files[0]);
        formdata.append('upload_count', upload_count);

        formdata.append('State', State);
        formdata.append('Dist', Dist);
        formdata.append('Block', Block);
        formdata.append('Gram', Gram);
        $.ajax({
            url: '/GPlevel/Upload_GeoTagging_image',
            type: "POST",
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            data: formdata,
            async: false,
            success: function (result) {
                aaa = 1;
                alert(result);
                formdata = new FormData();
                $('#geotagging_image').val("");
                upload_count = "";
                if (result == "SessionTimeOut") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else {
                    //  formdata = new FormData();

                }
                GeoTagging_Images_Info();

            },
            error: function (err) {
                alert(err.statusText);
            }
        });

    }


}


function GeoTagging_Images_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/GPlevel/GeoTagging_Images_Info',
        data: { 'state': State, 'dist': Dist, 'block': Block, 'gram': Gram },
        dataType: 'JSON',
        success: function (response) {
            aaa = 1;


            var li = '';
            $('#Geotagging_images_list').html(li);
            if (response == "NO") {
                $('#GeoTaging_Count').text(0);
            } else {

                $('#GeoTaging_Count').text(response.length);
            }
            if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {

                    if (response[i].image1 != null && response[i].image1 != "") {
                        var ImageName = response[i].image1.split('Ataljalimages/');
                        var ImageName11 = response[i].image1.split('attachments/');
                        if (ImageName.length == 2) {
                            var path = response[i].image1;
                            li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName[1] + '</a></li>';
                        }
                        else {
                            if (ImageName11.length == 2) {
                                var path = response[i].image1;
                                li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName11[1] + '</a></li>';
                            }
                        }

                    }
                }
                $('#Geotagging_images_list').html(li);
            }
        }
    });

}

function Geotaging_image(aa) {

    window.open(aa, "download");
}
// Rain_gauge_Station---

//function Rain_gauge_Station_Image() {

//    var xx = 0;
//    if (State == "0") {
//        xx = 1;
//        alert("Please Select StateName");
//    } else if (Dist == "0") {
//        xx = 1;
//        alert("Please Select District");
//    }
//    else if (Block == "0") {
//        xx = 1;
//        alert("Please Select Block");
//    } else if (Gram == "0") {
//        xx = 1;
//        alert("Please Select Gram Panchayat");
//    }
//    if (xx == 0) {
//        var file = document.getElementById("Rain_gauge_Station_Image").files[0];
//        var files = $("#Rain_gauge_Station_Image").get(0).files;

//        formdata.append("file", files[0]);
//        formdata.append('upload_count', upload_count);

//        formdata.append('State', State);
//        formdata.append('Dist', Dist);
//        formdata.append('Block', Block);
//        formdata.append('Gram', Gram);
//        $.ajax({
//            url: '/GPlevel/Upload_Rain_gauge_Station_Image',
//            type: "POST",
//            contentType: false, // Not to set any content header
//            processData: false, // Not to process data
//            data: formdata,
//            async: false,
//            success: function (result) {
//                aaa = 1;
//                formdata = new FormData();
//                $('#Rain_gauge_Station_Image').val("");
//                alert(result);
//                upload_count = "";
//                if (result == "SessionTimeOut") {
//                    window.location = "/WspNew/WSP_GWM_HOME";
//                }
//                else {
//                    //  formdata = new FormData();

//                }
//                //Rain_gauge_Station_Image_Info();

//            },
//            error: function (err) {
//                alert(err.statusText);
//            }
//        });

//    }

//}


//function Rain_gauge_Station_Image_Info() {

//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/GPlevel/Rain_gauge_Station_Image_Info',
//        data: { 'state': State, 'dist': Dist, 'block': Block, 'gram': Gram },
//        dataType: 'JSON',
//        success: function (response) {

//            aaa = 1;
//            if (response == "NO") {
//                $('#Noof_Statations_Count').text(0);
//            } else {
//                $('#Noof_Statations_Count').text(response.length);
//            }

//            var li = '';
//            $('#Rainfall_Data_Usage_images_list').html(li);
//            if (response.length != 0) {
//                for (var i = 0; i < response.length; i++) {
//                    if (response[i].image1 != null && response[i].image1 != "") {

//                        var ImageName = response[i].image1.split('Ataljalimages/');
//                        var ImageName11 = response[i].image1.split('attachments/');
//                        if (ImageName.length == 2) {
//                            var path = response[i].image1;
//                            li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName[1] + '</a></li>';
//                        }
//                        else {
//                            if (ImageName11.length == 2) {
//                                var path = response[i].image1;
//                                li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName11[1] + '</a></li>';
//                            }
//                        }


//                    }

//                    if (response[i].image2 != null && response[i].image2 != "") {
//                        var ImageName12 = response[i].image2.split('Ataljalimages/');
//                        var ImageName111 = response[i].image2.split('attachments/');
//                        if (ImageName12.length == 2) {
//                            var path = response[i].image2;
//                            li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName12[1] + '</a></li>';
//                        }
//                        else {
//                            if (ImageName111.length == 2) {
//                                var path = response[i].image2;
//                                li += '<li><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName111[1] + '</a></li>';
//                            }
//                        }
//                    }
//                }
//                $('#Rainfall_Data_Usage_images_list').html(li);
//            }

//        }
//    });

//}


function TotalPapulation_fun() {

    var tol_population = 0;
    var male_population = $('#male_population').val();
    var female_population = $('#female_population').val();
    var transgender_population = $('#transgender_population').val();

    if (male_population == "") {

        male_population = 0;
    }

    if (female_population == "") {

        female_population = 0;
    }
    if (transgender_population == "") {

        transgender_population = 0;
    }
    tol_population = parseFloat(male_population) + parseFloat(female_population) + parseFloat(transgender_population);

    $('#tol_population').val(tol_population);


}

function bpl_validation() {

    var total_polulation = $('#tol_population').val();
    var bpl = $('#no_of_bpl').val();

    var total_bpl = parseInt(bpl);
    var population = parseInt(total_polulation);

    if (total_bpl > population) {
        alert('The number of BPL card holders should not be greater than the total population.');
        $('#no_of_bpl').val("");
    } else {
        $('#no_of_bpl').val(bpl);
    }
}

function households_validation() {

    var total_polulation = $('#tol_population').val();
    var no_of_households = $('#no_of_households').val();

    var population = parseInt(total_polulation);
    var households = parseInt(no_of_households);

    if (households > population) {
        alert('The number of Households should not be greater than the total population.');
        $('#no_of_households').val("");
    } else {
        $('#no_of_households').val(no_of_households);
    }
}


function TotalClass() {

    var tol_class = 0;
    var apl = $('#no_of_apl').val();
    var bpl = $('#no_of_bpl').val();

    if (apl == "") {

        apl = 0;
    }

    if (bpl == "") {

        bpl = 0;
    }

    tol_class = parseFloat(apl) + parseFloat(bpl);

    $('#tol_class').val(tol_class);

}

function LandUse_fun() {


    var gp_area_in_ha = $('#gp_area_in_ha').val();
    var forest_area_in_ha = $('#forest_area_in_ha').val();
    var fallow_land_in_ha = $('#fallow_land_in_ha').val();
    var cultivable_land_in_ha = $('#cultivable_land_in_ha').val();

    var other_land_use = 0;

    if (gp_area_in_ha == "") {

        gp_area_in_ha = 0;
    }
    if (forest_area_in_ha == "") {

        forest_area_in_ha = 0;

    }
    if (fallow_land_in_ha == "") {

        fallow_land_in_ha = 0;

    }
    if (cultivable_land_in_ha == "") {

        cultivable_land_in_ha = 0;

    }
    var total_area = (parseFloat(forest_area_in_ha) + parseFloat(fallow_land_in_ha) + parseFloat(cultivable_land_in_ha));
    other_land_use = parseFloat(gp_area_in_ha) - parseFloat(total_area);

    if (total_area > gp_area_in_ha) {
        alert("Other land use areas should not be equal to or greater than total GP areas.");
        $('#forest_area_in_ha').val("");
        $('#fallow_land_in_ha').val("");
        $('#cultivable_land_in_ha').val("");
        $('#other_land_use').val("");
    } else {
        $('#other_land_use').val(parseFloat(other_land_use).toFixed(2));
    }
    //var cultivable_land_in_ha = $("#cultivable_land_in_ha").val();
    var net_sown_area = $("#net_sown_area").val();
    var net_irrigated_area = $("#net_irrigated_area").val();
    var total_water_efficient = $("#total_water_efficient").val();


    if (parseFloat(net_sown_area) > parseFloat(cultivable_land_in_ha)) {
        alert("Net Sown area should be less than or equal to Cultivable Land (Excluding Fallow Land)");
        $("#net_sown_area").val("");
    }
    if (parseFloat(net_irrigated_area) > parseFloat(cultivable_land_in_ha)) {
        alert("Net Irrigated area should be less than or equal to Cultivable Land (Excluding Fallow Land)");
        $("#net_irrigated_area").val('');
    }
    //if (parseFloat(total_water_efficient) > parseFloat(cultivable_land_in_ha)) {
        //alert("Total Water Efficient Practices (Existing) should be less than or equal to Cultivable Land (Excluding Fallow Land)");
        //$("#total_water_efficient").focus();
    //}

}

function TotalCroppedArea() {

    var irrigated_area_in_kharif = $('#irrigated_area_in_kharif').val();
    var irrigated_area_in_rabi = $('#irrigated_area_in_rabi').val();
    var irrigated_area_in_summer = $('#irrigated_area_in_summer').val();

    var un_irrigated_area_in_kharif = $('#un_irrigated_area_in_kharif').val();
    var un_irrigated_area_in_rabi = $('#un_irrigated_area_in_rabi').val();
    var un_irrigated_area_in_summer = $('#un_irrigated_area_in_summer').val();

    var total_cropped_area = 0;
    var total_irrigated_area = 0;
    var total_un_irrigated_area = 0;

    if (irrigated_area_in_kharif == "") {
        irrigated_area_in_kharif = 0;
    }
    if (irrigated_area_in_rabi == "") {
        irrigated_area_in_rabi = 0;
    }
    if (irrigated_area_in_summer == "") {
        irrigated_area_in_summer = 0;
    }
    if (un_irrigated_area_in_kharif == "") {

        un_irrigated_area_in_kharif = 0;

    }
    if (un_irrigated_area_in_rabi == "") {

        un_irrigated_area_in_rabi = 0;

    }
    if (un_irrigated_area_in_summer == "") {

        un_irrigated_area_in_summer = 0;
    }



    total_irrigated_area = parseFloat(irrigated_area_in_kharif) + parseFloat(irrigated_area_in_rabi) + parseFloat(irrigated_area_in_summer);
    $('#total_irrigated_area').val(parseFloat(total_irrigated_area).toFixed(2));

    total_un_irrigated_area = parseFloat(un_irrigated_area_in_kharif) + parseFloat(un_irrigated_area_in_rabi) + parseFloat(un_irrigated_area_in_summer);
    $('#total_un_irrigated_area').val(parseFloat(total_un_irrigated_area).toFixed(2));

    total_cropped_area = parseFloat(total_irrigated_area) + parseFloat(total_un_irrigated_area);
    $('#total_cropped_area').val(parseFloat(total_cropped_area).toFixed(2));
}

function showOtherIrri() {
    var otherName = $('#otherIrrigation_Name').val();

    if (otherName != "") {
        $('#otherirrigation').show();
    } else {
        $('#otherirrigation').val("");
        $('#otherirrigation').hide();
        TotalSurface();
    }
}

function TotalSurface() {

    var canal = $('#irrigation_type_canal').val();
    var tanks = $('#irrigation_type_tanks').val();
    // var otherIrri = $('#otherirrigation').val();

    var totalSurface = 0;
    if (canal == "") {
        canal = 0;
    }
    if (tanks == "") {
        tanks = 0;
    }
    //if (otherIrri == "") {
    //    otherIrri = 0;
    //}

    totalSurface = parseFloat(canal) + parseFloat(tanks);
    $('#totalSurfaceWater').val(totalSurface);
    //var groundLevel = $('#totalGround').val();
    //if (groundLevel == "") {
    //    groundLevel = 0;
    //}
    //var GrossTotalIrrigationType = parseFloat(totalSurface) + parseFloat(groundLevel);
    //$('#totalIrrigationtype').val(GrossTotalIrrigationType);
}

function TotalLifting() {
    var nonEnergised = $('#non_energised').val();
    var dieselPump = $('#diesel_pumps').val();
    //var electricPump = $('#electric_pump').val();
    var centrifugalPump = $('#centrifugal_pumps').val();
    var submersiblePump = $('#submersible_pumps').val();
    var solarPump = $('#solar_pumps').val();

    var totalvaluePump = 0;
    if (nonEnergised == "") {
        nonEnergised = 0;
    }
    if (dieselPump == "") {
        dieselPump = 0;
    }
    //if (electricPump == "") {
    //    electricPump = 0;
    //}
    if (centrifugalPump == "") {
        centrifugalPump = 0;
    }
    if (submersiblePump == "") {
        submersiblePump = 0;
    }
    if (solarPump == "") {
        solarPump = 0;
    }
    var total_electric_pumps = parseFloat(centrifugalPump) + parseFloat(submersiblePump);
    totalvaluePump = parseFloat(nonEnergised) + parseFloat(dieselPump) + parseFloat(centrifugalPump) + parseFloat(submersiblePump) + parseFloat(solarPump);
    $('#total_water_lifting_devices').val(totalvaluePump);
    $('#total_electric_pumps').val(total_electric_pumps);
}
function ShowOtherNumeric() {

    var otherName = $('#otherName').val();

    if (otherName != "") {
        $('#otherNumeric').show();

    } else {
        $('#otherNumeric').val("");
        $('#otherNumeric').hide();

        totalWell();
    }
}
function ShowLiveOtherNumeric() {

    var otherName = $('#livestockOtherName').val();

    if (otherName != "") {
        $('#no_of_others_or_general').show();

    } else {
        $('#no_of_others_or_general').val("");
        $('#no_of_others_or_general').hide();

        Total_Livestock_fun();
    }
}
function IrrigationGross() {

    var tol_irrig = 0;
    var sprinkler = $('#area_under_sprinkler_irrigation').val();
    var drip = $('#area_under_drip_irrigation').val();
    var grossCropped = $('#total_cropped_area').val();
    if (sprinkler == "") {

        sprinkler = 0;
    }

    if (drip == "") {

        drip = 0;
    }

    tol_irrig = parseFloat(sprinkler) + parseFloat(drip);


    if (tol_irrig > grossCropped) {
        alert('Irrigation section total should not be greater than Gross Cropped Area');
    } else {

        $('#IrrigationGross').val(tol_irrig);
    }
}

function ShowOtherIrrigation() {

    var otherName = $('#otherIrrigationName').val();

    if (otherName != "") {
        $('#other_irrigation').show();
    } else {
        $('#other_irrigation').val("");
        $('#other_irrigation').hide();
        IrrigationGross();

    }

}
function totalWell() {

    var dugWell = $('#dug_well_existing').val();
    var boreWell = $('#bore_well_existing').val();
    var tubeWell = $('#tube_well_existing').val();
    var dugCumBoreWell = $('#dug_cum_bore_wells_existing').val();
    //var other = $('#other2').val();
    var totalvalueWells = 0;
    if (dugWell == "") {
        dugWell = 0;
    }
    if (boreWell == "") {
        boreWell = 0;
    }
    if (tubeWell == "") {
        tubeWell = 0;
    }
    if (dugCumBoreWell == "") {
        dugCumBoreWell = 0;
    }
    //if (other == "") {
    //    other = 0;
    //}
    totalvalueWells = parseFloat(dugWell) + parseFloat(boreWell) + parseFloat(tubeWell) + parseFloat(dugCumBoreWell);
    $('#totalWells').val(parseFloat(totalvalueWells).toFixed(2));
}
function TotalValidation() {

    var sc = $('#no_of_sc').val();
    var st = $('#no_of_st').val();
    var obc = $('#no_of_obc').val();
    var gen = $('#no_of_general').val();
    var totalPopulation = $('#tol_population').val();
    var totalCasteSec = 0;
    if (sc == "") {
        sc = 0;
    }
    if (st == "") {
        st = 0;
    }
    if (obc == "") {
        obc = 0;
    }
    if (gen == "") {
        gen = 0;
    }


    totalCasteSec = parseInt(sc) + parseInt(st) + parseInt(obc) + parseInt(gen);
    var Genral_Value = totalPopulation - (parseInt(sc) + parseInt(st) + parseInt(obc));
    $('#no_of_general').val(Genral_Value);
    $("#totalCaste").val(totalCasteSec);
    //if (totalCasteSec > totalPopulation) {
    //    alert('The total of the filled values in the categories section should equal the total population.');
    //} else {
    //    $("#totalCaste").val(totalCasteSec);
    //}
}



function TotalGrossArea() {

    var totGrosssArea = $('#totIrrigated').val();
    var nonIrri = $('#non_irrigated_area').val();


    var totalCropped = 0;

    if (totGrosssArea == "") {
        totGrosssArea = 0;
    }
    if (nonIrri == "") {
        nonIrri = 0;
    }



    totalCropped = parseFloat(totGrosssArea) + parseFloat(nonIrri);
    $('#total_cropped_area').val(totalCropped);
}


function TotalGround() {


    var dugWells = $('#dug_wells').val();
    var boreWells = $('#dug_cum_bore_wells').val();
    var totalGround = 0;
    var surfaceLevel = 0;
    if (dugWells == "") {
        dugWells = 0;
    }
    if (boreWells == "") {
        boreWells = 0;
    }

    totalGround = parseFloat(dugWells) + parseFloat(boreWells);


    $('#totalGround').val(parseFloat(totalGround).toFixed(2));
    surfaceLevel = $('#totalSurfaceWater').val();

    if (surfaceLevel == "") {
        surfaceLevel = 0;
    }
    var GrossTotalIrrigationType = parseFloat(totalGround) + parseFloat(surfaceLevel);
    $('#totalIrrigationtype').val(parseFloat(GrossTotalIrrigationType).toFixed(2));

}

//function Total_Livestock_fun() {

//    var livestock_population = 0;
//    var no_of_cows = $('#no_of_cows').val();
//    var no_of_bullocks = $('#no_of_bullocks').val();
//    var no_of_buffalos = $('#no_of_buffalos').val();
//    var no_of_sheeps_goats = $('#no_of_sheeps_goats').val();
//    var no_of_others_or_general = $('#no_of_others_or_general').val();

//    if (no_of_cows == "") {

//        no_of_cows = 0;
//    }
//    if (no_of_bullocks == "") {

//        no_of_bullocks = 0;
//    }
//    if (no_of_buffalos == "") {

//        no_of_buffalos = 0;
//    }
//    if (no_of_sheeps_goats == "") {

//        no_of_sheeps_goats = 0;
//    }
//    if (no_of_others_or_general == "") {

//        no_of_others_or_general = 0;
//    }

//    livestock_population = parseFloat(no_of_cows) + parseFloat(no_of_bullocks) + parseFloat(no_of_buffalos) + parseFloat(no_of_sheeps_goats) + parseFloat(no_of_others_or_general);
//    $('#livestock_population').val(livestock_population);


//}


function abhy_Social_Monitoring_getting_data() {

    var obj = {};
    obj.state = State;
    obj.district = Dist;
    obj.block = Block;
    obj.grampanchayat = Gram;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/GPlevel/abhy_Social_Monitoring_getting_data",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            $('#alert_waiting').hide();
            var mom_li = '';
            var photo_li = '';
            $('#MOM_images_list').html(mom_li);
            $('#Photograph_images_list').html(photo_li);
            var a = 0;
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            let tr = "";
            $('#No_Social_Monitoring_Count').text(data.length);
            if (data.length != 0) {


                //    $('#MOM_images_list').html(mom_li);
                //   $('#Photograph_images_list').html(photo_li);

                for (var i = 0; i < data.length; i++) {


                    if (data[i].minutesofmeeting != null && data[i].minutesofmeeting != "") {

                        var ImageName = data[i].minutesofmeeting.split('ataljalimages/');
                        var ImageName111 = data[i].minutesofmeeting.split('Ataljalimages/');
                        var ImageName11 = data[i].minutesofmeeting.split('attachments/');
                        if (ImageName.length == 2) {
                            var path = data[i].minutesofmeeting;
                            mom_li = '<label><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName[1] + '</a></label>';
                        }
                        else {
                            if (ImageName111.length == 2) {
                                var path = data[i].minutesofmeeting;
                                mom_li = '<label><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName111[1] + '</a></label>';
                            } else if (ImageName11.length == 2) {
                                var path = data[i].minutesofmeeting;
                                mom_li = '<label><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName11[1] + '</a></label>';
                            }
                        }


                    }



                    if (data[i].image != null && data[i].image != "") {

                        var ImageName = data[i].image.split('ataljalimages/');
                        var ImageName11 = data[i].image.split('attachments/');
                        var ImageName111 = data[i].image.split('Ataljalimages/');
                        if (ImageName.length == 2) {
                            var path = data[i].image;
                            photo_li = '<label><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName[1] + '</a></label>';
                        }
                        else {
                            if (ImageName11.length == 2) {
                                var path = data[i].image;
                                photo_li = '<label><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName11[1] + '</a></label>';
                            } else if (ImageName111.length == 2) {
                                var path = data[i].image;
                                photo_li = '<label><a  onClick="Geotaging_image(\'' + path + '\')">' + ImageName111[1] + '</a></label>';
                            }
                        }


                    }


                    a += 1
                    tr += '<tr><td>' + (a) + '</td><td>' + data[i].date + '</td><td>' + data[i].location + '</td><td>' + data[i].latitude + '</td><td>' + data[i].longitude + '</td><td>' + data[i].numberofattendees + '</td><td>' + data[i].male + '</td><td> ' + data[i].female + '</td><td>' + data[i].others + '</td><td>' + data[i].event1 + '</td><td>' + mom_li + '</td><td> ' + photo_li + '</td><td><button type="button" class="btn btn-danger" onclick="deletesocialmanagement_list(' + data[i].id + ')">Delete</button></td></tr>';



                }

                $('#MOM_images_list').html(mom_li);
                $('#Photograph_images_list').html(photo_li);



            }
            else {
                tr += '<tr><td colspan="13"  style="text-align:center;">No Data</td></tr>'
            }
            if (tr == "") {
                tr += '<tr><td colspan="13" style="text-align:center;">No Data</td></tr>';
            }

            $("#Socailmanagemet_table").html(tr);
        }
    });
}
function deletesocialmanagement_list(id) {


    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/GPlevel/deletesocialmanagement_list',

        data: "{'socialmanagement_list_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Deleted Successfully" && response != "Not Deleted") {
                window.location = "/Error/DefaultError";
            }
            else {

                abhy_Social_Monitoring_getting_data();
            }
        }
    });
}

// ADD Textbox for village name

function AddVillage() {

    var html = '';
    html += '<tr><td><span id=""><input class="VillageName form-control alpha" id="VillageName" name = "VillageName" type=text placeholder="Enter Village Name" onchange = "village_name_validate()" /></span></td>';
    html += '<td><a href="" onclick="return Dtlvillage(this)" class="Village_remove_field">Remove</a></td></tr>';
    $('.villagetable > thead > tr').eq(0).after(html);
}

function Dtlvillage(_this) {
    $(_this).closest('tr').remove();
    return false;
}

///////////////Abhijeet code for Livestock other
//var cl = 0;

function AddLivestockOther() {


    var html = '<tr class = "remove_tr"><td id = "hide_livestockName">';
    html += '<select id = "selectNow" class="livestockOtherName form-control ddControl" onchange = "select_livestockName(this)" name = "livestockpopulation" required="required">';
    html += '<option value = "" > Select Livestock </option>';
    html += '<option value="Cows">Cows</option>';
    html += '<option value="Buffalos">Buffalos</option>';
    html += '<option value="Sheep">Sheep</option>';
    html += '<option value="Goats">Goats</option>';
    html += '<option value="Mule">Mule</option>';
    html += '<option value="Donkey">Donkey</option>';
    html += '<option value="Camel">Camel</option>';
    html += '<option value="Pig">Pig</option>';
    html += '<option value="Dog">Dog</option>';
    html += '<option value="Yak">Yak</option>';
    html += '<option value="Rabbit">Rabbit</option>';
    html += '<option value="Elephant">Elephant</option>';
    html += '<option value="Poultry">Poultry</option>';
    html += '<option value="ot">Others (Pl. Specify)</option>';
    html += '</select ></td>';
    html += '<td id="hide_livestockName2"><input id="livestock_dropdownd" onchange="livestock_validate()" class="livestockOtherName livestockOther form-control alpha" name="livestockpopulation" type=text placeholder="Other input"/></td>';
    html += '<td><span id=""><input class="livestocknumericvalue form-control decimal" maxlength="5" name = "livestocknumericvalue" type=text placeholder="Enter numeric value"  /></span></td>';
    html += '<td><a href="" onclick="return Deleteqry(this)" class="livestock_remove_field">Remove</a></td></tr>';

    $('.Livestocktable > thead > tr').eq(0).after(html);
    $("#hide_livestockName2").hide();

}

var validls = 1;
function validatelivestockadd() {
    $($('.Livestocktable')).each(function () {

        validls = 1;
        var td = $(this).find('tr')
        td.each(function () {
            var aa = $(this).find('select[name="livestockpopulation"]').val();
            if (aa != undefined) {
                if (aa == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validls = 0;
                    return false;
                } else {
                    validls = 1;
                }

            }
            if (aa == "ot") {
                var bb = $(this).find('input[name="livestockpopulation"]').val();
                if (bb == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validls = 0;
                    return false;
                } else {
                    validls = 1;
                }
            }
            var aa1 = $(this).find('input[name=livestocknumericvalue]').val();
            if (aa1 != undefined) {
                if (aa1 == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validls = 0;
                    return false;
                } else {
                    validls = 1;
                }

            }
        });

    });
    if (validls == 1) {
        AddLivestockOther();
    }

}


function select_livestockName(livestockOtherName) {

    selectedValueLs = livestockOtherName.value;
    if (selectedValueLs == "ot") {

        $("#hide_livestockName2").show();
        $('#hide_livestockName').hide();
    }
}



function Deleteqry(_this) {
    
    $(_this).closest('tr').remove();
    return false;
}

function DeleteWaterEff(_this) {

    $(_this).closest('tr').remove();
    watereffcount--;
    //if (watereffcount == 1) {
    //    $("#AddwatereffNet").prop("disabled", false);
    //    $("#AddwatereffGross").prop("disabled", false);
    //}
    return false;
}

var selectedwatereff = "";
var watereffcount = 1;
//function AddwatereffGross(_this) {

//    watereffcount++;
//    var html = '<tr class = "remove_tr"><td id = "hide_watereffothername">';
//    html += '<select class="watereffothername form-control ddControl" onchange = "select_watereffothername(this)" name = "watereffothername" >';
//    html += '<option value = "" > Select </option>';
//    html += '<option value="Area under Sprinkler Irrigation (Gross)">Area under Sprinkler Irrigation (Gross)</option>';
//    html += '<option value="Area under Drip Irrigation (Gross)">Area under Drip Irrigation (Gross)</option>';
//    html += '<option value="ot">Others (ha) (Pl. Specify)</option>';
//    html += '</select ></td>';
//    html += '<td id = "hide_watereffothername2"><input id="watereff_other" onchange="watereff_validate()" class="watereffothername form-control alpha" name="watereffothername" type=text placeholder="Other input" /></td>';
//    html += '<td><span id=""><input class="watereffothernumeric form-control decimal" name = "watereffothernumeric" onkeypress ="validate(event)" type=text placeholder="Enter numeric value" /></span></td>';
//    html += '<td><a href="" onclick="return DeleteWaterEff(this)" class="remove_field">Remove</a></td></tr>';
//    $('#WaterEffTable > thead > tr').eq(0).after(html);

//    $("#hide_watereffothername2").hide();
//    $("#AddwatereffNet").prop("disabled", true);
//}

var validgross = 1;
function validateGross() {
    $($('.WaterEffTable')).each(function () {

        validgross = 1;
        var td = $(this).find('tr')
        td.each(function () {
            var aa = $(this).find('select[name="watereffothername"]').val();
            if (aa != undefined) {
                if (aa == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validgross = 0;
                    return false;
                } else {
                    validgross = 1;
                }

            }
            if (aa == "ot") {
                var bb = $(this).find('input[name="watereffothername"]').val();
                if (bb == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validgross = 0;
                    return false;
                } else {
                    validgross = 1;
                }
            }
            var aa1 = $(this).find('input[name=watereffothernumeric]').val();
            if (aa1 != undefined) {
                if (aa1 == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validgross = 0;
                    return false;
                } else {
                    validgross = 1;
                }

            }
        });

    });
    if (validgross == 1) {
        AddwatereffGross(this);
    }
}

function AddwatereffNet(_this) {

    watereffcount++;
    var html = '<tr class = "remove_tr"><td id = "hide_watereffothername">';
    html += '<select class="watereffothername form-control ddControl" onchange = "select_watereffothername(this)" name = "watereffothername">';
    html += '<option value = "" > Select </option>';
    html += '<option value="Area under Sprinkler Irrigation (Net)">Area under Sprinkler Irrigation (Net)</option>';
    html += '<option value="Area under Drip Irrigation (Net)">Area under Drip Irrigation (Net)</option>';
    html += '<option value="Area under UG Pipeline (Net)">Area under UG Pipeline (Net)</option>';
    html += '<option value="ot">Others (ha) (Pl. Specify)</option>';
    html += '</select ></td>';
    html += '<td id = "hide_watereffothername2"><input id="watereff_other" onchange="watereff_validate()" class="watereffothername form-control alpha" name="watereffothername" type=text placeholder="Other input" /></td>';
    html += '<td><span id=""><input class="watereffothernumeric form-control decimal" name = "watereffothernumeric" onkeypress ="validate(event)" type=text placeholder="Enter numeric value" /></span></td>';
    html += '<td><a href="" onclick="return DeleteWaterEff(this)" class="remove_field">Remove</a></td></tr>';
    $('#WaterEffTable > thead > tr').eq(0).after(html);


    $("#hide_watereffothername2").hide();
    /*$("#AddwatereffGross").prop("disabled", true);*/

}


var validnet = 1;
function validateNet() {
    $($('.WaterEffTable')).each(function () {

        validnet = 1;
        var td = $(this).find('tr')
        td.each(function () {
            var aa = $(this).find('select[name="watereffothername"]').val();
            if (aa != undefined) {
                if (aa == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validnet = 0;
                    return false;
                } else {
                    validnet = 1;
                }

            }
            if (aa == "ot") {
                var bb = $(this).find('input[name="watereffothername"]').val();
                if (bb == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validnet = 0;
                    return false;
                } else {
                    validnet = 1;
                }
            }
            var aa1 = $(this).find('input[name=watereffothernumeric]').val();
            if (aa1 != undefined) {
                if (aa1 == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validnet = 0;
                    return false;
                } else {
                    validnet = 1;
                }

            }
        });

    });
    if (validnet == 1) {
        AddwatereffNet(this);
    }
}
function select_watereffothername(watereffothername) {

    selectedwatereff = watereffothername.value;
    if (selectedwatereff == "ot") {
        $("#hide_watereffothername2").show();

        $('#hide_watereffothername').hide();

    }
}

function GroundWaterAdd(_this) {

    var html = '<tr class = "remove_tr"><td id = "hide_OtherGroundWaterName">';
    html += '<select class="OtherGroundWaterName form-control ddControl" onchange = "select_OtherGroundWaterName(this)" name = "OtherGroundWaterName" >';
    html += '<option value = "" > Select </option>';
    html += '<option value="Dug Wells">Dug Wells</option>';
    html += '<option value="Bore Wells">Bore Wells</option>';
    html += '<option value="Tube Wellss">Tube Wells</option>';
    html += '<option value="Dug-Cum-Bore Wells">Dug-Cum-Bore Wells</option>';
    html += '<option value="ot">Others (Pl. Specify)</option>';
    html += '</select ></td>';
    html += '<td id = "hide_OtherGroundWaterName2"><input id="existing_other" onchange="existing_validate()" class="OtherGroundWaterName form-control alpha" name="OtherGroundWaterName" type=text placeholder="Other input" /></td>';
    html += '<td><span id=""><input class="OtherGroundWaterNumeric form-control decimal" name = "OtherGroundWaterNumeric" maxlength="4" type=text placeholder="Enter numeric value" /></span></td>';
    html += '<td><a href="" onclick="return DeleteGroundWater(this)" class="remove_field">Remove</a></td></tr>';
    $('#GroundWaterTable > thead > tr').eq(0).after(html);

    $("#hide_OtherGroundWaterName2").hide();
    //var html = '<tr><td></td><td>';
    //html += '<input id="other" class="OtherGroundWaterName form-control" name="OtherGroundWaterName" type=text placeholder="Other input" /></td>';
    //html += '<td><input id = "other2" class="OtherGroundWaterNumeric form-control" name = "OtherGroundWaterNumeric" hidden type = text placeholder = "Enter numeric value" /></td>'
    //html += '<td><a href="" onclick="return DeleteGroundWater(this)" class="remove_field">Remove</a></td> </tr>';

    //$('#GroundWaterTable > thead > tr').eq(0).after(html);
}
var validex = 1;
function validateExGroundWater() {

    $($('.GroundWaterTable')).each(function () {

        validex = 1;
        var td = $(this).find('tr')
        td.each(function () {
            var aa = $(this).find('select[name="OtherGroundWaterName"]').val();
            if (aa != undefined) {
                if (aa == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validex = 0;
                    return false;
                } else {
                    validex = 1;
                }

            }
            if (aa == "ot") {
                var bb = $(this).find('input[name="OtherGroundWaterName"]').val();
                if (bb == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validex = 0;
                    return false;
                } else {
                    validex = 1;
                }
            }
            var aa1 = $(this).find('input[name=OtherGroundWaterNumeric]').val();
            if (aa1 != undefined) {
                if (aa1 == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validex = 0;
                    return false;
                } else {
                    validex = 1;
                }

            }
        });
        //GroundWaterAdd(this);
    });
    if (validex == 1) {
        GroundWaterAdd(this);
    }

}


function select_OtherGroundWaterName(OtherGroundWaterName) {

    var selectedValue = OtherGroundWaterName.value;
    if (selectedValue == "ot") {
        $("#hide_OtherGroundWaterName2").show();

        $('#hide_OtherGroundWaterName').hide();
    }
}
function DeleteGroundWater(_this) {
    $(_this).closest('tr').remove();
    return false;
}


function IrriGroundWaterAdd(_this) {

    var html = '<tr class = "remove_tr"><td id = "hide_IrrGroundWaterName">';
    html += '<select onchange = "select_IrrGroundWaterName(this)" class="IrrGroundWaterName form-control ddControl" name = "IrrGroundWaterName" >';
    html += '<option value = "" > Select </option>';
    html += '<option value="Dug/Dug-Cum-Bore Wells">Dug/Dug-Cum-Bore Well</option>';
    html += '<option value="Bore Wells/Tube Wells">Bore Wells/Tube Wells</option>';
    html += '<option value="ot">Others (Pl. Specify)</option>';
    html += '</select ></td>';
    html += '<td id = "hide_IrrGroundWaterName2"><input id="ground_other" id="surface_other" onchange="ground_validate()" class="IrrGroundWaterName form-control alpha" name="IrrGroundWaterName" type=text placeholder="Other input"/></td>';
    html += '<td><span id=""><input class="IrrGroundWaterNumeric form-control decimal" name = "IrrGroundWaterNumeric" onkeypress ="validate(event)" type=text placeholder="Enter numeric value" /></span></td>';
    html += '<td><a href="" onclick="return DeleteIrriGroundWater(this)" class="remove_field">Remove</a></td></tr>';
    $('#IrriGroundWaterTable > thead > tr').eq(0).after(html);

    $("#hide_IrrGroundWaterName2").hide();
    //var html = '<tr><td></td><td>';
    //html += '<input id="other" class="IrrGroundWaterName form-control" name="IrrGroundWaterName" type=text placeholder="Other input" /></td>';
    //html += '<td><input id = "other2" class="IrrGroundWaterNumeric form-control" name = "IrrGroundWaterNumeric" hidden type = text placeholder = "Enter numeric value" /></td>'
    //html += '<td><a href="" onclick="return DeleteIrriGroundWater(this)" class="remove_field">Remove</a></td> </tr>';

    //$('#IrriGroundWaterTable > thead > tr').eq(2).after(html);
}

var validgr = 1;
function validateIrriGround() {
    $($('.IrriGroundWaterTable')).each(function () {

        validgr = 1;
        var td = $(this).find('tr')
        td.each(function () {
            var aa = $(this).find('select[name="IrrGroundWaterName"]').val();
            if (aa != undefined) {
                if (aa == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validgr = 0;
                    return false;
                } else {
                    validgr = 1;
                }

            }
            if (aa == "ot") {
                var bb = $(this).find('input[name="IrrGroundWaterName"]').val();
                if (bb == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validgr = 0;
                    return false;
                } else {
                    validgr = 1;
                }
            }
            var aa1 = $(this).find('input[name=IrrGroundWaterNumeric]').val();
            if (aa1 != undefined) {
                if (aa1 == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validgr = 0;
                    return false;
                } else {
                    validgr = 1;
                }

            }
        });
        //GroundWaterAdd(this);
    });
    if (validgr == 1) {
        IrriGroundWaterAdd(this);
    }

}


function select_IrrGroundWaterName(IrrGroundWaterName) {

    var selectedValue = IrrGroundWaterName.value;
    if (selectedValue == "ot") {
        $("#hide_IrrGroundWaterName2").show();

        $('#hide_IrrGroundWaterName').hide();
    }
}
function DeleteIrriGroundWater(_this) {
    $(_this).closest('tr').remove();
    return false;
}

//var cs = 0;

function IrriSurfaceWaterAdd(_this) {

    var html = '<tr class = "remove_tr"><td id = "hide_IrrSurOtherName">';
    html += '<select class="IrrSurOtherName form-control ddControl" onchange = "select_IrrSurOtherName(this)" name = "IrrSurOtherName" >';
    html += '<option value = "" > Select </option>';
    html += '<option value="Canal (Gross)">Canal (Gross)</option>';
    html += '<option value="Tanks (Gross)">Tanks (Gross)</option>';
    html += '<option value="ot">Others (Pl. Specify)</option>';
    html += '</select ></td>';
    html += '<td id = "hide_IrrSurOtherName2"><input id="other" class="IrrSurOtherName form-control" name="IrrSurOtherName" type=text placeholder="Other input" onchange="surface_validate()" /></td>';
    html += '<td><span id=""><input class="IrrSurOtherNumeric form-control decimal" name = "IrrSurOtherNumeric" onkeypress ="validate(event)" type=text placeholder="Enter numeric value" /></span></td>';
    html += '<td><a href="" onclick="return DeleteIrriSurfaceWater(this)" class="remove_field">Remove</a></td></tr>';
    $('#irrisurftable > thead > tr').eq(0).after(html);

    $("#hide_IrrSurOtherName2").hide();

}

var validsr = 1;
function validateIrriSurface() {
    $($('.irrisurftable')).each(function () {

        validsr = 1;
        var td = $(this).find('tr')
        td.each(function () {
            var aa = $(this).find('select[name="IrrSurOtherName"]').val();
            if (aa != undefined) {
                if (aa == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validsr = 0;
                    return false;
                } else {
                    validsr = 1;
                }

            }
            if (aa == "ot") {
                var bb = $(this).find('input[name="IrrSurOtherName"]').val();
                if (bb == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validsr = 0;
                    return false;
                } else {
                    validsr = 1;
                }
            }
            var aa1 = $(this).find('input[name=IrrSurOtherNumeric]').val();
            if (aa1 != undefined) {
                if (aa1 == "") {
                    alert("Before adding the second row, first fill in the information in the first row or remove it.");
                    validsr = 0;
                    return false;
                } else {
                    validsr = 1;
                }

            }
        });
        //GroundWaterAdd(this);
    });
    if (validsr == 1) {
        IrriSurfaceWaterAdd(this);
    }

}



function select_IrrSurOtherName(IrrSurOtherName) {
    var selectedValue = IrrSurOtherName.value;
    if (selectedValue == "ot") {
        $("#hide_IrrSurOtherName2").show();

        $('#hide_IrrSurOtherName').hide();

    }
}


function DeleteIrriSurfaceWater(_this) {
    $(_this).closest('tr').remove();
    return false;
}

//************ Validation for other input*************

function livestock_validate() {

    var LiveStocknameControl = document.getElementsByName("livestockpopulation");
    var LiveStockName = [];
    var i = 0;
    for (var i = 0; i < LiveStocknameControl.length; i++) {
        var k = LiveStocknameControl[i].value;
        if (k != "") {
            LiveStockName.push(k);
        }
    }
    // Code For Remove "ot"
    var valuels = "ot"
    LiveStockName = LiveStockName.filter(item => item !== valuels);
    LiveStockName1 = LiveStockName.toLocaleString().toLowerCase().split(',');
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = LiveStockName1.some((element, index) => {
        return LiveStockName1.indexOf(element) !== index
    });

    if (resultToReturn) {
        alert('Already exist');
        $('#livestock_dropdownd').val("");
    }
}


function village_name_validate() {

    var VillageNameController = document.getElementsByName("VillageName");
    var village_name = [];
    for (var i = 0; i < VillageNameController.length; i++) {
        var n = VillageNameController[i].value;
        if (n != "") {
            village_name.push(n);
        }
    }

    village_name1 = village_name.toLocaleString().toLowerCase().split(',');
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = village_name1.some((element, index) => {
        return village_name1.indexOf(element) !== index
    });

    if (resultToReturn) {
        alert('Already exist');
        $('#VillageName').val("");
    }
}



function surface_validate() {

    var IrrSurOtherName = document.getElementsByName("IrrSurOtherName");
    var IrrSurOtherNames = [];
    for (var i = 0; i < IrrSurOtherName.length; i++) {
        var k = IrrSurOtherName[i].value;
        if (k != "") {
            IrrSurOtherNames.push(k);
        }
    }
    var valuesr = "ot"
    IrrSurOtherNames = IrrSurOtherNames.filter(item => item !== valuesr)

    IrrSurOtherNames1 = IrrSurOtherNames.toLocaleString().toLowerCase().split(',');
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = IrrSurOtherNames1.some((element, index) => {
        return IrrSurOtherNames1.indexOf(element) !== index
    });

    if (resultToReturn) {
        alert('Already exist');
        $('#surface_other').val("");
    }
}

function ground_validate() {
    var IrrGroundWaterName = document.getElementsByName("IrrGroundWaterName");
    var IrrGroundWaterNames = [];

    for (var i = 0; i < IrrGroundWaterName.length; i++) {
        var k = IrrGroundWaterName[i].value;
        if (k != "") {
            var n = IrrGroundWaterName[i].value;
            IrrGroundWaterNames.push(k);
        }
    }
    var valuegr = "ot"
    IrrGroundWaterNames = IrrGroundWaterNames.filter(item => item !== valuegr)

    IrrGroundWaterNames1 = IrrGroundWaterNames.toLocaleString().toLowerCase().split(',');
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = IrrGroundWaterNames1.some((element, index) => {
        return IrrGroundWaterNames1.indexOf(element) !== index
    });

    if (resultToReturn) {
        alert('Already exist');
        $('#ground_other').val("");
    }
}

function existing_validate() {
    var groundwaterothername = document.getElementsByName("OtherGroundWaterName");
    var groundwaterothernames = [];

    for (var i = 0; i < groundwaterothername.length; i++) {
        var k = groundwaterothername[i].value;
        if (k != "") {
            var n = groundwaterothername[i].value;
            groundwaterothernames.push(k);
        }
    }
    var valuegro = "ot"
    groundwaterothernames = groundwaterothernames.filter(item => item !== valuegro)

    groundwaterothernames1 = groundwaterothernames.toLocaleString().toLowerCase().split(',');
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = groundwaterothernames1.some((element, index) => {
        return groundwaterothernames1.indexOf(element) !== index
    });

    if (resultToReturn) {
        alert('Already exist');
        $('#existing_other').val("");
    }
}

function watereff_validate() {
    var watereffothername = document.getElementsByName("watereffothername");
    var watereffothernames = [];

    for (var i = 0; i < watereffothername.length; i++) {
        var k = watereffothername[i].value;
        if (k != "") {
            var k = watereffothername[i].value;
            watereffothernames.push(k);
        }
    }
    var valueeff = "ot"
    watereffothernames = watereffothernames.filter(item => item !== valueeff)
    watereffothernames1 = watereffothernames.toLocaleString().toLowerCase().split(',');
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = watereffothernames1.some((element, index) => {
        return watereffothernames1.indexOf(element) !== index
    });

    if (resultToReturn) {
        alert('Already exist');
        $('#watereff_other').val("");
    }
}

//function CheckImageNameLength(name) {
//    alert(name);
//    /*var val_area = '#' + name + '' + count + '';*/
//    var FileName = $('#' + name).files[0].name;
//    alert(FileName.length);
//}
