
var StateOfficer = StateOfficer_new;

function monthchange() {
    $('#month_gram').val('0');
}

function pagechange() {
    window.location = "WspWaterAvailability", "WspNew"
}

function getCurrentFiscalYear() {
    //get current date
    var today = new Date();
    if ((today.getMonth() + 1) <= 3) {
        fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()
    } else {
        fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
    }

    if (fiscalyear == "2020-2021") {
        fincalyear = 2020;
    } else if (fiscalyear == "2021-2022") {
        fincalyear = 2021;
    } else if (fiscalyear == "2022-2023") {
        fincalyear = 2022;
    } else if (fiscalyear == "2023-2024") {
        fincalyear = 2023;
    } else if (fiscalyear == "2024-2025") {
        fincalyear = 2024;
    }

    if (fiscalyear == "2020-2021") {
        fiscalyear = "2020-21";
    } else if (fiscalyear == "2021-2022") {
        fiscalyear = "2021-22";
    } else if (fiscalyear == "2022-2023") {
        fiscalyear = "2022-23";
    } else if (fiscalyear == "2023-2024") {
        fiscalyear = "2023-24";
    } else if (fiscalyear == "2024-2025") {
        fiscalyear = "2024-25";
    }

    return (fiscalyear);
}


function SessionInfo() {

    var obj = {};
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/MasterDropDown/State_SessionInfo_3",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
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
                $('#spnstate_state_1').hide();

                $('#StateLabel_all').hide();
                $('#StateDropdownLabel_all').hide();
                $('#DistLabel_all').hide();
                $('#DistDropdownLabel_all').hide();
                $('#BlockLabel_all').hide();
                $('#BlockDropdownLabel_all').hide();
                $('#GramLabel_all').hide();
                $('#GramDropdownLabel_all').hide();

                var Str = data.split(',');
                if (Str[0] == "Admin") {
                    $('#text_form_new').text('NPMU Level Entry Form')
                    $('#StateLabel').hide();
                    $('#StateDropdownLabel').show();
                    $('#DistLabel').hide();
                    $('#DistDropdownLabel').show();
                    $('#BlockLabel').hide();
                    $('#BlockDropdownLabel').show();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').show();
                    $('#DropdownSearch_btn').show();
                    $('#spnstate_state_1').show();
                    $('#StateLabel_state').hide();

                    $('#StateLabel_all').hide();
                    $('#StateDropdownLabel_all').show();
                    $('#DistLabel_all').hide();
                    $('#DistDropdownLabel_all').show();
                    $('#BlockLabel_all').hide();
                    $('#BlockDropdownLabel_all').show();
                    $('#GramLabel_all').hide();
                    $('#GramDropdownLabel_all').show();
                    $('#note_showid').text("Note: - The table below displays only the data approved by the district-level officer. It also presents data based on your drop-down selection. For detailed information, please use the export (CSV) option.");
                    $('#note_showid_block').text("Note: - The table below displays only the data approved by the district-level officer. It also presents data based on your drop-down selection. For detailed information, please use the export (CSV) option.");
                    $('#note_showid_district').text("Note: - The table below showcases both the submitted data for approval and the data approved by the state-level officer. It also provides information based on your drop-down selection. For more detailed information, please utilize the export (CSV) option.");
                    $('#note_showid_state').text("Note: - The table below displays only the data approved by the state-level officer. It also presents data based on your drop-down selection. For detailed information, please use the export (CSV) option.");
                    $('#note_showid_npmu').text("Note: - The table below displays accepted data only. The data is automatically approved as soon as it is entered. It also presents data based on your drop-down selection. Please use the export (CSV) option for detailed information.");

                    current_event_info_new();
                    current_event_info_new1();
                    current_event_info_new12();
                    current_event_info_new123();
                    current_event_info_new1234();

                }
                else if (Str[0] == "State Level Nodal Officer") {
                    State = Str[1];
                    off_1 = "state";
                    $('#text_form_new').text('State Level Entry Form');
                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').hide();
                    $('#DistDropdownLabel').hide();

                    $('#BlockLabel').hide();
                    $('#BlockDropdownLabel').hide();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').hide();
                    $('#DropdownSearch_btn').hide();
                    $('#spnstate_state_1').hide();
                    $('#StateLabel_state').show();
                    $('#NPMU_DIV').hide();

                    $('#spnstate_district_1').hide();
                    $('#StateLabel_district').show();

                    $('#spnstate_block_1').hide();
                    $('#StateLabel_block').show();

                    $('#spnstate_gram_1').hide();
                    $('#StateLabel_gram').show();

                    $('#spnstate_all').hide();
                    $('#StateLabel_all').show();

                    $('#StateLabel_all').show();
                    $('#StateDropdownLabel_all').hide();
                    $('#DistLabel_all').hide();
                    $('#DistDropdownLabel_all').show();
                    $('#BlockLabel_all').hide();
                    $('#BlockDropdownLabel_all').show();
                    $('#GramLabel_all').hide();
                    $('#GramDropdownLabel_all').show();
                    $('#note_showid').text("Note: - The table below displays only the data approved by the district-level officer. It also presents data based on your drop-down selection. For detailed information, please use the export (CSV) option.");
                    $('#note_showid_block').text("Note: - The table below displays only the data approved by the district-level officer. It also presents data based on your drop-down selection. For detailed information, please use the export (CSV) option.");
                    $('#note_showid_district').text("Note: - The table below showcases both the submitted data for approval and the data approved by the state-level officer. It also provides information based on your drop-down selection. For more detailed information, please utilize the export (CSV) option.");
                    $('#note_showid_state').text("Note: - The table below displays accepted data only. The data is automatically approved as soon as it is entered. It also presents data based on your drop-down selection. Please use the export (CSV) option for detailed information.");


                    State_Dropdown_Function();
                    State_Dropdown_Function();
                    State_Dropdown_Function_1();
                    State_Dropdown_Function_2();
                    State_Dropdown_Function_3();
                    State_Dropdown_Function_4();
                    State_Dropdown_Function_all();

                    current_event_info_new();
                    current_event_info_new1();
                    current_event_info_new12();
                    current_event_info_new123();
                    current_event_info_new1234();

                }
                else if (Str[0] == "District Level Nodal Officer") {
                    off_1 = "dist";
                    State = Str[1];
                    Dist = Str[2];
                    $('#text_form_new').text('District Level Entry Form');
                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').show();
                    $('#DistDropdownLabel').hide();
                    $('#BlockLabel').hide();
                    $('#BlockDropdownLabel').show();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').show();
                    $('#DropdownSearch_btn').show();

                    $('#spnstate_state_1').hide();
                    $('#StateLabel_state').show();
                    $('#NPMU_DIV').hide();

                    $('#spnstate_district_1').hide();
                    $('#StateLabel_district').show();

                    $('#dist11_district_1').hide();
                    $('#DistLabel_district').show();
                    $('#STATE').hide();

                    $('#spnstate_block_1').hide();
                    $('#StateLabel_block').show();
                    $('#dist11_block_1').hide();
                    $('#DistLabel_block').show();

                    $('#spnstate_gram_1').hide();
                    $('#StateLabel_gram').show();
                    $('#dist11_gram_1').hide();
                    $('#DistLabel_gram').show();

                    $('#spnstate_all').hide();

                    $('#dist11_all').hide();

                    $('#StateLabel_all').show();
                    $('#StateDropdownLabel_all').hide();
                    $('#DistLabel_all').show();
                    $('#DistDropdownLabel_all').hide();
                    $('#BlockLabel_all').hide();
                    $('#BlockDropdownLabel_all').show();
                    $('#GramLabel_all').hide();
                    $('#GramDropdownLabel_all').show();
                    $('#note_showid').text("Note: - The table below showcases both the submitted data for approval and the data approved by the district-level officer. It also provides information based on your drop-down selection. For more detailed information, please utilize the export (CSV) option.");
                    $('#note_showid_block').text("Note: - The table below showcases both the submitted data for approval and the data approved by the district-level officer. It also provides information based on your drop-down selection. For more detailed information, please utilize the export (CSV) option.");
                    $('#note_showid_district').text("Note: - The table below showcases both the submitted data for approval and the data approved by the state-level officer. It also provides information based on your drop-down selection. For more detailed information, please utilize the export (CSV) option.");


                    Dist_fun();
                    Dist_fun();
                    Dist_fun_2();
                    Dist_fun_3();
                    Dist_fun_all();
                    current_event_info_new();
                    current_event_info_new1();
                    current_event_info_new12();
                    current_event_info_new123();
                    current_event_info_new1234();

                }
                else if (Str[0] == "Block Level Nodal Officer") {
                    off_1 = "block";
                    State = Str[1];
                    Dist = Str[2];
                    Block = Str[3];
                    $('#text_form_new').text('Block Level Entry Form');
                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').show();
                    $('#DistDropdownLabel').hide();
                    $('#BlockLabel').show();
                    $('#BlockDropdownLabel').hide();
                    $('#GramLabel').hide();
                    $('#GramDropdownLabel').hide();
                    $('#DropdownSearch_btn').hide();
                    $('#BlockLabel_block').show();
                    $('#spnstate_state_1').hide();
                    $('#StateLabel_state').show();
                    $('#NPMU_DIV').hide();

                    $('#spnstate_district_1').hide();
                    $('#StateLabel_district').show();

                    $('#dist11_district_1').hide();
                    $('#DistLabel_district').show();
                    $('#STATE').hide();

                    $('#spnstate_block_1').hide();
                    $('#StateLabel_block').show();
                    $('#dist11_block_1').hide();
                    $('#DistLabel_block').show();
                    $('#DISTRICT').hide();

                    $('#block1_block_1').hide();
                    $('#StateLabel_all').show();
                    $('#StateDropdownLabel_all').hide();
                    $('#DistLabel_all').show();
                    $('#DistDropdownLabel_all').hide();
                    $('#BlockLabel_all').show();
                    $('#BlockDropdownLabel_all').hide();
                    $('#GramLabel_all').hide();
                    $('#GramDropdownLabel_all').show();

                    $('#spnstate_gram_1').hide();
                    $('#StateLabel_gram').show();
                    $('#dist11_gram_1').hide();
                    $('#DistLabel_gram').show();
                    $('#block1_gram_1').hide();
                    $('#BlockLabel_gram').show();
                    $('#note_showid').text("Note: - The table below displays only the data approved by the district-level officer. It also presents data based on your drop-down selection. For detailed information, please use the export (CSV) option.");
                    $('#note_showid_block').text("Note: - The table below showcases both the submitted data for approval and the data approved by the district-level officer. It also provides information based on your drop-down selection. For more detailed information, please utilize the export (CSV) option.");


                    Block_fun();
                    Block_fun();
                    Block_fun_2();

                    current_event_info_new();
                    current_event_info_new1();
                    current_event_info_new12();
                    current_event_info_new123();
                    current_event_info_new1234();

                }
                else if (Str[0] == "Gram Panchyat Nodal Officer") {

                    State = Str[1];
                    Dist = Str[2];
                    Block = Str[3];
                    Gram = Str[4];
                    $('#text_form_new').text('Gram Panchayat Level Entry Form');

                    $('#StateLabel').show();
                    $('#StateDropdownLabel').hide();
                    $('#DistLabel').show();
                    $('#DistDropdownLabel').hide();
                    $('#BlockLabel').show();
                    $('#BlockDropdownLabel').hide();
                    $('#GramLabel').show();
                    $('#GramDropdownLabel').hide();
                    $('#DropdownSearch_btn').hide();
                    $('#BlockLabel_block').show();
                    $('#spnstate_state_1').hide();
                    $('#StateLabel_state').show();
                    $('#NPMU_DIV').hide();

                    $('#spnstate_district_1').hide();
                    $('#StateLabel_district').show();

                    $('#dist11_district_1').hide();
                    $('#DistLabel_district').show();
                    $('#STATE').hide();

                    $('#spnstate_block_1').hide();
                    $('#StateLabel_block').show();
                    $('#dist11_block_1').hide();
                    $('#DistLabel_block').show();
                    $('#DISTRICT').hide();

                    $('#block1_block_1').hide();
                    $('#StateLabel_all').show();
                    $('#StateDropdownLabel_all').hide();
                    $('#DistLabel_all').show();
                    $('#DistDropdownLabel_all').hide();
                    $('#BlockLabel_all').show();
                    $('#BlockDropdownLabel_all').hide();

                    $('#BLOCK').hide();

                    $('#spnstate_gram_1').hide();
                    $('#StateLabel_gram').show();
                    $('#dist11_gram_1').hide();
                    $('#DistLabel_gram').show();
                    $('#block1_gram_1').hide();
                    $('#BlockLabel_gram').show();
                    $('#GramLabel_gram').show();
                    $('#GramDropdownLabel_gram').hide();
                    $('#GramLabel_all').show();
                    $('#GramDropdownLabel_all').hide();
                    $('#note_showid').text("Note: - The table below displays only the entered data. It also presents data based on your drop-down selection.For detailed information, please use the export(CSV) option.");


                    current_event_info_new();
                    current_event_info_new1();
                    current_event_info_new12();
                    current_event_info_new123();
                    current_event_info_new1234();
                }


            }
        }

    });
    $('.loader').hide();

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
                var opstate = '<option value="0">Select StateName</option>';
                $("#spnstate").append(opstate);

                $("#spnstate_state_1").empty();
                var opstate = '<option value="0">Select StateName</option>';
                $("#spnstate_state_1").append(opstate);

                $("#dist11").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11").append(opdist);

                $("#dist11_district_1").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11_district_1").append(opdist);

                $("#dist11_block_1").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11_block_1").append(opdist);

                $("#dist11_gram_1").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11_gram_1").append(opdist);

                $("#dist11_all").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11_all").append(opdist);

                $("#block1").empty();
                var opblock = '<option value="0">Select Block</option>';
                $("#block1").append(opblock);

                $("#block1_block_1").empty();
                var opblock = '<option value="0">Select Block</option>';
                $("#block1_block_1").append(opblock);

                $("#block1_gram_1").empty();
                var opblock = '<option value="0">Select Block</option>';
                $("#block1_gram_1").append(opblock);

                $("#block1_all").empty();
                var opblock = '<option value="0">Select Block</option>';
                $("#block1_all").append(opblock);

                $("#gram1").empty();
                var opgram = '<option value="0">Select GramPanchayat</option>';
                $("#gram1").append(opgram);

                $("#gram1_gram_1").empty();
                var opgram = '<option value="0">Select GramPanchayat</option>';
                $("#gram1_gram_1").append(opgram);

                //$("#gram").empty();
                //var opgram = '<option value="0">Select GramPanchayat</option>';
                //$("#gram").append(opgram);
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
                    /*optionState = '<option value="0">Select StateName</option>';*/
                    optionState = '<option value="All">All</option>';
                    for (var i = 0; i < DistArray.length; i++) {
                        if (DistArray[i] != null && DistArray[i] != "") {
                            optionState += '<option value="' + DistArray[i] + '">' + DistArray[i] + '</option>';
                        }
                    }
                    $("#spnstate").html(optionState);
                    $("#spnstate_state_1").html(optionState);
                    $("#spnstate_district_1").html(optionState);
                    $("#spnstate_block_1").html(optionState);
                    $("#spnstate_all").html(optionState);
                    $("#spnstate_gram_1").html(optionState);
                }

            }

            SessionInfo();


        }
    });
}
function DropDownInfo1() {

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Home/Sign_Up_DropdownInfo",
        data: "{ }",
        dataType: 'JSON',
        success: function (response) {

            if (response.length != 0) {
                Jsondata = response;


                $("#dist11_all").empty();
                var opdist = '<option value="0">Select District</option>';
                $("#dist11_all").append(opdist);
                $("#block1_all").empty();
                var opblock = '<option value="0">Select Block</option>';
                $("#block1_all").append(opblock);
                $("#gram1_all").empty();
                var opgram = '<option value="0">Select GramPanchayat</option>';
                $("#gram1_all").append(opgram);

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
                    /*optionState = '<option value="0">Select StateName</option>';*/
                    optionState = '<option value="All">All</option>';
                    optionState += '<option value="NPMU (Delhi)">NPMU (Delhi)</option>';

                    for (var i = 0; i < DistArray.length; i++) {
                        if (DistArray[i] != null && DistArray[i] != "") {
                            optionState += '<option value="' + DistArray[i] + '">' + DistArray[i] + '</option>';
                        }
                    }

                    $("#spnstate_all").html(optionState);

                }

            }

            SessionInfo();


        }
    });
}
function NPMU() {

    var npmu = $("#spnstate_all").val();
    if (npmu == 'NPMU (Delhi)') {
        $("#dist11_all").hide();
        $("#block1_all").hide();
        $("#gram1_all").hide();
    }
    else {
        $("#dist11_all").show();
        $("#block1_all").show();
        $("#gram1_all").show();
    }

}


function State_Dropdown_Function() {

    $("#dist11").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11").append(opdist);

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1").append(opgram);

    var StateName = $("#spnstate").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
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
    Dist_fun();
    /*event_current_info_new2();*/

}
function State_Dropdown_Function_1() {


    //$("#dist11").empty();
    //var opdist = '<option value="0">Select District</option>';
    //$("#dist11").append(opdist);

    $("#dist11_district_1").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11_district_1").append(opdist);

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1").append(opgram);

    var StateName = $("#spnstate_district_1").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
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
function State_Dropdown_Function_2() {


    $("#dist11_district_1").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11_district_1").append(opdist);

    $("#dist11_block_1").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11_block_1").append(opdist);

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1").append(opgram);

    var StateName = $("#spnstate_district_1").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
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
        /* $("#dist11").append(optionDist);*/
        $("#dist11_district_1").append(optionDist);
    }
    /*Dist_fun();*/
    //Dist_fun_1();
    /*event_calendar_info_new2();*/
}
function State_Dropdown_Function_3() {

    //$("#dist11").empty();
    //var opdist = '<option value="0">Select District</option>';
    //$("#dist11").append(opdist);

    $("#dist11_block_1").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11_block_1").append(opdist);

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1").append(opgram);

    var StateName = $("#spnstate_block_1").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
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
        /* $("#dist11").append(optionDist);*/
        $("#dist11_block_1").append(optionDist);
    }
    /*Dist_fun();*/
    Dist_fun_2();
    /*event_calendar_info_new2();*/
}

function State_Dropdown_Function_4() {

    //$("#dist11").empty();
    //var opdist = '<option value="0">Select District</option>';
    //$("#dist11").append(opdist);

    $("#dist11_gram_1").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11_gram_1").append(opdist);

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1").append(opgram);

    var StateName = $("#spnstate_gram_1").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
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
        /* $("#dist11").append(optionDist);*/
        $("#dist11_gram_1").append(optionDist);
    }
    /*Dist_fun();*/
    Dist_fun_3();
    /*event_calendar_info_new2();*/
}

function State_Dropdown_Function_all() {
    NPMU();


    $("#dist11_all").empty();
    var opdist = '<option value="0">Select District</option>';
    $("#dist11_all").append(opdist);

    $("#block1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1").append(opblock);
    $("#gram1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1").append(opgram);

    var StateName = $("#spnstate_all").val();
    if (off_1 == "state") {
        StateName = State;
    } else {
        State = StateName;
    }

    if (StateName != "0" && Jsondata.length != 0) {
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
        /* $("#dist11").append(optionDist);*/

        $("#dist11_all").append(optionDist);
    }
    /*Dist_fun();*/
    Dist_fun_all();
    /*event_calendar_info_new2();*/
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
        var ddlst = {};
        var all_blocks = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            //if (Jsondata[i].district_name == 'Kaithal' ) {
            //    alert(dist);

            //    return;
            //}

            if (dist == Jsondata[i].district_name && State == Jsondata[i].state_name) {

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
    Block_fun();
    /*event_current_info_new2();*/
}
function Dist_fun_2() {

    //$("#block1").empty();
    //var opblock = '<option value="0">Select Block</option>';
    //$("#block1").append(opblock);
    $("#block1_block_1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1_block_1").append(opblock);

    //$("#gram").empty();
    //var opgram = '<option value="0">Select GramPanchayat</option>';
    //$("#gram").append(opgram);

    var dist = $("#dist11_block_1").val();
    if (off_1 == "dist") {
        dist = Dist;
    } else {
        Dist = dist;
    }

    if (dist != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_blocks = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            //if (Jsondata[i].district_name == 'Kaithal' ) {
            //    alert(dist);

            //    return;
            //}

            if (dist == Jsondata[i].district_name && State == Jsondata[i].state_name) {

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
        $("#block1_block_1").append(optionDist);

    }
    /* Block_fun();*/
    /*event_calendar_info_new2();*/
}

function Dist_fun_3() {

    //$("#block1").empty();
    //var opblock = '<option value="0">Select Block</option>';
    //$("#block1").append(opblock);
    $("#block1_gram_1").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1_gram_1").append(opblock);

    $("#gram1_gram_1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1_gram_1").append(opgram);

    var dist = $("#dist11_gram_1").val();
    if (off_1 == "dist") {
        dist = Dist;
    } else {
        Dist = dist;
    }

    if (dist != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_blocks = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            //if (Jsondata[i].district_name == 'Kaithal' ) {
            //    alert(dist);

            //    return;
            //}

            if (dist == Jsondata[i].district_name && State == Jsondata[i].state_name) {

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
        $("#block1_gram_1").append(optionDist);

    }
    /* Block_fun();*/
    /*event_calendar_info_new2();*/
}

function Dist_fun_all() {

    //$("#block1").empty();
    //var opblock = '<option value="0">Select Block</option>';
    //$("#block1").append(opblock);
    $("#block1_all").empty();
    var opblock = '<option value="0">Select Block</option>';
    $("#block1_all").append(opblock);

    $("#gram1_all").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1_all").append(opgram);

    var dist = $("#dist11_all").val();
    if (off_1 == "dist") {
        dist = Dist;
    } else {
        Dist = dist;
    }

    if (dist != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_blocks = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            //if (Jsondata[i].district_name == 'Kaithal' ) {
            //    alert(dist);

            //    return;
            //}

            if (dist == Jsondata[i].district_name && State == Jsondata[i].state_name) {

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
        $("#block1_all").append(optionDist);

    }
    /* Block_fun();*/
    /*event_calendar_info_new2();*/
}

function Block_fun() {

    $("#gram1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1").append(opgram);
    var block = $("#block1").val();

    if (off_1 == "block") {
        block = Block;
    } else {
        Block = block;
    }


    if (block != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_grams = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (State == Jsondata[i].state_name && Dist == Jsondata[i].district_name && block == Jsondata[i].block_name) {

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
        $("#gram1").append(optionDist);
    }
    /*event_current_info_new2();*/
}

function Block_fun_2() {

    $("#gram1_gram_1").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1_gram_1").append(opgram);
    var block = $("#block1_gram_1 option:selected").text();

    if (off_1 == "block") {
        block = Block;
    } else {
        Block = block;
    }


    if (block != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_grams = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (State == Jsondata[i].state_name && Dist == Jsondata[i].district_name && block == Jsondata[i].block_name) {

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
        $("#gram1_gram_1").append(optionDist);
    }
    /* event_calendar_info_new2();*/
}

function Block_fun_all() {

    $("#gram1_all").empty();
    var opgram = '<option value="0">Select GramPanchayat</option>';
    $("#gram1_all").append(opgram);
    var block = $("#block1_all option:selected").text();

    if (off_1 == "block") {
        block = Block;
    } else {
        Block = block;
    }


    if (block != "0" && Jsondata.length != 0) {
        var ddlst = {};
        var all_grams = [];
        var optionDist = '';
        for (var i = 0; i < Jsondata.length; i++) {
            if (State == Jsondata[i].state_name && Dist == Jsondata[i].district_name && block == Jsondata[i].block_name) {

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
        $("#gram1_all").append(optionDist);
    }
    /* event_calendar_info_new2();*/
}


function formatDate() {

    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
function current_event_info_new() {
    $('.loader').show();//for NPMU
    var npmu = $('#NPMU_1').val();
    var year = $('#year').val();
    var month = $('#month').val();
    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/current_event_Data_New',
        data: "{'npmu':'" + npmu + "' , 'year':'" + year + "' , 'month':'" + month + "'}",
        dataType: 'JSON',
        success: function (data) {

            var ToDayDate = formatDate();

            $('#npmu_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var p_training_name = data[i].p_training_name;
                    if (p_training_name == null) {
                        p_training_name = "";
                    }
                    var type_of_event = data[i].type_of_event;
                    if (type_of_event == null) {
                        type_of_event = "";
                    }
                    var location_expo = data[i].location_expo;
                    if (location_expo == null) {
                        location_expo = "";
                    }
                    var particular_expo = data[i].particular_expo;
                    if (particular_expo == null) {
                        particular_expo = "";
                    }
                    var event_platform = data[i].event_platform;
                    if (event_platform == null) {
                        event_platform = "";
                    }
                    var year = data[i].year;
                    if (year == null) {
                        year = "";
                    }
                    var month = data[i].month;
                    if (month == null) {
                        month = "";
                    }
                    var district = data[i].district;
                    if (district == null) {
                        district = "";
                    }

                    var block = data[i].block;
                    if (block == null) {
                        block = ""
                    }
                    var gp = data[i].gp;
                    if (gp == null) {
                        gp = ""
                    }
                    var from_date = data[i].from_date;
                    if (from_date == null) {
                        from_date = ""
                    }
                    var to_date = data[i].to_date;
                    if (to_date == null) {
                        to_date = ""
                    }
                    var reg_open_date = data[i].reg_open_date;
                    if (reg_open_date == null) {
                        reg_open_date = ""
                    }
                    var reg_close_date = data[i].reg_close_date;
                    if (reg_close_date == null) {
                        reg_close_date = ""
                    }

                    if (to_date >= ToDayDate) {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + year + '</td> <td>' + month + '</td> <td>' + event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary disabled_btn" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger disabled_btn" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                            '<td> <input type="text" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="0">' + type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                            '<td> <input type="text" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                            '<td> <input type="text" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +

                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="state1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + year + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + month + '" readonly /></td>' +

                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="0">' + event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + data[i].from_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + data[i].to_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="opendate1' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="closedate1' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        /**/
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    } else {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + type_of_event + '</td> <td>' + location_expo + '</td> <td>' + particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + year + '</td> <td>' + month + '</td> <td>' + event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" disabled onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" disabled onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                            '<td> <input type="text" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="0">' + type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                            '<td> <input type="text" class="form-control" id="typother1' + i + '" value="' + location_expo + '" /></td>' +
                            '<td> <input type="text" class="form-control" id="typother2' + i + '" value="' + particular_expo + '" /></td>' +

                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="state1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + year + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + month + '" readonly /></td>' +

                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="0">' + event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + data[i].from_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + data[i].to_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="opendate1' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="closedate1' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        /**/
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    }

                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1').html(tr);
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1').html(tr);
                $('.loader').hide();
            }
            if (access == "readonly") {
                $(".disabled_btn").prop("disabled", true);
                $('.loader').hide();
            }
        }
    });
}
function current_event_info_new1() {       //For STATE
    $('.loader').show();
    var StateOfficer = StateOfficer_new;
    var year_state = $('#year option:selected').val();
    var month_state = $('#month option:selected').val();
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_state_1 = $('#spnstate_state_1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_state_1 = $('#spnstate1').text();
    }

    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/current_event_Data_New1',
        data: "{'spnstate_state_1':'" + spnstate_state_1 + "' , 'year_state':'" + year_state + "' , 'month_state':'" + month_state + "'}",
        dataType: 'JSON',
        success: function (data) {
            var ToDayDate = formatDate();
            $('#state_total').text('0');
            $('#state_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var ToDayDate = formatDate();
            var tr = '';
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
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting_state' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td></tr>';
                    }
                    else if (StateOfficer == 'State Level Nodal Officer') {
                        if (data[i].to_date >= ToDayDate) {
                            tr += '<tr id="AWP1_TR_Meeting_state' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_state(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_state' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control" id="topic_event1_S' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                '<td><select class="form-control" id="typ1_S' + i + '" onchange="Category_hide11(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                '<td> <input type="text" class="form-control" id="typother1_S' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                '<td> <input type="text" class="form-control" id="typother2_S' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                '<td> <input type="text" class="form-control" id="state1_S' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="year1_S' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="month1_S' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                '<td><select class="form-control" id="event_platform1_S' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                '<td> <input type="date" class="form-control" id="fdate1_S' + i + '" value="' + data[i].from_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_S' + i + '" value="' + data[i].to_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="opendate1_S' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="closedate1_S' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_state(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_state(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            /**/
                            $('#typ1' + i).val(data[i].type_of_event);
                            $('#event1' + i).val(data[i].event_platform);
                        } else {
                            tr += '<tr id="AWP1_TR_Meeting_state' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" disabled onclick="editrowcomp_A_Good2_state(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" disabled onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_state' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control" id="topic_event1_S' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                '<td><select class="form-control" id="typ1_S' + i + '" onchange="Category_hide11(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                '<td> <input type="text" class="form-control" id="typother1_S' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                '<td> <input type="text" class="form-control" id="typother2_S' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                '<td> <input type="text" class="form-control" id="state1_S' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="year1_S' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="month1_S' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                '<td><select class="form-control" id="event_platform1_S' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                '<td> <input type="date" class="form-control" id="fdate1_S' + i + '" value="' + data[i].from_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_S' + i + '" value="' + data[i].to_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="opendate1_S' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="closedate1_S' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_state(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_state(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            /**/
                            $('#typ1' + i).val(data[i].type_of_event);
                            $('#event1' + i).val(data[i].event_platform);
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_state').html(tr);
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1_state').html(tr);
                $('.loader').hide();
            }

        }
    });
}
function current_event_info_new12() {
    //For DISTRICT
    $('.loader').show();
    var StateOfficer = StateOfficer_new;
    var year_district = $('#year').val();
    var month_district = $('#month').val();
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_district_1 = $('#spnstate_district_1 option:selected').text();
        var dist11_district_1 = $('#dist11_district_1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_district_1 = $('#spnstate1').text();
        var dist11_district_1 = $('#dist11_district_1 option:selected').text();
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var spnstate_district_1 = $('#spnstate1').text();
        var dist11_district_1 = $('#spndistrict').text();
    }
    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/current_event_Data_New12',
        data: "{'spnstate_district_1':'" + spnstate_district_1 + "' , 'dist11_district_1':'" + dist11_district_1 + "' , 'year_district':'" + year_district + "' , 'month_district':'" + month_district + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#district_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            var j = 0;
            var ap = 0;
            var atdp = 0;
            var atgp = 0;
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
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To SPMU") {
                            atdp++;
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'State Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To SPMU") {
                            atdp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittospmu(' + data[i].id + ')">Approve</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_district(' + i + ')"><i class="fa fa-remove"></i></button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittospmu(' + data[i].id + ')">Approve</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_district(' + i + ');"><i class="fa fa-remove"></i></button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'District Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To SPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Submitted To SPMU</label></td></tr>';
                        }
                        else {
                            atgp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_district(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittodpmu(' + data[i].id + ')">Submitted To SPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger" type="button" onclick="cancelcomp_A_Support_district(' + i + ')"><i class="fa fa-remove"></i></button></td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_district(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittodpmu(' + data[i].id + ')">Submitted To SPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_district(' + i + ');"><i class="fa fa-remove"></i></button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_district').html(tr);
                $('#dist_total').text("0");
                $('#dist_ap').text("0");
                $('#dist_sub_sp').text("0");
                $('#dist_pen_sp').text("0");
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1_district').html(tr);
                $('#dist_total').text(data.length);
                $('#dist_ap').text(ap);
                $('#dist_sub_sp').text(atdp);
                $('#dist_pen_sp').text(atgp);
                $('.loader').hide();
            }

        }
    });
}
function current_event_info_new123() {
    $('.loader').show();//For BLOCK
    var year_block = $('#year').val();
    var month_block = $('#month').val();
    var StateOfficer = StateOfficer_new;
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate_block_1 option:selected').text();
        var dist11_block_1 = $('#dist11_block_1 option:selected').text();
        var block1_block_1 = $('#block1_block_1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate1').text();
        var dist11_block_1 = $('#dist11_block_1 option:selected').text();
        var block1_block_1 = $('#block1_block_1 option:selected').text();
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate1').text();
        var dist11_block_1 = $('#spndistrict').text();
        var block1_block_1 = $('#block1_block_1 option:selected').text();
    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate1').text();
        var dist11_block_1 = $('#spndistrict').text();
        var block1_block_1 = $('#spnblock').text();
    }
    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/current_event_Data_New123',
        data: "{'spnstate_block_1':'" + spnstate_block_1 + "' , 'dist11_block_1':'" + dist11_block_1 + "' , 'block1_block_1':'" + block1_block_1 + "' , 'year_block':'" + year_block + "' , 'month_block':'" + month_block + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#block_total').text("");
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            var j = 0;
            var ap = 0;
            var atdp = 0;
            var atgp = 0;
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
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer" || StateOfficer == "State Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'Block Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Submitted To DPMU</label></td></tr>';
                        }
                        else {
                            atgp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_block(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="submittodpmu(' + data[i].id + ');">Submitted To DPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' + '<td><button class="btn btn-primary " type="button" onclick="submittodpmu(' + data[i].id + ');">Submitted To DPMU</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_block(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td> <td><button class="btn btn-primary " type="button" onclick="submittodpmu(' + data[i].id + ');">Submitted To DPMU</button></td >' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                    }
                    else if (StateOfficer == 'District Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="submittospmu(' + data[i].id + ');">Approve</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td> <td><button class="btn btn-primary " type="button" onclick="submittospmu(' + data[i].id + ');">Approve</button></td >' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            atgp++;
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_block').html(tr);
                $('#block_total').text("0");
                $('#block_ap').text("0");
                $('#block_sub_sp').text("0");
                $('#block_pen_sp').text("0");
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1_block').html(tr);
                $('#block_total').text(data.length);
                $('#block_ap').text(ap);
                $('#block_sub_sp').text(atdp);
                $('#block_pen_sp').text(atgp);
                $('.loader').hide();
            }

        }
    });
}

function submittodpmu(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/MasterDropDown/submittodpmu",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            current_event_info_new123();
        }
    });
}
function submittospmu(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/MasterDropDown/submittospmu",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            current_event_info_new123();
        }
    });

}
function distsubmittodpmu(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/MasterDropDown/distsubmittodpmu",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            current_event_info_new12();
        }
    });
}
function distsubmittospmu(ss) {

    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/MasterDropDown/distsubmittospmu",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            current_event_info_new12();
        }
    });

}

function current_event_info_new1234() {
    //For GP
    
    $(".loader").show();
    var year_gram = $('#year').val();
    var month_gram = $('#month').val();
    var StateOfficer = StateOfficer_new;
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate_gram_1 option:selected').text();
        var dist11_gram_1 = $('#dist11_gram_1 option:selected').text();
        var block1_gram_1 = $('#block1_gram_1 option:selected').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#dist11_gram_1 option:selected').text();
        var block1_gram_1 = $('#block1_gram_1 option:selected').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();

    }
    if (StateOfficer == "District Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#spndistrict').text();
        var block1_gram_1 = $('#block1_gram_1 option:selected').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();

    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#spndistrict').text();
        var block1_gram_1 = $('#spnblock').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();

    }
    if (StateOfficer == "Gram Panchyat Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#spndistrict').text();
        var block1_gram_1 = $('#spnblock').text();
        var gram1_gram_1 = $('#spngram').text();
    }
    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/current_event_Data_New1234',
        data: "{'spnstate_gram_1':'" + spnstate_gram_1 + "' , 'dist11_gram_1':'" + dist11_gram_1 + "' , 'block1_gram_1':'" + block1_gram_1 + "' , 'gram1_gram_1':'" + gram1_gram_1 + "' , 'year_gram':'" + year_gram + "' , 'month_gram':'" + month_gram + "'}",
        dataType: 'JSON',
        success: function (data) {

            $('#gram_total').text("");
            $('#gram_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            var tr = '';
            var j = 0;
            var ap = 0;
            var atdp = 0;
            var atgp = 0;
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
                    var gram = data[i].gp;
                    if (gram == null) {
                        gram = ""
                    }
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer" || StateOfficer == "State Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'District Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogpdp(' + data[i].id + ');">Approved</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogpdp(' + data[i].id + ');">Approved</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'Block Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: blue;">Submitted To DPMU </label></td></tr>';
                        }
                        else {
                            atgp++;

                        }
                    }
                    else if (StateOfficer == 'Gram Panchyat Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: blue;">Submitted To DPMU </label></td></tr>';
                        }
                        else {
                            atgp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_gram(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogp(' + data[i].id + ');">Submitted To DPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_gram(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogp(' + data[i].id + ');">Submitted To DPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_gram').html(tr);
                $('#approve_count_gp').text("0");
                $('#atdpmu_count_gp').text("0");
                $('#total_gp').text("0");
                $('#at_gp_count_gp').text("0");
                $(".loader").hide();

            }
            else {
                $('#Training_Workshop_New1_gram').html(tr);
                $('#approve_count_gp').text(ap);
                $('#atdpmu_count_gp').text(atdp);
                $('#total_gp').text(data.length);
                $('#at_gp_count_gp').text(atgp);
                $(".loader").hide();
            }

        }
    });
}

function distsubmittogp(ss) {
    $(".loader").show();
    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/MasterDropDown/distsubmittogp",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            current_event_info_new1234();
        }
    });
}
function distsubmittogpdp(ss) {
    $(".loader").show();
    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/MasterDropDown/distsubmittogplevel",
        data: "{'Data': '" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert(response);
            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            current_event_info_new1234();
        }
    });

}


function Save_current_event() {               //abhi

    var StateOfficer = StateOfficer_new;

    var NPMU = $("#NPMU option:selected").text();
    var current_event = $("#spnstate option:selected").text();
    var current_event1 = $("#dist11 option:selected").text();
    var current_event2 = $("#block1 option:selected").text();
    var current_event3 = $("#gram1 option:selected").text();

    var p_training_name = $("#p_training_name").val();    //abhi
    var type_of_event = $("#type_event option:selected").val();
    var location_expo = $("#loc_expo").val();
    var particular_expo = $("#parti_expo").val();

    var year = $("#year option:selected").val();
    var month = $("#month option:selected").val();
    var event_platform = $("#event_platform option:selected").val();
    var from_date = $("#from_date").val();
    var to_date = $("#to_date").val();
    var reg_open_date = $("#reg_open_date").val();
    var reg_close_date = $("#reg_close_date").val();

    var formdata = new FormData();

    var state = $("#spnstate").text();
    if (state == "0") {
        alert('Select State');
        return;
    }
    var dis = $("#dist11").text();
    if (dis == "0") {
        alert('Select District');
        return;
    }
    var block = $("#block1").text();
    if (block == "0") {
        alert('Select Block');
        return;
    }

    if (year == "0") {
        alert('Select Year');
        return;
    }

    if (month == "0") {
        alert('Select Month');
        return;
    }
    if (p_training_name == "") {
        alert('Enter Topic of Event');
        return;
    }
    if (type_of_event == "0") {
        alert('Select Type of Event');
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

    var event_platform = $("#event_platform option:selected").val();
    if (type_of_event == "Exposure Visits") {
        event_platform = "";
    }
    if (event_platform == "0") {
        alert('Select Event Platform')
        return;

    }
    if (from_date == "") {
        alert('Enter From date');
        return;
    }
    if (to_date == "") {
        alert('Enter To Date');
        return;
    }

    if (new Date(from_date) > new Date(to_date)) {
        alert("Please Choose From Date is less than To Date");
        return;
    }

    if (StateOfficer != "Gram Panchyat Nodal Officer") {

        var block = $("#gram1").text();
        if (block == "0") {
            alert('Select GramPanchayat');
            return;
        }

        if (reg_open_date == "") {
            alert('Enter Registration Open Date');
            return;
        }
        if (reg_close_date == "") {
            alert('Enter Registration Close Date');
            return;
        }
        if (Date.parse(reg_open_date) > Date.parse(reg_close_date)) {
            alert("Please Choose Registration Open Date is less than from Registration Close Date");
            return;
        }
        if (Date.parse(reg_open_date) > Date.parse(from_date)) {
            alert("Please Choose Registration Open Date is less than From Date");
            return;
        }
        //if (Date.parse(reg_open_date) == Date.parse(from_date)) {
        //    alert("Please Choose Registration Open Date is less than From Date");
        //    return;
        //}
        if (Date.parse(reg_close_date) > Date.parse(from_date)) {
            alert("Please Choose Registration Close Date is less than From Date");
            return;
        }
        //if (Date.parse(reg_close_date) == Date.parse(from_date)) {
        //    alert("Please Choose Registration Close Date is less than From Date");
        //    return;
        //}
    }


    formdata.append("NPMU", NPMU);
    formdata.append("current_event", current_event);
    formdata.append("current_event1", current_event1);
    formdata.append("current_event2", current_event2);
    formdata.append("current_event3", current_event3);
    formdata.append("year", year);
    formdata.append("month", month);

    formdata.append("p_training_name", p_training_name);
    formdata.append("type_of_event", type_of_event);
    formdata.append("location_expo", location_expo);
    formdata.append("particular_expo", particular_expo);

    formdata.append("event_platform", event_platform);
    formdata.append("from_date", from_date);
    formdata.append("to_date", to_date);

    if (StateOfficer != "Gram Panchyat Nodal Officer") {
        formdata.append("reg_open_date", reg_open_date);
        formdata.append("reg_close_date", reg_close_date);
    }


    $.ajax({
        url: '/MasterDropDown/Save_current_event_Data',
        data: formdata,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response == "Successfully Saved") {
                /* $("#current_event").val("0");*/
                $("#p_training_name").val("");
                $("#type_event").val("0");
                $("#loc_expo").val("");
                $("#parti_expo").val("");
                /* $("#level_event").val("");*/
                //$("#spnstate").val("0");
                //$("#dist11").val("0");
                //$("#block1").val("0");
                //$("#year").val("0");
                //$("#month").val("0");
                $("#event_platform").val("0");
                $("#from_date").val("");
                $("#to_date").val("");
                $("#reg_open_date").val("");
                $("#reg_close_date").val("");

                /*current_event_info();*/
                current_event_info_new();
                current_event_info_new1();
                current_event_info_new12();
                current_event_info_new123();
                current_event_info_new1234();
            }


        },
        error: function () {
            alert('Data Insert Failed');
        }
    });
    $("#LEV").hide();
    $("#PEV").hide();
}

function editrowcomp_A_Good2(i) {
    /* */
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
}

function cancelcomp_A_Support(i) {
    /*  */
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

function editrowcomp_A_Good2_state(i) {
    /* */
    $('#AWP1_TR_Meeting_state' + i).hide();
    $('#hide_AWP1_TR_Meeting_state' + i).show();

    var typ1 = $('#typ1_S' + i).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        $('#typother1_S' + i).show();
        $('#typother2_S' + i).show();
        $('#event_platform1_S' + i).hide();
    }
    else {
        $('#typother1_S' + i).hide();
        $('#typother2_S' + i).hide();
        $('#event_platform1_S' + i).show();
    }
}

function cancelcomp_A_Support_state(i) {
    /*  */
    $('#AWP1_TR_Meeting_state' + i).show();
    $('#hide_AWP1_TR_Meeting_state' + i).hide();
}

function Category_hide11(a) {

    var typ_name = $('#typ1_S' + a).val();

    if (typ_name == "Exposure Visits") {

        $('#typother1_S' + a).show();
        $('#typother2_S' + a).show();
        $('#event_platform1_S' + a).hide();

    } else {
        $('#typother1_S' + a).hide();
        $('#typother2_S' + a).hide();
        $('#event_platform1_S' + a).show();
    }

}

function editrowcomp_A_Good2_district(i) {

    $('#AWP1_TR_Meeting_district' + i).hide();
    $('#hide_AWP1_TR_Meeting_district' + i).show();

    var typ1 = $('#typ1_D' + i).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        $('#typother1_D' + i).show();
        $('#typother2_D' + i).show();
        $('#event_platform1_D' + i).hide();
    }
    else {
        $('#typother1_D' + i).hide();
        $('#typother2_D' + i).hide();
        $('#event_platform1_D' + i).show();

    }
}

function cancelcomp_A_Support_district(i) {
    /*  */
    $('#AWP1_TR_Meeting_district' + i).show();
    $('#hide_AWP1_TR_Meeting_district' + i).hide();
}

function Category_hide112(a) {

    var typ_name = $('#typ1_D' + a).val();

    if (typ_name == "Exposure Visits") {

        $('#typother1_D' + a).show();
        $('#typother2_D' + a).show();
        $('#event_platform1_D' + a).hide();
    } else {
        $('#typother1_D' + a).hide();
        $('#typother2_D' + a).hide();
        $('#event_platform1_D' + a).show();
    }

}

function editrowcomp_A_Good2_block(i) {
    /* */
    $('#AWP1_TR_Meeting_block' + i).hide();
    $('#hide_AWP1_TR_Meeting_block' + i).show();

    var typ1 = $('#typ1_B' + i).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        $('#typother1_B' + i).show();
        $('#typother2_B' + i).show();
        $('#event_platform1_B' + i).hide();
    }
    else {
        $('#typother1_B' + i).hide();
        $('#typother2_B' + i).hide();
        $('#event_platform1_B' + i).show();
    }
}

function cancelcomp_A_Support_block(i) {
    /*  */
    $('#AWP1_TR_Meeting_block' + i).show();
    $('#hide_AWP1_TR_Meeting_block' + i).hide();
}

function Category_hide1123(a) {

    var typ_name = $('#typ1_B' + a).val();

    if (typ_name == "Exposure Visits") {

        $('#typother1_B' + a).show();
        $('#typother2_B' + a).show();
        $('#event_platform1_B' + a).hide();
    } else {
        $('#typother1_B' + a).hide();
        $('#typother2_B' + a).hide();
        $('#event_platform1_B' + a).show();
    }

}

function editrowcomp_A_Good2_gram(i) {

    $('#AWP1_TR_Meeting_gram' + i).hide();
    $('#hide_AWP1_TR_Meeting_gram' + i).show();

    var typ1 = $('#typ1_G' + i).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        $('#typother1_G' + i).show();
        $('#typother2_G' + i).show();
        $('#event_platform1_G' + i).hide();
    }
    else {
        $('#typother1_G' + i).hide();
        $('#typother2_G' + i).hide();
        $('#event_platform1_G' + i).show();
    }
}

function cancelcomp_A_Support_gram(i) {
    /*  */
    $('#AWP1_TR_Meeting_gram' + i).show();
    $('#hide_AWP1_TR_Meeting_gram' + i).hide();
}

function Category_hide11234(a) {

    var typ_name = $('#typ1_G' + a).val();

    if (typ_name == "Exposure Visits") {

        $('#typother1_G' + a).show();
        $('#typother2_G' + a).show();
        $('#event_platform1_G' + a).hide();
    } else {
        $('#typother1_G' + a).hide();
        $('#typother2_G' + a).hide();
        $('#event_platform1_G' + a).show();
    }

}

function Delete_Curr_Evt(Id) {
    if (confirm("Do You want to delete")) {
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
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                current_event_info_new();
                current_event_info_new1();
                current_event_info_new12();
                current_event_info_new123();
                current_event_info_new1234();
            }
        });
    }
}

function type_of_event() {

    var abc = $("#type_event").val();
    if (abc == 'Exposure Visits') {
        $('#EventPlatform').hide();
        $('#EventPlatform1').hide();
        $("#LEV").show();
        $("#PEV").show();
    }
    else {
        $('#EventPlatform').show();
        $('#EventPlatform1').show();
        $("#LEV").hide();
        $("#PEV").hide();

    }
}

function Update_AWP1(id, RowNo) {

    var npmu1 = $('#npmu1' + RowNo).val();
    var id = id;
    var topic_event1 = $('#topic_event1' + RowNo).val();

    var typ1 = $('#typ1' + RowNo).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        var typother1 = $('#typother1' + RowNo).val();
        var typother2 = $('#typother2' + RowNo).val();
    }
    else {
        var typother1 = $('#typother1' + RowNo).val();
        typother1 = "";
        var typother2 = $('#typother2' + RowNo).val();
        typother2 = "";
    }

    //var state1 = $('#state1' + RowNo).val();
    //var dist1 = $('#district1' + RowNo).val();
    //var block1 = $('#block1' + RowNo).val();

    var event_platform1 = $('#event_platform1' + RowNo).find('option:selected').text();

    var fdate1 = $('#fdate1' + RowNo).val();
    var tdate1 = $('#tdate1' + RowNo).val();
    var opendate1 = $('#opendate1' + RowNo).val();
    var closedate1 = $('#closedate1' + RowNo).val();

    if (new Date(fdate1) > new Date(tdate1)) {
        alert("Please Choose a Different TO Date.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(closedate1)) {
        alert("Please Choose a Different Registration Open Close Dates.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Dates.");
        return;
    }
    if (Date.parse(closedate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Registration Close Dates.");
        return;
    }
    var formData = new FormData();

    formData.append("id", id);
    formData.append("NPMU", npmu1);
    formData.append("topic_event", topic_event1);
    formData.append("typ", typ1);
    formData.append("typother_one", typother1);
    formData.append("typother_two", typother2);
    //formData.append('State', state1);
    //formData.append('District', dist1);
    //formData.append('Block', block1);
    formData.append('event_platform', event_platform1);
    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);
    formData.append('opendate_d', opendate1);
    formData.append('closedate_d', closedate1);

    $.ajax({
        url: '/MasterDropDown/Update_Curr_Part_Info',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            current_event_info_new();
            current_event_info_new1();
            current_event_info_new12();
            current_event_info_new123();
            current_event_info_new1234();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}

function Update_AWP1_state(id, RowNo) {

    /*var npmu1 = $('#npmu1' + RowNo).val();*/
    var id = id;
    var topic_event1 = $('#topic_event1_S' + RowNo).val();

    var typ1 = $('#typ1_S' + RowNo).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        var typother1 = $('#typother1_S' + RowNo).val();
        var typother2 = $('#typother2_S' + RowNo).val();
    }
    else {
        var typother1 = $('#typother1_S' + RowNo).val();
        typother1 = "";
        var typother2 = $('#typother2_S' + RowNo).val();
        typother2 = "";
    }
    var state1 = $('#state1_S' + RowNo).val();
    //var dist1 = $('#district1' + RowNo).val();
    //var block1 = $('#block1' + RowNo).val();

    var event_platform1 = $('#event_platform1_S' + RowNo).find('option:selected').text();

    var fdate1 = $('#fdate1_S' + RowNo).val();
    var tdate1 = $('#tdate1_S' + RowNo).val();
    var opendate1 = $('#opendate1_S' + RowNo).val();
    var closedate1 = $('#closedate1_S' + RowNo).val();

    if (new Date(fdate1) > new Date(tdate1)) {
        alert("Please Choose a Different TO Date.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(closedate1)) {
        alert("Please Choose a Different Registration Open Close Dates.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Dates.");
        return;
    }
    if (Date.parse(closedate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Registration Close Dates.");
        return;
    }
    var formData = new FormData();

    formData.append("id", id);
    /*formData.append("NPMU", npmu1);*/
    formData.append("topic_event", topic_event1);
    formData.append("typ", typ1);
    formData.append("typother_one", typother1);
    formData.append("typother_two", typother2);
    formData.append('State', state1);
    //formData.append('District', dist1);
    //formData.append('Block', block1);
    formData.append('event_platform', event_platform1);
    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);
    formData.append('opendate_d', opendate1);
    formData.append('closedate_d', closedate1);

    $.ajax({
        url: '/MasterDropDown/Update_Curr_Part_Info_state',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            current_event_info_new();
            current_event_info_new1();
            current_event_info_new12();
            current_event_info_new123();
            current_event_info_new1234();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}

function Update_AWP1_district(id, RowNo) {

    /*var npmu1 = $('#npmu1' + RowNo).val();*/
    var id = id;
    var topic_event1 = $('#topic_event1_D' + RowNo).val();

    var typ1 = $('#typ1_D' + RowNo).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        var typother1 = $('#typother1_D' + RowNo).val();
        var typother2 = $('#typother2_D' + RowNo).val();
    }
    else {
        var typother1 = $('#typother1_D' + RowNo).val();
        typother1 = "";
        var typother2 = $('#typother2_D' + RowNo).val();
        typother2 = "";
    }

    var state1 = $('#state1_D' + RowNo).val();
    var dist1 = $('#district1_D' + RowNo).val();
    //var block1 = $('#block1' + RowNo).val();

    var event_platform1 = $('#event_platform1_D' + RowNo).find('option:selected').text();

    var fdate1 = $('#fdate1_D' + RowNo).val();
    var tdate1 = $('#tdate1_D' + RowNo).val();
    var opendate1 = $('#opendate1_D' + RowNo).val();
    var closedate1 = $('#closedate1_D' + RowNo).val();

    if (new Date(fdate1) > new Date(tdate1)) {
        alert("Please Choose a Different TO Date.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(closedate1)) {
        alert("Please Choose a Different Registration Open Close Dates.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Dates.");
        return;
    }
    if (Date.parse(closedate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Registration Close Dates.");
        return;
    }
    var formData = new FormData();

    formData.append("id", id);
    /*formData.append("NPMU", npmu1);*/
    formData.append("topic_event", topic_event1);
    formData.append("typ", typ1);
    formData.append("typother_one", typother1);
    formData.append("typother_two", typother2);
    formData.append('State', state1);
    formData.append('District', dist1);
    //formData.append('Block', block1);
    formData.append('event_platform', event_platform1);
    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);
    formData.append('opendate_d', opendate1);
    formData.append('closedate_d', closedate1);

    $.ajax({
        url: '/MasterDropDown/Update_Curr_Part_Info_district',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            current_event_info_new();
            current_event_info_new1();
            current_event_info_new12();
            current_event_info_new123();
            current_event_info_new1234();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}

function Update_AWP1_block(id, RowNo) {

    /*var npmu1 = $('#npmu1' + RowNo).val();*/
    var id = id;
    var topic_event1 = $('#topic_event1_B' + RowNo).val();

    var typ1 = $('#typ1_B' + RowNo).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        var typother1 = $('#typother1_B' + RowNo).val();
        var typother2 = $('#typother2_B' + RowNo).val();
    }
    else {
        var typother1 = $('#typother1_B' + RowNo).val();
        typother1 = "";
        var typother2 = $('#typother2_B' + RowNo).val();
        typother2 = "";
    }

    var state1 = $('#state1_B' + RowNo).val();
    var dist1 = $('#district1_B' + RowNo).val();
    var block1 = $('#block1_B' + RowNo).val();

    var event_platform1 = $('#event_platform1_B' + RowNo).find('option:selected').text();

    var fdate1 = $('#fdate1_B' + RowNo).val();
    var tdate1 = $('#tdate1_B' + RowNo).val();
    var opendate1 = $('#opendate1_B' + RowNo).val();
    var closedate1 = $('#closedate1_B' + RowNo).val();

    if (new Date(fdate1) > new Date(tdate1)) {
        alert("Please Choose a Different TO Date.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(closedate1)) {
        alert("Please Choose a Different Registration Open Close Dates.");
        return;
    }
    if (Date.parse(opendate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Dates.");
        return;
    }
    if (Date.parse(closedate1) > Date.parse(fdate1)) {
        alert("Please Choose a Different Registration Close Dates.");
        return;
    }
    var formData = new FormData();

    formData.append("id", id);
    /*formData.append("NPMU", npmu1);*/
    formData.append("topic_event", topic_event1);
    formData.append("typ", typ1);
    formData.append("typother_one", typother1);
    formData.append("typother_two", typother2);
    formData.append('State', state1);
    formData.append('District', dist1);
    formData.append('Block', block1);
    formData.append('event_platform', event_platform1);
    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);
    formData.append('opendate_d', opendate1);
    formData.append('closedate_d', closedate1);

    $.ajax({
        url: '/MasterDropDown/Update_Curr_Part_Info_block',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            current_event_info_new();
            current_event_info_new1();
            current_event_info_new12();
            current_event_info_new123();
            current_event_info_new1234();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}

function Update_AWP1_gram(id, RowNo) {

    /*var npmu1 = $('#npmu1' + RowNo).val();*/
    var id = id;
    var topic_event1 = $('#topic_event1_G' + RowNo).val();

    var typ1 = $('#typ1_G' + RowNo).find('option:selected').text();
    if (typ1 == "Exposure Visits") {
        var typother1 = $('#typother1_G' + RowNo).val();
        var typother2 = $('#typother2_G' + RowNo).val();
    }
    else {
        var typother1 = $('#typother1_G' + RowNo).val();
        typother1 = "";
        var typother2 = $('#typother2_G' + RowNo).val();
        typother2 = "";
    }

    var state1 = $('#state1_G' + RowNo).val();
    var dist1 = $('#district1_G' + RowNo).val();
    var block1 = $('#block1_G' + RowNo).val();
    var gram1 = $('#gram1_G' + RowNo).val();

    var event_platform1 = $('#event_platform1_G' + RowNo).find('option:selected').text();

    var fdate1 = $('#fdate1_G' + RowNo).val();
    var tdate1 = $('#tdate1_G' + RowNo).val();


    if (new Date(fdate1) > new Date(tdate1)) {
        alert("Please Choose a Different TO Date.");
        return;
    }

    var formData = new FormData();

    formData.append("id", id);
    /*formData.append("NPMU", npmu1);*/
    formData.append("topic_event", topic_event1);
    formData.append("typ", typ1);
    formData.append("typother_one", typother1);
    formData.append("typother_two", typother2);
    formData.append('State', state1);
    formData.append('District', dist1);
    formData.append('Block', block1);
    formData.append('Gram', gram1);
    formData.append('event_platform', event_platform1);
    formData.append('fdate_d', fdate1);
    formData.append('tdate_d', tdate1);


    $.ajax({
        url: '/MasterDropDown/Update_Curr_Part_Info_gram',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            current_event_info_new();
            current_event_info_new1();
            current_event_info_new12();
            current_event_info_new123();
            current_event_info_new1234();

        },
        error: function () {
            alert('Update Failed');
        }
    });
}

function abhy_Curr_Info_Search() {

    var npmu = $('#NPMU').val();
    var year = $('#year').val();
    var month = $('#month').val();
    var state = $('#spnstate').val();
    var district = $('#dist11').val();
    var block = $('#block1').val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info',
        data: "{'npmu':'" + npmu + "' , 'year':'" + year + "' , 'month':'" + month + "', 'state':'" + state + "', 'district':'" + district + "', 'block':'" + block + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#npmu_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
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
                    var ToDayDate = formatDate();
                    if (data[i].to_date >= ToDayDate) {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                            '<td> <input type="text" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                            '<td> <input type="text" class="form-control" id="typother1' + i + '" value="' + data[i].location_expo + '" /></td>' +
                            '<td> <input type="text" class="form-control" id="typother2' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="state1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +

                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Virtual"> Virtual </option> <option value="In-person"> In-person </option> </select></td>' +

                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + data[i].from_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + data[i].to_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="opendate1' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="closedate1' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        /**/
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    } else {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" disabled onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" disabled onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                            '<td> <input type="text" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                            '<td> <input type="text" class="form-control" id="typother1' + i + '" value="' + data[i].location_expo + '" /></td>' +
                            '<td> <input type="text" class="form-control" id="typother2' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="state1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +

                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Virtual"> Virtual </option> <option value="In-person"> In-person </option> </select></td>' +

                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + data[i].from_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + data[i].to_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="opendate1' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="closedate1' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        /**/
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1').html(tr);
            }
            else {
                $('#Training_Workshop_New1').html(tr);
            }

        }
    });

}

function abhy_Curr_Event_Info_Search1() {    //for STATE DATA search button based data fetching
    $('.loader').show();
    var StateOfficer = StateOfficer_new;
    var year_state = $('#year_state option:selected').val();
    var month_state = $('#month_state option:selected').val();

    if (month_state != "0") {
        if (year_state == "0") {
            alert("Please select Financial Year");
            $('#month_state').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_state_1 = $('#spnstate_state_1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_state_1 = $('#spnstate1').text();
    }

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_state',
        data: "{'spnstate_state_1':'" + spnstate_state_1 + "' , 'year_state':'" + year_state + "' , 'month_state':'" + month_state + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#state_total').text('0');
            $('#state_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
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
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        tr += '<tr id="AWP1_TR_Meeting_state' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td></tr>';
                    }
                    else if (StateOfficer == 'State Level Nodal Officer') {
                        if (data[i].to_date >= ToDayDate) {
                            tr += '<tr id="AWP1_TR_Meeting_state' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_state(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_state' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control" id="topic_event1_S' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                '<td><select class="form-control" id="typ1_S' + i + '" onchange="Category_hide11(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                '<td> <input type="text" class="form-control" id="typother1_S' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                '<td> <input type="text" class="form-control" id="typother2_S' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                '<td> <input type="text" class="form-control" id="state1_S' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="year1_S' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="month1_S' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                '<td><select class="form-control" id="event_platform1_S' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Virtual"> Virtual </option> <option value="In-person"> In-person </option> </select></td>' +

                                '<td> <input type="date" class="form-control" id="fdate1_S' + i + '" value="' + data[i].from_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_S' + i + '" value="' + data[i].to_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="opendate1_S' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="closedate1_S' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_state(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_state(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            /**/
                            $('#typ1' + i).val(data[i].type_of_event);
                            $('#event1' + i).val(data[i].event_platform);
                        } else {
                            tr += '<tr id="AWP1_TR_Meeting_state' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary"  onclick="editrowcomp_A_Good2_state(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger"  onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                                '<tr id="hide_AWP1_TR_Meeting_state' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                                '<td> <input type="text" class="form-control" id="topic_event1_S' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                '<td><select class="form-control" id="typ1_S' + i + '" onchange="Category_hide11(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                '<td> <input type="text" class="form-control" id="typother1_S' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                '<td> <input type="text" class="form-control" id="typother2_S' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                '<td> <input type="text" class="form-control" id="state1_S' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                                //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="year1_S' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                '<td> <input type="text" class="form-control" id="month1_S' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                '<td><select class="form-control" id="event_platform1_S' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Virtual"> Virtual </option> <option value="In-person"> In-person </option> </select></td>' +

                                '<td> <input type="date" class="form-control" id="fdate1_S' + i + '" value="' + data[i].from_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="tdate1_S' + i + '" value="' + data[i].to_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="opendate1_S' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                '<td> <input type="date" class="form-control" id="closedate1_S' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_state(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_state(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                            /**/
                            $('#typ1' + i).val(data[i].type_of_event);
                            $('#event1' + i).val(data[i].event_platform);
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_state').html(tr);
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1_state').html(tr);
                $('.loader').hide();
            }

        }
    });

}
function abhy_Curr_Event_Info_Search2() {    //for DISTRICT DATA search button based data fetching
    $('.loader').show();
    var StateOfficer = StateOfficer_new;
    var year_district = $('#year_district').val();
    var month_district = $('#month_district').val();

    if (month_district != "0") {
        if (year_district == "0") {
            alert("Please select Financial Year");
            $('#month_district').val("0");
            return;
        }
    }
    if (month_district != "0") {
        if (year_district == "0") {
            alert("Please select Financial Year");
            $('#month_district').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_district_1 = $('#spnstate_district_1 option:selected').text();
        var dist11_district_1 = $('#dist11_district_1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_district_1 = $('#spnstate1').text();
        var dist11_district_1 = $('#dist11_district_1 option:selected').text();
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var spnstate_district_1 = $('#spnstate1').text();
        var dist11_district_1 = $('#spndistrict').text();
        if ($("#dist11_district_1").val() == "0") {
            alert("Please select District Name");
        }
    }

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_district',
        data: "{'spnstate_district_1':'" + spnstate_district_1 + "' , 'dist11_district_1':'" + dist11_district_1 + "' , 'year_district':'" + year_district + "' , 'month_district':'" + month_district + "'}",
        dataType: 'JSON',
        success: function (data) {
            
            $('#district_total').text("");
            $('#district_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            var j = 0;
            var ap = 0;
            var atdp = 0;
            var atgp = 0;
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
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To SPMU") {
                            atdp++;
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'State Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To SPMU") {
                            atdp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittospmu(' + data[i].id + ')">Approve</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_district(' + i + ')"><i class="fa fa-remove"></i></button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittospmu(' + data[i].id + ')">Approve</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_district(' + i + ')"><i class="fa fa-remove"></i></button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'District Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To SPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Submitted To SPMU</label></td></tr>';
                        }
                        else {
                            atgp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_district(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittodpmu(' + data[i].id + ')">Submitted To SPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_district(' + i + ')"><i class="fa fa-remove"></i></button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_district' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td>  <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_district(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittodpmu(' + data[i].id + ')">Submitted To SPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_district' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_D' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_D' + i + '" onchange="Category_hide112(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_D' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_D' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_D' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_D' + i + '" value="' + district + '" readonly /></td>' +
                                    /*'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +*/
                                    '<td> <input type="text" class="form-control" id="year1_D' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_D' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_D' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_D' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_D' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_D' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_D' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_district(' + data[i].id + ',' + i + ')">Update</button></td>' +
                                    '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_district(' + i + ')"><i class="fa fa-remove"></i></button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_district').html(tr);
                $('#dist_total').text("0");
                $('#dist_ap').text("0");
                $('#dist_sub_sp').text("0");
                $('#dist_pen_sp').text("0");
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1_district').html(tr);
                $('#dist_total').text(data.length);
                $('#dist_ap').text(ap);
                $('#dist_sub_sp').text(atdp);
                $('#dist_pen_sp').text(atgp);
                $('.loader').hide();
            }

        }
    });

}
function abhy_Curr_Event_Info_Search3() {    //for BLOCK DATA search button based data fetching
    $('.loader').show();
    var year_block = $('#year_block').val();
    var month_block = $('#month_block').val();
    var StateOfficer = StateOfficer_new;
    if (month_block != "0") {
        if (year_block == "0") {
            alert("Please select Financial Year");
            $('#month_block').val("0");
            return;
        }
    }

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate_block_1 option:selected').text();
        var dist11_block_1 = $('#dist11_block_1 option:selected').text();
        var block1_block_1 = $('#block1_block_1 option:selected').text();
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate1').text();
        var dist11_block_1 = $('#dist11_block_1 option:selected').text();
        var block1_block_1 = $('#block1_block_1 option:selected').text();
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate1').text();
        var dist11_block_1 = $('#spndistrict').text();
        var block1_block_1 = $('#block1_block_1 option:selected').text();
    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var spnstate_block_1 = $('#spnstate1').text();
        var dist11_block_1 = $('#spndistrict').text();
        var block1_block_1 = $('#spnblock').text();
    }

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_block',
        data: "{'spnstate_block_1':'" + spnstate_block_1 + "' , 'dist11_block_1':'" + dist11_block_1 + "' , 'block1_block_1':'" + block1_block_1 + "' , 'year_block':'" + year_block + "' , 'month_block':'" + month_block + "'}",
        dataType: 'JSON',
        success: function (data) {
            $('#block_total').text("");
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
            var j = 0;
            var ap = 0;
            var atdp = 0;
            var atgp = 0;
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
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer" || StateOfficer == "State Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'Block Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Submitted To DPMU</label></td></tr>';
                        }
                        else {
                            atgp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_block(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="submittodpmu(' + data[i].id + ');">Submitted To DPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td>' + '<td><button class="btn btn-primary " type="button" onclick="submittodpmu(' + data[i].id + ');">Submitted To DPMU</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_block(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td> <td><button class="btn btn-primary " type="button" onclick="submittodpmu(' + data[i].id + ');">Submitted To DPMU</button></td >' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                    }
                    else if (StateOfficer == 'District Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="submittospmu(' + data[i].id + ');">Approve</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td></td> <td></td> <td><button class="btn btn-primary " type="button" onclick="submittospmu(' + data[i].id + ');">Approve</button></td >' +
                                    '<tr id="hide_AWP1_TR_Meeting_block' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_B' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                                    '<td><select class="form-control" id="typ1_B' + i + '" onchange="Category_hide1123(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_B' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_B' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_B' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_B' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_B' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_B' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_B' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_B' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_B' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_B' + i + '" value="' + data[i].to_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="opendate1_B' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="closedate1_B' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_block(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_block(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                                /**/
                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            atgp++;
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_block').html(tr);
                $('#block_total').text("0");
                $('#block_ap').text("0");
                $('#block_sub_sp').text("0");
                $('#block_pen_sp').text("0");
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1_block').html(tr);
                $('#block_total').text(data.length);
                $('#block_ap').text(ap);
                $('#block_sub_sp').text(atdp);
                $('#block_pen_sp').text(atgp);
                $('.loader').hide();
            }

        }
    });

}
function abhy_Event_Cal_Info_Search5() {
    //for GP DATA search button based data fetching
    
    $(".loader").show();
    var year_gram = $('#year_gram').val();
    var month_gram = $('#month_gram').val();
    var StateOfficer = StateOfficer_new;
    if (month_gram != "0") {
        if (year_gram == "0") {
            alert("Please select Financial Year");
            $('#month_gram').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate_gram_1 option:selected').text();
        var dist11_gram_1 = $('#dist11_gram_1 option:selected').text();
        var block1_gram_1 = $('#block1_gram_1 option:selected').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();

        if (spnstate_gram_1 == "All") {

        }
        else {
            if (spnstate_gram_1 == "Select State") {
                alert("Please Select State Name");
                return;
            }
            else if (dist11_gram_1 == "Select District") {
                alert("Please Select District Name");
                return;
            }
            else if (block1_gram_1 == "Select Block") {
                alert("Please Select Block Name");
                return;
            }
            else if (gram1_gram_1 == "Select GramPanchayat") {
                alert("Please Select Gram Panchayat Name");
                return;
            }
        }
    }

    if (StateOfficer == "State Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#dist11_gram_1 option:selected').text();
        var block1_gram_1 = $('#block1_gram_1 option:selected').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();
        if (dist11_gram_1 == "Select District") {
            alert("Please Select District Name");
            return;
        }
        else if (block1_gram_1 == "Select Block") {
            alert("Please Select Block Name");
            return;
        }
        else if (gram1_gram_1 == "Select GramPanchayat") {
            alert("Please Select Gram Panchayat Name");
            return;
        }
    }
    if (StateOfficer == "District Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#spndistrict').text();
        var block1_gram_1 = $('#block1_gram_1 option:selected').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();
        if (block1_gram_1 == "Select Block") {
            alert("Please Select Block Name");
            return;
        }
        else if (gram1_gram_1 == "Select GramPanchayat") {
            alert("Please Select Gram Panchayat Name");
            return;
        }
    }
    if (StateOfficer == "Block Level Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#spndistrict').text();
        var block1_gram_1 = $('#spnblock').text();
        var gram1_gram_1 = $('#gram1_gram_1 option:selected').text();
        if (gram1_gram_1 == "Select GramPanchayat") {
            alert("Please Select Gram Panchayat Name");
            return;
        }
    }
    if (StateOfficer == "Gram Panchyat Nodal Officer") {

        var spnstate_gram_1 = $('#spnstate1').text();
        var dist11_gram_1 = $('#spndistrict').text();
        var block1_gram_1 = $('#spnblock').text();
        var gram1_gram_1 = $('#spngram').text();
    }
    $.ajax({

        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Info_gram',
        data: "{'spnstate_gram_1':'" + spnstate_gram_1 + "' , 'dist11_gram_1':'" + dist11_gram_1 + "' , 'block1_gram_1':'" + block1_gram_1 + "' , 'gram1_gram_1':'" + gram1_gram_1 + "' , 'year_gram':'" + year_gram + "' , 'month_gram':'" + month_gram + "'}",
        dataType: 'JSON',
        success: function (data) {

            $('#gram_total').text("");
            $('#gram_total').text(data.length);
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }

            var tr = '';
            var j = 0;
            var ap = 0;
            var atdp = 0;
            var atgp = 0;
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
                    var gram = data[i].gp;
                    if (gram == null) {
                        gram = ""
                    }
                    var approve_status = data[i].approve_status;
                    if (approve_status == null) {
                        approve_status = ""
                    }
                    var ToDayDate = formatDate();
                    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer" || StateOfficer == "State Level Nodal Officer") {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'District Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogpdp(' + data[i].id + ');">Approved</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td> <td></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogpdp(' + data[i].id + ');">Approved</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                        else {
                            atgp++;
                        }
                    }
                    else if (StateOfficer == 'Block Level Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: blue;">Submitted To DPMU </label></td></tr>';
                        }
                        else {
                            atgp++;

                        }
                    }
                    else if (StateOfficer == 'Gram Panchyat Nodal Officer') {
                        if (approve_status == "Approved") {
                            ap++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: green;">Approved By DPMU</label></td></tr>';
                        }
                        else if (approve_status == "Submitted To DPMU") {
                            atdp++;
                            tr += '<tr id="AWP1_TR_Meeting_block' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td><td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td></td><td></td><td><label style="color: blue;">Submitted To DPMU </label></td></tr>';
                        }
                        else {
                            atgp++;
                            if (data[i].to_date >= ToDayDate) {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_gram(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogp(' + data[i].id + ');">Submitted To DPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                            else {
                                tr += '<tr id="AWP1_TR_Meeting_gram' + i + '" style="text-align:center"><td>' + (++j) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + district + '</td> <td>' + block + '</td> <td>' + gram + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2_gram(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td><td><button class="btn btn-primary " type="button" onclick="distsubmittogp(' + data[i].id + ');">Submitted To DPMU</button></td>' +
                                    '<tr id="hide_AWP1_TR_Meeting_gram' + i + '" style="display:none;"><td></td>' +

                                    '<td> <input type="text" class="form-control" id="topic_event1_G' + i + '" value="' + data[i].p_training_name + '" readonly/></td>' +

                                    '<td><select class="form-control" id="typ1_G' + i + '" onchange="Category_hide11234(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                                    '<td> <input type="text" class="form-control" id="typother1_G' + i + '" value="' + data[i].location_expo + '" /></td>' +
                                    '<td> <input type="text" class="form-control" id="typother2_G' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                                    '<td> <input type="text" class="form-control" id="state1_G' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="district1_G' + i + '" value="' + district + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="block1_G' + i + '" value="' + block + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="gram1_G' + i + '" value="' + gram + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="year1_G' + i + '" value="' + data[i].year + '" readonly /></td>' +
                                    '<td> <input type="text" class="form-control" id="month1_G' + i + '" value="' + data[i].month + '" readonly /></td>' +

                                    '<td><select class="form-control" id="event_platform1_G' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Physical"> Physical </option> <option value="Virtual"> Virtual </option> </select></td>' +

                                    '<td> <input type="date" class="form-control" id="fdate1_G' + i + '" value="' + data[i].from_date + '" /></td>' +
                                    '<td> <input type="date" class="form-control" id="tdate1_G' + i + '" value="' + data[i].to_date + '" /></td>' +

                                    '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1_gram(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support_gram(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';

                                $('#typ1' + i).val(data[i].type_of_event);
                                $('#event1' + i).val(data[i].event_platform);
                            }
                        }
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1_gram').html(tr);
                $('#approve_count_gp').text("0");
                $('#atdpmu_count_gp').text("0");
                $('#total_gp').text("0");
                $('#at_gp_count_gp').text("0");
                $(".loader").hide();

            }
            else {
                $('#Training_Workshop_New1_gram').html(tr);
                $('#approve_count_gp').text(ap);
                $('#atdpmu_count_gp').text(atdp);
                $('#total_gp').text(data.length);
                $('#at_gp_count_gp').text(atgp);
                $(".loader").hide();
            }

        }
    });

}
function abhy_Curr_Event_Info_Search_4() {    //for NPMU DATA search button
    $('.loader').show();
    var npmu = $('#NPMU_1').val();
    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();


    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/MasterDropDown/abhy_Curr_Event_Info_npmu',
        data: "{'npmu':'" + npmu + "' , 'year':'" + year + "' , 'month':'" + month + "'}",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";

            }
            var tr = '';
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
                    var ToDayDate = formatDate();
                    if (data[i].to_date >= ToDayDate) {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                            '<td> <input type="text" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                            '<td> <input type="text" class="form-control" id="typother1' + i + '" value="' + data[i].location_expo + '" /></td>' +
                            '<td> <input type="text" class="form-control" id="typother2' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="state1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +

                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Virtual"> Virtual </option> <option value="In-person"> In-person </option> </select></td>' +

                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + data[i].from_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + data[i].to_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="opendate1' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="closedate1' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        /**/
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    } else {
                        tr += '<tr id="AWP1_TR_Meeting' + i + '" style="text-align:center"><td>' + (i + 1) + '</td><td>' + data[i].p_training_name + '</td><td>' + data[i].type_of_event + '</td> <td>' + data[i].location_expo + '</td> <td>' + data[i].particular_expo + '</td> <td>' + data[i].level_event + '</td> <td>' + data[i].year + '</td> <td>' + data[i].month + '</td> <td>' + data[i].event_platform + '</td> <td>' + data[i].from_date + '</td> <td>' + data[i].to_date + '</td><td>' + data[i].reg_open_date + '</td><td>' + data[i].reg_close_date + '</td><td><button class="btn btn-primary" disabled onclick="editrowcomp_A_Good2(' + i + ')"> <i class="fa fa-edit"></i></button></td> <td><button class="btn btn-danger" disabled onclick="Delete_Curr_Evt(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td>' +
                            '<tr id="hide_AWP1_TR_Meeting' + i + '" style="display:none;"><td>' + (i + 1) + '</td>' +

                            '<td> <input type="text" class="form-control" id="topic_event1' + i + '" value="' + data[i].p_training_name + '" /></td>' +

                            '<td><select class="form-control" id="typ1' + i + '" onchange="Category_hide1(' + i + ')"> <option value="0">' + data[i].type_of_event + '</option> <option value="Training">Training</option>  <option value="Exposure Visits">Exposure Visits</option> </select></td>' +
                            '<td> <input type="text" class="form-control" id="typother1' + i + '" value="' + data[i].location_expo + '" /></td>' +
                            '<td> <input type="text" class="form-control" id="typother2' + i + '" value="' + data[i].particular_expo + '" /></td>' +

                            '<td> <input type="text" class="form-control" id="npmu1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="state1' + i + '" value="' + data[i].level_event + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="district1' + i + '" value="' + district + '" readonly /></td>' +
                            //'<td> <input type="text" class="form-control" id="block1' + i + '" value="' + block + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="year1' + i + '" value="' + data[i].year + '" readonly /></td>' +
                            '<td> <input type="text" class="form-control" id="month1' + i + '" value="' + data[i].month + '" readonly /></td>' +

                            '<td><select class="form-control" id="event_platform1' + i + '"> <option value="0">' + data[i].event_platform + '</option> <option value="Virtual"> Virtual </option> <option value="In-person"> In-person </option> </select></td>' +

                            '<td> <input type="date" class="form-control" id="fdate1' + i + '" value="' + data[i].from_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="tdate1' + i + '" value="' + data[i].to_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="opendate1' + i + '" value="' + data[i].reg_open_date + '" /></td>' +
                            '<td> <input type="date" class="form-control" id="closedate1' + i + '" value="' + data[i].reg_close_date + '" /></td>' +
                            '<td> <button type="button" class="btn btn-primary" onclick="Update_AWP1(' + data[i].id + ',' + i + ')">Update</button></td>' + '<td><button class="btn btn-danger " type="button" onclick="cancelcomp_A_Support(' + i + ');"><i class="fa fa-remove"</button>' + '</td></tr>';
                        /**/
                        $('#typ1' + i).val(data[i].type_of_event);
                        $('#event1' + i).val(data[i].event_platform);
                    }
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="11">No Data</td></tr>';
                $('#Training_Workshop_New1').html(tr);
                $('.loader').hide();
            }
            else {
                $('#Training_Workshop_New1').html(tr);
                $('.loader').hide();
            }

        }
    });
}

// for Excel
function Create_Excel_All() {

    var year = $('#year_all').val();
    var month = $('#month_all').val();
    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_all').val("0");
            return;
        }
    }
    var StateOfficer = StateOfficer_new;
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_all').val();
        var dist_name = $('#dist11_all').val();
        var block_name = $('#block1_all').val();
        var gram_name = $('#gram1_all').val();

        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            if (state_name == "NPMU (Delhi)") {
                window.location.href = "/MasterDropDown/Excel_all_data_current_event?state_name=" + state_name + "&year1=" + year + "&month1=" + month;
            }
            else {
                window.location.href = "/MasterDropDown/Excel_all_data_current_event?state_name=" + state_name + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;

            }
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11_all').val();
        var block_name = $('#block1_all').val();
        var gram_name = $('#gram1_all').val();
        {
            window.location.href = "/MasterDropDown/Excel_all_data_current_event?state1=" + State + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var block_name = $('#block1_all').val();
        var gram_name = $('#gram1_all').val();
        {
            window.location.href = "/MasterDropDown/Excel_all_data_current_event?state1=" + State + "&district1=" + Dist + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        var gram_name = $('#gram1_all').val();
        {
            window.location.href = "/MasterDropDown/Excel_all_data_current_event?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

        {
            window.location.href = "/MasterDropDown/Excel_all_data_current_event?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + Gram + "&year1=" + year + "&month1=" + month;
        }
    }

}
function Create_Excel_state() {
    var StateOfficer = StateOfficer_new;

    var year = $('#year_state').val();
    var month = $('#month_state').val();
    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_state').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_state_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Excel_state_level?state_name=" + state_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        {
            window.location.href = "/MasterDropDown/Excel_state_level?State1=" + State + "&year1=" + year + "&month1=" + month;
        }
    }

}
function Create_Excel_dist() {

    var StateOfficer = StateOfficer_new;
    var year = $('#year_district').val();
    var month = $('#month_district').val();
    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_district').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_district_1').val();
        var dist_name = $('#dist11_district_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Excel_district_level?state_name=" + state_name + "&dist_name=" + dist_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11_district_1').val();
        {
            window.location.href = "/MasterDropDown/Excel_district_level?state1=" + State + "&dist_name=" + dist_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        {
            window.location.href = "/MasterDropDown/Excel_district_level?state1=" + State + "&district1=" + Dist + "&year1=" + year + "&month1=" + month;
        }
    }

}
function Create_Excel_block() {
    var StateOfficer = StateOfficer_new;

    var year = $('#year_block').val();
    var month = $('#month_block').val();

    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_block').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_block_1').val();
        var dist_name = $('#dist11_block_1').val();
        var block_name = $('#block1_block_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Excel_block_level?state_name=" + state_name + "&dist_name=" + dist_name + "&block_name=" + block_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11_block_1').val();
        var block_name = $('#block1_block_1').val();

        {
            window.location.href = "/MasterDropDown/Excel_block_level?state1=" + State + "&dist_name=" + dist_name + "&block_name=" + block_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var block_name = $('#block1_block_1').val();
        {
            window.location.href = "/MasterDropDown/Excel_block_level?state1=" + State + "&district1=" + Dist + "&block_name=" + block_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        {
            window.location.href = "/MasterDropDown/Excel_block_level?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&year1=" + year + "&month1=" + month;
        }
    }

}
function Create_Excel_gram() {
    var StateOfficer = StateOfficer_new;
    var year = $('#year_gram').val();
    var month = $('#month_gram').val();
    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_gram').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_gram_1').val();
        var dist_name = $('#dist11_gram_1').val();
        var block_name = $('#block1_gram_1').val();
        var gram_name = $('#gram1_gram_1').val();

        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Excel_gram_level?state_name=" + state_name + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var dist_name = $('#dist11_gram_1').val();
        var block_name = $('#block1_gram_1').val();
        var gram_name = $('#gram1_gram_1').val();

        {
            window.location.href = "/MasterDropDown/Excel_gram_level?state1=" + State + "&dist_name=" + dist_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var block_name = $('#block1_gram_1').val();
        var gram_name = $('#gram1_gram_1').val();
        {
            window.location.href = "/MasterDropDown/Excel_gram_level?state1=" + State + "&district1=" + Dist + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        var gram_name = $('#gram1_gram_1').val();
        {
            window.location.href = "/MasterDropDown/Excel_gram_level?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Gram Panchyat Nodal Officer") {

        {
            window.location.href = "/MasterDropDown/Excel_gram_level?state1=" + State + "&district1=" + Dist + "&block01=" + Block + "&gram01=" + Gram + "&year1=" + year + "&month1=" + month;
        }
    }

}
function Create_Excel_NPMU() {
    var StateOfficer = StateOfficer_new;

    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#NPMU_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Excel_NPMU_level?state_name=" + state_name + "&year1=" + year + "&month1=" + month;
        }
    }


}

// for pdf download

function Report_BTN_NPMU() {
    var StateOfficer = StateOfficer_new;
    var year = $('#year_npmu').val();
    var month = $('#month_npmu').val();
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#NPMU_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_NPMU?state_name=" + state_name + "&year1=" + year + "&month1=" + month;
        }
    }
}
function Report_BTN_STATE() {
    var StateOfficer = StateOfficer_new;
    var year = $('#year_state').val();
    var month = $('#month_state').val();

    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_state').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_state_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_STATE?state_name=" + state_name + "&year1=" + year + "&month1=" + month;
        }
    }
    if (StateOfficer == "State Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_STATE?state_name=" + state_name + "&year1=" + year + "&month1=" + month;
        }
    }
}
function Report_BTN_DISTRICT() {
    var StateOfficer = StateOfficer_new;
    var year = $('#year_district').val();
    var month = $('#month_district').val();
    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_district').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_district_1').val();
        var district_name = $('#dist11_district_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        //if (district_name == "0") {
        //    alert("Please Select District");
        //    return false;
        //}
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_DISTRICT?state_name=" + state_name + "&district_name=" + district_name + "&year1=" + year + "&month1=" + month;
        }
    }
    if (StateOfficer == "State Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#dist11_district_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        //if (district_name == "0") {
        //    alert("Please Select District");
        //    return false;
        //}
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_DISTRICT?state_name=" + state_name + "&district_name=" + district_name + "&year1=" + year + "&month1=" + month;
        }
    }
    if (StateOfficer == "District Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#spndistrict').text();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        if (district_name == "0") {
            alert("Please Select District");
            return false;
        }
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_DISTRICT?state_name=" + state_name + "&district_name=" + district_name + "&year1=" + year + "&month1=" + month;
        }
    }
}
function Report_BTN_BLOCK() {
    var StateOfficer = StateOfficer_new;
    var year = $('#year_block').val();
    var month = $('#month_block').val();

    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_block').val("0");
            return;
        }
    }

    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_block_1').val();
        var district_name = $('#dist11_block_1').val();
        var block_name = $('#block1_block_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        //if (district_name == "0") {
        //    alert("Please Select District");
        //    return false;
        //}
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_BLOCK?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&year1=" + year + "&month1=" + month;
        }
    }
    if (StateOfficer == "State Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#dist11_block_1').val();
        var block_name = $('#block1_block_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        //if (district_name == "0") {
        //    alert("Please Select District");
        //    return false;
        //}
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_BLOCK?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&year1=" + year + "&month1=" + month;
        }
    }
    if (StateOfficer == "District Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#spndistrict').val();
        var block_name = $('#block1_block_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        //if (district_name == "0") {
        //    alert("Please Select District");
        //    return false;
        //}
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_BLOCK?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&year1=" + year + "&month1=" + month;
        }
    }
    if (StateOfficer == "Block Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#spndistrict').text();
        var block_name = $('#spnblock').text();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        //if (district_name == "0") {
        //    alert("Please Select District");
        //    return false;
        //}
        {
            window.location.href = "/MasterDropDown/Current_Events_Report_BLOCK?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&year1=" + year + "&month1=" + month;
        }
    }
}
function Report_BTN_GRAM() {
    var StateOfficer = StateOfficer_new;
    var year = $('#year_gram').val();
    var month = $('#month_gram').val();
    if (month != "0") {
        if (year == "0") {
            alert("Please select Financial Year");
            $('#month_gram').val("0");
            return;
        }
    }
    if (StateOfficer == "Admin" || StateOfficer == "National Level Nodal Officer") {
        var state_name = $('#spnstate_gram_1').val();
        var district_name = $('#dist11_gram_1').val();
        var block_name = $('#block1_gram_1').val();
        var gram_name = $('#gram1_gram_1').val();

        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }
        else {
            window.location.href = "/MasterDropDown/Current_Events_Report_GRAM?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "State Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#dist11_gram_1').val();
        var block_name = $('#block1_gram_1').val();
        var gram_name = $('#gram1_gram_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }

        {
            window.location.href = "/MasterDropDown/Current_Events_Report_GRAM?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "District Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#spndistrict').val();
        var block_name = $('#block1_gram_1').val();
        var gram_name = $('#gram1_gram_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }

        {
            window.location.href = "/MasterDropDown/Current_Events_Report_GRAM?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Block Level Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#spndistrict').text();
        var block_name = $('#spnblock').text();
        var gram_name = $('#gram1_gram_1').val();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }

        {
            window.location.href = "/MasterDropDown/Current_Events_Report_GRAM?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
    else if (StateOfficer == "Gram Panchyat Nodal Officer") {
        var state_name = $('#spnstate1').text();
        var district_name = $('#spndistrict').text();
        var block_name = $('#spnblock').text();
        var gram_name = $('#spngram').text();
        if (state_name == "0") {
            alert("Please Select State");
            return false;
        }

        {
            window.location.href = "/MasterDropDown/Current_Events_Report_GRAM?state_name=" + state_name + "&district_name=" + district_name + "&block_name=" + block_name + "&gram_name=" + gram_name + "&year1=" + year + "&month1=" + month;
        }
    }
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