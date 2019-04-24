var script = document.createElement("script");
script.type = "text/javascript";
var ver = Math.floor((Math.random() * 100) + 1);
var srcS = "https://www.spiritspotcafe.com/Scripts/OpenTime.js" + "?v=" + ver;
script.src = srcS
document.body.appendChild(script);
