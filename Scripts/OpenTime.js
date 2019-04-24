setInterval(OpenTime,0)
function OpenTime () {
  var myDate = new Date();
  var hours = myDate.getHours();
   var OpenHours = [12103];
  var HTrue = OpenHours.includes(hours)
    if (HTrue = true) {
    document.getElementById("NotTime").style.display = "block"
     document.getElementById("NoOrderTime").style.display = "none" 
     document.getElementById("YesOrderTime").style.display = "block" 
    } else {
      document.getElementById("NotTime").style.display = "none"
     document.getElementById("NoOrderTime").style.display = "block" 
     document.getElementById("YesOrderTime").style.display = "none" 
    }

 }

