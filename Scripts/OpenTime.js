
   setInterval(OpenTime,20000)
 function OpenTime() {   
     var d = new Date();
      var OpenHours = [6,7,8,9,10,11,12];
      var OpenMinutes = [0,00,01,1,02,2,03,04,4,05,5,06,07,7,08,8,09,9,10,11,12,13,14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,53,54,55,56,57,58,59,60]
     var Hours = d.getHours();
     var Minutes = d.getMinutes();
  var HoursTrue = OpenHours.includes(Hours)
  var MinutesTrue = OpenMinutes.includes(Minutes)
  if (HoursTrue == true && MinutesTrue == true  ){
     document.getElementById("NotTime").style.display = "block"
     document.getElementById("NoOrderTime").style.display = "none" 
     document.getElementById("YesOrderTime").style.display = "block" 
  } else if (HoursTrue == false  && MinutesTrue == false )  {
  document.getElementById("NotTime").style.display = "none"
     document.getElementById("NoOrderTime").style.display = "block" 
     document.getElementById("YesOrderTime").style.display = "none"
     
  }
 }

OpenTime()
