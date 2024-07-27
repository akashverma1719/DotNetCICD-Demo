var State = "0";
var Dist = "0";
var Block = "0";
var Gram = "0";
var off_1 = "";

var Jsondata = "";


function SessionInfo() {
    var obj = {};
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/SocialMointoring/State_SessionInfo_1",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else {

                $('#Error_123').text("");



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
                    
                    Year_change_wsp();
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
                    
                    Year_change_wsp();
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
                    Year_change_wsp();
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
                    Year_change_wsp();
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
                    $('#DropdownSearch_btn').hide();
                    Info();
                    Year_change_wsp();
                }

            }

        }

    });

}

function DropDownInfo() {

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Home/Sign_Up_DropdownInfo",
        data: "{ }",
        dataType: 'JSON',
        success: function (response) {

            if (response.length != 0) {
                Jsondata = response;
                $("#spnstate").empty();
                var opstate = '<option value="0">Select State Name</option>';
                $("#spnstate").append(opstate);
                $("#dist11").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11").append(opdist);
                $("#block1").empty();
                var opblock = '<option value="0">Select Block</option>';
                $("#block1").append(opblock);
                $("#gram").empty();
                var opgram = '<option value="0">Select Gram Panchayat</option>';
                $("#gram").append(opgram);
                //var StateName = $("#spnstate").text();
                if (Jsondata.length != 0) {
                    var ddlst = {};
                    var all_dists = [];
                    var optionState = '';
                    for (var i = 0; i < Jsondata.length; i++) {

                        if (!ddlst[Jsondata[i].state_name]) {
                            all_dists.push(Jsondata[i].state_name);
                            ddlst[Jsondata[i].state_name] = Jsondata[i].state_name;

                        }
                    }
                    var DistArray = [];
                    DistArray = all_dists.sort(function (a, b) {
                        if (a < b) return -1;
                        else if (a > b) return 1;
                        return 0;
                    });
                    optionState = '<option value="0">Select State Name</option>';
                    for (var i = 0; i < DistArray.length; i++) {
                        if (DistArray[i] != null && DistArray[i] != "") {
                            optionState += '<option value="' + DistArray[i] + '">' + DistArray[i] + '</option>';
                        }
                    }
                    $("#spnstate").html(optionState);
                }

            }

            SessionInfo();


        }
    });
}

function State_Dropdown_Function() {

    $("#dist11").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11").append(opdist);
    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram").append(opgram);
    var StateName = $("#spnstate").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
        Dist = "0";
        Block = "0";
        Gram = "0";
        Year_change_wsp();

        var ddlst = {};
        var all_dists = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (StateName == Jsondata[i].state_name) {

                if (!ddlst[Jsondata[i].district_name]) {
                    all_dists.push(Jsondata[i].district_name);
                    ddlst[Jsondata[i].district_name] = Jsondata[i].district_name;

                }
            }
        }


        var DistArray = [];
        DistArray = all_dists.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
        for (var i = 0; i < DistArray.length; i++) {
            if (DistArray[i] != null && DistArray[i] != "") {
                optionDist += '<option value="' + DistArray[i] + '">' + DistArray[i] + '</option>';
            }
        }
        $("#dist11").append(optionDist);
    }

}

function Dist_fun() {

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram").append(opgram);
    var dist = $("#dist11").val();
    if (off_1 == "dist") {
        dist = Dist;
    } else {
        Dist = dist;
    }
    if (dist != "0" && Jsondata.length != 0) {

        Block = "0";
        Gram = "0";
        Year_change_wsp();
        var ddlst = {};
        var all_blocks = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (dist == Jsondata[i].district_name) {

                if (!ddlst[Jsondata[i].block_name]) {
                    all_blocks.push(Jsondata[i].block_name);
                    ddlst[Jsondata[i].block_name] = Jsondata[i].block_name;
                    //  $("#block").append(optionDist);
                }
            }
        }


        var BlockArray = [];
        BlockArray = all_blocks.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
        for (var i = 0; i < BlockArray.length; i++) {
            if (BlockArray[i] != null && BlockArray[i] != "") {
                optionDist += '<option value="' + BlockArray[i] + '">' + BlockArray[i] + '</option>';
            }
        }
        $("#block1").append(optionDist);

    }
}

function Block_fun() {

    $("#gram").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram").append(opgram);
    var block = $("#block1").val();

    if (off_1 == "block") {
        block = Block;
    } else {
        Block = block;
    }
    if (block != "0" && Jsondata.length != 0) {

        Gram = "0";
        Year_change_wsp();
        var ddlst = {};
        var all_grams = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (block == Jsondata[i].block_name) {

                if (!ddlst[Jsondata[i].gram_panchayat_name]) {
                    ddlst[Jsondata[i].gram_panchayat_name] = Jsondata[i].gram_panchayat_name;
                    all_grams.push(Jsondata[i].gram_panchayat_name);
                    //   $("#gram").append(optionDist);
                }
            }
        }


        var GramArray = [];
        GramArray = all_grams.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        });
        for (var i = 0; i < GramArray.length; i++) {
            if (GramArray[i] != null && GramArray[i] != "") {

                optionDist += '<option value="' + GramArray[i] + '">' + GramArray[i] + '</option>';
            }
        }
        $("#gram").append(optionDist);
    }
}

function Dropdown_Search() {

    if (Gram != "0") {

    } else {
        Gram = $('#gram').val();
    }

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

        $.ajax({
            type: "Post",
            url: "/Home/StateLevel_Dropdown",
            contentType: "application/json;charset=utf-8",
            data: "{'StateName':'" + State + "','Dist':'" + Dist + "','Block':'" + Block + "','Gram':'" + Gram + "'}",
            dataType: "json",
            success: function (results) {

            }
        });
    }
}

function Gram_fun() {
    var Gram1 = $('#gram').val();
    if (Gram1 != "0") {
        Gram = Gram1;
        // Info();
        Year_change_wsp();
    } else {
        alert("Please Select GramPanchayat")
    }
}

function report_2021() {
    
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("please select statename");
    } else if (Dist == "0") {
        xx = 1;
        alert("please select district");
    }
    else if (Block == "0") {
        xx = 1;
        alert("please select block");
    } else if (Gram == "0") {
        xx = 1;
        alert("please select gram panchayat");
    }
    if (xx == 0) {
        Dropdown_Search();

        var fileupload = $("#report_2021").get(0);
        var fileInput = document.getElementById('report_2021');
        var filepath = fileInput.value;
        // allowing file type
        var allowedextensions =
            /(\.pdf)$/i;
        if (!allowedextensions.exec(filepath)) {
            alert('invalid file type');
            // alert('please upload pdf file');
            fileInput.value = '';
            return false;
        }
        var files = fileupload.files;
        if (files.length != 0) {
            var formData = new FormData();
            formData.append('report_2021', files[0]);

            $.ajax({
                url: '/Project/WSP_Approved',
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (data) {
                    alert(data);
                    if (data != "Successfully Saved" && data != "logout" && data != "Your Upload file has Double Extention, Please Upload proper file" && data != "your upload file has not valid file, please upload proper file" && data != "Please Upload File") {
                        window.location = "/error/defaulterror";
                    }
                    formData = new FormData();
                    $("#report_2021").val("");
                    Info1();
                }
            });

        } else {
            alert("please upload file");
        }
    }

}

function report_2022() {
    
    btn_2022.disabled = true;
    /*btn_2021.disabled = true;*/
    var xx = 0;
    if (State == "0") {
        xx = 1;
        alert("Please Select StateName");
        btn_2022.disabled = false;
        /*btn_2021.disabled = false;*/
    } else if (Dist == "0") {
        xx = 1;
        alert("Please Select District");
        btn_2022.disabled = false;
        /*btn_2021.disabled = false;*/
    }
    else if (Block == "0") {
        xx = 1;
        alert("Please Select Block");
        btn_2022.disabled = false;
        /*btn_2021.disabled = false;*/
    } else if (Gram == "0") {
        xx = 1;
        alert("Please Select Gram Panchayat");
        btn_2022.disabled = false;
        /*btn_2021.disabled = false;*/
    }
    if (xx == 0) {
        Dropdown_Search();
        var fileUpload = $("#report_2022").get(0);
        var fileInput = document.getElementById('report_2022');
        var filePath = fileInput.value;
        // Allowing file type
        var allowedExtensions =
            /(\.pdf)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            fileInput.value = '';
            btn_2022.disabled = false;
            /*btn_2021.disabled = false;*/
            return false;
        }
        var files = fileUpload.files;
        if (files.length != 0) {
            var formData = new FormData();
            formData.append('report_2022', files[0]);

            $.ajax({
                url: '/Project/WSP_Approved',
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (data) {
                    alert(data);
                    if (data != "Successfully Saved" && data != "Logout" && data != "Your Upload file has Double Extention, Please Upload proper file" && data != "Your Upload file has Not valid File, Please Upload proper file" && data != "Please Upload File") {
                        window.location = "/Error/DefaultError";
                    }
                    if (data == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    formData = new FormData();
                    $("#report_2022").val("");
                    Info1();
                    btn_2022.disabled = false;
                    /*btn_2021.disabled = false;*/
                }
            });

        } else {
            alert("Please Upload File");
        }
    }

}


function report_2023() {
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
        Dropdown_Search();
        var fileUpload = $("#report_2023").get(0);
        var fileInput = document.getElementById('report_2023');
        var filePath = fileInput.value;
        // Allowing file type
        var allowedExtensions =
            /(\.pdf)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            fileInput.value = '';
            return false;
        }
        var files = fileUpload.files;
        if (files.length != 0) {
            var formData = new FormData();
            formData.append('report_2023', files[0]);

            $.ajax({
                url: '/Project/WSP_Approved',
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function (data) {
                    alert(data);
                    if (data != "Successfully Saved" && data != "Logout" && data != "Your Upload file has Double Extention, Please Upload proper file" && data != "Your Upload file has Not valid File, Please Upload proper file" && data != "Please Upload File") {
                        window.location = "/Error/DefaultError";
                    }
                    if (data == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    formData = new FormData();
                    $("#report_2023").val("");
                    Info();
                }
            });

        } else {
            alert("Please Upload File");
        }
    }

}


//function report_2024() {
//    var xx = 0;
//    if (State == "0") {
//        xx = 1;
//        alert("Please Select StateName");
//    } else if (Dist == "0") {
//        xx = 1;
//        alert("Please Select District");
//    }
//    else if (Block == "0") {
//        xx = 1;
//        alert("Please Select Block");
//    } else if (Gram == "0") {
//        xx = 1;
//        alert("Please Select Gram Panchayat");
//    }
//    if (xx == 0) {
//        Dropdown_Search();
//        var fileUpload = $("#report_2024").get(0);
//        var fileInput = document.getElementById('report_2024');
//        var filePath = fileInput.value;
//        // Allowing file type
//        var allowedExtensions =
//            /(\.pdf)$/i;
//        if (!allowedExtensions.exec(filePath)) {
//            alert('Invalid file type');
//            fileInput.value = '';
//            return false;
//        }
//        var files = fileUpload.files;
//        if (files.length != 0) {
//            var formData = new FormData();
//            formData.append('report_2024', files[0]);

//            $.ajax({
//                url: '/Project/WSP_Approved',
//                data: formData,
//                type: 'POST',
//                contentType: false,
//                processData: false,
//                success: function (data) {
//                    alert(data);
//                    if (data != "Successfully Saved" && data != "Logout" && data != "Your Upload file has Double Extention, Please Upload proper file" && data != "Your Upload file has Not valid File, Please Upload proper file" && data != "Please Upload File") {
//                        window.location = "/Error/DefaultError";
//                    }
//                    if (data == "Logout") {
//                        window.location = "/WspNew/WSP_GWM_HOME";
//                    }
//                    formData = new FormData();
//                    $("#report_2024").val("");
//                    Info();
//                }
//            });

//        } else {
//            alert("Please Upload File");
//        }
//    }

//}

//function report_2025() {
//    var xx = 0;
//    if (State == "0") {
//        xx = 1;
//        alert("Please Select StateName");
//    } else if (Dist == "0") {
//        xx = 1;
//        alert("Please Select District");
//    }
//    else if (Block == "0") {
//        xx = 1;
//        alert("Please Select Block");
//    } else if (Gram == "0") {
//        xx = 1;
//        alert("Please Select Gram Panchayat");
//    }
//    if (xx == 0) {
//        Dropdown_Search();
//        var fileUpload = $("#report_2025").get(0);
//        var fileInput = document.getElementById('report_2025');
//        var filePath = fileInput.value;
//        // Allowing file type
//        var allowedExtensions =
//            /(\.pdf)$/i;
//        if (!allowedExtensions.exec(filePath)) {
//            alert('Invalid file type');
//            fileInput.value = '';
//            return false;
//        }
//        var files = fileUpload.files;
//        if (files.length != 0) {
//            var formData = new FormData();
//            formData.append('report_2025', files[0]);

//            $.ajax({
//                url: '/Project/WSP_Approved',
//                data: formData,
//                type: 'POST',
//                contentType: false,
//                processData: false,
//                success: function (data) {
//                    alert(data);
//                    if (data != "Successfully Saved" && data != "Logout" && data != "Your Upload file has Double Extention, Please Upload proper file" && data != "Your Upload file has Not valid File, Please Upload proper file" && data != "Please Upload File") {
//                        window.location = "/Error/DefaultError";
//                    }
//                    if (data == "Logout") {
//                        window.location = "/WspNew/WSP_GWM_HOME";
//                    }
//                    formData = new FormData();
//                    $("#report_2025").val("");
//                    Info();
//                }
//            });

//        } else {
//            alert("Please Upload File");
//        }
//    }

//}

function Info1() {

    
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/PIP_wsp_Approved_Info',
        data: { 'State': State, 'Dist': Dist, 'Block': Block, 'Gram': Gram },
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            
           
            $('#Approved_count').text("0");

            $('#tbl_details').html("");
            if (data.length != 0) {
                var x = 0;
                var tr1 = '';
                //data.sort(function (a, b) {
                //    var dateA = new Date(a.wsp_date), dateB = new Date(b.wsp_date)
                //    return dateA - dateB
                //});
                
                $('#report_2021_download').html("");
                $('#report_2022_download').html("");
                $('#report_2023_download').html("");
                $('#report_2024_download').html("");
                $('#report_2025_download').html("");
                var z1 = 0;
                var tr5 = '';
                for (var i = 0; i < data.length; i++) {
                    var revised_wsp_date = '';
                    var revised_wsp_filepath = '';
                    var revised_wsp_filename = '';
                    var wsp_date = '';
                    var wsp_finename = '';
                    var wsp_filepath = '';
                    var wsp_update_date = '';
                    var wsp_update_filepath = '';
                    var wsp_update_filename = '';

                    if (data[i].revised_wsp_date != null && data[i].revised_wsp_date != "" && data[i].revised_wsp_date != "NULL") {
                        revised_wsp_date = data[i].revised_wsp_date;
                    }
                    if (data[i].revised_wsp_filename != null && data[i].revised_wsp_filename != '' && data[i].revised_wsp_filename != 'NULL') {
                        revised_wsp_filename = data[i].revised_wsp_filename;
                    }
                    if (data[i].revised_wsp_filepath != null && data[i].revised_wsp_filepath != '' && data[i].revised_wsp_filepath != 'NULL') {
                        revised_wsp_filepath = data[i].revised_wsp_filepath;
                    }
                    if (data[i].wsp_date != null && data[i].wsp_date != "" && data[i].wsp_date != "null" && data[i].wsp_date != "NULL") {
                        wsp_date = data[i].wsp_date;
                    }
                    if (data[i].wsp_finename != null && data[i].wsp_finename != '' && data[i].wsp_finename != 'NULL') {
                        wsp_finename = data[i].wsp_finename;
                    } else if (data[i].wsp_22_finename != null && data[i].wsp_22_finename != '' && data[i].wsp_22_finename != 'NULL') {
                        wsp_finename = data[i].wsp_22_finename;
                    }
                    if (data[i].wsp_filepath != null && data[i].wsp_filepath != '' && data[i].wsp_filepath != 'NULL') {
                        wsp_filepath = data[i].wsp_filepath;
                    } else if (data[i].wsp_22_filepath != null && data[i].wsp_22_filepath != '' && data[i].wsp_22_filepath != 'NULL') {
                        wsp_filepath = data[i].wsp_22_filepath;
                    }

                    if (data[i].wsp_update_date != null && data[i].wsp_update_date != "" && data[i].wsp_update_date != "NULL") {
                        wsp_update_date = data[i].wsp_update_date;
                        
                    }
                    if (data[i].wsp_update_filepath != null && data[i].wsp_update_filepath != '' && data[i].wsp_update_filepath != 'NULL') {
                        wsp_update_filepath = data[i].wsp_update_filepath;
                        wsp_update_filename = data[i].wsp_update_filename;
                    }

                    tr5 += '<tr><td>' + ++z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].district_name + '</td><td>' + data[i].block_name + '</td><td>' + data[i].gpname + '</td><td>' + revised_wsp_date + '</td>';
                    tr5 += '<td><a href="' + revised_wsp_filepath + '" download="">' + revised_wsp_filename + '</a></td>';
                    tr5 += '<td>' + wsp_update_date + '</td><td><a href="' + wsp_update_filepath + '" download="">' + wsp_update_filename + '</a></td>';
                    tr5 += '<td>' + wsp_date + '</td><td><a href="' + wsp_filepath + '" download="">' + wsp_finename + '</a></td></tr>';
                    
                }

                $('#tbl_details').html(tr5);

                $('#Approved_count').text(data.length);

                

            }
            else {


                // alert("No Data");
            }
        }
    });

}

function Info() {
    //alert('Info');
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/PIP_wsp_Approved_Info',
        data: { 'State': State, 'Dist': Dist, 'Block': Block, 'Gram': Gram },
        dataType: 'JSON',
        success: function (data) {
            
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            $('#report_2021_download').html("");
            $('#report_2022_download').html("");
            $('#report_2023_download').html("");
            $('#report_2024_download').html("");
            $('#report_2025_download').html("");
            $('#Approved_count').text("0");
            if (data.length != 0) {
                var x = 0;
                data.sort(function (a, b) {
                    var dateA = new Date(a.wsp_date), dateB = new Date(b.wsp_date)
                    return dateA - dateB
                });
                for (var i = 0; i < data.length; i++) {

                    var year = new Date().getFullYear();
                    if (data[i].revised_wsp_filename != null && data[i].revised_wsp_filename != '') {

                        x += 1;
                        var aa2 = '<a href="' + data[i].revised_wsp_filepath + '" target="_blank" download=""> ' + data[i].revised_wsp_filename + '</a> ';

                        $('#report_2022_download').html(aa2);

                    }
                    if (data[i].wsp_finename != null && data[i].wsp_finename != '') {

                        x += 1;
                        var aa2 = '<a href="' + data[i].wsp_filepath + '" target="_blank" download=""> ' + data[i].wsp_finename + '</a> ';

                        $('#report_2021_download').html(aa2);

                    }
                    //if (data[i].wsp_22_filepath != null && data[i].wsp_22_filepath != '') {

                    //    x += 1;
                    //    var aa2 = '<a href="' + data[i].wsp_22_filepath + '" target="_blank" download=""> ' + data[i].wsp_22_finename + '</a> ';

                    //    $('#report_2022_download').html(aa2);

                    //}
                    if (data[i].wsp_23_filepath != null && data[i].wsp_23_filepath != '') {
                        x += 1;

                        var aa2 = '<a href="' + data[i].wsp_23_filepath + '" target="_blank" download=""> ' + data[i].wsp_23_finename + '</a> ';

                        $('#report_2023_download').html(aa2);
                    }
                    if (data[i].wsp_24_filepath != null && data[i].wsp_24_filepath != '') {
                        x += 1;

                        var aa2 = '<a href="' + data[i].wsp_24_filepath + '" target="_blank" download=""> ' + data[i].wsp_24_finename + '</a> ';

                        $('#report_2024_download').html(aa2);
                    }
                    if (data[i].wsp_25_filepath != null && data[i].wsp_25_filepath != '') {
                        x += 1;

                        var aa2 = '<a href="' + data[i].wsp_25_filepath + '" target="_blank" download=""> ' + data[i].wsp_25_finename + '</a> ';

                        $('#report_2025_download').html(aa2);
                    }





                }
                $('#Approved_count').text(x);
                
            }
            else {


                alert("No Data");
            }
        }
    });

}