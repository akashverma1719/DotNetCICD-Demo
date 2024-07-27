
function State_Selection() {
    $('.loader').show();
    //  var state = $('#state').text();
    admin_framematrix();
    Dli_1_Details();
    Dli_2_Details();
    Total_Population_of_the_GP_Info();
    // Socio_economic_demographic_profile_Info();
    //vwms_Info();
    //baselinedata_geting();
    Dli_4_Details();
    Dli_5_Details();
}
function admin_framematrix() {

    var state = $('#state').val();
    if (state != "") {

        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: '/Project/admin_framematrix',
            data: "{'state': '" + state + "'}",
            dataType: 'JSON',
            success: function (response) {
                $('.loader').hide();

                $('#dli1_1_baseline').text('');
                $('#dli1_1_20_21').text('');
                $('#dli1_1_21_22').text('');
                $('#dli1_1_22_23').text('');
                $('#dli1_1_23_24').text('');
                $('#dli1_1_24_25').text('');
                $('#dli1_1_cumulative').text('');
                $('#dli1_1_2_21_22').text('');
                $('#dli1_1_2_22_23').text('');
                $('#dli1_1_2_23_24').text('');
                $('#dli1_1_2_24_25').text('');
                $('#dli1_1_2_cumulative').text('');



                //3.1
                $('#dli2_3_1_baseline').text('');
                $('#dli2_3_1_20_21').text('');
                $('#dli2_3_1_21_22').text('');
                $('#dli2_3_1_22_23').text('');
                $('#dli2_3_1_23_24').text('');
                $('#dli2_3_1_24_25').text('');
                $('#dli2_3_1_cumulative').text('');

                //3.1a

                $('#dli2_3_1a_baseline').text('');
                $('#dli2_3_1a_20_21').text('');
                $('#dli2_3_1a_21_22').text('');
                $('#dli2_3_1a_22_23').text('');
                $('#dli2_3_1a_23_24').text('');
                $('#dli2_3_1a_24_25').text('');
                $('#dli2_3_1a_cumulative').text('');

                //4
                $('#dli3_4_baseline').text('')
                $('#dli3_4_20_21').text('');
                $('#dli3_4_21_22').text('');
                $('#dli3_4_22_23').text('');
                $('#dli3_4_23_24').text('');
                $('#dli3_4_24_25').text('');
                $('#dli3_4_cumulative').text('');

                //4.1
                $('#dli3_4_1_baseline').text('');
                $('#dli3_4_1_20_21').text('');
                $('#dli3_4_1_21_22').text('');
                $('#dli3_4_1_22_23').text('');
                $('#dli3_4_1_23_24').text('');
                $('#dli3_4_1_24_25').text('');
                $('#dli3_4_1_cumulative').text('');


                $('#dli3_4_2_baseline').text('');
                $('#dli3_4_2_20_21').text('');
                $('#dli3_4_2_21_22').text('');
                $('#dli3_4_2_22_23').text('');
                $('#dli3_4_2_23_24').text('');
                $('#dli3_4_2_24_25').text('');
                $('#dli3_4_2_cumulative').text('');

                $('#dli3_4_3_baseline').text('');
                $('#dli3_4_3_20_21').text('');
                $('#dli3_4_3_21_22').text('');
                $('#dli3_4_3_22_23').text('');
                $('#dli3_4_3_23_24').text('');
                $('#dli3_4_3_24_25').text('');
                $('#dli3_4_3_cumulative').text('');

                //$('#dli3_4_4_baseline').text('');
                ////$('#dli3_4_4_20_21').text('');
                //$('#dli3_4_4_21_22').text('');
                //$('#dli3_4_4_22_23').text('');
                //$('#dli3_4_4_23_24').text('');
                //$('#dli3_4_4_24_25').text('');
                //$('#dli3_4_4_cumulative').text('');

                $('#dli4_5_baseline').text('');
                $('#dli4_5_20_21').text('');
                $('#dli4_5_21_22').text('');
                $('#dli4_5_22_23').text('');
                $('#dli4_5_23_24').text('');
                $('#dli4_5_24_25').text('');
                $('#dli4_5_cumulative').text('');



                $('#dli5_6_baseline').text('');
                $('#dli5_6_20_21').text('');
                $('#dli5_6_21_22').text('');
                $('#dli5_6_22_23').text('');
                $('#dli5_6_23_24').text('');
                $('#dli5_6_24_25').text('');
                $('#dli5_6_cumulative').text('');





                //$('#dli2_3_baseline').text('');

                //$('#dli2_3_21_22').text('');
                //$('#dli2_3_22_23').text('');
                //$('#dli2_3_23_24').text('');
                //$('#dli2_3_24_25').text('');
                $('#dli2_3_cumulative').text('');

                $('#dli2_3a_baseline').text('');

                $('#dli2_3a_20_21').text('');
                $('#dli2_3a_21_22').text('');
                $('#dli2_3a_22_23').text('');
                $('#dli2_3a_23_24').text('');
                $('#dli2_3a_24_25').text('');
                $('#dli2_3a_cumulative').text('');


                $('#dli3_4_2_baseline').text('');
                $('#dli3_4_2_20_21').text('');
                $('#dli3_4_2_21_22').text('');
                $('#dli3_4_2_22_23').text('');
                $('#dli3_4_2_23_24').text('');
                $('#dli3_4_2_24_25').text('');
                $('#dli3_4_2_cumulative').text('');

                $('#dli3_4_3_baseline').text('');
                $('#dli3_4_3_20_21').text('');
                $('#dli3_4_3_21_22').text('');
                $('#dli3_4_3_22_23').text('');
                $('#dli3_4_3_23_24').text('');
                $('#dli3_4_3_24_25').text('');
                $('#dli3_4_3_cumulative').text('');



                //$('#dli4_5_1_baseline').text('');
                //$('#dli4_5_1_20_21').text('');
                //$('#dli4_5_1_21_22').text('');
                //$('#dli4_5_1_22_23').text('');
                //$('#dli4_5_1_23_24').text('');
                //$('#dli4_5_1_24_25').text('');
                //$('#dli4_5_1_cumulative').text('');

                //$('#dli5_6_1_baseline').text('');
                //$('#dli5_6_1_20_21').text('');
                $('#dli5_6_1_21_22').text('');
                $('#dli5_6_1_22_23').text('');
                $('#dli5_6_1_23_24').text('');
                $('#dli5_6_1_24_25').text('');
                $('#dli5_6_1_cumulative').text('');


                if (response == "NO") {


                    // alert("No Data Available for Framework Matrix");
                    $('#dli1_1_baseline').text('');
                    $('#dli1_1_20_21').text('');
                    $('#dli1_1_21_22').text('');
                    $('#dli1_1_22_23').text('');
                    $('#dli1_1_23_24').text('');
                    $('#dli1_1_24_25').text('');
                    $('#dli1_1_cumulative').text('');
                    $('#dli1_1_2_21_22').text('');
                    $('#dli1_1_2_22_23').text('');
                    $('#dli1_1_2_23_24').text('');
                    $('#dli1_1_2_24_25').text('');
                    $('#dli1_1_2_cumulative').text('');

                    $('#dli2_3_1_baseline').text('');
                    $('#dli2_3_1_20_21').text('');
                    $('#dli2_3_1_21_22').text('');
                    $('#dli2_3_1_22_23').text('');
                    $('#dli2_3_1_23_24').text('');
                    $('#dli2_3_1_24_25').text('');
                    $('#dli2_3_1_cumulative').text('');

                    $('#dli2_3_1a_baseline').text('');
                    $('#dli2_3_1a_20_21').text('');
                    $('#dli2_3_1a_21_22').text('');
                    $('#dli2_3_1a_22_23').text('');
                    $('#dli2_3_1a_23_24').text('');
                    $('#dli2_3_1a_24_25').text('');
                    $('#dli2_3_1a_cumulative').text('');

                    //4
                    $('#dli3_4_baseline').text('');

                    $('#dli3_4_20_21').text('');
                    $('#dli3_4_21_22').text('');
                    $('#dli3_4_22_23').text('');
                    $('#dli3_4_23_24').text('');
                    $('#dli3_4_24_25').text('');
                    $('#dli3_4_cumulative').text('');


                    $('#dli3_4_1_baseline').text('');
                    $('#dli3_4_1_20_21').text('');
                    $('#dli3_4_1_21_22').text('');
                    $('#dli3_4_1_22_23').text('');
                    $('#dli3_4_1_23_24').text('');
                    $('#dli3_4_1_24_25').text('');
                    $('#dli3_4_1_cumulative').text('');

                    $('#dli3_4_2_20_21').text('');
                    $('#dli3_4_2_baseline').text('');

                    $('#dli3_4_2_21_22').text('');
                    $('#dli3_4_2_22_23').text('');
                    $('#dli3_4_2_23_24').text('');
                    $('#dli3_4_2_24_25').text('');
                    $('#dli3_4_2_cumulative').text('');


                    $('#dli3_4_3_baseline').text('');
                    $('#dli3_4_3_20_21').text('');
                    $('#dli3_4_3_21_22').text('');
                    $('#dli3_4_3_22_23').text('');
                    $('#dli3_4_3_23_24').text('');
                    $('#dli3_4_3_24_25').text('');
                    $('#dli3_4_3_cumulative').text('');

                    //$('#dli3_4_4_baseline').text('');
                    ////$('#dli3_4_4_20_21').text('');
                    //$('#dli3_4_4_21_22').text('');
                    //$('#dli3_4_4_22_23').text('');
                    //$('#dli3_4_4_23_24').text('');
                    //$('#dli3_4_4_24_25').text('');
                    //$('#dli3_4_4_cumulative').text('');

                    $('#dli4_5_baseline').text('');
                    $('#dli4_5_20_21').text('');
                    $('#dli4_5_21_22').text('');
                    $('#dli4_5_22_23').text('');
                    $('#dli4_5_23_24').text('');
                    $('#dli4_5_24_25').text('');
                    $('#dli4_5_cumulative').text('');



                    $('#dli5_6_baseline').text('');
                    $('#dli5_6_20_21').text('');
                    $('#dli5_6_21_22').text('');
                    $('#dli5_6_22_23').text('');
                    $('#dli5_6_23_24').text('');
                    $('#dli5_6_24_25').text('');
                    $('#dli5_6_cumulative').text('');


                    //$('#dli2_3_baseline').text('');

                    //$('#dli2_3_21_22').text('');
                    //$('#dli2_3_22_23').text('');
                    //$('#dli2_3_23_24').text('');
                    //$('#dli2_3_24_25').text('');
                    $('#dli2_3_cumulative').text('');

                    $('#dli2_3a_baseline').text('');

                    $('#dli2_3a_20_21').text('');
                    $('#dli2_3a_21_22').text('');
                    $('#dli2_3a_22_23').text('');
                    $('#dli2_3a_23_24').text('');
                    $('#dli2_3a_24_25').text('');
                    $('#dli2_3a_cumulative').text('');


                    $('#dli3_4_2_baseline').text('');
                    $('#dli3_4_2_20_21').text('');

                    $('#dli3_4_2_21_22').text('');
                    $('#dli3_4_2_22_23').text('');
                    $('#dli3_4_2_23_24').text('');
                    $('#dli3_4_2_24_25').text('');
                    $('#dli3_4_2_cumulative').text('');

                    $('#dli3_4_3_baseline').text('');
                    $('#dli3_4_3_20_21').text('');
                    $('#dli3_4_3_21_22').text('');
                    $('#dli3_4_3_22_23').text('');
                    $('#dli3_4_3_23_24').text('');
                    $('#dli3_4_3_24_25').text('');
                    $('#dli3_4_3_cumulative').text('');



                    $('#dli5_6_1_21_22').text('');
                    $('#dli5_6_1_22_23').text('');
                    $('#dli5_6_1_23_24').text('');
                    $('#dli5_6_1_24_25').text('');
                    $('#dli5_6_1_cumulative').text('');

                }
                else if (response.length != 0) {


                    //if (response.dli4_5_1_cumulative != null && response.dli4_5_1_cumulative != "") {
                    //    $('#dli4_5_1_cumulative').text(response.dli4_5_1_cumulative);
                    //}
                    //if (response.dli4_5_1_24_25 != null && response.dli4_5_1_24_25 != "") {
                    //    $('#dli4_5_1_24_25').text(response.dli4_5_1_24_25);
                    //}
                    //if (response.dli4_5_1_23_24 != null && response.dli4_5_1_23_24 != "") {
                    //    $('#dli4_5_1_23_24').text(response.dli4_5_1_23_24);
                    //}
                    //if (response.dli4_5_1_22_23 != null && response.dli4_5_1_22_23 != "") {
                    //    $('#dli4_5_1_22_23').text(response.dli4_5_1_22_23);
                    //}

                    //if (response.dli4_5_1_21_22 != null && response.dli4_5_1_21_22 != "") {
                    //    $('#dli4_5_1_21_22').text(response.dli4_5_1_21_22);
                    //}

                    //if (response.dli4_5_1_20_21 != null && response.dli4_5_1_20_21 != "") {
                    //    $('#dli4_5_1_20_21').text(response.dli4_5_1_20_21);
                    //}

                    //if (response.dli4_5_1_baseline != null && response.dli4_5_1_baseline != "") {
                    //    $('#dli4_5_1_baseline').text(response.dli4_5_1_baseline);
                    //}


                    if (response.dli5_6_1_cumulative != null && response.dli5_6_1_cumulative != "") {
                        $('#dli5_6_1_cumulative').text(response.dli5_6_1_cumulative);
                    }
                    if (response.dli5_6_1_24_25 != null && response.dli5_6_1_24_25 != "") {
                        $('#dli5_6_1_24_25').text(response.dli5_6_1_24_25);
                    }
                    if (response.dli5_6_1_23_24 != null && response.dli5_6_1_23_24 != "") {
                        $('#dli5_6_1_23_24').text(response.dli5_6_1_23_24);
                    }
                    if (response.dli5_6_1_22_23 != null && response.dli5_6_1_22_23 != "") {
                        $('#dli5_6_1_22_23').text(response.dli5_6_1_22_23);
                    }

                    if (response.dli5_6_1_21_22 != null && response.dli5_6_1_21_22 != "") {
                        $('#dli5_6_1_21_22').text(response.dli5_6_1_21_22);
                    }

                    //if (response.dli5_6_1_20_21 != null && response.dli5_6_1_20_21 != "") {
                    //    $('#dli5_6_1_20_21').text(response.dli5_6_1_20_21);
                    //}

                    //if (response.dli5_6_1_baseline != null && response.dli5_6_1_baseline != "") {
                    //    $('#dli5_6_1_baseline').text(response.dli5_6_1_baseline);
                    //}

                    if (response.dli1_1_baseline != null && response.dli1_1_baseline != "") {
                        $('#dli1_1_baseline').text(response.dli1_1_baseline);
                    }
                    if (response.dli1_1_20_21 != null && response.dli1_1_20_21 != "") {
                        $('#dli1_1_20_21').text(response.dli1_1_20_21);
                    }
                    if (response.dli1_1_21_22 != null && response.dli1_1_21_22 != "") {
                        $('#dli1_1_21_22').text(response.dli1_1_21_22);
                    }

                    if (response.dli1_1_22_23 != null && response.dli1_1_22_23 != "") {
                        $('#dli1_1_22_23').text(response.dli1_1_22_23);
                    }

                    if (response.dli1_1_23_24 != null && response.dli1_1_23_24 != "") {
                        $('#dli1_1_23_24').text(response.dli1_1_23_24);
                    }
                    if (response.dli1_1_24_25 != null && response.dli1_1_24_25 != "") {
                        $('#dli1_1_24_25').text(response.dli1_1_24_25);
                    }
                    if (response.dli1_1_cumulative != null && response.dli1_1_cumulative != "") {
                        $('#dli1_1_cumulative').text(response.dli1_1_cumulative);
                    }


                    if (response.dli2_2_baseline != null && response.dli2_2_baseline != "") {
                        $('#dli2_2_baseline').text(response.dli2_2_baseline);
                    }
                    if (response.dli2_2_22_23 != null && response.dli2_2_22_23 != "") {
                        $('#dli2_2_22_23').text(response.dli2_2_22_23);
                    }

                    if (response.dli2_2_23_24 != null && response.dli2_2_23_24 != "") {
                        $('#dli2_2_23_24').text(response.dli2_2_23_24);
                    }
                    if (response.dli2_2_24_25 != null && response.dli2_2_24_25 != "") {
                        $('#dli2_2_24_25').text(response.dli2_2_24_25);
                    }
                    if (response.dli2_2_cumulative != null && response.dli2_2_cumulative != "") {
                        $('#dli2_2_cumulative').text(response.dli2_2_cumulative);
                    }


                    //if (response.dli2_3_baseline != null && response.dli2_3_baseline != "") {
                    //    $('#dli2_3_baseline').text(response.dli2_3_baseline);
                    //}

                    //if (response.dli2_3_21_22 != null && response.dli2_3_21_22 != "") {
                    //    $('#dli2_3_21_22').text(response.dli2_3_21_22);
                    //}
                    //if (response.dli2_3_22_23 != null && response.dli2_3_22_23 != "") {
                    //    $('#dli2_3_22_23').text(response.dli2_3_22_23);
                    //}

                    //if (response.dli2_3_23_24 != null && response.dli2_3_23_24 != "") {
                    //    $('#dli2_3_23_24').text(response.dli2_3_23_24);
                    //}

                    //if (response.dli2_3_24_25 != null && response.dli2_3_24_25 != "") {
                    //    $('#dli2_3_24_25').text(response.dli2_3_24_25);
                    //}

                    if (response.dli2_3_cumulative != null && response.dli2_3_cumulative != "") {
                        $('#dli2_3_cumulative').text(response.dli2_3_cumulative);
                    }



                    if (response.dli2_3a_baseline != null && response.dli2_3a_baseline != "") {
                        $('#dli2_3a_baseline').text(response.dli2_3a_baseline);
                    }
                    if (response.dli2_3a_20_21 != null && response.dli2_3a_20_21 != "") {
                        $('#dli2_3a_20_21').text(response.dli2_3a_20_21);
                    }
                    if (response.dli2_3a_21_22 != null && response.dli2_3a_21_22 != "") {
                        $('#dli2_3a_21_22').text(response.dli2_3a_21_22);
                    }
                    if (response.dli2_3a_22_23 != null && response.dli2_3a_22_23 != "") {
                        $('#dli2_3a_22_23').text(response.dli2_3a_22_23);
                    }
                    if (response.dli2_3a_23_24 != null && response.dli2_3a_23_24 != "") {
                        $('#dli2_3a_23_24').text(response.dli2_3a_23_24);
                    }
                    if (response.dli2_3a_24_25 != null && response.dli2_3a_24_25 != "") {
                        $('#dli2_3a_24_25').text(response.dli2_3a_24_25);
                    }
                    if (response.dli2_3a_cumulative != null && response.dli2_3a_cumulative != "") {
                        $('#dli2_3a_cumulative').text(response.dli2_3a_cumulative);
                    }

                    if (response.dli3_4_2_baseline != null && response.dli3_4_2_baseline != "") {
                        $('#dli3_4_2_baseline').text(response.dli3_4_2_baseline);
                    }


                    if (response.dli3_4_2_20_21 != null && response.dli3_4_2_20_21 != "") {
                        $('#dli3_4_2_20_21').text(response.dli3_4_2_20_21);
                    }
                    if (response.dli3_4_2_21_22 != null && response.dli3_4_2_21_22 != "") {
                        $('#dli3_4_2_21_22').text(response.dli3_4_2_21_22);
                    }


                    if (response.dli3_4_2_22_23 != null && response.dli3_4_2_22_23 != "") {
                        $('#dli3_4_2_22_23').text(response.dli3_4_2_22_23);
                    }

                    if (response.dli3_4_2_23_24 != null && response.dli3_4_2_23_24 != "") {
                        $('#dli3_4_2_23_24').text(response.dli3_4_2_23_24);
                    }

                    if (response.dli3_4_2_24_25 != null && response.dli3_4_2_24_25 != "") {
                        $('#dli3_4_2_24_25').text(response.dli3_4_2_24_25);
                    }
                    if (response.dli3_4_2_cumulative != null && response.dli3_4_2_cumulative != "") {
                        $('#dli3_4_2_cumulative').text(response.dli3_4_2_cumulative);
                    }



                    if (response.dli3_4_3_baseline != null && response.dli3_4_3_baseline != "") {
                        $('#dli3_4_3_baseline').text(response.dli3_4_3_baseline);
                    }


                    if (response.dli3_4_3_20_21 != null && response.dli3_4_3_20_21 != "") {
                        $('#dli3_4_3_20_21').text(response.dli3_4_3_20_21);
                    }
                    if (response.dli3_4_3_21_22 != null && response.dli3_4_3_21_22 != "") {
                        $('#dli3_4_3_21_22').text(response.dli3_4_3_21_22);
                    }
                    if (response.dli3_4_3_22_23 != null && response.dli3_4_3_22_23 != "") {
                        $('#dli3_4_3_22_23').text(response.dli3_4_3_22_23);
                    }

                    if (response.dli3_4_3_23_24 != null && response.dli3_4_3_23_24 != "") {
                        $('#dli3_4_3_23_24').text(response.dli3_4_3_23_24);
                    }

                    if (response.dli3_4_3_24_25 != null && response.dli3_4_3_24_25 != "") {
                        $('#dli3_4_3_24_25').text(response.dli3_4_3_24_25);
                    }

                    if (response.dli3_4_3_cumulative != null && response.dli3_4_3_cumulative != "") {
                        $('#dli3_4_3_cumulative').text(response.dli3_4_3_cumulative);
                    }





                    if (response.dli2_2_1_baseline != null && response.dli2_2_1_baseline != "") {
                        $('#dli2_2_1_baseline').text(response.dli2_2_1_baseline);
                    }
                    //if (response.dli2_2_1_20_21 != null && response.dli2_2_1_20_21 != "") {
                    //    $('#dli2_2_1_20_21').text(response.dli2_2_1_20_21);
                    //}




                    if (response.dli2_3_1_baseline != null && response.dli2_3_1_baseline != "") {
                        $('#dli2_3_1_baseline').text(response.dli2_3_1_baseline);
                    }
                    if (response.dli2_3_1_20_21 != null && response.dli2_3_1_20_21 != "") {
                        $('#dli2_3_1_20_21').text(response.dli2_3_1_20_21);
                    }
                    if (response.dli2_3_1_21_22 != null && response.dli2_3_1_21_22 != "") {
                        $('#dli2_3_1_21_22').text(response.dli2_3_1_21_22);
                    }

                    if (response.dli2_3_1_22_23 != null && response.dli2_3_1_22_23 != "") {
                        $('#dli2_3_1_22_23').text(response.dli2_3_1_22_23);
                    }
                    if (response.dli2_3_1_23_24 != null && response.dli2_3_1_23_24 != "") {
                        $('#dli2_3_1_23_24').text(response.dli2_3_1_23_24);
                    }

                    if (response.dli2_3_1_24_25 != null && response.dli2_3_1_24_25 != "") {
                        $('#dli2_3_1_24_25').text(response.dli2_3_1_24_25);
                    }
                    if (response.dli2_3_1_cumulative != null && response.dli2_3_1_cumulative != "") {
                        $('#dli2_3_1_cumulative').text(response.dli2_3_1_cumulative);
                    }



                    if (response.dli2_3_1a_baseline != null && response.dli2_3_1a_baseline != "") {
                        $('#dli2_3_1a_baseline').text(response.dli2_3_1a_baseline);
                    }

                    if (response.dli2_3_1a_20_21 != null && response.dli2_3_1a_20_21 != "") {
                        $('#dli2_3_1a_20_21').text(response.dli2_3_1a_20_21);
                    }

                    if (response.dli2_3_1a_21_22 != null && response.dli2_3_1a_21_22 != "") {
                        $('#dli2_3_1a_21_22').text(response.dli2_3_1a_21_22);
                    }
                    if (response.dli2_3_1a_22_23 != null && response.dli2_3_1a_22_23 != "") {
                        $('#dli2_3_1a_22_23').text(response.dli2_3_1a_22_23);
                    }


                    if (response.dli2_3_1a_23_24 != null && response.dli2_3_1a_23_24 != "") {
                        $('#dli2_3_1a_23_24').text(response.dli2_3_1a_23_24);
                    }

                    if (response.dli2_3_1a_24_25 != null && response.dli2_3_1a_24_25 != "") {
                        $('#dli2_3_1a_24_25').text(response.dli2_3_1a_24_25);
                    }
                    if (response.dli2_3_1a_cumulative != null && response.dli2_3_1a_cumulative != "") {
                        $('#dli2_3_1a_cumulative').text(response.dli2_3_1a_cumulative);
                    }


                    if (response.dli3_4_baseline != null && response.dli3_4_baseline != "") {
                        $('#dli3_4_baseline').text(response.dli3_4_baseline);
                    }

                    if (response.dli3_4_20_21 != null && response.dli3_4_20_21 != "") {
                        $('#dli3_4_20_21').text(response.dli3_4_20_21);
                    }

                    if (response.dli3_4_21_22 != null && response.dli3_4_21_22 != "") {
                        $('#dli3_4_21_22').text(response.dli3_4_21_22);
                    }
                    if (response.dli3_4_22_23 != null && response.dli3_4_22_23 != "") {
                        $('#dli3_4_22_23').text(response.dli3_4_22_23);
                    }

                    if (response.dli3_4_23_24 != null && response.dli3_4_23_24 != "") {
                        $('#dli3_4_23_24').text(response.dli3_4_23_24);
                    }

                    if (response.dli3_4_24_25 != null && response.dli3_4_24_25 != "") {
                        $('#dli3_4_24_25').text(response.dli3_4_24_25);
                    }
                    if (response.dli3_4_cumulative != null && response.dli3_4_cumulative != "") {
                        $('#dli3_4_cumulative').text(response.dli3_4_cumulative);
                    }

                    if (response.dli3_4_1_baseline != null && response.dli3_4_1_baseline != "") {
                        $('#dli3_4_1_baseline').text(response.dli3_4_1_baseline);
                    }

                    if (response.dli3_4_1_20_21 != null && response.dli3_4_1_20_21 != "") {
                        $('#dli3_4_1_20_21').text(response.dli3_4_1_20_21);
                    }
                    if (response.dli3_4_1_21_22 != null && response.dli3_4_1_21_22 != "") {
                        $('#dli3_4_1_21_22').text(response.dli3_4_1_21_22);
                    }

                    if (response.dli3_4_1_22_23 != null && response.dli3_4_1_22_23 != "") {
                        $('#dli3_4_1_22_23').text(response.dli3_4_1_22_23);
                    }

                    if (response.dli3_4_1_23_24 != null && response.dli3_4_1_23_24 != "") {
                        $('#dli3_4_1_23_24').text(response.dli3_4_1_23_24);
                    }
                    if (response.dli3_4_1_24_25 != null && response.dli3_4_1_24_25 != "") {
                        $('#dli3_4_1_24_25').text(response.dli3_4_1_24_25);
                    }
                    if (response.dli3_4_1_cumulative != null && response.dli3_4_1_cumulative != "") {
                        $('#dli3_4_1_cumulative').text(response.dli3_4_1_cumulative);
                    }


                    if (response.dli3_4_2_baseline != null && response.dli3_4_2_baseline != "") {
                        $('#dli3_4_2_baseline').text(response.dli3_4_2_baseline);
                    }
                    if (response.dli3_4_2_21_22 != null && response.dli3_4_2_21_22 != "") {
                        $('#dli3_4_2_21_22').text(response.dli3_4_2_21_22);
                    }

                    if (response.dli3_4_2_22_23 != null && response.dli3_4_2_22_23 != "") {
                        $('#dli3_4_2_22_23').text(response.dli3_4_2_22_23);
                    }

                    if (response.dli3_4_2_23_24 != null && response.dli3_4_2_23_24 != "") {
                        $('#dli3_4_2_23_24').text(response.dli3_4_2_23_24);
                    }
                    if (response.dli3_4_2_24_25 != null && response.dli3_4_2_24_25 != "") {
                        $('#dli3_4_2_24_25').text(response.dli3_4_2_24_25);
                    }
                    if (response.dli3_4_2_cumulative != null && response.dli3_4_2_cumulative != "") {
                        $('#dli3_4_2_cumulative').text(response.dli3_4_2_cumulative);
                    }


                    if (response.dli3_4_dli3_4_3_baseline3_20_21 != null && response.dli3_4_3_baseline != "") {
                        $('#dli3_4_3_baseline').text(response.dli3_4_3_baseline);
                    }
                    if (response.dli3_4_3_21_22 != null && response.dli3_4_3_21_22 != "") {
                        $('#dli3_4_3_21_22').text(response.dli3_4_3_21_22);
                    }

                    if (response.dli3_4_3_22_23 != null && response.dli3_4_3_22_23 != "") {
                        $('#dli3_4_3_22_23').text(response.dli3_4_3_22_23);
                    }

                    if (response.dli3_4_3_23_24 != null && response.dli3_4_3_23_24 != "") {
                        $('#dli3_4_3_23_24').text(response.dli3_4_3_23_24);
                    }
                    if (response.dli3_4_3_24_25 != null && response.dli3_4_3_24_25 != "") {
                        $('#dli3_4_3_24_25').text(response.dli3_4_3_24_25);
                    }
                    if (response.dli3_4_3_cumulative != null && response.dli3_4_3_cumulative != "") {
                        $('#dli3_4_3_cumulative').text(response.dli3_4_3_cumulative);
                    }



                    //if (response.dli3_4_4_baseline != null && response.dli3_4_4_baseline != "") {
                    //    $('#dli3_4_4_baseline').text(response.dli3_4_4_baseline);
                    //}
                    ////if (response.dli3_4_4_20_21 != null && response.dli3_4_4_20_21 != "") {
                    ////    $('#dli3_4_4_20_21').text(response.dli3_4_4_20_21);
                    ////}
                    //if (response.dli3_4_4_21_22 != null && response.dli3_4_4_21_22 != "") {
                    //    $('#dli3_4_4_21_22').text(response.dli3_4_4_21_22);
                    //}

                    //if (response.dli3_4_4_22_23 != null && response.dli3_4_4_22_23 != "") {
                    //    $('#dli3_4_4_22_23').text(response.dli3_4_4_22_23);
                    //}

                    //if (response.dli3_4_4_23_24 != null && response.dli3_4_4_23_24 != "") {
                    //    $('#dli3_4_4_23_24').text(response.dli3_4_4_23_24);
                    //}
                    //if (response.dli3_4_4_24_25 != null && response.dli3_4_4_24_25 != "") {
                    //    $('#dli3_4_4_24_25').text(response.dli3_4_4_24_25);
                    //}
                    //if (response.dli3_4_4_cumulative != null && response.dli3_4_4_cumulative != "") {
                    //    $('#dli3_4_4_cumulative').text(response.dli3_4_4_cumulative);
                    //}

                    if (response.dli4_5_baseline != null && response.dli4_5_baseline != "") {
                        $('#dli4_5_baseline').text(response.dli4_5_baseline);
                    }
                    if (response.dli4_5_20_21 != null && response.dli4_5_20_21 != "") {
                        $('#dli4_5_20_21').text(response.dli4_5_20_21);
                    }
                    if (response.dli4_5_21_22 != null && response.dli4_5_21_22 != "") {
                        $('#dli4_5_21_22').text(response.dli4_5_21_22);
                    }

                    if (response.dli4_5_22_23 != null && response.dli4_5_22_23 != "") {
                        $('#dli4_5_22_23').text(response.dli4_5_22_23);
                    }

                    if (response.dli4_5_23_24 != null && response.dli4_5_23_24 != "") {
                        $('#dli4_5_23_24').text(response.dli4_5_23_24);
                    }
                    if (response.dli4_5_24_25 != null && response.dli4_5_24_25 != "") {
                        $('#dli4_5_24_25').text(response.dli4_5_24_25);
                    }
                    if (response.dli4_5_cumulative != null && response.dli4_5_cumulative != "") {
                        $('#dli4_5_cumulative').text(response.dli4_5_cumulative);
                    }




                    if (response.dli5_6_baseline != null && response.dli5_6_baseline != "") {
                        $('#dli5_6_baseline').text(response.dli5_6_baseline);
                    }
                    if (response.dli5_6_20_21 != null && response.dli5_6_20_21 != "") {
                        $('#dli5_6_20_21').text(response.dli5_6_20_21);
                    }
                    if (response.dli5_6_21_22 != null && response.dli5_6_21_22 != "") {
                        $('#dli5_6_21_22').text(response.dli5_6_21_22);
                    }

                    if (response.dli5_6_22_23 != null && response.dli5_6_22_23 != "") {
                        $('#dli5_6_22_23').text(response.dli5_6_22_23);
                    }

                    if (response.dli5_6_23_24 != null && response.dli5_6_23_24 != "") {
                        $('#dli5_6_23_24').text(response.dli5_6_23_24);
                    }
                    if (response.dli5_6_24_25 != null && response.dli5_6_24_25 != "") {
                        $('#dli5_6_24_25').text(response.dli5_6_24_25);
                    }
                    if (response.dli5_6_cumulative != null && response.dli5_6_cumulative != "") {
                        $('#dli5_6_cumulative').text(response.dli5_6_cumulative);
                    }


                }

            }
        });
    }
}

function Dli_1_Details() {
    var state = $('#state').val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_1_Details',
        data: { 'state': state },
        dataType: 'JSON',
        success: function (response) {

            $('#dli1_1_1_baseline').text("");
            $('#dli1_1_1_20_21').text("");
            $('#dli1_1_2_baseline').text("");
            $('#dli1_1_2_20_21').text("");
            $('#dli3_4_4_20_21').text("");

            $('#dli1_1_1_baseline').text("");
            $('#dli1_1_1_20_21').text("");
            $('#dli1_1_1_21_22').text("");
            $('#dli1_1_1_22_23').text("");
            $('#dli1_1_1_23_24').text("");
            $('#dli1_1_1_24_25').text("");
            $('#dli1_1_1_cumulative').text("");

            $('#dli1_1_2_baseline').text('');
            $('#dli1_1_2_20_21').text('');
            $('#dli1_1_2_21_22').text("");
            $('#dli1_1_2_22_23').text("");
            $('#dli1_1_2_23_24').text("");
            $('#dli1_1_2_24_25').text("");
            $('#dli1_1_2_cumulative').text("");

            $('#dli3_4_4_baseline').text('');
            $('#dli3_4_4_20_21').text('');
            $('#dli3_4_4_21_22').text('');
            $('#dli3_4_4_22_23').text('');
            $('#dli3_4_4_23_24').text('');
            $('#dli3_4_4_24_25').text('');
            $('#dli3_4_4_cumulative').text('');
            if (response == "NO") {
                $('#dli1_1_1_baseline').text("");
                $('#dli1_1_1_20_21').text("");
                $('#dli1_1_1_21_22').text("");
                $('#dli1_1_1_22_23').text("");
                $('#dli1_1_1_23_24').text("");
                $('#dli1_1_1_24_25').text("");
                $('#dli1_1_1_cumulative').text("");

                $('#dli1_1_2_baseline').text('');
                $('#dli1_1_2_20_21').text('');
                $('#dli1_1_2_21_22').text("");
                $('#dli1_1_2_22_23').text("");
                $('#dli1_1_2_23_24').text("");
                $('#dli1_1_2_24_25').text("");
                $('#dli1_1_2_cumulative').text("");


                $('#dli3_4_4_baseline').text('');
                $('#dli3_4_4_20_21').text('');
                $('#dli3_4_4_21_22').text('');
                $('#dli3_4_4_22_23').text('');
                $('#dli3_4_4_23_24').text('');
                $('#dli3_4_4_24_25').text('');
                $('#dli3_4_4_cumulative').text('');
            }
            else {

                if (response.blockwise_i_baseline != null && response.blockwise_i_baseline != "") {
                    $('#dli1_1_1_baseline').text(response.blockwise_i_baseline);
                }

                if (response.blockwise_i_20_21 != null && response.blockwise_i_20_21 != "") {
                    $('#dli1_1_1_20_21').text(response.blockwise_i_20_21);
                }
                if (response.blockwise_i_21_22 != null && response.blockwise_i_21_22 != "") {
                    $('#dli1_1_1_21_22').text(response.blockwise_i_21_22);
                }
                if (response.blockwise_i_22_23 != null && response.blockwise_i_22_23 != "") {
                    $('#dli1_1_1_22_23').text(response.blockwise_i_22_23);
                }
                if (response.blockwise_i_23_24 != null && response.blockwise_i_23_24 != "") {
                    $('#dli1_1_1_23_24').text(response.blockwise_i_23_24);
                }
                if (response.blockwise_i_24_25 != null && response.blockwise_i_24_25 != "") {
                    $('#dli1_1_1_24_25').text(response.blockwise_i_24_25);
                }
                if (response.blockwise_i_cumulative != null && response.blockwise_i_cumulative != "") {
                    $('#dli1_1_1_cumulative').text(response.blockwise_i_cumulative);
                }

                if (response.statewise_i_baseline != null && response.statewise_i_baseline != "") {
                    $('#dli1_1_2_baseline').text(response.statewise_i_baseline);
                }
                if (response.statewise_i_20_21 != null && response.statewise_i_20_21 != "") {
                    $('#dli1_1_2_20_21').text(response.statewise_i_20_21);
                }
                if (response.statewise_i_21_22 != null && response.statewise_i_21_22 != "") {
                    $('#dli1_1_2_21_22').text(response.statewise_i_21_22);
                }
                if (response.statewise_i_22_23 != null && response.statewise_i_22_23 != "") {
                    $('#dli1_1_2_22_23').text(response.statewise_i_22_23);
                }
                if (response.statewise_i_23_24 != null && response.statewise_i_23_24 != "") {
                    $('#dli1_1_2_23_24').text(response.statewise_i_23_24);
                }
                if (response.statewise_i_24_25 != null && response.statewise_i_24_25 != "") {
                    $('#dli1_1_2_24_25').text(response.statewise_i_24_25);
                }
                if (response.statewise_i_cumulative != null && response.statewise_i_cumulative != "") {
                    $('#dli1_1_2_cumulative').text(response.statewise_i_cumulative);
                }

                if (response.waterlevel_vii_baseline != null && response.waterlevel_vii_baseline != "") {
                    $('#dli3_4_4_baseline').text(response.waterlevel_vii_baseline);
                }
                if (response.waterlevel_vii_20_21 != null && response.waterlevel_vii_20_21 != "") {
                    $('#dli3_4_4_20_21').text(response.waterlevel_vii_20_21);
                }
                if (response.waterlevel_vii_21_22 != null && response.waterlevel_vii_21_22 != "") {
                    $('#dli3_4_4_21_22').text(response.waterlevel_vii_21_22);
                }
                if (response.waterlevel_vii_22_23 != null && response.waterlevel_vii_22_23 != "") {
                    $('#dli3_4_4_22_23').text(response.waterlevel_vii_22_23);
                }
                if (response.waterlevel_vii_23_24 != null && response.waterlevel_vii_23_24 != "") {
                    $('#dli3_4_4_23_24').text(response.waterlevel_vii_23_24);
                }
                if (response.waterlevel_vii_24_25 != null && response.waterlevel_vii_24_25 != "") {
                    $('#dli3_4_4_24_25').text(response.waterlevel_vii_24_25);
                }
                if (response.waterlevel_vii_cumulative != null && response.waterlevel_vii_cumulative != "") {
                    $('#dli3_4_4_cumulative').text(response.waterlevel_vii_cumulative);
                }



            }

        }
    });
}


function Dli_2_Details() {
    var state = $('#state').val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_2_Details',
        data: { 'state': state },
        dataType: 'JSON',
        success: function (response) {

            $('#dli2_2_1_baseline').text('');
            $('#dli2_2_1_20_21').text('');
            $('#dli2_2_1_21_22').text('');
            $('#dli2_2_1_22_23').text('');
            $('#dli2_2_1_23_24').text('');
            $('#dli2_2_1_24_25').text('');
            $('#dli2_2_1_cumulative').text('');


            $('#dli2_2_baseline').text('');
            $('#dli2_2_20_21').text('');
            $('#dli2_2_21_22').text('');
            $('#dli2_2_22_23').text('');
            $('#dli2_2_23_24').text('');
            $('#dli2_2_24_25').text('');
            $('#dli2_2_cumulative').text('');

            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != "NO") {


                if (response.waterbudgets_i_baseline != null && response.waterbudgets_i_baseline != "") {
                    $('#dli2_2_1_baseline').text(response.waterbudgets_i_baseline);
                }

                if (response.waterbudgets_i_20_21 != null && response.waterbudgets_i_20_21 != "") {
                    $('#dli2_2_1_20_21').text(response.waterbudgets_i_20_21);
                }
                if (response.waterbudgets_i_21_22 != null && response.waterbudgets_i_21_22 != "") {
                    $('#dli2_2_1_21_22').text(response.waterbudgets_i_21_22);
                }
                if (response.waterbudgets_i_22_23 != null && response.waterbudgets_i_22_23 != "") {
                    $('#dli2_2_1_22_23').text(response.waterbudgets_i_22_23);
                }
                if (response.waterbudgets_i_23_24 != null && response.waterbudgets_i_23_24 != "") {
                    $('#dli2_2_1_23_24').text(response.waterbudgets_i_23_24);
                }
                if (response.waterbudgets_i_24_25 != null && response.waterbudgets_i_24_25 != "") {
                    $('#dli2_2_1_24_25').text(response.waterbudgets_i_24_25);
                }

                if (response.waterbudgets_i_cumulative != null && response.waterbudgets_i_cumulative != "") {
                    $('#dli2_2_1_cumulative').text(response.waterbudgets_i_cumulative);
                }






                if (response.wsp_i_baseline != null && response.wsp_i_baseline != "") {
                    $('#dli2_2_baseline').text(response.wsp_i_baseline);
                }

                if (response.wsp_i_20_21 != null && response.wsp_i_20_21 != "") {
                    $('#dli2_2_20_21').text(response.wsp_i_20_21);
                }
                if (response.wsp_i_21_22 != null && response.wsp_i_21_22 != "") {
                    $('#dli2_2_21_22').text(response.wsp_i_21_22);
                }
                if (response.wsp_i_22_23 != null && response.wsp_i_22_23 != "") {
                    $('#dli2_2_22_23').text(response.wsp_i_22_23);
                }
                if (response.wsp_i_23_24 != null && response.wsp_i_23_24 != "") {
                    $('#dli2_2_23_24').text(response.wsp_i_23_24);
                }
                if (response.wsp_i_24_25 != null && response.wsp_i_24_25 != "") {
                    $('#dli2_2_24_25').text(response.wsp_i_24_25);
                }

                if (response.wsp_i_cumulative != null && response.wsp_i_cumulative != "") {
                    $('#dli2_2_cumulative').text(response.wsp_i_cumulative);
                }

            }
            if (response == "NO") {

                $('#dli2_2_1_baseline').text('');
                $('#dli2_2_1_20_21').text('');
                $('#dli2_2_1_21_22').text('');
                $('#dli2_2_1_22_23').text('');
                $('#dli2_2_1_23_24').text('');
                $('#dli2_2_1_24_25').text('');
                $('#dli2_2_1_cumulative').text('');

                $('#dli2_2_baseline').text('');
                $('#dli2_2_20_21').text('');
                $('#dli2_2_21_22').text('');
                $('#dli2_2_22_23').text('');
                $('#dli2_2_23_24').text('');
                $('#dli2_2_24_25').text('');
                $('#dli2_2_cumulative').text('');

            }

        }
    });
}



function Total_Population_of_the_GP_Info() {
    var state = $('#state').val();

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Total_Population_of_the_GP_Info',
        data: { 'state': state },
        dataType: 'JSON',
        success: function (data) {

            $('#dli2_3_baseline').text('');
            $('#dli2_3_20_21').text('');
            $('#dli2_3_21_22').text('');
            $('#dli2_3_22_23').text('');
            $('#dli2_3_23_24').text('');
            //   $('#dli2_3_cumulative').text('');
            $('#dli2_3_24_25').text('');

            //  $('#dli2_3_1_20_21').text('');


            var total_basic_data = 0;
            var total_pop_20_21 = 0;
            var total_pop_21_22 = 0;
            var total_pop_22_23 = 0;
            var total_pop_23_24 = 0;
            var total_pop_24_25 = 0;
            // var achivement_2020_to_2025 = 0;


            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].basic_data != null && data[i].basic_data != "") {
                        total_basic_data += parseFloat(data[i].basic_data);

                        $('#dli2_3_baseline').text(total_basic_data);

                    }
                    if (data[i].pop_20_21 != null && data[i].pop_20_21 != "") {
                        total_pop_20_21 += parseFloat(data[i].pop_20_21);

                        $('#dli2_3_20_21').text(total_pop_20_21);
                    }
                    if (data[i].pop_21_22 != null && data[i].pop_21_22 != "") {
                        total_pop_21_22 += parseFloat(data[i].pop_21_22);

                        $('#dli2_3_21_22').text(total_pop_21_22);
                    }

                    if (data[i].pop_22_23 != null && data[i].pop_22_23 != "") {
                        total_pop_22_23 += parseFloat(data[i].pop_22_23);

                        $('#dli2_3_22_23').text(total_pop_22_23);
                    }
                    if (data[i].pop_23_24 != null && data[i].pop_23_24 != "") {
                        total_pop_23_24 += parseFloat(data[i].pop_23_24);

                        $('#dli2_3_23_24').text(total_pop_23_24);
                    }
                    if (data[i].pop_24_25 != null && data[i].pop_24_25 != "") {
                        total_pop_24_25 += parseFloat(data[i].pop_24_25);

                        $('#dli2_3_24_25').text(total_pop_24_25);
                    }
                    // $('#dli2_3_cumulative').text(achivement_2020_to_2025);
                }


            }
            else {
                $('#dli2_3_baseline').text('');
                $('#dli2_3_20_21').text('');
                $('#dli2_3_21_22').text('');
                $('#dli2_3_22_23').text('');
                $('#dli2_3_23_24').text('');
                $('#dli2_3_24_25').text('');
                // $('#dli2_3_cumulative').text('');
                //  $('#dli2_3_1_20_21').text('');
            }
            //  Indicator_3_achivement_2020_to_2025_function();
            // $('#dli2_3_1_20_21').text(total_basic_data.toFixed(2));
        }
    });

}
//var Indicator_3achivement_2020_to_2025 = 0;
//function Indicator_3_achivement_2020_to_2025_function() {

//    var dli2_3_20_21_ac = $('#dli2_3_20_21').text();
//    var dli2_3_21_22_ac = $('#dli2_3_21_22').text();
//    var dli2_3_22_23_ac = $('#dli2_3_22_23').text();
//    var dli2_3_23_24_ac = $('#dli2_3_23_24').text();
//    var dli2_3_24_25_ac = $('#dli2_3_24_25').text();

//    Indicator_3achivement_2020_to_2025 = parseFloat(dli2_3_20_21_ac) + parseFloat(dli2_3_21_22_ac) + parseFloat(dli2_3_22_23_ac) + parseFloat(dli2_3_23_24_ac) + parseFloat(dli2_3_24_25_ac);


//    $('#dli2_3_cumulative').text(Indicator_3achivement_2020_to_2025);


//}




//function Socio_economic_demographic_profile_Info() {
//    var state = $('#state').val();
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Project/Socio_economic_demographic_profile_Info',
//        data: { 'state': state },
//        dataType: 'JSON',
//        success: function (data) {


//            $('#dli2_3a_baseline').text('');
//            $('#dli2_3a_20_21').text('');
//            $('#dli2_3a_21_22').text('');
//            $('#dli2_3a_22_23').text('');
//            $('#dli2_3a_23_24').text('');
//            $('#dli2_3a_24_25').text('');
//            $('#dli2_3a_cumulative').text('');
//            //   $('#dli2_3_1a_20_21').text('');
//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";

//            }
//            var Total = 0;
//            var Femal_sum_baseline_data = 0;
//            var Femal_sum_female_pop_20_21 = 0;
//            var Femal_sum_female_pop_21_22 = 0;
//            var Femal_sum_female_pop_22_23 = 0;
//            var Femal_sum_female_pop_23_24 = 0;
//            var Femal_sum_female_pop_24_25 = 0;
//            // var Femal_sum_female_cumulative = 0;

//            if (data.length != 0) {

//                Total = data.length;
//                for (var i = 0; i < data.length; i++) {

//                    if (data[i].female_basic_data != null && data[i].female_basic_data != "") {
//                        Femal_sum_baseline_data += parseFloat(data[i].female_basic_data);
//                    }
//                    if (data[i].female_pop_20_21 != null && data[i].female_pop_20_21 != "") {
//                        Femal_sum_female_pop_20_21 += parseFloat(data[i].female_pop_20_21);
//                    }
//                    if (data[i].female_pop_21_22 != null && data[i].female_pop_21_22 != "") {
//                        Femal_sum_female_pop_21_22 += parseFloat(data[i].female_pop_21_22);
//                    }
//                    if (data[i].female_pop_22_23 != null && data[i].female_pop_22_23 != "") {
//                        Femal_sum_female_pop_22_23 += parseFloat(data[i].female_pop_22_23);
//                    }
//                    if (data[i].female_pop_23_24 != null && data[i].female_pop_23_24 != "") {
//                        Femal_sum_female_pop_23_24 += parseFloat(data[i].female_pop_23_24);
//                    }
//                    if (data[i].female_pop_24_25 != null && data[i].female_pop_24_25 != "") {
//                        Femal_sum_female_pop_24_25 += parseFloat(data[i].female_pop_24_25);
//                    }
//                    if (data[i].female_pop_24_25 != null && data[i].female_pop_24_25 != "") {
//                        Femal_sum_female_pop_24_25 += parseFloat(data[i].female_pop_24_25);
//                    }



//                }


//            }
//            else {

//                $('#dli2_3a_baseline').text('');
//                $('#dli2_3a_20_21').text('');
//                $('#dli2_3a_21_22').text('');
//                $('#dli2_3a_22_23').text('');
//                $('#dli2_3a_24_25').text('');
//                $('#dli2_3a_24_25').text('');
//                $('#dli2_3a_cumulative').text('');

//            }
//            if (Total != 0) {
//                if (Femal_sum_baseline_data != 0) {
//                    var Per = (Total / Femal_sum_baseline_data) * 100;
//                    $('#dli2_3a_baseline').text(Per.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_baseline').text("0");
//                }
//                if (Femal_sum_female_pop_20_21 != 0) {
//                    var Per_20_21 = (Total / Femal_sum_female_pop_20_21) * 100;

//                    $('#dli2_3a_20_21').text(Per_20_21.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_20_21').text("0");
//                }


//                if (Femal_sum_female_pop_21_22 != 0) {
//                    var Per_21_22 = (Total / Femal_sum_female_pop_21_22) * 100;
//                    $('#dli2_3a_21_22').text(Per_21_22.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_21_22').text("0");
//                }
//                if (Femal_sum_female_pop_22_23 != 0) {
//                    var Per_22_23 = (Total / Femal_sum_female_pop_22_23) * 100;
//                    $('#dli2_3a_22_23').text(Per_22_23.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_22_23').text("0");
//                }
//                if (Femal_sum_female_pop_23_24 != 0) {
//                    var Per_23_24 = (Total / Femal_sum_female_pop_23_24) * 100;
//                    $('#dli2_3a_23_24').text(Per_23_24.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_23_24').text("0");
//                }
//                if (Femal_sum_female_pop_24_25 != 0) {
//                    var Per_24_25 = (Total / Femal_sum_female_pop_24_25) * 100;
//                    $('#dli2_3a_24_25').text(Per_24_25.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_24_25').text("0");
//                }

//                Indicator_3a_achivement_2020_to_2025_function();

//            } else {
//                $('#dli2_3a_baseline').text("0");
//                $('#dli2_3a_20_21').text("0");
//                $('#dli2_3a_21_22').text("0");
//                $('#dli2_3a_22_23').text("0");
//                $('#dli2_3a_23_24').text("0");
//                $('#dli2_3a_24_25').text("0");
//                $('#dli2_3a_cumulative').text("0");
//            }
//        }
//    });

//}
//var Indicator_3a_achivement_2020_to_2025 = 0;
//function Indicator_3a_achivement_2020_to_2025_function() {
//    var dli2_3a_20_21_Ac = $('#dli2_3a_20_21').text();
//    var dli2_3a_21_22_Ac = $('#dli2_3a_21_22').text();
//    var dli2_3a_22_23_Ac = $('#dli2_3a_22_23').text();
//    var dli2_3a_23_24_Ac = $('#dli2_3a_23_24').text();
//    var dli2_3a_24_25_Ac = $('#dli2_3a_24_25').text();
//    Indicator_3a_achivement_2020_to_2025 = parseFloat(dli2_3a_20_21_Ac) + parseFloat(dli2_3a_21_22_Ac) + parseFloat(dli2_3a_22_23_Ac) + parseFloat(dli2_3a_23_24_Ac) + parseFloat(dli2_3a_24_25_Ac);
//    $('#dli2_3a_cumulative').text(Indicator_3a_achivement_2020_to_2025.toFixed(2));

//}
//function vwms_Info() {
//    var state = $('#state').val();
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Project/VWSC_Info',
//        data: { 'state': state },
//        dataType: 'JSON',
//        success: function (data) {

//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";

//            }
//            $('#dli3_4_3_20_21').text("");
//            $('#dli3_4_2_20_21').text("");
//            $('#dli3_4_1_20_21').text("");



//            var female = 0;
//            var Peoples_Count = 0;
//            if (data.length != 0) {

//                $('#dli3_4_1_20_21').text(data.length);

//                for (var i = 0; i < data.length; i++) {
//                    if (data[i].gender == "Female") {
//                        female += 1;
//                        if (data[i].designation != "0") {
//                            if (data[i].designation == "Chairperson") {
//                                Peoples_Count += 1;
//                            } else if (data[i].designation == "Vice-Chairperson") {
//                                Peoples_Count += 1;
//                            }
//                            else if (data[i].designation == "President") {
//                                Peoples_Count += 1;
//                            }
//                            else if (data[i].designation == "Vice President") {
//                                Peoples_Count += 1;
//                            }
//                            else if (data[i].designation == "Secretary") {
//                                Peoples_Count += 1;
//                            }
//                            else if (data[i].designation == "treasurer") {
//                                Peoples_Count += 1;
//                            }
//                        }
//                    }
//                }
//            }
//            else {
//                $('#dli3_4_1_20_21').text('0');
//            }
//            $('#dli3_4_2_20_21').text(female);
//            $('#dli3_4_3_20_21').text(Peoples_Count);
//        }
//    });
//}


function Dli_4_Details() {


    var state = $('#state').val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_4_Details',
        data: { 'state': state },
        dataType: 'JSON',
        success: function (response) {

            $('#dli4_5_1_baseline').text('');
            $('#dli4_5_1_20_21').text('');
            $('#dli4_5_1_21_22').text('');
            $('#dli4_5_1_22_23').text('');
            $('#dli4_5_1_23_24').text('');
            $('#dli4_5_1_24_25').text('');

            $('#dli4_5_1_cumulative').text('');

            var dli4_5_1_baseline = 0;
            var dli4_5_1_20_21 = 0;
            var dli4_5_1_21_22 = 0;
            var dli4_5_1_22_23 = 0;
            var dli4_5_1_23_24 = 0;
            var dli4_5_1_24_25 = 0;
            var irrigation_i_cumulative_ = 0;
            if (response == "SessionTimeOut") {
                  window.location = "/Home/LogOut";
            }
            else if (response != "NO") {

                if (response.irrigation_i_baseline != "" && response.irrigation_i_baseline != null) {
                    dli4_5_1_baseline += parseFloat(response.irrigation_i_baseline);
                }
                if (response.irrigation_i_20_21 != "" && response.irrigation_i_20_21 != null) {
                    dli4_5_1_20_21 += parseFloat(response.irrigation_i_20_21);
                }
                if (response.irrigation_i_21_22 != "" && response.irrigation_i_21_22 != null) {
                    dli4_5_1_21_22 += parseFloat(response.irrigation_i_21_22);
                }
                if (response.irrigation_i_22_23 != "" && response.irrigation_i_22_23 != null) {
                    dli4_5_1_22_23 += parseFloat(response.irrigation_i_22_23);
                }
                if (response.irrigation_i_23_24 != "" && response.irrigation_i_23_24 != null) {
                    dli4_5_1_23_24 += parseFloat(response.irrigation_i_23_24);
                }
                if (response.irrigation_i_24_25 != "" && response.irrigation_i_24_25 != null) {
                    dli4_5_1_24_25 += parseFloat(response.irrigation_i_24_25);
                }
                if (response.irrigation_i_cumulative != "" && response.irrigation_i_cumulative != null) {
                    irrigation_i_cumulative_ += parseFloat(response.irrigation_i_cumulative);
                }


                if (response.irrigation_ii_baseline != "" && response.irrigation_ii_baseline != null) {
                    dli4_5_1_baseline += parseFloat(response.irrigation_ii_baseline);
                }
                if (response.irrigation_ii_20_21 != "" && response.irrigation_ii_20_21 != null) {
                    dli4_5_1_20_21 += parseFloat(response.irrigation_ii_20_21);
                }
                if (response.irrigation_ii_21_22 != "" && response.irrigation_ii_21_22 != null) {
                    dli4_5_1_21_22 += parseFloat(response.irrigation_ii_21_22);
                }
                if (response.irrigation_ii_22_23 != "" && response.irrigation_ii_22_23 != null) {
                    dli4_5_1_22_23 += parseFloat(response.irrigation_ii_22_23);
                }
                if (response.irrigation_ii_23_24 != "" && response.irrigation_ii_23_24 != null) {
                    dli4_5_1_23_24 += parseFloat(response.irrigation_ii_23_24);
                }
                if (response.irrigation_ii_24_25 != "" && response.irrigation_ii_24_25 != null) {
                    dli4_5_1_24_25 += parseFloat(response.irrigation_ii_24_25);
                }
                if (response.irrigation_ii_cumulative != "" && response.irrigation_ii_cumulative != null) {
                    irrigation_i_cumulative_ += parseFloat(response.irrigation_ii_cumulative);
                }

            }
            if (response == "NO") {

                $('#dli4_5_1_baseline').text('');
                $('#dli4_5_1_20_21').text('');
                $('#dli4_5_1_21_22').text('');
                $('#dli4_5_1_22_23').text('');
                $('#dli4_5_1_23_24').text('');
                $('#dli4_5_1_24_25').text('');
                $('#dli4_5_1_cumulative').text('');

            }



            $('#dli4_5_1_baseline').text(dli4_5_1_baseline);
            $('#dli4_5_1_20_21').text(dli4_5_1_20_21);
            $('#dli4_5_1_21_22').text(dli4_5_1_21_22);
            $('#dli4_5_1_22_23').text(dli4_5_1_22_23);
            $('#dli4_5_1_23_24').text(dli4_5_1_23_24);
            $('#dli4_5_1_24_25').text(dli4_5_1_24_25);
            $('#dli4_5_1_cumulative').text(irrigation_i_cumulative_);
        }
    });
}

function Dli_5_Details() {
    var state = $('#state').val();
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_5_Details',
        data: { 'state': state },
        dataType: 'JSON',
        success: function (response) {


            $('#dli5_6_1_baseline').text('');
            $('#dli5_6_1_20_21').text('');
            $('#dli5_6_1_21_22').text('');
            $('#dli5_6_1_22_23').text('');
            $('#dli5_6_1_23_24').text('');
            $('#dli5_6_1_24_25').text('');
            $('#dli5_6_1_cumulative').text('');

            //if (response == "SessionTimeOut") {
            //      window.location = "/Home/LogOut";
            //}
            if (response != "NO") {

                if (response.blockwise_iii_baseline != null && response.blockwise_iii_baseline != "") {
                    $('#dli5_6_1_baseline').text(response.blockwise_iii_baseline);
                }

                if (response.blockwise_iii_20_21 != null && response.blockwise_iii_20_21 != "") {
                    $('#dli5_6_1_20_21').text(response.blockwise_iii_20_21);
                }
                if (response.blockwise_iii_21_22 != null && response.blockwise_iii_21_22 != "") {
                    $('#dli5_6_1_21_22').text(response.blockwise_iii_21_22);
                }
                if (response.blockwise_iii_22_23 != null && response.blockwise_iii_22_23 != "") {
                    $('#dli5_6_1_22_23').text(response.blockwise_iii_22_23);
                }
                if (response.blockwise_iii_23_24 != null && response.blockwise_iii_23_24 != "") {
                    $('#dli5_6_1_23_24').text(response.blockwise_iii_23_24);
                }
                if (response.blockwise_iii_24_25 != null && response.blockwise_iii_24_25 != "") {
                    $('#dli5_6_1_24_25').text(response.blockwise_iii_24_25);
                }

                if (response.blockwise_iii_cumulative != null && response.blockwise_iii_cumulative != "") {
                    $('#dli5_6_1_cumulative').text(response.blockwise_iii_cumulative);
                }


            }
            if (response == "NO") {

                $('#dli5_6_1_baseline').text('');
                $('#dli5_6_1_20_21').text('');
                $('#dli5_6_1_21_22').text('');
                $('#dli5_6_1_22_23').text('');
                $('#dli5_6_1_23_24').text('');
                $('#dli5_6_1_24_25').text('');
                $('#dli5_6_1_cumulative').text('');

            }

        }
    });
}

//function baselinedata_geting() {

//    var state = $('#state').val();
//    var res = state.toUpperCase();
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Dashboard/baselinedata_geting1',
//        data: { 'StateName': res },
//        dataType: 'JSON',
//        success: function (data) {

//            if (data == "Logout") {
//                  window.location = "/Home/LogOut";

//            }
//            $('#dli3_4_20_21').text('');
//            $('#dli3_4_baseline').text("");


//            if (data.length != 0) {
//                $('#dli3_4_baseline').text(data.length);
//                $('#dli3_4_20_21').text(data.length);
//            } else {
//                $('#dli3_4_baseline').text('0');
//                $('#dli3_4_20_21').text('0');
//            }

//        }
//    });
//}

