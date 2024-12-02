

var commitee_vals = [];
var district_imp_vals = [];
var a = 1;
var aaa = 1;
var ab = 1;
var abc = 1;
var abcd = 1;

function addrow_a_part() {

    var count = 1;
    if (aaa == 1) {
        aaa = 0;
        var code = "<tr id='c1_count'><td><button class='btn btn-primary' onclick='save_abhy_socialmgt_gramdb()'>save</button > <button type='button' class='btn btn-danger' onclick='cancela_1();'>cancel</button></td>" +
            "<td></td>" +
            "<td><select id='designation_name' class='form-control select_width_set'><option value='0'>select designation</option><option value='sarpanch'>sarpanch</option><option value='deputy sarpanch/equivalent'>deputy sarpanch/equivalent</option><option value='pdo/panchayat secretary'>pdo/panchayat secretary</option></select></td>" +
            "<td><input type='text' class='form-control alpha' id='member_name'/></td>" +

            "<td><select id='gender' class='form-control'><option value='0'>select gender</option><option value='male'>male</option><option value='female'>female</option><option value='others'>others</option></select></td>" +
            "<td><input type='text' class='form-control integer' maxlength='10' id='contact_number'/></td></tr>";

        $('table#tbldata_abc_part1 tbody').prepend(code);
    }
    //count=count+1;
    //alert(count);
}

function date_find() {
    var Year = $('#year').val();
    var month = $('#month').val();
    var asso = $('Others_localnameofcommitte').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = Year;
    obj.month = month;
    obj.asso = asso;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/date_find',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }

            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    if (data[0].comm_name != null && data[0].comm_name != "") {
                        $('establishment_date').val(data[i].establishment_date);

                    }

                }
            }


        }
    });

}

//abhi1606  for PGWM
var awareness = [];
var ddlawareness_data = [];
var Data_tbl_3 = "";
function abhy_socialmgt_GRM_Info_getting() {

    $('.loader').show();
    var Year = $('#year').val();
    var month = $('#month').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = Year;
    obj.month = month;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/abhy_GRM_Info_new',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var j = 0;
            var tr = '';
            awareness = [];
            ddlawareness_data = [];
            if (data.length != 0) {
                if (StateOfficer == "Gram Panchyat Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].ddlawareness == "No") {
                            alert("1. Awarness  about Greivance Redressal Mechanism (GRM)  First Delete The No Enter After That Save The Data");
                            $('#ddlawareness').prop("disabled", true);
                            $('#adds_awareness').prop("disabled", true);
                            $('#sys_aval').prop("disabled", true);
                            $('#tollfreeno').prop("disabled", true);
                            $('#btnFinalSave7').prop("disabled", true);
                        }
                        else {
                            $('#ddlawareness').prop("disabled", false);
                            $('#adds_awareness').prop("disabled", false);
                            $('#sys_aval').prop("disabled", false);
                            $('#tollfreeno').prop("disabled", false);
                            $('#btnFinalSave7').prop("disabled", false);
                        }
                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "Reject") {
                            tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td><button type="button" class="btn btn-danger" style="display:none;" onclick="Delete_data(' + data[i].id + ')">Delete</button></td><td><label style="color: red;">Rejected By DPMU</label></td> </tr>';
                            $("#btnFinalSave7").prop("disabled", false);
                        }
                        else if (approve == "") {
                            tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td><button type="button" class="btn btn-danger" style="display:none;" onclick="Delete_data(' + data[i].id + ')">Delete</button></td> </tr>';
                            $("#btnFinalSave7").prop("disabled", false);

                        }
                        else if (approve == "District") {
                            tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: green;">Submit To DPMU</label></td> </tr>';
                            $('#ddlawareness').prop("disabled", true);
                            $('#adds_awareness').prop("disabled", true);
                            $('#sys_aval').prop("disabled", true);
                            $('#tollfreeno').prop("disabled", true);
                            $('#btnFinalSave7').prop("disabled", true);
                            $("#btnFinalSave7").prop("disabled", true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "State") {
                            tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: black;">Submit To SPMU</label></td> </tr>';
                            $("#btnFinalSave7").prop("disabled", true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "Approve") {
                            tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: blue;">Approved</label></td> </tr>';
                            $('#ddlawareness').prop("disabled", true);
                            $('#adds_awareness').prop("disabled", true);
                            $('#sys_aval').prop("disabled", true);
                            $('#tollfreeno').prop("disabled", true);

                            $("#btnFinalSave7").prop("disabled", true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "Sreject") {
                            $("#btnFinalSave7").prop("disabled", true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        awareness.push({
                            awareness_value: data[i].mea_of_awar,
                        });
                        ddlawareness_data.push({
                            ddlawareness_value: data[i].ddlawareness,
                        });

                    }
                }
                if (StateOfficer == "State Level Nodal Officer") {
                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            $('#ddlawareness').prop("disabled", true);
                            $('#adds_awareness').prop("disabled", true);
                            $('#sys_aval').prop("disabled", true);
                            $('#tollfreeno').prop("disabled", true);
                            var remarks = data[i].remark;
                            if (remarks == null) {
                                remarks = "";
                            }
                            var approve = data[i].approve;
                            if (approve == null) {
                                approve = "";
                            }
                            if (approve == "State") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td> </tr>';
                                $("#btnFinalSave7").prop("disabled", true);
                            }
                            else if (approve == "Approve") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: blue;">Approved</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "District") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: green;">Submit To DPMU</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "Reject") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: red;">Reject by DPMU</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: green;">At GP Level</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                        }
                    }
                    else {
                        $('#ddlawareness').prop("disabled", true);
                        $('#adds_awareness').prop("disabled", true);
                        $('#sys_aval').prop("disabled", true);
                        $('#tollfreeno').prop("disabled", true);
                    }
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            $('#ddlawareness').prop("disabled", true);
                            $('#adds_awareness').prop("disabled", true);
                            $('#sys_aval').prop("disabled", true);
                            $('#tollfreeno').prop("disabled", true);
                            var remarks = data[i].remark;
                            if (remarks == null) {
                                remarks = "";
                            }
                            var approve = data[i].approve;
                            if (approve == null) {
                                approve = "";
                            }
                            if (approve == "District") {
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);
                                $('#btnFinalSave7').prop("disabled", true);
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: green;">At DPMU Level</label></td> </tr>';
                                $("#btnFinalSave7").prop("disabled", true);
                            }
                            else if (approve == "Sreject") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: red;">Rejected By SPMU</label></td> </tr>';
                                $("#btnFinalSave7").prop("disabled", true);
                            }
                            else if (approve == "Approve") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: blue;">Approved</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_dpmu').prop('disabled', true);
                                $('#btn_submit_spmu').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "Reject") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: red;">Reject by DPMU</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);


                                $('#btn_reject_dpmu').prop('disabled', true);
                                $('#btn_submit_spmu').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: green;">At GP Level</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                        }
                    }
                    else {
                        $('#ddlawareness').prop("disabled", true);
                        $('#adds_awareness').prop("disabled", true);
                        $('#sys_aval').prop("disabled", true);
                        $('#tollfreeno').prop("disabled", true);
                    }
                }
                if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            $('#ddlawareness').prop("disabled", true);
                            $('#adds_awareness').prop("disabled", true);
                            $('#sys_aval').prop("disabled", true);
                            $('#tollfreeno').prop("disabled", true);
                            var remarks = data[i].remark;
                            if (remarks == null) {
                                remarks = "";
                            }
                            var approve = data[i].approve;
                            if (approve == null) {
                                approve = "";
                            }

                            else if (approve == "Approve") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: blue;">Approved</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "District") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: green;">Submit To DPMU</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "Reject") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: red;">Reject by DPMU</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }
                            else if (approve == "") {
                                tr += '<tr><td>' + (++j) + '</td><td>' + data[i].ddlawareness + '</td><td>' + data[i].mea_of_awar + '</td><td>' + data[i].mea_of_awar_oth + '</td><td>' + data[i].vil_awa_grm + '</td> <td>' + data[i].vil_awa_tfn + '</td><td></td><td><label style="color: green;">At GP Level</label></td> </tr>';
                                $('#ddlawareness').prop("disabled", true);
                                $('#adds_awareness').prop("disabled", true);
                                $('#sys_aval').prop("disabled", true);
                                $('#tollfreeno').prop("disabled", true);

                                $("#btnFinalSave7").prop("disabled", true);
                                $('#btn_reject_spmu').prop('disabled', true);
                                $('#btn_submit_approve').prop('disabled', true);
                                $('#remarks').prop('disabled', true);
                            }

                        }
                    }
                    else {
                        $('#ddlawareness').prop("disabled", true);
                        $('#adds_awareness').prop("disabled", true);
                        $('#sys_aval').prop("disabled", true);
                        $('#tollfreeno').prop("disabled", true);
                    }
                }
            }

            if (tr == '') {
                Data_tbl_3 = "Data_tbl_3";
                tr = '<tr style="text-align:center;"><td colspan="6">No Data</td></tr>';
                $('#ddlawareness').prop("disabled", false);
                $('#adds_awareness').prop("disabled", false);
                $('#sys_aval').prop("disabled", false);
                $('#tollfreeno').prop("disabled", false);
                /*$('#btnFinalSave7').prop("disabled", false);*/
                $('#ddlawareness').val('0');
                $('#grm_Info').html(tr);
                $('.loader').hide();
            }
            else {
                Data_tbl_3 = "";
                $('#grm_Info').html(tr);
                $('.loader').hide();
            }

        }
    });

}

function Delete_data(ss) {
    if (confirm("Are you sure to delete this row?")) {

        if (State != "") {
            var obj = {};
            obj.id = ss;
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring_new/Delete_data",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);

                    $("#btnFinalSave7").prop("disabled", false);
                    if (response == "Logout") {
                        window.location = "/Home/LogOut";
                    }
                    else if (response != 'Deleted Successfully' && response != 'No Data' && response != 'Error' && response != 'Logout') {

                    }
                    aaa = 1;
                    disalbelvalues_delete();
                    abhy_socialmgt_GRM_Info_getting();

                }
            });
        }
        else {
            alert("Please Select StateName");
        }

    }
}

function disalbelvalues_delete() {


    var ddlvalues = $('#ddlawareness').val();


    for (var i = 0; i < ddlawareness_data.length; i++) {

        if (ddlawareness_data[i].ddlawareness_value == " " && ddlawareness_data[i].ddlawareness_value == null) {

            $('#ddlawareness').prop("disabled", false);
            $('#adds_awareness').prop("disabled", false);
            $('#sys_aval').prop("disabled", false);
            $('#tollfreeno').prop("disabled", false);
            $('#btnFinalSave7').prop("disabled", false);
            break;
        }


    }
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
        var code = "<tr id='c1_count'><td class='d-flex'><button class='btn btn-primary c' onclick='Save_Water_User_Association_Village_Water_and_Sanitation_Committee_Info()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelone();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><Select id='VWSC_designation'class='select_width_set' onchange='Checkother_VWSC_designation(this.value);' class='form-control'><option value='0'>Select Designation</option><option value='Chairperson'>Chairperson</option><option value='Vice-Chairperson'>Vice-Chairperson</option><option value='President'>President</option><option value='Vice President'>Vice-Chairperson</option><option value='Secretary'>Secretary</option><option value='treasurer'>treasurer</option><option value='Others'>Others</option></select><input type='text' class='form-control' id='designation_other_text'style='display:none;'/></td>" +
            "<td><input type='text' class='form-control alpha input' id='VWSC_member_name'/></td>" +

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
        var code = "<tr id='c1_count'><td class = 'd-flex'><button class='btn btn-primary c' id='btnsave2' onclick='Save_Support_Agency_DIP_Info()'>Save</button > <button type='button' class='btn btn-danger ml-2' onclick='canceltwo();'>Cancel</button></td> " +
            "<td></td>" +
            "<td><input type='text' class='form-control alpha input' id='DIP_designation'/></td>" +
            "<td><input type='date' class='form-control input' id='ca_date_of_dip' name='setTodaysDate5' onkeypress='return false;'/></td>" +
            "<td><input type='text' class='form-control alpha input' id='DIP_member_name'/></td>" +
            "<td><Select id='ddldesination' class='form-control select_width_set' onchange='othertextboxadd()'><option value='0'>Select Designation</option><option value='Team Leader'>Team Leader</option><option value='Field superviser'>Field superviser</option><option value='Field Assicent'>Field Assicent</option><option value='Community Resource Person'>Community Resource Person</option><option value='Other'>Other</option></select><input type='text' id='txtother'class='form-control'/></td>" +
            "<td><Select id='DIP_gender' class='form-control select_width_set'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Transgender'>Transgender</option></select></td>" +
            "<td> <input type='text' class='form-control integer input' maxlength='10' id='DIP_contact_number'/></td>" +
            "<td><input type='date' class='form-control input' id='date_of_dip' name='setTodaysDate6' onkeypress='return false;'/></td></tr>";


        $('table#TblData_c_part tbody').prepend(code);
        $('#txtother').hide();
    }
    //count=count+1;
    //alert(count);
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("setTodaysDate5")[0].setAttribute('max', today);
    document.getElementsByName("setTodaysDate6")[0].setAttribute('max', today);
    document.getElementById("ca_date_of_dip").addEventListener("keydown", function (event) {
        event.preventDefault();
    });
    document.getElementById("date_of_dip").addEventListener("keydown", function (event) {
        event.preventDefault();
    });
}

function othertextboxadd() {

    check_data1();
    var ddlvalue = $('#ddldesination').val();
    if (ddlvalue == 'Other') {
        $('#txtother').show();
    }
    else {
        $('#txtother').hide();
    }
    if (ddlvalue == 'Community Resource Person') {
        $('#DIP_designation').val(" ");
        $('#DIP_designation').prop('disabled', true);
        $('#ca_date_of_dip').val(" ");
        $('#ca_date_of_dip').prop('disabled', true);
    }
    else {
        $('#DIP_designation').prop('disabled', false);
        $('#ca_date_of_dip').prop('disabled', false);
    }
}
function check(i) {

    if (i == undefined) {
        var Name_of_comm = $('#Others_localnameofcommitte').val();
        var date = $('#establishment_date').val();
        for (var i = 0; i < commitee_vals.length; i++) {
            if (commitee_vals[i].Committee == Name_of_comm) {
                $('#establishment_date').hide();

                break;
            }
            else {
                $('#establishment_date').show();
            }
        }
    }
    else {
        var Name_of_comm = $('#Others_localnameofcommitte' + i).val();

        var date = $('#establishment_date' + i).val();


        for (var i = 0; i < commitee_vals.length; i++) {

            if (commitee_vals[i].Committee == Name_of_comm) {

                $('#establishment_date').hide();

                break;
            }
            else {
                $('#establishment_date').show();
            }
        }
    }
    check_exist();
}
/*akash*/
function check_exist(i) {

    if (i == undefined) {
        var Name_of_comm = $('#Others_localnameofcommitte').val();
        var Name_of_desg = $('#Others_localdesignation').val();
        var date = $('#establishment_date').val();



        for (var i = 0; i < commitee_vals.length; i++) {
            if (Name_of_desg != "Members") {
                if (commitee_vals[i].Committee == Name_of_comm && commitee_vals[i].Designation == Name_of_desg) {

                    alert('Already Data Exist');
                    $('#Others_localnameofcommitte').val("0");
                    $('#Others_localdesignation').val("0");
                    $('#establishment_date').val("");
                    break;
                }
                if (commitee_vals[i].Committee == Name_of_comm && commitee_vals[i].Designation == Name_of_desg) {

                    alert('Already Data Exist');
                    $('#Others_localnameofcommitte').val("0");
                    $('#Others_localdesignation').val("0");
                    $('#establishment_date').val("");
                    break;
                }
            }
        }
    }
    else {
        var Name_of_comm = $('#Others_localnameofcommitte' + i).val();
        var Name_of_desg = $('#Others_localdesignation' + i).val();
        var date = $('#establishment_date' + i).val();


        for (var i = 0; i < commitee_vals.length; i++) {

            if (commitee_vals[i].Committee == Name_of_comm && commitee_vals[i].Designation == Name_of_desg) {

                alert('Already Data Exist');
                $('#Others_localnameofcommitte').val("0");
                $('#Others_localdesignation').val("0");
                $('#establishment_date').val("");
                break;
            }
            if (commitee_vals[i].Committee == Name_of_comm && commitee_vals[i].Designation == Name_of_desg) {

                alert('Already Data Exist');
                $('#Others_localnameofcommitte').val("0");
                $('#Others_localdesignation').val("0");
                $('#establishment_date').val("");
                break;
            }

        }
    }
}

function check_data1(i) {
    if (i == undefined) {
        var Name_of_desg = $('#ddldesination').val();
        for (var i = 0; i < district_imp_vals.length; i++) {

            if (district_imp_vals[i].Designation == Name_of_desg) {
                alert('Already Data Exist');
                $('#ddldesination').val("0");
                break;
            }
        }
    }
    else {
        var Name_of_desg = $('#ddldesination' + i).val();
        for (var i = 0; i < district_imp_vals.length; i++) {

            if (district_imp_vals[i].Designation == Name_of_desg) {
                alert('Already Data Exist');
                $('#ddldesination').val("0");
                break;
            }
        }
    }
}

function addrow_d_part() {


    var count = 1;
    if (abc == 1) {
        abc = 0;
        var code = "<tr id='c1_count'><td class='d-flex'><button class='btn btn-primary c' id='btnsave' onclick='Save_Others_local_instituions_citizen_leaders_Info()'>Save</button > <button type='button' class='btn btn-danger' onclick='cancelthree();'>Cancel</button></td>" +
            "<td></td>" +
            "<td><Select id='Others_localnameofcommitte' onchange='check()' class='form-control select_width_set'><option value='0'>Name of Committee / Association</option><option value='VWSC'>VWSC</option><option value='PGWMC'>PGWMC</option><option value='WUA'>WUA</option><option value='Pani Samiti'>Pani Samiti</option></select></td>" +
            "<td><input type='date' class='form-control input' id='establishment_date' name='setTodaysDate2' onkeypress='return false;'/></td>" +
            "<td><Select id='Others_localdesignation' class='form-control select_width_set' onchange='check_exist()'><option value='0'>Select Designation</option><option value='President'>President</option><option value='Secretary'>Secretary</option><option value='Members'>Members</option></select></td>" +
            "<td><input type='text' class='form-control input alpha' id='Others_localmember_name'/></td>" +
            "<td><Select id='Others_localgender' class='form-control select_width_set'><option value='0'>Select Gender</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Transgender'>Transgender</option></select></td>" +
            "<td><Select id='Others_localcategory' onchange='CategoryDropDown()' class='form-control select_width_set'><option value='0'>Select Category</option><option value='SC'>SC</option><option value='ST'>ST</option><option value='OBC'>OBC</option><option value='General'>General</option></select></td>" +
            "<td> <input type='text' class='form-control integer input'  maxlength='10' id='Others_localcontact_number'/></td>" +
            "<td> <input type='date' class='form-control input' id='date_of_commi' name='setTodaysDate3' onkeypress='return false;'/></td></tr>";
        $('table#TblData_d_part tbody').prepend(code);
        $('.hide_other').hide();
    }
    //count=count+1;
    //alert(count);
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("setTodaysDate2")[0].setAttribute('max', today);
    document.getElementsByName("setTodaysDate3")[0].setAttribute('max', today);
    document.getElementById("establishment_date").addEventListener("keydown", function (event) {
        event.preventDefault();
    });
    document.getElementById("date_of_commi").addEventListener("keydown", function (event) {
        event.preventDefault();
    });
}
function CategoryDropDown() {   //SocMan/3.category(other)
    //alert("hey");

    var category_fas = $('#Others_localcategory').val();

    if (category_fas == "Others") {

        $('.hide_other').show();


    } else {
        $('.hide_other').hide();

        // document.getElementById('   ').style.visibility = 'hidden';
        // document.getElementsByClassName('Others_category').style.visibility = 'hidden';
    }

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
var check_data = "";
function GramPanchayatDataBase_Info() {
    $('.loader').show();

    var Year = $('#year').val();
    var month = $('#month').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = Year;
    obj.month = month;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/abhy_socialmgt_gramdb',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            else if (data == "No Data") {
                check_data = "No";
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
                $('.loader').hide();

            }
            var tr = '';
            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {


                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].designation_name + '</td><td>' + data[i].name + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_details + '</td></tr>';

                }
            }
            if (tr == '') {
                check_data = "No";
                Others_local_instituions_citizen_leaders_Info();
                Support_Agency_DIP_Info();
                Socio_economic_demographic_profile_Info();
                abhy_socialmgt_farmers_Info();
                abhy_socialmgt_vulnerable_communities_Info();
                abhy_socialmgt_GRM_Info_getting();
                abhy_socialmgt_remarks();
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
                $('.loader').hide();
            }
            else {
                check_data = "Yes";
                Others_local_instituions_citizen_leaders_Info();
                Support_Agency_DIP_Info();
                Socio_economic_demographic_profile_Info();
                abhy_socialmgt_farmers_Info();
                abhy_socialmgt_vulnerable_communities_Info();
                abhy_socialmgt_GRM_Info_getting();
                abhy_socialmgt_remarks();
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
                $('.loader').hide();
            }
            aaa = 1;
        }
    });
}
function district_pgwm() {

    block();
    var drpst = $('#drpstate option:selected').text();
    var drpds = $('#drpdistrict option:selected').text();
    $.ajax({
        url: '/pgwm/district_pgwm',
        type: 'GET',
        data: { STATE: drpst, DISTRICT: drpds },
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td><button type="button" class="btn btn-danger" style="display:none;" onclick="Delete_abhy_socialmgt_pgwm(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].name + '</td><td>' + data[i].designation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].mobileno + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
            else {
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
        }
    });
    district_pgwm_();
}
//abhi1606
function block_pgwm() {

    grampanchayat();
    var drpst = $('#drpstate option:selected').text();
    var drpds = $('#drpdistrict option:selected').text();
    var drpblock = $('#drpblock option:selected').text();
    $.ajax({
        url: '/pgwm/block_pgwm',
        type: 'GET',
        data: { STATE: drpst, DISTRICT: drpds, BLOCK: drpbd },
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td><button type="button" class="btn btn-danger" style="display:none;" onclick="Delete_abhy_socialmgt_pgwm(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].name + '</td><td>' + data[i].designation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].mobileno + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
            else {
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
        }
    });
    block_pgwm_1();
}
//abhi1606
function Gram1_Fun() {



    var drpst = $('#drpstate option:selected').text();
    var drpds = $('#drpdistrict option:selected').text();
    var drpblock = $('#drpdistrict option:selected').text();;
    var drpgp = $('#drpgrampanchayat option:selected').text();
    $('#gpname_pgwm').val(drpgp);

    $.ajax({
        url: '/pgwm/gram_pgwm',
        type: 'GET',
        data: { STATE: drpst, DISTRICT: drpds, BLOCK: drpbd, GRAM: drpgp },
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td><button type="button" class="btn btn-danger" style="display:none;" onclick="Delete_abhy_socialmgt_pgwm(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].name + '</td><td>' + data[i].designation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].mobileno + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
            else {
                $('#TblData_GRAM_PANCHAYAT_DATABASE').html(tr);
            }
        }
    });

    gram_pgwm_1();
}
function state_pgwm_1() {
    $('.loader').show();
    var drpst = $('#drpstate option:selected').text();
    $.ajax({
        url: '/pgwm/state_pgwm_meeting',
        type: 'GET',
        data: { STATE: drpst },
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var mom1 = "";
                    if (data[i].mom != null) {
                        mom1 = data[i].mom;
                    }

                    var photo = "";
                    if (data[i].photograph != null) {
                        photo = data[i].photograph;
                    }

                    var resol = "";
                    if (data[i].resolution != null) {
                        resol = data[i].resolution;
                    }

                    var dpmu = "";
                    if (data[i].dpmu != null) {
                        dpmu = data[i].dpmu;
                    }

                    tr += '<tr id="Show_Gplvl' + i + '" ><td>' + (i + 1) + '</td><td>' + data[i].date + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].vill_name + '</td> <td>' + data[i].meet_loc + '</td> <td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].transgender + '</td> <td>' + data[i].total_atten + '</td><td>' + data[i].SC + '</td><td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td> <td>' + data[i].General + '</td> <td><a href="' + mom1 + '" download="">' + mom1 + '</a></td>     <td><a href="' + photo + '" download="">' + photo + '</a></td> <td><a href="' + resol + '" download="">' + resol + '</a></td> <td><a href="' + dpmu + '" download="">' + dpmu + '</a></td>   <td><button class="btn btn-primary" style="display:none;" onclick="EditpgwmRow(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button style="display:none;" class="btn btn-danger" onclick="Delete_pgwm_meeting(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                        '<tr id="Hide_Gplvl' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="date' + i + '" value="' + data[i].date + '"/></td><td><input type="text" class="form-control" id="gp_name' + i + '" value="' + data[i].gp_name + '"/></td> <td><input type="text" class="form-control" id="vill_name' + i + '" value="' + data[i].vill_name + '"/></td> <td><input type="text" class="form-control" id="meet_loc' + i + '" value="' + data[i].meet_loc + '"/></td> <td><input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '"/></td> <td><input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '"/></td> <td><input type="text" class="form-control" id="transgender' + i + '" value="' + data[i].transgender + '"/></td> <td><input type="text" class="form-control" id="total_atten' + i + '" value="' + data[i].total_atten + '" readonly /></td> <td><input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom + '"/></td> <td><input type="file" class="form-control" id="photograph' + i + '" value="' + data[i].photograph + '"/></td> <td><input type="file" class="form-control" id="resolution' + i + '" value="' + data[i].resolution + '"/></td> <td><input type="file" class="form-control" id="dpmu' + i + '" value="' + data[i].dpmu + '"/></td> <td><button type="button" class="btn btn-primary" onclick="Update_pgwm_meeting(' + data[i].id + ',' + i + ')">Update</button>' + '</td> <td><button  class="btn btn-danger " type="button" onclick="cancelpgwmRow(' + i + ');"><i class="fa fa-remove"</button></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
            else {
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
        }
    });
}
function district_pgwm_1() {
    $('.loader').show();
    var drpst = $('#drpstate option:selected').text();
    var drpds = $('#drpdistrict option:selected').text();
    $.ajax({
        url: '/pgwm/district_pgwm_meeting',
        type: 'GET',
        data: { STATE: drpst, DISTRICT: drpds },
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var mom1 = "";
                    if (data[i].mom != null) {
                        mom1 = data[i].mom;
                    }

                    var photo = "";
                    if (data[i].photograph != null) {
                        photo = data[i].photograph;
                    }

                    var resol = "";
                    if (data[i].resolution != null) {
                        resol = data[i].resolution;
                    }

                    var dpmu = "";
                    if (data[i].dpmu != null) {
                        dpmu = data[i].dpmu;
                    }

                    tr += '<tr id="Show_Gplvl' + i + '" ><td>' + (i + 1) + '</td><td>' + data[i].date + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].vill_name + '</td> <td>' + data[i].meet_loc + '</td> <td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].transgender + '</td> <td>' + data[i].total_atten + '</td> <td><a href="' + mom1 + '" download="">' + mom1 + '</a></td>     <td><a href="' + photo + '" download="">' + photo + '</a></td> <td><a href="' + resol + '" download="">' + resol + '</a></td> <td><a href="' + dpmu + '" download="">' + dpmu + '</a></td>   <td><button class="btn btn-primary" style="display:none;" onclick="EditpgwmRow(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button style="display:none;" class="btn btn-danger" onclick="Delete_pgwm_meeting(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                        '<tr id="Hide_Gplvl' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="date' + i + '" value="' + data[i].date + '"/></td><td><input type="text" class="form-control" id="gp_name' + i + '" value="' + data[i].gp_name + '"/></td> <td><input type="text" class="form-control" id="vill_name' + i + '" value="' + data[i].vill_name + '"/></td> <td><input type="text" class="form-control" id="meet_loc' + i + '" value="' + data[i].meet_loc + '"/></td> <td><input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '"/></td> <td><input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '"/></td> <td><input type="text" class="form-control" id="transgender' + i + '" value="' + data[i].transgender + '"/></td> <td><input type="text" class="form-control" id="total_atten' + i + '" value="' + data[i].total_atten + '"/></td> <td><input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom + '"/></td> <td><input type="file" class="form-control" id="photograph' + i + '" value="' + data[i].photograph + '"/></td> <td><input type="file" class="form-control" id="resolution' + i + '" value="' + data[i].resolution + '"/></td> <td><input type="file" class="form-control" id="dpmu' + i + '" value="' + data[i].dpmu + '"/></td> <td><button type="button" class="btn btn-primary" onclick="Update_pgwm_meeting(' + data[i].id + ',' + i + ')">Update</button>' + '</td> <td><button  class="btn btn-danger " type="button" onclick="cancelpgwmRow(' + i + ');"><i class="fa fa-remove"</button></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
            else {
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
        }
    });

}
//abhi1606
function block_pgwm_1() {

    $('.loader').show();
    var drpst = $('#drpstate option:selected').text();
    var drpds = $('#drpdistrict option:selected').text();
    var drpblock = $('#drpblock option:selected').text();
    $.ajax({
        url: '/pgwm/block_pgwm_meeting',
        type: 'GET',
        data: { STATE: drpst, DISTRICT: drpds, BLOCK: drpbd },
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var mom1 = "";
                    if (data[i].mom != null) {
                        mom1 = data[i].mom;
                    }

                    var photo = "";
                    if (data[i].photograph != null) {
                        photo = data[i].photograph;
                    }

                    var resol = "";
                    if (data[i].resolution != null) {
                        resol = data[i].resolution;
                    }

                    var dpmu = "";
                    if (data[i].dpmu != null) {
                        dpmu = data[i].dpmu;
                    }

                    tr += '<tr id="Show_Gplvl' + i + '" ><td>' + (i + 1) + '</td><td>' + data[i].date + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].vill_name + '</td> <td>' + data[i].meet_loc + '</td> <td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].transgender + '</td> <td>' + data[i].total_atten + '</td> <td><a href="' + mom1 + '" download="">' + mom1 + '</a></td>     <td><a href="' + photo + '" download="">' + photo + '</a></td> <td><a href="' + resol + '" download="">' + resol + '</a></td> <td><a href="' + dpmu + '" download="">' + dpmu + '</a></td>   <td><button class="btn btn-primary" style="display:none;" onclick="EditpgwmRow(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button style="display:none;" class="btn btn-danger" onclick="Delete_pgwm_meeting(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                        '<tr id="Hide_Gplvl' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="date' + i + '" value="' + data[i].date + '"/></td><td><input type="text" class="form-control" id="gp_name' + i + '" value="' + data[i].gp_name + '"/></td> <td><input type="text" class="form-control" id="vill_name' + i + '" value="' + data[i].vill_name + '"/></td> <td><input type="text" class="form-control" id="meet_loc' + i + '" value="' + data[i].meet_loc + '"/></td> <td><input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '"/></td> <td><input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '"/></td> <td><input type="text" class="form-control" id="transgender' + i + '" value="' + data[i].transgender + '"/></td> <td><input type="text" class="form-control" id="total_atten' + i + '" value="' + data[i].total_atten + '"/></td> <td><input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom + '"/></td> <td><input type="file" class="form-control" id="photograph' + i + '" value="' + data[i].photograph + '"/></td> <td><input type="file" class="form-control" id="resolution' + i + '" value="' + data[i].resolution + '"/></td> <td><input type="file" class="form-control" id="dpmu' + i + '" value="' + data[i].dpmu + '"/></td> <td><button type="button" class="btn btn-primary" onclick="Update_pgwm_meeting(' + data[i].id + ',' + i + ')">Update</button>' + '</td> <td><button  class="btn btn-danger " type="button" onclick="cancelpgwmRow(' + i + ');"><i class="fa fa-remove"</button></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
            else {
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
        }
    });
}
//abhi1606
function gram_pgwm_1() {

    $('.loader').show();
    var drpst = $('#drpstate option:selected').text();
    var drpds = $('#drpdistrict option:selected').text();
    var drpblock = $('#drpdistrict option:selected').text();;
    var drpgp = $('#drpgrampanchayat option:selected').text();


    $.ajax({
        url: '/pgwm/gram_pgwm_meeting',
        type: 'GET',
        data: { STATE: drpst, DISTRICT: drpds, BLOCK: drpbd, GRAM: drpgp },
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    var mom1 = "";
                    if (data[i].mom != null) {
                        mom1 = data[i].mom;
                    }

                    var photo = "";
                    if (data[i].photograph != null) {
                        photo = data[i].photograph;
                    }

                    var resol = "";
                    if (data[i].resolution != null) {
                        resol = data[i].resolution;
                    }

                    var dpmu = "";
                    if (data[i].dpmu != null) {
                        dpmu = data[i].dpmu;
                    }

                    tr += '<tr id="Show_Gplvl' + i + '" ><td>' + (i + 1) + '</td><td>' + data[i].date + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].vill_name + '</td> <td>' + data[i].meet_loc + '</td> <td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].transgender + '</td> <td>' + data[i].total_atten + '</td> <td><a href="' + mom1 + '" download="">' + mom1 + '</a></td>     <td><a href="' + photo + '" download="">' + photo + '</a></td> <td><a href="' + resol + '" download="">' + resol + '</a></td> <td><a href="' + dpmu + '" download="">' + dpmu + '</a></td>   <td><button class="btn btn-primary" style="display:none;" onclick="EditpgwmRow(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button style="display:none;" class="btn btn-danger" onclick="Delete_pgwm_meeting(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                        '<tr id="Hide_Gplvl' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="date' + i + '" value="' + data[i].date + '"/></td><td><input type="text" class="form-control" id="gp_name' + i + '" value="' + data[i].gp_name + '"/></td> <td><input type="text" class="form-control" id="vill_name' + i + '" value="' + data[i].vill_name + '"/></td> <td><input type="text" class="form-control" id="meet_loc' + i + '" value="' + data[i].meet_loc + '"/></td> <td><input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '"/></td> <td><input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '"/></td> <td><input type="text" class="form-control" id="transgender' + i + '" value="' + data[i].transgender + '"/></td> <td><input type="text" class="form-control" id="total_atten' + i + '" value="' + data[i].total_atten + '"/></td> <td><input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom + '"/></td> <td><input type="file" class="form-control" id="photograph' + i + '" value="' + data[i].photograph + '"/></td> <td><input type="file" class="form-control" id="resolution' + i + '" value="' + data[i].resolution + '"/></td> <td><input type="file" class="form-control" id="dpmu' + i + '" value="' + data[i].dpmu + '"/></td> <td><button type="button" class="btn btn-primary" onclick="Update_pgwm_meeting(' + data[i].id + ',' + i + ')">Update</button>' + '</td> <td><button  class="btn btn-danger " type="button" onclick="cancelpgwmRow(' + i + ');"><i class="fa fa-remove"</button></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
            else {
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }

        }
    });

}
function Delete_abhy_socialmgt_gramdb(ss) {
    if (confirm("Are you sure to delete this row?")) {
        if (State != "") {
            var obj = {};
            obj.id = ss;
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring_new/Delete_abhy_socialmgt_gramdb",
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

                    GramPanchayatDataBase_Info();
                }
            });
        }
        else {
            alert("Please Select StateName");
        }

    }
}
//abhi1606   for PGWM
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
        var designation_name = $('#designation_name').val();

        var name = $('#member_name').val();
        var gender = $('#gender').val();
        var contact_details = $('#contact_number').val();
        var year = $('#year').val();
        if (year == "") {
            alert("Please Select Year");
            i = 1;
        }
        else if (designation_name == "") {
            alert("Please Enter Designation");
            i = 1;
        }
        else if (name == "") {
            alert("Please Enter Member Name");
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            i = 1;
        }
        else if (contact_details == "") {
            alert("Please Enter Mobile Number");
            i = 1;
        }
        if (i == 0) {
            obj.designation_name = $('#designation_name').val();
            obj.name = $('#member_name').val();
            obj.gender = $('#gender').val();
            obj.contact_details = $('#contact_number').val();
            obj.year = $('#year').val();
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring_new/Save_abhy_socialmgt_gramdb",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/Home/LogOut";
                    }

                    aaa = 1;
                    GramPanchayatDataBase_Info();
                }
            });
        }
    }
}
//abhi1606 for PGWM
//Water User Association/ Village Water and Sanitation Committee (VWSC)
function vwms_Info() {
    $('.loader').show();
    var year = $('#year').val();

    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = year;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/VWSC_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";
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
                    tr += '<tr id="AWP1_TR' + i + '"> <td><button type="button" class="btn btn-danger" style="display:none;" onclick="Delete_Water_User_Association_Village_Water_and_Sanitation_Committee(' + data[i].id + ')">Delete</button></td><td>' + (i + 1) + '</td><td>' + data[i].member_name + '</td><td>' + data[i].designation + '</td><td>' + data[i].gender + '</td><td>' + Category + '</td> <td>' + data[i].reserved_unreserved + '</td> <td>' + data[i].contact_number + '</td> ' +

                        '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="nameofmember' + i + '" value="' + data[i].member_name + '"/></td><td><input type="date" class="form-control" id="currdate' + i + '" value="' + data[i].curr_date + '"/></td><td><input type="text" class="form-control" id="location' + i + '" value="' + data[i].location + '"/></td>';

                    tr += '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" /></td ><td><input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '"/></td><td><input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '"/></td><td><input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '"/></td><td><input type="text" class="form-control" id="no_sc' + i + '" value="' + data[i].no_of_sc + '"/></td><td><input type="text" class="form-control" id="no_st' + i + '" value="' + data[i].no_of_st + '"/></td><td><input type="text" class="form-control" id="no_obc' + i + '" value="' + data[i].no_of_obc + '"/></td><td><input type="text" class="form-control" id="no_gen' + i + '" value="' + data[i].no_of_gen + '"/></td><td> <input type="text" class="form-control" id="key_iss' + i + '" value="' + data[i].key_issues + '"/></td><td>  <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td><td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td><td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="8">No Data</td></tr>';
                $('#TblData_VWSC').html(tr);
                $('.loader').hide();
            }
            else {
                $('#TblData_VWSC').html(tr);
                $('.loader').hide();
            }
            a = 1;

        }
    });
}
function Delete_SocMan(Id) {
    //delete 4190
    if (confirm("Are you sure to delete this row.")) {

        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/Delete_SocMon_CommPart',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                abhy_socialmgt_village_meetings_Info();

            }

        });
    }
}
function Delete_GpLevel(Id) {
    //delete 4190
    if (confirm("Are you sure to delete this row?")) {

        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/Delete_Gplevel_CommPart',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                abhy_socialmgt_training_gp_Info()

            }

        });
    }
}
//abhi1606
function Delete_pgwm_meeting(Id) {

    if (confirm("Are you sure to delete this row?")) {

        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/Pgwm/Delete_pgwm_meeting',
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
function Delete_Water_User_Association_Village_Water_and_Sanitation_Committee(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: '/SocialMointoring_new/Delete_VWSC_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/Home/LogOut";
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
            alert("Please Enter Mobile Number");
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
                url: "/SocialMointoring_new/Save_VWSC_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/Home/LogOut";
                    }
                    else if (response != "Successfully Saved" && response != "Logout" && response != "Please Enter Mobile Number" && response != "Please Select Designation" && response != "Please Select Gender" && response != "Please Enter Member Name" && response != "Please Select Reserved_Unreserved" && response != "Please Select Category") {

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
var Data_tbl_1 = "";
function Support_Agency_DIP_Info() {
    $('.loader').show();
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
        url: '/SocialMointoring_new/Support_Agency_DIP_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var j = 0;
            ab = 1;
            var tr = '';
            district_imp_vals = [];
            if (data.length != 0) {
                if (StateOfficer == "Gram Panchyat Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {
                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good4(' + i + ')" > <i class="fa fa-edit" ></i></button ></td >  <td><button class="btn btn-danger" onclick="Delete_Support_Agency_DIP_Info(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td><td><label style="color: red;">Rejected By DPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select><input type="text" class="form-control"  id="txtother' + i + '"/></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', false);
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good4(' + i + ')" > <i class="fa fa-edit" ></i></button ></td >  <td><button class="btn btn-danger" onclick="Delete_Support_Agency_DIP_Info(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select><input type="text" class="form-control"  id="txtother' + i + '"  /></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', false);
                        }
                        else if (approve == "District") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td>  <td><label style="color: green;">Submit To DPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "State") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td>  <td><label style="color: black;">Submit To SPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "Approve") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td><td><label style="color: blue;">Approved</label></td> ' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "Sreject") {

                            $('#addrow_c_part').prop('disabled', false);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                    }
                }
                if (StateOfficer == "State Level Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {
                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "State") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td><td></td> ' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                        }
                        else if (approve == "Approve") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td><td><label style="color: blue;">Approved</label></td> ' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $('#btn_submit_approve').prop('disabled', true);
                            $('#btn_reject_spmu').prop('disabled', true);
                            $('#remarks').prop('disabled', true);

                        }
                        else if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select><input type="text" class="form-control"  id="txtother' + i + '"/></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', false);
                        }
                        else if (approve == "District") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td>  <td><label style="color: green;">Submit To DPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td>  <td><label style="color: green;">At GP Level</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                    }
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {

                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "District") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td><td><label style="color: green;">At DPMU Level</label></td> ' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                        }
                        else if (approve == "Sreject") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td><td><label style="color: red;">Rejected By SPMU</label></td> ' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                        }
                        else if (approve == "Approve") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td><td><label style="color: blue;">Approved</label></td> ' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $('#btn_reject_dpmu').prop('disabled', true);
                            $('#btn_submit_spmu').prop('disabled', true);
                            $('#remarks').prop('disabled', true);
                        }
                        else if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select><input type="text" class="form-control"  id="txtother' + i + '"/></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';



                            $('#btn_reject_dpmu').prop('disabled', true);
                            $('#btn_submit_spmu').prop('disabled', true);
                            $('#remarks').prop('disabled', true);
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td>  <td><label style="color: green;">At GP Level</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                    }
                }
                if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {

                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "Approve") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td><td></td><td></td><td><label style="color: blue;">Approved</label></td> ' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                        }
                        else if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td >  <td></td><td><label style="color: red;">Rejected By DPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select><input type="text" class="form-control"  id="txtother' + i + '"/></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', false);
                        }
                        else if (approve == "District") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td>  <td><label style="color: green;">Submit To DPMU</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR_NEW' + i + '">  <td></td> <td>' + (++j) + '</td>  <td>' + data[i].designation + '</td><td>' + data[i].ca_date_of_dip + '</td><td>' + data[i].member_name + '</td><td>' + data[i].ddldesignation + '</td><td>' + data[i].gender + '</td> <td>' + data[i].contact_number + '</td> <td>' + data[i].date_of_dip + '</td> <td></td><td></td>  <td><label style="color: green;">At GP Level</label></td>' +
                                '<tr id="Hide_AWP1_TR_NEW' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control alpha" id="DIP_designation' + i + '" value="' + data[i].designation + '" /></td>' +
                                '<td><input type="date" class="form-control"  id="ca_date_of_dip_update' + i + '" value="' + data[i].ca_date_of_dip + '" readonly/></td>' +
                                '<td> <input type="text" class="form-control alpha" id="DIP_member_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><Select readonly id="ddldesination' + i + '" onchange="CategoryDropDown_update(' + i + ')" class="form-control"><option value="0"> ' + data[i].ddldesignation + '</option><option value="Team Leader">Team Leader</option><option value="Field superviser">Field superviser</option><option value="Field Assicent">Field Assicent</option><option value="Community Resource Person">Community Resource Person</option><option value="Other">Other</option></select></td>' +
                                '<td><select class="form-control" id="DIP_gender' + i + '" > <option value="0"> ' + data[i].gender + '</option> <option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option> </select ></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="DIP_contact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_dip_update' + i + '" value="' + data[i].date_of_dip + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP3(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            $('#addrow_c_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                        }
                    }
                }
            }
            if (tr == '') {
                Data_tbl_1 = "Data_tbl_1";
                tr = '<tr style="text-align:center;"><td colspan="16">No Data</td></tr>';
                $('#TblData_DIP').html(tr);
                $('.loader').hide();
            }
            else {
                Data_tbl_1 = "";
                $('#TblData_DIP').html(tr);
                $('.loader').hide();
            }

        }
    });
}
function CategoryDropDown_update(a) {
    //alert("hey");

    check_data1(a);
    var comm_name = $('#ddldesination' + a).val();


    if (comm_name == "Other") {

        $('#txtother' + a).show();

    }

    else {

        $('#txtother' + a).hide();

    }
    if (comm_name == "Community Resource Person") {
        $('#DIP_designation' + a).prop("disabled", true);
        $('#DIP_designation' + a).val("");
        $('#ca_date_of_dip_update' + a).val("");
    }
    else {
        $('#DIP_designation' + a).prop("disabled", false);
        $('#ca_date_of_dip_update' + a).prop("disabled", false);
    }

}
function Delete_Support_Agency_DIP_Info(ss) {
    if (confirm("Are you sure to delete this row?")) {
        var obj = {};
        obj.id = ss;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring_new/Delete_Support_Agency_DIP_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                }
                else if (response != "Deleted Successfully" && response != "Logout" && response != "No Data") {
                    window.location = "/Error/DefaultError";
                }

                ab = 1;

                Support_Agency_DIP_Info();
            }
        });
    }

}
function Save_Support_Agency_DIP_Info() {
    $('#btnsave2').prop('disabled', true);
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
        $('#btnsave2').prop('disabled', false);
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
        $('#btnsave2').prop('disabled', false);
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
        $('#btnsave2').prop('disabled', false);
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
        $('#btnsave2').prop('disabled', false);
    }
    if (xx == 0) {
        var obj = {};
        var i = 0;

        var designation = $('#DIP_designation').val();
        var member_name = $('#DIP_member_name').val();
        var ddldesination = $('#ddldesination').val();
        var ddldesinationother = $('#txtother').val();
        var gender = $('#DIP_gender').val();
        var reserved_unreserved = $('#DIP_reserved_unreserved').val();
        var contact_number = $('#DIP_contact_number').val();
        var date_of_dip = $('#date_of_dip').val();
        var ca_date_of_dip = $('#ca_date_of_dip').val();
        var year = $('#year').val();
        var month = $('#month').val();
        if (ddldesination == "Community Resource Person") {

            if (member_name == "") {
                alert("Please Enter DIP Name");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (gender == "0") {
                alert("Please Select Gender");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (reserved_unreserved == "0") {
                alert("Please Select Reserved Unreserved");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (contact_number == "") {
                alert("Please Enter Mobile Number");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (contact_number.length != 10) {
                alert("Please Enter Correct Mobile No");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (date_of_dip == "") {
                alert("Enter Date of Deployment");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (year == "0") {
                alert("Please Select Year");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (month == "0") {
                alert("Please Select month");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
        }
        else {
            if (designation == "") {
                alert("Please Enter Name of DIP");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }


            else if (member_name == "") {
                alert("Please Enter DIP Name");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (ddldesination == "0") {
                alert("Please Select Designation");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (ddldesination == "Other") {
                if (ddldesinationother == "") {
                    alert("Please Enter Designation Other");
                    $('#btnsave2').prop('disabled', false);
                    i = 1;
                }
            }
            else if (gender == "0") {
                alert("Please Select Gender");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (reserved_unreserved == "0") {
                alert("Please Select Reserved Unreserved");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (contact_number == "") {
                alert("Please Enter Mobile Number");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (contact_number.length != 10) {
                alert("Please Enter Correct Mobile No");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (ca_date_of_dip == "") {
                alert("Enter Date of Contract Award Date of DIP");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (date_of_dip == "") {
                alert("Date of Deployment For Officials");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (date_of_dip < ca_date_of_dip) {
                alert("Please Enter the Correct Date Deployment For Officials");
                $('#btnsave2').prop('disabled', false);
                $('#date_of_dip').focus();
                i = 1;
            }

            else if (year == "0") {
                alert("Please Select Year");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
            else if (month == "0") {
                alert("Please Select month");
                $('#btnsave2').prop('disabled', false);
                i = 1;
            }
        }



        if (i == 0) {

            obj.designation = $('#DIP_designation').val();
            obj.member_name = $('#DIP_member_name').val();
            if (ddldesination == 'Other') {
                var other = "Other"
                var val = " - "
                var ddldesinationother = $('#txtother').val();
                obj.ddldesignation = other + val + ddldesinationother;
            }
            else { obj.ddldesignation = $('#ddldesination').val(); }

            obj.gender = $('#DIP_gender').val();
            obj.reserved_unreserved = $('#DIP_reserved_unreserved').val();
            obj.contact_number = $('#DIP_contact_number').val();
            obj.date_of_dip = $('#date_of_dip').val();
            obj.ca_date_of_dip = ca_date_of_dip;
            obj.year = $('#year').val();
            obj.month = $('#month').val();
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring_new/Save_Support_Agency_DIP_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {

                    alert(response);
                    if (response == "Logout") {
                        window.location = "/Home/LogOut";
                    }
                    else if (response != "Successfully Saved" && response != "Please Mobile Contact Number" && response != "Please Select Gender" && response != "Please Enter Member Name" && response != "Please Enter Date of Deployment") {
                        window.location = "/Error/DefaultError";
                    }
                    $('#btnsave2').prop('disabled', false);
                    ab = 1;
                    Support_Agency_DIP_Info();
                }
            });
        }
    }

}

//Others local instituions or citizen leaders/influencers
var Data_tbl = "";
function Others_local_instituions_citizen_leaders_Info() {
    $('.loader').show();
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
        url: '/SocialMointoring_new/Others_local_instituions_citizen_leaders_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            var j = 0;
            abc = 1;
            var tr = '';

            commitee_vals = [];
            if (data.length != 0) {
                if (StateOfficer == "Gram Panchyat Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {
                        var Category = "";
                        if (data[i].category == "Others") {
                            if (data[i].category_other != "") {
                                Category = data[i].category + ' - ' + data[i].category_other;
                            }
                            else {
                                Category = data[i].category;
                            }
                        }
                        else {
                            Category = data[i].category;
                        }
                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td> <td><button class="btn btn-primary" style="display:none;" onclick="editrowcomp_A_Good3(' + i + ')" > <i class="fa fa-edit"></i></button ></td >  <td><button style="display:none;" class="btn btn-danger" onclick="Delete_Others_local_instituions_citizen_leaders_Info(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td><td><label style="color: red;">Rejected By DPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td> <td><button class="btn btn-primary" style="display:none;" onclick="editrowcomp_A_Good3(' + i + ')" > <i class="fa fa-edit"></i></button ></td >  <td><button style="display:none;" class="btn btn-danger" onclick="Delete_Others_local_instituions_citizen_leaders_Info(' + data[i].id + ')" ><i class="fa fa-trash"></i></button></td><td></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "District") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: green;">Submit To DPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            // $("#btn_submit_dpmu").prop("disabled", true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "State") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td> <td></td><td></td><td><label style="color: Black;">Submit To SPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Approve") {

                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: Blue;">Approved</label></td> ' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            // $('#btn_submit_dpmu').prop('disabled', true);


                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Sreject") {
                            $('#addrow_d_part').prop('disabled', false);
                            // $('#btn_submit_dpmu').prop('disabled', true);
                        }
                    }
                }
                if (StateOfficer == "State Level Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {
                        var Category = "";
                        if (data[i].category == "Others") {
                            if (data[i].category_other != "") {
                                Category = data[i].category + ' - ' + data[i].category_other;
                            }
                            else {
                                Category = data[i].category;
                            }
                        }
                        else {
                            Category = data[i].category;
                        }
                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "State") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td></td> ' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "District") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: green;">Submit To DPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Approve") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: Blue;">Approved</label></td> ' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            $('#btn_submit_approve').prop('disabled', true);
                            $('#btn_reject_spmu').prop('disabled', true);
                            $('#remarks').prop('disabled', true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Sreject") {
                            $('#btn_submit_approve').prop('disabled', true);
                            $('#btn_reject_spmu').prop('disabled', true);
                            $('#remarks').prop('disabled', true);
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: green;">At GP Level</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td> <td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                    }
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {
                        var Category = "";
                        if (data[i].category == "Others") {
                            if (data[i].category_other != "") {
                                Category = data[i].category + ' - ' + data[i].category_other;
                            }
                            else {
                                Category = data[i].category;
                            }
                        }
                        else {
                            Category = data[i].category;
                        }
                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "District") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: green;">At DPMU Level</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Sreject") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: red;">Rejected By SPMU</label></td> ' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Approve") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: Blue;">Approved</label></td> ' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            $('#btn_reject_dpmu').prop('disabled', true);
                            $('#btn_submit_spmu').prop('disabled', true);
                            $('#remarks').prop('disabled', true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td> <td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });

                            $('#btn_reject_dpmu').prop('disabled', true);
                            $('#btn_submit_spmu').prop('disabled', true);
                            $('#remarks').prop('disabled', true);
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: green;">At GP Level</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', true);
                            $("#btn_submit_dpmu").prop("disabled", true);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                    }
                }
                if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                    for (var i = 0; i < data.length; i++) {
                        var Category = "";
                        if (data[i].category == "Others") {
                            if (data[i].category_other != "") {
                                Category = data[i].category + ' - ' + data[i].category_other;
                            }
                            else {
                                Category = data[i].category;
                            }
                        }
                        else {
                            Category = data[i].category;
                        }
                        var remarks = data[i].remark;
                        if (remarks == null) {
                            remarks = "";
                        }
                        var approve = data[i].approve;
                        if (approve == null) {
                            approve = "";
                        }
                        if (approve == "Approve") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: Blue;">Approved</label></td> ' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);

                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "Reject") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td> <td></td >  <td></td><td><label style="color: red;">Rejected By DPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "District") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: green;">Submit To DPMU</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            $("#btn_submit_dpmu").prop("disabled", false);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                        else if (approve == "") {
                            tr += '<tr id="AWP1_TR' + i + '"> <td></td> <td>' + (++j) + '</td>  <td>' + data[i].comm_name + '</td><td>' + data[i].establishment_date + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td> <td>' + data[i].gender + '</td><td>' + Category + '</td><td>' + data[i].contact_number + '</td><td>' + data[i].date_of_commi + '</td><td></td><td></td><td><label style="color: green;">At GP Level</label></td>' +

                                '<tr disabled id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td> <td>' + (i + 1) + '</td>' +

                                '<td><select readonly class="form-control" id="Others_localnameofcommitte' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].comm_name + '>' + data[i].comm_name + '</option> <option value="VWSC"> VWSC</option> <option value="PGWMC"> PGWMC</option> <option value="WUA"> WUA</option><option value="Pani Samiti">Pani Samiti</option> </select ></td>' +
                                '<td> <input readonly type="date" class="form-control alpha" id="establishment_date_update' + i + '" value="' + data[i].establishment_date + '" name="setTodaysDate4" /></td>' +
                                '<td><select readonly class="form-control" id="Others_localdesignation' + i + '" onchange="check_exist(' + i + ')"> <option value=' + data[i].designation + '> ' + data[i].designation + '</option> <option value="President">President</option> <option value="Secretary"> Secretary</option> <option value="Members"> Members</option> </select ></td>' +
                                '<td> <input type="text" class="form-control alpha" id="Others_localmember_name' + i + '" value="' + data[i].member_name + '" /></td>' +
                                '<td><select class="form-control" id="Others_localgender' + i + '"><option value="Male"> Male</option> <option value="Female"> Female</option> <option value="Transgender"> Transgender</option><option value="0">' + data[i].gender + '</option></select ></td>' +
                                '<td><Select id="Others_localcategory' + i + '" class="form-control"><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="General">General</option><option value="0"> ' + data[i].category + '</option></select></td>' +
                                '<td><input type="text" class="form-control integer" maxlength="10"  id="Others_localcontact_number' + i + '" value="' + data[i].contact_number + '"/></td><td><input type="date" class="form-control"  id="date_of_commi_update' + i + '" value="' + data[i].date_of_commi + '" readonly/></td> <td> <button type="button" class="btn btn-primary" onclick="Update_AWP2(' + data[i].id + ',' + i + ')">Update</button>' + '</td><td><button  class="btn btn-danger " type="button" onclick="cancelcomp_2_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            $('#addrow_d_part').prop('disabled', false);
                            $("#btn_submit_dpmu").prop("disabled", false);
                            commitee_vals.push({
                                Committee: data[i].comm_name,
                                Designation: data[i].designation,
                            });
                        }
                    }
                }
            }


            if (tr == '') {
                Data_tbl = "Data_tbl";
                tr = '<tr style="text-align:center;"><td colspan="10">No Data</td></tr>';
                $('#TblData_Others_local_instituions_citizen_leaders_Info').html(tr);
                $('.loader').hide();

            }
            else {
                Data_tbl = "";
                $('#TblData_Others_local_instituions_citizen_leaders_Info').html(tr);
                $('.loader').hide();
            }

        }

    });
}

function Delete_Others_local_instituions_citizen_leaders_Info(ss) {
    if (confirm("Are you sure to delete this row?")) {
        var obj = {};
        obj.id = ss;
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring_new/Delete_Others_local_instituions_citizen_leaders_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                }
                else if (response != "Deleted Successfully" && response != "Logout" && response != "No Data") {
                    window.location = "/Error/DefaultError";
                }

                abc = 1;
                Others_local_instituions_citizen_leaders_Info();
            }
        });
    }

}
function Save_Others_local_instituions_citizen_leaders_Info() {

    $('#btnsave').prop('disabled', true);

    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
        $('#btnsave').prop('disabled', false);
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
        $('#btnsave').prop('disabled', false);
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
        $('#btnsave').prop('disabled', false);
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
        $('#btnsave').prop('disabled', false);
    }

    if (xx == 0) {
        var obj = {};
        var i = 0;
        var designation = $('#Others_localdesignation').val();

        var member_name = $('#Others_localmember_name').val();
        var gender = $('#Others_localgender').val();
        var reserved_unreserved = $('#Others_localreserved_unreserved').val();
        var contact_number = $('#Others_localcontact_number').val();
        var category = $('#Others_localcategory').val();
        var name_comm = $('#Others_localnameofcommitte').val();
        var category_other = $('#Others_localnameofcommitte').val();
        var frm_date = $('#date_of_commi').val();
        var establishment_date = $('#establishment_date').val();
        var year = $('#year').val();
        var month = $('#month').val();
        if (year == "0") {
            alert("Please Select Year");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (month == "0") {
            alert("Please Select Month");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (name_comm == "0") {
            alert("Please Enter Name of Committee / Association");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (designation == "0") {
            alert("Please Enter Designation");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (member_name == "") {
            alert("Please Enter Member Name");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (reserved_unreserved == "0") {
            alert("Please Select Reserved Unreserved");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (category == "0") {
            alert("Please select category");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (contact_number == "") {
            alert("Please Enter Mobile Number");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }
        else if (contact_number.length != 10) {
            alert("Please Enter Correct Contact Number");
            $('#btnsave').prop('disabled', false);
            i = 1;
        }

        else if (frm_date < establishment_date) {
            alert("Please Enter the Correct Date in Member From Date column");
            $('#btnsave').prop('disabled', false);
            $('#date_of_commi').focus();
            i = 1;
        }

        if (i == 0) {
            obj.designation = $('#Others_localdesignation').val();
            obj.member_name = $('#Others_localmember_name').val();
            obj.gender = $('#Others_localgender').val();
            obj.reserved_unreserved = $('#Others_localreserved_unreserved').val();
            obj.contact_number = $('#Others_localcontact_number').val();
            obj.category = $('#Others_localcategory').val();
            obj.comm_name = $('#Others_localnameofcommitte').val();
            obj.category_other = $('#Others_category').val();
            obj.year = $('#year').val();
            obj.month = $('#month').val();
            obj.date_of_commi = $('#date_of_commi').val();
            obj.establishment_date = $('#establishment_date').val();
            //  obj.category_other = ;

            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/SocialMointoring_new/Save_Others_local_instituions_citizen_leaders_Info",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/Home/LogOut";
                    }
                    $('#btnsave').prop('disabled', false);
                    abc = 1;
                    Others_local_instituions_citizen_leaders_Info();

                }
            });
        }
    }
}
//IEC Activities (suggestive list)
function ee_table_part_data_geting() {
    $('.loader').show();
    var year = $('#year').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = year;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/IEC_Activities_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            var a = 0;

            if (data == "Logout") {
                window.location = "/Home/LogOut";
            }
            abcd = 1;
            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].print_media != "Others") {
                        a += 1
                        tr += '<tr><td><button type="button" style="display:none;" class="btn btn-danger" onclick="Delete_ee_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].print_media + '</td><td>' + data[i].loud_speakers + '</td></tr>';
                    }
                    else {
                        a += 1
                        tr += '<tr><td><button type="button" style="display:none;" class="btn btn-danger" onclick="Delete_ee_table_part_data(' + data[i].id + ')">Delete</button></td><td>' + (a) + '</td><td>' + data[i].radio + '</td><td>' + data[i].loud_speakers + '</td></tr>';

                    }
                }

            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#tbl_e_part').html(tr);
                $('.loader').hide();
            }
            else {
                $('#tbl_e_part').html(tr);
                $('.loader').hide();
            }



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
                url: "/SocialMointoring_new/Save_IEC_Activities",
                data: "{'Data': '" + JSON.stringify(obj) + "'}",
                dataType: 'JSON',
                success: function (response) {
                    alert(response);
                    if (response == "Logout") {
                        window.location = "/Home/LogOut";
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
        url: "/SocialMointoring_new/Delete_IEC_Activities",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/Home/LogOut";
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
function Social_Audit_Info() {
    var year = $('#year').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = year;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/Social_Audit_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

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
            url: "/SocialMointoring_new/Save_Social_Audit",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
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
function Total_Population_of_the_GP_Info_wg() {  /*Not use */

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
        url: '/SocialMointoring_new/Total_Population_of_the_GP_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            $('#tol_population').val("");
            $('#basic_data').val("");
            $('#pop_20_21').val("");
            $('#pop_21_22').val("");
            $('#pop_22_23').val("");
            $('#pop_23_24').val("");
            $('#pop_24_25').val("");


            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {

                    if (data[i].year == "2011") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#basic_data').val(data[i].tol_population);
                        }
                    }
                    if (data[i].year == "2020-21") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_20_21').val(data[i].tol_population);
                        }
                    }
                    if (data[i].year == "2021-22") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_21_22').val(data[i].tol_population);
                        }
                    }
                    if (data[i].year == "2023-24") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_22_23').val(data[i].tol_population);
                        }
                    }
                    if (data[i].year == "2024-25") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_23_24').val(data[i].tol_population);
                        }
                    }
                    if (data[i].year == "2025-26") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_24_25').val(data[i].tol_population);
                        }
                    }


                }

            } else {

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
    else if (basic_data == "") {
        xx = 1;
        alert("Please Enter Census Year");
    }
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
            url: "/SocialMointoring_new/Save_Total_Population_of_the_GP_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                }
                else if (response != "Successfully Saved" && response != "Logout" && response != "Please Enter TotalPapulation" && response != "Please Enter Census Year" && response != "Please Enter 2020-21" && response != "Please Enter 2021-22" && response != "Please Enter 2022-23" && response != "Please Enter 2023-24" && response != "Please Enter 2024-25") {
                    window.location = "/Error/DefaultError";
                }


            }
        });
    }

}
// Socio-economic demographic profile
function Socio_economic_demographic_profile_Info() {    //4190
    // malea female trans
    $('.loader').show();
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
        url: '/SocialMointoring_new/Socio_economic_demographic_profile_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }

            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {

                    if (data[i].year == "2011") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#basic_data').val(data[i].tol_population);
                        }
                        if (data[i].male_population != null && data[i].male_population != "") {
                            $('#male_basic_data').val(data[i].male_population);
                        }
                        if (data[i].female_population != null && data[i].female_population != "") {
                            $('#female_basic_data').val(data[i].female_population);
                        }
                        if (data[i].transgender_population != null && data[i].transgender_population != "") {
                            $('#other_basic_data').val(data[i].transgender_population);
                        }
                    }
                    if (data[i].year == "2020-21") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_20_21').val(data[i].tol_population);
                        }
                        if (data[i].male_population != null && data[i].male_population != "") {
                            $('#male_pop_20_21').val(data[i].male_population);
                        }
                        if (data[i].female_population != null && data[i].female_population != "") {
                            $('#female_pop_20_21').val(data[i].female_population);
                        }
                        if (data[i].transgender_population != null && data[i].transgender_population != "") {
                            $('#other_pop_20_21').val(data[i].transgender_population);
                        }
                    }
                    if (data[i].year == "2021-22") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_21_22').val(data[i].tol_population);
                        }
                        if (data[i].male_population != null && data[i].male_population != "") {
                            $('#male_pop_21_22').val(data[i].male_population);
                        }
                        if (data[i].female_population != null && data[i].female_population != "") {
                            $('#female_pop_21_22').val(data[i].female_population);
                        }
                        if (data[i].transgender_population != null && data[i].transgender_population != "") {
                            $('#other_pop_21_22').val(data[i].transgender_population);
                        }
                    }
                    if (data[i].year == "2023-24") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_22_23').val(data[i].tol_population);
                        }
                        if (data[i].male_population != null && data[i].male_population != "") {
                            $('#male_pop_22_23').val(data[i].male_population);
                        }
                        if (data[i].female_population != null && data[i].female_population != "") {
                            $('#female_pop_22_23').val(data[i].female_population);
                        }
                        if (data[i].transgender_population != null && data[i].transgender_population != "") {
                            $('#other_pop_22_23').val(data[i].transgender_population);
                        }
                    }
                    if (data[i].year == "2024-25") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_23_24').val(data[i].tol_population);
                        }
                        if (data[i].male_population != null && data[i].male_population != "") {
                            $('#male_pop_23_24').val(data[i].male_population);
                        }
                        if (data[i].female_population != null && data[i].female_population != "") {
                            $('#female_pop_23_24').val(data[i].female_population);
                        }
                        if (data[i].transgender_population != null && data[i].transgender_population != "") {
                            $('#other_pop_23_24').val(data[i].transgender_population);
                        }
                    }
                    if (data[i].year == "2025-26") {   //if 2020-21 is selected
                        if (data[i].tol_population != null && data[i].tol_population != "") { //total population
                            $('#pop_24_25').val(data[i].tol_population);
                        }
                        if (data[i].male_population != null && data[i].male_population != "") {
                            $('#male_pop_24_25').val(data[i].male_population);
                        }
                        if (data[i].female_population != null && data[i].female_population != "") {
                            $('#female_pop_24_25').val(data[i].female_population);
                        }
                        if (data[i].transgender_population != null && data[i].transgender_population != "") {
                            $('#other_pop_24_25').val(data[i].transgender_population);
                        }
                    }


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


                $('#tol_population').val("");

                $('#basic_data').val("");

                $('#pop_20_21').val("");

                $('#pop_21_22').val("");

                $('#pop_22_23').val("");

                $('#pop_23_24').val("");

                $('#pop_24_25').val("");


            }
            Census_Year_Socio_economic_Sex_Ratio();
            Socio_economic_Sex_Ratio_2020_21();
            Socio_economic_Sex_Ratio_2021_22();
            Socio_economic_Sex_Ratio_2022_23();
            Socio_economic_Sex_Ratio_2023_24();
            Socio_economic_Sex_Ratio_2024_25();

        }
    })


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
    var sexratio_basic_data = (parseFloat(male_basic_data) / parseFloat(female_basic_data)) / 100;
    if (male_basic_data != 0) {
        $('#sexratio_basic_data').val(sexratio_basic_data.toFixed(4));    //abhi23
    }
    else {

        $('#sexratio_basic_data').val("0");
    }

}
$("#male_pop_20_21,#female_pop_20_21").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2020_21();

});
function Socio_economic_Sex_Ratio_2020_21() {
    var male_pop_20_21 = $("#male_pop_20_21").val();
    if (male_pop_20_21 == "") {
        male_pop_20_21 = "0";
    }
    var female_pop_20_21 = $("#female_pop_20_21").val();
    if (female_pop_20_21 == "") {
        female_pop_20_21 = "0";
    }
    var sexratio_pop_20_21 = (parseFloat(male_pop_20_21) / parseFloat(female_pop_20_21)) / 100;
    if (male_pop_20_21 != 0) {
        $('#sexratio_pop_20_21').val(sexratio_pop_20_21.toFixed(4));  //abhi23
    }
    else {

        $('#sexratio_pop_20_21').val("0");
    }

}
$("#male_pop_21_22,#female_pop_21_22").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2021_22();
});
function Socio_economic_Sex_Ratio_2021_22() {

    var male_pop_21_22 = $("#male_pop_21_22").val();
    if (male_pop_21_22 == "") {
        male_pop_21_22 = "0";
    }
    var female_pop_21_22 = $("#female_pop_21_22").val();
    if (female_pop_21_22 == "") {
        female_pop_21_22 = "0";
    }

    var sexratio_pop_21_22 = (parseInt(male_pop_21_22) / parseInt(female_pop_21_22)) * 100;
    if (male_pop_21_22 != 0) {
        $('#sexratio_pop_21_22').val(sexratio_pop_21_22.toFixed(2));   //abhi23
    }
    else {

        $('#sexratio_pop_21_22').val("0");
    }

}
$("#male_pop_22_23,#female_pop_22_23").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2022_23();
});
function Socio_economic_Sex_Ratio_2022_23() {

    var male_pop_22_23 = $("#male_pop_22_23").val();
    if (male_pop_22_23 == "") {
        male_pop_22_23 = "0";
    }

    var female_pop_22_23 = $("#female_pop_22_23").val();
    if (female_pop_22_23 == "") {
        female_pop_22_23 = "0";
    }
    var sexratio_pop_22_23 = (parseFloat(female_pop_22_23) * 1000) / parseFloat(male_pop_22_23);

    if (male_pop_22_23 != 0) {
        $('#sexratio_pop_22_23').val(sexratio_pop_22_23.toFixed(4)); //abhi23
    }
    else {

        $('#sexratio_pop_22_23').val("0");
    }
}
$("#male_pop_23_24,#female_pop_23_24").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2023_24();

});
function Socio_economic_Sex_Ratio_2023_24() {
    var male_pop_23_24 = $("#male_pop_23_24").val();
    if (male_pop_23_24 == "") {
        male_pop_23_24 = "0";
    }
    var female_pop_23_24 = $("#female_pop_23_24").val();
    if (female_pop_23_24 == "") {
        female_pop_23_24 = "0";
    }
    var sexratio_pop_23_24 = (parseFloat(female_pop_23_24) * 1000) / parseFloat(male_pop_23_24);
    if (male_pop_23_24 != 0) {
        $('#sexratio_pop_23_24').val(sexratio_pop_23_24.toFixed(4));  //abhi23
    }
    else {

        $('#sexratio_pop_23_24').val("0");
    }

}
$("#male_pop_24_25,#female_pop_24_25").on("keydown keyup", function () {
    Socio_economic_Sex_Ratio_2024_25()
});
function Socio_economic_Sex_Ratio_2024_25() {
    var male_pop_24_25 = $("#male_pop_24_25").val();
    if (male_pop_24_25 == "") {
        male_pop_24_25 = "0";
    }
    var female_pop_24_25 = $("#female_pop_24_25").val();
    if (female_pop_24_25 == "") {
        female_pop_24_25 = "0";
    }
    var sexratio_pop_24_25 = (parseFloat(female_pop_24_25) * 1000) / parseFloat(male_pop_24_25);
    if (male_pop_24_25 != 0) {
        $('#sexratio_pop_24_25').val(sexratio_pop_24_25.toFixed(4));      //abhi23
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
        alert("Please Enter Female Census year");
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
            url: "/SocialMointoring_new/Save_Socio_economic_demographic_profile_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
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
function abhy_socialmgt_vulnerable_communities_Info() { //4190
    //assign sc st gen data from table 
    $('.loader').show();
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
        url: '/SocialMointoring_new/abhy_socialmgt_vulnerable_communities_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
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


            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {

                    if (data[i].year == "2011") {   //if 2020-21 is selected

                        if (data[i].no_of_sc != null && data[i].no_of_sc != "") {
                            $('#sc_basic_data').val(data[i].no_of_sc);
                        }
                        if (data[i].no_of_st != null && data[i].no_of_st != "") {
                            $('#st_basic_data').val(data[i].no_of_st);
                        }
                        if (data[i].no_of_obc != null && data[i].no_of_obc != "") {
                            $('#obc_basic_data').val(data[i].no_of_obc);
                        }
                        if (data[i].no_of_general != null && data[i].no_of_general != "") {
                            $('#bpl_basic_data').val(data[i].no_of_general);
                        }

                    }
                    if (data[i].year == "2020-21") {   //if 2020-21 is selected

                        if (data[i].no_of_sc != null && data[i].no_of_sc != "") {
                            $('#sc_pop_20_21').val(data[i].no_of_sc);
                        }
                        if (data[i].no_of_st != null && data[i].no_of_st != "") {
                            $('#st_pop_20_21').val(data[i].no_of_st);
                        }
                        if (data[i].no_of_obc != null && data[i].no_of_obc != "") {
                            $('#obc_pop_20_21').val(data[i].no_of_obc);
                        }
                        if (data[i].no_of_general != null && data[i].no_of_general != "") {
                            $('#bpl_pop_20_21').val(data[i].no_of_general);
                        }

                    }
                    if (data[i].year == "2021-22") {   //if 2021-22 is selected

                        if (data[i].no_of_sc != null && data[i].no_of_sc != "") {
                            $('#sc_pop_21_22').val(data[i].no_of_sc);
                        }
                        if (data[i].no_of_st != null && data[i].no_of_st != "") {
                            $('#st_pop_21_22').val(data[i].no_of_st);
                        }
                        if (data[i].no_of_obc != null && data[i].no_of_obc != "") {
                            $('#obc_pop_21_22').val(data[i].no_of_obc);
                        }
                        if (data[i].no_of_general != null && data[i].no_of_general != "") {
                            $('#bpl_pop_21_22').val(data[i].no_of_general);
                        }

                    }
                    if (data[i].year == "2023-24") {   //if 2021-22 is selected

                        if (data[i].no_of_sc != null && data[i].no_of_sc != "") {
                            $('#sc_pop_22_23').val(data[i].no_of_sc);
                        }
                        if (data[i].no_of_st != null && data[i].no_of_st != "") {
                            $('#st_pop_22_23').val(data[i].no_of_st);
                        }
                        if (data[i].no_of_obc != null && data[i].no_of_obc != "") {
                            $('#obc_pop_22_23').val(data[i].no_of_obc);
                        }
                        if (data[i].no_of_general != null && data[i].no_of_general != "") {
                            $('#bpl_pop_22_23').val(data[i].no_of_general);
                        }

                    }
                    if (data[i].year == "2024-25") {   //if 2021-22 is selected

                        if (data[i].no_of_sc != null && data[i].no_of_sc != "") {
                            $('#sc_pop_23_24').val(data[i].no_of_sc);
                        }
                        if (data[i].no_of_st != null && data[i].no_of_st != "") {
                            $('#st_pop_23_24').val(data[i].no_of_st);
                        }
                        if (data[i].no_of_obc != null && data[i].no_of_obc != "") {
                            $('#obc_pop_23_24').val(data[i].no_of_obc);
                        }
                        if (data[i].no_of_general != null && data[i].no_of_general != "") {
                            $('#bpl_pop_23_24').val(data[i].no_of_general);
                        }

                    }
                    if (data[i].year == "2025-26") {   //if 2021-22 is selected

                        if (data[i].no_of_sc != null && data[i].no_of_sc != "") {
                            $('#sc_pop_24_25').val(data[i].no_of_sc);
                        }
                        if (data[i].no_of_st != null && data[i].no_of_st != "") {
                            $('#st_pop_24_25').val(data[i].no_of_st);
                        }
                        if (data[i].no_of_obc != null && data[i].no_of_obc != "") {
                            $('#obc_pop_24_25').val(data[i].no_of_obc);
                        }
                        if (data[i].no_of_general != null && data[i].no_of_general != "") {
                            $('#bpl_pop_24_25').val(data[i].no_of_general);
                        }

                    }

                }


            }
            else {
                $('#btnFinalSave2').prop('disabled', true);
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
//farmers
var Data_tbl_2 = "";
function abhy_socialmgt_farmers_Info() {


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
        url: '/SocialMointoring_new/abhy_socialmgt_farmers_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            $('#large_pop_23_24').val("");
            $('#medium_pop_23_24').val("");
            $('#medium_semi_pop_23_24').val("");
            $('#small_pop_23_24').val("");
            $('#marginal_pop_23_24').val("");

            $('#large_pop_22_23').val("");
            $('#medium_pop_22_23').val("");
            $('#medium_semi_pop_22_23').val("");
            $('#small_pop_22_23').val("");
            $('#marginal_pop_22_23').val("");
            debugger;
            if (data.length != 0) {
                Data_tbl_2 = "";
                var approve = data[0].approve;
                if (approve == null) {
                    approve = "";
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    if (approve == "District" || approve == "Sreject") {

                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "Approve") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "Reject") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    else {

                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        $('#pop_23_24').val("");
                        $('#male_pop_23_24').val("");
                        $('#female_pop_23_24').val("");
                        $('#other_pop_23_24').val("");
                        $('#sexratio_pop_23_24').val("");
                        $('#sc_pop_23_24').val("");
                        $('#st_pop_23_24').val("");
                        $('#obc_pop_23_24').val("");
                        $('#bpl_pop_23_24').val("");
                        $('#large_pop_23_24').val("");
                        $('#marginal_pop_23_24').val("");
                        $('#small_pop_23_24').val("");
                        $('#medium_pop_23_24').val("");
                        $('#medium_semi_pop_23_24').val("");
                        $('#landless_pop_23_24').val("");


                    }

                }
                if (StateOfficer == "State Level Nodal Officer") {
                    if (approve == "State") {

                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "Approve") {

                        $('#btn_submit_approve').prop('disabled', true);
                        $('#btn_reject_spmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "Reject") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "District") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    else {
                        $('#btn_submit_approve').prop('disabled', true);
                        $('#btn_reject_spmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        $('#pop_23_24').val("");
                        $('#male_pop_23_24').val("");
                        $('#female_pop_23_24').val("");
                        $('#other_pop_23_24').val("");
                        $('#sexratio_pop_23_24').val("");
                        $('#sc_pop_23_24').val("");
                        $('#st_pop_23_24').val("");
                        $('#obc_pop_23_24').val("");
                        $('#bpl_pop_23_24').val("");
                        $('#large_pop_23_24').val("");
                        $('#marginal_pop_23_24').val("");
                        $('#small_pop_23_24').val("");
                        $('#medium_pop_23_24').val("");
                        $('#medium_semi_pop_23_24').val("");
                        $('#landless_pop_23_24').val("");


                    }

                }
                if (StateOfficer == "Gram Panchyat Nodal Officer") {

                    if (approve == "") {

                        $('#btnFinalSave2').prop('disabled', false);
                        $('#large_pop_23_24').prop('disabled', false);
                        $('#medium_pop_23_24').prop('disabled', false);
                        $('#medium_semi_pop_23_24').prop('disabled', false);
                        $('#small_pop_23_24').prop('disabled', false);
                        $('#marginal_pop_23_24').prop('disabled', false);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "Reject") {

                        $('#btnFinalSave2').prop('disabled', false);
                        $('#large_pop_23_24').prop('disabled', false);
                        $('#medium_pop_23_24').prop('disabled', false);
                        $('#medium_semi_pop_23_24').prop('disabled', false);
                        $('#small_pop_23_24').prop('disabled', false);
                        $('#marginal_pop_23_24').prop('disabled', false);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_24_25);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_24_25);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "Approve") {

                        // $('#btn_submit_dpmu').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "District") {
                        //  $('#btn_submit_dpmu').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);


                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    else {

                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        $('#pop_23_24').val("");
                        $('#male_pop_23_24').val("");
                        $('#female_pop_23_24').val("");
                        $('#other_pop_23_24').val("");
                        $('#sexratio_pop_23_24').val("");
                        $('#sc_pop_23_24').val("");
                        $('#st_pop_23_24').val("");
                        $('#obc_pop_23_24').val("");
                        $('#bpl_pop_23_24').val("");
                        $('#large_pop_23_24').val("");
                        $('#marginal_pop_23_24').val("");
                        $('#small_pop_23_24').val("");
                        $('#medium_pop_23_24').val("");
                        $('#medium_semi_pop_23_24').val("");
                        $('#landless_pop_23_24').val("");


                    }
                }
                if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

                    if (approve == "Approve") {

                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "Reject") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "District") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    if (approve == "") {
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        $('#remarks').prop('disabled', true);
                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        if (year == '2020-21') {

                            if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                                $('#large_pop_20_21').val(data[0].large_pop_20_21);
                            }
                            if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                                $('#marginal_pop_20_21').val(data[0].marginal_pop_20_21);
                            }
                            if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                                $('#small_pop_20_21').val(data[0].small_pop_20_21);
                            }
                            if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                                $('#medium_pop_20_21').val(data[0].medium_pop_20_21);
                            }
                            if (data[0].medium_semi_pop_20_21 != null && data[0].medium_semi_pop_20_21 != "") {
                                $('#medium_semi_pop_20_21').val(data[0].medium_semi_pop_20_21);
                            }
                            if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                                $('#landless_pop_20_21').val(data[0].landless_pop_20_21);
                            }

                        }
                        if (year == '2021-22') {
                            if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                                $('#large_pop_21_22').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                                $('#marginal_pop_21_22').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                                $('#small_pop_21_22').val(data[0].small_pop_21_22);
                            }
                            if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                                $('#medium_pop_21_22').val(data[0].medium_pop_21_22);
                            }
                            if (data[0].medium_semi_pop_21_22 != null && data[0].medium_semi_pop_21_22 != "") {
                                $('#medium_semi_pop_21_22').val(data[0].medium_semi_pop_21_22);
                            }
                            if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                                $('#landless_pop_21_22').val(data[0].landless_pop_21_22);
                            }
                        }
                        if (year == '2023-24') {
                            if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                                $('#large_pop_22_23').val(data[0].large_pop_22_23);
                            }
                            if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                                $('#marginal_pop_22_23').val(data[0].marginal_pop_22_23);
                            }
                            if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                                $('#small_pop_22_23').val(data[0].small_pop_22_23);
                            }
                            if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                                $('#medium_pop_22_23').val(data[0].medium_pop_22_23);
                            }
                            if (data[0].medium_semi_pop_22_23 != null && data[0].medium_semi_pop_22_23 != "") {
                                $('#medium_semi_pop_22_23').val(data[0].medium_semi_pop_22_23);
                            }
                            if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                                $('#landless_pop_22_23').val(data[0].landless_pop_22_23);
                            }

                        }
                        if (year == '2024-25') {
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                            if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                                $('#marginal_pop_23_24').val(data[0].marginal_pop_23_24);
                            }
                            if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                                $('#small_pop_23_24').val(data[0].small_pop_23_24);
                            }
                            if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                                $('#medium_pop_23_24').val(data[0].medium_pop_23_24);
                            }
                            if (data[0].medium_semi_pop_23_24 != null && data[0].medium_semi_pop_23_24 != "") {
                                $('#medium_semi_pop_23_24').val(data[0].medium_semi_pop_23_24);
                            }
                            if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                                $('#landless_pop_23_24').val(data[0].landless_pop_23_24);
                            }
                            if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                                $('#large_pop_23_24').val(data[0].large_pop_23_24);
                            }
                        }
                        if (year == '2025-26') {
                            if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                                $('#large_pop_24_25').val(data[0].large_pop_21_22);
                            }
                            if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                                $('#marginal_pop_24_25').val(data[0].marginal_pop_21_22);
                            }
                            if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                                $('#small_pop_24_25').val(data[0].small_pop_24_25);
                            }
                            if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                                $('#medium_pop_24_25').val(data[0].medium_pop_24_25);
                            }
                            if (data[0].medium_semi_pop_24_25 != null && data[0].medium_semi_pop_24_25 != "") {
                                $('#medium_semi_pop_24_25').val(data[0].medium_semi_pop_24_25);
                            }
                            if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                                $('#landless_pop_24_25').val(data[0].landless_pop_24_25);
                            }
                        }
                        if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                            $('#large_basic_data').val(data[0].large_basic_data);
                        }
                        if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                            $('#marginal_basic_data').val(data[0].marginal_basic_data);
                        }
                        if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                            $('#small_basic_data').val(data[0].small_basic_data);
                        }
                        if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                            $('#medium_basic_data').val(data[0].medium_basic_data);
                        }
                        if (data[0].medium_semi_basic_data != null && data[0].medium_semi_basic_data != "") {
                            $('#medium_semi_basic_data').val(data[0].medium_semi_basic_data);
                        }
                        if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                            $('#landless_basic_data').val(data[0].landless_basic_data);
                        }
                        return;
                    }
                    else {

                        $('#btnFinalSave2').prop('disabled', true);
                        $('#large_pop_23_24').prop('disabled', true);
                        $('#medium_pop_23_24').prop('disabled', true);
                        $('#medium_semi_pop_23_24').prop('disabled', true);
                        $('#small_pop_23_24').prop('disabled', true);
                        $('#marginal_pop_23_24').prop('disabled', true);

                        $('#pop_23_24').val("");
                        $('#male_pop_23_24').val("");
                        $('#female_pop_23_24').val("");
                        $('#other_pop_23_24').val("");
                        $('#sexratio_pop_23_24').val("");
                        $('#sc_pop_23_24').val("");
                        $('#st_pop_23_24').val("");
                        $('#obc_pop_23_24').val("");
                        $('#bpl_pop_23_24').val("");
                        $('#large_pop_23_24').val("");
                        $('#marginal_pop_23_24').val("");
                        $('#small_pop_23_24').val("");
                        $('#medium_pop_23_24').val("");
                        $('#medium_semi_pop_23_24').val("");
                        $('#landless_pop_23_24').val("");


                    }
                }

            }
            else {
                Data_tbl_2 = "Data_tbl_2";
                $('#large_pop_23_24').val("");
                $('#medium_pop_23_24').val("");
                $('#medium_semi_pop_23_24').val("");
                $('#small_pop_23_24').val("");
                $('#marginal_pop_23_24').val("");

                $('#large_pop_22_23').val("");
                $('#medium_pop_22_23').val("");
                $('#medium_semi_pop_22_23').val("");
                $('#small_pop_22_23').val("");
                $('#marginal_pop_22_23').val("");
            }

            $('.loader').hide();
        }
    });

}
function disable2011_data() {

}
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;
var total5 = 0;
function tot_pop() {

    var year = $('#year').val();
    if (year == '2020-21') {

        var a = $('#large_pop_20_21').val();
        var b = $('#medium_pop_20_21').val();
        var c = $('#medium_semi_pop_20_21').val();
        var d = $('#small_pop_20_21').val();
        var e = $('#marginal_pop_20_21').val();

        if (a == "") {

            a = 0;
        }

        if (b == "") {

            b = 0;
        }
        if (c == "") {

            c = 0;
        }
        if (d == "") {

            d = 0;
        }
        if (e == "") {

            e = 0;
        }
        total1 = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
        $('#tot_pop2').val(total1);
    }
    if (year == '2021-22') {

        var a = $('#large_pop_21_22').val();
        var b = $('#medium_pop_21_22').val();
        var c = $('#medium_semi_pop_21_22').val();
        var d = $('#small_pop_21_22').val();
        var e = $('#marginal_pop_21_22').val();

        if (a == "") {

            a = 0;
        }

        if (b == "") {

            b = 0;
        }
        if (c == "") {

            c = 0;
        }
        if (d == "") {

            d = 0;
        }
        if (e == "") {

            e = 0;
        }
        total2 = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
        $('#tot_pop3').val(total2);
    }
    if (year == '2023-24') {

        var a = $('#large_pop_22_23').val();
        var b = $('#medium_pop_22_23').val();
        var c = $('#medium_semi_pop_22_23').val();
        var d = $('#small_pop_22_23').val();
        var e = $('#marginal_pop_22_23').val();

        if (a == "") {

            a = 0;
        }

        if (b == "") {

            b = 0;
        }
        if (c == "") {

            c = 0;
        }
        if (d == "") {

            d = 0;
        }
        if (e == "") {

            e = 0;
        }
        total3 = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
        $('#tot_pop4').val(total3);
    }
    if (year == '2024-25') {

        var a = $('#large_pop_23_24').val();
        var b = $('#medium_pop_23_24').val();
        var c = $('#medium_semi_pop_23_24').val();
        var d = $('#small_pop_23_24').val();
        var e = $('#marginal_pop_23_24').val();

        if (a == "") {

            a = 0;
        }

        if (b == "") {

            b = 0;
        }
        if (c == "") {

            c = 0;
        }
        if (d == "") {

            d = 0;
        }
        if (e == "") {

            e = 0;
        }
        total4 = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
        $('#tot_pop5').val(total4);
    }
    if (year == '2025-26') {

        var a = $('#large_pop_24_25').val();
        var b = $('#medium_pop_24_25').val();
        var c = $('#medium_semi_pop_24_25').val();
        var d = $('#small_pop_24_25').val();
        var e = $('#marginal_pop_24_25').val();

        if (a == "") {

            a = 0;
        }

        if (b == "") {

            b = 0;
        }
        if (c == "") {

            c = 0;
        }
        if (d == "") {

            d = 0;
        }
        if (e == "") {

            e = 0;
        }
        total5 = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
        $('#tot_pop6').val(total5);
    }
}
function Save_abhy_socialmgt_farmers_Info() {
    $('#btnFinalSave2').prop('disabled', true);
    var xx = 0;

    var large_basic_data = $('#large_basic_data').val();
    var marginal_basic_data = $('#marginal_basic_data').val();
    var small_basic_data = $('#small_basic_data').val();
    var medium_basic_data = $('#medium_basic_data').val();
    var medium_semi_basic_data = $('#medium_semi_basic_data').val();

    var large20_21 = $('#large_pop_20_21').val();
    var large21_22 = $('#large_pop_21_22').val();
    var large22_23 = $('#large_pop_22_23').val();
    var large23_24 = $('#large_pop_23_24').val();
    var large24_25 = $('#large_pop_24_25').val();

    var margin20_21 = $('#marginal_pop_20_21').val();
    var margin21_22 = $('#marginal_pop_21_22').val();
    var margin22_23 = $('#marginal_pop_22_23').val();
    var margin23_24 = $('#marginal_pop_23_24').val();
    var margin24_25 = $('#marginal_pop_24_25').val();

    var small20_21 = $('#small_pop_20_21').val();
    var small21_22 = $('#small_pop_21_22').val();
    var small22_23 = $('#small_pop_22_23').val();
    var small23_24 = $('#small_pop_23_24').val();
    var small24_25 = $('#small_pop_24_25').val();

    var medium20_21 = $('#medium_pop_20_21').val();
    var medium21_22 = $('#medium_pop_21_22').val();
    var medium22_23 = $('#medium_pop_22_23').val();
    var medium23_24 = $('#medium_pop_23_24').val();
    var medium24_25 = $('#medium_pop_24_25').val();

    var medium_semi20_21 = $('#medium_semi_pop_20_21').val();
    var medium_semi21_22 = $('#medium_semi_pop_21_22').val();
    var medium_semi22_23 = $('#medium_semi_pop_22_23').val();
    var medium_semi23_24 = $('#medium_semi_pop_23_24').val();
    var medium_semi24_25 = $('#medium_semi_pop_24_25').val();

    var year = $('#year').val();
    var month = $('#month').val();




    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
        $('#btnFinalSave2').prop('disabled', false);
    }
    else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
        $('#btnFinalSave2').prop('disabled', false);
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
        $('#btnFinalSave2').prop('disabled', false);
    }
    else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
        $('#btnFinalSave2').prop('disabled', false);
    }
    else if (year == "0") {
        xx = 1;
        alert("Please Select year");
        $('#btnFinalSave2').prop('disabled', false);
    }
    else if (month == "0") {
        xx = 1;
        alert("Please Select Month");
        $('#btnFinalSave2').prop('disabled', false);
    }

    if (year == '2020-21') {
        var a = parseInt($('#pop_20_21').val());
        var b = parseInt($('#tot_pop2').val());
        if (a == "") {

            a = 0;
        }
        if (isNaN(a) == true) {
            a = 0;
        }
        if (b == "") {

            b = 0;
        }
        if (isNaN(b) == true) {
            b = 0;
        }
        //if (large20_21 == "") {
        //    xx = 1;
        //    alert("Please Enter Large");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium20_21 == "") {
        //    xx = 1;
        //    alert("Please Enter Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium_semi20_21 == "") {
        //    xx = 1;
        //    alert("Please Enter Semi-Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (small20_21 == "") {
        //    xx = 1;
        //    alert("Please Enter Small");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (margin20_21 == "") {
        //    xx = 1;
        //    alert("Please Enter Marginal");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        else {

            if (a < b) {
                xx = 1;
                alert("Total Population of the GP is Greater Than Farmers Categorisation");
                $('#btnFinalSave2').prop('disabled', false);
                return;
            }
        }
    }
    if (year == '2021-22') {
        var a = parseInt($('#pop_21_22').val());
        var b = parseInt($('#tot_pop3').val());
        if (a == "") {

            a = 0;
        }
        if (isNaN(a) == true) {
            a = 0;
        }
        if (b == "") {

            b = 0;
        }
        if (isNaN(b) == true) {
            b = 0;
        }
        //if (large21_22 == "") {
        //    xx = 1;
        //    alert("Please Enter Large");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium21_22 == "") {
        //    xx = 1;
        //    alert("Please Enter Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium_semi21_22 == "") {
        //    xx = 1;
        //    alert("Please Enter Semi-Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (small21_22 == "") {
        //    xx = 1;
        //    alert("Please Enter Small");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (margin21_22 == "") {
        //    xx = 1;
        //    alert("Please Enter Marginal");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        else {

            if (a < b) {
                xx = 1;
                alert("Total Population of the GP is Greater Than Farmers Categorisation");
                $('#btnFinalSave2').prop('disabled', false);
                return;
            }
        }

    }
    if (year == '2023-24') {
        var a = parseInt($('#pop_22_23').val());
        var b = parseInt($('#tot_pop4').val());
        if (a == "") {

            a = 0;
        }
        if (isNaN(a) == true) {
            a = 0;
        }
        if (b == "") {

            b = 0;
        }
        if (isNaN(b) == true) {
            b = 0;
        }
        //if (large22_23 == "") {
        //    //xx = 1;
        //    //alert("Please Enter Large");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium22_23 == "") {
        //    xx = 1;
        //    alert("Please Enter Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium_semi22_23 == "") {
        //    //xx = 1;
        //    //alert("Please Enter Semi-Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (small22_23 == "") {
        //    //xx = 1;
        //    //alert("Please Enter Small");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (margin22_23 == "") {
        //   // xx = 1;
        //    //alert("Please Enter Marginal");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        else {

            if (a < b) {
                xx = 1;
                alert("Total Population of the GP is Greater Than Farmers Categorisation");
                $('#btnFinalSave2').prop('disabled', false);
                return;
            }
        }

    }
    if (year == '2024-25') {
        var a = parseInt($('#pop_23_24').val());
        var b = parseInt($('#tot_pop5').val());
        if (a == "") {

            a = 0;
        }
        if (isNaN(a) == true) {
            a = 0;
        }
        if (b == "") {

            b = 0;
        }
        if (isNaN(b) == true) {
            b = 0;
        }
        //if (large23_24 == "") {
        //    xx = 1;
        //    alert("Please Enter Large");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium23_24 == "") {
        //    xx = 1;
        //    alert("Please Enter Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium_semi23_24 == "") {
        //    xx = 1;
        //    alert("Please Enter Semi-Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (small23_24 == "") {
        //    xx = 1;
        //    alert("Please Enter Small");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (margin23_24 == "") {
        //    xx = 1;
        //    alert("Please Enter Marginal");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        else {

            if (a < b) {
                xx = 1;
                alert("Total Population of the GP is Greater Than Farmers Categorisation");
                $('#btnFinalSave2').prop('disabled', false);
                return;
            }
        }

    }
    if (year == '2025-26') {
        var a = parseInt($('#pop_24_25').val());
        var b = parseInt($('#tot_pop6').val());
        if (a == "") {

            a = 0;
        }
        if (isNaN(a) == true) {
            a = 0;
        }
        if (b == "") {

            b = 0;
        }
        if (isNaN(b) == true) {
            b = 0;
        }
        //if (large24_25 == "") {
        //    xx = 1;
        //    alert("Please Enter Large");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium24_25 == "") {
        //    xx = 1;
        //    alert("Please Enter Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (medium_semi24_25 == "") {
        //    xx = 1;
        //    alert("Please Enter Semi-Medium");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (small24_25 == "") {
        //    xx = 1;
        //    alert("Please Enter Small");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        //if (margin24_25 == "") {
        //    xx = 1;
        //    alert("Please Enter Marginal");
        //    $('#btnFinalSave2').prop('disabled', false);
        //}
        else {

            if (a < b) {
                xx = 1;
                alert("Total Population of the GP is Greater Than Farmers Categorisation");
                $('#btnFinalSave2').prop('disabled', false);
                return;
            }
        }

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
        /*new Akash*/
        obj.medium_semi_basic_data = $('#medium_semi_basic_data').val();
        obj.medium_semi_pop_20_21 = $('#medium_semi_pop_20_21').val();
        obj.medium_semi_pop_21_22 = $('#medium_semi_pop_21_22').val();
        obj.medium_semi_pop_22_23 = $('#medium_semi_pop_22_23').val();
        obj.medium_semi_pop_23_24 = $('#medium_semi_pop_23_24').val();
        obj.medium_semi_pop_24_25 = $('#medium_semi_pop_24_25').val();


        obj.year = $('#year').val();
        obj.month = $('#month').val();



        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring_new/Save_abhy_socialmgt_farmers_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                }
                if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Please Enter Medium Census Year' && response != 'Please Enter Small Census Year' && response != 'Please Enter Marginal Census Year' && response != 'Please Enter Large Census Year') {
                    //window.location = "/Error/DefaultError";
                }
                alert(response);
                $('#btnFinalSave2').prop('disabled', false);
                abhy_socialmgt_farmers_Info();
            }
        });
    }

}

//Village/Ward/Commumity Meetings
function abhy_socialmgt_village_meetings_Info() {
    $('.loader').show();
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
        url: '/SocialMointoring_new/abhy_socialmgt_village_meetings_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            var count = 0;

            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var v = 0;
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
                    var remarks = data[i].remarks;
                    if (remarks == null) {
                        remarks = "";
                    }

                    //var sc_sc = data[i].no_of_sc_sc;
                    //var st_st = data[i].no_of_st_st;
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title">' + remarks + '</textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;
                    }
                    else if (data[i].gp_sent == true && StateOfficer == "Gram Panchyat Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;

                    }
                    else if (data[i].gp_sent == false && data[i].d_reject == false && StateOfficer == "Gram Panchyat Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')"><i class="fa fa-trash" disabled></i></button></td>  ' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;

                    }
                    else if (data[i].d_reject == true && StateOfficer == "Gram Panchyat Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title">' + remarks + '</textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;

                    }
                    else if (data[i].gp_sent == true && data[i].d_sent == false && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')"> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;
                    }
                    else if (data[i].gp_sent == true && data[i].d_sent == true && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;
                    }
                    else if (data[i].d_reject == true && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '"  class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;
                    }
                    else if (data[i].s_reject == true && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')"> Reject </i></button ></td > <td><textarea id="remarks3' + i + '"  class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title">' + remarks + '</textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;
                    }
                    else if (data[i].approved == true) {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '"  class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;
                    }
                    else if (data[i].d_sent == true && StateOfficer == "State Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')"> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;

                    }
                    else if (data[i].s_reject == true && StateOfficer == "State Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++v) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '"/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count++;
                    }


                }

            }

            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="12">No Data</td></tr>';
                $('#village_meeting_Info').html(tr);
                $('#lbl_count1').text(count);
                $('.loader').hide();
            }
            else {
                $('#village_meeting_Info').html(tr);
                $('#lbl_count1').text(count);
                $('.loader').hide();

            }

        }
    });
}
function Total_popedit(i) {

    var gendertotal_v = 0;
    var gendermale = $('#male' + i).val();
    var genderfemale = $('#female' + i).val();
    var gendertrans = $('#other' + i).val();

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

    $('#total' + i).val(gendertotal_v);


}
function Total_genderedit(i) {

    var gendertotal_v = 0;
    var gendermale = $('#male_population' + i).val();
    var genderfemale = $('#female_population' + i).val();
    var gendertrans = $('#other_population' + i).val();

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

    $('#total_participants' + i).val(gendertotal_v);


}
function Total_casteditmeetings(i) {

    var casttol_castedit = 0;
    var castscedit = $('#txt_sc' + i).val();
    var caststedit = $('#txt_st' + i).val();
    var castobcedit = $('#txt_obc' + i).val();
    var castgeneraledit = $('#txt_gen' + i).val();
    var casttol_populationedit = $('#total_participants' + i).val();

    if (castscedit == "") {

        castscedit = 0;
    }

    if (caststedit == "") {

        caststedit = 0;
    }
    if (castobcedit == "") {

        castobcedit = 0;
    }
    if (castgeneraledit == "") {

        castgeneraledit = 0;
    }
    casttol_castedit = parseFloat(castscedit) + parseFloat(caststedit) + parseFloat(castobcedit) + parseFloat(castgeneraledit);
    if (casttol_castedit > casttol_populationedit) {
        alert('Categories section total should not be greater than total Attendies ');
        $('#txt_sc' + i).val('');
        $('#txt_st' + i).val('');
        $('#txt_obc' + i).val('');
        $('#txt_gen' + i).val('');
        $('#txt_sc' + i).focus();
    } else {
        $('#total_cast' + i).val(casttol_castedit);
    }

}
function abhy_socialmgt_village_meetings_Info_month_year() {
    $('.loader').show();
    var meeting_name = $('#name_of_meeting_fetch').val();
    var month = $('#ddl_month_fetch').val();
    var year = $('#year_meet').val();
    var ddlyear = $('#year').val();
    var ddlmonth = $('#month').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = ddlyear;
    obj.month = ddlmonth;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/abhy_socialmgt_village_meetings_Info_month_meeting',
        data: "{'Data': '" + JSON.stringify(obj) + "' , 'meeting_name':'" + meeting_name + "', 'month':'" + month + "' , 'year':'" + year + "'}",
        dataType: 'JSON',
        success: function (data) {
            var count_vt = 0;
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }

            var vt = 0;

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

                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash" disabled></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea> </td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].gp_sent == true && StateOfficer == "Gram Panchyat Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].gp_sent == false && data[i].d_reject == false && StateOfficer == "Gram Panchyat Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')"><i class="fa fa-trash" disabled></i></button></td>  ' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }

                    else if (data[i].d_reject == true && StateOfficer == "Gram Panchyat Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')"><i class="fa fa-trash" disabled></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" maxlength="5" class="form-control" style="width: 70;" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].gp_sent == true && data[i].d_sent == false && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')"> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].gp_sent == true && data[i].d_sent == true && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].d_reject == true && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '"  value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].s_reject == true && StateOfficer == "District Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')"> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].approved == true) {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].d_sent == true && StateOfficer == "State Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')"> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }
                    else if (data[i].s_reject == true && StateOfficer == "State Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '"> <td>' + (++vt) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].other_name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td> <td>' + data[i].total + '</td> <td>' + data[i].no_of_sc_sc + '</td> <td>' + data[i].no_of_st_st + '</td> <td>' + data[i].no_of_obc + '</td> <td>' + data[i].no_of_gen + '</td> <td>' + data[i].key_issues + '</td><td><a href="' + mom + '" download=""> ' + mom_filename + '</a></td><td><a href="' + photographs + '" download=""> ' + photographs_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')" disabled> <i class="fa fa-edit"></i></button></td ><td><button class="btn btn-danger" onclick="Delete_SocMan(' + data[i].id + ')" disabled><i class="fa fa-trash"></i></button></td>  <td><button class="btn btn-primary" onclick="rejectdata_row3(' + data[i].id + ',' + i + ')" disabled> Reject </i></button ></td > <td><textarea id="remarks3' + i + '" value="' + data[i].remarks + '" class=" form-control" rows="" cols="40" placeholder="Remarks" name="push_title"></textarea></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                            '<td><select class="form-control" id="name_of_meeting' + i + '" onchange="Category_hide(' + i + ')"> <option value=' + data[i].name_of_meeting + '>' + data[i].name_of_meeting + '</option> <option value="Village Community Meeting">Village Community Meeting</option> <option value="Gram Panchayat community meeting">Gram Panchayat community meeting</option> <option value="Ward community meeting">Ward community meeting</option><option value="Other community meeting">Other community meeting</option> </select></td>' +
                            '<td> <input type="text" class="form-control alpha" id="other_name_of_meeting' + i + '" value="' + data[i].other_name_of_meeting + '" /></td>' +
                            '<td> <input type="text" class="form-control alpha" id="curr_date' + i + '" value="' + data[i].curr_date + '" readonly/></td>' +
                            '<td> <input type="text" class="form-control alpha" id="location' + i + '" value="' + data[i].location + '" /></td>' +
                            '<td> <select class="form-control alpha" id="priorinfo_update' + i + '"><option value = "Yes" > Yes</option ><option value="No">No</option></select ></td>' +
                            '<td> <input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="other' + i + '" value="' + data[i].other + '" onkeyup="Total_popedit(' + i + ')" onkeydown="Total_popedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="total' + i + '" value="' + data[i].total + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_sc_sc' + i + '" value="' + data[i].no_of_sc_sc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" style="width: 50;" id="no_of_st_st' + i + '" value="' + data[i].no_of_st_st + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')" /></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_obc' + i + '" value="' + data[i].no_of_obc + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="no_of_gen' + i + '" value="' + data[i].no_of_gen + '" onkeyup="Total_castedit(' + i + ')" onkeydown="Total_castedit(' + i + ')"/></td>' +
                            '<td> <input type="text" class="form-control" id="key_issues' + i + '" value="' + data[i].key_issues + '" /></td>' +
                            '<td> <input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom_filename + '"/></td>' +
                            '<td> <input type="file" class="form-control" id="photo' + i + '" value="' + data[i].photographs + '"/></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' +
                            '<td> <input type="text" class="form-control" id="total_cast' + i + '" value="" /></td></tr > ';
                        $('#priorinfo_update' + i).val(data[i].prior_info);
                        count_vt++;
                    }

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="12">No Data</td></tr>';
                $('#village_meeting_Info').html(tr);
                $('#lbl_count1').text(count_vt);
                $('.loader').hide();
            }
            else {
                $('#village_meeting_Info').html(tr);
                $('#lbl_count1').text(count_vt);
                $('.loader').hide();
            }

        }
    });
}
function attendence_val_check1(a, b, c, row) {

    var male_g = (a).val();
    var female_g = (b).val();
    var transgender_g = (c).val();
    var total_pop = parseFloat(male_g) + parseFloat(female_g) + parseFloat(transgender_g);
    $('#total' + row).val(total_pop);
    if (male_g != '' && female_g != '' && transgender_g != '' && sc_value != '' && st_value != '' && obc_value != '' && general_value != '') {

        var total_pop = parseFloat(male_g) + parseFloat(female_g) + parseFloat(transgender_g);
        var total_cast = parseFloat(sc_value) + parseFloat(st_value) + parseFloat(obc_value) + parseFloat(general_value);

        if (total_pop != total_cast) {
            alert('Attendence is not match');

        }


    }
}
function Category_hide(a) {
    //alert("hey");


    var comm_name = $('#name_of_meeting' + a).val();


    if (comm_name == "Other community meeting") {

        $('#Others_category' + a).show();

    } else {
        $('#Others_category' + a).val("");
        $('#Others_category' + a).hide();
    }
}
function Update_AWP1(id, RowNo) {

    var no_of_sc_sc = $('#no_of_sc_sc' + RowNo).val();
    var no_of_st_st = $('#no_of_st_st' + RowNo).val();
    var no_of_obc = $('#no_of_obc' + RowNo).val();
    var no_of_gen = $('#no_of_gen' + RowNo).val();

    var total_cast = parseFloat(no_of_sc_sc) + parseFloat(no_of_st_st) + parseFloat(no_of_obc) + parseFloat(no_of_gen);


    var xx = 0;
    var id = id;
    var name_of_meeting = $('#name_of_meeting' + RowNo).val();
    var other_name_of_meeting = $('#other_name_of_meeting' + RowNo).val();
    var curr_date = $('#curr_date' + RowNo).val();
    var location = $('#location' + RowNo).val();
    var prior_info = $('#priorinfo_update' + RowNo).val();       //abhi2906
    var male = $('#male' + RowNo).val();
    var female = $('#female' + RowNo).val();
    var other = $('#other' + RowNo).val();
    var total = $('#total' + RowNo).val();

    var key_issues = $('#key_issues' + RowNo).val();

    var mom_filename = $('#mom' + RowNo).get(0);
    var mom_filename_files = mom_filename.files;

    var photographs_filename = $('#photo' + RowNo).get(0);
    var photographs_filename_files = photographs_filename.files;

    if (name_of_meeting == "0") {
        xx = 1;
        alert("Please Select Meeting Name ");
    }
    if (prior_info == "0") {
        xx = 1;
        alert("Please Select Whether Prior information provided?");
    }
    if (male == "") {
        xx = 1;
        alert("Please Enter Male");
    }
    if (female == "") {
        xx = 1;
        alert("Please Enter Female");
    }
    if (other == "") {
        xx = 1;
        alert("Please Enter Transgender");
    }
    if (no_of_sc_sc == "") {
        xx = 1;
        alert("Please Enter SC");
    }
    if (no_of_st_st == "") {
        xx = 1;
        alert("Please Enter ST");
    }
    if (no_of_obc == "") {
        xx = 1;
        alert("Please Enter OBC");
    }
    if (no_of_gen == "") {
        xx = 1;
        alert("Please Enter Gender");
    }

    if (total_cast < total || total_cast != total) {
        xx = 1;
        alert('Categories section total should be equal to total Attendies ');
        $('#no_of_sc_sc' + RowNo).focus();
    }
    if (xx == 0) {

        var formdata = new FormData();
        formdata.append("id", id);
        formdata.append("name_of_meeting", name_of_meeting);
        formdata.append("other_name_of_meeting", other_name_of_meeting);
        formdata.append("curr_date", curr_date);
        formdata.append("location", location);
        formdata.append("prior_info", prior_info);
        formdata.append("male", male);
        formdata.append("female", female);
        formdata.append("other", other);
        formdata.append("total", total);
        formdata.append("no_of_sc_sc", no_of_sc_sc);
        formdata.append("no_of_st_st", no_of_st_st);
        formdata.append("no_of_obc", no_of_obc);
        formdata.append("no_of_gen", no_of_gen);
        formdata.append("key_issues", key_issues);

        formdata.append("mom_filename", mom_filename_files[0]);
        formdata.append("photographs_filename", photographs_filename_files[0]);

        $.ajax({
            url: '/SocialMointoring_new/Update_Comm_Part_Info',
            data: formdata,
            type: 'POST',
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }

                abhy_socialmgt_village_meetings_Info();

            },
            error: function () {
                alert('Update Failed');
            }
        });
    }
}
function Update_AWP2(id, RowNo) {         //abhi2906

    var xx = 0;

    var id = id;
    var comm_name = $('#Others_localnameofcommitte' + RowNo).find('option:selected').text();
    var designation = $('#Others_localdesignation' + RowNo).find('option:selected').text();
    var member_name = $('#Others_localmember_name' + RowNo).val();
    var gender = $('#Others_localgender' + RowNo).find('option:selected').text();
    var category = $('#Others_localcategory' + RowNo).find('option:selected').text();
    var category_other = $('#Others_category_update' + RowNo).val();
    var contact_number = $('#Others_localcontact_number' + RowNo).val();
    var date_of_commi = $('#date_of_commi_update' + RowNo).val();
    var establishment_date = $('#establishment_date_update' + RowNo).val();
    var year = $('#year').val();
    var month = $('#month').val();

    if (comm_name == "0") {
        alert("Please Enter Name of Committee / Association");
        xx = 1;
    }
    else if (designation == "0") {
        alert("Please Enter Designation");
        xx = 1;
    } else if (year == "0") {
        alert("Please Select year");
        xx = 1;
    } else if (month == "0") {
        alert("Please Select Month");
        xx = 1;
    }
    else if (member_name == "") {
        alert("Please Enter Member Name");
        xx = 1;
    }
    else if (gender == "0") {
        alert("Please Select Gender");
        xx = 1;
    }
    else if (category == "0") {
        alert("Please select category");
        xx = 1;
    }
    else if (contact_number == "") {
        alert("Please Enter Mobile Number");
        xx = 1;
    }
    else if (contact_number.length != 10) {
        alert("Please Enter Correct Contact Number");
        xx = 1;
    }
    //else if (establishment_date >= date_of_commi) {
    //    alert("Please Enter the Correct Date in Member From Date Coloum");
    //    $('#date_of_commi_update' + RowNo).focus();
    //    xx = 1;
    //}


    if (xx == 0) {

        var formdata = new FormData();
        formdata.append("id", id);
        formdata.append("comm_name", comm_name);
        formdata.append("designation", designation);
        formdata.append("member_name", member_name);
        formdata.append("gender", gender);
        formdata.append("category", category);
        formdata.append("category_other", category_other);
        formdata.append("contact_number", contact_number);
        formdata.append("date_of_commi", date_of_commi);
        formdata.append("establishment_date", establishment_date);
        formdata.append("year", year);
        formdata.append("month", month);
        $.ajax({
            url: '/SocialMointoring_new/Update_VWMS_Part_Info',
            data: formdata,
            type: 'POST',
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                Others_local_instituions_citizen_leaders_Info()

            },
            error: function () {
                alert('Update Failed');
            }
        });
    }
}
function Update_AWP3(id, RowNo) {         //abhi2906

    var i = 0;
    var id = id;
    var designation = $('#DIP_designation' + RowNo).val();
    var member_name = $('#DIP_member_name' + RowNo).val();
    var othertextbox = $('#txtother' + RowNo).val();
    var ddldesignationval = $('#ddldesination' + RowNo).find('option:selected').text();
    var gender = $('#DIP_gender' + RowNo).find('option:selected').text();
    var contact_number = $('#DIP_contact_number' + RowNo).val();
    var date = $('#date_of_dip_update' + RowNo).val();
    var ca_date = $('#ca_date_of_dip_update' + RowNo).val();
    var year = $('#year').val();
    var month = $('#month').val();
    if (ddldesignationval == "Community Resource Person") {

        if (member_name == "") {
            alert("Please Enter Member Name");
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            i = 1;
        }
        else if (contact_number == "") {
            alert("Please Enter Mobile Number");
            i = 1;
        }
        else if (contact_number.length != 10) {
            alert("Please Enter Correct Mobile No");
            i = 1;
        }
        else if (date == "") {
            alert("Please Enter Date");
            i = 1;
        }
        else if (year == "0") {
            alert("Please Select year");
            xx = 1;
        } else if (month == "0") {
            alert("Please Select Month");
            xx = 1;
        }

    }
    else {

        if (designation == "") {
            alert("Please Enter Name of DIP");
            i = 1;
        }
        else if (ddldesignationval == "0") {
            alert("Please Select Designation");
            i = 1;
        }
        else if (ddldesignationval == "Other") {
            if (othertextbox == "") {
                alert("Please Enter Other Designation ");
                i = 1;
            }
        }


        else if (member_name == "") {
            alert("Please Enter Member Name");
            i = 1;
        }
        else if (gender == "0") {
            alert("Please Select Gender");
            i = 1;
        }
        else if (contact_number == "") {
            alert("Please Enter Mobile Number");
            i = 1;
        }
        else if (contact_number.length != 10) {
            alert("Please Enter Correct Mobile No");
            i = 1;
        }
        //else if (ca_date >= date) {
        //    alert("Please Enter the Correct Date Deployment For Officials");
        //    $('#date_of_dip').focus();
        //    i = 1;
        //}
        else if (year == "0") {
            alert("Please Select year");
            xx = 1;
        } else if (month == "0") {
            alert("Please Select Month");
            xx = 1;
        }
    }
    var ddldesignation = "";
    if (ddldesignationval == "Other") {
        var othertextbox = $('#txtother' + RowNo).val();
        var other = "Other";
        var val = "-";
        ddldesignation = other + val + othertextbox;
    }
    else {
        ddldesignation = ddldesignationval;
    }

    if (i == 0) {


        var formdata = new FormData();
        formdata.append("id", id);
        formdata.append("designation", designation);
        formdata.append("ddldesignation", ddldesignation);
        formdata.append("member_name", member_name);
        formdata.append("gender", gender);
        formdata.append("contact_number", contact_number);
        formdata.append("date", date);
        formdata.append("year", year);
        formdata.append("month", month);
        //formdata.append("ca_date", ca_date);

        $.ajax({
            url: '/SocialMointoring_new/Update_DIP_Part_Info',
            data: formdata,
            type: 'POST',
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                Support_Agency_DIP_Info();

            },
            error: function () {
                alert('Update Failed');
            }
        });
    }
}
function editrowcomp_A_Good2(i) {

    $('#total_cast' + i).hide();
    $('#AWP1_TR_Meeting' + i).hide();
    $('#hide_AWP1_TR_Meeting' + i).show();
}
function cancelcomp_A_Support(i) {

    $('#AWP1_TR_Meeting' + i).show();
    $('#hide_AWP1_TR_Meeting' + i).hide();
}
function cancelcomp_2_Support(i) {


    $('#AWP1_TR' + i).show();
    $('#Hide_AWP1_TR' + i).hide();
    //$('#AWP1_TR_Meeting' + i).show();
    //$('#hide_AWP1_TR_Meeting' + i).hide();

}
function editrowcomp_A_Good3(i) {

    $('#AWP1_TR' + i).hide();
    $('#Hide_AWP1_TR' + i).show();
}
function editrowcomp_A_Good4(i) {



    $('#AWP1_TR_NEW' + i).hide();
    $('#Hide_AWP1_TR_NEW' + i).show();
    $('#txtother' + i).hide();
}
function cancelcomp_A_Support_NEW(i) {
    $('#AWP1_TR_NEW' + i).show();
    $('#Hide_AWP1_TR_NEW' + i).hide();

}
function Total_genderedit(i) {

    var gendertotal_v = 0;
    var gendermale = $('#male_population' + i).val();
    var genderfemale = $('#female_population' + i).val();
    var gendertrans = $('#other_population' + i).val();

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

    $('#total_participants' + i).val(gendertotal_v);


}
function Total_casteditmeetings(i) {

    var casttol_castedit = 0;
    var castscedit = $('#txt_sc' + i).val();
    var caststedit = $('#txt_st' + i).val();
    var castobcedit = $('#txt_obc' + i).val();
    var castgeneraledit = $('#txt_gen' + i).val();
    var casttol_populationedit = $('#total_participants' + i).val();

    if (castscedit == "") {

        castscedit = 0;
    }

    if (caststedit == "") {

        caststedit = 0;
    }
    if (castobcedit == "") {

        castobcedit = 0;
    }
    if (castgeneraledit == "") {

        castgeneraledit = 0;
    }
    casttol_castedit = parseFloat(castscedit) + parseFloat(caststedit) + parseFloat(castobcedit) + parseFloat(castgeneraledit);
    if (casttol_castedit > casttol_populationedit) {
        alert('Categories section total should not be greater than total Attendies ');
        $('#txt_sc' + i).val('');
        $('#txt_st' + i).val('');
        $('#txt_obc' + i).val('');
        $('#txt_gen' + i).val('');
        $('#txt_sc' + i).focus();
    } else {
        $('#total_cast' + i).val(casttol_castedit);
    }

}
function abhy_socialmgt_pgwm_meeting_Info()   //  for pgwm meeting data display
{
    $('.loader').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Pgwm/abhy_socialmgt_pgwm_meeting_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var mom1 = "";
                    if (data[i].mom != null) {
                        mom1 = data[i].mom;
                    }

                    var photo = "";
                    if (data[i].photograph != null) {
                        photo = data[i].photograph;
                    }

                    var resol = "";
                    if (data[i].resolution != null) {
                        resol = data[i].resolution;
                    }

                    var dpmu = "";
                    if (data[i].dpmu != null) {
                        dpmu = data[i].dpmu;
                    }

                    tr += '<tr id="Show_Gplvl' + i + '" ><td>' + (i + 1) + '</td><td>' + data[i].date + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].vill_name + '</td> <td>' + data[i].meet_loc + '</td> <td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].transgender + '</td> <td>' + data[i].total_atten + '</td> <td><a href="' + mom1 + '" download="">' + mom1 + '</a></td>     <td><a href="' + photo + '" download="">' + photo + '</a></td> <td><a href="' + resol + '" download="">' + resol + '</a></td> <td><a href="' + dpmu + '" download="">' + dpmu + '</a></td>   <td><button class="btn btn-primary" style="display:none;" onclick="EditpgwmRow(' + i + ')" > <i class="fa fa-edit"></i></button ></td ><td><button style="display:none;" class="btn btn-danger" onclick="Delete_pgwm_meeting(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                        '<tr id="Hide_Gplvl' + i + '" style="display:none;"> <td>' + (i + 1) + '</td><td><input type="text" class="form-control" id="date' + i + '" value="' + data[i].date + '"/></td><td><input type="text" class="form-control" id="gp_name' + i + '" value="' + data[i].gp_name + '"/></td> <td><input type="text" class="form-control" id="vill_name' + i + '" value="' + data[i].vill_name + '"/></td> <td><input type="text" class="form-control" id="meet_loc' + i + '" value="' + data[i].meet_loc + '"/></td> <td><input type="text" class="form-control" id="male' + i + '" value="' + data[i].male + '"/></td> <td><input type="text" class="form-control" id="female' + i + '" value="' + data[i].female + '"/></td> <td><input type="text" class="form-control" id="transgender' + i + '" value="' + data[i].transgender + '"/></td> <td><input type="text" class="form-control" id="total_atten' + i + '" value="' + data[i].total_atten + '"/></td> <td><input type="file" class="form-control" id="mom' + i + '" value="' + data[i].mom + '"/></td> <td><input type="file" class="form-control" id="photograph' + i + '" value="' + data[i].photograph + '"/></td> <td><input type="file" class="form-control" id="resolution' + i + '" value="' + data[i].resolution + '"/></td> <td><input type="file" class="form-control" id="dpmu' + i + '" value="' + data[i].dpmu + '"/></td> <td><button type="button" class="btn btn-primary" onclick="Update_pgwm_meeting(' + data[i].id + ',' + i + ')">Update</button>' + '</td> <td><button  class="btn btn-danger " type="button" onclick="cancelpgwmRow(' + i + ');"><i class="fa fa-remove"</button></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }
            else {
                $('#training_gp_Info').html(tr);
                $('.loader').hide();
            }

        }
    });
}
function EditGpRow(i) {
    $('#casttotalcast' + i).hide();
    $('#Show_Gplvl' + i).hide();
    $('#Hide_Gplvl' + i).show();
}
function EditpgwmRow(i) {

    $('#Show_Gplvl' + i).hide();
    $('#Hide_Gplvl' + i).show();
}
function cancelGpRow(i) {
    $('#Show_Gplvl' + i).show();
    $('#Hide_Gplvl' + i).hide();

}
function cancelpgwmRow(i) {
    $('#Show_Gplvl' + i).show();
    $('#Hide_Gplvl' + i).hide();

}
function Update_pgwm_meeting(id, RowNo) {


    var id = id;
    var date = $('#date' + RowNo).val();
    var gp_name = $('#gp_name' + RowNo).val();
    var vill_name = $('#vill_name' + RowNo).val();
    var meet_loc = $('#meet_loc' + RowNo).val();
    var male = $('#male' + RowNo).val();
    var female = $('#female' + RowNo).val();
    var transgender = $('#transgender' + RowNo).val();
    var total_atten = $('#total_atten' + RowNo).val();

    var mom = $("#mom" + RowNo).get(0);
    var mom_files = mom.files;

    var photograph = $("#photograph" + RowNo).get(0);
    var photograph_files = photograph.files;

    var resolution = $("#resolution" + RowNo).get(0);
    var resolution_files = resolution.files;

    var dpmu = $("#dpmu" + RowNo).get(0);
    var dpmu_files = dpmu.files;

    var formdata = new FormData();
    formdata.append("id", id);
    formdata.append("date", date);
    formdata.append("gp_name", gp_name);
    formdata.append("vill_name", vill_name);
    formdata.append("meet_loc", meet_loc);
    formdata.append("male", male);
    formdata.append("female", female);
    formdata.append("transgender", transgender);
    formdata.append("total_atten", total_atten);
    formdata.append("mom", mom_files[0]);
    formdata.append("photograph", photograph_files[0]);
    formdata.append("resolution", resolution_files[0]);
    formdata.append("dpmu", dpmu_files[0]);

    $.ajax({
        url: '/Pgwm/Update_pgwm_meeting_Info',
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
$("#male_gp,#female_gp,#other_gp").on("keydown keyup", function () {

    var male_g = 0;
    var female_g = 0;
    var other_g = 0;


    male_g = $("#male_gp").val();
    if (male_g == "")
        male_g = 0;

    female_g = $("#female_gp").val();
    if (female_g == "")
        female_g = 0;

    other_g = $("#other_gp").val();
    if (other_g == "")
        other_g = 0;




    var total_g = parseFloat(male_g) + parseFloat(female_g) + parseFloat(other_g);
    $("#total_participants").val(parseFloat(total_g));




});
$("#male_pgwm,#female_pgwm,#transgender_pgwm").on("keydown keyup", function () {

    var male_g = 0;
    var female_g = 0;
    var transgender_g = 0;

    male_g = $("#male_pgwm").val();
    if (male_g == "")
        male_g = 0;

    female_g = $("#female_pgwm").val();
    if (female_g == "")
        female_g = 0;

    transgender_g = $("#transgender_pgwm").val();
    if (transgender_g == "")
        transgender_g = 0;

    var total_g = parseFloat(male_g) + parseFloat(female_g) + parseFloat(transgender_g);
    $("#total_pgwm").val(parseFloat(total_g));
    console.log(total_g);

});
function Save_pgwm_meeting() {
    alert('1');

    var x = 0;
    var state = $("#drpstate option:selected").text();
    var dis = $("#drpdistrict option:selected").text();
    var block = $("#drpblock option:selected").text();
    var gp = $("#drpgrampanchayat option:selected").text();

    var date = $("#date_pgwm").val();
    var gpname = $("#gpname_pgwm").val();
    var viilname = $("#village_pgwm").val();
    var location = $("#meeting_loc_pgwm").val();
    var male = $("#male_pgwm").val();
    var female = $("#female_pgwm").val();
    var other = $("#transgender_pgwm").val();
    var total = $("#total_pgwm").val();

    var mom = $("#mom_pgwm").get(0);
    var mom_files = mom.files;

    var photo = $("#photograph_pgwm").get(0);
    var photo_files = photo.files;

    var resol = $("#resolution_pgwm").get(0);
    var resol_files = resol.files;

    var dpmu = $("#dpmu_pgdm").get(0);
    var dpmu_files = dpmu.files;

    var formdata = new FormData();

    formdata.append('State', state);
    formdata.append('District', dis);
    formdata.append('Block', block);
    formdata.append('Gp', gp);
    formdata.append("date", date);
    formdata.append("gp_name", gpname);
    formdata.append("vill_name", viilname);
    formdata.append("meet_loc", location);
    formdata.append("male", male);
    formdata.append("female", female);
    formdata.append("transgender", other);
    formdata.append("total_atten", total);
    formdata.append("mom", mom_files[0]);
    formdata.append("photograph", photo_files[0]);
    formdata.append("resolution", resol_files[0]);
    formdata.append("dpmu", dpmu_files[0]);

    $.ajax({
        url: '/Pgwm/Save_pgwm_meeting_Data',
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
function Save_abhy_socialmgt_village_meetings_Info() {
    $('#btnFinalSave4').prop('disabled', true);
    var sc = $("#sc").val();
    var st = $("#st").val();
    var obc = $("#obc").val();
    var general = $("#general").val();

    var total_cat = parseFloat(sc) + parseFloat(st) + parseFloat(obc) + parseFloat(general);


    var xx = 0;
    var location = $('#location').val();
    var name_of_meeting = $('#name_of_meeting').val();
    var male = $("#male_v").val();
    var female = $("#female_v").val();
    var other = $("#other_v").val();
    var keyis = $("#key_issues").val();
    var prior = $("#priorinfo").val();
    var mom = $("#mom").val();
    var photo = $("#photographs").val();
    var date = $("#dateofmeeting").val();
    var tol_population = $("#total_v").val();
    var total_caste = $("#totalCaste").val();
    var year = $("#year").val();
    var month = $('#month').val();
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
        $('#btnFinalSave4').prop('disabled', false);
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
        $('#btnFinalSave4').prop('disabled', false);

    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
        $('#btnFinalSave4').prop('disabled', false);
    } else if (year == "0") {
        xx = 1;
        alert("Please Select Year");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (month == "0") {
        xx = 1;
        alert("Please Select Month");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (name_of_meeting == "") {
        xx = 1;
        alert("Please Select Name of meeting");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (location == "") {
        xx = 1;
        alert("Please Enter Location");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (date == "") {
        xx = 1;
        alert("Please Enter date");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (prior == "0") {
        xx = 1;
        alert("Please Select Prior");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (male == "") {
        xx = 1;
        alert("Please Enter male");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (female == "") {
        xx = 1;
        alert("Please Enter female");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (other == "") {
        xx = 1;
        alert("Please Enter transgender");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (sc == "") {
        xx = 1;
        alert("Please Enter SC");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (st == "") {
        xx = 1;
        alert("Please Enter ST");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (obc == "") {
        xx = 1;
        alert("Please Enter OBC");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (general == "") {
        xx = 1;
        alert("Please Enter General");
        $('#btnFinalSave4').prop('disabled', false);
    }
    //else if (keyis == "") {
    //    xx = 1;
    //    alert("Please Enter Key issue");
    //}
    else if (mom == "") {
        xx = 1;
        alert("Please upload MoM (Minutes of Meeting)");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (photo == "") {
        xx = 1;
        alert("Please upload Photographs");
        $('#btnFinalSave4').prop('disabled', false);
    }
    else if (total_cat < tol_population || total_cat != tol_population) {
        xx = 1;
        alert('Categories section total should be equal to total Attendies ');
        $('#btnFinalSave4').prop('disabled', false);
        $('#sc').focus();
    }


    if (xx == 0) {
        $.ajax({
            url: "/SocialMointoring_new/Save_abhy_socialmgt_village_meetings_Info",
            type: "POST",
            data: function () {

                var data = new FormData();

                //if (name_of_meeting == 'Other community meeting') {
                //    data.append("name_of_meeting", jQuery("#txtother").val());
                //}
                //else {
                //    data.append("name_of_meeting", jQuery("#name_of_meeting").val());
                //}
                data.append("name_of_meeting", jQuery("#name_of_meeting").val());
                data.append("other_name_of_meeting", jQuery("#txtother").val());
                data.append("curr_date", jQuery("#dateofmeeting").val());
                data.append("location", jQuery("#location").val());
                data.append("prior_info", jQuery("#priorinfo").val());
                data.append("male", jQuery("#male_v").val());
                data.append("female", jQuery("#female_v").val());
                data.append("other", jQuery("#other_v").val());
                data.append("total", jQuery("#total_v").val());
                // data.append("noof_attendees", jQuery("#noof_attendees").val());
                //data.append("curr_date", jQuery("#demogram").val());

                data.append("no_of_sc", jQuery("#sc").val());
                data.append("no_of_st", jQuery("#st").val());
                data.append("no_of_gen", jQuery("#general").val());
                data.append("no_of_obc", jQuery("#obc").val());
                data.append("key_issues", jQuery("#key_issues").val());
                data.append("year", jQuery("#year").val());
                data.append("month", jQuery("#month").val());

                data.append("mom", jQuery("#mom").get(0).files[0]);
                data.append("photographs", jQuery("#photographs").get(0).files[0]);
                //data.append("disaggregated_data", jQuery("#disaggregated_data").val());


                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Please Enter Meeting Name' && response != 'Your Upload file has Double Extention, Please Upload proper file' &&
                    response != 'Your Upload file has Not valid File, Please Upload proper file' && response != 'Please Enter Location Name' && response != "Please Select Name of meeting" && response != "Please Enter total"
                    && response != "Please Enter male" && response != "Please Enter female" && response != "Please Enter other" && response != "Please Enter Location"
                    && response != "Please Enter SC" && response != "Please Enter ST" && response != "Please Enter GEN" && response != "Please Enter transgender" && response != "Please Enter Key issue") {

                    // window.location = "/Error/DefaultError";
                }
                $('#btnFinalSave4').prop('disabled', false);

                $("#location").val("");
                $("#dateofmeeting").val("");
                $("#txtother").val("");
                $("#priorinfo").val("");
                $("#key_issues").val("");
                $("#mom").val("");
                $("#photographs").val("");

                $("#name_of_meeting").val("--Select Meeting Name--");

                $("#demogram").text("");
                $("#male_v").val("");
                $("#female_v").val("");
                $("#other_v").val("");
                $("#total_v").val("");

                $("#sc").val("");
                $("#st").val("");
                $("#obc").val("");
                $("#general").val("");
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
        url: '/SocialMointoring_new/abhy_socialmgt_community_feedback_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";
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
            url: "/SocialMointoring_new/Save_abhy_socialmgt_community_feedback_Info",
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
function abhy_socialmgt_capacity_building_Info() {
    $('.loader').show();
    var year = $('#year').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = year;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/abhy_socialmgt_capacity_building_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

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

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].name_of_training + '</td><td>' + data[i].training_location + '</td><td>' + training_date + '</td> <td><a href="' + training_schedule + '" target="_blank">' + train_schedule_filename + '</a></td> <td><a href="' + training_materials + '" target="_blank">' + train_materials_filename + '</a></td> <td><a href="' + noof_trainings + '" target="_blank">' + nooftrain_filename + '</a></td> <td><a href="' + training_report + '" target="_blank">' + training_report_filename + '</a></td><td><a href="' + achievements + '" target="_blank">' + achievements_filename + '</a></td><td><a href="' + findings_of_survey + '" target="_blank">' + findings_filename + '</a></td></tr>';

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="10">No Data</td></tr>';
                $('#capacity_building_Info').html(tr);
                $('.loader').hide();
            }
            else {
                $('#capacity_building_Info').html(tr);
                $('.loader').hide();
            }

        }
    });
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
            url: "/SocialMointoring_new/Save_abhy_socialmgt_capacity_building_Info",
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
function SessionInfo() {


    var obj = {};
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/SocialMointoring_new/State_SessionInfo_1",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            priorinfo

            if (data == "Logout") {
                window.location = "/Home/LogOut";
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
                $('#DropdownSearch_btn').hide();
                $('.loader').hide();

                var Str = data.split(',');
                if (Str[0] == "Admin") {
                    $('#StateLabel').hide();
                    $('#StateDropdownLabel').show();
                    $('#DistLabel').hide();
                    $('#DistDropdownLabel').show();
                    $('#BlockLabel').hide();
                    $('#BlockDropdownLabel').show();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').show();
                    $('#DropdownSearch_btn').show();
                    $('.loader').hide();

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
                    State_Dropdown_Function();


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
                    Dist_fun();


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
                    Block_fun();


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
                    $('#DropdownSearch_btn').show();

                    Dropdown_Search();

                    //GramPanchayatDataBase_Info();

                    //GramPanchayatDataBase_Info();
                    //Others_local_instituions_citizen_leaders_Info();
                    //Support_Agency_DIP_Info();
                    //Socio_economic_demographic_profile_Info();
                    //abhy_socialmgt_farmers_Info();
                    //abhy_socialmgt_vulnerable_communities_Info();
                    //abhy_socialmgt_GRM_Info_getting();
                    //abhy_socialmgt_remarks();
                }


            }
        }

    });

}
//GRM
var noof_complaints = 0;
var Approved_total = 0;
var Pending_total = 0;
function abhy_socialmgt_GRM_Info() {

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
        url: '/SocialMointoring_new/abhy_GRM_Info',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/Home/LogOut";

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
function Save_GRM() {

    $('#btnFinalSave7').prop('disabled', true);
    var xx = 0;
    var ddlawareness = $("#ddlawareness").val();
    var awaregrm = $("#sys_aval").val();
    var tollfr = $("#tollfreeno").val();
    var meawa = $('#adds_awareness').val();
    var other_text = $('#others_awareness').val();
    var year = $('#year').val();
    var month = $('#month').val();
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
        $('#btnFinalSave7').prop('disabled', false);
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
        $('#btnFinalSave7').prop('disabled', false);
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
        $('#btnFinalSave7').prop('disabled', false);
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
        $('#btnFinalSave7').prop('disabled', false);
    } else if (year == "0") {
        xx = 1;
        alert("Please Select Year");
        $('#btnFinalSave7').prop('disabled', false);
    }
    else if (month == "0") {
        xx = 1;
        alert("Please Select Month");
        $('#btnFinalSave7').prop('disabled', false);
    }
    else if (ddlawareness == "0") {
        xx = 1;
        alert("Please Select Awareness About Avalibity GRM System");
        $('#btnFinalSave7').prop('disabled', false);
    }
    if (ddlawareness == 'Yes') {
        if (meawa == "") {
            xx = 1;
            alert("Please Select Means of aware  no Panchayat");
            $('#btnFinalSave7').prop('disabled', false);

        }
        else if (awaregrm == "") {
            xx = 1;
            alert("Please Select GRM aware Panchayat");
            $('#btnFinalSave7').prop('disabled', false);
        } else if (tollfr == "") {
            xx = 1;
            alert("Please Select tollfree no Panchayat");
            $('#btnFinalSave7').prop('disabled', false);
        }
        else if (meawa == "Others" && other_text == "") {
            xx = 1;
            alert("Please Enter other Means of awareness");
            $('#btnFinalSave7').prop('disabled', false);
        }
    }
    if (xx == 0) {

        var obj = {};
        obj.ddlawareness = $('#ddlawareness').val();
        obj.vil_awa_grm = $('#sys_aval').val();
        obj.vil_awa_tfn = $('#tollfreeno').val();
        obj.mea_of_awar = $('#adds_awareness').val();
        obj.mea_of_awar_oth = $('#others_awareness').val();
        obj.year = $('#year').val();
        obj.month = $('#month').val();


        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/SocialMointoring_new/Save_abhy_GRM_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                // Save_abhy_socialmgt_village_meetings_Info()
                alert(response);

                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                }
                else if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Your Upload file has Double Extention, Please Upload proper file' && response != 'Your Upload file has Not valid File, Please Upload proper file' && response != 'Please Enter Training Location' && response != 'Please Enter Training Name' && response != "Please Select GRM aware Panchayat" && response != "Please Select tollfree no Panchayat" && response != "Please Select Means of aware  no Panchayat") {
                    $('#btnFinalSave7').prop("disabled", true);
                }
                $('#btnFinalSave7').prop("disabled", false);

                // alert(response);
                $("#ddlawareness").val("0");
                $("#sys_aval").val("");
                $("#tollfreeno").val("");
                $("#adds_awareness").val("");
                $("#others_awareness").val("");
                document.getElementById("others_awareness").style.visibility = "hidden";
                abhy_socialmgt_GRM_Info_getting();
                abhy_socialmgt_GRM_Info();

            }
        });
    }


}
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

//Ehtasham Code for Approved 
function submitNDO() {

    if (check_data == "No") {
        alert("If you fill in the (Key Personnel of Gram Panchayat) section in the GPDCI Module and get it approved by DPMU and SPMU, that same information will be displayed under Section (A), Point No.1. Once you have filled in all the required data, you can submit it for approval to a DPMU level officer.");
        return;
    }
    else if (check_data == "Yes") {
        var proceed = "";
        if (StateOfficer == "District Level Nodal Officer") {
            proceed = confirm("Are you sure to submit");
        }
        else {
            proceed = confirm("Are you sure to submit. After that you are not able to edit any data");
        }

        if (proceed) {
            //$('input[type="text"]').attr('disabled', true).eq(count++).attr('disabled', false);
            var year = $("#year").val();

            var xx = 0;
            if (State == "0") {
                xx = 1;
                alert("Please Select State");
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
            } else if (year == "0") {
                xx = 1;
                alert("Please Select Year")
                $("#year").focus();
            }
            if (xx == 0) {
                var obj = {};
                obj.state_name = State;
                obj.district_name = Dist;
                obj.block_name = Block;
                obj.gpname = Gram;
                obj.year = $("#year").val();
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json; chatset=utf-8',
                    url: "/SocialMointoring_new/socialmgt_submit_ndo",
                    data: "{'Data': '" + JSON.stringify(obj) + "'}",
                    dataType: 'JSON',
                    success: function (response) {

                        if (response == "No Data Available for Submit") {
                            alert("No Data Available for Submit");
                            return;
                        }
                        if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                            window.location = "/Error/DefaultError";
                        }
                        if (response == "Logout") {
                            window.location = "/Home/LogOut";
                            return;
                        }
                        if (StateOfficer == "District Level Nodal Officer") {
                            alert("Successfully Data Submit for SPMU Verification");
                        } else {
                            alert("Successfully Data Approved");
                        }

                        if (StateOfficer == "Gram Panchyat Nodal Officer") {
                            //baseline_gp_data_saveing();
                            if (response == "Successfully Data Approved") {
                                Save_abhy_socialmgt_farmers_Info();
                            }
                        }

                        Others_local_instituions_citizen_leaders_Info();
                        Support_Agency_DIP_Info();
                        abhy_socialmgt_village_meetings_Info();

                        abhy_socialmgt_remarks();
                        abhy_socialmgt_GRM_Info_getting();

                        /*abhy_socialmgt_training_gp_Info_month();*/
                    }
                });
            }
        } else {
            return false;
        }
    }
}
function rejectdata() {


    var proceed = "";
    proceed = confirm("Are you sure to reject the current submitted Data.");

    if (proceed) {
        if (StateOfficer == "District Level Nodal Officer") {
            var remarks = $('#remarks').val();

            if (remarks == "") {
                alert("Please give remarks");
                $('#remarks').focus();
                return;
            }
        }
        //if (StateOfficer == "State Level Nodal Officer") {
        //    var state_remarks = $('#state_remarks').val();

        //    if (state_remarks == "") {
        //        alert("Please give remarks");
        //        $('#state_remarks').focus();
        //        return;
        //    }
        //}
        if (State == "0") {
            alert("Please Select State");
            $('#spnstate').focus();
            return false;
        } else if (Dist == "0") {
            alert("Please Select District");
            $('#dist11').focus();
            return false;
        }
        else if (Block == "0") {
            alert("Please Select Block");
            $('#block1').focus();
            return false;
        } else if (Gram == "0") {
            alert("Please Select Gram Panchayat");
            $('#gram').focus();
            return false;
        } else if (year == "0") {
            alert("Please Select Year")
            $("#year").focus();
            return false;
        }

        var obj = {};
        obj.state_name = State;
        obj.district_name = Dist;
        obj.block_name = Block;
        obj.gpname = Gram;
        obj.year = $("#year").val();
        obj.remarks = remarks;

        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/SocialMointoring_new/socialmgt_reject",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {

                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (response == "Successfully Saved") {
                    alert("Successfully Data Rejected");
                }
                Others_local_instituions_citizen_leaders_Info();
                Support_Agency_DIP_Info();
                abhy_socialmgt_village_meetings_Info();

                abhy_socialmgt_remarks();
                abhy_socialmgt_GRM_Info_getting();

                /*abhy_socialmgt_training_gp_Info_month();*/
            }
        });
    } else {
        return false;
    }
}
function submitdata_row1(Id) {
    var proceed = "";
    if (StateOfficer == "District Level Nodal Officer") {
        proceed = confirm("Are you sure to submit");
    }
    else {
        proceed = confirm("Are you sure to submit. After that you are not able to edit any data");
    }
    if (proceed) {
        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/socialmgt_submitrow1',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    alert("Successfully Data Submit for SPMU Verification");
                } else {
                    alert("Successfully Data Submit for DPMU Verification");
                }
                /*abhy_socialmgt_training_gp_Info()*/

            }

        });
    }

}
function submitdata_row2(Id) {
    var proceed = "";
    if (StateOfficer == "District Level Nodal Officer") {
        proceed = confirm("Are you sure to submit");
    }
    else {
        proceed = confirm("Are you sure to submit. After that you are not able to edit any data");
    }
    if (proceed) {
        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/socialmgt_submitrow2',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                //alert(response);
                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    alert("Successfully Data Submit for SPMU Verification");
                } else {
                    alert("Successfully Data Approved");
                }
                /*abhy_socialmgt_training_gp_Info()*/

            }

        });
    }

}
function rejectdata_row1(Id, RowNo) {

    var proceed = "";
    proceed = confirm("Are you sure to reject the current submitted Data.");

    if (proceed) {
        var remarks = $('#remarks1' + RowNo).val();
        if (remarks == "") {
            alert("Please give remarks");
            $('#remarks1' + RowNo).focus();
            return;
        }

        var obj = {};
        obj.id = Id;
        obj.remarks = remarks;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/socialmgt_rejectrow1',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                //alert(response);
                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    alert("Successfully Data Rejected");
                } else {
                    alert("Successfully Data Rejected");
                }
                Others_local_instituions_citizen_leaders_Info();

            }

        });
    }

}
function rejectdata_row2(Id, RowNo) {

    var proceed = "";
    proceed = confirm("Are you sure to reject the current submitted Data.");

    if (proceed) {
        var remarks = $('#remarks2' + RowNo).val();
        if (remarks == "") {
            alert("Please give remarks");
            $('#remarks2' + RowNo).focus();
            return;
        }

        var obj = {};
        obj.id = Id;
        obj.remarks = remarks;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/socialmgt_rejectrow2',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {

                //alert(response);
                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    alert("Successfully Data Rejected");
                } else {
                    alert("Successfully Data Rejected");
                }
                Support_Agency_DIP_Info();
            }

        });
    }

}
function rejectdata_row3(Id, RowNo) {

    var proceed = "";
    proceed = confirm("Are you sure to reject the current submitted Data.");

    if (proceed) {
        var remarks = $('#remarks3' + RowNo).val();
        if (remarks == "") {
            alert("Please give remarks");
            $('#remarks3' + RowNo).focus();
            return;
        }

        var obj = {};
        obj.id = Id;
        obj.remarks = remarks;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/socialmgt_rejectrow3',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                //alert(response);
                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    alert("Successfully Data Rejected");
                } else {
                    alert("Successfully Data Rejected");
                }
                abhy_socialmgt_village_meetings_Info();
            }
        });
    }

}
function rejectdata_row4(Id, RowNo) {

    var proceed = "";
    proceed = confirm("Are you sure to reject the current submitted Data.");

    if (proceed) {
        var remarks = $('#remarks4' + RowNo).val();
        if (remarks == "") {
            alert("Please give remarks");
            $('#remarks4' + RowNo).focus();
            return;
        }

        var obj = {};
        obj.id = Id;
        obj.remarks = remarks;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/socialmgt_rejectrow4',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                //alert(response);
                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    alert("Successfully Data Rejected");
                } else {
                    alert("Successfully Data Rejected");
                }
                /*abhy_socialmgt_training_gp_Info_month();*/
            }

        });
    }

}
function rejectdata_row2(Id, RowNo) {

    var proceed = "";
    proceed = confirm("Are you sure to reject the current submitted Data.");

    if (proceed) {
        var remarks = $('#remarks2' + RowNo).val();
        if (remarks == "") {
            alert("Please give remarks");
            $('#remarks2' + RowNo).val();
            return;
        }

        var obj = {};
        obj.id = Id;
        obj.remarks = remarks;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/SocialMointoring_new/socialmgt_rejectrow2',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                //alert(response);
                if (response != "Successfully Saved" && response != "Negitive value is not allowed" && response != "Characters are not allowed") {
                    window.location = "/Error/DefaultError";
                }
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                    return;
                }
                if (StateOfficer == "District Level Nodal Officer") {
                    alert("Successfully Data Rejected");
                } else {
                    alert("Successfully Data Rejected");
                }
                /*abhy_socialmgt_training_gp_Info()*/

            }

        });
    }

}
function abhy_socialmgt_remarks() {

    var year = $('#year').val();
    var month = $('#month').val();
    var obj = {};
    obj.state_name = State;
    obj.district_name = Dist;
    obj.block_name = Block;
    obj.gpname = Gram;
    obj.year = year;
    obj.month = month;
    $('#btnFinalSave7').hide();
    $('#addrow_d_part').hide();
    $('#addrow_c_part').hide();
    $('#btnFinalSave2').hide();
    $('#Save_GRM').hide();
    $('#btn_submit_approve').hide();
    $('#btn_submit_spmu').hide();
    $('#btn_reject_spmu').hide();
    $('#btn_reject_dpmu').hide();
    $('#remark_txt').hide();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring_new/abhy_socialmgt_remarks',
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            $('#btn_submit_dpmu').show();
            if (year == '2024-25') {
                $('#remark').show();
                $('#addrow_d_part').prop('disabled', false);
                $('#addrow_c_part').prop('disabled', false);
                $('#btnFinalSave2').prop('disabled', false);
                $('#btnFinalSave7').prop('disabled', false);
                $('#btnFinalSave7').prop('disabled', false);
                $('#btn_submit_dpmu').prop('disabled', false);

            }
            else {
                $('#remark').hide();
                $('#addrow_d_part').prop('disabled', true);
                $('#addrow_c_part').prop('disabled', true);
                $('#btnFinalSave2').prop('disabled', true);
                $('#btnFinalSave7').prop('disabled', true);
                $('#btnFinalSave7').prop('disabled', true);
                $('#btn_submit_approve').hide();
                $('#btn_reject_spmu').hide();
                $('#btn_submit_spmu').hide();
                $('#btn_reject_dpmu').hide();
                $('#remark_txt').hide();
            }
            if (check_data == "No") {
                debugger;
                $("#gp_status").text("The data for this GP is either not populated under the GPDCI module or has not been approved yet.").css({ 'color': 'Blue' });
                $('#remark_txt').hide();
                $('#remark').hide();
                $('#addrow_d_part').prop('disabled', true);
                $('#addrow_c_part').prop('disabled', true);
                $('#btnFinalSave2').prop('disabled', true);
                $('#btnFinalSave7').prop('disabled', true);
                $('#btnFinalSave7').prop('disabled', true);
                $('#btn_submit_dpmu').prop('disabled', true);
                $('#btn_submit_approve').prop('disabled', true);
                $('#btn_reject_spmu').prop('disabled', true);
                $('#btn_submit_spmu').prop('disabled', true);
                $('#btn_reject_dpmu').prop('disabled', true);
                $('#btn_submit_dpmu').hide();
                $('#btn_submit_approve').hide();
                $('#btn_reject_spmu').hide();
                $('#btn_submit_spmu').hide();
                $('#btn_reject_dpmu').hide();
                $('#remark_txt').hide();
            }
            else {
                if (data == "No Data") {
                    debugger;
                    $('#remark_txt').hide();
                    $('#remark').hide();
                    $("#gp_status").text("The module is ready to fill out the gathered information at GP level.").css({ 'color': 'Blue' });
                    $('#btn_submit_approve').prop('disabled', true);
                    $('#btn_reject_spmu').prop('disabled', true);
                    $('#btn_submit_spmu').prop('disabled', true);
                    $('#btn_reject_dpmu').prop('disabled', true);
                    $('#btn_submit_dpmu').prop('disabled', false);
                    if (StateOfficer == "Gram Panchyat Nodal Officer") {
                        $('#btn_submit_dpmu').show();
                        $('#btn_submit_dpmu').prop('disabled', false);
                    }

                    else {
                        $('#btn_submit_dpmu').hide();
                        $('#remarks').hide();
                        $('#btn_submit_spmu').hide();
                        $('#btn_reject_dpmu').hide();
                    }
                }
                if (data.length != 0) {
                    var remarks = data[0].remarks;
                    var approve = data[0].approve;
                    if (approve == "Approve") {
                        $('#remark_txt').hide();
                        $("#gp_status").text("Approved ").css({ 'color': 'Green' });
                        $('#btn_submit_dpmu').hide();
                        $('#remarks').hide();
                        $('#btn_submit_spmu').hide();
                        $('#btn_reject_dpmu').hide();
                    }
                    if (approve == "Sreject") {
                        $('#remark_txt').show();
                        $("#gp_status").text("State-level nodal officer rejected it, and it is now pending rejection at the DPMU level.").css({ 'color': 'Red' });
                        $("#gp_remark").text(remarks).css({ 'color': 'Red' });
                        if (StateOfficer == "Gram Panchyat Nodal Officer") {
                            $('#btn_submit_dpmu').hide();
                        }

                        else {
                            $('#btn_submit_dpmu').hide();
                            $('#remarks').show();
                            $('#btn_submit_spmu').show();
                            $('#btn_reject_dpmu').show();
                        }
                    }
                    if (approve == "State") {
                        $('#remark_txt').hide();
                        $("#gp_status").text("Verification is pending with the State-level nodal officer.").css({ 'color': 'Blue' });
                        $('#btn_submit_dpmu').hide();
                    }
                    if (approve == "District") {
                        $('#remark_txt').hide();
                        $("#gp_status").text("Verification is pending with the District-level nodal officer.").css({ 'color': 'Blue' });

                        if (StateOfficer == "District Level Nodal Officer") {
                            $('#remarks').show();
                            $('#btn_submit_spmu').show();
                            $('#btn_reject_dpmu').show();
                            $('#btn_submit_spmu').prop('disabled', false);
                            $('#btn_reject_dpmu').prop('disabled', false);
                        }
                        else {
                            $('#btn_submit_dpmu').hide();
                            $('#remarks').hide();
                            $('#btn_submit_spmu').hide();
                            $('#btn_reject_dpmu').hide();
                        }
                    }
                    if (approve == "Reject") {

                        $('#remark_txt').show();
                        $("#gp_status").text("District-level nodal officer rejected it, and it is now pending for correction at the GP level.").css({ 'color': 'Red' });
                        $("#gp_remark").text(remarks).css({ 'color': 'Red' });
                        if (StateOfficer == "Gram Panchyat Nodal Officer") {
                            $('#btn_submit_dpmu').show();
                            $('#btn_submit_dpmu').prop('disabled', false);
                        }

                        else {
                            $('#btn_submit_dpmu').hide();
                            $('#remarks').hide();
                            $('#btn_submit_spmu').hide();
                            $('#btn_reject_dpmu').hide();
                        }
                    }
                    if (approve == "") {
                        $('#remark_txt').hide();
                        $("#gp_status").text("The module is ready to fill out the gathered information at GP level.").css({ 'color': 'Blue' });
                        $('#btn_submit_approve').prop('disabled', true);
                        $('#btn_reject_spmu').prop('disabled', true);
                        $('#btn_submit_spmu').prop('disabled', true);
                        $('#btn_reject_dpmu').prop('disabled', true);
                        if (StateOfficer == "Gram Panchyat Nodal Officer") {
                            $('#btn_submit_dpmu').show();
                            $('#btn_submit_dpmu').prop('disabled', false);
                        }

                        else {
                            $('#btn_submit_dpmu').hide();
                            $('#remarks').hide();
                            $('#btn_submit_spmu').hide();
                            $('#btn_reject_dpmu').hide();
                        }
                    }


                    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

                        if (remarks == "") {
                            $('#remarks').hide();

                        }
                        else {
                            if (approve == "Sreject") {
                                $('#remarks').hide();
                            }
                            else {
                                $('#remarks').hide();
                                // $('#remarks').val(remarks);
                                $('#remarks').prop('disabled', true);

                            }

                        }
                    }
                    else {
                        $('#remarks').val(remarks);
                    }

                }
                else {
                    if (StateOfficer == "Gram Panchyat Nodal Officer") {
                        $('#remarks').hide();
                    }
                    else {
                        $('#remarks').val("");
                    }
                }
            }
            $('#btnFinalSave7').hide();
            $('#addrow_d_part').hide();
            $('#addrow_c_part').hide();
            $('#btnFinalSave2').hide();
            $('#Save_GRM').hide();
            $('#btn_submit_approve').hide();
            $('#btn_submit_spmu').hide();
            $('#btn_reject_spmu').hide();
            $('#btn_reject_dpmu').hide();
            $('#remark_txt').hide();
        }
    });
}

function Submit_To_DPMU() {
    var year = $("#year").val();
    var month = $("#month").val();
    if (State == "0") {
        alert("Please select state name");
        return false;
    } else if (Dist == "0") {
        alert("Please select district name");
        return false;
    } else if (Block == "0") {
        alert("Please select block name");
        return false;
    } else if (Gram == "0") {
        alert("Please select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Please select year");
        return false;
    }
    if (check_data == "No") {
        alert("If you fill in the (Key Personnel of Gram Panchayat) section in the GPDCI Module and get it approved by DPMU and SPMU, that same information will be displayed under Section (A), Point No.1. Once you have filled in all the required data, you can submit it for approval to a DPMU level officer.");
        return;
    }
    else if (check_data == "Yes") {


        if (Data_tbl == "Data_tbl") {
            alert("Please Enter Details Village Water and Sanitation Committee(VWSC) / Participatory Ground Water Management Committee(PGWMC) / Water User Association(WUA) / Pani Samiti");
            return false;
        }
        else if (Data_tbl_1 == "Data_tbl_1") {
            alert("Please Enter Details of officials of the District Implementation Partner(s) (DIP) engaged in the Gram Panchayat");
            return false;
        }
        else if (Data_tbl_2 == "Data_tbl_2") {
            alert("Please Enter Details Program Beneficiaries / Demographic Profile");
            return false;
        }
        else if (Data_tbl_3 == "Data_tbl_3") {
            alert("Please Enter Details Community Participation / Awareness about Greivance Redressal Mechanism (GRM)");
            return false;
        }
        else {
            $.ajax({
                type: "POST",
                contentType: 'application/json; chatset=utf-8',
                url: "/SocialMointoring_new/Submit_To_DPMU",
                data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','month': '" + month + "'}",
                dataType: 'JSON',
                success: function (data) {
                    alert(data)
                    Others_local_instituions_citizen_leaders_Info();
                    Support_Agency_DIP_Info();
                    abhy_socialmgt_GRM_Info_getting();
                    abhy_socialmgt_farmers_Info();
                    abhy_socialmgt_remarks();
                }
            })
        }
    }
}
function Submit_To_SPMU() {
    var year = $("#year").val();
    var month = $("#month").val();
    if (State == "0") {
        alert("Please select state name");
        return false;
    } else if (Dist == "0") {
        alert("Please select district name");
        return false;
    } else if (Block == "0") {
        alert("Please select block name");
        return false;
    } else if (Gram == "0") {
        alert("Please select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Please select year");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: 'application/json; chatset=utf-8',
        url: "/SocialMointoring_new/Submit_To_SPMU",
        data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','month': '" + month + "'}",
        dataType: 'JSON',
        success: function (data) {

            alert(data)
            Others_local_instituions_citizen_leaders_Info();
            Support_Agency_DIP_Info();
            abhy_socialmgt_GRM_Info_getting();
            abhy_socialmgt_farmers_Info();
            abhy_socialmgt_remarks();
        }
    })
}
function Reject_To_DPMU() {
    var year = $("#year").val();
    var month = $("#month").val();
    var remark = $("#remarks").val();
    if (State == "0") {
        alert("Please select state name");
        return false;
    } else if (Dist == "0") {
        alert("Please select district name");
        return false;
    } else if (Block == "0") {
        alert("Please select block name");
        return false;
    } else if (Gram == "0") {
        alert("Please select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Please select year");
        return false;
    }
    else if (remark == "") {
        alert("Please Enter Remark");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: 'application/json; chatset=utf-8',
        url: "/SocialMointoring_new/Reject_To_DPMU",
        data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','month': '" + month + "','remark': '" + remark + "'}",
        dataType: 'JSON',
        success: function (data) {

            alert(data)
            Others_local_instituions_citizen_leaders_Info();
            Support_Agency_DIP_Info();
            abhy_socialmgt_GRM_Info_getting();
            abhy_socialmgt_farmers_Info();
            abhy_socialmgt_remarks();
        }
    })
}
function Submit_To_approve() {
    var year = $("#year").val();
    var month = $("#month").val();
    if (State == "0") {
        alert("Please select state name");
        return false;
    } else if (Dist == "0") {
        alert("Please select district name");
        return false;
    } else if (Block == "0") {
        alert("Please select block name");
        return false;
    } else if (Gram == "0") {
        alert("Please select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Please select year");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: 'application/json; chatset=utf-8',
        url: "/SocialMointoring_new/Submit_To_approve",
        data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','month': '" + month + "'}",
        dataType: 'JSON',
        success: function (data) {

            alert(data)
            Others_local_instituions_citizen_leaders_Info();
            Support_Agency_DIP_Info();
            abhy_socialmgt_GRM_Info_getting();
            abhy_socialmgt_farmers_Info();
            abhy_socialmgt_remarks();
        }
    })
}
function Reject_To_SPMU() {
    var year = $("#year").val();
    var month = $("#month").val();
    var remark = $("#remarks").val();
    if (State == "0") {
        alert("Please select state name");
        return false;
    } else if (Dist == "0") {
        alert("Please select district name");
        return false;
    } else if (Block == "0") {
        alert("Please select block name");
        return false;
    } else if (Gram == "0") {
        alert("Please select gram panchayat name");
        return false;
    }
    else if (year == "0") {
        alert("Please select year");
        return false;
    }
    else if (remark == "") {
        alert("Please Enter Remark");
        return false;
    }

    $.ajax({
        type: "POST",
        contentType: 'application/json; chatset=utf-8',
        url: "/SocialMointoring_new/Reject_To_SPMU",
        data: "{'state': '" + State + "','district': '" + Dist + "','block': '" + Block + "','gram': '" + Gram + "','year': '" + year + "','month': '" + month + "','remark': '" + remark + "'}",
        dataType: 'JSON',
        success: function (data) {
            alert(data)
            Others_local_instituions_citizen_leaders_Info();
            Support_Agency_DIP_Info();
            abhy_socialmgt_GRM_Info_getting();
            abhy_socialmgt_farmers_Info();
            abhy_socialmgt_remarks();
        }
    })
}


