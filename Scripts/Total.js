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
  
 

 var AAQ = document.getElementById("AQ").value
var BBQ = document.getElementById("BQ").value
var CCQ = document.getElementById("CQ").value
var DDQ = document.getElementById("DQ").value
var EEQ = document.getElementById("EQ").value
var FFQ = document.getElementById("FQ").value
var GGQ = document.getElementById("GQ").value
var HHQ = document.getElementById("HQ").value
var IIQ = document.getElementById("IQ").value
var JJQ = document.getElementById("JQ").value
var KKQ = document.getElementById("KQ").value
var LLQ = document.getElementById("LQ").value
var MMQ = document.getElementById("MQ").value
var NNQ = document.getElementById("NQ").value
var OOQ = document.getElementById("OQ").value
var PPQ = document.getElementById("PQ").value
var RRQ = document.getElementById("RQ").value
var SSQ = document.getElementById("SQ").value
var TTQ = document.getElementById("TQ").value
switch(AAQ) {
  case "0":
    var AE = 0
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
switch(BBQ) {
  case "0":
    var BE = 0
    break;
 case "1":
    var BE = 2
    break;
  case "2":
  var BE = 4
    break;
 case "3":
   var BE = 6
    break;
} 
switch(CCQ) {
  case "0":
    var CE = 0
    break;
 case "1":
    var CE = 1
    break;
  case "2":
  var CE = 2
    break;
 case "3":
   var CE = 3
    break;
} 
switch(DDQ) {
  case "0":
    var DE = 0
    break;
 case "1":
    var DE = 0.50
    break;
  case "2":
  var DE = 1
    break;
 case "3":
   var DE = 1.50
    break;
} 
switch(EEQ) {
  case "0":
    var EE = 0
    break;
 case "1":
    var EE = 2
    break;
  case "2":
  var EE = 4
    break;
 case "3":
   var EE = 6
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

