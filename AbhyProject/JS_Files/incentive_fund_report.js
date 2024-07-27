var Main_Statename = "";

function SessionInfo1() {

    Main_Statename = "";
    $('#Agency_AWP_DropDown').hide();
    $('#State_AWP_DropDown').hide();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/State_SessionInfo',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            /*Main_Statename = "ALL";*/
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (data == "Admin") {
                $('#Agency_AWP_DropDown').show();
                $('#State_AWP_DropDown').hide();
                var OPt = '<option value="0">Select PIA</option>';
                OPt += '<option value = "SPMU" > SPMU</option>';
                OPt += '<option value="DPMU">DPMU</option>';
                OPt += '<option value="NPMU">NPMU</option>';
                OPt += '<option value="Line Department">Line Department (Name)</option>';
                $('#rfp_date').html(OPt);
                PHP_Agency_Info();

            }
            else {
                $('#div_form_insert').show();
                $('#Agency_AWP_DropDown').hide();
                $('#State_AWP_DropDown').show();
                $('#pip_dropdown_state_name').text(data);
                Main_Statename = data;

                /*PHP_Agency_Info();*/
                PHP_FN_Info_B_Form();
                PHP_Agency_Name();
                get_data();
                $("#div_npmu").hide();
                var OPt = '<option value="0">Select PIA</option>';
                OPt += '<option value = "SPMU" > SPMU</option>';
                OPt += '<option value="DPMU">DPMU</option>';
                OPt += '<option value="Line Department">Line Department (Name)</option>';

                $('#rfp_date').html(OPt);

            }
        }

    });

}
function PHP_Agency_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/PIP_Agency_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            slection_options_b = '<option value="0">Select State</option>';
            slection_options_b_report = '<option value="0">Select State</option>';
            slection_options_b_report += '<option value="All">All</option>';
            var AwpStateArr = [];

            for (var i = 0; i < data.length; i++) {
                if (data[i].observation_type == "awp") {
                    AwpStateArr.push(data[i].state_name)
                }
            }

            AwpStateArr.sort();
            AwpStateArr.forEach((val) => {
                slection_options_b += '<option value="' + val + '"> ' + val + ' </option>';

            });
            AwpStateArr.forEach((val) => {
                slection_options_b_report += '<option value="' + val + '"> ' + val + ' </option>';

            });
            $('#awp_agency_state_name_1').html(slection_options_b);
            $('#awp_agency_state_name_Report').html(slection_options_b_report);

        }

    });
}

function PHP_Agency_StateInfo_B() {
    
    var awp_agency_state_name = $('#awp_agency_state_name_1').val();
    $('#B_component_id').val('');
    $('#B_component_budget_head').val('');
    $('#B_expenditure_code').val('');

    if (awp_agency_state_name == 'NPMU') {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/Npmu_List',
            dataType: 'JSON',
            success: function (data) {

                $("#WorkActivity_Proc_Form_new").html("");
                var slection_options = ' <option value="0"> Select Work and Activity </option>';
                $('#WorkActivity_Proc_Form_new').html(slection_options);
                for (var i = 0; i < data.length; i++) {
                    $("#WorkActivity_Proc_Form_new").append(new Option(data[i].pip_work_activity_name, data[i].pip_work_activity_name));
                }
            }

        });
        $('#npmu_hide').hide();
        $('#rfp_date').html('');
        var OPt = '<option value="NPMU">NPMU</option>';
        $('#rfp_date').html(OPt);
        $('#rfp_date').attr('readonly', true);

    }
    else if (awp_agency_state_name != "0") {
        
        Main_Statename = awp_agency_state_name;
        PHP_FN_Info_B_Form();
        PHP_Agency_Name();
        $('#npmu_hide').show();
        var OPt = '<option value="0">Select PIA</option>';
        OPt += '<option value = "SPMU" > SPMU</option>';
        OPt += '<option value="DPMU">DPMU</option>';
        OPt += '<option value="NPMU">NPMU</option>';
        OPt += '<option value="Line Department">Line Department (Name)</option>';
        $('#rfp_date').html(OPt);
        $('#rfp_date').attr('readonly', false);
    }
    else if (awp_agency_state_name == "0") {
        alert("Please Select Agency");
    }
}

function PHP_FN_Info_B_Form() {
    
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/php_and_fn_Activity_Info_B_Form',
        data: { 'StateName': Main_Statename },
        dataType: 'JSON',
        success: function (data) {

            var slection_options = ' <option value="0"> Select Work and Activity </option>';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].activity_name != "") {
                        slection_options += '<option value="' + data[i].activity_name + '"> ' + data[i].activity_name + ' </option>';
                    }
                }
            }
            $('#WorkActivity_Proc_Form_new').html(slection_options);

        }
    });
}

function WorkActivity_B_Form_Dropdown() {
    var WorkActivity = $('#WorkActivity_Proc_Form_new').val();

    if (WorkActivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/WorkActivity_B_Form_Dropdown_Info',
            data: { 'WorkActivity': WorkActivity },
            dataType: 'JSON',
            success: function (data) {

                if (data.length != 0) {

                    for (var i = 0; i < data.length; i++) {
                        if (Main_Statename != "ALL") {
                            if (data[i].state_name == Main_Statename) {
                                $('#B_component_id').val(data[i].component_id);
                                $('#B_component_budget_head').val(data[i].component_budget_head);
                                $('#B_expenditure_code').val(data[i].expenditure_code);
                                $('#B_Expenditure_Made').val(data[i].expenditure_made);
                                $('#B_Cumulative_Expenditure').val(data[i].cumulative_expenditure);
                            }
                        }
                        else {
                            if (data[i].component_id != null) {
                                $('#B_component_id').val(data[i].component_id);
                            }
                            $('#B_component_budget_head').val(data[i].component_budget_head);
                            $('#B_expenditure_code').val(data[i].expenditure_code);
                            $('#B_Expenditure_Made').val(data[i].expenditure_made);
                            $('#B_Cumulative_Expenditure').val(data[i].cumulative_expenditure);
                        }
                    }
                }
                else {
                    $('#B_component_id').val('');
                    $('#B_component_budget_head').val('');
                    $('#B_expenditure_code').val('');
                    $('#B_Expenditure_Made').val('');
                    $('#B_Cumulative_Expenditure').val('');
                }

            }
        });
    }
    else {
        alert("Please Select Work and Activity");
    }
}

function Proc_Info() {
    var WorkActivity = $('#WorkActivity_Proc_Form').val();
    if (WorkActivity != "0") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/mis_new/Proc_Activity_Info',
            data: {},
            dataType: 'JSON',
            success: function (data) {

                var slection_options = ' <option value="0">Select Method of Selection/ Procurement</option>';
                var slection_options_Category = '<option value="0">Select Category of Procurement</option>';

                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].category_type == "producrment_selection") {
                            slection_options += '<option value="' + data[i].category_name + '"> ' + data[i].category_name + ' </option>';
                        }

                        if (data[i].category_type == "category_of_procurement") {
                            slection_options_Category += '<option value="' + data[i].category_name + '"> ' + data[i].category_name + ' </option>';
                        }
                    }
                }
                $('#category_of_procurement').html(slection_options_Category);
                $('#producrment_selection').html(slection_options);

            }
        });
    }
    else {
        alert("Please Select Work Activity");
    }
}

function select_producrment_selection() {
    var other = $('#producrment_selection').val();

    if (other == 'Others, Pl. Specify') {
        $('#producrment_selection_other').show();
    }
    else {
        $('#producrment_selection_other').hide();
    }

}

function Office_Procument_Chnage() {
    var rfp_date = $('#rfp_date').val();
    $('#NPMU_DropDown_Selecting_List').hide();
    if (Main_Statename != "" && Main_Statename != "0") {
        if (rfp_date != "0") {
            if (rfp_date == "DPMU") {

                $('#NPMU_DropDown_Selecting_List').show();
                $('#Agency_NPMU_Dropdown').text('Data  Loading...');
                $('#rfp_date_other').hide();
                District_List();


            } else if (rfp_date == "Line Department") {
                $('#rfp_date_other').show();

            }
            else {
                $('#rfp_date_other').hide();
                $('#NPMU_DropDown_Selecting_List').hide();
            }

        } else {
            $('#rfp_date_other').hide();
            alert("Please Select Office doing Procurement");
        }
    } else {

        alert("Please Select StateName");
        $('#rfp_date').val("0");
    }

}

function PHP_Agency_Name() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/AWP_Agency_Name',
        data: { 'state_name': Main_Statename },
        dataType: 'JSON',
        success: function (data) {
            if (Main_Statename == "All") {
                $('#nodal_agency_name').text("All State's");
                $('#nodal_agency_name1').text("All State's");
            }
            else {
                $('#nodal_agency_name').text(data[0].nodal_agency_name);
                $('#nodal_agency_name1').text(data[0].nodal_agency_name);
            }

        }
    });
}


function Save_incentive_fund() {
    


    var i = 0;
    var state_name = Main_Statename;
    var work_sel = $('#WorkActivity_Proc_Form_new').val();
    var Component_Id = $('#B_component_id').val();
    var Component_Budget_Head_EAP = $('#B_component_budget_head').val();
    var Expenditure_Code = $('#B_expenditure_code').val();
    var proc_sel = "";
    var Method_of_Procurement_PP = $('#producrment_selection').val();
    var Method_of_Procurement_PP_other = $('#producrment_selection_other').val();

    if (Method_of_Procurement_PP == "Others, Pl. Specify") {
        ofd_sel1 = "Other";
        ofd_sel11 = " - ";
        proc_sel1 = $('#producrment_selection_other').val();
        proc_sel = ofd_sel1 + ofd_sel11 + proc_sel1;
    }
    else {
        proc_sel = $('#producrment_selection').val();
    }
    var Category_of_Procurement = $('#category_of_procurement').val();
    var Office_doing_Procurement_other = $('#rfp_date_other').val();
    var ofd_sel = "";
    var Office_doing_Procurement = $('#rfp_date').val();
    if (Office_doing_Procurement == "Line Department") {
        ofd_sel1 = "Line Department";
        ofd_sel11 = " - ";
        ofd_sel2 = $('#rfp_date_other').val();
        ofd_sel = ofd_sel1 + ofd_sel11 + ofd_sel2;

    }
    else {
        ofd_sel = $('#rfp_date').val();
    }
    var Name_of_Consultant = $('#email_office').val();
    var Contract_Price = $('#tender_no').val();
    var Date_of_singning = $('#bid_date').val();
    var Date_of_Completion = $('#nomination_rec_date').val();
    var Total_Payment = $('#tender_id').val();
    var Complaints = $('#website_url').val();
    var Description = $('#proc_remarks').val();
    var contact_ref_id = $('#contact_ref_id').val();

    if (state_name == '') {
        i = 1;
        alert("Please Select State Name ");
    }
    else if (work_sel == '0') {
        i = 1;
        alert("Please Select Work Activity");
    }
    else if (Method_of_Procurement_PP == '0') {
        i = 1;
        alert("Please Select Method of Procurement");
    }
    else if (Method_of_Procurement_PP == 'Others, Pl. Specify') {
        if (Method_of_Procurement_PP_other == "") {
            i = 1;
            alert("Please Enter Other Method of Procurement Other");
        }
    }
    else if (Category_of_Procurement == '0') {
        i = 1;
        alert("Please Select Category of Procurement (As categorised in PP)");
    }
    else if (Office_doing_Procurement == '0') {
        i = 1;
        alert("Please Select Office doing Procurement");
    }
    else if (Office_doing_Procurement == 'Line Department') {
        if (Office_doing_Procurement_other == "") {
            i = 1;
            alert("Please Enter Other Office doing Procurement");
        }
    }
    else if (Description == "") {
        i = 1;
        alert("Please Enter Description of Work and Activity");
    }


    if (i == 0) {
        var obj = {};
        obj.state_name = state_name;
        obj.work_sel = work_sel;
        obj.Component_Id = Component_Id;
        obj.Component_Budget_Head_EAP = Component_Budget_Head_EAP;
        obj.Expenditure_Code = Expenditure_Code;
        obj.proc_sel = proc_sel;
        obj.Category_of_Procurement = Category_of_Procurement;
        obj.ofd_sel = ofd_sel;
        obj.Name_of_Consultant = Name_of_Consultant;
        obj.Contract_Price = Contract_Price;
        obj.Date_of_singning = Date_of_singning;
        obj.Date_of_Completion = Date_of_Completion;
        obj.Total_Payment = Total_Payment;
        obj.Complaints = Complaints;
        obj.Remarks = Description;
        obj.contact_ref_id = contact_ref_id;

        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/mis_new/Save_incentive_fund",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                if (response == "SessionTimeOut") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response == "Successfully Saved")
                    alert(response);
                $('#WorkActivity_Proc_Form_new').val('0');
                $('#B_component_id').val("");
                $('#B_component_budget_head').val("");
                $('#B_expenditure_code').val("");
                $('#producrment_selection').val('0');
                $('#producrment_selection_other').val("");
                $('#producrment_selection_other').hide();
                $('#category_of_procurement').val('0');
                $('#rfp_date').val('0');
                $('#rfp_date_other').val("");
                $('#rfp_date_other').hide();
                $('#email_office').val("");
                $('#tender_no').val("");
                $('#bid_date').val("");
                $('#nomination_rec_date').val("");
                $('#tender_id').val("");
                $('#website_url').val("");
                $('#proc_remarks').val("");
                $('#contact_ref_id').val("");
            }

        });
    }
}

function data_find() {
    var statename = $('#awp_agency_state_name_Report').val();
    Main_Statename = statename;
    PHP_Agency_Name();
    get_data();
    Service = "";
}


function get_data() {
    
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/mis_new/Incentive_data',
        data: "{ 'state_name': '" + Main_Statename + "', 'Service': '" + Service + "' }",
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }

            var tr = '';
            var tr_excel = '';
            var a = 0;
            var Support_Service = 0;
            var Goods = 0;
            var Works = 0;
            var Training = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    
                    var procurement = data[i].Category_of_Procurement;
                    if (procurement == "Support Service") {
                        var Ss = parseFloat(data[i].Total_Payment);
                        Support_Service = Support_Service + Ss;
                    }
                    if (procurement == "Goods") {
                        var Ss = parseFloat(data[i].Total_Payment);
                        Goods = Goods + Ss;
                    }
                    if (procurement == "Works") {
                        var Ss = parseFloat(data[i].Total_Payment);
                        Works = Works + Ss;
                    }
                    if (procurement == "Training/ IEC/OE") {
                        var Ss = parseFloat(data[i].Total_Payment);
                        Training = Training + Ss;
                    }

                    tr += '<tr id="AWP1_TR' + i + '"><td>' + (++a) + '</td><td>' + data[i].state_name + '</td><td>' + data[i].work_sel + '</td><td>' + data[i].Component_Id + '</td><td>' + data[i].Component_Budget_Head_EAP + '</td><td>' + data[i].Expenditure_Code + '</td><td>' + data[i].proc_sel + '</td><td>' + data[i].Category_of_Procurement + '</td><td>' + data[i].ofd_sel + '</td><td>' + data[i].Name_of_Consultant + '</td><td>' + data[i].Contract_Price + '</td><td>' + data[i].Date_of_singning + '</td><td>' + data[i].Date_of_Completion + '</td><td>' + data[i].contact_ref_id + '</td><td>' + data[i].Total_Payment + '</td><td>' + data[i].Complaints + '</td><td>' + data[i].Remarks + '</td><td><button class="btn btn-primary" onclick="editrowcomp_A_Good4(' + i + ')"> <i class="fa fa-edit"></i></button ></td >  <td><button class="btn btn-danger" onclick="Delete_data(' + data[i].id + ')"><i class="fa fa-trash"></i></button></td></tr> ';

                    tr += '<tr id="Hide_AWP1_TR' + i + '" style="display:none;"><td></td><td><input type="text" class="form-control" id="a' + i + '" value="' + data[i].state_name + '" readonly /></td><td><input type="text" class="form-control" id="b' + i + '" value="' + data[i].work_sel + '" readonly /></td><td><input type="text" class="form-control" id="c' + i + '" value="' + data[i].Component_Id + '" readonly /></td><td><input type="text" class="form-control" id="d' + i + '" value="' + data[i].Component_Budget_Head_EAP + '" readonly /></td><td><input type="text" class="form-control" id="e' + i + '" value="' + data[i].Expenditure_Code + '" readonly /></td><td><input type="text" class="form-control" id="f' + i + '" value="' + data[i].proc_sel + '" readonly /></td><td><input type="text" class="form-control" id="g' + i + '" value="' + data[i].Category_of_Procurement + '" readonly /></td><td><input type="text" class="form-control" id="h' + i + '" value="' + data[i].ofd_sel + '" readonly /></td><td><input type="text"  class="form-control" id="i' + i + '" value="' + data[i].Name_of_Consultant + '"  /></td><td><input type="text" onkeypress="return isNumberKey(this, event);" maxlength="7"  class="form-control" id="j' + i + '" value="' + data[i].Contract_Price + '"   /></td><td><input type="date" class="form-control" id="k' + i + '" value="' + data[i].Date_of_singning + '"  onkeypress="return false;"/></td><td><input type="date" class="form-control" id="l' + i + '" value="' + data[i].Date_of_Completion + '" onkeypress="return false;" /></td><td><input type="text" class="form-control" id="' + i + '" value="' + data[i].contact_ref_id + '" disabled" /></td><td><input type="text" onkeypress="return isNumberKey(this, event);" maxlength="7" class="form-control" id="m' + i + '" value="' + data[i].Total_Payment + '"  /></td><td><input type="text" class="form-control" id="n' + i + '" value="' + data[i].Complaints + '"  /></td><td><input type="text" class="form-control" id="o' + i + '" value="' + data[i].Remarks + '"  /></td><td><button type="button" class="btn btn-primary disable_btn" onclick="Update(' + data[i].id + ',' + i + ')">Update</button></td><td><button  class="btn btn-danger disable_btn " type="button" onclick="cancelcomp_A_Support_NEW(' + i + ');"><i class="fa fa-remove"</button></td></tr> ';

                    tr_excel += '<tr id="AWP1_TR' + i + '"><td>' + data[i].state_name + '</td><td>' + data[i].work_sel + '</td><td>' + data[i].Component_Id + '</td><td>' + data[i].Component_Budget_Head_EAP + '</td><td>' + data[i].Expenditure_Code + '</td><td>' + data[i].proc_sel + '</td><td>' + data[i].Category_of_Procurement + '</td><td>' + data[i].ofd_sel + '</td><td>' + data[i].Name_of_Consultant + '</td><td>' + data[i].Contract_Price + '</td><td>' + data[i].Date_of_singning + '</td><td>' + data[i].Date_of_Completion + '</td><td>' + data[i].contact_ref_id + '</td><td>' + data[i].Total_Payment + '</td><td>' + data[i].Complaints + '</td><td>' + data[i].Remarks + '</td></tr> ';

                }

            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="15">No Data</td></tr>';
                $('#tbl_details').html(tr);
                $('#tbl_details_excel').html(tr_excel);
                
            }
            else {
                $('#tbl_details').html(tr);
                $('#tbl_details_excel').html(tr_excel);
                $('#Support_Count').text(Support_Service.toFixed(2));
                $('#Goods_Count').text(Goods.toFixed(2));
                $('#work_Count').text(Works.toFixed(2));
                $('#training_Count').text(Training.toFixed(2));
                
            }

        }
    });
}


function isNumberKey(txt, evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46) {
        //Check if the text already contains the . character
        if (txt.value.indexOf('.') === -1) {
            return true;
        } else {
            return false;
        }
    } else {
        if (charCode > 31 &&
            (charCode < 48 || charCode > 57))
            return false;
    }
    return true;
}


function Update(id, i) {
    
    $('.loader').show();
    var xx = 0;
    var id = id;
    var date1 = $('#i' + i).val();
    var date2 = $('#j' + i).val();
    var date3 = $('#k' + i).val();
    var date4 = $('#l' + i).val();
    var date6 = $('#m' + i).val();
    var date7 = $('#n' + i).val();
    var date8 = $('#o' + i).val();

    if (date8 == "") {
        xx = 1;
        alert("Please Enter Description of Work and Activity");
    }
    //if (date1 == "") {
    //    xx = 1;
    //    alert("Please Enter Name of Consultant/Service Provide/Supplier/Contractor");
    //    $('.loader').hide();
    //}
    //else if (date2 == "") {
    //    xx = 1;
    //    alert("Please Enter Contract Price(INR) (With GST) ");
    //    $('.loader').hide();
    //}
    //else if (date3 == "") {
    //    xx = 1;
    //    alert("Please Select Date of singning of contract agreement ");
    //    $('.loader').hide();
    //}
    //else if (date4 == "") {
    //    xx = 1;
    //    alert("Please Select Date of Completion");
    //    $('.loader').hide();
    //}
    //else if (date6 == "") {
    //    xx = 1;
    //    alert("Please Enter Total Payment (INR)");
    //    $('.loader').hide();
    //}
    //else if (date7 == "") {
    //    xx = 1;
    //    alert("Please Enter Complaints");
    //    $('.loader').hide();
    //}






    if (xx == 0) {
        $.ajax({
            url: '/mis_new/Update',
            type: "POST",
            data: function () {

                var data = new FormData();
                data.append("id", id);
                data.append("Name_of_Consultant", date1);
                data.append("Contract_Price", date2);
                data.append("Date_of_singning", date3);
                data.append("Date_of_Completion", date4);
                data.append("Total_Payment", date6);
                data.append("Complaints", date7);
                data.append("Remarks", date8);

                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {
                alert(response);
                if (response == "Logout") {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }
                else if (response == "Successfully Update") {
                    get_data();
                }

            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }
}

var Service = "";
function Service_Tr_function() {
    Service = "Support Service";
    get_data();
}
function Goods_Tr_function() {
    Service = "Goods";
    get_data();
}
function Work_Tr_function() {
    Service = "Works";
    get_data();
}
function Training_Tr_Function() {
    Service = "Training/ IEC/OE";
    get_data();
}

function editrowcomp_A_Good4(i) {
    

    $('#AWP1_TR' + i).hide();
    $('#Hide_AWP1_TR' + i).show();

}
function cancelcomp_A_Support_NEW(i) {
    $('#AWP1_TR' + i).show();
    $('#Hide_AWP1_TR' + i).hide();

}

function Delete_data(ss) {
    
    var obj = {};
    obj.id = ss;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/mis_new/Delete_data",
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
            else if (response == "Deleted Successfully") {
                get_data();
            }
        }
    });
}