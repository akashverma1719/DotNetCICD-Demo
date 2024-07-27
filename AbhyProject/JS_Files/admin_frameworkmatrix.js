


function admin_framematrix() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/admin_framematrix',
        data: "{'state': '" + Session_StateName + "'}",
        dataType: 'JSON',
        success: function (response) {
            $('.loader').hide();

            $('#dli1_1_baseline').val('');
            $('#dli1_1_20_21').val('');
            $('#dli1_1_21_22').val('');
            $('#dli1_1_22_23').val('');
            $('#dli1_1_23_24').val('');
            $('#dli1_1_24_25').val('');
            $('#dli1_1_cumulative').val('');
            $('#dli1_1_2_21_22').val('');
            $('#dli1_1_2_22_23').val('');
            $('#dli1_1_2_23_24').val('');
            $('#dli1_1_2_24_25').val('');
            $('#dli1_1_2_cumulative').val('');



            //3.1
            $('#dli2_3_1_baseline').val('');
            $('#dli2_3_1_20_21').val('');
            $('#dli2_3_1_21_22').val('');
            $('#dli2_3_1_22_23').val('');
            $('#dli2_3_1_23_24').val('');
            $('#dli2_3_1_24_25').val('');
            $('#dli2_3_1_cumulative').val('');

            //3.1a

            $('#dli2_3_1a_baseline').val('');
            $('#dli2_3_1a_20_21').val('');
            $('#dli2_3_1a_21_22').val('');
            $('#dli2_3_1a_22_23').val('');
            $('#dli2_3_1a_23_24').val('');
            $('#dli2_3_1a_24_25').val('');
            $('#dli2_3_1a_cumulative').val('');

            //4
            $('#dli3_4_baseline').val('')
            $('#dli3_4_20_21').val('');
            $('#dli3_4_21_22').val('');
            $('#dli3_4_22_23').val('');
            $('#dli3_4_23_24').val('');
            $('#dli3_4_24_25').val('');
            $('#dli3_4_cumulative').val('');

            //4.1
            $('#dli3_4_1_baseline').val('');
            $('#dli3_4_1_20_21').val('');
            $('#dli3_4_1_21_22').val('');
            $('#dli3_4_1_22_23').val('');
            $('#dli3_4_1_23_24').val('');
            $('#dli3_4_1_24_25').val('');
            $('#dli3_4_1_cumulative').val('');


            $('#dli3_4_2_baseline').val('');
            $('#dli3_4_2_20_21').val('');
            $('#dli3_4_2_21_22').val('');
            $('#dli3_4_2_22_23').val('');
            $('#dli3_4_2_23_24').val('');
            $('#dli3_4_2_24_25').val('');
            $('#dli3_4_2_cumulative').val('');

            $('#dli3_4_3_baseline').val('');
            $('#dli3_4_3_20_21').val('');
            $('#dli3_4_3_21_22').val('');
            $('#dli3_4_3_22_23').val('');
            $('#dli3_4_3_23_24').val('');
            $('#dli3_4_3_24_25').val('');
            $('#dli3_4_3_cumulative').val('');

            //$('#dli3_4_4_baseline').val('');
            ////$('#dli3_4_4_20_21').val('');
            //$('#dli3_4_4_21_22').val('');
            //$('#dli3_4_4_22_23').val('');
            //$('#dli3_4_4_23_24').val('');
            //$('#dli3_4_4_24_25').val('');
            //$('#dli3_4_4_cumulative').val('');

            $('#dli4_5_baseline').val('');
            $('#dli4_5_20_21').val('');
            $('#dli4_5_21_22').val('');
            $('#dli4_5_22_23').val('');
            $('#dli4_5_23_24').val('');
            $('#dli4_5_24_25').val('');
            $('#dli4_5_cumulative').val('');



            $('#dli5_6_baseline').val('');
            $('#dli5_6_20_21').val('');
            $('#dli5_6_21_22').val('');
            $('#dli5_6_22_23').val('');
            $('#dli5_6_23_24').val('');
            $('#dli5_6_24_25').val('');
            $('#dli5_6_cumulative').val('');





            //$('#dli2_3_baseline').val('');

            //$('#dli2_3_21_22').val('');
            //$('#dli2_3_22_23').val('');
            //$('#dli2_3_23_24').val('');
            //$('#dli2_3_24_25').val('');
            $('#dli2_3_cumulative').val('');

            $('#dli2_3a_baseline').val('');

            $('#dli2_3a_20_21').val('');
            $('#dli2_3a_21_22').val('');
            $('#dli2_3a_22_23').val('');
            $('#dli2_3a_23_24').val('');
            $('#dli2_3a_24_25').val('');
            $('#dli2_3a_cumulative').val('');


            $('#dli3_4_2_baseline').val('');
            $('#dli3_4_2_20_21').val('');
            $('#dli3_4_2_21_22').val('');
            $('#dli3_4_2_22_23').val('');
            $('#dli3_4_2_23_24').val('');
            $('#dli3_4_2_24_25').val('');
            $('#dli3_4_2_cumulative').val('');

            $('#dli3_4_3_baseline').val('');
            $('#dli3_4_3_20_21').val('');
            $('#dli3_4_3_21_22').val('');
            $('#dli3_4_3_22_23').val('');
            $('#dli3_4_3_23_24').val('');
            $('#dli3_4_3_24_25').val('');
            $('#dli3_4_3_cumulative').val('');



            //$('#dli4_5_1_baseline').val('');
            //$('#dli4_5_1_20_21').val('');
            //$('#dli4_5_1_21_22').val('');
            //$('#dli4_5_1_22_23').val('');
            //$('#dli4_5_1_23_24').val('');
            //$('#dli4_5_1_24_25').val('');
            //$('#dli4_5_1_cumulative').val('');

            //$('#dli5_6_1_baseline').val('');
            //$('#dli5_6_1_20_21').val('');
            $('#dli5_6_1_21_22').val('');
            $('#dli5_6_1_22_23').val('');
            $('#dli5_6_1_23_24').val('');
            $('#dli5_6_1_24_25').val('');
            $('#dli5_6_1_cumulative').val('');


            if (response == "NO") {


                // alert("No Data Available for Framework Matrix");
                $('#dli1_1_baseline').val('');
                $('#dli1_1_20_21').val('');
                $('#dli1_1_21_22').val('');
                $('#dli1_1_22_23').val('');
                $('#dli1_1_23_24').val('');
                $('#dli1_1_24_25').val('');
                $('#dli1_1_cumulative').val('');
                $('#dli1_1_2_21_22').val('');
                $('#dli1_1_2_22_23').val('');
                $('#dli1_1_2_23_24').val('');
                $('#dli1_1_2_24_25').val('');
                $('#dli1_1_2_cumulative').val('');

                $('#dli2_3_1_baseline').val('');
                $('#dli2_3_1_20_21').val('');
                $('#dli2_3_1_21_22').val('');
                $('#dli2_3_1_22_23').val('');
                $('#dli2_3_1_23_24').val('');
                $('#dli2_3_1_24_25').val('');
                $('#dli2_3_1_cumulative').val('');

                $('#dli2_3_1a_baseline').val('');
                $('#dli2_3_1a_20_21').val('');
                $('#dli2_3_1a_21_22').val('');
                $('#dli2_3_1a_22_23').val('');
                $('#dli2_3_1a_23_24').val('');
                $('#dli2_3_1a_24_25').val('');
                $('#dli2_3_1a_cumulative').val('');

                //4
                $('#dli3_4_baseline').val('');

                $('#dli3_4_20_21').val('');
                $('#dli3_4_21_22').val('');
                $('#dli3_4_22_23').val('');
                $('#dli3_4_23_24').val('');
                $('#dli3_4_24_25').val('');
                $('#dli3_4_cumulative').val('');


                $('#dli3_4_1_baseline').val('');
                $('#dli3_4_1_20_21').val('');
                $('#dli3_4_1_21_22').val('');
                $('#dli3_4_1_22_23').val('');
                $('#dli3_4_1_23_24').val('');
                $('#dli3_4_1_24_25').val('');
                $('#dli3_4_1_cumulative').val('');

                $('#dli3_4_2_20_21').val('');
                $('#dli3_4_2_baseline').val('');

                $('#dli3_4_2_21_22').val('');
                $('#dli3_4_2_22_23').val('');
                $('#dli3_4_2_23_24').val('');
                $('#dli3_4_2_24_25').val('');
                $('#dli3_4_2_cumulative').val('');


                $('#dli3_4_3_baseline').val('');
                $('#dli3_4_3_20_21').val('');
                $('#dli3_4_3_21_22').val('');
                $('#dli3_4_3_22_23').val('');
                $('#dli3_4_3_23_24').val('');
                $('#dli3_4_3_24_25').val('');
                $('#dli3_4_3_cumulative').val('');

                //$('#dli3_4_4_baseline').val('');
                ////$('#dli3_4_4_20_21').val('');
                //$('#dli3_4_4_21_22').val('');
                //$('#dli3_4_4_22_23').val('');
                //$('#dli3_4_4_23_24').val('');
                //$('#dli3_4_4_24_25').val('');
                //$('#dli3_4_4_cumulative').val('');

                $('#dli4_5_baseline').val('');
                $('#dli4_5_20_21').val('');
                $('#dli4_5_21_22').val('');
                $('#dli4_5_22_23').val('');
                $('#dli4_5_23_24').val('');
                $('#dli4_5_24_25').val('');
                $('#dli4_5_cumulative').val('');



                $('#dli5_6_baseline').val('');
                $('#dli5_6_20_21').val('');
                $('#dli5_6_21_22').val('');
                $('#dli5_6_22_23').val('');
                $('#dli5_6_23_24').val('');
                $('#dli5_6_24_25').val('');
                $('#dli5_6_cumulative').val('');


                //$('#dli2_3_baseline').val('');

                //$('#dli2_3_21_22').val('');
                //$('#dli2_3_22_23').val('');
                //$('#dli2_3_23_24').val('');
                //$('#dli2_3_24_25').val('');
                $('#dli2_3_cumulative').val('');

                $('#dli2_3a_baseline').val('');
                $('#dli2_3a_20_21').val('');
                $('#dli2_3a_21_22').val('');
                $('#dli2_3a_22_23').val('');
                $('#dli2_3a_23_24').val('');
                $('#dli2_3a_24_25').val('');
                $('#dli2_3a_cumulative').val('');


                $('#dli3_4_2_baseline').val('');
                $('#dli3_4_2_20_21').val('');

                $('#dli3_4_2_21_22').val('');
                $('#dli3_4_2_22_23').val('');
                $('#dli3_4_2_23_24').val('');
                $('#dli3_4_2_24_25').val('');
                $('#dli3_4_2_cumulative').val('');

                $('#dli3_4_3_baseline').val('');
                $('#dli3_4_3_20_21').val('');
                $('#dli3_4_3_21_22').val('');
                $('#dli3_4_3_22_23').val('');
                $('#dli3_4_3_23_24').val('');
                $('#dli3_4_3_24_25').val('');
                $('#dli3_4_3_cumulative').val('');



                $('#dli5_6_1_21_22').val('');
                $('#dli5_6_1_22_23').val('');
                $('#dli5_6_1_23_24').val('');
                $('#dli5_6_1_24_25').val('');
                $('#dli5_6_1_cumulative').val('');

            }
            else if (response.length != 0) {


                //if (response.dli4_5_1_cumulative != null && response.dli4_5_1_cumulative != "") {
                //    $('#dli4_5_1_cumulative').val(response.dli4_5_1_cumulative);
                //}
                //if (response.dli4_5_1_24_25 != null && response.dli4_5_1_24_25 != "") {
                //    $('#dli4_5_1_24_25').val(response.dli4_5_1_24_25);
                //}
                //if (response.dli4_5_1_23_24 != null && response.dli4_5_1_23_24 != "") {
                //    $('#dli4_5_1_23_24').val(response.dli4_5_1_23_24);
                //}
                //if (response.dli4_5_1_22_23 != null && response.dli4_5_1_22_23 != "") {
                //    $('#dli4_5_1_22_23').val(response.dli4_5_1_22_23);
                //}

                //if (response.dli4_5_1_21_22 != null && response.dli4_5_1_21_22 != "") {
                //    $('#dli4_5_1_21_22').val(response.dli4_5_1_21_22);
                //}

                //if (response.dli4_5_1_20_21 != null && response.dli4_5_1_20_21 != "") {
                //    $('#dli4_5_1_20_21').val(response.dli4_5_1_20_21);
                //}

                //if (response.dli4_5_1_baseline != null && response.dli4_5_1_baseline != "") {
                //    $('#dli4_5_1_baseline').val(response.dli4_5_1_baseline);
                //}


                if (response.dli5_6_1_cumulative != null && response.dli5_6_1_cumulative != "") {
                    $('#dli5_6_1_cumulative').val(response.dli5_6_1_cumulative);
                }
                if (response.dli5_6_1_24_25 != null && response.dli5_6_1_24_25 != "") {
                    $('#dli5_6_1_24_25').val(response.dli5_6_1_24_25);
                }
                if (response.dli5_6_1_23_24 != null && response.dli5_6_1_23_24 != "") {
                    $('#dli5_6_1_23_24').val(response.dli5_6_1_23_24);
                }
                if (response.dli5_6_1_22_23 != null && response.dli5_6_1_22_23 != "") {
                    $('#dli5_6_1_22_23').val(response.dli5_6_1_22_23);
                }

                if (response.dli5_6_1_21_22 != null && response.dli5_6_1_21_22 != "") {
                    $('#dli5_6_1_21_22').val(response.dli5_6_1_21_22);
                }

                //if (response.dli5_6_1_20_21 != null && response.dli5_6_1_20_21 != "") {
                //    $('#dli5_6_1_20_21').val(response.dli5_6_1_20_21);
                //}

                //if (response.dli5_6_1_baseline != null && response.dli5_6_1_baseline != "") {
                //    $('#dli5_6_1_baseline').val(response.dli5_6_1_baseline);
                //}

                if (response.dli1_1_baseline != null && response.dli1_1_baseline != "") {
                    $('#dli1_1_baseline').val(response.dli1_1_baseline);
                }
                if (response.dli1_1_20_21 != null && response.dli1_1_20_21 != "") {
                    $('#dli1_1_20_21').val(response.dli1_1_20_21);
                }
                if (response.dli1_1_21_22 != null && response.dli1_1_21_22 != "") {
                    $('#dli1_1_21_22').val(response.dli1_1_21_22);
                }

                if (response.dli1_1_22_23 != null && response.dli1_1_22_23 != "") {
                    $('#dli1_1_22_23').val(response.dli1_1_22_23);
                }

                if (response.dli1_1_23_24 != null && response.dli1_1_23_24 != "") {
                    $('#dli1_1_23_24').val(response.dli1_1_23_24);
                }
                if (response.dli1_1_24_25 != null && response.dli1_1_24_25 != "") {
                    $('#dli1_1_24_25').val(response.dli1_1_24_25);
                }
                if (response.dli1_1_cumulative != null && response.dli1_1_cumulative != "") {
                    $('#dli1_1_cumulative').val(response.dli1_1_cumulative);
                }


                if (response.dli2_2_baseline != null && response.dli2_2_baseline != "") {
                    $('#dli2_2_baseline').val(response.dli2_2_baseline);
                }
                if (response.dli2_2_22_23 != null && response.dli2_2_22_23 != "") {
                    $('#dli2_2_22_23').val(response.dli2_2_22_23);
                }

                if (response.dli2_2_23_24 != null && response.dli2_2_23_24 != "") {
                    $('#dli2_2_23_24').val(response.dli2_2_23_24);
                }
                if (response.dli2_2_24_25 != null && response.dli2_2_24_25 != "") {
                    $('#dli2_2_24_25').val(response.dli2_2_24_25);
                }
                if (response.dli2_2_cumulative != null && response.dli2_2_cumulative != "") {
                    $('#dli2_2_cumulative').val(response.dli2_2_cumulative);
                }


                //if (response.dli2_3_baseline != null && response.dli2_3_baseline != "") {
                //    $('#dli2_3_baseline').val(response.dli2_3_baseline);
                //}

                //if (response.dli2_3_21_22 != null && response.dli2_3_21_22 != "") {
                //    $('#dli2_3_21_22').val(response.dli2_3_21_22);
                //}
                //if (response.dli2_3_22_23 != null && response.dli2_3_22_23 != "") {
                //    $('#dli2_3_22_23').val(response.dli2_3_22_23);
                //}

                //if (response.dli2_3_23_24 != null && response.dli2_3_23_24 != "") {
                //    $('#dli2_3_23_24').val(response.dli2_3_23_24);
                //}

                //if (response.dli2_3_24_25 != null && response.dli2_3_24_25 != "") {
                //    $('#dli2_3_24_25').val(response.dli2_3_24_25);
                //}

                if (response.dli2_3_cumulative != null && response.dli2_3_cumulative != "") {
                    $('#dli2_3_cumulative').val(response.dli2_3_cumulative);
                }



                if (response.dli2_3a_baseline != null && response.dli2_3a_baseline != "") {
                    $('#dli2_3a_baseline').val(response.dli2_3a_baseline);
                }
                if (response.dli2_3a_20_21 != null && response.dli2_3a_20_21 != "") {
                    $('#dli2_3a_20_21').val(response.dli2_3a_20_21);
                }
                if (response.dli2_3a_21_22 != null && response.dli2_3a_21_22 != "") {
                    $('#dli2_3a_21_22').val(response.dli2_3a_21_22);
                }
                if (response.dli2_3a_22_23 != null && response.dli2_3a_22_23 != "") {
                    $('#dli2_3a_22_23').val(response.dli2_3a_22_23);
                }
                if (response.dli2_3a_23_24 != null && response.dli2_3a_23_24 != "") {
                    $('#dli2_3a_23_24').val(response.dli2_3a_23_24);
                }
                if (response.dli2_3a_24_25 != null && response.dli2_3a_24_25 != "") {
                    $('#dli2_3a_24_25').val(response.dli2_3a_24_25);
                }
                if (response.dli2_3a_cumulative != null && response.dli2_3a_cumulative != "") {
                    $('#dli2_3a_cumulative').val(response.dli2_3a_cumulative);
                }

                if (response.dli3_4_2_baseline != null && response.dli3_4_2_baseline != "") {
                    $('#dli3_4_2_baseline').val(response.dli3_4_2_baseline);
                }


                if (response.dli3_4_2_20_21 != null && response.dli3_4_2_20_21 != "") {
                    $('#dli3_4_2_20_21').val(response.dli3_4_2_20_21);
                }
                if (response.dli3_4_2_21_22 != null && response.dli3_4_2_21_22 != "") {
                    $('#dli3_4_2_21_22').val(response.dli3_4_2_21_22);
                }


                if (response.dli3_4_2_22_23 != null && response.dli3_4_2_22_23 != "") {
                    $('#dli3_4_2_22_23').val(response.dli3_4_2_22_23);
                }

                if (response.dli3_4_2_23_24 != null && response.dli3_4_2_23_24 != "") {
                    $('#dli3_4_2_23_24').val(response.dli3_4_2_23_24);
                }

                if (response.dli3_4_2_24_25 != null && response.dli3_4_2_24_25 != "") {
                    $('#dli3_4_2_24_25').val(response.dli3_4_2_24_25);
                }
                if (response.dli3_4_2_cumulative != null && response.dli3_4_2_cumulative != "") {
                    $('#dli3_4_2_cumulative').val(response.dli3_4_2_cumulative);
                }



                if (response.dli3_4_3_baseline != null && response.dli3_4_3_baseline != "") {
                    $('#dli3_4_3_baseline').val(response.dli3_4_3_baseline);
                }


                if (response.dli3_4_3_20_21 != null && response.dli3_4_3_20_21 != "") {
                    $('#dli3_4_3_20_21').val(response.dli3_4_3_20_21);
                }
                if (response.dli3_4_3_21_22 != null && response.dli3_4_3_21_22 != "") {
                    $('#dli3_4_3_21_22').val(response.dli3_4_3_21_22);
                }
                if (response.dli3_4_3_22_23 != null && response.dli3_4_3_22_23 != "") {
                    $('#dli3_4_3_22_23').val(response.dli3_4_3_22_23);
                }

                if (response.dli3_4_3_23_24 != null && response.dli3_4_3_23_24 != "") {
                    $('#dli3_4_3_23_24').val(response.dli3_4_3_23_24);
                }

                if (response.dli3_4_3_24_25 != null && response.dli3_4_3_24_25 != "") {
                    $('#dli3_4_3_24_25').val(response.dli3_4_3_24_25);
                }

                if (response.dli3_4_3_cumulative != null && response.dli3_4_3_cumulative != "") {
                    $('#dli3_4_3_cumulative').val(response.dli3_4_3_cumulative);
                }





                if (response.dli2_2_1_baseline != null && response.dli2_2_1_baseline != "") {
                    $('#dli2_2_1_baseline').val(response.dli2_2_1_baseline);
                }
                //if (response.dli2_2_1_20_21 != null && response.dli2_2_1_20_21 != "") {
                //    $('#dli2_2_1_20_21').val(response.dli2_2_1_20_21);
                //}




                if (response.dli2_3_1_baseline != null && response.dli2_3_1_baseline != "") {
                    $('#dli2_3_1_baseline').val(response.dli2_3_1_baseline);
                }
                if (response.dli2_3_1_20_21 != null && response.dli2_3_1_20_21 != "") {
                    $('#dli2_3_1_20_21').val(response.dli2_3_1_20_21);
                }
                if (response.dli2_3_1_21_22 != null && response.dli2_3_1_21_22 != "") {
                    $('#dli2_3_1_21_22').val(response.dli2_3_1_21_22);
                }

                if (response.dli2_3_1_22_23 != null && response.dli2_3_1_22_23 != "") {
                    $('#dli2_3_1_22_23').val(response.dli2_3_1_22_23);
                }
                if (response.dli2_3_1_23_24 != null && response.dli2_3_1_23_24 != "") {
                    $('#dli2_3_1_23_24').val(response.dli2_3_1_23_24);
                }

                if (response.dli2_3_1_24_25 != null && response.dli2_3_1_24_25 != "") {
                    $('#dli2_3_1_24_25').val(response.dli2_3_1_24_25);
                }
                if (response.dli2_3_1_cumulative != null && response.dli2_3_1_cumulative != "") {
                    $('#dli2_3_1_cumulative').val(response.dli2_3_1_cumulative);
                }



                if (response.dli2_3_1a_baseline != null && response.dli2_3_1a_baseline != "") {
                    $('#dli2_3_1a_baseline').val(response.dli2_3_1a_baseline);
                }

                if (response.dli2_3_1a_20_21 != null && response.dli2_3_1a_20_21 != "") {
                    $('#dli2_3_1a_20_21').val(response.dli2_3_1a_20_21);
                }

                if (response.dli2_3_1a_21_22 != null && response.dli2_3_1a_21_22 != "") {
                    $('#dli2_3_1a_21_22').val(response.dli2_3_1a_21_22);
                }
                if (response.dli2_3_1a_22_23 != null && response.dli2_3_1a_22_23 != "") {
                    $('#dli2_3_1a_22_23').val(response.dli2_3_1a_22_23);
                }


                if (response.dli2_3_1a_23_24 != null && response.dli2_3_1a_23_24 != "") {
                    $('#dli2_3_1a_23_24').val(response.dli2_3_1a_23_24);
                }

                if (response.dli2_3_1a_24_25 != null && response.dli2_3_1a_24_25 != "") {
                    $('#dli2_3_1a_24_25').val(response.dli2_3_1a_24_25);
                }
                if (response.dli2_3_1a_cumulative != null && response.dli2_3_1a_cumulative != "") {
                    $('#dli2_3_1a_cumulative').val(response.dli2_3_1a_cumulative);
                }


                if (response.dli3_4_baseline != null && response.dli3_4_baseline != "") {
                    $('#dli3_4_baseline').val(response.dli3_4_baseline);
                }

                if (response.dli3_4_20_21 != null && response.dli3_4_20_21 != "") {
                    $('#dli3_4_20_21').val(response.dli3_4_20_21);
                }

                if (response.dli3_4_21_22 != null && response.dli3_4_21_22 != "") {
                    $('#dli3_4_21_22').val(response.dli3_4_21_22);
                }
                if (response.dli3_4_22_23 != null && response.dli3_4_22_23 != "") {
                    $('#dli3_4_22_23').val(response.dli3_4_22_23);
                }

                if (response.dli3_4_23_24 != null && response.dli3_4_23_24 != "") {
                    $('#dli3_4_23_24').val(response.dli3_4_23_24);
                }

                if (response.dli3_4_24_25 != null && response.dli3_4_24_25 != "") {
                    $('#dli3_4_24_25').val(response.dli3_4_24_25);
                }
                if (response.dli3_4_cumulative != null && response.dli3_4_cumulative != "") {
                    $('#dli3_4_cumulative').val(response.dli3_4_cumulative);
                }

                if (response.dli3_4_1_baseline != null && response.dli3_4_1_baseline != "") {
                    $('#dli3_4_1_baseline').val(response.dli3_4_1_baseline);
                }

                if (response.dli3_4_1_20_21 != null && response.dli3_4_1_20_21 != "") {
                    $('#dli3_4_1_20_21').val(response.dli3_4_1_20_21);
                }
                if (response.dli3_4_1_21_22 != null && response.dli3_4_1_21_22 != "") {
                    $('#dli3_4_1_21_22').val(response.dli3_4_1_21_22);
                }

                if (response.dli3_4_1_22_23 != null && response.dli3_4_1_22_23 != "") {
                    $('#dli3_4_1_22_23').val(response.dli3_4_1_22_23);
                }

                if (response.dli3_4_1_23_24 != null && response.dli3_4_1_23_24 != "") {
                    $('#dli3_4_1_23_24').val(response.dli3_4_1_23_24);
                }
                if (response.dli3_4_1_24_25 != null && response.dli3_4_1_24_25 != "") {
                    $('#dli3_4_1_24_25').val(response.dli3_4_1_24_25);
                }
                if (response.dli3_4_1_cumulative != null && response.dli3_4_1_cumulative != "") {
                    $('#dli3_4_1_cumulative').val(response.dli3_4_1_cumulative);
                }


                if (response.dli3_4_2_baseline != null && response.dli3_4_2_baseline != "") {
                    $('#dli3_4_2_baseline').val(response.dli3_4_2_baseline);
                }
                if (response.dli3_4_2_21_22 != null && response.dli3_4_2_21_22 != "") {
                    $('#dli3_4_2_21_22').val(response.dli3_4_2_21_22);
                }

                if (response.dli3_4_2_22_23 != null && response.dli3_4_2_22_23 != "") {
                    $('#dli3_4_2_22_23').val(response.dli3_4_2_22_23);
                }

                if (response.dli3_4_2_23_24 != null && response.dli3_4_2_23_24 != "") {
                    $('#dli3_4_2_23_24').val(response.dli3_4_2_23_24);
                }
                if (response.dli3_4_2_24_25 != null && response.dli3_4_2_24_25 != "") {
                    $('#dli3_4_2_24_25').val(response.dli3_4_2_24_25);
                }
                if (response.dli3_4_2_cumulative != null && response.dli3_4_2_cumulative != "") {
                    $('#dli3_4_2_cumulative').val(response.dli3_4_2_cumulative);
                }


                if (response.dli3_4_dli3_4_3_baseline3_20_21 != null && response.dli3_4_3_baseline != "") {
                    $('#dli3_4_3_baseline').val(response.dli3_4_3_baseline);
                }
                if (response.dli3_4_3_21_22 != null && response.dli3_4_3_21_22 != "") {
                    $('#dli3_4_3_21_22').val(response.dli3_4_3_21_22);
                }

                if (response.dli3_4_3_22_23 != null && response.dli3_4_3_22_23 != "") {
                    $('#dli3_4_3_22_23').val(response.dli3_4_3_22_23);
                }

                if (response.dli3_4_3_23_24 != null && response.dli3_4_3_23_24 != "") {
                    $('#dli3_4_3_23_24').val(response.dli3_4_3_23_24);
                }
                if (response.dli3_4_3_24_25 != null && response.dli3_4_3_24_25 != "") {
                    $('#dli3_4_3_24_25').val(response.dli3_4_3_24_25);
                }
                if (response.dli3_4_3_cumulative != null && response.dli3_4_3_cumulative != "") {
                    $('#dli3_4_3_cumulative').val(response.dli3_4_3_cumulative);
                }



                //if (response.dli3_4_4_baseline != null && response.dli3_4_4_baseline != "") {
                //    $('#dli3_4_4_baseline').val(response.dli3_4_4_baseline);
                //}
                ////if (response.dli3_4_4_20_21 != null && response.dli3_4_4_20_21 != "") {
                ////    $('#dli3_4_4_20_21').val(response.dli3_4_4_20_21);
                ////}
                //if (response.dli3_4_4_21_22 != null && response.dli3_4_4_21_22 != "") {
                //    $('#dli3_4_4_21_22').val(response.dli3_4_4_21_22);
                //}

                //if (response.dli3_4_4_22_23 != null && response.dli3_4_4_22_23 != "") {
                //    $('#dli3_4_4_22_23').val(response.dli3_4_4_22_23);
                //}

                //if (response.dli3_4_4_23_24 != null && response.dli3_4_4_23_24 != "") {
                //    $('#dli3_4_4_23_24').val(response.dli3_4_4_23_24);
                //}
                //if (response.dli3_4_4_24_25 != null && response.dli3_4_4_24_25 != "") {
                //    $('#dli3_4_4_24_25').val(response.dli3_4_4_24_25);
                //}
                //if (response.dli3_4_4_cumulative != null && response.dli3_4_4_cumulative != "") {
                //    $('#dli3_4_4_cumulative').val(response.dli3_4_4_cumulative);
                //}

                if (response.dli4_5_baseline != null && response.dli4_5_baseline != "") {
                    $('#dli4_5_baseline').val(response.dli4_5_baseline);
                }
                if (response.dli4_5_20_21 != null && response.dli4_5_20_21 != "") {
                    $('#dli4_5_20_21').val(response.dli4_5_20_21);
                }
                if (response.dli4_5_21_22 != null && response.dli4_5_21_22 != "") {
                    $('#dli4_5_21_22').val(response.dli4_5_21_22);
                }

                if (response.dli4_5_22_23 != null && response.dli4_5_22_23 != "") {
                    $('#dli4_5_22_23').val(response.dli4_5_22_23);
                }

                if (response.dli4_5_23_24 != null && response.dli4_5_23_24 != "") {
                    $('#dli4_5_23_24').val(response.dli4_5_23_24);
                }
                if (response.dli4_5_24_25 != null && response.dli4_5_24_25 != "") {
                    $('#dli4_5_24_25').val(response.dli4_5_24_25);
                }
                if (response.dli4_5_cumulative != null && response.dli4_5_cumulative != "") {
                    $('#dli4_5_cumulative').val(response.dli4_5_cumulative);
                }




                if (response.dli5_6_baseline != null && response.dli5_6_baseline != "") {
                    $('#dli5_6_baseline').val(response.dli5_6_baseline);
                }
                if (response.dli5_6_20_21 != null && response.dli5_6_20_21 != "") {
                    $('#dli5_6_20_21').val(response.dli5_6_20_21);
                }
                if (response.dli5_6_21_22 != null && response.dli5_6_21_22 != "") {
                    $('#dli5_6_21_22').val(response.dli5_6_21_22);
                }

                if (response.dli5_6_22_23 != null && response.dli5_6_22_23 != "") {
                    $('#dli5_6_22_23').val(response.dli5_6_22_23);
                }

                if (response.dli5_6_23_24 != null && response.dli5_6_23_24 != "") {
                    $('#dli5_6_23_24').val(response.dli5_6_23_24);
                }
                if (response.dli5_6_24_25 != null && response.dli5_6_24_25 != "") {
                    $('#dli5_6_24_25').val(response.dli5_6_24_25);
                }
                if (response.dli5_6_cumulative != null && response.dli5_6_cumulative != "") {
                    $('#dli5_6_cumulative').val(response.dli5_6_cumulative);
                }


            }

        }
    });

}

function Dli_1_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_1_Details',
        data: { 'state': Session_StateName },
        dataType: 'JSON',
        success: function (response) {

            $('#dli1_1_1_baseline').val("");
            $('#dli1_1_1_20_21').val("");
            $('#dli1_1_2_baseline').val("");
            $('#dli1_1_2_20_21').val("");
            $('#dli3_4_4_20_21').val("");

            $('#dli1_1_1_baseline').val("");
            $('#dli1_1_1_20_21').val("");
            $('#dli1_1_1_21_22').val("");
            $('#dli1_1_1_22_23').val("");
            $('#dli1_1_1_23_24').val("");
            $('#dli1_1_1_24_25').val("");
            $('#dli1_1_1_cumulative').val("");

            $('#dli1_1_2_baseline').val('');
            $('#dli1_1_2_20_21').val('');
            $('#dli1_1_2_21_22').val("");
            $('#dli1_1_2_22_23').val("");
            $('#dli1_1_2_23_24').val("");
            $('#dli1_1_2_24_25').val("");
            $('#dli1_1_2_cumulative').val("");

            $('#dli3_4_4_baseline').val('');
            $('#dli3_4_4_20_21').val('');
            $('#dli3_4_4_21_22').val('');
            $('#dli3_4_4_22_23').val('');
            $('#dli3_4_4_23_24').val('');
            $('#dli3_4_4_24_25').val('');
            $('#dli3_4_4_cumulative').val('');
            if (response == "NO") {
                $('#dli1_1_1_baseline').val("");
                $('#dli1_1_1_20_21').val("");
                $('#dli1_1_1_21_22').val("");
                $('#dli1_1_1_22_23').val("");
                $('#dli1_1_1_23_24').val("");
                $('#dli1_1_1_24_25').val("");
                $('#dli1_1_1_cumulative').val("");

                $('#dli1_1_2_baseline').val('');
                $('#dli1_1_2_20_21').val('');
                $('#dli1_1_2_21_22').val("");
                $('#dli1_1_2_22_23').val("");
                $('#dli1_1_2_23_24').val("");
                $('#dli1_1_2_24_25').val("");
                $('#dli1_1_2_cumulative').val("");


                $('#dli3_4_4_baseline').val('');
                $('#dli3_4_4_20_21').val('');
                $('#dli3_4_4_21_22').val('');
                $('#dli3_4_4_22_23').val('');
                $('#dli3_4_4_23_24').val('');
                $('#dli3_4_4_24_25').val('');
                $('#dli3_4_4_cumulative').val('');
            }
            else {

                if (response.blockwise_i_baseline != null && response.blockwise_i_baseline != "") {
                    $('#dli1_1_1_baseline').val(response.blockwise_i_baseline);
                }

                if (response.blockwise_i_20_21 != null && response.blockwise_i_20_21 != "") {
                    $('#dli1_1_1_20_21').val(response.blockwise_i_20_21);
                }
                if (response.blockwise_i_21_22 != null && response.blockwise_i_21_22 != "") {
                    $('#dli1_1_1_21_22').val(response.blockwise_i_21_22);
                }
                if (response.blockwise_i_22_23 != null && response.blockwise_i_22_23 != "") {
                    $('#dli1_1_1_22_23').val(response.blockwise_i_22_23);
                }
                if (response.blockwise_i_23_24 != null && response.blockwise_i_23_24 != "") {
                    $('#dli1_1_1_23_24').val(response.blockwise_i_23_24);
                }
                if (response.blockwise_i_24_25 != null && response.blockwise_i_24_25 != "") {
                    $('#dli1_1_1_24_25').val(response.blockwise_i_24_25);
                }
                if (response.blockwise_i_cumulative != null && response.blockwise_i_cumulative != "") {
                    $('#dli1_1_1_cumulative').val(response.blockwise_i_cumulative);
                }

                if (response.statewise_i_baseline != null && response.statewise_i_baseline != "") {
                    $('#dli1_1_2_baseline').val(response.statewise_i_baseline);
                }
                if (response.statewise_i_20_21 != null && response.statewise_i_20_21 != "") {
                    $('#dli1_1_2_20_21').val(response.statewise_i_20_21);
                }
                if (response.statewise_i_21_22 != null && response.statewise_i_21_22 != "") {
                    $('#dli1_1_2_21_22').val(response.statewise_i_21_22);
                }
                if (response.statewise_i_22_23 != null && response.statewise_i_22_23 != "") {
                    $('#dli1_1_2_22_23').val(response.statewise_i_22_23);
                }
                if (response.statewise_i_23_24 != null && response.statewise_i_23_24 != "") {
                    $('#dli1_1_2_23_24').val(response.statewise_i_23_24);
                }
                if (response.statewise_i_24_25 != null && response.statewise_i_24_25 != "") {
                    $('#dli1_1_2_24_25').val(response.statewise_i_24_25);
                }
                if (response.statewise_i_cumulative != null && response.statewise_i_cumulative != "") {
                    $('#dli1_1_2_cumulative').val(response.statewise_i_cumulative);
                }

                if (response.waterlevel_vii_baseline != null && response.waterlevel_vii_baseline != "") {
                    $('#dli3_4_4_baseline').val(response.waterlevel_vii_baseline);
                }
                if (response.waterlevel_vii_20_21 != null && response.waterlevel_vii_20_21 != "") {
                    $('#dli3_4_4_20_21').val(response.waterlevel_vii_20_21);
                }
                if (response.waterlevel_vii_21_22 != null && response.waterlevel_vii_21_22 != "") {
                    $('#dli3_4_4_21_22').val(response.waterlevel_vii_21_22);
                }
                if (response.waterlevel_vii_22_23 != null && response.waterlevel_vii_22_23 != "") {
                    $('#dli3_4_4_22_23').val(response.waterlevel_vii_22_23);
                }
                if (response.waterlevel_vii_23_24 != null && response.waterlevel_vii_23_24 != "") {
                    $('#dli3_4_4_23_24').val(response.waterlevel_vii_23_24);
                }
                if (response.waterlevel_vii_24_25 != null && response.waterlevel_vii_24_25 != "") {
                    $('#dli3_4_4_24_25').val(response.waterlevel_vii_24_25);
                }
                if (response.waterlevel_vii_cumulative != null && response.waterlevel_vii_cumulative != "") {
                    $('#dli3_4_4_cumulative').val(response.waterlevel_vii_cumulative);
                }



            }

        }
    });
}


function Dli_2_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_2_Details',
        data: { 'state': Session_StateName },
        dataType: 'JSON',
        success: function (response) {

            $('#dli2_2_1_baseline').val('');
            $('#dli2_2_1_20_21').val('');
            $('#dli2_2_1_21_22').val('');
            $('#dli2_2_1_22_23').val('');
            $('#dli2_2_1_23_24').val('');
            $('#dli2_2_1_24_25').val('');
            $('#dli2_2_1_cumulative').val('');


            $('#dli2_2_baseline').val('');
            $('#dli2_2_20_21').val('');
            $('#dli2_2_21_22').val('');
            $('#dli2_2_22_23').val('');
            $('#dli2_2_23_24').val('');
            $('#dli2_2_24_25').val('');
            $('#dli2_2_cumulative').val('');

            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (response != "NO") {


                if (response.waterbudgets_i_baseline != null && response.waterbudgets_i_baseline != "") {
                    $('#dli2_2_1_baseline').val(response.waterbudgets_i_baseline);
                }

                if (response.waterbudgets_i_20_21 != null && response.waterbudgets_i_20_21 != "") {
                    $('#dli2_2_1_20_21').val(response.waterbudgets_i_20_21);
                }
                if (response.waterbudgets_i_21_22 != null && response.waterbudgets_i_21_22 != "") {
                    $('#dli2_2_1_21_22').val(response.waterbudgets_i_21_22);
                }
                if (response.waterbudgets_i_22_23 != null && response.waterbudgets_i_22_23 != "") {
                    $('#dli2_2_1_22_23').val(response.waterbudgets_i_22_23);
                }
                if (response.waterbudgets_i_23_24 != null && response.waterbudgets_i_23_24 != "") {
                    $('#dli2_2_1_23_24').val(response.waterbudgets_i_23_24);
                }
                if (response.waterbudgets_i_24_25 != null && response.waterbudgets_i_24_25 != "") {
                    $('#dli2_2_1_24_25').val(response.waterbudgets_i_24_25);
                }

                if (response.waterbudgets_i_cumulative != null && response.waterbudgets_i_cumulative != "") {
                    $('#dli2_2_1_cumulative').val(response.waterbudgets_i_cumulative);
                }






                if (response.wsp_i_baseline != null && response.wsp_i_baseline != "") {
                    $('#dli2_2_baseline').val(response.wsp_i_baseline);
                }

                if (response.wsp_i_20_21 != null && response.wsp_i_20_21 != "") {
                    $('#dli2_2_20_21').val(response.wsp_i_20_21);
                }
                if (response.wsp_i_21_22 != null && response.wsp_i_21_22 != "") {
                    $('#dli2_2_21_22').val(response.wsp_i_21_22);
                }
                if (response.wsp_i_22_23 != null && response.wsp_i_22_23 != "") {
                    $('#dli2_2_22_23').val(response.wsp_i_22_23);
                }
                if (response.wsp_i_23_24 != null && response.wsp_i_23_24 != "") {
                    $('#dli2_2_23_24').val(response.wsp_i_23_24);
                }
                if (response.wsp_i_24_25 != null && response.wsp_i_24_25 != "") {
                    $('#dli2_2_24_25').val(response.wsp_i_24_25);
                }

                if (response.wsp_i_cumulative != null && response.wsp_i_cumulative != "") {
                    $('#dli2_2_cumulative').val(response.wsp_i_cumulative);
                }

            }
            if (response == "NO") {

                $('#dli2_2_1_baseline').val('');
                $('#dli2_2_1_20_21').val('');
                $('#dli2_2_1_21_22').val('');
                $('#dli2_2_1_22_23').val('');
                $('#dli2_2_1_23_24').val('');
                $('#dli2_2_1_24_25').val('');
                $('#dli2_2_1_cumulative').val('');

                $('#dli2_2_baseline').val('');
                $('#dli2_2_20_21').val('');
                $('#dli2_2_21_22').val('');
                $('#dli2_2_22_23').val('');
                $('#dli2_2_23_24').val('');
                $('#dli2_2_24_25').val('');
                $('#dli2_2_cumulative').val('');

            }

        }

    });
}



function Total_Population_of_the_GP_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Total_Population_of_the_GP_Info',
        data: { 'state': Session_StateName },
        dataType: 'JSON',
        success: function (data) {

            $('#dli2_3_baseline').val('');
            $('#dli2_3_20_21').val('');
            $('#dli2_3_21_22').val('');
            $('#dli2_3_22_23').val('');
            $('#dli2_3_23_24').val('');
            $('#dli2_3_24_25').val('');


            var total_basic_data = 0;
            var total_pop_20_21 = 0;
            var total_pop_21_22 = 0;
            var total_pop_22_23 = 0;
            var total_pop_23_24 = 0;
            var total_pop_24_25 = 0;


            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].basic_data != null && data[i].basic_data != "") {
                        total_basic_data += parseFloat(data[i].basic_data);
                        $('#dli2_3_baseline').val(total_basic_data);
                    }
                    if (data[i].pop_20_21 != null && data[i].pop_20_21 != "") {
                        total_pop_20_21 += parseFloat(data[i].pop_20_21);
                        $('#dli2_3_20_21').val(total_pop_20_21);
                    }
                    if (data[i].pop_21_22 != null && data[i].pop_21_22 != "") {
                        total_pop_21_22 += parseFloat(data[i].pop_21_22);
                        $('#dli2_3_21_22').val(total_pop_21_22);
                    }

                    if (data[i].pop_22_23 != null && data[i].pop_22_23 != "") {
                        total_pop_22_23 += parseFloat(data[i].pop_22_23);
                        $('#dli2_3_22_23').val(total_pop_22_23);
                    }
                    if (data[i].pop_23_24 != null && data[i].pop_23_24 != "") {
                        total_pop_23_24 += parseFloat(data[i].pop_23_24);
                        $('#dli2_3_23_24').val(total_pop_23_24);
                    }
                    if (data[i].pop_24_25 != null && data[i].pop_24_25 != "") {
                        total_pop_24_25 += parseFloat(data[i].pop_24_25);
                        $('#dli2_3_24_25').val(total_pop_24_25);
                    }

                }
                //   Indicator_3_achivement_2020_to_2025_function();

            }
            else {
                $('#dli2_3_baseline').val('');
                $('#dli2_3_20_21').val('');
                $('#dli2_3_21_22').val('');
                $('#dli2_3_22_23').val('');
                $('#dli2_3_23_24').val('');
                $('#dli2_3_24_25').val('');
                //$('#dli2_3_1_20_21').val('');
            }

            // $('#dli2_3_1_20_21').val(total_basic_data.toFixed(2));
        }
    });

}

//var Indicator_3achivement_2020_to_2025 = 0;
//function Indicator_3_achivement_2020_to_2025_function() {

//    var dli2_3_20_21_ac = $('#dli2_3_20_21').val();
//    var dli2_3_21_22_ac = $('#dli2_3_21_22').val();
//    var dli2_3_22_23_ac = $('#dli2_3_22_23').val();
//    var dli2_3_23_24_ac = $('#dli2_3_23_24').val();
//    var dli2_3_24_25_ac = $('#dli2_3_24_25').val();

//    Indicator_3achivement_2020_to_2025 = parseFloat(dli2_3_20_21_ac) + parseFloat(dli2_3_21_22_ac) + parseFloat(dli2_3_22_23_ac) + parseFloat(dli2_3_23_24_ac) + parseFloat(dli2_3_24_25_ac);


//    $('#dli2_3_cumulative').val(Indicator_3achivement_2020_to_2025);


//}


//function Socio_economic_demographic_profile_Info() {

//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Project/Socio_economic_demographic_profile_Info',
//        data: { 'state': Session_StateName },
//        dataType: 'JSON',
//        success: function (data) {


//            $('#dli2_3a_baseline').val('');
//            $('#dli2_3a_20_21').val('');
//            $('#dli2_3a_21_22').val('');
//            $('#dli2_3a_22_23').val('');
//            $('#dli2_3a_23_24').val('');
//            $('#dli2_3a_24_25').val('');
//            $('#dli2_3a_cumulative').val('');
//            //   $('#dli2_3_1a_20_21').val('');
//            if (data == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";

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

//                $('#dli2_3a_baseline').val('');
//                $('#dli2_3a_20_21').val('');
//                $('#dli2_3a_21_22').val('');
//                $('#dli2_3a_22_23').val('');
//                $('#dli2_3a_24_25').val('');
//                $('#dli2_3a_24_25').val('');
//                $('#dli2_3a_cumulative').val('');

//            }
//            if (Total != 0) {
//                if (Femal_sum_baseline_data != 0) {
//                    var Per = (Total / Femal_sum_baseline_data) * 100;
//                    $('#dli2_3a_baseline').val(Per.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_baseline').val("0");
//                }
//                if (Femal_sum_female_pop_20_21 != 0) {
//                    var Per_20_21 = (Total / Femal_sum_female_pop_20_21) * 100;

//                    $('#dli2_3a_20_21').val(Per_20_21.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_20_21').val("0");
//                }


//                if (Femal_sum_female_pop_21_22 != 0) {
//                    var Per_21_22 = (Total / Femal_sum_female_pop_21_22) * 100;
//                    $('#dli2_3a_21_22').val(Per_21_22.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_21_22').val("0");
//                }
//                if (Femal_sum_female_pop_22_23 != 0) {
//                    var Per_22_23 = (Total / Femal_sum_female_pop_22_23) * 100;
//                    $('#dli2_3a_22_23').val(Per_22_23.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_22_23').val("0");
//                }
//                if (Femal_sum_female_pop_23_24 != 0) {
//                    var Per_23_24 = (Total / Femal_sum_female_pop_23_24) * 100;
//                    $('#dli2_3a_23_24').val(Per_23_24.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_23_24').val("0");
//                }
//                if (Femal_sum_female_pop_24_25 != 0) {
//                    var Per_24_25 = (Total / Femal_sum_female_pop_24_25) * 100;
//                    $('#dli2_3a_24_25').val(Per_24_25.toFixed(2));
//                }
//                else {
//                    $('#dli2_3a_24_25').val("0");
//                }

//                Indicator_3a_achivement_2020_to_2025_function();



//            } else {
//                $('#dli2_3a_baseline').val("0");
//                $('#dli2_3a_20_21').val("0");
//                $('#dli2_3a_21_22').val("0");
//                $('#dli2_3a_22_23').val("0");
//                $('#dli2_3a_23_24').val("0");
//                $('#dli2_3a_24_25').val("0");
//                $('#dli2_3a_cumulative').val("0");
//            }
//        }
//    });

//}
//var Indicator_3a_achivement_2020_to_2025 = 0;
//function Indicator_3a_achivement_2020_to_2025_function() {
//    var dli2_3a_20_21_Ac = $('#dli2_3a_20_21').val();
//    var dli2_3a_21_22_Ac = $('#dli2_3a_21_22').val();
//    var dli2_3a_22_23_Ac = $('#dli2_3a_22_23').val();
//    var dli2_3a_23_24_Ac = $('#dli2_3a_23_24').val();
//    var dli2_3a_24_25_Ac = $('#dli2_3a_24_25').val();
//    Indicator_3a_achivement_2020_to_2025 = parseFloat(dli2_3a_20_21_Ac) + parseFloat(dli2_3a_21_22_Ac) + parseFloat(dli2_3a_22_23_Ac) + parseFloat(dli2_3a_23_24_Ac) + parseFloat(dli2_3a_24_25_Ac);
//    $('#dli2_3a_cumulative').val(Indicator_3a_achivement_2020_to_2025.toFixed(2));

//}
//function vwms_Info() {

//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Project/VWSC_Info',
//        data: { 'state': Session_StateName },
//        dataType: 'JSON',
//        success: function (data) {
//            
//            if (data == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";

//            }
//            $('#dli3_4_3_20_21').val("");
//            $('#dli3_4_2_20_21').val("");
//            $('#dli3_4_1_20_21').val("");



//            var female = 0;
//            var Peoples_Count = 0;
//            if (data.length != 0) {

//                $('#dli3_4_1_20_21').val(data.length);

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
//                $('#dli3_4_1_20_21').val('0');
//            }
//            $('#dli3_4_2_20_21').val(female);
//            $('#dli3_4_3_20_21').val(Peoples_Count);
//        }
//    });
//}


function Dli_4_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_4_Details',
        data: { 'state': Session_StateName },
        dataType: 'JSON',
        success: function (response) {

            $('#dli4_5_1_baseline').val('');
            $('#dli4_5_1_20_21').val('');
            $('#dli4_5_1_21_22').val('');
            $('#dli4_5_1_22_23').val('');
            $('#dli4_5_1_23_24').val('');
            $('#dli4_5_1_24_25').val('');

            $('#dli4_5_1_cumulative').val('');

            var dli4_5_1_baseline = 0;
            var dli4_5_1_20_21 = 0;
            var dli4_5_1_21_22 = 0;
            var dli4_5_1_22_23 = 0;
            var dli4_5_1_23_24 = 0;
            var dli4_5_1_24_25 = 0;
            var irrigation_i_cumulative_ = 0;
            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
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

                $('#dli4_5_1_baseline').val('');
                $('#dli4_5_1_20_21').val('');
                $('#dli4_5_1_21_22').val('');
                $('#dli4_5_1_22_23').val('');
                $('#dli4_5_1_23_24').val('');
                $('#dli4_5_1_24_25').val('');
                $('#dli4_5_1_cumulative').val('');

            }



            $('#dli4_5_1_baseline').val(dli4_5_1_baseline);
            $('#dli4_5_1_20_21').val(dli4_5_1_20_21);
            $('#dli4_5_1_21_22').val(dli4_5_1_21_22);
            $('#dli4_5_1_22_23').val(dli4_5_1_22_23);
            $('#dli4_5_1_23_24').val(dli4_5_1_23_24);
            $('#dli4_5_1_24_25').val(dli4_5_1_24_25);
            $('#dli4_5_1_cumulative').val(irrigation_i_cumulative_);
        }
    });
}

function Dli_5_Details() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Project/Dli_5_Details',
        data: { 'state': Session_StateName },
        dataType: 'JSON',
        success: function (response) {


            $('#dli5_6_1_baseline').val('');
            $('#dli5_6_1_20_21').val('');
            $('#dli5_6_1_21_22').val('');
            $('#dli5_6_1_22_23').val('');
            $('#dli5_6_1_23_24').val('');
            $('#dli5_6_1_24_25').val('');
            $('#dli5_6_1_cumulative').val('');

            if (response == "SessionTimeOut") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            else if (response != "NO") {

                if (response.blockwise_iii_baseline != null && response.blockwise_iii_baseline != "") {
                    $('#dli5_6_1_baseline').val(response.blockwise_iii_baseline);
                }

                if (response.blockwise_iii_20_21 != null && response.blockwise_iii_20_21 != "") {
                    $('#dli5_6_1_20_21').val(response.blockwise_iii_20_21);
                }
                if (response.blockwise_iii_21_22 != null && response.blockwise_iii_21_22 != "") {
                    $('#dli5_6_1_21_22').val(response.blockwise_iii_21_22);
                }
                if (response.blockwise_iii_22_23 != null && response.blockwise_iii_22_23 != "") {
                    $('#dli5_6_1_22_23').val(response.blockwise_iii_22_23);
                }
                if (response.blockwise_iii_23_24 != null && response.blockwise_iii_23_24 != "") {
                    $('#dli5_6_1_23_24').val(response.blockwise_iii_23_24);
                }
                if (response.blockwise_iii_24_25 != null && response.blockwise_iii_24_25 != "") {
                    $('#dli5_6_1_24_25').val(response.blockwise_iii_24_25);
                }

                if (response.blockwise_iii_cumulative != null && response.blockwise_iii_cumulative != "") {
                    $('#dli5_6_1_cumulative').val(response.blockwise_iii_cumulative);
                }


            }
            if (response == "NO") {

                $('#dli5_6_1_baseline').val('');
                $('#dli5_6_1_20_21').val('');
                $('#dli5_6_1_21_22').val('');
                $('#dli5_6_1_22_23').val('');
                $('#dli5_6_1_23_24').val('');
                $('#dli5_6_1_24_25').val('');
                $('#dli5_6_1_cumulative').val('');

            }

        }
    });
}

//function baselinedata_geting() {
//    var res = Session_StateName.toUpperCase();
//    $.ajax({
//        type: 'GET',
//        contentType: 'application/json; chatset=utf-8',
//        url: '/Dashboard/baselinedata_geting',
//        data: { 'StateName': res },
//        dataType: 'JSON',
//        success: function (data) {

//            if (data == "Logout") {
//                window.location = "/WspNew/WSP_GWM_HOME";

//            }
//            $('#dli3_4_20_21').val('');
//            $('#dli3_4_baseline').val("");


//            if (data.length != 0) {
//                $('#dli3_4_baseline').val(data.length);
//                $('#dli3_4_20_21').val(data.length);
//            } else {
//                $('#dli3_4_baseline').val('0');
//                $('#dli3_4_20_21').val('0');
//            }

//        }
//    });
//}

//post ajax


function admin_FrameWork_Matrix_Info() {
    if (Session_StateName != "" && Session_StateName != "0") {
        var obj = {};
        obj.state_name = Session_StateName;
        obj.dli1_1_baseline = $('#dli1_1_baseline').val();
        obj.dli1_1_20_21 = $('#dli1_1_20_21').val();
        obj.dli1_1_21_22 = $('#dli1_1_21_22').val();
        obj.dli1_1_22_23 = $('#dli1_1_22_23').val();
        obj.dli1_1_23_24 = $('#dli1_1_23_24').val();
        obj.dli1_1_24_25 = $('#dli1_1_24_25').val();
        obj.dli1_1_cumulative = $('#dli1_1_cumulative').val();


        obj.dli1_1_1_baseline = $('#dli1_1_1_baseline').val();
        obj.dli1_1_1_20_21 = $('#dli1_1_1_20_21').val();
        obj.dli1_1_1_21_22 = $('#dli1_1_1_21_22').val();
        obj.dli1_1_1_22_23 = $('#dli1_1_1_22_23').val();
        obj.dli1_1_1_23_24 = $('#dli1_1_1_23_24').val();
        obj.dli1_1_1_24_25 = $('#dli1_1_1_24_25').val();
        obj.dli1_1_1_cumulative = $('#dli1_1_1_cumulative').val();


        obj.dli1_1_2_baseline = $('#dli1_1_2_baseline').val();
        obj.dli1_1_2_20_21 = $('#dli1_1_2_20_21').val();
        obj.dli1_1_2_21_22 = $('#dli1_1_2_21_22').val();
        obj.dli1_1_2_22_23 = $('#dli1_1_2_22_23').val();
        obj.dli1_1_2_23_24 = $('#dli1_1_2_23_24').val();
        obj.dli1_1_2_24_25 = $('#dli1_1_2_24_25').val();
        obj.dli1_1_2_cumulative = $('#dli1_1_2_cumulative').val();


        obj.dli2_2_baseline = $('#dli2_2_baseline').val();
        obj.dli2_2_20_21 = $('#dli2_2_20_21').val();
        obj.dli2_2_21_22 = $('#dli2_2_21_22').val();
        obj.dli2_2_22_23 = $('#dli2_2_22_23').val();
        obj.dli2_2_23_24 = $('#dli2_2_23_24').val();
        obj.dli2_2_24_25 = $('#dli2_2_24_25').val();
        obj.dli2_2_cumulative = $('#dli2_2_cumulative').val();

        obj.dli2_2_1_baseline = $('#dli2_2_1_baseline').val();
        obj.dli2_2_1_20_21 = $('#dli2_2_1_20_21').val();
        obj.dli2_2_1_21_22 = $('#dli2_2_1_21_22').val();
        obj.dli2_2_1_22_23 = $('#dli2_2_1_22_23').val();
        obj.dli2_2_1_23_24 = $('#dli2_2_1_23_24').val();
        obj.dli2_2_1_24_25 = $('#dli2_2_1_24_25').val();
        obj.dli2_2_1_cumulative = $('#dli2_2_1_cumulative').val();

        obj.dli2_3_baseline = $('#dli2_3_baseline').val();
        obj.dli2_3_20_21 = $('#dli2_3_20_21').val();
        obj.dli2_3_21_22 = $('#dli2_3_21_22').val();
        obj.dli2_3_22_23 = $('#dli2_3_22_23').val();
        obj.dli2_3_23_24 = $('#dli2_3_23_24').val();
        obj.dli2_3_24_25 = $('#dli2_3_24_25').val();
        obj.dli2_3_cumulative = $('#dli2_3_cumulative').val();

        obj.dli2_3a_baseline = $('#dli2_3a_baseline').val();
        obj.dli2_3a_20_21 = $('#dli2_3a_20_21').val();
        obj.dli2_3a_21_22 = $('#dli2_3a_21_22').val();
        obj.dli2_3a_22_23 = $('#dli2_3a_22_23').val();
        obj.dli2_3a_23_24 = $('#dli2_3a_23_24').val();
        obj.dli2_3a_24_25 = $('#dli2_3a_24_25').val();
        obj.dli2_3a_cumulative = $('#dli2_3a_cumulative').val();


        obj.dli2_3_1_baseline = $('#dli2_3_1_baseline').val();
        obj.dli2_3_1_20_21 = $('#dli2_3_1_20_21').val();
        obj.dli2_3_1_21_22 = $('#dli2_3_1_21_22').val();
        obj.dli2_3_1_22_23 = $('#dli2_3_1_22_23').val();
        obj.dli2_3_1_23_24 = $('#dli2_3_1_23_24').val();
        obj.dli2_3_1_24_25 = $('#dli2_3_1_24_25').val();
        obj.dli2_3_1_cumulative = $('#dli2_3_1_cumulative').val();


        obj.dli2_3_1a_baseline = $('#dli2_3_1a_baseline').val();
        obj.dli2_3_1a_20_21 = $('#dli2_3_1a_20_21').val();
        obj.dli2_3_1a_21_22 = $('#dli2_3_1a_21_22').val();
        obj.dli2_3_1a_22_23 = $('#dli2_3_1a_22_23').val();
        obj.dli2_3_1a_23_24 = $('#dli2_3_1a_23_24').val();
        obj.dli2_3_1a_24_25 = $('#dli2_3_1a_24_25').val();
        obj.dli2_3_1a_cumulative = $('#dli2_3_1a_cumulative').val();

        obj.dli3_4_baseline = $('#dli3_4_baseline').val();
        obj.dli3_4_20_21 = $('#dli3_4_20_21').val();
        obj.dli3_4_21_22 = $('#dli3_4_21_22').val();
        obj.dli3_4_22_23 = $('#dli3_4_22_23').val();
        obj.dli3_4_23_24 = $('#dli3_4_23_24').val();
        obj.dli3_4_24_25 = $('#dli3_4_24_25').val();
        obj.dli3_4_cumulative = $('#dli3_4_cumulative').val();


        obj.dli3_4_1_baseline = $('#dli3_4_1_baseline').val();
        obj.dli3_4_1_20_21 = $('#dli3_4_1_20_21').val();
        obj.dli3_4_1_21_22 = $('#dli3_4_1_21_22').val();
        obj.dli3_4_1_22_23 = $('#dli3_4_1_22_23').val();
        obj.dli3_4_1_23_24 = $('#dli3_4_1_23_24').val();
        obj.dli3_4_1_24_25 = $('#dli3_4_1_24_25').val();
        obj.dli3_4_1_cumulative = $('#dli3_4_1_cumulative').val();


        obj.dli3_4_2_baseline = $('#dli3_4_2_baseline').val();
        obj.dli3_4_2_20_21 = $('#dli3_4_2_20_21').val();
        obj.dli3_4_2_21_22 = $('#dli3_4_2_21_22').val();
        obj.dli3_4_2_22_23 = $('#dli3_4_2_22_23').val();
        obj.dli3_4_2_23_24 = $('#dli3_4_2_23_24').val();
        obj.dli3_4_2_24_25 = $('#dli3_4_2_24_25').val();
        obj.dli3_4_2_cumulative = $('#dli3_4_2_cumulative').val();

        obj.dli3_4_3_baseline = $('#dli3_4_3_baseline').val();
        obj.dli3_4_3_20_21 = $('#dli3_4_3_20_21').val();
        obj.dli3_4_3_21_22 = $('#dli3_4_3_21_22').val();
        obj.dli3_4_3_22_23 = $('#dli3_4_3_22_23').val();
        obj.dli3_4_3_23_24 = $('#dli3_4_3_23_24').val();
        obj.dli3_4_3_24_25 = $('#dli3_4_3_24_25').val();
        obj.dli3_4_3_cumulative = $('#dli3_4_3_cumulative').val();

        obj.dli3_4_4_baseline = $('#dli3_4_4_baseline').val();
        obj.dli3_4_4_20_21 = $('#dli3_4_4_20_21').val();
        obj.dli3_4_4_21_22 = $('#dli3_4_4_21_22').val();
        obj.dli3_4_4_22_23 = $('#dli3_4_4_22_23').val();
        obj.dli3_4_4_23_24 = $('#dli3_4_4_23_24').val();
        obj.dli3_4_4_24_25 = $('#dli3_4_4_24_25').val();
        obj.dli3_4_4_cumulative = $('#dli3_4_4_cumulative').val();

        obj.dli4_5_baseline = $('#dli4_5_baseline').val();
        obj.dli4_5_20_21 = $('#dli4_5_20_21').val();
        obj.dli4_5_21_22 = $('#dli4_5_21_22').val();
        obj.dli4_5_22_23 = $('#dli4_5_22_23').val();
        obj.dli4_5_23_24 = $('#dli4_5_23_24').val();
        obj.dli4_5_24_25 = $('#dli4_5_24_25').val();
        obj.dli4_5_cumulative = $('#dli4_5_cumulative').val();

        obj.dli4_5_1_baseline = $('#dli4_5_1_baseline').val();
        obj.dli4_5_1_20_21 = $('#dli4_5_1_20_21').val();
        obj.dli4_5_1_21_22 = $('#dli4_5_1_21_22').val();
        obj.dli4_5_1_22_23 = $('#dli4_5_1_22_23').val();
        obj.dli4_5_1_23_24 = $('#dli4_5_1_23_24').val();
        obj.dli4_5_1_24_25 = $('#dli4_5_1_24_25').val();
        obj.dli4_5_1_cumulative = $('#dli4_5_1_cumulative').val();

        obj.dli5_6_baseline = $('#dli5_6_baseline').val();
        obj.dli5_6_20_21 = $('#dli5_6_20_21').val();
        obj.dli5_6_21_22 = $('#dli5_6_21_22').val();
        obj.dli5_6_22_23 = $('#dli5_6_22_23').val();
        obj.dli5_6_23_24 = $('#dli5_6_23_24').val();
        obj.dli5_6_24_25 = $('#dli5_6_24_25').val();
        obj.dli5_6_cumulative = $('#dli5_6_cumulative').val();

        obj.dli5_6_1_baseline = $('#dli5_6_1_baseline').val();
        obj.dli5_6_1_20_21 = $('#dli5_6_1_20_21').val();
        obj.dli5_6_1_21_22 = $('#dli5_6_1_21_22').val();
        obj.dli5_6_1_22_23 = $('#dli5_6_1_22_23').val();
        obj.dli5_6_1_23_24 = $('#dli5_6_1_23_24').val();
        obj.dli5_6_1_24_25 = $('#dli5_6_1_24_25').val();
        obj.dli5_6_1_cumulative = $('#dli5_6_1_cumulative').val();
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Dliverification/admin_FrameWork_Matrix_Info",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {
                alert(response);
                 if (response == "Successfully Saved") {

                    // Dli_1_Details();
                 }
                else  if (response != "Duplicate data is there" && response != "Successfully Saved" && response != "SessionTimeOut") {

                      window.location = "/Error/DefaultError";   

                }
              
                else {
                    window.location = "/WspNew/WSP_GWM_HOME";
                }

            }
        });
    } else {
        alert("Please Select Statename");
    }
}


                 