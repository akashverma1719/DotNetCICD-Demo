
//$('input.Structure').on('change', function () {
//    var checkedValue = $('.Structure:checked').val();
//    alert(checkedValue);
//    $('input.Structure').not(this).prop('checked', false);
//});
// captch code here
$(function () {
    $("#btnSubmit").click(function () {

        Checking();

    });
});
function refress() {
    var img = document.getElementById("captchaimg");
    img.src = "/Contact/GetCaptchaImage?query=" + Math.random();
}



$(document).ready(function () {
    Get_Training_Working_Events_Info();
    $('#other_state_name').hide();
});

function Feedback_State_Chnage() {

    var state_name = $('#state_name').val();

    if (state_name != "0") {

        if (state_name == "Other") {
            $('#other_state_name').show();
        } else {
            $('#other_state_name').hide();
        }
    } else {
        alert("Please Select StateName");
    }
}

var strcuture_of_course = "";
var strcuture_of_course_rating = "";
var course_material = "";
var course_material_rating = "";
var teaching_faculty = "";
var teaching_faculty_rating = "";
var partical_session = "";
var partical_session_rating = "";
var food_quality_logging_facility = "";
var food_quality_logging_facility_rating = "";
var interaction_with_faculty = "";
var interaction_with_faculty_rating = "";
var unless_of_course = "";
var unless_of_course_rating = "";
var overall_impression = "";
var overall_impression_rating = "";

function Structure_of_Cource(value1, rating) {

    strcuture_of_course = value1;
    strcuture_of_course_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "structure" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "structure" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}

function Course_Material(value1, rating) {
    course_material = value1;
    course_material_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "Course_Material" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "Course_Material" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}


function Teaching_Faculty(value1, rating) {
    teaching_faculty = value1;
    teaching_faculty_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "Teaching_Faculty" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "Teaching_Faculty" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}

function Practical_session(value1, rating) {
    partical_session = value1;
    partical_session_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "Practical_session" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "Practical_session" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}


function Food_Quality(value1, rating) {
    food_quality_logging_facility = value1;
    food_quality_logging_facility_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "Food_Quality" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "Food_Quality" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}

function Interaction_with_Faculty(value1, rating) {
    interaction_with_faculty = value1;
    interaction_with_faculty_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "Interaction_with_Faculty" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "Interaction_with_Faculty" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}

function Usefulness_of_Course(value1, rating) {
    unless_of_course = value1;
    unless_of_course_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "Usefulness_of_Course" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "Usefulness_of_Course" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}

function Overall_impression(value1, rating) {
    overall_impression = value1;
    overall_impression_rating = rating;

    for (var i = 0; i <= 10; i++) {
        if (i == rating) {
            var strir = "Overall_impression" + rating;
            $("#" + strir).prop('checked', true);
        } else {
            var strir = "Overall_impression" + i;
            $("#" + strir).prop('checked', false);
        }
    }
}


function Save_Info() {

    var i = 0;

    var participant_name = $('#participant_name').val();
    var participant_address = $('#participant_address').val();
    var state_name = $('#state_name').val();
    var clientCaptcha = $('#clientCaptcha').val();
    var registration_no = $('#registration_no').val();
    
    if (participant_name == "") {
        i = 1;
        alert("Please Enter Participant Name");
        $('#participant_name').focus();
    } else if (state_name == "0") {
        i = 1;
        alert("Please Select StateName");
        $('#state_name').focus();
    }

    else if (clientCaptcha == "") {
        i = 1;
        $('#status').text("Please Enter  Captcha");
        $('#clientCaptcha').focus();
    }


    if (i == 0) {
        var obj = {};

        obj.clientcaptcha = clientCaptcha;
        obj.other_state_name = $('#other_state_name').val();
        obj.participant_name = $('#participant_name').val();
        obj.participant_address = $('#participant_address').val();
        obj.state_name = $('#state_name').val();
        obj.program_title = $('#program_title').val();
        obj.venue = $('#venue').val();
        obj.start_date = $('#start_date').val();
        obj.duration = $('#duration').val();
        obj.strcuture_of_course = strcuture_of_course;
        obj.strcuture_of_course_rating = strcuture_of_course_rating;
        obj.course_material = course_material;
        obj.course_material_rating = course_material_rating;
        obj.teaching_faculty = teaching_faculty;
        obj.teaching_faculty_rating = teaching_faculty_rating;
        obj.partical_session = partical_session;
        obj.partical_session_rating = partical_session_rating;
        obj.food_quality_logging_facility = food_quality_logging_facility;
        obj.food_quality_logging_facility_rating = food_quality_logging_facility_rating;
        obj.interaction_with_faculty = interaction_with_faculty;
        obj.interaction_with_faculty_rating = interaction_with_faculty_rating;
        obj.unless_of_course = unless_of_course;
        obj.unless_of_course_rating = unless_of_course_rating;
        obj.overall_impression = overall_impression;
        obj.overall_impression_rating = overall_impression_rating;
        obj.course_found1 = $('#course_found1').val();
        obj.course_found2 = $('#course_found2').val();
        obj.course_found3 = $('#course_found3').val();
        obj.registration_no = registration_no
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/Contact/Save_FeedBackInfo",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",
            dataType: 'JSON',
            success: function (response) {
                alert(response);

                if (response != "Captcha not Matched" && response != "Captcha is Expired") {
                    $('#participant_name').val("");
                    $('#participant_address').val("");
                    $('#state_name').val("0");
                    $('#course_found1').val('');
                    $('#course_found2').val('');
                    $('#course_found3').val('');
                    $('#program_title').val('');

                    $('#duration').val('');
                    $('#venue').val('');
                    $('#program_title').val("0");
                    $('#start_date').val('');
                    $('#clientCaptcha').val('');
                    for (var i = 0; i <= 10; i++) {
                        var strir = "structure" + i;
                        $("#" + strir).prop('checked', false);

                    }

                    for (var i = 0; i <= 10; i++) {

                        var strir = "Course_Material" + i;
                        $("#" + strir).prop('checked', false);

                    }

                    for (var i = 0; i <= 10; i++) {
                        var strir = "Teaching_Faculty" + i;
                        $("#" + strir).prop('checked', false);

                    }

                    for (var i = 0; i <= 10; i++) {

                        var strir = "Practical_session" + i;
                        $("#" + strir).prop('checked', false);

                    }

                    for (var i = 0; i <= 10; i++) {

                        var strir = "Food_Quality" + i;
                        $("#" + strir).prop('checked', false);

                    }

                    for (var i = 0; i <= 10; i++) {

                        var strir = "Interaction_with_Faculty" + i;
                        $("#" + strir).prop('checked', false);

                    }


                    for (var i = 0; i <= 10; i++) {

                        var strir = "Usefulness_of_Course" + i;
                        $("#" + strir).prop('checked', false);

                    }

                    for (var i = 0; i <= 10; i++) {

                        var strir = "Overall_impression" + i;
                        $("#" + strir).prop('checked', false);

                    }
                }

            }

        });
    }
}





function Get_Training_Working_Events_Info() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/Vendors/Get_Training_Working_Info_feedback',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            
            
            if (response == "Logout") {
                  window.location = "/Home/LogOut";
            }
            var option = '<option value="0">Select Event/Training</option>';
            var ddlst = {};
            var ddlst_array = [];
            if (response.length != 0) {

                for (var j = 0; j < response.length; j++) {

                    if (!ddlst[response[j].p_training_name]) {
                        ddlst_array.push(response[j].p_training_name);
                        ddlst[response[j].p_training_name] = response[j].p_training_name;

                    }

                }

            }

            if (ddlst_array.length != 0) {
                for (var i = 0; i < ddlst_array.length; i++) {
                    option += '<option value="' + ddlst_array[i] + '">' + ddlst_array[i] + '</option>';
                }
            }

            $('#program_title').html(option);

        }
    });
}


