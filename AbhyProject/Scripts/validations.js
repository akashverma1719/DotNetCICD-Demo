
/** ========================= Miyan : 29/08/2023 ====================== */
/**
   * Initiate Bootstrap validation check
   */
//var needsValidation = document.querySelectorAll('.needs-validation')

//Array.prototype.slice.call(needsValidation)
//    .forEach(function (form) {
//        form.addEventListener('submit', function (event) {
//            if (!form.checkValidity()) {
//                event.preventDefault()
//                event.stopPropagation()
//            }

//            form.classList.add('was-validated')
//        }, false)
//    })

//// Validate EmailId
//$('#email').focusout(function () {
//    var email = $('#email').val();
//    var filter = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
//    if (email != "") {
//        if (!filter.test(email)) {
//            $("#msgemail").text("Not a valid e-mail address, please enter valid e-mail address.");
//            $('#msgemail').css("display", "block");
//            $("#email").val("");
//            $("#email").focus();
//            return false;
//        }
//        else {
//            $('#msgemail').css("display", "none");
//            return false;
//        }
//    }
//    else {
//        $("#msgemail").text("Please enter email!");
//        $('#msgemail').css("display", "block");
//        return false;
//    }
//});

//// Allow Only Numbers
//$("#contactnumber").keypress(function (e) {

//    var charCode = (e.which) ? e.which : event.keyCode
//    if (String.fromCharCode(charCode).match(/[^0-9]/g))
//        return false;
//});

//// Validate MobileNo
//$('#contactnumber').focusout(function () {
//    var phoneNumber = $('#contactnumber').val();
//    if (phoneNumber > 0) {
//        var filter = /^[6-9]{1}[0-9]{9}/;

//        if (phoneNumber.length == 10) {
//            if (!filter.test(phoneNumber)) {
//                $("#msgmobile").text('Not a valid mobile-number, please enter valid mobile-number.');
//                $('#msgmobile').css("display", "block");
//                $("#contactnumber").val("");
//                $("#contactnumber").focus();
//                return false;
//            }
//            else {
//                $('#msgmobile').css("display", "none");
//                return false;
//            }
//        }
//        else {
//            $("#msgmobile").text('Please put 10 digit mobile number.');
//            $("#msgmobile").css("display", "block");
//            $("#contactnumber").val("");
//            $("#contactnumber").focus();
//            return false;
//        }
//    }
//    else {
//        $("#msgmobile").text("Please enter contact number!");
//        $("#msgmobile").css("display", "block");
//        return false;
//    }
//});

/** ========================= Miyan : 29/08/2023 ====================== */




$('body').on('keypress', ".integer", function (event) {
    //if (event.which === 8 || event.keyCode === 39)
    //    return true;
    if ((event.which === 46 || $(this).val().indexOf('.') === -1) && (event.which < 48 || event.which > 57))
        event.preventDefault();
    else {
        return true;
    }
});
$('body').on('keypress', ".alpha", function (e) {
    var key = e.keyCode;
    //if (key === 32 || key === 46) {
    if (key === 32) {
        return true;
    }
    else if (key <= 64 || key >= 123) {
        e.preventDefault();
    }
    else {
        if (96 >= key && key > 90) {
            e.preventDefault();
        }
    }
});

$('body').on('keypress', ".alphanum", function (e) {
    var key = e.keyCode;
    if (key === 32) {
        return true;
    }
    else if ((key < 65 || key > 122) && (event.which < 48 || event.which > 57)) {
        e.preventDefault();
    }
    else {
        if (96 >= key && key > 90) {
            e.preventDefault();
        }
    }
});
$('body').on('keypress', ".alphanumspecial", function (e) {

    var key = e.keyCode;
    if (key === 32) {
        return true;
    }
    else if ((key < 64 || key > 122) && (event.which < 48 || event.which > 57) && (event.which < 35 || event.which > 47)) {
        e.preventDefault();
    }
    else {
        if (96 >= key && key > 90) {
            e.preventDefault();
        }
    }
});
$('body').on('keypress', ".alphaspecial", function (e) {

    var key = e.keyCode;
    if (key === 32) {
        return true;
    }
    else if ((key < 65 || key > 122) && (event.which < 35 || event.which > 47)) {
        e.preventDefault();
    }
    else {
        if (96 >= key && key > 90) {
            e.preventDefault();
        }
    }
});
$('body').on('keypress', ".decimal", function (event) {
    if (event.which === 8 || event.keyCode === 39)
        return true;

    else if ((event.which !== 46 || $(this).val().indexOf('.') !== -1) && (event.which < 48 || event.which > 57))
        event.preventDefault();

});
$('body').on('focusout', ".pan", function (event) {
    var regExp = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/;
    var txtpan = $(this).val();
    if (txtpan.length === 10) {
        if (txtpan.match(regExp)) {
            return true;
        }
        else {
            $(this).focus();
            event.preventDefault();
        }
    }
    else {
        if (txtpan.length === 0) {
            return true;
        }
        else {
            $(this).focus();
            event.preventDefault();
        }
    }

});

$('body').on('focusout', ".mob", function (event) {
    if ($(this).val().trim().length > 0 && $(this).val().trim().length < 10) {
        $(this).focus();
        event.preventDefault();
    }
});
$(".adhar").on("focusout", function (event) {
    if ($(this).val().trim().length > 0 && $(this).val().trim().length < 12) {
        $(this).focus();
        event.preventDefault();
    }
});
$(".mail").on("focusout", function (event) {

    if ($(this).val().trim().length > 0) {

        var filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        //      /^[A-Z0-9._% +-]+@[A-Z0-9.-]+\.[A-Z]{2, 4 }$/i;
        ///^([\w -\.] +)@@((\[[0 - 9]{1,3}\.[0 - 9]{1,3}\.[0 - 9]{1,3}\.)| (([\w -]+\.)+))([a - zA - Z]{2, 4 }|[0 - 9]{1, 3 })(\]?)$ /;
        if (filter.test($(this).val())) {
            return true;
        }
        else {
            console.log("Please enter valid email address");
            $(this).focus();
            $(this).val('');

            event.preventDefault();
        }
    }
});
function chckEmail(email) {
    if (email.trim().length > 0) {

        var filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; //      /^[A-Z0-9._% +-]+@[A-Z0-9.-]+\.[A-Z]{2, 4 }$/i;
        ///^([\w -\.] +)@@((\[[0 - 9]{1,3}\.[0 - 9]{1,3}\.[0 - 9]{1,3}\.)| (([\w -]+\.)+))([a - zA - Z]{2, 4 }|[0 - 9]{1, 3 })(\]?)$ /;
        if (filter.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }
}
function getindiancurrency(x) {
    var afterPoint = '';
    if (x.indexOf('.') > 0)
        afterPoint = x.substring(x.indexOf('.'), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    return res;
}


function checkStrength(password, id) {
    var strength = 0
    if (password.length < 6) {
        $('#' + id).removeClass()
        $('#' + id).addClass('short')
        return 'Too short'
    }
    if (password.length > 7) strength += 1
    // If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
    // If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
    // If it has one special character, increase strength value.
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // If it has two special characters, increase strength value.
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // Calculated strength value, we can return messages
    // If value is less than 2
    if (strength < 2) {
        $('#' + id).removeClass()
        $('#' + id).addClass('weak')
        return 'Weak'
    } else if (strength === 2) {
        $('#' + id).removeClass()
        $('#' + id).addClass('good')
        return 'Good'
    } else {
        $('#' + id).removeClass()
        $('#' + id).addClass('strong')
        return 'Strong'
    }
}