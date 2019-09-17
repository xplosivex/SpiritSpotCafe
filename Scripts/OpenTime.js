setInterval(OpenTime,0)
function OpenTime () {
var myDate = new Date();
var hours = myDate.getHours();
var days = myDate.getDay() 
var minutes = myDate.getMinutes()
if (days == 0 || days == 6){
document.getElementById("NotTime").style.display = "block"
SaveO.style.display= "block"
} else {
if ( hours > 6) {
  if (hours < 15){
document.getElementById("NotTime").style.display = "block"

} else {
document.getElementById("NotTime").style.display = "block"
 document.getElementById("SAVED").style.display = "block"
  document.getElementById("SAVEF").style.display = "block"
   document.getElementById("ipblock").style.display = "block"
    document.getElementById("IpBlock").style.display = "none"

}
}
}
}

