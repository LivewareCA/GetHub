var thetime = new Date();
var hourd = thetime.getHours();

if (hourd >= 0 && hourd < 5){
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    $('.colour').css({'background': 'url(images/night/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("title").innerHTML = res;
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace(", [name]", " Jason");
    document.getElementById("title").innerHTML = res;
    
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

else if (hourd >= 5 && hourd < 11){
    var images = ['1.jpg', '2.jpg', '3.jpg'];
    $('.colour').css({'background': 'url(images/morning/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("title").innerHTML = res;
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace(", [name]", " Jason");
    document.getElementById("title").innerHTML = res;

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

else if (hourd >= 11 && hourd < 17){
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    $('.colour').css({'background': 'url(images/day/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("title").innerHTML = res;
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace(", [name]", " Jason");
    document.getElementById("title").innerHTML = res;
    
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

else if (hourd >= 17 && hourd < 21){
    var images = ['1.jpg', '2.jpg', '3.jpg'];
    $('.colour').css({'background': 'url(images/afterevening/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("title").innerHTML = res;
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace(", [name]", " Jason");
    document.getElementById("title").innerHTML = res;

    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", " Jason,");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "welcome home!");
    document.getElementById("greeting").innerHTML = res;

}

else if (hourd >= 21 && hourd < 24){
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    $('.colour').css({'background': 'url(images/late/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("title").innerHTML = res;
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace(", [name]", " Jason");
    document.getElementById("title").innerHTML = res;

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
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hello");
    document.getElementById("title").innerHTML = res;
    var str = document.getElementById("title").innerHTML; 
    var res = str.replace(", [name]", " Jason");
    document.getElementById("title").innerHTML = res;

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
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];
return days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate();
}

$(document).ready(function() {
  $.simpleWeather({
    location: 'Edmonton, AB',
    woeid: '',
    unit: 'C',
    success: function(weather) {
      html = weather.temp+'&deg;'+weather.units.temp + ' and ' + weather.currently;
      icoo = '<i class="icon-'+weather.code+'"></i>';
      $("#currently").html(html);
      $("#icoo").html(icoo);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
  
 