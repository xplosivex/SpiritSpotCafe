 setInterval(OpenTime,0)
 function OpenTime() {   
     var d = new Date();
      var OpenHours = [6,7,8,9,10,11,12,13];
      var OpenMinutes = [0,00,01,1,02,2,03,04,4,05,5,06,07,7,08,8,09,9,10,11,12,13,14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,53,54,55,56,57,58,59,60]
     var Hours = d.getHours();
     var Minutes = d.getMinutes();
  
  if (OpenHours.includes(Hours) && OpenMinutes.includes(Minutes)){
  
  NotTime.style.display='none'
   NoOrderTime.style.display='block';
  } else if (!OpenHours.includes(Hours) && !OpenMinutes.includes(Minutes))  {
     YesOrderTime.style.display='block';
 NoOrderTime.style.display='none';
      
  
  }
 }
OpenTime()
