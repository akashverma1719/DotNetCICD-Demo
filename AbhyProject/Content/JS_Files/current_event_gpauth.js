function isWithinRange(date) {

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); // Month is 0 indexed
    var currentYear = currentDate.getFullYear();
    var currentdate = currentDate.getDate();

    var currentdatea = new Date(currentYear, currentMonth, currentdate);

    var todate = date;
    var year = date.getFullYear();
    var month = date.getMonth();
    var dd = new Date(year, month + 1, 5);
    if (currentdatea <= dd) {
        return true;
    }
    else {
        if (year == "2024") {
            if ("2024-12-06" > todaydate) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
}
function dropdownii() {
    exetotal = 0;
    totalexess = 0;
    PageNumber = 1;
    sno = 0;
    count = 0;
    close_length = 0;
    click_button = 0;
    $('#btnnextexe').hide();
    $('#btnpreexe').hide();
    totalexe();
}
var exetotal = 0;
var totalexess = 0;
var PageNumber = 1;
var sno = 0;
var count = 0;
var close_length = 0;
var click_button = 0;
function totalexe() {

    $('.loader').show();

    var spnstate_gram_1 = State;
    var dist11_gram_1 = Dist;
    var block1_gram_1 = Block;
    var gram1_gram_1 = Gram;
    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();
    if (spnstate_gram_1 == "0") {
        alert("Select State Name");
        $(".loader").hide();
        return;
    }
    else if (month != "0") {
        if (year == "0") {
            alert("select Financial Year");
            $('#month_state').val("0");
            $(".loader").hide();
            return;
        }
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/totalgp',
        data: "{'spnstate_gram_1':'" + spnstate_gram_1 + "' , 'dist11_gram_1':'" + dist11_gram_1 + "' , 'block1_gram_1':'" + block1_gram_1 + "' , 'gram1_gram_1':'" + gram1_gram_1 + "' , 'year_gram':'" + year + "' , 'month_gram':'" + month + "'}",
        /*data: "{'StateName':'" + StateName + "','distName':'" + distName + "','blockName':'" + blockName + "','gpname':'" + gpname + "','year':'" + year + "','Month':'" + month + "','PageNumber':'" + PageNumber + "'}",*/
        dataType: 'JSON',
        success: function (data) {

            if (data == 'Logout') {
                window.location = "/Home/LogOut";
            }
            var data = data;

            if (data == 'No Data') {
                $('#npmu_total').text(0);
                $('#totalwaterlevelexess').text(0);
                $('#approve_total').text(0);
                $('#submitted_total').text(0);
                $('#Reject_total').text(0);
                $('#dpmu_total').text(0);
            }
            else {
                var data = data.split(',');

                $('#npmu_total').text(data[0]);
                $('#totalwaterlevelexess').text(data[1]);
                $('#approve_total').text(data[2]);
                $('#submitted_total').text(data[3]);
                $('#Reject_total').text(data[4]);
                $('#dpmu_total').text(data[5]);
                exetotal = data[0];
                totalexess = data[1];
            }
            if (totalexess == PageNumber || totalexess == 0) {
                $('#btnnextexe').hide();
            }
            else {
                $('#btnnextexe').show();
            }
            if (totalexess == 1) {
                PageNumber = 1;
            }
            if (PageNumber == 1) {
                h = 0;
                count = 0;
            }

            abhy_Curr_Training_Info_Search_4();
        },
        error: function () {

        }
    });
}
function abhy_Curr_Training_Info_Search_4() {

    $('.loader').show();
    var spnstate_gram_1 = State;
    var dist11_gram_1 = Dist;
    var block1_gram_1 = Block;
    var gram1_gram_1 = Gram;
    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();
    if (spnstate_gram_1 == "0") {
        alert("Select State Name");
        $(".loader").hide();
        return;
    }

    else if (month != "0") {
        if (year == "0") {
            alert("select Financial Year");
            $('#month_state').val("0");
            $(".loader").hide();
            return;
        }
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_gram',
        data: "{'spnstate_gram_1':'" + spnstate_gram_1 + "' , 'dist11_gram_1':'" + dist11_gram_1 + "' , 'block1_gram_1':'" + block1_gram_1 + "' , 'gram1_gram_1':'" + gram1_gram_1 + "' , 'year_gram':'" + year + "' , 'month_gram':'" + month + "','PageNumber':'" + PageNumber + "'}",
        dataType: 'JSON',
        success: function (data) {
            close_length = data.length;
            $("#btnpdf").removeAttr("disabled");
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            var h = 0;
            var at = 0;
            var st = 0;
            var rt = 0;
            var pt = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    sno += 1;
                    var district = data[i].district;
                    if (district == null) {
                        district = "";
                    }

                    var block = data[i].block;
                    if (block == null) {
                        block = ""
                    }
                    var from_date = data[i].from_date;
                    if (from_date == null) {
                        from_date = ""
                    }
                    var to_date = data[i].to_date;
                    if (to_date == null) {
                        to_date = ""
                    }
                    var location_expo = data[i].location_expo;
                    if (location_expo == null) {
                        location_expo = ""
                    }
                    var particular_expo = data[i].particular_expo;
                    if (particular_expo == null) {
                        particular_expo = ""
                    }

                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var reject_status = data[i].reject_status;
                    if (reject_status == null) {
                        reject_status = ""
                    }
                    var male_population = data[i].total_participants;
                    if (male_population == null) {
                        male_population = "";
                    }
                    else {
                        male_population = data[i].total_participants.toString();
                    }
                    var Li = '';
                    var Lia = '';
                    var filename = data[i].filename;
                    var filepath = data[i].filepath;
                    if (filename == null) {
                        filename = "";
                    }
                    else {
                        var fs = filename.split(',');
                        var fs_path = filepath.split(',');
                        if (fs.length != 0) {
                            var Z11 = 0;
                            for (var j = 0; j < fs.length; j++) {

                                if (fs[j] != "") {
                                    Z11 = Z11 + 1;
                                    var del = data[i].id + "," + j;
                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                    Lia += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a></li>';
                                }
                            }
                        }
                    }

                    var p_training_name = data[i].p_training_name;
                    if (email == "akash.verma@kreatetechnologies.com") {
                        if (male_population != "" && male_population != "0") {
                            if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                if (data[i].feedbackentry == "Yes") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }

                            }
                            else {
                                if (approve_status == "Approved") {
                                    ++at;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                }
                                else if (approve_status == "Submitted") {
                                    ++st;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                }
                                else if (approve_status == "Reject") {
                                    ++rt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                                else {
                                    ++pt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                            }
                        }
                        else {
                            if (approve_status == "Approved") {
                                ++at;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: green;">Approved</label></td></tr>';
                            }
                            else if (approve_status == "Submitted") {
                                ++st;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                            }
                            else if (approve_status == "Reject") {
                                ++rt;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="blcok' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }
                            else {
                                ++pt;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }
                        }
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    }
                    else {

                        if (StateOfficer == "District Level Nodal Officer") {
                            if (isWithinRange(new Date(to_date))) {
                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                    else {

                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                }
                                else {

                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);


                            }
                            else {

                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                    else {

                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                }
                                else {

                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);

                            }
                        }
                        else if (StateOfficer == "Gram Panchyat Nodal Officer") {
                            if (isWithinRange(new Date(to_date))) {

                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance</i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                    else {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"><i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"><i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                    else {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            if (male_population != "" && male_population != "0") {
                                if (data[i].feedbackentry == "Yes") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }

                                }
                                else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                            }
                            else {
                                if (approve_status == "Approved") {
                                    ++at;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: green;">Approved</label></td></tr>';
                                }
                                else if (approve_status == "Submitted") {
                                    ++st;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                }
                                else if (approve_status == "Reject") {
                                    ++rt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                                else {
                                    ++pt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                            }
                            $('#typ1' + i).val(data[i].type_of_event);
                            $('#event1' + i).val(data[i].event_platform);
                        }
                    }

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1').html(tr);
                $('#currentwaterlevelexepageno').text(PageNumber);
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1').html(tr);
                $('#currentwaterlevelexepageno').text(PageNumber);
                $('.loader').hide();
            }

        }
    });
}
function gp_data_next() {
    debugger;
    $(".loader").show();
    click_button = 0;
    PageNumber++;
    if (PageNumber == 1) {
        $('#btnpreexe').hide();
    }
    else {
        $('#btnpreexe').show();
    }
    if (totalexess == PageNumber || totalexess == 0) {
        $('#btnnextexe').hide();
    }
    else {
        $('#btnnextexe').show();
    }
    var spnstate_gram_1 = State;
    var dist11_gram_1 = Dist;
    var block1_gram_1 = Block;
    var gram1_gram_1 = Gram;
    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_gram',
        data: "{'spnstate_gram_1':'" + spnstate_gram_1 + "' , 'dist11_gram_1':'" + dist11_gram_1 + "' , 'block1_gram_1':'" + block1_gram_1 + "' , 'gram1_gram_1':'" + gram1_gram_1 + "' , 'year_gram':'" + year + "' , 'month_gram':'" + month + "','PageNumber':'" + PageNumber + "'}",
        dataType: 'JSON',
        success: function (data) {
            close_length = data.length;
            debugger;
            var tr = '';
            var at = 0;
            var st = 0;
            var rt = 0;
            var pt = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    sno += 1;
                    var district = data[i].district;
                    if (district == null) {
                        district = "";
                    }

                    var block = data[i].block;
                    if (block == null) {
                        block = ""
                    }
                    var from_date = data[i].from_date;
                    if (from_date == null) {
                        from_date = ""
                    }
                    var to_date = data[i].to_date;
                    if (to_date == null) {
                        to_date = ""
                    }
                    var location_expo = data[i].location_expo;
                    if (location_expo == null) {
                        location_expo = ""
                    }
                    var particular_expo = data[i].particular_expo;
                    if (particular_expo == null) {
                        particular_expo = ""
                    }

                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var reject_status = data[i].reject_status;
                    if (reject_status == null) {
                        reject_status = ""
                    }
                    var male_population = data[i].total_participants;
                    if (male_population == null) {
                        male_population = "";
                    }
                    else {
                        male_population = data[i].total_participants.toString();
                    }
                    var Li = '';
                    var Lia = '';
                    var filename = data[i].filename;
                    var filepath = data[i].filepath;
                    if (filename == null) {
                        filename = "";
                    }
                    else {
                        var fs = filename.split(',');
                        var fs_path = filepath.split(',');
                        if (fs.length != 0) {
                            var Z11 = 0;
                            for (var j = 0; j < fs.length; j++) {

                                if (fs[j] != "") {
                                    Z11 = Z11 + 1;
                                    var del = data[i].id + "," + j;
                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                    Lia += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a></li>';
                                }
                            }
                        }
                    }

                    var p_training_name = data[i].p_training_name;
                    if (email == "akash.verma@kreatetechnologies.com") {
                        if (male_population != "" && male_population != "0") {
                            if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                if (data[i].feedbackentry == "Yes") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }

                            }
                            else {
                                if (approve_status == "Approved") {
                                    ++at;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                }
                                else if (approve_status == "Submitted") {
                                    ++st;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                }
                                else if (approve_status == "Reject") {
                                    ++rt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                                else {
                                    ++pt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                            }
                        }
                        else {
                            if (approve_status == "Approved") {
                                ++at;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: green;">Approved</label></td></tr>';
                            }
                            else if (approve_status == "Submitted") {
                                ++st;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                            }
                            else if (approve_status == "Reject") {
                                ++rt;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="blcok' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }
                            else {
                                ++pt;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }
                        }
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    }
                    else {

                        if (StateOfficer == "District Level Nodal Officer") {
                            if (isWithinRange(new Date(to_date))) {
                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                    else {

                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                }
                                else {

                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);


                            }
                            else {

                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                    else {

                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                }
                                else {

                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);

                            }
                        }
                        else if (StateOfficer == "Gram Panchyat Nodal Officer") {
                            if (isWithinRange(new Date(to_date))) {

                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance</i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                    else {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"><i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"><i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                    else {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            if (male_population != "" && male_population != "0") {
                                if (data[i].feedbackentry == "Yes") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }

                                }
                                else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                            }
                            else {
                                if (approve_status == "Approved") {
                                    ++at;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: green;">Approved</label></td></tr>';
                                }
                                else if (approve_status == "Submitted") {
                                    ++st;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                }
                                else if (approve_status == "Reject") {
                                    ++rt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                                else {
                                    ++pt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                            }
                            $('#typ1' + i).val(data[i].type_of_event);
                            $('#event1' + i).val(data[i].event_platform);
                        }
                    }

                }
                count = i + 200;
                $('#Training_Workshop_New1').html(tr);
                $('#currentwaterlevelexepageno').text(PageNumber);
                $(".loader").hide();
            }
            else {
                tr = '<tr style="text-align:center;"><td colspan="15">No Data</td></tr>';
                $('#Training_Workshop_New1').html(tr);
                $(".loader").hide();
            }
        }
    });



}
function gp_data_pre() {
    debugger;
    $(".loader").show();
    click_button = 0;
    PageNumber--;
    if (PageNumber == 1) {
        $('#btnpreexe').hide();
    }
    else {
        $('#btnnextexe').show();
    }
    if (totalexess == PageNumber || totalexess == 0) {
        $('#btnnextexe').hide();
    }
    else {
        $('#btnnextexe').show();
    }
    var spnstate_gram_1 = State;
    var dist11_gram_1 = Dist;
    var block1_gram_1 = Block;
    var gram1_gram_1 = Gram;
    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_gram',
        data: "{'spnstate_gram_1':'" + spnstate_gram_1 + "' , 'dist11_gram_1':'" + dist11_gram_1 + "' , 'block1_gram_1':'" + block1_gram_1 + "' , 'gram1_gram_1':'" + gram1_gram_1 + "' , 'year_gram':'" + year + "' , 'month_gram':'" + month + "','PageNumber':'" + PageNumber + "'}",
        dataType: 'JSON',
        success: function (data) {
            debugger;
            close_length = data.length;
            if (PageNumber == 1) {
                sno = 0;
            } else {
                sno -= count;
                sno += click_button;
                click_button = 0;
            }
            var tr = '';
            var at = 0;
            var st = 0;
            var rt = 0;
            var pt = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    sno += 1;
                    var district = data[i].district;
                    if (district == null) {
                        district = "";
                    }

                    var block = data[i].block;
                    if (block == null) {
                        block = ""
                    }
                    var from_date = data[i].from_date;
                    if (from_date == null) {
                        from_date = ""
                    }
                    var to_date = data[i].to_date;
                    if (to_date == null) {
                        to_date = ""
                    }
                    var location_expo = data[i].location_expo;
                    if (location_expo == null) {
                        location_expo = ""
                    }
                    var particular_expo = data[i].particular_expo;
                    if (particular_expo == null) {
                        particular_expo = ""
                    }

                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var reject_status = data[i].reject_status;
                    if (reject_status == null) {
                        reject_status = ""
                    }
                    var male_population = data[i].total_participants;
                    if (male_population == null) {
                        male_population = "";
                    }
                    else {
                        male_population = data[i].total_participants.toString();
                    }
                    var Li = '';
                    var Lia = '';
                    var filename = data[i].filename;
                    var filepath = data[i].filepath;
                    if (filename == null) {
                        filename = "";
                    }
                    else {
                        var fs = filename.split(',');
                        var fs_path = filepath.split(',');
                        if (fs.length != 0) {
                            var Z11 = 0;
                            for (var j = 0; j < fs.length; j++) {

                                if (fs[j] != "") {
                                    Z11 = Z11 + 1;
                                    var del = data[i].id + "," + j;
                                    Li += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a><button onclick="file_delete(' + del + ')">Delete</button></li>';
                                    Lia += '<li><a href="' + fs_path[j] + '"target="_blank" download="">' + Z11 + '.' + fs[j] + '</a></li>';
                                }
                            }
                        }
                    }

                    var p_training_name = data[i].p_training_name;
                    if (email == "akash.verma@kreatetechnologies.com") {
                        if (male_population != "" && male_population != "0") {
                            if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                if (data[i].feedbackentry == "Yes") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }

                            }
                            else {
                                if (approve_status == "Approved") {
                                    ++at;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                }
                                else if (approve_status == "Submitted") {
                                    ++st;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                }
                                else if (approve_status == "Reject") {
                                    ++rt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                                else {
                                    ++pt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                            }
                        }
                        else {
                            if (approve_status == "Approved") {
                                ++at;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: green;">Approved</label></td></tr>';
                            }
                            else if (approve_status == "Submitted") {
                                ++st;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                            }
                            else if (approve_status == "Reject") {
                                ++rt;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="blcok' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }
                            else {
                                ++pt;
                                tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                    '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                    '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                    '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                            }
                        }
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    }
                    else {

                        if (StateOfficer == "District Level Nodal Officer") {
                            if (isWithinRange(new Date(to_date))) {
                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                    else {

                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                }
                                else {

                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary " type="button" onclick="npmuapprove(' + data[i].id + ')">Approve</button></td><td><button class="btn btn-danger" type="button" onclick="dist_newrejtogpdp(' + data[i].id + ',' + i + ')">Reject</button></td><td><textarea id="remarks_status_dist' + i + '"  class=" form-control" rows="" style="width:180px;" cols="40" placeholder="Remarks"  name="push_title"></textarea></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);


                            }
                            else {

                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                    else {

                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                        }
                                    }
                                }
                                else {

                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td></tr>';
                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">At GramPanchayat</label></td></tr>';
                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);

                            }
                        }
                        else if (StateOfficer == "Gram Panchyat Nodal Officer") {
                            if (isWithinRange(new Date(to_date))) {

                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="npmusubmit(' + data[i].id + ')">Submit</button></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">Edit/View attendance</i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_feed" onclick="getunickey_feed(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                    else {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"><i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')"><i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload" onclick="getunickey(' + data[i].id + ')"> <i class="fa fa-upload"></i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                if (male_population != "" && male_population != "0") {
                                    if (data[i].feedbackentry == "Yes") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }

                                    }
                                    else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                    else {
                                        if (approve_status == "Approved") {
                                            ++at;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                        }
                                        else if (approve_status == "Submitted") {
                                            ++st;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                        }
                                        else if (approve_status == "Reject") {
                                            ++rt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                        else {
                                            ++pt;
                                            tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                                '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                                '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                                '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                                '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                                '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                                '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                                '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                                '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td></td>' +
                                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                        }
                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            if (male_population != "" && male_population != "0") {
                                if (data[i].feedbackentry == "Yes") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_view_feed" onclick="getunickey_viewfeed(' + data[i].id + ')"> View Feedback</i></button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }

                                }
                                else if (data[i].nameofparticipent != null && data[i].nameofparticipent != "") {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">View attendance </i></button></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_upload_atted" onclick="getunickey_att(' + data[i].id + ')">view attendance</i></button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                                else {
                                    if (approve_status == "Approved") {
                                        ++at;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: green;">Approved</label></td></tr>';
                                    }
                                    else if (approve_status == "Submitted") {
                                        ++st;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">View Data</button></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                    }
                                    else if (approve_status == "Reject") {
                                        ++rt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                    else {
                                        ++pt;
                                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><button class="btn btn-primary" data-toggle="modal"  data-target="#myModal_viewdata" onclick="abhy_Curr_Training_Info_Search_viewdata(' + data[i].id + ')">Edit/View Data</button></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td>' +
                                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                            '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                    }
                                }
                            }
                            else {
                                if (approve_status == "Approved") {
                                    ++at;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: green;">Approved</label></td></tr>';
                                }
                                else if (approve_status == "Submitted") {
                                    ++st;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td></td><td></td> <td></td><td><label style="color: blue;">Submitted</label></td><td></td><td></td></tr>';
                                }
                                else if (approve_status == "Reject") {
                                    ++rt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td><td><label style="color: red;">Rejected</label></td><td><label>' + reject_status + '</label></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                                else {
                                    ++pt;
                                    tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (sno) + '</td><td><a href="#" data-toggle="modal" onclick="find_exi_data(' + data[i].id + ')"   data-target="#myModal">' + p_training_name + '</a></td><td>' + data[i].type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + from_date + '</td> <td>' + to_date + '</td><td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td></td>' +
                                        '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td></td>' +

                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                        '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="' + data[i].type_of_event + '">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                                        '<td> <input type="text" onkeypress="return /[a-zA-Z0-9\s ]/i.test(event.key)" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +
                                        '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="dist' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="block' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="gp' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +
                                        '<td><select class="form-control" id="event_platform1' + i + '"> <option value="' + data[i].event_platform + '">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +
                                        '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + from_date + '" /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + to_date + '" /></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';


                                }
                            }
                            $('#typ1' + i).val(data[i].type_of_event);
                            $('#event1' + i).val(data[i].event_platform);
                        }
                    }

                }
                count = i + 200;
                $('#Training_Workshop_New1').html(tr);
                $('#currentwaterlevelexepageno').text(PageNumber);
                $(".loader").hide();

            }
            else {
                tr = '<tr style="text-align:center;"><td colspan="15">No Data</td></tr>';
                $('#Training_Workshop_New1').html(tr);
                $(".loader").hide();
            }
        }
    });



}
function abhy_Curr_Training_Info_Search_viewdata(id) {

    $('.loader').show();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_gram_new',
        data: "{'id':'" + id + "' }",
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            var h = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var to_date = data[i].to_date;
                    if (to_date == null) {
                        to_date = ""
                    }
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var reject_status = data[i].reject_status;
                    if (reject_status == null) {
                        reject_status = ""
                    }
                    var male_population = data[i].male_population;
                    if (male_population == null) {
                        male_population = "";
                    }
                    else {
                        male_population = data[i].male_population.toString();
                    }
                    var village_name = data[i].village_name;
                    if (village_name == null) {
                        village_name = ""
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

                    if (email == "akash.verma@kreatetechnologies.com") {
                        if (approve_status == "Approved") {
                            tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                        }
                        else if (approve_status == "Submitted") {
                            tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                        }
                        else if (approve_status == "Reject") {
                            tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><button type="button" class="btn btn-primary" onclick="editrowcomp_A_Good2_newtm(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button type="button" class="btn btn-danger" onclick="Delete_Curr_Evt_new(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_regtm' + i + '" style="display:none;"><td></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + village_name + '" readonly /></td>' +
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
                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Trtm(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        }
                        else {
                            tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><button type="button" class="btn btn-primary" onclick="editrowcomp_A_Good2_newtm(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button type="button" class="btn btn-danger" onclick="Delete_Curr_Evt_new(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_regtm' + i + '" style="display:none;"><td></td>' +
                                '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + village_name + '" readonly /></td>' +
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
                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Trtm(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        }
                    }
                    else if (StateOfficer == "Gram Panchyat Nodal Officer") {
                        if (isWithinRange(new Date(to_date))) {

                            if (approve_status == "Approved") {
                                tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                            }
                            else if (approve_status == "Submitted") {
                                tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                            }
                            else if (approve_status == "Reject") {
                                tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><button type="button" class="btn btn-primary" onclick="editrowcomp_A_Good2_newtm(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button type="button" class="btn btn-danger" onclick="Delete_Curr_Evt_new(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_regtm' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + village_name + '" readonly /></td>' +
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
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Trtm(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><button type="button" class="btn btn-primary" onclick="editrowcomp_A_Good2_newtm(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button type="button" class="btn btn-danger" onclick="Delete_Curr_Evt_new(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_regtm' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="male_G' + i + '" value="' + village_name + '" readonly /></td>' +
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
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_Reg_Gp_Tr(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_Reg_Gp_Trtm(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                        }
                        else {
                            tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                        }
                    }
                    else {
                        tr += '<tr id="AWP1_TR_Meeting_newtm' + i + '" style="text-align:center"><td>' + (++h) + '</td><td>' + village_name + '</td><td>' + data[i].male_population + '</td> <td>' + data[i].female_population + '</td>  <td>' + data[i].other_population + '</td> <td>' + data[i].total_participants + '</td> <td>' + data[i].SC + '</td> <td>' + data[i].ST + '</td><td>' + data[i].OBC + '</td><td>' + data[i].General + '</td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].photograph + '">' + photo + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].feedback + '">' + feed + '</a></td> <td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].event_upload + '">' + event_upload_filename + '</a></td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#tbl_details_add').html(tr);

                $('.loader').hide();
            }
            else {
                $('#tbl_details_add').html(tr);
                $('.loader').hide();
            }

        }
    });
}
function editrowcomp_A_Good2_newtm(i) {

    $('#AWP1_TR_Meeting_newtm' + i).hide();
    $('#hide_AWP1_TR_Meeting_regtm' + i).show();
}
function cancelcomp_A_Support_Reg_Gp_Trtm(i) {
    $('#AWP1_TR_Meeting_newtm' + i).show();
    $('#hide_AWP1_TR_Meeting_regtm' + i).hide();
}
function Update_AWP1_Reg_Gp_Tr(id, RowNo) {


    var id = id;
    var attenUpload = $("#atten_G" + RowNo).get(0);
    var attenUpload_files = attenUpload.files;
    var photoUpload = $("#photo_G" + RowNo).get(0);
    var photoUpload_files = photoUpload.files;
    var feedUpload = $("#feed_G" + RowNo).get(0);
    var feedUpload_files = feedUpload.files;
    var upload_eea = $("#upload_ee" + RowNo).get(0);
    var upload_ee = upload_eea.files;
    if (attenUpload.length == 0) {
        x = 1;
        alert("Upload attendance sheet of the participant");
        return;
    }
    else if (photoUpload.length == 0) {
        x = 1;
        alert("Upload Photograph of the training");
        return;
    }
    else if (feedUpload.length == 0) {
        x = 1;
        alert("Upload Feedback from Participants");
        return;
    }
    else if (upload_eea.length == 0) {
        x = 1;
        alert("Upload Training Material");
        return;
    }

    const oFile = document.getElementById("atten_G" + RowNo).files[0];
    if (oFile != undefined) {
        if (oFile.size > 2097152) // 10 MiB for bytes.
        {
            alert("Attendance sheet of the participant File size must be less than 2 MB");
            return;
        }
    }
    const oFilephoto = document.getElementById("photo_G" + RowNo).files[0];
    if (oFilephoto != undefined) {
        if (oFilephoto.size > 2097152) // 10 MiB for bytes.
        {
            alert("Photograph of the training File size must be less than 2 MB");
            return;
        }
    }
    const oFilemom = document.getElementById("feed_G" + RowNo).files[0];
    if (oFilemom != undefined) {
        if (oFilemom.size > 2097152) // 10 MiB for bytes.
        {
            alert("Feedback from Participants File size must be less than 2 MB");
            return;
        }
    }
    const oFileeu = document.getElementById("upload_ee" + RowNo).files[0];
    if (oFileeu != undefined) {
        if (oFileeu.size > 2097152) // 10 MiB for bytes.
        {
            alert("Training Material File size must be less than 2 MB");
            return;
        }
    }

    var formData = new FormData();
    formData.append("id", id);
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
            if (response == "Updated Successfully") {
                abhy_Curr_Training_Info_Search_viewdata(id);
            }
        },
        error: function () {
            alert('Update Failed');
        }
    });
}
function Delete_Curr_Evt_new(id) {

    var id = id;

    var formData = new FormData();
    formData.append("id", id);

    $.ajax({
        url: '/MasterDropDown/delete_Reg_Gp_Tr_new',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            if (response == "Delete Successfully") {
                autoclick_new();
            }
            $('.loader').hide();
        },
        error: function () {
            alert('Update Failed');
        }
    });
}
function autoclick_new() {
    if (PageNumber == 1) {
        sno = 0;
    } else {
        sno -= close_length;
    }
    $("#bttnclose").click();
    abhy_Curr_Training_Info_Search_4();

}
var unic_key = "";
function getunickey(ss) {
    $("#location").val("");
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
    $("#event_upload").val("");
    unic_key = "";
    unic_key = ss;
    Images_Li = '';
    II = 0;
    $('#filename').val("");
    $('#File_uploads_Images').html('');
}

var unic_keyatted = "";
function getunickey_att(ss) {

    unic_keyatted = "";
    unic_keyatted = ss;
    $('.loader').show();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_gram_new_new',
        data: "{'id':'" + ss + "' }",
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/Home/LogOut";

            }
            var tr = '';
            var h = 0;

            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var district = data[i].district;
                    if (district == null) {
                        district = "";
                    }

                    var block = data[i].block;
                    if (block == null) {
                        block = ""
                    }
                    var from_date = data[i].from_date;
                    if (from_date == null) {
                        from_date = ""
                    }
                    var to_date = data[i].to_date;
                    if (to_date == null) {
                        to_date = ""
                    }
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var reject_status = data[i].reject_status;
                    if (reject_status == null) {
                        reject_status = ""
                    }
                    var male_population = data[i].male_population;
                    if (male_population == null) {
                        male_population = "";
                    }
                    else {
                        male_population = data[i].male_population.toString();
                    }
                    var atten = "";
                    if (data[i].atten_sheet_filename != null) {
                        atten = data[i].atten_sheet_filename;
                    }

                    var p_training_name = data[i].p_training_name;
                    if (email == "akash.verma@kreatetechnologies.com") {
                        if (data[i].nameofparticipent == null || data[i].nameofparticipent == "") {
                            tr += '<tr id="AWP1_TR_Meetingaaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> <input type="text" onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" /></td><td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"><option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td><td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td><td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10"/></td><td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td></tr>';
                        }
                        else {
                            if (data[i].from_table == "main") {
                                tr += '<tr id="AWP1_TR_Meetingaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Traa(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt_add(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary" onclick="add_new( ' + i + ')"><i class="fa fa-plus"></i></button></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +
                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + data[i].nameofparticipent + '" /></td>' +
                                    '<td><select style="width:150px;" class="form-control" id="gender_GN_N' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                    '<td><select style="width:150px;" class="form-control" id="category_GN_N' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="updaeaa(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';


                                tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                    '<td>' + data[i].level_event + ' </td>' +
                                    '<td>' + data[i].district + ' </td>' +
                                    '<td>' + data[i].block + ' </td>' +
                                    '<td>' + data[i].gp + ' </td>' +
                                    '<td>' + data[i].year + ' </td>' +
                                    '<td>' + data[i].month + ' </td>' +
                                    '<td>' + data[i].from_date + ' </td>' +
                                    '<td>' + data[i].to_date + ' </td>' +
                                    '<td> </td>' +
                                    '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_Naad' + i + '"  /></td>' +
                                    '<td><select class="form-control" style="width:150px;" id="gender_GN_Naad' + i + '"><option value="0"> Select Gender </option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +
                                    '<td><select class="form-control" style="width:150px;" id="category_GN_Naad' + i + '"> <option value="0"> Select Category </option><option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_Naad' + i + '" maxlength="10"  /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Save_newaddnew(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';
                            }
                            else if (data[i].from_table == "addnew") {
                                tr += '<tr id="AWP1_TR_Meetingaaadd' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Traaadd(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt_addnew(' + data[i].addnewid + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                tr += '<tr id="hide_AWP1_TR_Meeting_regadd' + i + '" style="display:none;"><td></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                    '<td> </td>' +
                                    '<td> <input type="text"  onpaste="return false;" id="name_GN_Nadd' + i + '" style="width:150px;" class="form-control"  value="' + data[i].nameofparticipent + '" /></td>' +
                                    '<td><select style="width:150px;" class="form-control" id="gender_GN_Nadd' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                    '<td><select style="width:150px;" class="form-control" id="category_GN_Nadd' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                    '<td> <input type="text"  onpaste="return false;" id="mobile_GN_Nadd' + i + '" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)"  maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="updaeaaadd(' + data[i].addnewid + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tradd(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';



                            }
                        }



                    }
                    else {


                        /*if (StateOfficer == "Gram Panchyat Nodal Officer") {*/
                        if (isWithinRange(new Date(to_date))) {
                            if (approve_status == "Approved") {
                                if (data[i].from_table == "main") {
                                    tr += '<tr id="AWP1_TR_Meetingaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td></tr>';
                                }
                                else if (data[i].from_table == "addnew") {
                                    tr += '<tr id="AWP1_TR_Meetingaaadd' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                                }
                            }
                            else if (approve_status == "Submitted") {
                                if (data[i].from_table == "main") {
                                    tr += '<tr id="AWP1_TR_Meetingaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td></tr>';
                                }
                                else if (data[i].from_table == "addnew") {
                                    tr += '<tr id="AWP1_TR_Meetingaaadd' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                                }
                            }
                            else if (approve_status == "Reject") {
                                if (data[i].nameofparticipent == null || data[i].nameofparticipent == "") {
                                    tr += '<tr id="AWP1_TR_Meetingaaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> <input type="text" onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" /></td><td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"><option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td><td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td><td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10"/></td><td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td></tr>';
                                }
                                else {
                                    if (data[i].from_table == "main") {
                                        tr += '<tr id="AWP1_TR_Meetingaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Traa(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt_add(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary" onclick="add_new( ' + i + ')"><i class="fa fa-plus"></i></button></td></tr>';
                                        tr += '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                            '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                            '<td> </td>' +
                                            '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + data[i].nameofparticipent + '" /></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="gender_GN_N' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="category_GN_N' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="updaeaa(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';


                                        tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                            '<td>' + data[i].level_event + ' </td>' +
                                            '<td>' + data[i].district + ' </td>' +
                                            '<td>' + data[i].block + ' </td>' +
                                            '<td>' + data[i].gp + ' </td>' +
                                            '<td>' + data[i].year + ' </td>' +
                                            '<td>' + data[i].month + ' </td>' +
                                            '<td>' + data[i].from_date + ' </td>' +
                                            '<td>' + data[i].to_date + ' </td>' +
                                            '<td> </td>' +
                                            '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_Naad' + i + '"  /></td>' +
                                            '<td><select class="form-control" style="width:150px;" id="gender_GN_Naad' + i + '"><option value="0"> Select Gender </option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +
                                            '<td><select class="form-control" style="width:150px;" id="category_GN_Naad' + i + '"> <option value="0"> Select Category </option><option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_Naad' + i + '" maxlength="10"  /></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Save_newaddnew(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';
                                    }
                                    else if (data[i].from_table == "addnew") {
                                        tr += '<tr id="AWP1_TR_Meetingaaadd' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Traaadd(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt_addnew(' + data[i].addnewid + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                        tr += '<tr id="hide_AWP1_TR_Meeting_regadd' + i + '" style="display:none;"><td></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                            '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                            '<td> </td>' +
                                            '<td> <input type="text"  onpaste="return false;" id="name_GN_Nadd' + i + '" style="width:150px;" class="form-control"  value="' + data[i].nameofparticipent + '" /></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="gender_GN_Nadd' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="category_GN_Nadd' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                            '<td> <input type="text"  onpaste="return false;" id="mobile_GN_Nadd' + i + '" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)"  maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="updaeaaadd(' + data[i].addnewid + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tradd(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';



                                    }
                                }

                            }
                            else {
                                if (data[i].nameofparticipent == null || data[i].nameofparticipent == "") {
                                    tr += '<tr id="AWP1_TR_Meetingaaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> <input type="text" onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" /></td><td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"><option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td><td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td><td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10"/></td><td> <button type="button" class="btn btn-primary" onclick="Save_new(' + i + ')">Save</button></td></tr>';
                                }
                                else {
                                    if (data[i].from_table == "main") {
                                        tr += '<tr id="AWP1_TR_Meetingaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Traa(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt_add(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary" onclick="add_new( ' + i + ')"><i class="fa fa-plus"></i></button></td></tr>';
                                        tr += '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                            '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                            '<td> </td>' +
                                            '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + data[i].nameofparticipent + '" /></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="gender_GN_N' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="category_GN_N' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="updaeaa(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';


                                        tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                            '<td>' + data[i].level_event + ' </td>' +
                                            '<td>' + data[i].district + ' </td>' +
                                            '<td>' + data[i].block + ' </td>' +
                                            '<td>' + data[i].gp + ' </td>' +
                                            '<td>' + data[i].year + ' </td>' +
                                            '<td>' + data[i].month + ' </td>' +
                                            '<td>' + data[i].from_date + ' </td>' +
                                            '<td>' + data[i].to_date + ' </td>' +
                                            '<td> </td>' +
                                            '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_Naad' + i + '"  /></td>' +
                                            '<td><select class="form-control" style="width:150px;" id="gender_GN_Naad' + i + '"><option value="0"> Select Gender </option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +
                                            '<td><select class="form-control" style="width:150px;" id="category_GN_Naad' + i + '"> <option value="0"> Select Category </option><option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_Naad' + i + '" maxlength="10"  /></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="Save_newaddnew(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';
                                    }
                                    else if (data[i].from_table == "addnew") {
                                        tr += '<tr id="AWP1_TR_Meetingaaadd' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_Reg_Gp_Traaadd(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt_addnew(' + data[i].addnewid + ')"><i class="fa fa-trash"></i></button></td></tr>';
                                        tr += '<tr id="hide_AWP1_TR_Meeting_regadd' + i + '" style="display:none;"><td></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                            '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                            '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                            '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                            '<td> </td>' +
                                            '<td> <input type="text"  onpaste="return false;" id="name_GN_Nadd' + i + '" style="width:150px;" class="form-control"  value="' + data[i].nameofparticipent + '" /></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="gender_GN_Nadd' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                            '<td><select style="width:150px;" class="form-control" id="category_GN_Nadd' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                            '<td> <input type="text"  onpaste="return false;" id="mobile_GN_Nadd' + i + '" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)"  maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                            '<td> <button type="button" class="btn btn-primary" onclick="updaeaaadd(' + data[i].addnewid + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tradd(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';



                                    }
                                }
                            }
                        }
                        else {
                            if (data[i].nameofparticipent == null || data[i].nameofparticipent == "") {
                                tr += '<tr id="AWP1_TR_Meetingaaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> <input type="text" onpaste="return false;" style="width:150px;" class="form-control" id="name_GN' + i + '" /></td><td><select class="form-control" style="width:150px;" id="gender_GN' + i + '"><option value="0">Select Gender</option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td><td><select class="form-control" style="width:150px;" id="category_GN' + i + '"> <option value="0">Select Category</option> <option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td><td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN' + i + '" maxlength="10"/></td><td></td></tr>';
                            }
                            else {
                                if (data[i].from_table == "main") {
                                    tr += '<tr id="AWP1_TR_Meetingaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td></td> <td></td><td></td></tr>';
                                    tr += '<tr id="hide_AWP1_TR_Meeting_reg' + i + '" style="display:none;"><td></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                        '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                        '<td> </td>' +
                                        '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_N' + i + '" value="' + data[i].nameofparticipent + '" /></td>' +
                                        '<td><select style="width:150px;" class="form-control" id="gender_GN_N' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                        '<td><select style="width:150px;" class="form-control" id="category_GN_N' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_N' + i + '" maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="updaeaa(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';


                                    tr += '<tr id="hide_AWP1_TR_Meeting_reg_new_a' + i + '" style="display:none;"><td></td>' +
                                        '<td>' + data[i].level_event + ' </td>' +
                                        '<td>' + data[i].district + ' </td>' +
                                        '<td>' + data[i].block + ' </td>' +
                                        '<td>' + data[i].gp + ' </td>' +
                                        '<td>' + data[i].year + ' </td>' +
                                        '<td>' + data[i].month + ' </td>' +
                                        '<td>' + data[i].from_date + ' </td>' +
                                        '<td>' + data[i].to_date + ' </td>' +
                                        '<td> </td>' +
                                        '<td> <input type="text"  onpaste="return false;" style="width:150px;" class="form-control" id="name_GN_Naad' + i + '"  /></td>' +
                                        '<td><select class="form-control" style="width:150px;" id="gender_GN_Naad' + i + '"><option value="0"> Select Gender </option> <option value="Male"> Male </option> <option value="Female"> Female </option> <option value="Transgender"> Transgender </option> </select></td>' +
                                        '<td><select class="form-control" style="width:150px;" id="category_GN_Naad' + i + '"> <option value="0"> Select Category </option><option value="SC"> SC </option> <option value="ST"> ST </option> <option value="OBC"> OBC </option> <option value="General"> General </option><option value="Not Disclosed"> Not Disclosed </option> </select></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)" id="mobile_GN_Naad' + i + '" maxlength="10"  /></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="Save_newaddnew(' + i + ')">Save</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tr_new(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';
                                }
                                else if (data[i].from_table == "addnew") {
                                    tr += '<tr id="AWP1_TR_Meetingaaadd' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td></td> <td></td></tr>';
                                    tr += '<tr id="hide_AWP1_TR_Meeting_regadd' + i + '" style="display:none;"><td></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="state1_GN_N' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="district1_GN_N' + i + '" value="' + data[i].district + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="block1_GN_N' + i + '" value="' + data[i].block + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="gram1_GN_N' + i + '" value="' + data[i].gp + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="year1_GN_N' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                        '<td> <input type="text"  onpaste="return false;" class="form-control" id="month1_GN_N' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                        '<td> <input type="date" class="form-control" id="fdate1_GN_N' + i + '" value="' + data[i].from_date + '" readonly /></td>' +
                                        '<td> <input type="date" class="form-control" id="tdate1_GN_N' + i + '" value="' + data[i].to_date + '" readonly /></td>' +
                                        '<td> </td>' +
                                        '<td> <input type="text"  onpaste="return false;" id="name_GN_Nadd' + i + '" style="width:150px;" class="form-control"  value="' + data[i].nameofparticipent + '" /></td>' +
                                        '<td><select style="width:150px;" class="form-control" id="gender_GN_Nadd' + i + '" value="' + data[i].gendernew + '"><option value="Male" ' + (data[i].gendernew === 'Male' ? ' selected' : '') + '>Male</option><option value="Female" ' + (data[i].gendernew === 'Female' ? ' selected' : '') + '>Female</option><option value="Transgender" ' + (data[i].gendernew === 'Transgender' ? ' selected' : '') + '>Transgender</option></select></td>' +
                                        '<td><select style="width:150px;" class="form-control" id="category_GN_Nadd' + i + '" value="' + data[i].categorynew + '"><option value="SC" ' + (data[i].categorynew === 'SC' ? ' selected' : '') + '>SC</option><option value="ST" ' + (data[i].categorynew === 'ST' ? ' selected' : '') + '>ST</option><option value="OBC" ' + (data[i].categorynew === 'OBC' ? ' selected' : '') + '>OBC</option><option value="General" ' + (data[i].categorynew === 'General' ? ' selected' : '') + '>General</option><option value="Not Disclosed" ' + (data[i].categorynew === 'Not Disclosed' ? ' selected' : '') + '>Not Disclosed</option></select></td>' +
                                        '<td> <input type="text"  onpaste="return false;" id="mobile_GN_Nadd' + i + '" class="form-control" style="width:150px;" onkeypress="return /[0-9]/i.test(event.key)"  maxlength="10" value="' + data[i].mobilenonew + '" /></td>' +
                                        '<td> <button type="button" class="btn btn-primary" onclick="updaeaaadd(' + data[i].addnewid + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_Reg_Gp_Tradd(' + i + '); "><i class="fa fa-remove"</button>' + '</td></tr>';



                                }
                            }
                        }
                        //}
                        //else {
                        //    if (data[i].from_table == "main") {
                        //        tr += '<tr id="AWP1_TR_Meetingaa' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td><td><label style="color: black;">Not Applicable</label></td></tr>';
                        //    }
                        //    else if (data[i].from_table == "addnew") {
                        //        tr += '<tr id="AWP1_TR_Meetingaaadd' + i + '" style="text-align:center"><td>' + (++h) + '</td> <td>' + data[i].level_event + '</td><td>' + data[i].district + '</td><td>' + data[i].block + '</td><td>' + data[i].gp + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td><td>' + from_date + '</td> <td>' + to_date + '</td><td><a href="/MasterDropDown/ViewFile?FileName=' + data[i].atten_sheet + '">' + atten + '</a></td> <td> ' + data[i].nameofparticipent + '</td><td>' + data[i].gendernew + '</td><td>' + data[i].categorynew + '</td><td> ' + data[i].mobilenonew + '</td><td><label style="color: black;">Not Applicable</label></td> <td><label style="color: black;">Not Applicable</label></td></tr>';
                        //    }
                        //}

                    }


                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#tbl_details_attd').html(tr);

                $('.loader').hide();
            }
            else {
                $('#tbl_details_attd').html(tr);
                $('.loader').hide();
            }

        }
    });
}
function editrowcomp_A_Good2_Reg_Gp_Traa(i) {

    $('#AWP1_TR_Meetingaa' + i).hide();
    $('#hide_AWP1_TR_Meeting_reg' + i).show();
    $('#hide_AWP1_TR_Meeting_reg_new_a' + i).hide();

}
function cancelcomp_A_Support_Reg_Gp_Tr(i) {

    $('#AWP1_TR_Meetingaa' + i).show();
    $('#hide_AWP1_TR_Meeting_reg' + i).hide();

}
function add_new(i) {

    $('#hide_AWP1_TR_Meeting_reg_new_a' + i).show();

}
function cancelcomp_A_Support_Reg_Gp_Tr_new(i) {

    $('#name_GN_Naad' + i).val("");
    $('#gender_GN_Naad' + i).val("0");
    $('#category_GN_Naad' + i).val("0");
    $('#mobile_GN_Naad' + i).val("");
    $('#hide_AWP1_TR_Meeting_reg_new_a' + i).hide();

}
function editrowcomp_A_Good2_Reg_Gp_Traaadd(i) {

    $('#AWP1_TR_Meetingaaadd' + i).hide();
    $('#hide_AWP1_TR_Meeting_regadd' + i).show();

}
function cancelcomp_A_Support_Reg_Gp_Tradd(i) {

    $('#AWP1_TR_Meetingaaadd' + i).show();
    $('#hide_AWP1_TR_Meeting_regadd' + i).hide();

}

function Save_new(RowNo) {
    var x = 0;

    var name1 = $('#name_GN' + RowNo).val();
    var gender1 = $('#gender_GN' + RowNo).val();
    var category1 = $('#category_GN' + RowNo).val();
    var mobile1 = $('#mobile_GN' + RowNo).val();

    if (name1 == "") {
        x = 1;
        alert("Enter participant name");
        return;
    }
    else if (gender1 == "0") {
        x = 1;
        alert("Select Gender");
        return;
    }
    else if (category1 == "0") {
        x = 1;
        alert("Select Category");
        return;
    }
    else if (mobile1 == "") {
        x = 1;
        alert("Enter Mobile no.");
        return;
    }
    else if (mobile1.length < 10) {
        x = 1;
        alert('Mobile number must be at least 10 digits long.');
        return;
    }
    var formData = new FormData();
    formData.append('old_id', unic_keyatted);
    formData.append('name', name1);
    formData.append('gender', gender1);
    formData.append('category', category1);
    formData.append('mobile', mobile1);

    $.ajax({
        url: '/MasterDropDown/gpupdateadd',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            else if (response == "Save Successfully") {
                var ss = unic_keyatted;
                getunickey_att(ss);
            }

        },
        error: function () {
            alert('Data not Saved');
        }
    });
}
function Save_newaddnew(RowNo) {

    var x = 0;
    var name1 = $('#name_GN_Naad' + RowNo).val();
    var gender1 = $('#gender_GN_Naad' + RowNo).val();
    var category1 = $('#category_GN_Naad' + RowNo).val();
    var mobile1 = $('#mobile_GN_Naad' + RowNo).val();

    if (name1 == "") {
        x = 1;
        alert("Enter participant name");
        return;
    }
    else if (gender1 == "0") {
        x = 1;
        alert("Select Gender");
        return;
    }
    else if (category1 == "0") {
        x = 1;
        alert("Select Category");
        return;
    }
    else if (mobile1 == "") {
        x = 1;
        alert("Enter Mobile no.");
        return;
    }
    else if (mobile1.length < 10) {
        x = 1;
        alert('Mobile number must be at least 10 digits long.');
        return;
    }
    var formData = new FormData();
    formData.append('old_id', unic_keyatted);
    formData.append('name', name1);
    formData.append('gender', gender1);
    formData.append('category', category1);
    formData.append('mobile', mobile1);

    $.ajax({
        url: '/MasterDropDown/gpaddnew',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            else if (response == "Save Successfully") {
                var ss = unic_keyatted;
                getunickey_att(ss);
            }

        },
        error: function () {
            alert('Data not Saved');
        }
    });
}
function updaeaa(id, RowNo) {
    debugger
    var x = 0;

    var name1 = $('#name_GN_N' + RowNo).val();
    var gender1 = $('#gender_GN_N' + RowNo).val();
    var category1 = $('#category_GN_N' + RowNo).val();
    var mobile1 = $('#mobile_GN_N' + RowNo).val();

    if (name1 == "") {
        x = 1;
        alert("Enter participant name");
        return;
    }
    else if (gender1 == "0") {
        x = 1;
        alert("Select Gender");
        return;
    }
    else if (category1 == "0") {
        x = 1;
        alert("Select Category");
        return;
    }
    else if (mobile1 == "") {
        x = 1;
        alert("Enter Mobile no.");
        return;
    }
    else if (mobile1.length < 10) {
        x = 1;
        alert('Mobile number must be at least 10 digits long.');
        return;
    }
    var formData = new FormData();
    formData.append('old_id', id);
    formData.append('name', name1);
    formData.append('gender', gender1);
    formData.append('category', category1);
    formData.append('mobile', mobile1);

    $.ajax({
        url: '/MasterDropDown/gpupdateupdate',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            else if (response == "Update Successfully") {
                var ss = id;
                getunickey_att(ss);
            }

        },
        error: function () {
            alert('Not Update');
        }
    });
}
function updaeaaadd(id, RowNo) {
    debugger
    var x = 0;

    var name1 = $('#name_GN_Nadd' + RowNo).val();
    var gender1 = $('#gender_GN_Nadd' + RowNo).val();
    var category1 = $('#category_GN_Nadd' + RowNo).val();
    var mobile1 = $('#mobile_GN_Nadd' + RowNo).val();

    if (name1 == "") {
        x = 1;
        alert("Enter participant name");
        return;
    }
    else if (gender1 == "0") {
        x = 1;
        alert("Select Gender");
        return;
    }
    else if (category1 == "0") {
        x = 1;
        alert("Select Category");
        return;
    }
    else if (mobile1 == "") {
        x = 1;
        alert("Enter Mobile no.");
        return;
    }
    else if (mobile1.length < 10) {
        x = 1;
        alert('Mobile number must be at least 10 digits long.');
        return;
    }
    var formData = new FormData();
    formData.append('old_id', id);
    formData.append('name', name1);
    formData.append('gender', gender1);
    formData.append('category', category1);
    formData.append('mobile', mobile1);

    $.ajax({
        url: '/MasterDropDown/gpupdateupdateadd',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            else if (response == "Update Successfully") {
                var ss = unic_keyatted;
                getunickey_att(ss);
            }

        },
        error: function () {
            alert('Not Update');
        }
    });
}
function Delete_Curr_Evt_add(Id) {
    if (confirm("Do You want to delete")) {
        var obj = {};
        obj.addnewid = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/gpupdatedelete',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {

                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                if (response == "Delete Successfully") {
                    var ss = unic_keyatted;
                    getunickey_att(ss);
                }
            }
        });
    }
}
function Delete_Curr_Evt_addnew(Id) {
    if (confirm("Do You want to delete")) {
        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/Delete_gpaddnew',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                var ss = unic_keyatted;
                getunickey_att(ss);
            }
        });
    }
}
function Delete_Curr_Evt_feed(Id) {
    if (confirm("Do You want to delete")) {
        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/Delete_gpaddnew_feed',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);

                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                if (response == "Deleted Successfully") {
                    $('#bttnclosefeed').click(function () {
                        $('#myModal_view_feed').modal.hide();
                    });
                }
                var ss = unic_keyatted;
                getunickey_att(ss);
            }
        });
    }
}

function find_exi_data(id) {

    $('.loader').show();
    idd = id;
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/Gram_pop',
        data: "{'id':'" + idd + "'}",
        dataType: 'JSON',
        success: function (data) {
            var event_approve_status = data.event_approve_status;
            if (event_approve_status == null || event_approve_status == "") {
                $("#eventapprove").css("color", "blue");
                $("#currentapprove").css("color", "blue");
                event_approve_status = "Pending for Submission";
            }
            if (event_approve_status == "Approved") {
                $("#eventapprove").css("color", "#3c763d");
                $("#currentapprove").css("color", "#3c763d");
                event_approve_status = "Approved";
            }
            if (event_approve_status == "Reject") {
                $("#eventapprove").css("color", "red");
                $("#currentapprove").css("color", "red");
                event_approve_status = "Rejected";
            }
            var training_status = data.training_status;
            if (training_status == null) {
                training_status = "";
            }
            var material_approve_status = data.material_approve_status;
            if (material_approve_status == null) {
                material_approve_status = "Pending for Submission";
            }
            var uploaded_content_status = data.uploaded_content_status;
            if (uploaded_content_status == null) {
                uploaded_content_status = "No";
                material_approve_status = "";
            }
            var upload_content_file = data.upload_content_file;
            if (upload_content_file == null) {
                upload_content_file = "";
            }
            var total_participants = data.total_participants;
            if (total_participants == null) {
                total_participants = "0";
            }
            var male_count = data.male_count;
            if (male_count == null) {
                male_count = "0";
            }
            var female_count = data.female_count;
            if (female_count == null) {
                female_count = "0";
            }
            var transgender_count = data.transgender_count;
            if (transgender_count == null) {
                transgender_count = "0";
            }
            var nn = "Gram Panchayat Level Current Training";
            var dd = data.p_training_name;
            $('#txtp_training').text(nn);
            $('#txtp_training_name').text(dd);
            $('#completed').text(training_status);
            $('#currentapprove').text(event_approve_status);
            $('#eventupload').text(uploaded_content_status);
            $('#eventapprove').text(material_approve_status);
            $('#eventfilename').text(upload_content_file);
            $('#ptotal').text(total_participants);
            $('#mtotal').text(male_count);
            $('#ftotal').text(female_count);
            $('#ttotal').text(transgender_count);
            $('.loader').hide();
        }
    });
}
function Report_BTN_NPMU() {

    var StateOfficer = StateOfficer_new;
    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();
    if (month != "0") {
        if (year == "0") {
            alert("select Financial Year");
            $('#month_state').val("0");
            $(".loader").hide();
            return;
        }
    }

    var state_name = State;
    if (state_name == "0") {
        alert("Select State");
        return false;
    }
    {
        window.location.href = "/MasterDropDown/Current_Events_Report_GRAM?state_name=" + State + "&district_name=" + Dist + "&block_name=" + Block + "&gram_name=" + Gram + "&year1=" + year + "&month1=" + month;
    }

}
function Create_Excel_NPMU() {
    var StateOfficer = StateOfficer_new;

    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();
    if (month != "0") {
        if (year == "0") {
            alert("select Financial Year");
            $('#month_state').val("0");
            $(".loader").hide();
            return;
        }
    }

    var state_name = State;
    if (state_name == "0") {
        alert("Select State");
        return false;
    }
    {
        window.location.href = "/MasterDropDown/Excel_gram_level?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + Gram + "&year1=" + year + "&month1=" + month;
    }
    /*    window.location.href = "/MasterDropDown/Excel_block_level?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&year1=" + year + "&month1=" + month;*/




}
function editrowcomp_A_Good2(i) {
    $('#AWP1_TR_Meeting' + i).hide();
    $('#hide_AWP1_TR_Meeting' + i).show();

    var typ1 = $('#typ1' + i).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        $('#typother1' + i).show();
        $('#typother2' + i).show();
        $('#event_platform1' + i).hide();
    }
    else {
        $('#typother1' + i).hide();
        $('#typother2' + i).hide();
        $('#event_platform1' + i).show();
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    var lastMonthMonth = String(mm - 1).padStart(2, '0');
    var lastMonthDay = "06";
    var startDate = yyyy + '-' + mm + '-' + lastMonthDay;
    var only10days = String(mm - 10).padStart(2, '0');
    var finmm = "";
    if (today >= startDate) {
        if ("2024-12-06" > today) {
            finmm = only10days;
        }
        else {
            finmm = mm;
        }
    }
    else {
        finmm = lastMonthMonth;
    }
    // Set the minimum and maximum attributes of the date input
    document.getElementById("fdate1" + i).setAttribute("min", yyyy + '-' + finmm + '-01');
    document.getElementById("fdate1" + i).setAttribute("max", "9999-12-31");
    document.getElementById("tdate1" + i).setAttribute("min", yyyy + '-' + finmm + '-01');
    document.getElementById("tdate1" + i).setAttribute("max", "9999-12-31");


    // Disable keyboard input for the date input field
    document.getElementById("fdate1" + i).addEventListener("keydown", function (event) {
        event.preventDefault();
    });
    document.getElementById("tdate1" + i).addEventListener("keydown", function (event) {
        event.preventDefault();
    });

}
function cancelcomp_A_Support(i) {
    $('#AWP1_TR_Meeting' + i).show();
    $('#hide_AWP1_TR_Meeting' + i).hide();
}
function Category_hide1(a) {

    var typ_name = $('#typ1' + a).val();

    if (typ_name == "Exposure Visits") {

        $('#typother1' + a).show();
        $('#typother2' + a).show();
        $('#event_platform1' + a).hide();

    } else {
        $('#typother1' + a).hide();
        $('#typother2' + a).hide();
        $('#event_platform1' + a).show();
    }

}
function Update_AWP1(id, RowNo) {

    var npmu1 = $('#gp' + RowNo).val();
    var id = id;
    var topic_event1 = $('#topic_event1' + RowNo).val();
    if (topic_event1 == "" || topic_event1 == null) {
        alert("Enter Topic of Training");
        return;
    }
    var typ1 = $('#typ1' + RowNo).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        var typother1 = $('#typother1' + RowNo).val();
        var typother2 = $('#typother2' + RowNo).val();
        if (typother1 == "") {
            alert("Enter Location of Exposure Visit");
            return false;
        }
        if (typother2 == "") {
            alert("Enter Particulars of Exposure Visit");
            return false;
        }
    }
    else {
        var typother1 = $('#typother1' + RowNo).val();
        typother1 = "";
        var typother2 = $('#typother2' + RowNo).val();
        typother2 = "";
        var evt_p = $('#event_platform1' + RowNo).val();
        if (evt_p == "") {
            alert("Select Training Platform");
            return false;
        }
    }

    var event_platform1 = $('#event_platform1' + RowNo).find('option:selected').text();

    var fdate1 = $('#fdate1' + RowNo).val();
    var tdate1 = $('#tdate1' + RowNo).val();
    var opendate1 = $('#opendate1' + RowNo).val();
    var closedate1 = $('#closedate1' + RowNo).val();

    if (new Date(fdate1) > new Date(tdate1)) {
        alert("From Date should be less than To Date");
        return;
    }

    var formData = new FormData();

    formData.append("id", id);
    formData.append("NPMU", npmu1);
    formData.append("topic_event", topic_event1);
    formData.append("typ", typ1);
    formData.append("typother_one", typother1);
    formData.append("typother_two", typother2);
    formData.append('event_platform', event_platform1);
    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);
    formData.append('opendate_d', opendate1);
    formData.append('closedate_d', closedate1);

    $.ajax({
        url: '/MasterDropDown/Update_Curr_Part_Info_gp',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            if (PageNumber == 1) {
                sno = 0;
            } else {
                sno -= close_length;
            }
            abhy_Curr_Training_Info_Search_4();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}
function Delete_Curr_Evt(Id) {
    if (confirm("Do You want to delete? If 'Ok' then '(A). Upload Training Material/Enter and View Data' and '(B). Fill in the details according to the submitted attendance sheet' and '(C). Fill in the details according to the submitted common feedback form' files will deleted")) {
        var obj = {};
        obj.id = Id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/Delete_Curr_Evt_Part',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }

                PageNumber = PageNumber;
                if (PageNumber == 1) {
                    sno = 0;
                    count = 0;
                } else {
                    sno -= close_length;

                }
                exetotal = 0;
                totalexess = 0;
                totalexe();

            }
        });
    }
}
function Save_current_Training() {

    var p_training_name = $("#p_training_name").val();    //abhi
    var type_of_event = $("#type_Training option:selected").val();
    var location_expo = $("#loc_expo").val();
    var particular_expo = $("#parti_expo").val();
    var year = $("#year_npmu option:selected").val();
    var month = $("#month_npmu option:selected").val();
    var event_platform = $("#Training_platform option:selected").val();
    var from_date = $("#from_date").val();
    var to_date = $("#to_date").val();


    var formdata = new FormData();

    if (State == "0") {
        alert('Select State');
        return;
    }
    else if (Dist == "0") {
        alert('Select District');
        return;
    }
    else if (Block == "0") {
        alert('Select Block');
        return;
    }
    else if (Gram == "0") {
        alert('Select GramPanchayat');
        return;
    }

    else if (year == "0") {
        alert('Select Year');
        return;
    }
    else if (yyear != year) {
        x = 1;
        alert("Select Current Year");
        return;
    }
    //else if (ymonth != month) {
    //    x = 1;
    //    alert("Select Current Month");
    //    return;
    //}
    else if (month == "0") {
        alert('Select Month');
        return;
    }
    if (p_training_name == "") {
        alert('Enter Topic of Training');
        return;
    }
    if (type_of_event == "0") {
        alert('Select Type of Training');
        return;
    }
    if (type_of_event == "Exposure Visits") {
        if (location_expo == "") {
            alert('Enter Location of Exposure');
            return;
        }
        if (particular_expo == "") {
            alert('Enter Particulars of Exposure Visit');
            return;
        }
    }

    var event_platform = $("#Training_platform option:selected").val();
    if (type_of_event == "Exposure Visits") {
        event_platform = "";
    }
    if (event_platform == "0") {
        alert('Select Training Platform')
        return;

    }
    if (from_date == "") {
        alert('Select From date');
        return;
    }
    if (to_date == "") {
        alert('Select To Date');
        return;
    }

    if (new Date(from_date) > new Date(to_date)) {
        alert("From Date should be less than To Date");
        return;
    }



    formdata.append("state", State);
    formdata.append("dist", Dist);
    formdata.append("block", Block);
    formdata.append("gp", Gram);
    formdata.append("year", year);
    formdata.append("month", month);

    formdata.append("p_training_name", p_training_name);
    formdata.append("type_of_event", type_of_event);
    formdata.append("location_expo", location_expo);
    formdata.append("particular_expo", particular_expo);

    formdata.append("event_platform", event_platform);
    formdata.append("from_date", from_date);
    formdata.append("to_date", to_date);

    $.ajax({
        url: '/MasterDropDown/Save_current_event_Data_auth',
        data: formdata,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/Home/LogOut";
            }
            if (response == "Successfully Saved") {

                $("#p_training_name").val("");
                $("#type_Training").val("0");
                $("#loc_expo").val("");
                $("#parti_expo").val("");
                $("#Training_platform").val("0");
                $("#from_date").val("");
                $("#to_date").val("");
                $("#reg_open_date").val("");
                $("#reg_close_date").val("");
                PageNumber = PageNumber;
                if (PageNumber == 1) {
                    sno = 0;
                    count = 0;
                } else {
                    sno -= close_length;

                }
                exetotal = 0;
                totalexess = 0;
                totalexe();
            }
        },
        error: function () {
            alert('Data Insert Failed');
        }
    });
    $("#LEV").hide();
    $("#PEV").hide();
}
function uploadeventmaterial() {
    var x = 0;
    var location = $('#location').val();
    var sc_value = $('#scTraining').val();
    var st_value = $('#stTraining').val();
    var obc_value = $('#obcTraining').val();
    var general_value = $('#generalTraining').val();
    var SC = $("#scTraining").val();
    var ST = $("#stTraining").val();
    var OBC = $("#obcTraining").val();
    var General = $("#generalTraining").val();
    var male = $("#male_gp").val();
    var female = $("#female_gp").val();
    var other = $("#other_gp").val();
    var total_participants = $("#total_participants").val();

    if (sc_value == "") {
        sc_value = 0;
    }

    if (st_value == "") {
        st_value = 0;
    }

    if (obc_value == "") {
        obc_value = 0;
    }
    if (general_value == "") {
        general_value = 0;
    }

    var total_pop = parseFloat(sc_value) + parseFloat(st_value) + parseFloat(obc_value) + parseFloat(general_value);

    if ((parseInt(total_participants) != parseInt(total_pop)) && (parseInt(total_pop) != 0)) {
        alert("Total Category wise No. of Attendees should be equal to Total Number of Participants");
        return false;
    }
    if (location == "") {
        x = 1;
        alert("Enter location");
        return;
    }
    else if (male == "") {
        x = 1;
        alert("Enter male");
        return;
    }
    else if (female == "") {
        x = 1;
        alert("Enter female");
        return;
    }
    else if (other == "") {
        x = 1;
        alert("Enter transgender");
        return;
    }
    else if (total_participants == "0") {
        x = 1;
        alert('At least one participant must be entered');
        $('#male_gp').focus();
        return;
    }
    if (total_pop != 0) {
        if (total_pop < total_participants || total_pop != total_participants) {
            x = 1;
            alert('Categories section total should be equal to total Attendies ');
            $('#scTraining').focus();
            return;
        }
    }
    else {
        SC == 0;
        ST == 0;
        OBC == 0;
        General == 0;
    }
    var atten = $("#Atten_sheet_gp").get(0);
    var atten_files = atten.files;
    var photo = $("#Photo_Train_gp").get(0);
    var photo_files = photo.files;
    var mom = $("#mom_gp").get(0);
    var mom_files = mom.files;
    var event = $("#event_upload").get(0);
    var event_upload = event.files;


    if (atten_files.length == 0) {
        x = 1;
        alert("Upload attendance sheet of the participant");
        return;
    }
    else if (photo_files.length == 0) {
        x = 1;
        alert("Upload Photograph of the training");
        return;
    }
    else if (mom_files.length == 0) {
        x = 1;
        alert("Upload Feedback from Participants");
        return;
    }
    else if (event_upload.length == 0) {
        x = 1;
        alert("Upload Training Material");
        return;
    }

    const oFile = document.getElementById("Atten_sheet_gp").files[0];
    if (oFile != undefined) {
        if (oFile.size > 2097152) // 10 MiB for bytes.
        {
            alert("Attendance sheet of the participant File size must be less than 2 MB");
            return;
        }
    }
    const oFilephoto = document.getElementById("Photo_Train_gp").files[0];
    if (oFilephoto != undefined) {
        if (oFilephoto.size > 2097152) // 10 MiB for bytes.
        {
            alert("Photograph of the training File size must be less than 2 MB");
            return;
        }
    }
    const oFilemom = document.getElementById("mom_gp").files[0];
    if (oFilemom != undefined) {
        if (oFilemom.size > 2097152) // 10 MiB for bytes.
        {
            alert("Feedback from Participants File size must be less than 2 MB");
            return;
        }
    }
    const oFileeu = document.getElementById("event_upload").files[0];
    if (oFileeu != undefined) {
        if (oFileeu.size > 2097152) // 10 MiB for bytes.
        {
            alert("Training Material File size must be less than 2 MB");
            return;
        }
    }



    var formdata = new FormData();

    formdata.append("unic_key", unic_key);
    formdata.append("location", location);
    formdata.append("male", male);
    formdata.append("female", female);
    formdata.append("other", other);
    formdata.append("total_participants", total_participants);
    formdata.append("SC", SC);
    formdata.append("ST", ST);
    formdata.append("OBC", OBC);
    formdata.append("General", General);

    formdata.append("atten", atten_files[0]);
    formdata.append("photo", photo_files[0]);
    formdata.append("mom", mom_files[0]);
    formdata.append("event_upload", event_upload[0]);

    if (x == 0) {
        $.ajax({
            url: "/MasterDropDown/Save_Reg_Gp_Level_Data_new",
            type: "POST",
            data: formdata,
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                if (response != 'Successfully Saved' && response != 'Error' && response != 'Logout' && response != 'Enter Meeting Name'
                    && response != 'Your Upload file has Double Extention, Upload proper file' && response != 'Your Upload file has Not valid File, Upload proper file'
                    && response != 'Enter Location Name' && response != 'Choose Valid image') {

                }
                if (response == "Data Saved Successfully") {
                    $("#location").val("");
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
                    $("#event_upload").val("");
                    unic_key = "";
                    autoclick();
                }


            },
            error: function (jqXHR, textStatus, errorMessage) {

            }
        });

    }


}
var upload_count = "";
var formdata = new FormData();
var Images_Li = '';
var II = 0;
function autoclick() {
    if (PageNumber == 1) {
        sno = 0;
    } else {
        sno -= close_length;
    }
    $("#btnclose").click();
    abhy_Curr_Training_Info_Search_4();

}
function close() {
    if (PageNumber == 1) {
        sno = 0;
    } else {
        sno -= close_length;
    }
    $("#location").val("");
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
    $("#event_upload").val("");

}
function npmusubmit(id) {
    if (confirm("Are you Sure You want to Submit?")) {
        var obj = {};
        obj.id = id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/submitnpmu_gp',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }

                PageNumber = PageNumber;
                if (PageNumber == 1) {
                    sno = 0;
                    count = 0;
                } else {
                    sno -= close_length;

                }
                exetotal = 0;
                totalexess = 0;
                totalexe();

            }
        });
    }
}
function npmuapprove(id) {
    if (confirm("Are you Sure You want to Approve?")) {
        var obj = {};
        obj.id = id;
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/MasterDropDown/approvenpmu_gp',
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }

                PageNumber = PageNumber;
                if (PageNumber == 1) {
                    sno = 0;
                    count = 0;
                } else {
                    sno -= close_length;

                }
                exetotal = 0;
                totalexess = 0;
                totalexe();

            }
        });
    }
}
function dist_newrejtogpdp(id, RowNo) {
    $('.loader').show();
    var i = 0;
    var id = id;
    var reject = $('#remarks_status_dist' + RowNo).val();
    if (reject == "" || reject == " ") {
        alert("Enter Reject Remark ");
        $('.loader').hide();
        i = 1;
    }
    if (i == 0) {
        var formdata = new FormData();
        formdata.append("id", id);
        formdata.append("reject", reject);
        $.ajax({
            url: '/MasterDropDown/npmureject',
            data: formdata,
            type: 'POST',
            contentType: false,
            processData: false,
            success: function (response) {

                alert(response);
                if (response == "SessionTimeOut") {
                    window.location = "/Home/LogOut";
                }
                PageNumber = PageNumber;
                if (PageNumber == 1) {
                    sno = 0;
                    count = 0;
                } else {
                    sno -= close_length;

                }
                exetotal = 0;
                totalexess = 0;
                totalexe();
            },
            error: function () {
                alert('Approved Failed');
            }
        });
    }
}
function closeatt() {
    if (PageNumber == 1) {
        sno = 0;
    } else {
        sno -= close_length;
    }
    abhy_Curr_Training_Info_Search_4();
}