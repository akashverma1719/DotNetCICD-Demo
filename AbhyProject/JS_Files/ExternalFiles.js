function BindStates() {
    if (Jsondata.length != 0) {
        var optionState = '<option value="0">Select StateName</option>';
        for (var i = 0; i < Jsondata.length; i++) {
            optionState += '<option value="' + Jsondata[i].sid + '">' + Jsondata[i].statename + '</option>';

        }
        $("#drpState").html(optionState);
    }
}

function State_Dropdown_Function(value) 
{
    var stateId = value;
    var optiondist = '<option value="0">Select District</option>';
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/ExternalFile/FetchDistrict",
        data: "{'stateId': '" + stateId + "'}",
        dataType: 'JSON',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                optiondist += '<option value="' + data[i].did + '">' + data[i].district_name + '</option>';
            }
            $("#dist11").html(optiondist);
        }

    })

}

function Dist_fun(value) {
    var distId = value;
    var optionBlock = '<option value="0">Select Block</option>';
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/ExternalFile/FetchBlocks",
        data: "{'distId': '" + distId + "'}",
        dataType: 'JSON',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                optionBlock += '<option value="' + data[i].bid + '">' + data[i].block_name + '</option>';
            }
            $("#block1").html(optionBlock);
        }

    })
}

function Block_fun(value) {
    var blockId = value;
    var optionGram = '<option value="0">Select GramPanchayat</option>';
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/ExternalFile/FetchGrampanchayat",
        data: "{'blockId': '" + blockId + "'}",
        dataType: 'JSON',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                optionGram += '<option value="' + data[i].sid + '">' + data[i].statename + '</option>';
            }
            $("#gram").html(optionGram);
        }

    })
}