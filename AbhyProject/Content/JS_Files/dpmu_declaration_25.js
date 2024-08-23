
function Upload_dpmu_declaration() {
    var decalaration = $("#declaration_dpmu").get(0);
    var dpmu_declaration = decalaration.files;

    var formdata = new FormData();
    formdata.append("dpmu_declaration", dpmu_declaration[0]);


    $.ajax({
        url: '/WSP_2024_25_update/Upload_dpmu_declaration',
        data: formdata,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (response) {

            alert(response);
            $('input[type = file]').val('');
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            if (response == "Successfully Updated" || response == "Successfully Saved") {
                Get_dpmu_declaration();
            }
        },
        error: function () {
            alert('Update Failed');
        }
    });
}

function Get_dpmu_declaration() {
    
    $(".loader").show();
    $(".totalreport").hide();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WSP_2024_25_update/Get_dpmu_declaration',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            if (data.length > 0) { 
            $("#pdf_container").empty();
            if (data == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }

            console.log(data[0].dpmu_declaration);

                if ((data[0].dpmu_declaration == undefined) || (data[0].dpmu_declaration == "")) {
                $(".loader").hide();
                $(".totalreport").hide();
                //$(".totalreport").attr("style", "display:none");
                //$(".totalreport").removeAttr("href");

            }

            const d1 = new Date();
            //var IDD = $(".btn_location").attr("id");
            var tr1 = "";
            var tr2 = '';
            if (data[0].dpmu_declaration != null && data[0].dpmu_declaration != 0 && data[0].dpmu_declaration != "") {
                $(".totalreport").show();

                var post_nowDate = new Date(parseInt(data[0].entry_time.substr(6)))
                post_curr_date = post_nowDate.getDate();
                post_curr_month = post_nowDate.getMonth() + 1;    // months are zero based
                post_curr_year = post_nowDate.getFullYear();

                var file_name = "DPMU Declaration_" + post_curr_date + "_" + post_curr_month + "_" + post_curr_year;

                tr1 = '<label><a  href="/WSP_2024_25_update/ViewFile?FileName=' + data[0].dpmu_declaration + '"  download="" target="_blank" >' + file_name + '</a></label>';
                $('#upload_declaration').html(tr1);
                $("#btn_declaration_dlt").show();
                $("#hidden").text(data[0].id);
            } else {
                $('#upload_declaration').html(tr1);
                $('#btn_declaration_dlt').hide();
                $('#total report').removeAttr("href");
                //$("#" + IDD).hide();
            }
                var url = data[0].dpmu_declaration;
                if (url != undefined) {
                    LoadPdfFromUrl(url);
                }
            //tr2 += '<tr><td><label><a href="' + data[0].dpmu_declaration + '"><img src="' + page.jpg + '" style="width: 100%;"/></a></label></td></tr>';
            //$('#image_div').append(tr2);
                $(".loader").hide();
            }
        }
    });
}


function Delete_dpmu_declaration() {
    var obj = {};
    obj.IDD = $("#hidden").text();
    obj.type = "location";


    if (confirm('Are you sure to delete the entry?')) {
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/WSP_2024_25_update/Delete_dpmu_declaration",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);
                Get_dpmu_declaration();
            },
            error: function () {
                alert("Error While Saving Data")
            }
        });
    }
    else {
        return false;
    }

    
}