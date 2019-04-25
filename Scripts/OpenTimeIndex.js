setInterval(OpenTime,0)
function OpenTime () {
var myDate = new Date();
var hours = 17
var days = myDate.getDay() 
var minutes = myDate.getMinutes()
if (days == 0 || days == 6){

} else {
if ( hours > 6) {
  if (hours < 15){
document.getElementById("TimeUntil").innerHTML = "Spirit Spot Orders Will Close In " + 14 - hours + " Hours" ;
} else {
document.getElementById("TimeUntil").innerHTML = "Spirit Spot Orders Will Open In " + 16 - hours + " Hours" ;
}
}
}
}
