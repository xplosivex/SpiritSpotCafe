var script = document.createElement("script");
script.type = "text/javascript";
var man = new Date(); 
var day = man.getDay() 
var month = man.getMonth()
var year = man.getYear() 
var hour = man.getHours()
var minute = man.getMinutes()
var second = man.getSeconds()
var ver = day * 10 + month * 100 + year * 1000 + hour * 1000 + minute * 100 + second * 10
var srcS = "https://www.spiritspotcafe.com/Scripts/OpenTimeIndex.js" + "?v=" + ver;
script.src = srcS
document.body.appendChild(script);
