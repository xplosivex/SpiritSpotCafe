setInterval(OpenTimeIn,30000)
function OpenTimeIn () {
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
    var daysM = now.getDay();
   var ap = "AM";
   if (hour   > 11) { ap = "AM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = hour;   }
   if (minute < 10) { minute =  minute; }
   if (second < 10) { second = second; }
 
  var Minutes = minute - 60
  if (Math.sign(Minutes) == -1){
   Minutes = Minutes * -1  
  }
   var timeString = hour  + ":"  + minute + " " + ap
if (daysM == 0 || daysM == 6){
 var Hours = "Orders Will Open On Monday"  
} else {
 
if(ap == "AM") {
switch(hour){
  case 1:
    var Hours = "1 Hour " + Minutes + " Minutes Until Orders Close" 
    break;
     case 2:
    var Hours =   Minutes + " Minutes Until Orders Close" 
    break;
case 3:
    var Hours = "15 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
 case 4:
    var Hours = "14 Hours " + Minutes + " Minutes Until Orders Open" 
    break; 
  case 5:
    var Hours = "13 Hours " + Minutes + " Minutes Until Orders Open" 
    break;  
    case 6:
    var Hours = "12 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
    case 7:
    var Hours = "11 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
    case 8:
    var Hours = "10 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
    case 9:
    var Hours = "9 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
    case 10:
    var Hours = "8 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
    case 11:
    var Hours = "7 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
    case 12:
   var Hours = "6 Hours " + Minutes + " Minutes Until Orders Open" 
    break;

}
}

if(ap == "PM"){
switch(hour) {
 case 1:
    var Hours = "5 Hours " + Minutes + " Minutes Until Orders Open" 
    break;   
 case 2:
    var Hours = "4 Hours " + Minutes + " Minutes Until Orders Open" 
    break;  
 case 3:
    var Hours = "3 Hours " + Minutes + " Minutes Until Orders Open" 
    break;   
 case 4:
    var Hours = "2 Hours " + Minutes + " Minutes Until Orders Open" 
    break;  
    case 5:
    var Hours = "1 Hours " + Minutes + " Minutes Until Orders Open" 
    break;
    case 6:
    var Hours =  Minutes + " Minutes Until Orders Open" 
    break;
    case 7:
    var Hours = "7 Hours " + Minutes + " Minutes Until Orders Close" 
    break;
    case 8:
    var Hours = "6 Hours " + Minutes + " Minutes Until Orders Close" 
    break;
    case 9:
    var Hours = "5 Hours " + Minutes + " Minutes Until Orders Close" 
    break;
    case 10:
    var Hours = "4 Hours " + Minutes + " Minutes Until Orders Close" 
    break;
     case 11:
    var Hours = "3 Hours " + Minutes + " Minutes Until Orders Close" 
    break;
     case 12:
    var Hours = "2 Hours " + Minutes + " Minutes Until Orders Close" 
    break;
    

}
}
  document.getElementById("OpenClose").innerHTML = Hours;
}}
OpenTimeIn()
