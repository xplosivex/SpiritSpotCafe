setInterval(OpenTime,0)
function OpenTime () {
var myDate = new Date();
var hours = myDate.getHours()
var days = myDate.getDay() 
var minutes = myDate.getMinutes()
if (days == 0 || days == 6){
 x = 16
  y = 13
var closeHour =  x - hours
var openHour = y - hours
} else {
if ( hours > 6) {
  if (hours < 15){
document.getElementById("TimeUntil").innerHTML = "Spirit Spot Orders Will Close In " + openHour + " Hours" ;
} else {
document.getElementById("TimeUntil").innerHTML = "Spirit Spot Orders Will Open In " + closeHour + " Hours" ;
}
}
}
}
