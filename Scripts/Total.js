 setInterval(Total,0)

   function Total(){
    var here = document.getElementById("Type").value 
 if ( here == "Hot Caramel"  || here == "Hot Vanilla" || here == "Iced Caramel" || here  == "Iced Vanilla"  ) {
  var AT = 2
  document.getElementById("ToppingsE").value  = ""
  } else if  ( here == "Smoothie" ) {
   var AT = 0
   var Topp = document.getElementById("ToppingsJ").value 
   document.getElementById("ToppingsE").value  = Topp 
  
  if ( Topp == "Strawberry" ){
  var AT = 3

  }
   if ( Topp == "Strawberry Banana" ){
  var AT = 3
 
  }
    if ( Topp == "Mango" ){
  var AT = 3
 
  }
    if ( Topp == "Naked" ){
  var AT = 2
  
  }
   }   else if  ( here == "None" ) {
   var AT = 0
   document.getElementById("ToppingsE").value  = Topp 
   } else if  ( here == "Hot Chocolate" ) {
   var AT = 1
   } else if  ( here == "Special Request" ) {
    var AT = 0
    document.getElementById("ToppingsE").value  = Topp 
   var FFF = "NDD"
   }
  
 
 var A =  document.getElementById("ExtraA").checked 
 var AAQ = document.getElementById("AQ").value
 var B = document.getElementById("ExtraB").checked
 var C = document.getElementById("ExtraC").checked
var D = document.getElementById("ExtraD").checked
 var E = document.getElementById("ExtraE").checked
  var F = document.getElementById("ExtraF").checked
 var G = document.getElementById("ExtraG").checked
 var H = document.getElementById("ExtraH").checked
 var I = document.getElementById("ExtraI").checked
 var J = document.getElementById("ExtraJ").checked
 var K = document.getElementById("ExtraK").checked
var L = document.getElementById("ExtraL").checked 
var M = document.getElementById("ExtraM").checked 
var N = document.getElementById("ExtraN").checked
var O = document.getElementById("ExtraO").checked
var P = document.getElementById("ExtraP").checked
var Q = document.getElementById("ExtraQ").checked
var R = document.getElementById("ExtraR").checked
var S = document.getElementById("ExtraS").checked
var T = document.getElementById("ExtraT").checked

switch(AAQ) {
  case "0":
    var AE = 1
    break;
 case "1":
    var AE = 1
    break;
  case "2":
  var AE = 2
    break;
 case "3":
   var AE = 3
    break;
} 





     var TotalK =  AT +  AE 
    var TotalT =  "Total: " + "$" + TotalK
    if (FFF == "NDD") {
    var TotalG =  "Total: " + "$" + TotalK + " + Special Request"
    document.getElementById("TotalL").innerHTML = TotalG; 
     document.getElementById("TotalB").innerHTML = TotalG;
     document.getElementById("TotalM").value = TotalG; 
    }else {
     document.getElementById("TotalL").innerHTML = TotalT; 
     document.getElementById("TotalB").innerHTML = TotalT;
     document.getElementById("TotalM").value = TotalT; 
    }
}

