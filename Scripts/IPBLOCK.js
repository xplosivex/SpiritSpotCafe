          window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;//compatibility for Firefox and chrome
var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
pc.createDataChannel('');//create a bogus data channel
pc.createOffer(pc.setLocalDescription.bind(pc), noop);// create offer and set local description
pc.onicecandidate = function(ice)
{
 if (ice && ice.candidate && ice.candidate.candidate)
 {
  var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
  console.log( myIP); 
     pc.onicecandidate = noop;
      document.getElementById("IP").value = myIP; 

      var BlackList = ['50.100.86.180','104.249.229','226,99.226.9.0','138.197.162.186','10.33.3.163']
      if (BlackList.includes(myIP)) {
IpBlock.style.display='block';
ipblock.style.display='none';
SaveO.style.display='none';
OpenClose.display='none';
}else {
IpBlock.style.display='none';
ipblock.style.display='block';
}
}
 }
