setInterval(Total,0)
   function Total(){
    var here = document.getElementById("Type").value 
 if ( here == "Hot Caramel"  || here == "Hot Vanilla" || here == "Iced Caramel" || here  == "Iced Vanilla"  ) {
  var AT = 2
  var TOPA = document.getElementById("ToppingsA").value
  var TOPB = document.getElementById("ToppingsB").value 
  var TOPC = document.getElementById("ToppingsC").value 
  var TOPD = document.getElementById("ToppingsD").value 
var Nop = TOPA + " " + TOPB + " " + TOPC + " " + TOPD 
  document.getElementById("ToppingsE").value  = Nop;
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
case "4 Ice Breaker":
   var AE = 4
   break;
case "5 Ice Breaker":
   var AE = 5
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
   case "4 Body Armor":
   var BE = 8
break;
   case "5 Body Armor":
   var BE = 10
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
case "4 Lays":
   var CE = 4
   break;
case "5 Lays":
   var CE = 5
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
case "4 Granola Bar":
   var DE = 2.00
   break;
case "5 Granola Bar":
   var DE = 2.50
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

       case "4 Chocolate Milk":
   var EE = 8
    break;

 case "5 Chocolate Milk":
   var EE = 10
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
           case "4 Cheez-Itz":
   var FE = 4
    break;
           case "5 Cheez-Itz":
   var FE = 5
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
         case "4 Orange Juice":
   var GE = 5.00
    break;
         case "5 Orange Juice":
   var GE = 5.50
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
            case "4 Vitamin Water":
   var HE = 10.00
    break;
            case "5 Vitamin Water":
   var HE = 12.50
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
      case "4 Water Bottle":
   var IE = 4
    break;
      case "5 Water Bottle":
   var IE = 5
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
           case "4 Chex Mix":
   var JE = 4
    break;
           case "5 Chex Mix":
   var JE = 5
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
          case "4 Pretzels":
   var KE = 4
    break;
          case "5 Pretzels":
   var KE = 5
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
           case "4 Gold Fish":
   var LE = 4
    break;
           case "5 Gold Fish":
   var LE = 5
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
          case "4 Animal Crackers":
   var ME = 4
    break;
          case "5 Animal Crackers":
   var ME = 5
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
          case "4 AppleSauce":
   var NE = 4
    break;
          case "5 AppleSauce":
   var NE = 5
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
          case "4 FruitSnacks":
   var OE = 2.00
    break;
          case "5 FruitSnacks":
   var OE = 2.50
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
 case "3 Go Gurt":
   var PE = 3
    break;
           case "4 Go Gurt":
   var PE = 4
    break;
           case "5 Go Gurt":
   var PE = 5
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
          case "4 Nutri Grain":
   var QE = 4
    break;
          case "5 Nutri Grain":
   var QE = 5
    break;
}
    switch(RRQ) {
  case "0":
    var RE = 0
    break;
 case "1 Rice Krispes":
    var RE = 1
    break;
  case "2 Rice Krispys":
  var RE = 2
    break;
 case "3 Rice Krispys":
   var RE = 3
    break;
          case "4 Rice Krispys":
   var RE = 4
    break;
          case "5 Rice Krispys":
   var RE = 5
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
           case "4 Slim Jim":
   var SE = 2.00
    break;
           case "5 Slim Jim":
   var SE = 2.50
    break;
}
    switch(TTQ) {
  case "0":
    var TE = 0
    break;
 case "1 Special K":
    var TE = 1
    break;
  case "2 Special K":
  var TE = 2
    break;
 case "3 Special K":
   var TE = 3
    break;
          case "4 Special K":
   var TE = 4
    break;
          case "5 Special K":
   var TE = 5
    break;
}
    var ExtraS = AAQ + " " + BBQ + " " + CCQ + " " + DDQ + " " + EEQ + " " + FFQ + " " + GGQ + " " + HHQ + " " + IIQ + " " + JJQ + " " + KKQ + " " + LLQ + " " + MMQ + " " + NNQ + " " + OOQ + " " + PPQ + " " + QQQ + " " + RRQ + " " + SSQ + " " + TTQ
   
var ExtraRep = ExtraS.replace(/ 0 /g, '')
    document.getElementById("ExtraSelect").value =  ExtraRep.replace(/0/g, '');
     var here2N = document.getElementById("Extra2").value 
     if (here2N == "Yes") {
     var TotalK =  AT + AE + BE + CE + DE + EE + FE + GE + HE + IE + JE + KE + LE + ME + NE + OE + PE + QE + RE + SE + TE
     } 
     if (here2N == "No") {
     var TotalK = AT
     }
     
     var TotalT =  "Total: " + "$" + TotalK
    
    if (FFF == "NDD") {
    var TotalG =  "Total: " + "$" + TotalK + " + Special Request"
    document.getElementById("TotalL").innerHTML = TotalG;
     document.getElementById("TotalM").value = TotalG; 
    }else {
     document.getElementById("TotalL").innerHTML = TotalT; 
     document.getElementById("TotalM").value = TotalT; 
    }
}

 function save() {
    var TYPE = document.getElementById("Type").value 
 localStorage.setitem("Drink", TYPE);
 localStorage.setitem("Snack1Value", AE);
 localStorage.setitem("Snack2Value", BE);
 localStorage.setitem("Snack3Value", CE);
 localStorage.setitem("Snack4Value", DE);
 localStorage.setitem("Snack5Value", EE);
 localStorage.setitem("Snack6Value", FE);
 localStorage.setitem("Snack7Value", GE);
 localStorage.setitem("Snack8Value", HE);
 localStorage.setitem("Snack9Value", IE);
 localStorage.setitem("Snack10Value", JE);
 localStorage.setitem("Snack11Value", KE);
 localStorage.setitem("Snack12Value", LE);
 localStorage.setitem("Snack13Value", ME);
 localStorage.setitem("Snack14Value", NE);
 localStorage.setitem("Snack15Value", OE);
 localStorage.setitem("Snack16Value", PE);
 localStorage.setitem("Snack17Value", QE);
 localStorage.setitem("Snack18Value", RE);
 localStorage.setitem("Snack19Value", SE);
 localStorage.setitem("Snack20Value", TE);
 var DrinkSet = localStorage.getItem("Drink");
 var SnackSet1 = localStorage.getItem("Snack1Value");
   document.getElementById("result").innerHTML = DrinkSet;
 }
