var k = 0;
function sum_of_all() {
    
    var sprinkler_convergence = $("#sprinkler_convergence").val();
    var sprinkler_incentive = $("#sprinkler_incentive").val();
    var sprinkler_financing = $("#sprinkler_financing").val();
    var sprinkler_total = $("#sprinkler_total").text();


    var drip_convergence = $("#drip_convergence").val();
    var drip_incentive = $("#drip_incentive").val();
    var drip_financing = $("#drip_financing").val();
    var drip_total = $("#drip_total").text();

    var pipeline_convergence = $("#pipeline_convergence").val();
    var pipeline_incentive = $("#pipeline_incentive").val();
    var pipeline_financing = $("#pipeline_financing").val();
    var pipeline_total = $("#pipeline_total").text();

    if (sprinkler_convergence == "") {
        sprinkler_convergence = 0;
    }
    if (sprinkler_incentive == "") {
        sprinkler_incentive = 0;
    }
    if (sprinkler_financing == "") {
        sprinkler_financing = 0;
    }
    if (drip_convergence == "") {
        drip_convergence = 0;
    }
    if (drip_incentive == "") {
        drip_incentive = 0;
    }
    if (drip_financing == "") {
        drip_financing = 0;
    }

    if (pipeline_convergence == "") {
        pipeline_convergence = 0;
    }
    if (pipeline_incentive == "") {
        pipeline_incentive = 0;
    }
    if (pipeline_financing == "") {
        pipeline_financing = 0;
    }
    sprinkler_total = parseFloat(sprinkler_convergence) + parseFloat(sprinkler_incentive) + parseFloat(sprinkler_financing);
    $("#sprinkler_total").text(parseFloat(sprinkler_total).toFixed(2));
    var total_convergence = parseFloat(sprinkler_convergence) + parseFloat(drip_convergence) + parseFloat(pipeline_convergence);
    $("#total_convergence").text(parseFloat(total_convergence).toFixed(2));


    drip_total = parseFloat(drip_convergence) + parseFloat(drip_incentive) + parseFloat(drip_financing);
    $("#drip_total").text(parseFloat(drip_total).toFixed(2));
    var total_incentive = parseFloat(sprinkler_incentive) + parseFloat(drip_incentive) + parseFloat(pipeline_incentive);
    $("#total_incentive").text(parseFloat(total_incentive).toFixed(2));

    pipeline_total = parseFloat(pipeline_convergence) + parseFloat(pipeline_incentive) + parseFloat(pipeline_financing);
    $("#pipeline_total").text(parseFloat(pipeline_total).toFixed(2));
    var total_financing = parseFloat(sprinkler_financing) + parseFloat(drip_financing) + parseFloat(pipeline_financing);
    $("#total_financing").text(parseFloat(total_financing).toFixed(2));

    var all_irrigation_total = parseFloat(sprinkler_total) + parseFloat(drip_total) + parseFloat(pipeline_total);
    $("#all_irrigation_total").text(parseFloat(all_irrigation_total).toFixed(2));
    SumTotal();
}





function get_irrigation_system() {
    
    var year = $("#year").val();
    var fy_phase = $("#fy_phase").val();
    $.ajax({
        type: "POST",
        contentType: 'application/json; chatset=utf-8',
        url: "/EfficientWater/get_irrigation_system",
        data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','fy_phase': '" + fy_phase + "'}",
        dataType: 'JSON',
        success: function (data) {
            
            if (data.length != 0) {
                if (data[0].approve == "State") {
                    $("#sprinkler_convergence").val(data[0].sprinkler_convergence);
                    $("#sprinkler_convergence").prop("disabled", true);
                    $("#sprinkler_incentive").val(data[0].sprinkler_incentive);
                    $("#sprinkler_incentive").prop("disabled", true);
                    $("#sprinkler_financing").val(data[0].sprinkler_financing);
                    $("#sprinkler_financing").prop("disabled", true);
                    $("#sprinkler_total").text(data[0].sprinkler_total);
                    $("#sprinkler_total").prop("disabled", true);
                    $("#drip_convergence").val(data[0].drip_convergence);
                    $("#drip_convergence").prop("disabled", true);
                    $("#drip_incentive").val(data[0].drip_incentive);
                    $("#drip_incentive").prop("disabled", true);
                    $("#drip_financing").val(data[0].drip_financing);
                    $("#drip_financing").prop("disabled", true);
                    $("#drip_total").text(data[0].drip_total);
                    $("#drip_total").prop("disabled", true);
                    $("#pipeline_convergence").val(data[0].pipeline_convergence);
                    $("#pipeline_convergence").prop("disabled", true);
                    $("#pipeline_incentive").val(data[0].pipeline_incentive);
                    $("#pipeline_incentive").prop("disabled", true);
                    $("#pipeline_financing").val(data[0].pipeline_financing);
                    $("#pipeline_financing").prop("disabled", true);
                    $("#pipeline_total").text(data[0].pipeline_total);
                    $("#pipeline_total").prop("disabled", true);
                    $("#total_convergence").text(data[0].total_convergence);
                    $("#total_convergence").prop("disabled", true);
                    $("#total_financing").text(data[0].total_financing);
                    $("#total_financing").prop("disabled", true);
                    $("#total_incentive").text(data[0].total_incentive);
                    $("#total_incentive").prop("disabled", true);
                    $("#all_irrigation_total").text(data[0].all_irrigation_total);
                    $("#all_irrigation_total").prop("disabled", true);
                    //$("input[type='text']").prop("disabled", true);

                    $("#tot_spr_ben").val(data[0].tot_spr_ben);
                    //$("#sc_spr_ben").val(data[0].sc_spr_ben);
                    //$("#st_spr_ben").val(data[0].st_spr_ben);
                    //$("#obc_spr_ben").val(data[0].obc_spr_ben);
                    //$("#gen_spr_ben").val(data[0].gen_spr_ben);

                    $("#tot_drip_ben").val(data[0].tot_drip_ben);
                    //$("#sc_drip_ben").val(data[0].sc_drip_ben);
                    //$("#st_drip_ben").val(data[0].st_drip_ben);
                    //$("#obc_drip_ben").val(data[0].obc_drip_ben);
                    //$("#gen_drip_ben").val(data[0].gen_drip_ben);

                    $("#tot_pipe_ben").val(data[0].tot_pipe_ben);
                    //$("#sc_pipe_ben").val(data[0].sc_pipe_ben);
                    //$("#st_pipe_ben").val(data[0].st_pipe_ben);
                    //$("#obc_pipe_ben").val(data[0].obc_pipe_ben);
                    //$("#gen_pipe_ben").val(data[0].gen_pipe_ben);

                    $("#tot_spr_ben").prop("disabled", true);
                    //$("#sc_spr_ben").prop("disabled", true);
                    //$("#st_spr_ben").prop("disabled", true);
                    //$("#obc_spr_ben").prop("disabled", true);
                    //$("#gen_spr_ben").prop("disabled", true);

                    $("#tot_drip_ben").prop("disabled", true);
                    //$("#sc_drip_ben").prop("disabled", true);
                    //$("#st_drip_ben").prop("disabled", true);
                    //$("#obc_drip_ben").prop("disabled", true);
                    //$("#gen_drip_ben").prop("disabled", true);

                    $("#tot_pipe_ben").prop("disabled", true);
                    //$("#sc_pipe_ben").prop("disabled", true);
                    //$("#st_pipe_ben").prop("disabled", true);
                    //$("#obc_pipe_ben").prop("disabled", true);
                    //$("#gen_pipe_ben").prop("disabled", true);
                    $("#hidebutton").hide();
                    $("#Submit_To_SPMU").hide();
                    
                }
                else if (data[0].approve == "Dist") {
                    $("#sprinkler_convergence").val(data[0].sprinkler_convergence);
                    $("#sprinkler_convergence").prop("disabled", true);
                    $("#sprinkler_incentive").val(data[0].sprinkler_incentive);
                    $("#sprinkler_incentive").prop("disabled", true);
                    $("#sprinkler_financing").val(data[0].sprinkler_financing);
                    $("#sprinkler_financing").prop("disabled", true);
                    $("#sprinkler_total").text(data[0].sprinkler_total);
                    $("#sprinkler_total").prop("disabled", true);
                    $("#drip_convergence").val(data[0].drip_convergence);
                    $("#drip_convergence").prop("disabled", true);
                    $("#drip_incentive").val(data[0].drip_incentive);
                    $("#drip_incentive").prop("disabled", true);
                    $("#drip_financing").val(data[0].drip_financing);
                    $("#drip_financing").prop("disabled", true);
                    $("#drip_total").text(data[0].drip_total);
                    $("#drip_total").prop("disabled", true);
                    $("#pipeline_convergence").val(data[0].pipeline_convergence);
                    $("#pipeline_convergence").prop("disabled", true);
                    $("#pipeline_incentive").val(data[0].pipeline_incentive);
                    $("#pipeline_incentive").prop("disabled", true);
                    $("#pipeline_financing").val(data[0].pipeline_financing);
                    $("#pipeline_financing").prop("disabled", true);
                    $("#pipeline_total").text(data[0].pipeline_total);
                    $("#pipeline_total").prop("disabled", true);
                    $("#total_convergence").text(data[0].total_convergence);
                    $("#total_convergence").prop("disabled", true);
                    $("#total_financing").text(data[0].total_financing);
                    $("#total_financing").prop("disabled", true);
                    $("#total_incentive").text(data[0].total_incentive);
                    $("#total_incentive").prop("disabled", true);
                    $("#all_irrigation_total").text(data[0].all_irrigation_total);
                    $("#all_irrigation_total").prop("disabled", true);
                    $("input[type='text']").prop("disabled", true);

                    $("#tot_spr_ben").val(data[0].tot_spr_ben);
                    //$("#sc_spr_ben").val(data[0].sc_spr_ben);
                    //$("#st_spr_ben").val(data[0].st_spr_ben);
                    //$("#obc_spr_ben").val(data[0].obc_spr_ben);
                    //$("#gen_spr_ben").val(data[0].gen_spr_ben);

                    $("#tot_drip_ben").val(data[0].tot_drip_ben);
                    //$("#sc_drip_ben").val(data[0].sc_drip_ben);
                    //$("#st_drip_ben").val(data[0].st_drip_ben);
                    //$("#obc_drip_ben").val(data[0].obc_drip_ben);
                    //$("#gen_drip_ben").val(data[0].gen_drip_ben);

                    $("#tot_pipe_ben").val(data[0].tot_pipe_ben);
                    //$("#sc_pipe_ben").val(data[0].sc_pipe_ben);
                    //$("#st_pipe_ben").val(data[0].st_pipe_ben);
                    //$("#obc_pipe_ben").val(data[0].obc_pipe_ben);
                    //$("#gen_pipe_ben").val(data[0].gen_pipe_ben);
                    $("#tot_spr_ben").prop("disabled", true);
                    //$("#sc_spr_ben").prop("disabled", true);
                    //$("#st_spr_ben").prop("disabled", true);
                    //$("#obc_spr_ben").prop("disabled", true);
                    //$("#gen_spr_ben").prop("disabled", true);

                    $("#tot_drip_ben").prop("disabled", true);
                    //$("#sc_drip_ben").prop("disabled", true);
                    //$("#st_drip_ben").prop("disabled", true);
                    //$("#obc_drip_ben").prop("disabled", true);
                    //$("#gen_drip_ben").prop("disabled", true);

                    $("#tot_pipe_ben").prop("disabled", true);
                    //$("#sc_pipe_ben").prop("disabled", true);
                    //$("#st_pipe_ben").prop("disabled", true);
                    //$("#obc_pipe_ben").prop("disabled", true);
                    //$("#gen_pipe_ben").prop("disabled", true);
                    $("#hidebutton").hide();
                    $("#Submit_To_SPMU").hide();
                }
                else if (data[0].approve != "State") {
                    $("#sprinkler_convergence").val(data[0].sprinkler_convergence);
                    $("#sprinkler_convergence").prop("disabled", false);
                    $("#sprinkler_incentive").val(data[0].sprinkler_incentive);
                    $("#sprinkler_incentive").prop("disabled", false);
                    $("#sprinkler_financing").val(data[0].sprinkler_financing);
                    $("#sprinkler_financing").prop("disabled", false);
                    $("#sprinkler_total").text(data[0].sprinkler_total);
                    $("#sprinkler_total").prop("disabled", false);
                    $("#drip_convergence").val(data[0].drip_convergence);
                    $("#drip_convergence").prop("disabled", false);
                    $("#drip_incentive").val(data[0].drip_incentive);
                    $("#drip_incentive").prop("disabled", false);
                    $("#drip_financing").val(data[0].drip_financing);
                    $("#drip_financing").prop("disabled", false);
                    $("#drip_total").text(data[0].drip_total);
                    $("#drip_total").prop("disabled", false);
                    $("#pipeline_convergence").val(data[0].pipeline_convergence);
                    $("#pipeline_convergence").prop("disabled", false);
                    $("#pipeline_incentive").val(data[0].pipeline_incentive);
                    $("#pipeline_incentive").prop("disabled", false);
                    $("#pipeline_financing").val(data[0].pipeline_financing);
                    $("#pipeline_financing").prop("disabled", false);
                    $("#pipeline_total").text(data[0].pipeline_total);
                    $("#pipeline_total").prop("disabled", false);
                    $("#total_convergence").text(data[0].total_convergence);
                    $("#total_convergence").prop("disabled", false);
                    $("#total_financing").text(data[0].total_financing);
                    $("#total_financing").prop("disabled", false);
                    $("#total_incentive").text(data[0].total_incentive);
                    $("#total_incentive").prop("disabled", false);
                    $("#all_irrigation_total").text(data[0].all_irrigation_total);
                    $("#all_irrigation_total").prop("disabled", false);
                    $("input[type='text']").prop("disabled", false);

                    $("#tot_spr_ben").val(data[0].tot_spr_ben);
                    //$("#sc_spr_ben").val(data[0].sc_spr_ben);
                    //$("#st_spr_ben").val(data[0].st_spr_ben);
                    //$("#obc_spr_ben").val(data[0].obc_spr_ben);
                    //$("#gen_spr_ben").val(data[0].gen_spr_ben);

                    $("#tot_drip_ben").val(data[0].tot_drip_ben);
                    //$("#sc_drip_ben").val(data[0].sc_drip_ben);
                    //$("#st_drip_ben").val(data[0].st_drip_ben);
                    //$("#obc_drip_ben").val(data[0].obc_drip_ben);
                    //$("#gen_drip_ben").val(data[0].gen_drip_ben);

                    $("#tot_pipe_ben").val(data[0].tot_pipe_ben);
                    //$("#sc_pipe_ben").val(data[0].sc_pipe_ben);
                    //$("#st_pipe_ben").val(data[0].st_pipe_ben);
                    //$("#obc_pipe_ben").val(data[0].obc_pipe_ben);
                    //$("#gen_pipe_ben").val(data[0].gen_pipe_ben);

                    $("#tot_spr_ben").prop("disabled", false);
                    //$("#sc_spr_ben").prop("disabled", false);
                    //$("#st_spr_ben").prop("disabled", false);
                    //$("#obc_spr_ben").prop("disabled", false);
                    //$("#gen_spr_ben").prop("disabled", false);

                    $("#tot_drip_ben").prop("disabled", false);
                    //$("#sc_drip_ben").prop("disabled", false);
                    //$("#st_drip_ben").prop("disabled", false);
                    //$("#obc_drip_ben").prop("disabled", false);
                    //$("#gen_drip_ben").prop("disabled", false);

                    $("#tot_pipe_ben").prop("disabled", false);
                    //$("#sc_pipe_ben").prop("disabled", false);
                    //$("#st_pipe_ben").prop("disabled", false);
                    //$("#obc_pipe_ben").prop("disabled", false);
                    //$("#gen_pipe_ben").prop("disabled", false);

                    $("#hidebutton").show();
                    $("#Submit_To_SPMU").show();
                    k = 1;
                }
                else {
                    $("#sprinkler_convergence").val("");
                    $("#sprinkler_convergence").prop("disabled", false);
                    $("#sprinkler_incentive").val("");
                    $("#sprinkler_incentive").prop("disabled", false);
                    $("#sprinkler_financing").val("");
                    $("#sprinkler_financing").prop("disabled", false);
                    $("#sprinkler_total").text("");
                    $("#sprinkler_total").prop("disabled", false);
                    $("#drip_convergence").val("");
                    $("#drip_convergence").prop("disabled", false);
                    $("#drip_incentive").val("");
                    $("#drip_incentive").prop("disabled", false);
                    $("#drip_financing").val("");
                    $("#drip_financing").prop("disabled", false);
                    $("#drip_total").text("");
                    $("#drip_total").prop("disabled", false);
                    $("#pipeline_convergence").val("");
                    $("#pipeline_convergence").prop("disabled", false);
                    $("#pipeline_incentive").val("");
                    $("#pipeline_incentive").prop("disabled", false);
                    $("#pipeline_financing").val("");
                    $("#pipeline_financing").prop("disabled", false);
                    $("#pipeline_total").text("");
                    $("#pipeline_total").prop("disabled", false);
                    $("#total_convergence").text("");
                    $("#total_convergence").prop("disabled", false);
                    $("#total_financing").text("");
                    $("#total_financing").prop("disabled", false);
                    $("#total_incentive").text("");
                    $("#total_incentive").prop("disabled", false);
                    $("#all_irrigation_total").text("");
                    $("#all_irrigation_total").prop("disabled", false);
                    $("input[type='text']").prop("disabled", false);

                    $("#tot_spr_ben").val(data[0].tot_spr_ben);
                    //$("#sc_spr_ben").val(data[0].sc_spr_ben);
                    //$("#st_spr_ben").val(data[0].st_spr_ben);
                    //$("#obc_spr_ben").val(data[0].obc_spr_ben);
                    //$("#gen_spr_ben").val(data[0].gen_spr_ben);

                    $("#tot_drip_ben").val(data[0].tot_drip_ben);
                    //$("#sc_drip_ben").val(data[0].sc_drip_ben);
                    //$("#st_drip_ben").val(data[0].st_drip_ben);
                    //$("#obc_drip_ben").val(data[0].obc_drip_ben);
                    //$("#gen_drip_ben").val(data[0].gen_drip_ben);

                    $("#tot_pipe_ben").val(data[0].tot_pipe_ben);
                    //$("#sc_pipe_ben").val(data[0].sc_pipe_ben);
                    //$("#st_pipe_ben").val(data[0].st_pipe_ben);
                    //$("#obc_pipe_ben").val(data[0].obc_pipe_ben);
                    //$("#gen_pipe_ben").val(data[0].gen_pipe_ben);

                    $("#tot_spr_ben").prop("disabled", false);
                    //$("#sc_spr_ben").prop("disabled", false);
                    //$("#st_spr_ben").prop("disabled", false);
                    //$("#obc_spr_ben").prop("disabled", false);
                    //$("#gen_spr_ben").prop("disabled", false);

                    $("#tot_drip_ben").prop("disabled", false);
                    //$("#sc_drip_ben").prop("disabled", false);
                    //$("#st_drip_ben").prop("disabled", false);
                    //$("#obc_drip_ben").prop("disabled", false);
                    //$("#gen_drip_ben").prop("disabled", false);

                    $("#tot_pipe_ben").prop("disabled", false);
                    //$("#sc_pipe_ben").prop("disabled", false);
                    //$("#st_pipe_ben").prop("disabled", false);
                    //$("#obc_pipe_ben").prop("disabled", false);
                    //$("#gen_pipe_ben").prop("disabled", false);

                    $("#hidebutton").show();
                    $("#Submit_To_SPMU").show();
                    k = 1;
                }
            }
            else {
                $("#sprinkler_convergence").val("");
                $("#sprinkler_convergence").prop("disabled", false);
                $("#sprinkler_incentive").val("");
                $("#sprinkler_incentive").prop("disabled", false);
                $("#sprinkler_financing").val("");
                $("#sprinkler_financing").prop("disabled", false);
                $("#sprinkler_total").text("");
                $("#sprinkler_total").prop("disabled", false);
                $("#drip_convergence").val("");
                $("#drip_convergence").prop("disabled", false);
                $("#drip_incentive").val("");
                $("#drip_incentive").prop("disabled", false);
                $("#drip_financing").val("");
                $("#drip_financing").prop("disabled", false);
                $("#drip_total").text("");
                $("#drip_total").prop("disabled", false);
                $("#pipeline_convergence").val("");
                $("#pipeline_convergence").prop("disabled", false);
                $("#pipeline_incentive").val("");
                $("#pipeline_incentive").prop("disabled", false);
                $("#pipeline_financing").val("");
                $("#pipeline_financing").prop("disabled", false);
                $("#pipeline_total").text("");
                $("#pipeline_total").prop("disabled", false);
                $("#total_convergence").text("");
                $("#total_convergence").prop("disabled", false);
                $("#total_financing").text("");
                $("#total_financing").prop("disabled", false);
                $("#total_incentive").text("");
                $("#total_incentive").prop("disabled", false);
                $("#all_irrigation_total").text("");
                $("#all_irrigation_total").prop("disabled", false);

                $("#tot_spr_ben").val("");
                //$("#sc_spr_ben").val("");
                //$("#st_spr_ben").val("");
                //$("#obc_spr_ben").val("");
                //$("#gen_spr_ben").val("");

                $("#tot_drip_ben").val("");
                //$("#sc_drip_ben").val("");
                //$("#st_drip_ben").val("");
                //$("#obc_drip_ben").val("");
                //$("#gen_drip_ben").val("");

                $("#tot_pipe_ben").val("");
                //$("#sc_pipe_ben").val("");
                //$("#st_pipe_ben").val("");
                //$("#obc_pipe_ben").val("");
                //$("#gen_pipe_ben").val("");
                $("#tot_spr_ben").prop("disabled", false);
                //$("#sc_spr_ben").prop("disabled", false);
                //$("#st_spr_ben").prop("disabled", false);
                //$("#obc_spr_ben").prop("disabled", false);
                //$("#gen_spr_ben").prop("disabled", false);

                $("#tot_drip_ben").prop("disabled", false);
                //$("#sc_drip_ben").prop("disabled", false);
                //$("#st_drip_ben").prop("disabled", false);
                //$("#obc_drip_ben").prop("disabled", false);
                //$("#gen_drip_ben").prop("disabled", false);

                $("#tot_pipe_ben").prop("disabled", false);
                //$("#sc_pipe_ben").prop("disabled", false);
                //$("#st_pipe_ben").prop("disabled", false);
                //$("#obc_pipe_ben").prop("disabled", false);
                //$("#gen_pipe_ben").prop("disabled", false);
                //$("input[type='text']").prop("disabled", false);
                $("#hidebutton").show();
                k = 1;
            }
            SumTotal();
            get_area_with_crop_shifting();
        }
    })
}


//============

function confirm_spmu() {
    
    swal({
        title: "Are you sure to submit the information for verification?",
        text: "Check: If you are certain that all of the information you have entered is correct, click the 'OK' button. You will no longer be able to edit or modify any information before it is rejected by SPMU after that.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                Submit_To_SPMU();
            } else {

            }
        });

}

function Submit_To_SPMU() {
    var year = $("#year").val();
    var fy_phase = $("#fy_phase").val();
    /*var month = $("#month").val();*/
    if (State == "0") {
        alert("Plase select state name");
        return false;
    } else if (Dist == "0") {
        alert("Plase select district name");
        return false;
    } else if (Block == "0") {
        alert("Plase select block name");
        return false;
    } else if (Gram == "0") {
        alert("Plase select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Plase select year");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: 'application/json; chatset=utf-8',
        url: "/EfficientWater/Submit_To_SPMU",
        data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','fy_phase': '" + fy_phase + "'}",
        dataType: 'JSON',
        success: function (data) {
            
            alert(data)
            get_irrigation_system();

        }
    })
}

$("#btnFinalSave2").click(function () {
    
    var year = $("#year").val();
    var fy_phase = $("#fy_phase").val();

    if (State == "0") {
        alert("Plase select state name");
        return false;
    } else if (Dist == "0") {
        alert("Plase select district name");
        return false;
    } else if (Block == "0") {
        alert("Plase select block name");
        return false;
    } else if (Gram == "0") {
        alert("Plase select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Plase select year");
        return false;
    }

    $("#modalDialogScrollable_gp").modal("show");
});

$("#btnSubmit").click(function () {
    
    /*var month = $("#month").val();*/

    var existing_high_wcc = $("#existing_high_wcc").val();
    var replacing_low_wcc = $("#replacing_low_wcc").val();
    var hightolow_wcc = $("#hightolow_wcc").val();
    var department = $("#department").val();
    var scheme = $("#scheme").val();
    var other_scheme = $("#other_scheme").val();

    var total_ben = $("#total_ben").val();
    //var sc = $("#sc").val();
    //var st = $("#st").val();
    //var obc = $("#obc").val();
    //var gen = $("#gen").val();

    

    var year = $("#year").val();
    if (State == "0") {
        alert("Plase select state name");
        return false;
    } else if (Dist == "0") {
        alert("Plase select district name");
        return false;
    } else if (Block == "0") {
        alert("Plase select block name");
        return false;
    } else if (Gram == "0") {
        alert("Plase select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Plase select year");
        return false;
    }

    if (existing_high_wcc == "0") {
        alert("Please select name of existing high water consuming crop");
        return false;
    } else if (replacing_low_wcc == "") {
        alert("Please enter name of existing high water consuming crop");
        return false;
    } else if (hightolow_wcc == "") {
        alert("Please enter area with crop shifting");
        return false;
    } else if (department == "0") {
        alert("Please select department name");
        return false;
    }
    else if (scheme == "0") {
        alert("Please select scheme name");
        return false;
    }
    if (scheme == "Others") {
        if (other_scheme == "") {
            alert("Please enter other scheme name");
            return false;
        }
    }
    if (total_ben == "") {
        total_ben = 0;
        alert("Please Enter Total Beneficiary!")
        $("#total_ben").focus();
        return false;
    }
    //if (sc == "") {
    //    sc = 0;
    //}
    //if (st == "") {
    //    st = 0;
    //}
    //if (obc == "") {
    //    obc = 0;
    //}
    //if (gen == "") {
    //    gen = 0;
    //}

    //var total = parseInt(sc) + parseInt(st) + parseInt(obc) + parseInt(gen);
    //if (total > total_ben) {
    //    alert("Should be equal");
    //    return false;
    //}

})
$("#btnClose").click(function () {
    $("#id").val("");
    $("#existing_high_wcc").val("0");
    $("#replacing_low_wcc").val("");
    $("#hightolow_wcc").val("");
    $("#department").val("0");
    $("#scheme").val("0");
    $("#other_scheme").val("");
    $("#other_scheme").hide("");
})

function fnSuccessCropShifting(data) {
    if (data != "") {
        alert(data);
        $("#id").val("");
        $("#modalDialogScrollable_gp").modal("hide");
        $("#existing_high_wcc").val("0");
        
        $("#replacing_low_wcc").val("");
        $("#hightolow_wcc").val("");
        $("#department").val("0");
        $("#scheme").val("0");
        $("#other_scheme").hide("");
        $("#other_scheme").val("");
        $("#total_ben").val("");
        //$("#sc").val("");
        //$("#st").val("");
        //$("#obc").val("");
        //$("#gen").val("");
        get_area_with_crop_shifting();
    } else {
        alert("Some error occured.");
    }
}

function fnOnFailureCropShifting(err) {
    alert("Im from err");
}

function get_area_with_crop_shifting() {
    
    var year = $("#year").val();
    var fy_phase = $("#fy_phase").val();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/EfficientWater/get_area_with_crop_shifting',
        data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','fy_phase': '" + fy_phase + "'}",
        dataType: 'JSON',
        success: function (data) {
            
            var tr = "";
            var j = 0;
            
            var total_hightolow_wcc = 0;
            if (data.length != 0) {



                for (var i = 0; i < data.length; i++) {
                    var existing_high_wcc = data[i].existing_high_wcc;
                    var department = data[i].department;
                    var scheme = data[i].scheme;


                    if (scheme == "Others") {
                        scheme = data[i].scheme + " - " + data[i].other_scheme;
                    }
                    var total_ben = "";
                    //var sc = "";
                    //var st = "";
                    //var obc = "";
                    //var gen = "";
                    if (data[i].total_ben == null || data[i].total_ben == "NULL") {
                        total_ben = "";
                    } else {
                        total_ben = data[i].total_ben;
                    }
                    //if (data[i].sc == null || data[i].sc == "NULL") {
                    //    sc = "";
                    //} else {
                    //    sc = data[i].sc;
                    //}
                    //if (data[i].st == null || data[i].st == "NULL") {
                    //    st = "";
                    //} else {
                    //    st = data[i].st;
                    //}
                    //if (data[i].obc == null || data[i].obc == "NULL") {
                    //    obc = "";
                    //} else {
                    //    obc = data[i].obc;
                    //}
                    //if (data[i].gen == null || data[i].gen == "NULL") {
                    //    gen = "";
                    //} else {
                    //    gen = data[i].gen;
                    //}

                    total_hightolow_wcc += parseFloat(data[i].hightolow_wcc);
                    
                    if (data[i].approve == "State") {
                        $("#Submit_To_SPMU").hide();
                        tr += '<tr><td>' + (++j) + '</td>' +
                            '<td>' + existing_high_wcc + '</td >' +
                            '<td>' + data[i].replacing_low_wcc + '</td >' +
                            '<td>' + data[i].hightolow_wcc + '</td >' +
                            '<td>' + department + '</td >' +
                            '<td>' + scheme + '</td >' +
                            '<td>' + total_ben + '</td >' +
                            //'<td>' + sc + '</td >' +
                            //'<td>' + st + '</td >' +
                            //'<td>' + obc + '</td >' +
                            //'<td>' + gen + '</td >' +
                            '<td > <button class="btn btn-primary disable_btn" disabled   onclick=editCropShifting(' + data[i].id + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn disable_btn" disabled onclick="deleteCropShifting(' + data[i].id + ') "><i class="fa fa-trash"></i></button></td></tr>';
                    }
                    if (data[i].approve == "Dist") {
                        $("#Submit_To_SPMU").hide();
                       //document.getElementById("btnFinalSave2").disabled = true;
                        $("#btnFinalSave2").hide();
                        tr += '<tr><td>' + (++j) + '</td>' +
                            '<td>' + existing_high_wcc + '</td >' +
                            '<td>' + data[i].replacing_low_wcc + '</td >' +
                            '<td>' + data[i].hightolow_wcc + '</td >' +
                            '<td>' + department + '</td >' +
                            '<td>' + scheme + '</td >' +
                            '<td>' + total_ben + '</td >' +
                            //'<td>' + sc + '</td >' +
                            //'<td>' + st + '</td >' +
                            //'<td>' + obc + '</td >' +
                            //'<td>' + gen + '</td >' +
                            '<td > <button class="btn btn-primary disable_btn" disabled  onclick=editCropShifting(' + data[i].id + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn" disabled onclick="deleteCropShifting(' + data[i].id + ') "><i class="fa fa-trash"></i></button></td></tr>';
                    }
                    else {
                        k = 1;
                        tr += '<tr><td>' + (++j) + '</td>' +
                            '<td>' + existing_high_wcc + '</td >' +
                            '<td>' + data[i].replacing_low_wcc + '</td >' +
                            '<td>' + data[i].hightolow_wcc + '</td >' +
                            '<td>' + department + '</td >' +
                            '<td>' + scheme + '</td >' +
                            '<td>' + total_ben + '</td >' +
                            //'<td>' + sc + '</td >' +
                            //'<td>' + st + '</td >' +
                            //'<td>' + obc + '</td >' +
                            //'<td>' + gen + '</td >' +
                            '<td > <button class="btn btn-primary disable_btn"  onclick=editCropShifting(' + data[i].id + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger disable_btn" onclick="deleteCropShifting(' + data[i].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                    }
                }

            } else {
                tr = '<tr style="text-align:center;"><td colspan="8" style="text-align:center;">No Data</td></tr>';
            }
            tr += '<tr><td style="background-color:orange;color:#fff">Total</td><td></td><td></td><td>' + total_hightolow_wcc + '</td><td></td><td></td><td></td><td></td></tr>'
            $("#crop_shifting").html(tr);
            
            //$(".disable_btn").hide();
            get_dli4_water_saving_agriculture();
        }
    });
}

function deleteCropShifting(id) {
    if (confirm("Are you sure you want to delete this record?")) {
        $.ajax({
            type: 'POST',
            url: '/EfficientWater/delete_area_with_crop_shifting',
            data: "{'id': '" + id + "'}",
            contentType: 'application/json; chatset=utf-8',
            dataType: 'JSON',
            success: function (data) {
                if (data == 1) {
                    //alert("Data deleted successfully.");
                    get_area_with_crop_shifting();
                } else {
                    alert("Some error occured.");
                }
            }
        })
    }
    else {
        return false;
    }
}

function editCropShifting(id) {
    $.ajax({
        type: 'POST',
        url: '/EfficientWater/get_area_with_crop_shifting_byId',
        data: "{'id': '" + id + "'}",
        contentType: 'application/json; chatset=utf-8',
        dataType: 'JSON',
        success: function (data) {
            $("#id").val(data.id);
            $("#state").val(data.state);
            $("#district").val(data.district);
            $("#block").val(data.block);
            $("#gram1").val(data.gram);
            $("#year1").val(data.year);
            $("#existing_high_wcc").val(data.existing_high_wcc);
            
            $("#replacing_low_wcc").val(data.replacing_low_wcc);
            $("#hightolow_wcc").val(data.hightolow_wcc);
            $("#department").val(data.department);
            
            $("#scheme").val(data.scheme);
            if (data.scheme == "Others") {
                $("#other_scheme").show();
                $("#other_scheme").val(data.other_scheme);
            }
            var total_ben = "";
            //var sc = "";
            //var st = "";
            //var obc = "";
            //var gen = "";
            if (data.total_ben == null || data.total_ben == "NULL") {
                total_ben = "";
            } else {
                total_ben = data.total_ben;
            }
            //if (data.sc == null || data.sc == "NULL") {
            //    sc = "";
            //} else {
            //    sc = data.sc;
            //}
            //if (data.st == null || data.st == "NULL") {
            //    st = "";
            //} else {
            //    st = data.st;
            //}
            //if (data.obc == null || data.obc == "NULL") {
            //    obc = "";
            //} else {
            //    obc = data.obc;
            //}
            //if (data.gen == null || data.gen == "NULL") {
            //    gen = "";
            //} else {
            //    gen = data.gen;
            //}
            $("#total_ben").val(total_ben);
            //$("#sc").val(sc);
            //$("#st").val(st);
            //$("#obc").val(obc);
            //$("#gen").val(gen);
            $("#modalDialogScrollable_gp").modal("show");
        }
    });
}


//function SumSc() {
    
//    var sc_spr_ben = $("#sc_spr_ben").val();
//    var sc_drip_ben = $("#sc_drip_ben").val();
//    var sc_pipe_ben = $("#sc_pipe_ben").val();
//    if (sc_spr_ben == "") {
//        sc_spr_ben = 0;
//    }
//    if (sc_drip_ben == "") {
//        sc_drip_ben = 0;
//    }
//    if (sc_pipe_ben == "") {
//        sc_pipe_ben = 0;
//    }

//    var all_sc_total = parseInt(sc_spr_ben) + parseInt(sc_drip_ben) + parseInt(sc_pipe_ben);

//    $("#all_sc_total").text(all_sc_total);
//    SumSt();
//}

//function SumSt() {
//    var st_spr_ben = $("#st_spr_ben").val();
//    var st_drip_ben = $("#st_drip_ben").val();
//    var st_pipe_ben = $("#st_pipe_ben").val();
//    if (st_spr_ben == "") {
//        st_spr_ben = 0;
//    }
//    if (st_drip_ben == "") {
//        st_drip_ben = 0;
//    }
//    if (st_pipe_ben == "") {
//        st_pipe_ben = 0;
//    }

//    var all_st_total = parseInt(st_spr_ben) + parseInt(st_drip_ben) + parseInt(st_pipe_ben);

//    $("#all_st_total").text(all_st_total);
//    SumObc();
//}


//function SumObc() {
//    var obc_spr_ben = $("#obc_spr_ben").val();
//    var obc_drip_ben = $("#obc_drip_ben").val();
//    var obc_pipe_ben = $("#obc_pipe_ben").val();
//    if (obc_spr_ben == "") {
//        obc_spr_ben = 0;
//    }
//    if (obc_drip_ben == "") {
//        obc_drip_ben = 0;
//    }
//    if (obc_pipe_ben == "") {
//        obc_pipe_ben = 0;
//    }

//    var all_obc_total = parseInt(obc_spr_ben) + parseInt(obc_drip_ben) + parseInt(obc_pipe_ben);

//    $("#all_obc_total").text(all_obc_total);
//    SumGen();
//}


//function SumGen() {
//    var gen_spr_ben = $("#gen_spr_ben").val();
//    var gen_drip_ben = $("#gen_drip_ben").val();
//    var gen_pipe_ben = $("#gen_pipe_ben").val();
//    if (gen_spr_ben == "") {
//        gen_spr_ben = 0;
//    }
//    if (gen_drip_ben == "") {
//        gen_drip_ben = 0;
//    }
//    if (gen_pipe_ben == "") {
//        gen_pipe_ben = 0;
//    }

//    var all_gen_total = parseInt(gen_spr_ben) + parseInt(gen_drip_ben) + parseInt(gen_pipe_ben);

//    $("#all_gen_total").text(all_gen_total);
//    SumTotal();
//}


function SumTotal() {
    var tot_spr_ben = $("#tot_spr_ben").val();
    var tot_drip_ben = $("#tot_drip_ben").val();
    var tot_pipe_ben = $("#tot_pipe_ben").val();
    if (tot_spr_ben == "") {
        tot_spr_ben = 0;
    }
    if (tot_drip_ben == "") {
        tot_drip_ben = 0;
    }
    if (tot_pipe_ben == "") {
        tot_pipe_ben = 0;
    }

    var all_ben_total = parseInt(tot_spr_ben) + parseInt(tot_drip_ben) + parseInt(tot_pipe_ben);

    $("#all_ben_total").text(all_ben_total);
}







