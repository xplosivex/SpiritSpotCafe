function getIP(json) {
  var ip = json.ip 
 document.getElementById("IP").value = ip; 
var BlackList = [50.100.86.180,104.249.229.226,99.226.9.0]
if (BlackList.includes(ip)) {
ipblock.style.display='none';
 
}else {
 IpBlock.style.display='none';
}
  }
