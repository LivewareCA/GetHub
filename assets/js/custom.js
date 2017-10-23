var now = new Date();
var hours = now.getHours();

function updateClock() {
    var currentTime = new Date();
    var currentHoursAP = currentTime.getHours();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    var currentTimeString = currentHours + ":" + currentMinutes;
    $("#time").html(currentTimeString);}
    $(document).ready(function () {
    setInterval(updateClock, 1000);
});

document.getElementById("date").innerHTML = date();

function date() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','October','Nov','Dec'],
    days = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];
return days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate() + '.';
}

function updateDate() {
var currentdate = new Date();
var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1) + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
$("#time").html(datetime); 
}


if (hours > 0 && hours < 4){
    $('.colour').css({'background': 'url("images/night.jpg") center center'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "It's late");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", ", Jason...");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "You should sleep!");
    document.getElementById("greeting").innerHTML = res;
}

else if (hours > 4 && hours < 8){
    $('.colour').css({'background': 'url("images/morning.jpg") center center'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Morning");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", ", Jason.");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "You're up early!");
    document.getElementById("greeting").innerHTML = res;
}

else if (hours > 8 && hours < 12){
    $('.colour').css({'background': 'url("images/latemorn.jpg") center center'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Good morning");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", " Jason,");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", " have a good day!");
    document.getElementById("greeting").innerHTML = res;
}

else if (hours > 12 && hours < 17){
    $('.colour').css({'background': 'url("images/sky_alt.jpg") center center'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", " Jason,");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "have a good day!");
    document.getElementById("greeting").innerHTML = res;
}

else if (hours > 17 && hours < 21){
    $('.colour').css({'background': 'url("images/dusk.jpg") center center'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", " Jason,");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "have a good day!");
    document.getElementById("greeting").innerHTML = res;

}

else if (hours > 21 && hours < 0){
    $('.colour').css({'background-image': 'linear-gradient(to top, #000428 0%, #004e92 100%)'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Greetings.");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", "");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "Eat, relax, and play games.");
    document.getElementById("greeting").innerHTML = res;
}

else {
    $('.colour').css({'background-image': 'linear-gradient(to top, #8e9eab 0%, #eef2f3 100%)'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Uh oh...");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", " I'm broken Jason!");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "Fix me!");
    document.getElementById("greeting").innerHTML = res;
}

