var Main_Statename = "";
var Main_Statename1 = "";
var States_Info_ARray = [];
function DropDownInfo1() {

    $('#StateWiseDropdown').hide();
    $('#StateWise').hide();
    $('#StateWiseDropdown1').hide();
    $('#StateWise1').hide();
    Main_Statename = "";
    Main_Statename1 = "";

    $.ajax({
        type: 'GET',
         
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/State_SessionInfo',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            States_Info_ARray = [];
            Main_Statename = "ALL";
            Main_Statename1 = "ALL";
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (data == "Admin") {
                $('#StateWiseDropdown').show();
                $('#StateWise').hide();
                $('#StateWiseDropdown1').show();
                $('#StateWise1').hide();
                States_Info();
                //Get_Newregs_Training_Info();

            }
            else {
                $('#StateWiseDropdown').hide();
                $('#StateWise').show();
                $('#StateWiseDropdown1').hide();
                $('#StateWise1').show();
                Main_Statename = data;
                Main_Statename1 = data;
                States_Info_ARray.push(data);
                $('#spnstate').text(data);
                $('#spnstate1').text(data);
                //Get_Newregs_Training_Info();

            }


        }

    });

}

function States_Info() {
    $.ajax({
        type: 'GET',
         
        contentType: 'application/json; chatset=utf-8',
        url: '/AgencyDashBoard/PIP_Agency_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var slection_options = '<option value="0">Select State</option>';

            if (data.length != 0) {
                slection_options += '<option value="ALL">ALL</option>';
                slection_options += '<option value="NPMU (DELHI)">NPMU (DELHI)</option>';

                States_Info_ARray.push("NPMU");

                for (var i = 0; i < data.length; i++) {
                    if (data[i].observation_type == "pip") {

                        slection_options += '<option value="' + data[i].state_name + '"> ' + data[i].state_name + ' </option>';
                        States_Info_ARray.push(data[i].state_name);
                    }

                }
                slection_options += '<option value="Other">Other</option>';
                States_Info_ARray.push("Other");
                $('#States').html(slection_options);
                $('#States1').html(slection_options);
            }
        }

    });
}

function StateWiseInfo() {
    var State = $('#States').val();
    if (State != "0") {
        Main_Statename1 = State;
        Get_Training_Working_Info();

    } else {
        alert("Please Select StateName")
    }
}
function StateWiseInfo1() {
    var State = $('#States1').val();
    if (State != "0") {
        $('#evnt_dropdown').val("0");
        Main_Statename = State;
        Get_Newregs_Training_Info();
    } else {
        alert("Please Select StateName")
    }
}



var Full_EVNT_REGData = "";
var X1 = 0;
var Training_Workshop_Count = [];
var New_Registration_Count = [];
function Get_Training_Working_Info() {
    
    $.ajax({
        
        type: 'POST',
        async: true,
        contentType: 'application/json; chatset=utf-8',
        url: '/Vendors/Get_Training_Working_Info_All',
        data: '',
        dataType: 'JSON',
        timeout: (10 * 1000),
        success: function (response) {
            
            
            var tr = '';
            var zz = 0;
            var TRC = 0;
            var TRC11 = 0;
            Training_Workshop_Count = [];
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            var option = '<option value="0">Select Event/Training</option>';
            var ddlst = {};
            var ddlst_array = [];
            if (response.length != 0) {


                for (var j = 0; j < response.length; j++) {

                    if (!ddlst[response[j].p_training_name]) {
                        ddlst_array.push(response[j].p_training_name);
                        ddlst[response[j].p_training_name] = response[j].p_training_name;

                    }


                    var OtherSate_Val = 0;

                    var StateName = response[j].state_name;
                    var State = response[j].state_name;

                    if (StateName == "Other") {
                        OtherSate_Val = 1;
                        StateName = response[j].other_state_name;
                    } else {
                        OtherSate_Val = 0;
                    }

                    var training_start = response[j].training_start;
                    var training_end = response[j].training_end;

                    if (training_start == null) {
                        training_start = "";
                    }
                    if (training_end == null) {
                        training_end = "";
                    }

                    TRC += X1;
                    // tr += '<tr><td> ' + (j + 1) + '</td><td>' + response[j].event_name + '</td><td id="">' + response[j].from_date + '</td><td id="">' + response[j].to_date + '</td><td id="">' + response[j].training_status + '</td><td id="">' + StateName + '</td></tr>';
                    if (State == Main_Statename1) {
                        zz = zz + 1;

                        var Iddss = "trtraining" + j;
                        Training_Workshop_Count.push(Iddss);
                        var Count_11 = 0;

                        if (Full_EVNT_REGData.length != 0) {
                            for (var i = 0; i < Full_EVNT_REGData.length; i++) {
                                if (response[j].p_training_name == Full_EVNT_REGData[i].p_training_name) {
                                    Count_11 += 1;
                                }
                            }
                        }
                        TRC11 += Count_11;

                        tr += '<tr id="trtraining' + j + '" class="database_trainer_row " role="row" style="display:none">' +
                            '<td>' + zz + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_training_name1' + j + '" value="' + response[j].p_training_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="from_date1' + j + '" value="' + response[j].from_date + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="to_date1' + j + '" value="' + response[j].to_date + '" /> </td >' +
                            // '<td class="tdborder"><input type="text" class="form-control" id="training_start1' + j + '" value="' + response[j].training_start + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="training_status1' + j + '" value="' + response[j].training_status + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="training_start1' + j + '" value="' + training_start + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="training_end1' + j + '" value="' + training_end + '" /> </td >' +
                            '<td class="tdborder"><select type="text" style="margin:1px;" class="form-control" id="mainstatename1' + j + '" value="' + response[j].state_name + '"/></select>' +
                            '<input type = "text" class="form-control" id = "statename1' + j + '" value = "' + StateName + '" /> </td > <td>' + Count_11 + '</td>' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updatetraining(' + response[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="canceltraining(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hidetrainging' + j + '"><td> ' + zz + '</td><td>' + response[j].p_training_name + '</td><td id="">' + response[j].from_date + '</td><td id="">' + response[j].to_date + '</td><td id="">' + response[j].training_status + '</td><td>' + training_start + '</td><td>' + training_end + '</td><td id="">' + StateName + '</td><td>' + Count_11 + '</td>' +
                            '<td > <button class="btn btn-primary btn_disabled"  onclick=edittraining(' + j + ',' + OtherSate_Val + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger btn_disabled" onclick="deletetraining(' + response[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';
                    }

                    if (Main_Statename1 == "" || Main_Statename1 == "ALL") {
                        var Iddss = "trtraining" + j;
                        Training_Workshop_Count.push(Iddss);
                        var Count_11 = 0;
                        zz = zz + 1;
                        if (Full_EVNT_REGData.length != 0) {
                            for (var i = 0; i < Full_EVNT_REGData.length; i++) {
                                if (response[j].p_training_name == Full_EVNT_REGData[i].p_training_name) {
                                    Count_11 += 1;
                                }
                            }
                        }
                        TRC11 += Count_11;
                        tr += '<tr id="trtraining' + j + '" class="database_trainer_row " role="row" style="display:none">' +
                            '<td>' + zz + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_training_name1' + j + '" value="' + response[j].p_training_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="from_date1' + j + '" value="' + response[j].from_date + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="to_date1' + j + '" value="' + response[j].to_date + '" /> </td >' +
                            // '<td class="tdborder"><input type="text" class="form-control" id="training_start1' + j + '" value="' + response[j].training_start + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="training_status1' + j + '" value="' + response[j].training_status + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="training_start1' + j + '" value="' + training_start + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="training_end1' + j + '" value="' + training_end + '" /> </td >' +
                            '<td class="tdborder"><select type="text" style="margin:1px;" class="form-control" id="mainstatename1' + j + '" value="' + response[j].state_name + '"/></select>' +
                            '<input type = "text" class="form-control" id = "statename1' + j + '" value = "' + StateName + '" /> </td > <td>' + Count_11 + '</td>' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updatetraining(' + response[j].id + ',' + j + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="canceltraining(' + j + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hidetrainging' + j + '"><td> ' + zz + '</td><td>' + response[j].p_training_name + '</td><td id="">' + response[j].from_date + '</td><td id="">' + response[j].to_date + '</td><td id="">' + response[j].training_status + '</td><td>' + training_start + '</td><td>' + training_end + '</td><td id="">' + StateName + '</td><td>' + Count_11 + '</td>' +
                            '<td > <button class="btn btn-primary btn_disabled"  onclick=edittraining(' + j + ',' + OtherSate_Val + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger btn_disabled" onclick="deletetraining(' + response[j].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                    }
                }




                if (tr == '') {
                    tr = '<tr colspan="11"><td colspan="11" style="text-align: center;">No Data</td></tr>';
                }
                $('#admin_event_table').html(tr);
            }
            else if (tr == '') {
                tr = '<tr colspan="11"><td colspan="11" style="text-align: center;">No Data</td></tr>';

                $('#admin_event_table').html(tr);
            }
            if (Access_Auth == 'readonly') {
                $('input[type=text]').prop("disabled", true);
                $('.btn_disabled').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
            }
            if (ddlst_array.length != 0) {
                for (var i = 0; i < ddlst_array.length; i++) {
                    option += '<option value="' + ddlst_array[i] + '">' + ddlst_array[i] + '</option>';
                }
            }

            $('#evnt_dropdown').html(option);
            $('#evnt_dropdown2').html(option);
            $('#EVNT_REG_Count').text(TRC11);
            //Get_Newregs_Training_Info();
            
        }
    });
}


function Event_Registration_Count() {
    var evnt_dropdown = $('#evnt_dropdown').val();
    var ABC = 0;
    if (evnt_dropdown != "0") {
        Event_reg_count(evnt_dropdown);
    }
    ABC += X1;
    $('#EVNT_REG_Count').text(ABC);

}



function Event_reg_count(ss) {

    var EventName = ss;
    X1 = 0;

    if (Full_EVNT_REGData.length != 0) {
        for (var i = 0; i < Full_EVNT_REGData.length; i++) {
            if (EventName == Full_EVNT_REGData[i].p_training_name) {
                X1 += 1;
            }
        }
    }



}

// Training EDIT and DELETE for events table
function canceltraining(j) {
    $('#hidetrainging' + j).show();
    $('#trtraining' + j).hide();
}
function edittraining(j, State) {
    
    if (State == 1) {
        var SS = "#mainstatename1" + j;

        $(SS).show();

        var slection_options = '<option value="0">Select State</option>';
        if (States_Info_ARray.length != 0) {
            for (var i = 0; i < States_Info_ARray.length; i++) {
                slection_options += '<option value="' + States_Info_ARray[i] + '">' + States_Info_ARray[i] + '</option>';
            }
        }
        $(SS).html(slection_options);

        $(SS).val("Other");

    } else {
        var SS = "#mainstatename1" + j;
        $(SS).hide();
    }
    $('#trtraining' + j).show();
    $('#hidetrainging' + j).hide();
}
function updatetraining(DID, j) {

    var obj = {};
    obj.p_training_name = $('#p_training_name1' + j).val();
    obj.from_date = $('#from_date1' + j).val();
    obj.to_date = $('#to_date1' + j).val();
    obj.training_end = $('#training_end1' + j).val();
    obj.training_start = $('#training_start1' + j).val();
    obj.other_state_name = $('#statename1' + j).val();
    obj.training_status = $('#training_status1' + j).val();
    obj.id = DID;
    obj.state_name = $('#mainstatename1' + j).val();
    $.ajax({
        type: "POST",
         
        contentType: "application/json;charset=utf-8",
        url: '/Vendors/updatetraining',

        data: "{'updatetraining_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if(response != "Please Enter Other State Value" && response != "Updated Successfully"){
                window.location = "/Error/DefaultError";
            }
            Get_Training_Working_Info();
        }
    });
}

function deletetraining(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
         
        contentType: "application/json;charset=utf-8",
        url: '/Vendors/deletetraining',

        data: "{'updatetraining_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Deleted Successfully" && response != "Not Deleted") {
                window.location = "/Error/DefaultError";
            }
            Get_Training_Working_Info();
        }
    });
}


function Get_Newregs_Training_Info() {
    
   //$('.loader').show();
    $.ajax({
        type: 'GET',
        async: true,
        contentType: 'application/json; chatset=utf-8',
        url: '/Vendors/Get_Newregs_Training_Info',
        data: '',
        dataType: 'JSON',
        timeout: (10 * 1000),
        success: function (response) {
            
            $('#admin_newregs_table').html('');

            var tr = '';
            //var TRC = 0;
            //  $('#EVNT_REG_Count').text(TRC);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            New_Registration_Count = [];
            var ZZ = 0;
            if (response.length != 0) {
                Full_EVNT_REGData = response;
                // $('#EVNT_REG_Count').text(response.length);
                for (var k = 0; k < response.length; k++) {

                    var registration_no = response[k].registration_no;
                    if (registration_no == null) {
                        registration_no = "";
                    }
                    var StateName = response[k].state_name;
                    if (StateName == "Other") {
                        StateName = response[k].p_other_state_name;
                    }
                    var StateName1 = response[k].state_name;
                    if (Main_Statename == StateName1) {
                        ZZ = ZZ + 1;
                        var idds = "trnewregs" + k;
                        New_Registration_Count.push(idds);
                        tr += '<tr id="trnewregs' + k + '" class="database_trainer_row " role="row" style="display:none">' +
                            '<td>' + ZZ + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_name1' + k + '" value="' + response[k].p_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_gender1' + k + '" value="' + response[k].p_gender + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_age1' + k + '" value="' + response[k].p_age + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_occupation1' + k + '" value="' + response[k].p_occupation + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_qual1' + k + '" value="' + response[k].p_qual + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_phoneno1' + k + '" value="' + response[k].p_phoneno + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_emailid1' + k + '" value="' + response[k].p_emailid + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_address1' + k + '" value="' + response[k].p_address + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_state_name1' + k + '" value="' + StateName + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_training_name1' + k + '" value="' + response[k].p_training_name + '" /> </td >' +
                            '<td class="tdborder">' + registration_no + '</td >' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updatenewregs(' + response[k].id + ',' + k + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelnewregs(' + k + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hidenewregs' + k + '"><td> ' + ZZ + '</td><td> ' + response[k].p_name + '</td> <td id="">' + response[k].p_gender + '</td><td id = ""> ' + response[k].p_age + '</td ><td id="">' + response[k].p_occupation + '</td><td id="">' + response[k].p_qual + '</td><td id = ""> ' + response[k].p_phoneno + '</td ><td id="">' + response[k].p_emailid + '</td><td id="">' + response[k].p_address + '</td><td id="">' + StateName + '</td><td id = ""> ' + response[k].p_training_name + '</td><td>' + registration_no + '</td>' +
                            '<td > <button class="btn btn-primary btn_disabled"  onclick=editnewregs(' + k + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger btn_disabled" onclick="deletenewregs(' + response[k].id + ') "><i class="fa fa-trash"></i></button></td></tr>';


                    }
                    else if (Main_Statename == "ALL") {
                        var idds = "trnewregs" + k;
                        New_Registration_Count.push(idds);
                        tr += '<tr id="trnewregs' + k + '" class="database_trainer_row " role="row" style="display:none">' +
                            '<td>' + (k + 1) + '</td>' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_name1' + k + '" value="' + response[k].p_name + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_gender1' + k + '" value="' + response[k].p_gender + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_age1' + k + '" value="' + response[k].p_age + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_occupation1' + k + '" value="' + response[k].p_occupation + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_qual1' + k + '" value="' + response[k].p_qual + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_phoneno1' + k + '" value="' + response[k].p_phoneno + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_emailid1' + k + '" value="' + response[k].p_emailid + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_address1' + k + '" value="' + response[k].p_address + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_state_name1' + k + '" value="' + StateName + '" /> </td >' +
                            '<td class="tdborder"><input type="text" class="form-control" id="p_training_name1' + k + '" value="' + response[k].p_training_name + '" /> </td >' +
                            '<td class="tdborder">' + registration_no + '</td>' +
                            '<td><button type="button"  class="btn btn-primary" onclick="updatenewregs(' + response[k].id + ',' + k + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelnewregs(' + k + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<tr role="row"  id="hidenewregs' + k + '"><td> ' + (k + 1) + '</td><td> ' + response[k].p_name + '</td> <td id="">' + response[k].p_gender + '</td><td id = ""> ' + response[k].p_age + '</td ><td id="">' + response[k].p_occupation + '</td><td id="">' + response[k].p_qual + '</td><td id = ""> ' + response[k].p_phoneno + '</td ><td id="">' + response[k].p_emailid + '</td><td id="">' + response[k].p_address + '</td><td id="">' + StateName + '</td><td id = ""> ' + response[k].p_training_name + '</td><td>' + registration_no + '</td>' +
                            '<td > <button class="btn btn-primary btn_disabled"  onclick=editnewregs(' + k + ')><i class="fa fa-edit"></i></button></td > <td><button class="btn btn-danger btn_disabled" onclick="deletenewregs(' + response[k].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                    }

                }
                if (tr == '') {
                    tr = '<tr colspan="14"><td colspan="14" style="text-align: center;">No Data</td></tr>';

                }
                $('#admin_newregs_table').html(tr);
            }
            else if (tr == '') {
                tr = '<tr colspan="12"><td colspan="13" style="text-align: center;">No Data</td></tr>';

                $('#admin_newregs_table').html(tr);
            }
            if (Access_Auth == 'readonly') {
                $('input[type=text]').prop("disabled", true);
                $('.btn_disabled').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
            }
            // Get_Training_Working_Info();
            $('.loader').hide();
        }
    });
}

// Training EDIT and DELETE for new regs table
function cancelnewregs(k) {
    $('#hidenewregs' + k).show();
    $('#trnewregs' + k).hide();
}
function editnewregs(k) {
    $('#trnewregs' + k).show();
    $('#hidenewregs' + k).hide();
}
function updatenewregs(UID, k) {


    var obj = {};
    obj.p_name = $('#p_name1' + k).val();
    obj.p_gender = $('#p_gender1' + k).val();
    obj.p_age = $('#p_age1' + k).val();
    obj.p_occupation = $('#p_occupation1' + k).val();
    obj.p_qual = $('#p_qual1' + k).val();
    obj.p_phoneno = $('#p_phoneno1' + k).val();
    obj.p_emailid = $('#p_emailid1' + k).val();
    obj.p_address = $('#p_address1' + k).val();
    obj.p_training_name = $('#p_training_name1' + k).val();
    obj.p_state_name = $('#p_state_name1' + k).val();

    obj.id = UID;
    $.ajax({
        type: "POST",
         
        contentType: "application/json;charset=utf-8",
        url: '/Vendors/updatenewregs',

        data: "{'updatenewregs_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Updated Successfully") {
                window.location = "/Error/DefaultError";
            }
            Get_Newregs_Training_Info();

        }
    });
}

function deletenewregs(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
         
        contentType: "application/json;charset=utf-8",
        url: '/Vendors/deletenewregs',

        data: "{'updatenewregs_string': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response != "Deleted Successfully" && response != "Not Deleted") {
                window.location = "/Error/DefaultError";
            }
            Get_Newregs_Training_Info();
            Get_Training_Working_Info();
        }
    });
}