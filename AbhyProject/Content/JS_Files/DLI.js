var abc = 0;
var component = 0;


//-----------------DLI 1-----------------------

function Dli_1_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli_1_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {
             
            $('.loader').hide();

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {

                $('#waterlevel_i_baseline').val(response.waterlevel_i_baseline);
                $('#waterlevel_i_20_21').val(response.waterlevel_i_20_21);
                $('#waterlevel_i_21_22').val(response.waterlevel_i_21_22);
                $('#waterlevel_i_22_23').val(response.waterlevel_i_22_23);
                $('#waterlevel_i_23_24').val(response.waterlevel_i_23_24);
                $('#waterlevel_i_24_25').val(response.waterlevel_i_24_25);
                $('#waterlevel_i_cumulative').val(response.waterlevel_i_cumulative);
                $('#waterlevel_i_disbursible').val(response.waterlevel_i_disbursible);

                $('#waterlevel_ii_baseline').val(response.waterlevel_ii_baseline);
                $('#waterlevel_ii_20_21').val(response.waterlevel_ii_20_21);
                $('#waterlevel_ii_21_22').val(response.waterlevel_ii_21_22);
                $('#waterlevel_ii_22_23').val(response.waterlevel_ii_22_23);
                $('#waterlevel_ii_23_24').val(response.waterlevel_ii_23_24);
                $('#waterlevel_ii_24_25').val(response.waterlevel_ii_24_25);
                $('#waterlevel_ii_cumulative').val(response.waterlevel_ii_cumulative);
                $('#waterlevel_ii_disbursible').val(response.waterlevel_ii_disbursible);

                $('#waterlevel_iv_baseline').val(response.waterlevel_iv_baseline);
                $('#waterlevel_iv_20_21').val(response.waterlevel_iv_20_21);
                $('#waterlevel_iv_21_22').val(response.waterlevel_iv_21_22);
                $('#waterlevel_iv_22_23').val(response.waterlevel_iv_22_23);
                $('#waterlevel_iv_23_24').val(response.waterlevel_iv_23_24);
                $('#waterlevel_iv_24_25').val(response.waterlevel_iv_24_25);
                $('#waterlevel_iv_cumulative').val(response.waterlevel_iv_cumulative);
                $('#waterlevel_iv_disbursible').val(response.waterlevel_iv_disbursible);

                $('#waterlevel_v_baseline').val(response.waterlevel_v_baseline);
                $('#waterlevel_v_20_21').val(response.waterlevel_v_20_21);
                $('#waterlevel_v_21_22').val(response.waterlevel_v_21_22);
                $('#waterlevel_v_22_23').val(response.waterlevel_v_22_23);
                $('#waterlevel_v_23_24').val(response.waterlevel_v_23_24);
                $('#waterlevel_v_24_25').val(response.waterlevel_v_24_25);
                $('#waterlevel_v_cumulative').val(response.waterlevel_v_cumulative);
                $('#waterlevel_v_disbursible').val(response.waterlevel_v_disbursible);

                $('#waterlevel_vii_baseline').val(response.waterlevel_vii_baseline);
                $('#waterlevel_vii_20_21').val(response.waterlevel_vii_20_21);
                $('#waterlevel_vii_21_22').val(response.waterlevel_vii_21_22);
                $('#waterlevel_vii_22_23').val(response.waterlevel_vii_22_23);
                $('#waterlevel_vii_23_24').val(response.waterlevel_vii_23_24);
                $('#waterlevel_vii_24_25').val(response.waterlevel_vii_24_25);
                $('#waterlevel_vii_cumulative').val(response.waterlevel_vii_cumulative);
                $('#waterlevel_vii_disbursible').val(response.waterlevel_vii_disbursible);

                $('#waterlevel_viii_baseline').val(response.waterlevel_viii_baseline);
                $('#waterlevel_viii_20_21').val(response.waterlevel_viii_20_21);
                $('#waterlevel_viii_21_22').val(response.waterlevel_viii_21_22);
                $('#waterlevel_viii_22_23').val(response.waterlevel_viii_22_23);
                $('#waterlevel_viii_23_24').val(response.waterlevel_viii_23_24);
                $('#waterlevel_viii_24_25').val(response.waterlevel_viii_24_25);
                $('#waterlevel_viii_cumulative').val(response.waterlevel_viii_cumulative);
                $('#waterlevel_viii_disbursible').val(response.waterlevel_viii_disbursible);

                $('#waterquality_i_baseline').val(response.waterquality_i_baseline);
                $('#waterquality_i_20_21').val(response.waterquality_i_20_21);
                $('#waterquality_i_21_22').val(response.waterquality_i_21_22);
                $('#waterquality_i_22_23').val(response.waterquality_i_22_23);
                $('#waterquality_i_23_24').val(response.waterquality_i_23_24);
                $('#waterquality_i_24_25').val(response.waterquality_i_24_25);
                $('#waterquality_i_cumulative').val(response.waterquality_i_cumulative);
                $('#waterquality_i_disbursible').val(response.waterquality_i_disbursible);

                $('#waterquality_ii_baseline').val(response.waterquality_ii_baseline);
                $('#waterquality_ii_20_21').val(response.waterquality_ii_20_21);
                $('#waterquality_ii_21_22').val(response.waterquality_ii_21_22);
                $('#waterquality_ii_22_23').val(response.waterquality_ii_22_23);
                $('#waterquality_ii_23_24').val(response.waterquality_ii_23_24);
                $('#waterquality_ii_24_25').val(response.waterquality_ii_24_25);
                $('#waterquality_ii_cumulative').val(response.waterquality_ii_cumulative);
                $('#waterquality_ii_disbursible').val(response.waterquality_ii_disbursible);

                $('#waterquality_iv_baseline').val(response.waterquality_iv_baseline);
                $('#waterquality_iv_20_21').val(response.waterquality_iv_20_21);
                $('#waterquality_iv_21_22').val(response.waterquality_iv_21_22);
                $('#waterquality_iv_22_23').val(response.waterquality_iv_22_23);
                $('#waterquality_iv_23_24').val(response.waterquality_iv_23_24);
                $('#waterquality_iv_24_25').val(response.waterquality_iv_24_25);
                $('#waterquality_iv_cumulative').val(response.waterquality_iv_cumulative);
                $('#waterquality_iv_disbursible').val(response.waterquality_iv_disbursible);

                $('#waterquality_v_baseline').val(response.waterquality_v_baseline);
                $('#waterquality_v_20_21').val(response.waterquality_v_20_21);
                $('#waterquality_v_21_22').val(response.waterquality_v_21_22);
                $('#waterquality_v_22_23').val(response.waterquality_v_22_23);
                $('#waterquality_v_23_24').val(response.waterquality_v_23_24);
                $('#waterquality_v_24_25').val(response.waterquality_v_24_25);
                $('#waterquality_v_cumulative').val(response.waterquality_v_cumulative);
                $('#waterquality_v_disbursible').val(response.waterquality_v_disbursible);

                $('#blockwise_i_baseline').val(response.blockwise_i_baseline);
                $('#blockwise_i_20_21').val(response.blockwise_i_20_21);
                $('#blockwise_i_21_22').val(response.blockwise_i_21_22);
                $('#blockwise_i_22_23').val(response.blockwise_i_22_23);
                $('#blockwise_i_23_24').val(response.blockwise_i_23_24);
                $('#blockwise_i_24_25').val(response.blockwise_i_24_25);
                $('#blockwise_i_cumulative').val(response.blockwise_i_cumulative);
                $('#blockwise_i_disbursible').val(response.blockwise_i_disbursible);

                $('#blockwise_ii_baseline').val(response.blockwise_ii_baseline);
                $('#blockwise_ii_20_21').val(response.blockwise_ii_20_21);
                $('#blockwise_ii_21_22').val(response.blockwise_ii_21_22);
                $('#blockwise_ii_22_23').val(response.blockwise_ii_22_23);
                $('#blockwise_ii_23_24').val(response.blockwise_ii_23_24);
                $('#blockwise_ii_24_25').val(response.blockwise_ii_24_25);
                $('#blockwise_ii_cumulative').val(response.blockwise_ii_cumulative);
                $('#blockwise_ii_disbursible').val(response.blockwise_ii_disbursible);

                $('#statewise_i_baseline').val(response.statewise_i_baseline);
                $('#statewise_i_20_21').val(response.statewise_i_20_21);
                $('#statewise_i_21_22').val(response.statewise_i_21_22);
                $('#statewise_i_22_23').val(response.statewise_i_22_23);
                $('#statewise_i_23_24').val(response.statewise_i_23_24);
                $('#statewise_i_24_25').val(response.statewise_i_24_25);
                $('#statewise_i_cumulative').val(response.statewise_i_cumulative);
                $('#statewise_i_disbursible').val(response.statewise_i_disbursible);
            }
            if (response == "NO") {

                $('#waterlevel_i_baseline').val("");
                $('#waterlevel_i_20_21').val("");
                $('#waterlevel_i_21_22').val("");
                $('#waterlevel_i_22_23').val("");
                $('#waterlevel_i_23_24').val("");
                $('#waterlevel_i_24_25').val("");
                $('#waterlevel_i_cumulative').val("");
                $('#waterlevel_i_disbursible').val("");

                $('#waterlevel_ii_baseline').val("");
                $('#waterlevel_ii_20_21').val("");
                $('#waterlevel_ii_21_22').val("");
                $('#waterlevel_ii_22_23').val("");
                $('#waterlevel_ii_23_24').val("");
                $('#waterlevel_ii_24_25').val("");
                $('#waterlevel_ii_cumulative').val("");
                $('#waterlevel_ii_disbursible').val("");

                $('#waterlevel_iv_baseline').val("");
                $('#waterlevel_iv_20_21').val("");
                $('#waterlevel_iv_21_22').val("");
                $('#waterlevel_iv_22_23').val("");
                $('#waterlevel_iv_23_24').val("");
                $('#waterlevel_iv_24_25').val("");
                $('#waterlevel_iv_cumulative').val("");
                $('#waterlevel_iv_disbursible').val("");

                $('#waterlevel_v_baseline').val("");
                $('#waterlevel_v_20_21').val("");
                $('#waterlevel_v_21_22').val("");
                $('#waterlevel_v_22_23').val("");
                $('#waterlevel_v_23_24').val("");
                $('#waterlevel_v_24_25').val("");
                $('#waterlevel_v_cumulative').val("");
                $('#waterlevel_v_disbursible').val("");

                $('#waterlevel_vii_baseline').val("");
                $('#waterlevel_vii_20_21').val("");
                $('#waterlevel_vii_21_22').val("");
                $('#waterlevel_vii_22_23').val("");
                $('#waterlevel_vii_23_24').val("");
                $('#waterlevel_vii_24_25').val("");
                $('#waterlevel_vii_cumulative').val("");
                $('#waterlevel_vii_disbursible').val("");

                $('#waterlevel_viii_baseline').val("");
                $('#waterlevel_viii_20_21').val("");
                $('#waterlevel_viii_21_22').val("");
                $('#waterlevel_viii_22_23').val("");
                $('#waterlevel_viii_23_24').val("");
                $('#waterlevel_viii_24_25').val("");
                $('#waterlevel_viii_cumulative').val("");
                $('#waterlevel_viii_disbursible').val("");

                $('#waterquality_i_baseline').val("");
                $('#waterquality_i_20_21').val("");
                $('#waterquality_i_21_22').val("");
                $('#waterquality_i_22_23').val("");
                $('#waterquality_i_23_24').val("");
                $('#waterquality_i_24_25').val("");
                $('#waterquality_i_cumulative').val("");
                $('#waterquality_i_disbursible').val("");

                $('#waterquality_ii_baseline').val("");
                $('#waterquality_ii_20_21').val("");
                $('#waterquality_ii_21_22').val("");
                $('#waterquality_ii_22_23').val("");
                $('#waterquality_ii_23_24').val("");
                $('#waterquality_ii_24_25').val("");
                $('#waterquality_ii_cumulative').val("");
                $('#waterquality_ii_disbursible').val("");

                $('#waterquality_iv_baseline').val("");
                $('#waterquality_iv_20_21').val("");
                $('#waterquality_iv_21_22').val("");
                $('#waterquality_iv_22_23').val("");
                $('#waterquality_iv_23_24').val("");
                $('#waterquality_iv_24_25').val("");
                $('#waterquality_iv_cumulative').val("");
                $('#waterquality_iv_disbursible').val("");

                $('#waterquality_v_baseline').val("");
                $('#waterquality_v_20_21').val("");
                $('#waterquality_v_21_22').val("");
                $('#waterquality_v_22_23').val("");
                $('#waterquality_v_23_24').val("");
                $('#waterquality_v_24_25').val("");
                $('#waterquality_v_cumulative').val("");
                $('#waterquality_v_disbursible').val("");

                $('#blockwise_i_baseline').val("");
                $('#blockwise_i_20_21').val("");
                $('#blockwise_i_21_22').val("");
                $('#blockwise_i_22_23').val("");
                $('#blockwise_i_23_24').val("");
                $('#blockwise_i_24_25').val("");
                $('#blockwise_i_cumulative').val("");
                $('#blockwise_i_disbursible').val("");

                $('#blockwise_ii_baseline').val("");
                $('#blockwise_ii_20_21').val("");
                $('#blockwise_ii_21_22').val("");
                $('#blockwise_ii_22_23').val("");
                $('#blockwise_ii_23_24').val("");
                $('#blockwise_ii_24_25').val("");
                $('#blockwise_ii_cumulative').val("");
                $('#blockwise_ii_disbursible').val("");

                $('#statewise_i_baseline').val("");
                $('#statewise_i_20_21').val("");
                $('#statewise_i_21_22').val("");
                $('#statewise_i_22_23').val("");
                $('#statewise_i_23_24').val("");
                $('#statewise_i_24_25').val("");
                $('#statewise_i_cumulative').val("");
                $('#statewise_i_disbursible').val("");
            }

        }
    });
}


function DLI_1_Info() {
    if (StateName != "") {
        var obj = {};
        obj.state_name = StateName;

        obj.waterlevel_i_baseline = $('#waterlevel_i_baseline').val();
        obj.waterlevel_i_20_21 = $('#waterlevel_i_20_21').val();
        obj.waterlevel_i_21_22 = $('#waterlevel_i_21_22').val();
        obj.waterlevel_i_22_23 = $('#waterlevel_i_22_23').val();
        obj.waterlevel_i_23_24 = $('#waterlevel_i_23_24').val();
        obj.waterlevel_i_24_25 = $('#waterlevel_i_24_25').val();
        obj.waterlevel_i_cumulative = $('#waterlevel_i_cumulative').val();
        obj.waterlevel_i_disbursible = $('#waterlevel_i_disbursible').val();

        obj.waterlevel_ii_baseline = $('#waterlevel_ii_baseline').val();
        obj.waterlevel_ii_20_21 = $('#waterlevel_ii_20_21').val();
        obj.waterlevel_ii_21_22 = $('#waterlevel_ii_21_22').val();
        obj.waterlevel_ii_22_23 = $('#waterlevel_ii_22_23').val();
        obj.waterlevel_ii_23_24 = $('#waterlevel_ii_23_24').val();
        obj.waterlevel_ii_24_25 = $('#waterlevel_ii_24_25').val();
        obj.waterlevel_ii_cumulative = $('#waterlevel_ii_cumulative').val();
        obj.waterlevel_ii_disbursible = $('#waterlevel_ii_disbursible').val();

        obj.waterlevel_iv_baseline = $('#waterlevel_iv_baseline').val();
        obj.waterlevel_iv_20_21 = $('#waterlevel_iv_20_21').val();
        obj.waterlevel_iv_21_22 = $('#waterlevel_iv_21_22').val();
        obj.waterlevel_iv_22_23 = $('#waterlevel_iv_22_23').val();
        obj.waterlevel_iv_23_24 = $('#waterlevel_iv_23_24').val();
        obj.waterlevel_iv_24_25 = $('#waterlevel_iv_24_25').val();
        obj.waterlevel_iv_cumulative = $('#waterlevel_iv_cumulative').val();
        obj.waterlevel_iv_disbursible = $('#waterlevel_iv_disbursible').val();

        obj.waterlevel_v_baseline = $('#waterlevel_v_baseline').val();
        obj.waterlevel_v_20_21 = $('#waterlevel_v_20_21').val();
        obj.waterlevel_v_21_22 = $('#waterlevel_v_21_22').val();
        obj.waterlevel_v_22_23 = $('#waterlevel_v_22_23').val();
        obj.waterlevel_v_23_24 = $('#waterlevel_v_23_24').val();
        obj.waterlevel_v_24_25 = $('#waterlevel_v_24_25').val();
        obj.waterlevel_v_cumulative = $('#waterlevel_v_cumulative').val();
        obj.waterlevel_v_disbursible = $('#waterlevel_v_disbursible').val();

        obj.waterlevel_vii_baseline = $('#waterlevel_vii_baseline').val();
        obj.waterlevel_vii_20_21 = $('#waterlevel_vii_20_21').val();
        obj.waterlevel_vii_21_22 = $('#waterlevel_vii_21_22').val();
        obj.waterlevel_vii_22_23 = $('#waterlevel_vii_22_23').val();
        obj.waterlevel_vii_23_24 = $('#waterlevel_vii_23_24').val();
        obj.waterlevel_vii_24_25 = $('#waterlevel_vii_24_25').val();
        obj.waterlevel_vii_cumulative = $('#waterlevel_vii_cumulative').val();
        obj.waterlevel_vii_disbursible = $('#waterlevel_vii_disbursible').val();

        obj.waterlevel_viii_baseline = $('#waterlevel_viii_baseline').val();
        obj.waterlevel_viii_20_21 = $('#waterlevel_viii_20_21').val();
        obj.waterlevel_viii_21_22 = $('#waterlevel_viii_21_22').val();
        obj.waterlevel_viii_22_23 = $('#waterlevel_viii_22_23').val();
        obj.waterlevel_viii_23_24 = $('#waterlevel_viii_23_24').val();
        obj.waterlevel_viii_24_25 = $('#waterlevel_viii_24_25').val();
        obj.waterlevel_viii_cumulative = $('#waterlevel_viii_cumulative').val();
        obj.waterlevel_viii_disbursible = $('#waterlevel_viii_disbursible').val();

        obj.waterquality_i_baseline = $('#waterquality_i_baseline').val();
        obj.waterquality_i_20_21 = $('#waterquality_i_20_21').val();
        obj.waterquality_i_21_22 = $('#waterquality_i_21_22').val();
        obj.waterquality_i_22_23 = $('#waterquality_i_22_23').val();
        obj.waterquality_i_23_24 = $('#waterquality_i_23_24').val();
        obj.waterquality_i_24_25 = $('#waterquality_i_24_25').val();
        obj.waterquality_i_cumulative = $('#waterquality_i_cumulative').val();
        obj.waterquality_i_disbursible = $('#waterquality_i_disbursible').val();

        obj.waterquality_ii_baseline = $('#waterquality_ii_baseline').val();
        obj.waterquality_ii_20_21 = $('#waterquality_ii_20_21').val();
        obj.waterquality_ii_21_22 = $('#waterquality_ii_21_22').val();
        obj.waterquality_ii_22_23 = $('#waterquality_ii_22_23').val();
        obj.waterquality_ii_23_24 = $('#waterquality_ii_23_24').val();
        obj.waterquality_ii_24_25 = $('#waterquality_ii_24_25').val();
        obj.waterquality_ii_cumulative = $('#waterquality_ii_cumulative').val();
        obj.waterquality_ii_disbursible = $('#waterquality_ii_disbursible').val();

        obj.waterquality_iv_baseline = $('#waterquality_iv_baseline').val();
        obj.waterquality_iv_20_21 = $('#waterquality_iv_20_21').val();
        obj.waterquality_iv_21_22 = $('#waterquality_iv_21_22').val();
        obj.waterquality_iv_22_23 = $('#waterquality_iv_22_23').val();
        obj.waterquality_iv_23_24 = $('#waterquality_iv_23_24').val();
        obj.waterquality_iv_24_25 = $('#waterquality_iv_24_25').val();
        obj.waterquality_iv_cumulative = $('#waterquality_iv_cumulative').val();
        obj.waterquality_iv_disbursible = $('#waterquality_iv_disbursible').val();

        obj.waterquality_v_baseline = $('#waterquality_v_baseline').val();
        obj.waterquality_v_20_21 = $('#waterquality_v_20_21').val();
        obj.waterquality_v_21_22 = $('#waterquality_v_21_22').val();
        obj.waterquality_v_22_23 = $('#waterquality_v_22_23').val();
        obj.waterquality_v_23_24 = $('#waterquality_v_23_24').val();
        obj.waterquality_v_24_25 = $('#waterquality_v_24_25').val();
        obj.waterquality_v_cumulative = $('#waterquality_v_cumulative').val();
        obj.waterquality_v_disbursible = $('#waterquality_v_disbursible').val();

        obj.blockwise_i_baseline = $('#blockwise_i_baseline').val();
        obj.blockwise_i_20_21 = $('#blockwise_i_20_21').val();
        obj.blockwise_i_21_22 = $('#blockwise_i_21_22').val();
        obj.blockwise_i_22_23 = $('#blockwise_i_22_23').val();
        obj.blockwise_i_23_24 = $('#blockwise_i_23_24').val();
        obj.blockwise_i_24_25 = $('#blockwise_i_24_25').val();
        obj.blockwise_i_cumulative = $('#blockwise_i_cumulative').val();
        obj.blockwise_i_disbursible = $('#blockwise_i_disbursible').val();

        obj.blockwise_ii_baseline = $('#blockwise_ii_baseline').val();
        obj.blockwise_ii_20_21 = $('#blockwise_ii_20_21').val();
        obj.blockwise_ii_21_22 = $('#blockwise_ii_21_22').val();
        obj.blockwise_ii_22_23 = $('#blockwise_ii_22_23').val();
        obj.blockwise_ii_23_24 = $('#blockwise_ii_23_24').val();
        obj.blockwise_ii_24_25 = $('#blockwise_ii_24_25').val();
        obj.blockwise_ii_cumulative = $('#blockwise_ii_cumulative').val();
        obj.blockwise_ii_disbursible = $('#blockwise_ii_disbursible').val();

        obj.statewise_i_baseline = $('#statewise_i_baseline').val();
        obj.statewise_i_20_21 = $('#statewise_i_20_21').val();
        obj.statewise_i_21_22 = $('#statewise_i_21_22').val();
        obj.statewise_i_22_23 = $('#statewise_i_22_23').val();
        obj.statewise_i_23_24 = $('#statewise_i_23_24').val();
        obj.statewise_i_24_25 = $('#statewise_i_24_25').val();
        obj.statewise_i_cumulative = $('#statewise_i_cumulative').val();
        obj.statewise_i_disbursible = $('#statewise_i_disbursible').val();

        //obj.waterlevel_iii_baseline = $('#waterlevel_iii_baseline').val();
        // obj.waterlevel_vi_baseline = $('#waterlevel_vi_baseline').val();
        // obj.waterquality_iii_baseline = $('#waterquality_iii_baseline').val();
        // obj.waterquality_vi_baseline = $('#waterquality_vi_baseline').val();
        // obj.blockwise_ii_baseline = $('#blockwise_ii_baseline1').val();
        // obj.statewise_ii_baseline = $('#statewise_ii_baseline').val();


        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Dliverification/DLI_1_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response != 'Successfully Saved' && response != 'Duplicate Data is there' && response != 'SessionTimeOut' && response != 'Logout') {
                    window.location = "/Error/DefaultError";

                }
                if (response == "Successfully Saved") {

                    Dli_1_Details();
                }
                else {
                    //   window.location = "/Home/LogOut";
                    window.location = "/Error/DefaultError";
                }

            }
        });

    }
    else {
        alert("Please Select StateName");
    }
}



var formdata = new FormData();
var upload_count = "";//FormData object

//Dli-1_1_row uploads

$(document).ready(function () {
    $('#waterlevel_iii_20_21_filename').live('change', function (e) {
        
        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]); /*waterbudgets_ii_20_21_filename*/

        }
        upload_count = "1";
    });
    $('#waterlevel_iii_20_21_filename').live('change', function (e) {
        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]); /*waterbudgets_ii_20_21_filename*/

        }
        upload_count = "1";

    });


    $('#waterlevel_iii_21_22_filename').live('change', function (e) {
        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#waterlevel_iii_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });

    $('#waterlevel_iii_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#waterlevel_iii_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
});

function abhy_dli_one_upload_row1() {
    
    var i = 0;
    if (StateName != "") {
        //var waterlevel_iii_baseline = $("#waterlevel_iii_baseline").val();
        //if (waterlevel_iii_baseline == "") {
        //    alert("Enter waterlevel_iii_baseline");
        //    i = 1;
        //}

        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('waterlevel_iii_baseline', $('#waterlevel_iii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row1',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {
                    
                    formdata = new FormData();

                    $('#waterlevel_iii_20_21_filename').val('');
                    $('#waterlevel_iii_21_22_filename').val('');
                    $('#waterlevel_iii_22_23_filename').val('');
                    $('#waterlevel_iii_23_24_filename').val('');
                    $('#waterlevel_iii_24_25_filename').val('');
                    alert(result);

                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_one_one_upload_row_geting();

                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }

                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli one row 1
function abhy_dli_one_upload_row1_download(ss) {
    var Valu = ss;
    if (StateName != "") {

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row1_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {
                if (result == "No Files") {
                    alert("No Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location.href = result;

                }
            }

        });

    }
    else {
        alert("Please Select StateName");
    }
}



function Dli1_1_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_1_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {


            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                //upload baseline
                //$('#waterlevel_iii_baseline').val(response.waterlevel_iii_baseline);

            } if (response == "NO") {
                // $('#waterlevel_iii_baseline').val("");
            }

        }
    });
}

//Dli-1_2_row uploads
$(document).ready(function () {
    $('#waterlevel_vi_20_21_filename').live('change', function (e) {

        
        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#waterlevel_vi_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#waterlevel_vi_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#waterlevel_vi_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#waterlevel_vi_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });

})
function abhy_dli_one_upload_row2() {
    
    var i = 0;
    if (StateName != "") {
        //var waterlevel_vi_baseline = $("#waterlevel_vi_baseline").val();
        //if (waterlevel_vi_baseline == "") {
        //    alert("Enter waterlevel_vi_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('waterlevel_vi_baseline', $('#waterlevel_vi_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row2',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();
                    $('#waterlevel_vi_20_21_filename').val('');
                    $('#waterlevel_vi_21_22_filename').val('');
                    $('#waterlevel_vi_22_23_filename').val('');
                    $('#waterlevel_vi_23_24_filename').val('');
                    $('#waterlevel_vi_24_25_filename').val('');

                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }

                    abhy_dli_one_two_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli one row 2

function abhy_dli_one_upload_row2_download(ss) {
     
    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row2_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {
                if (result == "No Files") {
                    alert("No Pdf Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location = result;

                }
            }
        });

    }
    else {
        alert("Please Select StateName");
    }
}



function Dli1_2_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_2_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                // $('#waterlevel_vi_baseline').val(response.waterlevel_vi_baseline);

            }
            if (response == "NO") {
                //upload baseline
                // $('#waterlevel_vi_baseline').val("");

            }

        }
    });
}

//Dli-1_3_row uploads
$(document).ready(function () {
    $('#waterquality_iii_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#waterquality_iii_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#waterquality_iii_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#waterquality_iii_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#waterquality_iii_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
});

function abhy_dli_one_upload_row3() {

    var i = 0;
    if (StateName != "") {
        //var waterquality_iii_baseline = $("#waterquality_iii_baseline").val();
        //if (waterquality_iii_baseline == "") {
        //    alert("Enter waterquality_iii_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('waterquality_iii_baseline', $('#waterquality_iii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row3',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#waterquality_iii_20_21_filename').val('');
                    $('#waterquality_iii_21_22_filename').val('');
                    $('#waterquality_iii_22_23_filename').val('');
                    $('#waterquality_iii_23_24_filename').val('');
                    $('#waterquality_iii_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_one_three_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli one row 3

function abhy_dli_one_upload_row3_download(ss) {

    var Valu = ss;
    if (StateName != "") {

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row3_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location = result;

                }
            }

        });

    }
    else {
        alert("Please Select StateName");
    }
}

function Dli1_3_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_3_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response == "SessionTimeOut") {
                // $('#waterquality_iii_baseline').val(response.waterquality_iii_baseline);
            }
            if (response == "NO") {
                //upload baseline
                // $('#waterquality_iii_baseline').val("");

            }

        }
    });
}


//Dli-1_4_row uploads
$(document).ready(function () {
    $('#waterquality_vi_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#waterquality_vi_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#waterquality_vi_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#waterquality_vi_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#waterquality_vi_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
})

function abhy_dli_one_upload_row4() {

    var i = 0;
    if (StateName != "") {
        //var waterquality_vi_baseline = $("#waterquality_vi_baseline").val();
        //if (waterquality_vi_baseline == "") {
        //    alert("Enter waterquality_vi_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('waterquality_vi_baseline', $('#waterquality_vi_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row4',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();
                    $('#waterquality_vi_20_21_filename').val('');
                    $('#waterquality_vi_21_22_filename').val('');
                    $('#waterquality_vi_22_23_filename').val('');
                    $('#waterquality_vi_23_24_filename').val('');
                    $('#waterquality_vi_24_25_filename').val('');


                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_one_four_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    } else {
        alert("Please Select StateName");
    }
}

//download dli one row 4

function abhy_dli_one_upload_row4_download(ss) {

    var Valu = ss;
    if (StateName != "") {

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row4_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location = result;

                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli1_4_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_4_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                // $('#waterquality_vi_baseline').val(response.waterquality_vi_baseline);

            }
            if (response == "NO") {
                //upload baseline
                // $('#waterquality_vi_baseline').val("");

            }

        }
    });
}

//Dli-1_5_row uploads
$(document).ready(function () {
    $('#blockwise_ii_20_21_filename1').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#blockwise_ii_21_22_filename1').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#blockwise_ii_22_23_filename1').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#blockwise_ii_23_24_filename1').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#blockwise_ii_24_25_filename1').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
});

function abhy_dli_one_upload_row5() {

    var i = 0;
    if (StateName != "") {
        //var blockwise_ii_baseline = $("#blockwise_ii_baseline1").val();
        //if (blockwise_ii_baseline == "") {
        //    alert("Enter blockwise_ii_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('blockwise_ii_baseline', $('#blockwise_ii_baseline1').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row5',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#blockwise_ii_20_21_filename1').val('');
                    $('#blockwise_ii_21_22_filename1').val('');
                    $('#blockwise_ii_22_23_filename1').val('');
                    $('#blockwise_ii_23_24_filename1').val('');
                    $('#blockwise_ii_24_25_filename1').val('');


                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_one_five_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }

    }
    else {
        alert("Please Select StateName");
    }
}
//download dli one row 5

function abhy_dli_one_upload_row5_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row5_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.open(result, "download");

                }
            }

        });
    } else {
        alert("Please Select StateName");
    }
}

function Dli1_5_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_5_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                // $('#blockwise_ii_baseline1').val(response.blockwise_ii_baseline);

            }
            if (response == "NO") {
                //upload baseline
                // $('#blockwise_ii_baseline1').val("");

            }

        }
    });
}
//Dli-1_6_row uploads
$(document).ready(function () {
    $('#statewise_ii_20_21_filename').live('change', function (e) {
        
        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#statewise_ii_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#statewise_ii_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#statewise_ii_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#statewise_ii_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";
    });
});

function abhy_dli_one_upload_row6() {
    

    var i = 0;
    if (StateName != "") {
        //var statewise_ii_baseline = $("#statewise_ii_baseline").val();
        //if (statewise_ii_baseline == "") {
        //    alert("Enter statewise_ii_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('statewise_ii_baseline', $('#statewise_ii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row6',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#statewise_ii_20_21_filename').val('');
                    $('#statewise_ii_21_22_filename').val('');
                    $('#statewise_ii_22_23_filename').val('');
                    $('#statewise_ii_23_24_filename').val('');
                    $('#statewise_ii_24_25_filename').val('');


                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_one_six_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    } else {
        alert("Please Select StateName");
    }
}

//download dli one row 6

function abhy_dli_one_upload_row6_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row6_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.open(result, "download");

                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}


function Dli1_6_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_6_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                //$('#statewise_ii_baseline').val(response.statewise_ii_baseline);

            }
            if (response == "NO") {
                //upload baseline
                // $('#statewise_ii_baseline').val("");

            }

        }
    });
}

//DLI one row 7
//Dli-1_7_row uploads
$(document).ready(function () {
    $('#mow_v_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#mow_v_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#mow_v_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#mow_v_23_24_filename').live('change', function (e) {
    
         
        var fileName = e.target.files;
    
        for (i = 0; i < fileName.length; i++) {
    
            var sfilename = fileName[i].name;
    
            formdata.append(sfilename, fileName[i]);
    
        }
        upload_count = "4";
    });
    $('#mow_v_24_25_filename').live('change', function (e) {
    
        var fileName = e.target.files;
    
        for (i = 0; i < fileName.length; i++) {
    
            var sfilename = fileName[i].name;
    
            formdata.append(sfilename, fileName[i]);
    
        }
        upload_count = "5";
    
    });
});
function abhy_dli_one_upload_row7() {


    var i = 0;
    if (StateName != "") {
        //var waterlevel_iii_baseline = $("#waterlevel_iii_baseline").val();
        //if (waterlevel_iii_baseline == "") {
        //    alert("Enter waterlevel_iii_baseline");
        //    i = 1;
        //}

        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('waterlevel_iii_baseline', $('#waterlevel_iii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row7',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#mow_v_20_21_filename').val('');
                    $('#mow_v_21_22_filename').val('');
                    $('#mow_v_22_23_filename').val('');
                    $('#mow_v_23_24_filename').val('');
                    $('#mow_v_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_one_seven_upload_row_geting();

                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }

                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli one row 1
function abhy_dli_one_upload_row7_download(ss) {

    var Valu = ss;
    if (StateName != "") {

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row7_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {
                if (result == "No Files") {
                    alert("No Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location.href = result;

                }
            }

        });

    }
    else {
        alert("Please Select StateName");
    }
}



function Dli1_7_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_7_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {


            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                //upload baseline
                //$('#waterlevel_iii_baseline').val(response.waterlevel_iii_baseline);

            } if (response == "NO") {
                // $('#waterlevel_iii_baseline').val("");
            }

        }
    });
}

//DLI one row 8
//Dli-1_8_row uploads
$(document).ready(function () {
    $('#mow_vi_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#mow_vi_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#mow_vi_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#mow_vi_23_24_filename').live('change', function (e) {


        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#mow_vi_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;

            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";
    });
});
function abhy_dli_one_upload_row8() {


    var i = 0;
    if (StateName != "") {
        //var waterlevel_iii_baseline = $("#waterlevel_iii_baseline").val();
        //if (waterlevel_iii_baseline == "") {
        //    alert("Enter waterlevel_iii_baseline");
        //    i = 1;
        //}

        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('waterlevel_iii_baseline', $('#waterlevel_iii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_one_upload_row8',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#mow_vi_20_21_filename').val('');
                    $('#mow_vi_21_22_filename').val('');
                    $('#mow_vi_22_23_filename').val('');
                    $('#mow_vi_23_24_filename').val('');
                    $('#mow_vi_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_one_eigth_upload_row_geting();

                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }

                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli one row 1
function abhy_dli_one_upload_row8_download(ss) {

    var Valu = ss;
    if (StateName != "") {

        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_one_upload_row8_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {
                if (result == "No Files") {
                    alert("No Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location.href = result;

                }
            }

        });

    }
    else {
        alert("Please Select StateName");
    }
}



function Dli1_8_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli1_8_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {


            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                //upload baseline
                //$('#waterlevel_iii_baseline').val(response.waterlevel_iii_baseline);

            } if (response == "NO") {
                // $('#waterlevel_iii_baseline').val("");
            }

        }
    });
}

//-----------------DLI 2-----------------------


function Dli_2_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli_2_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                $('#waterbudgets_i_baseline').val(response.waterbudgets_i_baseline);
                $('#waterbudgets_i_20_21').val(response.waterbudgets_i_20_21);
                $('#waterbudgets_i_21_22').val(response.waterbudgets_i_21_22);
                $('#waterbudgets_i_22_23').val(response.waterbudgets_i_22_23);
                $('#waterbudgets_i_23_24').val(response.waterbudgets_i_23_24);
                $('#waterbudgets_i_24_25').val(response.waterbudgets_i_24_25);
                $('#waterbudgets_i_cumulative').val(response.waterbudgets_i_cumulative);
                $('#waterbudgets_i_disbursible').val(response.waterbudgets_i_disbursible);

                $('#wsp_i_baseline').val(response.wsp_i_baseline);
                $('#wsp_i_20_21').val(response.wsp_i_20_21);
                $('#wsp_i_21_22').val(response.wsp_i_21_22);
                $('#wsp_i_22_23').val(response.wsp_i_22_23);
                $('#wsp_i_23_24').val(response.wsp_i_23_24);
                $('#wsp_i_24_25').val(response.wsp_i_24_25);
                $('#wsp_i_cumulative').val(response.wsp_i_cumulative);
                $('#wsp_i_disbursible').val(response.wsp_i_disbursible);

                $('#community_i_baseline').val(response.community_i_baseline);
                $('#community_i_20_21').val(response.community_i_20_21);
                $('#community_i_21_22').val(response.community_i_21_22);
                $('#community_i_22_23').val(response.community_i_22_23);
                $('#community_i_23_24').val(response.community_i_23_24);
                $('#community_i_24_25').val(response.community_i_24_25);
                $('#community_i_cumulative').val(response.community_i_cumulative);
                $('#community_i_disbursible').val(response.community_i_disbursible);

                $('#community_iii_baseline').val(response.community_iii_baseline);
                $('#community_iii_20_21').val(response.community_iii_20_21);
                $('#community_iii_21_22').val(response.community_iii_21_22);
                $('#community_iii_22_23').val(response.community_iii_22_23);
                $('#community_iii_23_24').val(response.community_iii_23_24);
                $('#community_iii_24_25').val(response.community_iii_24_25);
                $('#community_iii_cumulative').val(response.community_iii_cumulative);
                $('#community_iii_disbursible').val(response.community_iii_disbursible);

                $('#community_iv_baseline').val(response.community_iv_baseline);
                $('#community_iv_20_21').val(response.community_iv_20_21);
                $('#community_iv_21_22').val(response.community_iv_21_22);
                $('#community_iv_22_23').val(response.community_iv_22_23);
                $('#community_iv_23_24').val(response.community_iv_23_24);
                $('#community_iv_24_25').val(response.community_iv_24_25);
                $('#community_iv_cumulative').val(response.community_iv_cumulative);
                $('#community_iv_disbursible').val(response.community_iv_disbursible);

                $('#community_v_baseline').val(response.community_v_baseline);
                $('#community_v_20_21').val(response.community_v_20_21);
                $('#community_v_21_22').val(response.community_v_21_22);
                $('#community_v_22_23').val(response.community_v_22_23);
                $('#community_v_23_24').val(response.community_v_23_24);
                $('#community_v_24_25').val(response.community_v_24_25);
                $('#community_v_cumulative').val(response.community_v_cumulative);
                $('#community_v_disbursible').val(response.community_v_disbursible);

            }
            if (response == "NO") {
                $('#waterbudgets_i_baseline').val("");
                $('#waterbudgets_i_20_21').val("");
                $('#waterbudgets_i_21_22').val("");
                $('#waterbudgets_i_22_23').val("");
                $('#waterbudgets_i_23_24').val("");
                $('#waterbudgets_i_24_25').val("");
                $('#waterbudgets_i_cumulative').val("");
                $('#waterbudgets_i_disbursible').val("");

                $('#wsp_i_baseline').val("");
                $('#wsp_i_20_21').val("");
                $('#wsp_i_21_22').val("");
                $('#wsp_i_22_23').val("");
                $('#wsp_i_23_24').val("");
                $('#wsp_i_24_25').val("");
                $('#wsp_i_cumulative').val("");
                $('#wsp_i_disbursible').val("");

                $('#community_i_baseline').val("");
                $('#community_i_20_21').val("");
                $('#community_i_21_22').val("");
                $('#community_i_22_23').val("");
                $('#community_i_23_24').val("");
                $('#community_i_24_25').val("");
                $('#community_i_cumulative').val("");
                $('#community_i_disbursible').val("");

                $('#community_iii_baseline').val("");
                $('#community_iii_20_21').val("");
                $('#community_iii_21_22').val("");
                $('#community_iii_22_23').val("");
                $('#community_iii_23_24').val("");
                $('#community_iii_24_25').val("");
                $('#community_iii_cumulative').val("");
                $('#community_iii_disbursible').val("");

                $('#community_iv_baseline').val("");
                $('#community_iv_20_21').val("");
                $('#community_iv_21_22').val("");
                $('#community_iv_22_23').val("");
                $('#community_iv_23_24').val("");
                $('#community_iv_24_25').val("");
                $('#community_iv_cumulative').val("");
                $('#community_iv_disbursible').val("");

                $('#community_v_baseline').val("");
                $('#community_v_20_21').val("");
                $('#community_v_21_22').val("");
                $('#community_v_22_23').val("");
                $('#community_v_23_24').val("");
                $('#community_v_24_25').val("");
                $('#community_v_cumulative').val("");
                $('#community_v_disbursible').val("");

            }
        }
    });
}


function DLI_2_Info() {

    if (StateName != "") {
        var obj = {};
        obj.state_name = StateName;
         
        obj.waterbudgets_i_baseline = $('#waterbudgets_i_baseline').val();
        obj.waterbudgets_i_20_21 = $('#waterbudgets_i_20_21').val();
        obj.waterbudgets_i_21_22 = $('#waterbudgets_i_21_22').val();
        obj.waterbudgets_i_22_23 = $('#waterbudgets_i_22_23').val();
        obj.waterbudgets_i_23_24 = $('#waterbudgets_i_23_24').val();
        obj.waterbudgets_i_24_25 = $('#waterbudgets_i_24_25').val();
        obj.waterbudgets_i_cumulative = $('#waterbudgets_i_cumulative').val();
        obj.waterbudgets_i_disbursible = $('#waterbudgets_i_disbursible').val();

        obj.wsp_i_baseline = $('#wsp_i_baseline').val();
        obj.wsp_i_20_21 = $('#wsp_i_20_21').val();
        obj.wsp_i_21_22 = $('#wsp_i_21_22').val();
        obj.wsp_i_22_23 = $('#wsp_i_22_23').val();
        obj.wsp_i_23_24 = $('#wsp_i_23_24').val();
        obj.wsp_i_24_25 = $('#wsp_i_24_25').val();
        obj.wsp_i_cumulative = $('#wsp_i_cumulative').val();
        obj.wsp_i_disbursible = $('#wsp_i_disbursible').val();

        obj.community_i_baseline = $('#community_i_baseline').val();
        obj.community_i_20_21 = $('#community_i_20_21').val();
        obj.community_i_21_22 = $('#community_i_21_22').val();
        obj.community_i_22_23 = $('#community_i_22_23').val();
        obj.community_i_23_24 = $('#community_i_23_24').val();
        obj.community_i_24_25 = $('#community_i_24_25').val();
        obj.community_i_cumulative = $('#community_i_cumulative').val();
        obj.community_i_disbursible = $('#community_i_disbursible').val();

        obj.community_iii_baseline = $('#community_iii_baseline').val();
        obj.community_iii_20_21 = $('#community_iii_20_21').val();
        obj.community_iii_21_22 = $('#community_iii_21_22').val();
        obj.community_iii_22_23 = $('#community_iii_22_23').val();
        obj.community_iii_23_24 = $('#community_iii_23_24').val();
        obj.community_iii_24_25 = $('#community_iii_24_25').val();
        obj.community_iii_cumulative = $('#community_iii_cumulative').val();
        obj.community_iii_disbursible = $('#community_iii_disbursible').val();

        obj.community_iv_baseline = $('#community_iv_baseline').val();
        obj.community_iv_20_21 = $('#community_iv_20_21').val();
        obj.community_iv_21_22 = $('#community_iv_21_22').val();
        obj.community_iv_22_23 = $('#community_iv_22_23').val();
        obj.community_iv_23_24 = $('#community_iv_23_24').val();
        obj.community_iv_24_25 = $('#community_iv_24_25').val();
        obj.community_iv_cumulative = $('#community_iv_cumulative').val();
        obj.community_iv_disbursible = $('#community_iv_disbursible').val();

        obj.community_v_baseline = $('#community_v_baseline').val();
        obj.community_v_20_21 = $('#community_v_20_21').val();
        obj.community_v_21_22 = $('#community_v_21_22').val();
        obj.community_v_22_23 = $('#community_v_22_23').val();
        obj.community_v_23_24 = $('#community_v_23_24').val();
        obj.community_v_24_25 = $('#community_v_24_25').val();
        obj.community_v_cumulative = $('#community_v_cumulative').val();
        obj.community_v_disbursible = $('#community_v_disbursible').val();

        //obj.waterbudgets_ii_baseline = $('#waterbudgets_ii_baseline').val();
        // obj.wsp_ii_baseline = $('#wsp_ii_baseline').val();
        // obj.community_ii_baseline = $('#community_ii_baseline').val();
        // obj.community_vi_baseline = $('#community_vi_baseline').val();



        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Dliverification/DLI_2_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Successfully Saved" && response != "Duplicate data is there" && response != "SessionTimeOut") {
                    Dli_2_Details();
                }
                else {
                    //  window.location = "/Home/LogOut";
                    window.location = "/Error/DefaultError";
                }
            }
        });
    }
    else {
        alert("Please Select StateName");
    }
}


//Dli-2_1_row uploads
$(document).ready(function () {
    $('#waterbudgets_ii_20_21_filename').live('change', function (e) {
         
        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#waterbudgets_ii_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#waterbudgets_ii_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);


        }
        upload_count = "3";

    });
    $('#waterbudgets_ii_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#waterbudgets_ii_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
});
function abhy_dli_two_upload_row1() {

    var i = 0;
    if (StateName != "") {
        var waterbudgets_ii_baseline = $('#waterbudgets_ii_baseline').val();
        if (waterbudgets_ii_baseline == "") {
            alert("Enter waterbudgets_ii_baseline");
            i = 1;
        }
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            formdata.append('waterbudgets_ii_baseline', $('#waterbudgets_ii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_two_upload_row1',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {


                    formdata = new FormData();

                    $('#waterbudgets_ii_20_21_filename').val('');
                    $('#waterbudgets_ii_21_22_filename').val('');
                    $('#waterbudgets_ii_22_23_filename').val('');
                    $('#waterbudgets_ii_23_24_filename').val('');
                    $('#waterbudgets_ii_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_two_one_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli two row 1

function abhy_dli_two_upload_row1_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_two_upload_row1_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {

                    window.open(result, "download");
                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli2_1_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli2_1_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                $('#waterbudgets_ii_baseline').val(response.waterbudgets_ii_baseline);
            }
            if (response == "NO") {
                //upload baseline
                $('#waterbudgets_ii_baseline').val("");

            }

        }
    });
}
//Dli-2_2_row uploads
$('#wsp_ii_20_21_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "1";

});
$('#wsp_ii_21_22_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "2";

});
$('#wsp_ii_22_23_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "3";

});
$('#wsp_ii_23_24_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "4";

});
$('#wsp_ii_24_25_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "5";

});
function abhy_dli_two_upload_row2() {

    var i = 0;
    //var wsp_ii_baseline = $("#wsp_ii_baseline").val();
    //if (wsp_ii_baseline == "") {
    //    alert("Enter wsp_ii_baseline");
    //    i = 1;
    //}
    if (StateName != "") {
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            // formdata.append('wsp_ii_baseline', $('#wsp_ii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_two_upload_row2',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#wsp_ii_20_21_filename').val('');
                    $('#wsp_ii_21_22_filename').val('');
                    $('#wsp_ii_22_23_filename').val('');
                    $('#wsp_ii_23_24_filename').val('');
                    $('#wsp_ii_24_25_filename').val('');

                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_two_two_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli two row 2

function abhy_dli_two_upload_row2_download(ss) {

    if (StateName != "") {
        var Valu = ss;
        if (StateName != "") {
            $.ajax({
                type: 'GET',
                contentType: 'application/json; chatset=utf-8',
                url: '/Dliverification/abhy_dli_two_upload_row2_download',
                data: { 'Valu': Valu },
                dataType: 'JSON',
                success: function (result) {

                    if (result == "No Files") {
                        alert("No  Files");
                    }
                    else if (result == "SessionTimeOut") {
                        alert("User SessionOut Please Login");
                          window.location = "/Home/LogOut";
                    }
                    else {
                        window.open(result, "download");

                    }
                }

            });
        }
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli2_2_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli2_2_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response == "SessionTimeOut") {
                // $('#wsp_ii_baseline').val(response.wsp_ii_baseline);
            }
            if (response == "NO") {
                //upload baseline
                // $('#wsp_ii_baseline').val("");

            }

        }
    });
}
//Dli-2_3_row uploads
$('#community_ii_20_21_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "1";

});
$('#community_ii_21_22_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "2";

});
$('#community_ii_22_23_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "3";

});
$('#community_ii_23_24_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "4";

});
$('#community_ii_24_25_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "5";

});
function abhy_dli_two_upload_row3() {

    var i = 0;
    var community_ii_baseline = $("#community_ii_baseline").val();
    //if (community_ii_baseline == "") {
    //    alert("Enter community_ii_baseline");
    //    i = 1;
    //}
    if (StateName != "") {
        if (i == 0) {

            //$('#Error1').text("Processing...");
            formdata.append('upload_count', upload_count);

            //  formdata.append('community_ii_baseline', $('#community_ii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_two_upload_row3',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#community_ii_20_21_filename').val('');
                    $('#community_ii_21_22_filename').val('');
                    $('#community_ii_22_23_filename').val('');
                    $('#community_ii_23_24_filename').val('');
                    $('#community_ii_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_two_three_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli two row 3

function abhy_dli_two_upload_row3_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_two_upload_row3_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.open(result, "download");

                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli2_3_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli2_3_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                // $('#community_ii_baseline').val(response.community_ii_baseline);
            }
            if (response == "NO") {
                //upload baseline
                // $('#community_ii_baseline').val("");

            }

        }
    });
}
//Dli-2_4_row uploads
$('#community_vi_20_21_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "1";

});
$('#community_vi_21_22_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "2";

});
$('#community_vi_22_23_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "3";

});
$('#community_vi_23_24_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "4";

});
$('#community_vi_24_25_filename').change(function (e) {

    var fileName = e.target.files;

    for (i = 0; i < fileName.length; i++) {

        var sfilename = fileName[i].name;


        formdata.append(sfilename, fileName[i]);

    }
    upload_count = "5";
});
function abhy_dli_two_upload_row4() {

    var i = 0;
    if (StateName != "") {
        //var community_vi_baseline = $("#community_vi_baseline").val();
        //if (community_vi_baseline == "") {
        //    alert("Enter community_vi_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");
            formdata.append('upload_count', upload_count);

            // formdata.append('community_vi_baseline', $('#community_vi_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_two_upload_row4',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#community_vi_20_21_filename').val('');
                    $('#community_vi_21_22_filename').val('');
                    $('#community_vi_22_23_filename').val('');
                    $('#community_vi_23_24_filename').val('');
                    $('#community_vi_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_two_four_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {

                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli two row 4

function abhy_dli_two_upload_row4_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_two_upload_row4_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.open(result, "download");

                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli2_4_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli2_4_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                // $('#community_vi_baseline').val(response.community_vi_baseline);
            }
            if (response == "NO") {
                //upload baseline
                // $('#community_vi_baseline').val("");

            }

        }
    });
}
//-----------------DLI 3-----------------------

function Dli_3_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli_3_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {

                //upload baseline
                // $('#statelevel_ii_baseline').val(response.statelevel_ii_baseline);

                $('#statelevel_i_baseline').val(response.statelevel_i_baseline);
                $('#statelevel_i_20_21').val(response.statelevel_i_20_21);
                $('#statelevel_i_21_22').val(response.statelevel_i_21_22);
                $('#statelevel_i_22_23').val(response.statelevel_i_22_23);
                $('#statelevel_i_23_24').val(response.statelevel_i_23_24);
                $('#statelevel_i_24_25').val(response.statelevel_i_24_25);
                $('#statelevel_i_cumulative').val(response.statelevel_i_cumulative);
                $('#statelevel_i_disbursible').val(response.statelevel_i_disbursible);

                $('#statelevel_iii_baseline').val(response.statelevel_iii_baseline);
                $('#statelevel_iii_20_21').val(response.statelevel_iii_20_21);
                $('#statelevel_iii_21_22').val(response.statelevel_iii_21_22);
                $('#statelevel_iii_22_23').val(response.statelevel_iii_22_23);
                $('#statelevel_iii_23_24').val(response.statelevel_iii_23_24);
                $('#statelevel_iii_24_25').val(response.statelevel_iii_24_25);
                $('#statelevel_iii_cumulative').val(response.statelevel_iii_cumulative);
                $('#statelevel_iii_disbursible').val(response.statelevel_iii_disbursible);

            } if (response == "NO") {
                // $('#statelevel_ii_baseline').val("");

                $('#statelevel_i_baseline').val("");
                $('#statelevel_i_20_21').val("");
                $('#statelevel_i_21_22').val("");
                $('#statelevel_i_22_23').val("");
                $('#statelevel_i_23_24').val("");
                $('#statelevel_i_24_25').val("");
                $('#statelevel_i_cumulative').val("");
                $('#statelevel_i_disbursible').val("");

                $('#statelevel_iii_baseline').val("");
                $('#statelevel_iii_20_21').val("");
                $('#statelevel_iii_21_22').val("");
                $('#statelevel_iii_22_23').val("");
                $('#statelevel_iii_23_24').val("");
                $('#statelevel_iii_24_25').val("");
                $('#statelevel_iii_cumulative').val("");
                $('#statelevel_iii_disbursible').val("");
            }
        }
    });
}

function DLI_3_Info() {
    if (StateName != "") {
        var obj = {};
        obj.state_name = StateName;

        obj.statelevel_i_baseline = $('#statelevel_i_baseline').val();
        obj.statelevel_i_20_21 = $('#statelevel_i_20_21').val();
        obj.statelevel_i_21_22 = $('#statelevel_i_21_22').val();
        obj.statelevel_i_22_23 = $('#statelevel_i_22_23').val();
        obj.statelevel_i_23_24 = $('#statelevel_i_23_24').val();
        obj.statelevel_i_24_25 = $('#statelevel_i_24_25').val();
        obj.statelevel_i_cumulative = $('#statelevel_i_cumulative').val();
        obj.statelevel_i_disbursible = $('#statelevel_i_disbursible').val();

        obj.statelevel_iii_baseline = $('#statelevel_iii_baseline').val();
        obj.statelevel_iii_20_21 = $('#statelevel_iii_20_21').val();
        obj.statelevel_iii_21_22 = $('#statelevel_iii_21_22').val();
        obj.statelevel_iii_22_23 = $('#statelevel_iii_22_23').val();
        obj.statelevel_iii_23_24 = $('#statelevel_iii_23_24').val();
        obj.statelevel_iii_24_25 = $('#statelevel_iii_24_25').val();
        obj.statelevel_iii_cumulative = $('#statelevel_iii_cumulative').val();
        obj.statelevel_iii_disbursible = $('#statelevel_iii_disbursible').val();

        // obj.statelevel_ii_baseline = $('#statelevel_ii_baseline').val();


        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Dliverification/DLI_3_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Successfully Saved" && response != "Duplicate data is there" && response != "SessionTimeOut") {
                    Dli_3_Details();
                }
                else {
                    //   window.location = "/Home/LogOut";
                    window.location = "/Error/DefaultError";
                }
            }
        });
    }
    else {
        alert("Please Select StateName");
    }
}

//Dli-3_1_row uploads
$(document).ready(function () {
    $('#statelevel_ii_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#statelevel_ii_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#statelevel_ii_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#statelevel_ii_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#statelevel_ii_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
});
function abhy_dli_three_upload_row1() {

    var i = 0;
    if (StateName != "") {
        //var statelevel_ii_baseline = $("#statelevel_ii_baseline").val();
        //if (statelevel_ii_baseline == "") {
        //    alert("Enter statelevel_ii_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");
            formdata.append('upload_count', upload_count);

            // formdata.append('statelevel_ii_baseline', $('#statelevel_ii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_three_upload_row1',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#statelevel_ii_20_21_filename').val('');
                    $('#statelevel_ii_21_22_filename').val('');
                    $('#statelevel_ii_22_23_filename').val('');
                    $('#statelevel_ii_23_24_filename').val('');
                    $('#statelevel_ii_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_three_one_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli three row 1

function abhy_dli_three_upload_row1_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_three_upload_row1_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location = result;

                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli3_1_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli3_1_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response == "SessionTimeOut") {
                // $('#statelevel_ii_baseline').val(response.statelevel_ii_baseline);
            }
            else {
                //upload baseline
                // $('#statelevel_ii_baseline').val("");

            }

        }
    });
}

//-----------------DLI 4-----------------------

function Dli_4_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli_4_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                //upload baseline
                // $('#irrigation_iii_baseline').val(response.irrigation_iii_baseline);
                // $('#cropping_v_baseline').val(response.cropping_v_baseline);


                $('#irrigation_i_baseline').val(response.irrigation_i_baseline);
                $('#irrigation_i_20_21').val(response.irrigation_i_20_21);
                $('#irrigation_i_21_22').val(response.irrigation_i_21_22);
                $('#irrigation_i_22_23').val(response.irrigation_i_22_23);
                $('#irrigation_i_23_24').val(response.irrigation_i_23_24);
                $('#irrigation_i_24_25').val(response.irrigation_i_24_25);
                $('#irrigation_i_cumulative').val(response.irrigation_i_cumulative);
                $('#irrigation_i_disbursible').val(response.irrigation_i_disbursible);

                $('#irrigation_ii_baseline').val(response.irrigation_ii_baseline);
                $('#irrigation_ii_20_21').val(response.irrigation_ii_20_21);
                $('#irrigation_ii_21_22').val(response.irrigation_ii_21_22);
                $('#irrigation_ii_22_23').val(response.irrigation_ii_22_23);
                $('#irrigation_ii_23_24').val(response.irrigation_ii_23_24);
                $('#irrigation_ii_24_25').val(response.irrigation_ii_24_25);
                $('#irrigation_ii_cumulative').val(response.irrigation_ii_cumulative);
                $('#irrigation_ii_disbursible').val(response.irrigation_ii_disbursible);

                $('#cropping_i_baseline').val(response.cropping_i_baseline);
                $('#cropping_i_20_21').val(response.cropping_i_20_21);
                $('#cropping_i_21_22').val(response.cropping_i_21_22);
                $('#cropping_i_22_23').val(response.cropping_i_22_23);
                $('#cropping_i_23_24').val(response.cropping_i_23_24);
                $('#cropping_i_24_25').val(response.cropping_i_24_25);
                $('#cropping_i_cumulative').val(response.cropping_i_cumulative);
                $('#cropping_i_disbursible').val(response.cropping_i_disbursible);

                $('#cropping_ii_baseline').val(response.cropping_ii_baseline);
                $('#cropping_ii_20_21').val(response.cropping_ii_20_21);
                $('#cropping_ii_21_22').val(response.cropping_ii_21_22);
                $('#cropping_ii_22_23').val(response.cropping_ii_22_23);
                $('#cropping_ii_23_24').val(response.cropping_ii_23_24);
                $('#cropping_ii_24_25').val(response.cropping_ii_24_25);
                $('#cropping_ii_cumulative').val(response.cropping_ii_cumulative);
                $('#cropping_ii_disbursible').val(response.cropping_ii_disbursible);

                $('#cropping_iii_baseline').val(response.cropping_iii_baseline);
                $('#cropping_iii_20_21').val(response.cropping_iii_20_21);
                $('#cropping_iii_21_22').val(response.cropping_iii_21_22);
                $('#cropping_iii_22_23').val(response.cropping_iii_22_23);
                $('#cropping_iii_23_24').val(response.cropping_iii_23_24);
                $('#cropping_iii_24_25').val(response.cropping_iii_24_25);
                $('#cropping_iii_cumulative').val(response.cropping_iii_cumulative);
                $('#cropping_iii_disbursible').val(response.cropping_iii_disbursible);

                $('#cropping_iv_baseline').val(response.cropping_iv_baseline);
                $('#cropping_iv_20_21').val(response.cropping_iv_20_21);
                $('#cropping_iv_21_22').val(response.cropping_iv_21_22);
                $('#cropping_iv_22_23').val(response.cropping_iv_22_23);
                $('#cropping_iv_23_24').val(response.cropping_iv_23_24);
                $('#cropping_iv_24_25').val(response.cropping_iv_24_25);
                $('#cropping_iv_cumulative').val(response.cropping_iv_cumulative);
                $('#cropping_iv_disbursible').val(response.cropping_iv_disbursible);


                $('#electricity_i_baseline').val(response.electricity_i_baseline);
                $('#electricity_i_20_21').val(response.electricity_i_20_21);
                $('#electricity_i_21_22').val(response.electricity_i_21_22);
                $('#electricity_i_22_23').val(response.electricity_i_22_23);
                $('#electricity_i_23_24').val(response.electricity_i_23_24);
                $('#electricity_i_24_25').val(response.electricity_i_24_25);
                $('#electricity_i_cumulative').val(response.electricity_i_cumulative);
                $('#electricity_i_disbursible').val(response.electricity_i_disbursible);
            }
            if (response == "NO") {
                // $('#irrigation_iii_baseline').val("");
                // $('#cropping_v_baseline').val("");


                $('#irrigation_i_baseline').val("");
                $('#irrigation_i_20_21').val("");
                $('#irrigation_i_21_22').val("");
                $('#irrigation_i_22_23').val("");
                $('#irrigation_i_23_24').val("");
                $('#irrigation_i_24_25').val("");
                $('#irrigation_i_cumulative').val("");
                $('#irrigation_i_disbursible').val("");

                $('#irrigation_ii_baseline').val("");
                $('#irrigation_ii_20_21').val("");
                $('#irrigation_ii_21_22').val("");
                $('#irrigation_ii_22_23').val("");
                $('#irrigation_ii_23_24').val("");
                $('#irrigation_ii_24_25').val("");
                $('#irrigation_ii_cumulative').val("");
                $('#irrigation_ii_disbursible').val("");

                $('#cropping_i_baseline').val("");
                $('#cropping_i_20_21').val("");
                $('#cropping_i_21_22').val("");
                $('#cropping_i_22_23').val("");
                $('#cropping_i_23_24').val("");
                $('#cropping_i_24_25').val("");
                $('#cropping_i_cumulative').val("");
                $('#cropping_i_disbursible').val("");

                $('#cropping_ii_baseline').val("");
                $('#cropping_ii_20_21').val("");
                $('#cropping_ii_21_22').val("");
                $('#cropping_ii_22_23').val("");
                $('#cropping_ii_23_24').val("");
                $('#cropping_ii_24_25').val("");
                $('#cropping_ii_cumulative').val("");
                $('#cropping_ii_disbursible').val("");

                $('#cropping_iii_baseline').val("");
                $('#cropping_iii_20_21').val("");
                $('#cropping_iii_21_22').val("");
                $('#cropping_iii_22_23').val("");
                $('#cropping_iii_23_24').val("");
                $('#cropping_iii_24_25').val("");
                $('#cropping_iii_cumulative').val("");
                $('#cropping_iii_disbursible').val("");

                $('#cropping_iv_baseline').val("");
                $('#cropping_iv_20_21').val("");
                $('#cropping_iv_21_22').val("");
                $('#cropping_iv_22_23').val("");
                $('#cropping_iv_23_24').val("");
                $('#cropping_iv_24_25').val("");
                $('#cropping_iv_cumulative').val("");
                $('#cropping_iv_disbursible').val("");


                $('#electricity_i_baseline').val("");
                $('#electricity_i_20_21').val("");
                $('#electricity_i_21_22').val("");
                $('#electricity_i_22_23').val("");
                $('#electricity_i_23_24').val("");
                $('#electricity_i_24_25').val("");
                $('#electricity_i_cumulative').val("");
                $('#electricity_i_disbursible').val("");

            }
        }
    });
}
function DLI_4_Info() {
    if (StateName != "") {
        var obj = {};
        obj.state_name = StateName;


        obj.irrigation_i_baseline = $('#irrigation_i_baseline').val();
        obj.irrigation_i_20_21 = $('#irrigation_i_20_21').val();
        obj.irrigation_i_21_22 = $('#irrigation_i_21_22').val();
        obj.irrigation_i_22_23 = $('#irrigation_i_22_23').val();
        obj.irrigation_i_23_24 = $('#irrigation_i_23_24').val();
        obj.irrigation_i_24_25 = $('#irrigation_i_24_25').val();
        obj.irrigation_i_cumulative = $('#irrigation_i_cumulative').val();
        obj.irrigation_i_disbursible = $('#irrigation_i_disbursible').val();

        obj.irrigation_ii_baseline = $('#irrigation_ii_baseline').val();
        obj.irrigation_ii_20_21 = $('#irrigation_ii_20_21').val();
        obj.irrigation_ii_21_22 = $('#irrigation_ii_21_22').val();
        obj.irrigation_ii_22_23 = $('#irrigation_ii_22_23').val();
        obj.irrigation_ii_23_24 = $('#irrigation_ii_23_24').val();
        obj.irrigation_ii_24_25 = $('#irrigation_ii_24_25').val();
        obj.irrigation_ii_cumulative = $('#irrigation_ii_cumulative').val();
        obj.irrigation_ii_disbursible = $('#irrigation_ii_disbursible').val();

        obj.cropping_i_baseline = $('#cropping_i_baseline').val();
        obj.cropping_i_20_21 = $('#cropping_i_20_21').val();
        obj.cropping_i_21_22 = $('#cropping_i_21_22').val();
        obj.cropping_i_22_23 = $('#cropping_i_22_23').val();
        obj.cropping_i_23_24 = $('#cropping_i_23_24').val();
        obj.cropping_i_24_25 = $('#cropping_i_24_25').val();
        obj.cropping_i_cumulative = $('#cropping_i_cumulative').val();
        obj.cropping_i_disbursible = $('#cropping_i_disbursible').val();

        obj.cropping_ii_baseline = $('#cropping_ii_baseline').val();
        obj.cropping_ii_20_21 = $('#cropping_ii_20_21').val();
        obj.cropping_ii_21_22 = $('#cropping_ii_21_22').val();
        obj.cropping_ii_22_23 = $('#cropping_ii_22_23').val();
        obj.cropping_ii_23_24 = $('#cropping_ii_23_24').val();
        obj.cropping_ii_24_25 = $('#cropping_ii_24_25').val();
        obj.cropping_ii_cumulative = $('#cropping_ii_cumulative').val();
        obj.cropping_ii_disbursible = $('#cropping_ii_disbursible').val();

        obj.cropping_iii_baseline = $('#cropping_iii_baseline').val();
        obj.cropping_iii_20_21 = $('#cropping_iii_20_21').val();
        obj.cropping_iii_21_22 = $('#cropping_iii_21_22').val();
        obj.cropping_iii_22_23 = $('#cropping_iii_22_23').val();
        obj.cropping_iii_23_24 = $('#cropping_iii_23_24').val();
        obj.cropping_iii_24_25 = $('#cropping_iii_24_25').val();
        obj.cropping_iii_cumulative = $('#cropping_iii_cumulative').val();
        obj.cropping_iii_disbursible = $('#cropping_iii_disbursible').val();

        obj.cropping_iv_baseline = $('#cropping_iv_baseline').val();
        obj.cropping_iv_20_21 = $('#cropping_iv_20_21').val();
        obj.cropping_iv_21_22 = $('#cropping_iv_21_22').val();
        obj.cropping_iv_22_23 = $('#cropping_iv_22_23').val();
        obj.cropping_iv_23_24 = $('#cropping_iv_23_24').val();
        obj.cropping_iv_24_25 = $('#cropping_iv_24_25').val();
        obj.cropping_iv_cumulative = $('#cropping_iv_cumulative').val();
        obj.cropping_iv_disbursible = $('#cropping_iv_disbursible').val();


        obj.electricity_i_baseline = $('#electricity_i_baseline').val();
        obj.electricity_i_20_21 = $('#electricity_i_20_21').val();
        obj.electricity_i_21_22 = $('#electricity_i_21_22').val();
        obj.electricity_i_22_23 = $('#electricity_i_22_23').val();
        obj.electricity_i_23_24 = $('#electricity_i_23_24').val();
        obj.electricity_i_24_25 = $('#electricity_i_24_25').val();
        obj.electricity_i_cumulative = $('#electricity_i_cumulative').val();
        obj.electricity_i_disbursible = $('#electricity_i_disbursible').val();

        // obj.irrigation_iii_baseline = $('#irrigation_iii_baseline').val();
        // obj.cropping_v_baseline = $('#cropping_v_baseline').val();


        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Dliverification/DLI_4_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Successfully Saved" && response != "Duplicate data is there" && response != "SessionTimeOut") {
                    Dli_4_Details();
                }
                else {
                    //  window.location = "/Home/LogOut";
                    window.location = "/Error/DefaultError";
                }
            }
        });
    }
    else {
        alert("Please Select StateName");
    }
}
//Dli-4_1_row uploads
$(document).ready(function () {
    $('#irrigation_iii_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#irrigation_iii_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#irrigation_iii_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#irrigation_iii_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#irrigation_iii_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
});
function abhy_dli_four_upload_row1() {

    var i = 0;
    //var irrigation_iii_baseline = $("#irrigation_iii_baseline").val();
    //if (irrigation_iii_baseline == "") {
    //    alert("Enter irrigation_iii_baseline");
    //    i = 1;
    //}
    if (StateName != "") {
        if (i == 0) {

            //$('#Error1').text("Processing...");

            formdata.append('upload_count', upload_count);
            //  formdata.append('irrigation_iii_baseline', $('#irrigation_iii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_four_upload_row1',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();
                    
                    $('#irrigation_iii_20_21_filename').val('');
                    $('#irrigation_iii_21_22_filename').val('');
                    $('#irrigation_iii_22_23_filename').val('');
                    $('#irrigation_iii_23_24_filename').val('');
                    $('#irrigation_iii_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {
                        window.location = "/Error/DefaultError";
                    }
                        abhy_dli_four_one_upload_row_geting();
                        upload_count = "";
                        if (response == "SessionTimeOut") {
                              window.location = "/Home/LogOut";
                        }
                        else {
                            //  formdata = new FormData();

                        }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}




//download dli four row 1

function abhy_dli_four_upload_row1_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_four_upload_row1_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location = result;

                }
            }

        });
    }
    else {
        alert("Please Select StateName");

    }
}

function Dli4_1_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli4_1_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                // $('#irrigation_iii_baseline').val(response.irrigation_iii_baseline);

            }
            if (response == "NO") {
                //upload baseline
                // $('#irrigation_iii_baseline').val("");

            }

        }
    });
}

//Dli-4_2_row uploads
$(document).ready(function () {
    $('#cropping_v_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });

    $('#cropping_v_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";
    });
    $('#cropping_v_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#cropping_v_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";

    });
    $('#cropping_v_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";
    });
});

function abhy_dli_four_upload_row2() {
    
    var i = 0;
    if (StateName != "") {
        //var cropping_v_baseline = $("#cropping_v_baseline").val();
        //if (cropping_v_baseline == "") {
        //    alert("Enter cropping_v_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");
            formdata.append('upload_count', upload_count);

            // formdata.append('cropping_v_baseline', $('#cropping_v_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_four_upload_row2',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#cropping_v_20_21_filename').val('');
                    $('#cropping_v_21_22_filename').val('');
                    $('#cropping_v_22_23_filename').val('');
                    $('#cropping_v_23_24_filename').val('');
                    $('#cropping_v_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "SessionTimeOut" &&
                        result != "Duplicate Data is there") {

                        window.location = "/Error/DefaultError";
                    }
                        abhy_dli_four_two_upload_row_geting();
                        upload_count = "";
                        if (response == "SessionTimeOut") {
                              window.location = "/Home/LogOut";
                        }
                        else {
                            //  formdata = new FormData();

                        }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli four row 2

function abhy_dli_four_upload_row2_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/abhy_dli_four_upload_row2_download',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location = result;

                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli4_2_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli4_2_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            } else if (response != null) {
                // $('#cropping_v_baseline').val(response.cropping_v_baseline);

            }
            if (response == "NO") {
                //upload baseline
                // $('#cropping_v_baseline').val("");

            }

        }
    });
}

//-----------------DLI 5-----------------------

function Dli_5_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli_5_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                //upload baseline
                // $('#_blockwise_ii_baseline').val(response.blockwise_ii_baseline);

                //document.getElementById("blockwise_i_baseline").value = response.blockwise_i_baseline;
                $('#_blockwise_i_baseline').val(response.blockwise_i_baseline);
                $('#_blockwise_i_20_21').val(response.blockwise_i_20_21);
                $('#_blockwise_i_21_22').val(response.blockwise_i_21_22);
                $('#_blockwise_i_22_23').val(response.blockwise_i_22_23);
                $('#_blockwise_i_23_24').val(response.blockwise_i_23_24);
                $('#_blockwise_i_24_25').val(response.blockwise_i_24_25);
                $('#_blockwise_i_cumulative').val(response.blockwise_i_cumulative);
                $('#_blockwise_i_disbursible').val(response.blockwise_i_disbursible);
                $('#_blockwise_iii_baseline').val(response.blockwise_iii_baseline);
                $('#_blockwise_iii_20_21').val(response.blockwise_iii_20_21);
                $('#_blockwise_iii_21_22').val(response.blockwise_iii_21_22);
                $('#_blockwise_iii_22_23').val(response.blockwise_iii_22_23);
                $('#_blockwise_iii_23_24').val(response.blockwise_iii_23_24);
                $('#_blockwise_iii_24_25').val(response.blockwise_iii_24_25);
                $('#_blockwise_iii_cumulative').val(response.blockwise_iii_cumulative);
                $('#_blockwise_iii_disbursible').val(response.blockwise_iii_disbursible);
                $('#_blockwise_iv_baseline').val(response.blockwise_iv_baseline);
                $('#_blockwise_iv_20_21').val(response.blockwise_iv_20_21);
                $('#_blockwise_iv_21_22').val(response.blockwise_iv_21_22);
                $('#_blockwise_iv_22_23').val(response.blockwise_iv_22_23);
                $('#_blockwise_iv_23_24').val(response.blockwise_iv_23_24);
                $('#_blockwise_iv_24_25').val(response.blockwise_iv_24_25);
                $('#_blockwise_iv_cumulative').val(response.blockwise_iv_cumulative);
                $('#_blockwise_iv_disbursible').val(response.blockwise_iv_disbursible);
            }
            if (response == "NO") {
                // $('#_blockwise_ii_baseline').val("");

                $('#_blockwise_i_baseline').val("");
                $('#_blockwise_i_20_21').val("");
                $('#_blockwise_i_21_22').val("");
                $('#_blockwise_i_22_23').val("");
                $('#_blockwise_i_23_24').val("");
                $('#_blockwise_i_24_25').val("");
                $('#_blockwise_i_cumulative').val("");
                $('#_blockwise_i_disbursible').val("");
                $('#_blockwise_iii_baseline').val("");
                $('#_blockwise_iii_20_21').val("");
                $('#_blockwise_iii_21_22').val("");
                $('#_blockwise_iii_22_23').val("");
                $('#_blockwise_iii_23_24').val("");
                $('#_blockwise_iii_24_25').val("");
                $('#_blockwise_iii_cumulative').val("");
                $('#_blockwise_iii_disbursible').val("");
                $('#_blockwise_iv_baseline').val("");
                $('#_blockwise_iv_20_21').val("");
                $('#_blockwise_iv_21_22').val("");
                $('#_blockwise_iv_22_23').val("");
                $('#_blockwise_iv_23_24').val("");
                $('#_blockwise_iv_24_25').val("");
                $('#_blockwise_iv_cumulative').val("");
                $('#_blockwise_iv_disbursible').val("");
            }
        }
    });
}


function DLI_5_Info() {
    if (StateName != "") {
        var obj = {};

        obj.state_name = StateName;

        obj.blockwise_i_baseline = $('#_blockwise_i_baseline').val();
        obj.blockwise_i_20_21 = $('#_blockwise_i_20_21').val();
        obj.blockwise_i_21_22 = $('#_blockwise_i_21_22').val();
        obj.blockwise_i_22_23 = $('#_blockwise_i_22_23').val();
        obj.blockwise_i_23_24 = $('#_blockwise_i_23_24').val();
        obj.blockwise_i_24_25 = $('#_blockwise_i_24_25').val();
        obj.blockwise_i_cumulative = $('#_blockwise_i_cumulative').val();
        obj.blockwise_i_disbursible = $('#_blockwise_i_disbursible').val();
        obj.blockwise_iii_baseline = $('#_blockwise_iii_baseline').val();
        obj.blockwise_iii_20_21 = $('#_blockwise_iii_20_21').val();
        obj.blockwise_iii_21_22 = $('#_blockwise_iii_21_22').val();
        obj.blockwise_iii_22_23 = $('#_blockwise_iii_22_23').val();
        obj.blockwise_iii_23_24 = $('#_blockwise_iii_23_24').val();
        obj.blockwise_iii_24_25 = $('#_blockwise_iii_24_25').val();
        obj.blockwise_iii_cumulative = $('#_blockwise_iii_cumulative').val();
        obj.blockwise_iii_disbursible = $('#_blockwise_iii_disbursible').val();
        obj.blockwise_iv_baseline = $('#_blockwise_iv_baseline').val();
        obj.blockwise_iv_20_21 = $('#_blockwise_iv_20_21').val();
        obj.blockwise_iv_21_22 = $('#_blockwise_iv_21_22').val();
        obj.blockwise_iv_22_23 = $('#_blockwise_iv_22_23').val();
        obj.blockwise_iv_23_24 = $('#_blockwise_iv_23_24').val();
        obj.blockwise_iv_24_25 = $('#_blockwise_iv_24_25').val();
        obj.blockwise_iv_cumulative = $('#_blockwise_iv_cumulative').val();
        obj.blockwise_iv_disbursible = $('#_blockwise_iv_disbursible').val();

        // obj.blockwise_ii_baseline = $('#_blockwise_ii_baseline').val();


        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Dliverification/DLI_5_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                if (response == "Successfully Saved" && response != "Duplicate data is there" && response != "SessionTimeOut") {

                    Dli_5_Details();
                }
                else {
                    //  window.location = "/Home/LogOut";
                    window.location = "/Error/DefaultError";
                }
            }
        });
    }
    else {
        alert("Please Select StateName");
    }
}

//Dli-5_1_row uploads
$(document).ready(function () {
    $('#_blockwise_ii_20_21_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "1";

    });
    $('#_blockwise_ii_21_22_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "2";

    });
    $('#_blockwise_ii_22_23_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "3";

    });
    $('#_blockwise_ii_23_24_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "4";
    });
    $('#_blockwise_ii_24_25_filename').live('change', function (e) {

        var fileName = e.target.files;

        for (i = 0; i < fileName.length; i++) {

            var sfilename = fileName[i].name;


            formdata.append(sfilename, fileName[i]);

        }
        upload_count = "5";

    });
});
function abhy_dli_five_upload_row1() {

    var i = 0;
    if (StateName != "") {
        //var blockwise_ii_baseline = $("#_blockwise_ii_baseline").val();
        //if (blockwise_ii_baseline == "") {
        //    alert("Enter blockwise_ii_baseline");
        //    i = 1;
        //}
        if (i == 0) {

            //$('#Error1').text("Processing...");
            formdata.append('upload_count', upload_count);

            // formdata.append('blockwise_ii_baseline', $('#_blockwise_ii_baseline').val());
            $.ajax({
                url: '/Dliverification/abhy_dli_five_upload_row1',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: formdata,
                async: false,
                success: function (result) {

                    formdata = new FormData();

                    $('#_blockwise_ii_20_21_filename').val('');
                    $('#_blockwise_ii_21_22_filename').val('');
                    $('#_blockwise_ii_22_23_filename').val('');
                    $('#_blockwise_ii_23_24_filename').val('');
                    $('#_blockwise_ii_24_25_filename').val('');
                    alert(result);
                    if (result != "Your files uploaded successfully" &&
                        result != "Please Upload Files" &&
                        result != "Your Upload file has Not valid File, Please Upload proper file" &&
                        result != "Your Upload file has Double Extention, Please Upload proper file" &&
                        result != "Duplicate Data is there" &&
                        result != "SessionTimeOut") {

                        window.location = "/Error/DefaultError";
                    }
                    abhy_dli_five_one_upload_row_geting();
                    upload_count = "";
                    if (response == "SessionTimeOut") {
                          window.location = "/Home/LogOut";
                    }
                    else {
                        //  formdata = new FormData();

                    }
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });

        }
    }
    else {
        alert("Please Select StateName");
    }
}

//download dli five row 1

function abhy_dli_five_upload_row1_download(ss) {

    var Valu = ss;
    if (StateName != "") {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; chatset=utf-8',
            url: '/Dliverification/.',
            data: { 'Valu': Valu },
            dataType: 'JSON',
            success: function (result) {

                if (result == "No Files") {
                    alert("No  Files");
                }
                else if (result == "SessionTimeOut") {
                    alert("User SessionOut Please Login");
                      window.location = "/Home/LogOut";
                }
                else {
                    window.location = result;

                }
            }

        });
    }
    else {
        alert("Please Select StateName");
    }
}

function Dli5_1_Upload_Details() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Dliverification/Dli4_2_Upload_Details',
        data: { 'state': StateName },
        dataType: 'JSON',
        success: function (response) {

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != null) {
                // $('#_blockwise_ii_baseline').val(response.blockwise_ii_baseline);

            }
            else {
                //upload baseline
                //  $('#_blockwise_ii_baseline').val("");

            }

        }
    });
}







$("#cropping_i_baseline,#cropping_ii_baseline").on("keydown keyup", function () {

    var cropping_i_baseline = $("#cropping_i_baseline").val();
    var cropping_ii_baseline = $("#cropping_ii_baseline").val();


    if (cropping_i_baseline == "") {
        cropping_i_baseline = 0;
    }
    if (cropping_ii_baseline == "") {
        cropping_ii_baseline = 0;
    }
    var cropping_iii_baseline = parseFloat(cropping_i_baseline) - parseFloat(cropping_ii_baseline);

    $('#cropping_iii_baseline').val(cropping_iii_baseline);

});
$("#cropping_i_20_21,#cropping_ii_20_21").on("keydown keyup", function () {

    var cropping_i_20_21 = $("#cropping_i_20_21").val();
    var cropping_ii_20_21 = $("#cropping_ii_20_21").val();


    if (cropping_i_20_21 == "") {
        cropping_i_20_21 = 0;
    }
    if (cropping_ii_20_21 == "") {
        cropping_ii_20_21 = 0;
    }
    var cropping_iii_20_21 = parseFloat(cropping_i_20_21) - parseFloat(cropping_ii_20_21);

    $('#cropping_iii_20_21').val(cropping_iii_20_21);

});

$("#cropping_i_21_22,#cropping_ii_21_22").on("keydown keyup", function () {

    var cropping_i_21_22 = $("#cropping_i_21_22").val();
    var cropping_ii_21_22 = $("#cropping_ii_21_22").val();


    if (cropping_i_21_22 == "") {
        cropping_i_21_22 = 0;
    }
    if (cropping_ii_21_22 == "") {
        cropping_ii_21_22 = 0;
    }
    var cropping_iii_21_22 = parseFloat(cropping_i_21_22) - parseFloat(cropping_ii_21_22);

    $('#cropping_iii_21_22').val(cropping_iii_21_22);


});




$("#cropping_i_22_23,#cropping_ii_22_23").on("keydown keyup", function () {

    var cropping_i_22_23 = $("#cropping_i_22_23").val();
    var cropping_ii_22_23 = $("#cropping_ii_22_23").val();


    if (cropping_i_22_23 == "") {
        cropping_i_22_23 = 0;
    }
    if (cropping_ii_22_23 == "") {
        cropping_ii_22_23 = 0;
    }
    var cropping_iii_22_23 = parseFloat(cropping_i_22_23) - parseFloat(cropping_ii_22_23);

    $('#cropping_iii_22_23').val(cropping_iii_22_23);

});
$("#cropping_i_23_24,#cropping_ii_23_24").on("keydown keyup", function () {

    var cropping_i_23_24 = $("#cropping_i_23_24").val();
    var cropping_ii_23_24 = $("#cropping_ii_23_24").val();


    if (cropping_i_23_24 == "") {
        cropping_i_23_24 = 0;
    }
    if (cropping_ii_23_24 == "") {
        cropping_ii_23_24 = 0;
    }
    var cropping_iii_23_24 = parseFloat(cropping_i_23_24) - parseFloat(cropping_ii_23_24);

    $('#cropping_iii_23_24').val(cropping_iii_23_24);

});
$("#cropping_i_24_25,#cropping_ii_24_25").on("keydown keyup", function () {

    var cropping_i_24_25 = $("#cropping_i_24_25").val();
    var cropping_ii_24_25 = $("#cropping_ii_24_25").val();


    if (cropping_i_24_25 == "") {
        cropping_i_24_25 = 0;
    }
    if (cropping_ii_24_25 == "") {
        cropping_ii_24_25 = 0;
    }
    var cropping_iii_24_25 = parseFloat(cropping_i_24_25) - parseFloat(cropping_ii_24_25);

    $('#cropping_iii_24_25').val(cropping_iii_24_25);

});

$("#cropping_i_cumulative,#cropping_ii_cumulative").on("keydown keyup", function () {

    var cropping_i_cumulative = $("#cropping_i_cumulative").val();
    var cropping_ii_cumulative = $("#cropping_ii_cumulative").val();


    if (cropping_i_cumulative == "") {
        cropping_i_cumulative = 0;
    }
    if (cropping_ii_cumulative == "") {
        cropping_ii_cumulative = 0;
    }
    var cropping_iii_cumulative = parseFloat(cropping_i_cumulative) - parseFloat(cropping_ii_cumulative);

    $('#cropping_iii_cumulative').val(cropping_iii_cumulative);

});






// dli4 calclation

$("#cropping_ii_20_21,#cropping_ii_baseline").on("keydown keyup", function () {

    var cropping_ii_20_21 = $("#cropping_ii_20_21").val();
    var cropping_ii_baseline = $("#cropping_ii_baseline").val();


    if (cropping_ii_20_21 == "") {
        cropping_ii_20_21 = 0;
    }
    if (cropping_ii_baseline == "") {
        cropping_ii_baseline = 0;
    }
    var cropping_iv_20_21 = parseFloat(cropping_ii_20_21) - parseFloat(cropping_ii_baseline);

    $('#cropping_iv_20_21').val(cropping_iv_20_21);

});

$("#cropping_ii_21_22,#cropping_ii_20_21").on("keydown keyup", function () {

    var cropping_ii_21_22 = $("#cropping_ii_21_22").val();
    var cropping_ii_20_21 = $("#cropping_ii_20_21").val();


    if (cropping_ii_21_22 == "") {
        cropping_ii_21_22 = 0;
    }
    if (cropping_ii_20_21 == "") {
        cropping_ii_20_21 = 0;
    }
    var cropping_iv_21_22 = parseFloat(cropping_ii_21_22) - parseFloat(cropping_ii_20_21);

    $('#cropping_iv_21_22').val(cropping_iv_21_22);

});
$("#cropping_ii_22_23,#cropping_ii_21_22").on("keydown keyup", function () {

    var cropping_ii_22_23 = $("#cropping_ii_22_23").val();
    var cropping_ii_21_22 = $("#cropping_ii_21_22").val();


    if (cropping_ii_22_23 == "") {
        cropping_ii_22_23 = 0;
    }
    if (cropping_ii_21_22 == "") {
        cropping_ii_21_22 = 0;
    }
    var cropping_iv_22_23 = parseFloat(cropping_ii_22_23) - parseFloat(cropping_ii_21_22);

    $('#cropping_iv_22_23').val(cropping_iv_22_23);


});
$("#cropping_ii_23_24,#cropping_ii_22_23").on("keydown keyup", function () {

    var cropping_ii_23_24 = $("#cropping_ii_23_24").val();
    var cropping_ii_22_23 = $("#cropping_ii_22_23").val();


    if (cropping_ii_23_24 == "") {
        cropping_ii_23_24 = 0;
    }
    if (cropping_ii_22_23 == "") {
        cropping_ii_22_23 = 0;
    }
    var cropping_iv_23_24 = parseFloat(cropping_ii_23_24) - parseFloat(cropping_ii_22_23);

    $('#cropping_iv_23_24').val(cropping_iv_23_24);


});

$("#cropping_ii_24_25,#cropping_ii_23_24").on("keydown keyup", function () {

    var cropping_ii_24_25 = $("#cropping_ii_24_25").val();
    var cropping_ii_23_24 = $("#cropping_ii_23_24").val();


    if (cropping_ii_24_25 == "") {
        cropping_ii_24_25 = 0;
    }
    if (cropping_ii_23_24 == "") {
        cropping_ii_23_24 = 0;
    }

    var cropping_iv_24_25 = parseFloat(cropping_ii_24_25) - parseFloat(cropping_ii_23_24);

    $('#cropping_iv_24_25').val(cropping_iv_24_25);

});
$("#cropping_ii_cumulative,#cropping_ii_24_25").on("keydown keyup", function () {

    var cropping_ii_cumulative = $("#cropping_ii_cumulative").val();
    var cropping_ii_24_25 = $("#cropping_ii_24_25").val();


    if (cropping_ii_cumulative == "") {
        cropping_ii_cumulative = 0;
    }
    if (cropping_ii_24_25 == "") {
        cropping_ii_24_25 = 0;
    }

    var cropping_iv_cumulative = parseFloat(cropping_ii_cumulative) - parseFloat(cropping_ii_24_25);

    $('#cropping_iv_cumulative').val(cropping_iv_cumulative);


});