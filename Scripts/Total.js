 setInterval(Total,0)

   function Total(){
    var here = document.getElementById("Type").value 
 if ( here == "Hot Caramel"  || here == "Hot Vanilla" || here == "Iced Caramel" || here  == "Iced Vanilla"  ) {
  var AT = 2
  } else if  ( here == "Smoothie" ) {
   var AT = 3
   }   else if  ( here == "None" ) {
   var AT = 0
   } else if  ( here == "Hot Chocolate" ) {
   var AT = 1
   } else if  ( here == "Special Request" ) {
    var AT = 0
   var FFF = true
   }
 
 var A =  document.getElementById("ExtraA").checked 
 var B = document.getElementById("ExtraB").checked
 var C = document.getElementById("ExtraC").checked
var D = document.getElementById("ExtraC").checked
 var E = document.getElementById("ExtraD").checked
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
if (A == true) {
var AE = 1   
}else{
var AE = 0
}
if (B == true) {
var BE = 2  
}else{
var BE = 0
}
if (C == true) {
var CE = 1  
}else{
var CE = 0
}
if (D == true) {
var DE = 0.50
}else{
var DE = 0
}
if (E == true) {
var EE = 2
}else{
var EE = 0
}
if (F == true) {
var FE = 1
}else{
var FE = 0
}
if (G == true) {
var GE = 1.50
}else{
var GE = 0
}
if (H == true) {
var HE = 2.50
}else{
var HE = 0
}
if (I == true) {
var IE = 1
}else{
var IE = 0
}
if (J == true) {
var JE = 1
}else{
var JE = 0
}
if (K == true) {
var KE = 1
}else{
var KE = 0
}
if (L == true) {
var LE = 1
}else{
var LE = 0
}
if (M == true) {
var ME = 1
}else{
var ME = 0
}
if (N == true) {
var NE = 1
}else{
var NE = 0
}
if (O == true) {
var OE = 0.50
}else{
var OE = 0
}
if (P == true) {
var PE = 1
}else{
var PE = 0
}
if (Q == true) {
var QE = 1
}else{
var QE = 0
}
if (R == true) {
var RE = 1
}else{
var RE = 0
}
if (S == true) {
var SE = 0.50
}else{
var SE = 0
}
if (T == true) {
var TE = 1
}else{
var TE = 0
}
     var TotalK =  AT +  AE + BE + CE + DE + EE + FE + GE + HE + IE + JE + KE + LE + ME + NE + OE + PE + QE + RE + SE + TE
    var TotalT =  "Total: " + "$" + TotalK
    if (FFF == "true") {
    var TotalG =  "Total: " + "$" + TotalK + "Special Request"
    document.getElementById("TotalL").innerHTML = TotalG; 
     document.getElementById("TotalM").value = TotalG; 
    }else {
     document.getElementById("TotalL").innerHTML = TotalT; 
     document.getElementById("TotalM").value = TotalT; 
    }
}

