
setTimeout(carousel,0)
var I = 0;
setInterval(carousel,3500)
function carousel() {
if (I > 2) {
I = 0
} else {
I++
}
switch(I) {
case 0:
var B = "zero";
break;
case 1:
var B = "one";
break;
case 2:
var B = "two";
break;
case 3:
var B = "three";
break;
}
document.getElementById("Rotate").className = B; 
}
