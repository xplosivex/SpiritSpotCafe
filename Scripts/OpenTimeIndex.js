setInterval(OpenTime,0)
function OpenTime () {
var myDate = new Date();
var hours = myDate.getHours();
var days = myDate.getDay() 
var minutes = myDate.getMinutes()
if (days == 0 || days == 6){

} else {
if ( hours > 6) {
  if (hours < 15){
document.getElementById("TimeUntil").innerHTML = hours - 15 ;
} else {

}
}
}
}
