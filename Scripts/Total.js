setInterval(Total,0)
Total();
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

 AAQ = document.getElementById("AQ").value
BBQ = document.getElementById("BQ").value
CCQ = document.getElementById("CQ").value
DDQ = document.getElementById("DQ").value
EEQ = document.getElementById("EQ").value
FFQ = document.getElementById("FQ").value
GGQ = document.getElementById("GQ").value
HHQ = document.getElementById("HQ").value
IIQ = document.getElementById("IQ").value
JJQ = document.getElementById("JQ").value
KKQ = document.getElementById("KQ").value
LLQ = document.getElementById("LQ").value
MMQ = document.getElementById("MQ").value
NNQ = document.getElementById("NQ").value
OOQ = document.getElementById("OQ").value
PPQ = document.getElementById("PQ").value
QQQ = document.getElementById("QQ").value
RRQ = document.getElementById("RQ").value
SSQ = document.getElementById("SQ").value
TTQ = document.getElementById("TQ").value

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
 function Save() {
store.set('Name', {N: document.getElementById("Name").value})
console.log(store.get('Name').N)
store.set('Email', {E: document.getElementById("Email").value})
    console.log(store.get('Email').E)
    var TYPE = document.getElementById("Type").value
    store.set('drink', { drink:TYPE})
    console.log(store.get('drink').drink) 
if ( TYPE == "Hot Caramel"  || TYPE == "Hot Vanilla" || TYPE == "Iced Caramel" || TYPE  == "Iced Vanilla"  ) {
store.set('ToppingA', {A: document.getElementById("ToppingsA").value})
store.set('ToppingB', {B: document.getElementById("ToppingsB").value})
store.set('ToppingC', {C: document.getElementById("ToppingsC").value})
store.set('ToppingD', {D: document.getElementById("ToppingsD").value})
   console.log(store.get('ToppingA').A) 
   console.log(store.get('ToppingB').B) 
   console.log(store.get('ToppingC').C) 
   console.log(store.get('ToppingD').D) 
} else if  ( TYPE == "Smoothie" ) {
store.set('ToppingS', {S: document.getElementById("ToppingsJ").value})
   console.log(store.get('ToppingS').S) 
}
    var Extra = document.getElementById("Extra2").value
store.set('SnackC', { C: document.getElementById("Extra2").value})
    if (Extra == "Yes") {
store.set('Snack1', { one: document.getElementById("AQ").value})
store.set('Snack2', { two: document.getElementById("BQ").value })
store.set('Snack3', { three: document.getElementById("CQ").value })
store.set('Snack4', { four: document.getElementById("DQ").value })
store.set('Snack5', { five: document.getElementById("EQ").value })
store.set('Snack6', { six: document.getElementById("FQ").value })
store.set('Snack7', { seven: document.getElementById("GQ").value })
store.set('Snack8', { eight: document.getElementById("HQ").value })
store.set('Snack9', { nine: document.getElementById("IQ").value })
store.set('Snack10', { ten: document.getElementById("JQ").value })
store.set('Snack11', { eleven: document.getElementById("KQ").value })
store.set('Snack12', { tweleve: document.getElementById("LQ").value })
store.set('Snack13', { thirteen: document.getElementById("MQ").value })
store.set('Snack14', { fourteen: document.getElementById("NQ").value })
store.set('Snack15', { fifteen: document.getElementById("OQ").value })
store.set('Snack16', { sixteen: document.getElementById("PQ").value })
store.set('Snack17', { seventeen: document.getElementById("QQ").value })
store.set('Snack18', { eightteen: document.getElementById("RQ").value })
store.set('Snack19', { nineteen: document.getElementById("SQ").value })
store.set('Snack20', { twenty: document.getElementById("TQ").value })
console.log(store.get('Snack1').one) 
console.log(store.get('Snack2').two)
console.log(store.get('Snack3').three)
    }
    }
function Restore() {
   document.getElementById("Name").value = store.get('Name').N
  document.getElementById("Email").value = store.get('Email').E
   document.getElementById("Type").value = store.get('drink').drink
  var TYPEA = store.get('drink').drink
 
if ( TYPEA == "Hot Caramel"  || TYPEA == "Hot Vanilla" || TYPEA == "Iced Caramel" || TYPEA  == "Iced Vanilla"  ){
    hiddenDiv.style.display='block';
   document.getElementById("ToppingsA").value} = store.get('ToppingA').A
    document.getElementById("ToppingsB").value} = store.get('ToppingB').B
 document.getElementById("ToppingsC").value} = store.get('ToppingC').C
 document.getElementById("ToppingsD").value} = store.get('ToppingD').D
} else if  ( TYPEA == "Smoothie" ) {
 
hiddenDiv3.style.display='block';
document.getElementById("ToppingsJ").value =  store.get('ToppingS').S 
}
   if (store.get('SnackC').C == "Yes"){
  hiddenDiv2.style.display='block';
document.getElementById("Extra2").value = "Yes";
 document.getElementById("AQ").value = store.get('Snack1').one;
 document.getElementById("BQ").value = store.get('Snack2').two;
document.getElementById("CQ").value = store.get('Snack3').three;
document.getElementById("DQ").value = store.get('Snack4').four;
document.getElementById("EQ").value = store.get('Snack5').five;
document.getElementById("FQ").value = store.get('Snack6').six;
document.getElementById("GQ").value = store.get('Snack7').seven;
document.getElementById("HQ").value = store.get('Snack8').eight;
document.getElementById("IQ").value = store.get('Snack9').nine;
document.getElementById("JQ").value = store.get('Snack10').ten;
document.getElementById("KQ").value = store.get('Snack11').eleven;
document.getElementById("LQ").value = store.get('Snack12').tweleve;
document.getElementById("MQ").value = store.get('Snack13').thirteen;
document.getElementById("NQ").value = store.get('Snack14').fourteen;
document.getElementById("OQ").value = store.get('Snack15').fifteen;
document.getElementById("PQ").value = store.get('Snack16').sixteen; 
document.getElementById("QQ").value = store.get('Snack17').seventeen;
document.getElementById("RQ").value = store.get('Snack18').eightteen;
document.getElementById("SQ").value = store.get('Snack19').nineteen;
document.getElementById("TQ").value = store.get('Snack20').twenty;
   }
}
                        
   
