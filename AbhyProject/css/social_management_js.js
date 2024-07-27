


var a = 1;
var aaa = 1;
var ab = 1;
var abc = 1;
var abcd = 1;
function addrow_a_part() {

    var count = 1;
    if (aaa == 1) {
        aaa = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='Save_abhy_socialmgt_gramdb()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancela_1();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control alpha' id='designation'/></td>" +
            "<td><input type='text' class='form-control alpha' id='member_name'/></td>" +

            "<td><Select id='gender' class='form-control'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Others'>Others</option></select></td>" +
            "<td> <Select id='reserved_unreserved' class='form-control'><option value='0'>Select Category </option><option value='General'>General</option><option value='OBC'>OBC</option><option value='SC'>SC</option><option value='ST'>ST</option></select></td><td> <input type='text' class='form-control integer' maxlength='10' id='contact_number'/></td></tr>";

        $('table#TblData_abc_part1 tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function farmer_category_value() {

    var category_fa = $('#category_fa').val();
    if (category_fa == "Farmer") {
        document.getElementById('marginal_fa').style.visibility = 'visible';
        document.getElementById('category_value').style.visibility = 'hidden';

    } else if (category_fa == "Others") {
        document.getElementById('marginal_fa').style.visibility = 'hidden';
        document.getElementById('category_value').style.visibility = 'visible';

    } else {
        document.getElementById('marginal_fa').style.visibility = 'hidden';
        document.getElementById('category_value').style.visibility = 'hidden';

    }

}
function addrow_b_part() {

    var count = 1;
    if (a == 1) {
        a = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='Save_Water_User_Association_Village_Water_and_Sanitation_Committee_Info()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelone();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><Select id='VWSC_designation' onchange='Checkother_VWSC_designation(this.value);' class='form-control'><option value='0'>Select Designation</option><option value='Chairperson'>Chairperson</option><option value='Vice-Chairperson'>Vice-Chairperson</option><option value='President'>President</option><option value='Vice President'>Vice-Chairperson</option><option value='Secretary'>Secretary</option><option value='treasurer'>treasurer</option><option value='Others'>Others</option></select><input type='text' class='form-control' id='designation_other_text'style='display:none;'/></td>" +
            "<td><input type='text' class='form-control alpha' id='VWSC_member_name'/></td>" +

            "<td><Select id='VWSC_gender' class='form-control'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Others'>Others</option></select></td>" +
            "<td><Select id='category_fa' onchange='farmer_category_value()' class='form-control'><option value='0'>Select Category</option><option value='Farmer'>Farmer</option><option value='Labour'>Labour</option><option value='Others'>Others</option></select> <Select id='marginal_fa' class='form-control'><option value='0'>Select SubCategory</option><option value='Small'>Small</option><option value='Marginal'>Marginal</option><option value='Large'>Large</option></select><input type='text' id='category_value' class='form-control' /></td>" +
            "<td><Select id='VWSC_reserved_unreserved' class='form-control'><option value='0'>Select one</option><option value='General'>General</option><option value='OBC'>OBC</option><option value='SC'>SC</option><option value='ST'>ST</option></select></td><td> <input type='text' class='form-control integer' maxlength='10'  id='VWSC_contact_number'/></td></tr>";
        $('table#TblData_b_part tbody').prepend(code);
        document.getElementById('marginal_fa').style.visibility = 'hidden';
        document.getElementById('category_value').style.visibility = 'hidden';

    }
    //count=count+1;
    //alert(count);
}
function Checkother_VWSC_designation(val) {

    var element = document.getElementById('designation_other_text');
    var elementSelect = document.getElementById('VWSC_designation');
    if (val == 'Others')
        element.style.display = 'block';

    else
        element.style.display = 'none';
    if (val == 'Others')
        elementSelect.style.display = 'none';

    else
        elementSelect.style.display = 'block';
}
function addrow_c_part() {

    var count = 1;
    if (ab == 1) {
        ab = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='Save_Support_Agency_DIP_Info()'>Save</button > <button type='button' class='btn btn-danger' onclick='canceltwo();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control alpha' id='DIP_designation'/></td>" +
            "<td><input type='text' class='form-control alpha' id='DIP_member_name'/></td>" +

            "<td><Select id='DIP_gender' class='form-control'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Others'>Others</option></select></td>" +
            "<td> <input type='text' class='form-control integer' maxlength='10' id='DIP_contact_number'/></td></tr>";
        $('table#TblData_c_part tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}
function addrow_d_part() {

    var count = 1;
    if (abc == 1) {
        abc = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='Save_Others_local_instituions_citizen_leaders_Info()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelthree();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><input type='text' class='form-control' id='Others_localdesignation'/></td>" +
            "<td><input type='text' class='form-control' id='Others_localmember_name'/></td>" +

            "<td><Select id='Others_localgender' class='form-control'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Others'>Others</option></select></td>" +
            "<td> <input type='text' class='form-control' id='Others_localcontact_number'/></td></tr>";
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
            "<td><Select id='print_media' class='form-control'  onchange='other_IECActivities(this.value);'><option value='0'>Select IEC Activities</option><option value='Print media'>Print media</option><option value='Radio'>Radio</option>value='Loudspeakers'>Loudspeakers</option><option value='Audio-visual presenation'>Audio-visual presenation</option><option value='Cable TV'>Cable TV</option><option value='Road shows'>Road shows</option><option value='Street plays'>Street plays</option><option value='Door to door campaign'>Door to door campaign</option><option value='Others'>Others</option></select><input type='text' class='form-control' id='radio'  style='display:none;'/></td>" +
            "<td><Select id='loud_speakers' class='form-control'><option value='0'>Select One</option><option value='Yes'>Yes</option><option value='No'>No</option></select></td></tr>";
        $('table#TblData_e_part tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}

function cancela_1() {

    // addrow();
    $('table#TblData_abc_part1 tbody tr#c1_count').remove();
    aaa = 1;

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

//GRAM PANCHAYAT DATABASE ( Details of Members of various Committees / Agencies)

function GramPanchayatDataBase_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_gramdb',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td><button type="button" class="btn btn-danger btn_disabled" onclick="Delete_abhy_socialmgt_gramdb(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td> <td>' + data[i].reserved_unreserved + '</td> <td>' + data[i].contact_number + '</td></tr>';
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
            $('input[type=text]').prop("disabled", true);
            $('.btn_disabled').prop("disabled", true);
            //if (Access_Auth == 'readonly') {
            //    $('input[type=text]').prop("disabled", true);
            //    $('.btn_disabled').prop("disabled", true);
                
            //}
            
        }
    });
}

function Delete_abhy_socialmgt_gramdb(ss) {
    if (State != "") {
        var obj = {};
        obj.id = ss;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring/Delete_abhy_socialmgt_gramdb",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != 'Deleted Successfully' && response != 'No Data' && response != 'Error' && response != 'Logout') {
                    window.location = "/Error/DefaultError";

                }
                aaa = 1;

                GramPanchayatDataBase_Info();
            }
        });
    }
    else {
        alert("Please Select StateName");
    }

}

function Save_abhy_socialmgt_gramdb() {
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
        var i = 0;
        var designation = $('#designation').val();

        var member_name = $('#member_name').val();
        var gender = $('#gender').val();
        var reserved_unreserved = $('#reserved_unreserved').val();
        var contact_number = $('#contact_number').val();
        if (designation == "") {
            alert("Please Enter Designation");
            i = 1;
        }
        else if (member_name == "") {
            alert("Please Enter Member Name");
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            i = 1;
        }
        else if (reserved_unreserved == "0") {
            alert("Please Select Category");
            i = 1;
        }
        else if (contact_number == "") {
            alert("Please Enter Contact Number");
            i = 1;
        }
        if (i == 0) {
            obj.designation = $('#designation').val();
            obj.member_name = $('#member_name').val();
            obj.gender = $('#gender').val();
            obj.reserved_unreserved = $('#reserved_unreserved').val();
            obj.contact_number = $('#contact_number').val();
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring/Save_abhy_socialmgt_gramdb",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Please Select  Category' && response != 'Please Enter  Name' && response != 'Please Select  Gender' && response != 'Please Enter Designation' && response != 'Please Enter Contact Number') {
                        window.location = "/Error/DefaultError";

                    }
                    aaa = 1;
                    GramPanchayatDataBase_Info();
                }
            });
        }
    }
}

//Water User Association/ Village Water and Sanitation Committee (VWSC)

function vwms_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/VWSC_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var Category = "";
                    if (data[i].category_fa == "Farmer") {
                        if (data[i].marginal_fa != "0") {
                            Category = data[i].category_fa + '/' + data[i].marginal_fa;
                        } else {
                            Category = data[i].category_fa;
                        }
                    } else if (data[i].category_fa == "Others") {
                        if (data[i].category_value != "") {
                            Category = data[i].category_fa + '/' + data[i].category_value;
                        } else {
                            Category = data[i].category_fa;
                        }
                    } else {
                        Category = data[i].category_fa;
                    }
                    tr += '<tr><td><button type="button" class="btn btn-danger btn_disabled" onclick="Delete_Water_User_Association_Village_Water_and_Sanitation_Committee(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td><td>' + Category + '</td> <td>' + data[i].reserved_unreserved + '</td> <td>' + data[i].contact_number + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="8">No Data</td></tr>';
                $('#TblData_VWSC').html(tr);
            }
            else {
                $('#TblData_VWSC').html(tr);
            }
            $('input[type=text]').prop("disabled", true);
            $('.btn_disabled').prop("disabled", true);
            //if (Access_Auth == 'readonly') {
            //    $('input[type=text]').prop("disabled", true);
            //    $('.btn_disabled').prop("disabled", true);
            //}
            a = 1;

        }
    });
}

function Delete_Water_User_Association_Village_Water_and_Sanitation_Committee(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/SocialMointoring/Delete_VWSC_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (response != "Deleted Successfully" && response != "Logout" && response != "No Data") {
                window.location = "/Error/DefaultError";
            }
            a = 1;
            vwms_Info();
        }
    });

}

function Save_Water_User_Association_Village_Water_and_Sanitation_Committee_Info() {
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
        var i = 0;
        var designation = $('#VWSC_designation').val();

        var member_name = $('#VWSC_member_name').val();
        var gender = $('#VWSC_gender').val();
        var reserved_unreserved = $('#VWSC_reserved_unreserved').val();
        var contact_number = $('#VWSC_contact_number').val();
        if (designation == "") {
            alert("Please Enter Designation");
            i = 1;
        }
        else if (member_name == "") {
            alert("Please Enter Member Name");
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            i = 1;
        }
        else if (reserved_unreserved == "0") {
            alert("Please Select Catagory Type");
            i = 1;
        }
        else if (category_fa == "0") {
            alert("Please Select catagory");
            i = 1;
        }
        else if (contact_number == "") {
            alert("Please Enter Contact Number");
            i = 1;
        }
        if (i == 0) {
            if (designation == "Others") {
                obj.designation = $('#designation_other_text').val();
            } else {
                obj.designation = $('#VWSC_designation').val();
            }
            obj.member_name = $('#VWSC_member_name').val();
            obj.gender = $('#VWSC_gender').val();
            obj.reserved_unreserved = $('#VWSC_reserved_unreserved').val();
            obj.contact_number = $('#VWSC_contact_number').val();
            obj.category_fa = $('#category_fa').val();
            obj.marginal_fa = $('#marginal_fa').val();
            obj.category_value = $('#category_value').val();
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring/Save_VWSC_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != "Successfully Saved" && response != "Logout" && response != "Please Enter Contact Number" && response != "Please Select Designation" && response != "Please Select Gender" && response != "Please Enter Member Name" && response != "Please Select Reserved_Unreserved" && response != "Please Select Category") {

                        window.location = "/Error/DefaultError";
                    }

                    $('#VWSC_designation').val("");
                    $('#VWSC_member_name').val();
                    $('#VWSC_gender').val();
                    $('#VWSC_reserved_unreserved').val();
                    $('#VWSC_contact_number').val();
                    $('#category_fa').val("0");
                    $('#marginal_fa').val("0");
                    $('#category_value').val("");
                    a = 1;
                    vwms_Info();
                }
            });
        }
    }

}

//Support Agency/ DIP

function Support_Agency_DIP_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/Support_Agency_DIP_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            ab = 1;
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td><button type="button" class="btn btn-danger btn_disabled" onclick="Delete_Support_Agency_DIP_Info(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td>  <td>' + data[i].contact_number + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_DIP').html(tr);
            }
            else {
                $('#TblData_DIP').html(tr);
            }
            $('input[type=text]').prop("disabled", true);
            $('.btn_disabled').prop("disabled", true);
            //if (Access_Auth == 'readonly') {
            //    $('input[type=text]').prop("disabled", true);
            //    $('.btn_disabled').prop("disabled", true);
            //}

        }
    });
}



function Delete_Support_Agency_DIP_Info(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/SocialMointoring/Delete_Support_Agency_DIP_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (response != "Deleted Successfully" && response != "Logout" && response != "No Data") {
                window.location = "/Error/DefaultError";
            }

            ab = 1;

            Support_Agency_DIP_Info();
        }
    });


}


function Save_Support_Agency_DIP_Info() {
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
        var i = 0;
        var designation = $('#DIP_designation').val();

        var member_name = $('#DIP_member_name').val();
        var gender = $('#DIP_gender').val();
        var reserved_unreserved = $('#DIP_reserved_unreserved').val();
        var contact_number = $('#DIP_contact_number').val();
        if (designation == "") {
            alert("Please Enter Designation");
            i = 1;
        }
        else if (member_name == "") {
            alert("Please Enter Member Name");
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            i = 1;
        }
        else if (reserved_unreserved == "0") {
            alert("Please Select Reserved Unreserved");
            i = 1;
        }
        else if (contact_number == "") {
            alert("Please Enter Contact Number");
            i = 1;
        }
        if (i == 0) {
            obj.designation = $('#DIP_designation').val();
            obj.member_name = $('#DIP_member_name').val();
            obj.gender = $('#DIP_gender').val();
            obj.reserved_unreserved = $('#DIP_reserved_unreserved').val();
            obj.contact_number = $('#DIP_contact_number').val();
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring/Save_Support_Agency_DIP_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != "Successfully Saved" && response != "Please Enter Contact Number" && response != "Please Enter Designation" && response != "Please Select Gender" && response != "Please Enter Member Name") {
                        window.location = "/Error/DefaultError";
                    }
                    ab = 1;
                    Support_Agency_DIP_Info();
                }
            });
        }
    }

}

//Others local instituions or citizen leaders/influencers

function Others_local_instituions_citizen_leaders_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/Others_local_instituions_citizen_leaders_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            abc = 1;
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td><button type="button" class="btn btn-danger btn_disabled" onclick="Delete_Others_local_instituions_citizen_leaders_Info(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_Others_local_instituions_citizen_leaders_Info').html(tr);
            }
            else {
                $('#TblData_Others_local_instituions_citizen_leaders_Info').html(tr);
            }
            $('input[type=text]').prop("disabled", true);
            $('.btn_disabled').prop("disabled", true);
            //if (Access_Auth == 'readonly') {
            //    $('input[type=text]').prop("disabled", true);
            //    $('.btn_disabled').prop("disabled", true);
            //}

        }
    });
}



function Delete_Others_local_instituions_citizen_leaders_Info(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/SocialMointoring/Delete_Others_local_instituions_citizen_leaders_Info",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (response != "Deleted Successfully" && response != "Logout" && response != "No Data") {
                window.location = "/Error/DefaultError";
            }

            abc = 1;
            Others_local_instituions_citizen_leaders_Info();
        }
    });

}


function Save_Others_local_instituions_citizen_leaders_Info() {
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
        var i = 0;
        var designation = $('#Others_localdesignation').val();

        var member_name = $('#Others_localmember_name').val();
        var gender = $('#Others_localgender').val();
        var reserved_unreserved = $('#Others_localreserved_unreserved').val();
        var contact_number = $('#Others_localcontact_number').val();
        if (designation == "") {
            alert("Please Enter Designation");
            i = 1;
        }
        else if (member_name == "") {
            alert("Please Enter Member Name");
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            i = 1;
        }
        else if (reserved_unreserved == "0") {
            alert("Please Select Reserved Unreserved");
            i = 1;
        }
        else if (contact_number == "") {
            alert("Please Enter Contact Number");
            i = 1;
        }
        if (i == 0) {
            obj.designation = $('#Others_localdesignation').val();
            obj.member_name = $('#Others_localmember_name').val();
            obj.gender = $('#Others_localgender').val();
            obj.reserved_unreserved = $('#Others_localreserved_unreserved').val();
            obj.contact_number = $('#Others_localcontact_number').val();
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring/Save_Others_local_instituions_citizen_leaders_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != "Successfully Saved" && response != "Please Enter Contact Number" && response != "Please Enter Designation" && response != "Please Select Gender" && response != "Please Enter Member Name") {
                        window.location = "/Error/DefaultError";
                    }
                    abc = 1;
                    Others_local_instituions_citizen_leaders_Info();
                }
            });
        }
    }
}



//IEC Activities (suggestive list)

function ee_table_part_data_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/IEC_Activities_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            var a = 0;

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            abcd = 1;
            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].print_media != "Others") {
                        a += 1
                        tr += '<tr><td><button type="button" class="btn btn-danger btn_disabled" onclick="Delete_ee_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].print_media + '</td><td>' + data[i].loud_speakers + '</td></tr>';
                    }
                    else {
                        a += 1
                        tr += '<tr><td><button type="button" class="btn btn-danger btn_disabled" onclick="Delete_ee_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].radio + '</td><td>' + data[i].loud_speakers + '</td></tr>';

                    }
                }

            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#tbl_e_part').html(tr);
            }
            else {
                $('#tbl_e_part').html(tr);
            }
            $('input[type=text]').prop("disabled", true);
            $('.btn_disabled').prop("disabled", true);
            //if (Access_Auth == 'readonly') {
            //    $('input[type=text]').prop("disabled", true);
            //    $('.btn_disabled').prop("disabled", true);
            //}



        }
    });

}
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
        var obj = {};
        var i = 0;
        var IECActivities = $('#print_media').val();
        var IECActivities_yes = $('#loud_speakers').val();
        var radio = $('#radio').val();
        if (IECActivities == "0") {
            alert("Please Select IEC Activities");
            i = 1;
        }
        else if (IECActivities_yes == "0") {
            alert("Please Select yes or No");
            i = 1;
        }
        if (i == 0) {
            obj.print_media = $('#print_media').val();
            obj.loud_speakers = $('#loud_speakers').val();
            obj.radio = $('#radio').val();

            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring/Save_IEC_Activities",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    else if (response != "Successfully Saved" && response != "Logout" && response != "Please Select IEC Activities" && response != "Please Select Yes/No") {
                        window.location = "/Error/DefaultError";
                    }
                    abcd = 1;
                    ee_table_part_data_geting();
                }
            });
        }

    }
}
function Delete_ee_table_part_data(id) {

    var obj = {};
    obj.id = id;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/SocialMointoring/Delete_IEC_Activities",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (response != "Deleted Successfully" && response != "Logout" && response != "No Data") {
                window.location = "/Error/DefaultError";
            }
            abcd = 1;
            ee_table_part_data_geting();
            //alert("Delete Successfully")

        }
    });

}
//function IEC_Activities_Info() {

//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/SocialMointoring/IEC_Activities_Info',
//        data: '',
//        dataType: 'JSON',
//        success: function (data) {

//            if (data == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";

//            }

//            if (data.length != 0) {
//                if (data[0].print_media != null && data[0].print_media != "") {
//                    $('#print_media').val(data[0].print_media);
//                }
//                if (data[0].loud_speakers != null && data[0].loud_speakers != "") {
//                    $('#loud_speakers').val(data[0].loud_speakers);
//                }

//                if (data[0].radio != null && data[0].radio != "") {
//                    $('#radio').val(data[0].radio);
//                }
//                if (data[0].audio_visual != null && data[0].audio_visual != "") {
//                    $('#audio_visual').val(data[0].audio_visual);
//                }

//                if (data[0].cabletv != null && data[0].cabletv != "") {
//                    $('#cabletv').val(data[0].cabletv);
//                }
//                if (data[0].road_shows != null && data[0].road_shows != "") {
//                    $('#road_shows').val(data[0].road_shows);
//                }

//                if (data[0].street_plays != null && data[0].street_plays != "") {
//                    $('#street_plays').val(data[0].street_plays);
//                }
//                if (data[0].door_to_door != null && data[0].door_to_door != "") {
//                    $('#door_to_door').val(data[0].door_to_door);
//                }


//                if (data[0].audio_visual != null && data[0].audio_visual != "") {
//                    $('#audio_visual').val(data[0].audio_visual);
//                }
//                if (data[0].others != null && data[0].others != "") {
//                    $('#others').val(data[0].others);
//                }
//            }


//        }
//    });
//}
//function Save_IEC_Activities() {
//    var obj = {};

//    obj.print_media = $('#print_media').val();
//    obj.loud_speakers = $('#loud_speakers').val();
//    obj.radio = $('#radio').val();
//    obj.audio_visual = $('#audio_visual').val();
//    obj.cabletv = $('#cabletv').val();

//    obj.road_shows = $('#road_shows').val();
//    obj.street_plays = $('#street_plays').val();
//    obj.door_to_door = $('#door_to_door').val();
//    obj.audio_visual = $('#audio_visual').val();
//    obj.others = $('#others').val();

//    $.ajax({
//        type: "POST",
//        contentType: "application/json;charset=utf-8",
//        url: "/SocialMointoring/Save_IEC_Activities",
//        data: "{'Data': '" + JSON.stringify(obj) + "'}",
//        dataType: 'JSON',
//        success: function (response) {
//            if (response == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";
//            }
//            alert(response);
//            IEC_Activities_Info();
//        }
//    });

//}

//Social Audit
function Social_Audit_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/Social_Audit_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            if (data.length != 0) {
                if (data[0].toolkit != null && data[0].toolkit != "") {
                    $('#toolkit').val(data[0].toolkit);
                }
                if (data[0].pilot_under != null && data[0].pilot_under != "") {
                    $('#pilot_under').val(data[0].pilot_under);
                }
                if (data[0].rollout_cal != null && data[0].rollout_cal != "") {
                    $('#rollout_cal').val(data[0].rollout_cal);
                }


                if (data[0].audit_report != null && data[0].audit_report != "") {
                    $('#audit_report').val(data[0].audit_report);
                }
                if (data[0].analysis_summary != null && data[0].analysis_summary != "") {
                    $('#analysis_summary').val(data[0].analysis_summary);
                }


            }


        }
    });

}

function Save_Social_Audit() {
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

        obj.toolkit = $('#toolkit').val();
        obj.pilot_under = $('#pilot_under').val();
        obj.rollout_cal = $('#rollout_cal').val();
        obj.audit_report = $('#audit_report').val();
        obj.analysis_summary = $('#analysis_summary').val();

        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring/Save_Social_Audit",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != "Successfully Saved" && response != "Logout" && response != "Error") {
                    window.location = "/Error/DefaultError";
                }

                Social_Audit_Info();
            }
        });
    }

}


//Total Population of the GP


function Total_Population_of_the_GP_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/Total_Population_of_the_GP_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            if (data.length != 0) {
                //if (data[0].tol_population != null && data[0].tol_population != "") {
                //    $('#tol_population').val(data[0].tol_population);
                //}
                if (data[0].basic_data != null && data[0].basic_data != "") {
                    $('#basic_data').val(data[0].basic_data);
                }
                if (data[0].pop_20_21 != null && data[0].pop_20_21 != "") {
                    $('#pop_20_21').val(data[0].pop_20_21);
                }
                if (data[0].pop_21_22 != null && data[0].pop_21_22 != "") {
                    $('#pop_21_22').val(data[0].pop_21_22);
                }
                if (data[0].pop_22_23 != null && data[0].pop_22_23 != "") {
                    $('#pop_22_23').val(data[0].pop_22_23);
                }
                if (data[0].pop_23_24 != null && data[0].pop_23_24 != "") {
                    $('#pop_23_24').val(data[0].pop_23_24);
                }
                if (data[0].pop_24_25 != null && data[0].pop_24_25 != "") {
                    $('#pop_24_25').val(data[0].pop_24_25);
                }
                //if (data[0].cumulative != null && data[0].cumulative != "") {
                //    $('#cumulative').val(data[0].cumulative);
                //}
            }
            else {

                $('#tol_population').val("");

                $('#basic_data').val("");

                $('#pop_20_21').val("");

                $('#pop_21_22').val("");

                $('#pop_22_23').val("");

                $('#pop_23_24').val("");

                $('#pop_24_25').val("");

                //$('#cumulative').val("");


            }

        }
    });

}

function Save_Total_Population_of_the_GP_Info() {
    var xx = 0;
    //var tol_population = $('#tol_population').val();

    var basic_data = $('#basic_data').val();
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
    //else if (tol_population == "") {
    //    xx = 1;
    //    alert("Please Enter Total Papulation");
    //}
    //else if (basic_data == "") {
    //    xx = 1;
    //    alert("Please Enter Census Year");
    //}
    if (xx == 0) {
        var obj = {};

        // obj.tol_population = $('#tol_population').val();

        obj.basic_data = $('#basic_data').val();

        obj.pop_20_21 = $('#pop_20_21').val();

        obj.pop_21_22 = $('#pop_21_22').val();

        obj.pop_22_23 = $('#pop_22_23').val();

        obj.pop_23_24 = $('#pop_23_24').val();

        obj.pop_24_25 = $('#pop_24_25').val();

        //obj.cumulative = $('#cumulative').val();

        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring/Save_Total_Population_of_the_GP_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != "Successfully Saved" && response != "Logout" && response != "Please Enter TotalPapulation" && response != "Please Enter Census Year" && response != "Please Enter 2021" && response != "Please Enter 2022" && response != "Please Enter 2023" && response != "Please Enter 2024" && response != "Please Enter 2025") {
                    window.location = "/Error/DefaultError";
                }

                Total_Population_of_the_GP_Info();
            }
        });
    }

}

// Socio-economic demographic profile

function Socio_economic_demographic_profile_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/Socio_economic_demographic_profile_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            if (data.length != 0) {
                if (data[0].male_basic_data != null && data[0].male_basic_data != "") {
                    $('#male_basic_data').val(data[0].male_basic_data);
                }
                if (data[0].male_pop_20_21 != null && data[0].male_pop_20_21 != "") {
                    $('#male_pop_20_21').val(data[0].male_pop_20_21);
                }
                if (data[0].male_pop_21_22 != null && data[0].male_pop_21_22 != "") {
                    $('#male_pop_21_22').val(data[0].male_pop_21_22);
                }
                if (data[0].male_pop_22_23 != null && data[0].male_pop_22_23 != "") {
                    $('#male_pop_22_23').val(data[0].male_pop_22_23);
                }
                if (data[0].male_pop_23_24 != null && data[0].male_pop_23_24 != "") {
                    $('#male_pop_23_24').val(data[0].male_pop_23_24);
                }
                if (data[0].male_pop_24_25 != null && data[0].male_pop_24_25 != "") {
                    $('#male_pop_24_25').val(data[0].male_pop_24_25);
                }
                //if (data[0].male_cumulative != null && data[0].male_cumulative != "") {
                //    $('#male_cumulative').val(data[0].male_cumulative);
                //}
                if (data[0].female_basic_data != null && data[0].female_basic_data != "") {
                    $('#female_basic_data').val(data[0].female_basic_data);
                }


                if (data[0].female_pop_20_21 != null && data[0].female_pop_20_21 != "") {
                    $('#female_pop_20_21').val(data[0].female_pop_20_21);
                }
                if (data[0].female_pop_21_22 != null && data[0].female_pop_21_22 != "") {
                    $('#female_pop_21_22').val(data[0].female_pop_21_22);
                }
                if (data[0].female_pop_22_23 != null && data[0].female_pop_22_23 != "") {
                    $('#female_pop_22_23').val(data[0].female_pop_22_23);
                }
                if (data[0].female_pop_23_24 != null && data[0].female_pop_23_24 != "") {
                    $('#female_pop_23_24').val(data[0].female_pop_23_24);
                }
                if (data[0].female_pop_24_25 != null && data[0].female_pop_24_25 != "") {
                    $('#female_pop_24_25').val(data[0].female_pop_24_25);
                }
                //if (data[0].female_cumulative != null && data[0].female_cumulative != "") {
                //    $('#female_cumulative').val(data[0].female_cumulative);
                //}
                //if (data[0].sexratio_basic_data != null && data[0].sexratio_basic_data != "") {
                //    $('#sexratio_basic_data').val(data[0].sexratio_basic_data);
                //}
                //if (data[0].sexratio_pop_20_21 != null && data[0].sexratio_pop_20_21 != "") {
                //    $('#sexratio_pop_20_21').val(data[0].sexratio_pop_20_21);
                //}


                //if (data[0].sexratio_pop_21_22 != null && data[0].sexratio_pop_21_22 != "") {
                //    $('#sexratio_pop_21_22').val(data[0].sexratio_pop_21_22);
                //}
                //if (data[0].sexratio_pop_22_23 != null && data[0].sexratio_pop_22_23 != "") {
                //    $('#sexratio_pop_22_23').val(data[0].sexratio_pop_22_23);
                //}
                //if (data[0].sexratio_pop_23_24 != null && data[0].sexratio_pop_23_24 != "") {
                //    $('#sexratio_pop_23_24').val(data[0].sexratio_pop_23_24);
                //}
                //if (data[0].sexratio_pop_24_25 != null && data[0].sexratio_pop_24_25 != "") {
                //    $('#sexratio_pop_24_25').val(data[0].sexratio_pop_24_25);
                //}
                //if (data[0].sexratio_cumulative != null && data[0].sexratio_cumulative != "") {
                //    $('#sexratio_cumulative').val(data[0].sexratio_cumulative);
                //}
                if (data[0].other_basic_year != null && data[0].other_basic_year != "") {
                    $('#other_basic_year').val(data[0].other_basic_year);
                }
                if (data[0].other_pop_20_21 != null && data[0].other_pop_20_21 != "") {
                    $('#other_pop_20_21').val(data[0].other_pop_20_21);
                }


                if (data[0].other_pop_21_22 != null && data[0].other_pop_21_22 != "") {
                    $('#other_pop_21_22').val(data[0].other_pop_21_22);
                }
                if (data[0].other_pop_22_23 != null && data[0].other_pop_22_23 != "") {
                    $('#other_pop_22_23').val(data[0].other_pop_22_23);
                }
                if (data[0].other_pop_23_24 != null && data[0].other_pop_23_24 != "") {
                    $('#other_pop_23_24').val(data[0].other_pop_23_24);
                }
                if (data[0].other_pop_24_25 != null && data[0].other_pop_24_25 != "") {
                    $('#other_pop_24_25').val(data[0].other_pop_24_25);
                }

            }
            else {

                $('#male_basic_data').val("");
                $('#male_pop_20_21').val("");
                $('#male_pop_21_22').val("");
                $('#male_pop_22_23').val("");
                $('#male_pop_23_24').val("");
                $('#male_pop_24_25').val("");
                //$('#male_cumulative').val("");
                $('#female_basic_data').val("");
                $('#female_pop_20_21').val("");
                $('#female_pop_21_22').val("");
                $('#female_pop_22_23').val("");
                $('#female_pop_23_24').val("");
                $('#female_pop_24_25').val("");
                //$('#female_cumulative').val("");
                $('#sexratio_basic_data').val("");
                $('#sexratio_pop_20_21').val("");
                $('#sexratio_pop_21_22').val("");
                $('#sexratio_pop_22_23').val("");
                $('#sexratio_pop_23_24').val("");
                $('#sexratio_pop_24_25').val("");
                //$('#sexratio_cumulative').val("");
                $('#other_basic_year').val("");
                $('#other_pop_20_21').val("");
                $('#other_pop_21_22').val("");
                $('#other_pop_22_23').val("");
                $('#other_pop_23_24').val("");
                $('#other_pop_24_25').val("");
                //$('#sexratio_cumulative').val("");

            }

            Census_Year_Socio_economic_Sex_Ratio();
            Socio_economic_Sex_Ratio_2021();
            Socio_economic_Sex_Ratio_2022();
            Socio_economic_Sex_Ratio_2023();
            Socio_economic_Sex_Ratio_2024();
            Socio_economic_Sex_Ratio_2025();
        }
    });

}
$("#male_basic_data,#female_basic_data").on("keydown keyup", function () {
    Census_Year_Socio_economic_Sex_Ratio();
});

function Census_Year_Socio_economic_Sex_Ratio() {
    var male_basic_data = $("#male_basic_data").val();
    if (male_basic_data == "") {
        male_basic_data = "0";
    }
    var female_basic_data = $("#female_basic_data").val();
    if (female_basic_data == "") {
        female_basic_data = "0";
    }
    var sexratio_basic_data = (parseFloat(female_basic_data) / parseFloat(male_basic_data)) * 1000;
    if (male_basic_data != 0) {
        $('#sexratio_basic_data').val(sexratio_basic_data.toFixed(2));
    }
    else {

        $('#sexratio_basic_data').val("0");
    }

}
$("#male_pop_20_21,#female_pop_20_21").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2021();

});

function Socio_economic_Sex_Ratio_2021() {
    var male_pop_20_21 = $("#male_pop_20_21").val();
    if (male_pop_20_21 == "") {
        male_pop_20_21 = "0";
    }
    var female_pop_20_21 = $("#female_pop_20_21").val();
    if (female_pop_20_21 == "") {
        female_pop_20_21 = "0";
    }
    var sexratio_pop_20_21 = (parseFloat(female_pop_20_21) / parseFloat(male_pop_20_21)) * 1000;
    if (male_pop_20_21 != 0) {
        $('#sexratio_pop_20_21').val(sexratio_pop_20_21.toFixed(2));
    }
    else {

        $('#sexratio_pop_20_21').val("0");
    }

}
$("#male_pop_21_22,#female_pop_21_22").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2022();
});

function Socio_economic_Sex_Ratio_2022() {
    var male_pop_21_22 = $("#male_pop_21_22").val();
    if (male_pop_21_22 == "") {
        male_pop_21_22 = "0";
    }
    var female_pop_21_22 = $("#female_pop_21_22").val();
    if (female_pop_21_22 == "") {
        female_pop_21_22 = "0";
    }
    var sexratio_pop_21_22 = (parseFloat(female_pop_21_22) / parseFloat(male_pop_21_22)) * 1000;
    if (male_pop_21_22 != 0) {
        $('#sexratio_pop_21_22').val(sexratio_pop_21_22.toFixed(2));
    }
    else {

        $('#sexratio_pop_21_22').val("0");
    }

}
$("#male_pop_22_23,#female_pop_22_23").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2023();
});

function Socio_economic_Sex_Ratio_2023() {

    var male_pop_22_23 = $("#male_pop_22_23").val();
    if (male_pop_22_23 == "") {
        male_pop_22_23 = "0";
    }

    var female_pop_22_23 = $("#female_pop_22_23").val();
    if (female_pop_22_23 == "") {
        female_pop_22_23 = "0";
    }
    var sexratio_pop_22_23 = (parseFloat(female_pop_22_23) / parseFloat(male_pop_22_23)) * 1000;

    if (male_pop_22_23 != 0) {
        $('#sexratio_pop_22_23').val(sexratio_pop_22_23.toFixed(2));
    }
    else {

        $('#sexratio_pop_22_23').val("0");
    }
}
$("#male_pop_23_24,#female_pop_23_24").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2024();

});

function Socio_economic_Sex_Ratio_2024() {
    var male_pop_23_24 = $("#male_pop_23_24").val();
    if (male_pop_23_24 == "") {
        male_pop_23_24 = "0";
    }
    var female_pop_23_24 = $("#female_pop_23_24").val();
    if (female_pop_23_24 == "") {
        female_pop_23_24 = "0";
    }
    var sexratio_pop_23_24 = (parseFloat(female_pop_23_24) / parseFloat(male_pop_23_24)) * 1000;
    if (male_pop_23_24 != 0) {
        $('#sexratio_pop_23_24').val(sexratio_pop_23_24.toFixed(2));
    }
    else {

        $('#sexratio_pop_23_24').val("0");
    }

}
$("#male_pop_24_25,#female_pop_24_25").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2025();
});
function Socio_economic_Sex_Ratio_2025() {
    var male_pop_24_25 = $("#male_pop_24_25").val();
    if (male_pop_24_25 == "") {
        male_pop_24_25 = "0";
    }
    var female_pop_24_25 = $("#female_pop_24_25").val();
    if (female_pop_24_25 == "") {
        female_pop_24_25 = "0";
    }
    var sexratio_pop_24_25 = (parseFloat(female_pop_24_25) / parseFloat(male_pop_24_25)) * 1000;
    if (male_pop_24_25 != 0) {
        $('#sexratio_pop_24_25').val(sexratio_pop_24_25.toFixed(2));
    }
    else {

        $('#sexratio_pop_24_25').val("0");
    }

}


function Save_Socio_economic_demographic_profile_Info() {
    var xx = 0;
    var male_basic_data = $('#male_basic_data').val();
    var female_basic_data = $('#female_basic_data').val();
    var sexratio_basic_data = $('#sexratio_basic_data').val();
    var other_basic_year = $('#other_basic_year').val();
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
    else if (male_basic_data == "") {
        xx = 1;
        alert("Please Enter Male Census year");
    }
    else if (female_basic_data == "") {
        xx = 1;
        alert("Please Enter FeMale Census year");
    }
    else if (other_basic_year == "") {
        xx = 1;
        alert("Please Enter Others Census year");
    } else if (sexratio_basic_data == "") {
        xx = 1;
        alert("Please Enter Sex Ratio Census year");
    }
    if (xx == 0) {
        var obj = {};
        obj.male_basic_data = $('#male_basic_data').val();
        obj.male_pop_20_21 = $('#male_pop_20_21').val();
        obj.male_pop_21_22 = $('#male_pop_21_22').val();
        obj.male_pop_22_23 = $('#male_pop_22_23').val();
        obj.male_pop_23_24 = $('#male_pop_23_24').val();
        obj.male_pop_24_25 = $('#male_pop_24_25').val();
        //obj.male_cumulative = $('#male_cumulative').val();
        obj.female_basic_data = $('#female_basic_data').val();
        obj.female_pop_20_21 = $('#female_pop_20_21').val();
        obj.female_pop_21_22 = $('#female_pop_21_22').val();
        obj.female_pop_22_23 = $('#female_pop_22_23').val();
        obj.female_pop_23_24 = $('#female_pop_23_24').val();
        obj.female_pop_24_25 = $('#female_pop_24_25').val();
        //obj.female_cumulative = $('#female_cumulative').val();
        obj.sexratio_basic_data = $('#sexratio_basic_data').val();
        obj.sexratio_pop_20_21 = $('#sexratio_pop_20_21').val();
        obj.sexratio_pop_21_22 = $('#sexratio_pop_21_22').val();
        obj.sexratio_pop_22_23 = $('#sexratio_pop_22_23').val();
        obj.sexratio_pop_23_24 = $('#sexratio_pop_23_24').val();
        obj.sexratio_pop_24_25 = $('#sexratio_pop_24_25').val();
        //obj.sexratio_cumulative = $('#sexratio_cumulative').val();
        obj.other_basic_year = $('#other_basic_year').val();
        obj.other_pop_20_21 = $('#other_pop_20_21').val();
        obj.other_pop_21_22 = $('#other_pop_21_22').val();
        obj.other_pop_22_23 = $('#other_pop_22_23').val();
        obj.other_pop_23_24 = $('#other_pop_23_24').val();
        obj.other_pop_24_25 = $('#other_pop_24_25').val();

        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring/Save_Socio_economic_demographic_profile_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != "Successfully Saved" && response != "Logout" && response != "Please Enter Male Census Year" && response != "Please Enter FeMale Census Year" && response != "Please Enter Sex Ratio(Women per 1000) Census Year" && response != "Please Enter Other Census Year") {
                    window.location = "/Error/DefaultError";
                }

                Socio_economic_demographic_profile_Info();
            }
        });
    }

}

//Based On Farmer

function abhy_socialmgt_vulnerable_communities_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_vulnerable_communities_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            if (data.length != 0) {
                if (data[0].bpl_basic_data != null && data[0].bpl_basic_data != "") {
                    $('#bpl_basic_data').val(data[0].bpl_basic_data);
                }
                if (data[0].bpl_pop_20_21 != null && data[0].bpl_pop_20_21 != "") {
                    $('#bpl_pop_20_21').val(data[0].bpl_pop_20_21);
                }
                if (data[0].bpl_pop_21_22 != null && data[0].bpl_pop_21_22 != "") {
                    $('#bpl_pop_21_22').val(data[0].bpl_pop_21_22);
                }
                if (data[0].bpl_pop_22_23 != null && data[0].bpl_pop_22_23 != "") {
                    $('#bpl_pop_22_23').val(data[0].bpl_pop_22_23);
                }
                if (data[0].bpl_pop_23_24 != null && data[0].bpl_pop_23_24 != "") {
                    $('#bpl_pop_23_24').val(data[0].bpl_pop_23_24);
                }
                if (data[0].bpl_pop_24_25 != null && data[0].bpl_pop_24_25 != "") {
                    $('#bpl_pop_24_25').val(data[0].bpl_pop_24_25);
                }
                //if (data[0].bpl_cumulative != null && data[0].bpl_cumulative != "") {
                //    $('#bpl_cumulative').val(data[0].bpl_cumulative);
                //}
                if (data[0].sc_basic_data != null && data[0].sc_basic_data != "") {
                    $('#sc_basic_data').val(data[0].sc_basic_data);
                }


                if (data[0].sc_pop_20_21 != null && data[0].sc_pop_20_21 != "") {
                    $('#sc_pop_20_21').val(data[0].sc_pop_20_21);
                }
                if (data[0].sc_pop_21_22 != null && data[0].sc_pop_21_22 != "") {
                    $('#sc_pop_21_22').val(data[0].sc_pop_21_22);
                }
                if (data[0].sc_pop_22_23 != null && data[0].sc_pop_22_23 != "") {
                    $('#sc_pop_22_23').val(data[0].sc_pop_22_23);
                }
                if (data[0].sc_pop_23_24 != null && data[0].sc_pop_23_24 != "") {
                    $('#sc_pop_23_24').val(data[0].sc_pop_23_24);
                }
                if (data[0].sc_pop_24_25 != null && data[0].sc_pop_24_25 != "") {
                    $('#sc_pop_24_25').val(data[0].sc_pop_24_25);
                }
                if (data[0].sc_cumulative != null && data[0].sc_cumulative != "") {
                    $('#sc_cumulative').val(data[0].sc_cumulative);
                }
                if (data[0].st_basic_data != null && data[0].st_basic_data != "") {
                    $('#st_basic_data').val(data[0].st_basic_data);
                }
                if (data[0].st_pop_20_21 != null && data[0].st_pop_20_21 != "") {
                    $('#st_pop_20_21').val(data[0].st_pop_20_21);
                }
                if (data[0].st_pop_21_22 != null && data[0].st_pop_21_22 != "") {
                    $('#st_pop_21_22').val(data[0].st_pop_21_22);
                }
                if (data[0].st_pop_22_23 != null && data[0].st_pop_22_23 != "") {
                    $('#st_pop_22_23').val(data[0].st_pop_22_23);
                }
                if (data[0].st_pop_23_24 != null && data[0].st_pop_23_24 != "") {
                    $('#st_pop_23_24').val(data[0].st_pop_23_24);
                }
                if (data[0].st_pop_24_25 != null && data[0].st_pop_24_25 != "") {
                    $('#st_pop_24_25').val(data[0].st_pop_24_25);
                }
                //if (data[0].st_cumulative != null && data[0].st_cumulative != "") {
                //    $('#st_cumulative').val(data[0].st_cumulative);
                //}
                if (data[0].obc_basic_data != null && data[0].obc_basic_data != "") {
                    $('#obc_basic_data').val(data[0].obc_basic_data);
                }
                if (data[0].obc_pop_20_21 != null && data[0].obc_pop_20_21 != "") {
                    $('#obc_pop_20_21').val(data[0].obc_pop_20_21);
                }
                if (data[0].obc_pop_21_22 != null && data[0].obc_pop_21_22 != "") {
                    $('#obc_pop_21_22').val(data[0].obc_pop_21_22);
                }
                if (data[0].obc_pop_22_23 != null && data[0].obc_pop_22_23 != "") {
                    $('#obc_pop_22_23').val(data[0].obc_pop_22_23);
                }
                if (data[0].obc_pop_23_24 != null && data[0].obc_pop_23_24 != "") {
                    $('#obc_pop_23_24').val(data[0].obc_pop_23_24);
                }
                if (data[0].obc_pop_24_25 != null && data[0].obc_pop_24_25 != "") {
                    $('#obc_pop_24_25').val(data[0].obc_pop_24_25);
                }
                //if (data[0].obc_cumulative != null && data[0].obc_cumulative != "") {
                //    $('#obc_cumulative').val(data[0].obc_cumulative);
                //}
                if (data[0].minorities_basic_data != null && data[0].minorities_basic_data != "") {
                    $('#minorities_basic_data').val(data[0].minorities_basic_data);
                }
                if (data[0].minorities_pop_20_21 != null && data[0].minorities_pop_20_21 != "") {
                    $('#minorities_pop_20_21').val(data[0].minorities_pop_20_21);
                }
                if (data[0].minorities_pop_21_22 != null && data[0].minorities_pop_21_22 != "") {
                    $('#minorities_pop_21_22').val(data[0].minorities_pop_21_22);
                }
                if (data[0].minorities_pop_22_23 != null && data[0].minorities_pop_22_23 != "") {
                    $('#minorities_pop_22_23').val(data[0].minorities_pop_22_23);
                }
                if (data[0].minorities_pop_23_24 != null && data[0].minorities_pop_23_24 != "") {
                    $('#minorities_pop_23_24').val(data[0].minorities_pop_23_24);
                }
                if (data[0].minorities_pop_24_25 != null && data[0].minorities_pop_24_25 != "") {
                    $('#minorities_pop_24_25').val(data[0].minorities_pop_24_25);
                }





                //if (data[0].minorities_cumulative != null && data[0].minorities_cumulative != "") {
                //    $('#minorities_cumulative').val(data[0].minorities_cumulative);
                //}
                if (data[0].pwd_basic_data != null && data[0].pwd_basic_data != "") {
                    $('#pwd_basic_data').val(data[0].pwd_basic_data);
                }
                if (data[0].pwd_pop_20_21 != null && data[0].pwd_pop_20_21 != "") {
                    $('#pwd_pop_20_21').val(data[0].pwd_pop_20_21);
                }
                if (data[0].pwd_pop_21_22 != null && data[0].pwd_pop_21_22 != "") {
                    $('#pwd_pop_21_22').val(data[0].pwd_pop_21_22);
                }
                if (data[0].pwd_pop_22_23 != null && data[0].pwd_pop_22_23 != "") {
                    $('#pwd_pop_22_23').val(data[0].pwd_pop_22_23);
                }
                if (data[0].pwd_pop_23_24 != null && data[0].pwd_pop_23_24 != "") {
                    $('#pwd_pop_23_24').val(data[0].pwd_pop_23_24);
                }
                if (data[0].pwd_pop_24_25 != null && data[0].pwd_pop_24_25 != "") {
                    $('#pwd_pop_24_25').val(data[0].pwd_pop_24_25);
                }
                //if (data[0].pwd_cumulative != null && data[0].pwd_cumulative != "") {
                //    $('#pwd_cumulative').val(data[0].pwd_cumulative);
                //}
                if (data[0].women_hh_basic_data != null && data[0].women_hh_basic_data != "") {
                    $('#women_hh_basic_data').val(data[0].women_hh_basic_data);
                }
                if (data[0].women_hh_pop_20_21 != null && data[0].women_hh_pop_20_21 != "") {
                    $('#women_hh_pop_20_21').val(data[0].women_hh_pop_20_21);
                }
                if (data[0].women_hh_pop_21_22 != null && data[0].women_hh_pop_21_22 != "") {
                    $('#women_hh_pop_21_22').val(data[0].women_hh_pop_21_22);
                }
                if (data[0].women_hh_pop_22_23 != null && data[0].women_hh_pop_22_23 != "") {
                    $('#women_hh_pop_22_23').val(data[0].women_hh_pop_22_23);
                }
                if (data[0].women_hh_pop_23_24 != null && data[0].women_hh_pop_23_24 != "") {
                    $('#women_hh_pop_23_24').val(data[0].women_hh_pop_23_24);
                }

                if (data[0].women_hh_pop_24_25 != null && data[0].women_hh_pop_24_25 != "") {
                    $('#women_hh_pop_24_25').val(data[0].women_hh_pop_24_25);
                }
                //if (data[0].women_hh_cumulative != null && data[0].women_hh_cumulative != "") {
                //    $('#women_hh_cumulative').val(data[0].women_hh_cumulative);
                //}

            }
            else {

                $('#bpl_basic_data').val("");

                $('#bpl_pop_20_21').val("");

                $('#bpl_pop_21_22').val("");

                $('#bpl_pop_22_23').val("");

                $('#bpl_pop_23_24').val("");

                $('#bpl_pop_24_25').val("");

                $('#bpl_cumulative').val("");
                $('#sc_basic_data').val("");
                $('#sc_pop_20_21').val("");
                $('#sc_pop_21_22').val("");
                $('#sc_pop_22_23').val("");
                $('#sc_pop_23_24').val("");
                $('#sc_pop_24_25').val("");
                $('#sc_cumulative').val("");
                $('#st_basic_data').val("");
                $('#st_pop_20_21').val("");
                $('#st_pop_21_22').val("");
                $('#st_pop_22_23').val("");
                $('#st_pop_23_24').val("");
                $('#st_pop_24_25').val("");
                $('#st_cumulative').val("");
                $('#obc_basic_data').val("");
                $('#obc_pop_20_21').val("");
                $('#obc_pop_21_22').val("");
                $('#obc_pop_22_23').val("");
                $('#obc_pop_23_24').val("");
                $('#obc_pop_24_25').val("");
                $('#obc_cumulative').val("");
                $('#minorities_basic_data').val("");
                $('#minorities_pop_20_21').val("");
                $('#minorities_pop_21_22').val("");
                $('#minorities_pop_22_23').val("");
                $('#minorities_pop_23_24').val("");
                $('#minorities_pop_24_25').val("");
                $('#minorities_cumulative').val("");
                $('#pwd_basic_data').val("");
                $('#pwd_pop_20_21').val("");
                $('#pwd_pop_21_22').val("");
                $('#pwd_pop_22_23').val("");
                $('#pwd_pop_23_24').val("");
                $('#pwd_pop_24_25').val("");
                $('#pwd_cumulative').val("");
                $('#women_hh_basic_data').val("");
                $('#women_hh_pop_20_21').val("");
                $('#women_hh_pop_21_22').val("");
                $('#women_hh_pop_22_23').val("");
                $('#women_hh_pop_23_24').val("");
                $('#women_hh_pop_24_25').val("");
                $('#women_hh_cumulative').val("");


            }

        }
    });

}

function Save_abhy_socialmgt_vulnerable_communities_Info() {
    var xx = 0;
    var bpl_basic_data = $('#bpl_basic_data').val();
    var sc_basic_data = $('#sc_basic_data').val();
    var st_basic_data = $('#st_basic_data').val();
    var obc_basic_data = $('#obc_basic_data').val();
    var minorities_basic_data = $('#minorities_basic_data').val();
    var pwd_basic_data = $('#pwd_basic_data').val();
    var women_hh_basic_data = $('#women_hh_basic_data').val();
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
    else if (bpl_basic_data == "") {
        xx = 1;
        alert("Please Enter General Census year");
    }
    else if (sc_basic_data == "") {
        xx = 1;
        alert("Please Enter Scheduled Castes Census year");
    }
    else if (st_basic_data == "") {
        xx = 1;
        alert("Please Enter Scheduled Tribes Census year");
    }
    else if (obc_basic_data == "") {
        xx = 1;
        alert("Please Enter OBC Census year");
    }
    else if (minorities_basic_data == "") {
        xx = 1;
        alert("Please Enter Religious minorities Census year");
    }
    else if (pwd_basic_data == "") {
        xx = 1;
        alert("Please Enter Persons with Disabilities (PWD) Census year");
    }
    else if (women_hh_basic_data == "") {
        xx = 1;
        alert("Please Enter Women headed HH( No. of Households) Census year");
    }

    if (xx == 0) {
        var obj = {};

        obj.bpl_basic_data = $('#bpl_basic_data').val();

        obj.bpl_pop_20_21 = $('#bpl_pop_20_21').val();

        obj.bpl_pop_21_22 = $('#bpl_pop_21_22').val();

        obj.bpl_pop_22_23 = $('#bpl_pop_22_23').val();

        obj.bpl_pop_23_24 = $('#bpl_pop_23_24').val();

        obj.bpl_pop_24_25 = $('#bpl_pop_24_25').val();

        //obj.bpl_cumulative = $('#bpl_cumulative').val();
        obj.sc_basic_data = $('#sc_basic_data').val();
        obj.sc_pop_20_21 = $('#sc_pop_20_21').val();
        obj.sc_pop_21_22 = $('#sc_pop_21_22').val();
        obj.sc_pop_22_23 = $('#sc_pop_22_23').val();
        obj.sc_pop_23_24 = $('#sc_pop_23_24').val();
        obj.sc_pop_24_25 = $('#sc_pop_24_25').val();
        //obj.sc_cumulative = $('#sc_cumulative').val();
        obj.st_basic_data = $('#st_basic_data').val();
        obj.st_pop_20_21 = $('#st_pop_20_21').val();
        obj.st_pop_21_22 = $('#st_pop_21_22').val();
        obj.st_pop_22_23 = $('#st_pop_22_23').val();
        obj.st_pop_23_24 = $('#st_pop_23_24').val();
        obj.st_pop_24_25 = $('#st_pop_24_25').val();
        obj.st_cumulative = $('#st_cumulative').val();
        obj.obc_basic_data = $('#obc_basic_data').val();
        obj.obc_pop_20_21 = $('#obc_pop_20_21').val();
        obj.obc_pop_21_22 = $('#obc_pop_21_22').val();
        obj.obc_pop_22_23 = $('#obc_pop_22_23').val();
        obj.obc_pop_23_24 = $('#obc_pop_23_24').val();
        obj.obc_pop_24_25 = $('#obc_pop_24_25').val();
        //obj.obc_cumulative = $('#obc_cumulative').val();
        obj.minorities_basic_data = $('#minorities_basic_data').val();
        obj.minorities_pop_20_21 = $('#minorities_pop_20_21').val();
        obj.minorities_pop_21_22 = $('#minorities_pop_21_22').val();
        obj.minorities_pop_22_23 = $('#minorities_pop_22_23').val();
        obj.minorities_pop_23_24 = $('#minorities_pop_23_24').val();
        obj.minorities_pop_24_25 = $('#minorities_pop_24_25').val();
        //obj.minorities_cumulative = $('#minorities_cumulative').val();
        obj.pwd_basic_data = $('#pwd_basic_data').val();
        obj.pwd_pop_20_21 = $('#pwd_pop_20_21').val();
        obj.pwd_pop_21_22 = $('#pwd_pop_21_22').val();
        obj.pwd_pop_22_23 = $('#pwd_pop_22_23').val();
        obj.pwd_pop_23_24 = $('#pwd_pop_23_24').val();
        obj.pwd_pop_24_25 = $('#pwd_pop_24_25').val();
        //obj.pwd_cumulative = $('#pwd_cumulative').val();
        obj.women_hh_basic_data = $('#women_hh_basic_data').val();
        obj.women_hh_pop_20_21 = $('#women_hh_pop_20_21').val();
        obj.women_hh_pop_21_22 = $('#women_hh_pop_21_22').val();
        obj.women_hh_pop_22_23 = $('#women_hh_pop_22_23').val();
        obj.women_hh_pop_23_24 = $('#women_hh_pop_23_24').val();
        obj.women_hh_pop_24_25 = $('#women_hh_pop_24_25').val();
        //obj.women_hh_cumulative = $('#women_hh_cumulative').val();

        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring/Save_abhy_socialmgt_vulnerable_communities_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != "Successfully Saved" && response != "Please Enter General Census Year" && response != "Please Enter SC Census Year" && response != "Please Enter ST Census Year") {
                    window.location = "/Error/DefaultError";
                }

                abhy_socialmgt_vulnerable_communities_Info();
            }
        });
    }

}


//farmers

function abhy_socialmgt_farmers_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_farmers_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            if (data.length != 0) {
                if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                    $('#large_basic_data').val(data[0].large_basic_data);
                }
                if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                    $('#large_pop_20_21').val(data[0].large_pop_20_21);
                }
                if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                    $('#large_pop_21_22').val(data[0].large_pop_21_22);
                }
                if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                    $('#large_pop_22_23').val(data[0].large_pop_22_23);
                }
                if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                    $('#large_pop_23_24').val(data[0].large_pop_23_24);
                }
                if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                    $('#large_pop_24_25').val(data[0].large_pop_24_25);
                }
                //if (data[0].large_cumulative != null && data[0].large_cumulative != "") {
                //    $('#large_cumulative').val(data[0].large_cumulative);
                //}
                if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                    $('#marginal_basic_data').val(data[0].marginal_basic_data);
                }


                if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                    $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                }
                if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                    $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                }
                if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                    $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                }
                if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                    $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                }
                if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                    $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                }
                //if (data[0].marginal_cumulative != null && data[0].marginal_cumulative != "") {
                //    $('#marginal_cumulative').val(data[0].marginal_cumulative);
                //}
                if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                    $('#small_basic_data').val(data[0].small_basic_data);
                }
                if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                    $('#small_pop_20_21').val(data[0].small_pop_20_21);
                }
                if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                    $('#small_pop_21_22').val(data[0].small_pop_21_22);
                }
                if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                    $('#small_pop_22_23').val(data[0].small_pop_22_23);
                }
                if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                    $('#small_pop_23_24').val(data[0].small_pop_23_24);
                }
                if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                    $('#small_pop_24_25').val(data[0].small_pop_24_25);
                }
                //if (data[0].small_cumulative != null && data[0].small_cumulative != "") {
                //    $('#small_cumulative').val(data[0].small_cumulative);
                //}
                if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                    $('#medium_basic_data').val(data[0].medium_basic_data);
                }
                if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                    $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                }
                if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                    $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                }
                if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                    $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                }
                if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                    $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                }
                if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                    $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                }
                //if (data[0].medium_cumulative != null && data[0].medium_cumulative != "") {
                //    $('#medium_cumulative').val(data[0].medium_cumulative);
                //}
                if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                    $('#landless_basic_data').val(data[0].landless_basic_data);
                }
                if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                    $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                }
                if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                    $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                }
                if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                    $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                }
                if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                    $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                }
                if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                    $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                }





                //if (data[0].landless_cumulative != null && data[0].landless_cumulative != "") {
                //    $('#landless_cumulative').val(data[0].landless_cumulative);
                //}


            }
            else {

                $('#large_basic_data').val("");

                $('#large_pop_20_21').val("");

                $('#large_pop_21_22').val("");

                $('#large_pop_22_23').val("");

                $('#large_pop_23_24').val("");

                $('#large_pop_24_25').val("");

                //$('#large_cumulative').val("");
                $('#marginal_basic_data').val("");
                $('#marginal_pop_20_21').val("");
                $('#marginal_pop_21_22').val("");
                $('#marginal_pop_22_23').val("");
                $('#marginal_pop_23_24').val("");
                $('#marginal_pop_24_25').val("");
                //$('#marginal_cumulative').val("");
                $('#small_basic_data').val("");
                $('#small_pop_20_21').val("");
                $('#small_pop_21_22').val("");
                $('#small_pop_22_23').val("");
                $('#small_pop_23_24').val("");
                $('#small_pop_24_25').val("");
                //$('#small_cumulative').val("");
                $('#medium_basic_data').val("");
                $('#medium_pop_20_21').val("");
                $('#medium_pop_21_22').val("");
                $('#medium_pop_22_23').val("");
                $('#medium_pop_23_24').val("");
                $('#medium_pop_24_25').val("");
                //$('#medium_cumulative').val("");
                $('#landless_basic_data').val("");
                $('#landless_pop_20_21').val("");
                $('#landless_pop_21_22').val("");
                $('#landless_pop_22_23').val("");
                $('#landless_pop_23_24').val("");
                $('#landless_pop_24_25').val("");
                //$('#landless_cumulative').val("");



            }

        }
    });

}

function Save_abhy_socialmgt_farmers_Info() {
    var xx = 0;

    var large_basic_data = $('#large_basic_data').val();
    var marginal_basic_data = $('#marginal_basic_data').val();
    var marginal_basic_data = $('#marginal_basic_data').val();
    var medium_basic_data = $('#medium_basic_data').val();
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
    else if (large_basic_data == "") {
        xx = 1;
        alert("Please Enter Large Census year");
    }
    else if (marginal_basic_data == "") {
        xx = 1;
        alert("Please Enter Marginal Census year");
    }
    else if (marginal_basic_data == "") {
        xx = 1;
        alert("Please Enter Small Census year");
    }
    else if (medium_basic_data == "") {
        xx = 1;
        alert("Please Enter Medium Census year");
    }
    if (xx == 0) {
        var obj = {};
        obj.large_basic_data = $('#large_basic_data').val();

        obj.large_pop_20_21 = $('#large_pop_20_21').val();

        obj.large_pop_21_22 = $('#large_pop_21_22').val();

        obj.large_pop_22_23 = $('#large_pop_22_23').val();

        obj.large_pop_23_24 = $('#large_pop_23_24').val();

        obj.large_pop_24_25 = $('#large_pop_24_25').val();

        //obj.large_cumulative = $('#large_cumulative').val();
        obj.marginal_basic_data = $('#marginal_basic_data').val();
        obj.marginal_pop_20_21 = $('#marginal_pop_20_21').val();
        obj.marginal_pop_21_22 = $('#marginal_pop_21_22').val();
        obj.marginal_pop_22_23 = $('#marginal_pop_22_23').val();
        obj.marginal_pop_23_24 = $('#marginal_pop_23_24').val();
        obj.marginal_pop_24_25 = $('#marginal_pop_24_25').val();
        //obj.marginal_cumulative = $('#marginal_cumulative').val();
        obj.small_basic_data = $('#small_basic_data').val();
        obj.small_pop_20_21 = $('#small_pop_20_21').val();
        obj.small_pop_21_22 = $('#small_pop_21_22').val();
        obj.small_pop_22_23 = $('#small_pop_22_23').val();
        obj.small_pop_23_24 = $('#small_pop_23_24').val();
        obj.small_pop_24_25 = $('#small_pop_24_25').val();
        //obj.small_cumulative = $('#small_cumulative').val();
        obj.medium_basic_data = $('#medium_basic_data').val();
        obj.medium_pop_20_21 = $('#medium_pop_20_21').val();
        obj.medium_pop_21_22 = $('#medium_pop_21_22').val();
        obj.medium_pop_22_23 = $('#medium_pop_22_23').val();
        obj.medium_pop_23_24 = $('#medium_pop_23_24').val();
        obj.medium_pop_24_25 = $('#medium_pop_24_25').val();
        //obj.medium_cumulative = $('#medium_cumulative').val();
        obj.landless_basic_data = $('#landless_basic_data').val();
        obj.landless_pop_20_21 = $('#landless_pop_20_21').val();
        obj.landless_pop_21_22 = $('#landless_pop_21_22').val();
        obj.landless_pop_22_23 = $('#landless_pop_22_23').val();
        obj.landless_pop_23_24 = $('#landless_pop_23_24').val();
        obj.landless_pop_24_25 = $('#landless_pop_24_25').val();
        //obj.landless_cumulative = $('#landless_cumulative').val();


        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring/Save_abhy_socialmgt_farmers_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Please Enter Medium Census Year' && response != 'Please Enter Small Census Year' && response != 'Please Enter Marginal Census Year' && response != 'Please Enter Large Census Year') {
                    window.location = "/Error/DefaultError";
                }
                alert(response);
                abhy_socialmgt_farmers_Info();
            }
        });
    }

}

//Village/Ward/Commumity Meetings
function abhy_socialmgt_village_meetings_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_village_meetings_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var mom = "";
                    if (data[i].mom != null) {
                        mom = data[i].mom;
                    }
                    var mom_filename = "";
                    if (data[i].mom_filename != null) {
                        mom_filename = data[i].mom_filename;
                    }

                    var photographs = "";
                    if (data[i].photographs != null) {
                        photographs = data[i].photographs;
                    }


                    var photographs_filename = "";
                    if (data[i].photographs_filename != null) {
                        photographs_filename = data[i].photographs_filename;
                    }
                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td> <td>' + data[i].noof_attendees + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" target="_blank"> ' + mom_filename + '</a></td><td><a href="' + photographs + '" target="_blank"> ' + photographs_filename + '</a></td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#village_meeting_Info').html(tr);
            }
            else {
                $('#village_meeting_Info').html(tr);
            }

        }
    });
}

$("#male_v,#female_v,#other_v").on("keydown keyup", function () {
    Gender_village();
});

function Gender_village() {
    var male_v = 0;
    var female_v = 0;
    var other_v = 0;
    male_v = $("#male_v").val();
    if (male_v == "") {
        male_v = 0;
    }
    female_v = $("#female_v").val();
    if (female_v == "") {
        female_v = 0;
    }
    other_v = $("#other_v").val();
    if (other_v == "") {
        other_v = 0;
    }

    var total_v = parseFloat(male_v) + parseFloat(female_v) + parseFloat(other_v);
    $('#total_v').val(parseFloat(total_v));


}


function Save_abhy_socialmgt_village_meetings_Info() {
    var xx = 0;
    var location = $('#location').val();
    var name_of_meeting = $('#name_of_meeting').val();
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
    else if (name_of_meeting == "") {
        xx = 1;
        alert("Please Enter Name of Meeting");
    }

    else if (location == "") {
        xx = 1;
        alert("Please Enter Location");
    }
    
    var ext = $('#mom').val().split('.').pop().toLowerCase();
    var ext1 = $('#photographs').val().split('.').pop().toLowerCase();
    if (ext != "") {
        if ($.inArray(ext, ['pdf', 'jpg', 'jpeg', 'doc']) == -1) {
            alert('Your Upload file has Not valid File, Please Upload proper file');
            return false;
        }
    }
    if (ext1 != "") {
        if ($.inArray(ext1, ['png', 'jpg', 'jpeg']) == -1) {
            alert('Your Upload file has Not valid File, Please Upload proper file');
            return false;
        }
    }
    if (xx == 0) {
        $.ajax({
            url: "/SocialMointoring/Save_abhy_socialmgt_village_meetings_Info",
            type: "POST",
            data: function () {
                var data = new FormData();
                data.append("location", jQuery("#location").val());
                data.append("prior_info", jQuery("#prior_info").val());
                data.append("noof_attendees", jQuery("#noof_attendees").val());
                data.append("male", jQuery("#male_v").val());
                data.append("female", jQuery("#female_v").val());
                data.append("other", jQuery("#other_v").val());
                data.append("total", jQuery("#total_v").val());
                data.append("name_of_meeting", jQuery("#name_of_meeting").val());
                data.append("curr_date", jQuery("#demogram").val());

                data.append("disaggregated_data", jQuery("#disaggregated_data").val());
                data.append("key_issues", jQuery("#key_issues").val());
                data.append("mom", jQuery("#mom").get(0).files[0]);
                data.append("photographs", jQuery("#photographs").get(0).files[0]);


                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Please Enter Meeting Name' && response != 'Your Upload file has Double Extention, Please Upload proper file' && response != 'Your Upload file has Not valid File, Please Upload proper file' && response != 'Please Enter Location Name') {

                    window.location = "/Error/DefaultError";
                }

                $("#location").val("");
                $("#prior_info").val("");
                $("#noof_attendees").val("");

                $("#disaggregated_data").val("");
                $("#key_issues").val("");

                $("#mom").val("");
                $("#photographs").val("");

                $("#name_of_meeting").val("");

                $("#demogram").text("");
                $("#male_v").text("");
                $("#female_v").text("");
                $("#other_v").text("");
                $("#total_v").text("");

                abhy_socialmgt_village_meetings_Info();
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }
}

//Community Feedback (suggestive list)

function Get_details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_community_feedback_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else {
                const file_name = data[0].community_feedback.split("/");
                $("#DivFile").html("");
                if (data.length != 0) {
                    var tr1 = '<label><a href="' + data[0].community_feedback + '" download="" target="_blank" >' + file_name[2] + '</a></label>';
                    $('#DivFile').html(tr1);
                }
            }

        }
    });
}

function Save_abhy_socialmgt_community_feedback_Info() {
    var xx = 0;
    var Filess = $("#community_feedback").val();

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
    else if (Filess == "") {
        xx = 1;
        alert("Please Upload File");
    }
    if (xx == 0) {
        $.ajax({
            url: "/SocialMointoring/Save_abhy_socialmgt_community_feedback_Info",
            type: "POST",
            data: function () {
                var data = new FormData();

                data.append("community_feedback", jQuery("#community_feedback").get(0).files[0]);
                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {
                alert(response);
                if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Your Upload file has Double Extention, Please Upload proper file' && response != 'Your Upload file has Not valid File, Please Upload proper file') {
                    window.location = "/Error/DefaultError";
                }

                $("#community_feedback").val("");
                Get_details();
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }
}

//CAPACITY BUILDING & TRAINING

//getting
function abhy_socialmgt_capacity_building_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_capacity_building_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    var training_date = "";
                    if (data[i].training_date != null) {
                        training_date = data[i].training_date;
                    }

                    var training_schedule = "";
                    if (data[i].training_schedule != null) {
                        training_schedule = data[i].training_schedule;
                    }


                    var train_schedule_filename = "";
                    if (data[i].train_schedule_filename != null) {
                        train_schedule_filename = data[i].train_schedule_filename;
                    }


                    var training_materials = "";
                    if (data[i].training_materials != null) {
                        training_materials = data[i].training_materials;
                    }

                    var train_materials_filename = "";
                    if (data[i].train_materials_filename != null) {
                        train_materials_filename = data[i].train_materials_filename;
                    }



                    var noof_trainings = "";
                    if (data[i].noof_trainings != null) {
                        noof_trainings = data[i].noof_trainings;
                    }

                    var nooftrain_filename = "";
                    if (data[i].nooftrain_filename != null) {
                        nooftrain_filename = data[i].nooftrain_filename;
                    }



                    var training_report = "";
                    if (data[i].training_report != null) {
                        training_report = data[i].training_report;
                    }

                    var training_report_filename = "";
                    if (data[i].training_report_filename != null) {
                        training_report_filename = data[i].training_report_filename;
                    }


                    var achievements = "";
                    if (data[i].achievements != null) {
                        achievements = data[i].achievements;
                    }

                    var achievements_filename = "";
                    if (data[i].achievements_filename != null) {
                        achievements_filename = data[i].achievements_filename;
                    }


                    var findings_of_survey = "";
                    if (data[i].findings_of_survey != null) {
                        findings_of_survey = data[i].findings_of_survey;
                    }

                    var findings_filename = "";
                    if (data[i].findings_filename != null) {
                        findings_filename = data[i].findings_filename;
                    }

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].name_of_training + '</td><td>' + data[i].training_location + '</td><td>' + training_date + '</td> <td><a href="' + training_schedule + '" target="_blank">' + train_schedule_filename + '</a></td> <td><a href="' + training_materials + '" target="_blank">' + train_materials_filename + '</a></td> <td><a href="' + noof_trainings + '" target="_blank">' + nooftrain_filename + '</a></td> <td><a href="' + training_report + '" target="_blank">' + training_report_filename + '</a></td><td><a href="' + achievements + '" target="_blank">' + achievements_filename + '</a></td><td><a href="' + findings_of_survey + '" target="_blank">' + findings_filename + '</a></td><td><button class="btn btn-danger disable_btn" btn_disabled onclick="delete_socialmgt_capacity_building_Info(' + data[i].id + ') "><i class="fa fa-trash"></i></button></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="10">No Data</td></tr>';
                $('#capacity_building_Info').html(tr);
            }
            else {
                $('#capacity_building_Info').html(tr);
            }
            $('input[type=text]').prop("disabled", true);
            $('.btn_disabled').prop("disabled", true);
        }
    });
}

function delete_socialmgt_capacity_building_Info(id) {
    
    if (confirm("Are you sure you want to delete this record?")) {
        $.ajax({
            type: 'POST',
            url: '/SocialMointoring/delete_socialmgt_capacity_building_Info',
            data: "{'id': '" + id + "'}",
            contentType: 'application/json; chatset=utf-8',
            dataType: 'JSON',
            success: function (data) {
                if (data == 1) {
                    //alert("Data deleted successfully.");
                    abhy_socialmgt_capacity_building_Info();
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


function Save_abhy_socialmgt_capacity_building_Info() {
    var xx = 0;
    var name_of_training = $('#name_of_training').val();
    var training_location = $('#training_location').val();
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
    else if (name_of_training == "") {
        xx = 1;
        alert("Please Enter Name Of Training");
    }
    else if (training_location == "") {
        xx = 1;
        alert("Please Enter Training Location");
    }
    if (xx == 0) {
        $.ajax({
            url: "/SocialMointoring/Save_abhy_socialmgt_capacity_building_Info",
            type: "POST",
            data: function () {
                var data = new FormData();

                data.append("training_schedule", jQuery("#training_schedule").get(0).files[0]);
                data.append("training_materials", jQuery("#training_materials").get(0).files[0]);
                data.append("noof_trainings", jQuery("#noof_trainings").get(0).files[0]);
                data.append("training_report", jQuery("#training_report").get(0).files[0]);
                data.append("achievements", jQuery("#achievements").get(0).files[0]);
                data.append("findings_of_survey", jQuery("#findings_of_survey").get(0).files[0]);
                //data.append("actual_training", jQuery("#actual_training").get(0).files[0]);

                data.append("name_of_training", jQuery("#name_of_training").val());
                data.append("training_location", jQuery("#training_location").val());
                data.append("training_date", jQuery("#training_date").val());

                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);

                if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Your Upload file has Double Extention, Please Upload proper file' && response != 'Your Upload file has Not valid File, Please Upload proper file' && response != 'Please Enter Training Location' && response != 'Please Enter Training Name') {
                    window.location = "/Error/DefaultError";
                }

                $("#training_schedule").val("");
                $("#training_materials").val("");
                $("#noof_trainings").val("");
                $("#training_report").val("");
                $("#achievements").val("");
                $("#findings_of_survey").val("");
                $("#actual_training").val("");

                $("#name_of_training").val("");
                $("#training_location").val("");
                $("#training_date").val("");
                abhy_socialmgt_capacity_building_Info();


            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }

}

//GRM

var noof_complaints = 0;
var Approved_total = 0;
var Pending_total = 0;

function abhy_socialmgt_GRM_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_GRM_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            
            if (data.length != 0) {
                if (data[0].sys_aval != null && data[0].sys_aval != "") {
                    $('#sys_aval').val(data[0].sys_aval);
                }
                if (data[0].tollfreeno != null && data[0].tollfreeno != "") {
                    $('#tollfreeno').val(data[0].tollfreeno);
                }
                if (data[0].adds_dissemination != null && data[0].adds_dissemination != "") {
                    $('#adds_dissemination').val(data[0].adds_dissemination);
                }

                if (data[0].noof_complaints != null && data[0].noof_complaints != "") {
                    $('#noof_complaints').text(data[0].noof_complaints);
                }
                if (data[0].noof_resolved != null && data[0].noof_resolved != "") {
                    $('#noof_resolved').text(data[0].noof_resolved);
                }
                if (data[0].noof_pending != null && data[0].noof_pending != "") {
                    $('#noof_pending').text(data[0].noof_pending);
                }


            }
            else {

                $('#sys_aval').val("0");
                $('#tollfreeno').val("0");
                $('#adds_dissemination').val("0");

            }

        }
    });

}

function Grievance_Info_statewise() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Grievance/Grievance_Info_statewise',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            noof_complaints = 0;
            Approved_total = 0;
            Pending_total = 0;
            var tr = '';
            //if (data == "Logout") {
            //    window.location = "/WspNew/WSP_GWM_HOME";
            //}
            if (data.length != 0) {
                
                for (var i = 0; i < data.length; i++) {
                    noof_complaints = data.length;
                    if (data[i].accept == "Approved") {
                        Approved_total += 1;
                    }
                    else if (data[i].accept == "Pending") {
                        Pending_total += 1;
                    }


                    var Status = "";
                    if (data[i].accept == null) {
                        Status = "Pending";
                    }
                    else if (data[i].accept == "Decline") {
                        Status = "Pending";
                        Pending_total += 1;
                    }




                }

            }

            $('#noof_complaints').text(noof_complaints);
            $('#noof_resolved').text(Approved_total);
            $('#noof_pending').text(Pending_total);
        }
    });
}

function Save_GRM() {
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
        obj.sys_aval = $('#sys_aval').val();
        obj.tollfreeno = $('#tollfreeno').val();
        obj.adds_dissemination = $('#adds_dissemination').val();
        obj.noof_complaints = $('#noof_complaints').text();
        obj.noof_resolved = $('#noof_resolved').text();
        obj.noof_pending = $('#noof_pending').text();

        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring/Save_abhy_GRM_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Your Upload file has Double Extention, Please Upload proper file' && response != 'Your Upload file has Not valid File, Please Upload proper file' && response != 'Please Enter Training Location' && response != 'Please Enter Training Name') {
                    window.location = "/Error/DefaultError";
                }

                // alert(response);
                abhy_socialmgt_GRM_Info();
            }
        });
    }


}
// Other Option other IECActivities
function other_IECActivities(val) {

    var element = document.getElementById('radio');
    var elementSelect = document.getElementById('print_media');
    if (val == 'Others')
        element.style.display = 'block';

    else
        element.style.display = 'none';
    if (val == 'Others')
        elementSelect.style.display = 'none';

    else
        elementSelect.style.display = 'block';
}

// current data 
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = mm + '/ ' + dd + '/ ' + yyyy;
document.getElementById("demogram1").innerHTML = today;