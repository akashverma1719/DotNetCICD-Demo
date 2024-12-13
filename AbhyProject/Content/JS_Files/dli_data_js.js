
var StateName = "";
var officer = "";
var eemail = "";
$(document).ready(function () {

    $('.loader').hide();
    $('#gstate1').hide();
    $('#states_hide').hide();
    $('#StatesError').text('States Information is Loading.....');
    eemail = asss;

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dliverification_State',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            if (response == "NO") {
                DropDownInfo_11();
            }
            else if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            else {

                $('#StatesError').text('');
                $(".hidetheupload").attr("disabled", true);


                $('#states_hide').show();

                officer = "State";
                StateName = response;
                $('#StatName_session').text(StateName);
                $('#spnstate').hide();

                //$('#waterlevel_i_baseline').attr("readonly", "true");
                //$('#waterlevel_i_20_21').attr("readonly", "true");
                //$('#waterlevel_iv_baseline').attr("readonly", "true");
                //$('#waterlevel_iv_20_21').attr("readonly", "true");
                //$('#waterlevel_vii_baseline').attr("readonly", "true");
                //$('#waterlevel_vii_20_21').attr("readonly", "true");
                //$('#waterlevel_viii_baseline').attr("readonly", "true");
                //$('#waterlevel_viii_20_21').attr("readonly", "true");
                //$('#waterquality_i_baseline').attr("readonly", "true");
                //$('#waterquality_i_20_21').attr("readonly", "true");
                //$('#waterquality_iv_baseline').attr("readonly", "true");
                //$('#waterquality_iv_20_21').attr("readonly", "true");
                //$('#blockwise_i_baseline').attr("readonly", "true");
                //$('#blockwise_i_20_21').attr("readonly", "true");
                //$('#statewise_i_baseline').attr("readonly", "true");
                //$('#statewise_i_20_21').attr("readonly", "true");
                //$('.hide_the_npmu_state').hide();

                // $('.hide_the_upload_files').css('display', 'none');
                // $('#abhy_dli_one_upload_row1_hide_1').hide();
                //$('#abhy_dli_one_upload_row1_hide_2').hide();
                //$('#abhy_dli_one_upload_row1_hide_3').hide();
                //$('#abhy_dli_one_upload_row1_hide_4').hide();
                //$('#abhy_dli_one_upload_row1_hide_5').hide();

                //  $('#abhy_dli_one_upload_row2_hide_1').hide();
                //$('#abhy_dli_one_upload_row2_hide_2').hide();
                //$('#abhy_dli_one_upload_row2_hide_3').hide();
                //$('#abhy_dli_one_upload_row2_hide_4').hide();
                //$('#abhy_dli_one_upload_row2_hide_5').hide();


                //$('#abhy_dli_one_upload_row3_hide_1').hide();
                //$('#abhy_dli_one_upload_row3_hide_2').hide();
                //$('#abhy_dli_one_upload_row3_hide_3').hide();
                //$('#abhy_dli_one_upload_row3_hide_4').hide();
                //$('#abhy_dli_one_upload_row3_hide_5').hide();



                //$('#abhy_dli_one_upload_row4_hide_1').hide();
                //$('#abhy_dli_one_upload_row4_hide_2').hide();
                //$('#abhy_dli_one_upload_row4_hide_3').hide();
                //$('#abhy_dli_one_upload_row4_hide_4').hide();
                //$('#abhy_dli_one_upload_row4_hide_5').hide();


                //$('#abhy_dli_one_upload_row5_hide_1').hide();
                //$('#abhy_dli_one_upload_row5_hide_2').hide();
                //$('#abhy_dli_one_upload_row5_hide_3').hide();
                //$('#abhy_dli_one_upload_row5_hide_4').hide();
                //$('#abhy_dli_one_upload_row5_hide_5').hide();




                //$('#abhy_dli_one_upload_row6_hide_1').hide();
                //$('#abhy_dli_one_upload_row6_hide_2').hide();
                //$('#abhy_dli_one_upload_row6_hide_3').hide();
                //$('#abhy_dli_one_upload_row6_hide_4').hide();
                //$('#abhy_dli_one_upload_row6_hide_5').hide();

                //$('#abhy_dli_one_upload_row7_hide_1').hide();
                //$('#abhy_dli_one_upload_row7_hide_2').hide();
                //$('#abhy_dli_one_upload_row7_hide_3').hide();
                //$('#abhy_dli_one_upload_row7_hide_4').hide();
                //$('#abhy_dli_one_upload_row7_hide_5').hide();

                //$('#abhy_dli_one_upload_row8_hide_1').hide();
                //$('#abhy_dli_one_upload_row8_hide_2').hide();
                //$('#abhy_dli_one_upload_row8_hide_3').hide();
                //$('#abhy_dli_one_upload_row8_hide_4').hide();
                //$('#abhy_dli_one_upload_row8_hide_5').hide();


                //$('#abhy_dli_two_upload_row1_hide_1').hide();
                //$('#abhy_dli_two_upload_row1_hide_2').hide();
                //$('#abhy_dli_two_upload_row1_hide_3').hide();
                //$('#abhy_dli_two_upload_row1_hide_4').hide();
                //$('#abhy_dli_two_upload_row1_hide_5').hide();

                //$('#abhy_dli_two_upload_row2_hide_1').hide();
                //$('#abhy_dli_two_upload_row2_hide_2').hide();
                //$('#abhy_dli_two_upload_row2_hide_3').hide();
                //$('#abhy_dli_two_upload_row2_hide_4').hide();
                //$('#abhy_dli_two_upload_row2_hide_5').hide();

                //$('#abhy_dli_two_upload_row3_hide_1').hide();
                //$('#abhy_dli_two_upload_row3_hide_2').hide();
                //$('#abhy_dli_two_upload_row3_hide_3').hide();
                //$('#abhy_dli_two_upload_row3_hide_4').hide();
                //$('#abhy_dli_two_upload_row3_hide_5').hide();

                //$('#abhy_dli_two_upload_row4_hide_1').hide();
                //$('#abhy_dli_two_upload_row4_hide_2').hide();
                //$('#abhy_dli_two_upload_row4_hide_3').hide();
                //$('#abhy_dli_two_upload_row4_hide_4').hide();
                //$('#abhy_dli_two_upload_row4_hide_5').hide();

                //$('#abhy_dli_three_upload_row1_hide_1').hide();
                //$('#abhy_dli_three_upload_row1_hide_2').hide();
                //$('#abhy_dli_three_upload_row1_hide_3').hide();
                //$('#abhy_dli_three_upload_row1_hide_4').hide();
                //$('#abhy_dli_three_upload_row1_hide_5').hide();

                //$('#abhy_dli_four_upload_row1_hide_1').hide();
                //$('#abhy_dli_four_upload_row1_hide_2').hide();
                //$('#abhy_dli_four_upload_row1_hide_3').hide();
                //$('#abhy_dli_four_upload_row1_hide_4').hide();
                //$('#abhy_dli_four_upload_row1_hide_5').hide();

                //$('#abhy_dli_four_upload_row2_hide_1').hide();
                //$('#abhy_dli_four_upload_row2_hide_2').hide();
                //$('#abhy_dli_four_upload_row2_hide_3').hide();
                //$('#abhy_dli_four_upload_row2_hide_4').hide();
                //$('#abhy_dli_four_upload_row2_hide_5').hide();

                //$('#abhy_dli_five_upload_row1_hide_1').hide();
                //$('#abhy_dli_five_upload_row1_hide_2').hide();
                //$('#abhy_dli_five_upload_row1_hide_3').hide();
                //$('#abhy_dli_five_upload_row1_hide_4').hide();
                //$('#abhy_dli_five_upload_row1_hide_5').hide();

                abhy_dli_one_one_upload_row_geting();
                abhy_dli_one_two_upload_row_geting();
                abhy_dli_one_three_upload_row_geting();
                abhy_dli_one_four_upload_row_geting();
                abhy_dli_one_five_upload_row_geting();
                abhy_dli_one_six_upload_row_geting();
                abhy_dli_one_seven_upload_row_geting();
                abhy_dli_one_eigth_upload_row_geting();


                abhy_dli_two_one_upload_row_geting();
                abhy_dli_two_two_upload_row_geting();
                abhy_dli_two_three_upload_row_geting();
                abhy_dli_two_four_upload_row_geting();

                abhy_dli_three_one_upload_row_geting();

                abhy_dli_four_one_upload_row_geting();
                abhy_dli_four_two_upload_row_geting();
                abhy_dli_five_one_upload_row_geting();
                Dli_1_Details();
                Dli_2_Details();
                Dli_3_Details();
                Dli_4_Details();
                Dli_5_Details();

                Dli1_1_Upload_Details();
                Dli1_2_Upload_Details();
                Dli1_3_Upload_Details();
                Dli1_4_Upload_Details();
                Dli1_5_Upload_Details();
                Dli1_6_Upload_Details();
                Dli1_7_Upload_Details();
                Dli1_8_Upload_Details();

                Dli2_1_Upload_Details();
                Dli2_2_Upload_Details();
                Dli2_3_Upload_Details();
                Dli2_4_Upload_Details();

                Dli3_1_Upload_Details();

                Dli4_1_Upload_Details();
                Dli4_2_Upload_Details();

                Dli5_1_Upload_Details();


                // document.getElementById("hidethedelete").style.display = "none";

            }
        }
    });


});

function DropDownInfo_11() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Home/Sign_Up_DropdownInfo",
        data: "{ }",
        dataType: 'JSON',
        success: function (response) {
            $('#StatesError').text('');
            $('#states_hide').show();
            if (response.length != 0) {
                var all_states = [];

                Jsondata = response;
                var ddlst = {};
                var optionhtml = '';
                //var optionState = '<option value="0"> Select State</option>';
                for (var i = 0; i < response.length; i++) {

                    if (!ddlst[response[i].state_name]) {
                        all_states.push(response[i].state_name);
                        ddlst[response[i].state_name] = response[i].state_name;
                        //  $("#spnstate").append(optionState);
                    }
                }

                var StateArray = [];
                StateArray = all_states.sort(function (a, b) {
                    if (a < b) return -1;
                    else if (a > b) return 1;
                    return 0;
                });
                for (var i = 0; i < StateArray.length; i++) {
                    if (StateArray[i] != "Delhi_7") {
                        if (StateArray[i] != null && StateArray[i] != "") {
                            optionhtml += '<option value="' + StateArray[i] + '">' + StateArray[i] + '</option>';
                        }
                    }
                }
                $("#spnstate").append(optionhtml);

            }

        }
    });
}
function HideFinctions() {
    debugger;
    if (officer == "State") {
        setTimeout(function () {
            //$('.hidethedelete').hide();
            $(".hidethedelete").attr("disabled", true);
        }, 1000);
    }
    //if (eemail == "vivekvivektiwari80@gmail.com" || eemail == "dpbcse@gmail.com") {
    //    $(".hidethedelete").attr("disabled", false);
    //}
    //else if (eemail == "neetynagi@gmail.comaaa") {
    //    $(".hidethedelete").attr("disabled", false);
    //}
    else {
        $(".hidethedelete").attr("disabled", true);
    }

}

function State_Selection() {
    StateName = "";
    $('.loader').show();
    var string11 = $('#spnstate').val();
    if (string11 != "0") {
        StateName = string11;

        abhy_dli_one_one_upload_row_geting();
        abhy_dli_one_two_upload_row_geting();
        abhy_dli_one_three_upload_row_geting();
        abhy_dli_one_four_upload_row_geting();
        abhy_dli_one_five_upload_row_geting();
        abhy_dli_one_six_upload_row_geting();
        abhy_dli_one_seven_upload_row_geting();
        abhy_dli_one_eigth_upload_row_geting();

        abhy_dli_two_one_upload_row_geting();
        abhy_dli_two_two_upload_row_geting();
        abhy_dli_two_three_upload_row_geting();
        abhy_dli_two_four_upload_row_geting();

        abhy_dli_three_one_upload_row_geting();

        abhy_dli_four_one_upload_row_geting();
        abhy_dli_four_two_upload_row_geting();
        abhy_dli_five_one_upload_row_geting();
        Dli_1_Details();
        Dli_2_Details();
        Dli_3_Details();
        Dli_4_Details();
        Dli_5_Details();

        Dli1_1_Upload_Details();
        Dli1_2_Upload_Details();
        Dli1_3_Upload_Details();
        Dli1_4_Upload_Details();
        Dli1_5_Upload_Details();
        Dli1_6_Upload_Details();

        Dli2_1_Upload_Details();
        Dli2_2_Upload_Details();
        Dli2_3_Upload_Details();
        Dli2_4_Upload_Details();

        Dli3_1_Upload_Details();

        Dli4_1_Upload_Details();
        Dli4_2_Upload_Details();

        Dli5_1_Upload_Details();


        //if (Access_Auth == 'readonly') {
        //    $('.hidetheupload').prop("disabled", true);
        //    $('.hidethedelete').prop("disabled", true);
        //}
    }

}

//dli 1
function abhy_dli_one_one_upload_row_geting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_one_one_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {
            $('#waterlevel_iii_20_21_filename1').html("");
            $('#waterlevel_iii_21_22_filename1').html("");
            $('#waterlevel_iii_22_23_filename1').html("");
            $('#waterlevel_iii_23_24_filename1').html("");
            $('#waterlevel_iii_24_25_filename1').html("");

            var a = 0;

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var waterlevel_iii_20_21_filename_1 = "";
                if (data.waterlevel_iii_20_21_filename != null && data.waterlevel_iii_20_21_filename != "" && data.waterlevel_iii_20_21_filepath != null && data.waterlevel_iii_20_21_filepath != "") {

                    var waterlevel_iii_20_21_filename_1_1 = "";
                    waterlevel_iii_20_21_filename_1 = data.waterlevel_iii_20_21_filename.split(',');
                    var waterlevel_iii_20_21_filepath_1 = data.waterlevel_iii_20_21_filepath.split(',');
                    if (waterlevel_iii_20_21_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < waterlevel_iii_20_21_filename_1.length; i++) {
                            if (waterlevel_iii_20_21_filename_1[i] != "") {
                                Z = Z + 1;

                                var SS1 = waterlevel_iii_20_21_filepath_1[i] + ',waterlevel_iii_20_21_filepath_1';

                                waterlevel_iii_20_21_filename_1_1 += j + '.' + '<a href="' + waterlevel_iii_20_21_filepath_1[i] + '"' + 'download>' + waterlevel_iii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata' + Z + '" value="' + SS1 + '"> <button  class="hidethedelete"   onclick="RemovePath_Dli1_20_21(' + Z + ')" >Delete</button><br/>';


                                j = j + 1;
                            }
                        }
                        $('#waterlevel_iii_20_21_filename1').html(waterlevel_iii_20_21_filename_1_1);
                    }
                }
                var waterlevel_iii_21_22_filename_1 = "";
                if (data.waterlevel_iii_21_22_filename != null && data.waterlevel_iii_21_22_filename != "" && data.waterlevel_iii_21_22_filepath != null && data.waterlevel_iii_21_22_filepath != "") {

                    var waterlevel_iii_21_22_filename_1_1 = "";
                    waterlevel_iii_21_22_filename_1 = data.waterlevel_iii_21_22_filename.split(',');
                    var waterlevel_iii_21_22_filepath_1 = data.waterlevel_iii_21_22_filepath.split(',');
                    if (waterlevel_iii_21_22_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < waterlevel_iii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = waterlevel_iii_21_22_filepath_1[i] + ',waterlevel_iii_21_22_filepath_1';

                            if (waterlevel_iii_21_22_filename_1[i] != "") {


                                waterlevel_iii_21_22_filename_1_1 += j + '.' + '<a href="' + waterlevel_iii_21_22_filepath_1[i] + '"' + 'download>' + waterlevel_iii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata' + Z + '" value="' + SS1 + '"> <button    onclick="RemovePath_Dli1_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';


                                j = j + 1;
                            }
                        }
                        $('#waterlevel_iii_21_22_filename1').html(waterlevel_iii_21_22_filename_1_1);
                    }
                }
                var waterlevel_iii_22_23_filename_1 = "";
                if (data.waterlevel_iii_22_23_filename != null && data.waterlevel_iii_22_23_filename != "" && data.waterlevel_iii_22_23_filepath != null && data.waterlevel_iii_22_23_filepath != "") {

                    var waterlevel_iii_22_23_filename_1_1 = "";
                    waterlevel_iii_22_23_filename_1 = data.waterlevel_iii_22_23_filename.split(',');
                    var waterlevel_iii_22_23_filepath_1 = data.waterlevel_iii_22_23_filepath.split(',');
                    var j = 1;
                    for (var i = 0; i < waterlevel_iii_22_23_filename_1.length; i++) {
                        Z = Z + 1;
                        if (waterlevel_iii_22_23_filename_1[i] != "") {
                            var SS1 = waterlevel_iii_22_23_filepath_1[i] + ',waterlevel_iii_22_23_filepath_1';
                            waterlevel_iii_22_23_filename_1_1 += j + '.' + '<a href="' + waterlevel_iii_22_23_filepath_1[i] + '"' + 'download>' + waterlevel_iii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                            j = j + 1;
                        }
                    }
                    $('#waterlevel_iii_22_23_filename1').html(waterlevel_iii_22_23_filename_1_1);
                }

                var waterlevel_iii_23_24_filename_1 = "";
                if (data.waterlevel_iii_23_24_filename != null && data.waterlevel_iii_23_24_filename != "" && data.waterlevel_iii_23_24_filepath != null && data.waterlevel_iii_23_24_filepath != "") {

                    var waterlevel_iii_23_24_filename_1_1 = "";
                    waterlevel_iii_23_24_filename_1 = data.waterlevel_iii_23_24_filename.split(',');
                    var waterlevel_iii_23_24_filepath_1 = data.waterlevel_iii_23_24_filepath.split(',');
                    if (waterlevel_iii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterlevel_iii_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterlevel_iii_23_24_filename_1[i] != "") {
                                var SS1 = waterlevel_iii_23_24_filepath_1[i] + ',waterlevel_iii_23_24_filepath_1';

                                waterlevel_iii_23_24_filename_1_1 += j + '.' + '<a href="' + waterlevel_iii_23_24_filepath_1[i] + '"' + 'download>' + waterlevel_iii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterlevel_iii_23_24_filename1').html(waterlevel_iii_23_24_filename_1_1);
                    }
                }
                var waterlevel_iii_24_25_filename_1 = "";
                if (data.waterlevel_iii_24_25_filename != null && data.waterlevel_iii_24_25_filename != "" && data.waterlevel_iii_24_25_filepath != null && data.waterlevel_iii_24_25_filepath != "") {

                    var waterlevel_iii_24_25_filename_1_1 = "";
                    waterlevel_iii_24_25_filename_1 = data.waterlevel_iii_24_25_filename.split(',');
                    var waterlevel_iii_24_25_filepath_1 = data.waterlevel_iii_24_25_filepath.split(',');
                    if (waterlevel_iii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterlevel_iii_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterlevel_iii_24_25_filename_1[i] != "") {
                                var SS1 = waterlevel_iii_24_25_filepath_1[i] + ',waterlevel_iii_24_25_filepath_1';
                                waterlevel_iii_24_25_filename_1_1 += j + '.' + '<a href="' + waterlevel_iii_24_25_filepath_1[i] + '"' + 'download>' + waterlevel_iii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterlevel_iii_24_25_filename1').html(waterlevel_iii_24_25_filename_1_1);
                    }
                }
            }

            if (data == "NO") {
                $('#waterlevel_iii_20_21_filename1').html("");

                $('#waterlevel_iii_21_22_filename1').html("");
                $('#waterlevel_iii_22_23_filename1').html("");
                $('#waterlevel_iii_23_24_filename1').html("");
                $('#waterlevel_iii_24_25_filename1').html("");
            }
            HideFinctions();

        }
    });

}

function abhy_dli_one_two_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_one_two_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {
            $('#waterlevel_vi_20_21_filename1').html("");

            $('#waterlevel_vi_21_22_filename1').html("");
            $('#waterlevel_vi_22_23_filename1').html("");
            $('#waterlevel_vi_23_24_filename1').html("");
            $('#waterlevel_vi_24_25_filename1').html("");
            var a = 0;
            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }

            if (data.length != 0) {
                var Z = 0;
                var waterlevel_vi_20_21_filename_1 = "";
                if (data.waterlevel_vi_20_21_filename != null && data.waterlevel_vi_20_21_filename != "" && data.waterlevel_vi_20_21_filepath != null && data.waterlevel_vi_20_21_filepath != "") {

                    var waterlevel_vi_20_21_filename_1_1 = "";
                    waterlevel_vi_20_21_filename_1 = data.waterlevel_vi_20_21_filename.split(',');
                    var waterlevel_vi_20_21_filepath_1 = data.waterlevel_vi_20_21_filepath.split(',');
                    if (waterlevel_vi_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterlevel_vi_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterlevel_vi_20_21_filename_1[i] != "") {
                                var SS1 = waterlevel_vi_20_21_filepath_1[i] + ',waterlevel_vi_20_21_filepath_1';
                                waterlevel_vi_20_21_filename_1_1 += j + '.' + '<a href="' + waterlevel_vi_20_21_filepath_1[i] + '"' + 'download>' + waterlevel_vi_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_Vi' + Z + '" value="' + SS1 + '"> <button  class="hidethedelete" disabled onclick="RemovePath_Dli1_VI(' + Z + ')">Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterlevel_vi_20_21_filename1').html(waterlevel_vi_20_21_filename_1_1);
                    }
                }
                var waterlevel_vi_21_22_filename_1 = "";
                if (data.waterlevel_vi_21_22_filename != null && data.waterlevel_vi_21_22_filename != "" && data.waterlevel_vi_21_22_filepath != null && data.waterlevel_vi_21_22_filepath != "") {

                    var waterlevel_vi_21_22_filename_1_1 = "";
                    waterlevel_vi_21_22_filename_1 = data.waterlevel_vi_21_22_filename.split(',');
                    var waterlevel_vi_21_22_filepath_1 = data.waterlevel_vi_21_22_filepath.split(',');
                    if (waterlevel_vi_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterlevel_vi_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterlevel_vi_21_22_filename_1[i] != "") {
                                var SS1 = waterlevel_vi_21_22_filepath_1[i] + ',waterlevel_vi_21_22_filepath_1';

                                waterlevel_vi_21_22_filename_1_1 += j + '.' + '<a href="' + waterlevel_vi_21_22_filepath_1[i] + '"' + 'download>' + waterlevel_vi_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_Vi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_VI(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterlevel_vi_21_22_filename1').html(waterlevel_vi_21_22_filename_1_1);
                    }
                }
                var waterlevel_vi_22_23_filename_1 = "";
                if (data.waterlevel_vi_22_23_filename != null && data.waterlevel_vi_22_23_filename != "" && data.waterlevel_vi_22_23_filepath != null && data.waterlevel_vi_22_23_filepath != "") {

                    var waterlevel_vi_22_23_filename_1_1 = "";
                    waterlevel_vi_22_23_filename_1 = data.waterlevel_vi_22_23_filename.split(',');
                    var waterlevel_vi_22_23_filepath_1 = data.waterlevel_vi_22_23_filepath.split(',');
                    if (waterlevel_vi_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterlevel_vi_22_23_filename_1.length; i++) {
                            if (waterlevel_vi_22_23_filename_1[i] != "") {
                                Z = Z + 1;
                                var SS1 = waterlevel_vi_22_23_filepath_1[i] + ',waterlevel_vi_22_23_filepath_1';

                                waterlevel_vi_22_23_filename_1_1 += j + '.' + '<a href="' + waterlevel_vi_22_23_filepath_1[i] + '"' + 'download>' + waterlevel_vi_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_Vi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_VI(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterlevel_vi_22_23_filename1').html(waterlevel_vi_22_23_filename_1_1);
                    }
                }
                var waterlevel_vi_23_24_filename_1 = "";
                if (data.waterlevel_vi_23_24_filename != null && data.waterlevel_vi_23_24_filename != "" && data.waterlevel_vi_23_24_filepath != null && data.waterlevel_vi_23_24_filepath != "") {

                    var waterlevel_vi_23_24_filename_1_1 = "";
                    waterlevel_vi_23_24_filename_1 = data.waterlevel_vi_23_24_filename.split(',');
                    var waterlevel_vi_23_24_filepath_1 = data.waterlevel_vi_23_24_filepath.split(',');
                    if (waterlevel_vi_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterlevel_vi_23_24_filename_1.length; i++) {
                            if (waterlevel_vi_23_24_filename_1[i] != "") {
                                Z = Z + 1;
                                var SS1 = waterlevel_vi_23_24_filepath_1[i] + ',waterlevel_vi_23_24_filepath_1';

                                waterlevel_vi_23_24_filename_1_1 += j + '.' + '<a href="' + waterlevel_vi_23_24_filepath_1[i] + '"' + 'download>' + waterlevel_vi_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_Vi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_VI(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterlevel_vi_23_24_filename1').html(waterlevel_vi_23_24_filename_1_1);
                    }
                }
                var waterlevel_vi_24_25_filename_1 = "";
                if (data.waterlevel_vi_24_25_filename != null && data.waterlevel_vi_24_25_filename != "" && data.waterlevel_vi_24_25_filepath != null && data.waterlevel_vi_24_25_filepath != "") {

                    var waterlevel_vi_24_25_filename_1_1 = "";
                    waterlevel_vi_24_25_filename_1 = data.waterlevel_vi_24_25_filename.split(',');
                    var waterlevel_vi_24_25_filepath_1 = data.waterlevel_vi_24_25_filepath.split(',');
                    if (waterlevel_vi_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterlevel_vi_24_25_filename_1.length; i++) {
                            if (waterlevel_vi_24_25_filename_1[i] != "") {
                                Z = Z + 1;
                                var SS1 = waterlevel_vi_24_25_filepath_1[i] + ',waterlevel_vi_24_25_filepath_1';

                                waterlevel_vi_24_25_filename_1_1 += j + '.' + '<a href="' + waterlevel_vi_24_25_filepath_1[i] + '"' + 'download>' + waterlevel_vi_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_Vi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_VI(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterlevel_vi_24_25_filename1').html(waterlevel_vi_24_25_filename_1_1);
                    }
                }

            }
            if (data == "NO") {
                $('#waterlevel_vi_20_21_filename1').html("");

                $('#waterlevel_vi_21_22_filename1').html("");
                $('#waterlevel_vi_22_23_filename1').html("");
                $('#waterlevel_vi_23_24_filename1').html("");
                $('#waterlevel_vi_24_25_filename1').html("");
            }
            HideFinctions();

        }
    });

}

function abhy_dli_one_three_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_one_three_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#waterquality_iii_20_21_filename1').html("");

            $('#waterquality_iii_21_22_filename1').html("");
            $('#waterquality_iii_22_23_filename1').html("");
            $('#waterquality_iii_23_24_filename1').html("");
            $('#waterquality_iii_24_25_filename1').html("");
            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            //waterquality_iii_20_21_filepath
            var Z = 0;
            if (data.length != 0) {
                var waterquality_iii_20_21_filename_1 = "";
                if (data.waterquality_iii_20_21_filename != null && data.waterquality_iii_20_21_filename != "" && data.waterquality_iii_20_21_filepath != null && data.waterquality_iii_20_21_filepath != "") {

                    var waterquality_iii_20_21_filename_1_1 = "";
                    waterquality_iii_20_21_filename_1 = data.waterquality_iii_20_21_filename.split(',');
                    var waterquality_iii_20_21_filepath_1 = data.waterquality_iii_20_21_filepath.split(',');
                    if (waterquality_iii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_iii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_iii_20_21_filename_1[i] != "") {
                                var SS1 = waterquality_iii_20_21_filepath_1[i] + ',waterquality_iii_20_21_filepath_1';
                                waterquality_iii_20_21_filename_1_1 += j + '.' + '<a href="' + waterquality_iii_20_21_filepath_1[i] + '"' + 'download>' + waterquality_iii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_II' + Z + '" value="' + SS1 + '"> <button  class="hidethedelete" onclick="RemovePath_Dli1_b_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_iii_20_21_filename1').html(waterquality_iii_20_21_filename_1_1);
                    }
                }
                var waterquality_iii_21_22_filename_1 = "";
                if (data.waterquality_iii_21_22_filename != null && data.waterquality_iii_21_22_filename != "" && data.waterquality_iii_21_22_filepath != null && data.waterquality_iii_21_22_filepath != "") {

                    var waterquality_iii_21_22_filename_1_1 = "";
                    waterquality_iii_21_22_filename_1 = data.waterquality_iii_21_22_filename.split(',');
                    var waterquality_iii_21_22_filepath_1 = data.waterquality_iii_21_22_filepath.split(',');
                    if (waterquality_iii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_iii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_iii_21_22_filename_1[i] != "") {
                                var SS1 = waterquality_iii_21_22_filepath_1[i] + ',waterquality_iii_21_22_filepath_1';
                                waterquality_iii_21_22_filename_1_1 += j + '.' + '<a href="' + waterquality_iii_21_22_filepath_1[i] + '"' + 'download>' + waterquality_iii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_II' + Z + '" value="' + SS1 + '"> <button   onclick="RemovePath_Dli1_b_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_iii_21_22_filename1').html(waterquality_iii_21_22_filename_1_1);
                    }
                }
                var waterquality_iii_22_23_filename_1 = "";
                if (data.waterquality_iii_22_23_filename != null && data.waterquality_iii_22_23_filename != "" && data.waterquality_iii_22_23_filepath != null && data.waterquality_iii_22_23_filepath != "") {

                    var waterquality_iii_22_23_filename_1_1 = "";
                    waterquality_iii_22_23_filename_1 = data.waterquality_iii_22_23_filename.split(',');
                    var waterquality_iii_22_23_filepath_1 = data.waterquality_iii_22_23_filepath.split(',');
                    if (waterquality_iii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_iii_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_iii_22_23_filename_1[i] != "") {
                                var SS1 = waterquality_iii_22_23_filepath_1[i] + ',waterquality_iii_22_23_filepath_1';
                                waterquality_iii_22_23_filename_1_1 += j + '.' + '<a href="' + waterquality_iii_22_23_filepath_1[i] + '"' + 'download>' + waterquality_iii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_b_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_iii_22_23_filename1').html(waterquality_iii_22_23_filename_1_1);
                    }
                }
                var waterquality_iii_23_24_filename_1 = "";
                if (data.waterquality_iii_23_24_filename != null && data.waterquality_iii_23_24_filename != "" && data.waterquality_iii_23_24_filepath != null && data.waterquality_iii_23_24_filepath != "") {

                    var waterquality_iii_23_24_filename_1_1 = "";
                    waterquality_iii_23_24_filename_1 = data.waterquality_iii_23_24_filename.split(',');
                    var waterquality_iii_23_24_filepath_1 = data.waterquality_iii_22_23_filepath.split(',');
                    if (waterquality_iii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_iii_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_iii_23_24_filename_1[i] != "") {
                                var SS1 = waterquality_iii_23_24_filepath_1[i] + ',waterquality_iii_23_24_filepath_1';
                                waterquality_iii_23_24_filename_1_1 += j + '.' + '<a href="' + waterquality_iii_23_24_filepath_1[i] + '"' + 'download>' + waterquality_iii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_b_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_iii_23_24_filename1').html(waterquality_iii_23_24_filename_1_1);
                    }
                }
                var waterquality_iii_24_25_filename_1 = "";
                if (data.waterquality_iii_24_25_filename != null && data.waterquality_iii_24_25_filename != "" && data.waterquality_iii_24_25_filepath != null && data.waterquality_iii_24_25_filepath != "") {

                    var waterquality_iii_24_25_filename_1_1 = "";
                    waterquality_iii_24_25_filename_1 = data.waterquality_iii_24_25_filename.split(',');
                    var waterquality_iii_24_25_filepath_1 = data.waterquality_iii_24_25_filepath.split(',');
                    if (waterquality_iii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_iii_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_iii_24_25_filename_1[i] != "") {
                                var SS1 = waterquality_iii_24_25_filepath_1[i] + ',waterquality_iii_24_25_filepath_1';
                                waterquality_iii_24_25_filename_1_1 += j + '.' + '<a href="' + waterquality_iii_24_25_filepath_1[i] + '"' + 'download>' + waterquality_iii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_b_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_iii_24_25_filename1').html(waterquality_iii_24_25_filename_1_1);
                    }
                }

            }
            if (data == "NO") {
                $('#waterquality_iii_20_21_filename1').text("");

                $('#waterquality_iii_21_22_filename1').text("");
                $('#waterquality_iii_22_23_filename1').text("");
                $('#waterquality_iii_23_24_filename1').text("");
                $('#waterquality_iii_24_25_filename1').text("");
            }

            HideFinctions();
        }
    });

}

function abhy_dli_one_four_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_one_four_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#waterquality_vi_20_21_filename1').html("");

            $('#waterquality_vi_21_22_filename1').html("");
            $('#waterquality_vi_22_23_filename1').html("");
            $('#waterquality_vi_23_24_filename1').html("");
            $('#waterquality_vi_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                //waterquality_vi_20_21_filepath
                var waterquality_vi_20_21_filename_1 = "";
                if (data.waterquality_vi_20_21_filename != null && data.waterquality_vi_20_21_filename != "" && data.waterquality_vi_20_21_filepath != null && data.waterquality_vi_20_21_filepath != "") {

                    var waterquality_vi_20_21_filename_1_1 = "";
                    waterquality_vi_20_21_filename_1 = data.waterquality_vi_20_21_filename.split(',');
                    var waterquality_vi_20_21_filepath_1 = data.waterquality_vi_20_21_filepath.split(',');
                    if (waterquality_vi_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_vi_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_vi_20_21_filename_1[i] != "") {
                                var SS1 = waterquality_vi_20_21_filepath_1[i] + ',waterquality_vi_20_21_filepath_1';
                                waterquality_vi_20_21_filename_1_1 += j + '.' + '<a href="' + waterquality_vi_20_21_filepath_1[i] + '"' + 'download>' + waterquality_vi_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_V' + Z + '" value="' + SS1 + '"> <button   class="hidethedelete" disabled onclick="RemovePath_Dli1_b_V(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_vi_20_21_filename1').html(waterquality_vi_20_21_filename_1_1);
                    }
                }
                var waterquality_vi_21_22_filename_1 = "";
                if (data.waterquality_vi_21_22_filename != null && data.waterquality_vi_21_22_filename != "" && data.waterquality_vi_21_22_filepath != null && data.waterquality_vi_21_22_filepath != "") {

                    var waterquality_vi_21_22_filename_1_1 = "";
                    waterquality_vi_21_22_filename_1 = data.waterquality_vi_21_22_filename.split(',');
                    var waterquality_vi_21_22_filepath_1 = data.waterquality_vi_21_22_filepath.split(',');
                    if (waterquality_vi_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_vi_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_vi_21_22_filename_1[i] != "") {
                                var SS1 = waterquality_vi_21_22_filepath_1[i] + ',waterquality_vi_21_22_filepath_1';
                                waterquality_vi_21_22_filename_1_1 += j + '.' + '<a href="' + waterquality_vi_21_22_filepath_1[i] + '"' + 'download>' + waterquality_vi_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_V' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_b_V(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_vi_21_22_filename1').html(waterquality_vi_21_22_filename_1_1);
                    }
                }
                var waterquality_vi_22_23_filename_1 = "";
                if (data.waterquality_vi_22_23_filename != null && data.waterquality_vi_22_23_filename != "" && data.waterquality_vi_22_23_filepath != null && data.waterquality_vi_22_23_filepath != "") {

                    var waterquality_vi_22_23_filename_1_1 = "";
                    waterquality_vi_22_23_filename_1 = data.waterquality_vi_22_23_filename.split(',');
                    var waterquality_vi_22_23_filepath_1 = data.waterquality_vi_22_23_filepath.split(',');
                    if (waterquality_vi_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_vi_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_vi_22_23_filename_1[i] != "") {
                                var SS1 = waterquality_vi_22_23_filepath_1[i] + ',waterquality_vi_22_23_filepath_1';
                                waterquality_vi_22_23_filename_1_1 += j + '.' + '<a href="' + waterquality_vi_22_23_filepath_1[i] + '"' + 'download>' + waterquality_vi_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_V' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_b_V(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_vi_22_23_filename1').html(waterquality_vi_22_23_filename_1_1);
                    }
                }
                var waterquality_vi_23_24_filename_1 = "";
                if (data.waterquality_vi_23_24_filename != null && data.waterquality_vi_23_24_filename != "" && data.waterquality_vi_23_24_filepath != null && data.waterquality_vi_23_24_filepath != "") {

                    var waterquality_vi_23_24_filename_1_1 = "";
                    waterquality_vi_23_24_filename_1 = data.waterquality_vi_23_24_filename.split(',');
                    var waterquality_vi_23_24_filepath_1 = data.waterquality_vi_23_24_filepath.split(',');
                    if (waterquality_vi_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_vi_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_vi_23_24_filename_1[i] != "") {
                                var SS1 = waterquality_vi_23_24_filepath_1[i] + ',waterquality_vi_23_24_filepath_1';
                                waterquality_vi_23_24_filename_1_1 += j + '.' + '<a href="' + waterquality_vi_23_24_filepath_1[i] + '"' + 'download>' + waterquality_vi_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_V' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_b_V(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_vi_23_24_filename1').html(waterquality_vi_23_24_filename_1_1);
                    }
                }
                var waterquality_vi_24_25_filename_1 = "";
                if (data.waterquality_vi_24_25_filename != null && data.waterquality_vi_24_25_filename != "" && data.waterquality_vi_24_25_filepath != null && data.waterquality_vi_24_25_filepath != "") {

                    var waterquality_vi_24_25_filename_1_1 = "";
                    waterquality_vi_24_25_filename_1 = data.waterquality_vi_24_25_filename.split(',');
                    var waterquality_vi_24_25_filepath_1 = data.waterquality_vi_24_25_filepath.split(',');
                    if (waterquality_vi_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterquality_vi_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterquality_vi_24_25_filename_1[i] != "") {
                                var SS1 = waterquality_vi_24_25_filepath_1[i] + ',waterquality_vi_24_25_filepath_1';
                                waterquality_vi_24_25_filename_1_1 += j + '.' + '<a href="' + waterquality_vi_24_25_filepath_1[i] + '"' + 'download>' + waterquality_vi_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_b_V' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_b_V(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterquality_vi_24_25_filename1').html(waterquality_vi_24_25_filename_1_1);
                    }
                }

            }
            if (data == "NO") {
                $('#waterquality_vi_20_21_filename1').text("");

                $('#waterquality_vi_21_22_filename1').text("");
                $('#waterquality_vi_22_23_filename1').text("");
                $('#waterquality_vi_23_24_filename1').text("");
                $('#waterquality_vi_24_25_filename1').text("");
            }

            HideFinctions();
        }
    });

}

function abhy_dli_one_five_upload_row_geting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_one_five_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#blockwise_ii_20_21_filename11').html("");

            $('#blockwise_ii_21_22_filename11').html("");
            $('#blockwise_ii_22_23_filename11').html("");
            $('#blockwise_ii_23_24_filename11').html("");
            $('#blockwise_ii_24_25_filename11').html("");
            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var blockwise_ii_20_21_filename1_1 = "";
                if (data.blockwise_ii_20_21_filename != null && data.blockwise_ii_20_21_filename != "" && data.blockwise_ii_20_21_filepath != null && data.blockwise_ii_20_21_filepath != "") {

                    var blockwise_ii_20_21_filename1_1_1 = "";
                    blockwise_ii_20_21_filename1_1 = data.blockwise_ii_20_21_filename.split(',');
                    var blockwise_ii_20_21_filepath_1 = data.blockwise_ii_20_21_filepath.split(',');
                    if (blockwise_ii_20_21_filename1_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_20_21_filename1_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_20_21_filename1_1[i] != "") {
                                var SS1 = blockwise_ii_20_21_filepath_1[i] + ',blockwise_ii_20_21_filepath_1';
                                blockwise_ii_20_21_filename1_1_1 += j + '.' + '<a href="' + blockwise_ii_20_21_filepath_1[i] + '"' + ' target="_blank" download>' + blockwise_ii_20_21_filename1_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_2_II' + Z + '" value="' + SS1 + '"> <button  class="hidethedelete" disabled onclick="RemovePath_Dli1_2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#blockwise_ii_20_21_filename11').html(blockwise_ii_20_21_filename1_1_1);
                    }
                }
                var blockwise_ii_21_22_filename1_1 = "";
                if (data.blockwise_ii_21_22_filename != null && data.blockwise_ii_21_22_filename != "" && data.blockwise_ii_21_22_filepath != null && data.blockwise_ii_21_22_filepath != "") {

                    var blockwise_ii_21_22_filename1_1_1 = "";
                    blockwise_ii_21_22_filename1_1 = data.blockwise_ii_21_22_filename.split(',');
                    var blockwise_ii_21_22_filepath_1 = data.blockwise_ii_21_22_filepath.split(',');
                    if (blockwise_ii_21_22_filename1_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_21_22_filename1_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_21_22_filename1_1[i] != "") {
                                var SS1 = blockwise_ii_21_22_filepath_1[i] + ',blockwise_ii_21_22_filepath_1';
                                blockwise_ii_21_22_filename1_1_1 += j + '.' + '<a href="' + blockwise_ii_21_22_filepath_1[i] + '"' + ' target="_blank" download>' + blockwise_ii_21_22_filename1_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#blockwise_ii_21_22_filename11').html(blockwise_ii_21_22_filename1_1_1);
                    }
                }
                var blockwise_ii_22_23_filename1_1 = "";
                if (data.blockwise_ii_22_23_filename != null && data.blockwise_ii_22_23_filename != "" && data.blockwise_ii_22_23_filepath != null && data.blockwise_ii_22_23_filepath != "") {

                    var blockwise_ii_22_23_filename1_1_1 = "";
                    blockwise_ii_22_23_filename1_1 = data.blockwise_ii_22_23_filename.split(',');
                    var blockwise_ii_22_23_filepath_1 = data.blockwise_ii_22_23_filepath.split(',');
                    if (blockwise_ii_22_23_filename1_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_22_23_filename1_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_22_23_filename1_1[i] != "") {
                                var SS1 = blockwise_ii_22_23_filepath_1[i] + ',blockwise_ii_22_23_filepath_1';

                                blockwise_ii_22_23_filename1_1_1 += j + '.' + '<a href="' + blockwise_ii_22_23_filepath_1[i] + '"' + ' target="_blank" download>' + blockwise_ii_22_23_filename1_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';

                                j = j + 1;
                            }
                        }
                        $('#blockwise_ii_22_23_filename11').html(blockwise_ii_22_23_filename1_1_1);
                    }
                }
                var blockwise_ii_23_24_filename1_1 = "";
                if (data.blockwise_ii_23_24_filename != null && data.blockwise_ii_23_24_filename != "" && data.blockwise_ii_23_24_filepath != null && data.blockwise_ii_23_24_filepath != "") {

                    var blockwise_ii_23_24_filename1_1_1 = "";
                    blockwise_ii_23_24_filename1_1 = data.blockwise_ii_23_24_filename.split(',');
                    var blockwise_ii_23_24_filepath_1 = data.blockwise_ii_23_24_filepath.split(',');
                    if (blockwise_ii_23_24_filename1_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_23_24_filename1_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_23_24_filename1_1[i] != "") {
                                var SS1 = blockwise_ii_23_24_filepath_1[i] + ', blockwise_ii_23_24_filepath_1';
                                blockwise_ii_23_24_filename1_1_1 += j + '.' + '<a href="' + blockwise_ii_23_24_filepath_1[i] + '"' + ' target="_blank" download>' + blockwise_ii_23_24_filename1_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#blockwise_ii_23_24_filename11').html(blockwise_ii_23_24_filename1_1_1);
                    }
                }
                var blockwise_ii_24_25_filename1_1 = "";
                if (data.blockwise_ii_24_25_filename != null && data.blockwise_ii_24_25_filename != "" && data.blockwise_ii_24_25_filepath != null && data.blockwise_ii_24_25_filepath != "") {

                    var blockwise_ii_24_25_filename1_1_1 = "";
                    blockwise_ii_24_25_filename1_1 = data.blockwise_ii_24_25_filename.split(',');
                    var blockwise_ii_24_25_filepath_1 = data.blockwise_ii_24_25_filepath.split(',');
                    if (blockwise_ii_24_25_filename1_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_24_25_filename1_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_24_25_filename1_1[i] != "") {
                                var SS1 = blockwise_ii_24_25_filepath_1[i] + ',blockwise_ii_24_25_filepath_1';
                                blockwise_ii_24_25_filename1_1_1 += j + '.' + '<a href="' + blockwise_ii_24_25_filepath_1[i] + '"' + ' target="_blank" download>' + blockwise_ii_24_25_filename1_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#blockwise_ii_24_25_filename11').html(blockwise_ii_24_25_filename1_1_1);
                    }
                }
                //$('#blockwise_ii_20_21_filename11').text(data.blockwise_ii_20_21_filename1);
                //$('#blockwise_ii_21_22_filename11').text(data.blockwise_ii_21_22_filename1);
                //$('#blockwise_ii_22_23_filename11').text(data.blockwise_ii_22_23_filename1);
                //$('#blockwise_ii_23_24_filename11').text(data.blockwise_ii_23_24_filename1);
                //$('#blockwise_ii_24_25_filename11').text(data.blockwise_ii_24_25_filename1);
            }
            if (data == "NO") {
                $('#blockwise_ii_20_21_filename11').text("");

                $('#blockwise_ii_21_22_filename11').text("");
                $('#blockwise_ii_22_23_filename11').text("");
                $('#blockwise_ii_23_24_filename11').text("");
                $('#blockwise_ii_24_25_filename11').text("");
            }

            HideFinctions();

        }
    });
}

function abhy_dli_one_six_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_one_six_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#statewise_ii_20_21_filename1').html("");

            $('#statewise_ii_21_22_filename1').html("");
            $('#statewise_ii_22_23_filename1').html("");
            $('#statewise_ii_23_24_filename1').html("");
            $('#statewise_ii_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            //statewise_ii_20_21_filepath
            var Z = 0;
            if (data.length != 0) {
                var statewise_ii_20_21_filename_1 = "";
                if (data.statewise_ii_20_21_filename != null && data.statewise_ii_20_21_filename != "" && data.statewise_ii_20_21_filepath != null && data.statewise_ii_20_21_filepath != "") {

                    var statewise_ii_20_21_filename_1_1 = "";
                    statewise_ii_20_21_filename_1 = data.statewise_ii_20_21_filename.split(',');
                    var statewise_ii_20_21_filepath_1 = data.statewise_ii_20_21_filepath.split(',');
                    if (statewise_ii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statewise_ii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statewise_ii_20_21_filename_1[i] != "") {
                                var SS1 = statewise_ii_20_21_filepath_1[i] + ',statewise_ii_20_21_filepath_1';
                                statewise_ii_20_21_filename_1_1 += j + '.' + '<a href="' + statewise_ii_20_21_filepath_1[i] + '"' + ' target="_blank" download>' + statewise_ii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_3_II' + Z + '" value="' + SS1 + '"> <button  class="hidethedelete" disabled onclick="RemovePath_Dli1_3_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statewise_ii_20_21_filename1').html(statewise_ii_20_21_filename_1_1);
                    }
                }

                var statewise_ii_21_22_filename_1 = "";
                if (data.statewise_ii_21_22_filename != null && data.statewise_ii_21_22_filename != "" && data.statewise_ii_21_22_filepath != null && data.statewise_ii_21_22_filepath != "") {

                    var statewise_ii_21_22_filename_1_1 = "";
                    statewise_ii_21_22_filename_1 = data.statewise_ii_21_22_filename.split(',');
                    var statewise_ii_21_22_filepath_1 = data.statewise_ii_21_22_filepath.split(',');
                    if (statewise_ii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statewise_ii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statewise_ii_21_22_filename_1[i] != "") {
                                var SS1 = statewise_ii_21_22_filepath_1[i] + ',statewise_ii_21_22_filepath_1';
                                statewise_ii_21_22_filename_1_1 += j + '.' + '<a href="' + statewise_ii_21_22_filepath_1[i] + '"' + ' target="_blank" download>' + statewise_ii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_3_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_3_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                            }
                        }
                        $('#statewise_ii_21_22_filename1').html(statewise_ii_21_22_filename_1_1);
                    }
                }

                var statewise_ii_22_23_filename_1 = "";
                if (data.statewise_ii_22_23_filename != null && data.statewise_ii_22_23_filename != "" && data.statewise_ii_22_23_filepath != null && data.statewise_ii_22_23_filepath != "") {

                    var statewise_ii_22_23_filename_1_1 = "";
                    statewise_ii_22_23_filename_1 = data.statewise_ii_22_23_filename.split(',');
                    var statewise_ii_22_23_filepath_1 = data.statewise_ii_22_23_filepath.split(',');
                    if (statewise_ii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statewise_ii_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statewise_ii_22_23_filename_1[i] != "") {
                                var SS1 = statewise_ii_22_23_filepath_1[i] + ',statewise_ii_22_23_filepath_1';
                                statewise_ii_22_23_filename_1_1 += j + '.' + '<a href="' + statewise_ii_22_23_filepath_1[i] + '"' + ' target="_blank" download>' + statewise_ii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_3_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_3_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statewise_ii_22_23_filename1').html(statewise_ii_22_23_filename_1_1);
                    }
                }

                var statewise_ii_23_24_filename_1 = "";
                if (data.statewise_ii_23_24_filename != null && data.statewise_ii_23_24_filename != "" && data.statewise_ii_23_24_filepath != null && data.statewise_ii_23_24_filepath != "") {

                    var statewise_ii_23_24_filename_1_1 = "";
                    statewise_ii_23_24_filename_1 = data.statewise_ii_23_24_filename.split(',');
                    var statewise_ii_23_24_filepath_1 = data.statewise_ii_23_24_filepath.split(',');
                    if (statewise_ii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statewise_ii_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statewise_ii_23_24_filename_1[i] != "") {
                                var SS1 = statewise_ii_23_24_filepath_1[i] + ',statewise_ii_23_24_filepath_1';
                                statewise_ii_23_24_filename_1_1 += j + '.' + '<a href="' + statewise_ii_23_24_filepath_1[i] + '"' + ' target="_blank" download>' + statewise_ii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_3_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_3_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statewise_ii_23_24_filename1').html(statewise_ii_23_24_filename_1_1);
                    }
                }

                var statewise_ii_24_25_filename_1 = "";
                if (data.statewise_ii_24_25_filename != null && data.statewise_ii_24_25_filename != "" && data.statewise_ii_24_25_filepath != null && data.statewise_ii_24_25_filepath != "") {

                    var statewise_ii_24_25_filename_1_1 = "";
                    statewise_ii_24_25_filename_1 = data.statewise_ii_24_25_filename.split(',');
                    var statewise_ii_24_25_filepath_1 = data.statewise_ii_24_25_filepath.split(',');
                    if (statewise_ii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statewise_ii_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statewise_ii_24_25_filename_1[i] != "") {
                                var SS1 = statewise_ii_24_25_filepath_1[i] + ',statewise_ii_24_25_filepath_1';
                                statewise_ii_24_25_filename_1_1 += j + '.' + '<a href="' + statewise_ii_24_25_filepath_1[i] + '"' + ' target="_blank" download>' + statewise_ii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_3_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_3_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statewise_ii_24_25_filename1').html(statewise_ii_24_25_filename_1_1);
                    }
                }
                //$('#statewise_ii_20_21_filename1').text(data.statewise_ii_20_21_filename);
                //$('#statewise_ii_21_22_filename1').text(data.statewise_ii_21_22_filename);
                //$('#statewise_ii_22_23_filename1').text(data.statewise_ii_22_23_filename);
                //$('#statewise_ii_23_24_filename1').text(data.statewise_ii_23_24_filename);
                //$('#statewise_ii_24_25_filename1').text(data.statewise_ii_24_25_filename);
            }
            if (data == "NO") {
                $('#statewise_ii_20_21_filename1').text("");

                $('#statewise_ii_21_22_filename1').text("");
                $('#statewise_ii_22_23_filename1').text("");
                $('#statewise_ii_23_24_filename1').text("");
                $('#statewise_ii_24_25_filename1').text("");
            }
            HideFinctions();
        }


    });


}

function abhy_dli_one_seven_upload_row_geting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_7_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            $('#mow_v_20_21_filename1').html("");
            $('#mow_v_21_22_filename1').html("");
            $('#mow_v_22_23_filename1').html("");
            $('#mow_v_23_24_filename1').html("");
            $('#mow_v_24_25_filename1').html("");

            var a = 0;

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var mow_v_20_21_filename_1 = "";
                if (data.mow_v_20_21_filename != null && data.mow_v_20_21_filename != "" && data.mow_v_20_21_filepath != null && data.mow_v_20_21_filepath != "") {

                    var mow_v_20_21_filename_1_1 = "";
                    mow_v_20_21_filename_1 = data.mow_v_20_21_filename.split(',');
                    var mow_v_20_21_filepath_1 = data.mow_v_20_21_filepath.split(',');
                    if (mow_v_20_21_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_v_20_21_filename_1.length; i++) {
                            if (mow_v_20_21_filename_1[i] != "") {
                                Z = Z + 1;

                                var SS1 = mow_v_20_21_filepath_1[i] + ',mow_v_20_21_filepath_1';
                                mow_v_20_21_filename_1_1 += j + '.' + '<a href="' + mow_v_20_21_filepath_1[i] + '"' + 'download>' + mow_v_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data7' + Z + '" value="' + SS1 + '"> <button  class="hidethedelete"  onclick="RemovePath_Dli1_7(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_v_20_21_filename1').html(mow_v_20_21_filename_1_1);
                    }
                }
                var mow_v_21_22_filename_1 = "";
                if (data.mow_v_21_22_filename != null && data.mow_v_21_22_filename != "" && data.mow_v_21_22_filepath != null && data.mow_v_21_22_filepath != "") {

                    var mow_v_21_22_filename_1_1 = "";
                    mow_v_21_22_filename_1 = data.mow_v_21_22_filename.split(',');
                    var mow_v_21_22_filepath_1 = data.mow_v_21_22_filepath.split(',');
                    if (mow_v_21_22_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_v_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_v_21_22_filepath_1[i] + ',mow_v_21_22_filepath_1';

                            if (mow_v_21_22_filename_1[i] != "") {
                                mow_v_21_22_filename_1_1 += j + '.' + '<a href="' + mow_v_21_22_filepath_1[i] + '"' + 'download>' + mow_v_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data7' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_7(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_v_21_22_filename1').html(mow_v_21_22_filename_1_1);
                    }
                }
                var mow_v_22_23_filename_1 = "";
                if (data.mow_v_22_23_filename != null && data.mow_v_22_23_filename != "" && data.mow_v_22_23_filepath != null && data.mow_v_22_23_filepath != "") {

                    var mow_v_22_23_filename_1_1 = "";
                    mow_v_22_23_filename_1 = data.mow_v_22_23_filename.split(',');
                    var mow_v_22_23_filepath_1 = data.mow_v_22_23_filepath.split(',');

                    if (mow_v_22_23_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_v_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_v_22_23_filepath_1[i] + ',mow_v_22_23_filepath_1';

                            if (mow_v_22_23_filename_1[i] != "") {
                                mow_v_22_23_filename_1_1 += j + '.' + '<a href="' + mow_v_22_23_filepath_1[i] + '"' + 'download>' + mow_v_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data7' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_7(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_v_22_23_filename1').html(mow_v_22_23_filename_1_1);
                    }
                }

                var mow_v_23_24_filename_1 = "";
                if (data.mow_v_23_24_filename != null && data.mow_v_23_24_filename != "" && data.mow_v_23_24_filepath != null && data.mow_v_23_24_filepath != "") {

                    var mow_v_23_24_filename_1_1 = "";
                    mow_v_23_24_filename_1 = data.mow_v_23_24_filename.split(',');
                    var mow_v_23_24_filepath_1 = data.mow_v_23_24_filepath.split(',');

                    if (mow_v_23_24_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_v_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_v_23_24_filepath_1[i] + ',mow_v_23_24_filepath_1';

                            if (mow_v_23_24_filename_1[i] != "") {
                                mow_v_23_24_filename_1_1 += j + '.' + '<a href="' + mow_v_23_24_filepath_1[i] + '"' + 'download>' + mow_v_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data7' + Z + '" value="' + SS1 + '"> <button   onclick="RemovePath_Dli1_7(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_v_23_24_filename1').html(mow_v_23_24_filename_1_1);
                    }
                }
                var mow_v_24_25_filename_1 = "";
                if (data.mow_v_24_25_filename != null && data.mow_v_24_25_filename != "" && data.mow_v_24_25_filepath != null && data.mow_v_24_25_filepath != "") {

                    var mow_v_24_25_filename_1_1 = "";
                    mow_v_24_25_filename_1 = data.mow_v_24_25_filename.split(',');
                    var mow_v_24_25_filepath_1 = data.mow_v_24_25_filepath.split(',');

                    if (mow_v_24_25_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_v_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_v_24_25_filepath_1[i] + ',mow_v_24_25_filepath_1';

                            if (mow_v_24_25_filename_1[i] != "") {
                                mow_v_24_25_filename_1_1 += j + '.' + '<a href="' + mow_v_24_25_filepath_1[i] + '"' + 'download>' + mow_v_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data7' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_7(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_v_24_25_filename1').html(mow_v_24_25_filename_1_1);
                    }
                }
            }

            if (data == "NO") {
                $('#mow_v_20_21_filename1').html("");

                $('#mow_v_21_22_filename1').html("");
                $('#mow_v_22_23_filename1').html("");
                $('#mow_v_23_24_filename1').html("");
                $('#mow_v_24_25_filename1').html("");
            }

            HideFinctions();

        }
    });

}

function abhy_dli_one_eigth_upload_row_geting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_8_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {
            $('#mow_vi_20_21_filename1').html("");
            $('#mow_vi_21_22_filename1').html("");
            $('#mow_vi_22_23_filename1').html("");
            $('#mow_vi_23_24_filename1').html("");
            $('#mow_vi_24_25_filename1').html("");

            var a = 0;

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var mow_vi_20_21_filename_1 = "";
                if (data.mow_vi_20_21_filename != null && data.mow_vi_20_21_filename != "" && data.mow_vi_20_21_filepath != null && data.mow_vi_20_21_filepath != "") {

                    var mow_vi_20_21_filename_1_1 = "";
                    mow_vi_20_21_filename_1 = data.mow_vi_20_21_filename.split(',');
                    var mow_vi_20_21_filepath_1 = data.mow_vi_20_21_filepath.split(',');
                    if (mow_vi_20_21_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_vi_20_21_filename_1.length; i++) {
                            if (mow_vi_20_21_filename_1[i] != "") {
                                Z = Z + 1;

                                var SS1 = mow_vi_20_21_filepath_1[i] + ',mow_vi_20_21_filepath_1';
                                mow_vi_20_21_filename_1_1 += j + '.' + '<a href="' + mow_vi_20_21_filepath_1[i] + '"' + 'download>' + mow_vi_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data8' + Z + '" value="' + SS1 + '"> <button class="hidethedelete"  onclick="RemovePath_Dli1_8(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_vi_20_21_filename1').html(mow_vi_20_21_filename_1_1);
                    }
                }
                var mow_vi_21_22_filename_1 = "";
                if (data.mow_vi_21_22_filename != null && data.mow_vi_21_22_filename != "" && data.mow_vi_21_22_filepath != null && data.mow_vi_21_22_filepath != "") {

                    var mow_vi_21_22_filename_1_1 = "";
                    mow_vi_21_22_filename_1 = data.mow_vi_21_22_filename.split(',');
                    var mow_vi_21_22_filepath_1 = data.mow_vi_21_22_filepath.split(',');
                    if (mow_vi_21_22_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_vi_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_vi_21_22_filepath_1[i] + ',mow_vi_21_22_filepath_1';

                            if (mow_vi_21_22_filename_1[i] != "") {
                                mow_vi_21_22_filename_1_1 += j + '.' + '<a href="' + mow_vi_21_22_filepath_1[i] + '"' + 'download>' + mow_vi_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data8' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_8(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_vi_21_22_filename1').html(mow_vi_21_22_filename_1_1);
                    }
                }
                var mow_vi_22_23_filename_1 = "";
                if (data.mow_vi_22_23_filename != null && data.mow_vi_22_23_filename != "" && data.mow_vi_22_23_filepath != null && data.mow_vi_22_23_filepath != "") {

                    var mow_vi_22_23_filename_1_1 = "";
                    mow_vi_22_23_filename_1 = data.mow_vi_22_23_filename.split(',');
                    var mow_vi_22_23_filepath_1 = data.mow_vi_22_23_filename.split(',');

                    if (mow_vi_22_23_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_vi_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_vi_22_23_filepath_1[i] + ',mow_vi_22_23_filepath_1';

                            if (mow_vi_22_23_filename_1[i] != "") {
                                mow_vi_22_23_filename_1_1 += j + '.' + '<a href="' + mow_vi_22_23_filepath_1[i] + '"' + 'download>' + mow_vi_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data8' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_8(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_vi_22_23_filename1').html(mow_vi_22_23_filename_1_1);
                    }
                }

                var mow_vi_23_24_filename_1 = "";
                if (data.mow_vi_23_24_filename != null && data.mow_vi_23_24_filename != "" && data.mow_vi_23_24_filepath != null && data.mow_vi_23_24_filepath != "") {

                    var mow_vi_23_24_filename_1_1 = "";
                    mow_vi_23_24_filename_1 = data.mow_vi_23_24_filename.split(',');
                    var mow_vi_23_24_filepath_1 = data.mow_vi_23_24_filepath.split(',');

                    if (mow_vi_23_24_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_vi_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_vi_23_24_filepath_1[i] + ',mow_vi_23_24_filepath_1';

                            if (mow_vi_23_24_filename_1[i] != "") {
                                mow_vi_23_24_filename_1_1 += j + '.' + '<a href="' + mow_vi_23_24_filepath_1[i] + '"' + 'download>' + mow_vi_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data8' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_8(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_vi_23_24_filename1').html(mow_vi_23_24_filename_1_1);
                    }
                }
                var mow_vi_24_25_filename_1 = "";
                if (data.mow_vi_24_25_filename != null && data.mow_vi_24_25_filename != "" && data.mow_vi_24_25_filepath != null && data.mow_vi_24_25_filepath != "") {

                    var mow_vi_24_25_filename_1_1 = "";
                    mow_vi_24_25_filename_1 = data.mow_vi_24_25_filename.split(',');
                    var mow_vi_24_25_filepath_1 = data.mow_vi_24_25_filepath.split(',');

                    if (mow_vi_24_25_filename_1.length != 0) {
                        var j = 1;

                        for (var i = 0; i < mow_vi_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            var SS1 = mow_vi_24_25_filepath_1[i] + ',mow_vi_24_25_filepath_1';

                            if (mow_vi_24_25_filename_1[i] != "") {
                                mow_vi_24_25_filename_1_1 += j + '.' + '<a href="' + mow_vi_24_25_filepath_1[i] + '"' + 'download>' + mow_vi_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="mow_data8' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli1_8(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#mow_vi_24_25_filename1').html(mow_vi_24_25_filename_1_1);
                    }
                }
            }

            if (data == "NO") {
                $('#mow_vi_20_21_filename1').html("");

                $('#mow_vi_21_22_filename1').html("");
                $('#mow_vi_22_23_filename1').html("");
                $('#mow_vi_23_24_filename1').html("");
                $('#mow_vi_24_25_filename1').html("");
            }
            HideFinctions();

        }
    });

}



//dli 2
function abhy_dli_two_one_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_two_one_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#waterbudgets_ii_20_21_filename1').html("");

            $('#waterbudgets_ii_21_22_filename1').html("");
            $('#waterbudgets_ii_22_23_filename1').html("");
            $('#waterbudgets_ii_23_24_filename1').html("");
            $('#waterbudgets_ii_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            //waterbudgets_ii_20_21_filepath
            if (data.length != 0) {

                var waterbudgets_ii_20_21_filename_1 = "";
                if (data.waterbudgets_ii_20_21_filename != null && data.waterbudgets_ii_20_21_filename != "" && data.waterbudgets_ii_20_21_filepath != null && data.waterbudgets_ii_20_21_filepath != "") {

                    var waterbudgets_ii_20_21_filename_1_1 = "";
                    waterbudgets_ii_20_21_filename_1 = data.waterbudgets_ii_20_21_filename.split(',');
                    var waterbudgets_ii_20_21_filepath_1 = data.waterbudgets_ii_20_21_filepath.split(',');
                    if (waterbudgets_ii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterbudgets_ii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (waterbudgets_ii_20_21_filename_1[i] != "") {
                                var SS1 = waterbudgets_ii_20_21_filepath_1[i] + ',waterbudgets_ii_20_21_filepath_1';

                                waterbudgets_ii_20_21_filename_1_1 += j + '.' + '<a href="' + waterbudgets_ii_20_21_filepath_1[i] + '"' + ' target="_blank" download>' + waterbudgets_ii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi' + Z + '" value="' + SS1 + '"> <button   onclick="RemovePath_Dli2_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterbudgets_ii_20_21_filename1').html(waterbudgets_ii_20_21_filename_1_1);
                    }
                }
                var waterbudgets_ii_21_22_filename_1 = "";
                if (data.waterbudgets_ii_21_22_filename != null && data.waterbudgets_ii_21_22_filename != "" && data.waterbudgets_ii_21_22_filepath != null && data.waterbudgets_ii_21_22_filepath != "") {

                    var waterbudgets_ii_21_22_filename_1_1 = "";
                    waterbudgets_ii_21_22_filename_1 = data.waterbudgets_ii_21_22_filename.split(',');
                    var waterbudgets_ii_21_22_filepath_1 = data.waterbudgets_ii_20_21_filepath.split(',');
                    if (waterbudgets_ii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterbudgets_ii_21_22_filename_1.length; i++) {
                            if (waterbudgets_ii_21_22_filename_1[i] != "") {
                                var SS1 = waterbudgets_ii_21_22_filepath_1[i] + ',waterbudgets_ii_21_22_filepath_1';
                                Z = Z + 1;
                                waterbudgets_ii_21_22_filename_1_1 += j + '.' + '<a href="' + waterbudgets_ii_21_22_filepath_1[i] + '"' + ' target="_blank" download>' + waterbudgets_ii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterbudgets_ii_21_22_filename1').html(waterbudgets_ii_21_22_filename_1_1);
                    }
                }
                var waterbudgets_ii_22_23_filename_1 = "";
                if (data.waterbudgets_ii_22_23_filename != null && data.waterbudgets_ii_22_23_filename != "" && data.waterbudgets_ii_22_23_filepath != null && data.waterbudgets_ii_22_23_filepath != "") {

                    var waterbudgets_ii_22_23_filename_1_1 = "";
                    waterbudgets_ii_22_23_filename_1 = data.waterbudgets_ii_22_23_filename.split(',');
                    var waterbudgets_ii_22_23_filepath_1 = data.waterbudgets_ii_22_23_filepath.split(',');
                    if (waterbudgets_ii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterbudgets_ii_22_23_filename_1.length; i++) {

                            if (waterbudgets_ii_22_23_filename_1[i] != "") {
                                var SS1 = waterbudgets_ii_22_23_filepath_1[i] + ',waterbudgets_ii_22_23_filepath_1';
                                Z = Z + 1;
                                waterbudgets_ii_22_23_filename_1_1 += j + '.' + '<a href="' + waterbudgets_ii_22_23_filepath_1[i] + '"' + ' target="_blank" download>' + waterbudgets_ii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterbudgets_ii_22_23_filename1').html(waterbudgets_ii_22_23_filename_1_1);
                    }
                }
                var waterbudgets_ii_23_24_filename_1 = "";
                if (data.waterbudgets_ii_23_24_filename != null && data.waterbudgets_ii_23_24_filename != "" && data.waterbudgets_ii_23_24_filepath != null && data.waterbudgets_ii_23_24_filepath != "") {

                    var waterbudgets_ii_23_24_filename_1_1 = "";
                    waterbudgets_ii_23_24_filename_1 = data.waterbudgets_ii_23_24_filename.split(',');
                    var waterbudgets_ii_23_24_filepath_1 = data.waterbudgets_ii_23_24_filepath.split(',');
                    if (waterbudgets_ii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterbudgets_ii_23_24_filename_1.length; i++) {
                            if (waterbudgets_ii_23_24_filename_1[i] != "") {
                                var SS1 = waterbudgets_ii_23_24_filepath_1[i] + ',waterbudgets_ii_23_24_filepath_1';
                                Z = Z + 1;
                                waterbudgets_ii_23_24_filename_1_1 += j + '.' + '<a href="' + waterbudgets_ii_23_24_filepath_1[i] + '"' + ' target="_blank" download>' + waterbudgets_ii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterbudgets_ii_23_24_filename1').html(waterbudgets_ii_23_24_filename_1_1);
                    }
                }
                var waterbudgets_ii_24_25_filename_1 = "";
                if (data.waterbudgets_ii_24_25_filename != null && data.waterbudgets_ii_24_25_filename != "" && data.waterbudgets_ii_24_25_filepath != null && data.waterbudgets_ii_24_25_filepath != "") {

                    var waterbudgets_ii_24_25_filename_1_1 = "";
                    waterbudgets_ii_24_25_filename_1 = data.waterbudgets_ii_24_25_filename.split(',');
                    var waterbudgets_ii_24_25_filepath_1 = data.waterbudgets_ii_24_25_filepath.split(',');
                    if (waterbudgets_ii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < waterbudgets_ii_24_25_filename_1.length; i++) {
                            if (waterbudgets_ii_24_25_filename_1[i] != "") {
                                var SS1 = waterbudgets_ii_24_25_filepath_1[i] + ',waterbudgets_ii_24_25_filepath_1';
                                Z = Z + 1;
                                waterbudgets_ii_24_25_filename_1_1 += j + '.' + '<a href="' + waterbudgets_ii_24_25_filepath_1[i] + '"' + ' target="_blank" download>' + waterbudgets_ii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#waterbudgets_ii_24_25_filename1').html(waterbudgets_ii_24_25_filename_1_1);
                    }
                }
                //$('#waterbudgets_ii_20_21_filename1').text(data.waterbudgets_ii_20_21_filename);
                //$('#waterbudgets_ii_21_22_filename1').text(data.waterbudgets_ii_21_22_filename);
                //$('#waterbudgets_ii_22_23_filename1').text(data.waterbudgets_ii_22_23_filename);
                //$('#waterbudgets_ii_23_24_filename1').text(data.waterbudgets_ii_23_24_filename);
                //$('#waterbudgets_ii_24_25_filename1').text(data.waterbudgets_ii_24_25_filename);
            }
            if (data == "NO") {
                $('#waterbudgets_ii_20_21_filename1').text("");

                $('#waterbudgets_ii_21_22_filename1').text("");
                $('#waterbudgets_ii_22_23_filename1').text("");
                $('#waterbudgets_ii_23_24_filename1').text("");
                $('#waterbudgets_ii_24_25_filename1').text("");
            }
            HideFinctions();

        }
    });

}

function abhy_dli_two_two_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_two_two_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#wsp_ii_20_21_filename1').html("");

            $('#wsp_ii_21_22_filename1').html("");
            $('#wsp_ii_22_23_filename1').html("");
            $('#wsp_ii_23_24_filename1').html("");
            $('#wsp_ii_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var wsp_ii_20_21_filename_1 = "";
                if (data.wsp_ii_20_21_filename != null && data.wsp_ii_20_21_filename != "" && data.wsp_ii_20_21_filepath != null && data.wsp_ii_20_21_filepath != "") {

                    var wsp_ii_20_21_filename_1_1 = "";
                    wsp_ii_20_21_filename_1 = data.wsp_ii_20_21_filename.split(',');
                    var wsp_ii_20_21_filepath_1 = data.wsp_ii_20_21_filepath.split(',');
                    if (wsp_ii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < wsp_ii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (wsp_ii_20_21_filename_1[i] != "") {
                                var SS1 = wsp_ii_20_21_filepath_1[i] + ',wsp_ii_20_21_filepath_1';
                                wsp_ii_20_21_filename_1_1 += j + '.' + '<a href="' + wsp_ii_20_21_filepath_1[i] + '"' + ' target="_blank" download>' + wsp_ii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#wsp_ii_20_21_filename1').html(wsp_ii_20_21_filename_1_1);
                    }
                }

                var wsp_ii_21_22_filename_1 = "";
                if (data.wsp_ii_21_22_filename != null && data.wsp_ii_21_22_filename != "" && data.wsp_ii_21_22_filepath != null && data.wsp_ii_21_22_filepath != "") {

                    var wsp_ii_21_22_filename_1_1 = "";
                    wsp_ii_21_22_filename_1 = data.wsp_ii_21_22_filename.split(',');
                    var wsp_ii_21_22_filepath_1 = data.wsp_ii_21_22_filepath.split(',');
                    if (wsp_ii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < wsp_ii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (wsp_ii_21_22_filename_1[i] != "") {
                                var SS1 = wsp_ii_21_22_filepath_1[i] + ',wsp_ii_21_22_filepath_1';
                                wsp_ii_21_22_filename_1_1 += j + '.' + '<a href="' + wsp_ii_21_22_filepath_1[i] + '"' + ' target="_blank" download>' + wsp_ii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#wsp_ii_21_22_filename1').html(wsp_ii_21_22_filename_1_1);
                    }
                }
                var wsp_ii_22_23_filename_1 = "";
                if (data.wsp_ii_22_23_filename != null && data.wsp_ii_22_23_filename != "" && data.wsp_ii_22_23_filepath != null && data.wsp_ii_22_23_filepath != "") {

                    var wsp_ii_22_23_filename_1_1 = "";
                    wsp_ii_22_23_filename_1 = data.wsp_ii_22_23_filename.split(',');
                    var wsp_ii_22_23_filepath_1 = data.wsp_ii_22_23_filepath.split(',');
                    if (wsp_ii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < wsp_ii_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (wsp_ii_22_23_filename_1[i] != "") {
                                var SS1 = wsp_ii_22_23_filepath_1[i] + ',wsp_ii_22_23_filepath_1';
                                wsp_ii_22_23_filename_1_1 += j + '.' + '<a href="' + wsp_ii_22_23_filepath_1[i] + '"' + ' target="_blank" download>' + wsp_ii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#wsp_ii_22_23_filename1').html(wsp_ii_22_23_filename_1_1);
                    }
                }
                var wsp_ii_23_24_filename_1 = "";
                if (data.wsp_ii_23_24_filename != null && data.wsp_ii_23_24_filename != "" && data.wsp_ii_23_24_filepath != null && data.wsp_ii_23_24_filepath != "") {

                    var wsp_ii_23_24_filename_1_1 = "";
                    wsp_ii_23_24_filename_1 = data.wsp_ii_23_24_filename.split(',');
                    var wsp_ii_23_24_filepath_1 = data.wsp_ii_23_24_filepath.split(',');
                    if (wsp_ii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < wsp_ii_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (wsp_ii_23_24_filename_1[i] != "") {
                                var SS1 = wsp_ii_23_24_filepath_1[i] + ',wsp_ii_23_24_filepath_1';
                                wsp_ii_23_24_filename_1_1 += j + '.' + '<a href="' + wsp_ii_23_24_filepath_1[i] + '"' + ' target="_blank" download>' + wsp_ii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#wsp_ii_23_24_filename1').html(wsp_ii_23_24_filename_1_1);
                    }
                }
                var wsp_ii_24_25_filename_1 = "";
                if (data.wsp_ii_24_25_filename != null && data.wsp_ii_24_25_filename != "" && data.wsp_ii_24_25_filepath != null && data.wsp_ii_24_25_filepath != "") {

                    var wsp_ii_24_25_filename_1_1 = "";
                    wsp_ii_24_25_filename_1 = data.wsp_ii_24_25_filename.split(',');
                    var wsp_ii_24_25_filepath_1 = data.wsp_ii_24_25_filepath.split(',');
                    if (wsp_ii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < wsp_ii_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (wsp_ii_24_25_filename_1[i] != "") {
                                var SS1 = wsp_ii_24_25_filepath_1[i] + ',wsp_ii_24_25_filepath_1';
                                wsp_ii_24_25_filename_1_1 += j + '.' + '<a href="' + wsp_ii_24_25_filepath_1[i] + '"' + ' target="_blank" download>' + wsp_ii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#wsp_ii_24_25_filename1').html(wsp_ii_24_25_filename_1_1);
                    }
                }
                //$('#wsp_ii_20_21_filename1').text(data.wsp_ii_20_21_filename);
                //$('#wsp_ii_21_22_filename1').text(data.wsp_ii_21_22_filename);
                //$('#wsp_ii_22_23_filename1').text(data.wsp_ii_22_23_filename);
                //$('#wsp_ii_23_24_filename1').text(data.wsp_ii_23_24_filename);
                //$('#wsp_ii_24_25_filename1').text(data.wsp_ii_24_25_filename);
            }
            if (data == "NO") {
                $('#wsp_ii_20_21_filename1').text("");

                $('#wsp_ii_21_22_filename1').text("");
                $('#wsp_ii_22_23_filename1').text("");
                $('#wsp_ii_23_24_filename1').text("");
                $('#wsp_ii_24_25_filename1').text("");
            }
            HideFinctions();

        }
    });

}

function abhy_dli_two_three_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_two_three_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#community_ii_20_21_filename1').html("");

            $('#community_ii_21_22_filename1').html("");
            $('#community_ii_22_23_filename1').html("");
            $('#community_ii_23_24_filename1').html("");
            $('#community_ii_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var community_ii_20_21_filename_1 = "";
                if (data.community_ii_20_21_filename != null && data.community_ii_20_21_filename != "" && data.community_ii_20_21_filepath != null && data.community_ii_20_21_filepath != "") {

                    var community_ii_20_21_filename_1_1 = "";
                    community_ii_20_21_filename_1 = data.community_ii_20_21_filename.split(',');
                    var community_ii_20_21_filepath_1 = data.community_ii_20_21_filepath.split(',');
                    if (community_ii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_ii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_ii_20_21_filename_1[i] != "") {
                                var SS1 = community_ii_20_21_filepath_1[i] + ',community_ii_20_21_filepath_1';
                                community_ii_20_21_filename_1_1 += j + '.' + '<a href="' + community_ii_20_21_filepath_1[i] + '"' + ' target="_blank" download>' + community_ii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_III' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_III(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_ii_20_21_filename1').html(community_ii_20_21_filename_1_1);
                    }
                }
                var community_ii_21_22_filename_1 = "";
                if (data.community_ii_21_22_filename != null && data.community_ii_21_22_filename != "" && data.community_ii_21_22_filepath != null && data.community_ii_21_22_filepath != "") {

                    var community_ii_21_22_filename_1_1 = "";
                    community_ii_21_22_filename_1 = data.community_ii_21_22_filename.split(',');
                    var community_ii_21_22_filepath_1 = data.community_ii_21_22_filepath.split(',');
                    if (community_ii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_ii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_ii_21_22_filename_1[i] != "") {
                                var SS1 = community_ii_21_22_filepath_1[i] + ',community_ii_21_22_filepath_1';
                                community_ii_21_22_filename_1_1 += j + '.' + '<a href="' + community_ii_21_22_filepath_1[i] + '"' + ' target="_blank" download>' + community_ii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_III' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_III(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_ii_21_22_filename1').html(community_ii_21_22_filename_1_1);
                    }
                }
                var community_ii_22_23_filename_1 = "";
                if (data.community_ii_22_23_filename != null && data.community_ii_22_23_filename != "" && data.community_ii_22_23_filepath != null && data.community_ii_22_23_filepath != "") {

                    var community_ii_22_23_filename_1_1 = "";
                    community_ii_22_23_filename_1 = data.community_ii_22_23_filename.split(',');
                    var community_ii_22_23_filepath_1 = data.community_ii_22_23_filepath.split(',');
                    if (community_ii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_ii_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_ii_22_23_filename_1[i] != "") {
                                var SS1 = community_ii_22_23_filepath_1[i] + ',community_ii_22_23_filepath_1';
                                community_ii_22_23_filename_1_1 += j + '.' + '<a href="' + community_ii_22_23_filepath_1[i] + '"' + ' target="_blank" download>' + community_ii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_III' + Z + '" value="' + SS1 + '"> <button   onclick="RemovePath_Dli2_III(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_ii_22_23_filename1').html(community_ii_22_23_filename_1_1);
                    }
                }
                var community_ii_23_24_filename_1 = "";
                if (data.community_ii_23_24_filename != null && data.community_ii_23_24_filename != "" && data.community_ii_23_24_filepath != null && data.community_ii_23_24_filepath != "") {

                    var community_ii_23_24_filename_1_1 = "";
                    community_ii_23_24_filename_1 = data.community_ii_23_24_filename.split(',');
                    var community_ii_23_24_filepath_1 = data.community_ii_23_24_filepath.split(',');
                    if (community_ii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_ii_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_ii_23_24_filename_1[i] != "") {
                                var SS1 = community_ii_23_24_filepath_1[i] + ',community_ii_23_24_filepath_1';
                                community_ii_23_24_filename_1_1 += j + '.' + '<a href="' + community_ii_23_24_filepath_1[i] + '"' + ' target="_blank" download>' + community_ii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_III' + Z + '" value="' + SS1 + '"> <button   onclick="RemovePath_Dli2_III(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_ii_23_24_filename1').html(community_ii_23_24_filename_1_1);
                    }
                }

                var community_ii_24_25_filename_1 = "";
                if (data.community_ii_24_25_filename != null && data.community_ii_24_25_filename != "" && data.community_ii_24_25_filepath != null && data.community_ii_24_25_filepath != "") {

                    var community_ii_24_25_filename_1_1 = "";
                    community_ii_24_25_filename_1 = data.community_ii_24_25_filename.split(',');
                    var community_ii_24_25_filepath_1 = data.community_ii_24_25_filepath.split(',');
                    if (community_ii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_ii_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_ii_24_25_filename_1[i] != "") {
                                var SS1 = community_ii_24_25_filepath_1[i] + ',community_ii_24_25_filepath_1';
                                community_ii_24_25_filename_1_1 += j + '.' + '<a href="' + community_ii_24_25_filepath_1[i] + '"' + ' target="_blank" download>' + community_ii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_III' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_III(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_ii_24_25_filename1').html(community_ii_24_25_filename_1_1);
                    }
                }
                //$('#community_ii_20_21_filename1').text(data.community_ii_20_21_filename);
                //$('#community_ii_21_22_filename1').text(data.community_ii_21_22_filename);
                //$('#community_ii_22_23_filename1').text(data.community_ii_22_23_filename);
                //$('#community_ii_23_24_filename1').text(data.community_ii_23_24_filename);
                //$('#community_ii_24_25_filename1').text(data.community_ii_24_25_filename);
            }
            if (data == "NO") {
                $('#community_ii_20_21_filename1').text("");

                $('#community_ii_21_22_filename1').text("");
                $('#community_ii_22_23_filename1').text("");
                $('#community_ii_23_24_filename1').text("");
                $('#community_ii_24_25_filename1').text("");
            }
            HideFinctions();

        }
    });

}

function abhy_dli_two_four_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_two_four_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#community_vi_20_21_filename').html("");

            $('#community_vi_21_22_filename').html("");
            $('#community_vi_22_23_filename').html("");
            $('#community_vi_23_24_filename').html("");
            $('#community_vi_24_25_filename').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {

                var community_vi_20_21_filename_1 = "";
                if (data.community_vi_20_21_filename != null && data.community_vi_20_21_filename != "" && data.community_vi_20_21_filepath != null && data.community_vi_20_21_filepath != "") {

                    var community_vi_20_21_filename_1_1 = "";
                    community_vi_20_21_filename_1 = data.community_vi_20_21_filename.split(',');
                    var community_vi_20_21_filepath_1 = data.community_vi_20_21_filepath.split(',');
                    if (community_vi_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_vi_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_vi_20_21_filename_1[i] != "") {
                                var SS1 = community_vi_20_21_filepath_1[i] + ',community_vi_20_21_filepath_1';
                                community_vi_20_21_filename_1_1 += j + '.' + '<a href="' + community_vi_20_21_filepath_1[i] + '"' + ' target="_blank" download>' + community_vi_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_IV' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_IV(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_vi_20_21_filename1').html(community_vi_20_21_filename_1_1);
                    }
                }
                var community_vi_21_22_filename_1 = "";
                if (data.community_vi_21_22_filename != null && data.community_vi_21_22_filename != "" && data.community_vi_21_22_filepath != null && data.community_vi_21_22_filepath != "") {

                    var community_vi_21_22_filename_1_1 = "";
                    community_vi_21_22_filename_1 = data.community_vi_21_22_filename.split(',');
                    var community_vi_21_22_filepath_1 = data.community_vi_21_22_filepath.split(',');
                    if (community_vi_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_vi_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_vi_21_22_filename_1[i] != "") {
                                var SS1 = community_vi_21_22_filepath_1[i] + ',community_vi_21_22_filepath_1';
                                community_vi_21_22_filename_1_1 += j + '.' + '<a href="' + community_vi_21_22_filepath_1[i] + '"' + ' target="_blank" download>' + community_vi_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_IV' + Z + '" value="' + SS1 + '"> <button   onclick="RemovePath_Dli2_IV(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_vi_21_22_filename1').html(community_vi_21_22_filename_1_1);
                    }
                }
                var community_vi_22_23_filename_1 = "";
                if (data.community_vi_22_23_filename != null && data.community_vi_22_23_filename != "" && data.community_vi_22_23_filepath != null && data.community_vi_22_23_filepath != "") {

                    var community_vi_22_23_filename_1_1 = "";
                    community_vi_22_23_filename_1 = data.community_vi_22_23_filename.split(',');
                    var community_vi_22_23_filepath_1 = data.community_vi_22_23_filepath.split(',');
                    if (community_vi_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_vi_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_vi_22_23_filename_1[i] != "") {
                                var SS1 = community_vi_22_23_filepath_1[i] + ',community_vi_22_23_filepath_1';
                                community_vi_22_23_filename_1_1 += j + '.' + '<a href="' + community_vi_22_23_filepath_1[i] + '"' + ' target="_blank" download>' + community_vi_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_IV' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_IV(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_vi_22_23_filename1').html(community_vi_22_23_filename_1_1);
                    }
                }
                var community_vi_23_24_filename_1 = "";
                if (data.community_vi_23_24_filename != null && data.community_vi_23_24_filename != "" && data.community_vi_23_24_filepath != null && data.community_vi_23_24_filepath != "") {

                    var community_vi_23_24_filename_1_1 = "";
                    community_vi_23_24_filename_1 = data.community_vi_23_24_filename.split(',');
                    var community_vi_23_24_filepath_1 = data.community_vi_23_24_filepath.split(',');
                    if (community_vi_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_vi_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_vi_23_24_filename_1[i] != "") {
                                var SS1 = community_vi_23_24_filepath_1[i] + ',community_vi_23_24_filepath_1';
                                community_vi_23_24_filename_1_1 += j + '.' + '<a href="' + community_vi_23_24_filepath_1[i] + '"' + ' target="_blank" download>' + community_vi_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_IV' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_IV(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_vi_23_24_filename1').html(community_vi_23_24_filename_1_1);
                    }
                }
                var community_vi_24_25_filename_1 = "";
                if (data.community_vi_24_25_filename != null && data.community_vi_24_25_filename != "" && data.community_vi_24_25_filepath != null && data.community_vi_24_25_filepath != "") {

                    var community_vi_24_25_filename_1_1 = "";
                    community_vi_24_25_filename_1 = data.community_vi_24_25_filename.split(',');
                    var community_vi_24_25_filepath_1 = data.community_vi_24_25_filepath.split(',');
                    if (community_vi_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < community_vi_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (community_vi_24_25_filename_1[i] != "") {
                                var SS1 = community_vi_24_25_filepath_1[i] + ',community_vi_24_25_filepath_1';
                                community_vi_24_25_filename_1_1 += j + '.' + '<a href="' + community_vi_24_25_filepath_1[i] + '"' + ' target="_blank" download>' + community_vi_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLi2_IV' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli2_IV(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#community_vi_24_25_filename1').html(community_vi_24_25_filename_1_1);
                    }
                }

                //$('#community_vi_20_21_filename').text(data.community_vi_20_21_filename);
                //$('#community_vi_21_22_filename').text(data.community_vi_21_22_filename);
                //$('#community_vi_22_23_filename').text(data.community_vi_22_23_filename);
                //$('#community_vi_23_24_filename').text(data.community_vi_23_24_filename);
                //$('#community_vi_24_25_filename').text(data.community_vi_24_25_filename);
            }
            if (data == "NO") {
                $('#community_vi_20_21_filename').text("");

                $('#community_vi_21_22_filename').text("");
                $('#community_vi_22_23_filename').text("");
                $('#community_vi_23_24_filename').text("");
                $('#community_vi_24_25_filename').text("");
            }

            HideFinctions();
        }
    });

}

//dli 3

function abhy_dli_three_one_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_three_one_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#statelevel_ii_20_21_filename1').html("");
            $('#statelevel_ii_21_22_filename1').html("");
            $('#statelevel_ii_22_23_filename1').html("");
            $('#statelevel_ii_23_24_filename1').html("");
            $('#statelevel_ii_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var statelevel_ii_20_21_filename_1 = "";
                if (data.statelevel_ii_20_21_filename != null && data.statelevel_ii_20_21_filename != "" && data.statelevel_ii_20_21_filepath != null && data.statelevel_ii_20_21_filepath != "") {

                    var statelevel_ii_20_21_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    statelevel_ii_20_21_filename_1 = data.statelevel_ii_20_21_filename.split(',');
                    var statelevel_ii_20_21_filepath_1 = data.statelevel_ii_20_21_filepath.split(',');
                    if (statelevel_ii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statelevel_ii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statelevel_ii_20_21_filename_1[i] != "") {
                                var SS1 = statelevel_ii_20_21_filepath_1[i] + ',statelevel_ii_20_21_filepath_1';
                                statelevel_ii_20_21_filename_1_1 += j + '.' + '<a href="' + statelevel_ii_20_21_filepath_1[i] + '"' + 'download>' + statelevel_ii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="StateLevel' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli3_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statelevel_ii_20_21_filename1').html(statelevel_ii_20_21_filename_1_1);
                    }
                }
                var statelevel_ii_21_22_filename_1 = "";
                if (data.statelevel_ii_21_22_filename != null && data.statelevel_ii_21_22_filename != "" && data.statelevel_ii_21_22_filepath != null && data.statelevel_ii_21_22_filepath != "") {

                    var statelevel_ii_21_22_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    statelevel_ii_21_22_filename_1 = data.statelevel_ii_21_22_filename.split(',');
                    var statelevel_ii_21_22_filepath_1 = data.statelevel_ii_21_22_filepath.split(',');
                    if (statelevel_ii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statelevel_ii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statelevel_ii_21_22_filename_1[i] != "") {
                                var SS1 = statelevel_ii_21_22_filepath_1[i] + ',statelevel_ii_21_22_filepath_1';

                                statelevel_ii_21_22_filename_1_1 += j + '.' + '<a href="' + statelevel_ii_21_22_filepath_1[i] + '"' + 'download>' + statelevel_ii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="StateLevel' + Z + '" value="' + SS1 + '"> <button   onclick="RemovePath_Dli3_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statelevel_ii_21_22_filename1').html(statelevel_ii_21_22_filename_1_1);
                    }
                }
                var statelevel_ii_22_23_filename_1 = "";
                if (data.statelevel_ii_22_23_filename != null && data.statelevel_ii_22_23_filename != "" && data.statelevel_ii_22_23_filepath != null && data.statelevel_ii_22_23_filepath != "") {

                    var statelevel_ii_22_23_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    statelevel_ii_22_23_filename_1 = data.statelevel_ii_22_23_filename.split(',');
                    var statelevel_ii_22_23_filepath_1 = data.statelevel_ii_22_23_filepath.split(',');
                    if (statelevel_ii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statelevel_ii_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (statelevel_ii_22_23_filename_1[i] != "") {
                                var SS1 = statelevel_ii_22_23_filepath_1[i] + ',statelevel_ii_22_23_filepath_1';

                                statelevel_ii_22_23_filename_1_1 += j + '.' + '<a href="' + statelevel_ii_22_23_filepath_1[i] + '"' + 'download>' + statelevel_ii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="StateLevel' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli3_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statelevel_ii_22_23_filename1').html(statelevel_ii_22_23_filename_1_1);
                    }
                }
                var statelevel_ii_23_24_filename_1 = "";
                if (data.statelevel_ii_23_24_filename != null && data.statelevel_ii_23_24_filename != "" && data.statelevel_ii_23_24_filepath != null && data.statelevel_ii_23_24_filepath != "") {

                    var statelevel_ii_23_24_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    statelevel_ii_23_24_filename_1 = data.statelevel_ii_23_24_filename.split(',');
                    var statelevel_ii_23_24_filepath_1 = data.statelevel_ii_23_24_filepath.split(',');
                    if (statelevel_ii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statelevel_ii_23_24_filename_1.length; i++) {
                            if (statelevel_ii_23_24_filename_1[i] != "") {
                                Z = Z + 1;
                                var SS1 = statelevel_ii_23_24_filepath_1[i] + ',statelevel_ii_23_24_filepath_1';

                                statelevel_ii_23_24_filename_1_1 += j + '.' + '<a href="' + statelevel_ii_23_24_filepath_1[i] + '"' + 'download>' + statelevel_ii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="StateLevel' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli3_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statelevel_ii_23_24_filename1').html(statelevel_ii_23_24_filename_1_1);
                    }
                }
                var statelevel_ii_24_25_filename_1 = "";
                if (data.statelevel_ii_24_25_filename != null && data.statelevel_ii_24_25_filename != "" && data.statelevel_ii_24_25_filepath != null && data.statelevel_ii_24_25_filepath != "") {

                    var statelevel_ii_24_25_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    statelevel_ii_24_25_filename_1 = data.statelevel_ii_24_25_filename.split(',');
                    var statelevel_ii_24_25_filepath_1 = data.statelevel_ii_24_25_filepath.split(',');
                    if (statelevel_ii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < statelevel_ii_24_25_filename_1.length; i++) {
                            if (statelevel_ii_24_25_filename_1[i] != "") {
                                Z = Z + 1;
                                var SS1 = statelevel_ii_24_25_filepath_1[i] + ',statelevel_ii_24_25_filepath_1';

                                statelevel_ii_24_25_filename_1_1 += j + '.' + '<a href="' + statelevel_ii_24_25_filepath_1[i] + '"' + 'download>' + statelevel_ii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="StateLevel' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli3_20_21(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#statelevel_ii_24_25_filename1').html(statelevel_ii_24_25_filename_1_1);
                    }
                }
            }
            if (data == "NO") {
                $('#statelevel_ii_20_21_filename1').text("");

                $('#statelevel_ii_21_22_filename1').text("");
                $('#statelevel_ii_22_23_filename1').text("");
                $('#statelevel_ii_23_24_filename1').text("");
                $('#statelevel_ii_24_25_filename1').text("");
            }

            HideFinctions();
        }
    });

}

//dli 4
function abhy_dli_four_one_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_four_one_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;

            $('#irrigation_iii_20_21_filename1').html("");
            $('#irrigation_iii_21_22_filename1').html("");
            $('#irrigation_iii_22_23_filename1').html("");
            $('#irrigation_iii_23_24_filename1').html("");
            $('#irrigation_iii_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {

                var irrigation_iii_20_21_filename_1 = "";
                if (data.irrigation_iii_20_21_filename != null && data.irrigation_iii_20_21_filename != "" && data.irrigation_iii_20_21_filepath != null && data.irrigation_iii_20_21_filepath != "") {

                    var irrigation_iii_20_21_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    irrigation_iii_20_21_filename_1 = data.irrigation_iii_20_21_filename.split(',');
                    var irrigation_iii_20_21_filepath_1 = data.irrigation_iii_20_21_filepath.split(',');
                    if (irrigation_iii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < irrigation_iii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (irrigation_iii_20_21_filename_1[i] != "") {
                                var SS1 = irrigation_iii_20_21_filepath_1[i] + ',irrigation_iii_20_21_filepath_1';
                                irrigation_iii_20_21_filename_1_1 += j + '.' + '<a href="' + irrigation_iii_20_21_filepath_1[i] + '"' + 'download>' + irrigation_iii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#irrigation_iii_20_21_filename1').html(irrigation_iii_20_21_filename_1_1);
                    }
                }
                var irrigation_iii_21_22_filename_1 = "";
                if (data.irrigation_iii_21_22_filename != null && data.irrigation_iii_21_22_filename != "" && data.irrigation_iii_21_22_filepath != null && data.irrigation_iii_21_22_filepath != "") {

                    var irrigation_iii_21_22_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    irrigation_iii_21_22_filename_1 = data.irrigation_iii_21_22_filename.split(',');
                    var irrigation_iii_21_22_filepath_1 = data.irrigation_iii_21_22_filepath.split(',');
                    if (irrigation_iii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < irrigation_iii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (irrigation_iii_21_22_filename_1[i] != "") {
                                var SS1 = irrigation_iii_21_22_filepath_1[i] + ',irrigation_iii_21_22_filepath_1';
                                irrigation_iii_21_22_filename_1_1 += j + '.' + '<a href="' + irrigation_iii_21_22_filepath_1[i] + '"' + 'download>' + irrigation_iii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                            }
                        }
                        $('#irrigation_iii_21_22_filename1').html(irrigation_iii_21_22_filename_1_1);
                    }
                }
                var irrigation_iii_22_23_filename_1 = "";
                if (data.irrigation_iii_22_23_filename != null && data.irrigation_iii_22_23_filename != "" && data.irrigation_iii_22_23_filepath != null && data.irrigation_iii_22_23_filepath != "") {

                    var irrigation_iii_22_23_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    irrigation_iii_22_23_filename_1 = data.irrigation_iii_22_23_filename.split(',');
                    var irrigation_iii_22_23_filepath_1 = data.irrigation_iii_22_23_filepath.split(',');
                    if (irrigation_iii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < irrigation_iii_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (irrigation_iii_22_23_filename_1[i] != "") {
                                var SS1 = irrigation_iii_22_23_filepath_1[i] + ',irrigation_iii_22_23_filepath_1';
                                irrigation_iii_22_23_filename_1_1 += j + '.' + '<a href="' + irrigation_iii_22_23_filepath_1[i] + '"' + 'download>' + irrigation_iii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#irrigation_iii_22_23_filename1').html(irrigation_iii_22_23_filename_1_1);
                    }
                }
                var irrigation_iii_23_24_filename_1 = "";
                if (data.irrigation_iii_23_24_filename != null && data.irrigation_iii_23_24_filename != "" && data.irrigation_iii_23_24_filepath != null && data.irrigation_iii_23_24_filepath != "") {

                    var irrigation_iii_23_24_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    irrigation_iii_23_24_filename_1 = data.irrigation_iii_23_24_filename.split(',');
                    var irrigation_iii_23_24_filepath_1 = data.irrigation_iii_23_24_filepath.split(',');
                    if (irrigation_iii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < irrigation_iii_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (irrigation_iii_23_24_filename_1[i] != "") {
                                var SS1 = irrigation_iii_23_24_filepath_1[i] + ',irrigation_iii_23_24_filepath_1';
                                irrigation_iii_23_24_filename_1_1 += j + '.' + '<a href="' + irrigation_iii_23_24_filepath_1[i] + '"' + 'download>' + irrigation_iii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#irrigation_iii_23_24_filename1').html(irrigation_iii_23_24_filename_1_1);
                    }
                }
                var irrigation_iii_24_25_filename_1 = "";
                if (data.irrigation_iii_24_25_filename != null && data.irrigation_iii_24_25_filename != "" && data.irrigation_iii_24_25_filepath != null && data.irrigation_iii_24_25_filepath != "") {

                    var irrigation_iii_24_25_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    irrigation_iii_24_25_filename_1 = data.irrigation_iii_24_25_filename.split(',');
                    var irrigation_iii_24_25_filepath_1 = data.irrigation_iii_24_25_filepath.split(',');
                    if (irrigation_iii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < irrigation_iii_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (irrigation_iii_24_25_filename_1[i] != "") {
                                var SS1 = irrigation_iii_24_25_filepath_1[i] + ',irrigation_iii_24_25_filepath_1';
                                irrigation_iii_24_25_filename_1_1 += j + '.' + '<a href="' + irrigation_iii_24_25_filepath_1[i] + '"' + 'download>' + irrigation_iii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#irrigation_iii_24_25_filename1').html(irrigation_iii_24_25_filename_1_1);
                    }
                }

            }
            if (data == "NO") {
                $('#irrigation_iii_20_21_filename1').text("");

                $('#irrigation_iii_21_22_filename1').text("");
                $('#irrigation_iii_22_23_filename1').text("");
                $('#irrigation_iii_23_24_filename1').text("");
                $('#irrigation_iii_24_25_filename1').text("");
            }

            HideFinctions();
        }
    });

}

function abhy_dli_four_two_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_four_two_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#cropping_v_20_21_filename1').html("");

            $('#cropping_v_21_22_filename1').html("");
            $('#cropping_v_22_23_filename1').html("");
            $('#cropping_v_23_24_filename1').html("");
            $('#cropping_v_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var cropping_v_20_21_filename_1 = "";
                if (data.cropping_v_20_21_filename != null && data.cropping_v_20_21_filename != "" && data.cropping_v_20_21_filepath != null && data.cropping_v_20_21_filepath != "") {

                    var cropping_v_20_21_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    cropping_v_20_21_filename_1 = data.cropping_v_20_21_filename.split(',');
                    var cropping_v_20_21_filepath_1 = data.cropping_v_20_21_filepath.split(',');
                    if (cropping_v_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < cropping_v_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (cropping_v_20_21_filename_1[i] != "") {
                                var SS1 = cropping_v_20_21_filepath_1[i] + ',cropping_v_20_21_filepath_1';
                                cropping_v_20_21_filename_1_1 += j + '.' + '<a href="' + cropping_v_20_21_filepath_1[i] + '"' + 'download>' + cropping_v_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_II' + Z + '" value="' + SS1 + '"> <button onclick="RemovePath_Dli4_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#cropping_v_20_21_filename1').html(cropping_v_20_21_filename_1_1);
                    }
                }
                var cropping_v_21_22_filename_1 = "";
                if (data.cropping_v_21_22_filename != null && data.cropping_v_21_22_filename != "" && data.cropping_v_21_22_filepath != null && data.cropping_v_21_22_filepath != "") {

                    var cropping_v_21_22_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    cropping_v_21_22_filename_1 = data.cropping_v_21_22_filename.split(',');
                    var cropping_v_21_22_filepath_1 = data.cropping_v_21_22_filepath.split(',');
                    if (cropping_v_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < cropping_v_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (cropping_v_21_22_filename_1[i] != "") {
                                var SS1 = cropping_v_21_22_filepath_1[i] + ',cropping_v_21_22_filepath_1';
                                cropping_v_21_22_filename_1_1 += j + '.' + '<a href="' + cropping_v_21_22_filepath_1[i] + '"' + 'download>' + cropping_v_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_II' + Z + '" value="' + SS1 + '"> <button onclick="RemovePath_Dli4_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#cropping_v_21_22_filename1').html(cropping_v_21_22_filename_1_1);
                    }
                }
                var cropping_v_22_23_filename_1 = "";
                if (data.cropping_v_22_23_filename != null && data.cropping_v_22_23_filename != "" && data.cropping_v_22_23_filepath != null && data.cropping_v_22_23_filepath != "") {

                    var cropping_v_22_23_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    cropping_v_22_23_filename_1 = data.cropping_v_22_23_filename.split(',');
                    var cropping_v_22_23_filepath_1 = data.cropping_v_22_23_filepath.split(',');
                    if (cropping_v_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < cropping_v_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (cropping_v_22_23_filename_1[i] != "") {
                                var SS1 = cropping_v_22_23_filepath_1[i] + ',cropping_v_22_23_filepath_1';
                                cropping_v_22_23_filename_1_1 += j + '.' + '<a href="' + cropping_v_22_23_filepath_1[i] + '"' + 'download>' + cropping_v_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#cropping_v_22_23_filename1').html(cropping_v_22_23_filename_1_1);
                    }
                }

                var cropping_v_23_24_filename_1 = "";
                if (data.cropping_v_23_24_filename != null && data.cropping_v_23_24_filename != "" && data.cropping_v_23_24_filepath != null && data.cropping_v_23_24_filepath != "") {

                    var cropping_v_23_24_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    cropping_v_23_24_filename_1 = data.cropping_v_23_24_filename.split(',');
                    var cropping_v_23_24_filepath_1 = data.cropping_v_23_24_filepath.split(',');
                    if (cropping_v_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < cropping_v_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (cropping_v_23_24_filename_1[i] != "") {
                                var SS1 = cropping_v_23_24_filename_1[i] + ',cropping_v_23_24_filepath_1';
                                cropping_v_23_24_filename_1_1 += j + '.' + '<a href="' + cropping_v_23_24_filename_1[i] + '"' + 'download>' + cropping_v_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#cropping_v_23_24_filename1').html(cropping_v_23_24_filename_1_1);
                    }
                }
                var cropping_v_24_25_filename_1 = "";
                if (data.cropping_v_24_25_filename != null && data.cropping_v_24_25_filename != "" && data.cropping_v_24_25_filepath != null && data.cropping_v_24_25_filepath != "") {

                    var cropping_v_24_25_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    cropping_v_24_25_filename_1 = data.cropping_v_24_25_filename.split(',');
                    var cropping_v_24_25_filepath_1 = data.cropping_v_24_25_filepath.split(',');
                    if (cropping_v_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < cropping_v_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (cropping_v_24_25_filename_1[i] != "") {
                                var SS1 = cropping_v_24_25_filepath_1[i] + ',cropping_v_24_25_filepath_1';
                                cropping_v_24_25_filename_1_1 += j + '.' + '<a href="' + cropping_v_24_25_filepath_1[i] + '"' + 'download>' + cropping_v_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI4_II' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli4_II(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#cropping_v_24_25_filename1').html(cropping_v_24_25_filename_1_1);
                    }
                }


            }
            if (data == "NO") {
                $('#cropping_v_20_21_filename1').text("");

                $('#cropping_v_21_22_filename1').text("");
                $('#cropping_v_22_23_filename1').text("");
                $('#cropping_v_23_24_filename1').text("");
                $('#cropping_v_24_25_filename1').text("");
            }

            HideFinctions();
        }
    });

}

//dli 5

function abhy_dli_five_one_upload_row_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/abhy_dli_five_one_upload_row_geting',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (data) {

            var a = 0;
            $('#_blockwise_ii_20_21_filename1').html("");

            $('#_blockwise_ii_21_22_filename1').html("");
            $('#_blockwise_ii_22_23_filename1').html("");
            $('#_blockwise_ii_23_24_filename1').html("");
            $('#_blockwise_ii_24_25_filename1').html("");

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var Z = 0;
            if (data.length != 0) {
                var blockwise_ii_20_21_filename_1 = "";
                if (data.blockwise_ii_20_21_filename != null && data.blockwise_ii_20_21_filename != "" && data.blockwise_ii_20_21_filepath != null && data.blockwise_ii_20_21_filepath != "") {

                    var blockwise_ii_20_21_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    blockwise_ii_20_21_filename_1 = data.blockwise_ii_20_21_filename.split(',');
                    var blockwise_ii_20_21_filepath_1 = data.blockwise_ii_20_21_filepath.split(',');
                    if (blockwise_ii_20_21_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_20_21_filename_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_20_21_filename_1[i] != "") {
                                var SS1 = blockwise_ii_20_21_filepath_1[i] + ',blockwise_ii_20_21_filepath_1';
                                blockwise_ii_20_21_filename_1_1 += j + '.' + '<a href="' + blockwise_ii_20_21_filepath_1[i] + '"' + 'download>' + blockwise_ii_20_21_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI5_I' + Z + '" value="' + SS1 + '"> <button onclick="RemovePath_Dli5_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';

                                j = j + 1;
                            }
                        }
                        $('#_blockwise_ii_20_21_filename1').html(blockwise_ii_20_21_filename_1_1);
                    }
                }
                var blockwise_ii_21_22_filename_1 = "";
                if (data.blockwise_ii_21_22_filename != null && data.blockwise_ii_21_22_filename != "" && data.blockwise_ii_21_22_filepath != null && data.blockwise_ii_21_22_filepath != "") {

                    var blockwise_ii_21_22_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    blockwise_ii_21_22_filename_1 = data.blockwise_ii_21_22_filename.split(',');
                    var blockwise_ii_21_22_filepath_1 = data.blockwise_ii_21_22_filepath.split(',');
                    if (blockwise_ii_21_22_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_21_22_filename_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_21_22_filename_1[i] != "") {
                                var SS1 = blockwise_ii_21_22_filepath_1[i] + ',blockwise_ii_21_22_filepath_1';
                                blockwise_ii_21_22_filename_1_1 += j + '.' + '<a href="' + blockwise_ii_21_22_filepath_1[i] + '"' + 'download>' + blockwise_ii_21_22_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI5_I' + Z + '" value="' + SS1 + '"> <button onclick="RemovePath_Dli5_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#_blockwise_ii_21_22_filename1').html(blockwise_ii_21_22_filename_1_1);
                    }
                }
                var blockwise_ii_22_23_filename_1 = "";
                if (data.blockwise_ii_22_23_filename != null && data.blockwise_ii_22_23_filename != "" && data.blockwise_ii_22_23_filepath != null && data.blockwise_ii_22_23_filepath != "") {

                    var blockwise_ii_22_23_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    blockwise_ii_22_23_filename_1 = data.blockwise_ii_22_23_filename.split(',');
                    var blockwise_ii_22_23_filepath_1 = data.blockwise_ii_22_23_filepath.split(',');
                    if (blockwise_ii_22_23_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_22_23_filename_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_22_23_filename_1[i] != "") {
                                var SS1 = blockwise_ii_22_23_filepath_1[i] + ',blockwise_ii_22_23_filepath_1';
                                blockwise_ii_22_23_filename_1_1 += j + '.' + '<a href="' + blockwise_ii_22_23_filepath_1[i] + '"' + 'download>' + blockwise_ii_22_23_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI5_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli5_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#_blockwise_ii_22_23_filename1').html(blockwise_ii_22_23_filename_1_1);
                    }
                }
                var blockwise_ii_23_24_filename_1 = "";
                if (data.blockwise_ii_23_24_filename != null && data.blockwise_ii_23_24_filename != "" && data.blockwise_ii_23_24_filepath != null && data.blockwise_ii_23_24_filepath != "") {

                    var blockwise_ii_23_24_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    blockwise_ii_23_24_filename_1 = data.blockwise_ii_23_24_filename.split(',');
                    var blockwise_ii_23_24_filepath_1 = data.blockwise_ii_23_24_filepath.split(',');
                    if (blockwise_ii_23_24_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_23_24_filename_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_23_24_filename_1[i] != "") {
                                var SS1 = blockwise_ii_23_24_filepath_1[i] + ',blockwise_ii_23_24_filepath_1';
                                blockwise_ii_23_24_filename_1_1 += j + '.' + '<a href="' + blockwise_ii_23_24_filepath_1[i] + '"' + 'download>' + blockwise_ii_23_24_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI5_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli5_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#_blockwise_ii_23_24_filename1').html(blockwise_ii_23_24_filename_1_1);
                    }
                }
                var blockwise_ii_24_25_filename_1 = "";
                if (data.blockwise_ii_24_25_filename != null && data.blockwise_ii_24_25_filename != "" && data.blockwise_ii_24_25_filepath != null && data.blockwise_ii_24_25_filepath != "") {

                    var blockwise_ii_24_25_filename_1_1 = "";
                    //$('#fistrowdlioneupload1').text(data.waterlevel_iii_20_21_filename);
                    blockwise_ii_24_25_filename_1 = data.blockwise_ii_24_25_filename.split(',');
                    var blockwise_ii_24_25_filepath_1 = data.blockwise_ii_24_25_filepath.split(',');
                    if (blockwise_ii_24_25_filename_1.length != 0) {
                        var j = 1;
                        for (var i = 0; i < blockwise_ii_24_25_filename_1.length; i++) {
                            Z = Z + 1;
                            if (blockwise_ii_24_25_filename_1[i] != "") {
                                var SS1 = blockwise_ii_24_25_filepath_1[i] + ',blockwise_ii_24_25_filepath_1';
                                blockwise_ii_24_25_filename_1_1 += j + '.' + '<a href="' + blockwise_ii_24_25_filepath_1[i] + '"' + 'download>' + blockwise_ii_24_25_filename_1[i] + '\n\n' + '</a><input type="hidden" id="Waterleveldata_DLI5_I' + Z + '" value="' + SS1 + '"> <button  onclick="RemovePath_Dli5_I(' + Z + ')"class="hidethedelete" >Delete</button><br/>';
                                j = j + 1;
                            }
                        }
                        $('#_blockwise_ii_24_25_filename1').html(blockwise_ii_24_25_filename_1_1);
                    }
                }
            }
            if (data == "NO") {
                $('#_blockwise_ii_20_21_filename1').text("");

                $('#_blockwise_ii_21_22_filename1').text("");
                $('#_blockwise_ii_22_23_filename1').text("");
                $('#_blockwise_ii_23_24_filename1').text("");
                $('#_blockwise_ii_24_25_filename1').text("");
            }

            HideFinctions();
        }
    });

}

//DLI1_firstrow_delete
function RemovePath_Dli1_20_21(ss) {


    var Id = "Waterleveldata" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_20_21_DLI1',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_one_upload_row_geting();

            }
        });
    }
}

//DLI1_secondrow_delete
function RemovePath_Dli1_VI(ss) {

    var Id = "Waterleveldata_Vi" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI1_Vi',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_two_upload_row_geting();

            }
        });
    }
}

//DLI1_Thirdrow_delete
function RemovePath_Dli1_b_II(ss) {


    var Id = "Waterleveldata_b_II" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI1_b_II',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_three_upload_row_geting();

            }
        });
    }


}

//DLI1_Fourthrow_delete
function RemovePath_Dli1_b_V(ss) {
    var Id = "Waterleveldata_b_V" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI1_b_V',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_four_upload_row_geting();

            }
        });
    }


}

//fifth row delete
function RemovePath_Dli1_2_II(ss) {
    var Id = "Waterleveldata_2_II" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI1_2_II',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_five_upload_row_geting();

            }
        });
    }


}

//sixth row delete
function RemovePath_Dli1_3_II(ss) {
    var Id = "Waterleveldata_3_II" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI1_3_II',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_six_upload_row_geting();

            }
        });
    }


}

//seventh row delete
function RemovePath_Dli1_7(ss) {
    var Id = "mow_data7" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI1_7',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_seven_upload_row_geting();

            }
        });
    }


}

//eigth row delete
function RemovePath_Dli1_8(ss) {
    var Id = "mow_data8" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI1_8',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_one_eigth_upload_row_geting();

            }
        });
    }


}


// DLI ---- 2------------
function RemovePath_Dli2_20_21(ss) {

    var Id = "Waterleveldata_DLi" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI2_I',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_two_one_upload_row_geting();

            }
        });
    }
}

//row 2
function RemovePath_Dli2_II(ss) {

    var Id = "Waterleveldata_DLi2_II" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI2_II',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_two_two_upload_row_geting();

            }
        });
    }
}

//row 3
function RemovePath_Dli2_III(ss) {

    var Id = "Waterleveldata_DLi2_III" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI2_III',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_two_three_upload_row_geting();

            }
        });
    }
}

//row 4
function RemovePath_Dli2_IV(ss) {

    var Id = "Waterleveldata_DLi2_IV" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI2_IV',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_two_four_upload_row_geting();

            }
        });
    }
}

// DlI---3----

function RemovePath_Dli3_20_21(ss) {

    var Id = "StateLevel" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI3_II',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_three_one_upload_row_geting();

            }
        });
    }
}

//DLI 4------------------------
//row 1
function RemovePath_Dli4_I(ss) {

    var Id = "Waterleveldata_DLI4_I" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI4_I',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_four_one_upload_row_geting();

            }
        });
    }
}

//Row 2
function RemovePath_Dli4_II(ss) {

    var Id = "Waterleveldata_DLI4_II" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI4_II',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_four_two_upload_row_geting();

            }
        });
    }
}


//DLI 5 Delete----------------
//row 1
function RemovePath_Dli5_I(ss) {

    var Id = "Waterleveldata_DLI5_I" + ss;
    var DD = document.getElementById(Id).value;

    if (DD != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/Delete_First_DLI5_I',
            data: { 'Elemnt': DD, 'state': StateName },
            dataType: 'JSON',
            success: function (data) {
                abhy_dli_five_one_upload_row_geting();

            }
        });
    }
}

