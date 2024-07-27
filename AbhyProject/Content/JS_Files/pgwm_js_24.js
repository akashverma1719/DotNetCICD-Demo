
var aaa = 1;
// Add Row for PGWM Committee Member
function addrow_a_part() {

    var count = 1;
    if (aaa == 1) {
        aaa = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='Save_abhy_socialmgt_pgwm()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancela_1();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control alpha input' id='member_name'/></td>" +
            //"<td><Select id='designation_name' class='form-control'><option value='0'>Select Designation</option><option value='Sarpanch'>Sarpanch</option><option value='Deputy Sarpanch/equivalent'>Deputy Sarpanch/Equivalent</option><option value='PDO/Panchayat Secretary'>PDO/Panchayat Secretary</option></Select></td>" +
            "<td><input type='text' class='form-control alpha input' id='designation_name'/></td>" +

            "<td><Select id='gender' class='form-control'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Transgender'>Transgender</option></select></td>" +
            "<td><input type='text' class='form-control integer input' maxlength='10' id='contact_number'/></td></tr>";

        $('table#TblData_abc_part1 tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function cancela_1() {

    // addrow();
    $('table#TblData_abc_part1 tbody tr#c1_count').remove();
    aaa = 1;

}

// Save PGWM Committee Member Data
function Save_abhy_socialmgt_pgwm() {
    var member_name = $('#member_name').val();
    var designation = $('#designation_name').val();
    var gender = $('#gender').val();
    var contact_no = $('#contact_number').val();

    if (member_name == "") {
        alert("Please Enter Name");
        $('#member_name').focus();
        return;
    }
    else if (designation == "") {
        alert("Please Enter Designation Name");
        $('#designation_name').focus();
        return;
    } else if (gender == "0") {
        alert("Please Select Gender");
        $('#gender').focus();
        return;
    } else if (contact_no == "") {
        alert("Please Enter Mobile Number");
        $('#contact_no').focus();
        return;
    } else if (contact_no.length != 10) {
        alert("Please enter valid mobile number");
        $('#contact_no').focus();
        return;
    }

    var obj = {};
    obj.member_name = member_name;
    obj.designation = designation;
    obj.gender = gender;
    obj.contact_no = contact_no;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/Save_abhy_wsp_pgwm_committee_member',
        data: "{'data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            alert(data);
            GramPanchayatDataBase_Info_new();

        }
    });
}


// Getting PGWM Committee Member Data
function GramPanchayatDataBase_Info_new() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/Getting_abhy_wsp_pgwm_committee_member',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td><button type="button" class="btn btn-danger btn_disabled" onclick="Delete_abhy_wsp_pgwm_committee_member(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].member_name + '</td><td>' + data[i].designation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_no + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
            else {
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
            aaa = 1;

            abhy_socialmgt_pgwm_meeting_Info();
        }
    });
}


// Delete PGWM Committee Member Data
function Delete_abhy_wsp_pgwm_committee_member(ss) {
    if (confirm("Are you sure to delete this row?")) {
        if (State != "") {
            var obj = {};
            obj.id = ss;
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/WSP_2024_25/Delete_abhy_wsp_pgwm_committee_member",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                          window.location = "/Home/LogOut";
                    }
                    else if (response != 'Deleted Successfully' && response != 'No Data' && response != 'Error' && response != 'Logout') {
                        window.location = "/Error/DefaultError";

                    }
                    aaa = 1;

                    GramPanchayatDataBase_Info_new();
                }
            });
        }
        else {
            alert("Please Select StateName");
        }

    }
}


//Save PGWM Committee Meeting Data
function Save_abhy_socialmgt_pgwm_meeting() {


    var x = 0;

    var meeting_date = $("#date_pgwm").val();
    var meeting_gp_name = $('#meeting_gp_name').val();
    //var gpname = $("#gpname_pgwm").val();
    var meeting_village = $("#village_pgwm").val();
    var meeting_location = $("#meeting_loc_pgwm").val();
    var male_attendees = $("#male_pgwm").val();
    var female_attendees = $("#female_pgwm").val();
    var transgender_attendees = $("#transgender_pgwm").val();
    var total_attendees = $("#total_pgwm").val();

    var mom = $("#mom_pgwm").get(0).files;

    var photo = $("#photograph_pgwm").get(0).files;

    var resol = $("#resolution_pgwm").get(0).files;
    var attendance_sheet = $("#attendance_sheet").get(0).files;


    if (meeting_village == '0') {
        alert('Please Select Village Name');
        $("#village_pgwm").focus();
        return;
    }
    else if (mom.length == 0) {
        alert('Please choose MOM(Minutes of Meeting)')
        $("#mom_pgwm").focus();
        return;
    } else if (photo.length == 0) {
        alert('Please choose Photograph')
        $("#photograph_pgwm").focus();
        return;
    } else if (resol.length == 0) {
        alert('Please choose Resolution')
        $("#resolution_pgwm").focus();
        return;
    } else if (attendance_sheet.length == 0) {
        alert('Please choose Attendance Sheet')
        $("#attendance_sheet").focus();
        return;
    }


    $(".loader").show();
    var formdata = new FormData();
    formdata.append("meeting_date", meeting_date);
    formdata.append("meeting_gp_name", meeting_gp_name);
    formdata.append("meeting_village", meeting_village);
    formdata.append("meeting_location", meeting_location);
    formdata.append("male_attendees", male_attendees);
    formdata.append("female_attendees", female_attendees);
    formdata.append("transgender_attendees", transgender_attendees);
    formdata.append("total_attendees", total_attendees);
    formdata.append("mom_doc", mom[0]);
    formdata.append("meeting_image", photo[0]);
    formdata.append("meeting_resolution", resol[0]);
    formdata.append("attendance_sheet", attendance_sheet[0]);

    $.ajax({
        type: 'POST',
        url: '/WSP_2024_25/Save_abhy_wsp_pgwm_committee_meeting',
        dataType: 'json',
        data: formdata,
        processData: false,
        contentType: false,
        success: function (response) {

            $(".loader").hide();
            alert(response);
            if (response == 'Successfully Saved') {
                $("#village_pgwm").val('0');
                $("#meeting_loc_pgwm").val('');
                $("#male_pgwm").val('');
                $("#female_pgwm").val('');
                $("#transgender_pgwm").val('');
                $("#total_pgwm").val('');
                $('input[type = date]').val('');
                $('input[type = file]').val('');
            }

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            abhy_socialmgt_pgwm_meeting_Info();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}


//Calculation for Total Attendees

function Cal_Total_Attendees() {
    var male_attendees = $("#male_pgwm").val();
    var female_attendees = $("#female_pgwm").val();
    var transgender_attendees = $("#transgender_pgwm").val();
    var total_attendees = $("#total_pgwm").val();

    if (male_attendees == '') {
        male_attendees = 0;
    }
    if (female_attendees == '') {
        female_attendees = 0;
    }
    if (transgender_attendees == '') {
        transgender_attendees = 0;
    }


    total_attendees = (parseInt(male_attendees) + parseInt(female_attendees) + parseInt(transgender_attendees));
    $("#total_pgwm").val(total_attendees);
}
function Cal_Total_Attendees_update(i) {

    var gendertotal_v = 0;
    var gendermale = $('#male_attendees' + i).val();
    var genderfemale = $('#female_attendees' + i).val();
    var gendertrans = $('#transgender_attendees' + i).val();

    if (gendermale == "") {

        gendermale = 0;
    }

    if (genderfemale == "") {

        genderfemale = 0;
    }
    if (gendertrans == "") {

        gendertrans = 0;
    }
    gendertotal_v = parseFloat(gendermale) + parseFloat(genderfemale) + parseFloat(gendertrans);

    $('#total_attendees' + i).val(gendertotal_v);
}

// Getting PGWM Committee Meeting Data
function abhy_socialmgt_pgwm_meeting_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25/Getting_abhy_wsp_pgwm_committee_meeting',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            //alert(data[2].meeting_gp_name)
            var tr = '';
            if (data.length != 0) {
                $("#summary_btn").show();
                for (var i = 0; i < data.length; i++) {
                    var mom_doc = "";
                    if (data[i].mom_doc != null) {
                        mom_doc = data[i].mom_doc;
                    }

                    var meeting_image = "";
                    if (data[i].meeting_image != null) {
                        meeting_image = data[i].meeting_image;
                    }

                    var meeting_resolution = "";
                    if (data[i].meeting_resolution != null) {
                        meeting_resolution = data[i].meeting_resolution;
                    }
                    var attendance_sheet = "";
                    if (data[i].attendance_sheet != null) {
                        attendance_sheet = data[i].attendance_sheet;
                    }



                    tr += '<tr id="Show_Gplvl' + i + '" ><td>' + (i + 1) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].meeting_date + '</td><td>' + data[i].meeting_gp_name + '</td><td>' + data[i].meeting_village + '</td> <td>' + data[i].meeting_location + '</td> <td>' + data[i].male_attendees + '</td><td>' + data[i].female_attendees + '</td><td>' + data[i].transgender_attendees + '</td> <td>' + data[i].total_attendees + '</td> <td><a   href="/WSP_2024_25/ViewFile?FileName=' + mom_doc + '"   download="">MOM(Minutes of Meeting).pdf</a></td>     <td><a  href="/WSP_2024_25/ViewFile?FileName=' + meeting_image + '" download="">Photograph.jpg</a></td> <td><a href="/WSP_2024_25/ViewFile?FileName=' + meeting_resolution + '"  download="">Resolution.pdf</a></td> <td><a   href="/WSP_2024_25/ViewFile?FileName=' + attendance_sheet + '"  download="">Attendance Sheet.pdf</a></td> <td><button class="btn btn-primary btn_disabled" onclick="EditpgwmRow(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button class="btn btn-danger btn_disabled" onclick="Delete_pgwm_meeting(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                        '<tr id="Hide_Gplvl' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="state_name' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="district_name' + i + '" value="' + data[i].district_name + '" readonly /></td><td><input type="text" class="form-control" id="block_name' + i + '" value="' + data[i].block_name + '" readonly /></td><td><input type="text" class="form-control" id="gp_name' + i + '" value="' + data[i].gp_name + '" readonly /></td><td><input type="date" class="form-control" id="meeting_date' + i + '" value="' + data[i].meeting_date + '"/><td><input type="text" class="form-control" id="meeting_gp_name' + i + '" value="' + data[i].meeting_gp_name + '" readonly /></td></td></td> <td><input type="text" class="form-control" id="meeting_village' + i + '" value="' + data[i].meeting_village + '" readonly /></td> <td><input type="text" class="form-control" id="meeting_location' + i + '" value="' + data[i].meeting_location + '"/></td> <td><input type="text" maxlength="3"  class="number form-control" id="male_attendees' + i + '" value="' + data[i].male_attendees + '" oninput="this.value=this.value.replace(/[^0-9]/g,)" onkeyup="Cal_Total_Attendees_update(' + i + ')" onkeydown="Cal_Total_Attendees_update(' + i + ')" /></td> <td><input type="text" maxlength="3" class="number form-control" id="female_attendees' + i + '" value="' + data[i].female_attendees + '" oninput="this.value=this.value.replace(/[^0-9]/g,)" onkeyup="Cal_Total_Attendees_update(' + i + ')" onkeydown="Cal_Total_Attendees_update(' + i + ')" /></td> <td><input type="text" maxlength="3"  class="form-control"  id="transgender_attendees' + i + '" value="' + data[i].transgender_attendees + '" oninput="this.value=this.value.replace(/[^0-9]/g,)" onkeyup="Cal_Total_Attendees_update(' + i + ')" onkeydown="Cal_Total_Attendees_update(' + i + ')" /></td> <td><input type="text" class="form-control" id="total_attendees' + i + '" value="' + data[i].total_attendees + '" readonly /></td> <td><input type="file" accept=".pdf" class="form-control" id="mom_doc' + i + '" value="' + data[i].mom_doc + '"/></td> <td><input type="file" class="form-control" accept=".jpg" id="meeting_image' + i + '" value="' + data[i].meeting_image + '"/></td> <td><input type="file" class="form-control" accept=".pdf" id="meeting_resolution' + i + '" value="' + data[i].meeting_resolution + '"/></td> <td><input type="file" accept=".pdf" class="form-control" id="attendance_sheet' + i + '" value="' + data[i].attendance_sheet + '"/></td> <td><button type="button" class="btn btn-primary btn_disabled" onclick="Update_pgwm_meeting(' + data[i].id + ',' + i + ')">Update</button>' + '</td> <td><button  class="btn btn-danger " type="button" onclick="cancelpgwmRow(' + i + ');"><i class="fa fa-remove"</button></td></tr>';

                }
            } else {
                $("#summary_btn").hide();
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#training_gp_Info').html(tr);
            }
            else {
                $('#training_gp_Info').html(tr);
            }
            if (StateOfficer != "Gram Panchyat Nodal Officer") {
                $('input[type=text]').prop("disabled", true)
                $('select').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
                $('.btn_disabled').prop("disabled", true);
            }
            get_approved_status();
        }

    });
}

// Update PGWM Committee Meeting Data
function Update_pgwm_meeting(id, RowNo) {



    var abhy_wsp_pgwm_committee_id = id;
    var meeting_date = $('#meeting_date' + RowNo).val();
    var meeting_gp_name = $('#meeting_gp_name' + RowNo).val();
    var meeting_village = $('#meeting_village' + RowNo).val();
    var meeting_location = $('#meeting_location' + RowNo).val();
    var male_attendees = $('#male_attendees' + RowNo).val();
    var female_attendees = $('#female_attendees' + RowNo).val();
    var transgender_attendees = $('#transgender_attendees' + RowNo).val();
    var total_attendees = $('#total_attendees' + RowNo).val();

    var mom_files = $("#mom_doc" + RowNo).get(0);
    var mom_doc = mom_files.files;

    var photograph = $("#meeting_image" + RowNo).get(0);
    var meeting_image = photograph.files;

    var resolution = $("#meeting_resolution" + RowNo).get(0);
    var meeting_resolution = resolution.files;
    var attendance = $("#attendance_sheet" + RowNo).get(0);
    var attendance_sheet = attendance.files;


    var formdata = new FormData();
    formdata.append("abhy_wsp_pgwm_committee_id", abhy_wsp_pgwm_committee_id);
    formdata.append("meeting_date", meeting_date);
    formdata.append("meeting_gp_name", meeting_gp_name);
    formdata.append("meeting_village", meeting_village);
    formdata.append("meeting_location", meeting_location);
    formdata.append("male_attendees", male_attendees);
    formdata.append("female_attendees", female_attendees);
    formdata.append("transgender_attendees", transgender_attendees);
    formdata.append("total_attendees", total_attendees);
    formdata.append("mom_doc", mom_doc[0]);
    formdata.append("meeting_image", meeting_image[0]);
    formdata.append("meeting_resolution", meeting_resolution[0]);
    formdata.append("attendance_sheet", attendance_sheet[0]);

    $.ajax({
        url: '/WSP_2024_25/Update_pgwm_meeting_Info',
        data: formdata,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            abhy_socialmgt_pgwm_meeting_Info();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}


// Delete PGWM Committee Meeting Data
function Delete_pgwm_meeting(Id) {

    if (confirm("Are you sure to delete this row?")) {
        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/WSP_2024_25/Delete_pgwm_meeting',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                abhy_socialmgt_pgwm_meeting_Info();
            }
        });
    }
}

function cancelpgwmRow(i) {
    $('#Show_Gplvl' + i).show();
    $('#Hide_Gplvl' + i).hide();
}

function EditpgwmRow(i) {
    $('#Show_Gplvl' + i).hide();
    $('#Hide_Gplvl' + i).show();
}
