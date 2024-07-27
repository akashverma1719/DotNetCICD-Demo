
var dynamic_state = "";

function D_state(id) {
    var drpid = id;
    
    /*alert('0');*/
    var option_state = ' <option value="0"> Select State </option><option value="1">ALL</option>';
    // alert('hello state');
    return $.ajax({
        url: '/MasterDropDown/State',
        type: 'POST',
        dataType: 'json', //make sure your service is actually returning json here
        contentType: 'application/json',
        success: function (data) {

            if (data.length != 0) {

                for (var i = 0; i < data.length; i++) {

                    if (data[i] != null && data[i] != "") {
                        option_state += '<option value="' + data[i].state_id + '">' + data[i].state_name + '</option>';
                    }
                }
                
                $(drpid).html(option_state);
            }

        }
    });


}



function D_district(stateid, distid) {     //abhi28
    $('#drpblock').val(0);
    $('#drpgrampanchayat').val(0);
    /*alert('1');*/
    
    var drpid = $(stateid).val();
    //alert(drpid);
    $.ajax(
        {
            type: 'POST',
            dataType: 'JSON',
            url: '/MasterDropDown/Bind_District',
            data: { id: drpid },
            success: function (data) {
                var option_district = ' <option value="0"> Select District </option><option value="1">ALL</option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] != null && data[i] != "") {
                            option_district += '<option value="' + data[i].district_id + '">' + data[i].district_name + '</option>';
                        }
                    }
                }
                $(distid).html(option_district);
            }
        });
}

function D_block(distid, blockidd) {
    /* alert('2');*/
    
    var blockid = $(distid).val();
    //alert(blockid);
    $.ajax(
        {
            type: 'POST',
            dataType: 'JSON',
            url: '/MasterDropDown/Bind_Block',
            data: { id: blockid },
            success: function (data) {
                var option_block = ' <option value="0"> Select Block </option><option value="1">ALL</option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] != null && data[i] != "") {
                            option_block += '<option value="' + data[i].block_id + '">' + data[i].block_name + '</option>';
                        }
                    }
                }
                $(blockidd).html(option_block);
            }
        });
}


function D_grampanchayat(blockidd, gramidd) {

    var gramid = $(blockidd).val();
    // alert(gramid);
    $.ajax(
        {
            type: 'POST',
            dataType: 'JSON',
            url: '/MasterDropDown/Bind_Grampanchayat',
            data: { id: gramid },
            success: function (data) {
                var option_grampanchayat = ' <option value="0"> Select GramPanchayat </option><option value="1">ALL</option>';
                if (data.length != 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] != null && data[i] != "") {
                            option_grampanchayat += '<option value="' + data[i].grampanchayat_id + '">' + data[i].grampanchayat_name + '</option>';
                        }
                    }
                }
                $(gramidd).html(option_grampanchayat);
            }
        });
}