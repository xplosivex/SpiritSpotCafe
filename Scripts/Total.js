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
var QQQ = document.getElementById("QQ").value
var RRQ = document.getElementById("RQ").value
var SSQ = document.getElementById("SQ").value
var TTQ = document.getElementById("TQ").value
switch(AAQ) {
  case "0":
    var AE = 0  
    break;
 case "1 Ice Breaker":
    var AE = 1 
    break;
  case "2 Ice Breaker":
  var AE = 2
    break;
 case "3 Ice Breaker":
   var AE = 3
    break;
} 
switch(BBQ) {
  case "0":
    var BE = 0
    break;
 case "1 Body Armor":
    var BE = 2
    break;
  case "2 Body Armor":
  var BE = 4
    break;
 case "3 Body Armor":
   var BE = 6
    break;
} 
switch(CCQ) {
  case "0":
    var CE = 0
    break;
 case "1 Lays":
    var CE = 1
    break;
  case "2 Lays":
  var CE = 2
    break;
 case "3 Lays":
   var CE = 3
    break;
} 
switch(DDQ) {
  case "0":
    var DE = 0
    break;
 case "1 Granola Bar":
    var DE = 0.50
    break;
  case "2 Granola Bar":
  var DE = 1
    break;
 case "3 Granola Bar":
   var DE = 1.50
    break;
} 
switch(EEQ) {
  case "0":
    var EE = 0
    break;
 case "1 Chocolate Milk":
    var EE = 2
    break;
  case "2 Chocolate Milk":
  var EE = 4
    break;
 case "3 Chocolate Milk":
   var EE = 6
    break;
} 
    switch(FFQ) {
  case "0":
    var FE = 0
    break;
 case "1 Cheez-Itz":
    var FE = 1
    break;
  case "2 Cheez-Itz":
  var FE = 2
    break;
 case "3 Cheez-Itz":
   var FE = 3
    break;
}
   switch(GGQ) {
  case "0":
    var GE = 0
    break;
 case "1 Orange Juice":
    var GE = 1.50
    break;
  case "2 Orange Juice":
  var GE = 3.00
    break;
 case "3 Orange Juice":
   var GE = 4.50
    break;
}
      switch(HHQ) {
  case "0":
    var HE = 0
    break;
 case "1 Vitamin Water":
    var HE = 2.50
    break;
  case "2 Vitamin Water":
  var HE = 5.00
    break;
 case "3 Vitamin Water":
   var HE = 7.50
    break;
}
switch(IIQ) {
  case "0":
    var IE = 0
    break;
 case "1 Water Bottle":
    var IE = 1
    break;
  case "2 Water Bottle":
  var IE = 2
    break;
 case "3 Water Bottle":
   var IE = 3
    break;
}
    switch(JJQ) {
  case "0":
    var JE = 0
    break;
 case "1 Chex Mix":
    var JE = 1
    break;
  case "2 Chex Mix":
  var JE = 2
    break;
 case "3 Chex Mix":
   var JE = 3
    break;
}
    switch(KKQ) {
  case "0":
    var KE = 0
    break;
 case "1 Pretzels":
    var KE = 1
    break;
  case "2 Pretzels":
  var KE = 2
    break;
 case "3 Pretzels":
   var KE = 3
    break;
}
    switch(LLQ) {
  case "0":
    var LE = 0
    break;
 case "1 Gold Fish":
    var LE = 1
    break;
  case "2 Gold Fish":
  var LE = 2
    break;
 case "3 Gold Fish":
   var LE = 3
    break;
}
    switch(MMQ) {
  case "0":
    var ME = 0
    break;
 case "1 Animal Crackers":
    var ME = 1
    break;
  case "2 Animal Crackers":
  var ME = 2
    break;
 case "3 Animal Crackers":
   var ME = 3
    break;
}
    switch(NNQ) {
  case "0":
    var NE = 0
    break;
 case "1 AppleSauce":
    var NE = 1
    break;
  case "2 AppleSauce":
  var NE = 2
    break;
 case "3 AppleSauce":
   var NE = 3
    break;
}
    switch(OOQ) {
  case "0":
    var OE = 0
    break;
 case "1 FruitSnacks":
    var OE = 0.50
    break;
  case "2 FruitSnacks":
  var OE = 1
    break;
 case "3 FruitSnacks":
   var OE = 1.50
    break;
}
    switch(PPQ) {
  case "0":
    var PE = 0
    break;
 case "1 Go Gurt":
    var PE = 1
    break;
  case "2 Go Gurt":
  var PE = 2
    break;
 case "3 Go Gurt ":
   var PE = 3
    break;
}
    switch(QQQ) {
  case "0":
    var QE = 0
    break;
 case "1 Nutri Grain":
    var QE = 1
    break;
  case "2 Nutri Grain":
  var QE = 2
    break;
 case "3 Nutri Grain":
   var QE = 3
    break;
}
    switch(RRQ) {
  case "0":
    var RE = 0
    break;
 case "1 Rice Krispeys":
    var RE = 1
    break;
  case "2 Rice Krispeys":
  var RE = 2
    break;
 case "3 Rice Krispeys":
   var RE = 3
    break;
}
    switch(SSQ) {
  case "0":
    var SE = 0
    break;
 case "1 Slim Jim":
    var SE = 0.50
    break;
  case "2 Slim Jim":
  var SE = 1
    break;
 case "3 Slim Jim":
   var SE = 1.50
    break;
}
    switch(TTQ) {
  case "0":
    var TE = 0
    break;
 case "1 Speical K":
    var TE = 1
    break;
  case "2 Speical K":
  var TE = 2
    break;
 case "3 Speical K":
   var TE = 3
    break;
}
    var ExtraS = AAQ + " " + BBQ + " " + CCQ + " " + DDQ + " " + EEQ + " " + FFQ + " " + GGQ + " " + HHQ + " " + IIQ + " " + JJQ + " " + KKQ + " " + LLQ + " " + MMQ + " " + NNQ + " " + OOQ + " " + PPQ + " " + QQQ + " " + RRQ + " " + SSQ + " " + TTQ
   
 
    document.getElementById("ExtraSelect").value = ExtraS.replace(/ 0 /g, '');;
    var TotalK =  AT +  AE + BE + CE + DE + EE + FE + GE + HE + IE + JE + KE + LE + ME + NE + OE + PE + QE + RE + SE + TE
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

