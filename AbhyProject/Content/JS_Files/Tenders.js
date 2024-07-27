$(document).ready(function () {

    Info();
    TenderAnnouncements_Info();
    TenderAwards_Info();
});


//Upoad Images

function Upload() {

    var i = 0;
    var title = $("#pdftitle").val();
    var File_pdf = $("#files").val();

    if (title == "") {
        i = 1;
        $("Error1").text('Please Enter Title');
        document.getElementById('Error1').innerHTML = "Please Enter Title";
    }
    if (File_pdf == "") {
        i = 1;
        $("Error1").text('Please Upload File');
        document.getElementById('Error1').innerHTML = "Please Upload File";
    }
    if (i == 0) {
        $.ajax({
            url: "/Tenders/Index",
            type: "POST",
            data: function () {
                var data = new FormData();
                data.append("pdftitle", jQuery("#pdftitle").val());

                data.append("files", jQuery("#files").get(0).files[0]);
                return data;
            }(),
            contentType: false,
            processData: false,
            success: function (response) {

                $("#pdftitle").val("");
                $("#files").val("");
                $("Error1").text(response);
                document.getElementById('Error1').innerHTML = response;
                Info();
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
    }

}
function Info() {
    var tr = '';
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Tenders/TenderImagesInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            $("Error1").text('');
            if (response.length != 0) {
                for (var i = 0; i < response.length; i++) {
                    tr += '<tr><td><a href="' + response[i].file_part + '" target="_blank">  <span class="fa fa-eye">' + response[i].titlename + '</span></a></td></tr>';
                    $('#Info').html(tr);
                }
            }
        }
    });
}

// Announcements form
function TenderAnnouncements_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Tenders/TenderAnnouncements_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            
            var ActiveBids = 0;
            var OpeningToday = 0;
            var ClosedToday = 0;
            var ClosedDays = 0;
            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var tr = '';
            if (data.length != 0) {

                for (var j = 0; j < data.length; j++) {

                    const publisheddate = new Date(data[j].publish_date);
                    const openingdate = new Date(data[j].opening_start_datetime);
                    // string cd = item.last_submission_datetime;
                    const Closedate = new Date(data[j].last_submission_datetime);

                    var today = new Date();
                    var newdate = new Date();
                    newdate.setDate(today.getDate() + 7);

                    if (publisheddate >= today) {
                        ActiveBids = ActiveBids + 1;
                    }
                    if (openingdate == today) {
                        OpeningToday = OpeningToday + 1;
                    }
                    if (Closedate == today) {

                        ClosedToday = ClosedToday + 1;
                    }

                    if (Closedate <= newdate && Closedate >= today) {

                        ClosedDays = ClosedDays + 1;
                    }


                    tr += '<tr><td><img src="~/Content/WspImages/tendor 3.png" /></td>' +
                        '<td>' + data[j].development_area + '</td><td>' + data[j].bid_ref_no + '</td>' +
                        '<td>' + data[j].description + '</td><td>' + data[j].office_inviting_tender + '</td>' +
                        '<td>' + data[j].office_emailid + '</td><td>' + data[j].publish_date + '</td>' +
                        '<td>' + data[j].tender_ref_no + '</td><td><a href="' + data[j].url + '" target="_blank">' + data[j].url + '</a>' +
                        '</td><td>' + data[j].sale_start_datetime + '</td>' +
                        '<td>' + data[j].sale_end_datetime + '</td>' +
                        '<td>' + data[j].last_submission_datetime + '</td>' +
                        '<td>' + data[j].opening_start_datetime + '</td></tr>';

                }

            }
            else {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
            }

            $('#tbl_activebitsdays').text(ActiveBids);
            $('#tbl_openingdays').text(OpeningToday);
            $('#tbl_closingdays').text(ClosedToday);
            $('#tbl_closingoneweekdays').text(ClosedDays);

            $('#tbl_TenderAnnountsData').html(tr);
            getPagination('#example');
        }


    });
}

function Save_Tender_Announsements() {

    var S = 0;

    var opening_start_datetime = $('#opening_start_datetime').val();
    if (opening_start_datetime == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Opening Start Date and Time");
    }
    var last_submission_datetime = $('#last_submission_datetime').val();
    if (last_submission_datetime == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Last Submission Date and Time");
    }
    var sale_end_datetime = $('#sale_end_datetime').val();
    if (sale_end_datetime == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Sale End Date and Time");
    }
    var sale_start_datetime = $('#sale_start_datetime').val();
    if (sale_start_datetime == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Sale Start Date and Time");
    }
    var url = $('#url').val();
    if (url == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Website URL");
    }
    var tender_ref_no = $('#tender_ref_no').val();
    if (tender_ref_no == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Tender Reference Number");
    }
    var publish_date = $('#publish_date').val();
    if (publish_date == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Published Date");
    }
    var office_emailid = $('#office_emailid').val();
    if (office_emailid == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Office Email Id");
    }
    var office_inviting_tender = $('#office_inviting_tender').val();
    if (office_inviting_tender == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Office Inviting Tender");
    }

    var description = $('#description').val();
    if (description == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Description");
    }
    var bid_ref_no = $('#bid_ref_no').val();
    if (bid_ref_no == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Your Bid Reference Number");
    }

    var development_area = $('#development_area').val();
    if (development_area == "") {
        S = 1;
        $('#TenderAnnouncements_Error').text("Please Enter Development Area");
    }
    if (S == 0) {
        $('#TenderAnnouncements_Error').text("Processing....");
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Tenders/TenderAnnouncementsData",
            data: "{'bid_ref_no': '" + bid_ref_no + "','description': '" + description + "','office_inviting_tender': '" + office_inviting_tender + "','office_emailid': '" + office_emailid + "','publish_date': '" + publish_date + "','tender_ref_no': '" + tender_ref_no + "','url': '" + url + "','sale_start_datetime': '" + sale_start_datetime + "','sale_end_datetime': '" + sale_end_datetime + "','last_submission_datetime': '" + last_submission_datetime + "','opening_start_datetime': '" + opening_start_datetime + "','development_area': '" + development_area + "'}",
            dataType: 'JSON',
            success: function (response) {
                $('#TenderAnnouncements_Error').text(response);
                if (response == "Logout") {
                      window.location = "/Home/LogOut";
                }
                else {
                    TenderAnnouncements_Info();
                    $('#bid_ref_no').val("");
                    $('#description').val("");
                    $('#office_inviting_tender').val("");
                    $('#office_emailid').val("");
                    $('#publish_date').val("");
                    $('#tender_ref_no').val("");
                    $('#url').val("");
                    $('#sale_start_datetime').val("");
                    $('#sale_end_datetime').val("");
                    $('#last_submission_datetime').val("");
                    $('#opening_start_datetime').val("");
                    $('#development_area').val("");
                }
            }
        });
    }
}


// Award form
function TenderAwards_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Tenders/TenderAwards_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var tr = '';
            if (data.length != 0) {

                for (var j = 0; j < data.length; j++) {

                    tr += '<tr><td>' + data[j].package_no + '</td>' +
                        '<td>' + data[j].packagename + '</td><td>' + data[j].contract_award_date + '</td>' +
                        '<td>' + data[j].contract_amount + '</td><td>' + data[j].name_of_consultant + '</td></tr>';

                }

            }
            else {
                tr = '<tr style="text-align:center;"><td colspan="5">No Data</td></tr>';
            }
            $('#tbl_tenderawards_Info').html(tr);

            getPagination('#example55');
        }


    });
}

function Save_Tender_Award() {

    var S = 0;

    var name_of_consultant = $('#name_of_consultant').val();
    if (name_of_consultant == "") {
        S = 1;
        $('#TenderAwardError').text("Please Enter Name of Consultant/Supplier/Contractor ");
    }
    var packagename = $('#packagename').val();
    if (packagename == "") {
        S = 1;
        $('#TenderAwardError').text("Please Enter Package Name");
    }
    var contract_amount = $('#contract_amount').val();
    if (contract_amount == "") {
        S = 1;
        $('#TenderAwardError').text("Please Enter Tender Amount(in Rs) ");
    }
    var package_no = $('#package_no').val();
    if (package_no == "") {
        S = 1;
        $('#TenderAwardError').text("Please Enter Package Number");
    }

    var contract_award_date = $('#contract_award_date').val();
    if (contract_award_date == "") {
        S = 1;
        $('#TenderAwardError').text("Please Enter Tender Awarded Date ");
    }
    var agency = $('#agency').val();
    if (agency == "") {
        S = 1;
        $('#TenderAwardError').text("Please Enter Agency Name");
    }

    if (S == 0) {
        $('#TenderAwardError').text("Processing....");
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Tenders/TenderAwardsData",
            data: "{'package_no': '" + package_no + "','packagename': '" + packagename + "','contract_award_date': '" + contract_award_date + "','agency': '" + agency + "','contract_amount': '" + contract_amount + "','name_of_consultant': '" + name_of_consultant + "'}",
            dataType: 'JSON',
            success: function (response) {
                $('#TenderAwardError').text(response);
                if (response == "Logout") {
                      window.location = "/Home/LogOut";
                }
                else {
                    TenderAwards_Info();
                    $('#package_no').val("");
                    $('#packagename').val("");
                    $('#contract_award_date').val("");
                    $('#agency').val("");
                    $('#contract_amount').val("");
                    $('#name_of_consultant').val("");
                }
            }
        });
    }
}

// Search Agency Info    


function Search_Agency_Info() {

    var S = 0;

    var Agency = $('#Agency').val();
    if (Agency == "0") {
        S = 1;
        $('#TenderAgencyError').text("Please Select Name of Agency ");
    }


    if (S == 0) {
        $('#TenderAgencyError').text("Processing....");
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Tenders/Tender_Awarded",
            data: "{'Agency': '" + Agency + "'}",
            dataType: 'JSON',
            success: function (data) {

                if (data == "Logout") {
                      window.location = "/Home/LogOut";
                }
                var tr = '';
                if (data.length != 0) {

                    for (var j = 0; j < data.length; j++) {

                        tr += '<tr><td>' + data[j].package_no + '</td>' +
                            '<td>' + data[j].packagename + '</td><td>' + data[j].contract_award_date + '</td>' +
                            '<td>' + data[j].contract_amount + '</td><td>' + data[j].name_of_consultant + '</td></tr>';

                    }

                }
                else {
                    tr = '<tr style="text-align:center;"><td colspan="5">No Data</td></tr>';
                }
                $('#tbl_tenderawards_Info').html(tr);

                getPagination('#example55');
            }
        });
    }
}


//E Tender Form

function E_Tender_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Tenders/E_Tender_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var tr = '';
            if (data.length != 0) {

                for (var j = 0; j < data.length; j++) {

                    tr += '<tr><td>' + (j + 1) + '</td>' +
                        '<td>' + data[j].title + '</td>' +

                        '<td><a href="' + data[j].url + '" target="_blank"><i class="fa fa fa-hand-o-right"></i> ' + data[j].url + '</a></td></tr>';

                }

            }
            else {
                tr = '<tr style="text-align:center;"><td colspan="13">No Data</td></tr>';
            }
            $('#tbl_Etender_Info').html(tr);
            getPagination('#ETender_Tbl');
        }


    });
}

function Save_E_Tender_Data() {

    var S = 0;


    var Etenderurl = $('#Etenderurl').val();
    if (Etenderurl == "") {
        S = 1;
        $('#Etender_Error').text("Please Enter WebSite Url");
    }
    var Etendertitle = $('#Etendertitle').val();
    if (Etendertitle == "") {
        S = 1;
        $('#Etender_Error').text("Please Enter Title");
    }

    var Etenderstate = $('#Etenderstate').val();
    if (Etenderstate == "") {
        S = 1;
        $('#Etender_Error').text("Please Enter State");
    }
    var UserName = $('#EntenderUserName').val();
    if (UserName == "") {
        S = 1;
        $('#Etender_Error').text("Please Enter UserName");
    }

    if (S == 0) {
        $('#Etender_Error').text("Processing....");
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Tenders/E_Tenders_Data",
            data: "{'title': '" + Etendertitle + "','url': '" + Etenderurl + "','UserName': '" + UserName + "','state': '" + Etenderstate + "'}",
            dataType: 'JSON',
            success: function (response) {
                $('#Etender_Error').text(response);
                if (response == "Logout") {
                      window.location = "/Home/LogOut";
                }
                else {
                    E_Tender_Info();
                    $('#Etenderurl').val("");
                    $('#Etendertitle').val("");
                    $('#Etenderstate').val("");
                    $('#EntenderUserName').val("");


                }
            }
        });
    }
}