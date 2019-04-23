function getIP(json) {
  var ip = json.ip 
 document.getElementById("IP").value = ip; 
var BlackList = ["50.100.86.180","104.249.229.226","74.221.46.175"]
if (BlackList.includes(ip)) {
ipblock.style.display='none';
 
}else {
 IpBlock.style.display='none';
}
  }
