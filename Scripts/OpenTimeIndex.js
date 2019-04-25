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
