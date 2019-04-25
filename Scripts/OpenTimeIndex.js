setInterval(OpenTime,30000)
function OpenTime () {
var myDate = new Date();
var hours = 19
var days = myDate.getDay() 
var minutes = myDate.getMinutes()
if (days == 0 || days == 6){
var x = 16
var  y = 13


} else {
if ( hours > 6) {
  if (hours < 15){
document.getElementById("TimeUntil").innerHTML = 15 - hours;
} else {
document.getElementById("TimeUntil").innerHTML = hours - 15 ;
}
}
}
}

   var now    = new Date();
   var hour   = 23
   var minute = now.getMinutes();
   var second = now.getSeconds();
   var ap = "AM";
   if (hour   > 11) { ap = "PM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = hour;   }
   if (minute < 10) { minute =  minute; }
   if (second < 10) { second = + second; }
   var timeString = hour  + ":"  + minute + " " + ap

if(ap == "AM") {
switch(hour){
  case 1:
    var Hours = "6 Hours Until Open"
    break;
     case 2:
    var Hours = "5 Hours Until Open"
    break;
case 3:
    var Hours = "4 Hours Until Orders  Open"
    break;
 case 4:
    var Hours = "3 Hours Until Orders  Open"
    break; 
  case 5:
    var Hours = "2 Hours Until Orders  Open"
    break;  
    case 6:
    var Hours = "1 Hours Until Orders  Open"
    break;
    case 7:
    var Hours = "0 Hours Until Orders Open"
    break;
    case 8:
    var Hours = "7 Hours Until Orders Close"
    break;
    case 9:
    var Hours = "6 Hours Until Orders Close"
    break;
    case 10:
    var Hours = "5 Hours Until Orders Close"
    break;
    case 11:
    var Hours = "4 Hours Until Orders Close"
    break;
    case 12:
    var Hours = "3 Hours Until Orders Close"
    break;

}
console.log(Hours)
}
if(timeString.includes("PM")){
switch(hour) {
 case 1:
    var Hours = "2 Hours Until Orders Close"
    break;   
 case 2:
    var Hours = "1 Hours Until Orders Close "
    break;  
 case 3:
    var Hours = "0 Hours Until Orders Close"
    break;   
 case 4:
    var Hours = "15 Hours Until Orders Open"
    break;  
    case 5:
    var Hours = "14 Hours Until Orders Open"
    break;
    case 6:
    var Hours = "13 Hours Until Orders Open"
    break;
    case 7:
    var Hours = "12 Hours Until Orders Open"
    break;
    case 8:
    var Hours = "11 Hours Until Orders Open"
    break;
    case 9:
    var Hours = "10 Hours Until Orders Open"
    break;
    case 10:
    var Hours = "9 Hours Until Orders Open"
    break;
     case 11:
    var Hours = "8 Hours Until Orders Open"
    break;
     case 12:
    var Hours = "7 Hours Until Orders Open"
    break;
    
}
  console.log(Hours)

}
