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
   
  store.set('Pickup', { P: document.getElementById("Pickup").value})
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
  document.getElementById("Pickup").value = store.get('Pickup').P
   document.getElementById("Name").value = store.get('Name').N
  document.getElementById("Email").value = store.get('Email').E
   document.getElementById("Type").value = store.get('drink').drink
  var TYPEA = store.get('drink').drink
 
if ( TYPEA == "Hot Caramel"  || TYPEA == "Hot Vanilla" || TYPEA == "Iced Caramel" || TYPEA  == "Iced Vanilla"  ){
    hiddenDiv.style.display='block';
   document.getElementById("ToppingsA").value = store.get('ToppingA').A
    document.getElementById("ToppingsB").value = store.get('ToppingB').B
 document.getElementById("ToppingsC").value = store.get('ToppingC').C
 document.getElementById("ToppingsD").value = store.get('ToppingD').D
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
