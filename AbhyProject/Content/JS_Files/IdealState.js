
$(document).ready(function () {
   
    ClearHistory();
});


function ClearHistory() {
    var backlen = history.length;
    history.go(-backlen);
    // window.location.href = "~/Home/LogOut"
}


//ideal state
let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    function logout() {
          window.location = "/Home/LogOut";
    }
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 3600000)
    }
};
window.onload = function () {
    inactivityTime();

}