var dueDate = new Date("17 Juli 2023 00:00:00").getTime();
var a = setInterval(function(){
    var oneMinute = 1000*60;
    var newestDate = new Date().getTime();
    var diff = dueDate - newestDate;
    var days = Math.floor(diff / (oneMinute * 60 * 24));
    var hours = Math.floor((diff % (oneMinute * 60 * 24)) / (oneMinute*60));
    var minutes = Math.floor((diff % (oneMinute*60)) / (oneMinute));
    var seconds = Math.floor((diff % (oneMinute)) / 1000);

    var updateDays = document.getElementById("Days");
    var updateHours = document.getElementById("Hours");
    var updateMinutes = document.getElementById("Minutes");
    var updateSeconds =document.getElementById("Seconds");
    updateDays.innerHTML= days;
    updateHours.innerHTML = hours;
    updateMinutes.innerHTML = minutes;
    updateSeconds.innerHTML = seconds;

    if(diff < 0){
        clearInterval(a);
        updateDays.innerHTML = "00";
        updateHours.innerHTML = "00";
        updateMinutes.innerHTML = "00";
        updateSeconds.innerHTML = "00";
    }
},1000)