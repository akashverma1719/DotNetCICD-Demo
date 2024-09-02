
var StateOfficer = "";
var statenamea = "";
debugger;
function ready() {
    debugger;
     StateOfficer = ss;
    statenamea = ssn;
}
/*hello*/

function editrowcomp_A_Good2_Reg_Gp_Tr(i) {

    $('#AWP1_TR_Meeting_reg' + i).hide();
    $('#hide_AWP1_TR_Meeting_reg' + i).show();
}
var old_id = 0;
function editrowcomp_A_Good2_Reg_Gp_Tr_new(ss, i) {

    old_id = ss;
    $('#AWP1_TR_Meeting_reg_new' + i).hide();
    $('#hide_AWP1_TR_Meeting_reg_new' + i).show();
    $('#hide_AWP1_TR_Meeting_reg_new_a' + i).hide();

}
function editrowcomp_A_Good2_Reg_Gp_Tr_new_new(i) {

    $('#AWP1_TR_Meeting_reg_new' + i).hide();
    $('#hide_AWP1_TR_Meeting_reg_new_aa' + i).show();
    $('#hide_AWP1_TR_Meeting_reg_new_aaa' + i).show();
}
function cancelcomp_A_Support_Reg_Gp_Tr(i) {

    $('#AWP1_TR_Meeting_reg' + i).show();
    $('#hide_AWP1_TR_Meeting_reg' + i).hide();
}
function cancelcomp_A_Support_Reg_Gp_Tr_new(i) {

    $('#AWP1_TR_Meeting_reg_new' + i).show();
    $('#hide_AWP1_TR_Meeting_reg_new_a' + i).hide();
    $('#hide_AWP1_TR_Meeting_reg_new_aa' + i).hide();
    $('#hide_AWP1_TR_Meeting_reg_new_aaa' + i).hide();
    $('#hide_AWP1_TR_Meeting_reg_new' + i).hide();
}
function Delete_Reg_Gp_Training(Id) {

    if (confirm("Do You want to delete")) {

        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/Delete_Reg_Gp_Training_Part',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                Reg_Gp_level_Info();
                Gp_data_fetch();
            }

        });
    }
}
function Delete_Reg_Gp_Training_new(Id) {

    if (confirm("Do You want to delete")) {

        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/Delete_Reg_Gp_Training_Part_New',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                Gp_data_fetch();


            }

        });
    }
}
function Delete_Reg_Gp_Training_new_new(Id) {

    if (confirm("Do you want to delete")) {

        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/Delete_Reg_Gp_Training_Part_New_New',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                Gp_data_fetch();


            }

        });
    }
}
function Delete_Reg_Gp_Training_new_all(Id) {

    if (confirm("All entries related to this training will be deleted. Are you sure to delete ? ")) {

        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/Delete_Reg_Gp_Training_Part_New_all',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                      window.location = "/Home/LogOut";
                }
                Gp_data_fetch();


            }

        });
    }
}
function Update_AWP1_Reg_Gp_Tr(id, RowNo) {

    var x = 0;
    var id = id;
    var state1 = $('#state1_G' + RowNo).val();
    var dist1 = $('#district1_G' + RowNo).val();
    var block1 = $('#block1_G' + RowNo).val();
    var gram1 = $('#gram1_G' + RowNo).val();
    var year1 = $('#year1_G' + RowNo).val();
    var month1 = $('#month1_G' + RowNo).val();

    var typ1 = $('#typ1_G' + RowNo).val();
    var topic_event1 = $('#topic_event1_G' + RowNo).val();
    var location = $('#location_G' + RowNo).val();
    var fdate1 = $('#fdate1_G' + RowNo).val();
    var tdate1 = $('#tdate1_G' + RowNo).val();

    var male = $('#male_G' + RowNo).val();
    var female = $('#female_G' + RowNo).val();
    var other = $('#other_G' + RowNo).val();
    var total = $('#total_G' + RowNo).val();
    var sc = $('#sc_G' + RowNo).val();
    var st = $('#st_G' + RowNo).val();
    var obc = $('#obc_G' + RowNo).val();
    var general = $('#general_G' + RowNo).val();

    var attenUpload = $("#atten_G" + RowNo).get(0);
    var attenUpload_files = attenUpload.files;

    var photoUpload = $("#photo_G" + RowNo).get(0);
    var photoUpload_files = photoUpload.files;

    var feedUpload = $("#feed_G" + RowNo).get(0);
    var feedUpload_files = feedUpload.files;
    var upload_eea = $("#upload_ee" + RowNo).get(0);
    var upload_ee = upload_eea.files;


    //if (attenUpload_files.length == 0) {
    //    x = 1;
    //    alert("Please Upload attendance sheet of the participant");
    //    return;
    //}
    //else if (photoUpload_files.length == 0) {
    //    x = 1;
    //    alert("Please Upload Photograph of the training");
    //    return;
    //}
    //else if (feedUpload_files.length == 0) {
    //    x = 1;
    //    alert("Please Uplakod Feedback from Participants");
    //    return;
    //}

    var formData = new FormData();

    formData.append("id", id);
    formData.append('State', state1);
    formData.append('District', dist1);
    formData.append('Block', block1);
    formData.append('Gram', gram1);
    formData.append('Year', year1);
    formData.append('Month', month1);

    formData.append("typ", typ1);
    //formData.append("typother_one", typother1);
    //formData.append("typother_two", typother2);
    formData.append("topic_event", topic_event1);
    formData.append("location", location);
    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);

    formData.append('male', male);
    formData.append('female', female);
    formData.append('other', other);
    formData.append('total', total);
    formData.append('sc', sc);
    formData.append('st', st);
    formData.append('obc', obc);
    formData.append('general', general);

    formData.append('atten_file_up', attenUpload_files[0]);
    formData.append('photo_file_up', photoUpload_files[0]);
    formData.append('feed_file_up', feedUpload_files[0]);
    formData.append('upload_ee', upload_ee[0]);

    $.ajax({
        url: '/MasterDropDown/Update_Reg_Gp_Tr',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }

            Reg_Gp_level_Info();
            Gp_data_fetch();
        },
        error: function () {
            alert('Update Failed');
        }
    });
}
function Update_AWP1_Reg_Gp_Tr_new(id, RowNo) {
    var x = 0;

    var id = id;
    var state1 = $('#state1_GN_N' + RowNo).val();
    var dist1 = $('#district1_GN_N' + RowNo).val();
    var block1 = $('#block1_GN_N' + RowNo).val();
    var gram1 = $('#gram1_GN_N' + RowNo).val();
    var year1 = $('#year1_GN_N' + RowNo).val();
    var month1 = $('#month1_GN_N' + RowNo).val();

    var fdate1 = $('#fdate1_GN_N' + RowNo).val();
    var tdate1 = $('#tdate1_GN_N' + RowNo).val();

    var attenUpload = $("#atten_G_N" + RowNo).get(0);
    /*var attenUpload_files = attenUpload.files;*/

    var name1 = $('#name_GN_N' + RowNo).val();
    var gender1 = $('#gender_GN_N' + RowNo).find('option:selected').text();
    var category1 = $('#category_GN_N' + RowNo).find('option:selected').text();
    var mobile1 = $('#mobile_GN_N' + RowNo).val();

    if (name1 == "") {
        x = 1;
        alert("Please Enter participant name");
        return;
    }
    else if (gender1 == "") {
        x = 1;
        alert("Please Enter Gender");
        return;
    }
    else if (category1 == "") {
        x = 1;
        alert("Please Enter Category");
        return;
    }
    else if (mobile1 == "") {
        x = 1;
        alert("Please Enter Mobile no.");
        return;
    }


    var formData = new FormData();

    formData.append("id", id);
    formData.append('State', state1);
    formData.append('District', dist1);
    formData.append('Block', block1);
    formData.append('Gram', gram1);
    formData.append('Year', year1);
    formData.append('Month', month1);

    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);

    /*formData.append('atten_file_up', attenUpload_files[0]);*/

    formData.append('name', name1);
    formData.append('gender', gender1);
    formData.append('category', category1);
    formData.append('mobile', mobile1);

    $.ajax({
        url: '/MasterDropDown/Update_Reg_Gp_Tr_new',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }

            Gp_data_fetch();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}
function Event_Data_Fetch() {

    var p_training_name = $("#p_training_name").val();
    var type_of_event = $("#type_event_gp").val();
    if (p_training_name == "0") {
        $("#p_training_name").val("0");
        return;
    }
    var year = $("#year option:selected").text();
    var month = $("#month option:selected").text();
    var yy = $("#year").val();
    var mm = $("#month").val();
    if (State == "0") {
        alert("Please Select State Name");
        $("#type_event_gp").val("0");
        return;
    }
    else if (Dist == "0") {
        alert("Please Select District Name");
        $("#type_event_gp").val("0");
        return;
    }
    else if (Block == "0") {
        alert("Please Select Block Name");
        $("#type_event_gp").val("0");
        return;
    }
    else if (Gram == "0") {
        alert("Please Select Grampanchayat Name");
        $("#type_event_gp").val("0");
        return;
    }
    else if (yy == "0") {
        alert("Please Select Year");
        $("#type_event_gp").val("0");
        return;
    }
    else if (mm == "0") {
        alert("Please Select Month");
        $("#type_event_gp").val("0");
        return;
    }
    $.ajax({

        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/Gp_Event_Data_Fetching',
        data: { state: State, district: Dist, block: Block, gram: Gram, year: year, month: month, TopicEvent: p_training_name, TypeEvent: type_of_event },
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            if (data == "Already Data Entered in this Topic of Event") {
                alert(data);
                $("#type_event_gp").val("0");
                var option = '<option value="0">Select Event/Training</option>';
                $('#p_training_name').html(option);
                $("#from_date").val("");
                $("#to_date").val("");
            }
            else {
                if (data.length != 0) {
                    $("#p_training_name").val(data.p_training_name);
                    $("#from_date").val(data.from_date);
                    $("#to_date").val(data.to_date);
                    for (var i = 0; i < data.length; i++) {

                    }

                }
            }
        }
    });
}
function Goto_page() {
    var path = $('#goto_page').val();
    if (path != "0") {
        window.location = path;
    }
}
function Goto_page_gp() {
    var path = $('#goto_page_gp').val();
    if (path != "0") {
        window.location = path;
    }
}
function Goto_page_state() {
    debugger;
    var path = $('#goto_page_state').val();
    if (path != "0") {
        window.location = path;
    }
}
/*For Table 1*/
function Create_Excel_Gp_Reg() {

    var year = $('#year').val();
    var month = $('#month').val();


    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate').val();
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();

        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            if (state_name == "All") {
                window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr?state_name=" + state_name + "&year1=" + year + "&month1=" + month;
            }
            else {
                window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr?state_name=" + state_name + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
            }
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();
        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr?state1=" + State + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();
        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr?state1=" + State + "&district1=" + Dist + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        var gram_name = $('#gram1').val();
        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + Gram + "&year1=" + year + "&month1=" + month;
        }
    }

}
function Create_Pdf_Gp_Reg() {
    debugger;
    var year = $('#year').val();
    var month = $('#month').val();

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate').val();
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();

        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        else if (dist_name == "0") {
            alert("Please Select District");
            return false;
        }
        else if (block_name == "0") {
            alert("Please Select Block");
            return false;
        }
        else if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        {
            if (state_name == "All") {
                window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr?state1=" + state_name + "&year1=" + year + "&month1=" + month;
            }
            else {
                window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr?state1=" + state_name + "&district1=" + dist_name + "&block01=" + block_name + "&gram01=" + gram_name + "&year1=" + year + "&month1=" + month;
            }
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();
        if (dist_name == "0") {
            alert("Please Select District");
            return false;
        }
        else if (block_name == "0") {
            alert("Please Select Block");
            return false;
        }
        else if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr?state1=" + State + "&district1=" + dist_name + "&block01=" + block_name + "&gram01=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();
        if (block_name == "0") {
            alert("Please Select Block");
            return false;
        }
        else if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr?state1=" + State + "&district1=" + Dist + "&block01=" + block_name + "&gram01=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        var gram_name = $('#gram1').val();
        if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + Gram + "&year1=" + year + "&month1=" + month;
        }
    }
}
/*For Table 2*/
function Create_Excel_Gp_Reg_final() {

    var year = $('#year').val();
    var month = $('#month').val();
    var topic_training_new = $("#p_training_name1 option:selected").text();
    if (topic_training_new == "Select Event/Training") {
        alert("Please Select Event/Training");
        return false;
    }

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate').val();
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();

        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        else if (dist_name == "0") {
            alert("Please Select District");
            return false;
        }
        else if (block_name == "0") {
            alert("Please Select Block");
            return false;
        }
        else if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        {
            if (state_name == "All") {
                window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr_New?state_name=" + state_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
            }
            else {
                window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr_New?state_name=" + state_name + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
            }
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();
        if (dist_name == "0") {
            alert("Please Select District");
            return false;
        }
        else if (block_name == "0") {
            alert("Please Select Block");
            return false;
        }
        else if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr_New?state1=" + State + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();
        if (block_name == "0") {
            alert("Please Select Block");
            return false;
        }
        else if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr_New?state1=" + State + "&district1=" + Dist + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        if (gram_name == "0") {
            alert("Please Select Grampanchayat");
            return false;
        }
        var gram_name = $('#gram1').val();
        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr_New?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
        }
    }
    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

        {
            window.location.href = "/MasterDropDown/Excel_Gp_Reg_Tr_New?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + Gram + "&year1=" + year + "&month1=" + month + "&topic_training_new1=" + topic_training_new;
        }
    }

}
function Create_Pdf_Gp_Reg_final() {

    var year = $('#year').val();
    var month = $('#month').val();
    var topic_training_new = $("#p_training_name1 option:selected").text();
    if (topic_training_new == "Select Event/Training") {
        alert("Please Select Event/Training");
        return false;
    }

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate').val();
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();

        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            if (state_name == "All") {
                window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr_New?state_name=" + state_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
            }
            else {
                window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr_New?state_name=" + state_name + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
            }
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11').val();
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();

        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr_New?state1=" + State + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var block_name = $('#block1').val();
        var gram_name = $('#gram1').val();
        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr_New?state1=" + State + "&district1=" + Dist + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        var gram_name = $('#gram1').val();
        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr_New?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
        }
    }
    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

        {
            window.location.href = "/MasterDropDown/Pdf_Gp_Reg_Tr_New?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + Gram + "&year1=" + year + "&month1=" + month + "&topic_training_new=" + topic_training_new;
        }
    }
}
function Gp_reg_tr_year() {

    var year = $('#year_train').val();

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var state = $('#spnstate option:selected').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "Gram Panchyat Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#spngram').text();
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/Reg_Gp_Search_data_year',
        data: "{'state':'" + state + "' , 'district':'" + district + "' , 'block':'" + block + "' , 'gram':'" + gram + "' , 'year':'" + year + "'}",
        dataType: 'JSON',
        success: function (data) {
            debugger;
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }

            var tr = '';
            var j = 0;
            var tt = 0;
            var ap = 0;
            var rej = 0;
            var atdp = 0;
            var atgp = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    var reject_status = data[i].remark_status;
                    if (reject_status == null) {
                        reject_status = "";
                    }
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = "";
                    }

                    var atten = "";
                    if (data[i].atten_sheet_filename != null) {
                        atten = data[i].atten_sheet_filename;
                    }
                    var photo = "";
                    if (data[i].photograph_filename != null) {
                        photo = data[i].photograph_filename;
                    }
                    var feed = "";
                    if (data[i].feedback_filename != null) {
                        feed = data[i].feedback_filename;
                    }

                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved</label></td><td></td></tr>';
                        }
                        else if (approve_status == "Gram") {
                            rej++;
                            tt++;
                        }
                        else if (approve_status == "District") {
                            atdp++;
                            tt++;
                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }
                    }

                    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

                        if (reject_status == "" && approve_status == "") {
                            j++;
                            atgp++;
                            tt++;

                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td></td><td></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg" /></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "District" && reject_status == "") {
                            j++;
                            atdp++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                    }

                    else if (StateOfficer == "Block Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {
                            j++;
                            atdp++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: red;">Rejeted By DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                    }

                    else if (StateOfficer == "District Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {
                            j++;
                            atdp++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Approve</button>' + '</td></td > <td><button type="button" class="btn btn-danger"  onclick="reject_gram(' + data[i].id + ',' + i + ')">Reject</button>' + '</td><td><textarea id="remarks_status' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title">' + reject_status + '</textarea></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: blue;">Submitted to SPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }
                    }

                    else if (StateOfficer == "State Level Nodal Officer") {

                        if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }
                        else if (approve_status == "Gram") {
                            rej++;
                            tt++;
                        }
                        else if (approve_status == "District") {
                            atdp++;
                            tt++;
                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }

                    }

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="24">No Data</td></tr>';
                $('#reg_training_gp_Info').html(tr);
                $('#lblcount_2').text(tt);
                $('#approve_count').text(ap);
                $('#atdpmu_count').text(atdp);
                $('#rej_count').text(rej);
                $('#at_gp_count').text(atgp);
                $('.loader').hide();
            }
            else {
                $('#reg_training_gp_Info').html(tr);
                $('#lblcount_2').text(tt);
                $('#approve_count').text(ap);
                $('#atdpmu_count').text(atdp);
                $('#rej_count').text(rej);
                $('#at_gp_count').text(atgp);
                $('.loader').hide();
            }

        }
    });
}
function Gp_reg_tr_month() {

    var year = $('#year_train').val();
    var month = $('#month_train').val();

    if (month == "0") {
        month = "Select Month"
    }
    if (month == "1") {
        month = "January"
    }
    else if (month == "2") {
        month = "February";
    }
    else if (month == "3") {
        month = "March";
    }
    else if (month == "4") {
        month = "April";
    }
    else if (month == "5") {
        month = "May";
    }
    else if (month == "6") {
        month = "June";
    }
    else if (month == "7") {
        month = "July";
    }
    else if (month == "8") {
        month = "August";
    }
    else if (month == "9") {
        month = "September";
    }
    else if (month == "10") {
        month = "October";
    }
    else if (month == "11") {
        month = "November";
    }
    else if (month == "12") {
        month = "December";
    }

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var state = $('#spnstate option:selected').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "Gram Panchyat Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#spngram').text();
    }

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/Reg_Gp_Search_data_month',
        data: "{'state':'" + state + "' , 'district':'" + district + "' , 'block':'" + block + "' , 'gram':'" + gram + "' , 'year':'" + year + "' , 'month':'" + month + "'}",
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            debugger;

            var tr = '';
            var j = 0;
            var tt = 0;
            var ap = 0;
            var rej = 0;
            var atdp = 0;
            var atgp = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    var reject_status = data[i].remark_status;
                    if (reject_status == null) {
                        reject_status = "";
                    }
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = "";
                    }

                    var atten = "";
                    if (data[i].atten_sheet_filename != null) {
                        atten = data[i].atten_sheet_filename;
                    }
                    var photo = "";
                    if (data[i].photograph_filename != null) {
                        photo = data[i].photograph_filename;
                    }
                    var feed = "";
                    if (data[i].feedback_filename != null) {
                        feed = data[i].feedback_filename;
                    }

                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved</label></td><td></td></tr>';
                        }
                        else if (approve_status == "Gram") {
                            rej++;
                            tt++;
                        }
                        else if (approve_status == "District") {
                            atdp++;
                            tt++;
                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }
                    }

                    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

                        if (reject_status == "" && approve_status == "") {
                            j++;
                            atgp++;
                            tt++;

                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td></td><td></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg" /></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "District" && reject_status == "") {
                            j++;
                            atdp++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                    }

                    else if (StateOfficer == "Block Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {
                            j++;
                            atdp++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: red;">Rejeted By DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td >  <td></td><td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                    }

                    else if (StateOfficer == "District Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {
                            j++;
                            atdp++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Approve</button>' + '</td></td > <td><button type="button" class="btn btn-danger"  onclick="reject_gram(' + data[i].id + ',' + i + ')">Reject</button>' + '</td><td><textarea id="remarks_status' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title">' + reject_status + '</textarea></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: blue;">Submitted to SPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }
                    }

                    else if (StateOfficer == "State Level Nodal Officer") {

                        if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td></td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }
                        else if (approve_status == "Gram") {
                            rej++;
                            tt++;
                        }
                        else if (approve_status == "District") {
                            atdp++;
                            tt++;
                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }

                    }

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="24">No Data</td></tr>';
                $('#reg_training_gp_Info').html(tr);
                $('#lblcount_2').text(tt);
                $('#approve_count').text(ap);
                $('#atdpmu_count').text(atdp);
                $('#rej_count').text(rej);
                $('#at_gp_count').text(atgp);
                $('.loader').hide();
            }
            else {
                $('#reg_training_gp_Info').html(tr);
                $('#lblcount_2').text(tt);
                $('#approve_count').text(ap);
                $('#atdpmu_count').text(atdp);
                $('#rej_count').text(rej);
                $('#at_gp_count').text(atgp);
                $('.loader').hide();
            }

        }
    });
}

/* For Table 2*/
function Gp_data_fetch() {
    $('.loader').show();
    var topic_training_new = $("#p_training_name1 option:selected").text();
    var year = $('#year').val();
    var month = $('#month').val();

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var state = $('#spnstate option:selected').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "State Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#gram1 option:selected').text();
    }
    if (StateOfficer == "Gram Panchyat Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#spngram').text();
    }
    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/Reg_Gp_data_fetch',
        data: "{'state':'" + state + "' , 'district':'" + district + "' , 'block':'" + block + "' , 'gram':'" + gram + "' , 'year':'" + year + "' , 'month':'" + month + "' , 'topic_training_new':'" + topic_training_new + "' }",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            var sno = 0;
            var total = 0;
            var ap = 0;
            var atdp = 0;
            var atgp = 0;
            var rej = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var reject_status = data[i].remark_status_full;
                    if (reject_status == null) {
                        reject_status = "";
                    }
                    var approve_status = data[i].approve_status_full;
                    if (approve_status == null) {
                        approve_status = "";
                    }

                    var atten = "";
                    if (data[i].atten_sheet_filename != null) {
                        atten = data[i].atten_sheet_filename;
                    }

                    var Parti_Name = data[i].participant_name;
                    if (Parti_Name == null) {
                        Parti_Name = "";
                    }
                    var Gender = data[i].gender;
                    if (Gender == null) {
                        Gender = "";
                    }
                    var Category = data[i].category;
                    if (Category == null) {
                        Category = "";
                    }
                    var Mobile_No = data[i].mobile_no;
                    if (Mobile_No == null) {
                        Mobile_No = "";
                    }

                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

                        if (approve_status == "Approved") {
                            if (data[i].new_row == 0) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td>  <td></td> <td><label style="color: green;">Approved</label></td> <td></td> </tr>';
                            }
                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td><label style="color: green;">Approved</label></td> <td></td> </tr>';
                            }

                        }
                        else if (approve_status == "District") {
                            if (data[i].new_row == 0) {
                                total += 1;
                                atdp += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                total += 1;
                                atdp += 1;
                            }
                        }
                        else if (approve_status == "Gram") {
                            if (data[i].new_row == 0) {
                                rej += 1;
                                total += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                rej += 1;
                                total += 1;
                            }
                        }
                        else {
                            if (data[i].new_row == 0) {
                                atgp += 1;
                                total += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                atgp += 1;
                                total += 1;
                            }
                        }
                    }

                    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

                        if (reject_status == "" && approve_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                atgp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled  /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"><option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }
                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                atgp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new_new(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training_new_all(' + data[i].old_id + ')"><i class="fa fa-trash"></i></button></td> <td><button class="btn btn-primary" onclick="add_new( ' + i + ')"><i class="fa fa-plus"></i></button></td> <td><button type="button" class="btn btn-primary"  onclick="approve_gram_full(' + data[i].old_id + ',' + i + ')">Submit</button>' + '</td> <td></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }
                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new_new(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training_new_new(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td> <td></td> <td></td> <td></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }
                        else if (approve_status == "Gram" && reject_status != "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                rej += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"><option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }
                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                rej += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new_new(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training_new(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td> <td><button class="btn btn-primary" onclick="add_new( ' + i + ')"><i class="fa fa-plus"></i></button></td> <td><button type="button" class="btn btn-primary"  onclick="approve_gram_full(' + data[i].old_id + ',' + i + ')">Submit</button>' + '</td> <td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }
                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new_new(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training_new_new(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td> <td></td> <td></td> <td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }
                        }
                        else if (approve_status == "District" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                atdp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';



                            }
                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                atdp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td > <td></td > <td></td> <td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }
                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td>  <td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td>' + + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td>  </tr>';


                            }

                        }
                        else if (approve_status == "State" && reject_status == "") {
                            if (data[i].new_row == 0) {
                                sno += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';



                            }
                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: blue;">Submited To SPMU</label></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }
                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td > <td></td> <td></td> <td></td> <td><label style="color: blue;">Submited To SPMU</label></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }

                        }
                        else if (approve_status == "Approved" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)"  id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';



                            }
                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td><label style="color: green;">Approved</label></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }
                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td><td><label style="color: green;">Approved</label></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td>' + + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }
                        }

                    }
                    else if (StateOfficer == "Block Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {


                            if (data[i].new_row == 0) {
                                sno += 1;
                                atdp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                atdp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td>  <td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td>  <td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }


                        }

                        else if (approve_status == "Gram" && reject_status != "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                rej += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                rej += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: red;">Rejeted By DPMU</label></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: red;">Rejeted By DPMU</label></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td> <td></td> <td></td> <td></td> <td></td> </tr>';


                            }

                        }

                        else if (approve_status == "State" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: blue;">Submited To SPMU</label></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: blue;">Submited To SPMU</label></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }

                        else if (approve_status == "Approved" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td>  <td></td> <td></td> <td><label style="color: green;">Approved</label></td> <td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }
                        else {
                            if (data[i].new_row == 0) {
                                atgp += 1;
                                total += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                atgp += 1;
                                total += 1;
                            }
                        }
                    }
                    else if (StateOfficer == "District Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                atdp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                atdp += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td><button type="button" class="btn btn-primary"  onclick="approve_gram_full(' + data[i].old_id + ',' + i + ')">Approve</button>' + '</td> <td><button type="button" class="btn btn-danger"  onclick="reject_gram_full(' + data[i].old_id + ',' + i + ')"> Reject</button>' + '</td> <td><textarea id="remarks_status_full' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title">' + reject_status + '</textarea></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }



                        else if (approve_status == "Approved" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                ap += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td>  <td></td> <td></td> <td><label style="color: green;">Approved By DPMU</label></td><td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td>  <td></td> <td></td> <td><label style="color: green;">Approved By DPMU</label></td><td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }

                        else if (approve_status == "Gram" && reject_status != "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                rej += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                rej += 1;
                                sno += 1;
                                total += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }

                        else if (approve_status == "State" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: blue;">Submitted to SPMU</label></td><td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td> <td></td> <td></td> <td></td> <td><label style="color: blue;">Submitted to SPMU</label></td><td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }
                        else {
                            if (data[i].new_row == 0) {
                                atgp += 1;
                                total += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                atgp += 1;
                                total += 1;
                            }
                        }
                    }
                    else if (StateOfficer == "State Level Nodal Officer") {

                        if (approve_status == "Approved" && reject_status == "") {

                            if (data[i].new_row == 0) {
                                sno += 1;
                                total += 1;
                                ap += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')"> <i class="fa fa-edit"></i></button></td> <td></td> <td></td> <td></td><td></td><td></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" id="mobile_GN' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + ');"><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';



                            }

                            else if (data[i].multiple_row == 1) {
                                sno += 1;
                                total += 1;
                                ap += 1;
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td>' + (sno) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td>  <td></td> <td></td> <td><label style="color: green;">Approved By DPMU</label></td><td></td> </tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" readonly disabled/></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" value="" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"> <option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" id="mobile_GN' + i + '" maxlength="10" value="" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_new_new(' + data[i].old_id + ',' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> <input type="file"  class="form-control" id="atten_G_N' + i + '" value="' + atten + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                            else if (data[i].multiple_row_new == 2) {
                                tr += '<tr id="AWP1_TR_Meeting_reg_new' + i + '" style="text-align:center"><td></td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td>  <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td>' + Parti_Name + '</td><td>' + Gender + '</td><td>' + Category + '</td><td>' + Mobile_No + '</td> <td></td>  <td></td> <td></td> <td><label style="color: green;">Approved By DPMU</label></td><td></td> </tr>';

                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_aaa' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +

                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + Parti_Name + '" /></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_N' + i + '"> <option value="0">' + Gender + '</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +

                                    '<td><select class="form-control" style="width:150px;" id="category_GN_N' + i + '"> <option value="0">' + Category + '</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option> </select></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" id="mobile_GN_N' + i + '" maxlength="10" value="' + Mobile_No + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr_new(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td><td></td> <td></td> <td></td> <td></td></tr>';


                            }

                        }

                        else if (approve_status == "District") {
                            if (data[i].new_row == 0) {
                                total += 1;
                                atdp += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                total += 1;
                                atdp += 1;
                            }
                        }
                        else if (approve_status == "Gram") {
                            if (data[i].new_row == 0) {
                                rej += 1;
                                total += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                rej += 1;
                                total += 1;
                            }
                        }
                        else {
                            if (data[i].new_row == 0) {
                                atgp += 1;
                                total += 1;
                            }
                            else if (data[i].multiple_row == 1) {
                                atgp += 1;
                                total += 1;
                            }
                        }
                    }

                }

            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="24">No Data</td></tr>';
                $('#reg_training_gp_Info_new').html(tr);
                $('#lblcount_new').text(total);
                $('#approve_count_new').text(ap);
                $('#atdpmu_count_new').text(atdp);
                $('#rej_count_new').text(rej);
                $('#at_gp_count_new').text(atgp);
                $('.loader').hide();
            }
            else {
                $('#reg_training_gp_Info_new').html(tr);
                $('#lblcount_new').text(total);
                $('#approve_count_new').text(ap);
                $('#atdpmu_count_new').text(atdp);
                $('#rej_count_new').text(rej);
                $('#at_gp_count_new').text(atgp);
                $('.loader').hide();
            }

        }
    });
}

/*Approval process For Table 1*/
function approve_gram(id, RowNo) {

    if (StateOfficer == "State Level Nodal Officer") {
        var i = 0;
        var id = id;

        if (i == 0) {


            var formdata = new FormData();
            formdata.append("id", id);
            $.ajax({
                url: '/MasterDropDown/approve_data_state',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Reg_Gp_level_Info();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var i = 0;
        var id = id;

        if (i == 0) {


            var formdata = new FormData();
            formdata.append("id", id);
            $.ajax({
                url: '/MasterDropDown/approve_data_Dist',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Reg_Gp_level_Info();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
    else {
        var i = 0;
        var id = id;

        if (i == 0) {


            var formdata = new FormData();
            formdata.append("id", id);
            $.ajax({
                url: '/MasterDropDown/approve_data',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Reg_Gp_level_Info();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }

}

/*Rejection process process For Table 1*/
function reject_gram(id, RowNo) {
    if (StateOfficer == "State Level Nodal Officer") {

        var i = 0;
        var id = id;
        var reject = $('#remarks_status' + RowNo).val();
        if (reject == "") {
            alert("Please Enter Reject Remark ");
            i = 1;
        }
        if (i == 0) {
            var formdata = new FormData();
            formdata.append("id", id);
            formdata.append("reject", reject);
            $.ajax({
                url: '/MasterDropDown/reject_data_state',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Reg_Gp_level_Info();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {

        var i = 0;
        var id = id;
        var reject = $('#remarks_status' + RowNo).val();
        if (reject == "") {
            alert("Please Enter Reject Remark ");
            i = 1;
        }
        if (i == 0) {
            var formdata = new FormData();
            formdata.append("id", id);
            formdata.append("reject", reject);
            $.ajax({
                url: '/MasterDropDown/reject_data',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Reg_Gp_level_Info();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
}

/*Approval process For Table 2*/
function approve_gram_full(id, RowNo) {

    if (StateOfficer == "State Level Nodal Officer") {
        var i = 0;
        var id = id;

        if (i == 0) {


            var formdata = new FormData();
            formdata.append("id", id);
            $.ajax({
                url: '/MasterDropDown/approve_data_state_full',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Gp_data_fetch();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var i = 0;
        var id = id;

        if (i == 0) {


            var formdata = new FormData();
            formdata.append("id", id);
            $.ajax({
                url: '/MasterDropDown/approve_data_Dist_full',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Gp_data_fetch();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
    else {
        var i = 0;
        var id = id;

        if (i == 0) {


            var formdata = new FormData();
            formdata.append("id", id);
            $.ajax({
                url: '/MasterDropDown/approve_data_full',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Gp_data_fetch();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }

}
function reject_gram_full(id, RowNo) {
    if (StateOfficer == "State Level Nodal Officer") {

        var i = 0;
        var id = id;
        var reject = $('#remarks_status' + RowNo).val();
        if (reject == "") {
            alert("Please Enter Reject Remark ");
            i = 1;
        }
        if (i == 0) {
            var formdata = new FormData();
            formdata.append("id", id);
            formdata.append("reject", reject);
            $.ajax({
                url: '/MasterDropDown/reject_data_state',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Reg_Gp_level_Info();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {

        var i = 0;
        var id = id;
        var reject = $('#remarks_status_full' + RowNo).val();
        if (reject == "") {
            alert("Please Enter Reject Remark");
            i = 1;
        }
        if (i == 0) {
            var formdata = new FormData();
            formdata.append("id", id);
            formdata.append("reject", reject);
            $.ajax({
                url: '/MasterDropDown/reject_data_full',
                data: formdata,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (response) {

                    alert(response);
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    Gp_data_fetch();
                },
                error: function () {
                    alert('Approved Failed');
                }
            });
        }
    }
}

function add_new(i) {

    $('#hide_AWP1_TR_Meeting_reg_new_a' + i).show();

}

function isWithinRange(date) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    var todatdate = today;
    if (todatdate <= "2024-09-05") {
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth(); // Month is 0 indexed
        var currentYear = currentDate.getFullYear();

        // Calculate the 10th of the next month
        var nextMonth = currentMonth + 1;
        var nextMonthYear = currentYear;
        if (nextMonth > 11) { // Since month is 0 indexed, 11 represents December
            nextMonth = 0; // January
            nextMonthYear += 1;
        }
        var tenthOfNextMonth = new Date(nextMonthYear, nextMonth, 30);

        // Calculate the start date (first day of the previous month)
        var prevMonth = currentMonth - 1;
        var prevMonthYear = currentYear;
        if (prevMonth < 0) { // Since month is 0 indexed, 0 represents January
            prevMonth = 11; // December of the previous year
            prevMonthYear -= 1;
        }
        var startDate = new Date(prevMonthYear, prevMonth, 1);
        return date >= startDate && date < tenthOfNextMonth;
    }
    else {
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth(); // Month is 0 indexed
        var currentYear = currentDate.getFullYear();

        // Calculate the 10th of the next month
        var nextMonth = currentMonth + 1;
        var nextMonthYear = currentYear;
        if (nextMonth > 11) { // Since month is 0 indexed, 11 represents December
            nextMonth = 0; // January
            nextMonthYear += 1;
        }
        var tenthOfNextMonth = new Date(nextMonthYear, nextMonth, 10);

        // Calculate the start date (first day of the previous month)
        var prevMonth = currentMonth - 1;
        var prevMonthYear = currentYear;
        if (prevMonth < 0) { // Since month is 0 indexed, 0 represents January
            prevMonth = 11; // December of the previous year
            prevMonthYear -= 1;
        }
        var startDate = new Date(prevMonthYear, prevMonth, 1);

        return date >= startDate && date < tenthOfNextMonth;
    }
}
/* For Table 1*/
function Reg_Gp_level_Info() {


    $('.loader').show();
    var year = $('#year').val();
    var month = $('#month').val();
    $('#year_train').val('0');
    $('#month_train').val('0');
    $("#type_event_gp").val('0');
    $('#p_training_name').empty();
    $('#p_training_name').append('<option value="0">Select Event/Training</option>');
    $("#location_gp").val("");
    $("#from_date").val("");
    $("#to_date").val("");
    $("#male_gp").val("");
    $("#female_gp").val("");
    $("#other_gp").val("");
    $("#total_participants").val("");
    $("#scTraining").val("");
    $("#stTraining").val("");
    $("#obcTraining").val("");
    $("#generalTraining").val("");
    $("#Atten_sheet_gp").val("");
    $("#Photo_Train_gp").val("");
    $("#mom_gp").val("");

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var state = $('#spnstate option:selected').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
        if (state == "All") {
            $("#btnsubmit1").prop('disabled', true);
            $("#btnFinalPdf").prop('disabled', true);
            if (year == '0') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else if (month == '0') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else {
                $("#type_event_gp1").prop('disabled', false);
                $("#p_training_name1").prop('disabled', false);
            }


        }
        else {
            $("#btnsubmit1").prop('disabled', false);
            $("#btnFinalPdf").prop('disabled', false);
            if (state == 'Select State') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else if (district == 'Select District') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else if (block == 'Select Block') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else if (gram == 'Select GramPanchayat') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else if (year == '0') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else if (month == '0') {
                $("#type_event_gp1").prop('disabled', true);
                $("#p_training_name1").prop('disabled', true);
            }
            else {
                $("#type_event_gp1").prop('disabled', false);
                $("#p_training_name1").prop('disabled', false);
            }
        }

    }
    if (StateOfficer == "State Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#dist11 option:selected').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
        $("#btnsubmit1").prop('disabled', false);
        $("#btnFinalPdf").prop('disabled', false);
        if (district == 'Select District') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (block == 'Select Block') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (gram == 'Select GramPanchayat') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (year == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (month == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else {
            $("#type_event_gp1").prop('disabled', false);
            $("#p_training_name1").prop('disabled', false);
        }
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#block1 option:selected').text();
        var gram = $('#gram1 option:selected').text();
        $("#btnsubmit1").prop('disabled', false);
        $("#btnFinalPdf").prop('disabled', false);
        if (block == 'Select Block') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (gram == 'Select GramPanchayat') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (year == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (month == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else {
            $("#type_event_gp1").prop('disabled', false);
            $("#p_training_name1").prop('disabled', false);
        }

    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#gram1 option:selected').text();
        $("#btnsubmit1").prop('disabled', false);
        $("#btnFinalPdf").prop('disabled', false);
        if (gram == 'Select GramPanchayat') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (year == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (month == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else {
            $("#type_event_gp1").prop('disabled', false);
            $("#p_training_name1").prop('disabled', false);
        }
    }
    if (StateOfficer == "Gram Panchyat Nodal Officer") {

        var state = $('#spnstate1').text();
        var district = $('#spndistrict').text();
        var block = $('#spnblock').text();
        var gram = $('#spngram').text();
        $("#btnsubmit1").prop('disabled', false);
        $("#btnFinalPdf").prop('disabled', false);
        if (year == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else if (month == '0') {
            $("#type_event_gp1").prop('disabled', true);
            $("#p_training_name1").prop('disabled', true);
        }
        else {
            $("#type_event_gp1").prop('disabled', false);
            $("#p_training_name1").prop('disabled', false);
        }
    }
    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/Reg_Gp_level_Info_Data',
        data: "{'state':'" + state + "' , 'district':'" + district + "' , 'block':'" + block + "' , 'gram':'" + gram + "' , 'year':'" + year + "' , 'month':'" + month + "'}",
        dataType: 'JSON',
        success: function (data) {
            debugger;
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }

            var tr = '';
            var j = 0;
            var tt = 0;
            var ap = 0;
            var rej = 0;
            var atdp = 0;
            var atgp = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    var reject_status = data[i].remark_status;
                    if (reject_status == null) {
                        reject_status = "";
                    }
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = "";
                    }

                    var atten = "";
                    if (data[i].atten_sheet_filename != null) {
                        atten = data[i].atten_sheet_filename;
                    }
                    var photo = "";
                    if (data[i].photograph_filename != null) {
                        photo = data[i].photograph_filename;
                    }
                    var feed = "";
                    if (data[i].feedback_filename != null) {
                        feed = data[i].feedback_filename;
                    }
                    var event_upload_filename = "";
                    if (data[i].event_upload_filename != null) {
                        event_upload_filename = data[i].event_upload_filename;
                    }

                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: green;">Approved</label></td><td></td></tr>';
                        }
                        else if (approve_status == "Gram") {
                            rej++;
                            tt++;
                        }
                        else if (approve_status == "District") {
                            atdp++;
                            tt++;
                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }
                    }

                    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

                        if (reject_status == "" && approve_status == "") {
                            if (isWithinRange(new Date(data[i].to_date))) {
                                j++;
                                atgp++;
                                tt++;

                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td></td><td></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else if (email == "akash.verma@kreatetechnologies.com") {
                                j++;
                                atgp++;
                                tt++;

                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td></td><td></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else {
                                j++;
                                atgp++;
                                tt++;

                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td> <td></td><td></td><td></td><td></td></tr>';
                            }
                        }
                        else if (approve_status == "Gram" && reject_status != "") {
                            if (isWithinRange(new Date(data[i].to_date))) {
                                j++;
                                rej++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else if (email == "akash.verma@kreatetechnologies.com") {
                                j++;
                                rej++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Tr(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Reg_Gp_Training(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Submit</button>' + '</td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else {
                                j++;
                                rej++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td> <td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> </tr>';
                            }
                        }
                        else if (approve_status == "District" && reject_status == "") {
                            if (isWithinRange(new Date(data[i].to_date))) {
                                j++;
                                atdp++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td >  <td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else if (email == "akash.verma@kreatetechnologies.com") {
                                j++;
                                atdp++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td >  <td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else {
                                j++;
                                atdp++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td >  <td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td></tr> ';
                            }
                        }
                        else if (approve_status == "State" && reject_status == "") {
                            if (isWithinRange(new Date(data[i].to_date))) {
                                j++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td >  <td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else if (email == "akash.verma@kreatetechnologies.com") {
                                j++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td >  <td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else {
                                j++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td >  <td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> </tr>';
                            }
                        }
                        else if (approve_status == "Approved" && reject_status == "") {
                            if (isWithinRange(new Date(data[i].to_date))) {
                                j++;
                                ap++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else if (email == "akash.verma@kreatetechnologies.com") {
                                j++;
                                ap++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else {
                                j++;
                                ap++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td></tr> ';
                            }
                        }

                    }

                    else if (StateOfficer == "Block Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {
                            j++;
                            atdp++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td >  <td></td><td><label style="color: blue;">Submitted To DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: red;">Rejeted By DPMU</label></td> <td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: blue;">Submited To SPMU</label></td> <td></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: green;">Approved</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td>' + (j) + '</td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                    }

                    else if (StateOfficer == "District Level Nodal Officer") {

                        if (approve_status == "District" && reject_status == "") {
                            if (isWithinRange(new Date(data[i].to_date))) {
                                j++;
                                atdp++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Approve</button>' + '</td></td > <td><button type="button" class="btn btn-danger"  onclick="reject_gram(' + data[i].id + ',' + i + ')">Reject</button>' + '</td><td><textarea id="remarks_status' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title">' + reject_status + '</textarea></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            }
                            else if (email == "akash.verma@kreatetechnologies.com") {
                                j++;
                                atdp++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><button type="button" class="btn btn-primary"  onclick="approve_gram(' + data[i].id + ',' + i + ')">Approve</button>' + '</td></td > <td><button type="button" class="btn btn-danger"  onclick="reject_gram(' + data[i].id + ',' + i + ')">Reject</button>' + '</td><td><textarea id="remarks_status' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title">' + reject_status + '</textarea></td> ' +
                                    '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                    '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                    '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                    '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                            }
                            else {
                                j++;
                                atdp++;
                                tt++;
                                tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td></td></td > <td></td><td></td></tr> ';
                            }
                        }

                        else if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }

                        else if (approve_status == "Gram" && reject_status != "") {
                            j++;
                            rej++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td></td><td></td><td></td><td><label style="color: red;">Rejected By DPMU</label></td><td><label>' + reject_status + '</label></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }

                        else if (approve_status == "State" && reject_status == "") {
                            j++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: blue;">Submitted to SPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +

                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }
                    }

                    else if (StateOfficer == "State Level Nodal Officer") {

                        if (approve_status == "Approved" && reject_status == "") {
                            j++;
                            ap++;
                            tt++;
                            tr += '<tr id="AWP1_TR_Meeting_reg' + i + '" style="text-align:center"><td>' + (j) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gp_name + '</td><td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + data[i].type_of_event + '</td><td>' + data[i].topic_training + '</td><td>' + data[i].location + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td> <td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td> <td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td><td></td> ' +
                                '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_G' + i + '" value="' + data[i].state_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_G' + i + '" value="' + data[i].district_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_G' + i + '" value="' + data[i].block_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_G' + i + '" value="' + data[i].gp_name + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="typ1_G' + i + '" value="' + data[i].type_of_event + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].topic_training + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="location_G' + i + '" value="' + data[i].location + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + data[i].male_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="female_G' + i + '" value="' + data[i].female_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="other_G' + i + '" value="' + data[i].other_population + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="total_G' + i + '" value="' + data[i].total_participants + '" readonly /></td>' +

                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="sc_G' + i + '" value="' + data[i].SC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="st_G' + i + '" value="' + data[i].ST + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="obc_G' + i + '" value="' + data[i].OBC + '" readonly /></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="general_G' + i + '" value="' + data[i].General + '" readonly /></td>' +

                                '<td> <input type="file"  class="form-control" id="atten_G' + i + '" value="' + atten + '" accept=".pdf,.doc,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="photo_G' + i + '" value="' + photo + '" accept=".png,.jpg" /></td>' +
                                '<td> <input type="file"  class="form-control" id="feed_G' + i + '" value="' + feed + '" accept=".pdf,.doc,.jpg"/></td>' +
                                '<td> <input type="file"  class="form-control" id="upload_ee' + i + '" value="' + event_upload_filename + '" accept=".pdf,.xls,.word,.PPT" /></td>' +


                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                        }
                        else if (approve_status == "Gram") {
                            rej++;
                            tt++;
                        }
                        else if (approve_status == "District") {
                            atdp++;
                            tt++;
                        }
                        else if (approve_status == "") {
                            atgp++;
                            tt++;
                        }

                    }

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="24">No Data</td></tr>';
                $('#reg_training_gp_Info').html(tr);
                $('#lblcount_2').text(tt);
                $('#approve_count').text(ap);
                $('#atdpmu_count').text(atdp);
                $('#rej_count').text(rej);
                $('#at_gp_count').text(atgp);
                $('.loader').hide();
            }
            else {
                $('#reg_training_gp_Info').html(tr);
                $('#lblcount_2').text(tt);
                $('#approve_count').text(ap);
                $('#atdpmu_count').text(atdp);
                $('#rej_count').text(rej);
                $('#at_gp_count').text(atgp);
                $('.loader').hide();
            }

        }
    });
}
