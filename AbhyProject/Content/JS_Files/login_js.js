
$('#register-btn').change(function () {

    alert("Plese Select Nodel Officer");
});
$('#changegwmlogin').change(function () {
    if ($(this).val() == 'Nodal Officer') {
        //alert("Plese ")
        $('#modal112').modal('hide');
        $('#District1123').hide();
        $('#State1123').hide();
        $('#Block1123').hide();
        $('#Gram1123').hide();
        $('#state123').hide();

        $('#dist123').hide();

        $('#block123').hide();

        $('#gram123').hide();
        $('#village123').hide();


    }
    if ($(this).val() == 'Admin') {
        //  $('#modal112').modal('hide');
        $('#District1123').hide();
        $('#State1123').hide();
        $('#Block1123').hide();
        $('#Gram1123').hide();
        $('#state123').hide();

        $('#dist123').hide();

        $('#block123').hide();

        $('#gram123').hide();
        $('#village123').hide();


    }
    if ($(this).val() == 'National Level Nodal Officer') {
        //  $('#modal112').modal('hide');
        $('#District1123').hide();
        $('#State1123').hide();
        $('#Block1123').hide();
        $('#Gram1123').hide();
        $('#state123').hide();

        $('#dist123').hide();

        $('#block123').hide();

        $('#gram123').hide();
        $('#village123').hide();
        //$('#state').val('');
        //$('#dist').val('');
        //$('#block').val('');
        //$('#gram').val('');
        //$('#state').val('Select State');
        //$('#dist').val('Select District');
        //$('#block').val('Select Block');
        //$('#gram').val('Select Panchayat');
    }

    if ($(this).val() == 'State Level Nodal Officer') {
        //    //     $('#modal112').modal('show');
        $('#state123').show();
        $('#gram123').hide();
        $('#block123').hide();
        $('#dist123').hide();
        //$('#state').vaL('');
        //$('#state').val('Select State');

        $('#State1123').show();
        $('#District1123').hide();
        $('#Gram1123').hide();
        $('#Block1123').hide();
        $('#village123').hide();

    }
    if ($(this).val() == 'District Level Nodal Officer') {
        //     $('#modal112').modal('show');
        $('#state123').show();
        $('#dist123').show();
        $('#block123').hide();
        $('#gram123').hide();
        $('#village123').hide();
        //$('#state').val('Select State');
        // $('#dist').val('Select District');
        $('#block123').hide();
        $('#District1123').show();
        $('#State1123').hide();
        $('#Gram1123').hide();
        $('#Block1123').hide();
        $('#village123').hide();
    }
    if ($(this).val() == 'Block Level Nodal Officer') {
        //     $('#modal112').modal('show');
        $('#state123').show();
        $('#dist123').show();
        $('#block123').show();
        $('#gram123').hide();
        $('#village123').hide();
        //$('#state').val('');
        //$('#dist').val('');
        //$('#block').val('');
        //$('#state').val('Select State');
        //$('#dist').val('Select District');
        //$('#block').val('Select Block');
        $('#Block1123').show();
        $('#State1123').hide();
        $('#Gram1123').hide();
        $('#District1123').hide();
        $('#village123').hide();
    }

    if ($(this).val() == 'Gram Panchyat Nodal Officer') {
        //     $('#modal112').modal('show');
        $('#District1123').hide();
        $('#State1123').hide();
        $('#Block1123').hide();
        $('#Gram1123').show();
        $('#state123').show();

        $('#dist123').show();

        $('#block123').show();

        $('#gram123').show();
        $('#village123').hide();
        //$('#state').val('');
        //$('#dist').val('');
        //$('#block').val('');
        //$('#gram').val('');
        //$('#state').val('Select State');
        //$('#dist').val('Select District');
        //$('#block').val('Select Block');
        //$('#gram').val('Select Panchayat');
    }
    if ($(this).val() == 'Village Level Nodal Officer') {
        //     $('#modal112').modal('show');
        $('#District1123').hide();
        $('#State1123').hide();
        $('#Block1123').hide();
        $('#Gram1123').show();
        $('#state123').show();

        $('#dist123').show();

        $('#block123').show();

        $('#gram123').show();
        $('#village123').show();
        //$('#state').val('');
        //$('#dist').val('');
        //$('#block').val('');
        //$('#gram').val('');
        //$('#state').val('Select State');
        //$('#dist').val('Select District');
        //$('#block').val('Select Block');
        //$('#gram').val('Select Panchayat');
    }




});
$(document).ready(function () {
    if ($('#changegwmlogin').val() == 'Nodal Officer') {
        $('#modal112').modal('hide');
        $('#District1123').hide();
        $('#State1123').hide();
        $('#Block1123').hide();
        $('#Gram1123').hide();
        $('#state123').hide();

        $('#dist123').hide();

        $('#block123').hide();

        $('#gram123').hide();
        $('#village123').hide();


    }
});
    //function myFunction() {
    //    alert("Plese Select Nodel Officer");
    //}
