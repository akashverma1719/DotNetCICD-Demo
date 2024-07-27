



function get_npmu_details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Contact/contact_npmu_Info',
        data: {},
        dataType: 'JSON',
        success: function (data) {
            
            var tr = '';
            if (data.length != 0) {



                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td> ' + (i + 1) + '</td><td>' + data[i].officer_name + '</td><td>' + data[i].officer_designation + '</td><td>' + data[i].office_name + '</td><td>' + data[i].officer_phone + '</td> <td>' + data[i].officer_emailid + '</td> </tr>';
                }
            }

            if (tr == '') {
                tr = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
            }

            $('#tbl_npmu').html(tr);
        }

    });


}


function get_spmu_details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Contact/contact_spmu_Info',
        data: {},
        dataType: 'JSON',
        success: function (data) {
            
            var tr = '';
            var tr1 = '';
            var Z1 = 0;
            var Z2 = 0;
            if (data.length != 0) {



                //state_name
                //officer_type
                for (var i = 0; i < data.length; i++) {
                    var officer_phone = data[i].officer_phone;
                    if (officer_phone == null) {
                        officer_phone = "";
                    }

                    var officer_name = data[i].officer_name;
                    if (officer_name == null) {
                        officer_name = "";
                    }

                    var officer_designation = data[i].officer_designation;
                    if (officer_designation == null) {
                        officer_designation = "";
                    }

                    if (data[i].officer_type == "Project Co-ordinator") {
                        Z1 = Z1 + 1;
                        tr += '<tr><td> ' + Z1 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].officer_name + '</td><td>' + officer_designation + '</td><td>' + data[i].office_name + '</td><td>' + officer_phone + '</td><td>' + data[i].officer_emailid + '</td></tr>';
                    } else {
                        Z2 = Z2 + 1;
                        tr1 += '<tr><td> ' + Z2 + '</td><td>' + data[i].state_name + '</td><td>' + data[i].officer_name + '</td><td>' + officer_designation + '</td><td>' + data[i].office_name + '</td><td>' + officer_phone + '</td><td>' + data[i].officer_emailid + '</td></tr>';
                    }
                }
            }

            if (tr == '') {
                tr = '<tr colspan="7"><td colspan="7" style="text-align: center;">No Data</td></tr>';
            }
            if (tr1 == '') {
                tr1 = '<tr colspan="7"><td colspan="7" style="text-align: center;">No Data</td></tr>';
            }

            $('#tbl_spmu').html(tr);
            $('#tbl_spmu1').html(tr1);
        }

    });


}




function get_cgwb_details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Contact/contact_cgwb_Info',
        data: {},
        dataType: 'JSON',
        success: function (data) {
            
            var tr = '';
            if (data.length != 0) {



                for (var i = 0; i < data.length; i++) {

                    var officer_emailid = "";
                    if (data[i].officer_emailid != null) {
                        officer_emailid = data[i].officer_emailid;
                    }
                    var officer_phone = "";

                    if (data[i].officer_phone != null) {
                        officer_phone = data[i].officer_phone;
                    }
                    tr += '<tr><td> ' + (i + 1) + '</td><td>' + data[i].officer_name + '</td><td>' + data[i].officer_designation + '</td><td>' + data[i].office_name + '</td><td>' + officer_phone + '</td> <td>' + officer_emailid + '</td> </tr>';
                }
            }

            if (tr == '') {
                tr = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
            }

            $('#tbl_cgwb').html(tr);
        }

    });


}