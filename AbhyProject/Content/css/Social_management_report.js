$(document).ready(function () {
    GramPanchayatDataBase_Info();
    Support_Agency_DIP_Info();
    vwms_Info();
    Others_local_instituions_citizen_leaders_Info();
    IEC_Activities_Info();
    Social_Audit_Info();
    Total_Population_of_the_GP_Info();
    Socio_economic_demographic_profile_Info();
    abhy_socialmgt_vulnerable_communities_Info();
    abhy_socialmgt_farmers_Info();
    abhy_socialmgt_village_meetings_Info();
    abhy_socialmgt_community_feedback_Info();
    abhy_socialmgt_GRM_Info();
    abhy_socialmgt_capacity_building_Info();

});

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
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td> <td>' + data[i].reserved_unreserved + '</td> <td>' + data[i].contact_number + '</td></tr>';
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
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    var Category = "";

                    if (data[0].category_value != null) {
                        Category = data[0].category_value;
                    } else if (data[0].category_fa != null) {
                        Category = data[0].category_fa;
                    }
                    else if (data[0].marginal_fa != null) {
                        Category = data[0].marginal_fa;
                    }

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td> <td>' + Category + '</td> <td>' + data[i].reserved_unreserved + '</td> <td>' + data[i].contact_number + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_VWSC').html(tr);
            }
            else {
                $('#TblData_VWSC').html(tr);
            }

        }
    });
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
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td><td>' + data[i].contact_number + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="6">No Data</td></tr>';
                $('#TblData_DIP').html(tr);
            }
            else {
                $('#TblData_DIP').html(tr);
            }

        }
    });
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
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].designation + '</td><td>' + data[i].member_name + '</td><td>' + data[i].gender + '</td><td>' + data[i].contact_number + '</td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="7">No Data</td></tr>';
                $('#TblData_Others_local_instituions_citizen_leaders_Info').html(tr);
            }
            else {
                $('#TblData_Others_local_instituions_citizen_leaders_Info').html(tr);
            }

        }
    });
}


//IEC Activities (suggestive list)

function IEC_Activities_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/IEC_Activities_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            var a = 0;

            if (data == "Logout") {
                  window.location = "/Home/LogOut";
            }

            let tr = "";

            if (data != null) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].print_media != "Others") {
                        a += 1
                        tr += '<tr><td>' + (a) + '</td><td>' + data[i].print_media + '</td><td>' + data[i].loud_speakers + '</td></tr>';
                    }
                    else {
                        a += 1
                        tr += '<tr><td>' + (a) + '</td><td>' + data[i].radio + '</td><td>' + data[i].loud_speakers + '</td></tr>';

                    }
                }

            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="4">No Data</td></tr>';
                $('#tbl_e_part').html(tr);
            }
            else {
                $('#tbl_e_part').html(tr);
            }



        }
    });
}

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
                  window.location = "/Home/LogOut";

            }

            if (data.length != 0) {
                if (data[0].toolkit != null && data[0].toolkit != "0") {
                    $('#toolkit').text(data[0].toolkit);
                }
                if (data[0].pilot_under != null && data[0].pilot_under != "0") {
                    $('#pilot_under').text(data[0].pilot_under);
                }
                if (data[0].rollout_cal != null && data[0].rollout_cal != "0") {
                    $('#rollout_cal').text(data[0].rollout_cal);
                }


                if (data[0].audit_report != null && data[0].audit_report != "0") {
                    $('#audit_report').text(data[0].audit_report);
                }
                if (data[0].analysis_summary != null && data[0].analysis_summary != "0") {
                    $('#analysis_summary').text(data[0].analysis_summary);
                }


            }


        }
    });

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
            var tr = "";
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }

            if (data.length != 0) {
                $('#Total_Population_SNo').text(1);

                if (data[0].tol_population != null && data[0].tol_population != "") {
                    $('#tol_population').text(data[0].tol_population);
                }
                if (data[0].basic_data != null && data[0].basic_data != "") {
                    $('#basic_data').text(data[0].basic_data);
                }
                if (data[0].pop_20_21 != null && data[0].pop_20_21 != "") {
                    $('#pop_20_21').text(data[0].pop_20_21);
                }
                if (data[0].pop_21_22 != null && data[0].pop_21_22 != "") {
                    $('#pop_21_22').text(data[0].pop_21_22);
                }
                if (data[0].pop_22_23 != null && data[0].pop_22_23 != "") {
                    $('#pop_22_23').text(data[0].pop_22_23);
                }
                if (data[0].pop_23_24 != null && data[0].pop_23_24 != "") {
                    $('#pop_23_24').text(data[0].pop_23_24);
                }
                if (data[0].pop_24_25 != null && data[0].pop_24_25 != "") {
                    $('#pop_24_25').text(data[0].pop_24_25);
                }


                //if (data[0].cumulative != null && data[0].cumulative != "") {
                //    $('#cumulative').text(data[0].cumulative);
                //}
            }
            else {

                $('#tol_population').text("");

                $('#basic_data').text("");

                $('#pop_20_21').text("");

                $('#pop_21_22').text("");

                $('#pop_22_23').text("");

                $('#pop_23_24').text("");

                $('#pop_24_25').text("");


                //$('#cumulative').text("");


            }

        }
    });

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
                  window.location = "/Home/LogOut";

            }

            if (data.length != 0) {
                if (data[0].male_basic_data != null && data[0].male_basic_data != "") {
                    $('#male_basic_data').text(data[0].male_basic_data);
                }
                if (data[0].male_pop_20_21 != null && data[0].male_pop_20_21 != "") {
                    $('#male_pop_20_21').text(data[0].male_pop_20_21);
                }
                if (data[0].male_pop_21_22 != null && data[0].male_pop_21_22 != "") {
                    $('#male_pop_21_22').text(data[0].male_pop_21_22);
                }
                if (data[0].male_pop_22_23 != null && data[0].male_pop_22_23 != "") {
                    $('#male_pop_22_23').text(data[0].male_pop_22_23);
                }
                if (data[0].male_pop_23_24 != null && data[0].male_pop_23_24 != "") {
                    $('#male_pop_23_24').text(data[0].male_pop_23_24);
                }
                if (data[0].male_pop_24_25 != null && data[0].male_pop_24_25 != "") {
                    $('#male_pop_24_25').text(data[0].male_pop_24_25);
                }
                //if (data[0].male_cumulative != null && data[0].male_cumulative != "") {
                //    $('#male_cumulative').text(data[0].male_cumulative);
                //}
                if (data[0].female_basic_data != null && data[0].female_basic_data != "") {
                    $('#female_basic_data').text(data[0].female_basic_data);
                }


                if (data[0].female_pop_20_21 != null && data[0].female_pop_20_21 != "") {
                    $('#female_pop_20_21').text(data[0].female_pop_20_21);
                }
                if (data[0].female_pop_21_22 != null && data[0].female_pop_21_22 != "") {
                    $('#female_pop_21_22').text(data[0].female_pop_21_22);
                }
                if (data[0].female_pop_22_23 != null && data[0].female_pop_22_23 != "") {
                    $('#female_pop_22_23').text(data[0].female_pop_22_23);
                }
                if (data[0].female_pop_23_24 != null && data[0].female_pop_23_24 != "") {
                    $('#female_pop_23_24').text(data[0].female_pop_23_24);
                }
                if (data[0].female_pop_24_25 != null && data[0].female_pop_24_25 != "") {
                    $('#female_pop_24_25').text(data[0].female_pop_24_25);
                }
                //if (data[0].female_cumulative != null && data[0].female_cumulative != "") {
                //    $('#female_cumulative').text(data[0].female_cumulative);
                //}
                if (data[0].sexratio_basic_data != null && data[0].sexratio_basic_data != "") {
                    $('#sexratio_basic_data').text(data[0].sexratio_basic_data);
                }
                if (data[0].sexratio_pop_20_21 != null && data[0].sexratio_pop_20_21 != "") {
                    $('#sexratio_pop_20_21').text(data[0].sexratio_pop_20_21);
                }


                if (data[0].sexratio_pop_21_22 != null && data[0].sexratio_pop_21_22 != "") {
                    $('#sexratio_pop_21_22').text(data[0].sexratio_pop_21_22);
                }
                if (data[0].sexratio_pop_22_23 != null && data[0].sexratio_pop_22_23 != "") {
                    $('#sexratio_pop_22_23').text(data[0].sexratio_pop_22_23);
                }
                if (data[0].sexratio_pop_23_24 != null && data[0].sexratio_pop_23_24 != "") {
                    $('#sexratio_pop_23_24').text(data[0].sexratio_pop_23_24);
                }
                if (data[0].sexratio_pop_24_25 != null && data[0].sexratio_pop_24_25 != "") {
                    $('#sexratio_pop_24_25').text(data[0].sexratio_pop_24_25);
                }
                //if (data[0].sexratio_cumulative != null && data[0].sexratio_cumulative != "") {
                //    $('#sexratio_cumulative').text(data[0].sexratio_cumulative);
                //}

                if (data[0].other_basic_year != null && data[0].other_basic_year != "") {
                    $('#other_basic_data').text(data[0].other_basic_year);
                }

                if (data[0].other_pop_20_21 != null && data[0].other_pop_20_21 != "") {
                    $('#other_pop_20_21').text(data[0].other_pop_20_21);
                }
                if (data[0].other_pop_21_22 != null && data[0].other_pop_21_22 != "") {
                    $('#other_pop_21_22').text(data[0].other_pop_21_22);
                }
                if (data[0].other_pop_22_23 != null && data[0].other_pop_22_23 != "") {
                    $('#other_pop_22_23').text(data[0].other_pop_22_23);
                }
                if (data[0].other_pop_23_24 != null && data[0].other_pop_23_24 != "") {
                    $('#other_pop_23_24').text(data[0].other_pop_23_24);
                }
                if (data[0].other_pop_24_25 != null && data[0].other_pop_24_25 != "") {
                    $('#other_pop_24_25').text(data[0].other_pop_24_25);
                }
            }
            else {

                $('#male_basic_data').text("");
                $('#male_pop_20_21').text("");
                $('#male_pop_21_22').text("");
                $('#male_pop_22_23').text("");
                $('#male_pop_23_24').text("");
                $('#male_pop_24_25').text("");
                //$('#male_cumulative').text("");
                $('#female_basic_data').text("");
                $('#female_pop_20_21').text("");
                $('#female_pop_21_22').text("");
                $('#female_pop_22_23').text("");
                $('#female_pop_23_24').text("");
                $('#female_pop_24_25').text("");
                //$('#female_cumulative').text("");
                $('#sexratio_basic_data').text("");
                $('#sexratio_pop_20_21').text("");
                $('#sexratio_pop_21_22').text("");
                $('#sexratio_pop_22_23').text("");
                $('#sexratio_pop_23_24').text("");
                $('#sexratio_pop_24_25').text("");
                //$('#sexratio_cumulative').text("");

                $('#other_basic_data').text("");
                $('#other_pop_20_21').text("");
                $('#other_pop_21_22').text("");
                $('#other_pop_22_23').text("");
                $('#other_pop_23_24').text("");
                $('#other_pop_24_25').text("");
            }

        }
    });

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
                  window.location = "/Home/LogOut";

            }
            if (data.length != 0) {
                if (data[0].bpl_basic_data != null && data[0].bpl_basic_data != "") {
                    $('#bpl_basic_data').text(data[0].bpl_basic_data);
                }
                if (data[0].bpl_pop_20_21 != null && data[0].bpl_pop_20_21 != "") {
                    $('#bpl_pop_20_21').text(data[0].bpl_pop_20_21);
                }
                if (data[0].bpl_pop_21_22 != null && data[0].bpl_pop_21_22 != "") {
                    $('#bpl_pop_21_22').text(data[0].bpl_pop_21_22);
                }
                if (data[0].bpl_pop_22_23 != null && data[0].bpl_pop_22_23 != "") {
                    $('#bpl_pop_22_23').text(data[0].bpl_pop_22_23);
                }
                if (data[0].bpl_pop_23_24 != null && data[0].bpl_pop_23_24 != "") {
                    $('#bpl_pop_23_24').text(data[0].bpl_pop_23_24);
                }
                if (data[0].bpl_pop_24_25 != null && data[0].bpl_pop_24_25 != "") {
                    $('#bpl_pop_24_25').text(data[0].bpl_pop_24_25);
                }
                //if (data[0].bpl_cumulative != null && data[0].bpl_cumulative != "") {
                //    $('#bpl_cumulative').text(data[0].bpl_cumulative);
                //}
                if (data[0].sc_basic_data != null && data[0].sc_basic_data != "") {
                    $('#sc_basic_data').text(data[0].sc_basic_data);
                }


                if (data[0].sc_pop_20_21 != null && data[0].sc_pop_20_21 != "") {
                    $('#sc_pop_20_21').text(data[0].sc_pop_20_21);
                }
                if (data[0].sc_pop_21_22 != null && data[0].sc_pop_21_22 != "") {
                    $('#sc_pop_21_22').text(data[0].sc_pop_21_22);
                }
                if (data[0].sc_pop_22_23 != null && data[0].sc_pop_22_23 != "") {
                    $('#sc_pop_22_23').text(data[0].sc_pop_22_23);
                }
                if (data[0].sc_pop_23_24 != null && data[0].sc_pop_23_24 != "") {
                    $('#sc_pop_23_24').text(data[0].sc_pop_23_24);
                }
                if (data[0].sc_pop_24_25 != null && data[0].sc_pop_24_25 != "") {
                    $('#sc_pop_24_25').text(data[0].sc_pop_24_25);
                }
                //if (data[0].sc_cumulative != null && data[0].sc_cumulative != "") {
                //    $('#sc_cumulative').text(data[0].sc_cumulative);
                //}
                if (data[0].st_basic_data != null && data[0].st_basic_data != "") {
                    $('#st_basic_data').text(data[0].st_basic_data);
                }
                if (data[0].st_pop_20_21 != null && data[0].st_pop_20_21 != "") {
                    $('#st_pop_20_21').text(data[0].st_pop_20_21);
                }
                if (data[0].st_pop_21_22 != null && data[0].st_pop_21_22 != "") {
                    $('#st_pop_21_22').text(data[0].st_pop_21_22);
                }
                if (data[0].st_pop_22_23 != null && data[0].st_pop_22_23 != "") {
                    $('#st_pop_22_23').text(data[0].st_pop_22_23);
                }
                if (data[0].st_pop_23_24 != null && data[0].st_pop_23_24 != "") {
                    $('#st_pop_23_24').text(data[0].st_pop_23_24);
                }
                if (data[0].st_pop_24_25 != null && data[0].st_pop_24_25 != "") {
                    $('#st_pop_24_25').text(data[0].st_pop_24_25);
                }
                //if (data[0].st_cumulative != null && data[0].st_cumulative != "") {
                //    $('#st_cumulative').text(data[0].st_cumulative);
                //}
                if (data[0].obc_basic_data != null && data[0].obc_basic_data != "") {
                    $('#obc_basic_data').text(data[0].obc_basic_data);
                }
                if (data[0].obc_pop_20_21 != null && data[0].obc_pop_20_21 != "") {
                    $('#obc_pop_20_21').text(data[0].obc_pop_20_21);
                }
                if (data[0].obc_pop_21_22 != null && data[0].obc_pop_21_22 != "") {
                    $('#obc_pop_21_22').text(data[0].obc_pop_21_22);
                }
                if (data[0].obc_pop_22_23 != null && data[0].obc_pop_22_23 != "") {
                    $('#obc_pop_22_23').text(data[0].obc_pop_22_23);
                }
                if (data[0].obc_pop_23_24 != null && data[0].obc_pop_23_24 != "") {
                    $('#obc_pop_23_24').text(data[0].obc_pop_23_24);
                }
                if (data[0].obc_pop_24_25 != null && data[0].obc_pop_24_25 != "") {
                    $('#obc_pop_24_25').text(data[0].obc_pop_24_25);
                }
                //if (data[0].obc_cumulative != null && data[0].obc_cumulative != "") {
                //    $('#obc_cumulative').text(data[0].obc_cumulative);
                //}
                if (data[0].minorities_basic_data != null && data[0].minorities_basic_data != "") {
                    $('#minorities_basic_data').text(data[0].minorities_basic_data);
                }
                if (data[0].minorities_pop_20_21 != null && data[0].minorities_pop_20_21 != "") {
                    $('#minorities_pop_20_21').text(data[0].minorities_pop_20_21);
                }
                if (data[0].minorities_pop_21_22 != null && data[0].minorities_pop_21_22 != "") {
                    $('#minorities_pop_21_22').text(data[0].minorities_pop_21_22);
                }
                if (data[0].minorities_pop_22_23 != null && data[0].minorities_pop_22_23 != "") {
                    $('#minorities_pop_22_23').text(data[0].minorities_pop_22_23);
                }
                if (data[0].minorities_pop_23_24 != null && data[0].minorities_pop_23_24 != "") {
                    $('#minorities_pop_23_24').text(data[0].minorities_pop_23_24);
                }
                if (data[0].minorities_pop_24_25 != null && data[0].minorities_pop_24_25 != "") {
                    $('#minorities_pop_24_25').text(data[0].minorities_pop_24_25);
                }

                //if (data[0].minorities_cumulative != null && data[0].minorities_cumulative != "") {
                //    $('#minorities_cumulative').text(data[0].minorities_cumulative);
                //}
                if (data[0].pwd_basic_data != null && data[0].pwd_basic_data != "") {
                    $('#pwd_basic_data').text(data[0].pwd_basic_data);
                }
                if (data[0].pwd_pop_20_21 != null && data[0].pwd_pop_20_21 != "") {
                    $('#pwd_pop_20_21').text(data[0].pwd_pop_20_21);
                }
                if (data[0].pwd_pop_21_22 != null && data[0].pwd_pop_21_22 != "") {
                    $('#pwd_pop_21_22').text(data[0].pwd_pop_21_22);
                }
                if (data[0].pwd_pop_22_23 != null && data[0].pwd_pop_22_23 != "") {
                    $('#pwd_pop_22_23').text(data[0].pwd_pop_22_23);
                }
                if (data[0].pwd_pop_23_24 != null && data[0].pwd_pop_23_24 != "") {
                    $('#pwd_pop_23_24').text(data[0].pwd_pop_23_24);
                }
                if (data[0].pwd_pop_24_25 != null && data[0].pwd_pop_24_25 != "") {
                    $('#pwd_pop_24_25').text(data[0].pwd_pop_24_25);
                }
                //if (data[0].pwd_cumulative != null && data[0].pwd_cumulative != "") {
                //    $('#pwd_cumulative').text(data[0].pwd_cumulative);
                //}
                if (data[0].women_hh_basic_data != null && data[0].women_hh_basic_data != "") {
                    $('#women_hh_basic_data').text(data[0].women_hh_basic_data);
                }
                if (data[0].women_hh_pop_20_21 != null && data[0].women_hh_pop_20_21 != "") {
                    $('#women_hh_pop_20_21').text(data[0].women_hh_pop_20_21);
                }
                if (data[0].women_hh_pop_21_22 != null && data[0].women_hh_pop_21_22 != "") {
                    $('#women_hh_pop_21_22').text(data[0].women_hh_pop_21_22);
                }
                if (data[0].women_hh_pop_22_23 != null && data[0].women_hh_pop_22_23 != "") {
                    $('#women_hh_pop_22_23').text(data[0].women_hh_pop_22_23);
                }
                if (data[0].women_hh_pop_23_24 != null && data[0].women_hh_pop_23_24 != "") {
                    $('#women_hh_pop_23_24').text(data[0].women_hh_pop_23_24);
                }

                if (data[0].women_hh_pop_24_25 != null && data[0].women_hh_pop_24_25 != "") {
                    $('#women_hh_pop_24_25').text(data[0].women_hh_pop_24_25);
                }
                //if (data[0].women_hh_cumulative != null && data[0].women_hh_cumulative != "") {
                //    $('#women_hh_cumulative').text(data[0].women_hh_cumulative);
                //}

            }
            else {

                $('#bpl_basic_data').text("");

                $('#bpl_pop_20_21').text("");

                $('#bpl_pop_21_22').text("");

                $('#bpl_pop_22_23').text("");

                $('#bpl_pop_23_24').text("");

                $('#bpl_pop_24_25').text("");

                //$('#bpl_cumulative').text("");
                $('#sc_basic_data').text("");
                $('#sc_pop_20_21').text("");
                $('#sc_pop_21_22').text("");
                $('#sc_pop_22_23').text("");
                $('#sc_pop_23_24').text("");
                $('#sc_pop_24_25').text("");
                //$('#sc_cumulative').text("");
                $('#st_basic_data').text("");
                $('#st_pop_20_21').text("");
                $('#st_pop_21_22').text("");
                $('#st_pop_22_23').text("");
                $('#st_pop_23_24').text("");
                $('#st_pop_24_25').text("");
                //$('#st_cumulative').text("");
                $('#obc_basic_data').text("");
                $('#obc_pop_20_21').text("");
                $('#obc_pop_21_22').text("");
                $('#obc_pop_22_23').text("");
                $('#obc_pop_23_24').text("");
                $('#obc_pop_24_25').text("");
                //$('#obc_cumulative').text("");
                $('#minorities_basic_data').text("");
                $('#minorities_pop_20_21').text("");
                $('#minorities_pop_21_22').text("");
                $('#minorities_pop_22_23').text("");
                $('#minorities_pop_23_24').text("");
                $('#minorities_pop_24_25').text("");
                //$('#minorities_cumulative').text("");
                $('#pwd_basic_data').text("");
                $('#pwd_pop_20_21').text("");
                $('#pwd_pop_21_22').text("");
                $('#pwd_pop_22_23').text("");
                $('#pwd_pop_23_24').text("");
                $('#pwd_pop_24_25').text("");
                //$('#pwd_cumulative').text("");
                $('#women_hh_basic_data').text("");
                $('#women_hh_pop_20_21').text("");
                $('#women_hh_pop_21_22').text("");
                $('#women_hh_pop_22_23').text("");
                $('#women_hh_pop_23_24').text("");
                $('#women_hh_pop_24_25').text("");
                //$('#women_hh_cumulative').text("");


            }

        }
    });

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
                  window.location = "/Home/LogOut";

            }

            if (data.length != 0) {
                if (data[0].large_basic_data != null && data[0].large_basic_data != "") {
                    $('#large_basic_data').text(data[0].large_basic_data);
                }
                if (data[0].large_pop_20_21 != null && data[0].large_pop_20_21 != "") {
                    $('#large_pop_20_21').text(data[0].large_pop_20_21);
                }
                if (data[0].large_pop_21_22 != null && data[0].large_pop_21_22 != "") {
                    $('#large_pop_21_22').text(data[0].large_pop_21_22);
                }
                if (data[0].large_pop_22_23 != null && data[0].large_pop_22_23 != "") {
                    $('#large_pop_22_23').text(data[0].large_pop_22_23);
                }
                if (data[0].large_pop_23_24 != null && data[0].large_pop_23_24 != "") {
                    $('#large_pop_23_24').text(data[0].large_pop_23_24);
                }
                if (data[0].large_pop_24_25 != null && data[0].large_pop_24_25 != "") {
                    $('#large_pop_24_25').text(data[0].large_pop_24_25);
                }
                //if (data[0].large_cumulative != null && data[0].large_cumulative != "") {
                //    $('#large_cumulative').text(data[0].large_cumulative);
                //}
                if (data[0].marginal_basic_data != null && data[0].marginal_basic_data != "") {
                    $('#marginal_basic_data').text(data[0].marginal_basic_data);
                }


                if (data[0].marginal_pop_20_21 != null && data[0].marginal_pop_20_21 != "") {
                    $('#marginal_pop_20_21').text(data[0].marginal_pop_20_21);
                }
                if (data[0].marginal_pop_21_22 != null && data[0].marginal_pop_21_22 != "") {
                    $('#marginal_pop_21_22').text(data[0].marginal_pop_21_22);
                }
                if (data[0].marginal_pop_22_23 != null && data[0].marginal_pop_22_23 != "") {
                    $('#marginal_pop_22_23').text(data[0].marginal_pop_22_23);
                }
                if (data[0].marginal_pop_23_24 != null && data[0].marginal_pop_23_24 != "") {
                    $('#marginal_pop_23_24').text(data[0].marginal_pop_23_24);
                }
                if (data[0].marginal_pop_24_25 != null && data[0].marginal_pop_24_25 != "") {
                    $('#marginal_pop_24_25').text(data[0].marginal_pop_24_25);
                }
                //if (data[0].marginal_cumulative != null && data[0].marginal_cumulative != "") {
                //    $('#marginal_cumulative').text(data[0].marginal_cumulative);
                //}
                if (data[0].small_basic_data != null && data[0].small_basic_data != "") {
                    $('#small_basic_data').text(data[0].small_basic_data);
                }
                if (data[0].small_pop_20_21 != null && data[0].small_pop_20_21 != "") {
                    $('#small_pop_20_21').text(data[0].small_pop_20_21);
                }
                if (data[0].small_pop_21_22 != null && data[0].small_pop_21_22 != "") {
                    $('#small_pop_21_22').text(data[0].small_pop_21_22);
                }
                if (data[0].small_pop_22_23 != null && data[0].small_pop_22_23 != "") {
                    $('#small_pop_22_23').text(data[0].small_pop_22_23);
                }
                if (data[0].small_pop_23_24 != null && data[0].small_pop_23_24 != "") {
                    $('#small_pop_23_24').text(data[0].small_pop_23_24);
                }
                if (data[0].small_pop_24_25 != null && data[0].small_pop_24_25 != "") {
                    $('#small_pop_24_25').text(data[0].small_pop_24_25);
                }
                //if (data[0].small_cumulative != null && data[0].small_cumulative != "") {
                //    $('#small_cumulative').text(data[0].small_cumulative);
                //}
                if (data[0].medium_basic_data != null && data[0].medium_basic_data != "") {
                    $('#medium_basic_data').text(data[0].medium_basic_data);
                }
                if (data[0].medium_pop_20_21 != null && data[0].medium_pop_20_21 != "") {
                    $('#medium_pop_20_21').text(data[0].medium_pop_20_21);
                }
                if (data[0].medium_pop_21_22 != null && data[0].medium_pop_21_22 != "") {
                    $('#medium_pop_21_22').text(data[0].medium_pop_21_22);
                }
                if (data[0].medium_pop_22_23 != null && data[0].medium_pop_22_23 != "") {
                    $('#medium_pop_22_23').text(data[0].medium_pop_22_23);
                }
                if (data[0].medium_pop_23_24 != null && data[0].medium_pop_23_24 != "") {
                    $('#medium_pop_23_24').text(data[0].medium_pop_23_24);
                }
                if (data[0].medium_pop_24_25 != null && data[0].medium_pop_24_25 != "") {
                    $('#medium_pop_24_25').text(data[0].medium_pop_24_25);
                }
                //if (data[0].medium_cumulative != null && data[0].medium_cumulative != "") {
                //    $('#medium_cumulative').text(data[0].medium_cumulative);
                //}
                if (data[0].landless_basic_data != null && data[0].landless_basic_data != "") {
                    $('#landless_basic_data').text(data[0].landless_basic_data);
                }
                if (data[0].landless_pop_20_21 != null && data[0].landless_pop_20_21 != "") {
                    $('#landless_pop_20_21').text(data[0].landless_pop_20_21);
                }
                if (data[0].landless_pop_21_22 != null && data[0].landless_pop_21_22 != "") {
                    $('#landless_pop_21_22').text(data[0].landless_pop_21_22);
                }
                if (data[0].landless_pop_22_23 != null && data[0].landless_pop_22_23 != "") {
                    $('#landless_pop_22_23').text(data[0].landless_pop_22_23);
                }
                if (data[0].landless_pop_23_24 != null && data[0].landless_pop_23_24 != "") {
                    $('#landless_pop_23_24').text(data[0].landless_pop_23_24);
                }
                if (data[0].landless_pop_24_25 != null && data[0].landless_pop_24_25 != "") {
                    $('#landless_pop_24_25').text(data[0].landless_pop_24_25);
                }

                //if (data[0].landless_cumulative != null && data[0].landless_cumulative != "") {
                //    $('#landless_cumulative').text(data[0].landless_cumulative);
                //}


            }
            else {

                $('#large_basic_data').text("");

                $('#large_pop_20_21').text("");

                $('#large_pop_21_22').text("");

                $('#large_pop_22_23').text("");

                $('#large_pop_23_24').text("");

                $('#large_pop_24_25').text("");

                //$('#large_cumulative').text("");
                $('#marginal_basic_data').text("");
                $('#marginal_pop_20_21').text("");
                $('#marginal_pop_21_22').text("");
                $('#marginal_pop_22_23').text("");
                $('#marginal_pop_23_24').text("");
                $('#marginal_pop_24_25').text("");
                //$('#marginal_cumulative').text("");
                $('#small_basic_data').text("");
                $('#small_pop_20_21').text("");
                $('#small_pop_21_22').text("");
                $('#small_pop_22_23').text("");
                $('#small_pop_23_24').text("");
                $('#small_pop_24_25').text("");
                //$('#small_cumulative').text("");
                $('#medium_basic_data').text("");
                $('#medium_pop_20_21').text("");
                $('#medium_pop_21_22').text("");
                $('#medium_pop_22_23').text("");
                $('#medium_pop_23_24').text("");
                $('#medium_pop_24_25').text("");
                //$('#medium_cumulative').text("");
                $('#landless_basic_data').text("");
                $('#landless_pop_20_21').text("");
                $('#landless_pop_21_22').text("");
                $('#landless_pop_22_23').text("");
                $('#landless_pop_23_24').text("");
                $('#landless_pop_24_25').text("");
                //$('#landless_cumulative').text("");

            }

        }
    });

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
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].name_of_meeting + '</td><td>' + data[i].curr_date + '</td><td>' + data[i].location + '</td> <td>' + data[i].prior_info + '</td> <td>' + data[i].noof_attendees + '</td><td>' + data[i].male + '</td><td>' + data[i].female + '</td><td>' + data[i].other + '</td><td>' + data[i].total + '</td><td>' + data[i].key_issues + '</td><td><a href="' + data[i].mom + '" target="_blank"> ' + data[i].mom_filename + '</a></td><td><a href="' + data[i].photographs + '" target="_blank"> ' + data[i].photographs_filename + '</a></td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="14">No Data</td></tr>';
                $('#village_meeting_Info').html(tr);
            }
            else {
                $('#village_meeting_Info').html(tr);
            }

        }
    });


}


//Community Feedback (suggestive list)

function abhy_socialmgt_community_feedback_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_community_feedback_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            $('#community_feedback').hide();
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            if (data.length != 0) {
                if (data[0].community_feedback != null && data[0].community_feedback != "") {
                    $('#community_feedback').show();
                    var tr = ' <a href="' + data[0].community_feedback + '" class="btn btn-success" target="_blank" download> Download</a>';
                    $('#community_feedback').html(tr);
                }
                else {
                    $('#community_feedback').show();
                    var tr = 'NO Files';
                    $('#community_feedback').html(tr);
                }
            }



        }
    });
}

//CAPACITY BUILDING & TRAINING

function abhy_socialmgt_capacity_building_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_socialmgt_capacity_building_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            var tr = '';
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    tr += '<tr><td>' + (i + 1) + '</td><td>' + data[i].name_of_training + '</td><td>' + data[i].training_location + '</td><td>' + data[i].training_date + '</td> <td><a href="' + data[i].training_schedule + '" target="_blank">' + data[i].train_schedule_filename + '</a></td> <td><a href="' + data[i].training_materials + '" target="_blank">' + data[i].train_materials_filename + '</a></td> <td><a href="' + data[i].noof_trainings + '" target="_blank">' + data[i].nooftrain_filename + '</a></td> <td><a href="' + data[i].training_report + '" target="_blank">' + data[i].training_report_filename + '</a></td><td><a href="' + data[i].achievements + '" target="_blank">' + data[i].achievements_filename + '</a></td><td><a href="' + data[i].findings_of_survey + '" target="_blank">' + data[i].findings_filename + '</a></td></tr>';
                }
            }
            if (tr == '') {
                tr = '<tr style="text-align:center;"><td colspan="10">No Data</td></tr>';
                $('#capacity_building_Info').html(tr);
            }
            else {
                $('#capacity_building_Info').html(tr);
            }

        }
    });
}

//GRM

function abhy_socialmgt_GRM_Info() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/SocialMointoring/abhy_GRM_Info',
        data: '',
        dataType: 'JSON',
        success: function (data) {

            if (data == "Logout") {
                  window.location = "/Home/LogOut";

            }
            if (data.length != 0) {
                if (data[0].sys_aval != null && data[0].sys_aval != "") {
                    $('#sys_aval').text(data[0].sys_aval);
                }
                if (data[0].tollfreeno != null && data[0].tollfreeno != "") {
                    $('#tollfreeno').text(data[0].tollfreeno);
                }
                if (data[0].adds_dissemination != null && data[0].adds_dissemination != "") {
                    $('#adds_dissemination').text(data[0].adds_dissemination);
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

