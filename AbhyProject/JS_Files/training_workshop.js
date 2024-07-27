

function Event_State_Chnage() {
    var state_name = $('#state_name').val();

    if (state_name == 'Other') {
        $('#other_state_name').show();
        $('#state_name').hide();


    }
    else if (state_name != "0") {
        $('#other_state_name').hide();
        $('#state_name').show();

    }

}

function Save_Training_Working_Info() {


    var i = 0;
    var p_training_name = $('#p_training_name').val();
    var to_date = $('#to_date').val();
    var from_date = $('#from_date').val();

    var training_start = $('#training_start').val();
    var training_end = $('#training_end').val();


    var state_name = $('#state_name').val();

    if (state_name == "Other") {
        state_name = $('#other_state_name');
    }

    var training_status = $('#training_status').val();


    if (p_training_name == "") {
        i = 1;
        alert("Please Enter Event/Training Name");
    }
    else if (from_date == "") {
        i = 1;
        alert("Please Enter From Date");
    }
    else if (to_date == "") {
        i = 1;
        alert("Pleae Enter To Date");
    }
    else if (training_status == "") {
        i = 1;
        alert("Pleae Enter Status");
    }
    else if (state_name == "0") {
        i = 1;
        alert("Please Select State Name");
    }
    else if (training_start == "") {
        i = 1;
        alert("Please Enter Registration Open Date");
    }
    else if (training_end == "") {
        i = 1;
        alert("Pleae Enter Registration Close Date");
    }


    if (i == 0) {

        var obj = {};
        obj.p_training_name = $('#p_training_name').val();
        obj.from_date = from_date;
        obj.to_date = to_date;

        obj.training_status = $('#training_status').val();
        obj.state_name = $('#state_name').val();
        obj.other_state_name = $('#other_state_name').val();
        obj.training_start = training_start;
        obj.training_end = training_end;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Vendors/Save_Training_Working_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response != "Saved Successfully" && response != "SessionTimeOut") {
                    window.location = "/Error/DefaultError";
                }
                else if (response == "SessionTimeOut") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                if (response == "SessionTimeOut") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                $('#p_training_name').val('');
                $('#from_date').val('');
                $('#to_date').val('');
                $('#state_name').val('0');
                $('#training_start').val('');
                $('#training_end').val('');


                $('#other_state_name').val('');
                $('#training_status').val('');
                $('#state_name').show();
                $('#other_state_name').hide();
                Get_Training_Working_Info();

            }
        });

    }
}

function NewReg_State_Chnage() {    //latest abhi
    /* alert('ok');*/
    var state_name = $('#parti_state').val();

    if (state_name == 'Other') {
        $('#p_other_state_name').show();
        $('#parti_state').hide();


    }
    else if (state_name != "0") {
        $('#p_other_state_name').hide();
        $('#parti_state').show();

    }
    

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/Vendors/Bind_Event',
        data: { STATE: state_name },
        success: function (data) {
            
            /*alert(data);*/


            var slection_options = '<option value="0"> Select Event/Training </option>';
            if (data.length == 0) {
                alert('For This State Events Not Registered');
                $("#p_training_name").html(slection_options);
            }

            else {

                if (data.length != 0) {

                    for (var i = -1; i < data.length; i++) {
                        if (data[i] != null && data[i] != "") {
                            slection_options += '<option value="' + data[i] + '"> ' + data[i] + ' </option>';
                        }
                    }
                    $("#p_training_name").html(slection_options);
                }

            }


        }
    });

}



var XX1 = "";
function Save_NewRegs_Training_Info() {
    
    var i = 0;
    var p_name = $('#p_name').val();
    var p_gender = $('#p_gender').val();
    var p_age = $('#p_age ').val();
    var p_occupation = $('#p_occupation').val();
    var p_qual = $('#p_qual ').val();
    var p_phoneno = $('#p_phoneno').val();
    var p_emailid = $('#p_emailid').val();
    var p_address = $('#p_address').val();
    var parti_state = $('#parti_state').val();
    var parti_state_other = $('#p_other_state_name').val();
    var p_training_name = $('#p_training_name').val();
    var state_name = $('#drpstate').val();
    var dist_name = $('#drpdistrict').val();
    var block_name = $('#drpblock').val();

    if (p_training_name == "0") {
        i = 1;
        alert("Please Select Name of Training");
        return;
    }

    else if (parti_state == "Other" && parti_state_other == "") {
        i = 1;
        alert("Please Enter Participant State Other");
        return;

    }

    else if (p_name == "") {
        i = 1;
        alert("Please Enter Participant Name");
        return;
    }
    else if (p_gender == "0") {
        i = 1;
        alert("Please Select Gender");
        return;
    }

    else if (p_age == "") {
        i = 1;
        alert("Pleae Select Age");
    }

    else if (p_occupation == "") {
        i = 1;
        alert("Pleae Enter Occupation");
        return;
    }
    else if (p_qual == "") {
        i = 1;
        alert("Please Enter Qualification");
        return;
    }
    else if (p_phoneno == "") {
        i = 1;
        alert("Please Enter Phone Number");
        return;
    }
    else if (p_emailid == "") {
        i = 1;
        alert("Please Enter Email ID");
        return;
    }
    else if (IsEmail(p_emailid) == false) {
        alert("Please Enter a Valid Email ID");
        return;
    }
    else if (p_address == "") {
        i = 1;
        alert("Please Enter Address");
        return;
    }
    //else if (state_name == "0") {
    //    i = 1;
    //    alert("Please Select state_name");
    //    return;
    //}
    //else if (p_training_name == "0") {
    //    i = 1;
    //    alert("Please Select Name of Training");
    //    return;
    //}

    var clientCaptcha = $('#clientCaptcha').val();
    if (clientCaptcha == "") {
        i = 1;
        $('#status').text("Please Enter Captcha");
    }
    if (i == 0) {
        var obj = {};
        obj.p_name = $('#p_name').val();
        obj.p_gender = $('#p_gender').val();
        obj.p_age = $('#p_age ').val();
        obj.p_occupation = $('#p_occupation').val();
        obj.p_qual = $('#p_qual').val();
        obj.p_phoneno = $('#p_phoneno').val();
        obj.p_emailid = $('#p_emailid').val();
        obj.p_address = $('#p_address').val();
        obj.parti_state = $('#parti_state').val();
        obj.p_training_name = $('#p_training_name').val();
        obj.p_state_name = $('#drpstate').val();
        obj.p_district_name = $('#drpdistrict').val();
        obj.p_block_name = $('#drpblock').val();
        obj.p_other_state_name = $('#p_other_state_name').val();
        obj.clientCaptcha = clientCaptcha;
        $(".loader").show();
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Vendors/Save_NewRegs",
            //data: "{'Data': '" + JSON.stringify(obj) + "'}",
            data: JSON.stringify(obj),
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                var reg_msg = "Thank you for Registration. Please check your email for Registration No."
                if (response == "Str1" && response == "SessionTimeOut" && response == "Captcha not Matched" && response == "Captcha is Expired") {
                    window.location = "/Error/DefaultError";
                }
                else if (response == "SessionTimeOut") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response == "Captcha is Not Matched" || response == "Your Captcha is Expired") {

                } else {
                    $('#p_name').val("");
                    $('#p_gender').val("0");
                    $('#p_age ').val("");
                    $('#p_occupation').val("");
                    $('#p_qual').val("");
                    $('#p_phoneno').val("");
                    $('#p_emailid').val("");
                    $('#p_address').val("");
                    /*$('#p_address').val("");*/
                    $('#p_state_name').val('0');
                    $('#parti_state').val('0');
                    $('#p_other_state_name').val('');
                    $('#p_training_name').val("0");
                    $('#drpstate').val("");
                    $('#drpdistrict').val("");
                    $('#drpblock').val("");
                    $('#p_other_state_name').hide();
                    $('#parti_state').show();
                    $('#status').text("");
                    $('#clientCaptcha').val("");
                    refress1();

                    Get_Newregs_Training_Info11();
                    $('#reg_msg').text(reg_msg);
                    $(".loader").hide();
                }

            }
        });

    }
    else {
        Event_Date_Checking();
    }
}

function IsEmail(p_emailid) {
    var regex =
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(p_emailid)) {
        return false;
    }
    else {
        return true;
    }
}

function refress() {
    var img = document.getElementById("captchaimg");
    img.src = "/Contact/GetCaptchaImage?query=" + Math.random();
}


var Full_Info_Events = "";

function Get_Training_Working_Events_Info() {        //for sorted topic of events
    var slection_option = '<option value="0"> -----Loading----- </option>';
    $("#p_training_name").html(slection_option);
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Vendors/Get_Training_Working_Info',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var option = '<option value="0">Select Event/Training</option>';
            var ddlst = {};
            var ddlst_array = [];
            if (response.length != 0) {
                Full_Info_Events = response;
                for (var j = 0; j < response.length; j++) {

                    if (response[j].p_training_name != null && response[j].p_training_name != "") {
                        ddlst_array.push(response[j].p_training_name);
                        ddlst[response[j].p_training_name] = response[j].p_training_name;

                    }

                }

            }

            if (ddlst_array.length != 0) {
                for (var i = 0; i < ddlst_array.length; i++) {
                    option += '<option value="' + ddlst_array[i] + '">' + ddlst_array[i] + '</option>';
                }
            }

            $('#p_training_name').html(option);

        }
    });
}




/*For Topic Of Event data fetching in Event Material page*/
var Full_Info_Events_Fetch = "";
function Get_Training_Working_Events_Info_fetch() {
    
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Vendors/Get_Training_Working_Info_fetch',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var option = '<option value="0">Select Event/Training</option>';
            var ddlst = {};
            var ddlst_array = [];
            if (response.length != 0) {
                Full_Info_Events_Fetch = response;
                for (var j = 0; j < response.length; j++) {

                    if (!ddlst[response[j].p_training_name]) {
                        ddlst_array.push(response[j].p_training_name);
                        ddlst[response[j].p_training_name] = response[j].p_training_name;

                    }

                }

            }

            if (ddlst_array.length != 0) {
                for (var i = 0; i < ddlst_array.length; i++) {
                    option += '<option value="' + ddlst_array[i] + '">' + ddlst_array[i] + '</option>';
                }
            }

            $('#p_training_name').html(option);
            Participant_reg_info_total();

        }
    });
}





function Get_Newregs_Training_Info11() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Vendors/Get_Newregs_Training_Info',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            var tr = '';

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {
                for (var j = 0; j < response.length; j++) {
                    var StateName = response[j].p_state_name;
                    if (StateName == "Other") {
                        StateName = response[j].p_other_state_name;
                    }
                    tr += '<tr><td> ' + (j + 1) + '</td><td>' + response[j].p_name + '</td><td id="">' + response[j].p_gender + '</td>' +
                        ' <td id = ""> ' + response[j].p_age + '</td ><td id="">' + response[j].p_occupation + '</td><td id="">' + response[j].p_qual + '</td>' +
                        ' <td id = ""> ' + response[j].p_phoneno + '</td ><td id="">' + response[j].p_emailid + '</td><td id="">' + response[j].p_address + '</td><td id="">' + StateName + '</td>' +
                        ' <td id = ""> ' + response[j].p_training_name + '</td ></tr > ';


                    //tr += '<tr id="trtraining' + j + '" class="database_trainer_row " role="row" style="display:none">' +
                    //    '<td>' + (j + 1) + '</td>' +
                    //    '<td class="tdborder"><input type="text" class="form-control" id="event_name1' + j + '" value="' + response[j].event_name + '" /> </td >' +
                    //    '<td class="tdborder"><input type="text" class="form-control" id="from_date1' + j + '" value="' + response[j].from_date + '" /> </td >' +
                    //    '<td class="tdborder"><input type="text" class="form-control" id="to_date1' + j + '" value="' + response[j].to_date + '" /> </td >' +
                    //    '<td class="tdborder"><input type="text" class="form-control" id="training_start1' + j + '" value="' + response[j].training_start + '" /> </td >' +
                    //    '<td class="tdborder"><input type="text" class="form-control" id="training_end1' + j + '" value="' + response[j].training_end + '" /> </td >' +
                    //    '<td class="tdborder"><input type="text" class="form-control" id="training_status1' + j + '" value="' + response[j].training_status + '" /> </td >' +
                    //    '<td><button type="button"  class="btn btn-primary" onclick="updatetraining(' + response[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="canceltraining(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                    //    '<tr role="row"  id="hidetrainging' + j + '"><td> ' + (j + 1) + '</td><td>' + response[j].event_name + '</td><td id="">' + response[j].from_date + '</td><td id="">' + response[j].to_date + '</td><td id="">' + response[j].training_start + '</td><td id="">' + response[j].training_end + '</td><td id="">' + response[j].training_status + '</td>' +
                    //    '<td > <button class="btn btn-primary"  onclick=edittraining(' + j + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger" onclick="deletetraining(' + response[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                }

                $('#Newregs_Training_Workshop').html(tr);
            }
            else if (tr == '') {
                tr = '<tr colspan="11"><td colspan="11" style="text-align: center;">No Data</td></tr>';

                $('#Newregs_Training_Workshop').html(tr);
            }

        }
    });
}


function Event_Date_Checking() {
    /*alert('ok');*/
    
    var p_training_name = $('#p_training_name').val();

    if (p_training_name != "0") {
        var obj = {};
        obj.p_training_name = p_training_name;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Vendors/Event_Registration_Date_Checking",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {

                if (response == "NoData") {
                    XX1 = "";
                    alert("No Data");
                } else if (response == "Matched") {
                    XX1 = "Matched";
                } else {
                    alert(response);
                    XX1 = "";
                }
            }
        });
    }
    else {
        alert("Please Select Event/Traing Name");
    }
}



