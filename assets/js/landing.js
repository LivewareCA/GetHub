var now = new Date();
var hours = now.getHours();

if (hours > 0 && hours < 5){
    $('.colour').css({'background-image': 'linear-gradient(to top, blue 0%, #243B55 100%)'});
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

else if (hours > 5 && hours < 8){
    $('.colour').css({'background-image': 'linear-gradient(to top, #F3904F 0%, #3B4371 100%)'});
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

else if (hours > 8 && hours < 11){
    $('.colour').css({'background-image': 'linear-gradient(to top, #3B4371 0%, #3498db 100%)'});
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

else if (hours > 11 && hours < 12){
    $('.colour').css({'background-image': 'linear-gradient(to top, #00c6ff 0%, #0072ff 100%)'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Hi");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", ", Jason!");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "It's almost lunch time!");
    document.getElementById("greeting").innerHTML = res;
}

else if (hours > 12 && hours < 18){
    $('.colour').css({'background-image': 'linear-gradient(to top, #1c92d2 0%, #2B32B2 100%)'});
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

else if (hours > 18 && hours < 20){
    $('.colour').css({'background-image': 'linear-gradient(to top, #ED4264 0%, #FFEDBC 100%)'});
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[dynamic greeting]", "Good Evening");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace(", [name]", ", Jason.");
    document.getElementById("greeting").innerHTML = res;
    var str = document.getElementById("greeting").innerHTML; 
    var res = str.replace("[other]", "");
    document.getElementById("greeting").innerHTML = res;
}

else if (hours > 20 && hours < 0){
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