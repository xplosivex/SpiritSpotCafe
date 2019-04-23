function getIP(json) {
  var ip = json.ip 
 document.getElementById("IP").value = ip; 
var BlackList = []
if (BlackList.includes(ip)) {
ipblock.style.display='none';
 
}else {
 IpBlock.style.display='none';
}
  }
