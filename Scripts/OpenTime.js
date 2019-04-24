setInterval(OpenTime,0)
function OpenTime () {
var myDate = new Date();
var hours = myDate.getHours();
var days = myDate.getDay() 
if (days == 0 || days == 6){
document.getElementById("NotTime").style.display = "none"
document.getElementById("NoOrderTime").style.display = "block" 
document.getElementById("YesOrderTime").style.display = "none" 
} else {
if ( hours > 6) {
  if (hours < 14){
document.getElementById("NotTime").style.display = "block"
document.getElementById("NoOrderTime").style.display = "none" 
document.getElementById("YesOrderTime").style.display = "block" 
} else {
document.getElementById("NotTime").style.display = "none"
document.getElementById("NoOrderTime").style.display = "block" 
document.getElementById("YesOrderTime").style.display = "none" 
}}}}

