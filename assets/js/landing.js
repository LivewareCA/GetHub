			var now = new Date();
			var hours = now.getHours();

			// 0h to 6h
			if (hours > 13 && hours < 15){
				$('.colour').css({'background-image': 'linear-gradient(to top, #141E30 0%, #243B55 100%)'});
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[dynamic greeting]", "It's late");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace(", Jason!", ", Jason...");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[other]", "You should sleep!");
   				document.getElementById("greeting").innerHTML = res;
			}

			else if (hours > 12 && hours < 13){
				$('.colour').css({'background-image': 'linear-gradient(to top, #F3904F 0%, #3B4371 100%)'});
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[dynamic greeting]", "It's late");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace(", Jason!", ", Jason...");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[other]", "You should sleep!");
   				document.getElementById("greeting").innerHTML = res;
			}

			else if (hours > 7 && hours < 12){
				$('.colour').css({'background-image': 'linear-gradient(to top, #141E30 0%, #354C66 100%)'});
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[dynamic greeting]", "It's late");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace(", Jason!", ", Jason...");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[other]", "You should sleep!");
   				document.getElementById("greeting").innerHTML = res;
			}			

			else if (hours > 13 && hours < 18){
				$('.colour').css({'background-image': 'linear-gradient(to top, #00c6ff 0%, #0072ff 100%)'});
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[dynamic greeting]", "It's late");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace(", Jason!", ", Jason...");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[other]", "You should sleep!");
   				document.getElementById("greeting").innerHTML = res;
			}

			else if (hours > 18 && hours < 21){
				$('.colour').css({'background-image': 'linear-gradient(to top, #141E30 0%, #243B55 100%)'});
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[dynamic greeting]", "It's late");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace(", Jason!", ", Jason...");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[other]", "You should sleep!");
   				document.getElementById("greeting").innerHTML = res;
			}

			else if (hours > 21 && hours < 0){
				$('.colour').css({'background-image': 'linear-gradient(to top, #141E30 0%, #243B55 100%)'});
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[dynamic greeting]", "It's late");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace(", Jason!", ", Jason...");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[other]", "You should sleep!");
   				document.getElementById("greeting").innerHTML = res;
			}

			else {
				$('.colour').css({'background-image': 'linear-gradient(to top, #141E30 0%, #243B55 100%)'});
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[dynamic greeting]", "It's late");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace(", Jason!", ", Jason...");
   				document.getElementById("greeting").innerHTML = res;
				var str = document.getElementById("greeting").innerHTML; 
   				var res = str.replace("[other]", "You should sleep!");
   				document.getElementById("greeting").innerHTML = res;
			}