
function get_approved_status(val) {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/get_approved_status",
        dataType: 'JSON',
        success: function (data) {
            //debugger;
            console.log(data)
             if (data>1) {
                $('input[type=text]').prop("disabled", true)
                $('select').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
                $('.btn_disabled').prop("disabled", true);
                $('.livestock_remove_field').removeAttr("onclick");
                $('.livestock_remove_field').removeAttr("href");
            }
            else if (access_auth == "admin") {
                $('input[type=text]').prop("disabled", false)
                $('select').prop("disabled", false);
                $('input[type=file]').prop("disabled", false)
                $('.btn_disabled').prop("disabled", false);
             }
             else if ((StateOfficer == "Gram Panchyat Nodal Officer" && data == '1') || (StateOfficer == "Gram Panchyat Nodal Officer" && data == "null")) {
                 $('input[type=text]').prop("disabled", false)
                 $('select').prop("disabled", false);
                 $('input[type=file]').prop("disabled", false)
                 $('.btn_disabled').prop("disabled", false);
             }
           else  if (StateOfficer != "Gram Panchyat Nodal Officer" ) {
                $('input[type=text]').prop("disabled", true)
                $('select').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
                $('.btn_disabled').prop("disabled", true);
            }
            //else if (data == "null")
            //{
            //    //for Inprogress
            //    $('input[type=text]').prop("disabled", false)
            //    $('select').prop("disabled", false);
            //    $('input[type=file]').prop("disabled", false)
            //    $('.btn_disabled').prop("disabled", false);
            //}
            else {
                $('input[type=text]').prop("disabled", true)
                $('select').prop("disabled", true);
                $('input[type=file]').prop("disabled", true)
                $('.btn_disabled').prop("disabled", true);
            }
            //if (StateOfficer != "Gram Panchyat Nodal Officer") {
            //    $('input[type=text]').prop("disabled", true)
            //    $('select').prop("disabled", true);
            //    $('input[type=file]').prop("disabled", true)
            //    $('.btn_disabled').prop("disabled", true);
            //}
            //    if (data > 1) {
            //    $('input[type=text]').prop("disabled", true)
            //    $('select').prop("disabled", true);
            //    $('input[type=file]').prop("disabled", true)
            //    $('.btn_disabled').prop("disabled", true);
            //}
            //if (access_auth == "admin") {
            //    $('input[type=text]').prop("disabled", false)
            //    $('select').prop("disabled", false);
            //    $('input[type=file]').prop("disabled", false)
            //    $('.btn_disabled').prop("disabled", false);
            //    $('#domestic_annual_req_total_value').prop("disabled", true);
            //    $('#sum_sw').prop("disabled", true);
            //    $('#sum_gw').prop("disabled", true);
            //}
            //else {
            //    $('input[type=text]').prop("disabled", true)
            //    $('select').prop("disabled", true);
            //    $('input[type=file]').prop("disabled", true)
            //    $('.btn_disabled').prop("disabled", true);
            //}
        }
    });
}



function get_approved_status_balance() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/WSP_2024_25_update/get_approved_status",
        dataType: 'JSON',
        success: function (data) {

            if (data > 1) {
                //$('input[type=text]').prop("disabled", true)
                //$('select').prop("disabled", true);
                //$('input[type=file]').prop("disabled", true)
                $('.btn_disabled').prop("disabled", true);
            }
            if (access_auth == "admin") {
                $('.btn_disabled').prop("disabled", false);
            }
            //else {
            //    $('.btn_disabled').prop("disabled", true);
            //}
        }
    });
}


// AFTER DECIMAL TAKE ONLY 4 DIGIT
function validate(e) {

    var c = 0;
    var { value } = event.target;
    var count1 = 0;

    for (var i = 0; i < value.length; i++) {
        count1++;
        if (value[i] != '.') {
            if (count1 == 6 && value[i] != '.') {

                e.preventDefault();
            }
        } else {
            var count = 0, point = false;
            for (var i = 0; i < value.length; i++) {

                if (value[i] == '.' || point) {
                    count++;
                    point = true;
                }
                if (count > 4) {
                    e.preventDefault();
                }
            }
        }
    }
}