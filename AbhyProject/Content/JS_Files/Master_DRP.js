

function state() {
    /*alert('hello state');*/
    $.ajax({
        url: '/MasterDropDown/State',
        type: 'POST',
        dataType: 'json', //make sure your service is actually returning json here
        contentType: 'application/json',
        success: function (data) {
            var option_state = ' <option value="0"> Select State </option>';
            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {

                    if (data[i] != null && data[i] != "") {
                        option_state += '<option value="' + data[i].state_id + '">' + data[i].state_name + '</option>';
                    }
                }
            }
            $("#drpstate").html(option_state);
            //$("#drpstate_get").html(option_state);

        }
    });
}


function district() {     //abhi28
    $('#drpblock').val(0);
    $('#drpgrampanchayat').val(0);
    /*alert('1');*/
    
    var drpid = $('#drpstate').val();
    //alert(drpid);
    $.ajax(
        {
            type: 'POST',
            dataType: 'JSON',
            url: '/MasterDropDown/Bind_District',
            data: { id: drpid },
            success: function (data) {
                var option_district = ' <option value="0"> Select District </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] != null && data[i] != "") {
                            option_district += '<option value="' + data[i].district_id + '">' + data[i].district_name + '</option>';
                        }
                    }
                }
                $("#drpdistrict").html(option_district);
            }
        });
}


function block() {
    /* alert('2');*/
    
    var blockid = $('#drpdistrict').val();
    //alert(blockid);
    $.ajax(
        {
            type: 'POST',
            dataType: 'JSON',
            url: '/MasterDropDown/Bind_Block',
            data: { id: blockid },
            success: function (data) {
                var option_block = ' <option value="0"> Select Block </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] != null && data[i] != "") {
                            option_block += '<option value="' + data[i].block_id + '">' + data[i].block_name + '</option>';
                        }
                    }
                }
                $("#drpblock").html(option_block);
            }
        });
}


function grampanchayat() {

    var gramid = $('#drpblock').val();
    // alert(gramid);
    $.ajax(
        {
            type: 'POST',
            dataType: 'JSON',
            url: '/MasterDropDown/Bind_Grampanchayat',
            data: { id: gramid },
            success: function (data) {
                var option_grampanchayat = ' <option value="0"> Select GramPanchayat </option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] != null && data[i] != "") {
                            option_grampanchayat += '<option value="' + data[i].grampanchayat_id + '">' + data[i].grampanchayat_name + '</option>';
                        }
                    }
                }
                $("#drpgrampanchayat").html(option_grampanchayat);
            }
        });
}


//function Save_current_event() {               //abhi
//    
//    /* var current_event = $("#drpstate option:selected").text();*/

//    var p_training_name = $("#p_training_name").val();    //abhi
//    var type_of_event = $("#type_event option:selected").val();
//    var location_expo = $("#loc_expo").val();
//    var particular_expo = $("#parti_expo").val();
//    //var current_event = $("#spnstate option:selected").val();
//    //var current_event1 = $("#dist11 option:selected").val();
//    //var current_event2 = $("#block1 option:selected").val();
//    //var year = $("#year option:selected").val();
//    //var month = $("#month option:selected").val();
//    var event_platform = $("#event_platform option:selected").val();
//    var from_date = $("#from_date").val();
//    var to_date = $("#to_date").val();
//    var reg_open_date = $("#reg_open_date").val();
//    var reg_close_date = $("#reg_close_date").val();

//    var formdata = new FormData();

//    if (p_training_name == "") {
//        alert('Enter Topic of Event');
//        return;
//    }
//    if (type_of_event == "0") {
//        alert('Select Type of Event');
//        return;
//    }
//    if (type_of_event == "Exposure Visits") {
//        if (location_expo == "") {
//            alert('Enter Location of Exposure');
//            return;
//        }
//        if (particular_expo == "") {
//            alert('Enter Particulars of Exposure Visit');
//            return;
//        }
//    }
//    var state = $('#spnstate').val();
//    if (state == "0") {
//        alert('Select State');
//        return;
//    }
//    var dis = $('#dist11').val();
//    if (dis == "0") {
//        alert('Select District');
//        return;
//    }
//    var block = $('#block1').val();
//    if (block == "0") {
//        alert('Select Block');
//        return;
//    }
//    var year = $('#year').val();
//    if (year == "0") {
//        alert('Select Year');
//        return;
//    }
//    var month = $('#month').val();
//    if (month == "0") {
//        alert('Select Month');
//        return;
//    }
//    var event_platform = $("#event_platform option:selected").val();
//    if (event_platform == "0") {
//        alert('Select Event Platform')
//        return;

//    }
//    if (from_date == "") {
//        alert('Enter From date');
//        return;
//    }
//    if (to_date == "") {
//        alert('Enter To Date');
//        return;
//    }

//    if (new Date(from_date) > new Date(to_date)) {
//        alert("Please Choose From Date is less than To Date");
//        return;
//    }
//    if (reg_open_date == "") {
//        alert('Enter Registration Open Date');
//        return;
//    }
//    if (reg_close_date == "") {
//        alert('Enter Registration Close Date');
//        return;
//    }
//    if (Date.parse(reg_open_date) > Date.parse(reg_close_date)) {
//        alert("Please Choose Registration Open Date is less than from Registration Close Date");
//        return;
//    }
//    if (Date.parse(reg_open_date) > Date.parse(from_date)) {
//        alert("Please Choose Registration Open Date is less than From Date");
//        return;
//    }
//    if (Date.parse(reg_open_date) == Date.parse(from_date)) {
//        alert("Please Choose Registration Open Date is less than From Date");
//        return;
//    }
//    if (Date.parse(reg_close_date) > Date.parse(from_date)) {
//        alert("Please Choose Registration Close Date is less than From Date");
//        return;
//    }
//    if (Date.parse(reg_close_date) == Date.parse(from_date)) {
//        alert("Please Choose Registration Close Date is less than From Date");
//        return;
//    }

//    /* formdata.append("current_event", current_event);*/

//    formdata.append("p_training_name", p_training_name);
//    formdata.append("type_of_event", type_of_event);
//    formdata.append("location_expo", location_expo);
//    formdata.append("particular_expo", particular_expo);

//    //formdata.append("current_event", current_event);
//    //formdata.append("current_event1", current_event1);
//    //formdata.append("current_event2", current_event2);
//    //formdata.append("year", year);
//    //formdata.append("month", month);

//    formdata.append("event_platform", event_platform);
//    formdata.append("from_date", from_date);
//    formdata.append("to_date", to_date);
//    formdata.append("reg_open_date", reg_open_date);
//    formdata.append("reg_close_date", reg_close_date);

//    $.ajax({
//        url: '/MasterDropDown/Save_current_event_Data',
//        data: formdata,
//        type: 'POST',
//        contentType: false,
//        processData: false,
//        success: function (response) {

//            alert(response);
//            if (response == "SessionTimeOut") {
//                  window.location = "/Home/LogOut";
//            }

//            /* $("#current_event").val("0");*/
//            $("#p_training_name").val("");
//            $("#type_event").val("0");
//            $("#loc_expo").val("");
//            $("#parti_expo").val("");
//            /* $("#level_event").val("");*/
//            //$("#spnstate").val("0");
//            //$("#dist11").val("0");
//            //$("#block1").val("0");
//            //$("#year").val("0");
//            //$("#month").val("0");
//            $("#event_platform").val("0");
//            $("#from_date").val("");
//            $("#to_date").val("");
//            $("#reg_open_date").val("");
//            $("#reg_close_date").val("");

//            current_event_info();
//            current_event_info_new();

//        },
//        error: function () {
//            alert('Data Insert Failed');
//        }
//    });
//    $("#LEV").hide();
//    $("#PEV").hide();
//}



//function current_events_Dropdown() {         //abhi
//    
//    var current_events = $("#current_events option:selected").text();

//    $.ajax({
//        url: '/MasterDropDown/current_events_selection',
//        type: 'GET',
//        data: { STATE: current_events },
//        dataType: 'json',
//        contentType: 'application/json',

//        success: function (data) {

//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";

//            }
//            var tr = '';
//            if (data.length != 0) {
//                for (var i = 0; i < data.length; i++) {

//                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td></tr>';
//                }
//            }
//            if (tr == '') {
//                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
//                $('#Training_Workshop').html(tr);
//            }
//            else {
//                $('#Training_Workshop').html(tr);
//            }

//        }
//    });
//}

//function Save_event_calendar() {       //abhi
//    /*alert("1");*/
//    
//    var current_event = $("#drpstate option:selected").text();
//    var current_event1 = $("#drpdistrict option:selected").text();
//    var current_event2 = $("#drpblock option:selected").text();
//    var current_event_year = $("#event_calendar_year option:selected").text();
//    var event_calendar = $("#event_calendar").val();
//    var download = $("#event_download").get(0);
//    var download_files = download.files;

//    var formdata = new FormData();

//    var state = $('#drpstate').val();
//    if (state == "0") {
//        alert('Select State');
//        return;
//    }
//    var dis = $('#drpdistrict').val();
//    if (dis == "0") {
//        alert('Select District');
//        return;
//    }
//    var block = $('#drpblock').val();
//    if (block == "0") {
//        alert('Select Block');
//        return;
//    }
//    if (current_event_year == "Event Calendar Year") {
//        alert('Select Event Calander Year')
//        return
//    }
//    if (event_calendar == "") {
//        alert('Enter Event Details')
//        return
//    }
//    if (download_files.length == "0") {
//        alert('Upload Your File ');
//        return;

//    }

//    formdata.append("current_event", current_event);
//    formdata.append("current_event1", current_event1);
//    formdata.append("current_event2", current_event2);
//    formdata.append("current_event_year", current_event_year);
//    formdata.append("event_calendar", event_calendar);
//    formdata.append("download", download_files[0]);

//    $.ajax({
//        url: '/MasterDropDown/Save_event_calendar_Data',
//        data: formdata,
//        type: 'POST',
//        contentType: false,
//        processData: false,
//        success: function (response) {

//            alert(response);
//            if (response == "SessionTimeOut") {
//                  window.location = "/Home/LogOut";
//            }
//            $("#drpstate").val("0");
//            $("#drpdistrict").val("0");
//            $("#drpblock").val("0");
//            $("#event_calendar_year").val("0");
//            $("#event_calendar").val("");
//            $("#event_download").val("");


//            event_calendar_info_new();
//        },
//        error: function () {
//            alert('Data Insert Failed');
//        }
//    });
//}




//function event_calendar_Dropdown() {         //abhi
//    /*alert('2');*/
//    $("#event_calendar_year").show();
//    
//    var event_calendar = $("#event_calendar option:selected").text();

//    $.ajax({
//        url: '/MasterDropDown/event_calendar_selection',
//        type: 'GET',
//        data: { STATE: event_calendar },
//        dataType: 'json',
//        contentType: 'application/json',

//        success: function (data) {

//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";

//            }
//            var tr = '';
//            if (data.length != 0) {
//                for (var i = 0; i < data.length; i++) {

//                    var download1 = "";
//                    if (data[i].download != null) {
//                        download1 = data[i].download;
//                    }
//                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].current_event + '</td><td>' + data[i].current_event_year + '</td><td>' + data[i].event_calendar + '</td> <td><a href="' + download1 + '" download="">' + download1 + '</a></td> </tr>';
//                }
//            }
//            if (tr == '') {
//                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
//                $('#Training_Workshop_New').html(tr);
//            }
//            else {
//                $('#Training_Workshop_New').html(tr);
//            }

//        }
//    });
//}


//function event_calendar_year_Dropdown() {         //abhi
//    /*alert('2');*/
//    
//    var event_calendar = $("#event_calendar option:selected").text();
//    var event_calendar_year = $("#event_calendar_year option:selected").text();

//    $.ajax({
//        url: '/MasterDropDown/event_calendar_year_Dropdown_selection',
//        type: 'GET',
//        data: { STATE: event_calendar, YEAR: event_calendar_year },
//        dataType: 'json',
//        contentType: 'application/json',

//        success: function (data) {

//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";

//            }
//            var tr = '';
//            if (data.length != 0) {
//                for (var i = 0; i < data.length; i++) {

//                    var download1 = "";
//                    if (data[i].download != null) {
//                        download1 = data[i].download;
//                    }
//                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].current_event + '</td><td>' + data[i].current_event_year + '</td><td>' + data[i].event_calendar + '</td> <td><a href="' + download1 + '" download="">' + download1 + '</a></td> </tr>';
//                }
//            }
//            if (tr == '') {
//                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
//                $('#Training_Workshop_New').html(tr);
//            }
//            else {
//                $('#Training_Workshop_New').html(tr);
//            }

//        }
//    });
//}